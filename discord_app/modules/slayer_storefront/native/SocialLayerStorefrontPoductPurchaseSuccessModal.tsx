// === Module 11005: SocialLayerStorefrontPoductPurchaseSuccessModal ===

// Module 11005 (SocialLayerStorefrontPoductPurchaseSuccessModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import _modDef3417 from "module_3417" /* 3417 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import timing from "timing" /* 4561 */;
import spring from "spring" /* 4974 */;
import XSmallIcon from "XSmallIcon" /* 5680 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7226 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10797 */;
import _slicedToArray from "module_32" /* 32 */;
import _toArray from "_toArray" /* 718 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import SKUStore from "SKUStore" /* 5510 */;

require = fn;
function PurchaseSuccessModalBase(sku) {
  sku = sku.sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  importDefault = undefined;
  let callback1;
  let isScreenLandscape;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = closure_17();
  _slicedToArray = tmp;
  const width = require("useWindowDimensions")().width;
  let obj = sku(callback1[16]);
  let items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  closure_129_0 = stateFromStores;
  let obj1 = sku(callback1[11]);
  const sharedValue = obj1.useSharedValue(0);
  closure_129_1 = sharedValue;
  let obj2 = sku(callback1[11]);
  const sharedValue1 = obj2.useSharedValue(0);
  closure_129_2 = sharedValue1;
  let obj3 = isScreenLandscape;
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
  let obj4 = sku(callback1[11]);
  const fn = function n() {
    let obj = { opacity: ReanimatedRexport.interpolate(closure_1.get(), [0, 1], [0.1, 1]), transform: null };
    obj = { scale: null };
    obj.scale = ReanimatedRexport.interpolate(closure_1.get(), [0, 1], [0, 1]);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { interpolate: sku(callback1[11]).interpolate, springInput: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7750024112371;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj6 = sku(callback1[11]);
  const fn2 = function s() {
    let obj = { opacity: ReanimatedRexport.interpolate(closure_1.get(), [0, 1], [0, 1]), transform: null };
    obj = { scale: null };
    obj.scale = ReanimatedRexport.interpolate(closure_1.get(), [0, 1], [0.75, 1]);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { interpolate: sku(callback1[11]).interpolate, springInput: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 3400602564931;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj6.useAnimatedStyle(fn2);
  let obj8 = sku(callback1[11]);
  const fn3 = function c() {
    const obj = { opacity: ReanimatedRexport.interpolate(callback1.get(), [0, 1], [0.5, 0]) };
    return obj;
  };
  obj1 = { interpolate: sku(callback1[11]).interpolate, linearInput: sharedValue1 };
  fn3.__closure = obj1;
  fn3.__workletHash = 4092396015860;
  fn3.__initData = __initData3;
  const animatedStyle2 = obj8.useAnimatedStyle(fn3);
  let obj10 = sku(callback1[17]);
  isScreenLandscape = obj10.useIsScreenLandscape();
  const tmp13 = isScreenLandscape ? closure_13 : closure_14;
  const tmp14 = _slicedToArray(obj3.useState(null), 2);
  let first = tmp14[0];
  closure_7 = tmp14[1];
  const items2 = [isScreenLandscape];
  const items3 = [isScreenLandscape, first];
  const callback = obj3.useCallback((height) => {
    closure_7({ height: height.nativeEvent.layout.height, landscape: isScreenLandscape });
  }, items2);
  const memo = obj3.useMemo(() => {
    if (isScreenLandscape) {
      if (null != first) {
        if (tmp2.landscape === tmp) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          return Math.max(120, Math.min(250, Math.floor(tmp2.height - 32)));
        }
      }
      return null;
    } else {
      return 250;
    }
  }, items3);
  const items4 = [sku];
  const memo1 = obj3.useMemo(() => {
    let str = SlayerStorefrontUtils.getCardBackgroundImageURL(sku);
    if (str == null) {
      str = SlayerStorefrontUtils.getCardImageURL(sku);
      const tmpResult = SlayerStorefrontUtils;
    }
    str = undefined;
    if (str != null) {
      str = str.toString();
    }
    return str;
  }, items4);
  const items5 = [width];
  const memo2 = obj3.useMemo(() => ({ width }), items5);
  importDefault = obj3.useRef(length);
  callback1 = obj3.useCallback(() => {
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
  const effect1 = obj3.useEffect(() => {
    callback1();
    return () => {
      closure_1_1.current = [];
    };
  }, items6);
  const items7 = [tmp.messages, , ];
  let messagesLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    messagesLandscape = tmp.messagesLandscape;
  }
  obj2 = { style: items7, children: null };
  items7[1] = messagesLandscape;
  items7[2] = animatedStyle1;
  const items8 = [tmp.title, ];
  let textLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    textLandscape = tmp.textLandscape;
  }
  items8[1] = textLandscape;
  const items9 = [closure_15(sku(callback1[19]).Text, { variant: "heading-xl/semibold", color: "text-overlay-light", style: items8, children: title }), ];
  const items10 = [tmp.description, ];
  let textLandscape2 = isScreenLandscape;
  if (isScreenLandscape) {
    textLandscape2 = tmp.textLandscape;
  }
  items10[1] = textLandscape2;
  items9[1] = closure_15(sku(callback1[19]).Text, { variant: "text-md/medium", color: "text-overlay-light", style: items10, children: body });
  obj2.children = items9;
  let tmp22Result = tmp22(tmp2(tmp3[11]).View, obj2);
  const items11 = [tmp.footer, ];
  let footerLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    footerLandscape = tmp.footerLandscape;
  }
  obj3 = { style: items11, children: null };
  items11[1] = footerLandscape;
  let tmp23Result = null != finePrint;
  if (tmp23Result) {
    const items12 = [tmp.finePrint, ];
    let textLandscape3 = isScreenLandscape;
    if (isScreenLandscape) {
      textLandscape3 = tmp.textLandscape;
    }
    obj4 = { variant: "text-xs/normal", color: "text-overlay-light", style: null, children: null };
    items12[1] = textLandscape3;
    obj4.style = items12;
    obj4.children = finePrint;
    tmp23Result = tmp23(tmp4(tmp3[19]).Text, obj4);
  }
  const items13 = [tmp23Result, ];
  const items14 = [tmp.cta, ];
  let ctaLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    ctaLandscape = tmp.ctaLandscape;
  }
  const obj5 = { style: items14, children: null };
  items14[1] = ctaLandscape;
  if (onCtaPress == null) {
    onCtaPress = onClose;
  }
  obj6 = { onPress: onCtaPress, text: null, icon: null, loading: null, size: "lg", grow: true };
  if (ctaLabel == null) {
    const intl = tmp4(tmp3[21]).intl;
    ctaLabel = intl.string(tmp4(tmp3[21]).t.cpT0Cq);
  }
  obj6.text = ctaLabel;
  obj6.icon = ctaIcon;
  obj6.loading = ctaLoading;
  obj5.children = closure_15(sku(callback1[20]).Button, obj6);
  items13[1] = closure_15(closure_8, obj5);
  obj3.children = items13;
  tmp22Result = tmp22(tmp25, obj3);
  const obj7 = { style: null, children: null };
  const items15 = [tmp.root, memo2];
  obj7.style = items15;
  tmp23Result = null != memo1;
  if (tmp23Result) {
    obj8 = { source: null, style: null, blurRadius: 4, resizeMode: "cover" };
    const obj9 = { uri: memo1 };
    obj8.source = obj9;
    obj8.style = tmp.backdropImage;
    tmp23Result = tmp23(first, obj8);
  }
  const items16 = [tmp23Result, , , ];
  obj10 = { style: tmp.backdropGradient, start: tmp13.START, end: tmp13.END, locations: [0.4, 0.75, 1], colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"] };
  items16[1] = closure_15(require("LinearGradient"), obj10);
  const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  const obj11 = { style: tmp.header, children: null };
  const obj12 = {
    onPress: onClose,
    backImage() {
      return __initData(XSmallIcon.XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    },
    accessibilityLabel: null,
    displayMode: "minimal"
  };
  const intl2 = tmp4(tmp3[21]).intl;
  obj12.accessibilityLabel = intl2.string(sku(callback1[21]).t.cpT0Cq);
  obj11.children = closure_15(sku(callback1[24]).HeaderBackButton, obj12);
  const items17 = [closure_15(closure_8, obj11), , ];
  const obj13 = { style: tmp.scroll, contentContainerStyle: null, onLayout: null, alwaysBounceVertical: false, children: null };
  const items18 = [tmp.body, ];
  let bodyLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    bodyLandscape = tmp.bodyLandscape;
  }
  items18[1] = bodyLandscape;
  obj13.contentContainerStyle = items18;
  obj13.onLayout = callback;
  const items19 = [tmp.preview, , ];
  let previewLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    previewLandscape = tmp.previewLandscape;
  }
  const obj14 = { style: items19, children: null };
  items19[1] = previewLandscape;
  items19[2] = animatedStyle;
  let tmp23Result1 = null != memo;
  if (tmp23Result1) {
    const obj15 = { sku, size: memo };
    tmp23Result1 = tmp23(tmp2(tmp3[26]), obj15);
  }
  obj14.children = tmp23Result1;
  const items20 = [closure_15(require("ReanimatedRexport").View, obj14), ];
  let tmp22Result1 = tmp22Result;
  if (isScreenLandscape) {
    const obj16 = { style: tmp.contentColumnLandscape, children: null };
    const items21 = [tmp22Result, tmp22Result];
    obj16.children = items21;
    tmp22Result1 = tmp22(tmp25, obj16);
  }
  items20[1] = tmp22Result1;
  obj13.children = items20;
  items17[1] = closure_16(closure_7, obj13);
  let tmp33 = !isScreenLandscape;
  if (!isScreenLandscape) {
    tmp33 = tmp22Result;
  }
  items17[2] = tmp33;
  rect.children = items17;
  items16[2] = closure_16(sku(callback1[23]).SafeAreaPaddingView, rect);
  const obj17 = { style: null, pointerEvents: "none" };
  const items22 = [tmp.curtain, animatedStyle2];
  obj17.style = items22;
  items16[3] = closure_15(require("ReanimatedRexport").View, obj17);
  obj7.children = items16;
  return closure_16(closure_8, obj7);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const numDays = fn(7229).SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, HorizontalGradient: map1, VerticalGradient: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
fn(4560);
let createStyles = { root: null, backdropImage: null, backdropGradient: null, curtain: null, main: null, header: null, closeButtonIcon: null, scroll: null, body: null, bodyLandscape: null, preview: null, previewLandscape: null, messages: null, messagesLandscape: null, contentColumnLandscape: null, title: null, description: null, textLandscape: null, footer: null, footerLandscape: null, cta: null, ctaLandscape: null, finePrint: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
createStyles.root = createStyles;
createStyles.backdropImage = { position: "absolute", inset: 0, opacity: 0.45 };
createStyles.backdropGradient = { position: "absolute", inset: 0 };
createStyles.curtain = { position: "absolute", inset: 0, backgroundColor: nativeDefault.colors.BLACK };
createStyles.main = { flex: 1 };
let obj1 = { position: "absolute", inset: 0, backgroundColor: nativeDefault.colors.BLACK };
createStyles.header = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
let obj2 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.closeButtonIcon = { tintColor: nativeDefault.colors.WHITE };
createStyles.scroll = { flex: 1 };
createStyles.body = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
createStyles.bodyLandscape = { flexDirection: "row", alignItems: "center" };
createStyles.preview = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
createStyles.previewLandscape = { flex: 1 };
let obj3 = { tintColor: nativeDefault.colors.WHITE };
createStyles.messages = { paddingTop: nativeDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
createStyles.messagesLandscape = { paddingTop: 0, alignItems: "stretch" };
createStyles.contentColumnLandscape = { flex: 1 };
let obj4 = { paddingTop: nativeDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
createStyles.title = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
let obj5 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
createStyles.description = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
let obj6 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
createStyles.textLandscape = { marginHorizontal: nativeDefault.space.PX_16, textAlign: "left" };
let obj7 = { marginHorizontal: nativeDefault.space.PX_16, textAlign: "left" };
createStyles.footer = { marginBottom: nativeDefault.space.PX_16 };
let obj8 = { marginBottom: nativeDefault.space.PX_16 };
createStyles.footerLandscape = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
let obj9 = { marginTop: nativeDefault.space.PX_24, marginBottom: 0 };
createStyles.cta = { marginHorizontal: nativeDefault.space.PX_24 };
let obj10 = { marginHorizontal: nativeDefault.space.PX_24 };
createStyles.ctaLandscape = { marginHorizontal: nativeDefault.space.PX_16 };
let obj11 = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles.finePrint = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_12 };
let closure_17 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj13 = { linkAccountIcon: null };
let obj12 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_12 };
obj13.linkAccountIcon = { marginRight: nativeDefault.space.PX_4 };
let closure_18 = createStyles.createStyles(obj13);
const __initData = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
const __initData2 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
const __initData3 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_22 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx");

export const SocialLayerStorefrontProductSelfPurchaseSuccessModal = function SocialLayerStorefrontProductSelfPurchaseSuccessModal(skuId) {
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
  let obj = skuId(stateFromStores[16]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(skuId));
  let obj1 = skuId(stateFromStores[27]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = obj1.useGetOrFetchApplication(applicationId);
  let tmp9 = getOrFetchApplication;
  const tmp = closure_18();
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
  const socialLayerStorefrontMobileAccountLinkingDisabled = skuId(stateFromStores[29]).useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  memo = hasAlreadyLinked.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  obj = { analyticsLocations: memo, skuId, applicationId: null, canStartAuthorization: null };
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  obj.applicationId = applicationId2;
  obj.canStartAuthorization = canStartAuthorization;
  hasAlreadyLinked.useRef(obj);
  const items2 = [canStartAuthorization];
  const effect = obj4.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items2);
  const items3 = [fetched, hasAlreadyLinked];
  const effect1 = obj4.useEffect(() => {
    if (fetched) {
      ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
      const obj = { location_stack: analyticsLocations, sku_id: skuId, application_id: applicationId, is_gift: false, is_account_linked: hasAlreadyLinked, can_start_authorization: canStartAuthorization };
      obj.track(constants.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
    }
  }, items3);
  const items4 = [startAuthorization, memo, skuId, ];
  let applicationId3;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items4[3] = applicationId3;
  const callback = obj4.useCallback(() => {
    const obj = { location_stack: memo, sku_id: skuId, application_id: null, is_gift: false };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
    startAuthorization({ analyticsLocations: memo });
  }, items4);
  analyticsLocations(stateFromStores[32])(() => {
    const obj = { location_stack: memo, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  let intl = tmp2(tmp3[21]).intl;
  const string = intl.string;
  if (hasAlreadyLinked) {
    let stringResult = string(tmp2(tmp3[21]).t["5glWta"]);
  } else {
    stringResult = string(tmp7(tmp3[34]).bRPsNX);
  }
  let tmp21 = !hasAlreadyLinked;
  if (!hasAlreadyLinked) {
    tmp21 = canStartAuthorization;
  }
  if (tmp21) {
    tmp21 = !socialLayerStorefrontMobileAccountLinkingDisabled;
  }
  closure_10 = tmp21;
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
      let obj = { skuName: str4, applicationName: null };
      let str5;
      if (getOrFetchApplication != null) {
        str5 = getOrFetchApplication.name;
      }
      if (str5 == null) {
        str5 = "";
      }
      obj.applicationName = str5;
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.W2znvX, obj);
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
        obj = { skuName: str2, applicationName: null };
        let str3;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        obj.applicationName = str3;
        formatToPlainStringResult = formatToPlainString(util.t["EgCl+Q"], obj);
      } else {
        let str;
        if (getOrFetchApplication != null) {
          str = getOrFetchApplication.name;
        }
        if (str == null) {
          str = "";
        }
        obj = { applicationName: str };
        formatToPlainStringResult = formatToPlainString(_modDef3417.eNNnIG, obj);
      }
    }
    return formatToPlainStringResult;
  }, items5);
  if (!hasAlreadyLinked) {
    let intl2 = tmp2(tmp3[21]).intl;
    obj = { numDays };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[21]).t.TTj7ME, obj);
  }
  obj1 = { sku: stateFromStores, title: stringResult, body: memo1, finePrint: formatToPlainStringResult, ctaLabel: null, ctaIcon: null, ctaLoading: null, onCtaPress: null, onClose: null };
  let stringResult1;
  if (tmp21) {
    const intl3 = tmp2(tmp3[21]).intl;
    stringResult1 = intl3.string(tmp2(tmp3[21]).t["VDAhr+"]);
  }
  obj1.ctaLabel = stringResult1;
  let tmp27Result;
  if (tmp21) {
    const obj2 = { size: "xs", color: tmp7(tmp3[10]).colors.WHITE, style: tmp.linkAccountIcon };
    tmp27Result = tmp27(tmp2(tmp3[35]).ExperimentalGameControllerLinkIcon, obj2);
  }
  obj1.ctaIcon = tmp27Result;
  obj1.ctaLoading = !fetched;
  let tmp31;
  if (tmp21) {
    tmp31 = callback;
  }
  obj1.onCtaPress = tmp31;
  obj1.onClose = skuId.onClose;
  return closure_15(PurchaseSuccessModalBase, obj1);
};
export const SocialLayerStorefrontProductGiftPurchaseSuccessModal = function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
  ({ skuId: require, orbsReward, recipient } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  let obj = require("initialize");
  let items = [SKUStore];
  const stateFromStores = obj.useStateFromStores(items, () => SKUStore.get(sku_id));
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
    const obj = { location_stack, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj.application_id = applicationId;
    obj.track(constants.OPEN_MODAL, obj);
  });
  let intl = require("util").intl;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items2 = [name, recipient];
  obj = {
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
  };
  return closure_15(PurchaseSuccessModalBase, obj);
};