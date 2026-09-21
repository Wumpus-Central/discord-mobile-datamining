// discord_app/modules/media_viewer/native/useOverlayLayoutDriver.tsx
import native from "../../../design/void/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const __initData = {
  code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}",
};
const __initData2 = {
  code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = function useOverlayLayoutDriver() {
  sharedValue = sharedValue(4492).useSharedValue(0);
  let obj = sharedValue(4492);
  const mediaViewerDimensions = sharedValue(8564).useMediaViewerDimensions();
  const items = [sharedValue, ,];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = noop.useEffect(() => {
    const obj = timing;
    const result = sharedValue.set(obj.withTiming(1, { duration: 300, easing: native.STANDARD_EASING }));
  }, items);
  return sharedValue;
};
export const useHeaderLayoutAnimation = function useHeaderLayoutAnimation(animationDriver) {
  _require = animationDriver;
  const fn = function o() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]) };
    const items = [obj2];
    obj.transform = items;
    obj.opacity = ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__workletHash = 13622939479876;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
};
export const useFooterLayoutAnimation = function useFooterLayoutAnimation(overlayLayoutDriver) {
  _require = overlayLayoutDriver;
  const fn = function n() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: ReanimatedRexport.interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    const items = [obj2];
    obj.transform = items;
    obj.opacity = ReanimatedRexport.interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, animationDriver: overlayLayoutDriver };
  fn.__workletHash = 15220711492711;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
};
