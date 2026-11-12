// === Module 13356: application_view/Header ===

// Module 13356 (application_view/Header)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef1652 from "module_1652" /* 1652 */;
import ToastUtils from "ToastUtils" /* 5951 */;
import ClipboardUtils from "ClipboardUtils" /* 7877 */;
import useAvatarColorDefault from "useAvatarColor" /* 8472 */;
import AppLauncherUtils from "AppLauncherUtils" /* 12602 */;
import AppLauncherBackButtonDefault from "AppLauncherBackButton" /* 13357 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 13358 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import AppLauncherStore from "AppLauncherStore" /* 12603 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1498);
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const xl = nativeDefault.radii.xl;
let c10 = 105;
const createStyles = fn(5243);
let obj2 = { headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 }, expandedHeaderBanner: { height: 105 }, appIconMask: null, collapsedHeaderBanner: null, collapsedHeaderBannerOverlay: null, loadingIcon: null, actionsWrapper: null };
const rect = { position: "absolute", padding: 4, bottom: -40, left: 16, backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
obj2.appIconMask = rect;
const rect1 = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: nativeDefault.space.PX_12 };
obj2.collapsedHeaderBanner = rect1;
obj2.collapsedHeaderBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let size = { height: 72, width: 72, borderRadius: xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingIcon = size;
const rect2 = { flexDirection: "row", display: "flex", gap: nativeDefault.space.PX_16, position: "absolute", right: nativeDefault.space.PX_12, top: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
obj2.actionsWrapper = rect2;
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = { code: "(function HeaderTsx1(){let[interpolate,scrollOffsetY,HEADER_SCROLL_RANGE]=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};})" };
let closure_13 = { code: "(function HeaderTsx2(){let[interpolate,scrollOffsetY,HEADER_SCROLL_RANGE]=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};})" };
let closure_14 = { code: "(function HeaderTsx3(){let[interpolate,scrollOffsetY,HEADER_SCROLL_RANGE]=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};})" };
let closure_15 = { code: "(function HeaderTsx4(){let[interpolate,scrollOffsetY,HEADER_SCROLL_RANGE]=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default function Header(application) {
  application = application.application;
  _require = application;
  const scrollOffsetY = application.scrollOffsetY;
  dependencyMap = undefined;
  let id;
  ({ onPressBack, onAddAppMenuClick } = application);
  items = [AppLauncherStore];
  importDefault = require("initialize").useStateFromStores(items, () => AppLauncherStore.entrypoint());
  const tmp3 = closure_11();
  let appLauncherIconSource = null;
  if (null != application) {
    appLauncherIconSource = tmp(13278).getAppLauncherIconSource(application);
    const tmpResult = tmp(13278);
  }
  let obj = require("initialize");
  let str = require("useToken").useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp7 = appLauncherIconSource;
  const tmpResult9 = require("useToken");
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
  const tmp6Result = useAvatarColorDefault(tmp7, str);
  if (null != appLauncherIconSource) {
    let obj2 = { iconSource: appLauncherIconSource, iconBorderRadius: xl, iconSize: 72 };
    let tmp12 = closure_7(tmp5(13283), obj2);
    let tmp13 = closure_7;
  } else {
    let obj3 = { style: tmp3.loadingIcon };
    tmp12 = closure_7(id, obj3);
    tmp13 = closure_7;
  }
  let items1 = [closure_12, require("module_1652").interpolate, scrollOffsetY, c10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp17, tmp18, tmp19, tmp20] = items1;
  class HeaderTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      items = [0];
      items[1] = closure_2;
      items1 = [0];
      items1[1] = -closure_2;
      obj1.translateY = closure_0(closure_1.get(), items, items1, "clamp");
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  let items2 = [tmp18, tmp19, tmp20];
  HeaderTsx1.__closure = items2;
  HeaderTsx1.__workletHash = 2041267875989;
  HeaderTsx1.__initData = tmp17;
  const animatedStyle = require("module_1652").useAnimatedStyle(HeaderTsx1);
  const tmpResult10 = require("module_1652");
  const items3 = [closure_13, require("module_1652").interpolate, scrollOffsetY, c10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp22, tmp23, tmp24, tmp25] = items3;
  class HeaderTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: null };
      items = [0];
      items[1] = closure_2;
      items1 = [0];
      items1[1] = closure_2;
      obj1.translateY = closure_0(closure_1.get(), items, items1, "clamp");
      items2 = [];
      items2[0] = obj1;
      obj.transform = items2;
      return obj;
    }
  }
  const items4 = [tmp23, tmp24, tmp25];
  HeaderTsx2.__closure = items4;
  HeaderTsx2.__workletHash = 12593717419899;
  HeaderTsx2.__initData = tmp22;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(HeaderTsx2);
  const tmpResult11 = require("module_1652");
  const items5 = [closure_14, require("module_1652").interpolate, scrollOffsetY, c10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp27, tmp28, tmp29, tmp30] = items5;
  class HeaderTsx3 {
    constructor() {
      obj = { transform: null, opacity: null };
      obj1 = { translateY: null };
      items = [, ];
      items[0] = 0.5 * closure_2;
      items[1] = closure_2;
      obj1.translateY = closure_0(closure_1.get(), items, [16, 0], "clamp");
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      items2 = [, ];
      items2[0] = 0.5 * closure_2;
      items2[1] = closure_2;
      obj.opacity = closure_0(closure_1.get(), items2, [0, 1], "clamp");
      return obj;
    }
  }
  const items6 = [tmp28, tmp29, tmp30];
  HeaderTsx3.__closure = items6;
  HeaderTsx3.__workletHash = 17390115934490;
  HeaderTsx3.__initData = tmp27;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(HeaderTsx3);
  const tmpResult12 = require("module_1652");
  const items7 = [closure_15, require("module_1652").interpolate, scrollOffsetY, c10];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp32, tmp33, tmp34, tmp35] = items7;
  class HeaderTsx4 {
    constructor() {
      obj = { opacity: null };
      items = [, ];
      items[0] = 0.5 * closure_2;
      items[1] = closure_2;
      obj.opacity = closure_0(closure_1.get(), items, [0, 0.5], "clamp");
      return obj;
    }
  }
  const items8 = [tmp33, tmp34, tmp35];
  HeaderTsx4.__closure = items8;
  HeaderTsx4.__workletHash = 5671647822967;
  HeaderTsx4.__initData = tmp32;
  let str2 = "";
  const animatedStyle3 = require("module_1652").useAnimatedStyle(HeaderTsx4);
  if (null != application) {
    str2 = tmp(12602).getSectionName(application);
    const tmpResult14 = tmp(12602);
  }
  let result = null != application;
  if (result) {
    result = "flags" in application;
  }
  if (result) {
    result = tmp(2148).supportsEmbeddedSurface(application, tmp(5914).EmbeddedSurfaceType.MAIN);
    const tmpResult15 = tmp(2148);
  }
  dependencyMap = result;
  id = UserStore.getCurrentUser();
  let obj4 = { style: null, pointerEvents: "box-none", children: null };
  const items9 = [tmp3.headerContainer, animatedStyle];
  obj4.style = items9;
  let obj5 = { style: null, pointerEvents: "none", children: tmp13(id, { style: tmp3.appIconMask, children: tmp12 }) };
  const items10 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  obj5.style = items10;
  const items11 = [tmp13(id, obj5), , ];
  const obj7 = { style: null, pointerEvents: "box-none", children: null };
  const items12 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, animatedStyle1];
  obj7.style = items12;
  const obj8 = { style: null, pointerEvents: "none" };
  const items13 = [tmp3.collapsedHeaderBannerOverlay, animatedStyle3];
  obj8.style = items13;
  const items14 = [tmp13(_modDef1652.View, obj8), tmp13(AppLauncherBackButtonDefault, { onPress: onPressBack }), , ];
  let obj6 = { style: tmp3.appIconMask, children: tmp12 };
  const tmp39 = id;
  const tmpResult13 = require("module_1652");
  items14[2] = tmp13(_modDef1652.View, { style: animatedStyle2, pointerEvents: "none", children: tmp13(require("Text/Text").Heading, { variant: "heading-lg/semibold", color: "text-overlay-light", children: str2 }) });
  items14[3] = tmp13(require("native").Spacer, { size: 32, pointerEvents: "none" });
  obj7.children = items14;
  items11[1] = closure_8(_modDef1652.View, obj7);
  let tmp38Result = null;
  if (null != application) {
    tmp38Result = null;
    if (tmpResult16.isRealApplication(application)) {
      const obj10 = { style: tmp3.actionsWrapper, children: null };
      const obj11 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: tmp5(5967),
        onPress() {
              AnalyticsUtilsDefault.track(AnalyticEvents.APP_LAUNCHER_APPLICATION_LINK_COPIED, { application_id: _undefined.id, source });
              const obj2 = { application_id: _undefined.id, source };
              const obj4 = getApplicationInstallURL;
              if (c2) {
                const obj5 = { applicationId: _undefined.id, referrerId: null };
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                obj5.referrerId = id;
                let activityLaunchURL = obj4.getActivityLaunchURL(obj5);
              } else {
                const obj6 = { id: _undefined.id };
                const merged = Object.assign(AppLauncherUtils.getInstallAppProps(_undefined));
                activityLaunchURL = obj4.getApplicationInstallURL(obj6);
                const tmp4Result = AppLauncherUtils;
              }
              ClipboardUtils.copy(activityLaunchURL);
              ToastUtils.presentLinkCopied();
              const tmp4Result2 = ToastUtils;
            },
        accessibilityLabel: null,
        maxFontSizeMultiplier: 1.5
      };
      const intl = tmp(1113).intl;
      obj11.accessibilityLabel = intl.string(tmp(1113).t.XWDihq);
      const items15 = [tmp13(tmp(7922).IconButton, obj11), ];
      const obj12 = { application, onAddAppMenuClick };
      items15[1] = tmp13(tmp5(13359), obj12);
      obj10.children = items15;
      tmp38Result = closure_8(tmp39, obj10);
    }
    tmpResult16 = tmp(12602);
  }
  items11[2] = tmp38Result;
  obj4.children = items11;
  return closure_8(_modDef1652.View, obj4);
};
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;