// discord_app/modules/instant_invite/native/InviteRolesDisplay.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/GuildRoleStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({
  container: { marginTop: 8 },
  label: { marginBottom: 4 },
  rolesRow: { flexDirection: "row", flexWrap: "wrap" },
});
const result = require("set").fileFinishedImporting("modules/instant_invite/native/InviteRolesDisplay.tsx");

export default function InviteRolesDisplay(roleIds) {
  roleIds = roleIds.roleIds;
  const guildId = roleIds.guildId;
  const tmp = callback3();
  let obj = roleIds(504);
  const items = [closure_4];
  const items1 = [roleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => {
      const mapped = roleIds.map((arg0) => closure_1_4.getRole(closure_1, arg0));
      return mapped.filter((arg0) => null != arg0);
    },
    items1,
  );
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-xs/semibold", color: "text-muted", style: null, children: null };
    obj[2] = tmp.label;
    const intl = tmp2(1114).intl;
    obj[3] = intl.string(tmp2(1114).t.stcSfI);
    const items2 = [callback(tmp2(4556).Text, obj)];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.rolesRow;
    obj1[1] = stateFromStoresArray.map((id) => closure_1_5(guildId(closure_1_2[8]), { role: id, guildId }, id.id));
    items2[1] = callback(View, obj1);
    obj[1] = items2;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
}
