// === Module 16851: InRolePromptNotice ===

// Module 16851 (InRolePromptNotice)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import hasFlag from "hasFlag" /* 1403 */;
import Text from "Text" /* 4734 */;
import registerAssetDefault from "registerAsset" /* 8916 */;
import isRolePowerful from "isRolePowerful" /* 16852 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { RoleFlags } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: ThemesDefault.space.PX_4 };
createCacheKey[2] = { height: 16, width: 16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
  role = role.role;
  let string = callback();
  let stringResult = dependencyMap;
  let obj = hasFlag;
  if (!obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj[0] = string.promptRow;
    const tmpResult = isRolePowerful;
    let Icon = Button.Icon;
    if (isRolePowerfulResult) {
      obj = { style: null, source: null, color: null };
      obj[0] = string.icon;
      obj[1] = registerAssetDefault;
      obj[2] = ThemesDefault.unsafe_rawColors.YELLOW_300;
      const items = [callback(Icon, obj), ];
      obj1 = { style: null, variant: "text-sm/medium", children: null };
      obj1[0] = string.promptText;
      const intl2 = getSystemLocale.intl;
      string = intl2.string;
      stringResult = string(getSystemLocale.t.YRbgXz);
      obj1[2] = stringResult;
      Icon = callback(Text.Text, obj1);
      items[1] = Icon;
      obj[1] = items;
      let tmp4Result = callback2(View, obj);
    } else {
      const obj2 = { style: null, source: null };
      obj2[0] = string.icon;
      obj2[1] = registerAssetDefault;
      const items1 = [callback(Icon, obj2), ];
      const obj3 = { style: null, variant: "text-sm/medium", children: null };
      obj3[0] = string.promptText;
      const intl = getSystemLocale.intl;
      obj3[2] = intl.string(getSystemLocale.t.mqeO2v);
      items1[1] = callback(Text.Text, obj3);
      obj[1] = items1;
      tmp4Result = callback2(View, obj);
    }
    isRolePowerfulResult = isRolePowerful.isRolePowerful(role);
  }
};