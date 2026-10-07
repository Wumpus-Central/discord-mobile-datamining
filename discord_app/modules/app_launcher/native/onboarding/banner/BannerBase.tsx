// === Module 11689: BannerBase ===

// Module 11689 (BannerBase)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import spring from "spring" /* 5604 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const SPRING_CONFIG = { mass: 1, stiffness: 100, damping: 15 };
const createStyles = fn(4896);
let obj2 = { banner: null, bannerGradientColor: null, bannerBackgroundGradient: null, imageContainer: null, trinketsLottie: null, bannerTextContainer: null, bannerText: null };
const rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: fn(11678).APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
obj2.banner = rect;
obj2.bannerGradientColor = { backgroundColor: "#7eaaff" };
const rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2.bannerBackgroundGradient = rect1;
obj2.imageContainer = { width: 72 };
obj2.trinketsLottie = { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" };
obj2.bannerTextContainer = { alignItems: "center", justifyContent: "center", marginLeft: nativeDefault.space.PX_12, flexShrink: 1 };
obj2.bannerText = { width: "100%" };
let closure_10 = createStyles.createStyles(obj2);
const __initData = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const __initData2 = { code: "function BannerBaseTsx2(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", marginLeft: nativeDefault.space.PX_12, flexShrink: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(49);
  ({ image, text } = arg0);
  const tmp4 = closure_10();
  [tmp6, require] = noop.useState(0);
  const tmp5 = _slicedToArray(noop.useState(0), 2);
  const sharedValue = ReanimatedRexport.useSharedValue(false);
  const diff = sharedValue(1484)().width - 2 * sharedValue(587).space.PX_16;
  const backgroundColor = tmp4.bannerGradientColor.backgroundColor;
  if (cResult[0] !== backgroundColor) {
    const hexOpacityToRgbaResult = ColorUtils.hexOpacityToRgba(backgroundColor, 0.2);
    cResult[0] = backgroundColor;
    cResult[1] = hexOpacityToRgbaResult;
    let tmp9 = hexOpacityToRgbaResult;
    const tmpResult = ColorUtils;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== backgroundColor) {
    const hexOpacityToRgbaResult1 = ColorUtils.hexOpacityToRgba(backgroundColor, 0);
    cResult[2] = backgroundColor;
    cResult[3] = hexOpacityToRgbaResult1;
    let tmp11 = hexOpacityToRgbaResult1;
    const tmpResult4 = ColorUtils;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === tmp9) {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [AccessibilityStore];
      const fn = function k() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[7] = items;
      cResult[8] = fn;
      let tmp16 = fn;
      let tmp15 = items;
    } else {
      tmp15 = cResult[7];
      tmp16 = cResult[8];
    }
    const stateFromStores = initialize.useStateFromStores(tmp15, tmp16);
    if (cResult[9] !== sharedValue) {
      class B {
        constructor(arg0) {
          layout = arg0.nativeEvent.layout;
          height = undefined;
          if (layout != null) {
            height = layout.height;
          }
          if (height > 0) {
            tmp2 = closure_0;
            tmp3 = closure_0(height);
            tmp4 = closure_1;
            flag = true;
            result = closure_1.set(true);
          }
          return;
        }
      }
      cResult[9] = sharedValue;
      cResult[10] = B;
    } else {
      class B {
        constructor(arg0) {
          layout = arg0.nativeEvent.layout;
          height = undefined;
          if (layout != null) {
            height = layout.height;
          }
          if (height > 0) {
            tmp2 = closure_0;
            tmp3 = closure_0(height);
            tmp4 = closure_1;
            flag = true;
            result = closure_1.set(true);
          }
          return;
        }
      }
    }
    const tmpResult5 = initialize;
    class M {
      constructor() {
        obj = closure_1;
        num = 0;
        if (closure_1.get()) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj2 = closure_0(closure_2[10]);
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj3 = closure_0(closure_2[14]);
          tmp5 = closure_9;
          num2 = 1;
          num3 = 150;
          num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
        }
        obj1 = { opacity: num, transform: null };
        num4 = 30;
        if (obj.get()) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj5 = closure_0(closure_2[10]);
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj6 = closure_0(closure_2[14]);
          tmp10 = closure_9;
          num5 = 150;
          num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
        }
        items = [];
        items[0] = { translateY: num4 };
        obj1.transform = items;
        return obj1;
      }
    }
    let obj3 = { bannerMeasured: sharedValue, withDelay: ReanimatedRexport.withDelay, withSpring: spring.withSpring, SPRING_CONFIG };
    M.__closure = obj3;
    M.__workletHash = 5314641176204;
    M.__initData = __initData;
    const animatedStyle = ReanimatedRexport.useAnimatedStyle(M);
    if (tmp6 > 0) {
      class B {
        constructor(arg0) {
          layout = arg0.nativeEvent.layout;
          height = undefined;
          if (layout != null) {
            height = layout.height;
          }
          if (height > 0) {
            tmp2 = closure_0;
            tmp3 = closure_0(height);
            tmp4 = closure_1;
            flag = true;
            result = closure_1.set(true);
          }
          return;
        }
      }
    }
    if (cResult[11] === diff) {
      class B {
        constructor(arg0) {
          layout = arg0.nativeEvent.layout;
          height = undefined;
          if (layout != null) {
            height = layout.height;
          }
          if (height > 0) {
            tmp2 = closure_0;
            tmp3 = closure_0(height);
            tmp4 = closure_1;
            flag = true;
            result = closure_1.set(true);
          }
          return;
        }
      }
      if (cResult[14] === animatedStyle) {
        class B {
          constructor(arg0) {
            layout = arg0.nativeEvent.layout;
            height = undefined;
            if (layout != null) {
              height = layout.height;
            }
            if (height > 0) {
              tmp2 = closure_0;
              tmp3 = closure_0(height);
              tmp4 = closure_1;
              flag = true;
              result = closure_1.set(true);
            }
            return;
          }
        }
      }
      const items1 = [tmp4.banner, tmp23, animatedStyle];
      cResult[14] = animatedStyle;
      cResult[15] = tmp4.banner;
      class M {
        constructor() {
          obj = closure_1;
          num = 0;
          if (closure_1.get()) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj2 = closure_0(closure_2[10]);
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj3 = closure_0(closure_2[14]);
            tmp5 = closure_9;
            num2 = 1;
            num3 = 150;
            num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
          }
          obj1 = { opacity: num, transform: null };
          num4 = 30;
          if (obj.get()) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj5 = closure_0(closure_2[10]);
            tmp8 = closure_0;
            tmp9 = closure_2;
            obj6 = closure_0(closure_2[14]);
            tmp10 = closure_9;
            num5 = 150;
            num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
          }
          items = [];
          items[0] = { translateY: num4 };
          obj1.transform = items;
          return obj1;
        }
      }
      cResult[16] = tmp23;
      cResult[17] = items1;
    }
    let obj4 = { opacity: 0, width: diff };
    cResult[11] = diff;
    cResult[12] = 0;
    cResult[13] = obj4;
    const tmpResult6 = ReanimatedRexport;
  }
  const items2 = [tmp9, tmp11];
  cResult[4] = tmp9;
  cResult[5] = tmp11;
  cResult[6] = items2;
}) : ((arg0) => {
  _require = undefined;
  ({ image, text } = arg0);
  const tmp = closure_10();
  let num = 0;
  [tmp3, c0] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const diff = sharedValue(1484)().width - 2 * sharedValue(587).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  const obj = require("ReanimatedRexport");
  let items = [require("ColorUtils").hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj2 = require("ColorUtils");
  items[1] = require("ColorUtils").hexOpacityToRgba(backgroundColor, 0);
  let obj3 = require("ColorUtils");
  const items1 = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj4 = require("initialize");
  const fn = function p() {
    let num = 0;
    if (sharedValue.get()) {
      const obj2 = ReanimatedRexport;
      num = obj2.withDelay(150, spring.withSpring(1, closure_9));
    }
    const obj4 = { opacity: num, transform: null };
    let num4 = 30;
    if (sharedValue.get()) {
      const obj5 = ReanimatedRexport;
      num4 = obj5.withDelay(150, spring.withSpring(0, closure_9));
    }
    const items = [{ translateY: num4 }];
    obj4.transform = items;
    return obj4;
  };
  let obj5 = require("ReanimatedRexport");
  fn.__closure = { bannerMeasured: sharedValue, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, SPRING_CONFIG };
  fn.__workletHash = 2233562582031;
  fn.__initData = __initData2;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const items2 = [tmp.banner, , ];
  if (tmp3 > 0) {
    num = 1;
  }
  const obj7 = {
    style: items2,
    onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      let height;
      if (layout != null) {
        height = layout.height;
      }
      if (height > 0) {
        _undefined(height);
        const result = sharedValue.set(true);
      }
    },
    children: null
  };
  items2[1] = { opacity: num, width: diff };
  items2[2] = animatedStyle;
  const obj8 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: null };
  const items3 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  obj8.style = items3;
  const items4 = [closure_7(sharedValue(5612), obj8), , ];
  const obj9 = { style: tmp.imageContainer, children: null };
  const obj10 = { style: tmp.trinketsLottie, source: null, autoPlay: null };
  let obj6 = { bannerMeasured: sharedValue, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, SPRING_CONFIG };
  obj10.source = require("module_11690");
  obj10.autoPlay = !stateFromStores;
  const items5 = [closure_7(sharedValue(5927), obj10), image];
  obj9.children = items5;
  items4[1] = closure_8(View, obj9);
  const obj11 = { style: tmp.bannerTextContainer, children: closure_7(require("Text/Text").Text, { variant: "text-md/semibold", color: "text-overlay-light", style: tmp.bannerText, children: text }) };
  items4[2] = closure_7(View, obj11);
  obj7.children = items4;
  return closure_8(sharedValue(4618).View, obj7);
});