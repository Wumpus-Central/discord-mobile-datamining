// === Module 10219: InviteRolesDisplay ===

// Module 10219 (InviteRolesDisplay)
import "noop";
import { View } from "get ActivityIndicator";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ container: { marginTop: 8 }, label: { marginBottom: 4 }, rolesRow: { flexDirection: "row", flexWrap: "wrap" } });
const result = require("createGuildRoleRecordFromRust").fileFinishedImporting("modules/instant_invite/native/InviteRolesDisplay.tsx");

export default function InviteRolesDisplay(roleIds) {
  roleIds = roleIds.roleIds;
  const guildId = roleIds.guildId;
  const tmp = callback3();
  let obj = roleIds(589);
  const items = [createGuildRoleRecordFromRust];
  const items1 = [roleIds, guildId];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const mapped = roleIds.map((arg0) => outer1_4.getRole(closure_1, arg0));
    return mapped.filter((arg0) => null != arg0);
  }, items1);
  let tmp4 = null;
  if (0 !== stateFromStoresArray.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "text-xs/semibold", color: "text-muted", style: null, children: null };
    obj[2] = tmp.label;
    const intl = tmp2(1236).intl;
    obj[3] = intl.string(tmp2(1236).t.stcSfI);
    const items2 = [callback(tmp2(4189).Text, obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.rolesRow;
    obj1[1] = stateFromStoresArray.map((id) => outer1_5(guildId(outer1_2[8]), { role: id, guildId }, id.id));
    items2[1] = callback(View, obj1);
    obj[1] = items2;
    tmp4 = callback2(View, obj);
  }
  return tmp4;
};