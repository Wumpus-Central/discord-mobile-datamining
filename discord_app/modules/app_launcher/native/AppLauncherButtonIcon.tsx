import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = function AppLauncherButtonIcon(style) {
  style = style.style;
  const merged = Object.assign(style, Object.create(null));
  let obj = { style: { overflow: "hidden" }, children: null };
  if (tmp3 === require(1579) /* KeyboardTypes */.KeyboardTypes.APP_LAUNCHER) {
    obj = {};
    const merged1 = Object.assign(merged);
    const items = [style, ];
    obj = { transform: null };
    const items1 = [{ rotate: "45deg" }];
    obj[0] = items1;
    items[1] = obj;
    obj.style = items;
    let tmp4Result = tmp4(tmp6(9625).PlusLargeIcon, obj);
  } else {
    const obj1 = { style: null };
    obj1[0] = style;
    const merged2 = Object.assign(merged);
    tmp4Result = tmp4(tmp6(7611).AppsIcon, obj1);
  }
  obj[1] = tmp4Result;
  return <View style={{ overflow: "hidden" }}>{null}</View>;
};