// discord_app/modules/connections/native/OfficialConnectionIcon.tsx
import "noop";
import { View } from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/10954_registerAsset.js";
import { registerAsset } from "../../../../_runtime/10955_registerAsset.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../design/void/native.tsx";
import { useRoleIcon } from "../../guild_boosting/native/RoleIconUtils.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ DEFAULT_ROLE_COLOR_HEX: c4, EMPTY_STRING_SNOWFLAKE_ID: c5 } = ME);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ verifiedCheck: { position: "absolute", left: 0, top: 0 } });
const result = require("ME").fileFinishedImporting("modules/connections/native/OfficialConnectionIcon.tsx");

export default function OfficialConnectionIcon(arg0) {
  let displayRoleIcon;
  let guildId;
  let role;
  let roleColor;
  let roleId;
  let size;
  let style;
  ({ role, roleId, roleColor, size, style } = arg0);
  ({ guildId, displayRoleIcon } = arg0);
  const tmp = callback3();
  let obj = { width: size, height: size };
  let obj1 = useRoleIcon;
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
  let PRIMARY_630 = Themes.unsafe_rawColors.WHITE;
  let tmp2Result = tmp2(688);
  tmp2Result = tmp2(688);
  if (tmp2Result.getDarkness(hex2intResult) < 0.3) {
    PRIMARY_630 = tmp7(712).unsafe_rawColors.PRIMARY_630;
  }
  obj1 = { style: items1, children: null };
  items1 = [style, obj];
  const obj2 = { style: items2, size: null, source: null, color: null };
  items2 = [tmp.verifiedCheck, obj];
  obj2[1] = Button.Icon.Sizes.CUSTOM;
  obj2[2] = registerAsset;
  obj2[3] = roleColor;
  const items3 = [callback(Button.Icon, obj2), ];
  const obj3 = { style: items4, size: null, source: null, color: null };
  items4 = [tmp.verifiedCheck, obj];
  obj3[1] = Button.Icon.Sizes.CUSTOM;
  obj3[2] = registerAsset;
  obj3[3] = PRIMARY_630;
  items3[1] = callback(Button.Icon, obj3);
  obj1[1] = items3;
  return callback2(View, obj1);
};