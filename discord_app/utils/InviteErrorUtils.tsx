// === Module 12724: InviteErrorUtils ===

// Module 12724 (InviteErrorUtils)
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ AbortCodes: closure_4, HelpdeskArticles: hasOwnProperty, MAX_USER_GUILDS: metroRequire, MAX_USER_GUILDS_PREMIUM: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("utils/InviteErrorUtils.tsx");

export const getDescriptiveInviteError = function getDescriptiveInviteError(code) {
  if (constants.TOO_MANY_USER_GUILDS === code) {
    const currentUser = UserStore.getCurrentUser();
    if (!obj5.canUseIncreasedGuildCap(currentUser)) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        let tmp14 = timestampProducer;
      }
      let obj = { title: null, description: null };
      const intl7 = util.intl;
      obj = { quantity: tmp14 };
      obj.title = intl7.formatToPlainString(util.t["ttJ/hj"], obj);
      const intl8 = util.intl;
      obj.description = intl8.string(util.t.iLyuDO);
      return obj;
    }
    tmp14 = React5;
    obj5 = PremiumUtilsDefault;
  } else if (constants.GUILD_AT_CAPACITY === code) {
    const obj1 = { title: null, description: null };
    const intl5 = util.intl;
    obj1.title = intl5.string(util.t.ZZlox4);
    const intl6 = util.intl;
    obj1.description = intl6.string(util.t.ZUEGFn);
    return obj1;
  } else if (constants.GUILD_JOIN_INVITE_LIMITED_ACCESS === code) {
    const obj2 = { title: null, description: null };
    const intl3 = util.intl;
    obj2.title = intl3.string(util.t.kJwpBW);
    const intl4 = util.intl;
    obj2.description = intl4.string(util.t.ZUEGFn);
    return obj2;
  } else if (constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED === code) {
    obj = { title: null, description: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["u/xsK9"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.SxY4IW);
    return obj;
  } else {
    return null;
  }
};
export const getInviteError = function getInviteError(arg0) {
  if (constants.TOO_MANY_USER_GUILDS === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.iLyuDO);
  } else if (constants.GUILD_AT_CAPACITY === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t.M6unNJ);
  } else if (constants.INVALID_COUNTRY_CODE === arg0) {
    const intl4 = util.intl;
    return intl4.string(util.t.sRJGR1);
  } else if (constants.INVALID_CANNOT_FRIEND_SELF === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["mY2R+F"]);
  } else if (constants.INVITES_DISABLED === arg0) {
    const intl2 = util.intl;
    const obj = { articleLink: HelpdeskUtilsDefault.getArticleURL(constants2.INVITE_DISABLED) };
    return intl2.format(util.t.RXSeLl, obj);
  } else {
    const intl = util.intl;
    return intl.string(util.t.dDZRdy);
  }
};