// discord_app/modules/hexagon_campaign/HexagonCampaignConstants.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import user from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import DisplayNameEffect from "../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import DisplayNameFont from "../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";
import HexagonCampaignDates from "../../../discord_common/js/shared/shared-constants/HexagonCampaignDates.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PremiumTypes = PremiumConstants.PremiumTypes;
const combined = "/quests/special-events/" + "1549285425984831508" + "/enroll";
const HEXAGON = DisplayNameFont.DisplayNameFont.HEXAGON;
const obj2 = { DISPLAY_NAME_STYLE: "display_name_style", CLIENT_THEME: "client_theme", APP_ICON: "app_icon" };
const frozen = Object.freeze({ fontId: HEXAGON, effectId: DisplayNameEffect.DisplayNameEffect.SOLID, colors: [] });
const obj3 = {};
const frozen1 = Object.freeze({
  [obj2.CLIENT_THEME]: "client_theme",
  [obj2.DISPLAY_NAME_STYLE]: "display_name_font",
  [obj2.APP_ICON]: "app_icon",
});
obj3[obj2.DISPLAY_NAME_STYLE] = user.Perk.DISPLAY_NAME_STYLES;
obj3[obj2.CLIENT_THEME] = user.Perk.CLIENT_THEMES;
obj3[obj2.APP_ICON] = user.Perk.APP_ICONS;
const frozen2 = Object.freeze(obj3);
const items = [preloaded_user_settings.BackgroundGradientPresetId.HEXAGON];
const obj = { fontId: HEXAGON, effectId: DisplayNameEffect.DisplayNameEffect.SOLID, colors: [] };
const parsed = Date.parse(HexagonCampaignDates.HEXAGON_CAMPAIGN_START_AT);
const parsed1 = Date.parse(HexagonCampaignDates.HEXAGON_CAMPAIGN_END_AT);
const parsed2 = Date.parse(HexagonCampaignDates.HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT);
const parsed3 = Date.parse(HexagonCampaignDates.HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT);
const frozen3 = Object.freeze({
  [obj2.DISPLAY_NAME_STYLE]: PremiumTypes.TIER_2,
  [obj2.CLIENT_THEME]: PremiumTypes.TIER_2,
  [obj2.APP_ICON]: PremiumTypes.TIER_2,
});
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignConstants.tsx");

export const HEXAGON_SPECIAL_EVENT_ID = "1549285425984831508";
export const HEXAGON_CAMPAIGN_ENROLL_ENDPOINT = combined;
export const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HEXAGON;
export const HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES = frozen;
export const HEXAGON_CAMPAIGN_LEARN_MORE_URL = "https://dis.gd/gtavi-theme-available-in-discord";
export const HEXAGON_CAMPAIGN_AD_CONTENT_ID = "1549285425984831508";
export const HexagonCampaignPerk = obj2;
export const HexagonCampaignPerkAvailability = { HIDDEN: "hidden", LOCKED: "locked", SELECTABLE: "selectable" };
export const HEXAGON_CAMPAIGN_PERK_ANALYTICS_ACTION = frozen1;
export const HEXAGON_CAMPAIGN_PERK_TO_PERK = frozen2;
export const HEXAGON_CAMPAIGN_CLIENT_THEME_PRESET_IDS = new Set(items);
export const HEXAGON_CAMPAIGN_START_AT_MS = parsed;
export const HEXAGON_CAMPAIGN_END_AT_MS = parsed1;
export const HEXAGON_CAMPAIGN_NON_PREMIUM_CUTOFF_AT_MS = parsed2;
export const HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS = parsed3;
export const HEXAGON_CAMPAIGN_PERK_MINIMUM_PREMIUM_TYPE = frozen3;
