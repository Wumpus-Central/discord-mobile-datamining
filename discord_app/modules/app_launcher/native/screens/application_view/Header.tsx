import "Button";
import { View } from "AppLauncherBackButton";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleDismissWithDismissed from "handleDismissWithDismissed";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import ME from "ME";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";

let DEFAULT_CONTENT_PADDING;
let SCREEN_BACKGROUND_COLOR;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = APP_LAUNCHER_BUILT_IN_SECTION_ICON);
({ AnalyticEvents: closure_6, ApplicationFlags: error } = ME);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
const xl = require("Themes").radii.xl;
let c11 = 105;
createCacheKey = { headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 }, expandedHeaderBanner: { height: 105 }, appIconMask: null, collapsedHeaderBanner: null, collapsedHeaderBannerOverlay: null, loadingIcon: null, actionsWrapper: null };
createCacheKey = { position: "absolute", padding: 4, bottom: -40, left: 16, backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: require("Themes").radii.xl + 4 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: require("Themes").space.PX_12 };
createCacheKey[4] = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let obj1 = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: require("Themes").space.PX_12 };
createCacheKey[5] = { height: 72, width: 72, borderRadius: xl, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
let obj2 = { height: 72, width: 72, borderRadius: xl, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[6] = { flexDirection: "row", display: "flex", gap: require("Themes").space.PX_16, position: "absolute", right: require("Themes").space.PX_12, top: require("Themes").space.PX_12, alignItems: "center", justifyContent: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_13 = { code: "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}" };
let closure_14 = { code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}" };
let closure_15 = { code: "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}" };
let closure_16 = { code: "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}" };
let obj3 = { flexDirection: "row", display: "flex", gap: require("Themes").space.PX_16, position: "absolute", right: require("Themes").space.PX_12, top: require("Themes").space.PX_12, alignItems: "center", justifyContent: "center" };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default function Header(application) {
  let onAddAppMenuClick;
  let onPressBack;
  application = application.application;
  let scrollOffsetY = application;
  scrollOffsetY = application.scrollOffsetY;
  let importDefault;
  let dependencyMap;
  let currentUser2;
  ({ onPressBack, onAddAppMenuClick } = application);
  let obj = scrollOffsetY(589);
  let items = [handleDismissWithDismissed];
  importDefault = obj.useStateFromStores(items, () => handleDismissWithDismissed.entrypoint());
  const tmp3 = createCacheKey();
  let appLauncherIconSource = null;
  if (null != application) {
    let tmpResult = tmp(11350);
    appLauncherIconSource = tmpResult.getAppLauncherIconSource(application);
  }
  tmpResult = tmp(3989);
  let str = tmpResult.useToken(importDefault(712).colors.BACKGROUND_BASE_LOW);
  let tmp7 = appLauncherIconSource;
  if (typeof appLauncherIconSource !== "number") {
    let uri;
    if (appLauncherIconSource != null) {
      uri = appLauncherIconSource.uri;
    }
    tmp7 = uri;
  }
  if (str == null) {
    str = "";
  }
  const tmp6Result = importDefault(8045)(tmp7, str);
  if (null != appLauncherIconSource) {
    obj = { iconSource: null, iconBorderRadius: null, iconSize: 72 };
    obj[0] = appLauncherIconSource;
    obj[1] = xl;
    let tmp12 = callback(tmp5(11355), obj);
    let tmp13 = callback;
  } else {
    obj = { style: null };
    obj[0] = tmp3.loadingIcon;
    tmp12 = callback(currentUser2, obj);
    tmp13 = callback;
  }
  const tmp6 = importDefault(8045);
  const fn = function n() {
    let obj = { transform: null };
    obj = { translateY: null };
    const items = [0, outer1_11];
    obj[0] = scrollOffsetY(_undefined[9]).interpolate(scrollOffsetY.get(), items, [0, -105], "clamp");
    const items1 = [obj];
    obj[0] = items1;
    return obj;
  };
  const tmpResult1 = scrollOffsetY(4146);
  fn.__closure = { interpolate: scrollOffsetY(4146).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: c11 };
  fn.__workletHash = 2572905048492;
  fn.__initData = closure_13;
  const animatedStyle = tmpResult1.useAnimatedStyle(fn);
  let obj1 = { interpolate: scrollOffsetY(4146).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: c11 };
  const fn2 = function n() {
    let obj = { transform: null };
    obj = { translateY: null };
    const items = [0, outer1_11];
    const items1 = [0, outer1_11];
    obj[0] = scrollOffsetY(_undefined[9]).interpolate(scrollOffsetY.get(), items, items1, "clamp");
    const items2 = [obj];
    obj[0] = items2;
    return obj;
  };
  const tmpResult2 = scrollOffsetY(4146);
  fn2.__closure = { interpolate: scrollOffsetY(4146).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: c11 };
  fn2.__workletHash = 8190094903650;
  fn2.__initData = closure_14;
  const animatedStyle1 = tmpResult2.useAnimatedStyle(fn2);
  const obj2 = { interpolate: scrollOffsetY(4146).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: c11 };
  const fn3 = function o() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: null };
    const items = [52.5, outer1_11];
    obj[0] = scrollOffsetY(_undefined[9]).interpolate(scrollOffsetY.get(), items, [16, 0], "clamp");
    const items1 = [obj];
    obj[0] = items1;
    const obj3 = scrollOffsetY(_undefined[9]);
    const items2 = [52.5, outer1_11];
    obj[1] = scrollOffsetY(_undefined[9]).interpolate(scrollOffsetY.get(), items2, [0, 1], "clamp");
    return obj;
  };
  const tmpResult3 = scrollOffsetY(4146);
  fn3.__closure = { interpolate: scrollOffsetY(4146).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: c11 };
  fn3.__workletHash = 14190901941859;
  fn3.__initData = closure_15;
  const animatedStyle2 = tmpResult3.useAnimatedStyle(fn3);
  let obj3 = { interpolate: scrollOffsetY(4146).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: c11 };
  const fn4 = function n() {
    const obj = { opacity: null };
    const items = [52.5, outer1_11];
    obj[0] = scrollOffsetY(_undefined[9]).interpolate(scrollOffsetY.get(), items, [0, 0.5], "clamp");
    return obj;
  };
  const tmpResult4 = scrollOffsetY(4146);
  fn4.__closure = { interpolate: scrollOffsetY(4146).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE: c11 };
  fn4.__workletHash = 9589752719246;
  fn4.__initData = closure_16;
  let str2 = "";
  const animatedStyle3 = tmpResult4.useAnimatedStyle(fn4);
  if (null != application) {
    str2 = tmp(8149).getSectionName(application);
    const tmpResult5 = tmp(8149);
  }
  let hasApplicationFlagResult = null != application;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = "flags" in application;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = tmp(7510).hasApplicationFlag(application, constants.EMBEDDED);
    const tmpResult6 = tmp(7510);
  }
  dependencyMap = hasApplicationFlagResult;
  currentUser2 = currentUser.getCurrentUser();
  const obj5 = { style: items1, pointerEvents: "box-none", children: null };
  items1 = [tmp3.headerContainer, animatedStyle];
  const obj6 = { style: items2, pointerEvents: "none", children: null };
  items2 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  obj6[2] = tmp13(currentUser2, { style: tmp3.appIconMask, children: tmp12 });
  const items3 = [tmp13(currentUser2, obj6), , ];
  const obj8 = { style: items4, pointerEvents: "box-none", children: null };
  items4 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, animatedStyle1];
  const items5 = [tmp3.collapsedHeaderBannerOverlay, animatedStyle3];
  const items6 = [tmp13(importDefault(4146).View, { style: items5, pointerEvents: "none" }), tmp13(importDefault(11431), { onPress: onPressBack }), , ];
  const obj9 = { style: animatedStyle2, pointerEvents: "none", children: null };
  obj9[2] = tmp13(scrollOffsetY(4281).Heading, { variant: "heading-lg/bold", color: "text-overlay-light", children: str2 });
  items6[2] = tmp13(importDefault(4146).View, obj9);
  items6[3] = tmp13(scrollOffsetY(1297).Spacer, { size: 32, pointerEvents: "none" });
  obj8[2] = items6;
  items3[1] = callback2(importDefault(4146).View, obj8);
  let tmp22Result = null;
  if (null != application) {
    tmp22Result = null;
    if (tmpResult7.isRealApplication(application)) {
      const obj10 = { style: null, children: null };
      obj10[0] = tmp3.actionsWrapper;
      const obj11 = { size: "sm", variant: "secondary-overlay", icon: null, onPress: null, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
      obj11[2] = tmp5(4230);
      obj11[3] = function onPress() {
        let obj = callback(_undefined[22]);
        obj = { application_id: scrollOffsetY.id, source: callback };
        obj.track(outer1_6.APP_LAUNCHER_APPLICATION_LINK_COPIED, obj);
        const obj4 = scrollOffsetY(_undefined[24]);
        if (_undefined) {
          obj = { applicationId: null, referrerId: null };
          obj[0] = tmp2.id;
          let id;
          if (id != null) {
            id = id.id;
          }
          obj[1] = id;
          let activityLaunchURL = obj4.getActivityLaunchURL(obj);
        } else {
          const obj1 = { id: null };
          obj1[0] = tmp2.id;
          let tmp4Result = tmp4(tmp[15]);
          const merged = Object.assign(tmp4Result.getInstallAppProps(tmp2));
          activityLaunchURL = obj4.getApplicationInstallURL(obj1);
        }
        scrollOffsetY(_undefined[23]).copy(activityLaunchURL);
        tmp4Result = tmp4(tmp[25]);
        tmp4Result.presentLinkCopied();
      };
      const intl = tmp(1236).intl;
      obj11[4] = intl.string(tmp(1236).t.XWDihq);
      const items7 = [tmp13(tmp(7672).IconButton, obj11), ];
      const obj12 = { application: null, onAddAppMenuClick: null };
      obj12[0] = application;
      obj12[1] = onAddAppMenuClick;
      items7[1] = tmp13(tmp5(11433), obj12);
      obj10[1] = items7;
      tmp22Result = tmp22(currentUser2, obj10);
    }
    tmpResult7 = tmp(8149);
  }
  items3[2] = tmp22Result;
  obj5[2] = items3;
  return callback2(importDefault(4146).View, obj5);
};
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;