// === Module 10702: PurchaseSuccessModalBase ===

// Module 10702 (PurchaseSuccessModalBase)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "_toArray" /* 853 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import closure_10 from "addSku" /* 4497 */;
import { SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM as closure_11 } from "STOREFRONT_MARKETING_GUILD_ID" /* 6044 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
function PurchaseSuccessModalBase(sku) {
  sku = sku.sku;
  let stateFromStores = sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  importDefault = undefined;
  let callback1;
  let callback;
  let width;
  let isScreenLandscape;
  let first;
  closure_7 = undefined;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = callback3();
  callback = tmp;
  width = importDefault(callback1[15])().width;
  let obj = stateFromStores(callback1[16]);
  let items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  importDefault = undefined;
  callback1 = undefined;
  obj1 = stateFromStores(callback1[11]);
  const sharedValue = obj1.useSharedValue(0);
  importDefault = sharedValue;
  let obj2 = stateFromStores(callback1[11]);
  const sharedValue1 = obj2.useSharedValue(0);
  callback1 = sharedValue1;
  let obj3 = isScreenLandscape;
  const items1 = [sharedValue, stateFromStores, sharedValue1];
  const effect = isScreenLandscape.useEffect(() => {
    let num = 1;
    if (!stateFromStores) {
      const obj = stateFromStores(callback1[11]);
      num = obj.withDelay(200, stateFromStores(callback1[12]).withSpring(1, { duration: 500, dampingRatio: 0.7 }));
      const obj2 = stateFromStores(callback1[12]);
    }
    const result = store.set(num);
    let num3 = 1;
    if (!stateFromStores) {
      const obj3 = stateFromStores(callback1[11]);
      num3 = obj3.withDelay(200, stateFromStores(callback1[13]).withTiming(1, { duration: 200 }));
      const obj4 = stateFromStores(callback1[13]);
    }
    const result1 = callback1.set(num3);
  }, items1);
  let obj4 = stateFromStores(callback1[11]);
  const fn = function n() {
    let obj = { opacity: stateFromStores(callback1[11]).interpolate(store.get(), [0, 1], [0.1, 1]), transform: null };
    obj = { scale: null };
    const obj2 = stateFromStores(callback1[11]);
    obj[0] = stateFromStores(callback1[11]).interpolate(store.get(), [0, 1], [0, 1]);
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { interpolate: stateFromStores(callback1[11]).interpolate, springInput: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7750024112371;
  fn.__initData = closure_19;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj6 = stateFromStores(callback1[11]);
  const fn2 = function s() {
    let obj = { opacity: stateFromStores(callback1[11]).interpolate(store.get(), [0, 1], [0, 1]), transform: null };
    obj = { scale: null };
    const obj2 = stateFromStores(callback1[11]);
    obj[0] = stateFromStores(callback1[11]).interpolate(store.get(), [0, 1], [0.75, 1]);
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { interpolate: stateFromStores(callback1[11]).interpolate, springInput: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 3400602564931;
  fn2.__initData = closure_20;
  const animatedStyle1 = obj6.useAnimatedStyle(fn2);
  let obj8 = stateFromStores(callback1[11]);
  const fn3 = function c() {
    const obj = { opacity: stateFromStores(callback1[11]).interpolate(callback1.get(), [0, 1], [0.5, 0]) };
    return obj;
  };
  obj1 = { interpolate: stateFromStores(callback1[11]).interpolate, linearInput: sharedValue1 };
  fn3.__closure = obj1;
  fn3.__workletHash = 4092396015860;
  fn3.__initData = closure_21;
  const animatedStyle2 = obj8.useAnimatedStyle(fn3);
  let obj10 = stateFromStores(callback1[17]);
  isScreenLandscape = obj10.useIsScreenLandscape();
  const tmp13 = isScreenLandscape ? closure_13 : closure_14;
  const tmp14 = callback(obj3.useState(null), 2);
  first = tmp14[0];
  closure_7 = tmp14[1];
  const items2 = [isScreenLandscape];
  const items3 = [isScreenLandscape, first];
  callback = obj3.useCallback((height) => {
    callback({ height: height.nativeEvent.layout.height, landscape: isScreenLandscape });
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
    let str = stateFromStores(callback1[18]).getCardBackgroundImageURL(stateFromStores);
    if (str == null) {
      str = stateFromStores(callback1[18]).getCardImageURL(stateFromStores);
      const tmpResult = stateFromStores(callback1[18]);
    }
    str = undefined;
    if (str != null) {
      str = str.toString();
    }
    return str;
  }, items4);
  const items5 = [width];
  const memo2 = obj3.useMemo(() => ({ width }), items5);
  importDefault = obj3.useRef(closure_22);
  callback1 = obj3.useCallback(() => {
    const arr = width(store.current);
    first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = stateFromStores(callback1[14]).triggerHapticFeedback(stateFromStores(callback1[14]).HapticFeedbackTypes.IMPACT_HEAVY);
        const obj3 = stateFromStores(callback1[14]);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback1, first);
      }
      store.current = substr;
    }
    if (substr.length >= closure_1_22.length / 2) {
      const result1 = stateFromStores(callback1[14]).triggerHapticFeedback(stateFromStores(callback1[14]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = stateFromStores(callback1[14]);
    } else {
      const result2 = stateFromStores(callback1[14]).triggerHapticFeedback(stateFromStores(callback1[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = stateFromStores(callback1[14]);
    }
  }, []);
  const items6 = [callback1];
  const effect1 = obj3.useEffect(() => {
    callback1();
    return () => {
      closure_1.current = [];
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
  const items9 = [closure_15(stateFromStores(callback1[19]).Text, { variant: "heading-xl/semibold", color: "text-overlay-light", style: items8, children: title }), ];
  const items10 = [tmp.description, ];
  let textLandscape2 = isScreenLandscape;
  if (isScreenLandscape) {
    textLandscape2 = tmp.textLandscape;
  }
  items10[1] = textLandscape2;
  items9[1] = closure_15(stateFromStores(callback1[19]).Text, { variant: "text-md/medium", color: "text-overlay-light", style: items10, children: body });
  obj2[1] = items9;
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
    obj4[2] = items12;
    obj4[3] = finePrint;
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
  obj6[1] = ctaLabel;
  obj6[2] = ctaIcon;
  obj6[3] = ctaLoading;
  obj5[1] = closure_15(stateFromStores(callback1[20]).Button, obj6);
  items13[1] = closure_15(closure_8, obj5);
  obj3[1] = items13;
  tmp22Result = tmp22(tmp25, obj3);
  const obj7 = { style: items15, children: null };
  items15 = [tmp.root, memo2];
  tmp23Result = null != memo1;
  if (tmp23Result) {
    obj8 = { source: null, style: null, blurRadius: 4, resizeMode: "cover" };
    const obj9 = { uri: null };
    obj9[0] = memo1;
    obj8[0] = obj9;
    obj8[1] = tmp.backdropImage;
    tmp23Result = tmp23(first, obj8);
  }
  const items16 = [tmp23Result, , , ];
  obj10 = { style: tmp.backdropGradient, start: tmp13.START, end: tmp13.END, locations: [0.4, 0.75, 1], colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"] };
  items16[1] = closure_15(importDefault(callback1[22]), obj10);
  const obj11 = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  const obj12 = { style: tmp.header, children: null };
  const obj13 = {
    onPress: onClose,
    backImage() {
      return closure_1_15(stateFromStores(callback1[25]).XSmallIcon, { size: "lg", style: closeButtonIcon.closeButtonIcon });
    },
    accessibilityLabel: null,
    displayMode: "minimal"
  };
  const intl2 = tmp4(tmp3[21]).intl;
  obj13[2] = intl2.string(stateFromStores(callback1[21]).t.cpT0Cq);
  obj12[1] = closure_15(stateFromStores(callback1[24]).HeaderBackButton, obj13);
  const items17 = [closure_15(closure_8, obj12), , ];
  const obj14 = { style: tmp.scroll, contentContainerStyle: null, onLayout: null, alwaysBounceVertical: false, children: null };
  const items18 = [tmp.body, ];
  let bodyLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    bodyLandscape = tmp.bodyLandscape;
  }
  items18[1] = bodyLandscape;
  obj14[1] = items18;
  obj14[2] = callback;
  const items19 = [tmp.preview, , ];
  let previewLandscape = isScreenLandscape;
  if (isScreenLandscape) {
    previewLandscape = tmp.previewLandscape;
  }
  const obj15 = { style: items19, children: null };
  items19[1] = previewLandscape;
  items19[2] = animatedStyle;
  let tmp23Result1 = null != memo;
  if (tmp23Result1) {
    const obj16 = { sku: null, size: null };
    obj16[0] = sku;
    obj16[1] = memo;
    tmp23Result1 = tmp23(tmp2(tmp3[26]), obj16);
  }
  obj15[1] = tmp23Result1;
  const items20 = [closure_15(importDefault(callback1[11]).View, obj15), ];
  let tmp22Result1 = tmp22Result;
  if (isScreenLandscape) {
    const obj17 = { style: null, children: null };
    obj17[0] = tmp.contentColumnLandscape;
    const items21 = [tmp22Result, tmp22Result];
    obj17[1] = items21;
    tmp22Result1 = tmp22(tmp25, obj17);
  }
  items20[1] = tmp22Result1;
  obj14[4] = items20;
  items17[1] = closure_16(closure_7, obj14);
  let tmp33 = !isScreenLandscape;
  if (!isScreenLandscape) {
    tmp33 = tmp22Result;
  }
  items17[2] = tmp33;
  obj11[5] = items17;
  items16[2] = closure_16(stateFromStores(callback1[23]).SafeAreaPaddingView, obj11);
  const items22 = [tmp.curtain, animatedStyle2];
  items16[3] = closure_15(importDefault(callback1[11]).View, { style: items22, pointerEvents: "none" });
  obj7[1] = items16;
  return closure_16(closure_8, obj7);
}
({ Image: closure_6, ScrollView: error, View: closure_8 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, HorizontalGradient: map1, VerticalGradient: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
createCacheKey = { root: null, backdropImage: null, backdropGradient: null, curtain: null, main: null, header: null, closeButtonIcon: null, scroll: null, body: null, bodyLandscape: null, preview: null, previewLandscape: null, messages: null, messagesLandscape: null, contentColumnLandscape: null, title: null, description: null, textLandscape: null, footer: null, footerLandscape: null, cta: null, ctaLandscape: null, finePrint: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", inset: 0, opacity: 0.45 };
createCacheKey[2] = { position: "absolute", inset: 0 };
createCacheKey[3] = { position: "absolute", inset: 0, backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[4] = { flex: 1 };
let obj1 = { position: "absolute", inset: 0, backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[5] = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
let obj2 = { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[6] = { tintColor: ThemesDefault.colors.WHITE };
createCacheKey[7] = { flex: 1 };
createCacheKey[8] = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
createCacheKey[9] = { flexDirection: "row", alignItems: "center" };
createCacheKey[10] = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
createCacheKey[11] = { flex: 1 };
let obj3 = { tintColor: ThemesDefault.colors.WHITE };
createCacheKey[12] = { paddingTop: ThemesDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: ThemesDefault.space.PX_8 };
createCacheKey[13] = { paddingTop: 0, alignItems: "stretch" };
createCacheKey[14] = { flex: 1 };
let obj4 = { paddingTop: ThemesDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: ThemesDefault.space.PX_8 };
createCacheKey[15] = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
let obj5 = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
createCacheKey[16] = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
let obj6 = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
createCacheKey[17] = { marginHorizontal: ThemesDefault.space.PX_16, textAlign: "left" };
let obj7 = { marginHorizontal: ThemesDefault.space.PX_16, textAlign: "left" };
createCacheKey[18] = { marginBottom: ThemesDefault.space.PX_16 };
let obj8 = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[19] = { marginTop: ThemesDefault.space.PX_24, marginBottom: 0 };
let obj9 = { marginTop: ThemesDefault.space.PX_24, marginBottom: 0 };
createCacheKey[20] = { marginHorizontal: ThemesDefault.space.PX_24 };
let obj10 = { marginHorizontal: ThemesDefault.space.PX_24 };
createCacheKey[21] = { marginHorizontal: ThemesDefault.space.PX_16 };
let obj11 = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[22] = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_12 };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let obj13 = { linkAccountIcon: null };
let obj12 = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_12 };
obj13[0] = { marginRight: ThemesDefault.space.PX_4 };
let closure_18 = createCacheKey.createStyles(obj13);
let closure_19 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
let closure_20 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
let closure_21 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_22 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let obj14 = { marginRight: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx");

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
  closure_9 = undefined;
  closure_10 = undefined;
  let obj = skuId(stateFromStores[16]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => closure_10.get(skuId));
  obj1 = skuId(stateFromStores[27]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = obj1.useGetOrFetchApplication(applicationId);
  let tmp9 = getOrFetchApplication;
  const tmp = callback4();
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
    const items1 = [...items, analyticsLocations(stateFromStores[30]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  obj = { analyticsLocations: memo, skuId, applicationId: null, canStartAuthorization: null };
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  obj[2] = applicationId2;
  obj[3] = canStartAuthorization;
  closure_9 = hasAlreadyLinked.useRef(obj);
  const items2 = [canStartAuthorization];
  const effect = obj4.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items2);
  const items3 = [fetched, hasAlreadyLinked];
  const effect1 = obj4.useEffect(() => {
    if (fetched) {
      ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
      let obj = analyticsLocations(stateFromStores[31]);
      obj = { location_stack: null, sku_id: null, application_id: null, is_gift: false, is_account_linked: null, can_start_authorization: null };
      obj[0] = analyticsLocations;
      obj[1] = skuId;
      obj[2] = applicationId;
      obj[4] = hasAlreadyLinked;
      obj[5] = canStartAuthorization;
      obj.track(closure_1_12.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
    }
  }, items3);
  const items4 = [startAuthorization, memo, skuId, ];
  let applicationId3;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items4[3] = applicationId3;
  const callback = obj4.useCallback(() => {
    let obj = analyticsLocations(stateFromStores[31]);
    obj = { location_stack: memo, sku_id: skuId, application_id: null, is_gift: false };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[2] = applicationId;
    obj.track(closure_1_12.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
    startAuthorization({ analyticsLocations: memo });
  }, items4);
  analyticsLocations(stateFromStores[32])(() => {
    let obj = analyticsLocations(stateFromStores[31]);
    obj = { location_stack: memo, type: skuId(stateFromStores[33]).SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj.track(closure_1_12.OPEN_MODAL, obj);
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
      const intl2 = skuId(stateFromStores[21]).intl;
      let str4;
      if (stateFromStores != null) {
        str4 = stateFromStores.name;
      }
      if (str4 == null) {
        str4 = "";
      }
      let obj = { skuName: null, applicationName: null };
      obj[0] = str4;
      let str5;
      if (getOrFetchApplication != null) {
        str5 = getOrFetchApplication.name;
      }
      if (str5 == null) {
        str5 = "";
      }
      obj[1] = str5;
      let formatToPlainStringResult = intl2.formatToPlainString(skuId(stateFromStores[21]).t.W2znvX, obj);
    } else {
      const intl = skuId(stateFromStores[21]).intl;
      const formatToPlainString = intl.formatToPlainString;
      if (closure_10) {
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        obj = { skuName: null, applicationName: null };
        obj[0] = str2;
        let str3;
        if (getOrFetchApplication != null) {
          str3 = getOrFetchApplication.name;
        }
        if (str3 == null) {
          str3 = "";
        }
        obj[1] = str3;
        formatToPlainStringResult = formatToPlainString(skuId(stateFromStores[21]).t["EgCl+Q"], obj);
      } else {
        let str;
        if (getOrFetchApplication != null) {
          str = getOrFetchApplication.name;
        }
        if (str == null) {
          str = "";
        }
        obj = { applicationName: null };
        obj[0] = str;
        formatToPlainStringResult = formatToPlainString(analyticsLocations(stateFromStores[34]).eNNnIG, obj);
      }
    }
    return formatToPlainStringResult;
  }, items5);
  if (!hasAlreadyLinked) {
    let intl2 = tmp2(tmp3[21]).intl;
    obj = { numDays: null };
    obj[0] = closure_11;
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[21]).t.TTj7ME, obj);
  }
  obj1 = { sku: stateFromStores, title: stringResult, body: memo1, finePrint: formatToPlainStringResult, ctaLabel: null, ctaIcon: null, ctaLoading: null, onCtaPress: null, onClose: null };
  let stringResult1;
  if (tmp21) {
    const intl3 = tmp2(tmp3[21]).intl;
    stringResult1 = intl3.string(tmp2(tmp3[21]).t["VDAhr+"]);
  }
  obj1[4] = stringResult1;
  let tmp27Result;
  if (tmp21) {
    const obj2 = { size: "xs", color: null, style: null };
    obj2[1] = tmp7(tmp3[10]).colors.WHITE;
    obj2[2] = tmp.linkAccountIcon;
    tmp27Result = tmp27(tmp2(tmp3[35]).ExperimentalGameControllerLinkIcon, obj2);
  }
  obj1[5] = tmp27Result;
  obj1[6] = !fetched;
  let tmp31;
  if (tmp21) {
    tmp31 = callback;
  }
  obj1[7] = tmp31;
  obj1[8] = skuId.onClose;
  return closure_15(PurchaseSuccessModalBase, obj1);
};
export const SocialLayerStorefrontProductGiftPurchaseSuccessModal = function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
  ({ skuId: require, orbsReward, recipient } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  let stateFromStores;
  closure_4 = undefined;
  let obj = require(analyticsLocations[16]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_10.get(closure_0));
  let items1 = [analyticsLocations];
  closure_4 = React.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, recipient(analyticsLocations[30]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  recipient(analyticsLocations[32])(() => {
    let obj = recipient(analyticsLocations[31]);
    obj = { location_stack: closure_4, type: closure_1_0(analyticsLocations[33]).SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id: closure_0, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj.track(closure_1_12.OPEN_MODAL, obj);
  });
  let intl = require(analyticsLocations[21]).intl;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items2 = [name, recipient];
  obj = {
    sku: stateFromStores,
    title: intl.string(require(analyticsLocations[21]).t["5glWta"]),
    body: React.useMemo(() => {
      const intl = closure_1_0(analyticsLocations[21]).intl;
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      const obj = { itemName: name, giftRecipient: null };
      let str = recipient(analyticsLocations[36]).getName(recipient);
      if (str == null) {
        str = "your recipient";
      }
      obj[1] = str;
      return intl.formatToPlainString(closure_1_0(analyticsLocations[21]).t["2VjPTw"], obj);
    }, items2),
    onClose: analyticsLocations.onClose
  };
  return callback2(PurchaseSuccessModalBase, obj);
};