// === Module 6878: canChannelUseSoundboard ===

// Module 6878 (canChannelUseSoundboard)
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
({ ChannelTypesSets: hasOwnProperty, Permissions: metroRequire } = Constants);
function canChannelUseSoundboard(type) {
  if (null == type) {
    return false;
  } else {
    const CALLABLE = hasOwnProperty.CALLABLE;
    if (CALLABLE.has(type.type)) {
      return true;
    } else {
      const canResult = PermissionStore.can(metroRequire.USE_SOUNDBOARD, type);
      const canResult1 = PermissionStore.can(metroRequire.SPEAK, type);
      const tmp6 = type.isGuildVoiceOrThread() && canResult && canResult1;
      return tmp6;
    }
  }
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let guildVoiceOrThread;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let flag = false;
      if (null != guildVoiceOrThread) {
        const CALLABLE = hasOwnProperty.CALLABLE;
        flag = true;
        if (!CALLABLE.has(guildVoiceOrThread.type)) {
          const canResult = PermissionStore.can(metroRequire.USE_SOUNDBOARD, guildVoiceOrThread);
          const canResult1 = PermissionStore.can(metroRequire.SPEAK, guildVoiceOrThread);
          flag = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && canResult1;
          guildVoiceOrThread.isGuildVoiceOrThread() && canResult && canResult1;
        }
      }
      return flag;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let guildVoiceOrThread;
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let flag = false;
    if (null != guildVoiceOrThread) {
      const CALLABLE = hasOwnProperty.CALLABLE;
      flag = true;
      if (!CALLABLE.has(guildVoiceOrThread.type)) {
        const canResult = PermissionStore.can(metroRequire.USE_SOUNDBOARD, guildVoiceOrThread);
        const canResult1 = PermissionStore.can(metroRequire.SPEAK, guildVoiceOrThread);
        flag = guildVoiceOrThread.isGuildVoiceOrThread() && canResult && canResult1;
        guildVoiceOrThread.isGuildVoiceOrThread() && canResult && canResult1;
      }
    }
    return flag;
  }, items1);
});
const result = size.fileFinishedImporting("modules/soundboard/canChannelUseSoundboard.tsx");

export default canChannelUseSoundboard;
export const canSelectedVoiceChannelUseSoundboard = function canSelectedVoiceChannelUseSoundboard() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  let flag = false;
  if (null != channel) {
    const CALLABLE = hasOwnProperty.CALLABLE;
    flag = true;
    if (!CALLABLE.has(channel.type)) {
      const canResult = PermissionStore.can(metroRequire.USE_SOUNDBOARD, channel);
      const canResult1 = PermissionStore.can(metroRequire.SPEAK, channel);
      flag = channel.isGuildVoiceOrThread() && canResult && canResult1;
      channel.isGuildVoiceOrThread() && canResult && canResult1;
    }
  }
  return flag;
};
export const useCanChannelUseSoundboard = tmp3;