// === Module 16171: CollectiblesProgressiveImage ===

// Module 16171 (CollectiblesProgressiveImage)
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import timing from "timing" /* 4757 */;
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
  sharedValue = sharedValue(4492).useSharedValue(0);
  let obj2 = { style, children: null };
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.source = source;
  const obj4 = {};
  const merged2 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj4.opacity = sharedValue;
  obj3.style = obj4;
  obj3.onLoad = function onLoad() {
    const obj2 = { duration: 500, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj2.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
    const result = sharedValue.set(timing.withTiming(1, obj2));
  };
  obj2.children = jsx(ReanimatedRexportDefault.Image, {});
  return <closure_3 style={style}>{null}</closure_3>;
};