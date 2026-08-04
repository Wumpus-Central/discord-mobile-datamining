// discord_app/modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx
import noop from "noop";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export const useLogPowerupModalOpened = function useLogPowerupModalOpened(guildId, powerup, DEACTIVATE) {
  let closure_0 = guildId;
  let closure_1 = powerup;
  const React = DEACTIVATE;
  const items = [DEACTIVATE, guildId, powerup.skuId];
  const effect = React.useEffect(() => {
    let obj = guildId(powerup[2]);
    obj = { type: noop, sku_id: powerup.skuId, guild_id: guildId };
    obj.track(outer1_3.OPEN_MODAL, obj);
  }, items);
};