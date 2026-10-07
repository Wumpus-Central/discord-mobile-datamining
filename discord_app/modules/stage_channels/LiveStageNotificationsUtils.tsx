// === Module 9488: LiveStageNotificationsUtils ===

// Module 9488 (LiveStageNotificationsUtils)
import GuildMemberCountStore from "GuildMemberCountStore" /* 4786 */;
import PermissionStore from "PermissionStore" /* 4515 */;

const require = fn;
const Permissions = fn(1096).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    const fn = function u() {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MENTION_EVERYONE, tmp);
      }
      return canResult;
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
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.MENTION_EVERYONE, tmp);
    }
    return canResult;
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/LiveStageNotificationsUtils.tsx");

export const useCanSendStageStartNotification = tmp2;
export const useDefaultSendStartStageNotificationToggle = ReactCompilerGating.isReactCompilerEnabled() ? ((guild_id) => {
  const cResult = guild_id(576).c(4);
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberCountStore];
    cResult[0] = items;
    let first = items;
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = guild_id(576);
  const stateFromStores = guild_id(504).useStateFromStores(first, tmp7, tmp8);
  let tmp10 = null == guild_id;
  if (!tmp10) {
    let tmp11 = null == stateFromStores;
    if (!tmp11) {
      tmp11 = stateFromStores > 50000;
    }
    tmp10 = !tmp11;
  }
  return tmp10;
}) : ((guild_id) => {
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  const items = [GuildMemberCountStore];
  const items1 = [guild_id];
  const stateFromStores = guild_id(504).useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(guild_id), items1);
  let tmp3 = null == guild_id;
  if (!tmp3) {
    let tmp4 = null == stateFromStores;
    if (!tmp4) {
      tmp4 = stateFromStores > 50000;
    }
    tmp3 = !tmp4;
  }
  return tmp3;
});