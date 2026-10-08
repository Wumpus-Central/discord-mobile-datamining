// === Module 12709: SocialLayerStorefrontPoductPurchaseSuccessModal ===

// Module 12709 (SocialLayerStorefrontPoductPurchaseSuccessModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import _modDef3697 from "module_3697" /* 3697 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import UserUtilsDefault from "UserUtils" /* 4922 */;
import HapticUtils from "HapticUtils" /* 5055 */;
import timing from "timing" /* 5091 */;
import spring from "spring" /* 5374 */;
import XSmallIcon from "XSmallIcon" /* 6210 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6917 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10141 */;
import _slicedToArray from "module_32" /* 32 */;
import _toArray from "_toArray" /* 729 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import SKUStore from "SKUStore" /* 6092 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
let numDays = fn(6920).SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
const Constants = fn(1085);
({ AnalyticEvents: closure_11, HorizontalGradient: closure_12, VerticalGradient: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let createStyles = fn(5090);
let obj2 = { root: { flex: 1, backgroundColor: nativeDefault.colors.BLACK }, backdropImage: { position: "absolute", inset: 0, opacity: 0.45 }, backdropGradient: { position: "absolute", inset: 0 }, curtain: null, main: null, header: null, closeButtonIcon: null, scroll: null, body: null, bodyLandscape: null, preview: null, previewLandscape: null, messages: null, messagesLandscape: null, contentColumnLandscape: null, title: null, description: null, textLandscape: null, footer: null, footerLandscape: null, cta: null, ctaLandscape: null, finePrint: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
obj2.curtain = { position: "absolute", inset: 0, backgroundColor: nativeDefault.colors.BLACK };
obj2.main = { flex: 1 };
let obj4 = { position: "absolute", inset: 0, backgroundColor: nativeDefault.colors.BLACK };
obj2.header = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.closeButtonIcon = { tintColor: nativeDefault.colors.WHITE };
obj2.scroll = { flex: 1 };
obj2.body = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
obj2.bodyLandscape = { flexDirection: "row", alignItems: "center" };
obj2.preview = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj2.previewLandscape = { flex: 1 };
let obj6 = { tintColor: nativeDefault.colors.WHITE };
obj2.messages = { paddingTop: nativeDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
obj2.messagesLandscape = { paddingTop: 0, alignItems: "stretch" };
obj2.contentColumnLandscape = { flex: 1 };
let obj7 = { paddingTop: nativeDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
obj2.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
let obj8 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
obj2.description = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
let obj9 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
obj2.textLandscape = { marginHorizontal: nativeDefault.space.PX_16, textAlign: "left" };
let obj10 = { marginHorizontal: nativeDefault.space.PX_16, textAlign: "left" };
obj2.footer = { marginBottom: nativeDefault.space.PX_16 };
let obj11 = { marginBottom: nativeDefault.space.PX_16 };
obj2.footerLandscape = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
let obj12 = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
obj2.cta = { marginHorizontal: nativeDefault.space.PX_24 };
let obj13 = { marginHorizontal: nativeDefault.space.PX_24 };
obj2.ctaLandscape = { marginHorizontal: nativeDefault.space.PX_16 };
const obj14 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.finePrint = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_12 };
let closure_16 = createStyles.createStyles(obj2);
createStyles = fn(5090);
let obj17 = { linkAccountIcon: null };
let obj15 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_12 };
obj17.linkAccountIcon = { marginRight: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj17);
let c18 = 250;
let c19 = 200;
const __initData = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
const __initData2 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData3 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
const __initData4 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx4(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
const __initData5 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx5(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData6 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx6(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAnimationStyles(arg0) {
  _require = arg0;
  const cResult = require("c").c(9);
  let obj = require("c");
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  if (cResult[0] === sharedValue1) {
    if (cResult[1] === arg0) {
      if (cResult[2] === sharedValue) {
        let tmp6 = cResult[3];
        let tmp7 = cResult[4];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      const fn = function p() {
        const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: null };
        const obj3 = { scale: null };
        obj3.scale = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 1]);
        const items = [obj3];
        obj.transform = items;
        return obj;
      };
      let obj4 = { interpolate: tmp(tmp2[13]).interpolate, springInput: sharedValue };
      fn.__closure = obj4;
      fn.__workletHash = 7750024112371;
      fn.__initData = __initData;
      const animatedStyle = tmp(tmp2[13]).useAnimatedStyle(fn);
      const tmpResult = tmp(tmp2[13]);
      class S {
        constructor() {
          obj = { opacity: null, transform: null };
          obj2 = closure_0(closure_2[13]);
          obj.opacity = obj2.interpolate(closure_1.get(), [0, 1], [0, 1]);
          obj1 = { scale: null };
          obj4 = closure_0(closure_2[13]);
          obj1.scale = obj4.interpolate(closure_1.get(), [0, 1], [0.75, 1]);
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      const obj5 = { interpolate: tmp(tmp2[13]).interpolate, springInput: sharedValue };
      S.__closure = obj5;
      S.__workletHash = 3400602564931;
      S.__initData = __initData2;
      const animatedStyle1 = tmp(tmp2[13]).useAnimatedStyle(S);
      const tmpResult3 = tmp(tmp2[13]);
      const fn2 = function _() {
        const obj = { opacity: ReanimatedRexport.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
        return obj;
      };
      const obj6 = { interpolate: tmp(tmp2[13]).interpolate, linearInput: sharedValue1 };
      fn2.__closure = obj6;
      fn2.__workletHash = 4092396015860;
      fn2.__initData = __initData3;
      const animatedStyle2 = tmp(tmp2[13]).useAnimatedStyle(fn2);
      if (cResult[5] === animatedStyle2) {
        if (cResult[6] === animatedStyle) {
          if (cResult[7] === animatedStyle1) {
            let tmp17 = cResult[8];
          }
          return tmp17;
        }
      }
      const obj7 = { previewViewStyle: animatedStyle, textViewStyle: animatedStyle1, curtainViewStyle: animatedStyle2 };
      cResult[5] = animatedStyle2;
      cResult[6] = animatedStyle;
      cResult[7] = animatedStyle1;
      cResult[8] = obj7;
      tmp17 = obj7;
      const tmpResult4 = tmp(tmp2[13]);
    }
  }
  let items = [sharedValue, arg0, sharedValue1];
  cResult[0] = sharedValue1;
  cResult[1] = arg0;
  cResult[2] = sharedValue;
  cResult[3] = tmp8;
  cResult[4] = items;
  tmp7 = items;
  tmp6 = tmp8;
  let obj3 = require("ReanimatedRexport");
}) : (function useAnimationStyles(arg0) {
  _require = arg0;
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  let items = [sharedValue, arg0, sharedValue1];
  const effect = noop.useEffect(() => {
    let num = 1;
    if (!closure_0) {
      const obj = ReanimatedRexport;
      num = obj.withDelay(c19, spring.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = sharedValue.set(num);
    let num2 = 1;
    if (!closure_0) {
      const obj3 = ReanimatedRexport;
      num2 = obj3.withDelay(c19, timing.withTiming(1, { duration: 200 }));
    }
    const result1 = sharedValue1.set(num2);
  }, items);
  let obj3 = { previewViewStyle: null, textViewStyle: null, curtainViewStyle: null };
  let obj2 = require("ReanimatedRexport");
  const fn = function n() {
    const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: null };
    const obj3 = { scale: null };
    obj3.scale = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 1]);
    const items = [obj3];
    obj.transform = items;
    return obj;
  };
  let obj4 = require("ReanimatedRexport");
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  fn.__workletHash = 11689351950294;
  fn.__initData = __initData4;
  obj3.previewViewStyle = obj4.useAnimatedStyle(fn);
  const obj5 = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  const fn2 = function l() {
    const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: null };
    const obj3 = { scale: null };
    obj3.scale = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0.75, 1]);
    const items = [obj3];
    obj.transform = items;
    return obj;
  };
  const obj6 = require("ReanimatedRexport");
  fn2.__closure = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  fn2.__workletHash = 15823058327140;
  fn2.__initData = __initData5;
  obj3.textViewStyle = obj6.useAnimatedStyle(fn2);
  const obj7 = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  const fn3 = function c() {
    const obj = { opacity: ReanimatedRexport.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
    return obj;
  };
  const obj8 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 2263660325649;
  fn3.__initData = __initData6;
  obj3.curtainViewStyle = obj8.useAnimatedStyle(fn3);
  return obj3;
});
let closure_27 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
function useDrummingHapticFeedbacks() {

}
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function PurchaseSuccessModalBase(arg0) {
  const cResult = require("c").c(112);
  ({ sku, title, body, finePrint, ctaLabel, ctaIcon, ctaLoading, onCtaPress, onClose } = arg0);
  const tmp4 = closure_16();
  _require = tmp4;
  const width = isScreenLandscape(1496)().width;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function p() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = require("c");
  const tmpResult = require("initialize");
  ({ previewViewStyle, textViewStyle, curtainViewStyle } = closure_26(require("initialize").useStateFromStores(tmp5, tmp6)));
  const tmp8 = closure_26(require("initialize").useStateFromStores(tmp5, tmp6));
  isScreenLandscape = require("useIsScreenLandscape").useIsScreenLandscape();
  const tmpResult2 = require("useIsScreenLandscape");
  [tmp11, dependencyMap] = noop.useState(null);
  if (cResult[2] !== isScreenLandscape) {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
    cResult[2] = isScreenLandscape;
    cResult[3] = N;
  } else {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
  }
  if (isScreenLandscape) {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
    if (null != tmp11) {
      class N {
        constructor(arg0) {
          obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
          tmp = closure_2(obj);
          return;
        }
      }
      if (tmp11.landscape === isScreenLandscape) {
        class N {
          constructor(arg0) {
            obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
            tmp = closure_2(obj);
            return;
          }
        }
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const bound = Math.max(120, Math.min(c18, Math.floor(tmp11.height - 32)));
      }
    }
  } else {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
  }
  if (cResult[4] !== sku) {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
    let cardBackgroundImageURL = obj5.getCardBackgroundImageURL(sku);
    if (cardBackgroundImageURL == null) {
      class N {
        constructor(arg0) {
          obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
          tmp = closure_2(obj);
          return;
        }
      }
      cardBackgroundImageURL = obj6.getCardImageURL(sku);
    }
    if (cardBackgroundImageURL != null) {
      class N {
        constructor(arg0) {
          obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
          tmp = closure_2(obj);
          return;
        }
      }
    }
    cResult[4] = sku;
    cResult[5] = undefined;
  } else {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
  }
  if (cResult[6] !== width) {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
    tmp19[0] = width;
    cResult[6] = width;
    cResult[7] = tmp19;
  } else {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
  }
  if (typeof useDrummingHapticFeedbacks === "function") {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
    closure_129_0 = noop.useRef(closure_27);
    const callback = noop.useCallback(() => {
      const arr = _toArray(sku.current);
      first = arr[0];
      const substr = arr.slice(1);
      if (null != first) {
        if (0 === substr.length) {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
        }
        if (null != first) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(closure_1, first);
        }
        sku.current = substr;
      }
      if (substr.length >= length.length / 2) {
        const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      } else {
        const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, []);
    closure_129_1 = callback;
    const items1 = [callback];
    const effect = noop.useEffect(() => {
      closure_1();
      return () => {
        sku.current = [];
      };
    }, items1);
    if (isScreenLandscape) {
      class N {
        constructor(arg0) {
          obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
          tmp = closure_2(obj);
          return;
        }
      }
    }
    if (cResult[8] === tmp4.messages) {
      class N {
        constructor(arg0) {
          obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
          tmp = closure_2(obj);
          return;
        }
      }
    }
    const items2 = [tmp4.messages, isScreenLandscape, textViewStyle];
    cResult[8] = tmp4.messages;
    cResult[9] = isScreenLandscape;
    cResult[10] = textViewStyle;
    cResult[11] = items2;
  } else {
    class N {
      constructor(arg0) {
        obj = { height: arg0.nativeEvent.layout.height, landscape: closure_1 };
        tmp = closure_2(obj);
        return;
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
  const tmp10 = _slicedToArray(noop.useState(null), 2);
}) : (function PurchaseSuccessModalBase(sku) {
  sku = sku.sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  let width;
  noop = undefined;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = closure_16();
  importDefault = tmp;
  width = require("useWindowDimensions")().width;
  const items = [AccessibilityStore];
  let obj = sku(width[18]);
  ({ previewViewStyle, textViewStyle, curtainViewStyle } = closure_26(sku(width[18]).useStateFromStores(items, () => useReducedMotion.useReducedMotion)));
  const tmp5 = closure_26(sku(width[18]).useStateFromStores(items, () => useReducedMotion.useReducedMotion));
  const isScreenLandscape = sku(width[19]).useIsScreenLandscape();
  const tmp8 = isScreenLandscape(noop.useState(null), 2);
  let first = tmp8[0];
  noop = tmp8[1];
  const items1 = [isScreenLandscape];
  const items2 = [isScreenLandscape, first];
  const callback = noop.useCallback((height) => {
    closure_5({ height: height.nativeEvent.layout.height, landscape: isScreenLandscape });
  }, items1);
  const memo = noop.useMemo(() => {
    if (isScreenLandscape) {
      if (null != first) {
        if (first.landscape === tmp) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          return Math.max(120, Math.min(c18, Math.floor(first.height - 32)));
        }
      }
      return null;
    } else {
      return c18;
    }
  }, items2);
  const items3 = [sku];
  const memo1 = noop.useMemo(() => {
    let str = SlayerStorefrontUtils.getCardBackgroundImageURL(sku);
    if (str == null) {
      str = SlayerStorefrontUtils.getCardImageURL(sku);
      const tmpResult = SlayerStorefrontUtils;
    }
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    return str1;
  }, items3);
  [][0] = width;
  if (typeof useDrummingHapticFeedbacks === "function") {
    closure_129_0 = obj3.useRef(length);
    const callback1 = obj3.useCallback(() => {
      const arr = _toArray(sku.current);
      first = arr[0];
      const substr = arr.slice(1);
      if (null != first) {
        if (0 === substr.length) {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
        }
        if (null != first) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(closure_1, first);
        }
        sku.current = substr;
      }
      if (substr.length >= length.length / 2) {
        const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      } else {
        const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, []);
    closure_129_1 = callback1;
    const items4 = [callback1];
    const effect = obj3.useEffect(() => {
      closure_1();
      return () => {
        sku.current = [];
      };
    }, items4);
    const items5 = [tmp.messages, , ];
    let messagesLandscape = isScreenLandscape;
    if (isScreenLandscape) {
      messagesLandscape = tmp.messagesLandscape;
    }
    const obj4 = { style: null, children: null };
    items5[1] = messagesLandscape;
    items5[2] = textViewStyle;
    obj4.style = items5;
    const items6 = [tmp.title, ];
    let textLandscape = isScreenLandscape;
    if (isScreenLandscape) {
      textLandscape = tmp.textLandscape;
    }
    const obj5 = { variant: "heading-xl/semibold", color: "text-overlay-light", style: null, children: null };
    items6[1] = textLandscape;
    obj5.style = items6;
    obj5.children = title;
    const items7 = [closure_14(tmp4(tmp3[21]).Text, obj5), ];
    const items8 = [tmp.description, ];
    let textLandscape2 = isScreenLandscape;
    if (isScreenLandscape) {
      textLandscape2 = tmp.textLandscape;
    }
    const obj6 = { variant: "text-md/medium", color: "text-overlay-light", style: null, children: null };
    items8[1] = textLandscape2;
    obj6.style = items8;
    obj6.children = body;
    items7[1] = closure_14(tmp4(tmp3[21]).Text, obj6);
    obj4.children = items7;
    const tmp17Result = closure_15(tmp2(tmp3[13]).View, obj4);
    const items9 = [tmp.footer, ];
    let footerLandscape = isScreenLandscape;
    if (isScreenLandscape) {
      footerLandscape = tmp.footerLandscape;
    }
    const obj7 = { style: null, children: null };
    items9[1] = footerLandscape;
    obj7.style = items9;
    let tmp18Result = null != finePrint;
    if (tmp18Result) {
      const items10 = [tmp.finePrint, ];
      let textLandscape3 = isScreenLandscape;
      if (isScreenLandscape) {
        textLandscape3 = tmp.textLandscape;
      }
      const obj8 = { variant: "text-xs/normal", color: "text-overlay-light", style: null, children: null };
      items10[1] = textLandscape3;
      obj8.style = items10;
      obj8.children = finePrint;
      tmp18Result = closure_14(tmp4(tmp3[21]).Text, obj8);
    }
    const items11 = [tmp18Result, ];
    const items12 = [tmp.cta, ];
    let ctaLandscape = isScreenLandscape;
    if (isScreenLandscape) {
      ctaLandscape = tmp.ctaLandscape;
    }
    const obj9 = { style: null, children: null };
    items12[1] = ctaLandscape;
    obj9.style = items12;
    if (onCtaPress == null) {
      onCtaPress = onClose;
    }
    const obj10 = { onPress: onCtaPress, text: null, icon: null, loading: null, size: "lg", grow: true };
    if (ctaLabel == null) {
      const intl = tmp4(tmp3[22]).intl;
      ctaLabel = intl.string(tmp4(tmp3[22]).t.cpT0Cq);
    }
    obj10.text = ctaLabel;
    obj10.icon = ctaIcon;
    obj10.loading = ctaLoading;
    obj9.children = closure_14(tmp4(tmp3[23]).Button, obj10);
    items11[1] = closure_14(closure_7, obj9);
    obj7.children = items11;
    const tmp17Result3 = closure_15(closure_7, obj7);
    const obj11 = { style: null, children: null };
    const items13 = [tmp.root, tmp13];
    obj11.style = items13;
    let tmp18Result3 = null != memo1;
    if (tmp18Result3) {
      const obj12 = { source: null, style: null, blurRadius: 4, resizeMode: "cover" };
      const obj13 = { uri: memo1 };
      obj12.source = obj13;
      obj12.style = tmp.backdropImage;
      tmp18Result3 = closure_14(tmp2(tmp3[24]), obj12);
    }
    const items14 = [tmp18Result3, , , ];
    const obj15 = { style: tmp.backdropGradient, start: null, end: null, locations: null, colors: null };
    ({ START: obj14.start, END: obj14.end } = tmp7);
    obj15.locations = [0.4, 0.75, 1];
    obj15.colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"];
    items14[1] = closure_14(tmp2(tmp3[25]), obj15);
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
    const obj16 = { style: tmp.header, children: null };
    const obj17 = {
      onPress: onClose,
      backImage() {
          return state(XSmallIcon.XSmallIcon, { size: "lg", style: closure_1.closeButtonIcon });
        },
      accessibilityLabel: null,
      displayMode: "minimal"
    };
    const intl2 = tmp4(tmp3[22]).intl;
    obj17.accessibilityLabel = intl2.string(tmp4(tmp3[22]).t.cpT0Cq);
    obj16.children = closure_14(tmp4(tmp3[27]).HeaderBackButton, obj17);
    const items15 = [closure_14(closure_7, obj16), , ];
    const obj18 = { style: tmp.scroll, contentContainerStyle: null, onLayout: null, alwaysBounceVertical: false, children: null };
    const items16 = [tmp.body, ];
    let bodyLandscape = isScreenLandscape;
    if (isScreenLandscape) {
      bodyLandscape = tmp.bodyLandscape;
    }
    items16[1] = bodyLandscape;
    obj18.contentContainerStyle = items16;
    obj18.onLayout = callback;
    const items17 = [tmp.preview, , ];
    let previewLandscape = isScreenLandscape;
    if (isScreenLandscape) {
      previewLandscape = tmp.previewLandscape;
    }
    const obj19 = { style: null, children: null };
    items17[1] = previewLandscape;
    items17[2] = previewViewStyle;
    obj19.style = items17;
    let tmp18Result4 = null != memo;
    if (tmp18Result4) {
      const obj20 = { sku, size: memo };
      tmp18Result4 = closure_14(tmp2(tmp3[28]), obj20);
    }
    obj19.children = tmp18Result4;
    const items18 = [closure_14(tmp2(tmp3[13]).View, obj19), ];
    let tmp17Result4 = tmp17Result;
    if (isScreenLandscape) {
      const obj21 = { style: tmp.contentColumnLandscape, children: null };
      const items19 = [tmp17Result, tmp17Result3];
      obj21.children = items19;
      tmp17Result4 = closure_15(closure_7, obj21);
    }
    items18[1] = tmp17Result4;
    obj18.children = items18;
    items15[1] = closure_15(closure_6, obj18);
    let tmp27 = !isScreenLandscape;
    if (!isScreenLandscape) {
      tmp27 = tmp17Result3;
    }
    items15[2] = tmp27;
    rect.children = items15;
    items14[2] = closure_15(tmp4(tmp3[29]).SafeAreaPaddingView, rect);
    const obj22 = { style: null, pointerEvents: "none" };
    const items20 = [tmp.curtain, curtainViewStyle];
    obj22.style = items20;
    items14[3] = closure_14(tmp2(tmp3[13]).View, obj22);
    obj11.children = items14;
    return closure_15(closure_7, obj11);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  let obj2 = sku(width[19]);
  tmp7 = isScreenLandscape ? closure_12 : closure_13;
});
fn(558);
let obj18 = { marginRight: nativeDefault.space.PX_4 };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
  const cResult = skuId(fetched[12]).c(55);
  skuId = skuId.skuId;
  ({ analyticsLocations, onClose } = skuId);
  closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SKUStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== skuId) {
    const fn = function l() {
      return SKUStore.get(skuId);
    };
    cResult[1] = skuId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = skuId(fetched[12]);
  const stateFromStores = skuId(fetched[18]).useStateFromStores(first, tmp7);
  const tmpResult = skuId(fetched[18]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = skuId(fetched[30]).useGetOrFetchApplication(applicationId);
  let tmp14 = getOrFetchApplication;
  const tmp12 = stateFromStores;
  const tmpResult3 = skuId(fetched[30]);
  if (getOrFetchApplication == null) {
    tmp14 = null;
  }
  const tmp13Result = stateFromStores(fetched[31])(tmp14);
  fetched = tmp13Result.fetched;
  const hasAlreadyLinked = tmp13Result.hasAlreadyLinked;
  const canStartAuthorization = tmp13Result.canStartAuthorization;
  const startAuthorization = tmp13Result.startAuthorization;
  const tmp13 = stateFromStores(fetched[31]);
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  const socialLayerStorefrontMobileAccountLinkingDisabled = skuId(fetched[32]).useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  if (cResult[3] !== analyticsLocations) {
    let items1 = analyticsLocations;
    if (analyticsLocations == tmp9) {
      items1 = [];
    }
    cResult[3] = analyticsLocations;
    cResult[4] = items1;
    let tmp18 = items1;
  } else {
    tmp18 = cResult[4];
  }
  if (cResult[5] !== tmp18) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(tmp18, 0)] = tmp12(tmp2[33]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS;
    cResult[5] = tmp18;
    cResult[6] = items2;
    let tmp19 = items2;
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp18, 0);
  } else {
    tmp19 = cResult[6];
  }
  location_stack = tmp19;
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  if (cResult[7] === tmp19) {
    if (cResult[8] === canStartAuthorization) {
      if (cResult[9] === skuId) {
        if (cResult[10] === applicationId2) {
          let tmp24 = cResult[11];
        }
        startAuthorization.useRef(tmp24);
        if (cResult[12] !== canStartAuthorization) {
          class N {
            constructor() {
              closure_7.current.canStartAuthorization = canStartAuthorization;
              return;
            }
          }
          const items3 = [canStartAuthorization];
          cResult[12] = canStartAuthorization;
          class H {
            constructor() {
              if (fetched) {
                tmp = closure_7;
                tmp2 = closure_1;
                tmp3 = closure_2;
                ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = closure_7.current);
                obj = closure_1(closure_2[34]);
                tmp4 = AnalyticEvents;
                obj1 = { location_stack: null, sku_id: null, application_id: null, is_gift: false, is_account_linked: null, can_start_authorization: null };
                obj1.location_stack = analyticsLocations;
                obj1.sku_id = skuId;
                obj1.application_id = applicationId;
                tmp5 = hasAlreadyLinked;
                obj1.is_account_linked = hasAlreadyLinked;
                obj1.can_start_authorization = canStartAuthorization;
                trackResult = obj.track(AnalyticEvents.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj1);
              }
              return;
            }
          }
          cResult[14] = items3;
          let tmp26 = items3;
        } else {
          class N {
            constructor() {
              closure_7.current.canStartAuthorization = canStartAuthorization;
              return;
            }
          }
          tmp26 = cResult[14];
        }
        const effect = obj6.useEffect(N, tmp26);
        if (cResult[15] === fetched) {
          class N {
            constructor() {
              closure_7.current.canStartAuthorization = canStartAuthorization;
              return;
            }
          }
          const effect1 = obj6.useEffect(H, tmp28);
          if (cResult[19] === tmp19) {
            class N {
              constructor() {
                closure_7.current.canStartAuthorization = canStartAuthorization;
                return;
              }
            }
            if (stateFromStores != tmp9) {
              class N {
                constructor() {
                  closure_7.current.canStartAuthorization = canStartAuthorization;
                  return;
                }
              }
            }
            if (cResult[20] === tmp31) {
              class N {
                constructor() {
                  closure_7.current.canStartAuthorization = canStartAuthorization;
                  return;
                }
              }
            }
          }
          cResult[19] = tmp19;
          class H {
            constructor() {
              if (fetched) {
                tmp = closure_7;
                tmp2 = closure_1;
                tmp3 = closure_2;
                ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = closure_7.current);
                obj = closure_1(closure_2[34]);
                tmp4 = AnalyticEvents;
                obj1 = { location_stack: null, sku_id: null, application_id: null, is_gift: false, is_account_linked: null, can_start_authorization: null };
                obj1.location_stack = analyticsLocations;
                obj1.sku_id = skuId;
                obj1.application_id = applicationId;
                tmp5 = hasAlreadyLinked;
                obj1.is_account_linked = hasAlreadyLinked;
                obj1.can_start_authorization = canStartAuthorization;
                trackResult = obj.track(AnalyticEvents.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj1);
              }
              return;
            }
          }
          const fn2 = function z() {
            const obj2 = { location_stack, sku_id: skuId, application_id: null, is_gift: false };
            let applicationId;
            if (stateFromStores != null) {
              applicationId = stateFromStores.applicationId;
            }
            obj2.application_id = applicationId;
            AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj2);
            startAuthorization({ analyticsLocations: location_stack });
          };
          cResult[20] = undefined;
          cResult[21] = skuId;
          cResult[22] = startAuthorization;
          cResult[23] = fn2;
        }
        class H {
          constructor() {
            if (fetched) {
              tmp = closure_7;
              tmp2 = closure_1;
              tmp3 = closure_2;
              ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = closure_7.current);
              obj = closure_1(closure_2[34]);
              tmp4 = AnalyticEvents;
              obj1 = { location_stack: null, sku_id: null, application_id: null, is_gift: false, is_account_linked: null, can_start_authorization: null };
              obj1.location_stack = analyticsLocations;
              obj1.sku_id = skuId;
              obj1.application_id = applicationId;
              tmp5 = hasAlreadyLinked;
              obj1.is_account_linked = hasAlreadyLinked;
              obj1.can_start_authorization = canStartAuthorization;
              trackResult = obj.track(AnalyticEvents.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj1);
            }
            return;
          }
        }
        const items4 = [fetched, hasAlreadyLinked];
        cResult[15] = fetched;
        cResult[16] = hasAlreadyLinked;
        cResult[17] = items4;
        cResult[18] = H;
        tmp28 = items4;
      }
    }
  }
  let obj2 = { analyticsLocations: tmp19, skuId, applicationId: applicationId2, canStartAuthorization };
  cResult[7] = tmp19;
  cResult[8] = canStartAuthorization;
  cResult[9] = skuId;
  cResult[10] = applicationId2;
  cResult[11] = obj2;
  tmp24 = obj2;
  const tmpResult4 = skuId(fetched[32]);
}) : (function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
  skuId = skuId.skuId;
  ({ orbsReward, analyticsLocations } = skuId);
  let stateFromStores;
  let getOrFetchApplication;
  let fetched;
  let hasAlreadyLinked;
  let canStartAuthorization;
  let startAuthorization;
  let memo;
  let ref;
  numDays = undefined;
  const tmp = closure_17();
  let items = [ref];
  stateFromStores = skuId(stateFromStores[18]).useStateFromStores(items, () => SKUStore.get(skuId));
  let obj = skuId(stateFromStores[18]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = skuId(stateFromStores[30]).useGetOrFetchApplication(applicationId);
  let tmp9 = getOrFetchApplication;
  let obj2 = skuId(stateFromStores[30]);
  if (getOrFetchApplication == null) {
    tmp9 = null;
  }
  const tmp8Result = analyticsLocations(stateFromStores[31])(tmp9);
  fetched = tmp8Result.fetched;
  hasAlreadyLinked = tmp8Result.hasAlreadyLinked;
  canStartAuthorization = tmp8Result.canStartAuthorization;
  startAuthorization = tmp8Result.startAuthorization;
  const tmp8 = analyticsLocations(stateFromStores[31]);
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  let items1 = [analyticsLocations];
  const socialLayerStorefrontMobileAccountLinkingDisabled = skuId(stateFromStores[32]).useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  memo = hasAlreadyLinked.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  let obj3 = { analyticsLocations: memo, skuId, applicationId: null, canStartAuthorization: null };
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  obj3.applicationId = applicationId2;
  obj3.canStartAuthorization = canStartAuthorization;
  ref = hasAlreadyLinked.useRef(obj3);
  const items2 = [canStartAuthorization];
  const effect = obj4.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items2);
  const items3 = [fetched, hasAlreadyLinked];
  const effect1 = obj4.useEffect(() => {
    if (fetched) {
      ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
      const obj2 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
      AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj2);
    }
  }, items3);
  const items4 = [startAuthorization, memo, skuId, ];
  let applicationId3;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items4[3] = applicationId3;
  const callback = obj4.useCallback(() => {
    const obj2 = { location_stack: memo, sku_id: skuId, application_id: null, is_gift: false };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj2.application_id = applicationId;
    AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj2);
    startAuthorization({ analyticsLocations: memo });
  }, items4);
  analyticsLocations(stateFromStores[36])(() => {
    const obj2 = { location_stack: memo, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj2.application_id = applicationId;
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
  });
  let intl = tmp2(tmp3[22]).intl;
  const string = intl.string;
  if (hasAlreadyLinked) {
    let stringResult = string(tmp2(tmp3[22]).t["5glWta"]);
  } else {
    stringResult = string(analyticsLocations(tmp3[37]).bRPsNX);
  }
  let tmp21 = !hasAlreadyLinked;
  if (!hasAlreadyLinked) {
    tmp21 = canStartAuthorization;
  }
  if (tmp21) {
    tmp21 = !socialLayerStorefrontMobileAccountLinkingDisabled;
  }
  numDays = tmp21;
  const items5 = [hasAlreadyLinked, tmp21, , ];
  let name;
  if (getOrFetchApplication != null) {
    name = getOrFetchApplication.name;
  }
  items5[2] = name;
  let name1;
  if (stateFromStores != null) {
    name1 = stateFromStores.name;
  }
  items5[3] = name1;
  let formatToPlainStringResult;
  const memo1 = obj4.useMemo(() => {
    if (hasAlreadyLinked) {
      const intl2 = util.intl;
      let str4;
      if (stateFromStores != null) {
        str4 = stateFromStores.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      const obj2 = { skuName: str4, applicationName: null };
      let str5;
      if (getOrFetchApplication != null) {
        str5 = getOrFetchApplication.name;
      }
      if (str5 == null) {
        str5 = "";
      }
      obj2.applicationName = str5;
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.W2znvX, obj2);
    } else {
      const intl = util.intl;
      const formatToPlainString = intl.formatToPlainString;
      if (closure_10) {
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj3 = { skuName: str2, applicationName: null };
        let str3;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        obj3.applicationName = str3;
        formatToPlainStringResult = formatToPlainString(util.t["EgCl+Q"], obj3);
      } else {
        let str;
        if (getOrFetchApplication != null) {
          str = getOrFetchApplication.name;
        }
        if (str == null) {
          str = "";
        }
        const obj = { applicationName: str };
        formatToPlainStringResult = formatToPlainString(_modDef3697.eNNnIG, obj);
      }
    }
    return formatToPlainStringResult;
  }, items5);
  if (!hasAlreadyLinked) {
    let intl2 = tmp2(tmp3[22]).intl;
    const obj5 = { numDays };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.TTj7ME, obj5);
  }
  const obj6 = { sku: stateFromStores, title: stringResult, body: memo1, finePrint: formatToPlainStringResult, ctaLabel: null, ctaIcon: null, ctaLoading: null, onCtaPress: null, onClose: null };
  let stringResult1;
  if (tmp21) {
    const intl3 = tmp2(tmp3[22]).intl;
    stringResult1 = intl3.string(tmp2(tmp3[22]).t["VDAhr+"]);
  }
  obj6.ctaLabel = stringResult1;
  let tmp27Result;
  if (tmp21) {
    const obj7 = { size: "xs", color: analyticsLocations(tmp3[10]).colors.WHITE, style: tmp.linkAccountIcon };
    tmp27Result = closure_14(tmp2(tmp3[38]).ExperimentalGameControllerLinkIcon, obj7);
  }
  obj6.ctaIcon = tmp27Result;
  obj6.ctaLoading = !fetched;
  let tmp31;
  if (tmp21) {
    tmp31 = callback;
  }
  obj6.onCtaPress = tmp31;
  obj6.onClose = skuId.onClose;
  return closure_14(closure_29, obj6);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx");

export const SocialLayerStorefrontProductSelfPurchaseSuccessModal = tmp5;
export const SocialLayerStorefrontProductGiftPurchaseSuccessModal = ReactCompilerGating.isReactCompilerEnabled() ? (function SocialLayerStorefrontProductGiftPurchaseSuccessModal(skuId) {
  const cResult = skuId(stateFromStores[12]).c(21);
  skuId = skuId.skuId;
  const recipient = skuId.recipient;
  ({ analyticsLocations, onClose } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SKUStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== skuId) {
    const fn = function o() {
      return SKUStore.get(skuId);
    };
    cResult[1] = skuId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = skuId(stateFromStores[12]);
  stateFromStores = skuId(stateFromStores[18]).useStateFromStores(first, tmp6);
  if (cResult[3] !== analyticsLocations) {
    let items1 = analyticsLocations;
    if (analyticsLocations == null) {
      items1 = [];
    }
    cResult[3] = analyticsLocations;
    cResult[4] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== tmp8) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(tmp8, 0)] = recipient(tmp2[33]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS;
    cResult[5] = tmp8;
    cResult[6] = items2;
    let tmp10 = items2;
    const arraySpreadResult = HermesBuiltin.arraySpread(tmp8, 0);
  } else {
    tmp10 = cResult[6];
  }
  location_stack = tmp10;
  if (cResult[7] === tmp10) {
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    if (cResult[8] === applicationId) {
      if (cResult[9] === skuId) {
        let tmp17 = cResult[10];
      }
      recipient(tmp2[36])(tmp17);
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(tmp2[22]).intl;
        const stringResult = intl.string(tmp(tmp2[22]).t["5glWta"]);
        cResult[11] = stringResult;
        let tmp21 = stringResult;
      } else {
        tmp21 = cResult[11];
      }
      if (cResult[12] === recipient) {
        let name;
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        if (cResult[13] === name) {
          let tmp25 = cResult[14];
        }
        if (cResult[15] !== tmp25) {
          const tmp25Result = tmp25();
          cResult[15] = tmp25;
          cResult[16] = tmp25Result;
          let tmp28 = tmp25Result;
        } else {
          tmp28 = cResult[16];
        }
        if (cResult[17] === tmp28) {
          if (cResult[18] === onClose) {
            if (cResult[19] === stateFromStores) {
              let tmp30 = cResult[20];
            }
            return tmp30;
          }
        }
        let obj2 = { sku: stateFromStores, title: tmp21, body: null, onClose: null };
        class T {
          constructor() {
            tmp = closure_2;
            intl = closure_0(closure_2[22]).intl;
            name = undefined;
            if (closure_2 != null) {
              name = closure_2.name;
            }
            obj = { itemName: name, giftRecipient: null };
            obj2 = closure_1(tmp[39]);
            str = obj2.getName(recipient);
            if (str == null) {
              str = "your recipient";
            }
            obj.giftRecipient = str;
            return intl.formatToPlainString(closure_0(closure_2[22]).t["2VjPTw"], obj);
          }
        }
        obj2.onClose = onClose;
        const tmp33 = closure_14(closure_29, obj2);
        cResult[17] = tmp28;
        cResult[18] = onClose;
        cResult[19] = stateFromStores;
        cResult[20] = tmp33;
        tmp30 = tmp33;
      }
      cResult[12] = recipient;
      let name1;
      if (stateFromStores != null) {
        name1 = stateFromStores.name;
      }
      class T {
        constructor() {
          tmp = closure_2;
          intl = closure_0(closure_2[22]).intl;
          name = undefined;
          if (closure_2 != null) {
            name = closure_2.name;
          }
          obj = { itemName: name, giftRecipient: null };
          obj2 = closure_1(tmp[39]);
          str = obj2.getName(recipient);
          if (str == null) {
            str = "your recipient";
          }
          obj.giftRecipient = str;
          return intl.formatToPlainString(closure_0(closure_2[22]).t["2VjPTw"], obj);
        }
      }
      cResult[13] = name1;
      cResult[14] = T;
      tmp25 = T;
    }
  }
  cResult[7] = tmp10;
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  class I {
    constructor() {
      obj = closure_1(closure_2[34]);
      obj1 = { location_stack: closure_3, type: closure_0(closure_2[35]).SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId, application_id: null };
      applicationId = undefined;
      if (closure_2 != null) {
        applicationId = closure_2.applicationId;
      }
      obj1.application_id = applicationId;
      trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
      return;
    }
  }
  cResult[8] = applicationId1;
  cResult[9] = skuId;
  cResult[10] = I;
  tmp17 = I;
  const tmpResult = skuId(stateFromStores[18]);
}) : (function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
  ({ skuId: require, orbsReward, recipient } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  let items = [SKUStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SKUStore.get(sku_id));
  let items1 = [analyticsLocations];
  location_stack = noop.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  recipient(analyticsLocations[36])(() => {
    const obj2 = { location_stack, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj2.application_id = applicationId;
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
  });
  let intl = require("util").intl;
  let name;
  let obj = require("initialize");
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items2 = [name, recipient];
  const stringResult = intl.string(require("util").t["5glWta"]);
  return closure_14(closure_29, {
    sku: stateFromStores,
    title: intl.string(require("util").t["5glWta"]),
    body: noop.useMemo(() => {
      const intl = util.intl;
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      const obj = { itemName: name, giftRecipient: null };
      let str = UserUtilsDefault.getName(recipient);
      if (str == null) {
        str = "your recipient";
      }
      obj.giftRecipient = str;
      return intl.formatToPlainString(util.t["2VjPTw"], obj);
    }, items2),
    onClose: analyticsLocations.onClose
  });
});