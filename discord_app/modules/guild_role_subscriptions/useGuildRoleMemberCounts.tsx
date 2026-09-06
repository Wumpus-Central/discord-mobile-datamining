// === Module 7127: useGuildRoleMemberCounts ===

// Module 7127 (useGuildRoleMemberCounts)
import GuildRoleMemberActionCreatorsAll from "GuildRoleMemberActionCreators" /* 7129 */;
import noop from "module_19" /* 19 */;
import GuildRoleMemberCountStore from "GuildRoleMemberCountStore" /* 7128 */;

const require = fn;
let closure_5 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default function useGuildRoleMemberCounts(arg0) {
  _require = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const items = [GuildRoleMemberCountStore];
  const items1 = [arg0, num];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildRoleMemberCountStore.getRoleMemberCount(closure_0));
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      let tmp4 = null != tmp3;
      if (tmp4) {
        tmp4 = num > 0;
      }
      if (tmp4) {
        const _Date = Date;
        tmp4 = Date.now() - tmp3 < num;
      }
      if (!tmp4) {
        const _Date2 = Date;
        closure_5[closure_0] = Date.now();
        const memberCounts = GuildRoleMemberActionCreatorsAll.fetchMemberCounts(closure_0);
      }
    }
  }, items1);
  return stateFromStores;
};