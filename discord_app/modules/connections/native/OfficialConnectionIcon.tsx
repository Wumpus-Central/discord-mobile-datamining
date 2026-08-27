// discord_app/modules/connections/native/OfficialConnectionIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import useRoleIcon from "../../guild_boosting/native/RoleIconUtils.tsx";
import registerAssetDefault from "../../../../_runtime/11082_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/11083_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ DEFAULT_ROLE_COLOR_HEX: c4, EMPTY_STRING_SNOWFLAKE_ID: c5 } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const result = require("set").fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default function OfficialConnectionIcon(arg0) {
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = callback3();
  let obj = { width: size, height: size };
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
  let tmp2Result = tmp2(688);
  tmp2Result = tmp2(688);
  if (tmp2Result.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = tmp7(712).unsafe_rawColors.PRIMARY_630;
  }
  obj1 = { style: items1, children: null };
  items1 = [style, obj];
  hex2intResult = tmp2Result.hex2int(roleColor);
  const items2 = [tmp.verifiedCheck, obj];
  const items3 = [callback(Button.Icon, { style: items2, size: Button.Icon.Sizes.CUSTOM, source: registerAssetDefault, color: roleColor }), ];
  const obj2 = { style: items2, size: Button.Icon.Sizes.CUSTOM, source: registerAssetDefault, color: roleColor };
  const items4 = [tmp.verifiedCheck, obj];
  items3[1] = callback(Button.Icon, { style: items4, size: Button.Icon.Sizes.CUSTOM, source: registerAssetDefault2, color: PRIMARY_630 });
  obj1[1] = items3;
  return callback2(View, obj1);
};