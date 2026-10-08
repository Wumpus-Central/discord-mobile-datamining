// discord_app/modules/age_assurance/AgeVerificationConstants.tsx
import _modDef3117 from "AgeAssurance.messages.js";
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_GUILD];
const obj = {
  FACIAL_AGE_ESTIMATION: 1,
  [1]: "FACIAL_AGE_ESTIMATION",
  ID_VERIFICATION: 2,
  [2]: "ID_VERIFICATION",
  MODULAR: 3,
  [3]: "MODULAR",
  GOOGLE_WALLET: 9,
  [9]: "GOOGLE_WALLET",
};
const obj2 = {};
const set = new Set(items);
obj2[obj.FACIAL_AGE_ESTIMATION] = { title: _modDef3117["2yLvkS"], description: _modDef3117.eJmat5 };
const obj3 = { title: _modDef3117["2yLvkS"], description: _modDef3117.eJmat5 };
obj2[obj.ID_VERIFICATION] = { title: _modDef3117.dwkwo0, description: _modDef3117.ZdmRwW };
const obj4 = { title: _modDef3117.dwkwo0, description: _modDef3117.ZdmRwW };
obj2[obj.GOOGLE_WALLET] = { title: _modDef3117.Y9sLpR, description: _modDef3117.dah4bF };
const result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationConstants.tsx");

export const FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS = set;
export const TRUSTED_PROVIDERS_URL =
  "https://discord.com/safety/age-assurance-on-discord-vendors-methods-and-your-data";
export const FALLBACK_TEEN_AGE_RANGE = "13-17";
export const AGE_VERIFICATION_MODAL_KEY = "AGE_VERIFICATION_MODAL_KEY";
export const AGE_VERIFICATION_GET_STARTED_MODAL_KEY = "AGE_VERIFICATION_GET_STARTED_MODAL_KEY";
export const AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY = "AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY";
export const MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY = "MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY";
export const MANUAL_REVIEW_FALLBACK_ALERT_KEY = "MANUAL_REVIEW_FALLBACK_ALERT_KEY";
export const MANUAL_REVIEW_PENDING_ALERT_KEY = "MANUAL_REVIEW_PENDING_ALERT_KEY";
export const VerificationVendorName = { K_ID: "K_ID", GOOGLE_WALLET: "GOOGLE_WALLET", INCODE: "INCODE" };
export const VerificationMethod = obj;
export const VERIFICATION_METHOD_TITLE_MAP = obj2;
