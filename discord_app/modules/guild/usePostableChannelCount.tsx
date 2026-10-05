// === Module 16922: usePostableChannelCount ===

// Module 16922 (usePostableChannelCount)
import Constants from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4507 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, can;

let closure_4 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = Constants.Permissions;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let items = GuildChannelStore.getChannels(closure_0)[closure_4];
      if (items == null) {
        items = [];
      }
      return items;
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
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (0 === stateFromStores.length) {
    return 0;
  } else {
    let arr4;
    if (cResult[4] !== stateFromStores) {
      let tmp8;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(channel) {
          channel = channel.channel;
          can = can.can;
          const obj = BigFlagUtilsAll;
          return can(obj.combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), channel);
        };
        cResult[6] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[6];
      }
      const found = stateFromStores.filter(tmp8);
      cResult[4] = stateFromStores;
      cResult[5] = found;
      arr4 = found;
    } else {
      arr4 = cResult[5];
    }
    return arr4.length;
  }
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [GuildChannelStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let items = GuildChannelStore.getChannels(closure_0)[closure_4];
    if (items == null) {
      items = [];
    }
    return items;
  }, items1);
  let num = 0;
  if (0 !== stateFromStores.length) {
    num = stateFromStores.filter((channel) => {
      channel = channel.channel;
      can = can.can;
      const obj = BigFlagUtilsAll;
      return can(obj.combine(constants.SEND_MESSAGES, constants.VIEW_CHANNEL), channel);
    }).length;
  }
  return num;
});
const result = size.fileFinishedImporting("modules/guild/usePostableChannelCount.tsx");

export default tmp2;