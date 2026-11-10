// === Module 19249: YouScreenContainer ===

// Module 19249 (YouScreenContainer)
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useChatLayoutDefault from "useChatLayout" /* 5319 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 18437 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 19248 */;
import YouScreenDefault from "YouScreen" /* 19250 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const RootNavigatorScreen = fn(11668).RootNavigatorScreen;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let obj = { container: { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center" }, androidContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none }, wrapper: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
obj.wrapper = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
let obj4 = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default noop.memo(function YouScreenContainer(route) {
  route = route.route;
  let tmp = closure_6();
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (route != null) {
    const params = route.params;
    if (params != null) {
      const initialTab = params.initialTab;
    }
  }
  if (tmp4Result.isDuo()) {
    const obj2 = { children: null };
    const obj3 = { initialTab };
    obj2.children = jsx(YouScreenDefault, { initialTab });
    let tmp6Result = jsx(AppFrameContainerDefault, { children: null });
    const tmp2Result = AppFrameContainerDefault;
  } else if (useChatLayoutDefault().isChatBesideChannelList) {
    items = [tmp.container, ];
    let tmp9;
    if (tmp4Result3.isAndroid()) {
      const obj4 = {};
      const merged = Object.assign(tmp.androidContainer);
      obj4.paddingTop = useSafeAreaInsetsDefault().top;
      tmp9 = obj4;
    }
    const obj5 = { style: null, children: null };
    items[1] = tmp9;
    obj5.style = items;
    tmp4Result3 = utils_PlatformUtils;
    if (tmp4Result4.isAndroid()) {
      const obj6 = { style: null, children: null };
      const items1 = [tmp.wrapper, ];
      const obj7 = { maxWidth: 0.6 * useWindowDimensionsDefault().width };
      items1[1] = obj7;
      obj6.style = items1;
      const obj8 = { initialTab };
      tmp = jsx(YouScreenDefault, { initialTab });
      obj6.children = tmp;
      let tmp6Result3 = <View style={null}>{null}</View>;
    } else {
      const obj9 = { initialTab };
      tmp6Result3 = jsx(YouScreenDefault, { initialTab });
    }
    obj5.children = tmp6Result3;
    <View style={null}>{null}</View>;
    tmp4Result4 = utils_PlatformUtils;
  } else {
    const obj10 = { initialTab };
    tmp6Result = jsx(YouScreenDefault, { initialTab });
  }
  return tmp6Result;
});