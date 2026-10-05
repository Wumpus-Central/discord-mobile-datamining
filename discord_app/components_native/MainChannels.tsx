// === Module 15943: MainChannels ===

// Module 15943 (MainChannels)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import useChatLayoutDefault from "useChatLayout" /* 4739 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4742 */;
import useRefValueDefault from "useRefValue" /* 5973 */;
import StartupProfiler from "StartupProfiler" /* 11571 */;
import isJankScreenReportingEnabled from "isJankScreenReportingEnabled" /* 15932 */;
import getJankScreenName from "getJankScreenName" /* 15934 */;
import JankScreenConstants from "JankScreenConstants" /* 15935 */;
import JankSlidingSurfaceReporterDefault from "JankSlidingSurfaceReporter" /* 15937 */;
import useGuildsRouteGuildId from "useGuildsRouteGuildId" /* 15946 */;
import useChannelListWidthDefault from "useChannelListWidth" /* 15947 */;
import messages_MessagesDefault from "messages/Messages" /* 15948 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15949 */;
import RedesignChannelListDefault from "RedesignChannelList" /* 16029 */;
import NativeFreezeScreens2 from "NativeFreezeScreens" /* 16220 */;
import HomePanelContent from "HomePanelContent" /* 16221 */;
import NonCollapsableGestureDetector2 from "NonCollapsableGestureDetector" /* 16303 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HomeDrawerStore from "HomeDrawerStore" /* 15944 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

const StartupProfilerDefault = StartupProfiler;

let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
let unpackModuleId;
function resolveHomeDrawerName() {
  return HOME_DRAWER_SCREEN;
}
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const DM_WIDTH = Constants.DM_WIDTH;
const ME = Constants.ME;
const HOME_DRAWER_SCREEN = JankScreenConstants.HOME_DRAWER_SCREEN;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  const obj2 = useGuildsRouteGuildId;
  const tmp3 = _slicedToArray(obj2.useGuildsRouteGuildAndChannelId(), 2);
  const first = tmp3[0];
  const ref = react.useRef(first);
  if (cResult[0] !== first) {
    const fn = function l() {
      ref.current = current;
    };
    const items = [first];
    cResult[0] = first;
    cResult[1] = fn;
    cResult[2] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = react.useEffect(tmp7, tmp8);
  let tmp12 = useRefValueDefault(ref);
  if (null != first && first !== ME) {
    tmp12 = first;
  }
  if (cResult[3] === tmp3[1]) {
    if (cResult[4] === (null != first && first !== ME)) {
      let tmp13;
      if (cResult[5] === tmp12) {
        tmp13 = cResult[6];
      }
      return tmp13;
    }
  }
  const obj4 = { isGuildSelected: null != first && first !== ME, selectedGuildId: tmp12, selectedChannelId: tmp3[1] };
  cResult[3] = tmp3[1];
  cResult[4] = null != first && first !== ME;
  cResult[5] = tmp12;
  cResult[6] = obj4;
  tmp13 = obj4;
}) : (() => {
  let first;
  let tmp4;
  const obj = useGuildsRouteGuildId;
  [first, tmp4] = obj.useGuildsRouteGuildAndChannelId();
  const ref = react.useRef(first);
  const items = [first];
  const effect = react.useEffect(() => {
    ref.current = current;
  }, items);
  let tmp9 = useRefValueDefault(ref);
  const obj2 = { isGuildSelected: null != first && first !== ME, selectedGuildId: tmp9, selectedChannelId: tmp4 };
  if (null != first && first !== ME) {
    tmp9 = first;
  }
  return obj2;
});
let createStyles = createStyles_mod;
let obj = { fill: { flex: 1 }, sideContainer: rect, side: obj2, sideTablet: obj3 };
rect = { position: "absolute", top: 0, left: DM_WIDTH, bottom: 0, right: 0, flexDirection: "row", borderLeftWidth: 1, borderTopWidth: 1, borderColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopLeftRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
obj2 = { borderTopLeftRadius: nativeDefault.radii.xl - 1, borderTopRightRadius: nativeDefault.radii.none };
obj3 = { borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_14 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((panelStyles) => {
  let items1;
  let items2;
  let items3;
  let selectedChannelId;
  let selectedGuildId;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(28);
  panelStyles = panelStyles.panelStyles;
  const tmp4 = closure_14();
  const tmp5 = closure_13();
  ({ selectedGuildId, selectedChannelId } = tmp5);
  const isGuildSelected = tmp5.isGuildSelected;
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const top = useSafeAreaInsetsDefault().top;
  if (cResult[0] !== top) {
    const obj2 = { marginTop: top };
    cResult[0] = top;
    cResult[1] = obj2;
    tmp7 = obj2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp4.sideContainer) {
    let tmp8;
    if (cResult[3] === tmp7) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.side) {
      let tmp10;
      let tmp13;
      if (cResult[6] === (isChatBesideChannelList && tmp4.sideTablet)) {
        tmp10 = cResult[7];
      }
      let num6 = 0;
      const sum = DM_WIDTH + useChannelListWidthDefault();
      if (isGuildSelected) {
        num6 = 1;
      }
      if (cResult[8] !== tmp10) {
        const obj3 = { style: tmp10 };
        const tmp15 = unpackModuleId(messages_MessagesDefault, obj3);
        cResult[8] = tmp10;
        cResult[9] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[9];
      }
      if (cResult[10] === tmp10) {
        if (cResult[11] === selectedChannelId) {
          let tmp16;
          if (cResult[12] === selectedGuildId) {
            tmp16 = cResult[13];
          }
          if (cResult[14] === num6) {
            if (cResult[15] === tmp13) {
              let tmp19;
              let tmp23;
              let tmp26;
              let tmp32;
              if (cResult[16] === tmp16) {
                tmp19 = cResult[17];
              }
              let tmp22;
              if (isChatBesideChannelList) {
                tmp22 = sum;
              }
              if (cResult[18] !== tmp22) {
                const items = [metroRequire.absoluteFill, ];
                const obj4 = { width: tmp22 };
                items[1] = obj4;
                cResult[18] = tmp22;
                cResult[19] = items;
                tmp23 = items;
              } else {
                tmp23 = cResult[19];
              }
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp28 = unpackModuleId(HomePanelContent.HomePanelContent, {});
                cResult[20] = tmp28;
                tmp26 = tmp28;
              } else {
                tmp26 = cResult[20];
              }
              if (cResult[21] === panelStyles) {
                if (cResult[22] === tmp19) {
                  let tmp29;
                  if (cResult[23] === tmp8) {
                    tmp29 = cResult[24];
                  }
                  if (cResult[25] === tmp23) {
                    let tmp35;
                    if (cResult[26] === tmp29) {
                      tmp35 = cResult[27];
                    }
                    return tmp35;
                  }
                  const obj5 = { style: tmp23, children: items1 };
                  items1 = [tmp26, tmp29];
                  const tmp38 = closure_12(hasOwnProperty, obj5);
                  cResult[25] = tmp23;
                  cResult[26] = tmp29;
                  cResult[27] = tmp38;
                  tmp35 = tmp38;
                }
              }
              if (null == panelStyles) {
                const obj6 = { style: tmp8, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp19 };
                tmp32 = unpackModuleId(hasOwnProperty, obj6);
              } else {
                const obj7 = { style: items2, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp19 };
                items2 = [tmp8, panelStyles];
                tmp32 = unpackModuleId(ReanimatedRexportDefault.View, obj7);
              }
              cResult[21] = panelStyles;
              cResult[22] = tmp19;
              cResult[23] = tmp8;
              cResult[24] = tmp32;
              tmp29 = tmp32;
            }
          }
          const obj8 = { activeIndex: num6, children: items3 };
          items3 = [tmp13, tmp16];
          const tmp21 = closure_12(NativeFreezeScreens2.NativeFreezeScreens, obj8);
          cResult[14] = num6;
          cResult[15] = tmp13;
          cResult[16] = tmp16;
          cResult[17] = tmp21;
          tmp19 = tmp21;
        }
      }
      const obj9 = { style: tmp10, selectedGuildId, selectedChannelId };
      const tmp18 = unpackModuleId(RedesignChannelListDefault, obj9);
      cResult[10] = tmp10;
      cResult[11] = selectedChannelId;
      cResult[12] = selectedGuildId;
      cResult[13] = tmp18;
      tmp16 = tmp18;
    }
    const items4 = [tmp4.side, isChatBesideChannelList && tmp4.sideTablet];
    cResult[5] = tmp4.side;
    cResult[6] = isChatBesideChannelList && tmp4.sideTablet;
    cResult[7] = items4;
    tmp10 = items4;
  }
  const items5 = [tmp4.sideContainer, tmp7];
  cResult[2] = tmp4.sideContainer;
  cResult[3] = tmp7;
  cResult[4] = items5;
  tmp8 = items5;
}) : ((panelStyles) => {
  let isGuildSelected;
  let items2;
  let items4;
  let items5;
  let selectedChannelId;
  let selectedGuildId;
  let tmp10Result;
  panelStyles = panelStyles.panelStyles;
  const tmp = closure_14();
  let closure_0 = tmp;
  ({ isGuildSelected, selectedGuildId, selectedChannelId } = closure_13());
  closure_13();
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const top = useSafeAreaInsetsDefault().top;
  let items = [tmp, top];
  const memo = react.useMemo(() => {
    const items = [closure_0.sideContainer, ];
    const obj = { marginTop: top };
    items[1] = obj;
    return items;
  }, items);
  const items1 = [tmp, isChatBesideChannelList];
  const memo1 = react.useMemo(() => {
    const items = [closure_0.side, isChatBesideChannelList && closure_0.sideTablet];
    return items;
  }, items1);
  const sum = DM_WIDTH + useChannelListWidthDefault();
  let num = 0;
  const NativeFreezeScreens = NativeFreezeScreens2.NativeFreezeScreens;
  if (isGuildSelected) {
    num = 1;
  }
  let obj = { activeIndex: num, children: items2 };
  items2 = [unpackModuleId(messages_MessagesDefault, { style: memo1 }), unpackModuleId(RedesignChannelListDefault, { style: memo1, selectedGuildId, selectedChannelId })];
  const tmp8Result = closure_12(NativeFreezeScreens, obj);
  const items3 = [metroRequire.absoluteFill, ];
  let tmp13;
  if (isChatBesideChannelList) {
    tmp13 = sum;
  }
  const obj2 = { style: items3, children: items4 };
  items3[1] = { width: tmp13 };
  items4 = [unpackModuleId(HomePanelContent.HomePanelContent, {}), ];
  if (null == panelStyles) {
    const obj3 = { style: memo, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp8Result };
    tmp10Result = unpackModuleId(hasOwnProperty, obj3);
  } else {
    const obj4 = { style: items5, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp8Result };
    items5 = [memo, panelStyles];
    tmp10Result = unpackModuleId(ReanimatedRexportDefault.View, obj4);
  }
  items4[1] = tmp10Result;
  return closure_12(hasOwnProperty, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let gesture;
  let homeDrawerContext;
  let items;
  let panelStyles;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(15);
  const obj2 = useHomeDrawerGesture;
  const homeGesture = obj2.useHomeGesture();
  ({ gesture, panelStyles, homeDrawerContext } = homeGesture);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(panelX) {
      return panelX.panelX;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp7 = HomeDrawerStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function p(maxX) {
      return maxX.maxX;
    };
    cResult[1] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[1];
  }
  const tmp6Result = HomeDrawerStore(tmp8);
  if (cResult[2] === homeDrawerContext) {
    if (cResult[3] === tmp6Result) {
      let tmp10;
      let tmp16;
      if (cResult[4] === tmp7) {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== panelStyles) {
        const obj3 = { panelStyles };
        const tmp19 = unpackModuleId(closure_15, obj3);
        cResult[6] = panelStyles;
        cResult[7] = tmp19;
        tmp16 = tmp19;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === gesture) {
        let tmp20;
        if (cResult[9] === tmp16) {
          tmp20 = cResult[10];
        }
        if (cResult[11] === homeDrawerContext) {
          if (cResult[12] === tmp10) {
            let tmp23;
            if (cResult[13] === tmp20) {
              tmp23 = cResult[14];
            }
            return tmp23;
          }
        }
        const obj4 = { value: homeDrawerContext, children: items };
        items = [tmp10, tmp20];
        const tmp25 = closure_12(useHomeDrawerGesture.HomeDrawerStateContext.Provider, obj4);
        cResult[11] = homeDrawerContext;
        cResult[12] = tmp10;
        cResult[13] = tmp20;
        cResult[14] = tmp25;
        tmp23 = tmp25;
      }
      const obj5 = { gesture, children: tmp16 };
      const tmp22 = unpackModuleId(NonCollapsableGestureDetector2.NonCollapsableGestureDetector, obj5);
      cResult[8] = gesture;
      cResult[9] = tmp16;
      cResult[10] = tmp22;
      tmp20 = tmp22;
    }
  }
  let tmp11 = null;
  const tmpResult = isJankScreenReportingEnabled;
  if (tmpResult.isJankScreenReportingEnabled()) {
    tmp11 = null;
    if (homeDrawerContext.enableHome) {
      tmp11 = null;
      if (tmp6Result > 0) {
        const obj6 = { position: tmp7, openAt: tmp6Result, closedAt: 0, resolveOpenName: resolveHomeDrawerName, resolveClosedName: getJankScreenName.getBaseScreenName };
        const tmp14 = JankSlidingSurfaceReporterDefault;
        tmp11 = unpackModuleId(tmp14, obj6);
      }
    }
  }
  cResult[2] = homeDrawerContext;
  cResult[3] = tmp6Result;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let gesture;
  let items;
  let panelStyles;
  const obj = useHomeDrawerGesture;
  const homeGesture = obj.useHomeGesture();
  const homeDrawerContext = homeGesture.homeDrawerContext;
  ({ gesture, panelStyles } = homeGesture);
  const tmp4 = HomeDrawerStore((panelX) => panelX.panelX);
  const tmp5 = HomeDrawerStore((maxX) => maxX.maxX);
  const obj2 = { value: homeDrawerContext, children: items };
  const Provider = useHomeDrawerGesture.HomeDrawerStateContext.Provider;
  let tmp7 = null;
  const obj3 = isJankScreenReportingEnabled;
  if (obj3.isJankScreenReportingEnabled()) {
    tmp7 = null;
    if (homeDrawerContext.enableHome) {
      tmp7 = null;
      if (tmp5 > 0) {
        const obj4 = { position: tmp4, openAt: tmp5, closedAt: 0, resolveOpenName: resolveHomeDrawerName, resolveClosedName: getJankScreenName.getBaseScreenName };
        const tmp10 = JankSlidingSurfaceReporterDefault;
        tmp7 = unpackModuleId(tmp10, obj4);
      }
    }
  }
  items = [tmp7, ];
  const obj5 = { gesture, children: unpackModuleId(closure_15, { panelStyles }) };
  const NonCollapsableGestureDetector = NonCollapsableGestureDetector2.NonCollapsableGestureDetector;
  items[1] = unpackModuleId(NonCollapsableGestureDetector, obj5);
  return closure_12(Provider, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "gesture" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  if (MobileHomeDrawerExperiment.useConfig(first).enableHome) {
    let tmp14;
    const _Symbol2 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = unpackModuleId(closure_17, {});
      cResult[1] = tmp17;
      tmp14 = tmp17;
    } else {
      tmp14 = cResult[1];
    }
    tmp10 = tmp14;
  } else {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp9 = unpackModuleId(closure_15, {});
      cResult[2] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp4.fill) {
      const obj3 = { style: tmp4.fill, children: tmp6 };
      const tmp13 = unpackModuleId(hasOwnProperty, obj3);
      cResult[3] = tmp4.fill;
      cResult[4] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[4];
    }
  }
  return tmp10;
}) : (() => {
  let tmp2Result;
  const tmp = closure_14();
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  if (MobileHomeDrawerExperiment.useConfig({ location: "gesture" }).enableHome) {
    tmp2Result = unpackModuleId(closure_17, {});
  } else {
    const obj = { style: tmp.fill, children: unpackModuleId(closure_15, {}) };
    tmp2Result = unpackModuleId(hasOwnProperty, obj);
  }
  return tmp2Result;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { profile: StartupProfiler.Profiles.LeftPanel, children: unpackModuleId(closure_18, {}) };
    const tmp7 = StartupProfilerDefault;
    const tmp9 = unpackModuleId(tmp7, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const obj = { profile: StartupProfiler.Profiles.LeftPanel, children: unpackModuleId(closure_18, {}) };
  const tmp = StartupProfilerDefault;
  return unpackModuleId(tmp, obj);
}));
const result = size.fileFinishedImporting("components_native/MainChannels.tsx");

export default memoResult;