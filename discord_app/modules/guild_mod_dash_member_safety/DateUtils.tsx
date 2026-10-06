// === Module 7020: guild_mod_dash_member_safety/DateUtils ===

// Module 7020 (guild_mod_dash_member_safety/DateUtils)
import intl from "intl" /* 1126 */;
import getTimestampStringDefault from "getTimestampString" /* 7021 */;
import size from "module_2" /* 2 */;

function getJoinedAtDateFormatter() {
  const time = { seconds: intl.t["FsBhl/"], minutes: intl.t["4d1mgT"], hours: intl.t["2wkczD"], days: intl.t["ocdS+f"], months: intl.t["az14+h"], years: intl.t["5Gk1ns"] };
  return time;
}
function getAccountAgeDateFormatter() {
  const obj = { hours: intl.t.JZP2Rs, days: intl.t["3moSHc"], months: intl.t["0Ddwr1"], years: intl.t.cR7lcs };
  return obj;
}
const MembersTableDateFormats = { JOINED_AT: 0, [0]: "JOINED_AT", ACCOUNT_AGE: 1, [1]: "ACCOUNT_AGE" };
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/DateUtils.tsx");

export const ACCOUNT_AGE_DATE_TOOLTIP_CONFIG = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
export const MEMBER_JOIN_DATE_TOOLTIP_CONFIG = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" };
export { MembersTableDateFormats };
export const getMembersTableTimestampFormatter = function getMembersTableTimestampFormatter(arg0) {
  let tmp2;
  if (arg0 === obj.JOINED_AT) {
    tmp2 = getJoinedAtDateFormatter;
  } else if (arg0 === tmp.ACCOUNT_AGE) {
    tmp2 = getAccountAgeDateFormatter;
  }
  return tmp2;
};
export const formatDateRelativeTime = function formatDateRelativeTime(arg0, arg1) {
  let tmp2;
  if (arg1 === obj.JOINED_AT) {
    tmp2 = getJoinedAtDateFormatter;
  } else if (arg1 === tmp.ACCOUNT_AGE) {
    tmp2 = getAccountAgeDateFormatter;
  }
  return getTimestampStringDefault(arg0, tmp2, false);
};
export const getJoinedAtTimestamp = function getJoinedAtTimestamp(joinedAt) {
  let date;
  if (null != joinedAt) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date = new Date(joinedAt);
  } else {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date();
  }
  return date.getTime();
};