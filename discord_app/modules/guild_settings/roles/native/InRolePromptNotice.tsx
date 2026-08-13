// discord_app/modules/guild_settings/roles/native/InRolePromptNotice.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { RoleFlags } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../_runtime/09112_registerAsset.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { hasFlag } from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { promptRow: null, promptText: null, icon: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_4, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginLeft: require("Themes").space.PX_4 };
createCacheKey[2] = { height: 16, width: 16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginLeft: require("Themes").space.PX_4 };
const result = require("ME").fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
  role = role.role;
  let string = createCacheKey();
  let stringResult = dependencyMap;
  let obj = hasFlag;
  if (!obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    return null;
  } else {
    obj = { style: null, children: null };
    obj[0] = string.promptRow;
    const tmpResult = tmp(16799);
    let Icon = tmp(1297).Icon;
    if (isRolePowerfulResult) {
      obj = { style: null, source: null, color: null };
      obj[0] = string.icon;
      obj[1] = registerAsset;
      obj[2] = Themes.unsafe_rawColors.YELLOW_300;
      const items = [tmp6(Icon, obj), ];
      const obj1 = { style: null, variant: "text-sm/medium", children: null };
      obj1[0] = string.promptText;
      const intl2 = tmp(1236).intl;
      string = intl2.string;
      stringResult = string(tmp(1236).t.YRbgXz);
      obj1[2] = stringResult;
      Icon = tmp6(tmp(4338).Text, obj1);
      items[1] = Icon;
      obj[1] = items;
      let tmp4Result = tmp4(tmp5, obj);
    } else {
      const obj2 = { style: null, source: null };
      obj2[0] = string.icon;
      obj2[1] = registerAsset;
      const items1 = [tmp6(Icon, obj2), ];
      const obj3 = { style: null, variant: "text-sm/medium", children: null };
      obj3[0] = string.promptText;
      const intl = tmp(1236).intl;
      obj3[2] = intl.string(tmp(1236).t.mqeO2v);
      items1[1] = tmp6(tmp(4338).Text, obj3);
      obj[1] = items1;
      tmp4Result = tmp4(tmp5, obj);
    }
    isRolePowerfulResult = tmp(16799).isRolePowerful(role);
  }
};