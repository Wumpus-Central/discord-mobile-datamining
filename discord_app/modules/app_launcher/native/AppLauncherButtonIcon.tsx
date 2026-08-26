// discord_app/modules/app_launcher/native/AppLauncherButtonIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  style = style.style;
  const merged = Object.assign(style, Object.create(null));
  let obj = { style: { overflow: "hidden" }, children: null };
  if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    obj = {};
    const merged1 = Object.assign(merged);
    const items = [style, ];
    obj = { transform: null };
    const items1 = [{ rotate: "45deg" }];
    obj[0] = items1;
    items[1] = obj;
    obj.style = items;
    let tmp4Result = tmp4(tmp6(9923).PlusLargeIcon, obj);
  } else {
    obj1 = { style: null };
    obj1[0] = style;
    const merged2 = Object.assign(merged);
    tmp4Result = tmp4(tmp6(7902).AppsIcon, obj1);
  }
  obj[1] = tmp4Result;
  return <View style={{ overflow: "hidden" }}>{null}</View>;
};