// discord_app/modules/quests/native/BountiesModal/BountiesAutoScrollOverlayNuxGradient.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const BRAND_500 = nativeDefault.unsafe_rawColors.BRAND_500;
const __initData = {
  code: "function BountiesAutoScrollOverlayNuxGradientTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesAutoScrollOverlayNuxGradient.tsx");

export default function BountiesAutoScrollOverlayNuxGradient(active) {
  active = active.active;
  let obj = active(4296);
  const sharedValue = obj.useSharedValue(0);
  const items = [active, sharedValue];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (active) {
      num = 1;
    }
    const result = sharedValue.set(timing.withTiming(num, timingPresets.timingSlow));
  }, items);
  let obj1 = active(4296);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 17406907036861;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: null, pointerEvents: "none", children: null };
  const items1 = [StyleSheet.absoluteFillObject, animatedStyle];
  obj.style = items1;
  obj = { style: StyleSheet.absoluteFillObject, colors: null, locations: null, start: null, end: null };
  const items2 = ["" + BRAND_500 + "80", "" + BRAND_500 + "00"];
  obj.colors = items2;
  obj.locations = [0, 1];
  obj.start = { x: 0.5, y: 1 };
  obj.end = { x: 0.5, y: 0 };
  const items3 = [closure_5(sharedValue(4987), obj)];
  obj1 = {
    style: StyleSheet.absoluteFillObject,
    colors: ["rgba(0,0,0,0.4)", "rgba(0,0,0,0)"],
    locations: [0, 0.5],
    start: { x: 0.5, y: 1 },
    end: { x: 0.5, y: 0 },
  };
  items3[1] = closure_5(sharedValue(4987), obj1);
  obj.children = items3;
  return closure_6(sharedValue(4296).View, obj);
}
