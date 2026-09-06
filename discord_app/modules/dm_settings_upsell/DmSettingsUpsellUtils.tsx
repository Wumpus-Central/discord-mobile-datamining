// === Module 17344: DmSettingsUpsellUtils ===

// Module 17344 (DmSettingsUpsellUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellUtils.tsx");

export const trackEvent = function trackEvent(MODAL_DISABLED_DMS, guildId) {
  const obj = { action: MODAL_DISABLED_DMS, guild_id: guildId };
  obj.track(AnalyticEvents.DM_SETTINGS_UPSELL_ACTION, obj);
};
export const DmUpsellActionTypes = { MODAL_VIEWED: "modal_viewed", MODAL_DISMISSED: "modal_dismissed", MODAL_GUILD_SETTINGS_CLICKED: "modal_guild_settings_clicked", SUPPRESSED_BY_COOLDOWN: "suppressed_by_cooldown", MODAL_DISABLED_DMS: "modal_disabled_dms" };