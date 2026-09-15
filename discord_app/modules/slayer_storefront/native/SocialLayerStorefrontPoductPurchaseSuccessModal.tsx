// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef3461 from "../intl/SlayerStorefront.messages.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _toArray from "../../../../_runtime/00718__toArray.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";

const require = globalThis.__r;

require = fn;
function PurchaseSuccessModalBase(sku) {
  sku = sku.sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  importDefault = undefined;
  let callback1;
  let isScreenLandscape;
  first = undefined;
  closure_7 = undefined;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = closure_17();
  _slicedToArray = tmp;
  const width = require("useWindowDimensions")().width;
  let items = [AccessibilityStore];
  const stateFromStores = sku(callback1[16]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  closure_129_0 = stateFromStores;
  let obj = sku(callback1[16]);
  const sharedValue = sku(callback1[11]).useSharedValue(0);
  closure_129_1 = sharedValue;
  let obj2 = sku(callback1[11]);
  const sharedValue1 = sku(callback1[11]).useSharedValue(0);
  closure_129_2 = sharedValue1;
  const items1 = [sharedValue, stateFromStores, sharedValue1];
  const effect = isScreenLandscape.useEffect(() => {
    let num = 1;
    if (!sku) {
      const obj = ReanimatedRexport;
      num = obj.withDelay(200, spring.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = closure_1.set(num);
    let num3 = 1;
    if (!sku) {
      const obj3 = ReanimatedRexport;
      num3 = obj3.withDelay(200, timing.withTiming(1, { duration: 200 }));
    }
    const result1 = callback1.set(num3);
  }, items1);
  let obj3 = sku(callback1[11]);
  const fn = function n() {
    const obj = { opacity: ReanimatedRexport.interpolate(closure_1.get(), [0, 1], [0.1, 1]), transform: null };
    const obj3 = { scale: null };
    obj3.scale = ReanimatedRexport.interpolate(closure_1.get(), [0, 1], [0, 1]);
    const items = [obj3];
    obj.transform = items;
    return obj;
  };
  const obj5 = sku(callback1[11]);
  fn.__closure = { interpolate: sku(callback1[11]).interpolate, springInput: sharedValue };
  fn.__workletHash = 7750024112371;
  fn.__initData = __initData;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = { interpolate: sku(callback1[11]).interpolate, springInput: sharedValue };
  const fn2 = function s() {
    const obj = { opacity: ReanimatedRexport.interpolate(closure_1.get(), [0, 1], [0, 1]), transform: null };
    const obj3 = { scale: null };
    obj3.scale = ReanimatedRexport.interpolate(closure_1.get(), [0, 1], [0.75, 1]);
    const items = [obj3];
    obj.transform = items;
    return obj;
  };
  const obj7 = sku(callback1[11]);
  fn2.__closure = { interpolate: sku(callback1[11]).interpolate, springInput: sharedValue };
  fn2.__workletHash = 3400602564931;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj7.useAnimatedStyle(fn2);
  const obj8 = { interpolate: sku(callback1[11]).interpolate, springInput: sharedValue };
  const fn3 = function c() {
    const obj = { opacity: ReanimatedRexport.interpolate(callback1.get(), [0, 1], [0.5, 0]) };
    return obj;
  };
  const obj9 = sku(callback1[11]);
  fn3.__closure = { interpolate: sku(callback1[11]).interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 4092396015860;
  fn3.__initData = __initData3;
  const animatedStyle2 = obj9.useAnimatedStyle(fn3);
  const obj10 = { interpolate: sku(callback1[11]).interpolate, linearInput: sharedValue1 };
  isScreenLandscape = sku(callback1[17]).useIsScreenLandscape();
  const tmp13 = isScreenLandscape ? closure_13 : closure_14;
  [first, closure_7] = isScreenLandscape.useState(null);
  const items2 = [isScreenLandscape];
  const items3 = [isScreenLandscape, first];
  const callback = obj4.useCallback((height) => {
    closure_7({ height: height.nativeEvent.layout.height, landscape: isScreenLandscape });
  }, items2);
  const memo = obj4.useMemo(() => {
    if (isScreenLandscape) {
      if (null != first) {
        if (first.landscape === tmp) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          return Math.max(120, Math.min(250, Math.floor(first.height - 32)));
        }
      }
      return null;
    } else {
      return 250;
    }
  }, items3);
  const items4 = [sku];
  const memo1 = obj4.useMemo(() => {
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
  }, items4);
  const items5 = [width];
  const memo2 = obj4.useMemo(() => ({ width }), items5);
  importDefault = obj4.useRef(length);
  callback1 = obj4.useCallback(() => {
    const arr = _toArray(closure_1.current);
    first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback1, first);
      }
      closure_1.current = substr;
    }
    if (substr.length >= length.length / 2) {
      const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    } else {
      const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    }
  }, []);
  const items6 = [callback1];
  const effect1 = obj4.useEffect(() => {
    callback1();
    return () => {
      closure_1_1.current = [];
    };
  }, items6);
  const items7 = [tmp.messages, ,];
  let messagesLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    messagesLandscape = tmp.messagesLandscape;
  }
  const obj12 = { style: items7, children: null };
  items7[1] = messagesLandscape;
  items7[2] = animatedStyle1;
  const items8 = [tmp.title];
  let textLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    textLandscape = tmp.textLandscape;
  }
  items8[1] = textLandscape;
  const items9 = [
    closure_15(sku(callback1[19]).Text, {
      variant: "heading-xl/semibold",
      color: "text-overlay-light",
      style: items8,
      children: title,
    }),
  ];
  const items10 = [tmp.description];
  let textLandscape2 = isScreenLandscape;
  if (isScreenLandscape) {
    textLandscape2 = tmp.textLandscape;
  }
  items10[1] = textLandscape2;
  items9[1] = closure_15(sku(callback1[19]).Text, {
    variant: "text-md/medium",
    color: "text-overlay-light",
    style: items10,
    children: body,
  });
  obj12.children = items9;
  const tmp22Result = closure_16(require("ReanimatedRexport").View, obj12);
  const items11 = [tmp.footer];
  let footerLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    footerLandscape = tmp.footerLandscape;
  }
  const obj13 = { style: items11, children: null };
  items11[1] = footerLandscape;
  let tmp23Result = null != finePrint;
  if (tmp23Result) {
    const items12 = [tmp.finePrint];
    let textLandscape3 = isScreenLandscape;
    if (isScreenLandscape) {
      textLandscape3 = tmp.textLandscape;
    }
    const obj14 = { variant: "text-xs/normal", color: "text-overlay-light", style: null, children: null };
    items12[1] = textLandscape3;
    obj14.style = items12;
    obj14.children = finePrint;
    tmp23Result = closure_15(tmp4(tmp3[19]).Text, obj14);
  }
  const items13 = [tmp23Result];
  const items14 = [tmp.cta];
  let ctaLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    ctaLandscape = tmp.ctaLandscape;
  }
  const obj15 = { style: items14, children: null };
  items14[1] = ctaLandscape;
  if (onCtaPress == null) {
    onCtaPress = onClose;
  }
  const obj16 = { onPress: onCtaPress, text: null, icon: null, loading: null, size: "lg", grow: true };
  if (ctaLabel == null) {
    const intl = tmp4(tmp3[21]).intl;
    ctaLabel = intl.string(tmp4(tmp3[21]).t.cpT0Cq);
  }
  obj16.text = ctaLabel;
  obj16.icon = ctaIcon;
  obj16.loading = ctaLoading;
  obj15.children = closure_15(sku(callback1[20]).Button, obj16);
  items13[1] = closure_15(closure_8, obj15);
  obj13.children = items13;
  const tmp22Result3 = closure_16(closure_8, obj13);
  const obj17 = { style: null, children: null };
  const items15 = [tmp.root, memo2];
  obj17.style = items15;
  let tmp23Result3 = null != memo1;
  if (tmp23Result3) {
    const obj18 = { source: null, style: null, blurRadius: 4, resizeMode: "cover" };
    const obj19 = { uri: memo1 };
    obj18.source = obj19;
    obj18.style = tmp.backdropImage;
    tmp23Result3 = closure_15(first, obj18);
  }
  const items16 = [
    tmp23Result3,
    closure_15(require("LinearGradient"), {
      style: tmp.backdropGradient,
      start: tmp13.START,
      end: tmp13.END,
      locations: [0.4, 0.75, 1],
      colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"],
    }),
    ,
  ];
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  const obj21 = { style: tmp.header, children: null };
  const obj22 = {
    onPress: onClose,
    backImage() {
      return __initData(XSmallIcon.XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    },
    accessibilityLabel: null,
    displayMode: "minimal",
  };
  const intl2 = tmp4(tmp3[21]).intl;
  obj22.accessibilityLabel = intl2.string(sku(callback1[21]).t.cpT0Cq);
  obj21.children = closure_15(sku(callback1[24]).HeaderBackButton, obj22);
  const items17 = [closure_15(closure_8, obj21), ,];
  const obj23 = {
    style: tmp.scroll,
    contentContainerStyle: null,
    onLayout: null,
    alwaysBounceVertical: false,
    children: null,
  };
  const items18 = [tmp.body];
  let bodyLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    bodyLandscape = tmp.bodyLandscape;
  }
  items18[1] = bodyLandscape;
  obj23.contentContainerStyle = items18;
  obj23.onLayout = callback;
  const items19 = [tmp.preview, ,];
  let previewLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    previewLandscape = tmp.previewLandscape;
  }
  const obj24 = { style: items19, children: null };
  items19[1] = previewLandscape;
  items19[2] = animatedStyle;
  let tmp23Result4 = null != memo;
  if (tmp23Result4) {
    const obj25 = { sku, size: memo };
    tmp23Result4 = closure_15(tmp2(tmp3[26]), obj25);
  }
  obj24.children = tmp23Result4;
  const items20 = [closure_15(require("ReanimatedRexport").View, obj24)];
  let tmp22Result4 = tmp22Result;
  if (isScreenLandscape) {
    const obj26 = { style: tmp.contentColumnLandscape, children: null };
    const items21 = [tmp22Result, tmp22Result3];
    obj26.children = items21;
    tmp22Result4 = closure_16(closure_8, obj26);
  }
  items20[1] = tmp22Result4;
  obj23.children = items20;
  items17[1] = closure_16(closure_7, obj23);
  let tmp33 = !isScreenLandscape;
  if (!isScreenLandscape) {
    tmp33 = tmp22Result3;
  }
  items17[2] = tmp33;
  rect.children = items17;
  items16[2] = closure_16(sku(callback1[23]).SafeAreaPaddingView, rect);
  const obj27 = { style: null, pointerEvents: "none" };
  const items22 = [tmp.curtain, animatedStyle2];
  obj27.style = items22;
  items16[3] = closure_15(require("ReanimatedRexport").View, obj27);
  obj17.children = items16;
  return closure_16(closure_8, obj17);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const numDays = fn(7336).SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, HorizontalGradient: map1, VerticalGradient: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let createStyles = fn(4639);
let obj2 = {
  root: { flex: 1, backgroundColor: nativeDefault.colors.BLACK },
  backdropImage: { position: "absolute", inset: 0, opacity: 0.45 },
  backdropGradient: { position: "absolute", inset: 0 },
  curtain: null,
  main: null,
  header: null,
  closeButtonIcon: null,
  scroll: null,
  body: null,
  bodyLandscape: null,
  preview: null,
  previewLandscape: null,
  messages: null,
  messagesLandscape: null,
  contentColumnLandscape: null,
  title: null,
  description: null,
  textLandscape: null,
  footer: null,
  footerLandscape: null,
  cta: null,
  ctaLandscape: null,
  finePrint: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
obj2.curtain = { position: "absolute", inset: 0, backgroundColor: nativeDefault.colors.BLACK };
obj2.main = { flex: 1 };
let obj4 = { position: "absolute", inset: 0, backgroundColor: nativeDefault.colors.BLACK };
obj2.header = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj5 = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.closeButtonIcon = { tintColor: nativeDefault.colors.WHITE };
obj2.scroll = { flex: 1 };
obj2.body = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
obj2.bodyLandscape = { flexDirection: "row", alignItems: "center" };
obj2.preview = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
obj2.previewLandscape = { flex: 1 };
let obj6 = { tintColor: nativeDefault.colors.WHITE };
obj2.messages = {
  paddingTop: nativeDefault.space.PX_24,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: nativeDefault.space.PX_8,
};
obj2.messagesLandscape = { paddingTop: 0, alignItems: "stretch" };
obj2.contentColumnLandscape = { flex: 1 };
let obj7 = {
  paddingTop: nativeDefault.space.PX_24,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: nativeDefault.space.PX_8,
};
obj2.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
let obj8 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
obj2.description = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
let obj9 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
obj2.textLandscape = { marginHorizontal: nativeDefault.space.PX_16, textAlign: "left" };
let obj10 = { marginHorizontal: nativeDefault.space.PX_16, textAlign: "left" };
obj2.footer = { marginBottom: nativeDefault.space.PX_16 };
const obj11 = { marginBottom: nativeDefault.space.PX_16 };
obj2.footerLandscape = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
let obj12 = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
obj2.cta = { marginHorizontal: nativeDefault.space.PX_24 };
let obj13 = { marginHorizontal: nativeDefault.space.PX_24 };
obj2.ctaLandscape = { marginHorizontal: nativeDefault.space.PX_16 };
let obj14 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.finePrint = {
  textAlign: "center",
  marginHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_12,
};
let closure_17 = createStyles.createStyles(obj2);
createStyles = fn(4639);
let obj17 = { linkAccountIcon: null };
let obj15 = {
  textAlign: "center",
  marginHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_12,
};
obj17.linkAccountIcon = { marginRight: nativeDefault.space.PX_4 };
let closure_18 = createStyles.createStyles(obj17);
const __initData = {
  code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}",
};
const __initData2 = {
  code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}",
};
const __initData3 = {
  code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}",
};
let closure_22 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx",
);

export const SocialLayerStorefrontProductSelfPurchaseSuccessModal =
  function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
    skuId = skuId.skuId;
    ({ orbsReward, analyticsLocations } = skuId);
    let stateFromStores;
    let getOrFetchApplication;
    let fetched;
    let hasAlreadyLinked;
    let canStartAuthorization;
    let startAuthorization;
    let memo;
    closure_10 = undefined;
    const tmp = closure_18();
    let items = [closure_10];
    stateFromStores = skuId(stateFromStores[16]).useStateFromStores(items, () => SKUStore.get(skuId));
    let obj = skuId(stateFromStores[16]);
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    getOrFetchApplication = skuId(stateFromStores[27]).useGetOrFetchApplication(applicationId);
    let tmp9 = getOrFetchApplication;
    let obj2 = skuId(stateFromStores[27]);
    if (getOrFetchApplication == null) {
      tmp9 = null;
    }
    const tmp8Result = analyticsLocations(stateFromStores[28])(tmp9);
    fetched = tmp8Result.fetched;
    hasAlreadyLinked = tmp8Result.hasAlreadyLinked;
    canStartAuthorization = tmp8Result.canStartAuthorization;
    startAuthorization = tmp8Result.startAuthorization;
    const tmp8 = analyticsLocations(stateFromStores[28]);
    let applicationId1;
    if (stateFromStores != null) {
      applicationId1 = stateFromStores.applicationId;
    }
    let items1 = [analyticsLocations];
    const socialLayerStorefrontMobileAccountLinkingDisabled = skuId(
      stateFromStores[29],
    ).useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
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
    hasAlreadyLinked.useRef(obj3);
    const items2 = [canStartAuthorization];
    const effect = obj4.useEffect(() => {
      ref.current.canStartAuthorization = canStartAuthorization;
    }, items2);
    const items3 = [fetched, hasAlreadyLinked];
    const effect1 = obj4.useEffect(() => {
      if (fetched) {
        ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
        const obj2 = {
          location_stack: analyticsLocations,
          sku_id: skuId,
          application_id: applicationId,
          is_gift: false,
          is_account_linked: hasAlreadyLinked,
          can_start_authorization: canStartAuthorization,
        };
        AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj2);
      }
    }, items3);
    const items4 = [startAuthorization, memo, skuId];
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
    analyticsLocations(stateFromStores[32])(() => {
      const obj2 = {
        location_stack: memo,
        type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY,
        sku_id: skuId,
        application_id: null,
      };
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      obj2.application_id = applicationId;
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
    });
    let intl = tmp2(tmp3[21]).intl;
    const string = intl.string;
    if (hasAlreadyLinked) {
      let stringResult = string(tmp2(tmp3[21]).t["5glWta"]);
    } else {
      stringResult = string(analyticsLocations(tmp3[34]).bRPsNX);
    }
    let tmp21 = !hasAlreadyLinked;
    if (!hasAlreadyLinked) {
      tmp21 = canStartAuthorization;
    }
    if (tmp21) {
      tmp21 = !socialLayerStorefrontMobileAccountLinkingDisabled;
    }
    closure_10 = tmp21;
    const items5 = [hasAlreadyLinked, tmp21, ,];
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
          formatToPlainStringResult = formatToPlainString(_modDef3461.eNNnIG, obj);
        }
      }
      return formatToPlainStringResult;
    }, items5);
    if (!hasAlreadyLinked) {
      let intl2 = tmp2(tmp3[21]).intl;
      const obj5 = { numDays };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[21]).t.TTj7ME, obj5);
    }
    const obj6 = {
      sku: stateFromStores,
      title: stringResult,
      body: memo1,
      finePrint: formatToPlainStringResult,
      ctaLabel: null,
      ctaIcon: null,
      ctaLoading: null,
      onCtaPress: null,
      onClose: null,
    };
    let stringResult1;
    if (tmp21) {
      const intl3 = tmp2(tmp3[21]).intl;
      stringResult1 = intl3.string(tmp2(tmp3[21]).t["VDAhr+"]);
    }
    obj6.ctaLabel = stringResult1;
    let tmp27Result;
    if (tmp21) {
      const obj7 = { size: "xs", color: analyticsLocations(tmp3[10]).colors.WHITE, style: tmp.linkAccountIcon };
      tmp27Result = closure_15(tmp2(tmp3[35]).ExperimentalGameControllerLinkIcon, obj7);
    }
    obj6.ctaIcon = tmp27Result;
    obj6.ctaLoading = !fetched;
    let tmp31;
    if (tmp21) {
      tmp31 = callback;
    }
    obj6.onCtaPress = tmp31;
    obj6.onClose = skuId.onClose;
    return closure_15(PurchaseSuccessModalBase, obj6);
  };
export const SocialLayerStorefrontProductGiftPurchaseSuccessModal =
  function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
    ({ skuId: require, orbsReward, recipient } = analyticsLocations);
    analyticsLocations = analyticsLocations.analyticsLocations;
    let items = [SKUStore];
    const stateFromStores = require("initialize").useStateFromStores(items, () => SKUStore.get(sku_id));
    let items1 = [analyticsLocations];
    const location_stack = noop.useMemo(() => {
      let items = analyticsLocations;
      if (analyticsLocations == null) {
        items = [];
      }
      const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
      return items1;
    }, items1);
    recipient(analyticsLocations[32])(() => {
      const obj2 = {
        location_stack,
        type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY,
        sku_id,
        application_id: null,
      };
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
    return closure_15(PurchaseSuccessModalBase, {
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
      onClose: analyticsLocations.onClose,
    });
  };
