// === Module 9571: BotPermissions ===

// Module 9571 (BotPermissions)
import nativeDefault from "native" /* 576 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import Text_Text from "Text/Text" /* 4634 */;
import Stack_Stack from "Stack/Stack" /* 5058 */;
import XSmallIcon from "XSmallIcon" /* 5766 */;
import permissions from "permissions" /* 9391 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { disabledPermissionIcon: null };
let size = { width: 24, height: 24, flexGrow: 0, flexShrink: 0, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
obj2.disabledPermissionIcon = size;
let closure_8 = createStyles.createStyles(obj2);
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
    const permissionName = permissions(onPermissionsChange[8]).getPermissionName(item);
    const obj = permissions(onPermissionsChange[8]);
    const obj2 = require("BigFlagUtils");
    const tmp2 = !require("BigFlagUtils").has(closure_1, item);
    return _undefined(permissions(onPermissionsChange[9]).Checkbox, {
      checked: !require("BigFlagUtils").has(closure_1, item),
      onToggle(arg0) {
        return onPermissionsChange(arg0, closure_0);
      },
      label: permissionName
    }, String(item));
  });
  const found2 = found.filter((item) => BigFlagUtilsAll.has(c5, item));
  const mapped1 = found2.map((item) => {
    const permissionName = permissions.getPermissionName(item);
    const obj2 = { direction: "horizontal", align: "center", children: null };
    const items = [timestampProducer(View, { style: closure_4.disabledPermissionIcon, children: timestampProducer(XSmallIcon.XSmallIcon, { size: "sm", color: "white" }) }), timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: permissionName })];
    obj2.children = items;
    return React5(Stack_Stack.Stack, obj2, String(item));
  });
  let obj = { children: null };
  let obj2 = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = permissions(onPermissionsChange[13]).intl;
  obj2.children = intl.format(permissions(onPermissionsChange[13]).t.sOaT2j, { applicationName: application.name, guildName: guild.name });
  const items1 = [c6(permissions(onPermissionsChange[12]).Text, obj2), c6(permissions(onPermissionsChange[10]).Stack, { spacing: 12, children: mapped })];
  obj.children = items1;
  const children = [closure_7(permissions(onPermissionsChange[10]).Stack, obj), ];
  let tmp6Result = null;
  if (mapped1.length > 0) {
    const obj4 = { children: null };
    const obj5 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    const intl2 = permissions(onPermissionsChange[13]).intl;
    const obj6 = { applicationName: application.name };
    obj5.children = intl2.format(permissions(onPermissionsChange[13]).t.fsOkF4, obj6);
    const items3 = [tmp7(permissions(onPermissionsChange[12]).Text, obj5), ];
    const obj7 = { spacing: 12, children: mapped1 };
    items3[1] = tmp7(permissions(onPermissionsChange[10]).Stack, obj7);
    obj4.children = items3;
    tmp6Result = closure_7(permissions(onPermissionsChange[10]).Stack, obj4);
  }
  children[1] = tmp6Result;
  return closure_7(permissions(onPermissionsChange[10]).Stack, { spacing: 16, children });
};