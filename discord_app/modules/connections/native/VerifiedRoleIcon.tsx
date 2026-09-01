// discord_app/modules/connections/native/VerifiedRoleIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinkIcon from "../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import useRoleIcon from "../../guild_boosting/native/RoleIconUtils.tsx";
import getHigherContrastColor from "../../user_profile/utils/getHigherContrastColor.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ DEFAULT_ROLE_COLOR_HEX: c3, EMPTY_STRING_SNOWFLAKE_ID: c4 } = ME);
const WHITE = ThemesDefault.unsafe_rawColors.WHITE;
const PRIMARY_630 = ThemesDefault.unsafe_rawColors.PRIMARY_630;
createCacheKey = { iconContainer: null };
createCacheKey = { alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

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
    roleColor = closure_3;
  }
  let obj = getHigherContrastColor;
  const items = [WHITE, PRIMARY_630];
  const diff = size - (size / 8) * 2;
  const higherContrastColor = obj.getHigherContrastColor({ backgroundColor: roleColor, colors: items });
  obj1 = useRoleIcon;
  obj = { guildId, roleId: null, size: null };
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = closure_4;
  }
  obj[1] = roleId;
  obj[2] = diff;
  let roleIcon = obj1.useRoleIcon(obj);
  obj = { style: items1, children: null };
  items1 = [style, callback().iconContainer, { width: size, height: size, backgroundColor: roleColor }];
  if (false === displayRoleIcon) {
    obj1 = { style: null, size: "custom", color: null };
    const obj2 = { width: null, height: null };
    obj2[0] = diff;
    obj2[1] = diff;
    obj1[0] = obj2;
    obj1[2] = higherContrastColor;
    roleIcon = tmp9(LinkIcon.LinkIcon, obj1);
  }
  obj[1] = roleIcon;
  return <View style={items1}>{null}</View>;
}
