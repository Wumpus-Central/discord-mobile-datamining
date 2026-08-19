// === Module 10171: items ===

// Module 10171 (items)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import parsedItemUsesEveryoneRoleDefault from "parsedItemUsesEveryoneRole" /* 10172 */;

const TOKEN_REGEX = ME.TOKEN_REGEX;
const items = [
  {
    check(arg0, getGuildId) {
      if (arg2) {
        if (null == getGuildId.getGuildId()) {
          return false;
        } else {
          const extractEveryoneRoleResult = parsedItemUsesEveryoneRoleDefault.extractEveryoneRole(arg0, getGuildId);
          if (null == extractEveryoneRoleResult) {
            return false;
          } else {
            let tmp9Result = parsedItemUsesEveryoneRoleDefault;
            if (tmp9Result.shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId)) {
              tmp9Result = parsedItemUsesEveryoneRoleDefault;
              const everyoneMemberCountResult = tmp9Result.everyoneMemberCount(extractEveryoneRoleResult, getGuildId);
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              const powResult = Math.pow(10, Math.floor(Math.log10(everyoneMemberCountResult)));
              let v47E5Rz = getSystemLocale.t["47E5Rz"];
              if (getGuildId.isForumPost()) {
                v47E5Rz = getSystemLocale.t.sYW2cy;
              } else if (getGuildId.isThread()) {
                v47E5Rz = getSystemLocale.t["2YaiQ1"];
              }
              const intl = getSystemLocale.intl;
              const obj = { role: null, count: null };
              obj[0] = extractEveryoneRoleResult;
              const _Math4 = Math;
              const result = Math.trunc(everyoneMemberCountResult / powResult) * powResult;
              obj[1] = result.toLocaleString();
              obj[0] = intl.formatToPlainString(v47E5Rz, obj);
              const intl2 = getSystemLocale.intl;
              obj[1] = intl2.string(getSystemLocale.t.mVyrtu);
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
    animation: "call"
  },
  {
    check(arg0) {
      let isMatch = TOKEN_REGEX.test(arg0);
      if (isMatch) {
        const obj = { body: null };
        const intl = getSystemLocale.intl;
        obj[0] = intl.string(getSystemLocale.t.sTwS1a);
        isMatch = obj;
      }
      return isMatch;
    },
    analyticsType: "API Token Warning"
  }
];
let result = obj132.fileFinishedImporting("utils/ChatRestrictions.tsx");

export const RESTRICTIONS = items;