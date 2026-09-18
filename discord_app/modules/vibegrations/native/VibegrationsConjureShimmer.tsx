// discord_app/modules/vibegrations/native/VibegrationsConjureShimmer.tsx
import _modDef672 from "../../../../_runtime/metro/00672__.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const locations = [0, 0.4, 0.5, 0.6, 1];
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
const createStyles = fn(4722);
let closure_13 = createStyles.createStyles({
  root: { position: "relative" },
  band: { position: "absolute", top: 0, bottom: 0 },
  fill: { flex: 1 },
});
const __initData = {
  code: "function VibegrationsConjureShimmerTsx1(){const{bandWidth,progress,width}=this.__closure;return{transform:[{translateX:-bandWidth+progress.get()*(bandWidth+width)}]};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureShimmer.tsx");

export default function VibegrationsConjureShimmer(epoch) {
  ({ renderFace, live, tint } = epoch);
  let num = epoch.epoch;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  live = undefined;
  c5 = undefined;
  let tmp = closure_13();
  let items = [AccessibilityStore];
  const stateFromStores = tint(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp5 = sharedValue(live.useState(0), 2);
  const width = tmp5[0];
  dependencyMap = tmp5[1];
  let obj = tint(504);
  sharedValue = tint(4458).useSharedValue(0);
  if (live) {
    live = !stateFromStores;
  }
  if (live) {
    live = width > 0;
  }
  const items1 = [live, num, sharedValue];
  const effect = obj2.useEffect(() => {
    if (live) {
      const result = sharedValue.set(0);
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 2000, easing: ReanimatedRexport.Easing.linear };
      const result1 = sharedValue.set(obj2.withRepeat(timing.withTiming(1, obj4), -1, false));
      const fn = () => tint(closure_2[7]).cancelAnimation(sharedValue);
    } else {
      ReanimatedRexport.cancelAnimation(sharedValue);
      const result2 = sharedValue.set(0);
    }
    return fn;
  }, items1);
  const items2 = [tint];
  let result = 4 * width;
  c5 = result;
  const memo = obj2.useMemo(() => {
    const obj = _modDef672(tint);
    const cssResult = obj.alpha(0).css();
    const items = [cssResult, cssResult, , ,];
    const alphaResult = obj.alpha(0);
    items[2] = obj.alpha(1).css();
    items[3] = cssResult;
    items[4] = cssResult;
    return items;
  }, items2);
  let obj3 = tint(4458);
  class W {
    constructor() {
      obj = { transform: null };
      obj1 = { translateX: -closure_5 + closure_3.get() * (closure_5 + closure_1) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  W.__closure = { bandWidth: result, progress: sharedValue, width };
  W.__workletHash = 16230447544169;
  W.__initData = __initData;
  const animatedStyle = tint(4458).useAnimatedStyle(W);
  let obj4 = {
    style: tmp.root,
    onLayout: live.useCallback((nativeEvent) => {
      closure_0 = Math.round(nativeEvent.nativeEvent.layout.width);
      closure_2((arg0) => {
        let tmp = closure_0;
        if (arg0 === closure_0) {
          tmp = arg0;
        }
        return tmp;
      });
    }, []),
    children: null,
  };
  const items3 = [renderFace()];
  let tmp14 = null;
  if (live) {
    const obj5 = {
      style: c5.absoluteFill,
      pointerEvents: "none",
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const obj6 = { style: c5.absoluteFill, androidRenderingMode: "software", maskElement: null, children: null };
    const obj7 = { children: renderFace() };
    obj6.maskElement = closure_8(closure_6, obj7);
    const obj8 = { style: null, children: null };
    const items4 = [tmp.band, ,];
    const obj9 = { width: result };
    items4[1] = obj9;
    items4[2] = animatedStyle;
    obj8.style = items4;
    const obj10 = { style: tmp.fill, start, end, colors: memo, locations };
    obj8.children = closure_8(width(5156), obj10);
    obj6.children = closure_8(width(4458).View, obj8);
    obj5.children = closure_8(width(5834), obj6);
    tmp14 = closure_8(closure_6, obj5);
    const tmp18 = width(5834);
  }
  items3[1] = tmp14;
  obj4.children = items3;
  return closure_9(closure_6, obj4);
}
export const shouldSweep = function shouldSweep(reducedMotion) {
  ({ live, width } = reducedMotion);
  if (live) {
    live = !reducedMotion.reducedMotion;
  }
  if (live) {
    live = width > 0;
  }
  return live;
};
