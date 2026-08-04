// discord_app/utils/ChatRestrictions.tsx
import { TOKEN_REGEX } from "ME";

const items = [
  {
    check(arg0, getGuildId) {
      if (arg2) {
        if (null == getGuildId.getGuildId()) {
          return false;
        } else {
          const extractEveryoneRoleResult = importDefault(9586).extractEveryoneRole(arg0, getGuildId);
          if (null == extractEveryoneRoleResult) {
            return false;
          } else {
            let tmp8Result = tmp8(9586);
            if (tmp8Result.shouldShowEveryoneGuard(extractEveryoneRoleResult, getGuildId)) {
              tmp8Result = tmp8(9586);
              const everyoneMemberCountResult = tmp8Result.everyoneMemberCount(extractEveryoneRoleResult, getGuildId);
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              const powResult = Math.pow(10, Math.floor(Math.log10(everyoneMemberCountResult)));
              if (getGuildId.isForumPost()) {
              } else if (getGuildId.isThread()) {
              }
              let obj = { body: null, footer: null };
              const intl = tmp6(1236).intl;
              obj = { role: null, count: null };
              obj[0] = extractEveryoneRoleResult;
              const _Math4 = Math;
              const result = Math.trunc(everyoneMemberCountResult / powResult) * powResult;
              obj[1] = result.toLocaleString();
              obj[0] = intl.formatToPlainString(_2YaiQ1, obj);
              const intl2 = tmp6(1236).intl;
              obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.mVyrtu);
              return obj;
            } else {
              return false;
            }
          }
          const obj5 = importDefault(9586);
        }
      } else {
        return false;
      }
    },
    analyticsType: "@Everyone Warning",
    animation: "accessibilityRole"
  },
  {
    check(arg0) {
      let isMatch = TOKEN_REGEX.test(arg0);
      if (isMatch) {
        const obj = { body: null };
        const intl = require(1236) /* getSystemLocale */.intl;
        obj[0] = intl.string(require(1236) /* getSystemLocale */.t.sTwS1a);
        isMatch = obj;
      }
      return isMatch;
    },
    analyticsType: "API Token Warning"
  }
];
let result = require("getSystemLocale").fileFinishedImporting("utils/ChatRestrictions.tsx");

export const RESTRICTIONS = items;