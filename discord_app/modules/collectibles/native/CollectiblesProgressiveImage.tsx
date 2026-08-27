// === Module 15225: CollectiblesProgressiveImage ===

// Module 15225 (CollectiblesProgressiveImage)
import noopAll from "noop" /* 19 */;
import _modDef4185 from "module_4185" /* 4185 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = function CollectiblesProgressiveImage(arg0) {
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.create(null));
  let obj = sharedValue(4185);
  sharedValue = obj.useSharedValue(0);
  obj = { style, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.source = source;
  obj1 = {};
  const merged2 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj1.opacity = sharedValue;
  obj.style = obj1;
  obj.onLoad = function onLoad() {
    let obj = sharedValue(closure_1_2[4]);
    obj = { duration: 500, easing: null };
    const Easing = sharedValue(closure_1_2[3]).Easing;
    obj[1] = Easing.inOut(sharedValue(closure_1_2[3]).Easing.ease);
    const result = sharedValue.set(obj.withTiming(1, obj));
  };
  obj[1] = jsx(_modDef4185.Image, {});
  return <closure_3 />;
};