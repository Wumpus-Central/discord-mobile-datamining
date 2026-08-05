import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
// discord_app/modules/dm_settings_upsell/DmSettingsUpsellUtils.tsx
import { AnalyticEvents } from "ME";

const result = require("set").fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellUtils.tsx");

export const trackEvent = function trackEvent(MODAL_DISABLED_DMS, guildId) {
  let obj = expandEventProperties;
  obj = { action: MODAL_DISABLED_DMS, guild_id: guildId };
  obj.track(AnalyticEvents.DM_SETTINGS_UPSELL_ACTION, obj);
};
export const DmUpsellActionTypes = { MODAL_VIEWED: "modal_viewed", MODAL_DISMISSED: "modal_dismissed", MODAL_GUILD_SETTINGS_CLICKED: "modal_guild_settings_clicked", SUPPRESSED_BY_COOLDOWN: "suppressed_by_cooldown", MODAL_DISABLED_DMS: "modal_disabled_dms" };