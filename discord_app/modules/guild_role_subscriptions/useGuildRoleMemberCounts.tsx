// discord_app/modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx
import noop from "noop";
import getRoleMemberCount from "getRoleMemberCount";

const require = arg1;
let closure_5 = {};
const result = require("initialize").fileFinishedImporting("modules/guild_role_subscriptions/useGuildRoleMemberCounts.tsx");

export default function useGuildRoleMemberCounts(arg0) {
  const _require = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  const items = [getRoleMemberCount];
  const items1 = [arg0, num];
  const stateFromStores = _require(589).useStateFromStores(items, () => outer1_4.getRoleMemberCount(closure_0));
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
        const memberCounts = num(outer1_2[3]).fetchMemberCounts(tmp);
        const obj = num(outer1_2[3]);
      }
      tmp2 = outer1_5;
    }
  }, items1);
  return stateFromStores;
};