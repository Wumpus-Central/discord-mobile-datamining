// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import TabsPerformanceTracker from "../TabsPerformanceTracker.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const useWindowDimensionsDefault = tmp(1477);
const useChatLayoutDefault = tmp(4497);
const YouScreenDefault = tmp(16897);
require = fn;
const View = fn(17).View;
const RootNavigatorScreen = fn(11219).RootNavigatorScreen;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = {
  container: {
    flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: nativeDefault.radii.xl,
  },
  androidContainer: null,
  wrapper: null,
};
let obj3 = {
  flex: 1,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xl,
};
obj.androidContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM,
  borderRadius: nativeDefault.radii.none,
};
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
    const items = [items1.container];
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
      items1 = [,];
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
