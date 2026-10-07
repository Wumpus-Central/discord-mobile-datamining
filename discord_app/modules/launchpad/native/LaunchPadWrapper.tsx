// === Module 17414: LaunchPadWrapper ===

// Module 17414 (LaunchPadWrapper)
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HapticUtils from "HapticUtils" /* 4861 */;
import RouteManagerDefault from "RouteManager" /* 12572 */;
import LaunchPadPullTabCache from "LaunchPadPullTabCache" /* 17412 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, TouchableOpacity: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
const LaunchPadTypes = fn(11138).LaunchPadTypes;
const Constants = fn(1085);
({ AnalyticEvents: c10, ComponentActions: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { modalWrapper: null, a11yDismiss: null };
let size = { height: "100%", width: "100%", paddingTop: nativeDefault.space.PX_8 };
obj2.modalWrapper = size;
const size1 = { position: "absolute", top: 0, width: "100%", height: nativeDefault.space.PX_8 };
obj2.a11yDismiss = size1;
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      function showLaunchPad() {
        showLaunchPad.setLaunchPadShown(true);
        showLaunchPad.setLaunchPadPosition(1);
      }
      function hideLaunchPad() {
        showLaunchPad.setLaunchPadShown(false);
        showLaunchPad.setLaunchPadPosition(0);
      }
      closure_2 = RouteManagerDefault.addRouteChangeListener(hideLaunchPad);
      let ComponentDispatch = closure_0(1121).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
      let ComponentDispatch2 = closure_0(1121).ComponentDispatch;
      const subscription1 = ComponentDispatch2.subscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
      return () => {
        closure_2();
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.LAUNCH_PAD_SHOW, showLaunchPad);
        const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch2.unsubscribe(constants2.LAUNCH_PAD_HIDE, hideLaunchPad);
      };
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    function showLaunchPad() {
      showLaunchPad.setLaunchPadShown(true);
      showLaunchPad.setLaunchPadPosition(1);
    }
    function hideLaunchPad() {
      showLaunchPad.setLaunchPadShown(false);
      showLaunchPad.setLaunchPadPosition(0);
    }
    closure_2 = RouteManagerDefault.addRouteChangeListener(hideLaunchPad);
    let ComponentDispatch = closure_0(1121).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
    let ComponentDispatch2 = closure_0(1121).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
    return () => {
      closure_2();
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(constants2.LAUNCH_PAD_SHOW, showLaunchPad);
      const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants2.LAUNCH_PAD_HIDE, hideLaunchPad);
    };
  }, items);
});
ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((launchPadType) => {
  const cResult = launchPadType(isModalOpen[9]).c(63);
  launchPadType = launchPadType.launchPadType;
  ({ gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters } = launchPadType);
  closure_14();
  let obj = launchPadType(isModalOpen[9]);
  isModalOpen = launchPadType(isModalOpen[12]).useIsModalOpen();
  if (cResult[0] === gestureState) {
    if (cResult[1] === launchPadSharedState) {
      if (cResult[2] === launchPadShown) {
        let tmp5 = cResult[3];
      }
      ({ launchPadCoverStyles, launchPadStyles } = updaters(tmp[13])(tmp5));
      const tmp8 = updaters(tmp[14])(launchPadShown);
      _slicedToArray = tmp8;
      ref = ref.useRef(!tmp8);
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = {};
        cResult[4] = obj3;
        let tmp11 = obj3;
      } else {
        tmp11 = cResult[4];
      }
      const tmp13 = _slicedToArray(ref.useState(tmp11), 2)[1];
      closure_5 = tmp13;
      if (cResult[5] === tmp13) {
        if (cResult[6] === tmp8) {
          let tmp14 = cResult[7];
        }
        if (cResult[8] !== tmp8) {
          const items = [tmp8];
          cResult[8] = tmp8;
          cResult[9] = items;
          let tmp15 = items;
        } else {
          tmp15 = cResult[9];
        }
        const effect = obj4.useEffect(tmp14, tmp15);
        if (cResult[10] !== updaters) {
          class W {
            constructor() {
              return updaters.setLaunchPadPosition(0);
            }
          }
          cResult[10] = updaters;
          cResult[11] = W;
          const tmp17 = W;
        } else {
          class W {
            constructor() {
              return updaters.setLaunchPadPosition(0);
            }
          }
        }
        W = tmp17;
        if (cResult[12] !== tmp8) {
          class M {
            constructor() {
              if (closure_3) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[15]);
                tmp3 = AnalyticEvents;
                trackResult = obj.track(AnalyticEvents.LAUNCHPAD_OPENED);
              }
              return;
            }
          }
          const items1 = [tmp8];
          cResult[12] = tmp8;
          cResult[13] = M;
          cResult[14] = items1;
          let tmp19 = items1;
        } else {
          class M {
            constructor() {
              if (closure_3) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[15]);
                tmp3 = AnalyticEvents;
                trackResult = obj.track(AnalyticEvents.LAUNCHPAD_OPENED);
              }
              return;
            }
          }
          tmp19 = cResult[14];
        }
        const effect1 = obj4.useEffect(M, tmp19);
        if (cResult[15] === isModalOpen) {
          class M {
            constructor() {
              if (closure_3) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[15]);
                tmp3 = AnalyticEvents;
                trackResult = obj.track(AnalyticEvents.LAUNCHPAD_OPENED);
              }
              return;
            }
          }
        }
        const fn = function z() {
          if (launchPadType === LaunchPadTypes.PULL_TAB) {
            if (!isModalOpen) {
              const result = LaunchPadPullTabCache.setLaunchPadPullTabExclusionRect();
              if (closure_3) {
                const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
                const tmp2Result = HapticUtils;
              }
            }
          }
          const result2 = LaunchPadPullTabCache.clearLaunchPadPullTabExclusionRect();
        };
        const items2 = [launchPadType, tmp8, isModalOpen];
        cResult[15] = isModalOpen;
        cResult[16] = launchPadType;
        cResult[17] = tmp8;
        class N {
          constructor() {
            if (closure_3) {
              tmp2 = closure_4;
              flag = false;
              closure_4.current = false;
              return;
            } else {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 1000;
              closure_0 = setTimeout(() => {
                ref.current = true;
                closure_1_5({});
              }, 1000);
              return () => clearTimeout(closure_0);
            }
          }
        }
        cResult[19] = items2;
      }
      class N {
        constructor() {
          if (closure_3) {
            tmp2 = closure_4;
            flag = false;
            closure_4.current = false;
            return;
          } else {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 1000;
            closure_0 = setTimeout(() => {
              ref.current = true;
              closure_1_5({});
            }, 1000);
            return () => clearTimeout(closure_0);
          }
        }
      }
      cResult[5] = tmp13;
      cResult[6] = tmp8;
      cResult[7] = N;
      tmp14 = N;
      const tmp7 = updaters(tmp[13])(tmp5);
    }
  }
  const obj5 = { launchPadSharedState, launchPadShown, gestureState };
  cResult[0] = gestureState;
  cResult[1] = launchPadSharedState;
  cResult[2] = launchPadShown;
  cResult[3] = obj5;
  tmp5 = obj5;
  const obj2 = launchPadType(isModalOpen[12]);
}) : ((launchPadType) => {
  launchPadType = launchPadType.launchPadType;
  ({ gestureState, launchPadShown, launchPadSharedState, updaters } = launchPadType);
  let isModalOpen;
  let ref;
  const tmp = closure_14();
  isModalOpen = launchPadType(isModalOpen[12]).useIsModalOpen();
  let obj = launchPadType(isModalOpen[12]);
  ({ launchPadCoverStyles, launchPadStyles } = updaters(isModalOpen[13])({ launchPadSharedState, launchPadShown, gestureState }));
  const tmp7 = updaters(isModalOpen[14])(launchPadShown);
  _slicedToArray = tmp7;
  ref = ref.useRef(!tmp7);
  closure_5 = _slicedToArray(ref.useState({}), 2)[1];
  const items = [tmp7];
  const effect = ref.useEffect(() => {
    if (closure_3) {
      ref.current = false;
    } else {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        ref.current = true;
        closure_1_5({});
      }, 1000);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [updaters];
  const onPress = ref.useCallback(() => updaters.setLaunchPadPosition(0), items1);
  const items2 = [tmp7];
  const effect1 = ref.useEffect(() => {
    if (closure_3) {
      AnalyticsUtilsDefault.track(constants.LAUNCHPAD_OPENED);
    }
  }, items2);
  const items3 = [launchPadType, tmp7, isModalOpen];
  const effect2 = ref.useEffect(() => {
    if (launchPadType === LaunchPadTypes.PULL_TAB) {
      if (!isModalOpen) {
        const result = LaunchPadPullTabCache.setLaunchPadPullTabExclusionRect();
        if (closure_3) {
          const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          const tmp2Result = HapticUtils;
        }
      }
    }
    const result2 = LaunchPadPullTabCache.clearLaunchPadPullTabExclusionRect();
  }, items3);
  const items4 = [launchPadShown];
  const effect3 = ref.useEffect(() => () => launchPadType(isModalOpen[16]).clearLaunchPadPullTabExclusionRect(), items4);
  updaters(isModalOpen[18])(() => {
    if (closure_3) {
      callback();
    }
    return closure_3;
  });
  closure_15(updaters);
  const obj2 = { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: null };
  const tmp6 = updaters(isModalOpen[13])({ launchPadSharedState, launchPadShown, gestureState });
  const items5 = [closure_12(updaters(isModalOpen[20]).View, { style: launchPadCoverStyles, pointerEvents: "none" }), , ];
  let tmp20Result = null;
  if (launchPadType === LaunchPadTypes.PULL_TAB) {
    tmp20Result = null;
    if (!isModalOpen) {
      let obj3 = { gestureState, launchPadSharedState, launchPadPullTabState: launchPadType.launchPadPullTabState, updaters };
      tmp20Result = closure_12(updaters(tmp3[21]), obj3);
    }
  }
  items5[1] = tmp20Result;
  const obj4 = { style: launchPadStyles, pointerEvents: "none", children: null };
  const obj5 = { nativeID: "launch-pad", style: tmp.modalWrapper, onAccessibilityEscape: onPress, accessibilityViewIsModal: tmp7, children: null };
  let str2 = "no";
  if (tmp7) {
    str2 = "yes";
  }
  const obj6 = { importantForAccessibility: str2, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null };
  const intl = tmp2(tmp3[22]).intl;
  obj6.accessibilityLabel = intl.string(launchPadType(isModalOpen[22]).t.WAI6xu);
  obj6.onPress = onPress;
  obj6.style = tmp.a11yDismiss;
  const items6 = [closure_12(onPress, obj6), closure_12(closure_7, { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject }), ];
  let tmp23 = !tmp7;
  if (!tmp7) {
    tmp23 = tmp16;
  }
  const obj7 = { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject };
  tmp16 = updaters(isModalOpen[19])(ref);
  const tmp18 = closure_5;
  items6[2] = closure_12(launchPadType(isModalOpen[24]).Freeze, { freeze: tmp23, children: closure_12(updaters(isModalOpen[23]), { visible: tmp7, sharedState: launchPadSharedState }) });
  obj5.children = items6;
  obj4.children = closure_13(launchPadType(isModalOpen[25]).AccessibilityView, obj5);
  items5[2] = closure_12(updaters(isModalOpen[20]).View, obj4);
  obj2.children = items5;
  return closure_13(tmp18, obj2);
});