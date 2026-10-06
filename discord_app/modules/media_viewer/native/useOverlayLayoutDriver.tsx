// === Module 12778: useOverlayLayoutDriver ===

// Module 12778 (useOverlayLayoutDriver)
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function useOverlayLayoutDriverTsx1(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const __initData2 = { code: "function useOverlayLayoutDriverTsx2(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let height;
  let sharedValue;
  let tmp4;
  let width;
  let obj = sharedValue(576);
  const cResult = obj.c(6);
  let obj2 = sharedValue(4618);
  sharedValue = obj2.useSharedValue(0);
  const obj3 = sharedValue(7978);
  const mediaViewerDimensions = obj3.useMediaViewerDimensions();
  ({ height, width } = mediaViewerDimensions);
  if (cResult[0] !== sharedValue) {
    const fn = function n() {
      set = sharedValue.set;
      const obj = timing;
      const obj2 = { duration: 300, easing: native.STANDARD_EASING };
      const result = set(obj.withTiming(1, obj2));
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === sharedValue) {
    if (cResult[3] === height) {
      let tmp5;
      if (cResult[4] === width) {
        tmp5 = cResult[5];
      }
      const effect = react.useEffect(tmp4, tmp5);
      return sharedValue;
    }
  }
  const items = [sharedValue, height, width];
  cResult[2] = sharedValue;
  cResult[3] = height;
  cResult[4] = width;
  cResult[5] = items;
  tmp5 = items;
}) : (() => {
  let sharedValue;
  let obj = sharedValue(4618);
  sharedValue = obj.useSharedValue(0);
  let obj2 = sharedValue(7978);
  const mediaViewerDimensions = obj2.useMediaViewerDimensions();
  const items = [sharedValue, , ];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = react.useEffect(() => {
    set = sharedValue.set;
    const obj = timing;
    const obj2 = { duration: 300, easing: native.STANDARD_EASING };
    const result = set(obj.withTiming(1, obj2));
  }, items);
  return sharedValue;
});
ReactCompilerGating = ReactCompilerGating_mod;
const __initData3 = { code: "function useOverlayLayoutDriverTsx3(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const __initData4 = { code: "function useOverlayLayoutDriverTsx4(){const{interpolate,animationDriver}=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};}" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((animationDriver) => {
  _require = animationDriver;
  let obj = require("ReanimatedRexport");
  const fn = function n() {
    let items;
    let obj3;
    let obj4;
    const obj = { transform: items, opacity: obj4.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]) };
    const obj2 = { translateY: obj3.interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]) };
    items = [obj2];
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__closure = obj2;
  fn.__workletHash = 13622939479876;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}) : ((animationDriver) => {
  _require = animationDriver;
  let obj = require("ReanimatedRexport");
  const fn = function n() {
    let items;
    let obj3;
    let obj4;
    const obj = { transform: items, opacity: obj4.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]) };
    const obj2 = { translateY: obj3.interpolate(animationDriver.get(), [0, 0.75, 1], [-50, -50, 0]) };
    items = [obj2];
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__closure = obj2;
  fn.__workletHash = 4085578174343;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((animationDriver) => {
  _require = animationDriver;
  let obj = require("ReanimatedRexport");
  const fn = function n() {
    let items;
    let obj3;
    let obj4;
    const obj = { transform: items, opacity: obj4.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]) };
    const obj2 = { translateY: obj3.interpolate(animationDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    items = [obj2];
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__closure = obj2;
  fn.__workletHash = 14180573945254;
  fn.__initData = __initData3;
  return obj.useAnimatedStyle(fn);
}) : ((animationDriver) => {
  _require = animationDriver;
  let obj = require("ReanimatedRexport");
  const fn = function n() {
    let items;
    let obj3;
    let obj4;
    const obj = { transform: items, opacity: obj4.interpolate(animationDriver.get(), [0, 0.75, 1], [0, 0, 1]) };
    const obj2 = { translateY: obj3.interpolate(animationDriver.get(), [0, 0.75, 1], [50, 50, 0]) };
    items = [obj2];
    obj3 = ReanimatedRexport;
    obj4 = ReanimatedRexport;
    return obj;
  };
  let obj2 = { interpolate: require("ReanimatedRexport").interpolate, animationDriver };
  fn.__closure = obj2;
  fn.__workletHash = 6100121737057;
  fn.__initData = __initData4;
  return obj.useAnimatedStyle(fn);
});
let result = size.fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export const useOverlayLayoutDriver = tmp2;
export const useHeaderLayoutAnimation = tmp3;
export const useFooterLayoutAnimation = tmp4;