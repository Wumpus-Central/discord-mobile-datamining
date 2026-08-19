// discord_app/modules/media_viewer/native/useOverlayLayoutDriver.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

const require = fn;
let closure_3 = { code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let closure_4 = { code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let result = require("obj132").fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = function useOverlayLayoutDriver() {
  sharedValue = sharedValue(4115).useSharedValue(0);
  let obj = sharedValue(4115);
  const mediaViewerDimensions = sharedValue(9013).useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = React.useEffect(() => {
    sharedValue(dependencyMap[3]);
    const obj = { duration: 300, easing: sharedValue(dependencyMap[4]).STANDARD_EASING };
    const result = sharedValue.set(obj.withTiming(1, obj));
  }, items);
  return sharedValue;
};
export const useHeaderLayoutAnimation = function useHeaderLayoutAnimation(animationDriver) {
  const _require = animationDriver;
  ReanimatedRexport;
  const fn = function o() {
    const obj = { translateY: animationDriver(dependencyMap[1]).interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]) };
    const items = [obj];
    obj[0] = items;
    const obj3 = animationDriver(dependencyMap[1]);
    obj[1] = animationDriver(dependencyMap[1]).interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = { interpolate: require("../../reanimated/ReanimatedRexport.tsx").interpolate, animationDriver };
  fn.__closure = obj;
  fn.__workletHash = 13622939479876;
  fn.__initData = closure_3;
  return obj.useAnimatedStyle(fn);
};
export const useFooterLayoutAnimation = function useFooterLayoutAnimation(overlayLayoutDriver) {
  const _require = overlayLayoutDriver;
  ReanimatedRexport;
  const fn = function n() {
    const obj = { translateY: overlayLayoutDriver(dependencyMap[1]).interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    const items = [obj];
    obj[0] = items;
    const obj3 = overlayLayoutDriver(dependencyMap[1]);
    obj[1] = overlayLayoutDriver(dependencyMap[1]).interpolate(overlayLayoutDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = { interpolate: require("../../reanimated/ReanimatedRexport.tsx").interpolate, animationDriver: overlayLayoutDriver };
  fn.__closure = obj;
  fn.__workletHash = 15220711492711;
  fn.__initData = closure_4;
  return obj.useAnimatedStyle(fn);
};