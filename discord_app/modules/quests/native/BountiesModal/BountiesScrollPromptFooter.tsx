// discord_app/modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef4185 from "../../../reanimated/ReanimatedRexport.tsx";
import CONFIG_NEVER_ANIMATE_TIMING from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingNone from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import AnimatedRenderItemDefault from "../../../../design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import apexExperiment from "../../experiments/BountiesModalTransitionsRefactorExperiment.tsx";
import useVisibilityTransition from "useVisibilityTransition.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { StyleSheet } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../a11y/AccessibilityStore.tsx";
import { QuestsExperimentLocations } from "../../QuestConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function BountiesScrollPromptFooterContent(zIndex) {
  zIndex = zIndex.zIndex;
  const opacityStyle = zIndex.opacityStyle;
  importDefault = undefined;
  ({ children, onContentLayout, visibilityOpacityStyle } = zIndex);
  const tmp = callback2();
  const items = [zIndex];
  const memo = React.useMemo(() => {
    let tmp2;
    if (null != zIndex) {
      const obj = { zIndex: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  let obj = zIndex(589);
  const items1 = [closure_5];
  const stateFromStores = obj.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp6 = useSafeAreaInsetsDefault();
  importDefault = tmp6;
  const items2 = [tmp6.bottom];
  const memo1 = React.useMemo(() => ({ paddingBottom: Math.max(lib.bottom, lib(closure_1_2[6]).space.PX_8) }), items2);
  obj = { style: items3, pointerEvents: "none", children: null };
  items3 = [tmp.root, visibilityOpacityStyle, memo];
  obj = { style: items4, children: null };
  items4 = [tmp.gradient, opacityStyle];
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj[1] = closure_7(zIndex(4172).BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  const items5 = [closure_7(_modDef4185.View, obj), ];
  const items6 = [tmp.content, memo1, opacityStyle];
  items5[1] = closure_7(_modDef4185.View, { style: items6, onLayout: onContentLayout, children });
  obj[2] = items5;
  return closure_8(_modDef4185.View, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { root: { position: "absolute", bottom: 0, left: 0, right: 0 }, content: null, gradient: null };
  obj = { flex: 1, minHeight: 97, alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  obj = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj[2] = obj;
  return obj;
});
const fn = function t(value) {
  const obj = { opacity: CONFIG_NEVER_ANIMATE_TIMING.withTiming(value, timingNone.timingStandard, "respect-motion-settings") };
  return obj;
};
createCacheKey = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingStandard: require("timingNone").timingStandard };
fn.__closure = createCacheKey;
fn.__workletHash = 11416950434629;
fn.__initData = { code: "function BountiesScrollPromptFooterTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function n(value, fn2) {
  const obj = { opacity: CONFIG_NEVER_ANIMATE_TIMING.withTiming(value, timingNone.timingStandard, "respect-motion-settings", fn2) };
  return obj;
};
createCacheKey = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingStandard: require("timingNone").timingStandard };
fn2.__closure = createCacheKey;
fn2.__workletHash = 9928471408966;
fn2.__initData = { code: "function BountiesScrollPromptFooterTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default function BountiesScrollPromptFooter(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.create(null));
  let obj = apexExperiment;
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  obj1 = initialize;
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = React.useCallback((arg0, visibilityOpacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.visibilityOpacityStyle = visibilityOpacityStyle;
    return callback(closure_12, obj);
  }, []);
  obj = { visible, entranceTiming: timingNone.timingStandard, exitTiming: timingNone.timingStandard };
  const visibilityTransition = useVisibilityTransition.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    obj = { useReducedMotion: null, item: null, entering: null, exiting: null, renderItem: null };
    obj[0] = stateFromStores;
    let tmp16;
    if (visible) {
      tmp16 = merged;
    }
    obj[1] = tmp16;
    obj[2] = fn;
    obj[3] = fn2;
    obj[4] = callback;
    shouldRender = callback(AnimatedRenderItemDefault, obj);
    const tmp13 = callback;
    const tmp15 = AnimatedRenderItemDefault;
  } else if (shouldRender) {
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj1.visibilityOpacityStyle = tmp7;
    shouldRender = callback(BountiesScrollPromptFooterContent, obj1);
  }
  return shouldRender;
};
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;