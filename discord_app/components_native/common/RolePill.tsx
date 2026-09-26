// === Module 10409: RolePill ===

// Module 10409 (RolePill)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, MAX_VISUAL_ROLE_LENGTH: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
const obj2 = { container: { marginRight: 4, marginBottom: 4, borderRadius: nativeDefault.radii.xs }, pill: null, bubble: null, verifiedContainer: null, roleIcon: null };
let obj3 = { marginRight: 4, marginBottom: 4, borderRadius: nativeDefault.radii.xs };
obj2.pill = { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let size = { marginRight: 8, borderRadius: nativeDefault.radii.sm, height: 12, width: 12, backgroundColor: nativeDefault.colors.ICON_MUTED };
obj2.bubble = size;
const size1 = { marginRight: 8, borderRadius: nativeDefault.radii.sm, height: 12, width: 12 };
obj2.verifiedContainer = size1;
obj2.roleIcon = { paddingRight: 4 };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("components_native/common/RolePill.tsx");

export default function RolePill(role) {
  role = role.role;
  ({ guildId, color } = role);
  const DeveloperMode = role(2021).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const roleIconProps = role(6607).useRoleIconProps({ guildId, roleId: role.id, size: 12 });
  let name = role.name;
  let combined = name;
  if (role.name.length > closure_5) {
    const name1 = role.name;
    const _HermesInternal = HermesInternal;
    combined = "" + name1.slice(0, tmp5) + "...";
    name = combined;
  }
  if (color == null) {
    color = role.colorString;
  }
  const tags = role.tags;
  let guild_connections;
  if (tags != null) {
    guild_connections = tags.guild_connections;
  }
  const tmp9 = closure_8();
  let disableInteraction = !setting;
  if (setting) {
    disableInteraction = role.disableInteraction;
  }
  const obj3 = {
    disabled: disableInteraction,
    style: tmp9.container,
    onPress: function handlePress() {
      ClipboardUtils.copy(role.id);
      ToastUtils.roleIdCopied(combined);
    },
    accessible: false,
    children: null
  };
  const obj4 = { style: tmp9.pill, children: null };
  if (undefined !== guild_connections) {
    const obj5 = { style: tmp9.verifiedContainer, roleId: role.id, guildId: null, roleColor: null, size: 14, displayRoleIcon: false };
    if (guildId == null) {
      guildId = closure_4;
    }
    obj5.guildId = guildId;
    obj5.roleColor = color;
    let tmp10Result = closure_6(combined(6624), obj5);
    const tmp15 = combined(6624);
  } else {
    const items = [tmp9.bubble, ];
    if (null != color) {
      const obj6 = { backgroundColor: color };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const obj8 = { style: null };
    items[1] = obj7;
    obj8.style = items;
    tmp10Result = closure_6(View, obj8);
  }
  const items1 = [tmp10Result, , ];
  let tmp10Result2 = null;
  if (null != roleIconProps) {
    const obj9 = { style: tmp9.roleIcon, children: null };
    const obj10 = {};
    const merged = Object.assign(roleIconProps);
    obj9.children = closure_6(combined(6626), obj10);
    tmp10Result2 = closure_6(View, obj9);
    const tmp18 = combined(6626);
  }
  items1[1] = tmp10Result2;
  items1[2] = closure_6(role(4832).Text, { variant: "text-xs/semibold", color: "interactive-text-active", children: name });
  obj4.children = items1;
  obj3.children = closure_7(View, obj4);
  return closure_6(role(5435).PressableHighlight, obj3);
};