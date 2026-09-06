// === Module 9428: BotPermissions ===

// Module 9428 (BotPermissions)
import nativeDefault from "native" /* 576 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import permissions from "permissions" /* 9248 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
const createStyles = { disabledPermissionIcon: null };
let size = { width: 24, height: 24, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
createStyles.disabledPermissionIcon = size;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/oauth2/native/BotPermissions.tsx");

export default function BotPermissions(guild) {
  ({ application, permissions } = guild);
  ({ deniedPermissions: importAll, onPermissionsChange } = guild);
  guild = guild.guild;
  c5 = undefined;
  c6 = undefined;
  noop = closure_8();
  [c5, c6] = guild(noop.useState(require("PermissionUtils").NONE), 2);
  let items = [guild.permissions, onPermissionsChange, permissions];
  const effect = noop.useEffect(() => {
    onPermissionsChange(true, permissions);
    _undefined(BigFlagUtilsAll.invert(guild.permissions));
    onPermissionsChange(false, BigFlagUtilsAll.invert(guild.permissions));
  }, items);
  const OrderedPermissions = permissions(onPermissionsChange[8]).OrderedPermissions;
  const found = OrderedPermissions.filter((item) => BigFlagUtilsAll.has(permissions, item));
  const found1 = found.filter((item) => !BigFlagUtilsAll.has(c5, item));
  const mapped = found1.map((item) => {
    closure_0 = item;
    let obj = permissions(onPermissionsChange[8]);
    const permissionName = obj.getPermissionName(item);
    const obj2 = require("BigFlagUtils");
    obj = {
      checked: !require("BigFlagUtils").has(closure_1, item),
      onToggle(arg0) {
        return onPermissionsChange(arg0, closure_0);
      },
      label: permissionName
    };
    return _undefined(permissions(onPermissionsChange[9]).Checkbox, obj, String(item));
  });
  const found2 = found.filter((item) => BigFlagUtilsAll.has(c5, item));
  const mapped1 = found2.map((item) => {
    let obj = permissions;
    const permissionName = obj.getPermissionName(item);
    obj = { direction: "horizontal", align: "center", children: null };
    obj = { style: closure_4.disabledPermissionIcon, children: timestampProducer(XSmallIcon.XSmallIcon, { size: "sm", color: "white" }) };
    const items = [timestampProducer(View, obj), timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: permissionName })];
    obj.children = items;
    return React5(Stack_Stack.Stack, obj, String(item));
  });
  let obj = { children: null };
  obj = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = permissions(onPermissionsChange[13]).intl;
  obj = { applicationName: application.name, guildName: guild.name };
  obj.children = intl.format(permissions(onPermissionsChange[13]).t.sOaT2j, obj);
  const items1 = [c6(permissions(onPermissionsChange[12]).Text, obj), c6(permissions(onPermissionsChange[10]).Stack, { spacing: 12, children: mapped })];
  obj.children = items1;
  const children = [closure_7(permissions(onPermissionsChange[10]).Stack, obj), ];
  let tmp6Result = null;
  if (mapped1.length > 0) {
    const obj1 = { children: null };
    let obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = tmp4(tmp[13]).intl;
    const obj3 = { applicationName: application.name };
    obj2.children = intl2.format(tmp4(tmp[13]).t.fsOkF4, obj3);
    const items3 = [tmp7(tmp4(tmp[12]).Text, obj2), ];
    const obj4 = { spacing: 12, children: mapped1 };
    items3[1] = tmp7(tmp4(tmp[10]).Stack, obj4);
    obj1.children = items3;
    tmp6Result = tmp6(tmp4(tmp[10]).Stack, obj1);
  }
  children[1] = tmp6Result;
  return closure_7(permissions(onPermissionsChange[10]).Stack, { spacing: 16, children });
};