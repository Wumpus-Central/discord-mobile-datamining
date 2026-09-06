// === Module 12543: GuildPowerupAnalytics ===

// Module 12543 (GuildPowerupAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
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
    const obj = { type, sku_id: powerup.skuId, guild_id };
    obj.track(AnalyticEvents.OPEN_MODAL, obj);
  }, items);
};