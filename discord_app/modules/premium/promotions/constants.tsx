import set from "set";

const items = ["logitech", "call_of_duty"];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/premium/promotions/constants.tsx");

export const CountryListMode = { BLOCKLIST: "blocklist", ALLOWLIST: "allowlist" };
export const PromotionTypes = { THIRD_PARTY: 0, [0]: "THIRD_PARTY", BOGO: 1, [1]: "BOGO", THIRD_PARTY_DIRECT_FULFILLMENT: 2, [2]: "THIRD_PARTY_DIRECT_FULFILLMENT", THIRD_PARTY_INBOUND: 3, [3]: "THIRD_PARTY_INBOUND", THIRD_PARTY_OUTBOUND: 4, [4]: "THIRD_PARTY_OUTBOUND", MARKETING_MOMENT: 5, [5]: "MARKETING_MOMENT", GIFT_PROMOTION: 6, [6]: "GIFT_PROMOTION", THIRD_PARTY_OUTBOUND_RECURRING: 7, [7]: "THIRD_PARTY_OUTBOUND_RECURRING" };
export const RECURRING_PARTNERS = { steelseries: { id: "steelseries", label: "SteelSeries" }, kontrolfreek: { id: "kontrolfreek", label: "KontrolFreek" }, logitech: { id: "logitech", label: "Logitech" } };
export const STEELSERIES_PARTNER_ID = "steelseries";
export const KONTROLFREEK_PARTNER_ID = "kontrolfreek";
export const LOGITECH_PARTNER_ID = "logitech";
export const CALL_OF_DUTY_PARTNER_ID = "call_of_duty";
export const XBOX_PARTNER_ID = "xbox";
export const YOUTUBE_PARTNER_ID = "youtube";
export const DEDICATED_SURFACE_PARTNER_IDS = set;