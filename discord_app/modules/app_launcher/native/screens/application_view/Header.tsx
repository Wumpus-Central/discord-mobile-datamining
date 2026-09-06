// === Module 12130: application_view/Header ===

// Module 12130 (application_view/Header)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import useAvatarColorDefault from "useAvatarColor" /* 8132 */;
import AppLauncherUtils from "AppLauncherUtils" /* 9289 */;
import AppLauncherBackButtonDefault from "AppLauncherBackButton" /* 12131 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12132 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import AppLauncherStore from "AppLauncherStore" /* 9408 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1482);
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, ApplicationFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const xl = nativeDefault.radii.xl;
let c11 = 105;
fn(4560);
const createStyles = { headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 }, expandedHeaderBanner: { height: 105 }, appIconMask: null, collapsedHeaderBanner: null, collapsedHeaderBannerOverlay: null, loadingIcon: null, actionsWrapper: null };
const rect = { position: "absolute", padding: 4, bottom: -40, left: 16, backgroundColor: SCREEN_BACKGROUND_COLOR, borderRadius: nativeDefault.radii.xl + 4 };
createStyles.appIconMask = rect;
const rect1 = { height: 56, justifyContent: "space-between", alignItems: "center", position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", paddingHorizontal: DEFAULT_CONTENT_PADDING, paddingTop: 16, paddingBottom: nativeDefault.space.PX_12 };
createStyles.collapsedHeaderBanner = rect1;
createStyles.collapsedHeaderBannerOverlay = { backgroundColor: "black", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
let size = { height: 72, width: 72, borderRadius: xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.loadingIcon = size;
const rect2 = { flexDirection: "row", display: "flex", gap: nativeDefault.space.PX_16, position: "absolute", right: nativeDefault.space.PX_12, top: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
createStyles.actionsWrapper = rect2;
let closure_12 = createStyles.createStyles(createStyles);
const __initData = { code: "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}" };
const __initData2 = { code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}" };
const __initData3 = { code: "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}" };
const __initData4 = { code: "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}" };
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default function Header(application) {
  application = application.application;
  const scrollOffsetY = application.scrollOffsetY;
  dependencyMap = undefined;
  let id;
  ({ onPressBack, onAddAppMenuClick } = application);
  let obj = application(504);
  let items = [AppLauncherStore];
  importDefault = obj.useStateFromStores(items, () => AppLauncherStore.entrypoint());
  const tmp3 = closure_12();
  let appLauncherIconSource = null;
  if (null != application) {
    let tmpResult = tmp(12051);
    appLauncherIconSource = tmpResult.getAppLauncherIconSource(application);
  }
  tmpResult = tmp(4262);
  let str = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
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
  const tmp6Result = useAvatarColorDefault(tmp7, str);
  if (null != appLauncherIconSource) {
    obj = { iconSource: appLauncherIconSource, iconBorderRadius: xl, iconSize: 72 };
    let tmp12 = closure_8(tmp5(12056), obj);
    let tmp13 = closure_8;
  } else {
    obj = { style: tmp3.loadingIcon };
    tmp12 = closure_8(id, obj);
    tmp13 = closure_8;
  }
  closure_129_0 = scrollOffsetY;
  const fn = function n() {
    let obj = { transform: null };
    obj = { translateY: null };
    const items = [0, c11];
    obj.translateY = ReanimatedRexport.interpolate(application.get(), items, [0, -105], "clamp");
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  const tmpResult1 = application(4296);
  fn.__closure = { interpolate: application(4296).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 2572905048492;
  fn.__initData = __initData;
  closure_130_0 = scrollOffsetY;
  const animatedStyle = tmpResult1.useAnimatedStyle(fn);
  let obj1 = { interpolate: application(4296).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn2 = function n() {
    let obj = { transform: null };
    obj = { translateY: null };
    const items = [0, c11];
    const items1 = [0, c11];
    obj.translateY = ReanimatedRexport.interpolate(application.get(), items, items1, "clamp");
    const items2 = [obj];
    obj.transform = items2;
    return obj;
  };
  const tmpResult2 = application(4296);
  fn2.__closure = { interpolate: application(4296).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn2.__workletHash = 8190094903650;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult2.useAnimatedStyle(fn2);
  const obj2 = { interpolate: application(4296).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn3 = function o() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: null };
    const items = [52.5, c11];
    obj.translateY = ReanimatedRexport.interpolate(application.get(), items, [16, 0], "clamp");
    const items1 = [obj];
    obj.transform = items1;
    const items2 = [52.5, c11];
    obj.opacity = ReanimatedRexport.interpolate(application.get(), items2, [0, 1], "clamp");
    return obj;
  };
  const tmpResult3 = application(4296);
  fn3.__closure = { interpolate: application(4296).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn3.__workletHash = 14190901941859;
  fn3.__initData = __initData3;
  closure_131_0 = scrollOffsetY;
  const animatedStyle2 = tmpResult3.useAnimatedStyle(fn3);
  let obj3 = { interpolate: application(4296).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn4 = function n() {
    const obj = { opacity: null };
    const items = [52.5, c11];
    obj.opacity = ReanimatedRexport.interpolate(application.get(), items, [0, 0.5], "clamp");
    return obj;
  };
  const tmpResult4 = application(4296);
  fn4.__closure = { interpolate: application(4296).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn4.__workletHash = 9589752719246;
  fn4.__initData = __initData4;
  let str2 = "";
  const animatedStyle3 = tmpResult4.useAnimatedStyle(fn4);
  if (null != application) {
    str2 = tmp(9289).getSectionName(application);
    const tmpResult5 = tmp(9289);
  }
  let hasApplicationFlagResult = null != application;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = "flags" in application;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = tmp(8856).hasApplicationFlag(application, constants2.EMBEDDED);
    const tmpResult6 = tmp(8856);
  }
  dependencyMap = hasApplicationFlagResult;
  id = UserStore.getCurrentUser();
  const obj5 = { style: null, pointerEvents: "box-none", children: null };
  let items1 = [tmp3.headerContainer, animatedStyle];
  obj5.style = items1;
  const obj6 = { style: null, pointerEvents: "none", children: tmp13(id, { style: tmp3.appIconMask, children: tmp12 }) };
  let items2 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  obj6.style = items2;
  const items3 = [tmp13(id, obj6), , ];
  const obj8 = { style: null, pointerEvents: "box-none", children: null };
  const items4 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, animatedStyle1];
  obj8.style = items4;
  const obj9 = { style: null, pointerEvents: "none" };
  const items5 = [tmp3.collapsedHeaderBannerOverlay, animatedStyle3];
  obj9.style = items5;
  const items6 = [tmp13(ReanimatedRexportDefault.View, obj9), tmp13(AppLauncherBackButtonDefault, { onPress: onPressBack }), , ];
  let obj4 = { interpolate: application(4296).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const obj7 = { style: tmp3.appIconMask, children: tmp12 };
  const tmp23 = id;
  items6[2] = tmp13(ReanimatedRexportDefault.View, { style: animatedStyle2, pointerEvents: "none", children: tmp13(application(4556).Heading, { variant: "heading-lg/bold", color: "text-overlay-light", children: str2 }) });
  items6[3] = tmp13(application(1178).Spacer, { size: 32, pointerEvents: "none" });
  obj8.children = items6;
  items3[1] = closure_9(ReanimatedRexportDefault.View, obj8);
  let tmp22Result = null;
  if (null != application) {
    tmp22Result = null;
    if (tmpResult7.isRealApplication(application)) {
      const obj11 = { style: tmp3.actionsWrapper, children: null };
      const obj12 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: tmp5(4504),
        onPress() {
              let obj = { application_id: application.id, source };
              obj.track(constants.APP_LAUNCHER_APPLICATION_LINK_COPIED, obj);
              const obj4 = getApplicationInstallURL;
              if (c2) {
                obj = { applicationId: application.id, referrerId: null };
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                obj.referrerId = id;
                let activityLaunchURL = obj4.getActivityLaunchURL(obj);
              } else {
                const obj1 = { id: application.id };
                let tmp4Result = AppLauncherUtils;
                const merged = Object.assign(tmp4Result.getInstallAppProps(application));
                activityLaunchURL = obj4.getApplicationInstallURL(obj1);
              }
              ClipboardUtils.copy(activityLaunchURL);
              tmp4Result = ToastUtils;
              tmp4Result.presentLinkCopied();
            },
        accessibilityLabel: null,
        maxFontSizeMultiplier: 1.5
      };
      const intl = tmp(1114).intl;
      obj12.accessibilityLabel = intl.string(tmp(1114).t.XWDihq);
      const items7 = [tmp13(tmp(8097).IconButton, obj12), ];
      const obj13 = { application, onAddAppMenuClick };
      items7[1] = tmp13(tmp5(12133), obj13);
      obj11.children = items7;
      tmp22Result = closure_9(tmp23, obj11);
    }
    tmpResult7 = tmp(9289);
  }
  items3[2] = tmp22Result;
  obj5.children = items3;
  return closure_9(ReanimatedRexportDefault.View, obj5);
};
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;