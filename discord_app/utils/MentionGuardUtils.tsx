// === Module 10254: parsedItemUsesEveryoneRole ===

// Module 10254 (parsedItemUsesEveryoneRole)
import _modDef38 from "module_38" /* 38 */;
import rebuildDefault from "rebuild" /* 7360 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "getMemberListId" /* 6078 */;
import closure_4 from "getUncachedChannelPermissions" /* 4089 */;
import ME from "ME" /* 676 */;

function parsedItemUsesEveryoneRole(content) {
  if (typeof content.content === "string") {
    if ("inlineCode" !== content.type) {
      if ("codeBlock" !== content.type) {
        let match;
        if (content.content != null) {
          match = str3.match(regExp);
        }
        if (null != match) {
          return callback(match, 1)[0];
        }
      }
    }
    return null;
  } else {
    const _Array = Array;
    if (Array.isArray(content.content)) {
      content = content.content;
      const obj = content[Symbol.iterator]();
      while (obj !== undefined) {
        let tmp6 = parsedItemUsesEveryoneRole;
        let tmp7 = parsedItemUsesEveryoneRole(tmp4);
        let tmp8 = tmp7;
        if (null != tmp7) {
          let tmp9 = obj;
          obj.return();
          return tmp7;
        }
      }
      return null;
    }
  }
  return null;
}
({ Permissions: c5, StatusTypes: closure_6 } = ME);
const regExp = new RegExp(/@(:?everyone|here)/);
const result = require("set").fileFinishedImporting("utils/MentionGuardUtils.tsx");

export default {
  shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId) {
    const guildId = getGuildId.getGuildId();
    _modDef38(null != guildId, "isGuildChannel with null guildId");
    importDefault = extractEveryoneRoleResult;
    dependencyMap = 0;
    if (getGuildId.isThread()) {
      let num = getGuildId.memberCount;
      if (num == null) {
        num = 0;
      }
      let tmp5 = num;
    } else {
      const groups = store.getProps(getGuildId.getGuildId(), getGuildId.id).groups;
      const item = groups.forEach((id) => {
        let tmp = "@everyone" !== closure_0;
        if (tmp) {
          tmp = id.id === closure_1_6.OFFLINE;
        }
        if (!tmp) {
          closure_1 = closure_1 + id.count;
        }
      });
      tmp5 = dependencyMap;
    }
    let canResult = tmp5 > 30;
    if (canResult) {
      canResult = closure_4.can(constants.MENTION_EVERYONE, getGuildId);
    }
    return canResult;
  },
  everyoneMemberCount(extractEveryoneRoleResult, isThread) {
    closure_0 = extractEveryoneRoleResult;
    c1 = 0;
    if (isThread.isThread()) {
      let num = isThread.memberCount;
      if (num == null) {
        num = 0;
      }
      let tmp3 = num;
    } else {
      const groups = store.getProps(isThread.getGuildId(), isThread.id).groups;
      const item = groups.forEach((id) => {
        let tmp = "@everyone" !== closure_0;
        if (tmp) {
          tmp = id.id === closure_1_6.OFFLINE;
        }
        if (!tmp) {
          closure_1 = closure_1 + id.count;
        }
      });
      tmp3 = c1;
    }
    return tmp3;
  },
  extractEveryoneRole(arg0, getGuildId) {
    const obj = rebuildDefault;
    const obj2 = rebuildDefault.parsePreprocessor(getGuildId, arg0)[Symbol.iterator]();
    while (obj2 !== undefined) {
      let tmp3 = parsedItemUsesEveryoneRole;
      let tmp4 = parsedItemUsesEveryoneRole(tmp2);
      let tmp5 = tmp4;
      if (null != tmp4) {
        let tmp6 = obj2;
        obj2.return();
        return tmp4;
      }
    }
    return null;
  }
};