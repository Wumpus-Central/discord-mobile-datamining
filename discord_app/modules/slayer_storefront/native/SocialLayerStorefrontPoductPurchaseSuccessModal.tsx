// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import _modDef3949 from "../intl/SlayerStorefront.messages.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import SlayerStorefrontUtils from "../SlayerStorefrontUtils.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _toArray from "../../../../_runtime/00717__toArray.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";

const require = globalThis.__r;

require = fn;
function PurchaseSuccessModalBase(sku) {
  sku = sku.sku;
  _require = sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  importDefault = undefined;
  let callback1;
  let isScreenLandscape;
  first = undefined;
  closure_7 = undefined;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = closure_16();
  _slicedToArray = tmp;
  const width = require("useWindowDimensions")().width;
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  closure_129_0 = stateFromStores;
  let obj = require("initialize");
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_129_1 = sharedValue;
  let obj2 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_129_2 = sharedValue1;
  const items1 = [sharedValue, stateFromStores, sharedValue1];
  const effect = isScreenLandscape.useEffect(() => {
    let num = 1;
    if (!c0) {
      const obj = _mod1652;
      const obj3 = { duration: null, dampingRatio: 0.7 };
      const _Math = Math;
      obj3.duration = Math.round(333.3333333333333);
      num = obj.withDelay(200, spring_spring.withSpring(1, obj3));
    }
    const result = closure_1.set(num);
    let num4 = 1;
    if (!c0) {
      const obj4 = _mod1652;
      num4 = obj4.withDelay(200, timing_timing.withTiming(1, { duration: 200 }));
    }
    const result1 = callback1.set(num4);
  }, items1);
  let obj3 = require("../../../../_runtime/metro/01652__.js");
  const items2 = [closure_18, require("../../../../_runtime/metro/01652__.js").interpolate, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp9, tmp10, tmp11] = items2;
  class SocialLayerStorefrontPoductPurchaseSuccessModalTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0.1, 1]), transform: null };
      obj1 = { scale: closure_0(closure_1.get(), [0, 1], [0, 1]) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp10, tmp11];
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx1.__closure = items3;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx1.__workletHash = 1000739966762;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx1.__initData = tmp9;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    SocialLayerStorefrontPoductPurchaseSuccessModalTsx1,
  );
  let obj5 = require("../../../../_runtime/metro/01652__.js");
  const items4 = [closure_19, require("../../../../_runtime/metro/01652__.js").interpolate, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items4;
  class SocialLayerStorefrontPoductPurchaseSuccessModalTsx2 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0, 1]), transform: null };
      obj1 = { scale: closure_0(closure_1.get(), [0, 1], [0.75, 1]) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp14, tmp15];
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx2.__closure = items5;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx2.__workletHash = 3853789941754;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx2.__initData = tmp13;
  const animatedStyle1 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    SocialLayerStorefrontPoductPurchaseSuccessModalTsx2,
  );
  const tmp4Result = require("../../../../_runtime/metro/01652__.js");
  const items6 = [closure_20, require("../../../../_runtime/metro/01652__.js").interpolate, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp17, tmp18, tmp19] = items6;
  class SocialLayerStorefrontPoductPurchaseSuccessModalTsx3 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0.5, 0]) };
      return obj;
    }
  }
  const items7 = [tmp18, tmp19];
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx3.__closure = items7;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx3.__workletHash = 10933347757;
  SocialLayerStorefrontPoductPurchaseSuccessModalTsx3.__initData = tmp17;
  const animatedStyle2 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    SocialLayerStorefrontPoductPurchaseSuccessModalTsx3,
  );
  const tmp4Result3 = require("../../../../_runtime/metro/01652__.js");
  isScreenLandscape = require("useIsScreenLandscape").useIsScreenLandscape();
  const tmp22 = isScreenLandscape ? closure_12 : closure_13;
  [first, closure_7] = isScreenLandscape.useState(null);
  const items8 = [isScreenLandscape];
  const items9 = [isScreenLandscape, first];
  const callback = obj4.useCallback((height) => {
    closure_7({ height: height.nativeEvent.layout.height, landscape: isScreenLandscape });
  }, items8);
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
  }, items9);
  const items10 = [sku];
  const memo1 = obj4.useMemo(() => {
    let str = SlayerStorefrontUtils.getCardBackgroundImageURL(c0);
    if (str == null) {
      str = SlayerStorefrontUtils.getCardImageURL(c0);
      const tmpResult = SlayerStorefrontUtils;
    }
    let str1;
    if (str != null) {
      str1 = str.toString();
    }
    return str1;
  }, items10);
  const items11 = [width];
  const memo2 = obj4.useMemo(() => ({ width }), items11);
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
  const items12 = [callback1];
  const effect1 = obj4.useEffect(() => {
    callback1();
    return () => {
      closure_1_1.current = [];
    };
  }, items12);
  const items13 = [tmp.messages, ,];
  let messagesLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    messagesLandscape = tmp.messagesLandscape;
  }
  const obj6 = { style: items13, children: null };
  items13[1] = messagesLandscape;
  items13[2] = animatedStyle1;
  const items14 = [tmp.title];
  let textLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    textLandscape = tmp.textLandscape;
  }
  items14[1] = textLandscape;
  const items15 = [
    closure_14(require("Text/Text").Text, {
      variant: "heading-xl/semibold",
      color: "text-overlay-light",
      style: items14,
      children: title,
    }),
  ];
  const items16 = [tmp.description];
  let textLandscape2 = isScreenLandscape;
  if (isScreenLandscape) {
    textLandscape2 = tmp.textLandscape;
  }
  items16[1] = textLandscape2;
  items15[1] = closure_14(require("Text/Text").Text, {
    variant: "body-md/medium",
    color: "text-overlay-light",
    style: items16,
    children: body,
  });
  obj6.children = items15;
  const tmp31Result = closure_15(require("../../../../_runtime/metro/01652__.js").View, obj6);
  const items17 = [tmp.footer];
  let footerLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    footerLandscape = tmp.footerLandscape;
  }
  const obj7 = { style: items17, children: null };
  items17[1] = footerLandscape;
  let tmp32Result = null != finePrint;
  if (tmp32Result) {
    const items18 = [tmp.finePrint];
    let textLandscape3 = isScreenLandscape;
    if (isScreenLandscape) {
      textLandscape3 = tmp.textLandscape;
    }
    const obj8 = { variant: "body-xs/normal", color: "text-overlay-light", style: null, children: null };
    items18[1] = textLandscape3;
    obj8.style = items18;
    obj8.children = finePrint;
    tmp32Result = closure_14(tmp4(tmp3[19]).Text, obj8);
  }
  const items19 = [tmp32Result];
  const items20 = [tmp.cta];
  let ctaLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    ctaLandscape = tmp.ctaLandscape;
  }
  const obj9 = { style: items20, children: null };
  items20[1] = ctaLandscape;
  if (onCtaPress == null) {
    onCtaPress = onClose;
  }
  const obj10 = { onPress: onCtaPress, text: null, icon: null, loading: null, size: "lg", grow: true };
  if (ctaLabel == null) {
    const intl = tmp4(tmp3[21]).intl;
    ctaLabel = intl.string(tmp4(tmp3[21]).t.cpT0Cq);
  }
  obj10.text = ctaLabel;
  obj10.icon = ctaIcon;
  obj10.loading = ctaLoading;
  obj9.children = closure_14(require("components/Button/Button").Button, obj10);
  items19[1] = closure_14(closure_7, obj9);
  obj7.children = items19;
  const tmp31Result3 = closure_15(closure_7, obj7);
  const obj11 = { style: null, children: null };
  const items21 = [tmp.root, memo2];
  obj11.style = items21;
  let tmp32Result3 = null != memo1;
  if (tmp32Result3) {
    const obj12 = { source: null, style: null, blurRadius: 4, resizeMode: "cover" };
    const obj13 = { uri: memo1 };
    obj12.source = obj13;
    obj12.style = tmp.backdropImage;
    tmp32Result3 = closure_14(tmp2(tmp3[22]), obj12);
  }
  const items22 = [
    tmp32Result3,
    closure_14(require("LinearGradient"), {
      style: tmp.backdropGradient,
      start: tmp22.START,
      end: tmp22.END,
      locations: [0.4, 0.75, 1],
      colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"],
    }),
    ,
  ];
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  const obj15 = { style: tmp.header, children: null };
  const obj16 = {
    onPress: onClose,
    backImage() {
      return gesture(XSmallIcon.XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    },
    accessibilityLabel: null,
    displayMode: "minimal",
  };
  const intl2 = tmp4(tmp3[21]).intl;
  obj16.accessibilityLabel = intl2.string(require("util").t.cpT0Cq);
  obj15.children = closure_14(require("../../../../_runtime/metro/07434__.js").HeaderBackButton, obj16);
  const items23 = [closure_14(closure_7, obj15), ,];
  const obj17 = {
    style: tmp.scroll,
    contentContainerStyle: null,
    onLayout: null,
    alwaysBounceVertical: false,
    children: null,
  };
  const items24 = [tmp.body];
  let bodyLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    bodyLandscape = tmp.bodyLandscape;
  }
  items24[1] = bodyLandscape;
  obj17.contentContainerStyle = items24;
  obj17.onLayout = callback;
  const items25 = [tmp.preview, ,];
  let previewLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    previewLandscape = tmp.previewLandscape;
  }
  const obj18 = { style: items25, children: null };
  items25[1] = previewLandscape;
  items25[2] = animatedStyle;
  let tmp32Result4 = null != memo;
  if (tmp32Result4) {
    const obj19 = { sku, size: memo };
    tmp32Result4 = closure_14(tmp2(tmp3[27]), obj19);
  }
  obj18.children = tmp32Result4;
  const items26 = [closure_14(require("../../../../_runtime/metro/01652__.js").View, obj18)];
  let tmp31Result4 = tmp31Result;
  if (isScreenLandscape) {
    const obj20 = { style: tmp.contentColumnLandscape, children: null };
    const items27 = [tmp31Result, tmp31Result3];
    obj20.children = items27;
    tmp31Result4 = closure_15(tmp34, obj20);
  }
  items26[1] = tmp31Result4;
  obj17.children = items26;
  items23[1] = closure_15(first, obj17);
  let tmp41 = !isScreenLandscape;
  if (!isScreenLandscape) {
    tmp41 = tmp31Result3;
  }
  items23[2] = tmp41;
  rect.children = items23;
  items22[2] = closure_15(require("common/SafeAreaView").SafeAreaPaddingView, rect);
  const obj21 = { style: null, pointerEvents: "none" };
  const items28 = [tmp.curtain, animatedStyle2];
  obj21.style = items28;
  items22[3] = closure_14(require("../../../../_runtime/metro/01652__.js").View, obj21);
  obj11.children = items22;
  return closure_15(closure_7, obj11);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_6, View: metroImportDefault } = get_ActivityIndicator);
let numDays = fn(7184).SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
const Constants = fn(1072);
({ AnalyticEvents: closure_11, HorizontalGradient: closure_12, VerticalGradient: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let createStyles = fn(5243);
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
let obj11 = { marginBottom: nativeDefault.space.PX_16 };
obj2.footerLandscape = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
let obj12 = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
obj2.cta = { marginHorizontal: nativeDefault.space.PX_24 };
let obj13 = { marginHorizontal: nativeDefault.space.PX_24 };
obj2.ctaLandscape = { marginHorizontal: nativeDefault.space.PX_16 };
const obj14 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.finePrint = {
  textAlign: "center",
  marginHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_12,
};
let closure_16 = createStyles.createStyles(obj2);
createStyles = fn(5243);
let obj17 = { linkAccountIcon: null };
let obj15 = {
  textAlign: "center",
  marginHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_12,
};
obj17.linkAccountIcon = { marginRight: nativeDefault.space.PX_4 };
let closure_17 = createStyles.createStyles(obj17);
let closure_18 = {
  code: "(function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){let[interpolate,springInput]=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};})",
};
let closure_19 = {
  code: "(function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){let[interpolate,springInput]=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};})",
};
let closure_20 = {
  code: "(function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){let[interpolate,linearInput]=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};})",
};
let closure_21 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx",
);

export function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
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
  items = [ref];
  stateFromStores = skuId(stateFromStores[16]).useStateFromStores(items, () => SKUStore.get(skuId));
  let obj = skuId(stateFromStores[16]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = skuId(stateFromStores[28]).useGetOrFetchApplication(applicationId);
  let tmp9 = getOrFetchApplication;
  let obj2 = skuId(stateFromStores[28]);
  if (getOrFetchApplication == null) {
    tmp9 = null;
  }
  const tmp8Result = analyticsLocations(stateFromStores[29])(tmp9);
  fetched = tmp8Result.fetched;
  hasAlreadyLinked = tmp8Result.hasAlreadyLinked;
  canStartAuthorization = tmp8Result.canStartAuthorization;
  startAuthorization = tmp8Result.startAuthorization;
  const tmp8 = analyticsLocations(stateFromStores[29]);
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  let items1 = [analyticsLocations];
  const socialLayerStorefrontMobileAccountLinkingDisabled = skuId(
    stateFromStores[30],
  ).useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  memo = hasAlreadyLinked.useMemo(() => {
    items = analyticsLocations;
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
  analyticsLocations(stateFromStores[33])(() => {
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
    stringResult = string(analyticsLocations(tmp3[35]).bRPsNX);
  }
  let tmp21 = !hasAlreadyLinked;
  if (!hasAlreadyLinked) {
    tmp21 = canStartAuthorization;
  }
  if (tmp21) {
    tmp21 = !socialLayerStorefrontMobileAccountLinkingDisabled;
  }
  numDays = tmp21;
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
        formatToPlainStringResult = formatToPlainString(_modDef3949.eNNnIG, obj);
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
    tmp27Result = closure_14(tmp2(tmp3[36]).ExperimentalGameControllerLinkIcon, obj7);
  }
  obj6.ctaIcon = tmp27Result;
  obj6.ctaLoading = !fetched;
  let tmp31;
  if (tmp21) {
    tmp31 = callback;
  }
  obj6.onCtaPress = tmp31;
  obj6.onClose = skuId.onClose;
  return closure_14(PurchaseSuccessModalBase, obj6);
}
export function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
  ({ skuId: require, orbsReward, recipient } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  items = [SKUStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SKUStore.get(sku_id));
  let items1 = [analyticsLocations];
  const location_stack = noop.useMemo(() => {
    items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  recipient(analyticsLocations[33])(() => {
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
  return closure_14(PurchaseSuccessModalBase, {
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
}
