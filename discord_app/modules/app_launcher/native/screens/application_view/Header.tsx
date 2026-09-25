// discord_app/modules/app_launcher/native/screens/application_view/Header.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import ClipboardUtils from "../../../../../utils/ClipboardUtils.native.tsx";
import useAvatarColorDefault from "../../../../avatar/useAvatarColor.tsx";
import AppLauncherUtils from "../../../utils/AppLauncherUtils.tsx";
import AppLauncherBackButtonDefault from "../../base_components/AppLauncherBackButton.tsx";
import getApplicationInstallURL from "../../../../applications/getApplicationInstallURL.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import AppLauncherStore from "../../../AppLauncherStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const AppLauncherNativeConstants = fn(1483);
({ DEFAULT_CONTENT_PADDING, SCREEN_BACKGROUND_COLOR } = AppLauncherNativeConstants);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, ApplicationFlags: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const xl = nativeDefault.radii.xl;
let c11 = 105;
const createStyles = fn(4829);
let obj2 = {
  headerContainer: { position: "absolute", top: -16, left: 0, right: 0, minHeight: 161 },
  expandedHeaderBanner: { height: 105 },
  appIconMask: null,
  collapsedHeaderBanner: null,
  collapsedHeaderBannerOverlay: null,
  loadingIcon: null,
  actionsWrapper: null,
};
const rect = {
  position: "absolute",
  padding: 4,
  bottom: -40,
  left: 16,
  backgroundColor: SCREEN_BACKGROUND_COLOR,
  borderRadius: nativeDefault.radii.xl + 4,
};
obj2.appIconMask = rect;
const rect1 = {
  height: 56,
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  flexDirection: "row",
  paddingHorizontal: DEFAULT_CONTENT_PADDING,
  paddingTop: 16,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.collapsedHeaderBanner = rect1;
obj2.collapsedHeaderBannerOverlay = {
  backgroundColor: "black",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};
let size = { height: 72, width: 72, borderRadius: xl, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.loadingIcon = size;
const rect2 = {
  flexDirection: "row",
  display: "flex",
  gap: nativeDefault.space.PX_16,
  position: "absolute",
  right: nativeDefault.space.PX_12,
  top: nativeDefault.space.PX_12,
  alignItems: "center",
  justifyContent: "center",
};
obj2.actionsWrapper = rect2;
let closure_12 = createStyles.createStyles(obj2);
const __initData = {
  code: "function HeaderTsx1(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,-HEADER_SCROLL_RANGE],'clamp')}]};}",
};
const __initData2 = {
  code: "function HeaderTsx2(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[0,HEADER_SCROLL_RANGE],[0,HEADER_SCROLL_RANGE],'clamp')}]};}",
};
const __initData3 = {
  code: "function HeaderTsx3(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{transform:[{translateY:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[16,0],'clamp')}],opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,1],'clamp')};}",
};
const __initData4 = {
  code: "function HeaderTsx4(){const{interpolate,scrollOffsetY,HEADER_SCROLL_RANGE}=this.__closure;return{opacity:interpolate(scrollOffsetY.get(),[HEADER_SCROLL_RANGE*0.5,HEADER_SCROLL_RANGE],[0,0.5],'clamp')};}",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/Header.tsx");

export default function Header(application) {
  application = application.application;
  const scrollOffsetY = application.scrollOffsetY;
  dependencyMap = undefined;
  let id;
  ({ onPressBack, onAddAppMenuClick } = application);
  let items = [AppLauncherStore];
  importDefault = application(504).useStateFromStores(items, () => AppLauncherStore.entrypoint());
  const tmp3 = closure_12();
  let appLauncherIconSource = null;
  if (null != application) {
    appLauncherIconSource = tmp(11519).getAppLauncherIconSource(application);
    const tmpResult = tmp(11519);
  }
  let obj = application(504);
  let str = application(4528).useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let tmp7 = appLauncherIconSource;
  const tmpResult9 = application(4528);
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
    let tmp12 = closure_8(tmp5(11524), obj2);
    let tmp13 = closure_8;
  } else {
    let obj3 = { style: tmp3.loadingIcon };
    tmp12 = closure_8(id, obj3);
    tmp13 = closure_8;
  }
  closure_129_0 = scrollOffsetY;
  const fn = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c11];
    obj2.translateY = ReanimatedRexport.interpolate(application.get(), items, [0, -105], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    return obj;
  };
  const tmpResult10 = application(4563);
  fn.__closure = { interpolate: application(4563).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn.__workletHash = 2572905048492;
  fn.__initData = __initData;
  closure_130_0 = scrollOffsetY;
  const animatedStyle = tmpResult10.useAnimatedStyle(fn);
  let obj4 = { interpolate: application(4563).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn2 = function n() {
    const obj = { transform: null };
    const obj2 = { translateY: null };
    const items = [0, c11];
    const items1 = [0, c11];
    obj2.translateY = ReanimatedRexport.interpolate(application.get(), items, items1, "clamp");
    const items2 = [obj2];
    obj.transform = items2;
    return obj;
  };
  const tmpResult11 = application(4563);
  fn2.__closure = { interpolate: application(4563).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn2.__workletHash = 8190094903650;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmpResult11.useAnimatedStyle(fn2);
  let obj5 = { interpolate: application(4563).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn3 = function o() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: null };
    const items = [52.5, c11];
    obj2.translateY = ReanimatedRexport.interpolate(application.get(), items, [16, 0], "clamp");
    const items1 = [obj2];
    obj.transform = items1;
    const items2 = [52.5, c11];
    obj.opacity = ReanimatedRexport.interpolate(application.get(), items2, [0, 1], "clamp");
    return obj;
  };
  const tmpResult12 = application(4563);
  fn3.__closure = { interpolate: application(4563).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn3.__workletHash = 14190901941859;
  fn3.__initData = __initData3;
  closure_131_0 = scrollOffsetY;
  const animatedStyle2 = tmpResult12.useAnimatedStyle(fn3);
  let obj6 = { interpolate: application(4563).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const fn4 = function n() {
    const obj = { opacity: null };
    const items = [52.5, c11];
    obj.opacity = ReanimatedRexport.interpolate(application.get(), items, [0, 0.5], "clamp");
    return obj;
  };
  const tmpResult13 = application(4563);
  fn4.__closure = { interpolate: application(4563).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  fn4.__workletHash = 9589752719246;
  fn4.__initData = __initData4;
  let str2 = "";
  const animatedStyle3 = tmpResult13.useAnimatedStyle(fn4);
  if (null != application) {
    str2 = tmp(8582).getSectionName(application);
    const tmpResult14 = tmp(8582);
  }
  let hasApplicationFlagResult = null != application;
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = "flags" in application;
  }
  if (hasApplicationFlagResult) {
    hasApplicationFlagResult = tmp(8313).hasApplicationFlag(application, constants2.EMBEDDED);
    const tmpResult15 = tmp(8313);
  }
  dependencyMap = hasApplicationFlagResult;
  id = UserStore.getCurrentUser();
  const obj8 = { style: null, pointerEvents: "box-none", children: null };
  let items1 = [tmp3.headerContainer, animatedStyle];
  obj8.style = items1;
  const obj9 = {
    style: null,
    pointerEvents: "none",
    children: tmp13(id, { style: tmp3.appIconMask, children: tmp12 }),
  };
  let items2 = [tmp3.expandedHeaderBanner, { backgroundColor: tmp6Result }];
  obj9.style = items2;
  const items3 = [tmp13(id, obj9), ,];
  const obj11 = { style: null, pointerEvents: "box-none", children: null };
  const items4 = [tmp3.collapsedHeaderBanner, { backgroundColor: tmp6Result }, animatedStyle1];
  obj11.style = items4;
  const obj12 = { style: null, pointerEvents: "none" };
  const items5 = [tmp3.collapsedHeaderBannerOverlay, animatedStyle3];
  obj12.style = items5;
  const items6 = [
    tmp13(ReanimatedRexportDefault.View, obj12),
    tmp13(AppLauncherBackButtonDefault, { onPress: onPressBack }),
    ,
  ];
  const obj10 = { style: tmp3.appIconMask, children: tmp12 };
  const obj7 = { interpolate: application(4563).interpolate, scrollOffsetY, HEADER_SCROLL_RANGE };
  const tmp23 = id;
  items6[2] = tmp13(ReanimatedRexportDefault.View, {
    style: animatedStyle2,
    pointerEvents: "none",
    children: tmp13(application(4825).Heading, {
      variant: "heading-lg/bold",
      color: "text-overlay-light",
      children: str2,
    }),
  });
  items6[3] = tmp13(application(1177).Spacer, { size: 32, pointerEvents: "none" });
  obj11.children = items6;
  items3[1] = closure_9(ReanimatedRexportDefault.View, obj11);
  let tmp22Result = null;
  if (null != application) {
    tmp22Result = null;
    if (tmpResult16.isRealApplication(application)) {
      const obj14 = { style: tmp3.actionsWrapper, children: null };
      const obj15 = {
        size: "sm",
        variant: "secondary-overlay",
        icon: tmp5(4772),
        onPress() {
          AnalyticsUtilsDefault.track(constants.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
            application_id: application.id,
            source,
          });
          const obj2 = { application_id: application.id, source };
          const obj4 = getApplicationInstallURL;
          if (c2) {
            const obj5 = { applicationId: application.id, referrerId: null };
            id = undefined;
            if (id != null) {
              id = id.id;
            }
            obj5.referrerId = id;
            let activityLaunchURL = obj4.getActivityLaunchURL(obj5);
          } else {
            const obj6 = { id: application.id };
            const merged = Object.assign(AppLauncherUtils.getInstallAppProps(application));
            activityLaunchURL = obj4.getApplicationInstallURL(obj6);
            const tmp4Result = AppLauncherUtils;
          }
          ClipboardUtils.copy(activityLaunchURL);
          ToastUtils.presentLinkCopied();
          const tmp4Result2 = ToastUtils;
        },
        accessibilityLabel: null,
        maxFontSizeMultiplier: 1.5,
      };
      const intl = tmp(1115).intl;
      obj15.accessibilityLabel = intl.string(tmp(1115).t.XWDihq);
      const items7 = [tmp13(tmp(7358).IconButton, obj15)];
      const obj16 = { application, onAddAppMenuClick };
      items7[1] = tmp13(tmp5(11601), obj16);
      obj14.children = items7;
      tmp22Result = closure_9(tmp23, obj14);
    }
    tmpResult16 = tmp(8582);
  }
  items3[2] = tmp22Result;
  obj8.children = items3;
  return closure_9(ReanimatedRexportDefault.View, obj8);
}
export const SHEET_HANDLE_CONTAINER_HEIGHT = 16;
export const EXPANDED_HEADER_HEIGHT = 161;
