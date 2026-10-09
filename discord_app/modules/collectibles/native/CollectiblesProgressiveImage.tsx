// === Module 16165: CollectiblesProgressiveImage ===

// Module 16165 (CollectiblesProgressiveImage)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import FastImageDefault from "FastImage" /* 6163 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
let closure_3 = ["source", "style"];
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const __initData = { code: "function CollectiblesProgressiveImageTsx1(){const{backgroundImageOpacity}=this.__closure;return{opacity:backgroundImageOpacity.get()};}" };
const __initData2 = { code: "function CollectiblesProgressiveImageTsx2(){const{backgroundImageOpacity}=this.__closure;return{opacity:backgroundImageOpacity.get()};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesProgressiveImage.tsx");

export const CollectiblesProgressiveImage = ReactCompilerGating.isReactCompilerEnabled() ? (function CollectiblesProgressiveImage(arg0) {
  const cResult = sharedValue(576).c(16);
  if (cResult[0] !== arg0) {
    ({ source, style } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = source;
    cResult[3] = style;
    class I {
      constructor() {
        obj = { opacity: closure_0.get() };
        return obj;
      }
    }
    let tmp5 = source;
    let tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const obj = sharedValue(576);
  sharedValue = sharedValue(4811).useSharedValue(0);
  const tmpResult = sharedValue(4811);
  class I {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  I.__closure = { backgroundImageOpacity: sharedValue };
  I.__workletHash = 14095099553650;
  I.__initData = __initData;
  const animatedStyle = sharedValue(4811).useAnimatedStyle(I);
  if (cResult[4] !== sharedValue) {
    function handleImageLoad() {
      const obj2 = { duration: 500, easing: null };
      const Easing = ReanimatedRexport.Easing;
      obj2.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
      const result = sharedValue.set(timing.withTiming(1, obj2));
    }
    cResult[4] = sharedValue;
    cResult[5] = handleImageLoad;
    let tmp12 = handleImageLoad;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === animatedStyle) {
    if (cResult[7] === tmp6) {
      let tmp13 = cResult[8];
    }
    if (cResult[9] === tmp12) {
      if (cResult[10] === tmp4) {
        if (cResult[11] === tmp5) {
          let tmp14 = cResult[12];
        }
        if (cResult[13] === tmp13) {
          if (cResult[14] === tmp14) {
            let tmp23 = cResult[15];
          }
          return tmp23;
        }
        let obj2 = { style: tmp13, children: tmp14 };
        cResult[13] = tmp13;
        cResult[14] = tmp14;
        class I {
          constructor() {
            obj = { opacity: closure_0.get() };
            return obj;
          }
        }
        tmp23 = jsx(ReanimatedRexportDefault.View, { style: tmp13, children: tmp14 });
        const tmp26 = jsx(ReanimatedRexportDefault.View, { style: tmp13, children: tmp14 });
      }
    }
    const obj3 = {};
    const merged = Object.assign(tmp4);
    obj3.source = tmp5;
    obj3.style = StyleSheet.absoluteFill;
    obj3.fadeDuration = 0;
    class I {
      constructor() {
        obj = { opacity: closure_0.get() };
        return obj;
      }
    }
    const tmp22 = jsx(FastImageDefault, {});
    cResult[9] = tmp12;
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = tmp22;
    tmp14 = tmp22;
  }
  const items = [tmp6, animatedStyle];
  cResult[6] = animatedStyle;
  cResult[7] = tmp6;
  cResult[8] = items;
  tmp13 = items;
  const tmpResult2 = sharedValue(4811);
}) : (function CollectiblesProgressiveImage(arg0) {
  ({ source, style } = arg0);
  let sharedValue;
  const merged = Object.assign(arg0, Object.assign({ source: 0, style: 0 }));
  sharedValue = sharedValue(4811).useSharedValue(0);
  const obj = sharedValue(4811);
  const fn = function u() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { backgroundImageOpacity: sharedValue };
  fn.__workletHash = 13501599736881;
  fn.__initData = __initData2;
  const animatedStyle = sharedValue(4811).useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items = [style, animatedStyle];
  obj3.style = items;
  const obj4 = {};
  let obj2 = sharedValue(4811);
  const merged1 = Object.assign(merged);
  obj4.source = source;
  obj4.style = StyleSheet.absoluteFill;
  obj4.fadeDuration = 0;
  obj4.onLoad = function handleImageLoad() {
    const obj2 = { duration: 500, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj2.easing = Easing.inOut(ReanimatedRexport.Easing.ease);
    const result = sharedValue.set(timing.withTiming(1, obj2));
  };
  obj3.children = jsx(FastImageDefault, {});
  return jsx(ReanimatedRexportDefault.View, { style: null, children: null });
});