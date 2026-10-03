// === Module 6725: canUseGuildSpace ===

// Module 6725 (canUseGuildSpace)
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
let ReactCompilerGating = fn(558);
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
    const fn = function s() {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
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
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, tmp);
    }
    return canResult;
  }, items1);
});
let closure_5 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/canUseGuildSpace.tsx");

export const isGuildSpaceAdmin = function isGuildSpaceAdmin(arg0) {
  let canResult = null != arg0;
  if (canResult) {
    canResult = PermissionStore.can(Permissions.MANAGE_GUILD, arg0);
  }
  return canResult;
};
export const useIsGuildSpaceAdmin = tmp2;
export function canUseGuildSpace(guild, getChannelIdForGuildTransition) {
  return false;
}
export const useCanUseGuildSpace = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(7);
  const obj = require("c");
  const tmp = _require;
  const guildSpaceExperimentEnabled = require("GuildSpaceExperiment").useGuildSpaceExperimentEnabled(arg0, arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return GuildStore.getGuild(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj2 = require("GuildSpaceExperiment");
  closure_5(tmp(504).useStateFromStores(first, tmp8, tmp9));
  return false;
}) : ((arg0, arg1) => {
  _require = arg0;
  const guildSpaceExperimentEnabled = require("GuildSpaceExperiment").useGuildSpaceExperimentEnabled(arg0, arg1);
  const obj = require("GuildSpaceExperiment");
  const items = [GuildStore];
  const items1 = [arg0];
  closure_5(require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0), items1));
  return false;
});