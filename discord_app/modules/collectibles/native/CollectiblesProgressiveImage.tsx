// === Module 14988: CollectiblesProgressiveImage ===

// Module 14988 (CollectiblesProgressiveImage)
import noopAll from "noop" /* 19 */;
import _modDef4115 from "module_4115" /* 4115 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = function CollectiblesProgressiveImage(arg0) {
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.create(null));
  let obj = sharedValue(4115);
  sharedValue = obj.useSharedValue(0);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.source = source;
  obj1 = {};
  const merged2 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj1.opacity = sharedValue;
  obj.style = obj1;
  obj.onLoad = function onLoad() {
    sharedValue(dependencyMap[4]);
    const obj = { duration: 500, easing: null };
    const Easing = sharedValue(dependencyMap[3]).Easing;
    obj[1] = Easing.inOut(sharedValue(dependencyMap[3]).Easing.ease);
    const result = sharedValue.set(obj.withTiming(1, obj));
  };
  obj[1] = jsx(_modDef4115.Image, {});
  return <closure_3 />;
};