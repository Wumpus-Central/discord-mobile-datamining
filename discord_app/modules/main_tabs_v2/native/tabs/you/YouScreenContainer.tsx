// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import TabsPerformanceTracker from "../TabsPerformanceTracker.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const useWindowDimensionsDefault = tmp(1477);
const useChatLayoutDefault = tmp(4420);
const YouScreenDefault = tmp(16783);
require = fn;
const View = fn(17).View;
const RootNavigatorScreen = fn(11084).RootNavigatorScreen;
const jsx = fn(21).jsx;
fn(4560);
let obj = { container: null, androidContainer: null, wrapper: null };
obj = {
  flex: 1,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xl,
};
obj.container = obj;
const createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
obj.androidContainer = createStyles;
obj.wrapper = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
let obj2 = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default noop.memo(function YouScreenContainer(route) {
  route = route.route;
  let items1 = closure_6();
  let tmp5Result = dependencyMap;
  let obj = TabsPerformanceTracker;
  const trackTabPerformance = obj.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (route != null) {
    const params = route.params;
    if (params != null) {
      const initialTab = params.initialTab;
    }
  }
  if (useChatLayoutDefault().isChatBesideChannelList) {
    const items = [items1.container];
    let tmp3Result = utils_PlatformUtils;
    let tmp7;
    if (tmp3Result.isAndroid()) {
      obj = {};
      const merged = Object.assign(items1.androidContainer);
      obj.paddingTop = useSafeAreaInsetsDefault().top;
      tmp7 = obj;
    }
    obj = { style: null, children: null };
    items[1] = tmp7;
    obj.style = items;
    tmp3Result = utils_PlatformUtils;
    if (tmp3Result.isAndroid()) {
      const obj1 = { style: null, children: null };
      items1 = [,];
      items1[0] = items1.wrapper;
      const obj2 = { maxWidth: 0.6 * useWindowDimensionsDefault().width };
      items1[1] = obj2;
      obj1.style = items1;
      const obj3 = { initialTab };
      tmp5Result = <tmp initialTab={initialTab} />;
      obj1.children = tmp5Result;
      tmp5Result = <View style={null}>{null}</View>;
    } else {
      const obj4 = { initialTab };
      tmp5Result = jsx(YouScreenDefault, { initialTab });
    }
    obj.children = tmp5Result;
    <View style={null}>{null}</View>;
  } else {
    const obj5 = { initialTab };
    return jsx(YouScreenDefault, { initialTab });
  }
});
