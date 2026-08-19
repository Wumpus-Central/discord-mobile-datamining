// === Module 11407: AppLauncherButtonIcon ===

// Module 11407 (AppLauncherButtonIcon)
import noopAll from "noop" /* 19 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import AppsIcon from "AppsIcon" /* 7974 */;
import PlusLargeIcon from "PlusLargeIcon" /* 9975 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  style = style.style;
  const merged = Object.assign(style, Object.create(null));
  let obj = { style: { overflow: "hidden" }, children: null };
  if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
    const merged1 = Object.assign(merged);
    const items = [style, ];
    obj = { transform: null };
    const items1 = [{ rotate: "45deg" }];
    obj[0] = items1;
    items[1] = obj;
    obj.style = items;
    let tmp4Result = jsx(PlusLargeIcon.PlusLargeIcon, { transform: null });
  } else {
    obj1 = { style: null };
    obj1[0] = style;
    const merged2 = Object.assign(merged);
    tmp4Result = jsx(AppsIcon.AppsIcon, { style: null });
  }
  obj[1] = tmp4Result;
  return <View style={{ overflow: "hidden" }}>{null}</View>;
};