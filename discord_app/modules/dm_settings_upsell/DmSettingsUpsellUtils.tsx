// === Module 17178: trackEvent ===

// Module 17178 (trackEvent)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellUtils.tsx");

export const trackEvent = function trackEvent(MODAL_DISABLED_DMS, guildId) {
  let obj = expandEventPropertiesDefault;
  obj = { action: MODAL_DISABLED_DMS, guild_id: guildId };
  obj.track(AnalyticEvents.DM_SETTINGS_UPSELL_ACTION, obj);
};
export const DmUpsellActionTypes = { MODAL_VIEWED: "modal_viewed", MODAL_DISMISSED: "modal_dismissed", MODAL_GUILD_SETTINGS_CLICKED: "modal_guild_settings_clicked", SUPPRESSED_BY_COOLDOWN: "suppressed_by_cooldown", MODAL_DISABLED_DMS: "modal_disabled_dms" };