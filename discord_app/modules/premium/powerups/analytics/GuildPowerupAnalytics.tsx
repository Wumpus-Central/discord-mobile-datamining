// === Module 12039: GuildPowerupAnalytics ===

// Module 12039 (GuildPowerupAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export const useLogPowerupModalOpened = function useLogPowerupModalOpened(guildId, powerup, DEACTIVATE) {
  const guild_id = guildId;
  noop = DEACTIVATE;
  const items = [DEACTIVATE, guildId, powerup.skuId];
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, sku_id: powerup.skuId, guild_id });
  }, items);
};