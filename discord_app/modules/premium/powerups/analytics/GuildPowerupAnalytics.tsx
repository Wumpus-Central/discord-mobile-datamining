// === Module 14102: GuildPowerupAnalytics ===

// Module 14102 (GuildPowerupAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export function useLogPowerupModalOpened(guildId, powerup, DEACTIVATE) {
  const guild_id = guildId;
  noop = DEACTIVATE;
  const items = [DEACTIVATE, guildId, powerup.skuId];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, sku_id: powerup.skuId, guild_id });
  }, items);
}