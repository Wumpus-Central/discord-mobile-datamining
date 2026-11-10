// === Module 17271: BountiesScrollPromptFooter ===

// Module 17271 (BountiesScrollPromptFooter)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import timingPresets from "timingPresets" /* 5375 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10088 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 17272 */;
import useVisibilityTransition from "useVisibilityTransition" /* 17273 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;

require = fn;
function BountiesScrollPromptFooterContent(zIndex) {
  zIndex = zIndex.zIndex;
  const opacityStyle = zIndex.opacityStyle;
  ({ children, onContentLayout, visibilityOpacityStyle } = zIndex);
  const tmp = closure_9();
  items = [zIndex];
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
  obj3.children = closure_7(zIndex(5267).BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  const items5 = [closure_7(_modDef1652.View, obj3), ];
  const obj4 = { style: null, onLayout: onContentLayout, children };
  const items6 = [tmp.content, memo1, opacityStyle];
  obj4.style = items6;
  items5[1] = closure_7(_modDef1652.View, obj4);
  obj2.children = items5;
  return closure_8(_modDef1652.View, obj2);
}
const StyleSheet = fn(17).StyleSheet;
const QuestsExperimentLocations = fn(6839).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5142);
let closure_9 = createStyles.createStyles(() => {
  const obj = { root: { position: "absolute", bottom: 0, left: 0, right: 0 }, content: { flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 }, gradient: null };
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj.gradient = {};
  return obj;
});
let items = [{ code: "(function BountiesScrollPromptFooterTsx1(visible){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};})" }, fn(5372).withTiming, fn(5375).timingStandard];
let closure_129_0;
let closure_129_1;
[tmp3, tmp4, tmp5] = items;
class BountiesScrollPromptFooterTsx1 {
  constructor(arg0) {
    obj = { opacity: closure_0(global, closure_1, "respect-motion-settings") };
    return obj;
  }
}
let items1 = [tmp4, tmp5];
BountiesScrollPromptFooterTsx1.__closure = items1;
BountiesScrollPromptFooterTsx1.__workletHash = 6190498486460;
BountiesScrollPromptFooterTsx1.__initData = tmp3;
let items2 = [{ code: "(function BountiesScrollPromptFooterTsx2(visible,cleanUp){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};})" }, fn(5372).withTiming, fn(5375).timingStandard];
let closure_130_0;
let closure_130_1;
[tmp6, tmp7, tmp8] = items2;
class BountiesScrollPromptFooterTsx2 {
  constructor(arg0, arg1) {
    obj = { opacity: closure_0(global, closure_1, "respect-motion-settings", fn) };
    return obj;
  }
}
let items3 = [tmp7, tmp8];
BountiesScrollPromptFooterTsx2.__closure = items3;
BountiesScrollPromptFooterTsx2.__workletHash = 12923710972959;
BountiesScrollPromptFooterTsx2.__initData = tmp6;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default function BountiesScrollPromptFooter(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  const isBountiesModalTransitionsRefactorEnabled = BountiesModalTransitionsRefactorExperiment.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  items = [AccessibilityStore];
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
    obj5.entering = BountiesScrollPromptFooterTsx1;
    obj5.exiting = BountiesScrollPromptFooterTsx2;
    obj5.renderItem = callback;
    shouldRender = metroImportDefault(AnimatedEnterExitItemDefault, obj5);
  } else if (shouldRender) {
    const obj6 = {};
    const merged1 = Object.assign(merged);
    obj6.visibilityOpacityStyle = tmp7;
    shouldRender = metroImportDefault(BountiesScrollPromptFooterContent, obj6);
  }
  return shouldRender;
};
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;