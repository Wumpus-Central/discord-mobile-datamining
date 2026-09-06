// discord_app/modules/connections/native/VerifiedRoleIcon.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import RoleIconUtils from "../../guild_boosting/native/RoleIconUtils.tsx";
import getHigherContrastColor from "../../user_profile/utils/getHigherContrastColor.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ DEFAULT_ROLE_COLOR_HEX: c3, EMPTY_STRING_SNOWFLAKE_ID: closure_4 } = Constants);
const jsx = fn(21).jsx;
const WHITE = nativeDefault.unsafe_rawColors.WHITE;
const PRIMARY_630 = nativeDefault.unsafe_rawColors.PRIMARY_630;
fn(4560);
let createStyles = { iconContainer: null };
createStyles = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
createStyles.iconContainer = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
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
    roleColor = React3;
  }
  let obj = { backgroundColor: roleColor, colors: null };
  const items = [WHITE, PRIMARY_630];
  obj.colors = items;
  const diff = size - (size / 8) * 2;
  const higherContrastColor = obj.getHigherContrastColor(obj);
  let obj2 = RoleIconUtils;
  obj = { guildId, roleId: null, size: null };
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = React4;
  }
  obj.roleId = roleId;
  obj.size = diff;
  let roleIcon = obj2.useRoleIcon(obj);
  const obj1 = { style: null, children: null };
  const items1 = [style, closure_8().iconContainer, { width: size, height: size, backgroundColor: roleColor }];
  obj1.style = items1;
  if (false === displayRoleIcon) {
    obj2 = { style: null, size: "custom", color: null };
    size = { width: diff, height: diff };
    obj2.style = size;
    obj2.color = higherContrastColor;
    roleIcon = tmp9(LinkIcon.LinkIcon, obj2);
  }
  obj1.children = roleIcon;
  return <View style={null}>{null}</View>;
}
