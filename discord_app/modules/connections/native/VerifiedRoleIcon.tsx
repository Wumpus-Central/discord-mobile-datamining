// discord_app/modules/connections/native/VerifiedRoleIcon.tsx
import "noop";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ DEFAULT_ROLE_COLOR_HEX: c3, EMPTY_STRING_SNOWFLAKE_ID: c4 } = ME);
const WHITE = require("Themes").unsafe_rawColors.WHITE;
const PRIMARY_630 = require("Themes").unsafe_rawColors.PRIMARY_630;
createCacheKey = { iconContainer: null };
createCacheKey = { alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/connections/native/VerifiedRoleIcon.tsx");

export default function VerifiedRoleIcon(arg0) {
  let displayRoleIcon;
  let guildId;
  let role;
  let roleColor;
  let roleId;
  let size;
  let style;
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
  let obj = require(5564) /* getHigherContrastColor */;
  const items = [WHITE, PRIMARY_630];
  const diff = size - size / 8 * 2;
  const higherContrastColor = obj.getHigherContrastColor({ backgroundColor: roleColor, colors: items });
  let obj1 = require(5543) /* useRoleIcon */;
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
  items1 = [style, createCacheKey().iconContainer, { width: size, height: size, backgroundColor: roleColor }];
  if (false === displayRoleIcon) {
    obj1 = { style: null, size: "custom", color: null };
    const obj2 = { width: null, height: null };
    obj2[0] = diff;
    obj2[1] = diff;
    obj1[0] = obj2;
    obj1[2] = higherContrastColor;
    roleIcon = tmp9(require(4137) /* LinkIcon */.LinkIcon, obj1);
  }
  obj[1] = roleIcon;
  return <View style={items1}>{null}</View>;
};