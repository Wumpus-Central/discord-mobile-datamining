// === Module 11951: getDescriptiveInviteError ===

// Module 11951 (getDescriptiveInviteError)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1994 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4042 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = arg1;
({ AbortCodes: c4, HelpdeskArticles: c5, MAX_USER_GUILDS: closure_6, MAX_USER_GUILDS_PREMIUM: error } = ME);
const result = require("set").fileFinishedImporting("utils/InviteErrorUtils.tsx");

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
      const intl7 = getSystemLocale.intl;
      obj = { quantity: null };
      obj[0] = tmp14;
      obj[0] = intl7.formatToPlainString(getSystemLocale.t["ttJ/hj"], obj);
      const intl8 = getSystemLocale.intl;
      obj[1] = intl8.string(getSystemLocale.t.iLyuDO);
      return obj;
    }
    tmp14 = closure_7;
    obj5 = getPremiumPlanItemDefault;
  } else if (tmp.GUILD_AT_CAPACITY === code) {
    obj1 = { title: null, description: null };
    const intl5 = getSystemLocale.intl;
    obj1[0] = intl5.string(getSystemLocale.t.ZZlox4);
    const intl6 = getSystemLocale.intl;
    obj1[1] = intl6.string(getSystemLocale.t.ZUEGFn);
    return obj1;
  } else if (tmp.GUILD_JOIN_INVITE_LIMITED_ACCESS === code) {
    const obj2 = { title: null, description: null };
    const intl3 = getSystemLocale.intl;
    obj2[0] = intl3.string(getSystemLocale.t.kJwpBW);
    const intl4 = getSystemLocale.intl;
    obj2[1] = intl4.string(getSystemLocale.t.ZUEGFn);
    return obj2;
  } else if (tmp.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED === code) {
    obj = { title: null, description: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["u/xsK9"]);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t.SxY4IW);
    return obj;
  } else {
    return null;
  }
};
export const getInviteError = function getInviteError(arg0) {
  if (constants.TOO_MANY_USER_GUILDS === arg0) {
    const intl6 = getSystemLocale.intl;
    return intl6.string(getSystemLocale.t.iLyuDO);
  } else if (tmp.GUILD_AT_CAPACITY === arg0) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.M6unNJ);
  } else if (tmp.INVALID_COUNTRY_CODE === arg0) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.sRJGR1);
  } else if (tmp.INVALID_CANNOT_FRIEND_SELF === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["mY2R+F"]);
  } else if (tmp.INVITES_DISABLED === arg0) {
    const intl2 = getSystemLocale.intl;
    const obj = { articleLink: null };
    obj[0] = combinedDefault.getArticleURL(constants2.INVITE_DISABLED);
    return intl2.format(getSystemLocale.t.RXSeLl, obj);
  } else {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.dDZRdy);
  }
};