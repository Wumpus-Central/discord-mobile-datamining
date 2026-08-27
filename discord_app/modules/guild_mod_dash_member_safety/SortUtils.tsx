// === Module 7178: getSortValueForMember ===

// Module 7178 (getSortValueForMember)
import set from "set" /* 2 */;
import result2 from "result" /* 7175 */;
import getJoinedAtDateFormatter from "getJoinedAtDateFormatter" /* 7176 */;

const result = set.fileFinishedImporting("modules/guild_mod_dash_member_safety/SortUtils.tsx");

export const getSortValueForMember = function getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED) {
  const joinedAtTimestamp = getJoinedAtDateFormatter.getJoinedAtTimestamp(joinedAt.joinedAt);
  if (result2.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC === ORDER_BY_UNSPECIFIED) {
    return joinedAtTimestamp;
  } else if (tmp(7175).OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC === ORDER_BY_UNSPECIFIED) {
    return -joinedAtTimestamp;
  } else if (tmp(7175).OrderBy.ORDER_BY_USER_ID_ASC === ORDER_BY_UNSPECIFIED) {
    const _parseInt2 = parseInt;
    return parseInt(joinedAt.userId);
  } else if (tmp(7175).OrderBy.ORDER_BY_USER_ID_DESC === ORDER_BY_UNSPECIFIED) {
    const _parseInt = parseInt;
    return -parseInt(joinedAt.userId);
  } else {
    return -joinedAtTimestamp;
  }
  const obj = getJoinedAtDateFormatter;
};