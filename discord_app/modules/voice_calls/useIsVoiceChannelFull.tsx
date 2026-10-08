// === Module 10806: useIsVoiceChannelFull ===

// Module 10806 (useIsVoiceChannelFull)
import ChannelUtils from "ChannelUtils" /* 5410 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1096).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVoiceChannelLocked(arg0) {
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
    const fn = function t() {
      let tmp2 = null == closure_0;
      if (!tmp2) {
        tmp2 = !PermissionStore.can(Permissions.CONNECT, tmp);
      }
      return tmp2;
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
}) : (function useIsVoiceChannelLocked(arg0) {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null == closure_0;
    if (!tmp2) {
      tmp2 = !PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return tmp2;
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/useIsVoiceChannelFull.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVoiceChannelFull(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function t() {
      return ChannelUtils.isChannelFull(closure_0, VoiceStateStore, GuildStore);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : (function useIsVoiceChannelFull(arg0) {
  _require = arg0;
  const items = [VoiceStateStore, GuildStore];
  return require("initialize").useStateFromStores(items, () => ChannelUtils.isChannelFull(closure_0, VoiceStateStore, GuildStore));
});
export const useIsVoiceChannelLocked = tmp2;