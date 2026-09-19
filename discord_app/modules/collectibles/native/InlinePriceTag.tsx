// === Module 13451: InlinePriceTag ===

// Module 13451 (InlinePriceTag)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4414 */;
import Text_Text from "Text/Text" /* 4752 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7793 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7794 */;
import useCurrentUser from "useCurrentUser" /* 8446 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8939 */;
import OrbsIcon from "OrbsIcon" /* 9115 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 9126 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 9139 */;
import TagIcon from "TagIcon" /* 9140 */;
import useProductDisableState from "useProductDisableState" /* 9147 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13452 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 13453 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7477 */;

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
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const ShopCtaEnum = fn(1076).ShopCtaEnum;
const Constants = fn(1074);
({ AnalyticsSections: closure_7, CurrencyCodes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
let createStyles = fn(4756);
let obj2 = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, priceTagColumn: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, underline: { textDecorationLine: "underline" }, subscribeNowPressable: { marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" }, androidTextPadding: { paddingBottom: 2 }, orbsIcon: { marginRight: 4 }, disabled: { opacity: 0.5 } };
let closure_12 = createStyles.createStyles(obj2);
createStyles = fn(4756);
let closure_15 = createStyles.createStyles(() => {
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
  ({ product, onTrackPress: require } = arg0);
  const tmp = closure_12();
  importDefault = tmp;
  const currentUser = useCurrentUser.useCurrentUser();
  const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  dependencyMap = useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
  const isDisabled = useProductDisableState.useProductDisableState(product.skuId).isDisabled;
  const formattedPriceForCollectiblesProduct = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, false, true);
  const virtualCurrencyData = useVirtualCurrencyData.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  const items = [IAPStore];
  if (obj7.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus())) {
    if (null == formattedPriceForCollectiblesProduct) {
      return closure_9(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp21 = null;
    if (null != virtualCurrencyData.price) {
      const obj8 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp21 = closure_9(OrbsPriceTag, obj8);
    }
    return tmp21;
  } else {
    const formattedPriceForCollectiblesProduct1 = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, true, true);
    const tmp2Result = collectibles_CollectiblesUtils;
    const obj9 = { style: tmp.container, children: null };
    const obj10 = { style: tmp.priceTagColumn, children: null };
    const obj11 = { style: tmp.priceTagRow, children: null };
    const obj12 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: canUseShopDiscountsResult ? tmp.strikedPrice : tmp.regularPrice, color: "interactive-text-active", accessibilityLabel: null };
    const intl = util.intl;
    const obj13 = { price: formattedPriceForCollectiblesProduct };
    obj12.accessibilityLabel = intl.formatToPlainString(util.t.sPvyr8, obj13);
    const items1 = [closure_9(PriceTag, obj12), , ];
    let tmp28Result = null;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp28Result = null;
      if (!canUseShopDiscountsResult) {
        const obj14 = { discountPercentage: tmp2Result4.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage };
        tmp28Result = closure_9(BundleDiscountV2, obj14);
      }
    }
    items1[1] = tmp28Result;
    if (!(null != formattedPriceForCollectiblesProduct1 && canUseShopDiscountsResult)) {
      items1[2] = tmp12;
      obj11.children = items1;
      const items2 = [closure_11(closure_4, obj11), ];
      let tmp28Result5 = null != formattedPriceForCollectiblesProduct1 && !canUseShopDiscountsResult;
      if (tmp28Result5) {
        const obj15 = { style: tmp.priceTagRow, children: null };
        const obj16 = {
          onPress() {
                  if (require != null) {
                    tmp(ShopCtaEnum.SUBSCRIBE_NOW);
                  }
                  closure_2();
                },
          style: tmp.subscribeNowPressable,
          accessibilityRole: "button",
          children: null
        };
        const obj17 = { color: "interactive-text-default", style: null };
        const items3 = [, ];
        ({ nitroIcon: arr4[0], nitroIconSubscribeNow: arr4[1] } = tmp);
        obj17.style = items3;
        const items4 = [closure_9(NitroWheelIcon.NitroWheelIcon, obj17), ];
        let androidTextPadding;
        if (tmp2Result5.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        const obj18 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: null };
        const intl3 = util.intl;
        const obj19 = {
          price: formattedPriceForCollectiblesProduct1,
          subscribeNowHook(children, arg1) {
                  return React7(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
                }
        };
        obj18.children = intl3.format(util.t.Kxw2LT, obj19);
        items4[1] = closure_9(Text_Text.Text, obj18);
        obj16.children = items4;
        obj15.children = closure_11(closure_3, obj16);
        tmp28Result5 = closure_9(closure_4, obj15);
        tmp2Result5 = PlatformUtils;
      }
      items2[1] = tmp28Result5;
      obj10.children = items2;
      const items5 = [closure_11(closure_4, obj10), ];
      let tmp28Result6 = null != virtualCurrencyData.price;
      if (tmp28Result6) {
        const obj20 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
        tmp28Result6 = closure_9(OrbsPriceTag, obj20);
      }
      items5[1] = tmp28Result6;
      obj9.children = items5;
      return closure_11(closure_4, obj9);
    } else {
      const obj21 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      const intl2 = util.intl;
      const obj22 = { price: formattedPriceForCollectiblesProduct1 };
      obj21.accessibilityLabel = intl2.formatToPlainString(util.t.kWkpdG, obj22);
      let androidTextPadding1;
      if (tmp2Result6.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj21.style = androidTextPadding1;
      if (shopDiscountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
        const obj23 = { color: "interactive-text-active", style: tmp.nitroIcon };
        let tmp28Result7 = closure_9(TagIcon.TagIcon, obj23);
      } else {
        const obj24 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp28Result7 = closure_9(NitroWheelIcon.NitroWheelIcon, obj24);
      }
      obj21.icon = tmp28Result7;
      closure_9(PriceTag, obj21);
      tmp2Result6 = PlatformUtils;
    }
    tmp2Result4 = CollectiblesUtils;
  }
  obj7 = initialize;
};