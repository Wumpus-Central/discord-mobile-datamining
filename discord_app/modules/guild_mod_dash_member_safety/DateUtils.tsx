// discord_app/modules/guild_mod_dash_member_safety/DateUtils.tsx
function getJoinedAtDateFormatter() {
  return { seconds: require("../../intl/index.native.tsx") /* getSystemLocale */.t["FsBhl/"], minutes: require("../../intl/index.native.tsx") /* getSystemLocale */.t["4d1mgT"], hours: require("../../intl/index.native.tsx") /* getSystemLocale */.t["2wkczD"], days: require("../../intl/index.native.tsx") /* getSystemLocale */.t["ocdS+f"], months: require("../../intl/index.native.tsx") /* getSystemLocale */.t["az14+h"], years: require("../../intl/index.native.tsx") /* getSystemLocale */.t["5Gk1ns"] };
}
function getAccountAgeDateFormatter() {
  return { hours: require("../../intl/index.native.tsx") /* getSystemLocale */.t.JZP2Rs, days: require("../../intl/index.native.tsx") /* getSystemLocale */.t["3moSHc"], months: require("../../intl/index.native.tsx") /* getSystemLocale */.t["0Ddwr1"], years: require("../../intl/index.native.tsx") /* getSystemLocale */.t.cR7lcs };
}
const obj = { JOINED_AT: 0, [0]: "JOINED_AT", ACCOUNT_AGE: 1, [1]: "ACCOUNT_AGE" };
const result = require("set").fileFinishedImporting("modules/guild_mod_dash_member_safety/DateUtils.tsx");

export const ACCOUNT_AGE_DATE_TOOLTIP_CONFIG = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
export const MEMBER_JOIN_DATE_TOOLTIP_CONFIG = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
export const MembersTableDateFormats = obj;
export const getMembersTableTimestampFormatter = function getMembersTableTimestampFormatter(arg0) {
  if (arg0 === obj.JOINED_AT) {
    let tmp2 = getJoinedAtDateFormatter;
  } else if (arg0 === tmp.ACCOUNT_AGE) {
    tmp2 = getAccountAgeDateFormatter;
  }
  return tmp2;
};
export const formatDateRelativeTime = function formatDateRelativeTime(arg0, arg1) {
  if (arg1 === obj.JOINED_AT) {
    let tmp2 = getJoinedAtDateFormatter;
  } else if (arg1 === tmp.ACCOUNT_AGE) {
    tmp2 = getAccountAgeDateFormatter;
  }
  return require("../threads/getTimestampString.tsx")(arg0, tmp2, false);
};
export const getJoinedAtTimestamp = function getJoinedAtTimestamp(joinedAt) {
  if (null != joinedAt) {
    const _Date2 = Date;
    let date = new Date(joinedAt);
  } else {
    const _Date = Date;
    date = new Date();
  }
  return date.getTime();
};