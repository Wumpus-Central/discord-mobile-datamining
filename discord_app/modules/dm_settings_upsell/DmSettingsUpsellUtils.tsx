// === Module 17497: DmSettingsUpsellUtils ===

// Module 17497 (DmSettingsUpsellUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellUtils.tsx");

export const trackEvent = function trackEvent(MODAL_DISABLED_DMS, guildId) {
  AnalyticsUtilsDefault.track(AnalyticEvents.DM_SETTINGS_UPSELL_ACTION, { action: MODAL_DISABLED_DMS, guild_id: guildId });
};
export const DmUpsellActionTypes = { MODAL_VIEWED: "modal_viewed", MODAL_DISMISSED: "modal_dismissed", MODAL_GUILD_SETTINGS_CLICKED: "modal_guild_settings_clicked", SUPPRESSED_BY_COOLDOWN: "suppressed_by_cooldown", MODAL_DISABLED_DMS: "modal_disabled_dms" };