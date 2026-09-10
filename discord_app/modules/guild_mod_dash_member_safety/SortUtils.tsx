// === Module 7552: SortUtils ===

// Module 7552 (SortUtils)
import MemberSafetyElasticSearchQueryTypes from "MemberSafetyElasticSearchQueryTypes" /* 7549 */;
import guild_mod_dash_member_safety_DateUtils from "guild_mod_dash_member_safety/DateUtils" /* 7550 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/SortUtils.tsx");

export const getSortValueForMember = function getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED) {
  const joinedAtTimestamp = guild_mod_dash_member_safety_DateUtils.getJoinedAtTimestamp(joinedAt.joinedAt);
  if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC === ORDER_BY_UNSPECIFIED) {
    return joinedAtTimestamp;
  } else if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC === ORDER_BY_UNSPECIFIED) {
    return -joinedAtTimestamp;
  } else if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_USER_ID_ASC === ORDER_BY_UNSPECIFIED) {
    const _parseInt2 = parseInt;
    return parseInt(joinedAt.userId);
  } else if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_USER_ID_DESC === ORDER_BY_UNSPECIFIED) {
    const _parseInt = parseInt;
    return -parseInt(joinedAt.userId);
  } else {
    return -joinedAtTimestamp;
  }
};