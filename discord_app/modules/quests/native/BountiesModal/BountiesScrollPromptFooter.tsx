// === Module 14832: BountiesScrollPromptFooter ===

// Module 14832 (BountiesScrollPromptFooter)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import BountiesScrollGradientRive2 from "BountiesScrollGradientRive" /* 4668 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9660 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 14833 */;
import useVisibilityTransition from "useVisibilityTransition" /* 14834 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c10;
let c9;
let closure_3 = ["visible"];
const StyleSheet = react_native.StyleSheet;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles(() => {
  let obj3;
  const obj = { root: { position: "absolute", bottom: 0, left: 0, right: 0 }, content: { flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 }, gradient: obj3 };
  ({ flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  obj3 = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  return obj;
});
let entering = function n(sharedValue) {
  let obj2;
  const obj = { opacity: obj2.withTiming(sharedValue, timingPresets.timingStandard, "respect-motion-settings") };
  obj2 = timing;
  return obj;
};
let obj = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
entering.__closure = obj;
entering.__workletHash = 11416950434629;
entering.__initData = { code: "function BountiesScrollPromptFooterTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
let fn2 = function o(sharedValue, fn) {
  let obj2;
  const obj = { opacity: obj2.withTiming(sharedValue, timingPresets.timingStandard, "respect-motion-settings", fn) };
  obj2 = timing;
  return obj;
};
let obj2 = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
fn2.__closure = obj2;
fn2.__workletHash = 9928471408966;
fn2.__initData = { code: "function BountiesScrollPromptFooterTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items1;
  let onContentLayout;
  let opacityStyle;
  let tmp14;
  let tmp5;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  let visibilityOpacityStyle;
  let zIndex;
  const obj = react2;
  const cResult = obj.c(30);
  ({ children, onContentLayout, zIndex, opacityStyle, visibilityOpacityStyle } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== zIndex) {
    let tmp7;
    if (null != zIndex) {
      tmp7 = { zIndex };
      const obj2 = { zIndex };
    }
    cResult[0] = zIndex;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function f() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp9 = fn;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  const maxResult = max(useSafeAreaInsetsDefault().bottom, nativeDefault.space.PX_8);
  if (cResult[4] !== maxResult) {
    const obj3 = { paddingBottom: maxResult };
    cResult[4] = maxResult;
    cResult[5] = obj3;
    tmp14 = obj3;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp4.root) {
    if (cResult[7] === visibilityOpacityStyle) {
      let tmp15;
      if (cResult[8] === tmp5) {
        tmp15 = cResult[9];
      }
      if (cResult[10] === opacityStyle) {
        let tmp16;
        let tmp17;
        if (cResult[11] === tmp4.gradient) {
          tmp16 = cResult[12];
        }
        let str = "play";
        if (stateFromStores) {
          str = "halt";
        }
        if (cResult[13] !== str) {
          const obj4 = { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str };
          const tmp19 = React4(BountiesScrollGradientRive2.BountiesScrollGradientRive, obj4);
          cResult[13] = str;
          cResult[14] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[14];
        }
        if (cResult[15] === tmp16) {
          let tmp20;
          if (cResult[16] === tmp17) {
            tmp20 = cResult[17];
          }
          if (cResult[18] === tmp14) {
            if (cResult[19] === opacityStyle) {
              let tmp23;
              if (cResult[20] === tmp4.content) {
                tmp23 = cResult[21];
              }
              if (cResult[22] === children) {
                if (cResult[23] === onContentLayout) {
                  let tmp24;
                  if (cResult[24] === tmp23) {
                    tmp24 = cResult[25];
                  }
                  if (cResult[26] === tmp20) {
                    if (cResult[27] === tmp24) {
                      let tmp27;
                      if (cResult[28] === tmp15) {
                        tmp27 = cResult[29];
                      }
                      return tmp27;
                    }
                  }
                  const obj5 = { style: tmp15, pointerEvents: "none", children: items1 };
                  items1 = [tmp20, tmp24];
                  const tmp29 = authStore(ReanimatedRexportDefault.View, obj5);
                  cResult[26] = tmp20;
                  cResult[27] = tmp24;
                  cResult[28] = tmp15;
                  cResult[29] = tmp29;
                  tmp27 = tmp29;
                }
              }
              const obj6 = { style: tmp23, onLayout: onContentLayout, children };
              const tmp26 = React4(ReanimatedRexportDefault.View, obj6);
              cResult[22] = children;
              cResult[23] = onContentLayout;
              cResult[24] = tmp23;
              cResult[25] = tmp26;
              tmp24 = tmp26;
            }
          }
          const items2 = [tmp4.content, tmp14, opacityStyle];
          cResult[18] = tmp14;
          cResult[19] = opacityStyle;
          cResult[20] = tmp4.content;
          cResult[21] = items2;
          tmp23 = items2;
        }
        const obj7 = { style: tmp16, children: tmp17 };
        const tmp22 = React4(ReanimatedRexportDefault.View, obj7);
        cResult[15] = tmp16;
        cResult[16] = tmp17;
        cResult[17] = tmp22;
        tmp20 = tmp22;
      }
      const items3 = [tmp4.gradient, opacityStyle];
      cResult[10] = opacityStyle;
      cResult[11] = tmp4.gradient;
      cResult[12] = items3;
      tmp16 = items3;
    }
  }
  const items4 = [tmp4.root, visibilityOpacityStyle, tmp5];
  cResult[6] = tmp4.root;
  cResult[7] = visibilityOpacityStyle;
  cResult[8] = tmp5;
  cResult[9] = items4;
  tmp15 = items4;
}) : ((zIndex) => {
  let BountiesScrollGradientRive;
  let bottom;
  let children;
  let items3;
  let items4;
  let items5;
  let items6;
  let onContentLayout;
  let str;
  let useReducedMotion;
  let visibilityOpacityStyle;
  zIndex = zIndex.zIndex;
  const opacityStyle = zIndex.opacityStyle;
  importDefault = undefined;
  ({ children, onContentLayout, visibilityOpacityStyle } = zIndex);
  const tmp = closure_11();
  const items = [zIndex];
  const memo = react.useMemo(() => {
    let tmp2;
    if (null != zIndex) {
      tmp2 = { zIndex: tmp };
      const obj = { zIndex: tmp };
    }
    return tmp2;
  }, items);
  let obj = zIndex(504);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp6 = useSafeAreaInsetsDefault();
  importDefault = tmp6;
  const items2 = [tmp6.bottom];
  const memo1 = react.useMemo(() => {
    const obj = { paddingBottom: Math.max(bottom.bottom, nativeDefault.space.PX_8) };
    return obj;
  }, items2);
  const obj2 = { style: items3, pointerEvents: "none", children: items5 };
  items3 = [tmp.root, visibilityOpacityStyle, memo];
  const View = ReanimatedRexportDefault.View;
  const obj3 = { style: items4, children: closure_9(BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str }) };
  items4 = [tmp.gradient, opacityStyle];
  const View2 = ReanimatedRexportDefault.View;
  str = "play";
  BountiesScrollGradientRive = zIndex(4668).BountiesScrollGradientRive;
  if (stateFromStores) {
    str = "halt";
  }
  items5 = [closure_9(View2, obj3), ];
  const obj4 = { style: items6, onLayout: onContentLayout, children };
  items6 = [tmp.content, memo1, opacityStyle];
  items5[1] = closure_9(ReanimatedRexportDefault.View, obj4);
  return closure_10(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let opacityStyle;
  let shouldRender;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  let obj = react2;
  const cResult = obj.c(15);
  if (cResult[0] !== visible) {
    visible = visible.visible;
    const tmp8 = _objectWithoutProperties(visible, closure_3);
    cResult[0] = visible;
    cResult[1] = tmp8;
    cResult[2] = visible;
    tmp5 = visible;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = BountiesModalTransitionsRefactorExperiment;
  const isBountiesModalTransitionsRefactorEnabled = tmpResult.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    entering = function v() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[3] = items;
    cResult[4] = entering;
    tmp11 = entering;
    tmp10 = items;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult3 = get_initialized;
  const stateFromStores = tmpResult3.useStateFromStores(tmp10, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    fn2 = function _(arg0, visibilityOpacityStyle) {
      const obj = { visibilityOpacityStyle };
      const merged = Object.assign(arg0);
      return closure_1_9(closure_1_14, obj);
    };
    cResult[5] = fn2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp5) {
    const obj2 = { visible: tmp5, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
    cResult[6] = tmp5;
    cResult[7] = obj2;
    tmp15 = obj2;
  } else {
    tmp15 = cResult[7];
  }
  const tmpResult4 = useVisibilityTransition;
  const visibilityTransition = tmpResult4.useVisibilityTransition(tmp15);
  ({ opacityStyle, shouldRender } = visibilityTransition);
  if (isBountiesModalTransitionsRefactorEnabled) {
    let tmp24;
    if (tmp5) {
      tmp24 = tmp4;
    }
    if (cResult[8] === tmp24) {
      let tmp25;
      if (cResult[9] === stateFromStores) {
        tmp25 = cResult[10];
      }
      return tmp25;
    }
    const obj3 = { useReducedMotion: stateFromStores, item: tmp24, entering, exiting: fn2, renderItem: tmp14 };
    const tmp30 = React4(AnimatedEnterExitItemDefault, obj3);
    cResult[8] = tmp24;
    cResult[9] = stateFromStores;
    cResult[10] = tmp30;
    tmp25 = tmp30;
  } else {
    if (cResult[11] === tmp4) {
      if (cResult[12] === shouldRender) {
        let tmp17;
        if (cResult[13] === opacityStyle) {
          tmp17 = cResult[14];
        }
        return tmp17;
      }
    }
    let tmp18 = shouldRender;
    if (tmp18) {
      const obj4 = { visibilityOpacityStyle: opacityStyle };
      let merged = Object.assign(tmp4);
      tmp18 = React4(closure_14, obj4);
    }
    cResult[11] = tmp4;
    cResult[12] = shouldRender;
    cResult[13] = opacityStyle;
    cResult[14] = tmp18;
    tmp17 = tmp18;
  }
}) : ((visible) => {
  let tmp16;
  let useReducedMotion;
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let obj = BountiesModalTransitionsRefactorExperiment;
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = react.useCallback((arg0, visibilityOpacityStyle) => {
    const obj = { visibilityOpacityStyle };
    const merged = Object.assign(arg0);
    return closure_1_9(closure_1_14, obj);
  }, []);
  const obj3 = useVisibilityTransition;
  const obj4 = { visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
  const visibilityTransition = obj3.useVisibilityTransition(obj4);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: tmp16, entering, exiting: fn2, renderItem: callback };
    tmp16 = undefined;
    const tmp15 = AnimatedEnterExitItemDefault;
    if (visible) {
      tmp16 = merged;
    }
    shouldRender = React4(tmp15, obj5);
  } else if (shouldRender) {
    const obj6 = { visibilityOpacityStyle: tmp7 };
    const merged1 = Object.assign(merged);
    shouldRender = React4(closure_14, obj6);
  }
  return shouldRender;
});
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default tmp3;
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;