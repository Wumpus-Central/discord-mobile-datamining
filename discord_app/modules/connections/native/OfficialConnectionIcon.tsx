// === Module 10758: OfficialConnectionIcon ===

// Module 10758 (OfficialConnectionIcon)
import noopAll from "noop" /* 19 */;
import int2hslRaw from "int2hslRaw" /* 688 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import useRoleIcon from "useRoleIcon" /* 7163 */;
import registerAssetDefault from "registerAsset" /* 10759 */;
import registerAssetDefault2 from "registerAsset" /* 10760 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ DEFAULT_ROLE_COLOR_HEX: c4, EMPTY_STRING_SNOWFLAKE_ID: c5 } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const result = require("obj132").fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default function OfficialConnectionIcon(arg0) {
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = callback3();
  obj1 = useRoleIcon;
  let obj = { guildId, roleId: null, size: null };
  if (roleId == null) {
    let id;
    if (role != null) {
      id = role.id;
    }
    roleId = id;
  }
  if (roleId == null) {
    roleId = closure_5;
  }
  obj[1] = roleId;
  obj[2] = size;
  const roleIcon = obj1.useRoleIcon(obj);
  if (false !== displayRoleIcon) {
    if (null != roleIcon) {
      obj = { style: null, children: null };
      const items = [style, obj];
      obj[0] = items;
      obj[1] = roleIcon;
      return callback(View, obj);
    }
  }
  if (roleColor == null) {
    let colorString;
    if (role != null) {
      colorString = role.colorString;
    }
    roleColor = colorString;
  }
  if (roleColor == null) {
    roleColor = closure_4;
  }
  let PRIMARY_630 = ThemesDefault.unsafe_rawColors.WHITE;
  const tmp2Result = int2hslRaw;
  if (tmp2Result.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = ThemesDefault.unsafe_rawColors.PRIMARY_630;
  }
  obj1 = { style: items1, children: null };
  items1 = [style, obj];
  hex2intResult = tmp2Result.hex2int(roleColor);
  const items2 = [tmp.verifiedCheck, obj];
  const items3 = [callback(Button.Icon, { style: items2, size: Button.Icon.Sizes.CUSTOM, source: registerAssetDefault, color: roleColor }), ];
  const items4 = [tmp.verifiedCheck, obj];
  items3[1] = callback(Button.Icon, { style: items4, size: Button.Icon.Sizes.CUSTOM, source: registerAssetDefault2, color: PRIMARY_630 });
  obj1[1] = items3;
  return callback2(View, obj1);
};