// === Module 12301: ApplicationsImage ===

// Module 12301 (ApplicationsImage)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5799 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12302 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { appIconContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.sm + 3, position: "absolute", padding: 3 }, appIconLeftContainer: null, appIconRightContainer: null, appIcon: null };
let obj4 = { transform: null };
let items = [{ rotate: "-10deg" }];
obj4.transform = items;
obj2.appIconLeftContainer = obj4;
let obj5 = { left: nativeDefault.space.PX_32, transform: null };
let items1 = [{ rotate: "15deg" }];
obj5.transform = items1;
obj2.appIconRightContainer = obj5;
let size = { borderRadius: nativeDefault.radii.sm, width: 36, height: 36 };
obj2.appIcon = size;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default function ApplicationsImage(arg0) {
  ({ firstApplication, secondApplication } = arg0);
  const tmp = closure_7();
  let appLauncherIconSource = null;
  if (null != firstApplication) {
    appLauncherIconSource = AppLauncherNativeUtils.getAppLauncherIconSource(firstApplication);
  }
  let appLauncherIconSource1 = null;
  if (null != secondApplication) {
    appLauncherIconSource1 = AppLauncherNativeUtils.getAppLauncherIconSource(secondApplication);
  }
  let tmp8 = null != appLauncherIconSource;
  if (tmp8) {
    const obj3 = { style: tmp.appIcon, source: appLauncherIconSource };
    tmp8 = React4(FastImageDefault, obj3);
  }
  let tmp12 = null != appLauncherIconSource1;
  if (tmp12) {
    const obj4 = { style: tmp.appIcon, source: appLauncherIconSource1 };
    tmp12 = React4(FastImageDefault, obj4);
  }
  const obj5 = { children: null };
  const obj6 = { style: null, children: tmp12 };
  const items = [, ];
  ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp);
  obj6.style = items;
  const items1 = [React4(View, obj6), ];
  const obj7 = { style: null, children: tmp8 };
  const items2 = [, ];
  ({ appIconContainer: arr3[0], appIconRightContainer: arr3[1] } = tmp);
  obj7.style = items2;
  items1[1] = React4(View, obj7);
  obj5.children = items1;
  return timestampProducer(hasOwnProperty, obj5);
};
export const APP_ICON_SIZE = 36;