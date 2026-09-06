// === Module 12962: useOverlayLayoutDriver ===

// Module 12962 (useOverlayLayoutDriver)
import native from "native" /* 1178 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import noop from "module_19" /* 19 */;

require = fn;
const __initData = { code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const __initData2 = { code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = function useOverlayLayoutDriver() {
  sharedValue = sharedValue(4296).useSharedValue(0);
  let obj = sharedValue(4296);
  const mediaViewerDimensions = sharedValue(8293).useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = noop.useEffect(() => {
    const obj = { duration: 300, easing: native.STANDARD_EASING };
    const result = sharedValue.set(obj.withTiming(1, obj));
  }, items);
  return sharedValue;
};
export const useHeaderLayoutAnimation = function useHeaderLayoutAnimation(animationDriver) {
  _require = animationDriver;
  require("ReanimatedRexport");
  const fn = function o() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]) };
    const items = [obj];
    obj.transform = items;
    obj.opacity = ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__closure = obj;
  fn.__workletHash = 13622939479876;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
};
export const useFooterLayoutAnimation = function useFooterLayoutAnimation(overlayLayoutDriver) {
  _require = overlayLayoutDriver;
  require("ReanimatedRexport");
  const fn = function n() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: ReanimatedRexport.interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    const items = [obj];
    obj.transform = items;
    obj.opacity = ReanimatedRexport.interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = { interpolate: require("ReanimatedRexport").interpolate, animationDriver: overlayLayoutDriver };
  fn.__closure = obj;
  fn.__workletHash = 15220711492711;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
};