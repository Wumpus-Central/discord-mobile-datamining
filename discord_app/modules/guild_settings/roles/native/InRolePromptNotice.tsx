// discord_app/modules/guild_settings/roles/native/InRolePromptNotice.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import hasFlag from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../_runtime/08916_registerAsset.js";
import isRolePowerful from "../../GuildSettingsUtils.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { RoleFlags } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
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