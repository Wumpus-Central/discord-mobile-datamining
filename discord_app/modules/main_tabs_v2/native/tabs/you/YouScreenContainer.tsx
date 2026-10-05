// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useChatLayoutDefault from "../../../../chat/native/useChatLayout.tsx";
import MainTabsConstants from "../../MainTabsConstants.tsx";
import TabsPerformanceTracker from "../TabsPerformanceTracker.tsx";
import YouScreenDefault from "YouScreen.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let route;

let obj2;
let obj3;
let obj4;
const View = react_native.View;
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, androidContainer: obj3, wrapper: obj4 };
obj2 = {
  flex: 1,
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.xl,
};
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
obj4 = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
let closure_6 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (route) => {
        let initialTab;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(15);
        route = route.route;
        const tmp4 = closure_6();
        const top = useSafeAreaInsetsDefault().top;
        const obj2 = TabsPerformanceTracker;
        const trackTabPerformance = obj2.useTrackTabPerformance(RootNavigatorScreen.YOU);
        if (route != null) {
          const params = route.params;
          if (params != null) {
            initialTab = params.initialTab;
          }
        }
        const width = useWindowDimensionsDefault().width;
        if (useChatLayoutDefault().isChatBesideChannelList) {
          if (cResult[2] === top) {
            let tmp10;
            if (cResult[3] === tmp4.androidContainer) {
              tmp10 = cResult[4];
            }
            if (cResult[5] === tmp4.container) {
              let tmp14;
              let tmp16Result;
              if (cResult[6] === tmp10) {
                tmp14 = cResult[7];
              }
              if (cResult[8] === initialTab) {
                if (cResult[9] === tmp4.wrapper) {
                  let tmp15;
                  if (cResult[10] === width) {
                    tmp15 = cResult[11];
                  }
                  if (cResult[12] === tmp14) {
                    let tmp19;
                    if (cResult[13] === tmp15) {
                      tmp19 = cResult[14];
                    }
                    tmp7 = tmp19;
                  }
                  const tmp22 = <View style={tmp14}>{tmp15}</View>;
                  cResult[12] = tmp14;
                  cResult[13] = tmp15;
                  cResult[14] = tmp22;
                  tmp19 = tmp22;
                }
              }
              const tmpResult = utils_PlatformUtils;
              if (tmpResult.isAndroid()) {
                const items = [tmp4.wrapper];
                const obj5 = { maxWidth: 0.6 * width };
                items[1] = obj5;
                tmp16Result = <View style={items}>{null}</View>;
              } else {
                tmp16Result = jsx(YouScreenDefault, { initialTab });
              }
              cResult[8] = initialTab;
              cResult[9] = tmp4.wrapper;
              cResult[10] = width;
              cResult[11] = tmp16Result;
              tmp15 = tmp16Result;
            }
            const items1 = [tmp4.container, tmp10];
            cResult[5] = tmp4.container;
            cResult[6] = tmp10;
            cResult[7] = items1;
            tmp14 = items1;
          }
          let tmp11;
          const tmpResult2 = utils_PlatformUtils;
          if (tmpResult2.isAndroid()) {
            const obj8 = { paddingTop: top };
            const merged = Object.assign(tmp4.androidContainer);
            tmp11 = obj8;
          }
          cResult[2] = top;
          cResult[3] = tmp4.androidContainer;
          cResult[4] = tmp11;
          tmp10 = tmp11;
        } else if (cResult[0] !== initialTab) {
          const tmp9 = jsx(YouScreenDefault, { initialTab });
          cResult[0] = initialTab;
          cResult[1] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[1];
        }
        return tmp7;
      }
    : (route) => {
        let initialTab;
        let tmp6Result2;
        route = route.route;
        const tmp = closure_6();
        const top = useSafeAreaInsetsDefault().top;
        const obj = TabsPerformanceTracker;
        const trackTabPerformance = obj.useTrackTabPerformance(RootNavigatorScreen.YOU);
        if (route != null) {
          const params = route.params;
          if (params != null) {
            initialTab = params.initialTab;
          }
        }
        const width = useWindowDimensionsDefault().width;
        if (useChatLayoutDefault().isChatBesideChannelList) {
          let tmp6Result;
          const items = [tmp.container];
          let tmp9;
          const tmp4Result = utils_PlatformUtils;
          if (tmp4Result.isAndroid()) {
            const obj2 = { paddingTop: top };
            const merged = Object.assign(tmp.androidContainer);
            tmp9 = obj2;
          }
          items[1] = tmp9;
          const tmp4Result2 = utils_PlatformUtils;
          if (tmp4Result2.isAndroid()) {
            const items1 = [tmp.wrapper];
            const obj5 = { maxWidth: 0.6 * width };
            items1[1] = obj5;
            tmp6Result = <View style={items1}>{null}</View>;
          } else {
            tmp6Result = jsx(YouScreenDefault, { initialTab });
          }
          tmp6Result2 = <View style={items}>{tmp6Result}</View>;
        } else {
          tmp6Result2 = jsx(YouScreenDefault, { initialTab });
        }
        return tmp6Result2;
      },
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default memoResult;
