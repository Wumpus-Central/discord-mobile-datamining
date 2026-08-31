// === Module 12520: PriceTag ===

// Module 12520 (PriceTag)
import noopAll from "noop" /* 19 */;
import set from "set" /* 500 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1950 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4109 */;
import Text from "Text" /* 4444 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 7267 */;
import useCurrentUser from "useCurrentUser" /* 8854 */;
import hasAtLeastOneGPlaySynced from "hasAtLeastOneGPlaySynced" /* 10706 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 12497 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 12521 */;
import useProductDisableState from "useProductDisableState" /* 12522 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 12523 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "updateProduct" /* 6052 */;
import { ShopCtaEnum } from "items" /* 678 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
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
  const items1 = [callback3().priceTag, style];
  items[1] = callback(Text.Text, { variant, style: items1, color: str, accessibilityLabel: accessibilityLabel.accessibilityLabel, children: priceFormatted });
  obj[0] = items;
  return callback2(closure_10, obj);
}
function OrbsPriceTag(arg0) {
  ({ vcData, product } = arg0);
  ({ isProductDisabled, eligibleForShopDiscount } = arg0);
  const tmp = callback3();
  if (null == vcData.price) {
    return null;
  } else {
    let result = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
    if (result) {
      let tmp16Result = tmp16(7266);
      result = tmp16Result.isOrbsExclusiveProduct(product);
    }
    tmp16Result = tmp16(7267);
    const productDiscount = tmp16Result.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= tmp16(7267).DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
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
    obj[0] = items;
    let tmp7 = result;
    if (result) {
      obj = { priceFormatted: null, variant: "text-md/medium", style: null, icon: null, accessibilityLabel: null };
      obj[0] = original.toString();
      obj[2] = tmp.strikedOrbPrice;
      obj1 = { color: "interactive-text-active", size: "sm", style: null };
      obj1[2] = tmp.orbsIcon;
      obj[3] = callback(tmp16(10716).OrbsIcon, obj1);
      const intl = tmp16(1236).intl;
      const obj2 = { orbAmount: null };
      obj2[0] = original.toString();
      obj[4] = intl.formatToPlainString(tmp16(1236).t.QfcKZ5, obj2);
      tmp7 = callback(PriceTag, obj);
    }
    const items1 = [tmp7, , ];
    const obj3 = { priceFormatted: null, variant: "text-md/semibold", icon: null, accessibilityLabel: null };
    obj3[0] = vcData.price.amount.toString();
    let tmp10Result;
    if (!result) {
      const obj4 = { color: "interactive-text-active", size: "sm", style: null };
      obj4[2] = tmp.orbsIcon;
      tmp10Result = tmp10(tmp16(10716).OrbsIcon, obj4);
    }
    obj3[2] = tmp10Result;
    const intl2 = tmp16(1236).intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = tmp16(1236).t;
    if (result) {
      const obj5 = { orbAmount: null, discountPercentage: null };
      obj5[0] = vcData.price.amount.toString();
      obj5[1] = discountPercentage;
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj5);
      const str3 = vcData.price.amount;
    } else {
      const obj6 = { orbAmount: null };
      obj6[0] = vcData.price.amount.toString();
      formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj6);
      const str2 = vcData.price.amount;
    }
    obj3[3] = formatToPlainStringResult;
    items1[1] = callback(PriceTag, obj3);
    tmp10Result = null;
    if (result) {
      const obj7 = { discountPercentage: null };
      obj7[0] = discountPercentage;
      tmp10Result = tmp10(BundleDiscountV2, obj7);
    }
    items1[2] = tmp10Result;
    obj[1] = items1;
    return closure_11(closure_4, obj);
  }
}
function BundleDiscountV2(discountPercentage) {
  discountPercentage = discountPercentage.discountPercentage;
  let tmp4 = null;
  if (discountPercentage >= getItemRecordsFromPurchases.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD) {
    let obj = { style: null, children: null };
    obj[0] = tmp.discount;
    obj = { variant: "text-md/normal", color: "text-feedback-positive", children: null };
    const items = ["-", discountPercentage, "%"];
    obj[2] = items;
    obj[1] = callback2(Text.Text, obj);
    tmp4 = callback(closure_4, obj);
  }
  return tmp4;
}
noopAll;
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
({ AnalyticsSections: error, CurrencyCodes: closure_8 } = ME);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { priceTag: { flexDirection: "row", alignItems: "center" }, strikedPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7 }, strikedOrbPrice: { textDecorationLine: "line-through", textDecorationStyle: "solid", opacity: 0.7, marginRight: 4 }, regularPrice: {}, nitroIcon: { width: 20, height: 20, marginLeft: 8, marginRight: 4 }, nitroIconSubscribeNow: { marginLeft: 0 }, container: { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }, priceTagRow: { flexDirection: "row", alignItems: "center" }, priceTagColumn: { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, underline: { textDecorationLine: "underline" }, subscribeNowPressable: null, androidTextPadding: null, orbsIcon: null, disabled: null };
createCacheKey = { marginBottom: -2, marginTop: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
createCacheKey[10] = createCacheKey;
createCacheKey[11] = { paddingBottom: 2 };
createCacheKey[12] = { marginRight: 4 };
createCacheKey[13] = { opacity: 0.5 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let closure_15 = createCacheKey.createStyles(() => {
  const discount = { backgroundColor: "rgba(46, 204, 113, 0.25)", flexDirection: "row", flexShrink: 1, borderRadius: ThemesDefault.radii.xs - 1, paddingHorizontal: 6, marginLeft: 6, paddingTop: null, paddingBottom: null };
  let num;
  if (obj2.isAndroid()) {
    num = 0;
  }
  discount[6] = num;
  obj2 = set;
  const tmp2 = require;
  let num2;
  if (tmp2Result.isAndroid()) {
    num2 = 2;
  }
  discount[7] = num2;
  return { discount };
});
let result = require("set").fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default function InlinePriceTag(arg0) {
  ({ product, onTrackPress: require } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  const tmp = callback3();
  importDefault = tmp;
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  obj1 = getItemRecordsFromPurchases;
  const shopDiscountSource = obj1.getShopDiscountSource(currentUser);
  let obj2 = getPremiumPlanItemDefault;
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(currentUser);
  dependencyMap = useOpenNitroSubscribeActionSheetDefault(constants.SHOP_PRODUCT_DETAILS);
  let obj3 = useProductDisableState;
  const isDisabled = obj3.useProductDisableState(product.skuId).isDisabled;
  let obj4 = hasAtLeastOneGPlaySynced;
  const formattedPriceForCollectiblesProduct = obj4.getFormattedPriceForCollectiblesProduct(product, false, true);
  let obj5 = useVirtualCurrencyData;
  const virtualCurrencyData = obj5.useVirtualCurrencyData(product, canUseShopDiscountsResult);
  let obj6 = initialize;
  const items = [closure_5];
  const stateFromStores = obj6.useStateFromStores(items, () => fetchingGoogleSkus.isFetchingGoogleSkus());
  let obj7 = useCanPurchaseFrames;
  const isProfileFramesEarlyAccessPhase = obj7.useIsProfileFramesEarlyAccessPhase("InlinePriceTag");
  if (stateFromStores) {
    if (null == formattedPriceForCollectiblesProduct) {
      return callback(tmp2(12524).CollectiblesShopPricePlaceholder, {});
    }
  }
  if (null == formattedPriceForCollectiblesProduct) {
    let tmp30 = null;
    if (null != virtualCurrencyData.price) {
      obj = { vcData: null, isProductDisabled: null, product: null, eligibleForShopDiscount: null };
      obj[0] = virtualCurrencyData;
      obj[1] = isDisabled;
      obj[2] = product;
      obj[3] = canUseShopDiscountsResult;
      tmp30 = callback(OrbsPriceTag, obj);
    }
    return tmp30;
  } else {
    let tmp13 = canUseShopDiscountsResult;
    if (!canUseShopDiscountsResult) {
      tmp13 = tmp11;
    }
    let tmp2Result = tmp2(10706);
    const formattedPriceForCollectiblesProduct1 = tmp2Result.getFormattedPriceForCollectiblesProduct(product, true, true);
    tmp2Result = tmp2(7267);
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.priceTagColumn;
    obj2 = { style: null, children: null };
    obj2[0] = tmp.priceTagRow;
    obj3 = { priceFormatted: null, variant: null, style: null, color: "interactive-text-active", accessibilityLabel: null };
    obj3[0] = formattedPriceForCollectiblesProduct;
    obj3[1] = "heading-md/semibold";
    obj3[2] = tmp13 ? tmp.strikedPrice : tmp.regularPrice;
    const intl = tmp2(1236).intl;
    obj4 = { price: null };
    obj4[0] = formattedPriceForCollectiblesProduct;
    obj3[4] = intl.formatToPlainString(tmp2(1236).t.sPvyr8, obj4);
    const items1 = [callback(PriceTag, obj3), , ];
    let tmp17Result = null;
    if (product.type === tmp2(1950).CollectiblesItemType.BUNDLE) {
      tmp17Result = null;
      if (!canUseShopDiscountsResult) {
        obj5 = { discountPercentage: null };
        obj5[0] = tmp2Result.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage;
        tmp17Result = tmp17(BundleDiscountV2, obj5);
      }
    }
    items1[1] = tmp17Result;
    if (!(null != formattedPriceForCollectiblesProduct1 && tmp13)) {
      items1[2] = tmp21;
      obj2[1] = items1;
      const items2 = [tmp15(tmp16, obj2), ];
      tmp17Result = null != formattedPriceForCollectiblesProduct1 && !tmp13;
      if (tmp17Result) {
        obj6 = { style: null, children: null };
        obj6[0] = tmp.priceTagRow;
        obj7 = { onPress: null, style: null, accessibilityRole: "button", children: null };
        obj7[0] = function onPress() {
          if (closure_0 != null) {
            tmp(closure_1_6.SUBSCRIBE_NOW);
          }
          dependencyMap();
        };
        obj7[1] = tmp.subscribeNowPressable;
        const obj8 = { color: "interactive-text-default", style: null };
        const items3 = [, ];
        ({ nitroIcon: arr4[0], nitroIconSubscribeNow: arr4[1] } = tmp);
        obj8[1] = items3;
        const items4 = [tmp17(tmp2(8064).NitroWheelIcon, obj8), ];
        let androidTextPadding;
        if (tmp2Result1.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        const obj9 = { variant: "text-md/normal", color: "interactive-text-default", style: null, children: null };
        obj9[2] = androidTextPadding;
        const intl3 = tmp2(1236).intl;
        const obj10 = { price: null, subscribeNowHook: null };
        obj10[0] = formattedPriceForCollectiblesProduct1;
        obj10[1] = function subscribeNowHook(children) {
          return closure_1_9(closure_1_0(4444).Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
        };
        obj9[3] = intl3.format(tmp2(1236).t.Kxw2LT, obj10);
        items4[1] = tmp17(tmp2(4444).Text, obj9);
        obj7[3] = items4;
        obj6[1] = tmp15(closure_3, obj7);
        tmp17Result = tmp17(tmp16, obj6);
        const tmp26 = closure_3;
        tmp2Result1 = tmp2(500);
      }
      items2[1] = tmp17Result;
      obj1[1] = items2;
      const items5 = [tmp15(tmp16, obj1), ];
      let tmp17Result1 = null != virtualCurrencyData.price;
      if (tmp17Result1) {
        const obj11 = { vcData: null, isProductDisabled: null, product: null, eligibleForShopDiscount: null };
        obj11[0] = virtualCurrencyData;
        obj11[1] = isDisabled;
        obj11[2] = product;
        obj11[3] = canUseShopDiscountsResult;
        tmp17Result1 = tmp17(OrbsPriceTag, obj11);
      }
      items5[1] = tmp17Result1;
      obj[1] = items5;
      return tmp15(tmp16, obj);
    } else {
      const obj12 = { priceFormatted: null, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      obj12[0] = formattedPriceForCollectiblesProduct1;
      const intl2 = tmp2(1236).intl;
      const obj13 = { price: null };
      obj13[0] = formattedPriceForCollectiblesProduct1;
      obj12[3] = intl2.formatToPlainString(tmp2(1236).t.kWkpdG, obj13);
      let androidTextPadding1;
      if (tmp2Result2.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj12[4] = androidTextPadding1;
      if (shopDiscountSource === tmp2(7267).ShopDiscountSource.THIRDPARTY) {
        const obj14 = { color: "interactive-text-active", style: null };
        obj14[1] = tmp.nitroIcon;
        let tmp17Result2 = tmp17(tmp2(10381).TagIcon, obj14);
      } else {
        const obj15 = { color: "interactive-text-active", style: null };
        obj15[1] = tmp.nitroIcon;
        tmp17Result2 = tmp17(tmp2(8064).NitroWheelIcon, obj15);
      }
      obj12[5] = tmp17Result2;
      tmp17(tmp18, obj12);
      tmp2Result2 = tmp2(500);
    }
  }
};