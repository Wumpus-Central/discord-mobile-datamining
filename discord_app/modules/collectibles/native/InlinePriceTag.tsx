// === Module 13550: InlinePriceTag ===

// Module 13550 (InlinePriceTag)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4483 */;
import useToken from "useToken" /* 4526 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import Text_Text from "Text/Text" /* 4825 */;
import LinearGradientDefault from "LinearGradient" /* 5285 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7542 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7883 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7884 */;
import useCurrentUser from "useCurrentUser" /* 8526 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9020 */;
import OrbsIcon from "OrbsIcon" /* 9196 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9207 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 9220 */;
import TagIcon from "TagIcon" /* 9221 */;
import useProductDisableState from "useProductDisableState" /* 9228 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13552 */;
import MobileNitroUpsellInShopPdpExperimentDefault from "MobileNitroUpsellInShopPdpExperiment" /* 13553 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 13554 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7570 */;

require = fn;
function PriceTag(accessibilityLabel) {
  let str = accessibilityLabel.color;
  ({ priceFormatted, style } = accessibilityLabel);
  if (str === undefined) {
    str = "interactive-text-active";
  }
  ({ variant, icon } = accessibilityLabel);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  const obj = { children: null };
  const items = [icon, ];
  const obj2 = { variant, style: null, color: str, accessibilityLabel: accessibilityLabel.accessibilityLabel, children: priceFormatted };
  const items1 = [closure_12().priceTag, style];
  obj2.style = items1;
  items[1] = React7(Text_Text.Text, obj2);
  obj.children = items;
  return closure_1_11(closure_1_10, obj);
}
function OrbsPriceTag(arg0) {
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = closure_12();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      result = CollectiblesProductUtils.isOrbsExclusiveProduct(product);
      const tmp16Result = CollectiblesProductUtils;
    }
    const productDiscount = CollectiblesUtils.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    const items = [tmp.priceTagRow, ];
    const canAfford = vcData.canAfford;
    let disabled = !canAfford;
    if (canAfford) {
      disabled = isProductDisabled;
    }
    if (disabled) {
      disabled = tmp.disabled;
    }
    const obj = { style: null, children: null };
    items[1] = disabled;
    obj.style = items;
    let tmp7 = result;
    if (result) {
      const obj2 = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp.strikedOrbPrice, icon: null, accessibilityLabel: null };
      const obj3 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      obj2.icon = React7(OrbsIcon.OrbsIcon, obj3);
      const intl = util.intl;
      const obj4 = { orbAmount: original.toString() };
      obj2.accessibilityLabel = intl.formatToPlainString(util.t.QfcKZ5, obj4);
      tmp7 = React7(PriceTag, obj2);
    }
    const items1 = [tmp7, , ];
    const obj5 = { priceFormatted: vcData.price.amount.toString(), variant: "text-md/semibold", icon: null, accessibilityLabel: null };
    let tmp10Result;
    if (!result) {
      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = React7(OrbsIcon.OrbsIcon, obj6);
    }
    obj5.icon = tmp10Result;
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = util.t;
    if (result) {
      const obj7 = { orbAmount: vcData.price.amount.toString(), discountPercentage };
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj7);
    } else {
      const obj8 = { orbAmount: vcData.price.amount.toString() };
      formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj8);
    }
    obj5.accessibilityLabel = formatToPlainStringResult;
    items1[1] = React7(PriceTag, obj5);
    let tmp10Result2 = null;
    if (result) {
      const obj9 = { discountPercentage };
      tmp10Result2 = React7(BundleDiscountV2, obj9);
    }
    items1[2] = tmp10Result2;
    obj.children = items1;
    return closure_1_11(React4, obj);
  }
}
function ExpressiveNitroUpsell(arg0) {
  ({ onTrackPress: require, handleNitroSubscribe: importDefault, showActionSheet: dependencyMap } = arg0);
  ({ defaultPriceFormatted, premiumPriceFormatted } = arg0);
  const tmp = closure_12();
  const strikedPrice = tmp;
  const tmp4 = _modDef672;
  const tmp4Result = tmp4(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START));
  const alphaResult = tmp4(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START)).alpha(0.4);
  const hexResult = tmp4(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START)).alpha(0.4).hex();
  const tmp7 = _modDef672;
  const tmp7Result = tmp7(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END));
  let obj2 = {
    onPress() {
      if (closure_1_0 != null) {
        tmp(ShopCtaEnum.SUBSCRIBE_NOW);
      }
      if (closure_1_2) {
        const obj = ActionSheetActionCreatorsDefault;
        const tmp9 = asyncRequireImpl(13551, dependencyMap.paths);
        const obj2 = { analyticsLocations: null, title: null, description: null };
        const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP_DETAILS_MODAL];
        obj2.analyticsLocations = items;
        const intl = util.intl;
        obj2.title = intl.string(util.t.XcOMLu);
        const intl2 = util.intl;
        obj2.description = intl2.string(util.t.JhE8nA);
        obj.openLazy(tmp9, "ShopNitroUpsellPromoSheet", obj2, "stack");
      } else {
        closure_1_1();
      }
    },
    style: tmp.nitroUpsellPill,
    accessibilityRole: "button",
    children: null
  };
  const alphaResult1 = tmp7(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END)).alpha(0.4);
  const obj3 = { style: tmp.nitroUpsellGradient, colors: null, start, end, pointerEvents: "none" };
  let items = [hexResult, tmp7(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END)).alpha(0.4).hex()];
  obj3.colors = items;
  const items1 = [closure_9(LinearGradientDefault, obj3), , ];
  const items2 = [tmp.nitroUpsellSavings, ];
  const hexResult1 = tmp7(useToken.useToken(nativeDefault.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_END)).alpha(0.4).hex();
  const tmp10 = strikedPrice;
  let androidTextPadding;
  if (obj9.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: items2, children: null };
  items2[1] = androidTextPadding;
  let intl = util.intl;
  obj5.children = intl.format(util.t.TWtV8E, {
    defaultPrice: defaultPriceFormatted,
    premiumPrice: premiumPriceFormatted,
    defaultPriceHook(children, arg1) {
      return React7(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", style: strikedPrice.strikedPrice, children }, arg1);
    },
    premiumPriceHook(children, arg1) {
      return closure_1_9(Text_Text.Text, { variant: "text-sm/semibold", color: "interactive-text-active", children }, arg1);
    }
  });
  items1[1] = closure_9(Text_Text.Text, obj5);
  const obj7 = { style: tmp.nitroUpsellCta, children: null };
  const obj6 = {
    defaultPrice: defaultPriceFormatted,
    premiumPrice: premiumPriceFormatted,
    defaultPriceHook(children, arg1) {
      return React7(Text_Text.Text, { variant: "text-sm/medium", color: "text-subtle", style: strikedPrice.strikedPrice, children }, arg1);
    },
    premiumPriceHook(children, arg1) {
      return closure_1_9(Text_Text.Text, { variant: "text-sm/semibold", color: "interactive-text-active", children }, arg1);
    }
  };
  obj9 = PlatformUtils;
  const items3 = [closure_9(NitroWheelIcon.NitroWheelIcon, { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm", style: tmp.nitroUpsellIcon }), , ];
  const obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "sm", style: tmp.nitroUpsellIcon };
  let androidTextPadding1;
  if (tmp5Result.isAndroid()) {
    androidTextPadding1 = tmp.androidTextPadding;
  }
  const obj10 = { variant: "text-sm/medium", color: "interactive-text-active", style: androidTextPadding1, children: null };
  let intl2 = util.intl;
  obj10.children = intl2.string(util.t["8x0jKT"]);
  items3[1] = closure_9(Text_Text.Text, obj10);
  tmp5Result = PlatformUtils;
  items3[2] = closure_9(ChevronSmallRightIcon.ChevronSmallRightIcon, { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, size: "xs", style: tmp.nitroUpsellChevron });
  obj7.children = items3;
  items1[2] = closure_11(closure_4, obj7);
  obj2.children = items1;
  return closure_11(tmp10, obj2);
}
function NitroUpsell(premiumPriceFormatted) {
  ({ onTrackPress: require, handleNitroSubscribe: importDefault } = premiumPriceFormatted);
  const tmp = closure_12();
  dependencyMap = tmp;
  const obj = {
    onPress() {
      if (require != null) {
        tmp(ShopCtaEnum.SUBSCRIBE_NOW);
      }
      importDefault();
    },
    style: tmp.subscribeNowPressable,
    accessibilityRole: "button",
    children: null
  };
  const obj2 = { color: "interactive-text-default", style: null };
  const items = [, ];
  ({ nitroIcon: arr[0], nitroIconSubscribeNow: arr[1] } = tmp);
  obj2.style = items;
  const items1 = [closure_9(NitroWheelIcon.NitroWheelIcon, obj2), ];
  let androidTextPadding;
  if (obj3.isAndroid()) {
    androidTextPadding = tmp.androidTextPadding;
  }
  const obj4 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: null };
  const intl = util.intl;
  obj4.children = intl.format(util.t.Kxw2LT, {
    price: premiumPriceFormatted.premiumPriceFormatted,
    subscribeNowHook(children, arg1) {
      return React7(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
    }
  });
  items1[1] = closure_9(Text_Text.Text, obj4);
  obj.children = items1;
  return closure_11(closure_3, obj);
}
function BundleDiscountV2(discountPercentage) {
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    const obj = { style: tmp.discount, children: null };
    const obj2 = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
    const items = ["-", discountPercentage, "%"];
    obj2.children = items;
    obj.children = closure_1_11(Text_Text.Text, obj2);
    tmp4 = React7(React4, obj);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const Constants = fn(1074);
({ AnalyticsSections: closure_7, CurrencyCodes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4829);
let obj2 = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, root: { flexDirection: "column" }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, nitroUpsellPill: { alignSelf: "stretch", marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.round, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 }, nitroUpsellGradient: null, nitroUpsellSavings: null, nitroUpsellCta: null, nitroUpsellIcon: null, nitroUpsellChevron: null, underline: null, subscribeNowPressable: null, androidTextPadding: null, orbsIcon: null, disabled: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.opacity = 0.6;
obj2.nitroUpsellGradient = obj4;
let obj3 = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.round, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4 };
obj2.nitroUpsellSavings = { flexShrink: 1, marginRight: nativeDefault.space.PX_8 };
obj2.nitroUpsellCta = { flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj2.nitroUpsellIcon = { width: 16, height: 16, marginRight: 4 };
obj2.nitroUpsellChevron = { marginLeft: 2 };
obj2.underline = { textDecorationLine: "underline" };
let obj5 = { flexShrink: 1, marginRight: nativeDefault.space.PX_8 };
obj2.subscribeNowPressable = { alignSelf: "flex-start", marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
obj2.androidTextPadding = { paddingBottom: 2 };
obj2.orbsIcon = { marginRight: 4 };
obj2.disabled = { opacity: 0.5 };
let closure_12 = createStyles.createStyles(obj2);
const start = { x: 0, y: 0.5 };
const end = { x: 1, y: 0.5 };
createStyles = fn(4829);
let closure_19 = createStyles.createStyles(() => {
  const discount = { backgroundColor: "rgba(46, 204, 113, 0.25)", flexDirection: "row", flexShrink: 1, borderRadius: nativeDefault.radii.xs - 1, paddingHorizontal: 6, marginLeft: 6, paddingTop: null, paddingBottom: null };
  let num;
  if (obj2.isAndroid()) {
    num = 0;
  }
  discount.paddingTop = num;
  obj2 = PlatformUtils;
  let num2;
  if (tmp2Result.isAndroid()) {
    num2 = 2;
  }
  discount.paddingBottom = num2;
  return { discount };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default function InlinePriceTag(arg0) {
  ({ product, onTrackPress } = arg0);
  let nitroIcon = closure_12();
  const currentUser = useCurrentUser.useCurrentUser();
  const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const tmp6 = useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
  const isDisabled = useProductDisableState.useProductDisableState(product.skuId).isDisabled;
  const config = MobileNitroUpsellInShopPdpExperimentDefault.useConfig({ location: "InlinePriceTag" });
  ({ enabled, showActionSheet } = config);
  const formattedPriceForCollectiblesProduct = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, false, true);
  const virtualCurrencyData = useVirtualCurrencyData.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  const items = [IAPStore];
  if (obj8.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus())) {
    if (null == formattedPriceForCollectiblesProduct) {
      return React7(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp24 = null;
    if (null != virtualCurrencyData.price) {
      const obj9 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp24 = React7(OrbsPriceTag, obj9);
    }
    return tmp24;
  } else {
    const formattedPriceForCollectiblesProduct1 = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, true, true);
    const tmpResult = collectibles_CollectiblesUtils;
    const obj10 = { style: nitroIcon.root, children: null };
    const obj11 = { style: nitroIcon.container, children: null };
    const obj12 = { style: nitroIcon.priceTagRow, children: null };
    const obj13 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: canUseShopDiscountsResult ? nitroIcon.strikedPrice : nitroIcon.regularPrice, color: "interactive-text-active", accessibilityLabel: null };
    const intl = util.intl;
    const obj14 = { price: formattedPriceForCollectiblesProduct };
    obj13.accessibilityLabel = intl.formatToPlainString(util.t.sPvyr8, obj14);
    const items1 = [React7(PriceTag, obj13), , ];
    let tmp31Result = null;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp31Result = null;
      if (!canUseShopDiscountsResult) {
        const obj15 = { discountPercentage: tmpResult3.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage };
        tmp31Result = React7(BundleDiscountV2, obj15);
      }
    }
    items1[1] = tmp31Result;
    if (!(null != formattedPriceForCollectiblesProduct1 && canUseShopDiscountsResult)) {
      items1[2] = tmp13;
      obj12.children = items1;
      const items2 = [closure_1_11(React4, obj12), ];
      let tmp31Result5 = null != virtualCurrencyData.price;
      if (tmp31Result5) {
        const obj16 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
        tmp31Result5 = React7(OrbsPriceTag, obj16);
      }
      items2[1] = tmp31Result5;
      obj11.children = items2;
      const items3 = [closure_1_11(React4, obj11), ];
      if (!(null != formattedPriceForCollectiblesProduct1 && !canUseShopDiscountsResult)) {
        items3[1] = tmp19;
        obj10.children = items3;
        return closure_1_11(React4, obj10);
      } else if (enabled) {
        const obj17 = { defaultPriceFormatted: formattedPriceForCollectiblesProduct, premiumPriceFormatted: formattedPriceForCollectiblesProduct1, onTrackPress, handleNitroSubscribe: tmp6, showActionSheet };
        let tmp31Result6 = React7(ExpressiveNitroUpsell, obj17);
      } else {
        const obj18 = { premiumPriceFormatted: formattedPriceForCollectiblesProduct1, onTrackPress, handleNitroSubscribe: tmp6 };
        tmp31Result6 = React7(NitroUpsell, obj18);
      }
    } else {
      const obj19 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      const intl2 = util.intl;
      const obj20 = { price: formattedPriceForCollectiblesProduct1 };
      obj19.accessibilityLabel = intl2.formatToPlainString(util.t.kWkpdG, obj20);
      let androidTextPadding;
      if (tmpResult4.isAndroid()) {
        androidTextPadding = nitroIcon.androidTextPadding;
      }
      obj19.style = androidTextPadding;
      if (shopDiscountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
        const obj21 = { color: "interactive-text-active", style: null };
        nitroIcon = nitroIcon.nitroIcon;
        obj21.style = nitroIcon;
        let tmp31Result7 = React7(TagIcon.TagIcon, obj21);
      } else {
        const obj22 = { color: "interactive-text-active", style: nitroIcon.nitroIcon };
        tmp31Result7 = React7(NitroWheelIcon.NitroWheelIcon, obj22);
      }
      obj19.icon = tmp31Result7;
      React7(PriceTag, obj19);
      tmpResult4 = PlatformUtils;
    }
    tmpResult3 = CollectiblesUtils;
  }
  obj8 = initialize;
};