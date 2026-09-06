// discord_app/modules/collectibles/native/ProductPurchaseSuccessModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _mod5631 from "../../../../_runtime/metro/05631__.js";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import tinycolorDefault from "../../../../_runtime/07552_tinycolor.js";
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _toArray from "../../../../_runtime/00718__toArray.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
function CancelButton(arg0) {
  ({ tintColor: require, onCancel } = arg0);
  dependencyMap = closure_15();
  let items = [onCancel];
  const callback = noop.useCallback(() => {
    if (onCancel != null) {
      tmp();
    }
    ProductPurchaseSuccessActionCreatorsDefault.close();
  }, items);
  let obj = {
    onPress: callback,
    backImage() {
      let obj = { size: "lg", style: null };
      const items = [closeButtonIcon.closeButtonIcon];
      obj = { tintColor };
      items[1] = obj;
      obj.style = items;
      return closure_2_12(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: null,
    displayMode: "minimal",
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return closure_12(_mod5631.HeaderBackButton, obj);
}
function ProductPurchaseGradientBackground(product) {
  product = product.product;
  importDefault = undefined;
  let token;
  let token1;
  const backgroundColors = require("useCollectiblesShopStyles")(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  importDefault = tmp5;
  let obj = backgroundColors(tmp3[20]);
  token = obj.useToken(tmp2(tmp3[8]).colors.BACKGROUND_BASE_LOW);
  const tmp = closure_16(product.type);
  token1 = backgroundColors(token[20]).useToken(tmp2(tmp3[8]).colors.BACKGROUND_SURFACE_HIGH);
  let items = [backgroundColors, token, token1, null != tertiary];
  const memo = noop.useMemo(() => {
    if (null == backgroundColors) {
      const items = [token, token, token1, closure_22, closure_22];
      let items2 = items;
    } else {
      const primary2 = backgroundColors.primary;
      const toHexStringResult = primary2.toHexString();
      if (closure_1) {
        const items1 = [toHexStringResult, ,];
        const secondary2 = backgroundColors.secondary;
        items1[1] = secondary2.toHexString();
        const tertiary = backgroundColors.tertiary;
        items1[2] = tertiary.toHexString();
        items2 = items1;
      } else {
        items2 = [toHexStringResult, , , ,];
        const primary = backgroundColors.primary;
        items2[1] = primary.toHexString();
        const secondary = backgroundColors.secondary;
        items2[2] = secondary.toHexString();
        items2[3] = closure_22;
        items2[4] = closure_22;
      }
    }
    return items2;
  }, items);
  obj = {
    style: tmp.backdrop,
    start: constants.START,
    end: constants.END,
    locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1],
    colors: memo,
  };
  return closure_12(require("LinearGradient"), obj);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ Orientation: c10, VerticalGradient: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4560);
let createStyles = { closeButtonIcon: null };
createStyles = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.closeButtonIcon = createStyles;
let closure_15 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_16 = createStyles.createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = {
    root: null,
    header: null,
    headerLeading: null,
    imageBackground: null,
    backdrop: null,
    main: null,
    curtain: null,
    body: null,
    preview: null,
    previewBundle: null,
    messages: null,
    title: null,
    footer: null,
    cta: null,
  };
  obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.root = obj;
  obj = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.header = obj;
  obj.headerLeading = { flex: 1, flexDirection: "row", alignItems: "center" };
  obj.imageBackground = { resizeMode: "cover", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
  obj.backdrop = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
  obj.main = { flex: 1 };
  const rect = {
    position: "absolute",
    backgroundColor: nativeDefault.colors.BLACK,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  obj.curtain = rect;
  obj.body = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
  let num = 0;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    num = 1;
  }
  const obj1 = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: num,
    marginTop: null,
    marginHorizontal: null,
  };
  let str = 0;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    str = "20%";
  }
  obj1.marginTop = str;
  let PX_32;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    PX_32 = nativeDefault.space.PX_32;
  }
  obj1.marginHorizontal = PX_32;
  if (flag) {
    if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
      const obj2 = {
        shadowColor: nativeDefault.unsafe_rawColors.PRIMARY_630,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 60,
        elevation: 24,
      };
      let obj7 = obj2;
    }
    const merged = Object.assign(obj7);
    obj.preview = obj1;
    obj.previewBundle = { flex: 1, justifyContent: "flex-start", alignItems: "center", minHeight: 250 };
    const obj3 = {
      paddingTop: nativeDefault.space.PX_24,
      minHeight: null,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: null,
    };
    let str2;
    if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
      str2 = "32%";
    }
    obj3.minHeight = str2;
    obj3.gap = nativeDefault.space.PX_16;
    obj.messages = obj3;
    const obj4 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
    obj.title = obj4;
    const obj5 = { marginBottom: nativeDefault.space.PX_16 };
    obj.footer = obj5;
    const obj6 = {
      flexDirection: "row",
      gap: nativeDefault.space.PX_12,
      paddingVertical: nativeDefault.space.PX_16,
      marginHorizontal: nativeDefault.space.PX_24,
      borderRadius: nativeDefault.radii.round,
    };
    obj.cta = obj6;
    return obj;
  }
  obj7 = {};
});
const __initData = {
  code: "function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}",
};
const __initData2 = {
  code: "function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}",
};
const __initData3 = {
  code: "function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}",
};
let closure_21 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let closure_22 = tinycolorDefault("black").toHexString();
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessModal.tsx");

export default function ProductPurchaseSuccessModal(stageCollectibleChangeForEditProfile) {
  ({ product, useCategoryImage } = stageCollectibleChangeForEditProfile);
  if (useCategoryImage === undefined) {
    useCategoryImage = false;
  }
  ({ renderMessages, showOrbBalancePill, onSuccess, onCancel } = stageCollectibleChangeForEditProfile);
  if (showOrbBalancePill === undefined) {
    showOrbBalancePill = false;
  }
  let prop = stageCollectibleChangeForEditProfile.orbBalancePriorToPurchase;
  if (prop === undefined) {
    prop = null;
  }
  _require = undefined;
  let callback;
  dependencyMap = undefined;
  let obj = require("useCurrentUser");
  const currentUser = obj.useCurrentUser();
  const backgroundColors = callback(11079)(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp6 = closure_16(product.type, null != tertiary);
  let tmp2Result = tmp2(4262);
  let obj3 = noop;
  const token = tmp2Result.useToken(tmp4(576).colors.INTERACTIVE_TEXT_ACTIVE);
  _require = noop.useRef(length);
  callback = noop.useCallback(() => {
    const arr = _toArray(ref.current);
    const first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(callback, first);
      }
      ref.current = substr;
    }
    if (substr.length >= length.length / 2) {
      const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    } else {
      const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    }
  }, []);
  let items = [callback];
  const effect = noop.useEffect(() => {
    callback();
    return () => {
      ref.current = [];
    };
  }, items);
  tmp2Result = tmp2(11081);
  const avatarDecorationPreviewSizes = tmp2Result.useAvatarDecorationPreviewSizes();
  ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
  let items1 = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp12 = product.type === tmp2(1889).CollectiblesItemType.PROFILE_EFFECT;
  if (!tmp12) {
    tmp12 = product.type === tmp2(1889).CollectiblesItemType.PROFILE_FRAME;
  }
  closure_129_0 = stateFromStores;
  closure_129_1 = tmp12;
  const tmp2Result1 = require("initialize");
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  closure_129_2 = sharedValue;
  const tmp2Result2 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  closure_129_3 = sharedValue1;
  const items2 = [sharedValue, stateFromStores, sharedValue1];
  const effect1 = obj3.useEffect(() => {
    let num = 1;
    if (!closure_0) {
      const obj = ReanimatedRexport;
      num = obj.withDelay(200, spring.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
    }
    const result = _undefined.set(num);
    let num3 = 1;
    if (!closure_0) {
      const obj3 = ReanimatedRexport;
      num3 = obj3.withDelay(200, timing.withTiming(1, { duration: 200 }));
    }
    const result1 = _slicedToArray.set(num3);
  }, items2);
  const tmp2Result3 = require("ReanimatedRexport");
  const fn = function l() {
    let obj = { opacity: ReanimatedRexport.interpolate(_undefined.get(), [0, 1], [0.1, 1]), transform: null };
    let num = 0;
    value = _undefined.get();
    if (callback) {
      num = 0.6;
    }
    obj = { scale: null };
    const items = [num, 1];
    obj.scale = ReanimatedRexport.interpolate(value, [0, 1], items);
    const items1 = [obj];
    obj.transform = items1;
    return obj;
  };
  obj = { interpolate: tmp2(4296).interpolate, springInput: sharedValue, isProfilePreview: tmp12 };
  fn.__closure = obj;
  fn.__workletHash = 15385317790278;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const tmp2Result4 = require("ReanimatedRexport");
  const fn2 = function n() {
    let obj = { opacity: ReanimatedRexport.interpolate(_undefined.get(), [0, 1], [0, 1]), transform: null };
    obj = { scale: null };
    obj.scale = ReanimatedRexport.interpolate(_undefined.get(), [0, 1], [0.75, 1]);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { interpolate: tmp2(4296).interpolate, springInput: sharedValue };
  fn2.__closure = obj;
  fn2.__workletHash = 4517716462039;
  fn2.__initData = __initData2;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(fn2);
  const tmp2Result5 = require("ReanimatedRexport");
  const fn3 = function s() {
    const obj = { opacity: ReanimatedRexport.interpolate(_slicedToArray.get(), [0, 1], [0.5, 0]) };
    return obj;
  };
  const tmp2Result6 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 6018737312;
  fn3.__initData = __initData3;
  const animatedStyle2 = tmp2Result6.useAnimatedStyle(fn3);
  const obj1 = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
  const category = require("useFetchCollectiblesProductCategory").useFetchCollectiblesProductCategory(
    product.skuId,
  ).category;
  if (category != null) {
    const mobileBgUrl = category.mobileBgUrl;
  }
  const tmp2Result7 = require("useFetchCollectiblesProductCategory");
  handleUseNow = require("useHandleUseNow").useHandleUseNow({
    product,
    onSuccess,
    stageCollectibleChangeForEditProfile: stageCollectibleChangeForEditProfile.stageCollectibleChangeForEditProfile,
  });
  const isApplying = handleUseNow.isApplying;
  ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow);
  const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
  const tmp2Result8 = require("useHandleUseNow");
  const effect2 = obj3.useEffect(() => {
    ref(_undefined[28]).lockOrientation(constants.PORTRAIT);
    return () => {
      const result = ref(_undefined[28]).restoreDefaultOrientation();
    };
  }, []);
  const tmp2Result9 = require("useFetchVirtualCurrencyBalance");
  const previewCollectibleProduct = require("usePreviewCollectiblesProduct").usePreviewCollectibleProduct(
    product,
    true,
  );
  const tmp2Result10 = require("usePreviewCollectiblesProduct");
  const shopProductItems = require("useShopProductItems").useShopProductItems(product);
  const tmp2Result11 = require("useShopProductItems");
  [tmp25, c2] = _slicedToArray(obj3.useState(), 2);
  let obj2 = { style: tmp6.root, id: product.skuId, children: null };
  if (useCategoryImage) {
    if (null != mobileBgUrl) {
      obj3 = { source: null, style: null };
      let obj4 = { uri: mobileBgUrl };
      obj3.source = obj4;
      obj3.style = tmp6.imageBackground;
      let tmp29 = closure_12(closure_6, obj3);
      let tmp30 = closure_12;
      let tmp31 = closure_12;
    }
    const items3 = [tmp29, ,];
    const items4 = [tmp6.main];
    let str;
    if (useCategoryImage) {
      str = "rgba(0, 0, 0, 0.3)";
    }
    const rect = { style: null, top: true, bottom: true, left: true, right: true, children: null };
    const obj5 = { backgroundColor: str };
    items4[1] = obj5;
    rect.style = items4;
    const obj6 = { style: tmp6.header, children: null };
    const obj7 = { style: tmp6.headerLeading, children: null };
    if (showOrbBalancePill) {
      const obj8 = { initialRenderedBalance: prop, balance: tmp2Result9.useFetchVirtualCurrencyBalance().balance };
      showOrbBalancePill = tmp31(tmp2(11090).BalanceWidgetPill, obj8);
    }
    obj7.children = showOrbBalancePill;
    const items5 = [tmp31(closure_8, obj7)];
    let toHexStringResult;
    if (backgroundColors != null) {
      const label = backgroundColors.label;
      toHexStringResult = label.toHexString();
    }
    if (toHexStringResult == null) {
      toHexStringResult = token;
    }
    const obj9 = { tintColor: toHexStringResult, onCancel };
    items5[1] = tmp31(CancelButton, obj9);
    obj6.children = items5;
    const items6 = [closure_13(closure_8, obj6), ,];
    const obj10 = { style: { flex: 1 }, contentContainerStyle: tmp6.body, alwaysBounceVertical: false, children: null };
    const obj11 = { style: null, children: null };
    const items7 = [tmp6.preview, animatedStyle];
    obj11.style = items7;
    const type = product.type;
    if (tmp2(1889).CollectiblesItemType.BUNDLE === type) {
      const obj12 = { style: tmp6.previewBundle, onLayout: tmp26, children: null };
      let tmp30Result = null != tmp25;
      if (tmp30Result) {
        const obj13 = {
          deco: null,
          pfx: null,
          nameplate: null,
          previewAssets: null,
          disableStaticBackground: true,
          size: "large",
          targetSize: null,
        };
        ({
          firstAvatarDecoration: obj35.deco,
          firstProfileEffect: obj35.pfx,
          firstNameplate: obj35.nameplate,
        } = shopProductItems);
        obj13.previewAssets = product.previewAssets;
        obj13.targetSize = tmp25;
        tmp30Result = tmp30(tmp4(8797), obj13);
      }
      obj12.children = tmp30Result;
      tmp30Result = tmp30(closure_8, obj12);
    } else if (tmp2(1889).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj14 = {
        item: _slicedToArray(product.items, 1)[0],
        size: avatarDecorationSize,
        avatarSource,
        animate: !stateFromStores,
      };
      tmp30Result = tmp30(tmp4(8810), obj14);
    } else if (tmp2(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj15 = { user: currentUser, profileEffect: product.items[0] };
      tmp30Result = tmp30(tmp4(11108), obj15);
    } else if (tmp2(1889).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj16 = { user: currentUser, profileFrame: product.items[0] };
      tmp30Result = tmp30(tmp4(11219), obj16);
    } else {
      tmp30Result = null;
      if (tmp2(1889).CollectiblesItemType.NAMEPLATE === type) {
        const obj17 = { user: currentUser, nameplate: product.items[0], animate: true };
        tmp30Result = tmp30(tmp2(11220).NameplatePreview, obj17);
      }
    }
    obj11.children = tmp30Result;
    const items8 = [tmp31(tmp4(4296).View, obj11)];
    const obj18 = { style: null, children: null };
    const items9 = [tmp6.messages, animatedStyle1];
    obj18.style = items9;
    if (null != renderMessages) {
      let renderMessagesResult = renderMessages();
    } else {
      const obj19 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp6.title, children: null };
      const intl3 = tmp2(1114).intl;
      const obj20 = { itemName: product.name };
      obj19.children = intl3.format(tmp2(1114).t.YNaxMp, obj20);
      const items10 = [tmp31(tmp2(4556).Text, obj19)];
      const obj21 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp6.title, children: null };
      let result = tmp2(7554).isPremiumCollectiblesProduct(product);
      const intl4 = tmp2(1114).intl;
      const format = intl4.format;
      const t = tmp2(1114).t;
      if (result) {
        const obj22 = { itemName: product.name };
        let formatResult = format(t.nW6E3m, obj22);
      } else {
        const obj23 = { itemName: product.name };
        formatResult = format(t["4kp0AB"], obj23);
      }
      const obj24 = { children: null };
      obj21.children = formatResult;
      items10[1] = tmp31(tmp2(4556).Text, obj21);
      obj24.children = items10;
      renderMessagesResult = closure_13(closure_14, obj24);
      const tmp2Result12 = tmp2(7554);
    }
    obj18.children = renderMessagesResult;
    items8[1] = tmp31(tmp4(4296).View, obj18);
    obj10.children = items8;
    items6[1] = closure_13(closure_7, obj10);
    const obj25 = { style: tmp6.footer, children: null };
    const obj26 = { style: tmp6.cta, children: null };
    if (canUseNow) {
      const obj27 = {
        loading: isApplying,
        disabled: isApplying,
        onPress: handleUseNow,
        text: null,
        size: "lg",
        grow: true,
      };
      const intl2 = tmp2(1114).intl;
      obj27.text = intl2.string(tmp2(1114).t.MAS7uK);
      let obj28 = obj27;
    } else {
      obj28 = { onPress: handleEditProfile, text: null, size: "lg", grow: true };
      const intl = tmp2(1114).intl;
      obj28.text = intl.string(tmp2(1114).t["2p2aYz"]);
    }
    obj26.children = tmp31(tmp2(4975).Button, obj28);
    obj25.children = tmp31(closure_8, obj26);
    items6[2] = tmp31(closure_8, obj25);
    rect.children = items6;
    items3[1] = closure_13(tmp2(7123).SafeAreaPaddingView, rect);
    const obj29 = { style: null, pointerEvents: "none" };
    const items11 = [tmp6.curtain, animatedStyle2];
    obj29.style = items11;
    items3[2] = tmp31(tmp4(4296).View, obj29);
    obj2.children = items3;
    return closure_13(closure_8, obj2);
  }
  tmp29 = closure_12(ProductPurchaseGradientBackground, { product });
  tmp30 = closure_12;
  tmp31 = closure_12;
  const tmp24 = _slicedToArray(obj3.useState(), 2);
}
