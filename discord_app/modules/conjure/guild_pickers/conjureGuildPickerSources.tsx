// === Module 17003: conjureGuildPickerSources ===

// Module 17003 (conjureGuildPickerSources)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildRoleStore from "GuildRoleStore" /* 2118 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildRoles(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      if (null != closure_0) {
        let sortedRoles = GuildRoleStore.getSortedRoles(tmp);
      } else {
        sortedRoles = [];
      }
      return sortedRoles;
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
  return require("initialize").useStateFromStoresArray(first, tmp6, tmp7);
}) : (function useConjureGuildRoles(arg0) {
  _require = arg0;
  const items = [GuildRoleStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      let sortedRoles = GuildRoleStore.getSortedRoles(tmp);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/conjureGuildPickerSources.tsx");

export const useConjureGuildRoles = tmp2;
export const useConjureGuildMemberUsers = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildMemberUsers(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      if (null != closure_0) {
        const memberIds = GuildMemberStore.getMemberIds(tmp);
        const mapped = memberIds.map((item) => user.getUser(item));
        let found = mapped.filter(GlobalUtils.isNotNullish);
      } else {
        found = [];
      }
      return found;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useConjureGuildMemberUsers(arg0) {
  _require = arg0;
  const items = [GuildMemberStore, UserStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      const memberIds = GuildMemberStore.getMemberIds(tmp);
      const mapped = memberIds.map((item) => user.getUser(item));
      let found = mapped.filter(GlobalUtils.isNotNullish);
    } else {
      found = [];
    }
    return found;
  }, items1);
});