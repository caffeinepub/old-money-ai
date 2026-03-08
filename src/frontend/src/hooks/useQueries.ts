import { useMutation, useQuery } from "@tanstack/react-query";
import type { WhatsAppTemplates } from "../backend.d";
import { useActor } from "./useActor";

export function useGetInterestCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["interestCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getInterestCount();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetWhatsAppTemplates() {
  const { actor, isFetching } = useActor();
  return useQuery<WhatsAppTemplates>({
    queryKey: ["whatsappTemplates"],
    queryFn: async () => {
      if (!actor) {
        return {
          leadTemplate:
            'Hi [Name], thanks for your style quiz! You\'re a "College Starter" type—need navy chinos + loafers for that old money edge.\n\nYour custom pack:\n1. Beige chinos - ₹2.5k [link]\n2. White shirt - ₹1.5k [link]\nTotal: ₹8k for instant upgrade.\n\nFirst 10 get FREE 30-min call + 20% off forever. Reply YES to claim? 📸 Send photo for try-on.',
          coldOutreachTemplate:
            'Hey [Name], saw your post on men\'s fashion. Building AI stylist for "old money" looks—navy blazers, clean fits for Indian guys.\n\nFree quiz + outfit plan? First 10 get stylist call free. Spots filling fast!\n\n[Quiz Link]\n\n- Lucknow-based\n- Shop Myntra/Zara links',
          buyerFollowUpTemplate:
            "[Name], your Pro sub is live! Here's your first pack links.\n\nUpgrade to Elite for stylist video? Or feedback on fits? 😎",
        };
      }
      return actor.getWhatsAppTemplates();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitLead() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      message,
    }: {
      name: string;
      email: string;
      phone: string | null;
      message: string;
    }) => {
      if (!actor) throw new Error("No actor available");
      await actor.submitLead(name, email, phone, message);
    },
  });
}
