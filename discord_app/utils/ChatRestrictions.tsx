// discord_app/utils/ChatRestrictions.tsx
import Constants from "../Constants.tsx";
import util from "../intl/index.native.tsx";
import MentionGuardUtilsDefault from "MentionGuardUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const TOKEN_REGEX = Constants.TOKEN_REGEX;
const items = [
  {
    check(arg0, getGuildId, arg2) {
      if (arg2) {
        if (null == getGuildId.getGuildId()) {
          return false;
        } else {
          const extractEveryoneRoleResult = MentionGuardUtilsDefault.extractEveryoneRole(arg0, getGuildId);
          if (null == extractEveryoneRoleResult) {
            return false;
          } else {
            let tmp9Result = MentionGuardUtilsDefault;
            if (tmp9Result.shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId)) {
              tmp9Result = MentionGuardUtilsDefault;
              const everyoneMemberCountResult = tmp9Result.everyoneMemberCount(extractEveryoneRoleResult, getGuildId);
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              const powResult = Math.pow(10, Math.floor(Math.log10(everyoneMemberCountResult)));
              let v47E5Rz = util.t["47E5Rz"];
              if (getGuildId.isForumPost()) {
                v47E5Rz = util.t.sYW2cy;
              } else if (getGuildId.isThread()) {
                v47E5Rz = util.t["2YaiQ1"];
              }
              let obj = { body: null, footer: null };
              const intl = util.intl;
              obj = { role: extractEveryoneRoleResult, count: null };
              const _Math4 = Math;
              const result = Math.trunc(everyoneMemberCountResult / powResult) * powResult;
              obj.count = result.toLocaleString();
              obj.body = intl.formatToPlainString(v47E5Rz, obj);
              const intl2 = util.intl;
              obj.footer = intl2.string(util.t.mVyrtu);
              return obj;
            } else {
              return false;
            }
          }
        }
      } else {
        return false;
      }
    },
    analyticsType: "@Everyone Warning",
    animation: "call",
  },
  {
    check(arg0) {
      let isMatch = TOKEN_REGEX.test(arg0);
      if (isMatch) {
        const obj = { body: null };
        const intl = util.intl;
        obj.body = intl.string(util.t.sTwS1a);
        isMatch = obj;
      }
      return isMatch;
    },
    analyticsType: "API Token Warning",
  },
];
let result = size.fileFinishedImporting("utils/ChatRestrictions.tsx");

export const RESTRICTIONS = items;
