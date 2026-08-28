// === Module 5547: useGuildRoleMemberCounts ===

// Module 5547 (useGuildRoleMemberCounts)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getRoleMemberCount" /* 5548 */;

const require = arg1;
let closure_5 = {};
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default function useGuildRoleMemberCounts(arg0) {
  const _require = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const items = [closure_4];
  const items1 = [arg0, num];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_4.getRoleMemberCount(closure_0));
  const effect = React.useEffect(() => {
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
        tmp2[tmp] = Date.now();
        const memberCounts = num(closure_1_2[3]).fetchMemberCounts(tmp);
        const obj = num(closure_1_2[3]);
      }
      tmp2 = closure_1_5;
    }
  }, items1);
  return stateFromStores;
};