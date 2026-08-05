// discord_app/utils/InviteErrorUtils.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ AbortCodes: c4, HelpdeskArticles: c5, MAX_USER_GUILDS: closure_6, MAX_USER_GUILDS_PREMIUM: error } = ME);
const result = require("getPremiumPlanItem").fileFinishedImporting("utils/InviteErrorUtils.tsx");

export const getDescriptiveInviteError = function getDescriptiveInviteError(code) {
  if (constants.TOO_MANY_USER_GUILDS === code) {
    currentUser = currentUser.getCurrentUser();
    if (!obj5.canUseIncreasedGuildCap(currentUser)) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        let tmp14 = closure_6;
      }
      let obj = { title: null, description: null };
      const intl7 = require(1236) /* getSystemLocale */.intl;
      obj = { quantity: null };
      obj[0] = tmp14;
      obj[0] = intl7.formatToPlainString(require(1236) /* getSystemLocale */.t["ttJ/hj"], obj);
      const intl8 = require(1236) /* getSystemLocale */.intl;
      obj[1] = intl8.string(require(1236) /* getSystemLocale */.t.iLyuDO);
      return obj;
    }
    tmp14 = closure_7;
    obj5 = importDefault(3931);
  } else if (tmp.GUILD_AT_CAPACITY === code) {
    const obj1 = { title: null, description: null };
    const intl5 = require(1236) /* getSystemLocale */.intl;
    obj1[0] = intl5.string(require(1236) /* getSystemLocale */.t.ZZlox4);
    const intl6 = require(1236) /* getSystemLocale */.intl;
    obj1[1] = intl6.string(require(1236) /* getSystemLocale */.t.ZUEGFn);
    return obj1;
  } else if (tmp.GUILD_JOIN_INVITE_LIMITED_ACCESS === code) {
    const obj2 = { title: null, description: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj2[0] = intl3.string(require(1236) /* getSystemLocale */.t.kJwpBW);
    const intl4 = require(1236) /* getSystemLocale */.intl;
    obj2[1] = intl4.string(require(1236) /* getSystemLocale */.t.ZUEGFn);
    return obj2;
  } else if (tmp.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED === code) {
    obj = { title: null, description: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["u/xsK9"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.SxY4IW);
    return obj;
  } else {
    return null;
  }
};
export const getInviteError = function getInviteError(arg0) {
  if (constants.TOO_MANY_USER_GUILDS === arg0) {
    const intl6 = require(1236) /* getSystemLocale */.intl;
    return intl6.string(require(1236) /* getSystemLocale */.t.iLyuDO);
  } else if (tmp.GUILD_AT_CAPACITY === arg0) {
    const intl5 = require(1236) /* getSystemLocale */.intl;
    return intl5.string(require(1236) /* getSystemLocale */.t.M6unNJ);
  } else if (tmp.INVALID_COUNTRY_CODE === arg0) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    return intl4.string(require(1236) /* getSystemLocale */.t.sRJGR1);
  } else if (tmp.INVALID_CANNOT_FRIEND_SELF === arg0) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    return intl3.string(require(1236) /* getSystemLocale */.t["mY2R+F"]);
  } else if (tmp.INVITES_DISABLED === arg0) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj = { articleLink: null };
    obj[0] = importDefault(1945).getArticleURL(constants2.INVITE_DISABLED);
    return intl2.format(require(1236) /* getSystemLocale */.t.RXSeLl, obj);
  } else {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.dDZRdy);
  }
};