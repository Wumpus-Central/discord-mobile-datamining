// === Module 6927: useGuildRoleMemberCounts ===

// Module 6927 (useGuildRoleMemberCounts)
import noop from "noop" /* 19 */;
import getRoleMemberCount from "getRoleMemberCount" /* 6928 */;

const require = fn;
let closure_5 = {};
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

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
        closure_1_5[closure_0] = Date.now();
        const memberCounts = num(dependencyMap[3]).fetchMemberCounts(closure_0);
        const obj = num(dependencyMap[3]);
      }
    }
  }, items1);
  return stateFromStores;
};