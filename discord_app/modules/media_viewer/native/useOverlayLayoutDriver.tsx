// === Module 12778: useOverlayLayoutDriver ===

// Module 12778 (useOverlayLayoutDriver)
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
fn(558);
const __initData = { code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const __initData2 = { code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
let ReactCompilerGating = fn(558);
const __initData3 = { code: "function useOverlayLayoutDriverTsx3(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const __initData4 = { code: "function useOverlayLayoutDriverTsx4(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = sharedValue(576).c(6);
  let obj = sharedValue(576);
  sharedValue = sharedValue(4618).useSharedValue(0);
  const obj2 = sharedValue(4618);
  const mediaViewerDimensions = sharedValue(7978).useMediaViewerDimensions();
  ({ height, width } = mediaViewerDimensions);
  if (cResult[0] !== sharedValue) {
    const fn = function n() {
      const obj = timing;
      const result = sharedValue.set(obj.withTiming(1, { duration: 300, easing: native.STANDARD_EASING }));
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === sharedValue) {
    if (cResult[3] === height) {
      if (cResult[4] === width) {
        let tmp5 = cResult[5];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      return sharedValue;
    }
  }
  const items = [sharedValue, height, width];
  cResult[2] = sharedValue;
  cResult[3] = height;
  cResult[4] = width;
  cResult[5] = items;
  tmp5 = items;
  const obj3 = sharedValue(7978);
}) : (() => {
  sharedValue = sharedValue(4618).useSharedValue(0);
  let obj = sharedValue(4618);
  const mediaViewerDimensions = sharedValue(7978).useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = noop.useEffect(() => {
    const obj = timing;
    const result = sharedValue.set(obj.withTiming(1, { duration: 300, easing: native.STANDARD_EASING }));
  }, items);
  return sharedValue;
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((animationDriver) => {
  _require = animationDriver;
  const fn = function n() {
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
}) : ((animationDriver) => {
  _require = animationDriver;
  const fn = function n() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]) };
    const items = [obj2];
    obj.transform = items;
    obj.opacity = ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__workletHash = 4085578174343;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = tmp2;
export const useHeaderLayoutAnimation = tmp3;
export const useFooterLayoutAnimation = ReactCompilerGating.isReactCompilerEnabled() ? ((animationDriver) => {
  _require = animationDriver;
  const fn = function n() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    const items = [obj2];
    obj.transform = items;
    obj.opacity = ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__workletHash = 14180573945254;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
}) : ((animationDriver) => {
  _require = animationDriver;
  const fn = function n() {
    const obj = { transform: null, opacity: null };
    const obj2 = { translateY: ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    const items = [obj2];
    obj.transform = items;
    obj.opacity = ReanimatedRexport.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  };
  let obj = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__workletHash = 6100121737057;
  fn.__initData = __initData4;
  return obj.useAnimatedStyle(fn);
});