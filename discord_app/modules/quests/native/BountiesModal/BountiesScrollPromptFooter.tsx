// === Module 15292: BountiesScrollPromptFooter ===

// Module 15292 (BountiesScrollPromptFooter)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4493 */;
import timing from "timing" /* 4758 */;
import timingPresets from "timingPresets" /* 4761 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10232 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 15293 */;
import useVisibilityTransition from "useVisibilityTransition" /* 15294 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

require = fn;
function BountiesScrollPromptFooterContent(zIndex) {
  zIndex = zIndex.zIndex;
  const opacityStyle = zIndex.opacityStyle;
  ({ children, onContentLayout, visibilityOpacityStyle } = zIndex);
  const tmp = closure_9();
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
  obj3.children = closure_7(zIndex(4467).BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  const items5 = [closure_7(ReanimatedRexportDefault.View, obj3), ];
  const obj4 = { style: null, onLayout: onContentLayout, children };
  const items6 = [tmp.content, memo1, opacityStyle];
  obj4.style = items6;
  items5[1] = closure_7(ReanimatedRexportDefault.View, obj4);
  obj2.children = items5;
  return closure_8(ReanimatedRexportDefault.View, obj2);
}
const StyleSheet = fn(17).StyleSheet;
const QuestsExperimentLocations = fn(5663).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
let closure_9 = createStyles.createStyles(() => {
  const obj = { root: { position: "absolute", bottom: 0, left: 0, right: 0 }, content: { flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 }, gradient: null };
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
const entering = function t(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
entering.__closure = { withTiming: fn(4758).withTiming, timingStandard: fn(4761).timingStandard };
entering.__workletHash = 11416950434629;
entering.__initData = { code: "function BountiesScrollPromptFooterTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function n(value, fn) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn) };
  return obj;
};
let obj2 = { withTiming: fn(4758).withTiming, timingStandard: fn(4761).timingStandard };
fn2.__closure = { withTiming: fn(4758).withTiming, timingStandard: fn(4761).timingStandard };
fn2.__workletHash = 9928471408966;
fn2.__initData = { code: "function BountiesScrollPromptFooterTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default function BountiesScrollPromptFooter(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  const isBountiesModalTransitionsRefactorEnabled = BountiesModalTransitionsRefactorExperiment.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, visibilityOpacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.visibilityOpacityStyle = visibilityOpacityStyle;
    return closure_1_7(BountiesScrollPromptFooterContent, obj);
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
    shouldRender = React5(AnimatedEnterExitItemDefault, obj5);
  } else if (shouldRender) {
    const obj6 = {};
    const merged1 = Object.assign(merged);
    obj6.visibilityOpacityStyle = tmp7;
    shouldRender = React5(BountiesScrollPromptFooterContent, obj6);
  }
  return shouldRender;
};
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;