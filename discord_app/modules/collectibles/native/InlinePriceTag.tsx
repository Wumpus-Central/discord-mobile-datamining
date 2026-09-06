// === Module 13147: InlinePriceTag ===

// Module 13147 (InlinePriceTag)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import Text_Text from "Text/Text" /* 4556 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import useCurrentUser from "useCurrentUser" /* 8178 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8662 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 8830 */;
import OrbsIcon from "OrbsIcon" /* 8837 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8848 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 8861 */;
import TagIcon from "TagIcon" /* 8862 */;
import useProductDisableState from "useProductDisableState" /* 8869 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 13148 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 13149 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7237 */;

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
  let obj = { children: null };
  const items = [icon, ];
  obj = { variant, style: null, color: str, accessibilityLabel: accessibilityLabel.accessibilityLabel, children: priceFormatted };
  const items1 = [closure_12().priceTag, style];
  obj.style = items1;
  items[1] = React7(Text_Text.Text, obj);
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
      let tmp16Result = CollectiblesProductUtils;
      result = tmp16Result.isOrbsExclusiveProduct(product);
    }
    tmp16Result = CollectiblesUtils;
    const productDiscount = tmp16Result.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
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
    let obj = { style: null, children: null };
    items[1] = disabled;
    obj.style = items;
    let tmp7 = result;
    if (result) {
      obj = { priceFormatted: original.toString(), variant: "text-md/medium", style: tmp.strikedOrbPrice, icon: null, accessibilityLabel: null };
      const obj1 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      obj.icon = React7(OrbsIcon.OrbsIcon, obj1);
      const intl = util.intl;
      const obj2 = { orbAmount: original.toString() };
      obj.accessibilityLabel = intl.formatToPlainString(util.t.QfcKZ5, obj2);
      tmp7 = React7(PriceTag, obj);
    }
    const items1 = [tmp7, , ];
    const obj3 = { priceFormatted: vcData.price.amount.toString(), variant: "text-md/semibold", icon: null, accessibilityLabel: null };
    let tmp10Result;
    if (!result) {
      const obj4 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = React7(OrbsIcon.OrbsIcon, obj4);
    }
    obj3.icon = tmp10Result;
    const intl2 = util.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = util.t;
    if (result) {
      const obj5 = { orbAmount: vcData.price.amount.toString(), discountPercentage };
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj5);
    } else {
      const obj6 = { orbAmount: vcData.price.amount.toString() };
      formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj6);
    }
    obj3.accessibilityLabel = formatToPlainStringResult;
    items1[1] = React7(PriceTag, obj3);
    tmp10Result = null;
    if (result) {
      const obj7 = { discountPercentage };
      tmp10Result = React7(BundleDiscountV2, obj7);
    }
    items1[2] = tmp10Result;
    obj.children = items1;
    return closure_1_11(React4, obj);
  }
}
function BundleDiscountV2(discountPercentage) {
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    let obj = { style: tmp.discount, children: null };
    obj = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
    const items = ["-", discountPercentage, "%"];
    obj.children = items;
    obj.children = closure_1_11(Text_Text.Text, obj);
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
fn(4560);
let createStyles = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, priceTagColumn: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, underline: { textDecorationLine: "underline" }, subscribeNowPressable: null, androidTextPadding: null, orbsIcon: null, disabled: null };
createStyles = { marginBottom: -2, marginTop: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createStyles.subscribeNowPressable = createStyles;
createStyles.androidTextPadding = { paddingBottom: 2 };
createStyles.orbsIcon = { marginRight: 4 };
createStyles.disabled = { opacity: 0.5 };
let closure_12 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
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
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  let obj1 = CollectiblesUtils;
  const shopDiscountSource = obj1.getShopDiscountSource(currentUser);
  let obj2 = PremiumUtilsDefault;
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(currentUser);
  dependencyMap = useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
  let obj3 = useProductDisableState;
  const isDisabled = obj3.useProductDisableState(product.skuId).isDisabled;
  let obj4 = collectibles_CollectiblesUtils;
  const formattedPriceForCollectiblesProduct = obj4.getFormattedPriceForCollectiblesProduct(product, false, true);
  let obj5 = useVirtualCurrencyData;
  const virtualCurrencyData = obj5.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  let obj6 = initialize;
  const items = [IAPStore];
  const stateFromStores = obj6.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  let obj7 = useCanPurchaseFrames;
  const isProfileFramesEarlyAccessPhase = obj7.useIsProfileFramesEarlyAccessPhase("InlinePriceTag");
  if (stateFromStores) {
    if (null == formattedPriceForCollectiblesProduct) {
      return closure_9(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp30 = null;
    if (null != virtualCurrencyData.price) {
      obj = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp30 = closure_9(OrbsPriceTag, obj);
    }
    return tmp30;
  } else {
    let tmp13 = canUseShopDiscountsResult;
    if (!canUseShopDiscountsResult) {
      tmp13 = tmp11;
    }
    let tmp2Result = collectibles_CollectiblesUtils;
    const formattedPriceForCollectiblesProduct1 = tmp2Result.getFormattedPriceForCollectiblesProduct(product, true, true);
    tmp2Result = CollectiblesUtils;
    obj = { style: tmp.container, children: null };
    obj1 = { style: tmp.priceTagColumn, children: null };
    obj2 = { style: tmp.priceTagRow, children: null };
    obj3 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-md/semibold", style: tmp13 ? tmp.strikedPrice : tmp.regularPrice, color: "interactive-text-active", accessibilityLabel: null };
    const intl = util.intl;
    obj4 = { price: formattedPriceForCollectiblesProduct };
    obj3.accessibilityLabel = intl.formatToPlainString(util.t.sPvyr8, obj4);
    const items1 = [closure_9(PriceTag, obj3), , ];
    let tmp17Result = null;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp17Result = null;
      if (!canUseShopDiscountsResult) {
        obj5 = { discountPercentage: tmp2Result.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage };
        tmp17Result = closure_9(BundleDiscountV2, obj5);
      }
    }
    items1[1] = tmp17Result;
    if (!(null != formattedPriceForCollectiblesProduct1 && tmp13)) {
      items1[2] = tmp21;
      obj2.children = items1;
      const items2 = [closure_11(closure_4, obj2), ];
      tmp17Result = null != formattedPriceForCollectiblesProduct1 && !tmp13;
      if (tmp17Result) {
        obj6 = { style: tmp.priceTagRow, children: null };
        obj7 = {
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
        const obj8 = { color: "interactive-text-default", style: null };
        const items3 = [, ];
        ({ nitroIcon: arr4[0], nitroIconSubscribeNow: arr4[1] } = tmp);
        obj8.style = items3;
        const items4 = [closure_9(NitroWheelIcon.NitroWheelIcon, obj8), ];
        let androidTextPadding;
        if (tmp2Result1.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        const obj9 = { variant: "text-md/normal", color: "interactive-text-default", style: androidTextPadding, children: null };
        const intl3 = util.intl;
        const obj10 = {
          price: formattedPriceForCollectiblesProduct1,
          subscribeNowHook(children, arg1) {
                  return React7(Text_Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
                }
        };
        obj9.children = intl3.format(util.t.Kxw2LT, obj10);
        items4[1] = closure_9(Text_Text.Text, obj9);
        obj7.children = items4;
        obj6.children = closure_11(closure_3, obj7);
        tmp17Result = closure_9(closure_4, obj6);
        tmp2Result1 = PlatformUtils;
      }
      items2[1] = tmp17Result;
      obj1.children = items2;
      const items5 = [closure_11(closure_4, obj1), ];
      let tmp17Result1 = null != virtualCurrencyData.price;
      if (tmp17Result1) {
        const obj11 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
        tmp17Result1 = closure_9(OrbsPriceTag, obj11);
      }
      items5[1] = tmp17Result1;
      obj.children = items5;
      return closure_11(closure_4, obj);
    } else {
      const obj12 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      const intl2 = util.intl;
      const obj13 = { price: formattedPriceForCollectiblesProduct1 };
      obj12.accessibilityLabel = intl2.formatToPlainString(util.t.kWkpdG, obj13);
      let androidTextPadding1;
      if (tmp2Result2.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj12.style = androidTextPadding1;
      if (shopDiscountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
        const obj14 = { color: "interactive-text-active", style: tmp.nitroIcon };
        let tmp17Result2 = closure_9(TagIcon.TagIcon, obj14);
      } else {
        const obj15 = { color: "interactive-text-active", style: tmp.nitroIcon };
        tmp17Result2 = closure_9(NitroWheelIcon.NitroWheelIcon, obj15);
      }
      obj12.icon = tmp17Result2;
      closure_9(PriceTag, obj12);
      tmp2Result2 = PlatformUtils;
    }
  }
  tmp11 = product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase;
};