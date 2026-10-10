// === Module 7086: canChannelUseSoundboard ===

// Module 7086 (canChannelUseSoundboard)
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1085);
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
const ReactCompilerGating = fn(558);
function canChannelUseSoundboard(type) {
  if (null == type) {
    return false;
  } else {
    const CALLABLE = constants.CALLABLE;
    if (CALLABLE.has(type.type)) {
      return true;
    } else {
      const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, type);
      const canResult1 = PermissionStore.can(constants2.SPEAK, type);
      return type.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, type);
    }
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default canChannelUseSoundboard;
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  let flag = false;
  if (null != channel) {
    const CALLABLE = constants.CALLABLE;
    flag = true;
    if (!CALLABLE.has(channel.type)) {
      const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, channel);
      const canResult1 = PermissionStore.can(constants2.SPEAK, channel);
      flag = channel.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, channel);
      const tmp6 = channel.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, channel);
    }
  }
  return flag;
};
export const useCanChannelUseSoundboard = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanChannelUseSoundboard(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let flag = false;
      if (null != guildVoiceOrThread) {
        const CALLABLE = constants.CALLABLE;
        flag = true;
        if (!CALLABLE.has(guildVoiceOrThread.type)) {
          const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, guildVoiceOrThread);
          const canResult1 = PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
          flag = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
          const tmp6 = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
        }
      }
      return flag;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useCanChannelUseSoundboard(arg0) {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let flag = false;
    if (null != guildVoiceOrThread) {
      const CALLABLE = constants.CALLABLE;
      flag = true;
      if (!CALLABLE.has(guildVoiceOrThread.type)) {
        const canResult = PermissionStore.can(constants2.USE_SOUNDBOARD, guildVoiceOrThread);
        const canResult1 = PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
        flag = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
        const tmp6 = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && PermissionStore.can(constants2.SPEAK, guildVoiceOrThread);
      }
    }
    return flag;
  }, items1);
});