// === Module 11251: InlinePriceTag ===

// Module 11251 (InlinePriceTag)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2112 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2173 */;
import Text_Text from "Text/Text" /* 5603 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6291 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6292 */;
import useCurrentUser from "useCurrentUser" /* 9373 */;
import OrbsIcon from "OrbsIcon" /* 9423 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9595 */;
import TagIcon from "TagIcon" /* 11031 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 11199 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 11209 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 11217 */;
import useProductDisableState from "useProductDisableState" /* 11252 */;
import ExpressiveNitroUpsellDefault from "ExpressiveNitroUpsell" /* 11253 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 9062 */;

require = fn;
function PriceTag(accessibilityLabel) {
  let str = accessibilityLabel.color;
  ({ priceFormatted, style } = accessibilityLabel);
  if (str === undefined) {
    str = "interactive-text-active";
  }
  ({ variant, icon } = accessibilityLabel);
  if (variant === undefined) {
    variant = "body-md/medium";
  }
  const obj = { children: null };
  items = [icon, ];
  const obj2 = { variant, style: null, color: str, accessibilityLabel: accessibilityLabel.accessibilityLabel, children: priceFormatted };
  const items1 = [closure_9().priceTag, style];
  obj2.style = items1;
  items[1] = timestampProducer(Text_Text.Text, obj2);
  obj.children = items;
  return React5(metroImportDefault, obj);
}
function OrbsPriceTag(arg0) {
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = closure_9();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      result = CollectiblesProductUtils.isOrbsExclusiveProduct(product);
      const tmp16Result = CollectiblesProductUtils;
    }
    const productDiscount = CollectiblesUtils.getProductDiscount(product, eligibleForShopDiscount, CurrencyCodes.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
    }
    items = [tmp.priceTagRow, ];
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
      const obj2 = { priceFormatted: original.toString(), variant: "body-md/medium", style: tmp.strikedOrbPrice, icon: null, accessibilityLabel: null };
      const obj3 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      obj2.icon = timestampProducer(OrbsIcon.OrbsIcon, obj3);
      const intl = util.intl;
      const obj4 = { orbAmount: original.toString() };
      obj2.accessibilityLabel = intl.formatToPlainString(util.t.QfcKZ5, obj4);
      tmp7 = timestampProducer(PriceTag, obj2);
    }
    const items1 = [tmp7, , ];
    const obj5 = { priceFormatted: vcData.price.amount.toString(), variant: "body-md/semibold", icon: null, accessibilityLabel: null };
    let tmp10Result;
    if (!result) {
      const obj6 = { color: "interactive-text-active", size: "sm", style: tmp.orbsIcon };
      tmp10Result = timestampProducer(OrbsIcon.OrbsIcon, obj6);
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
    items1[1] = timestampProducer(PriceTag, obj5);
    let tmp10Result2 = null;
    if (result) {
      const obj9 = { discountPercentage };
      tmp10Result2 = timestampProducer(BundleDiscountV2, obj9);
    }
    items1[2] = tmp10Result2;
    obj.children = items1;
    return React5(View, obj);
  }
}
function BundleDiscountV2(discountPercentage) {
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  if (discountPercentage >= CollectiblesUtils.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    const obj = { style: tmp.discount, children: null };
    const obj2 = { variant: "body-md/normal", color: "text-feedback-positive", children: null };
    items = ["-", discountPercentage, "%"];
    obj2.children = items;
    obj.children = React5(Text_Text.Text, obj2);
    tmp4 = timestampProducer(View, obj);
  }
  return tmp4;
}
const View = fn(17).View;
const CurrencyCodes = fn(1071).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: closure_6, Fragment: metroImportDefault, jsxs: closure_8 } = jsxProd);
let createStyles = fn(5012);
let closure_9 = createStyles.createStyles({ priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, root: { flexDirection: "column" }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, androidTextPadding: { paddingBottom: 2 }, orbsIcon: { marginRight: 4 }, disabled: { opacity: 0.5 } });
createStyles = fn(5012);
let closure_12 = createStyles.createStyles(() => {
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

export default function InlinePriceTag(product) {
  product = product.product;
  let nitroIcon = closure_9();
  const currentUser = useCurrentUser.useCurrentUser();
  const shopDiscountSource = CollectiblesUtils.getShopDiscountSource(currentUser);
  const canUseShopDiscountsResult = PremiumUtilsDefault.canUseShopDiscounts(currentUser);
  const isDisabled = useProductDisableState.useProductDisableState(product.skuId).isDisabled;
  const formattedPriceForCollectiblesProduct = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, false, true);
  const virtualCurrencyData = useVirtualCurrencyData.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  items = [IAPStore];
  if (obj7.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus())) {
    if (null == formattedPriceForCollectiblesProduct) {
      return timestampProducer(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp19 = null;
    if (null != virtualCurrencyData.price) {
      const obj8 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
      tmp19 = timestampProducer(OrbsPriceTag, obj8);
    }
    return tmp19;
  } else {
    const formattedPriceForCollectiblesProduct1 = collectibles_CollectiblesUtils.getFormattedPriceForCollectiblesProduct(product, true, true);
    const tmpResult = collectibles_CollectiblesUtils;
    const obj9 = { style: nitroIcon.root, children: null };
    const obj10 = { style: nitroIcon.container, children: null };
    const obj11 = { style: nitroIcon.priceTagRow, children: null };
    const obj12 = { priceFormatted: formattedPriceForCollectiblesProduct, variant: "heading-sm/semibold", style: canUseShopDiscountsResult ? nitroIcon.strikedPrice : nitroIcon.regularPrice, color: "interactive-text-active", accessibilityLabel: null };
    const intl = util.intl;
    const obj13 = { price: formattedPriceForCollectiblesProduct };
    obj12.accessibilityLabel = intl.formatToPlainString(util.t.sPvyr8, obj13);
    const items1 = [timestampProducer(PriceTag, obj12), , ];
    let tmp26Result = null;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp26Result = null;
      if (!canUseShopDiscountsResult) {
        const obj14 = { discountPercentage: tmpResult3.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage };
        tmp26Result = timestampProducer(BundleDiscountV2, obj14);
      }
    }
    items1[1] = tmp26Result;
    if (!(null != formattedPriceForCollectiblesProduct1 && canUseShopDiscountsResult)) {
      items1[2] = tmp12;
      obj11.children = items1;
      const items2 = [React5(View, obj11), ];
      let tmp26Result5 = null != virtualCurrencyData.price;
      if (tmp26Result5) {
        const obj15 = { vcData: virtualCurrencyData, isProductDisabled: isDisabled, product, eligibleForShopDiscount: canUseShopDiscountsResult };
        tmp26Result5 = timestampProducer(OrbsPriceTag, obj15);
      }
      items2[1] = tmp26Result5;
      obj10.children = items2;
      const items3 = [React5(View, obj10), ];
      let tmp26Result6 = null != formattedPriceForCollectiblesProduct1 && !canUseShopDiscountsResult;
      if (tmp26Result6) {
        const obj16 = { defaultPriceFormatted: formattedPriceForCollectiblesProduct, premiumPriceFormatted: formattedPriceForCollectiblesProduct1, onTrackPress: product.onTrackPress };
        tmp26Result6 = timestampProducer(ExpressiveNitroUpsellDefault, obj16);
      }
      items3[1] = tmp26Result6;
      obj9.children = items3;
      return React5(View, obj9);
    } else {
      const obj17 = { priceFormatted: formattedPriceForCollectiblesProduct1, variant: "body-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      const intl2 = util.intl;
      const obj18 = { price: formattedPriceForCollectiblesProduct1 };
      obj17.accessibilityLabel = intl2.formatToPlainString(util.t.kWkpdG, obj18);
      let androidTextPadding;
      if (tmpResult4.isAndroid()) {
        androidTextPadding = nitroIcon.androidTextPadding;
      }
      obj17.style = androidTextPadding;
      if (shopDiscountSource === CollectiblesUtils.ShopDiscountSource.THIRDPARTY) {
        const obj19 = { color: "interactive-text-active", style: null };
        nitroIcon = nitroIcon.nitroIcon;
        obj19.style = nitroIcon;
        let tmp26Result7 = timestampProducer(TagIcon.TagIcon, obj19);
      } else {
        const obj20 = { color: "interactive-text-active", style: nitroIcon.nitroIcon };
        tmp26Result7 = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj20);
      }
      obj17.icon = tmp26Result7;
      timestampProducer(PriceTag, obj17);
      tmpResult4 = PlatformUtils;
    }
    tmpResult3 = CollectiblesUtils;
  }
  obj7 = initialize;
};