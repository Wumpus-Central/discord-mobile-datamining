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
const createStyles = fn(4836);
let obj2 = {
  iconContainer: { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round },
};
let closure_9 = createStyles.createStyles(obj2);
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
  const tmp = closure_9();
  const obj2 = { backgroundColor: roleColor, colors: null };
  const items = [WHITE, PRIMARY_630];
  obj2.colors = items;
  const diff = size - (size / 8) * 2;
  const higherContrastColor = getHigherContrastColor.getHigherContrastColor(obj2);
  const obj4 = { guildId, roleId: null, size: null };
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
  obj4.roleId = roleId;
  obj4.size = diff;
  const roleIconProps = useRoleIconProps.useRoleIconProps(obj4);
  const obj5 = { style: null, children: null };
  const items1 = [style, tmp.iconContainer, { width: size, height: size, backgroundColor: roleColor }];
  obj5.style = items1;
  if (false !== displayRoleIcon) {
    if (null != roleIconProps) {
      const obj6 = {};
      const merged = Object.assign(roleIconProps);
      let tmp9Result = jsx(RoleIconDefault, {});
    }
    obj5.children = tmp9Result;
    return <tmp10 {...obj5} />;
  }
  tmp9Result = jsx(LinkIcon.LinkIcon, {
    style: { width: diff, height: diff },
    size: "custom",
    color: higherContrastColor,
  });
  const obj7 = { style: { width: diff, height: diff }, size: "custom", color: higherContrastColor };
}
