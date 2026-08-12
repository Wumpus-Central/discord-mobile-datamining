// discord_app/modules/collectibles/native/ProductPurchaseSuccessModal.tsx
import BalanceWidgetPill from "BalanceWidgetPill";
import _toArray from "_toArray";
import importDefaultResult1 from "importDefaultResult1";
import get_ActivityIndicator from "HapticFeedbackTypes";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import ME from "ME";
import jsxProd from "LinearGradient";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Background } from "../../../../_runtime/05316_Background.js";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { CollectiblesItemType } from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c10;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function CancelButton(arg0) {
  let onCancel;
  let require;
  ({ tintColor: require, onCancel } = arg0);
  let dependencyMap;
  dependencyMap = createCacheKey();
  const items = [onCancel];
  const callback = React.useCallback(() => {
    if (onCancel != null) {
      tmp();
    }
    onCancel(closeButtonIcon[10]).close();
  }, items);
  const obj = {
    onPress: callback,
    backImage() {
      const style = [closeButtonIcon.closeButtonIcon, { tintColor: closure_0 }];
      return outer1_12(outer1_0(closeButtonIcon[12]).XSmallIcon, { size: "lg", style });
    },
    accessibilityLabel: null,
    displayMode: "minimal"
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  return callback(Background.HeaderBackButton, obj);
}
function ProductPurchaseGradientBackground(product) {
  product = product.product;
  let backgroundColors;
  let importDefault;
  let token;
  let token1;
  backgroundColors = importDefault(token[19])(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  importDefault = tmp5;
  let obj = backgroundColors(tmp3[20]);
  token = obj.useToken(tmp2(tmp3[8]).colors.BACKGROUND_BASE_LOW);
  const tmp = callback2(product.type);
  token1 = backgroundColors(token[20]).useToken(tmp2(tmp3[8]).colors.BACKGROUND_SURFACE_HIGH);
  let items = [backgroundColors, token, token1, null != tertiary];
  const memo = React.useMemo(() => {
    if (null == backgroundColors) {
      const items = [token, token, token1, outer1_22, outer1_22];
      let items2 = items;
    } else {
      const primary2 = tmp.primary;
      const toHexStringResult = primary2.toHexString();
      if (c1) {
        const items1 = [toHexStringResult, , ];
        const secondary2 = tmp.secondary;
        items1[1] = secondary2.toHexString();
        const tertiary = tmp.tertiary;
        items1[2] = tertiary.toHexString();
        items2 = items1;
      } else {
        items2 = [toHexStringResult, , , , ];
        const primary = tmp.primary;
        items2[1] = primary.toHexString();
        const secondary = tmp.secondary;
        items2[2] = secondary.toHexString();
        items2[3] = outer1_22;
        items2[4] = outer1_22;
      }
    }
    return items2;
  }, items);
  obj = { style: tmp.backdrop, start: constants.START, end: constants.END, locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1], colors: memo };
  return callback(importDefault(token[21]), obj);
}
({ Image: closure_6, ScrollView: error, View: metroImportAll } = get_ActivityIndicator);
({ Orientation: c10, VerticalGradient: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
createCacheKey = { closeButtonIcon: null };
createCacheKey = { tintColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_16 = createCacheKey.createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = { root: null, header: null, headerLeading: null, imageBackground: null, backdrop: null, main: null, curtain: null, body: null, preview: null, previewBundle: null, messages: null, title: null, footer: null, cta: null };
  obj = { flex: 1, backgroundColor: Themes.colors.BACKGROUND_BASE_LOW };
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", paddingHorizontal: Themes.space.PX_16 };
  obj[1] = obj;
  obj[2] = { flex: 1, flexDirection: "row", alignItems: "center" };
  obj[3] = { resizeMode: "cover", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
  obj[4] = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
  obj[5] = { flex: 1 };
  obj[6] = { position: "absolute", backgroundColor: Themes.colors.BLACK, top: 0, bottom: 0, left: 0, right: 0 };
  obj[7] = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
  let num = 0;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    num = 1;
  }
  const obj2 = { flexDirection: "row", justifyContent: "center", alignItems: "center", flex: num, marginTop: null, marginHorizontal: null };
  let str = 0;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    str = "20%";
  }
  obj2[4] = str;
  let PX_32;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    PX_32 = tmp(712).space.PX_32;
  }
  obj2[5] = PX_32;
  if (flag) {
    if (arg0 === tmp3(1949).CollectiblesItemType.AVATAR_DECORATION) {
      const obj3 = { shadowColor: null, shadowOffset: null, shadowOpacity: 1, shadowRadius: 60, elevation: 24 };
      obj3[0] = tmp(712).unsafe_rawColors.PRIMARY_630;
      obj3[1] = { width: 0, height: 0 };
      let obj8 = obj3;
    }
    const merged = Object.assign(obj8);
    obj[8] = obj2;
    obj[9] = { flex: 1, justifyContent: "flex-start", alignItems: "center", minHeight: 250 };
    const obj4 = { paddingTop: null, minHeight: null, flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: null };
    obj4[0] = tmp(712).space.PX_24;
    let str2;
    if (arg0 === tmp3(1949).CollectiblesItemType.AVATAR_DECORATION) {
      str2 = "32%";
    }
    obj4[1] = str2;
    obj4[5] = tmp(712).space.PX_16;
    obj[10] = obj4;
    const obj5 = { textAlign: "center", marginHorizontal: null };
    obj5[1] = tmp(712).space.PX_32;
    obj[11] = obj5;
    const obj6 = { marginBottom: null };
    obj6[0] = tmp(712).space.PX_16;
    obj[12] = obj6;
    const obj7 = { flexDirection: "row", gap: null, paddingVertical: null, marginHorizontal: null, borderRadius: null };
    obj7[1] = tmp(712).space.PX_12;
    obj7[2] = tmp(712).space.PX_16;
    obj7[3] = tmp(712).space.PX_24;
    obj7[4] = tmp(712).radii.round;
    obj[13] = obj7;
    return obj;
  }
  obj8 = {};
});
let closure_18 = { code: "function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}" };
let closure_19 = { code: "function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}" };
let closure_20 = { code: "function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}" };
let closure_21 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let closure_22 = require("tinycolor")("black").toHexString();
let obj5 = require("tinycolor")("black");
let result = require("noop").fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessModal.tsx");

export default function ProductPurchaseSuccessModal(orbBalancePriorToPurchase) {
  let avatarDecorationSize;
  let avatarSize;
  let canUseNow;
  let handleEditProfile;
  let handleUseNow;
  let onCancel;
  let onSuccess;
  let product;
  let renderMessages;
  let sharedValue;
  let showOrbBalancePill;
  let tmp25;
  let useCategoryImage;
  ({ product, useCategoryImage } = orbBalancePriorToPurchase);
  if (useCategoryImage === undefined) {
    useCategoryImage = false;
  }
  ({ renderMessages, showOrbBalancePill, onSuccess, onCancel } = orbBalancePriorToPurchase);
  if (showOrbBalancePill === undefined) {
    showOrbBalancePill = false;
  }
  let prop = orbBalancePriorToPurchase.orbBalancePriorToPurchase;
  if (prop === undefined) {
    prop = null;
  }
  let stateFromStores;
  let callback;
  sharedValue = undefined;
  let obj = stateFromStores(sharedValue[22]);
  const currentUser = obj.useCurrentUser();
  const backgroundColors = callback(sharedValue[19])(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp6 = callback2(product.type, null != tertiary);
  let tmp2Result = tmp2(tmp3[20]);
  let obj3 = React;
  const token = tmp2Result.useToken(tmp4(tmp3[8]).colors.INTERACTIVE_TEXT_ACTIVE);
  stateFromStores = React.useRef(closure_21);
  callback = React.useCallback(() => {
    const arr = outer1_4(stateFromStores.current);
    const first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = stateFromStores(sharedValue[17]).triggerHapticFeedback(stateFromStores(sharedValue[17]).HapticFeedbackTypes.IMPACT_HEAVY);
        const obj3 = stateFromStores(sharedValue[17]);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback, first);
      }
      stateFromStores.current = substr;
    }
    if (substr.length >= outer1_21.length / 2) {
      const result1 = stateFromStores(sharedValue[17]).triggerHapticFeedback(stateFromStores(sharedValue[17]).HapticFeedbackTypes.IMPACT_LIGHT);
      const obj2 = stateFromStores(sharedValue[17]);
    } else {
      const result2 = stateFromStores(sharedValue[17]).triggerHapticFeedback(stateFromStores(sharedValue[17]).HapticFeedbackTypes.IMPACT_MEDIUM);
      const obj = stateFromStores(sharedValue[17]);
    }
  }, []);
  let items = [callback];
  const effect = React.useEffect(() => {
    callback();
    return () => {
      closure_0.current = [];
    };
  }, items);
  tmp2Result = tmp2(tmp3[23]);
  const avatarDecorationPreviewSizes = tmp2Result.useAvatarDecorationPreviewSizes();
  ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
  let items1 = [maybeApplyNoTextColorForLightCustomTheme];
  stateFromStores = stateFromStores(sharedValue[24]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp12 = product.type === tmp2(tmp3[9]).CollectiblesItemType.PROFILE_EFFECT;
  if (!tmp12) {
    tmp12 = product.type === tmp2(tmp3[9]).CollectiblesItemType.PROFILE_FRAME;
  }
  callback = tmp12;
  const tmp2Result1 = stateFromStores(sharedValue[24]);
  sharedValue = stateFromStores(sharedValue[14]).useSharedValue(0);
  const tmp2Result2 = stateFromStores(sharedValue[14]);
  const sharedValue1 = stateFromStores(sharedValue[14]).useSharedValue(0);
  const items2 = [sharedValue, stateFromStores, sharedValue1];
  const effect1 = obj3.useEffect(() => {
    let num = 1;
    if (!stateFromStores) {
      const obj = stateFromStores(sharedValue[14]);
      num = obj.withDelay(200, stateFromStores(sharedValue[15]).withSpring(1, { duration: 500, dampingRatio: 0.7 }));
      const obj2 = stateFromStores(sharedValue[15]);
    }
    const result = sharedValue.set(num);
    let num3 = 1;
    if (!stateFromStores) {
      const obj3 = stateFromStores(sharedValue[14]);
      num3 = obj3.withDelay(200, stateFromStores(sharedValue[16]).withTiming(1, { duration: 200 }));
      const obj4 = stateFromStores(sharedValue[16]);
    }
    const result1 = sharedValue1.set(num3);
  }, items2);
  const tmp2Result3 = stateFromStores(sharedValue[14]);
  const fn = function l() {
    let obj = { opacity: null, transform: null };
    obj[0] = stateFromStores(sharedValue[14]).interpolate(sharedValue.get(), [0, 1], [0.1, 1]);
    const obj2 = stateFromStores(sharedValue[14]);
    let num = 0;
    const value = sharedValue.get();
    if (callback) {
      num = 0.6;
    }
    obj = { scale: stateFromStores(sharedValue[14]).interpolate(value, [0, 1], items) };
    items = [num, 1];
    const items1 = [obj];
    obj[1] = items1;
    return obj;
  };
  obj = { interpolate: tmp2(tmp3[14]).interpolate, springInput: sharedValue, isProfilePreview: tmp12 };
  fn.__closure = obj;
  fn.__workletHash = 15385317790278;
  fn.__initData = closure_18;
  const animatedStyle = stateFromStores(sharedValue[14]).useAnimatedStyle(fn);
  const tmp2Result4 = stateFromStores(sharedValue[14]);
  const fn2 = function n() {
    let obj = { opacity: null, transform: null };
    obj[0] = stateFromStores(sharedValue[14]).interpolate(sharedValue.get(), [0, 1], [0, 1]);
    obj = { scale: null };
    const obj2 = stateFromStores(sharedValue[14]);
    obj[0] = stateFromStores(sharedValue[14]).interpolate(sharedValue.get(), [0, 1], [0.75, 1]);
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { interpolate: tmp2(tmp3[14]).interpolate, springInput: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 4517716462039;
  fn2.__initData = closure_19;
  const animatedStyle1 = stateFromStores(sharedValue[14]).useAnimatedStyle(fn2);
  const tmp2Result5 = stateFromStores(sharedValue[14]);
  const fn3 = function s() {
    const obj = { opacity: null };
    obj[0] = stateFromStores(sharedValue[14]).interpolate(sharedValue1.get(), [0, 1], [0.5, 0]);
    return obj;
  };
  const tmp2Result6 = stateFromStores(sharedValue[14]);
  fn3.__closure = { interpolate: stateFromStores(sharedValue[14]).interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 6018737312;
  fn3.__initData = closure_20;
  const animatedStyle2 = tmp2Result6.useAnimatedStyle(fn3);
  const obj1 = { interpolate: stateFromStores(sharedValue[14]).interpolate, linearInput: sharedValue1 };
  const category = stateFromStores(sharedValue[25]).useFetchCollectiblesProductCategory(product.skuId).category;
  if (category != null) {
    const mobileBgUrl = category.mobileBgUrl;
  }
  const tmp2Result7 = stateFromStores(sharedValue[25]);
  handleUseNow = stateFromStores(sharedValue[26]).useHandleUseNow({ product, onSuccess });
  const isApplying = handleUseNow.isApplying;
  ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow);
  const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
  const tmp2Result8 = stateFromStores(sharedValue[26]);
  const effect2 = obj3.useEffect(() => {
    stateFromStores(sharedValue[28]).lockOrientation(constants.PORTRAIT);
    return () => {
      const result = callback(table[28]).restoreDefaultOrientation();
    };
  }, []);
  const tmp2Result9 = stateFromStores(sharedValue[27]);
  const previewCollectibleProduct = stateFromStores(sharedValue[29]).usePreviewCollectibleProduct(product, true);
  const tmp2Result10 = stateFromStores(sharedValue[29]);
  const shopProductItems = stateFromStores(sharedValue[30]).useShopProductItems(product);
  const tmp2Result11 = stateFromStores(sharedValue[30]);
  [tmp25, sharedValue] = sharedValue1(obj3.useState(), 2);
  let obj2 = { style: tmp6.root, id: product.skuId, children: null };
  if (useCategoryImage) {
    if (null != mobileBgUrl) {
      obj3 = { source: null, style: null };
      let obj4 = { uri: null };
      obj4[0] = mobileBgUrl;
      obj3[0] = obj4;
      obj3[1] = tmp6.imageBackground;
      let tmp29 = callback(closure_6, obj3);
      let tmp30 = callback;
      let tmp31 = callback;
    }
    const items3 = [tmp29, , ];
    const items4 = [tmp6.main, ];
    let str;
    if (useCategoryImage) {
      str = "rgba(0, 0, 0, 0.3)";
    }
    const obj5 = { style: null, top: true, bottom: true, left: true, right: true, children: null };
    const obj6 = { backgroundColor: null };
    obj6[0] = str;
    items4[1] = obj6;
    obj5[0] = items4;
    const obj7 = { style: null, children: null };
    obj7[0] = tmp6.header;
    const obj8 = { style: null, children: null };
    obj8[0] = tmp6.headerLeading;
    if (showOrbBalancePill) {
      const obj9 = { initialRenderedBalance: null, balance: null };
      obj9[0] = prop;
      obj9[1] = tmp2Result9.useFetchVirtualCurrencyBalance().balance;
      showOrbBalancePill = tmp31(tmp2(tmp3[32]).BalanceWidgetPill, obj9);
    }
    obj8[1] = showOrbBalancePill;
    const items5 = [tmp31(tmp28, obj8), ];
    let toHexStringResult;
    if (backgroundColors != null) {
      const label = backgroundColors.label;
      toHexStringResult = label.toHexString();
    }
    if (toHexStringResult == null) {
      toHexStringResult = token;
    }
    const obj10 = { tintColor: null, onCancel: null };
    obj10[0] = toHexStringResult;
    obj10[1] = onCancel;
    items5[1] = tmp31(CancelButton, obj10);
    obj7[1] = items5;
    const items6 = [tmp27(tmp28, obj7), , ];
    const obj11 = { style: null, contentContainerStyle: null, alwaysBounceVertical: false, children: null };
    obj11[0] = { flex: 1 };
    obj11[1] = tmp6.body;
    const obj12 = { style: null, children: null };
    const items7 = [tmp6.preview, animatedStyle];
    obj12[0] = items7;
    const type = product.type;
    if (tmp2(tmp3[9]).CollectiblesItemType.BUNDLE === type) {
      const obj13 = { style: null, onLayout: null, children: null };
      obj13[0] = tmp6.previewBundle;
      obj13[1] = tmp26;
      let tmp30Result = null != tmp25;
      if (tmp30Result) {
        const obj14 = { deco: null, pfx: null, nameplate: null, previewAssets: null, disableStaticBackground: true, size: "large", targetSize: null, exposureLocation: "ProductPurchaseSuccessModal" };
        ({ firstAvatarDecoration: obj35[0], firstProfileEffect: obj35[1], firstNameplate: obj35[2] } = shopProductItems);
        obj14[3] = product.previewAssets;
        obj14[6] = tmp25;
        tmp30Result = tmp30(tmp4(tmp3[33]), obj14);
      }
      obj13[2] = tmp30Result;
      tmp30Result = tmp30(tmp28, obj13);
    } else if (tmp2(tmp3[9]).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj15 = { item: null, size: null, avatarSource: null, animate: null };
      obj15[0] = sharedValue1(product.items, 1)[0];
      obj15[1] = avatarDecorationSize;
      obj15[2] = avatarSource;
      obj15[3] = !stateFromStores;
      tmp30Result = tmp30(tmp4(tmp3[34]), obj15);
    } else if (tmp2(tmp3[9]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj16 = { user: null, profileEffect: null };
      obj16[0] = currentUser;
      obj16[1] = product.items[0];
      tmp30Result = tmp30(tmp4(tmp3[35]), obj16);
    } else if (tmp2(tmp3[9]).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj17 = { user: null, profileFrame: null };
      obj17[0] = currentUser;
      obj17[1] = product.items[0];
      tmp30Result = tmp30(tmp4(tmp3[36]), obj17);
    } else {
      tmp30Result = null;
      if (tmp2(tmp3[9]).CollectiblesItemType.NAMEPLATE === type) {
        const obj18 = { user: null, nameplate: null, animate: true };
        obj18[0] = currentUser;
        obj18[1] = product.items[0];
        tmp30Result = tmp30(tmp2(tmp3[37]).NameplatePreview, obj18);
      }
    }
    obj12[1] = tmp30Result;
    const items8 = [tmp31(tmp4(tmp3[14]).View, obj12), ];
    const obj19 = { style: null, children: null };
    const items9 = [tmp6.messages, animatedStyle1];
    obj19[0] = items9;
    if (null != renderMessages) {
      let renderMessagesResult = renderMessages();
    } else {
      const obj20 = { variant: "heading-xl/bold", color: "text-overlay-light", style: null, children: null };
      obj20[2] = tmp6.title;
      const intl3 = tmp2(tmp3[13]).intl;
      const obj21 = { itemName: null };
      obj21[0] = product.name;
      obj20[3] = intl3.format(tmp2(tmp3[13]).t.YNaxMp, obj21);
      const items10 = [tmp31(tmp2(tmp3[38]).Text, obj20), ];
      const obj22 = { variant: "text-md/medium", color: "text-overlay-light", style: null, children: null };
      obj22[2] = tmp6.title;
      let result = tmp2(tmp3[39]).isPremiumCollectiblesProduct(product);
      const intl4 = tmp2(tmp3[13]).intl;
      const format = intl4.format;
      const t = tmp2(tmp3[13]).t;
      if (result) {
        const obj23 = { itemName: null };
        obj23[0] = product.name;
        let formatResult = format(t.nW6E3m, obj23);
      } else {
        const obj24 = { itemName: null };
        obj24[0] = product.name;
        formatResult = format(t["4kp0AB"], obj24);
      }
      const obj25 = { children: null };
      obj22[3] = formatResult;
      items10[1] = tmp31(tmp2(tmp3[38]).Text, obj22);
      obj25[0] = items10;
      renderMessagesResult = tmp27(closure_14, obj25);
      const tmp2Result12 = tmp2(tmp3[39]);
      const tmp41 = closure_14;
    }
    obj19[1] = renderMessagesResult;
    items8[1] = tmp31(tmp4(tmp3[14]).View, obj19);
    obj11[3] = items8;
    items6[1] = tmp27(closure_7, obj11);
    const obj26 = { style: null, children: null };
    obj26[0] = tmp6.footer;
    const obj27 = { style: null, children: null };
    obj27[0] = tmp6.cta;
    if (canUseNow) {
      const obj28 = { loading: null, disabled: null, onPress: null, text: null, size: "lg", grow: true };
      obj28[0] = isApplying;
      obj28[1] = isApplying;
      obj28[2] = handleUseNow;
      const intl2 = tmp2(tmp3[13]).intl;
      obj28[3] = intl2.string(tmp2(tmp3[13]).t.MAS7uK);
      let obj29 = obj28;
    } else {
      obj29 = { onPress: null, text: null, size: "lg", grow: true };
      obj29[0] = handleEditProfile;
      const intl = tmp2(tmp3[13]).intl;
      obj29[1] = intl.string(tmp2(tmp3[13]).t["2p2aYz"]);
    }
    obj27[1] = tmp31(tmp2(tmp3[40]).Button, obj29);
    obj26[1] = tmp31(tmp28, obj27);
    items6[2] = tmp31(tmp28, obj26);
    obj5[5] = items6;
    items3[1] = tmp27(tmp2(tmp3[31]).SafeAreaPaddingView, obj5);
    const obj30 = { style: null, pointerEvents: "none" };
    const items11 = [tmp6.curtain, animatedStyle2];
    obj30[0] = items11;
    items3[2] = tmp31(tmp4(tmp3[14]).View, obj30);
    obj2[2] = items3;
    return tmp27(tmp28, obj2);
  }
  tmp29 = callback(ProductPurchaseGradientBackground, { product });
  tmp30 = callback;
  tmp31 = callback;
};