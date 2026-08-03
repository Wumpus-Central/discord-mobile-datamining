import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { disabledPermissionIcon: null };
createCacheKey = { width: 24, height: 24, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.ICON_FEEDBACK_CRITICAL };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/oauth2/native/BotPermissions.tsx");

export default function BotPermissions(guild) {
  let application;
  let c5;
  let c6;
  let importAll;
  let onPermissionsChange;
  let permissions;
  ({ application, permissions } = guild);
  ({ deniedPermissions: importAll, onPermissionsChange } = guild);
  guild = guild.guild;
  let React;
  c5 = undefined;
  let callback;
  React = createCacheKey();
  [c5, c6] = guild(React.useState(importAll(onPermissionsChange[6]).NONE), 2);
  let items = [guild.permissions, onPermissionsChange, permissions];
  const effect = React.useEffect(() => {
    onPermissionsChange(true, permissions);
    _undefined(outer1_1(onPermissionsChange[7]).invert(guild.permissions));
    const obj = outer1_1(onPermissionsChange[7]);
    onPermissionsChange(false, outer1_1(onPermissionsChange[7]).invert(guild.permissions));
  }, items);
  const OrderedPermissions = permissions(onPermissionsChange[8]).OrderedPermissions;
  const found = OrderedPermissions.filter((arg0) => outer1_1(onPermissionsChange[7]).has(permissions, arg0));
  const found1 = found.filter((arg0) => !outer1_1(onPermissionsChange[7]).has(c5, arg0));
  const mapped = found1.map((arg0) => {
    let closure_0 = arg0;
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(arg0);
    const obj2 = outer1_1(onPermissionsChange[7]);
    obj = {
      checked: !outer1_1(onPermissionsChange[7]).has(closure_1, arg0),
      onToggle(arg0) {
        return outer1_2(arg0, closure_0);
      },
      label: permissionName
    };
    return _undefined(permissions(onPermissionsChange[9]).Checkbox, obj, String(arg0));
  });
  const found2 = found.filter((arg0) => outer1_1(onPermissionsChange[7]).has(c5, arg0));
  const mapped1 = found2.map((arg0) => {
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(arg0);
    obj = { direction: "horizontal", align: "center", children: null };
    obj = { style: obj.disabledPermissionIcon, children: null };
    obj[1] = _undefined(permissions(onPermissionsChange[11]).XSmallIcon, { size: "sm", color: "white" });
    const items = [_undefined(c5, obj), _undefined(permissions(onPermissionsChange[12]).Text, { variant: "text-md/medium", children: permissionName })];
    obj[2] = items;
    return outer1_7(permissions(onPermissionsChange[10]).Stack, obj, String(arg0));
  });
  let obj = { children: null };
  obj = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = permissions(onPermissionsChange[13]).intl;
  obj = { applicationName: application.name, guildName: guild.name };
  obj[2] = intl.format(permissions(onPermissionsChange[13]).t.sOaT2j, obj);
  const items1 = [callback(permissions(onPermissionsChange[12]).Text, obj), callback(permissions(onPermissionsChange[10]).Stack, { spacing: 12, children: mapped })];
  obj[0] = items1;
  const children = [callback2(permissions(onPermissionsChange[10]).Stack, obj), ];
  let tmp6Result = null;
  if (mapped1.length > 0) {
    const obj1 = { children: null };
    let obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(tmp[13]).intl;
    const obj3 = { applicationName: null };
    obj3[0] = application.name;
    obj2[2] = intl2.format(tmp4(tmp[13]).t.fsOkF4, obj3);
    const items3 = [tmp7(tmp4(tmp[12]).Text, obj2), ];
    const obj4 = { spacing: 12, children: null };
    obj4[1] = mapped1;
    items3[1] = tmp7(tmp4(tmp[10]).Stack, obj4);
    obj1[0] = items3;
    tmp6Result = tmp6(tmp4(tmp[10]).Stack, obj1);
  }
  children[1] = tmp6Result;
  return callback2(permissions(onPermissionsChange[10]).Stack, { spacing: 16, children });
};