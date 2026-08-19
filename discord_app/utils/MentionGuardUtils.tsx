// discord_app/utils/MentionGuardUtils.tsx
import _modDef38 from "../../_runtime/metro/00038__.js";
import rebuildDefault from "../modules/messages/MessageParser.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import getMemberListId from "../stores/ChannelMemberStore.tsx";
import getUncachedChannelPermissions from "../stores/PermissionStore.tsx";
import ME from "../Constants.tsx";

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
({ Permissions: c5, StatusTypes: closure_6 } = ME);
const regExp = new RegExp(/@(:?everyone|here)/);
const result = require("obj132").fileFinishedImporting("utils/MentionGuardUtils.tsx");

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
      const item = groups.forEach((item, index) => {
        let tmp = "@everyone" !== closure_0;
        if (tmp) {
          tmp = item.id === closure_1_6.OFFLINE;
        }
        if (!tmp) {
          closure_1 = closure_1 + item.count;
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
      const item = groups.forEach((item, index) => {
        let tmp = "@everyone" !== closure_0;
        if (tmp) {
          tmp = item.id === closure_1_6.OFFLINE;
        }
        if (!tmp) {
          closure_1 = closure_1 + item.count;
        }
      });
      tmp3 = c1;
    }
    return tmp3;
  },
  extractEveryoneRole(arg0, getGuildId) {
    const obj2 = rebuildDefault.parsePreprocessor(getGuildId, arg0)[Symbol.iterator]();
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