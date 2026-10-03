// discord_app/utils/InviteErrorUtils.tsx
import util from "../intl/index.native.tsx";
import HelpdeskUtilsDefault from "HelpdeskUtils.tsx";
import PremiumUtilsDefault from "PremiumUtils.tsx";
import UserStore from "../stores/UserStore.tsx";

require = fn;
const Constants = fn(1085);
({
  AbortCodes: closure_4,
  HelpdeskArticles: hasOwnProperty,
  MAX_USER_GUILDS: metroRequire,
  MAX_USER_GUILDS_PREMIUM: closure_7,
} = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("utils/InviteErrorUtils.tsx");

export const getDescriptiveInviteError = function getDescriptiveInviteError(code) {
  if (constants.TOO_MANY_USER_GUILDS === code) {
    const currentUser = UserStore.getCurrentUser();
    if (!obj7.canUseIncreasedGuildCap(currentUser)) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        let tmp18 = timestampProducer;
      }
      const obj2 = { title: null, description: null };
      const intl11 = util.intl;
      const obj3 = { quantity: tmp18 };
      obj2.title = intl11.formatToPlainString(util.t["ttJ/hj"], obj3);
      const intl12 = util.intl;
      obj2.description = intl12.string(util.t.iLyuDO);
      return obj2;
    }
    tmp18 = React5;
    obj7 = PremiumUtilsDefault;
  } else if (constants.GUILD_AT_CAPACITY === code) {
    const obj4 = { title: null, description: null };
    const intl9 = util.intl;
    obj4.title = intl9.string(util.t.ZZlox4);
    const intl10 = util.intl;
    obj4.description = intl10.string(util.t.ZUEGFn);
    return obj4;
  } else if (constants.GUILD_JOIN_INVITE_LIMITED_ACCESS === code) {
    const obj5 = { title: null, description: null };
    const intl7 = util.intl;
    obj5.title = intl7.string(util.t.kJwpBW);
    const intl8 = util.intl;
    obj5.description = intl8.string(util.t.ZUEGFn);
    return obj5;
  } else if (constants.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED === code) {
    const obj6 = { title: null, description: null };
    const intl5 = util.intl;
    obj6.title = intl5.string(util.t["u/xsK9"]);
    const intl6 = util.intl;
    obj6.description = intl6.string(util.t.SxY4IW);
    return obj6;
  } else if (constants.UNDER_MINIMUM_AGE === code) {
    const obj8 = { title: null, description: null };
    const intl3 = util.intl;
    obj8.title = intl3.string(util.t["2yTd7D"]);
    const intl4 = util.intl;
    obj8.description = intl4.string(util.t.vRw5lm);
    return obj8;
  } else if (constants.AGE_GROUP_UNVERIFIED === code) {
    const obj = { title: null, description: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.TCXgZL);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["8Ow7Xi"]);
    return obj;
  } else {
    return null;
  }
};
export const getInviteError = function getInviteError(arg0) {
  if (constants.TOO_MANY_USER_GUILDS === arg0) {
    const intl8 = util.intl;
    return intl8.string(util.t.iLyuDO);
  } else if (constants.GUILD_AT_CAPACITY === arg0) {
    const intl7 = util.intl;
    return intl7.string(util.t.M6unNJ);
  } else if (constants.INVALID_COUNTRY_CODE === arg0) {
    const intl6 = util.intl;
    return intl6.string(util.t.sRJGR1);
  } else if (constants.INVALID_CANNOT_FRIEND_SELF === arg0) {
    const intl5 = util.intl;
    return intl5.string(util.t["mY2R+F"]);
  } else if (constants.INVITES_DISABLED === arg0) {
    const intl4 = util.intl;
    const obj = { articleLink: HelpdeskUtilsDefault.getArticleURL(constants2.INVITE_DISABLED) };
    return intl4.format(util.t.RXSeLl, obj);
  } else if (constants.UNDER_MINIMUM_AGE === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t.vRw5lm);
  } else if (constants.AGE_GROUP_UNVERIFIED === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t["8Ow7Xi"]);
  } else {
    const intl = util.intl;
    return intl.string(util.t.dDZRdy);
  }
};
