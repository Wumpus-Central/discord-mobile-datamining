// discord_app/modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { AnalyticEvents } from "../../../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/premium/powerups/analytics/GuildPowerupAnalytics.tsx");

export const ModalType = { DETAIL: "Boost Perk Shop Details", DEACTIVATE: "Boost Perk Shop Disable" };
export const useLogPowerupModalOpened = function useLogPowerupModalOpened(guildId, powerup, DEACTIVATE) {
  closure_0 = guildId;
  closure_1 = powerup;
  const React = DEACTIVATE;
  const items = [DEACTIVATE, guildId, powerup.skuId];
  const effect = React.useEffect(() => {
    guildId(powerup[2]);
    const obj = { type: closure_2, sku_id: powerup.skuId, guild_id: guildId };
    obj.track(AnalyticEvents.OPEN_MODAL, obj);
  }, items);
};