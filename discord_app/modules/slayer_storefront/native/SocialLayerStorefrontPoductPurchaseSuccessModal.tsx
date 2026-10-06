// === Module 10754: SocialLayerStorefrontPoductPurchaseSuccessModal ===

// Module 10754 (SocialLayerStorefrontPoductPurchaseSuccessModal)
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import _modDef3623 from "module_3623" /* 3623 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import timing from "timing" /* 4897 */;
import spring from "spring" /* 5604 */;
import XSmallIcon from "XSmallIcon" /* 6024 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6741 */;
import SocialLayerStorefrontConstants from "SocialLayerStorefrontConstants" /* 6744 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10544 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _toArray from "_toArray" /* 729 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import SKUStore from "SKUStore" /* 5702 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, location_stack, set, set2, skuId;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj16;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let react = react_mod;
({ Image: metroRequire, ScrollView: metroImportDefault, View: metroImportAll } = react_native);
const numDays = SocialLayerStorefrontConstants.SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
({ AnalyticEvents: closure_12, HorizontalGradient: map1, VerticalGradient: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: obj2, backdropImage: { position: "absolute", inset: 0, opacity: 0.45 }, backdropGradient: { position: "absolute", inset: 0 }, curtain: obj3, main: { flex: 1 }, header: obj4, closeButtonIcon: obj5, scroll: { flex: 1 }, body: { flexGrow: 1, flexDirection: "column", justifyContent: "center" }, bodyLandscape: { flexDirection: "row", alignItems: "center" }, preview: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, previewLandscape: { flex: 1 }, messages: obj6, messagesLandscape: { paddingTop: 0, alignItems: "stretch" }, contentColumnLandscape: { flex: 1 }, title: obj7, description: obj8, textLandscape: obj9, footer: obj10, footerLandscape: obj11, cta: obj12, ctaLandscape: obj13, finePrint: obj14 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", inset: 0, backgroundColor: nativeDefault.colors.BLACK };
obj4 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { tintColor: nativeDefault.colors.WHITE };
obj6 = { paddingTop: nativeDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
obj7 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
obj8 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
obj9 = { marginHorizontal: nativeDefault.space.PX_16, textAlign: "left" };
obj10 = { marginBottom: nativeDefault.space.PX_16 };
obj11 = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
obj12 = { marginHorizontal: nativeDefault.space.PX_24 };
obj13 = { marginHorizontal: nativeDefault.space.PX_16 };
obj14 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_12 };
let closure_17 = createStyles(obj);
createStyles = createStyles_mod;
let obj15 = { linkAccountIcon: obj16 };
obj16 = { marginRight: nativeDefault.space.PX_4 };
let closure_18 = createStyles.createStyles(obj15);
let c19 = 250;
let c20 = 200;
const __initData = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
const __initData2 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData3 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
const __initData4 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx4(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
const __initData5 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx5(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData6 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx6(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let sharedValue1;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(9);
  let obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  sharedValue1 = obj3.useSharedValue(0);
  if (cResult[0] === sharedValue1) {
    if (cResult[1] === arg0) {
      let tmp6;
      let tmp7;
      if (cResult[2] === sharedValue) {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const effect = react.useEffect(tmp6, tmp7);
      const fn2 = function u() {
        let items;
        let obj2;
        let obj4;
        const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: items };
        obj2 = ReanimatedRexport;
        const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0, 1]) };
        items = [obj3];
        obj4 = ReanimatedRexport;
        return obj;
      };
      let obj4 = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
      const useAnimatedStyle = require("ReanimatedRexport").useAnimatedStyle;
      require("ReanimatedRexport");
      fn2.__closure = obj4;
      let num = 7750024112371;
      fn2.__workletHash = 7750024112371;
      fn2.__initData = __initData;
      const animatedStyle = useAnimatedStyle(fn2);
      const fn3 = function _() {
        let items;
        let obj2;
        let obj4;
        const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: items };
        obj2 = ReanimatedRexport;
        const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0.75, 1]) };
        items = [obj3];
        obj4 = ReanimatedRexport;
        return obj;
      };
      const obj5 = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
      const useAnimatedStyle2 = require("ReanimatedRexport").useAnimatedStyle;
      require("ReanimatedRexport");
      fn3.__closure = obj5;
      let num2 = 3400602564931;
      fn3.__workletHash = 3400602564931;
      fn3.__initData = __initData2;
      const animatedStyle2 = useAnimatedStyle2(fn3);
      const tmpResult4 = require("ReanimatedRexport");
      class S {
        constructor() {
          let obj2;
          const obj = { opacity: obj2.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
          obj2 = ReanimatedRexport;
          return obj;
        }
      }
      const useAnimatedStyle3 = tmpResult4.useAnimatedStyle;
      S.__closure = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
      S.__workletHash = 4092396015860;
      S.__initData = __initData3;
      const obj6 = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
      const animatedStyle3 = useAnimatedStyle3(S);
      if (cResult[5] === animatedStyle3) {
        if (cResult[6] === animatedStyle) {
          let tmp19;
          if (cResult[7] === animatedStyle2) {
            tmp19 = cResult[8];
          }
          return tmp19;
        }
      }
      const obj7 = { previewViewStyle: animatedStyle, textViewStyle: animatedStyle2, curtainViewStyle: animatedStyle3 };
      cResult[5] = animatedStyle3;
      cResult[6] = animatedStyle;
      cResult[7] = animatedStyle2;
      cResult[8] = obj7;
      tmp19 = obj7;
    }
  }
  const fn = function n() {
    let num = 1;
    set = sharedValue.set;
    if (!closure_0) {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj = spring;
      num = withDelay(c20, obj.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = set(num);
    let num2 = 1;
    set2 = sharedValue1.set;
    if (!closure_0) {
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = timing;
      num2 = withDelay2(c20, obj2.withTiming(1, { duration: 200 }));
    }
    set2(num2);
  };
  let items = [sharedValue, arg0, sharedValue1];
  cResult[0] = sharedValue1;
  cResult[1] = arg0;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  cResult[4] = items;
  tmp7 = items;
  tmp6 = fn;
}) : ((arg0) => {
  let closure_0;
  let fn;
  let fn2;
  let fn3;
  let obj4;
  let obj6;
  let obj8;
  let sharedValue1;
  _require = arg0;
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  let items = [sharedValue, arg0, sharedValue1];
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (!closure_0) {
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj = spring;
      num = withDelay(c20, obj.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = set(num);
    let num2 = 1;
    set2 = sharedValue1.set;
    if (!closure_0) {
      const withDelay2 = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj2 = timing;
      num2 = withDelay2(c20, obj2.withTiming(1, { duration: 200 }));
    }
    set2(num2);
  }, items);
  let obj3 = { previewViewStyle: obj4.useAnimatedStyle(fn), textViewStyle: obj6.useAnimatedStyle(fn2), curtainViewStyle: obj8.useAnimatedStyle(fn3) };
  obj4 = require("ReanimatedRexport");
  fn = function n() {
    let items;
    let obj2;
    let obj4;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: items };
    obj2 = ReanimatedRexport;
    const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0, 1]) };
    items = [obj3];
    obj4 = ReanimatedRexport;
    return obj;
  };
  fn.__closure = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  fn.__workletHash = 11689351950294;
  fn.__initData = __initData4;
  ({ interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue });
  fn2 = function l() {
    let items;
    let obj2;
    let obj4;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: items };
    obj2 = ReanimatedRexport;
    const obj3 = { scale: obj4.interpolate(sharedValue.get(), [0, 1], [0.75, 1]) };
    items = [obj3];
    obj4 = ReanimatedRexport;
    return obj;
  };
  obj6 = require("ReanimatedRexport");
  fn2.__closure = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  fn2.__workletHash = 15823058327140;
  fn2.__initData = __initData5;
  ({ interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue });
  fn3 = function c() {
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
    obj2 = ReanimatedRexport;
    return obj;
  };
  obj8 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 2263660325649;
  fn3.__initData = __initData6;
  ({ interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 });
  return obj3;
});
let closure_28 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
function useDrummingHapticFeedbacks() {

}
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let closeButtonIcon;
  let ctaIcon;
  let ctaLabel;
  let ctaLoading;
  let curtainViewStyle;
  let finePrint;
  let isScreenLandscape;
  let onClose;
  let onCtaPress;
  let previewViewStyle;
  let sku;
  let textViewStyle;
  let title;
  let tmp11;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let obj = require("react");
  const cResult = obj.c(112);
  ({ sku, title, body, finePrint, ctaLabel, ctaIcon, ctaLoading, onCtaPress, onClose } = arg0);
  const tmp4 = closure_17();
  _require = tmp4;
  const width = isScreenLandscape(1484)().width;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function _() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = require("get initialized");
  ({ previewViewStyle, textViewStyle, curtainViewStyle } = closure_27(tmpResult.useStateFromStores(tmp5, tmp6)));
  closure_27(tmpResult.useStateFromStores(tmp5, tmp6));
  const tmpResult2 = require("useIsScreenLandscape");
  isScreenLandscape = tmpResult2.useIsScreenLandscape();
  [tmp11, dependencyMap] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[2] !== isScreenLandscape) {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
    cResult[2] = isScreenLandscape;
    cResult[3] = M;
  } else {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
  }
  if (isScreenLandscape) {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
    if (null != tmp11) {
      class M {
        constructor(height) {
          const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
          dependencyMap(obj);
        }
      }
      if (tmp11.landscape === isScreenLandscape) {
        class M {
          constructor(height) {
            const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
            dependencyMap(obj);
          }
        }
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const bound = Math.max(120, Math.min(c19, Math.floor(tmp11.height - 32)));
      }
    }
  } else {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
  }
  if (cResult[4] !== sku) {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
    let cardBackgroundImageURL = obj5.getCardBackgroundImageURL(sku);
    if (cardBackgroundImageURL == null) {
      class M {
        constructor(height) {
          const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
          dependencyMap(obj);
        }
      }
      cardBackgroundImageURL = obj6.getCardImageURL(sku);
    }
    if (cardBackgroundImageURL != null) {
      class M {
        constructor(height) {
          const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
          dependencyMap(obj);
        }
      }
    }
    cResult[4] = sku;
    cResult[5] = undefined;
  } else {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
  }
  if (cResult[6] !== width) {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
    tmp19[0] = width;
    cResult[6] = width;
    cResult[7] = tmp19;
  } else {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
  }
  if (typeof useDrummingHapticFeedbacks === "function") {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
    _require = react.useRef(closure_28);
    const callback = react.useCallback(() => {
      const arr = first(ref.current);
      first = arr[0];
      const substr = arr.slice(1);
      if (null != first) {
        if (0 === substr.length) {
          const obj3 = sku(width[16]);
          const result = obj3.triggerHapticFeedback(sku(width[16]).HapticFeedbackTypes.IMPACT_HEAVY);
        }
        if (null != first) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(callback1, first);
        }
        ref.current = substr;
      }
      if (substr.length >= length.length / 2) {
        const obj2 = sku(width[16]);
        const result1 = obj2.triggerHapticFeedback(sku(width[16]).HapticFeedbackTypes.IMPACT_LIGHT);
      } else {
        const obj = sku(width[16]);
        const result2 = obj.triggerHapticFeedback(sku(width[16]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, []);
    const items1 = [callback];
    const effect = react.useEffect(() => {
      callback1();
      return () => {
        ref.current = [];
      };
    }, items1);
    if (cResult[8] === tmp4.messages) {
      class M {
        constructor(height) {
          const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
          dependencyMap(obj);
        }
      }
    }
    const items2 = [tmp4.messages, isScreenLandscape && tmp4.messagesLandscape, textViewStyle];
    cResult[8] = tmp4.messages;
    cResult[9] = isScreenLandscape && tmp4.messagesLandscape;
    cResult[10] = textViewStyle;
    cResult[11] = items2;
  } else {
    class M {
      constructor(height) {
        const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
        dependencyMap(obj);
      }
    }
    throw new TypeError("Trying to call a non-function");
  }
}) : ((sku) => {
  let Button;
  let HeaderBackButton;
  let body;
  let closeButtonIcon;
  let closure_5;
  let ctaIcon;
  let ctaLabel;
  let ctaLoading;
  let curtainViewStyle;
  let finePrint;
  let intl2;
  let items11;
  let items13;
  let items14;
  let items15;
  let items16;
  let items18;
  let items19;
  let items20;
  let items7;
  let obj10;
  let obj13;
  let obj17;
  let onClose;
  let onCtaPress;
  let previewViewStyle;
  let textViewStyle;
  let title;
  let tmp18Result4;
  let useReducedMotion;
  const f105251 = () => useReducedMotion.useReducedMotion;
  sku = sku.sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  let width;
  react = undefined;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = closure_17();
  importDefault = tmp;
  width = require("useWindowDimensions")().width;
  let obj = sku(width[18]);
  const items = [AccessibilityStore];
  ({ previewViewStyle, textViewStyle, curtainViewStyle } = closure_27(obj.useStateFromStores(items, f105251)));
  const tmp5 = closure_27(obj.useStateFromStores(items, f105251));
  let obj2 = sku(width[19]);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  let obj3 = react;
  const tmp7 = isScreenLandscape ? closure_13 : closure_14;
  const tmp8 = isScreenLandscape(react.useState(null), 2);
  let first = tmp8[0];
  react = tmp8[1];
  const items1 = [isScreenLandscape];
  const items2 = [isScreenLandscape, first];
  const callback = react.useCallback((height) => {
    const obj = { height: height.nativeEvent.layout.height, landscape: isScreenLandscape };
    closure_5(obj);
  }, items1);
  const memo = react.useMemo(() => {
    if (isScreenLandscape) {
      if (null != first) {
        if (first.landscape === tmp) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          return Math.max(120, Math.min(c19, Math.floor(first.height - 32)));
        }
      }
      return null;
    } else {
      return c19;
    }
  }, items2);
  const items3 = [sku];
  const memo1 = react.useMemo(() => {
    const obj = SlayerStorefrontUtils;
    let str = obj.getCardBackgroundImageURL(sku);
    if (str == null) {
      const tmpResult = SlayerStorefrontUtils;
      str = tmpResult.getCardImageURL(sku);
    }
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    return str1;
  }, items3);
  [][0] = width;
  if (typeof useDrummingHapticFeedbacks === "function") {
    let closure_0 = obj3.useRef(length);
    const callback1 = obj3.useCallback(() => {
      const arr = first(ref.current);
      first = arr[0];
      const substr = arr.slice(1);
      if (null != first) {
        if (0 === substr.length) {
          const obj3 = sku(width[16]);
          const result = obj3.triggerHapticFeedback(sku(width[16]).HapticFeedbackTypes.IMPACT_HEAVY);
        }
        if (null != first) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(callback1, first);
        }
        ref.current = substr;
      }
      if (substr.length >= length.length / 2) {
        const obj2 = sku(width[16]);
        const result1 = obj2.triggerHapticFeedback(sku(width[16]).HapticFeedbackTypes.IMPACT_LIGHT);
      } else {
        const obj = sku(width[16]);
        const result2 = obj.triggerHapticFeedback(sku(width[16]).HapticFeedbackTypes.IMPACT_MEDIUM);
      }
    }, []);
    const items4 = [callback1];
    const effect = obj3.useEffect(() => {
      callback1();
      return () => {
        ref.current = [];
      };
    }, items4);
    const items5 = [tmp.messages, , ];
    let messagesLandscape = isScreenLandscape;
    const View = tmp2(tmp3[13]).View;
    if (isScreenLandscape) {
      messagesLandscape = tmp.messagesLandscape;
    }
    const obj4 = { style: items5, children: items7 };
    items5[1] = messagesLandscape;
    items5[2] = textViewStyle;
    const items6 = [tmp.title, ];
    let textLandscape = isScreenLandscape;
    const Text = tmp4(tmp3[21]).Text;
    if (isScreenLandscape) {
      textLandscape = tmp.textLandscape;
    }
    const obj5 = { variant: "heading-xl/semibold", color: "text-overlay-light", style: items6, children: title };
    items6[1] = textLandscape;
    items7 = [closure_15(Text, obj5), ];
    const items8 = [tmp.description, ];
    let textLandscape2 = isScreenLandscape;
    const Text2 = tmp4(tmp3[21]).Text;
    if (isScreenLandscape) {
      textLandscape2 = tmp.textLandscape;
    }
    const obj6 = { variant: "text-md/medium", color: "text-overlay-light", style: items8, children: body };
    items8[1] = textLandscape2;
    items7[1] = closure_15(Text2, obj6);
    const tmp17Result = closure_16(View, obj4);
    const items9 = [tmp.footer, ];
    const obj7 = { style: items9, children: items11 };
    const tmp21 = isScreenLandscape && tmp.footerLandscape;
    items9[1] = tmp21;
    let tmp18Result = null != finePrint;
    if (tmp18Result) {
      const items10 = [tmp.finePrint, ];
      let textLandscape3 = isScreenLandscape;
      const Text3 = tmp4(tmp3[21]).Text;
      if (isScreenLandscape) {
        textLandscape3 = tmp.textLandscape;
      }
      const obj8 = { variant: "text-xs/normal", color: "text-overlay-light", style: items10, children: finePrint };
      items10[1] = textLandscape3;
      tmp18Result = closure_15(Text3, obj8);
    }
    items11 = [tmp18Result, ];
    const items12 = [tmp.cta, ];
    const tmp23 = isScreenLandscape && tmp.ctaLandscape;
    items12[1] = tmp23;
    const obj9 = { style: items12, children: closure_15(Button, obj10) };
    Button = tmp4(tmp3[23]).Button;
    if (onCtaPress == null) {
      onCtaPress = onClose;
    }
    obj10 = { onPress: onCtaPress, text: ctaLabel, icon: ctaIcon, loading: ctaLoading, size: "lg", grow: true };
    if (ctaLabel == null) {
      const intl = tmp4(tmp3[22]).intl;
      ctaLabel = intl.string(tmp4(tmp3[22]).t.cpT0Cq);
    }
    items11[1] = closure_15(closure_8, obj9);
    const tmp17Result3 = closure_16(closure_8, obj7);
    const obj11 = { style: items13, children: items14 };
    items13 = [tmp.root, tmp13];
    let tmp18Result3 = null != memo1;
    if (tmp18Result3) {
      const obj12 = { source: obj13, style: tmp.backdropImage, blurRadius: 4, resizeMode: "cover" };
      obj13 = { uri: memo1 };
      tmp18Result3 = closure_15(closure_6, obj12);
    }
    items14 = [tmp18Result3, , , ];
    const obj15 = { style: tmp.backdropGradient, start: null, end: null, locations: [0.4, 0.75, 1], colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"] };
    ({ START: obj14.start, END: obj14.end } = tmp7);
    items14[1] = closure_15(require("LinearGradient"), obj15);
    const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items15 };
    const obj16 = { style: tmp.header, children: closure_15(HeaderBackButton, obj17) };
    const SafeAreaPaddingView = tmp4(tmp3[28]).SafeAreaPaddingView;
    obj17 = {
      onPress: onClose,
      backImage() {
          const obj = { size: "lg", style: closeButtonIcon.closeButtonIcon };
          return closure_15(XSmallIcon.XSmallIcon, obj);
        },
      accessibilityLabel: intl2.string(sku(width[22]).t.cpT0Cq),
      displayMode: "minimal"
    };
    HeaderBackButton = tmp4(tmp3[26]).HeaderBackButton;
    intl2 = tmp4(tmp3[22]).intl;
    items15 = [closure_15(closure_8, obj16), , ];
    const obj18 = { style: tmp.scroll, contentContainerStyle: items16, onLayout: callback, alwaysBounceVertical: false, children: items18 };
    items16 = [tmp.body, ];
    const bodyLandscape = isScreenLandscape && tmp.bodyLandscape;
    items16[1] = bodyLandscape;
    const items17 = [tmp.preview, , ];
    let previewLandscape = isScreenLandscape;
    const View2 = tmp2(tmp3[13]).View;
    if (isScreenLandscape) {
      previewLandscape = tmp.previewLandscape;
    }
    const obj19 = { style: items17, children: tmp18Result4 };
    items17[1] = previewLandscape;
    items17[2] = previewViewStyle;
    tmp18Result4 = null != memo;
    if (tmp18Result4) {
      const obj20 = { sku, size: memo };
      tmp18Result4 = closure_15(tmp2(tmp3[27]), obj20);
    }
    items18 = [closure_15(View2, obj19), ];
    let tmp17Result4 = tmp17Result;
    if (isScreenLandscape) {
      const obj21 = { style: tmp.contentColumnLandscape, children: items19 };
      items19 = [tmp17Result, tmp17Result3];
      tmp17Result4 = closure_16(closure_8, obj21);
    }
    items18[1] = tmp17Result4;
    items15[1] = closure_16(closure_7, obj18);
    items15[2] = !isScreenLandscape && tmp17Result3;
    items14[2] = closure_16(SafeAreaPaddingView, rect);
    const obj22 = { style: items20, pointerEvents: "none" };
    items20 = [tmp.curtain, curtainViewStyle];
    items14[3] = closure_15(require("ReanimatedRexport").View, obj22);
    return closure_16(closure_8, obj11);
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let analyticsLocations;
  let fetched;
  let first;
  let onClose;
  let tmp20;
  let tmp21;
  let tmp30;
  let tmp8;
  let obj = skuId(fetched[12]);
  const cResult = obj.c(55);
  skuId = skuId.skuId;
  ({ analyticsLocations, onClose } = skuId);
  closure_18();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SKUStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== skuId) {
    const fn = function l() {
      return SKUStore.get(skuId);
    };
    cResult[1] = skuId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmp2Result = skuId(fetched[18]);
  const stateFromStores = tmp2Result.useStateFromStores(first, tmp8);
  let applicationId;
  const useGetOrFetchApplication = skuId(fetched[29]).useGetOrFetchApplication;
  skuId(fetched[29]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = useGetOrFetchApplication(applicationId);
  let tmp15 = getOrFetchApplication;
  const tmp13 = stateFromStores;
  const tmp14 = stateFromStores(fetched[30]);
  if (getOrFetchApplication == null) {
    tmp15 = null;
  }
  const tmp14Result = tmp14(tmp15);
  fetched = tmp14Result.fetched;
  const hasAlreadyLinked = tmp14Result.hasAlreadyLinked;
  const canStartAuthorization = tmp14Result.canStartAuthorization;
  const startAuthorization = tmp14Result.startAuthorization;
  let applicationId1;
  const useSocialLayerStorefrontMobileAccountLinkingDisabled = skuId(fetched[31]).useSocialLayerStorefrontMobileAccountLinkingDisabled;
  skuId(fetched[31]);
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  const socialLayerStorefrontMobileAccountLinkingDisabled = useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  if (cResult[3] !== analyticsLocations) {
    let items1 = analyticsLocations;
    if (analyticsLocations == null) {
      items1 = [];
    }
    cResult[3] = analyticsLocations;
    cResult[4] = items1;
    tmp20 = items1;
  } else {
    tmp20 = cResult[4];
  }
  if (cResult[5] !== tmp20) {
    const items2 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, tmp20, 0);
    items2[arraySpreadResult] = tmp13(fetched[32]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS;
    cResult[5] = tmp20;
    cResult[6] = items2;
    tmp21 = items2;
  } else {
    tmp21 = cResult[6];
  }
  location_stack = tmp21;
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  if (cResult[7] === tmp21) {
    if (cResult[8] === canStartAuthorization) {
      if (cResult[9] === skuId) {
        let tmp26;
        let tmp28;
        if (cResult[10] === applicationId2) {
          tmp26 = cResult[11];
        }
        const ref = startAuthorization.useRef(tmp26);
        if (cResult[12] !== canStartAuthorization) {
          class O {
            constructor() {
              ref.current.canStartAuthorization = canStartAuthorization;
            }
          }
          const items3 = [canStartAuthorization];
          cResult[12] = canStartAuthorization;
          class H {
            constructor() {
              let analyticsLocations;
              let applicationId;
              if (fetched) {
                ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
                const obj2 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
                const obj = AnalyticsUtilsDefault;
                obj.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj2);
              }
            }
          }
          cResult[14] = items3;
          tmp28 = items3;
        } else {
          class O {
            constructor() {
              ref.current.canStartAuthorization = canStartAuthorization;
            }
          }
          tmp28 = cResult[14];
        }
        const effect = obj4.useEffect(O, tmp28);
        if (cResult[15] === fetched) {
          class O {
            constructor() {
              ref.current.canStartAuthorization = canStartAuthorization;
            }
          }
          const effect1 = obj4.useEffect(H, tmp30);
          if (cResult[19] === tmp21) {
            class O {
              constructor() {
                ref.current.canStartAuthorization = canStartAuthorization;
              }
            }
            const tmp33 = cResult[20];
            if (stateFromStores != null) {
              class O {
                constructor() {
                  ref.current.canStartAuthorization = canStartAuthorization;
                }
              }
            }
            if (tmp33 === tmp34) {
              class O {
                constructor() {
                  ref.current.canStartAuthorization = canStartAuthorization;
                }
              }
            }
          }
          cResult[19] = tmp21;
          class H {
            constructor() {
              let analyticsLocations;
              let applicationId;
              if (fetched) {
                ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
                const obj2 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
                const obj = AnalyticsUtilsDefault;
                obj.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj2);
              }
            }
          }
          const fn2 = function z() {
            let applicationId;
            const obj = { location_stack, sku_id: skuId, application_id: applicationId, is_gift: false };
            applicationId = undefined;
            const track = AnalyticsUtilsDefault.track;
            const SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED = constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED;
            AnalyticsUtilsDefault;
            if (stateFromStores != null) {
              applicationId = stateFromStores.applicationId;
            }
            track(SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
            startAuthorization({ analyticsLocations: location_stack });
          };
          cResult[20] = undefined;
          cResult[21] = skuId;
          cResult[22] = startAuthorization;
          cResult[23] = fn2;
        }
        class H {
          constructor() {
            let analyticsLocations;
            let applicationId;
            if (fetched) {
              ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
              const obj2 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
              const obj = AnalyticsUtilsDefault;
              obj.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj2);
            }
          }
        }
        const items4 = [fetched, hasAlreadyLinked];
        cResult[15] = fetched;
        cResult[16] = hasAlreadyLinked;
        cResult[17] = items4;
        cResult[18] = H;
        tmp30 = items4;
      }
    }
  }
  let obj2 = { analyticsLocations: tmp21, skuId, applicationId: applicationId2, canStartAuthorization };
  cResult[7] = tmp21;
  cResult[8] = canStartAuthorization;
  cResult[9] = skuId;
  cResult[10] = applicationId2;
  cResult[11] = obj2;
  tmp26 = obj2;
}) : ((skuId) => {
  let analyticsLocations;
  let applicationId2;
  let orbsReward;
  let stringResult;
  let stringResult1;
  let tmp29Result;
  let tmp33;
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
  let closure_10;
  const onClose = skuId.onClose;
  let tmp = closure_18();
  let obj = skuId(stateFromStores[18]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(skuId));
  let applicationId;
  const useGetOrFetchApplication = skuId(stateFromStores[29]).useGetOrFetchApplication;
  const tmp5 = skuId(stateFromStores[29]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  const tmp9 = analyticsLocations(stateFromStores[30]);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  const tmp9Result = tmp9(tmp10);
  fetched = tmp9Result.fetched;
  hasAlreadyLinked = tmp9Result.hasAlreadyLinked;
  canStartAuthorization = tmp9Result.canStartAuthorization;
  startAuthorization = tmp9Result.startAuthorization;
  let applicationId1;
  const useSocialLayerStorefrontMobileAccountLinkingDisabled = skuId(stateFromStores[31]).useSocialLayerStorefrontMobileAccountLinkingDisabled;
  skuId(stateFromStores[31]);
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  let obj2 = hasAlreadyLinked;
  let items1 = [analyticsLocations];
  const socialLayerStorefrontMobileAccountLinkingDisabled = useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  memo = hasAlreadyLinked.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  let obj3 = { analyticsLocations: memo, skuId, applicationId: applicationId2, canStartAuthorization };
  applicationId2 = undefined;
  const useRef = hasAlreadyLinked.useRef;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  ref = useRef(obj3);
  const items2 = [canStartAuthorization];
  const effect = obj2.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items2);
  const items3 = [fetched, hasAlreadyLinked];
  const effect1 = obj2.useEffect(() => {
    let applicationId;
    if (fetched) {
      ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
      const obj2 = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj2);
    }
  }, items3);
  const items4 = [startAuthorization, memo, skuId, ];
  let applicationId3;
  const useCallback = obj2.useCallback;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items4[3] = applicationId3;
  const callback = useCallback(() => {
    let applicationId;
    const obj = { location_stack: memo, sku_id: skuId, application_id: applicationId, is_gift: false };
    applicationId = undefined;
    const track = AnalyticsUtilsDefault.track;
    const SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED = constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED;
    AnalyticsUtilsDefault;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
    startAuthorization({ analyticsLocations: memo });
  }, items4);
  analyticsLocations(stateFromStores[35])(() => {
    let applicationId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = constants.OPEN_MODAL;
    const obj = { location_stack: memo, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId, application_id: applicationId };
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(OPEN_MODAL, obj);
  });
  let intl = tmp2(tmp3[22]).intl;
  const string = intl.string;
  if (hasAlreadyLinked) {
    stringResult = string(tmp2(tmp3[22]).t["5glWta"]);
  } else {
    stringResult = string(analyticsLocations(tmp3[36]).bRPsNX);
  }
  closure_10 = tmp23;
  const items5 = [hasAlreadyLinked, !hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled, , ];
  let name;
  const useMemo = obj2.useMemo;
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
  const memo1 = useMemo(() => {
    let formatToPlainString2Result;
    let str3;
    let str5;
    if (hasAlreadyLinked) {
      const intl2 = intl4.intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      let str4;
      const W2znvX = intl4.t.W2znvX;
      if (stateFromStores != null) {
        str4 = stateFromStores.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      const obj2 = { skuName: str4, applicationName: str5 };
      str5 = undefined;
      if (getOrFetchApplication != null) {
        str5 = getOrFetchApplication.name;
      }
      if (str5 == null) {
        str5 = "";
      }
      formatToPlainString2Result = formatToPlainString2(W2znvX, obj2);
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      if (closure_10) {
        let str2;
        const prop = intl4.t["EgCl+Q"];
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj3 = { skuName: str2, applicationName: str3 };
        str3 = undefined;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        formatToPlainString2Result = formatToPlainString(prop, obj3);
      } else {
        let str;
        const eNNnIG = _modDef3623.eNNnIG;
        if (getOrFetchApplication != null) {
          str = getOrFetchApplication.name;
        }
        if (str == null) {
          str = "";
        }
        const obj = { applicationName: str };
        formatToPlainString2Result = formatToPlainString(eNNnIG, obj);
      }
    }
    return formatToPlainString2Result;
  }, items5);
  if (!hasAlreadyLinked) {
    let intl2 = tmp2(tmp3[22]).intl;
    const obj4 = { numDays };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.TTj7ME, obj4);
  }
  const obj5 = { sku: stateFromStores, title: stringResult, body: memo1, finePrint: formatToPlainStringResult, ctaLabel: stringResult1, ctaIcon: tmp29Result, ctaLoading: !fetched, onCtaPress: tmp33, onClose };
  stringResult1 = undefined;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    const intl3 = tmp2(tmp3[22]).intl;
    stringResult1 = intl3.string(tmp2(tmp3[22]).t["VDAhr+"]);
  }
  tmp29Result = undefined;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    const obj6 = { size: "xs", color: analyticsLocations(stateFromStores[10]).colors.WHITE, style: tmp.linkAccountIcon };
    const ExperimentalGameControllerLinkIcon = tmp2(tmp3[37]).ExperimentalGameControllerLinkIcon;
    tmp29Result = closure_15(ExperimentalGameControllerLinkIcon, obj6);
  }
  tmp33 = undefined;
  if (!hasAlreadyLinked && canStartAuthorization && !socialLayerStorefrontMobileAccountLinkingDisabled) {
    tmp33 = callback;
  }
  return closure_15(closure_30, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let analyticsLocations;
  let first;
  let onClose;
  let stateFromStores;
  let tmp11;
  let tmp7;
  let tmp9;
  let obj = skuId(stateFromStores[12]);
  const cResult = obj.c(21);
  skuId = skuId.skuId;
  const recipient = skuId.recipient;
  ({ analyticsLocations, onClose } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SKUStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== skuId) {
    const fn = function o() {
      return SKUStore.get(skuId);
    };
    cResult[1] = skuId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmp2Result = skuId(stateFromStores[18]);
  stateFromStores = tmp2Result.useStateFromStores(first, tmp7);
  if (cResult[3] !== analyticsLocations) {
    let items1 = analyticsLocations;
    if (analyticsLocations == null) {
      items1 = [];
    }
    cResult[3] = analyticsLocations;
    cResult[4] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== tmp9) {
    const items2 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items2, tmp9, 0);
    items2[arraySpreadResult] = recipient(stateFromStores[32]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS;
    cResult[5] = tmp9;
    cResult[6] = items2;
    tmp11 = items2;
  } else {
    tmp11 = cResult[6];
  }
  location_stack = tmp11;
  if (cResult[7] === tmp11) {
    let applicationId;
    const tmp16 = cResult[8];
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    if (tmp16 === applicationId) {
      let tmp19;
      let tmp23;
      if (cResult[9] === skuId) {
        tmp19 = cResult[10];
      }
      recipient(stateFromStores[35])(tmp19);
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp2(tmp3[22]).intl;
        const stringResult = intl.string(skuId(stateFromStores[22]).t["5glWta"]);
        cResult[11] = stringResult;
        tmp23 = stringResult;
      } else {
        tmp23 = cResult[11];
      }
      if (cResult[12] === recipient) {
        let tmp28;
        let tmp31;
        let name;
        const tmp25 = cResult[13];
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        if (tmp25 === name) {
          tmp28 = cResult[14];
        }
        if (cResult[15] !== tmp28) {
          const tmp28Result = tmp28();
          cResult[15] = tmp28;
          cResult[16] = tmp28Result;
          tmp31 = tmp28Result;
        } else {
          tmp31 = cResult[16];
        }
        if (cResult[17] === tmp31) {
          if (cResult[18] === onClose) {
            let tmp33;
            if (cResult[19] === stateFromStores) {
              tmp33 = cResult[20];
            }
            return tmp33;
          }
        }
        let obj2 = { sku: stateFromStores, title: tmp23, body: null, onClose };
        class T {
          constructor() {
            let str;
            const intl = intl4.intl;
            const formatToPlainString = intl.formatToPlainString;
            let name;
            const v2VjPTw = intl4.t["2VjPTw"];
            if (stateFromStores != null) {
              name = stateFromStores.name;
            }
            const obj = { itemName: name, giftRecipient: str };
            const obj2 = UserUtilsDefault;
            str = obj2.getName(recipient);
            if (str == null) {
              str = "your recipient";
            }
            return formatToPlainString(v2VjPTw, obj);
          }
        }
        const tmp36 = closure_15(closure_30, obj2);
        cResult[17] = tmp31;
        cResult[18] = onClose;
        cResult[19] = stateFromStores;
        cResult[20] = tmp36;
        tmp33 = tmp36;
      }
      cResult[12] = recipient;
      let name1;
      if (stateFromStores != null) {
        name1 = stateFromStores.name;
      }
      class T {
        constructor() {
          let str;
          const intl = intl4.intl;
          const formatToPlainString = intl.formatToPlainString;
          let name;
          const v2VjPTw = intl4.t["2VjPTw"];
          if (stateFromStores != null) {
            name = stateFromStores.name;
          }
          const obj = { itemName: name, giftRecipient: str };
          const obj2 = UserUtilsDefault;
          str = obj2.getName(recipient);
          if (str == null) {
            str = "your recipient";
          }
          return formatToPlainString(v2VjPTw, obj);
        }
      }
      cResult[13] = name1;
      cResult[14] = T;
      tmp28 = T;
    }
  }
  cResult[7] = tmp11;
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  class I {
    constructor() {
      let applicationId;
      const tmp = AnalyticsUtilsDefault;
      const track = tmp.track;
      const OPEN_MODAL = constants.OPEN_MODAL;
      const obj = { location_stack, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId, application_id: applicationId };
      applicationId = undefined;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      track(OPEN_MODAL, obj);
    }
  }
  cResult[8] = applicationId1;
  cResult[9] = skuId;
  cResult[10] = I;
  tmp19 = I;
}) : ((analyticsLocations) => {
  let orbsReward;
  let recipient;
  let require;
  let sku_id;
  ({ skuId: require, orbsReward, recipient } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  const onClose = analyticsLocations.onClose;
  let obj = require("get initialized");
  let items = [SKUStore];
  const stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(require));
  let items1 = [analyticsLocations];
  location_stack = react.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  recipient(analyticsLocations[35])(() => {
    let applicationId;
    const tmp = AnalyticsUtilsDefault;
    const track = tmp.track;
    const OPEN_MODAL = constants.OPEN_MODAL;
    const obj = { location_stack, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id: require, application_id: applicationId };
    applicationId = undefined;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    track(OPEN_MODAL, obj);
  });
  let intl = require("intl").intl;
  let name;
  const useMemo = react.useMemo;
  const stringResult = intl.string(require("intl").t["5glWta"]);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items2 = [name, recipient];
  let obj2 = {
    sku: stateFromStores,
    title: stringResult,
    body: useMemo(() => {
      let str;
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      let name;
      const v2VjPTw = intl4.t["2VjPTw"];
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      const obj = { itemName: name, giftRecipient: str };
      const obj2 = UserUtilsDefault;
      str = obj2.getName(recipient);
      if (str == null) {
        str = "your recipient";
      }
      return formatToPlainString(v2VjPTw, obj);
    }, items2),
    onClose
  };
  return closure_15(closure_30, obj2);
});
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx");

export const SocialLayerStorefrontProductSelfPurchaseSuccessModal = tmp6;
export const SocialLayerStorefrontProductGiftPurchaseSuccessModal = tmp7;