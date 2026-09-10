// discord_app/modules/connections/native/VerifiedRoleIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import useRoleIconProps from "../../roles/useRoleIconProps.tsx";
import getHigherContrastColor from "../../user_profile/utils/getHigherContrastColor.tsx";
import RoleIconDefault from "../../roles/native/RoleIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: closure_4, EMPTY_STRING_SNOWFLAKE_ID: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
fn(4605);
let createStyles = { iconContainer: null };
createStyles = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
createStyles.iconContainer = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

export default function VerifiedRoleIcon(arg0) {
  ({ role, roleId, roleColor, size } = arg0);
  ({ guildId, style, displayRoleIcon } = arg0);
  if (roleColor == null) {
    let colorString;
    if (role != null) {
      colorString = role.colorString;
    }
    roleColor = colorString;
  }
  if (roleColor == null) {
    roleColor = React4;
  }
  let obj = { backgroundColor: roleColor, colors: null };
  const items = [WHITE, PRIMARY_630];
  obj.colors = items;
  const diff = size - (size / 8) * 2;
  const higherContrastColor = obj.getHigherContrastColor(obj);
  let obj2 = useRoleIconProps;
  obj = { guildId, roleId: null, size: null };
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = hasOwnProperty;
  }
  obj.roleId = roleId;
  obj.size = diff;
  const roleIconProps = obj2.useRoleIconProps(obj);
  const obj1 = { style: null, children: null };
  const items1 = [style, closure_9().iconContainer, { width: size, height: size, backgroundColor: roleColor }];
  obj1.style = items1;
  if (false !== displayRoleIcon) {
    if (null != roleIconProps) {
      obj2 = {};
      const merged = Object.assign(roleIconProps);
      let tmp9Result = jsx(RoleIconDefault, {});
    }
    obj1.children = tmp9Result;
    return <tmp10 {...obj1} />;
  }
  tmp9Result = jsx(LinkIcon.LinkIcon, {
    style: { width: diff, height: diff },
    size: "custom",
    color: higherContrastColor,
  });
  const obj3 = { style: { width: diff, height: diff }, size: "custom", color: higherContrastColor };
  const tmp = closure_9();
}
