// === Module 12107: ModalType ===

// Module 12107 (ModalType)
import closure_2 from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export const useLogPowerupModalOpened = function useLogPowerupModalOpened(guildId, powerup, DEACTIVATE) {
  closure_0 = guildId;
  closure_1 = powerup;
  const React = DEACTIVATE;
  const items = [DEACTIVATE, guildId, powerup.skuId];
  const effect = React.useEffect(() => {
    let obj = guildId(powerup[2]);
    obj = { type: closure_2, sku_id: powerup.skuId, guild_id: guildId };
    obj.track(closure_1_3.OPEN_MODAL, obj);
  }, items);
};