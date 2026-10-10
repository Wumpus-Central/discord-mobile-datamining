// === Module 17071: conjureGuildPickerSources ===

// Module 17071 (conjureGuildPickerSources)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import UserUtils from "UserUtils" /* 4962 */;
import GuildUtilsDefault from "GuildUtils" /* 6096 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildRoles(arg0) {
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
    const fn = function n() {
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
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildMemberUsers(arg0) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/conjureGuildPickerSources.tsx");

export const useConjureGuildRoles = tmp2;
export const useConjureGuildMemberUsers = tmp3;
export const conjureMemberUsername = function conjureMemberUsername(hasUniqueUsername, stateFromStores1) {
  let str = "always";
  if (stateFromStores1) {
    str = "never";
  }
  let str2 = "";
  const userTag = UserUtils.getUserTag(hasUniqueUsername, { mode: "username", identifiable: str });
  if (!stateFromStores1) {
    str2 = "";
    if (!hasUniqueUsername.hasUniqueUsername()) {
      const _HermesInternal = HermesInternal;
      str2 = "#" + hasUniqueUsername.discriminator;
    }
  }
  return "" + userTag + str2;
};
export const useConjureMemberRequests = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureMemberRequests(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(13);
  if (cResult[0] !== arg1) {
    let items = arg1;
    if (undefined === arg1) {
      items = [];
    }
    cResult[0] = arg1;
    cResult[1] = items;
    let obj2 = items;
  } else {
    obj2 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    const fn = function c() {
      if (null != closure_0) {
        const members = GuildUtilsDefault.requestMembers(tmp, "", 25);
      }
    };
    const items1 = [arg0];
    cResult[2] = arg0;
    cResult[3] = fn;
    cResult[4] = items1;
    let tmp3 = items1;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[3];
    tmp3 = cResult[4];
  }
  const effect = noop.useEffect(tmp2, tmp3);
  if (cResult[5] !== obj2) {
    const joined = obj2.join(",");
    cResult[5] = obj2;
    cResult[6] = joined;
    let tmp5 = joined;
  } else {
    tmp5 = cResult[6];
  }
  importDefault = tmp5;
  if (cResult[7] === arg0) {
    if (cResult[8] === tmp5) {
      let tmp7 = cResult[9];
      let tmp8 = cResult[10];
    }
    const effect1 = noop.useEffect(tmp7, tmp8);
    if (cResult[11] !== arg0) {
      class C {
        constructor(arg0) {
          trimmed = arg0.trim();
          tmp3 = null != closure_0;
          tmp2 = closure_0;
          if (tmp3) {
            str = "";
            tmp3 = "" !== trimmed;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj = closure_1(closure_2[9]);
            num = 25;
            members = obj.requestMembers(tmp2, trimmed, 25);
          }
          return;
        }
      }
      cResult[11] = arg0;
      cResult[12] = C;
    } else {
      class C {
        constructor(arg0) {
          trimmed = arg0.trim();
          tmp3 = null != closure_0;
          tmp2 = closure_0;
          if (tmp3) {
            str = "";
            tmp3 = "" !== trimmed;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj = closure_1(closure_2[9]);
            num = 25;
            members = obj.requestMembers(tmp2, trimmed, 25);
          }
          return;
        }
      }
    }
    return C;
  }
  const fn2 = function j() {
    if (null != closure_0) {
      if ("" !== closure_1) {
        const parts = closure_1.split(",");
        const found = parts.filter((item) => !member.isMember(closure_1_0, item));
        if (found.length > 0) {
          const membersById = GuildActionCreatorsDefault.requestMembersById(tmp, found);
        }
      }
    }
  };
  const items2 = [arg0, tmp5];
  cResult[7] = arg0;
  cResult[8] = tmp5;
  cResult[9] = fn2;
  cResult[10] = items2;
  tmp8 = items2;
  tmp7 = fn2;
  let obj = require("c");
}) : (function useConjureMemberRequests(arg0) {
  closure_0 = arg0;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  const items1 = [arg0];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const members = GuildUtilsDefault.requestMembers(tmp, "", 25);
    }
  }, items1);
  const joined = items.join(",");
  const items2 = [arg0, joined];
  const effect1 = noop.useEffect(() => {
    if (null != closure_0) {
      if ("" !== joined) {
        const parts = joined.split(",");
        const found = parts.filter((item) => !member.isMember(closure_1_0, item));
        if (found.length > 0) {
          const membersById = GuildActionCreatorsDefault.requestMembersById(tmp, found);
        }
      }
    }
  }, items2);
  const items3 = [arg0];
  return noop.useCallback((str) => {
    const trimmed = str.trim();
    let tmp3 = null != closure_0;
    if (tmp3) {
      tmp3 = "" !== trimmed;
    }
    if (tmp3) {
      const members = GuildUtilsDefault.requestMembers(closure_0, trimmed, 25);
    }
  }, items3);
});