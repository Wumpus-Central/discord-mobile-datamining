// === Module 5350: useCanChannelBeDefault ===

// Module 5350 (useCanChannelBeDefault)
import fromStringAll from "fromString" /* 506 */;
import applyOverwritesAll from "applyOverwrites" /* 4030 */;
import closure_3 from "isSubscriptionGated" /* 1983 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ ChannelTypesSets: c5, Permissions: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_onboarding/DefaultChannelUtils.tsx");

export const useCanChannelBeDefault = function useCanChannelBeDefault(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [closure_3, closure_4];
  return _require(589).useStateFromStores(items, () => {
    const channel = closure_1_4.getChannel(callback);
    if (null != channel) {
      const GUILD_VOCAL = closure_1_5.GUILD_VOCAL;
      if (GUILD_VOCAL.has(channel.type)) {
        let VIEW_CHANNEL = callback(closure_1_2[3]).combine(closure_1_6.VIEW_CHANNEL, closure_1_6.CONNECT);
        const obj = callback(closure_1_2[3]);
      }
      let isChannelGatedResult = closure_1_3.isChannelGated(closure_0, callback);
      if (!isChannelGatedResult) {
        isChannelGatedResult = callback(closure_1_2[5]).canEveryoneRole(VIEW_CHANNEL, channel);
        const obj2 = callback(closure_1_2[5]);
      }
      return isChannelGatedResult;
    }
    VIEW_CHANNEL = closure_1_6.VIEW_CHANNEL;
  });
};
export const canChannelBeDefault = function canChannelBeDefault(guild_id, id) {
  channel = channel.getChannel(id);
  if (null != channel) {
    const GUILD_VOCAL = constants.GUILD_VOCAL;
    if (GUILD_VOCAL.has(channel.type)) {
      let VIEW_CHANNEL = fromStringAll.combine(constants2.VIEW_CHANNEL, constants2.CONNECT);
      const obj2 = fromStringAll;
    }
    let isChannelGatedResult = channelGated.isChannelGated(guild_id, id);
    if (!isChannelGatedResult) {
      isChannelGatedResult = applyOverwritesAll.canEveryoneRole(VIEW_CHANNEL, channel.getChannel(id));
      const obj3 = applyOverwritesAll;
    }
    return isChannelGatedResult;
  }
  VIEW_CHANNEL = constants2.VIEW_CHANNEL;
};