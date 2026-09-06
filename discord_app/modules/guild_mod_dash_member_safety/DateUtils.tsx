// === Module 7498: getJoinedAtDateFormatter ===

// Module 7498 (getJoinedAtDateFormatter)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import getTimestampStringDefault from "getTimestampString" /* 7499 */;

function getJoinedAtDateFormatter() {
  return { seconds: getSystemLocale.t["FsBhl/"], minutes: getSystemLocale.t["4d1mgT"], hours: getSystemLocale.t["2wkczD"], days: getSystemLocale.t["ocdS+f"], months: getSystemLocale.t["az14+h"], years: getSystemLocale.t["5Gk1ns"] };
}
function getAccountAgeDateFormatter() {
  return { hours: getSystemLocale.t.JZP2Rs, days: getSystemLocale.t["3moSHc"], months: getSystemLocale.t["0Ddwr1"], years: getSystemLocale.t.cR7lcs };
}
const obj = { JOINED_AT: 0, [0]: "JOINED_AT", ACCOUNT_AGE: 1, [1]: "ACCOUNT_AGE" };
const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/DateUtils.tsx");

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
  return getTimestampStringDefault(arg0, tmp2, false);
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