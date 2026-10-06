// === Module 12406: InviteErrorUtils ===

// Module 12406 (InviteErrorUtils)
import intl13 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ AbortCodes: closure_4, HelpdeskArticles: hasOwnProperty, MAX_USER_GUILDS: metroRequire, MAX_USER_GUILDS_PREMIUM: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("utils/InviteErrorUtils.tsx");

export const getDescriptiveInviteError = function getDescriptiveInviteError(code) {
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj3;
  if (constants.TOO_MANY_USER_GUILDS === code) {
    const currentUser = UserStore.getCurrentUser();
    const obj7 = PremiumUtilsDefault;
    if (!obj7.canUseIncreasedGuildCap(currentUser)) {
      let tmp18;
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        tmp18 = metroRequire;
      }
      const obj2 = { title: intl11.formatToPlainString(intl13.t["ttJ/hj"], obj3), description: intl12.string(intl13.t.iLyuDO) };
      intl11 = intl13.intl;
      obj3 = { quantity: tmp18 };
      intl12 = intl13.intl;
      return obj2;
    }
    tmp18 = metroImportDefault;
  } else if (constants.GUILD_AT_CAPACITY === code) {
    const obj4 = { title: intl9.string(intl13.t.ZZlox4), description: intl10.string(intl13.t.ZUEGFn) };
    intl9 = intl13.intl;
    intl10 = intl13.intl;
    return obj4;
  } else if (constants.GUILD_JOIN_INVITE_LIMITED_ACCESS === code) {
    const obj5 = { title: intl7.string(intl13.t.kJwpBW), description: intl8.string(intl13.t.ZUEGFn) };
    intl7 = intl13.intl;
    intl8 = intl13.intl;
    return obj5;
  } else if (constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED === code) {
    const obj6 = { title: intl5.string(intl13.t["u/xsK9"]), description: intl6.string(intl13.t.SxY4IW) };
    intl5 = intl13.intl;
    intl6 = intl13.intl;
    return obj6;
  } else if (constants.UNDER_MINIMUM_AGE === code) {
    const obj8 = { title: intl3.string(intl13.t["2yTd7D"]), description: intl4.string(intl13.t.vRw5lm) };
    intl3 = intl13.intl;
    intl4 = intl13.intl;
    return obj8;
  } else if (constants.AGE_GROUP_UNVERIFIED === code) {
    const obj = { title: intl.string(intl13.t.TCXgZL), description: intl2.string(intl13.t["8Ow7Xi"]) };
    intl = intl13.intl;
    intl2 = intl13.intl;
    return obj;
  } else {
    return null;
  }
};
export const getInviteError = function getInviteError(arg0) {
  let obj2;
  if (constants.TOO_MANY_USER_GUILDS === arg0) {
    const intl8 = intl13.intl;
    return intl8.string(intl13.t.iLyuDO);
  } else if (constants.GUILD_AT_CAPACITY === arg0) {
    const intl7 = intl13.intl;
    return intl7.string(intl13.t.M6unNJ);
  } else if (constants.INVALID_COUNTRY_CODE === arg0) {
    const intl6 = intl13.intl;
    return intl6.string(intl13.t.sRJGR1);
  } else if (constants.INVALID_CANNOT_FRIEND_SELF === arg0) {
    const intl5 = intl13.intl;
    return intl5.string(intl13.t["mY2R+F"]);
  } else if (constants.INVITES_DISABLED === arg0) {
    const intl4 = intl13.intl;
    const format = intl4.format;
    const obj = { articleLink: obj2.getArticleURL(hasOwnProperty.INVITE_DISABLED) };
    const RXSeLl = intl13.t.RXSeLl;
    obj2 = HelpdeskUtilsDefault;
    return format(RXSeLl, obj);
  } else if (constants.UNDER_MINIMUM_AGE === arg0) {
    const intl3 = intl13.intl;
    return intl3.string(intl13.t.vRw5lm);
  } else if (constants.AGE_GROUP_UNVERIFIED === arg0) {
    const intl2 = intl13.intl;
    return intl2.string(intl13.t["8Ow7Xi"]);
  } else {
    const intl = intl13.intl;
    return intl.string(intl13.t.dDZRdy);
  }
};