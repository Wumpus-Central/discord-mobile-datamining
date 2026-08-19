// discord_app/modules/oauth2/native/BotPermissions.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { width: 24, height: 24, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.ICON_FEEDBACK_CRITICAL };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/oauth2/native/BotPermissions.tsx");

export default function BotPermissions(guild) {
  ({ application, permissions } = guild);
  ({ deniedPermissions: importAll, onPermissionsChange } = guild);
  guild = guild.guild;
  c5 = undefined;
  let callback;
  const React = callback3();
  [c5, c6] = guild(React.useState(importAll(onPermissionsChange[6]).NONE), 2);
  let items = [guild.permissions, onPermissionsChange, permissions];
  const effect = React.useEffect(() => {
    onPermissionsChange(true, permissions);
    _undefined(importAll(onPermissionsChange[7]).invert(guild.permissions));
    const obj = importAll(onPermissionsChange[7]);
    onPermissionsChange(false, importAll(onPermissionsChange[7]).invert(guild.permissions));
  }, items);
  const OrderedPermissions = permissions(onPermissionsChange[8]).OrderedPermissions;
  const found = OrderedPermissions.filter((item, index) => importAll(onPermissionsChange[7]).has(permissions, item));
  const found1 = found.filter((item, index) => !importAll(onPermissionsChange[7]).has(c5, item));
  const mapped = found1.map((item, index) => {
    closure_0 = item;
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(item);
    const obj2 = importAll(onPermissionsChange[7]);
    obj = {
      checked: !importAll(onPermissionsChange[7]).has(closure_1, item),
      onToggle(arg0) {
        return onPermissionsChange(arg0, closure_0);
      },
      label: permissionName
    };
    return _undefined(permissions(onPermissionsChange[9]).Checkbox, obj, String(item));
  });
  const found2 = found.filter((item, index) => importAll(onPermissionsChange[7]).has(c5, item));
  const mapped1 = found2.map((item, index) => {
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(item);
    obj = { direction: "horizontal", align: "center", children: null };
    obj = { style: obj.disabledPermissionIcon, children: _undefined(permissions(onPermissionsChange[11]).XSmallIcon, { size: "sm", color: "white" }) };
    const items = [_undefined(c5, obj), _undefined(permissions(onPermissionsChange[12]).Text, { variant: "text-md/medium", children: permissionName })];
    obj[2] = items;
    return closure_1_7(permissions(onPermissionsChange[10]).Stack, obj, String(item));
  });
  const intl = permissions(onPermissionsChange[13]).intl;
  let obj = { applicationName: application.name, guildName: guild.name };
  obj[2] = intl.format(permissions(onPermissionsChange[13]).t.sOaT2j, obj);
  const items1 = [callback(permissions(onPermissionsChange[12]).Text, obj), callback(permissions(onPermissionsChange[10]).Stack, { spacing: 12, children: mapped })];
  obj[0] = items1;
  const children = [callback2(permissions(onPermissionsChange[10]).Stack, obj), ];
  let tmp6Result = null;
  if (mapped1.length > 0) {
    obj1 = { children: null };
    let obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = permissions(onPermissionsChange[13]).intl;
    const obj3 = { applicationName: null };
    obj3[0] = application.name;
    obj2[2] = intl2.format(permissions(onPermissionsChange[13]).t.fsOkF4, obj3);
    const items3 = [tmp7(permissions(onPermissionsChange[12]).Text, obj2), ];
    const obj4 = { spacing: 12, children: null };
    obj4[1] = mapped1;
    items3[1] = tmp7(permissions(onPermissionsChange[10]).Stack, obj4);
    obj1[0] = items3;
    tmp6Result = callback2(permissions(onPermissionsChange[10]).Stack, obj1);
  }
  children[1] = tmp6Result;
  return callback2(permissions(onPermissionsChange[10]).Stack, { spacing: 16, children });
};