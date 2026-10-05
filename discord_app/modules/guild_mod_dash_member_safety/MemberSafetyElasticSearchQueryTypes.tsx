// discord_app/modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = 2 * DurationsDefault.Millis.DAY;
const result1 = size.fileFinishedImporting(
  "modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx",
);

export const UNUSUAL_DM_COMPARISON_DELTA = result;
export const createMemberSearchCursor = function createMemberSearchCursor(joinedAt) {
  let date;
  joinedAt = joinedAt.joinedAt;
  let tmp2 = null;
  if (null != joinedAt) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj = { guild_joined_at: date.getTime(), user_id: tmp };
    tmp2 = obj;
    date = new Date(joinedAt);
  }
  return tmp2;
};
export const OrderBy = {
  ORDER_BY_UNSPECIFIED: 0,
  [0]: "ORDER_BY_UNSPECIFIED",
  ORDER_BY_GUILD_JOINED_AT_DESC: 1,
  [1]: "ORDER_BY_GUILD_JOINED_AT_DESC",
  ORDER_BY_GUILD_JOINED_AT_ASC: 2,
  [2]: "ORDER_BY_GUILD_JOINED_AT_ASC",
  ORDER_BY_USER_ID_DESC: 3,
  [3]: "ORDER_BY_USER_ID_DESC",
  ORDER_BY_USER_ID_ASC: 4,
  [4]: "ORDER_BY_USER_ID_ASC",
};
