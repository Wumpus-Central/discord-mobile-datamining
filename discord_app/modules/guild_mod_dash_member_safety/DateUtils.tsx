// discord_app/modules/guild_mod_dash_member_safety/DateUtils.tsx
function getJoinedAtDateFormatter() {
  return { seconds: require(1236) /* getSystemLocale */.t["FsBhl/"], minutes: require(1236) /* getSystemLocale */.t["4d1mgT"], hours: require(1236) /* getSystemLocale */.t["2wkczD"], days: require(1236) /* getSystemLocale */.t["ocdS+f"], months: require(1236) /* getSystemLocale */.t["az14+h"], years: require(1236) /* getSystemLocale */.t["5Gk1ns"] };
}
function getAccountAgeDateFormatter() {
  return { hours: require(1236) /* getSystemLocale */.t.JZP2Rs, days: require(1236) /* getSystemLocale */.t["3moSHc"], months: require(1236) /* getSystemLocale */.t["0Ddwr1"], years: require(1236) /* getSystemLocale */.t.cR7lcs };
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
  return importDefault(5760)(arg0, tmp2, false);
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