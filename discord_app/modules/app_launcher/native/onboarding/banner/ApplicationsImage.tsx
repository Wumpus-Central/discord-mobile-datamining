// === Module 11589: ApplicationsImage ===

// Module 11589 (ApplicationsImage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import preloadDefault from "preload" /* 5461 */;
import handleApplicationSelected from "handleApplicationSelected" /* 11590 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { appIconContainer: null, appIconLeftContainer: null, appIconRightContainer: null, appIcon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.sm + 3, position: "absolute", padding: 3 };
createCacheKey[0] = createCacheKey;
let items = [{ rotate: "-10deg" }];
createCacheKey[1] = { transform: items };
let items1 = [{ rotate: "15deg" }];
createCacheKey[2] = { left: ThemesDefault.space.PX_32, transform: items1 };
let obj1 = { left: ThemesDefault.space.PX_32, transform: items1 };
createCacheKey[3] = { borderRadius: ThemesDefault.radii.sm, width: 36, height: 36 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj2 = { borderRadius: ThemesDefault.radii.sm, width: 36, height: 36 };
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default function ApplicationsImage(arg0) {
  ({ firstApplication, secondApplication } = arg0);
  const tmp = callback3();
  let appLauncherIconSource = null;
  if (null != firstApplication) {
    let obj = handleApplicationSelected;
    appLauncherIconSource = obj.getAppLauncherIconSource(firstApplication);
  }
  let appLauncherIconSource1 = null;
  if (null != secondApplication) {
    obj1 = handleApplicationSelected;
    appLauncherIconSource1 = obj1.getAppLauncherIconSource(secondApplication);
  }
  let tmp8 = null != appLauncherIconSource;
  if (tmp8) {
    obj = { style: null, source: null };
    obj[0] = tmp.appIcon;
    obj[1] = appLauncherIconSource;
    tmp8 = callback(preloadDefault, obj);
  }
  let tmp12 = null != appLauncherIconSource1;
  if (tmp12) {
    obj = { style: null, source: null };
    obj[0] = tmp.appIcon;
    obj[1] = appLauncherIconSource1;
    tmp12 = callback(preloadDefault, obj);
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