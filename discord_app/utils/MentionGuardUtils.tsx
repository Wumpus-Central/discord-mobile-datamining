// === Module 10067: MentionGuardUtils ===

// Module 10067 (MentionGuardUtils)
import _modDef38 from "module_38" /* 38 */;
import MessageParserDefault from "MessageParser" /* 7166 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelMemberStore from "ChannelMemberStore" /* 6782 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
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
({ Permissions: hasOwnProperty, StatusTypes: metroRequire } = Constants);
const regExp = new RegExp(/@(:?everyone|here)/);
let obj = {
  shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId) {
    let tmp5;
    const guildId = getGuildId.getGuildId();
    _modDef38(null != guildId, "isGuildChannel with null guildId");
    importDefault = extractEveryoneRoleResult;
    dependencyMap = 0;
    if (getGuildId.isThread()) {
      let num = getGuildId.memberCount;
      if (num == null) {
        num = 0;
      }
      tmp5 = num;
    } else {
      const groups = ChannelMemberStore.getProps(getGuildId.getGuildId(), getGuildId.id).groups;
      const item = groups.forEach((id) => {
        const tmp = "@everyone" !== importDefault && id.id === metroRequire.OFFLINE;
        if (!tmp) {
          closure_1 = closure_1 + id.count;
        }
      });
      tmp5 = dependencyMap;
    }
    const canResult = tmp5 > 30 && PermissionStore.can(constants.MENTION_EVERYONE, getGuildId);
    return canResult;
  },
  everyoneMemberCount(extractEveryoneRoleResult, isThread) {
    let tmp3;
    let closure_0 = extractEveryoneRoleResult;
    let c1 = 0;
    if (isThread.isThread()) {
      let num = isThread.memberCount;
      if (num == null) {
        num = 0;
      }
      tmp3 = num;
    } else {
      const groups = ChannelMemberStore.getProps(isThread.getGuildId(), isThread.id).groups;
      const item = groups.forEach((id) => {
        const tmp = "@everyone" !== importDefault && id.id === metroRequire.OFFLINE;
        if (!tmp) {
          closure_1 = closure_1 + id.count;
        }
      });
      tmp3 = c1;
    }
    return tmp3;
  },
  extractEveryoneRole(arg0, getGuildId) {
    const obj = MessageParserDefault;
    const parsePreprocessorResult = obj.parsePreprocessor(getGuildId, arg0);
    const obj2 = parsePreprocessorResult[Symbol.iterator]();
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
const result = size.fileFinishedImporting("utils/MentionGuardUtils.tsx");

export default obj;