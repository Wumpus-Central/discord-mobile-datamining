// === Module 6790: DefaultChannelUtils ===

// Module 6790 (DefaultChannelUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import GatedChannelStore from "GatedChannelStore" /* 2117 */;
import ChannelStore from "ChannelStore" /* 2065 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/DefaultChannelUtils.tsx");

export const useCanChannelBeDefault = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanChannelBeDefault(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GatedChannelStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp7 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp7);
  }
  const fn = function u() {
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
  };
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function useCanChannelBeDefault(arg0, arg1) {
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
});
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