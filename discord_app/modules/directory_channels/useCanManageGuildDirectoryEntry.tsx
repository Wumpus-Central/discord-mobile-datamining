// === Module 11949: useCanManageGuildDirectoryEntry ===

// Module 11949 (useCanManageGuildDirectoryEntry)
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  _require = guildId;
  const cResult = require("c").c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId.guildId) {
    const fn = function l() {
      return GuildStore.getGuild(guildId.guildId);
    };
    cResult[1] = guildId.guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores1];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== guildId.channelId) {
    const fn2 = function _() {
      return ChannelStore.getChannel(guildId.channelId);
    };
    cResult[4] = guildId.channelId;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PermissionStore];
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== stateFromStores) {
    const fn3 = function f() {
      return PermissionStore.can(Permissions.ADMINISTRATOR, stateFromStores);
    };
    cResult[7] = stateFromStores;
    cResult[8] = fn3;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[8];
  }
  const tmpResult4 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp12, tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [PermissionStore];
    cResult[9] = items3;
    let tmp16 = items3;
  } else {
    tmp16 = cResult[9];
  }
  if (cResult[10] !== stateFromStores1) {
    const fn4 = function v() {
      return PermissionStore.can(Permissions.MANAGE_MESSAGES, stateFromStores1);
    };
    cResult[10] = stateFromStores1;
    cResult[11] = fn4;
    let tmp18 = fn4;
  } else {
    tmp18 = cResult[11];
  }
  const tmpResult5 = require("initialize");
  const stateFromStores3 = require("initialize").useStateFromStores(tmp16, tmp18);
  let tmp20 = stateFromStores2;
  if (!stateFromStores2) {
    tmp20 = stateFromStores3;
  }
  let tmp21 = stateFromStores2;
  if (!stateFromStores2) {
    tmp21 = stateFromStores3;
  }
  if (cResult[12] === stateFromStores2) {
    if (cResult[13] === tmp20) {
      if (cResult[14] === tmp21) {
        let tmp22 = cResult[15];
      }
      return tmp22;
    }
  }
  const obj2 = { isEntryAdmin: stateFromStores2, canEdit: tmp20, canRemove: tmp21 };
  cResult[12] = stateFromStores2;
  cResult[13] = tmp20;
  cResult[14] = tmp21;
  cResult[15] = obj2;
  tmp22 = obj2;
  const tmpResult6 = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  dependencyMap = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0.guildId));
  const obj = require("initialize");
  const items1 = [closure_2];
  closure_2 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(closure_0.channelId));
  const obj2 = require("initialize");
  const items2 = [PermissionStore];
  let stateFromStores = require("initialize").useStateFromStores(items2, () => PermissionStore.can(Permissions.ADMINISTRATOR, closure_1));
  const obj3 = require("initialize");
  const items3 = [PermissionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_2));
  const obj5 = { isEntryAdmin: stateFromStores, canEdit: null, canRemove: null };
  let tmp3 = stateFromStores;
  if (!stateFromStores) {
    tmp3 = stateFromStores1;
  }
  obj5.canEdit = tmp3;
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  obj5.canRemove = stateFromStores;
  return obj5;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default tmp2;
export const useCanCreateOrAddGuildInDirectory = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return PermissionStore.can(Permissions.SEND_MESSAGES, closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () => PermissionStore.can(Permissions.SEND_MESSAGES, closure_0));
});