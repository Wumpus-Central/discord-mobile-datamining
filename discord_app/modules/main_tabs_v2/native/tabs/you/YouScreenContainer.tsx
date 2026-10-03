// === Module 16933: YouScreenContainer ===

// Module 16933 (YouScreenContainer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 15938 */;
import noop from "module_19" /* 19 */;

const useWindowDimensionsDefault = tmp4(1484);
const useChatLayoutDefault = tmp4(4739);
const YouScreenDefault = tmp4(16934);
require = fn;
const View = fn(17).View;
const RootNavigatorScreen = fn(10820).RootNavigatorScreen;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { container: { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xl }, androidContainer: null, wrapper: null };
let obj3 = { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xl };
obj.androidContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
obj.wrapper = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let tmp15Result = dependencyMap;
  const cResult = c.c(15);
  route = route.route;
  let wrapper = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  const trackTabPerformance = TabsPerformanceTracker.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (route != null) {
    const params = route.params;
    if (params != null) {
      const initialTab = params.initialTab;
    }
  }
  const width = useWindowDimensionsDefault().width;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    if (cResult[2] === top) {
      if (cResult[3] === wrapper.androidContainer) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === wrapper.container) {
        if (cResult[6] === tmp9) {
          let tmp13 = cResult[7];
        }
        if (cResult[8] === initialTab) {
          if (cResult[9] === wrapper.wrapper) {
            if (cResult[10] === width) {
              if (cResult[12] === tmp13) {
              }
              const obj3 = { style: tmp13, children: cResult[11] };
              const tmp22 = <View style={tmp13}>{cResult[11]}</View>;
              cResult[12] = tmp13;
              cResult[13] = cResult[11];
              cResult[14] = tmp22;
            }
          }
        }
        if (tmpResult.isAndroid()) {
          const obj4 = { style: null, children: null };
          const items = [wrapper.wrapper, ];
          const obj5 = { maxWidth: 0.6 * width };
          items[1] = obj5;
          obj4.style = items;
          const obj6 = { initialTab };
          tmp15Result = <tmp4 initialTab={initialTab} />;
          obj4.children = tmp15Result;
          let tmp15Result2 = <View style={null}>{null}</View>;
        } else {
          const obj7 = { initialTab };
          tmp15Result2 = jsx(YouScreenDefault, { initialTab });
        }
        cResult[8] = initialTab;
        wrapper = wrapper.wrapper;
        cResult[9] = wrapper;
        cResult[10] = width;
        cResult[11] = tmp15Result2;
        tmpResult = utils_PlatformUtils;
      }
      const items1 = [wrapper.container, tmp9];
      cResult[5] = wrapper.container;
      cResult[6] = tmp9;
      cResult[7] = items1;
      tmp13 = items1;
    }
    let tmp10;
    if (tmpResult2.isAndroid()) {
      const obj8 = {};
      const merged = Object.assign(wrapper.androidContainer);
      obj8.paddingTop = top;
      tmp10 = obj8;
    }
    cResult[2] = top;
    cResult[3] = wrapper.androidContainer;
    cResult[4] = tmp10;
    tmp9 = tmp10;
    tmpResult2 = utils_PlatformUtils;
  } else {
    if (cResult[0] !== initialTab) {
      const obj9 = { initialTab };
      const tmp8 = jsx(YouScreenDefault, { initialTab });
      cResult[0] = initialTab;
      cResult[1] = tmp8;
      let tmp6 = tmp8;
    } else {
      tmp6 = cResult[1];
    }
    return tmp6;
  }
}) : ((route) => {
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
}));