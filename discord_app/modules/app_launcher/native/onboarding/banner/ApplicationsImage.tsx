// discord_app/modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import AppLauncherNativeUtils from "../../AppLauncherNativeUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { appIconContainer: null, appIconLeftContainer: null, appIconRightContainer: null, appIcon: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.sm + 3,
  position: "absolute",
  padding: 3,
};
createStyles.appIconContainer = createStyles;
let obj1 = { transform: null };
let items = [{ rotate: "-10deg" }];
obj1.transform = items;
createStyles.appIconLeftContainer = obj1;
let obj2 = { left: nativeDefault.space.PX_32, transform: null };
let items1 = [{ rotate: "15deg" }];
obj2.transform = items1;
createStyles.appIconRightContainer = obj2;
let size = { borderRadius: nativeDefault.radii.sm, width: 36, height: 36 };
createStyles.appIcon = size;
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ApplicationsImage.tsx");

export default function ApplicationsImage(arg0) {
  ({ firstApplication, secondApplication } = arg0);
  const tmp = closure_7();
  let appLauncherIconSource = null;
  if (null != firstApplication) {
    let obj = AppLauncherNativeUtils;
    appLauncherIconSource = obj.getAppLauncherIconSource(firstApplication);
  }
  let appLauncherIconSource1 = null;
  if (null != secondApplication) {
    let obj1 = AppLauncherNativeUtils;
    appLauncherIconSource1 = obj1.getAppLauncherIconSource(secondApplication);
  }
  let tmp8 = null != appLauncherIconSource;
  if (tmp8) {
    obj = { style: tmp.appIcon, source: appLauncherIconSource };
    tmp8 = React4(FastImageDefault, obj);
  }
  let tmp12 = null != appLauncherIconSource1;
  if (tmp12) {
    obj = { style: tmp.appIcon, source: appLauncherIconSource1 };
    tmp12 = React4(FastImageDefault, obj);
  }
  obj1 = { children: null };
  const obj2 = { style: null, children: tmp12 };
  const items = [,];
  ({ appIconContainer: arr[0], appIconLeftContainer: arr[1] } = tmp);
  obj2.style = items;
  const items1 = [React4(View, obj2)];
  const obj3 = { style: null, children: tmp8 };
  const items2 = [,];
  ({ appIconContainer: arr3[0], appIconRightContainer: arr3[1] } = tmp);
  obj3.style = items2;
  items1[1] = React4(View, obj3);
  obj1.children = items1;
  return timestampProducer(hasOwnProperty, obj1);
}
export const APP_ICON_SIZE = 36;
