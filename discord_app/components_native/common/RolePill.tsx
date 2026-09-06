// discord_app/components_native/common/RolePill.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ToastUtils from "../../modules/toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../utils/ClipboardUtils.native.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, MAX_VISUAL_ROLE_LENGTH: hasOwnProperty } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, pill: null, bubble: null, verifiedContainer: null, roleIcon: null };
createStyles = { marginRight: 4, marginBottom: 4, borderRadius: nativeDefault.radii.xs };
createStyles.container = createStyles;
createStyles.pill = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 8,
  paddingVertical: 6,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
let size = {
  marginRight: 8,
  borderRadius: nativeDefault.radii.sm,
  height: 12,
  width: 12,
  backgroundColor: nativeDefault.colors.ICON_MUTED,
};
createStyles.bubble = size;
const size1 = { marginRight: 8, borderRadius: nativeDefault.radii.sm, height: 12, width: 12 };
createStyles.verifiedContainer = size1;
createStyles.roleIcon = { paddingRight: 4 };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("components_native/common/RolePill.tsx");

export default function RolePill(role) {
  role = role.role;
  ({ guildId, color } = role);
  const DeveloperMode = role(1935).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  role(7186);
  let obj = { guildId, roleId: role.id, size: 12 };
  const roleIcon = obj.useRoleIcon(obj);
  let name = role.name;
  let combined = name;
  if (role.name.length > closure_5) {
    name = role.name;
    const _HermesInternal = HermesInternal;
    combined = "" + name.slice(0, tmp5) + "...";
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
  obj = {
    disabled: disableInteraction,
    style: tmp9.container,
    onPress: function handlePress() {
      ClipboardUtils.copy(role.id);
      ToastUtils.roleIdCopied(combined);
    },
    accessible: false,
    children: null,
  };
  const obj1 = { style: tmp9.pill, children: null };
  if (undefined !== guild_connections) {
    const obj2 = {
      style: tmp9.verifiedContainer,
      roleId: role.id,
      guildId: null,
      roleColor: null,
      size: 14,
      displayRoleIcon: false,
    };
    if (guildId == null) {
      guildId = closure_4;
    }
    obj2.guildId = guildId;
    obj2.roleColor = color;
    let tmp10Result = closure_6(combined(7204), obj2);
    const tmp15 = combined(7204);
  } else {
    const items = [tmp9.bubble];
    if (null != color) {
      const obj3 = { backgroundColor: color };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const obj5 = { style: null };
    items[1] = obj4;
    obj5.style = items;
    tmp10Result = closure_6(View, obj5);
  }
  const items1 = [tmp10Result, ,];
  tmp10Result = null;
  if (null != roleIcon) {
    const obj6 = { style: tmp9.roleIcon, children: roleIcon };
    tmp10Result = closure_6(View, obj6);
  }
  items1[1] = tmp10Result;
  items1[2] = closure_6(role(4556).Text, {
    variant: "text-xs/semibold",
    color: "interactive-text-active",
    children: name,
  });
  obj1.children = items1;
  obj.children = closure_7(View, obj1);
  return closure_6(role(5123).PressableHighlight, obj);
}
