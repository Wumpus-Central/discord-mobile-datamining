// discord_app/modules/guild_onboarding/DefaultChannelUtils.tsx
import isSubscriptionGated from "isSubscriptionGated";
import ensureGuildLoaded from "ensureGuildLoaded";
import ME from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

let c5;
let closure_6;
const require = arg1;
({ ChannelTypesSets: c5, Permissions: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_onboarding/DefaultChannelUtils.tsx");

export const useCanChannelBeDefault = function useCanChannelBeDefault(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [isSubscriptionGated, ensureGuildLoaded];
  return _initialize.useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(callback);
    if (null != channel) {
      const GUILD_VOCAL = outer1_5.GUILD_VOCAL;
      if (GUILD_VOCAL.has(channel.type)) {
        let VIEW_CHANNEL = callback(outer1_2[3]).combine(outer1_6.VIEW_CHANNEL, outer1_6.CONNECT);
        const obj = callback(outer1_2[3]);
      }
      let isChannelGatedResult = outer1_3.isChannelGated(closure_0, callback);
      if (!isChannelGatedResult) {
        isChannelGatedResult = callback(outer1_2[5]).canEveryoneRole(VIEW_CHANNEL, channel);
        const obj2 = callback(outer1_2[5]);
      }
      return isChannelGatedResult;
    }
    VIEW_CHANNEL = outer1_6.VIEW_CHANNEL;
  });
};
export const canChannelBeDefault = function canChannelBeDefault(guild_id, id) {
  channel = channel.getChannel(id);
  if (null != channel) {
    const GUILD_VOCAL = constants.GUILD_VOCAL;
    if (GUILD_VOCAL.has(channel.type)) {
      let VIEW_CHANNEL = importAll(506).combine(constants2.VIEW_CHANNEL, constants2.CONNECT);
      const obj2 = importAll(506);
    }
    let isChannelGatedResult = channelGated.isChannelGated(guild_id, id);
    if (!isChannelGatedResult) {
      isChannelGatedResult = importAll(3994).canEveryoneRole(VIEW_CHANNEL, channel.getChannel(id));
      const obj3 = importAll(3994);
    }
    return isChannelGatedResult;
  }
  VIEW_CHANNEL = constants2.VIEW_CHANNEL;
};