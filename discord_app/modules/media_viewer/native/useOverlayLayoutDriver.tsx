// === Module 12758: useOverlayLayoutDriver ===

// Module 12758 (useOverlayLayoutDriver)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let closure_3 = { code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let closure_4 = { code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let result = require("set").fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = function useOverlayLayoutDriver() {
  sharedValue = sharedValue(4186).useSharedValue(0);
  let obj = sharedValue(4186);
  const mediaViewerDimensions = sharedValue(8534).useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = React.useEffect(() => {
    let obj = sharedValue(closure_1_1[3]);
    obj = { duration: 300, easing: sharedValue(closure_1_1[4]).STANDARD_EASING };
    const result = sharedValue.set(obj.withTiming(1, obj));
  }, items);
  return sharedValue;
};
export const useHeaderLayoutAnimation = function useHeaderLayoutAnimation(animationDriver) {
  const _require = animationDriver;
  let obj = _require(4186);
  const fn = function o() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: animationDriver(closure_1_1[1]).interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]) };
    const items = [obj];
    obj[0] = items;
    const obj3 = animationDriver(closure_1_1[1]);
    obj[1] = animationDriver(closure_1_1[1]).interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  obj = { interpolate: _require(4186).interpolate, animationDriver };
  fn.__closure = obj;
  fn.__workletHash = 13622939479876;
  fn.__initData = closure_3;
  return obj.useAnimatedStyle(fn);
};
export const useFooterLayoutAnimation = function useFooterLayoutAnimation(overlayLayoutDriver) {
  const _require = overlayLayoutDriver;
  let obj = _require(4186);
  const fn = function n() {
    let obj = { transform: null, opacity: null };
    obj = { translateY: overlayLayoutDriver(closure_1_1[1]).interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    const items = [obj];
    obj[0] = items;
    const obj3 = overlayLayoutDriver(closure_1_1[1]);
    obj[1] = overlayLayoutDriver(closure_1_1[1]).interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  obj = { interpolate: _require(4186).interpolate, animationDriver: overlayLayoutDriver };
  fn.__closure = obj;
  fn.__workletHash = 15220711492711;
  fn.__initData = closure_4;
  return obj.useAnimatedStyle(fn);
};