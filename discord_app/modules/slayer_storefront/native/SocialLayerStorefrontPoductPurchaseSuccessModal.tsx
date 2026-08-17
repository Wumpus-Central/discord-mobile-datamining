// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontPoductPurchaseSuccessModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00853__toArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../a11y/AccessibilityStore.tsx";
import closure_9 from "../../../stores/game_store/SKUStore.tsx";
import { SOCIAL_LAYER_DAYS_TO_CLAIM_ITEM as closure_10 } from "../SocialLayerStorefrontConstants.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function PurchaseSuccessModalBase(sku) {
  sku = sku.sku;
  let stateFromStores = sku;
  ({ finePrint, ctaLabel, onCtaPress, onClose } = sku);
  importDefault = undefined;
  let callback;
  closure_3 = undefined;
  let width;
  ({ title, body, ctaIcon, ctaLoading } = sku);
  const tmp = callback2();
  closure_3 = tmp;
  width = importDefault(callback[14])().width;
  let obj = stateFromStores(callback[15]);
  let items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  importDefault = undefined;
  callback = undefined;
  obj1 = stateFromStores(callback[10]);
  const sharedValue = obj1.useSharedValue(0);
  importDefault = sharedValue;
  let obj2 = stateFromStores(callback[10]);
  const sharedValue1 = obj2.useSharedValue(0);
  callback = sharedValue1;
  const items1 = [sharedValue, stateFromStores, sharedValue1];
  const effect = width.useEffect(() => {
    let num = 1;
    if (!stateFromStores) {
      const obj = stateFromStores(callback[10]);
      num = obj.withDelay(200, stateFromStores(callback[11]).withSpring(1, { duration: 500, dampingRatio: 0.7 }));
      const obj2 = stateFromStores(callback[11]);
    }
    const result = store.set(num);
    let num3 = 1;
    if (!stateFromStores) {
      const obj3 = stateFromStores(callback[10]);
      num3 = obj3.withDelay(200, stateFromStores(callback[12]).withTiming(1, { duration: 200 }));
      const obj4 = stateFromStores(callback[12]);
    }
    const result1 = callback.set(num3);
  }, items1);
  let obj3 = stateFromStores(callback[10]);
  const fn = function o() {
    let obj = { opacity: stateFromStores(callback[10]).interpolate(store.get(), [0, 1], [0.1, 1]), transform: null };
    obj = { scale: null };
    const obj2 = stateFromStores(callback[10]);
    obj[0] = stateFromStores(callback[10]).interpolate(store.get(), [0, 1], [0, 1]);
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { interpolate: stateFromStores(callback[10]).interpolate, springInput: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 7750024112371;
  fn.__initData = closure_18;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj5 = stateFromStores(callback[10]);
  const fn2 = function c() {
    let obj = { opacity: stateFromStores(callback[10]).interpolate(store.get(), [0, 1], [0, 1]), transform: null };
    obj = { scale: null };
    const obj2 = stateFromStores(callback[10]);
    obj[0] = stateFromStores(callback[10]).interpolate(store.get(), [0, 1], [0.75, 1]);
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { interpolate: stateFromStores(callback[10]).interpolate, springInput: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 3400602564931;
  fn2.__initData = closure_19;
  const animatedStyle1 = obj5.useAnimatedStyle(fn2);
  let obj7 = stateFromStores(callback[10]);
  const fn3 = function l() {
    const obj = { opacity: stateFromStores(callback[10]).interpolate(callback.get(), [0, 1], [0.5, 0]) };
    return obj;
  };
  obj1 = { interpolate: stateFromStores(callback[10]).interpolate, linearInput: sharedValue1 };
  fn3.__closure = obj1;
  fn3.__workletHash = 4092396015860;
  fn3.__initData = closure_20;
  const items2 = [sku];
  const animatedStyle2 = obj7.useAnimatedStyle(fn3);
  const memo = width.useMemo(() => {
    let str = stateFromStores(callback[16]).getCardBackgroundImageURL(stateFromStores);
    if (str == null) {
      str = stateFromStores(callback[16]).getCardImageURL(stateFromStores);
      const tmpResult = stateFromStores(callback[16]);
    }
    str = undefined;
    if (str != null) {
      str = str.toString();
    }
    return str;
  }, items2);
  const items3 = [width];
  const memo1 = width.useMemo(() => ({ width }), items3);
  importDefault = width.useRef(closure_21);
  callback = width.useCallback(() => {
    const arr = lib(store.current);
    const first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = stateFromStores(callback[13]).triggerHapticFeedback(stateFromStores(callback[13]).HapticFeedbackTypes.IMPACT_HEAVY);
        const obj3 = stateFromStores(callback[13]);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback, first);
      }
      store.current = substr;
    }
    if (substr.length >= closure_1_21.length / 2) {
      const result1 = stateFromStores(callback[13]).triggerHapticFeedback(stateFromStores(callback[13]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = stateFromStores(callback[13]);
    } else {
      const result2 = stateFromStores(callback[13]).triggerHapticFeedback(stateFromStores(callback[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = stateFromStores(callback[13]);
    }
  }, []);
  const items4 = [callback];
  const effect1 = width.useEffect(() => {
    callback();
    return () => {
      closure_1.current = [];
    };
  }, items4);
  const effect2 = width.useEffect(() => {
    stateFromStores(callback[17]).lockOrientation(constants.PORTRAIT);
    return () => {
      const result = callback(table[17]).restoreDefaultOrientation();
    };
  }, []);
  obj2 = { style: items5, children: null };
  items5 = [tmp.root, memo1];
  let tmp19 = null != memo;
  if (tmp19) {
    obj3 = { source: null, style: null, blurRadius: 4, resizeMode: "cover" };
    let obj4 = { uri: null };
    obj4[0] = memo;
    obj3[0] = obj4;
    obj3[1] = tmp.backdropImage;
    tmp19 = callback(closure_5, obj3);
  }
  const items6 = [tmp19, , , ];
  obj5 = { style: tmp.backdropGradient, start: constants.START, end: constants.END, locations: [0.4, 0.75, 1], colors: ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)", "#000000"] };
  items6[1] = callback(importDefault(callback[18]), obj5);
  const obj6 = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
  obj7 = { style: tmp.header, children: null };
  const obj8 = {
    onPress: onClose,
    backImage() {
      return closure_1_14(stateFromStores(callback[21]).XSmallIcon, { size: "lg", style: lib.closeButtonIcon });
    },
    accessibilityLabel: null,
    displayMode: "minimal"
  };
  const intl = tmp4(tmp3[22]).intl;
  obj8[2] = intl.string(stateFromStores(callback[22]).t.cpT0Cq);
  obj7[1] = callback(stateFromStores(callback[20]).HeaderBackButton, obj8);
  const items7 = [callback(closure_7, obj7), , ];
  const obj9 = { style: { flex: 1 }, contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  const items8 = [tmp.preview, animatedStyle];
  const items9 = [callback(importDefault(callback[10]).View, { style: items8, children: callback(importDefault(callback[23]), { sku, size: 250 }) }), ];
  const obj11 = { style: items10, children: null };
  items10 = [tmp.messages, animatedStyle1];
  const items11 = [callback(stateFromStores(callback[24]).Text, { variant: "heading-xl/semibold", color: "text-overlay-light", style: tmp.title, children: title }), callback(stateFromStores(callback[24]).Text, { variant: "text-md/medium", color: "text-overlay-light", style: tmp.description, children: body })];
  obj11[1] = items11;
  items9[1] = closure_15(importDefault(callback[10]).View, obj11);
  obj9[3] = items9;
  items7[1] = closure_15(closure_6, obj9);
  const obj14 = { style: tmp.footer, children: null };
  let tmp22Result = null != finePrint;
  if (tmp22Result) {
    const obj15 = { variant: "text-xs/normal", color: "text-muted", style: null, children: null };
    obj15[2] = tmp.finePrint;
    obj15[3] = finePrint;
    tmp22Result = tmp22(tmp4(tmp3[24]).Text, obj15);
  }
  const items12 = [tmp22Result, ];
  const obj16 = { style: tmp.cta, children: null };
  if (onCtaPress == null) {
    onCtaPress = onClose;
  }
  const obj17 = { onPress: onCtaPress, text: null, icon: null, loading: null, size: "lg", grow: true };
  if (ctaLabel == null) {
    const intl2 = tmp4(tmp3[22]).intl;
    ctaLabel = intl2.string(tmp4(tmp3[22]).t.cpT0Cq);
  }
  obj17[1] = ctaLabel;
  obj17[2] = ctaIcon;
  obj17[3] = ctaLoading;
  obj16[1] = callback(stateFromStores(callback[25]).Button, obj17);
  items12[1] = callback(closure_7, obj16);
  obj14[1] = items12;
  items7[2] = closure_15(closure_7, obj14);
  obj6[5] = items7;
  items6[2] = closure_15(stateFromStores(callback[19]).SafeAreaPaddingView, obj6);
  const items13 = [tmp.curtain, animatedStyle2];
  items6[3] = callback(importDefault(callback[10]).View, { style: items13, pointerEvents: "none" });
  obj2[1] = items6;
  return closure_15(closure_7, obj2);
}
({ Image: c5, ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticEvents: unpackModuleId, Orientation: closure_12, VerticalGradient: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { root: null, backdropImage: null, backdropGradient: null, curtain: null, main: null, header: null, closeButtonIcon: null, body: null, preview: null, messages: null, title: null, description: null, footer: null, cta: null, finePrint: null };
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
createCacheKey[7] = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
createCacheKey[8] = { flexDirection: "row", justifyContent: "center", alignItems: "center" };
let obj3 = { tintColor: ThemesDefault.colors.WHITE };
createCacheKey[9] = { paddingTop: ThemesDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: ThemesDefault.space.PX_8 };
let obj4 = { paddingTop: ThemesDefault.space.PX_24, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: ThemesDefault.space.PX_8 };
createCacheKey[10] = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
let obj5 = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
createCacheKey[11] = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
let obj6 = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_32 };
createCacheKey[12] = { marginBottom: ThemesDefault.space.PX_16 };
let obj7 = { marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[13] = { marginHorizontal: ThemesDefault.space.PX_24 };
let obj8 = { marginHorizontal: ThemesDefault.space.PX_24 };
createCacheKey[14] = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_12 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
const obj10 = { linkAccountIcon: null };
let obj9 = { textAlign: "center", marginHorizontal: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_12 };
obj10[0] = { marginRight: ThemesDefault.space.PX_4 };
let closure_17 = createCacheKey.createStyles(obj10);
let closure_18 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx1(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0,1])}]};}" };
let closure_19 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
let closure_20 = { code: "function SocialLayerStorefrontPoductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_21 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let obj11 = { marginRight: ThemesDefault.space.PX_4 };
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
  let obj = skuId(stateFromStores[15]);
  let items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => ref.get(skuId));
  obj1 = skuId(stateFromStores[26]);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  getOrFetchApplication = obj1.useGetOrFetchApplication(applicationId);
  let tmp9 = getOrFetchApplication;
  const tmp = callback3();
  if (getOrFetchApplication == null) {
    tmp9 = null;
  }
  const tmp8Result = analyticsLocations(stateFromStores[27])(tmp9);
  fetched = tmp8Result.fetched;
  hasAlreadyLinked = tmp8Result.hasAlreadyLinked;
  canStartAuthorization = tmp8Result.canStartAuthorization;
  startAuthorization = tmp8Result.startAuthorization;
  const tmp8 = analyticsLocations(stateFromStores[27]);
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  let items1 = [analyticsLocations];
  const socialLayerStorefrontMobileAccountLinkingDisabled = skuId(stateFromStores[28]).useSocialLayerStorefrontMobileAccountLinkingDisabled(applicationId1);
  memo = fetched.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, analyticsLocations(stateFromStores[29]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  obj = { analyticsLocations: memo, skuId, applicationId: null, canStartAuthorization: null };
  let applicationId2;
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  obj[2] = applicationId2;
  obj[3] = canStartAuthorization;
  closure_9 = fetched.useRef(obj);
  const items2 = [canStartAuthorization];
  const effect = obj4.useEffect(() => {
    ref.current.canStartAuthorization = canStartAuthorization;
  }, items2);
  const items3 = [fetched, hasAlreadyLinked];
  const effect1 = obj4.useEffect(() => {
    if (fetched) {
      ({ analyticsLocations, skuId, applicationId, canStartAuthorization } = ref.current);
      let obj = analyticsLocations(stateFromStores[30]);
      obj = { location_stack: null, sku_id: null, application_id: null, is_gift: false, is_account_linked: null, can_start_authorization: null };
      obj[0] = analyticsLocations;
      obj[1] = skuId;
      obj[2] = applicationId;
      obj[4] = hasAlreadyLinked;
      obj[5] = canStartAuthorization;
      obj.track(closure_1_11.SLAYER_STOREFRONT_LINK_ACCOUNT_STEP_VIEWED, obj);
    }
  }, items3);
  const items4 = [startAuthorization, memo, skuId, ];
  let applicationId3;
  if (stateFromStores != null) {
    applicationId3 = stateFromStores.applicationId;
  }
  items4[3] = applicationId3;
  const callback = obj4.useCallback(() => {
    let obj = analyticsLocations(stateFromStores[30]);
    obj = { location_stack: memo, sku_id: skuId, application_id: null, is_gift: false };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[2] = applicationId;
    obj.track(closure_1_11.SLAYER_STOREFRONT_ACCOUNT_LINK_CLICKED, obj);
    startAuthorization({ analyticsLocations: memo });
  }, items4);
  analyticsLocations(stateFromStores[31])(() => {
    let obj = analyticsLocations(stateFromStores[30]);
    obj = { location_stack: memo, type: skuId(stateFromStores[32]).SOCIAL_LAYER_STOREFRONT_SELF_PURCHASE_SUCCESS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj.track(closure_1_11.OPEN_MODAL, obj);
  });
  let intl = tmp2(tmp3[22]).intl;
  const string = intl.string;
  if (hasAlreadyLinked) {
    let stringResult = string(tmp2(tmp3[22]).t["5glWta"]);
  } else {
    stringResult = string(tmp7(tmp3[33]).bRPsNX);
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
      const intl2 = skuId(stateFromStores[22]).intl;
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
      let formatToPlainStringResult = intl2.formatToPlainString(skuId(stateFromStores[22]).t.W2znvX, obj);
    } else {
      const intl = skuId(stateFromStores[22]).intl;
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
        formatToPlainStringResult = formatToPlainString(skuId(stateFromStores[22]).t["EgCl+Q"], obj);
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
        formatToPlainStringResult = formatToPlainString(analyticsLocations(stateFromStores[33]).eNNnIG, obj);
      }
    }
    return formatToPlainStringResult;
  }, items5);
  if (!hasAlreadyLinked) {
    let intl2 = tmp2(tmp3[22]).intl;
    obj = { numDays: null };
    obj[0] = closure_10;
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.TTj7ME, obj);
  }
  obj1 = { sku: stateFromStores, title: stringResult, body: memo1, finePrint: formatToPlainStringResult, ctaLabel: null, ctaIcon: null, ctaLoading: null, onCtaPress: null, onClose: null };
  let stringResult1;
  if (tmp21) {
    const intl3 = tmp2(tmp3[22]).intl;
    stringResult1 = intl3.string(tmp2(tmp3[22]).t["VDAhr+"]);
  }
  obj1[4] = stringResult1;
  let tmp27Result;
  if (tmp21) {
    const obj2 = { size: "xs", color: null, style: null };
    obj2[1] = tmp7(tmp3[9]).colors.WHITE;
    obj2[2] = tmp.linkAccountIcon;
    tmp27Result = tmp27(tmp2(tmp3[34]).ExperimentalGameControllerLinkIcon, obj2);
  }
  obj1[5] = tmp27Result;
  obj1[6] = !fetched;
  let tmp31;
  if (tmp21) {
    tmp31 = callback;
  }
  obj1[7] = tmp31;
  obj1[8] = skuId.onClose;
  return closure_14(PurchaseSuccessModalBase, obj1);
};
export const SocialLayerStorefrontProductGiftPurchaseSuccessModal = function SocialLayerStorefrontProductGiftPurchaseSuccessModal(analyticsLocations) {
  ({ skuId: require, orbsReward, recipient } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  let stateFromStores;
  let React;
  let obj = require(analyticsLocations[15]);
  let items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_9.get(closure_0));
  let items1 = [analyticsLocations];
  React = React.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, recipient(analyticsLocations[29]).SLAYER_STOREFRONT_NATIVE_PURCHASE_SUCCESS];
    return items1;
  }, items1);
  recipient(analyticsLocations[31])(() => {
    let obj = recipient(analyticsLocations[30]);
    obj = { location_stack: closure_4, type: closure_1_0(analyticsLocations[32]).SOCIAL_LAYER_STOREFRONT_GIFT_PURCHASE_SUCCESS_MODAL_KEY, sku_id: closure_0, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj[3] = applicationId;
    obj.track(closure_1_11.OPEN_MODAL, obj);
  });
  let intl = require(analyticsLocations[22]).intl;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items2 = [name, recipient];
  obj = {
    sku: stateFromStores,
    title: intl.string(require(analyticsLocations[22]).t["5glWta"]),
    body: React.useMemo(() => {
      const intl = closure_1_0(analyticsLocations[22]).intl;
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      const obj = { itemName: name, giftRecipient: null };
      let str = recipient(analyticsLocations[35]).getName(recipient);
      if (str == null) {
        str = "your recipient";
      }
      obj[1] = str;
      return intl.formatToPlainString(closure_1_0(analyticsLocations[22]).t["2VjPTw"], obj);
    }, items2),
    onClose: analyticsLocations.onClose
  };
  return callback(PurchaseSuccessModalBase, obj);
};