// === Module 11898: InviteRolesList ===

// Module 11898 (InviteRolesList)
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const result = require("obj132").fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default function InviteRolesList(invite) {
  invite = invite.invite;
  const guild = invite.guild;
  const roles = invite.roles;
  let items = [guild, roles];
  const memo = React.useMemo(() => {
    if (null != guild) {
      if (null != roles) {
        if (0 !== roles.length) {
          const items = [];
          HermesBuiltin.arraySpread(roles, 0);
          const sorted = items.sort(guild(dependencyMap[4]).sortInviteRoles);
          const mapped = sorted.map((item, index) => guild(closure_1_2[4]).inviteRoleToDisplayData(id.id, item));
        }
        return [];
      }
    }
  }, items);
  let tmp2 = null;
  if (null != guild) {
    tmp2 = null;
    if (0 !== memo.length) {
      let obj = { spacing: 4, style: null, children: null };
      obj[1] = invite.style;
      obj = { variant: "text-sm/semibold", color: "text-default", children: null };
      const intl = guild(1236).intl;
      obj[2] = intl.string(guild(1236).t.stcSfI);
      const items1 = [callback(guild(4734).Text, obj), ];
      obj = { style: null, children: null };
      obj[0] = tmp.rolesRow;
      obj[1] = memo.map((item, index) => closure_1_5(roles(dependencyMap[8]), { role: item, guildId: guild.id }, item.id));
      items1[1] = callback(View, obj);
      obj[2] = items1;
      tmp2 = callback2(guild(4733).Stack, obj);
    }
  }
  return tmp2;
};