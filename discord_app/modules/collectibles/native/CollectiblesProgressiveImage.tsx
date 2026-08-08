// discord_app/modules/collectibles/native/CollectiblesProgressiveImage.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

let c3;
let c4;
const require = arg1;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = function CollectiblesProgressiveImage(arg0) {
  let source;
  let style;
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.create(null));
  let obj = sharedValue(4036);
  sharedValue = obj.useSharedValue(0);
  obj = { style, children: null };
  obj = {};
  const merged1 = Object.assign(merged);
  obj.source = source;
  const obj1 = {};
  const merged2 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj1.opacity = sharedValue;
  obj.style = obj1;
  obj.onLoad = function onLoad() {
    let obj = sharedValue(outer1_2[4]);
    obj = { duration: 500, easing: null };
    const Easing = sharedValue(outer1_2[3]).Easing;
    obj[1] = Easing.inOut(sharedValue(outer1_2[3]).Easing.ease);
    const result = sharedValue.set(obj.withTiming(1, obj));
  };
  obj[1] = jsx(ReanimatedRexport.Image, {});
  return <closure_3 />;
};