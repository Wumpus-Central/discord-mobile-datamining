// === Module 10258: MentionGuardUtils ===

// Module 10258 (MentionGuardUtils)
import _modDef38 from "module_38" /* 38 */;
import MessageParserDefault from "MessageParser" /* 7682 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelMemberStore from "ChannelMemberStore" /* 7279 */;
import PermissionStore from "PermissionStore" /* 4199 */;

function parsedItemUsesEveryoneRole(content) {
  if (typeof content.content === "string") {
    if ("inlineCode" !== content.type) {
      if ("codeBlock" !== content.type) {
        let match;
        if (content.content != null) {
          match = str3.match(regExp);
        }
        if (null != match) {
          return _slicedToArray(match, 1)[0];
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
        let tmp7 = parsedItemUsesEveryoneRole(tmp4);
        if (null != tmp7) {
          obj.return();
          return tmp7;
        }
      }
      return null;
    }
  }
  return null;
}
const Constants = fn(1074);
({ Permissions: hasOwnProperty, StatusTypes: metroRequire } = Constants);
const regExp = new RegExp(/@(:?everyone|here)/);
const size = fn(2);
const result = size.fileFinishedImporting("utils/MentionGuardUtils.tsx");

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
      const groups = ChannelMemberStore.getProps(getGuildId.getGuildId(), getGuildId.id).groups;
      const item = groups.forEach((id) => {
        let tmp = "@everyone" !== closure_0;
        if (tmp) {
          tmp = id.id === constants2.OFFLINE;
        }
        if (!tmp) {
          closure_1 = closure_1 + id.count;
        }
      });
      tmp5 = dependencyMap;
    }
    let canResult = tmp5 > 30;
    if (canResult) {
      canResult = PermissionStore.can(constants.MENTION_EVERYONE, getGuildId);
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
      const groups = ChannelMemberStore.getProps(isThread.getGuildId(), isThread.id).groups;
      const item = groups.forEach((id) => {
        let tmp = "@everyone" !== closure_0;
        if (tmp) {
          tmp = id.id === constants2.OFFLINE;
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
    const obj2 = MessageParserDefault.parsePreprocessor(getGuildId, arg0)[Symbol.iterator]();
    while (obj2 !== undefined) {
      let tmp4 = parsedItemUsesEveryoneRole(tmp2);
      if (null != tmp4) {
        obj2.return();
        return tmp4;
      }
    }
    return null;
  }
};