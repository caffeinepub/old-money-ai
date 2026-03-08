import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import MixinStorage "blob-storage/Mixin";



actor {
  include MixinStorage();

  // --- Types ---
  type Lead = {
    id : Nat;
    name : Text;
    email : Text;
    phone : ?Text;
    message : Text;
    timestamp : Int;
  };

  type WhatsAppTemplates = {
    leadTemplate : Text;
    coldOutreachTemplate : Text;
    buyerFollowUpTemplate : Text;
  };

  // --- State ---
  let leads = Map.empty<Nat, Lead>();
  var leadIdCounter = 0;
  var interestCounter = 0;

  var whatsappTemplates : WhatsAppTemplates = {
    leadTemplate = "Hi {name}, thanks for your interest in Old Money AI. We'll be in touch soon!";
    coldOutreachTemplate = "Hi, we're Old Money AI - India's first digital + human stylist for men. Interested?";
    buyerFollowUpTemplate = "Hi {name}, thanks for using Old Money AI. We'd love your feedback!";
  };

  // --- Lead Management ---
  public shared ({ caller }) func submitLead(name : Text, email : Text, phone : ?Text, message : Text) : async () {
    let id = leadIdCounter;
    let timestamp = Time.now();
    leadIdCounter += 1;

    let lead : Lead = {
      id;
      name;
      email;
      phone;
      message;
      timestamp;
    };

    leads.add(id, lead);
    interestCounter += 1;
  };

  public query ({ caller }) func getAllLeads() : async [Lead] {
    let leadList = List.empty<Lead>();
    for ((_, lead) in leads.entries()) {
      leadList.add(lead);
    };
    leadList.toArray();
  };

  // --- Interest Counter ---
  public query ({ caller }) func getInterestCount() : async Nat {
    interestCounter;
  };

  // --- WhatsApp Templates ---
  public query ({ caller }) func getWhatsAppTemplates() : async WhatsAppTemplates {
    whatsappTemplates;
  };
};
