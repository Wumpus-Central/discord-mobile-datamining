// === Module 7500: SortUtils ===

// Module 7500 (SortUtils)
import MemberSafetyElasticSearchQueryTypes from "MemberSafetyElasticSearchQueryTypes" /* 7497 */;
import guild_mod_dash_member_safety_DateUtils from "guild_mod_dash_member_safety/DateUtils" /* 7498 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/SortUtils.tsx");

export const getSortValueForMember = function getSortValueForMember(joinedAt, ORDER_BY_UNSPECIFIED) {
  const joinedAtTimestamp = guild_mod_dash_member_safety_DateUtils.getJoinedAtTimestamp(joinedAt.joinedAt);
  if (MemberSafetyElasticSearchQueryTypes.OrderBy.ORDER_BY_GUILD_JOINED_AT_ASC === ORDER_BY_UNSPECIFIED) {
    return joinedAtTimestamp;
  } else if (tmp(7497).OrderBy.ORDER_BY_GUILD_JOINED_AT_DESC === ORDER_BY_UNSPECIFIED) {
    return -joinedAtTimestamp;
  } else if (tmp(7497).OrderBy.ORDER_BY_USER_ID_ASC === ORDER_BY_UNSPECIFIED) {
    const _parseInt2 = parseInt;
    return parseInt(joinedAt.userId);
  } else if (tmp(7497).OrderBy.ORDER_BY_USER_ID_DESC === ORDER_BY_UNSPECIFIED) {
    const _parseInt = parseInt;
    return -parseInt(joinedAt.userId);
  } else {
    return -joinedAtTimestamp;
  }
};