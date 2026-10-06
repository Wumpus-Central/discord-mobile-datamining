// === Module 11949: useCanManageGuildDirectoryEntry ===

// Module 11949 (useCanManageGuildDirectoryEntry)
import Constants from "Constants" /* 1085 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, dependencyMap;

const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let stateFromStores;
  let stateFromStores1;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp18;
  let tmp6;
  let tmp8;
  _require = guildId;
  const obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId.guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId.guildId);
    };
    cResult[1] = guildId.guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores1];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guildId.channelId) {
    const fn2 = function _() {
      return ChannelStore.getChannel(guildId.channelId);
    };
    cResult[4] = guildId.channelId;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult4 = require("get initialized");
  stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== stateFromStores) {
    const fn3 = function f() {
      return PermissionStore.can(Permissions.ADMINISTRATOR, stateFromStores);
    };
    cResult[7] = stateFromStores;
    cResult[8] = fn3;
    tmp14 = fn3;
  } else {
    tmp14 = cResult[8];
  }
  const tmpResult5 = require("get initialized");
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp12, tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [PermissionStore];
    cResult[9] = items3;
    tmp16 = items3;
  } else {
    tmp16 = cResult[9];
  }
  if (cResult[10] !== stateFromStores1) {
    const fn4 = function v() {
      return PermissionStore.can(Permissions.MANAGE_MESSAGES, stateFromStores1);
    };
    cResult[10] = stateFromStores1;
    cResult[11] = fn4;
    tmp18 = fn4;
  } else {
    tmp18 = cResult[11];
  }
  const tmpResult6 = require("get initialized");
  const stateFromStores3 = tmpResult6.useStateFromStores(tmp16, tmp18);
  if (cResult[12] === stateFromStores2) {
    if (cResult[13] === (stateFromStores2 || stateFromStores3)) {
      let tmp22;
      if (cResult[14] === (stateFromStores2 || stateFromStores3)) {
        tmp22 = cResult[15];
      }
      return tmp22;
    }
  }
  const obj2 = { isEntryAdmin: stateFromStores2, canEdit: stateFromStores2 || stateFromStores3, canRemove: stateFromStores2 || stateFromStores3 };
  cResult[12] = stateFromStores2;
  cResult[13] = stateFromStores2 || stateFromStores3;
  cResult[14] = stateFromStores2 || stateFromStores3;
  cResult[15] = obj2;
  tmp22 = obj2;
}) : ((arg0) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  dependencyMap = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0.guildId));
  const items1 = [closure_2];
  const obj2 = require("get initialized");
  closure_2 = obj2.useStateFromStores(items1, () => ChannelStore.getChannel(closure_0.channelId));
  const items2 = [PermissionStore];
  const obj3 = require("get initialized");
  let stateFromStores = obj3.useStateFromStores(items2, () => PermissionStore.can(Permissions.ADMINISTRATOR, closure_1));
  const items3 = [PermissionStore];
  const obj4 = require("get initialized");
  const stateFromStores1 = obj4.useStateFromStores(items3, () => PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_2));
  const obj5 = { isEntryAdmin: stateFromStores, canEdit: stateFromStores || stateFromStores1, canRemove: stateFromStores };
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  return obj5;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return PermissionStore.can(Permissions.SEND_MESSAGES, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(Permissions.SEND_MESSAGES, closure_0));
});
const result = size.fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default tmp2;
export const useCanCreateOrAddGuildInDirectory = tmp3;