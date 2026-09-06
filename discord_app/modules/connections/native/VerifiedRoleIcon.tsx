// === Module 7204: VerifiedRoleIcon ===

// Module 7204 (VerifiedRoleIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import LinkIcon from "LinkIcon" /* 4503 */;
import useRoleIcon from "useRoleIcon" /* 7186 */;
import getHigherContrastColor from "getHigherContrastColor" /* 7205 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

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
  const diff = size - size / 8 * 2;
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
};