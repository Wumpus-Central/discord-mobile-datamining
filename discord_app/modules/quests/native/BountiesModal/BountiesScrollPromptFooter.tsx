// === Module 14816: BountiesScrollPromptFooter ===

// Module 14816 (BountiesScrollPromptFooter)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import BountiesScrollGradientRive from "BountiesScrollGradientRive" /* 4662 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9647 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 14817 */;
import useVisibilityTransition from "useVisibilityTransition" /* 14818 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
let closure_3 = ["visible"];
const StyleSheet = fn(17).StyleSheet;
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles(() => {
  const obj = { root: { position: "absolute", bottom: 0, left: 0, right: 0 }, content: { flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 }, gradient: null };
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
let entering = function n(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
entering.__closure = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
entering.__workletHash = 11416950434629;
entering.__initData = { code: "function BountiesScrollPromptFooterTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
let fn2 = function o(value, fn) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn) };
  return obj;
};
let obj2 = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
fn2.__closure = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
fn2.__workletHash = 9928471408966;
fn2.__initData = { code: "function BountiesScrollPromptFooterTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(30);
  ({ children, onContentLayout, zIndex, opacityStyle, visibilityOpacityStyle } = arg0);
  const tmp4 = closure_11();
  if (cResult[0] !== zIndex) {
    let tmp7;
    if (null != zIndex) {
      const obj2 = { zIndex };
      tmp7 = obj2;
    }
    cResult[0] = zIndex;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
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
    let tmp9 = fn;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
  const bound = Math.max(useSafeAreaInsetsDefault().bottom, nativeDefault.space.PX_8);
  if (cResult[4] !== bound) {
    const obj3 = { paddingBottom: bound };
    cResult[4] = bound;
    cResult[5] = obj3;
    let tmp14 = obj3;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] === tmp4.root) {
    if (cResult[7] === visibilityOpacityStyle) {
      if (cResult[8] === tmp5) {
        let tmp15 = cResult[9];
      }
      if (cResult[10] === opacityStyle) {
        if (cResult[11] === tmp4.gradient) {
          let tmp16 = cResult[12];
        }
        let str = "play";
        if (stateFromStores) {
          str = "halt";
        }
        if (cResult[13] !== str) {
          const obj4 = { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str };
          const tmp19 = options(BountiesScrollGradientRive.BountiesScrollGradientRive, obj4);
          cResult[13] = str;
          cResult[14] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[14];
        }
        if (cResult[15] === tmp16) {
          if (cResult[16] === tmp17) {
            let tmp20 = cResult[17];
          }
          if (cResult[18] === tmp14) {
            if (cResult[19] === opacityStyle) {
              if (cResult[20] === tmp4.content) {
                let tmp23 = cResult[21];
              }
              if (cResult[22] === children) {
                if (cResult[23] === onContentLayout) {
                  if (cResult[24] === tmp23) {
                    let tmp24 = cResult[25];
                  }
                  if (cResult[26] === tmp20) {
                    if (cResult[27] === tmp24) {
                      if (cResult[28] === tmp15) {
                        let tmp27 = cResult[29];
                      }
                      return tmp27;
                    }
                  }
                  const obj5 = { style: tmp15, pointerEvents: "none", children: null };
                  const items1 = [tmp20, tmp24];
                  obj5.children = items1;
                  const tmp29 = v65535(ReanimatedRexportDefault.View, obj5);
                  cResult[26] = tmp20;
                  cResult[27] = tmp24;
                  cResult[28] = tmp15;
                  cResult[29] = tmp29;
                  tmp27 = tmp29;
                }
              }
              const obj6 = { style: tmp23, onLayout: onContentLayout, children };
              const tmp26 = options(ReanimatedRexportDefault.View, obj6);
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
        const tmp22 = options(ReanimatedRexportDefault.View, obj7);
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
  const tmpResult = initialize;
}) : ((zIndex) => {
  zIndex = zIndex.zIndex;
  const opacityStyle = zIndex.opacityStyle;
  ({ children, onContentLayout, visibilityOpacityStyle } = zIndex);
  const tmp = closure_11();
  const items = [zIndex];
  const memo = noop.useMemo(() => {
    let tmp2;
    if (null != zIndex) {
      const obj = { zIndex: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  const items1 = [AccessibilityStore];
  const stateFromStores = zIndex(504).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp6 = useSafeAreaInsetsDefault();
  importDefault = tmp6;
  const items2 = [tmp6.bottom];
  const memo1 = noop.useMemo(() => ({ paddingBottom: Math.max(bottom.bottom, nativeDefault.space.PX_8) }), items2);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  const items3 = [tmp.root, visibilityOpacityStyle, memo];
  obj2.style = items3;
  const obj3 = { style: null, children: null };
  const items4 = [tmp.gradient, opacityStyle];
  obj3.style = items4;
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj3.children = closure_9(zIndex(4662).BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  const items5 = [closure_9(ReanimatedRexportDefault.View, obj3), ];
  const obj4 = { style: null, onLayout: onContentLayout, children };
  const items6 = [tmp.content, memo1, opacityStyle];
  obj4.style = items6;
  items5[1] = closure_9(ReanimatedRexportDefault.View, obj4);
  obj2.children = items5;
  return closure_10(ReanimatedRexportDefault.View, obj2);
});
ReactCompilerGating = fn(558);
let obj3 = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = c.c(15);
  if (cResult[0] !== visible) {
    visible = visible.visible;
    const tmp8 = _objectWithoutProperties(visible, closure_3);
    cResult[0] = visible;
    cResult[1] = tmp8;
    cResult[2] = visible;
    let tmp5 = visible;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const isBountiesModalTransitionsRefactorEnabled = BountiesModalTransitionsRefactorExperiment.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    entering = function v() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[3] = items;
    cResult[4] = entering;
    let tmp11 = entering;
    let tmp10 = items;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult = BountiesModalTransitionsRefactorExperiment;
  const stateFromStores = initialize.useStateFromStores(tmp10, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    fn2 = function _(arg0, visibilityOpacityStyle) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.visibilityOpacityStyle = visibilityOpacityStyle;
      return closure_1_9(closure_1_14, obj);
    };
    cResult[5] = fn2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp5) {
    const obj2 = { visible: tmp5, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
    cResult[6] = tmp5;
    cResult[7] = obj2;
    let tmp15 = obj2;
  } else {
    tmp15 = cResult[7];
  }
  const tmpResult3 = initialize;
  const visibilityTransition = useVisibilityTransition.useVisibilityTransition(tmp15);
  ({ opacityStyle, shouldRender } = visibilityTransition);
  if (isBountiesModalTransitionsRefactorEnabled) {
    let tmp24;
    if (tmp5) {
      tmp24 = tmp4;
    }
    if (cResult[8] === tmp24) {
      if (cResult[9] === stateFromStores) {
        let tmp25 = cResult[10];
      }
      return tmp25;
    }
    const obj3 = { useReducedMotion: stateFromStores, item: tmp24, entering, exiting: fn2, renderItem: tmp14 };
    const tmp30 = options(AnimatedEnterExitItemDefault, obj3);
    cResult[8] = tmp24;
    cResult[9] = stateFromStores;
    cResult[10] = tmp30;
    tmp25 = tmp30;
  } else {
    if (cResult[11] === tmp4) {
      if (cResult[12] === shouldRender) {
        if (cResult[13] === opacityStyle) {
          let tmp17 = cResult[14];
        }
        return tmp17;
      }
    }
    let tmp18 = shouldRender;
    if (shouldRender) {
      const obj4 = {};
      let merged = Object.assign(tmp4);
      obj4.visibilityOpacityStyle = opacityStyle;
      tmp18 = options(closure_14, obj4);
    }
    cResult[11] = tmp4;
    cResult[12] = shouldRender;
    cResult[13] = opacityStyle;
    cResult[14] = tmp18;
    tmp17 = tmp18;
  }
  const tmpResult4 = useVisibilityTransition;
}) : ((visible) => {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  const isBountiesModalTransitionsRefactorEnabled = BountiesModalTransitionsRefactorExperiment.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, visibilityOpacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.visibilityOpacityStyle = visibilityOpacityStyle;
    return closure_1_9(closure_1_14, obj);
  }, []);
  const obj3 = useVisibilityTransition;
  const visibilityTransition = obj3.useVisibilityTransition({ visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard });
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp16;
    if (visible) {
      tmp16 = merged;
    }
    obj5.item = tmp16;
    obj5.entering = entering;
    obj5.exiting = fn2;
    obj5.renderItem = callback;
    shouldRender = options(AnimatedEnterExitItemDefault, obj5);
  } else if (shouldRender) {
    const obj6 = {};
    const merged1 = Object.assign(merged);
    obj6.visibilityOpacityStyle = tmp7;
    shouldRender = options(closure_14, obj6);
  }
  return shouldRender;
});
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;