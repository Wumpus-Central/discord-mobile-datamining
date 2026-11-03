// discord_app/modules/collectibles/native/ProductPurchaseSuccessModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _mod7131 from "../../../../_runtime/metro/07131__.js";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import tinycolorDefault from "../../../../_runtime/07854_tinycolor.js";
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators.tsx";
import useCollectiblesShopStylesDefault from "../useCollectiblesShopStyles.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _toArray from "../../../../_runtime/00717__toArray.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
function CancelButton(arg0) {
  ({ tintColor: require, onCancel } = arg0);
  dependencyMap = closure_14();
  items = [onCancel];
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
      items = [closeButtonIcon.closeButtonIcon, { tintColor }];
      obj.style = items;
      return closure_2_11(XSmallIcon.XSmallIcon, obj);
    },
    accessibilityLabel: null,
    displayMode: "minimal",
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return closure_11(_mod7131.HeaderBackButton, obj);
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
  const tmp = closure_15(product.type);
  token = backgroundColors(token[20]).useToken(tmp2(tmp3[8]).colors.BACKGROUND_BASE_LOW);
  const obj = backgroundColors(token[20]);
  token1 = backgroundColors(token[20]).useToken(tmp2(tmp3[8]).colors.BACKGROUND_SURFACE_HIGH);
  items = [backgroundColors, token, token1, null != tertiary];
  const memo = noop.useMemo(() => {
    if (null == backgroundColors) {
      items = [token, token, token1, closure_21, closure_21];
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
        items2[3] = closure_21;
        items2[4] = closure_21;
      }
    }
    return items2;
  }, items);
  return closure_11(require("LinearGradient"), {
    style: tmp.backdrop,
    start: constants.START,
    end: constants.END,
    locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1],
    colors: memo,
  });
}
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1072);
({ Orientation: closure_9, VerticalGradient: closure_10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let createStyles = fn(5141);
let obj2 = { closeButtonIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY } };
let closure_14 = createStyles.createStyles(obj2);
createStyles = fn(5141);
let closure_15 = createStyles.createStyles((arg0) => {
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
let closure_17 = {
  code: "(function ProductPurchaseSuccessModalTsx1(){let[interpolate,springInput,isProfilePreview]=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};})",
};
let closure_18 = {
  code: "(function ProductPurchaseSuccessModalTsx2(){let[interpolate,springInput]=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};})",
};
let closure_19 = {
  code: "(function ProductPurchaseSuccessModalTsx3(){let[interpolate,linearInput]=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};})",
};
let closure_20 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
let obj3 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_21 = tinycolorDefault("black").toHexString();
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
  importDefault = undefined;
  dependencyMap = undefined;
  const currentUser = require("useCurrentUser").useCurrentUser();
  const backgroundColors = useCollectiblesShopStylesDefault(product.styles).backgroundColors;
  let tertiary;
  if (backgroundColors != null) {
    tertiary = backgroundColors.tertiary;
  }
  const tmp6 = closure_15(product.type, null != tertiary);
  let obj = require("useCurrentUser");
  const token = require("useToken").useToken(tmp4(575).colors.INTERACTIVE_TEXT_ACTIVE);
  _require = noop.useRef(length);
  const callback = noop.useCallback(() => {
    const arr = _toArray(_undefined.current);
    const first = arr[0];
    const substr = arr.slice(1);
    if (null != first) {
      if (0 === substr.length) {
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
      }
      if (null != first) {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(c1, first);
      }
      _undefined.current = substr;
    }
    if (substr.length >= length.length / 2) {
      const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    } else {
      const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    }
  }, []);
  importDefault = callback;
  items = [callback];
  const effect = noop.useEffect(() => {
    _undefined2();
    return () => {
      _undefined.current = [];
    };
  }, items);
  const tmp2Result = require("useToken");
  const avatarDecorationPreviewSizes = require("useAvatarDecorationPreviewSizes").useAvatarDecorationPreviewSizes();
  ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
  const tmp2Result13 = require("useAvatarDecorationPreviewSizes");
  let items1 = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let tmp12 = product.type === tmp2(2116).CollectiblesItemType.PROFILE_EFFECT;
  if (!tmp12) {
    tmp12 = product.type === tmp2(2116).CollectiblesItemType.PROFILE_FRAME;
  }
  closure_129_0 = stateFromStores;
  const tmp2Result14 = require("initialize");
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_129_1 = sharedValue;
  const tmp2Result15 = require("../../../../_runtime/metro/01652__.js");
  const sharedValue1 = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  closure_129_2 = sharedValue1;
  const items2 = [sharedValue, stateFromStores, sharedValue1];
  const effect1 = noop.useEffect(() => {
    let num = 1;
    if (!c0) {
      const obj = _mod1652;
      const obj3 = { duration: null, dampingRatio: 0.7 };
      const _Math = Math;
      obj3.duration = Math.round(333.3333333333333);
      num = obj.withDelay(200, spring_spring.withSpring(1, obj3));
    }
    const result = _undefined2.set(num);
    let num4 = 1;
    if (!c0) {
      const obj4 = _mod1652;
      num4 = obj4.withDelay(200, timing_timing.withTiming(1, { duration: 200 }));
    }
    const result1 = _undefined3.set(num4);
  }, items2);
  const tmp2Result16 = require("../../../../_runtime/metro/01652__.js");
  const items3 = [closure_17, require("../../../../_runtime/metro/01652__.js").interpolate, sharedValue, tmp12];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp16, tmp17, tmp18, tmp19] = items3;
  class ProductPurchaseSuccessModalTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0.1, 1]), transform: null };
      tmp = closure_0;
      num = 0;
      value = closure_1.get();
      if (closure_2) {
        num = 0.6;
      }
      obj1 = { scale: null };
      items = [,];
      items[0] = num;
      items[1] = 1;
      obj1.scale = tmp(value, [0, 1], items);
      items1 = [];
      items1[0] = obj1;
      obj.transform = items1;
      return obj;
    }
  }
  const items4 = [tmp17, tmp18, tmp19];
  ProductPurchaseSuccessModalTsx1.__closure = items4;
  ProductPurchaseSuccessModalTsx1.__workletHash = 9824734884799;
  ProductPurchaseSuccessModalTsx1.__initData = tmp16;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ProductPurchaseSuccessModalTsx1,
  );
  const tmp2Result17 = require("../../../../_runtime/metro/01652__.js");
  const items5 = [closure_18, require("../../../../_runtime/metro/01652__.js").interpolate, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp21, tmp22, tmp23] = items5;
  class ProductPurchaseSuccessModalTsx2 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0, 1]), transform: null };
      obj1 = { scale: closure_0(closure_1.get(), [0, 1], [0.75, 1]) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items6 = [tmp22, tmp23];
  ProductPurchaseSuccessModalTsx2.__closure = items6;
  ProductPurchaseSuccessModalTsx2.__workletHash = 4962255800686;
  ProductPurchaseSuccessModalTsx2.__initData = tmp21;
  const animatedStyle1 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ProductPurchaseSuccessModalTsx2,
  );
  const tmp2Result18 = require("../../../../_runtime/metro/01652__.js");
  const items7 = [closure_19, require("../../../../_runtime/metro/01652__.js").interpolate, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp25, tmp26, tmp27] = items7;
  class ProductPurchaseSuccessModalTsx3 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0.5, 0]) };
      return obj;
    }
  }
  const items8 = [tmp26, tmp27];
  ProductPurchaseSuccessModalTsx3.__closure = items8;
  ProductPurchaseSuccessModalTsx3.__workletHash = 11513940629753;
  ProductPurchaseSuccessModalTsx3.__initData = tmp25;
  const animatedStyle2 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ProductPurchaseSuccessModalTsx3,
  );
  const tmp2Result19 = require("../../../../_runtime/metro/01652__.js");
  const category = require("useFetchCollectiblesProductCategory").useFetchCollectiblesProductCategory(
    product.skuId,
  ).category;
  if (category != null) {
    const mobileBgUrl = category.mobileBgUrl;
  }
  const tmp2Result20 = require("useFetchCollectiblesProductCategory");
  const handleUseNow1 = require("useHandleUseNow").useHandleUseNow({
    product,
    onSuccess,
    stageCollectibleChangeForEditProfile: stageCollectibleChangeForEditProfile.stageCollectibleChangeForEditProfile,
  });
  const isApplying = handleUseNow1.isApplying;
  ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow1);
  const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
  const tmp2Result21 = require("useHandleUseNow");
  const effect2 = noop.useEffect(() => {
    _undefined(_undefined3[28]).lockOrientation(constants.PORTRAIT);
    return () => {
      const result = _undefined(_undefined3[28]).restoreDefaultOrientation();
    };
  }, []);
  const tmp2Result22 = require("useFetchVirtualCurrencyBalance");
  const shopProductItems = require("useShopProductItems").useShopProductItems(product);
  const tmp2Result23 = require("useShopProductItems");
  [tmp34, c2] = noop.useState();
  if (useCategoryImage) {
    if (null != mobileBgUrl) {
      let obj3 = { source: null, style: null };
      let obj5 = { uri: mobileBgUrl };
      obj3.source = obj5;
      obj3.style = tmp6.imageBackground;
      let tmp38 = closure_11(tmp4(5837), obj3);
      let tmp39 = closure_11;
      let tmp40 = closure_11;
    }
    const items9 = [tmp38, ,];
    const items10 = [tmp6.main];
    let str;
    if (useCategoryImage) {
      str = "rgba(0, 0, 0, 0.3)";
    }
    const rect = { style: null, top: true, bottom: true, left: true, right: true, children: null };
    const obj6 = { backgroundColor: str };
    items10[1] = obj6;
    rect.style = items10;
    const obj7 = { style: tmp6.header, children: null };
    const obj8 = { style: tmp6.headerLeading, children: null };
    if (showOrbBalancePill) {
      const obj9 = { initialRenderedBalance: prop, balance: tmp2Result22.useFetchVirtualCurrencyBalance().balance };
      showOrbBalancePill = tmp40(tmp2(14632).BalanceWidgetPill, obj9);
    }
    obj8.children = showOrbBalancePill;
    const items11 = [tmp40(closure_7, obj8)];
    let toHexStringResult;
    if (backgroundColors != null) {
      const label = backgroundColors.label;
      toHexStringResult = label.toHexString();
    }
    if (toHexStringResult == null) {
      toHexStringResult = token;
    }
    const obj10 = { tintColor: toHexStringResult, onCancel };
    items11[1] = tmp40(CancelButton, obj10);
    obj7.children = items11;
    const items12 = [closure_12(closure_7, obj7), ,];
    const obj11 = { style: { flex: 1 }, contentContainerStyle: tmp6.body, alwaysBounceVertical: false, children: null };
    const obj12 = { style: null, children: null };
    const items13 = [tmp6.preview, animatedStyle];
    obj12.style = items13;
    const type = product.type;
    if (tmp2(2116).CollectiblesItemType.BUNDLE === type) {
      const obj13 = { style: tmp6.previewBundle, onLayout: tmp35, children: null };
      let tmp39Result = null != tmp34;
      if (tmp39Result) {
        const obj14 = {
          deco: null,
          pfx: null,
          nameplate: null,
          previewAssets: null,
          disableStaticBackground: true,
          size: "large",
          targetSize: null,
        };
        ({
          firstAvatarDecoration: obj31.deco,
          firstProfileEffect: obj31.pfx,
          firstNameplate: obj31.nameplate,
        } = shopProductItems);
        obj14.previewAssets = product.previewAssets;
        obj14.targetSize = tmp34;
        tmp39Result = tmp39(tmp4(9621), obj14);
      }
      obj13.children = tmp39Result;
      let tmp39Result2 = tmp39(closure_7, obj13);
    } else if (tmp2(2116).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj15 = {
        item: _slicedToArray(product.items, 1)[0],
        size: avatarDecorationSize,
        avatarSource,
        animate: !stateFromStores,
      };
      tmp39Result2 = tmp39(tmp4(9634), obj15);
    } else if (tmp2(2116).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj16 = { user: currentUser, profileEffect: product.items[0] };
      tmp39Result2 = tmp39(tmp4(11530), obj16);
    } else if (tmp2(2116).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj17 = { user: currentUser, profileFrame: product.items[0] };
      tmp39Result2 = tmp39(tmp4(11643), obj17);
    } else {
      tmp39Result2 = null;
      if (tmp2(2116).CollectiblesItemType.NAMEPLATE === type) {
        const obj18 = { user: currentUser, nameplate: product.items[0], animate: true };
        tmp39Result2 = tmp39(tmp2(11644).NameplatePreview, obj18);
      }
    }
    obj12.children = tmp39Result2;
    const items14 = [tmp40(tmp4(1652).View, obj12)];
    const obj19 = { style: null, children: null };
    const items15 = [tmp6.messages, animatedStyle1];
    obj19.style = items15;
    if (null != renderMessages) {
      let renderMessagesResult = renderMessages();
    } else {
      const obj20 = { variant: "heading-xl/semibold", color: "text-overlay-light", style: tmp6.title, children: null };
      const intl3 = tmp2(1113).intl;
      const obj21 = { itemName: product.name };
      obj20.children = intl3.format(tmp2(1113).t.YNaxMp, obj21);
      const items16 = [tmp40(tmp2(5747).Text, obj20)];
      const obj22 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp6.title, children: null };
      let result = tmp2(7856).isPremiumCollectiblesProduct(product);
      const intl4 = tmp2(1113).intl;
      const format = intl4.format;
      const t = tmp2(1113).t;
      if (result) {
        const obj23 = { itemName: product.name };
        let formatResult = format(t.nW6E3m, obj23);
      } else {
        const obj24 = { itemName: product.name };
        formatResult = format(t["4kp0AB"], obj24);
      }
      const obj25 = { children: null };
      obj22.children = formatResult;
      items16[1] = tmp40(tmp2(5747).Text, obj22);
      obj25.children = items16;
      renderMessagesResult = closure_12(closure_13, obj25);
      const tmp2Result24 = tmp2(7856);
    }
    obj19.children = renderMessagesResult;
    items14[1] = tmp40(tmp4(1652).View, obj19);
    obj11.children = items14;
    items12[1] = closure_12(closure_6, obj11);
    const obj26 = { style: tmp6.footer, children: null };
    const obj27 = { style: tmp6.cta, children: null };
    if (canUseNow) {
      const obj28 = {
        loading: isApplying,
        disabled: isApplying,
        onPress: handleUseNow,
        text: null,
        size: "lg",
        grow: true,
      };
      const intl2 = tmp2(1113).intl;
      obj28.text = intl2.string(tmp2(1113).t.MAS7uK);
      let obj29 = obj28;
    } else {
      obj29 = { onPress: handleEditProfile, text: null, size: "lg", grow: true };
      const intl = tmp2(1113).intl;
      obj29.text = intl.string(tmp2(1113).t["2p2aYz"]);
    }
    obj27.children = tmp40(tmp2(5754).Button, obj29);
    obj26.children = tmp40(closure_7, obj27);
    items12[2] = tmp40(closure_7, obj26);
    rect.children = items12;
    items9[1] = closure_12(tmp2(7412).SafeAreaPaddingView, rect);
    const obj30 = { style: null, pointerEvents: "none" };
    const items17 = [tmp6.curtain, animatedStyle2];
    obj30.style = items17;
    items9[2] = tmp40(tmp4(1652).View, obj30);
    obj2.children = items9;
    class ProductPurchaseSuccessModalTsx1 {
      constructor() {
        obj = { opacity: closure_0(closure_1.get(), [0, 1], [0.1, 1]), transform: null };
        tmp = closure_0;
        num = 0;
        value = closure_1.get();
        if (closure_2) {
          num = 0.6;
        }
        obj1 = { scale: null };
        items = [,];
        items[0] = num;
        items[1] = 1;
        obj1.scale = tmp(value, [0, 1], items);
        items1 = [];
        items1[0] = obj1;
        obj.transform = items1;
        return obj;
      }
    }
  }
  tmp38 = closure_11(ProductPurchaseGradientBackground, { product });
  tmp39 = closure_11;
  tmp40 = closure_11;
  obj2 = { style: tmp6.root, id: product.skuId, children: null };
  const tmp33 = _slicedToArray(noop.useState(), 2);
}
