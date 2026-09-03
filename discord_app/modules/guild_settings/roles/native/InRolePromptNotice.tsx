// discord_app/modules/guild_settings/roles/native/InRolePromptNotice.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import hasFlag from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import registerAssetDefault from "../../../../../_runtime/09611_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { RoleFlags } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { promptRow: null, promptText: null, icon: null };
createCacheKey = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingBottom: ThemesDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: ThemesDefault.space.PX_4 };
createCacheKey[2] = { height: 16, width: 16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginLeft: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

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
    const tmpResult = tmp(17471);
    let Icon = tmp(1296).Icon;
    if (isRolePowerfulResult) {
      obj = { style: null, source: null, color: null };
      obj[0] = string.icon;
      obj[1] = registerAssetDefault;
      obj[2] = ThemesDefault.unsafe_rawColors.YELLOW_300;
      const items = [tmp6(Icon, obj)];
      obj1 = { style: null, variant: "text-sm/medium", children: null };
      obj1[0] = string.promptText;
      const intl2 = tmp(1233).intl;
      string = intl2.string;
      stringResult = string(tmp(1233).t.YRbgXz);
      obj1[2] = stringResult;
      Icon = tmp6(tmp(4474).Text, obj1);
      items[1] = Icon;
      obj[1] = items;
      let tmp4Result = tmp4(tmp5, obj);
    } else {
      const obj2 = { style: null, source: null };
      obj2[0] = string.icon;
      obj2[1] = registerAssetDefault;
      const items1 = [tmp6(Icon, obj2)];
      const obj3 = { style: null, variant: "text-sm/medium", children: null };
      obj3[0] = string.promptText;
      const intl = tmp(1233).intl;
      obj3[2] = intl.string(tmp(1233).t.mqeO2v);
      items1[1] = tmp6(tmp(4474).Text, obj3);
      obj[1] = items1;
      tmp4Result = tmp4(tmp5, obj);
    }
    isRolePowerfulResult = tmp(17471).isRolePowerful(role);
  }
}
