// discord_app/modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonCrossfadeLayer.tsx
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { StyleSheet } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let closure_7 = { code: "function BuyNitroPurchaseButtonCrossfadeLayerTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_8 = { code: "function BuyNitroPurchaseButtonCrossfadeLayerTsx2(finished){const{runOnJS,onDone}=this.__closure;if(finished===true){runOnJS(onDone)();}}" };
let result = require("obj132").fileFinishedImporting("modules/premium_marketing/native/components/purchase_button/BuyNitroPurchaseButtonCrossfadeLayer.tsx");

export default function BuyNitroPurchaseButtonCrossfadeLayer(arg0) {
  ({ snapshot, onDone } = arg0);
  let obj = onDone(4115);
  const sharedValue = obj.useSharedValue(1);
  let fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10244393639035;
  fn.__initData = closure_7;
  const items = [sharedValue, onDone];
  const animatedStyle = onDone(4115).useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    onDone(dependencyMap[5]);
    const fn = function t(arg0) {
      if (true === arg0) {
        onDone(closure_1_2[4]).runOnJS(closure_0)();
        const obj = onDone(closure_1_2[4]);
      }
    };
    let obj = { runOnJS: onDone(dependencyMap[4]).runOnJS, onDone };
    fn.__closure = obj;
    fn.__workletHash = 12882875362433;
    fn.__initData = closure_1_8;
    const result = sharedValue.set(obj.withTiming(0, onDone(dependencyMap[6]).timingStandard, "respect-motion-settings", fn));
  }, items);
  { style: items1, pointerEvents: "none", children: jsx(onDone(4745).Button, obj) };
  items1 = [StyleSheet.absoluteFill, animatedStyle];
  obj = { text: snapshot.ctaText, variant: snapshot.variant, size: "lg", grow: true, onPress: "Boolean" };
  return jsx(sharedValue(4115).View, { text: snapshot.ctaText, variant: snapshot.variant, size: "lg", grow: true, onPress: "Boolean" });
};
export const useBuyNitroButtonCrossfade = function useBuyNitroButtonCrossfade(variant, stringResult) {
  let obj = { variant, ctaText: stringResult };
  const tmp = callback(React.useState(obj), 2);
  const first = tmp[0];
  const tmp3 = callback(React.useState(null), 2);
  closure_1 = tmp4;
  let tmp5 = first.variant === variant;
  if (tmp5) {
    tmp5 = first.ctaText === stringResult;
  }
  if (!tmp5) {
    if (first.variant !== variant) {
      tmp4((key) => {
        const obj = { snapshot: first, key: null };
        let num;
        if (key != null) {
          num = key.key;
        }
        if (num == null) {
          num = 0;
        }
        obj[1] = num + 1;
        return obj;
      });
    }
    obj = { variant: null, ctaText: null };
    obj[0] = variant;
    obj[1] = stringResult;
    tmp[1](obj);
  }
  return { outgoing: tmp3[0], onOutgoingDone: obj.useCallback(() => callback(null), []) };
};