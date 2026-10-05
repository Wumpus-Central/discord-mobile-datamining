// discord_app/modules/launchpad/native/LaunchPadWrapper.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import LaunchPadConstants from "LaunchPadConstants.tsx";
import RouteManagerDefault from "../../routing/RouteManager.tsx";
import LaunchPadPullTabCache from "LaunchPadPullTabCache.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, flag, launchPadType, num;

let c10;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
let size1;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({
  View: hasOwnProperty,
  Pressable: metroRequire,
  TouchableOpacity: metroImportDefault,
  StyleSheet: metroImportAll,
} = react_native);
const LaunchPadTypes = LaunchPadConstants.LaunchPadTypes;
({ AnalyticEvents: c10, ComponentActions: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { modalWrapper: size, a11yDismiss: size1 };
size = { height: "100%", width: "100%", paddingTop: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size1 = { position: "absolute", top: 0, width: "100%", height: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp2;
      let tmp3;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
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
          const obj = RouteManagerDefault;
          let closure_2 = obj.addRouteChangeListener(hideLaunchPad);
          let ComponentDispatch = closure_0(dependencyMap[11]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
          let ComponentDispatch2 = closure_0(dependencyMap[11]).ComponentDispatch;
          const subscription1 = ComponentDispatch2.subscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
          return () => {
            closure_2();
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(unpackModuleId.LAUNCH_PAD_SHOW, showLaunchPad);
            const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch2.unsubscribe(unpackModuleId.LAUNCH_PAD_HIDE, hideLaunchPad);
          };
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : (arg0) => {
      let closure_0 = arg0;
      const items = [arg0];
      const effect = react.useEffect(() => {
        function showLaunchPad() {
          showLaunchPad.setLaunchPadShown(true);
          showLaunchPad.setLaunchPadPosition(1);
        }
        function hideLaunchPad() {
          showLaunchPad.setLaunchPadShown(false);
          showLaunchPad.setLaunchPadPosition(0);
        }
        const obj = RouteManagerDefault;
        let closure_2 = obj.addRouteChangeListener(hideLaunchPad);
        let ComponentDispatch = closure_0(dependencyMap[11]).ComponentDispatch;
        const subscription = ComponentDispatch.subscribe(constants.LAUNCH_PAD_SHOW, showLaunchPad);
        let ComponentDispatch2 = closure_0(dependencyMap[11]).ComponentDispatch;
        const subscription1 = ComponentDispatch2.subscribe(constants.LAUNCH_PAD_HIDE, hideLaunchPad);
        return () => {
          closure_2();
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.unsubscribe(unpackModuleId.LAUNCH_PAD_SHOW, showLaunchPad);
          const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch2.unsubscribe(unpackModuleId.LAUNCH_PAD_HIDE, hideLaunchPad);
        };
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (launchPadType) => {
      let closure_3;
      let gestureState;
      let isModalOpen;
      let launchPadCoverStyles;
      let launchPadPullTabState;
      let launchPadSharedState;
      let launchPadShown;
      let launchPadStyles;
      let ref;
      let updaters;
      let obj = launchPadType(isModalOpen[9]);
      const cResult = obj.c(63);
      launchPadType = launchPadType.launchPadType;
      ({ gestureState, launchPadShown, launchPadSharedState, launchPadPullTabState, updaters } = launchPadType);
      closure_14();
      const obj2 = launchPadType(isModalOpen[12]);
      isModalOpen = obj2.useIsModalOpen();
      if (cResult[0] === gestureState) {
        if (cResult[1] === launchPadSharedState) {
          let tmp5;
          let tmp11;
          if (cResult[2] === launchPadShown) {
            tmp5 = cResult[3];
          }
          ({ launchPadCoverStyles, launchPadStyles } = updaters(isModalOpen[13])(tmp5));
          updaters(isModalOpen[13])(tmp5);
          const tmp8 = updaters(isModalOpen[14])(launchPadShown);
          _slicedToArray = tmp8;
          ref = ref.useRef(!tmp8);
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            let obj3 = {};
            cResult[4] = obj3;
            tmp11 = obj3;
          } else {
            tmp11 = cResult[4];
          }
          const tmp13 = _slicedToArray(ref.useState(tmp11), 2)[1];
          let closure_5 = tmp13;
          if (cResult[5] === tmp13) {
            let tmp14;
            let tmp15;
            let tmp17;
            let tmp19;
            if (cResult[6] === tmp8) {
              tmp14 = cResult[7];
            }
            if (cResult[8] !== tmp8) {
              const items = [tmp8];
              cResult[8] = tmp8;
              cResult[9] = items;
              tmp15 = items;
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
              tmp17 = W;
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
                    const obj = AnalyticsUtilsDefault;
                    obj.track(constants.LAUNCHPAD_OPENED);
                  }
                }
              }
              const items1 = [tmp8];
              cResult[12] = tmp8;
              cResult[13] = M;
              cResult[14] = items1;
              tmp19 = items1;
            } else {
              class M {
                constructor() {
                  if (closure_3) {
                    const obj = AnalyticsUtilsDefault;
                    obj.track(constants.LAUNCHPAD_OPENED);
                  }
                }
              }
              tmp19 = cResult[14];
            }
            const effect1 = obj4.useEffect(M, tmp19);
            if (cResult[15] === isModalOpen) {
              class M {
                constructor() {
                  if (closure_3) {
                    const obj = AnalyticsUtilsDefault;
                    obj.track(constants.LAUNCHPAD_OPENED);
                  }
                }
              }
            }
            const fn = function z() {
              if (launchPadType === LaunchPadTypes.PULL_TAB) {
                if (!isModalOpen) {
                  const obj = LaunchPadPullTabCache;
                  const result = obj.setLaunchPadPullTabExclusionRect();
                  if (closure_3) {
                    const tmp2Result = HapticUtils;
                    const result1 = tmp2Result.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
                  }
                }
              }
              const obj3 = LaunchPadPullTabCache;
              const result2 = obj3.clearLaunchPadPullTabExclusionRect();
            };
            const items2 = [launchPadType, tmp8, isModalOpen];
            cResult[15] = isModalOpen;
            cResult[16] = launchPadType;
            cResult[17] = tmp8;
            class N {
              constructor() {
                tmp = closure_3;
                if (tmp) {
                  tmp3 = closure_4;
                  flag = false;
                  closure_4.current = false;
                  return;
                } else {
                  tmp2 = globalThis;
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
              tmp = closure_3;
              if (tmp) {
                tmp3 = closure_4;
                flag = false;
                closure_4.current = false;
                return;
              } else {
                tmp2 = globalThis;
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
        }
      }
      const obj5 = { launchPadSharedState, launchPadShown, gestureState };
      cResult[0] = gestureState;
      cResult[1] = launchPadSharedState;
      cResult[2] = launchPadShown;
      cResult[3] = obj5;
      tmp5 = obj5;
    }
  : (launchPadType) => {
      let AccessibilityView;
      let callback;
      let closure_3;
      let gestureState;
      let intl;
      let items5;
      let items6;
      let launchPadCoverStyles;
      let launchPadSharedState;
      let launchPadShown;
      let launchPadStyles;
      let obj5;
      let updaters;
      launchPadType = launchPadType.launchPadType;
      ({ gestureState, launchPadShown, launchPadSharedState, updaters } = launchPadType);
      let isModalOpen;
      let ref;
      const launchPadPullTabState = launchPadType.launchPadPullTabState;
      const tmp = closure_14();
      let obj = launchPadType(isModalOpen[12]);
      isModalOpen = obj.useIsModalOpen();
      ({ launchPadCoverStyles, launchPadStyles } = updaters(isModalOpen[13])({
        launchPadSharedState,
        launchPadShown,
        gestureState,
      }));
      updaters(isModalOpen[13])({ launchPadSharedState, launchPadShown, gestureState });
      const tmp7 = updaters(isModalOpen[14])(launchPadShown);
      _slicedToArray = tmp7;
      ref = ref.useRef(!tmp7);
      let closure_5 = _slicedToArray(ref.useState({}), 2)[1];
      const items = [tmp7];
      const effect = ref.useEffect(() => {
        let closure_0;
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
          const obj = AnalyticsUtilsDefault;
          obj.track(constants.LAUNCHPAD_OPENED);
        }
      }, items2);
      const items3 = [launchPadType, tmp7, isModalOpen];
      const effect2 = ref.useEffect(() => {
        if (launchPadType === LaunchPadTypes.PULL_TAB) {
          if (!isModalOpen) {
            const obj = LaunchPadPullTabCache;
            const result = obj.setLaunchPadPullTabExclusionRect();
            if (closure_3) {
              const tmp2Result = HapticUtils;
              const result1 = tmp2Result.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            }
          }
        }
        const obj3 = LaunchPadPullTabCache;
        const result2 = obj3.clearLaunchPadPullTabExclusionRect();
      }, items3);
      const items4 = [launchPadShown];
      const effect3 = ref.useEffect(
        () => () => {
          const obj = launchPadType(isModalOpen[16]);
          return obj.clearLaunchPadPullTabExclusionRect();
        },
        items4,
      );
      updaters(isModalOpen[18])(() => {
        if (closure_3) {
          callback();
        }
        return closure_3;
      });
      closure_15(updaters);
      const obj2 = { style: absoluteFill.absoluteFill, pointerEvents: "box-none", children: items5 };
      items5 = [, ,];
      const tmp16 = updaters(isModalOpen[19])(ref);
      items5[0] = closure_12(updaters(isModalOpen[20]).View, { style: launchPadCoverStyles, pointerEvents: "none" });
      let tmp20Result = null;
      const tmp18 = closure_5;
      if (launchPadType === LaunchPadTypes.PULL_TAB) {
        tmp20Result = null;
        if (!isModalOpen) {
          let obj3 = { gestureState, launchPadSharedState, launchPadPullTabState, updaters };
          tmp20Result = closure_12(updaters(tmp3[21]), obj3);
        }
      }
      items5[1] = tmp20Result;
      const obj4 = { style: launchPadStyles, pointerEvents: "none", children: closure_13(AccessibilityView, obj5) };
      const View = updaters(tmp3[20]).View;
      let str2 = "no";
      obj5 = {
        nativeID: "launch-pad",
        style: tmp.modalWrapper,
        onAccessibilityEscape: onPress,
        accessibilityViewIsModal: tmp7,
        children: items6,
      };
      AccessibilityView = tmp2(tmp3[25]).AccessibilityView;
      const tmp22 = onPress;
      if (tmp7) {
        str2 = "yes";
      }
      const obj6 = {
        importantForAccessibility: str2,
        accessibilityRole: "button",
        accessibilityLabel: intl.string(launchPadType(isModalOpen[22]).t.WAI6xu),
        onPress,
        style: tmp.a11yDismiss,
      };
      intl = tmp2(tmp3[22]).intl;
      items6 = [closure_12(tmp22, obj6), ,];
      const obj7 = { accessible: false, "aria-hidden": true, onPress, style: absoluteFill.absoluteFillObject };
      items6[1] = closure_12(closure_7, obj7);
      let tmp23 = !tmp7;
      const Freeze = tmp2(tmp3[24]).Freeze;
      if (!tmp7) {
        tmp23 = tmp16;
      }
      const obj8 = {
        freeze: tmp23,
        children: closure_12(updaters(isModalOpen[23]), { visible: tmp7, sharedState: launchPadSharedState }),
      };
      items6[2] = closure_12(Freeze, obj8);
      items5[2] = closure_12(View, obj4);
      return closure_13(tmp18, obj2);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadWrapper.tsx");

export default tmp6;
