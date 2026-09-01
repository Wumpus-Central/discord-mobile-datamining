// discord_app/modules/accept_invite/native/InviteRolesList.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ rolesRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 4 } });
const result = require("set").fileFinishedImporting("modules/accept_invite/native/InviteRolesList.tsx");

export default function InviteRolesList(invite) {
  invite = invite.invite;
  let guild;
  let roles;
  guild = invite.guild;
  roles = invite.roles;
  let items = [guild, roles];
  const memo = React.useMemo(() => {
    if (null != guild) {
      if (null != roles) {
        if (0 !== arr.length) {
          const items = [];
          HermesBuiltin.arraySpread(arr, 0);
          const sorted = items.sort(guild(closure_1_2[4]).sortInviteRoles);
          const mapped = sorted.map((id) => closure_1_0(closure_1_2[4]).inviteRoleToDisplayData(id.id, id));
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
      const items1 = [callback(guild(4474).Text, obj), ];
      obj = { style: null, children: null };
      obj[0] = tmp.rolesRow;
      obj[1] = memo.map((id) => closure_1_5(roles(closure_1_2[8]), { role: id, guildId: guild.id }, id.id));
      items1[1] = callback(View, obj);
      obj[2] = items1;
      tmp2 = callback2(guild(4926).Stack, obj);
    }
  }
  return tmp2;
};