// discord_app/utils/MentionGuardUtils.tsx
import _slicedToArray from "_slicedToArray";
import getMemberListId from "getMemberListId";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let c5;
let closure_6;
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
const result = require("getUncachedChannelPermissions").fileFinishedImporting("utils/MentionGuardUtils.tsx");

export default {
  shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId) {
    const guildId = getGuildId.getGuildId();
    require("../../_runtime/metro/00038__.js")(null != guildId, "isGuildChannel with null guildId");
    importDefault = extractEveryoneRoleResult;
    const dependencyMap = 0;
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
          tmp = id.id === outer1_6.OFFLINE;
        }
        if (!tmp) {
          closure_1 = closure_1 + id.count;
        }
      });
      tmp5 = dependencyMap;
    }
    let canResult = tmp5 > 30;
    if (canResult) {
      canResult = getUncachedChannelPermissions.can(constants.MENTION_EVERYONE, getGuildId);
    }
    return canResult;
  },
  everyoneMemberCount(extractEveryoneRoleResult, isThread) {
    let closure_0 = extractEveryoneRoleResult;
    let c1 = 0;
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
          tmp = id.id === outer1_6.OFFLINE;
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
    const obj = require("../modules/messages/MessageParser.tsx");
    const obj2 = require("../modules/messages/MessageParser.tsx").parsePreprocessor(getGuildId, arg0)[Symbol.iterator]();
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