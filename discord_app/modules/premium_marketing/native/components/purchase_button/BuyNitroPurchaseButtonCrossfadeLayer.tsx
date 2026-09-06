// discord_app/modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonCrossfadeLayer.tsx
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const __initData = {
  code: "function BuyNitroPurchaseButtonCrossfadeLayerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let closure_8 = {
  code: "function BuyNitroPurchaseButtonCrossfadeLayerTsx2(finished){const{runOnJS,onDone}=this.__closure;if(finished===true){runOnJS(onDone)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonCrossfadeLayer.tsx",
);

export default function BuyNitroPurchaseButtonCrossfadeLayer(arg0) {
  ({ snapshot, onDone } = arg0);
  let obj = onDone(4296);
  const sharedValue = obj.useSharedValue(1);
  let fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10244393639035;
  fn.__initData = __initData;
  const items = [sharedValue, onDone];
  const animatedStyle = onDone(4296).useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    const fn = function t(arg0) {
      if (true === arg0) {
        onDone(dependencyMap[4]).runOnJS(closure_1_0)();
        const obj = onDone(dependencyMap[4]);
      }
    };
    let obj = { runOnJS: ReanimatedRexport.runOnJS, onDone };
    fn.__closure = obj;
    fn.__workletHash = 12882875362433;
    fn.__initData = __initData;
    const result = sharedValue.set(obj.withTiming(0, timingPresets.timingStandard, "respect-motion-settings", fn));
  }, items);
  obj = { style: null, pointerEvents: "none", children: null };
  const items1 = [StyleSheet.absoluteFill, animatedStyle];
  obj.style = items1;
  obj = { text: snapshot.ctaText, variant: snapshot.variant, size: "lg", grow: true, onPress: "Boolean" };
  obj.children = jsx(onDone(4975).Button, {
    text: snapshot.ctaText,
    variant: snapshot.variant,
    size: "lg",
    grow: true,
    onPress: "Boolean",
  });
  return jsx(sharedValue(4296).View, {
    text: snapshot.ctaText,
    variant: snapshot.variant,
    size: "lg",
    grow: true,
    onPress: "Boolean",
  });
}
export const useBuyNitroButtonCrossfade = function useBuyNitroButtonCrossfade(variant, stringResult) {
  let obj = { variant, ctaText: stringResult };
  const tmp = _slicedToArray(noop.useState(obj), 2);
  const snapshot = tmp[0];
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp4;
  let tmp5 = snapshot.variant === variant;
  if (tmp5) {
    tmp5 = snapshot.ctaText === stringResult;
  }
  if (!tmp5) {
    if (snapshot.variant !== variant) {
      tmp4((key) => {
        const obj = { snapshot, key: null };
        let num;
        if (key != null) {
          num = key.key;
        }
        if (num == null) {
          num = 0;
        }
        obj.key = num + 1;
        return obj;
      });
    }
    obj = { variant, ctaText: stringResult };
    tmp[1](obj);
  }
  return { outgoing: tmp3[0], onOutgoingDone: obj.useCallback(() => closure_1(null), []) };
};
