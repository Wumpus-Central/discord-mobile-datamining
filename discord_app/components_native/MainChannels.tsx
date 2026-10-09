// discord_app/components_native/MainChannels.tsx
import c from "../../_runtime/00576_c.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../modules/safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../modules/reanimated/ReanimatedRexport.tsx";
import useChatLayoutDefault from "../modules/chat/native/useChatLayout.tsx";
import HomeDrawerExperiment from "../modules/home_drawer/native/HomeDrawerExperiment.tsx";
import useRefValueDefault from "../hooks/useRefValue.tsx";
import StartupProfiler from "../modules/app_startup/StartupProfiler.tsx";
import isJankScreenReportingEnabled from "../modules/jank_stats/native/isJankScreenReportingEnabled.tsx";
import getJankScreenName from "../modules/jank_stats/native/getJankScreenName.tsx";
import JankSlidingSurfaceReporterDefault from "../modules/jank_stats/native/JankSlidingSurfaceReporter.native.tsx";
import useGuildsRouteGuildId from "../modules/main_tabs_v2/navigator/useGuildsRouteGuildId.tsx";
import useChannelListWidthDefault from "../modules/channel_list_v2/native/useChannelListWidth.tsx";
import messages_MessagesDefault from "../modules/main_tabs_v2/native/tabs/messages/Messages.tsx";
import useHomeDrawerGesture from "../modules/home_drawer/native/useHomeDrawerGesture.tsx";
import RedesignChannelListDefault from "../modules/channel_list_v2/native/RedesignChannelList.tsx";
import NativeFreezeScreens from "../modules/freeze/native/NativeFreezeScreens.tsx";
import HomePanelContent from "../modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx";
import NonCollapsableGestureDetector from "../modules/gesture_handlers/native/NonCollapsableGestureDetector.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";
import HomeDrawerStore from "../modules/home_drawer/native/HomeDrawerStore.tsx";

const StartupProfilerDefault = StartupProfiler;

require = fn;
function resolveHomeDrawerName() {
  return HOME_DRAWER_SCREEN;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
const DM_WIDTH = Constants.DM_WIDTH;
const ME = Constants.ME;
const HOME_DRAWER_SCREEN = fn(16353).HOME_DRAWER_SCREEN;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMainChannelsRouteInfo() {
      const cResult = c.c(7);
      const tmp3 = _slicedToArray(useGuildsRouteGuildId.useGuildsRouteGuildAndChannelId(), 2);
      const current = tmp3[0];
      if (cResult[0] !== current) {
        const fn = function l() {
          ref.current = current;
        };
        const items = [current];
        cResult[0] = current;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp8 = items;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
        tmp8 = cResult[2];
      }
      const effect = noop.useEffect(tmp7, tmp8);
      let tmp10 = null != current;
      if (tmp10) {
        tmp10 = current !== ME;
      }
      let tmp12 = useRefValueDefault(noop.useRef(current));
      if (tmp10) {
        tmp12 = current;
      }
      if (cResult[3] === tmp3[1]) {
        if (cResult[4] === tmp10) {
          if (cResult[5] === tmp12) {
            let tmp13 = cResult[6];
          }
          return tmp13;
        }
      }
      const obj4 = { isGuildSelected: tmp10, selectedGuildId: tmp12, selectedChannelId: tmp3[1] };
      cResult[3] = tmp3[1];
      cResult[4] = tmp10;
      cResult[5] = tmp12;
      cResult[6] = obj4;
      tmp13 = obj4;
      const ref = noop.useRef(current);
    }
  : function useMainChannelsRouteInfo() {
      [current, obj2.selectedChannelId] = useGuildsRouteGuildId.useGuildsRouteGuildAndChannelId();
      const items = [current];
      const effect = noop.useEffect(() => {
        ref.current = current;
      }, items);
      let tmp6 = null != current;
      if (tmp6) {
        tmp6 = current !== ME;
      }
      let tmp8 = useRefValueDefault(noop.useRef(current));
      const obj2 = { isGuildSelected: tmp6, selectedGuildId: null, selectedChannelId: null };
      if (tmp6) {
        tmp8 = current;
      }
      obj2.selectedGuildId = tmp8;
      return obj2;
    };
const createStyles = fn(5091);
let obj = { fill: { flex: 1 }, sideContainer: null, side: null, sideTablet: null };
const rect = {
  position: "absolute",
  top: 0,
  left: DM_WIDTH,
  bottom: 0,
  right: 0,
  flexDirection: "row",
  borderLeftWidth: 1,
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.APP_FRAME_BORDER,
  borderTopLeftRadius: nativeDefault.radii.xl,
};
obj.sideContainer = rect;
obj.side = { borderTopLeftRadius: nativeDefault.radii.xl - 1, borderTopRightRadius: nativeDefault.radii.none };
let obj4 = { borderTopLeftRadius: nativeDefault.radii.xl - 1, borderTopRightRadius: nativeDefault.radii.none };
obj.sideTablet = { borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_14 = createStyles.createStyles(obj);
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LeftPanelContent(panelStyles) {
      const cResult = c.c(28);
      panelStyles = panelStyles.panelStyles;
      const tmp4 = closure_14();
      const tmp5 = closure_13();
      ({ selectedGuildId, selectedChannelId } = tmp5);
      const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
      const top = useSafeAreaInsetsDefault().top;
      if (cResult[0] !== top) {
        const obj2 = { marginTop: top };
        cResult[0] = top;
        cResult[1] = obj2;
        let tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === tmp4.sideContainer) {
        if (cResult[3] === tmp7) {
          let tmp8 = cResult[4];
        }
        let sideTablet = isChatBesideChannelList;
        if (isChatBesideChannelList) {
          sideTablet = tmp4.sideTablet;
        }
        if (cResult[5] === tmp4.side) {
          if (cResult[6] === sideTablet) {
            let tmp9 = cResult[7];
          }
          let num6 = 0;
          const sum = DM_WIDTH + useChannelListWidthDefault();
          if (tmp5.isGuildSelected) {
            num6 = 1;
          }
          if (cResult[8] !== tmp9) {
            const obj3 = { style: tmp9 };
            const tmp14 = closure_1_11(messages_MessagesDefault, obj3);
            cResult[8] = tmp9;
            cResult[9] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[9];
          }
          if (cResult[10] === tmp9) {
            if (cResult[11] === selectedChannelId) {
              if (cResult[12] === selectedGuildId) {
                let tmp15 = cResult[13];
              }
              if (cResult[14] === num6) {
                if (cResult[15] === tmp12) {
                  if (cResult[16] === tmp15) {
                    let tmp18 = cResult[17];
                  }
                  let tmp21;
                  if (isChatBesideChannelList) {
                    tmp21 = sum;
                  }
                  if (cResult[18] !== tmp21) {
                    const items = [timestampProducer.absoluteFill];
                    const obj4 = { width: tmp21 };
                    items[1] = obj4;
                    cResult[18] = tmp21;
                    cResult[19] = items;
                    let tmp22 = items;
                  } else {
                    tmp22 = cResult[19];
                  }
                  const _Symbol = Symbol;
                  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp27 = closure_1_11(HomePanelContent.HomePanelContent, {});
                    cResult[20] = tmp27;
                    let tmp25 = tmp27;
                  } else {
                    tmp25 = cResult[20];
                  }
                  if (cResult[21] === panelStyles) {
                    if (cResult[22] === tmp18) {
                      if (cResult[23] === tmp8) {
                        if (cResult[25] === tmp22) {
                          if (cResult[26] === tmp28) {
                            let tmp35 = cResult[27];
                          }
                          return tmp35;
                        }
                        const obj5 = { style: tmp22, children: null };
                        const items1 = [tmp25, cResult[24]];
                        obj5.children = items1;
                        const tmp38 = __initData(hasOwnProperty, obj5);
                        cResult[25] = tmp22;
                        cResult[26] = cResult[24];
                        cResult[27] = tmp38;
                        tmp35 = tmp38;
                      }
                    }
                  }
                  if (null == panelStyles) {
                    const obj6 = {
                      style: tmp8,
                      pointerEvents: "box-none",
                      nativeID: "messages-parent-view",
                      children: tmp18,
                    };
                    let tmp31 = closure_1_11(hasOwnProperty, obj6);
                  } else {
                    const obj7 = {
                      style: null,
                      pointerEvents: "box-none",
                      nativeID: "messages-parent-view",
                      children: null,
                    };
                    const items2 = [tmp8, panelStyles];
                    obj7.style = items2;
                    obj7.children = tmp18;
                    tmp31 = closure_1_11(ReanimatedRexportDefault.View, obj7);
                  }
                  cResult[21] = panelStyles;
                  cResult[22] = tmp18;
                  cResult[23] = tmp8;
                  cResult[24] = tmp31;
                }
              }
              const obj8 = { activeIndex: num6, children: null };
              const items3 = [tmp12, tmp15];
              obj8.children = items3;
              const tmp20 = __initData(NativeFreezeScreens.NativeFreezeScreens, obj8);
              cResult[14] = num6;
              cResult[15] = tmp12;
              cResult[16] = tmp15;
              cResult[17] = tmp20;
              tmp18 = tmp20;
            }
          }
          const obj9 = { style: tmp9, selectedGuildId, selectedChannelId };
          const tmp17 = closure_1_11(RedesignChannelListDefault, obj9);
          cResult[10] = tmp9;
          cResult[11] = selectedChannelId;
          cResult[12] = selectedGuildId;
          cResult[13] = tmp17;
          tmp15 = tmp17;
        }
        const items4 = [tmp4.side, sideTablet];
        cResult[5] = tmp4.side;
        cResult[6] = sideTablet;
        cResult[7] = items4;
        tmp9 = items4;
      }
      const items5 = [tmp4.sideContainer, tmp7];
      cResult[2] = tmp4.sideContainer;
      cResult[3] = tmp7;
      cResult[4] = items5;
      tmp8 = items5;
    }
  : function LeftPanelContent(panelStyles) {
      panelStyles = panelStyles.panelStyles;
      const tmp = closure_14();
      closure_0 = tmp;
      ({ isGuildSelected, selectedGuildId, selectedChannelId } = closure_13());
      const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
      const top = useSafeAreaInsetsDefault().top;
      let items = [tmp, top];
      const memo = noop.useMemo(() => {
        const items = [closure_0.sideContainer, { marginTop: top }];
        return items;
      }, items);
      const items1 = [tmp, isChatBesideChannelList];
      const memo1 = noop.useMemo(() => {
        const items = [closure_0.side];
        let sideTablet = isChatBesideChannelList;
        if (isChatBesideChannelList) {
          sideTablet = closure_0.sideTablet;
        }
        items[1] = sideTablet;
        return items;
      }, items1);
      const sum = DM_WIDTH + useChannelListWidthDefault();
      let num = 0;
      if (isGuildSelected) {
        num = 1;
      }
      const obj = { activeIndex: num, children: null };
      const items2 = [
        closure_1_11(messages_MessagesDefault, { style: memo1 }),
        closure_1_11(RedesignChannelListDefault, { style: memo1, selectedGuildId, selectedChannelId }),
      ];
      obj.children = items2;
      const tmp8Result = __initData(NativeFreezeScreens.NativeFreezeScreens, obj);
      const items3 = [timestampProducer.absoluteFill];
      let tmp13;
      if (isChatBesideChannelList) {
        tmp13 = sum;
      }
      const obj2 = { style: items3, children: null };
      items3[1] = { width: tmp13 };
      const items4 = [closure_1_11(HomePanelContent.HomePanelContent, {})];
      if (null == panelStyles) {
        const obj3 = { style: memo, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp8Result };
        let tmp10Result = closure_1_11(hasOwnProperty, obj3);
      } else {
        const obj4 = { style: null, pointerEvents: "box-none", nativeID: "messages-parent-view", children: null };
        const items5 = [memo, panelStyles];
        obj4.style = items5;
        obj4.children = tmp8Result;
        tmp10Result = closure_1_11(ReanimatedRexportDefault.View, obj4);
      }
      items4[1] = tmp10Result;
      obj2.children = items4;
      return __initData(hasOwnProperty, obj2);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LeftPanelHomeDrawerContainer() {
      const cResult = c.c(15);
      const homeGesture = useHomeDrawerGesture.useHomeGesture();
      ({ gesture, panelStyles, homeDrawerContext } = homeGesture);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(panelX) {
          return panelX.panelX;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp7 = HomeDrawerStore(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function f(maxX) {
          return maxX.maxX;
        };
        cResult[1] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[1];
      }
      const tmp6Result = HomeDrawerStore(tmp8);
      if (cResult[2] === homeDrawerContext) {
        if (cResult[3] === tmp6Result) {
          if (cResult[4] === tmp7) {
            let tmp10 = cResult[5];
          }
          if (cResult[6] !== panelStyles) {
            const obj3 = { panelStyles };
            const tmp19 = closure_1_11(closure_15, obj3);
            cResult[6] = panelStyles;
            cResult[7] = tmp19;
            let tmp16 = tmp19;
          } else {
            tmp16 = cResult[7];
          }
          if (cResult[8] === gesture) {
            if (cResult[9] === tmp16) {
              let tmp20 = cResult[10];
            }
            if (cResult[11] === homeDrawerContext) {
              if (cResult[12] === tmp10) {
                if (cResult[13] === tmp20) {
                  let tmp23 = cResult[14];
                }
                return tmp23;
              }
            }
            const obj4 = { value: homeDrawerContext, children: null };
            const items = [tmp10, tmp20];
            obj4.children = items;
            const tmp25 = __initData(useHomeDrawerGesture.HomeDrawerStateContext.Provider, obj4);
            cResult[11] = homeDrawerContext;
            cResult[12] = tmp10;
            cResult[13] = tmp20;
            cResult[14] = tmp25;
            tmp23 = tmp25;
          }
          const obj5 = { gesture, children: tmp16 };
          const tmp22 = closure_1_11(NonCollapsableGestureDetector.NonCollapsableGestureDetector, obj5);
          cResult[8] = gesture;
          cResult[9] = tmp16;
          cResult[10] = tmp22;
          tmp20 = tmp22;
        }
      }
      let tmp11 = null;
      if (tmpResult.isJankScreenReportingEnabled()) {
        tmp11 = null;
        if (homeDrawerContext.enableHome) {
          tmp11 = null;
          if (tmp6Result > 0) {
            const obj6 = {
              position: tmp7,
              openAt: tmp6Result,
              closedAt: 0,
              resolveOpenName: resolveHomeDrawerName,
              resolveClosedName: getJankScreenName.getBaseScreenName,
            };
            tmp11 = closure_1_11(JankSlidingSurfaceReporterDefault, obj6);
          }
        }
      }
      cResult[2] = homeDrawerContext;
      cResult[3] = tmp6Result;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
      tmpResult = isJankScreenReportingEnabled;
    }
  : function LeftPanelHomeDrawerContainer() {
      const homeGesture = useHomeDrawerGesture.useHomeGesture();
      const homeDrawerContext = homeGesture.homeDrawerContext;
      ({ gesture, panelStyles } = homeGesture);
      const tmp5 = HomeDrawerStore((maxX) => maxX.maxX);
      const obj2 = { value: homeDrawerContext, children: null };
      const tmp4 = HomeDrawerStore((panelX) => panelX.panelX);
      let tmp7 = null;
      if (obj3.isJankScreenReportingEnabled()) {
        tmp7 = null;
        if (homeDrawerContext.enableHome) {
          tmp7 = null;
          if (tmp5 > 0) {
            const obj4 = {
              position: tmp4,
              openAt: tmp5,
              closedAt: 0,
              resolveOpenName: resolveHomeDrawerName,
              resolveClosedName: getJankScreenName.getBaseScreenName,
            };
            tmp7 = closure_1_11(JankSlidingSurfaceReporterDefault, obj4);
          }
        }
      }
      const items = [tmp7];
      obj3 = isJankScreenReportingEnabled;
      items[1] = closure_1_11(NonCollapsableGestureDetector.NonCollapsableGestureDetector, {
        gesture,
        children: closure_1_11(closure_15, { panelStyles }),
      });
      obj2.children = items;
      return __initData(useHomeDrawerGesture.HomeDrawerStateContext.Provider, obj2);
    };
ReactCompilerGating = fn(558);
let closure_18 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function LeftMenuTabsInner() {
        const cResult = c.c(5);
        const tmp4 = closure_14();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { location: "gesture" };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
        if (MobileHomeDrawerExperiment.useConfig(first).enableHome) {
          const _Symbol2 = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp17 = closure_1_11(closure_17, {});
            cResult[1] = tmp17;
          }
        } else {
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp9 = closure_1_11(closure_15, {});
            cResult[2] = tmp9;
            let tmp6 = tmp9;
          } else {
            tmp6 = cResult[2];
          }
          if (cResult[3] !== tmp4.fill) {
            const obj3 = { style: tmp4.fill, children: tmp6 };
            const tmp13 = closure_1_11(hasOwnProperty, obj3);
            cResult[3] = tmp4.fill;
            cResult[4] = tmp13;
            let tmp10 = tmp13;
          } else {
            tmp10 = cResult[4];
          }
          return tmp10;
        }
      }
    : function LeftMenuTabsInner() {
        const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
        if (MobileHomeDrawerExperiment.useConfig({ location: "gesture" }).enableHome) {
          let tmp2Result = closure_1_11(closure_17, {});
        } else {
          const obj = { style: tmp.fill, children: closure_1_11(closure_15, {}) };
          tmp2Result = closure_1_11(hasOwnProperty, obj);
        }
        return tmp2Result;
      },
);
ReactCompilerGating = fn(558);
let obj5 = { borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/MainChannels.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MainChannelsRedesignInner() {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { profile: StartupProfiler.Profiles.LeftPanel, children: closure_1_11(closure_18, {}) };
          const tmp9 = closure_1_11(StartupProfilerDefault, obj2);
          cResult[0] = tmp9;
          let first = tmp9;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : function MainChannelsRedesignInner() {
        const obj = { profile: StartupProfiler.Profiles.LeftPanel, children: closure_1_11(closure_18, {}) };
        return closure_1_11(StartupProfilerDefault, obj);
      },
);
