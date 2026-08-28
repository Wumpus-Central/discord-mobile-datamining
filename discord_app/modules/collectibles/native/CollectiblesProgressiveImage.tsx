// discord_app/modules/collectibles/native/CollectiblesProgressiveImage.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef4186 from "../../reanimated/ReanimatedRexport.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = function CollectiblesProgressiveImage(arg0) {
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.create(null));
  let obj = sharedValue(4186);
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
  obj[1] = jsx(_modDef4186.Image, {});
  return <closure_3 />;
};