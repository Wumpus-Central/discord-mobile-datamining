// === Module 9475: LiveStageNotificationsUtils ===

// Module 9475 (LiveStageNotificationsUtils)
import Constants from "Constants" /* 1096 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4780 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guild_id;

const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const canResult = null != closure_0 && PermissionStore.can(Permissions.MENTION_EVERYONE, tmp);
      return canResult;
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
  let closure_0;
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const canResult = null != closure_0 && PermissionStore.can(Permissions.MENTION_EVERYONE, tmp);
    return canResult;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  let first;
  let tmp7;
  let tmp8;
  const obj = guild_id(576);
  const cResult = obj.c(4);
  const tmp = guild_id;
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild_id) {
    const fn = function l() {
      return GuildMemberCountStore.getMemberCount(guild_id);
    };
    const items1 = [guild_id];
    cResult[1] = guild_id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  let tmp10 = null == guild_id;
  if (!tmp10) {
    tmp10 = !(null == stateFromStores || stateFromStores > 50000);
    const tmp11 = null == stateFromStores || stateFromStores > 50000;
  }
  return tmp10;
}) : ((guild_id) => {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  const items = [GuildMemberCountStore];
  const items1 = [guild_id];
  const obj = guild_id(504);
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guild_id), items1);
  let tmp3 = null == guild_id;
  if (!tmp3) {
    tmp3 = !(null == stateFromStores || stateFromStores > 50000);
    const tmp4 = null == stateFromStores || stateFromStores > 50000;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/stage_channels/LiveStageNotificationsUtils.tsx");

export const useCanSendStageStartNotification = tmp2;
export const useDefaultSendStartStageNotificationToggle = tmp3;