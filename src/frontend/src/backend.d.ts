import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone?: string;
}
export interface WhatsAppTemplates {
    leadTemplate: string;
    buyerFollowUpTemplate: string;
    coldOutreachTemplate: string;
}
export interface backendInterface {
    getAllLeads(): Promise<Array<Lead>>;
    getInterestCount(): Promise<bigint>;
    getWhatsAppTemplates(): Promise<WhatsAppTemplates>;
    submitLead(name: string, email: string, phone: string | null, message: string): Promise<void>;
}
