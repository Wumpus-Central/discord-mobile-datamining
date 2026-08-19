// === Module 9580: PriceTag ===

// Module 9580 (PriceTag)
import noopAll from "noop" /* 19 */;
import obj132 from "obj132" /* 500 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import Text from "Text" /* 4734 */;
import getProductOrbPrice from "getProductOrbPrice" /* 5312 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 5313 */;
import NitroWheelIcon from "NitroWheelIcon" /* 7988 */;
import TagIcon from "TagIcon" /* 8014 */;
import useCurrentUser from "useCurrentUser" /* 9176 */;
import useCanPurchaseFrames from "useCanPurchaseFrames" /* 9233 */;
import OrbsIcon from "OrbsIcon" /* 9238 */;
import hasAtLeastOneGPlaySynced from "hasAtLeastOneGPlaySynced" /* 9249 */;
import CollectiblesShopPricePlaceholder from "CollectiblesShopPricePlaceholder" /* 9258 */;
import useOpenNitroSubscribeActionSheetDefault from "useOpenNitroSubscribeActionSheet" /* 9581 */;
import useProductDisableState from "useProductDisableState" /* 9582 */;
import useVirtualCurrencyData from "useVirtualCurrencyData" /* 9583 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import updateProduct from "updateProduct" /* 5319 */;
import { ShopCtaEnum } from "items" /* 678 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";
import createCacheKey from "createCacheKey" /* 4661 */;

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
      let tmp16Result = getProductOrbPrice;
      result = tmp16Result.isOrbsExclusiveProduct(product);
    }
    tmp16Result = getItemRecordsFromPurchases;
    const productDiscount = tmp16Result.getProductDiscount(product, eligibleForShopDiscount, constants2.DISCORD_ORB);
    ({ original, discountPercentage } = productDiscount);
    if (result) {
      result = discountPercentage >= getItemRecordsFromPurchases.DISCOUNT_DISPLAY_MINIMUM_THRESHOLD;
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
      obj[3] = callback(OrbsIcon.OrbsIcon, obj1);
      const intl = getSystemLocale.intl;
      const obj2 = { orbAmount: null };
      obj2[0] = original.toString();
      obj[4] = intl.formatToPlainString(getSystemLocale.t.QfcKZ5, obj2);
      tmp7 = callback(PriceTag, obj);
    }
    const items1 = [tmp7, , ];
    const obj3 = { priceFormatted: null, variant: "text-md/semibold", icon: null, accessibilityLabel: null };
    obj3[0] = vcData.price.amount.toString();
    let tmp10Result;
    if (!result) {
      const obj4 = { color: "interactive-text-active", size: "sm", style: null };
      obj4[2] = tmp.orbsIcon;
      tmp10Result = callback(OrbsIcon.OrbsIcon, obj4);
    }
    obj3[2] = tmp10Result;
    const intl2 = getSystemLocale.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const t = getSystemLocale.t;
    if (result) {
      const obj5 = { orbAmount: null, discountPercentage: null };
      obj5[0] = vcData.price.amount.toString();
      obj5[1] = discountPercentage;
      let formatToPlainStringResult = formatToPlainString(t.ckguyq, obj5);
    } else {
      const obj6 = { orbAmount: null };
      obj6[0] = vcData.price.amount.toString();
      formatToPlainStringResult = formatToPlainString(t["a/Y8PK"], obj6);
    }
    obj3[3] = formatToPlainStringResult;
    items1[1] = callback(PriceTag, obj3);
    tmp10Result = null;
    if (result) {
      const obj7 = { discountPercentage: null };
      obj7[0] = discountPercentage;
      tmp10Result = callback(BundleDiscountV2, obj7);
    }
    items1[2] = tmp10Result;
    obj[1] = items1;
    return callback(closure_4, obj);
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
let createCacheKey = { marginBottom: -2, marginTop: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
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
  obj2 = obj132;
  let num2;
  if (tmp2Result.isAndroid()) {
    num2 = 2;
  }
  discount[7] = num2;
  return { discount };
});
let result = require("obj132").fileFinishedImporting("modules/collectibles/native/InlinePriceTag.tsx");

export default function InlinePriceTag(arg0) {
  ({ product, onTrackPress: require } = arg0);
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
      return callback(CollectiblesShopPricePlaceholder.CollectiblesShopPricePlaceholder, {});
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
    let tmp2Result = hasAtLeastOneGPlaySynced;
    const formattedPriceForCollectiblesProduct1 = tmp2Result.getFormattedPriceForCollectiblesProduct(product, true, true);
    tmp2Result = getItemRecordsFromPurchases;
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
    const intl = getSystemLocale.intl;
    obj4 = { price: null };
    obj4[0] = formattedPriceForCollectiblesProduct;
    obj3[4] = intl.formatToPlainString(getSystemLocale.t.sPvyr8, obj4);
    const items1 = [callback(PriceTag, obj3), , ];
    let tmp17Result = null;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp17Result = null;
      if (!canUseShopDiscountsResult) {
        obj5 = { discountPercentage: null };
        obj5[0] = tmp2Result.getProductDiscount(product, canUseShopDiscountsResult).discountPercentage;
        tmp17Result = callback(BundleDiscountV2, obj5);
      }
    }
    items1[1] = tmp17Result;
    if (!(null != formattedPriceForCollectiblesProduct1 && tmp13)) {
      items1[2] = tmp21;
      obj2[1] = items1;
      const items2 = [callback(closure_4, obj2), ];
      tmp17Result = null != formattedPriceForCollectiblesProduct1 && !tmp13;
      if (tmp17Result) {
        obj6 = { style: null, children: null };
        obj6[0] = tmp.priceTagRow;
        obj7 = { onPress: null, style: null, accessibilityRole: "button", children: null };
        obj7[0] = function onPress() {
          if (closure_0 != null) {
            tmp(ShopCtaEnum.SUBSCRIBE_NOW);
          }
          dependencyMap();
        };
        obj7[1] = tmp.subscribeNowPressable;
        const obj8 = { color: "interactive-text-default", style: null };
        const items3 = [, ];
        ({ nitroIcon: arr4[0], nitroIconSubscribeNow: arr4[1] } = tmp);
        obj8[1] = items3;
        const items4 = [callback(NitroWheelIcon.NitroWheelIcon, obj8), ];
        let androidTextPadding;
        if (tmp2Result1.isAndroid()) {
          androidTextPadding = tmp.androidTextPadding;
        }
        const obj9 = { variant: "text-md/normal", color: "interactive-text-default", style: null, children: null };
        obj9[2] = androidTextPadding;
        const intl3 = getSystemLocale.intl;
        const obj10 = { price: null, subscribeNowHook: null };
        obj10[0] = formattedPriceForCollectiblesProduct1;
        obj10[1] = function subscribeNowHook(children) {
          return closure_1_9(Text.Text, { variant: "text-md/normal", style: underline.underline, children }, arg1);
        };
        obj9[3] = intl3.format(getSystemLocale.t.Kxw2LT, obj10);
        items4[1] = callback(Text.Text, obj9);
        obj7[3] = items4;
        obj6[1] = callback(closure_3, obj7);
        tmp17Result = callback(closure_4, obj6);
        tmp2Result1 = obj132;
      }
      items2[1] = tmp17Result;
      obj1[1] = items2;
      const items5 = [callback(closure_4, obj1), ];
      let tmp17Result1 = null != virtualCurrencyData.price;
      if (tmp17Result1) {
        const obj11 = { vcData: null, isProductDisabled: null, product: null, eligibleForShopDiscount: null };
        obj11[0] = virtualCurrencyData;
        obj11[1] = isDisabled;
        obj11[2] = product;
        obj11[3] = canUseShopDiscountsResult;
        tmp17Result1 = callback(OrbsPriceTag, obj11);
      }
      items5[1] = tmp17Result1;
      obj[1] = items5;
      return callback(closure_4, obj);
    } else {
      const obj12 = { priceFormatted: null, variant: "text-md/medium", color: "interactive-text-active", accessibilityLabel: null, style: null, icon: null };
      obj12[0] = formattedPriceForCollectiblesProduct1;
      const intl2 = getSystemLocale.intl;
      const obj13 = { price: null };
      obj13[0] = formattedPriceForCollectiblesProduct1;
      obj12[3] = intl2.formatToPlainString(getSystemLocale.t.kWkpdG, obj13);
      let androidTextPadding1;
      if (tmp2Result2.isAndroid()) {
        androidTextPadding1 = tmp.androidTextPadding;
      }
      obj12[4] = androidTextPadding1;
      if (shopDiscountSource === getItemRecordsFromPurchases.ShopDiscountSource.THIRDPARTY) {
        const obj14 = { color: "interactive-text-active", style: null };
        obj14[1] = tmp.nitroIcon;
        let tmp17Result2 = callback(TagIcon.TagIcon, obj14);
      } else {
        const obj15 = { color: "interactive-text-active", style: null };
        obj15[1] = tmp.nitroIcon;
        tmp17Result2 = callback(NitroWheelIcon.NitroWheelIcon, obj15);
      }
      obj12[5] = tmp17Result2;
      callback(PriceTag, obj12);
      tmp2Result2 = obj132;
    }
  }
  tmp11 = product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME && isProfileFramesEarlyAccessPhase;
};