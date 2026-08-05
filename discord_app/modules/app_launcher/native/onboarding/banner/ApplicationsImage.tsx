// discord_app/modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { preload } from "../../../../../components_native/common/FastImage.tsx";
import { handleApplicationSelected } from "../../AppLauncherNativeUtils.tsx";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { appIconContainer: null, appIconLeftContainer: null, appIconRightContainer: null, appIcon: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.sm + 3, position: "absolute", padding: 3 };
createCacheKey[0] = createCacheKey;
let items = [{ rotate: "-10deg" }];
createCacheKey[1] = { transform: items };
let items1 = [{ rotate: "15deg" }];
createCacheKey[2] = { left: require("Themes").space.PX_32, transform: items1 };
let obj1 = { left: require("Themes").space.PX_32, transform: items1 };
createCacheKey[3] = { borderRadius: require("Themes").radii.sm, width: 36, height: 36 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderRadius: require("Themes").radii.sm, width: 36, height: 36 };
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default function ApplicationsImage(arg0) {
  let firstApplication;
  let secondApplication;
  ({ firstApplication, secondApplication } = arg0);
  const tmp = createCacheKey();
  let appLauncherIconSource = null;
  if (null != firstApplication) {
    let obj = handleApplicationSelected /* handleApplicationSelected */;
    appLauncherIconSource = obj.getAppLauncherIconSource(firstApplication);
  }
  let appLauncherIconSource1 = null;
  if (null != secondApplication) {
    let obj1 = handleApplicationSelected /* handleApplicationSelected */;
    appLauncherIconSource1 = obj1.getAppLauncherIconSource(secondApplication);
  }
  let tmp8 = null != appLauncherIconSource;
  if (tmp8) {
    obj = { style: null, source: null };
    obj[0] = tmp.appIcon;
    obj[1] = appLauncherIconSource;
    tmp8 = callback(preload, obj);
  }
  let tmp12 = null != appLauncherIconSource1;
  if (tmp12) {
    obj = { style: null, source: null };
    obj[0] = tmp.appIcon;
    obj[1] = appLauncherIconSource1;
    tmp12 = callback(preload, obj);
  }
  obj1 = { children: null };
  const items = [, ];
  ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp);
  const items1 = [callback(View, { style: items, children: tmp12 }), ];
  const items2 = [, ];
  ({ appIconContainer: arr3[0], appIconRightContainer: arr3[1] } = tmp);
  items1[1] = callback(View, { style: items2, children: tmp8 });
  obj1[0] = items1;
  return callback2(closure_5, obj1);
};
export const APP_ICON_SIZE = 36;