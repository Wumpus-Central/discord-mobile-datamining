// discord_app/modules/collectibles/native/ProductPurchaseSuccessModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _mod5848 from "../../../../_runtime/metro/05848__.js";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import tinycolorDefault from "../../../../_runtime/07794_tinycolor.js";
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _toArray from "../../../../_runtime/00718__toArray.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

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
      const obj = { size: "lg", style: null };
      const items = [closeButtonIcon.closeButtonIcon, { tintColor }];
      obj.style = items;
      return closure_2_12(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: null,
    displayMode: "minimal",
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return closure_12(_mod5848.HeaderBackButton, obj);
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
  const tmp = closure_16(product.type);
  token = backgroundColors(token[20]).useToken(tmp2(tmp3[8]).colors.BACKGROUND_BASE_LOW);
  const obj = backgroundColors(token[20]);
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
  return closure_12(require("LinearGradient"), {
    style: tmp.backdrop,
    start: constants.START,
    end: constants.END,
    locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1],
    colors: memo,
  });
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1074);
({ Orientation: c10, VerticalGradient: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let createStyles = fn(4756);
let obj2 = { closeButtonIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY } };
let closure_15 = createStyles.createStyles(obj2);
createStyles = fn(4756);
let closure_16 = createStyles.createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = {
    root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
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
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.header = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
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
  const obj4 = {
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
  obj4.marginTop = str;
  let PX_32;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    PX_32 = nativeDefault.space.PX_32;
  }
  obj4.marginHorizontal = PX_32;
  if (flag) {
    if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
      const obj5 = {
        shadowColor: nativeDefault.unsafe_rawColors.PRIMARY_630,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 60,
        elevation: 24,
      };
      let obj10 = obj5;
    }
    const merged = Object.assign(obj10);
    obj.preview = obj4;
    obj.previewBundle = { flex: 1, justifyContent: "flex-start", alignItems: "center", minHeight: 250 };
    const obj6 = {
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
    obj6.minHeight = str2;
    obj6.gap = nativeDefault.space.PX_16;
    obj.messages = obj6;
    const obj7 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
    obj.title = obj7;
    const obj8 = { marginBottom: nativeDefault.space.PX_16 };
    obj.footer = obj8;
    const obj9 = {
      flexDirection: "row",
      gap: nativeDefault.space.PX_12,
      paddingVertical: nativeDefault.space.PX_16,
      marginHorizontal: nativeDefault.space.PX_24,
      borderRadius: nativeDefault.radii.round,
    };
    obj.cta = obj9;
    return obj;
  }
  obj10 = {};
  const obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
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
let obj3 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
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
  const currentUser = require("useCurrentUser").useCurrentUser();
  const backgroundColors = callback(11347)(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp6 = closure_16(product.type, null != tertiary);
  let obj = require("useCurrentUser");
  const token = require("useToken").useToken(tmp4(576).colors.INTERACTIVE_TEXT_ACTIVE);
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
  const tmp2Result = require("useToken");
  const avatarDecorationPreviewSizes = require("useAvatarDecorationPreviewSizes").useAvatarDecorationPreviewSizes();
  ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
  const tmp2Result14 = require("useAvatarDecorationPreviewSizes");
  let items1 = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp12 = product.type === tmp2(1973).CollectiblesItemType.PROFILE_EFFECT;
  if (!tmp12) {
    tmp12 = product.type === tmp2(1973).CollectiblesItemType.PROFILE_FRAME;
  }
  closure_129_0 = stateFromStores;
  closure_129_1 = tmp12;
  const tmp2Result15 = require("initialize");
  const sharedValue = require("ReanimatedRexport").useSharedValue(0);
  closure_129_2 = sharedValue;
  const tmp2Result16 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  closure_129_3 = sharedValue1;
  const items2 = [sharedValue, stateFromStores, sharedValue1];
  const effect1 = noop.useEffect(() => {
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
  const tmp2Result17 = require("ReanimatedRexport");
  const fn = function l() {
    const obj = { opacity: ReanimatedRexport.interpolate(_undefined.get(), [0, 1], [0.1, 1]), transform: null };
    let num = 0;
    value = _undefined.get();
    if (callback) {
      num = 0.6;
    }
    const obj4 = { scale: null };
    const items = [num, 1];
    obj4.scale = ReanimatedRexport.interpolate(value, [0, 1], items);
    const items1 = [obj4];
    obj.transform = items1;
    return obj;
  };
  const tmp2Result18 = require("ReanimatedRexport");
  fn.__closure = {
    interpolate: require("ReanimatedRexport").interpolate,
    springInput: sharedValue,
    isProfilePreview: tmp12,
  };
  fn.__workletHash = 15385317790278;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result18.useAnimatedStyle(fn);
  let obj2 = {
    interpolate: require("ReanimatedRexport").interpolate,
    springInput: sharedValue,
    isProfilePreview: tmp12,
  };
  const fn2 = function n() {
    const obj = { opacity: ReanimatedRexport.interpolate(_undefined.get(), [0, 1], [0, 1]), transform: null };
    const obj3 = { scale: null };
    obj3.scale = ReanimatedRexport.interpolate(_undefined.get(), [0, 1], [0.75, 1]);
    const items = [obj3];
    obj.transform = items;
    return obj;
  };
  const tmp2Result19 = require("ReanimatedRexport");
  fn2.__closure = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  fn2.__workletHash = 4517716462039;
  fn2.__initData = __initData2;
  const animatedStyle1 = tmp2Result19.useAnimatedStyle(fn2);
  let obj3 = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
  const fn3 = function s() {
    const obj = { opacity: ReanimatedRexport.interpolate(_slicedToArray.get(), [0, 1], [0.5, 0]) };
    return obj;
  };
  const tmp2Result20 = require("ReanimatedRexport");
  fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
  fn3.__workletHash = 6018737312;
  fn3.__initData = __initData3;
  const animatedStyle2 = tmp2Result20.useAnimatedStyle(fn3);
  const obj5 = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
  const category = require("useFetchCollectiblesProductCategory").useFetchCollectiblesProductCategory(
    product.skuId,
  ).category;
  if (category != null) {
    const mobileBgUrl = category.mobileBgUrl;
  }
  const tmp2Result21 = require("useFetchCollectiblesProductCategory");
  const handleUseNow1 = require("useHandleUseNow").useHandleUseNow({
    product,
    onSuccess,
    stageCollectibleChangeForEditProfile: stageCollectibleChangeForEditProfile.stageCollectibleChangeForEditProfile,
  });
  const isApplying = handleUseNow1.isApplying;
  ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow1);
  const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
  const tmp2Result22 = require("useHandleUseNow");
  const effect2 = noop.useEffect(() => {
    ref(_undefined[28]).lockOrientation(constants.PORTRAIT);
    return () => {
      const result = ref(_undefined[28]).restoreDefaultOrientation();
    };
  }, []);
  const tmp2Result23 = require("useFetchVirtualCurrencyBalance");
  const previewCollectibleProduct = require("usePreviewCollectiblesProduct").usePreviewCollectibleProduct(
    product,
    true,
  );
  const tmp2Result24 = require("usePreviewCollectiblesProduct");
  const shopProductItems = require("useShopProductItems").useShopProductItems(product);
  const tmp2Result25 = require("useShopProductItems");
  [tmp25, c2] = noop.useState();
  const obj6 = { style: tmp6.root, id: product.skuId, children: null };
  if (useCategoryImage) {
    if (null != mobileBgUrl) {
      const obj7 = { source: null, style: null };
      const obj8 = { uri: mobileBgUrl };
      obj7.source = obj8;
      obj7.style = tmp6.imageBackground;
      let tmp29 = closure_12(closure_6, obj7);
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
    const obj9 = { backgroundColor: str };
    items4[1] = obj9;
    rect.style = items4;
    const obj10 = { style: tmp6.header, children: null };
    const obj11 = { style: tmp6.headerLeading, children: null };
    if (showOrbBalancePill) {
      const obj12 = { initialRenderedBalance: prop, balance: tmp2Result23.useFetchVirtualCurrencyBalance().balance };
      showOrbBalancePill = tmp31(tmp2(11358).BalanceWidgetPill, obj12);
    }
    obj11.children = showOrbBalancePill;
    const items5 = [tmp31(closure_8, obj11)];
    let toHexStringResult;
    if (backgroundColors != null) {
      const label = backgroundColors.label;
      toHexStringResult = label.toHexString();
    }
    if (toHexStringResult == null) {
      toHexStringResult = token;
    }
    const obj13 = { tintColor: toHexStringResult, onCancel };
    items5[1] = tmp31(CancelButton, obj13);
    obj10.children = items5;
    const items6 = [closure_13(closure_8, obj10), ,];
    const obj14 = { style: { flex: 1 }, contentContainerStyle: tmp6.body, alwaysBounceVertical: false, children: null };
    const obj15 = { style: null, children: null };
    const items7 = [tmp6.preview, animatedStyle];
    obj15.style = items7;
    const type = product.type;
    if (tmp2(1973).CollectiblesItemType.BUNDLE === type) {
      const obj16 = { style: tmp6.previewBundle, onLayout: tmp26, children: null };
      let tmp30Result = null != tmp25;
      if (tmp30Result) {
        const obj17 = {
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
        obj17.previewAssets = product.previewAssets;
        obj17.targetSize = tmp25;
        tmp30Result = tmp30(tmp4(9078), obj17);
      }
      obj16.children = tmp30Result;
      let tmp30Result2 = tmp30(closure_8, obj16);
    } else if (tmp2(1973).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj18 = {
        item: _slicedToArray(product.items, 1)[0],
        size: avatarDecorationSize,
        avatarSource,
        animate: !stateFromStores,
      };
      tmp30Result2 = tmp30(tmp4(9091), obj18);
    } else if (tmp2(1973).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj19 = { user: currentUser, profileEffect: product.items[0] };
      tmp30Result2 = tmp30(tmp4(11376), obj19);
    } else if (tmp2(1973).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj20 = { user: currentUser, profileFrame: product.items[0] };
      tmp30Result2 = tmp30(tmp4(11485), obj20);
    } else {
      tmp30Result2 = null;
      if (tmp2(1973).CollectiblesItemType.NAMEPLATE === type) {
        const obj21 = { user: currentUser, nameplate: product.items[0], animate: true };
        tmp30Result2 = tmp30(tmp2(11486).NameplatePreview, obj21);
      }
    }
    obj15.children = tmp30Result2;
    const items8 = [tmp31(tmp4(4492).View, obj15)];
    const obj22 = { style: null, children: null };
    const items9 = [tmp6.messages, animatedStyle1];
    obj22.style = items9;
    if (null != renderMessages) {
      let renderMessagesResult = renderMessages();
    } else {
      const obj23 = { variant: "heading-xl/bold", color: "text-overlay-light", style: tmp6.title, children: null };
      const intl3 = tmp2(1115).intl;
      const obj24 = { itemName: product.name };
      obj23.children = intl3.format(tmp2(1115).t.YNaxMp, obj24);
      const items10 = [tmp31(tmp2(4752).Text, obj23)];
      const obj25 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp6.title, children: null };
      let result = tmp2(7796).isPremiumCollectiblesProduct(product);
      const intl4 = tmp2(1115).intl;
      const format = intl4.format;
      const t = tmp2(1115).t;
      if (result) {
        const obj26 = { itemName: product.name };
        let formatResult = format(t.nW6E3m, obj26);
      } else {
        const obj27 = { itemName: product.name };
        formatResult = format(t["4kp0AB"], obj27);
      }
      const obj28 = { children: null };
      obj25.children = formatResult;
      items10[1] = tmp31(tmp2(4752).Text, obj25);
      obj28.children = items10;
      renderMessagesResult = closure_13(closure_14, obj28);
      const tmp2Result26 = tmp2(7796);
    }
    obj22.children = renderMessagesResult;
    items8[1] = tmp31(tmp4(4492).View, obj22);
    obj14.children = items8;
    items6[1] = closure_13(closure_7, obj14);
    const obj29 = { style: tmp6.footer, children: null };
    const obj30 = { style: tmp6.cta, children: null };
    if (canUseNow) {
      const obj31 = {
        loading: isApplying,
        disabled: isApplying,
        onPress: handleUseNow,
        text: null,
        size: "lg",
        grow: true,
      };
      const intl2 = tmp2(1115).intl;
      obj31.text = intl2.string(tmp2(1115).t.MAS7uK);
      let obj32 = obj31;
    } else {
      obj32 = { onPress: handleEditProfile, text: null, size: "lg", grow: true };
      const intl = tmp2(1115).intl;
      obj32.text = intl.string(tmp2(1115).t["2p2aYz"]);
    }
    obj30.children = tmp31(tmp2(5186).Button, obj32);
    obj29.children = tmp31(closure_8, obj30);
    items6[2] = tmp31(closure_8, obj29);
    rect.children = items6;
    items3[1] = closure_13(tmp2(7368).SafeAreaPaddingView, rect);
    const obj33 = { style: null, pointerEvents: "none" };
    const items11 = [tmp6.curtain, animatedStyle2];
    obj33.style = items11;
    items3[2] = tmp31(tmp4(4492).View, obj33);
    obj6.children = items3;
    return closure_13(closure_8, obj6);
  }
  tmp29 = closure_12(ProductPurchaseGradientBackground, { product });
  tmp30 = closure_12;
  tmp31 = closure_12;
  const tmp24 = _slicedToArray(noop.useState(), 2);
}
