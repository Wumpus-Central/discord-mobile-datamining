// discord_app/modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
