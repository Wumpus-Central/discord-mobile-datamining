// === Module 7102: DefaultChannelUtils ===

// Module 7102 (DefaultChannelUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import PermissionUtilsAll from "PermissionUtils" /* 4204 */;
import GatedChannelStore from "GatedChannelStore" /* 2013 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const require = fn;
const Constants = fn(1074);
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/DefaultChannelUtils.tsx");

export const useCanChannelBeDefault = function useCanChannelBeDefault(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [GatedChannelStore, ChannelStore];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_1);
    if (null != channel) {
      const GUILD_VOCAL = constants.GUILD_VOCAL;
      if (GUILD_VOCAL.has(channel.type)) {
        let VIEW_CHANNEL = BigFlagUtilsAll.combine(constants2.VIEW_CHANNEL, constants2.CONNECT);
      }
      let isChannelGatedResult = GatedChannelStore.isChannelGated(closure_0, closure_1);
      if (!isChannelGatedResult) {
        isChannelGatedResult = PermissionUtilsAll.canEveryoneRole(VIEW_CHANNEL, channel);
      }
      return isChannelGatedResult;
    }
    VIEW_CHANNEL = constants2.VIEW_CHANNEL;
  });
};
export const canChannelBeDefault = function canChannelBeDefault(guild_id, id) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const GUILD_VOCAL = constants.GUILD_VOCAL;
    if (GUILD_VOCAL.has(channel.type)) {
      let VIEW_CHANNEL = BigFlagUtilsAll.combine(constants2.VIEW_CHANNEL, constants2.CONNECT);
    }
    let isChannelGatedResult = GatedChannelStore.isChannelGated(guild_id, id);
    if (!isChannelGatedResult) {
      isChannelGatedResult = PermissionUtilsAll.canEveryoneRole(VIEW_CHANNEL, ChannelStore.getChannel(id));
    }
    return isChannelGatedResult;
  }
  VIEW_CHANNEL = constants2.VIEW_CHANNEL;
};