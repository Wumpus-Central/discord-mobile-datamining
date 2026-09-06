// === Module 15846: CollectiblesProgressiveImage ===

// Module 15846 (CollectiblesProgressiveImage)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = function CollectiblesProgressiveImage(arg0) {
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  let obj = sharedValue(4296);
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
    const obj = { duration: 500, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
    const result = sharedValue.set(obj.withTiming(1, obj));
  };
  obj.children = jsx(ReanimatedRexportDefault.Image, {});
  return <closure_3 />;
};