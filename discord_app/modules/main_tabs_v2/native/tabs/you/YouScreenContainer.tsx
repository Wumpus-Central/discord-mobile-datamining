// === Module 17238: YouScreenContainer ===

// Module 17238 (YouScreenContainer)
import nativeDefault from "native" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16347 */;
import noop from "module_19" /* 19 */;

const useWindowDimensionsDefault = tmp(1478);
const useChatLayoutDefault = tmp(4616);
const YouScreenDefault = tmp(17239);
require = fn;
const View = fn(17).View;
const RootNavigatorScreen = fn(11350).RootNavigatorScreen;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj = { container: { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xl }, androidContainer: null, wrapper: null };
let obj3 = { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xl };
obj.androidContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
obj.wrapper = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
let obj5 = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default noop.memo(function YouScreenContainer(route) {
  route = route.route;
  let items1 = closure_6();
  let tmp5Result = dependencyMap;
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (route != null) {
    const params = route.params;
    if (params != null) {
      const initialTab = params.initialTab;
    }
  }
  if (useChatLayoutDefault().isChatBesideChannelList) {
    const items = [items1.container, ];
    let tmp7;
    if (tmp3Result.isAndroid()) {
      const obj2 = {};
      const merged = Object.assign(items1.androidContainer);
      obj2.paddingTop = useSafeAreaInsetsDefault().top;
      tmp7 = obj2;
    }
    const obj3 = { style: null, children: null };
    items[1] = tmp7;
    obj3.style = items;
    tmp3Result = utils_PlatformUtils;
    if (tmp3Result2.isAndroid()) {
      const obj4 = { style: null, children: null };
      items1 = [, ];
      items1[0] = items1.wrapper;
      const obj5 = { maxWidth: 0.6 * useWindowDimensionsDefault().width };
      items1[1] = obj5;
      obj4.style = items1;
      const obj6 = { initialTab };
      tmp5Result = <tmp initialTab={initialTab} />;
      obj4.children = tmp5Result;
      let tmp5Result3 = <View style={null}>{null}</View>;
    } else {
      const obj7 = { initialTab };
      tmp5Result3 = jsx(YouScreenDefault, { initialTab });
    }
    obj3.children = tmp5Result3;
    <View style={null}>{null}</View>;
    tmp3Result2 = utils_PlatformUtils;
  } else {
    const obj8 = { initialTab };
    return jsx(YouScreenDefault, { initialTab });
  }
});