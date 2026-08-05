// discord_app/modules/media_viewer/native/useOverlayLayoutDriver.tsx
import noop from "noop";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
let closure_3 = { code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let closure_4 = { code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let result = require("MediaViewerDimensionsProvider").fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = function useOverlayLayoutDriver() {
  sharedValue = sharedValue(4146).useSharedValue(0);
  let obj = sharedValue(4146);
  const mediaViewerDimensions = sharedValue(8787).useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = React.useEffect(() => {
    let obj = sharedValue(outer1_1[3]);
    obj = { duration: 300, easing: sharedValue(outer1_1[4]).STANDARD_EASING };
    const result = sharedValue.set(obj.withTiming(1, obj));
  }, items);
  return sharedValue;
};
export const useHeaderLayoutAnimation = function useHeaderLayoutAnimation(animationDriver) {
  const _require = animationDriver;
  let obj = _ReanimatedRexport;
  const fn = function o() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: null };
    obj[0] = animationDriver(outer1_1[1]).interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]);
    const items = [obj];
    obj[0] = items;
    const obj3 = animationDriver(outer1_1[1]);
    obj[1] = animationDriver(outer1_1[1]).interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  obj = { interpolate: _ReanimatedRexport.interpolate, animationDriver };
  fn.__closure = obj;
  fn.__workletHash = 13622939479876;
  fn.__initData = closure_3;
  return obj.useAnimatedStyle(fn);
};
export const useFooterLayoutAnimation = function useFooterLayoutAnimation(overlayLayoutDriver) {
  const _require = overlayLayoutDriver;
  let obj = _ReanimatedRexport;
  const fn = function n() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: null };
    obj[0] = overlayLayoutDriver(outer1_1[1]).interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [50, 50, 0]);
    const items = [obj];
    obj[0] = items;
    const obj3 = overlayLayoutDriver(outer1_1[1]);
    obj[1] = overlayLayoutDriver(outer1_1[1]).interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  obj = { interpolate: _ReanimatedRexport.interpolate, animationDriver: overlayLayoutDriver };
  fn.__closure = obj;
  fn.__workletHash = 15220711492711;
  fn.__initData = closure_4;
  return obj.useAnimatedStyle(fn);
};