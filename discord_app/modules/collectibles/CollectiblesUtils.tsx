// discord_app/modules/collectibles/CollectiblesUtils.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import Constants2 from "../../../discord_common/js/shared/Constants.tsx";
import intl5 from "../../intl/index.native.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import PerksStateUtils from "../premium/perks_state/PerksStateUtils.tsx";
import user from "../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import NameplateRecord from "records/NameplateRecord.tsx";
import CollectiblesItemType from "../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import PriceUtils from "../../utils/PriceUtils.tsx";
import AvatarDecorationRecord from "records/AvatarDecorationRecord.tsx";
import ProfileEffectRecord from "records/ProfileEffectRecord.tsx";
import ProfileFrameRecord from "records/ProfileFrameRecord.tsx";
import CollectiblesProductUtils from "utils/CollectiblesProductUtils.tsx";
import ShopAssetConfigRecord from "records/ShopAssetConfigRecord.tsx";
import CollectiblesShopConstants from "CollectiblesShopConstants.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const f94311 = (arr, type) => {
  let closure_0 = type;
  if (null != type) {
    if (type.type === require("CollectiblesItemType").CollectiblesItemType.VARIANTS_GROUP) {
      let combined;
      if (null != type.variants) {
        const variants = type.variants;
        const tmpResult = require("../../../_runtime/metro/00012__.js");
        combined = tmpResult.concat(
          arr,
          variants.map((item) => {
            const obj = {};
            const merged = Object.assign(item);
            ({ storeListingId: obj.variantGroupStoreListingId, eligibleOffers: obj.eligibleOffers } = closure_0);
            return obj;
          }),
        );
      }
      return combined;
    }
  }
  arr = arr.push(type);
  combined = arr;
};
function getItemRecordsFromPurchases(arr, PROFILE_EFFECT) {
  if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    const flatMap4 = _mod12.flatMap;
    items = [];
    _mod12;
    HermesBuiltin.arraySpread(items, arr.values(), 0);
    const flatMap4Result = flatMap4(items, "items");
    const found = flatMap4Result.filter(isAvatarDecorationRecord);
    const tmp2Result8 = _mod12;
    return tmp2Result8.uniqBy(found, "skuId");
  } else if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    const flatMap3 = _mod12.flatMap;
    const items1 = [];
    _mod12;
    HermesBuiltin.arraySpread(items1, arr.values(), 0);
    const flatMap3Result = flatMap3(items1, "items");
    const found1 = flatMap3Result.filter(isNameplateRecord);
    const tmp2Result10 = _mod12;
    return tmp2Result10.uniqBy(found1, "skuId");
  } else if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    const flatMap2 = _mod12.flatMap;
    const items2 = [];
    _mod12;
    HermesBuiltin.arraySpread(items2, arr.values(), 0);
    const flatMap2Result = flatMap2(items2, "items");
    const found2 = flatMap2Result.filter(isProfileEffectRecord);
    const tmp2Result12 = _mod12;
    return tmp2Result12.uniqBy(found2, "skuId");
  } else if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
    const flatMap = _mod12.flatMap;
    const items3 = [];
    _mod12;
    HermesBuiltin.arraySpread(items3, arr.values(), 0);
    const flatMapResult = flatMap(items3, "items");
    const found3 = flatMapResult.filter(isProfileFrameRecord);
    const tmp2Result14 = _mod12;
    return tmp2Result14.uniqBy(found3, "skuId");
  } else {
    return [];
  }
}
function getItemRecordsFromCategories(arr, PROFILE_EFFECT) {
  let obj = _mod12;
  items = [...arr.values()];
  const flatMapResult = obj.flatMap(items, "products");
  obj2 = _mod12;
  const uniqByResult = obj2.uniqBy(flatMapResult.reduce(f94311, []), "storeListingId");
  if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    let tmpResult = _mod12;
    const flatMapResult1 = tmpResult.flatMap(uniqByResult, "items");
    const found = flatMapResult1.filter(isAvatarDecorationRecord);
    const tmpResult8 = _mod12;
    return tmpResult8.uniqBy(found, "skuId");
  } else if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    const tmpResult9 = _mod12;
    const flatMapResult2 = tmpResult9.flatMap(uniqByResult, "items");
    const found1 = flatMapResult2.filter(isNameplateRecord);
    const tmpResult10 = _mod12;
    return tmpResult10.uniqBy(found1, "skuId");
  } else if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    const tmpResult11 = _mod12;
    const flatMapResult3 = tmpResult11.flatMap(uniqByResult, "items");
    const found2 = flatMapResult3.filter(isProfileEffectRecord);
    const tmpResult12 = _mod12;
    return tmpResult12.uniqBy(found2, "skuId");
  } else if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
    const tmpResult13 = _mod12;
    const flatMapResult4 = tmpResult13.flatMap(uniqByResult, "items");
    const found3 = flatMapResult4.filter(isProfileFrameRecord);
    const tmpResult14 = _mod12;
    return tmpResult14.uniqBy(found3, "skuId");
  } else {
    return [];
  }
}
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const AssetDisplayConfigRecord = ShopAssetConfigRecord.AssetDisplayConfigRecord;
({
  EXTERNAL_PRODUCT_SKU_IDS: metroImportAll,
  LIMITED_TIME_BADGE_DAYS_THRESHOLD: c9,
  SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS: c10,
} = CollectiblesShopConstants);
({
  COLLECTIBLES_APPLICATION_ID: unpackModuleId,
  EntitlementTypes: closure_12,
  PriceSetAssignmentPurchaseTypes: map1,
} = Constants);
const CurrencyCodes = Constants2.CurrencyCodes;
const ShopDiscountSource = { NITRO: "nitro", THIRDPARTY: "thirdparty" };
let closure_16 = { [ShopDiscountSource.NITRO]: "nitro", [ShopDiscountSource.THIRDPARTY]: "xbox" };
let obj2 = { original: -1, discountPercentage: -1 };
let items = [, ,];
({ KZT: arr[0], NGN: arr[1], EGP: arr[2] } = CurrencyCodes);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesUtils.tsx");

export { ShopDiscountSource };
export const getAnalyticsShopDiscountSource = function getAnalyticsShopDiscountSource(shopDiscountSource) {
  let tmp = null;
  if (null != shopDiscountSource) {
    tmp = closure_16[shopDiscountSource];
  }
  return tmp;
};
export const getShopDiscountSource = function getShopDiscountSource(currentUser) {
  const obj = PremiumUtilsDefault;
  if (obj.canUseShopDiscounts(currentUser)) {
    const tmpResult = PremiumUtilsDefault;
    if (tmpResult.canUseCollectibles(currentUser)) {
      return obj.NITRO;
    } else {
      let NITRO;
      let perks;
      const getPerkSource = PerksStateUtils.getPerkSource;
      PerksStateUtils;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = getPerkSource(perks, user.Perk.SHOP_DISCOUNTS);
      let hasItem;
      if (perkSource != null) {
        hasItem = perkSource.includes(user.PerkSource.SOURCE_NITRO);
      }
      if (hasItem) {
        NITRO = obj.NITRO;
      } else {
        let hasItem1;
        if (perkSource != null) {
          hasItem1 = perkSource.includes(user.PerkSource.SOURCE_THIRDPARTY_CROISSANT);
        }
        NITRO = null;
        if (hasItem1) {
          NITRO = obj.THIRDPARTY;
        }
      }
      return NITRO;
    }
  } else {
    return null;
  }
};
export const isPremiumCollectiblesProduct = function isPremiumCollectiblesProduct(product) {
  let premiumType;
  if (product != null) {
    premiumType = product.premiumType;
  }
  return null != premiumType;
};
export const isPremiumCollectiblesPurchase = function isPremiumCollectiblesPurchase(purchase) {
  let purchaseType;
  if (purchase != null) {
    purchaseType = purchase.purchaseType;
  }
  return purchaseType === constants2.PREMIUM_PURCHASE;
};
export const getAssetForAvatarDecorationProduct = function getAssetForAvatarDecorationProduct(items) {
  items = items.items;
  const found = items.find(isAvatarDecorationRecord);
  let asset;
  if (found != null) {
    asset = found.asset;
  }
  return asset;
};
export const getPriceForCollectiblesProduct = function getPriceForCollectiblesProduct(stateFromStores, c5, arg2) {
  let tmp3;
  const tmp2 = arg2;
  if (tmp2) {
    tmp3 = c5 ? map1.MOBILE_PREMIUM_TIER_2 : map1.MOBILE;
  } else {
    tmp3 = c5 ? map1.PREMIUM_TIER_2 : map1.DEFAULT;
  }
  let prices;
  if (stateFromStores.prices[tmp3] != null) {
    const countryPrices = tmp4.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  let tmp6 = null;
  if (null != prices) {
    let first = prices[0];
    if (first == null) {
      first = null;
    }
    tmp6 = first;
  }
  return tmp6;
};
export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(
  c5,
  arg1,
  arg2,
) {
  let tmp3;
  const tmp2 = arg2;
  if (tmp2) {
    tmp3 = arg1 ? map1.MOBILE_PREMIUM_TIER_2 : map1.MOBILE;
  } else {
    tmp3 = arg1 ? map1.PREMIUM_TIER_2 : map1.DEFAULT;
  }
  let prices;
  if (isProfileEffectRecord.prices[tmp3] != null) {
    const countryPrices = tmp4.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  let tmp6 = null;
  if (null != prices) {
    let first = prices[0];
    if (first == null) {
      first = null;
    }
    tmp6 = first;
  }
  let str = "";
  if (null != tmp6) {
    let amount;
    const formatPrice = PriceUtils.formatPrice;
    PriceUtils;
    if (tmp6 != null) {
      amount = tmp6.amount;
    }
    let currency;
    if (tmp6 != null) {
      currency = tmp6.currency;
    }
    str = formatPrice(amount, currency);
  }
  return str;
};
export const getDefaultPriceSetAssignmentPurchaseType = function getDefaultPriceSetAssignmentPurchaseType(
  canUseShopDiscountsResult,
  arg1,
) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    let tmp6;
    if (arg1 !== CurrencyCodes.DISCORD_ORB) {
      tmp6 = canUseShopDiscountsResult ? map1.MOBILE_PREMIUM_TIER_2 : map1.MOBILE;
    }
    return tmp6;
  } else {
    PlatformUtils;
  }
  tmp6 = canUseShopDiscountsResult ? map1.PREMIUM_TIER_2 : map1.DEFAULT;
};
export const getBundleItemsPriceSum = function getBundleItemsPriceSum(bundledProducts, arg1) {
  let closure_0;
  _require = arg1;
  bundledProducts = bundledProducts.bundledProducts;
  if (null == bundledProducts) {
    return 0;
  } else {
    const obj = require("PlatformUtils");
    const tmp = _require;
    if (obj.isAndroid()) {
      if (arg1 !== CurrencyCodes.DISCORD_ORB) {
        let DEFAULT = constants3.MOBILE;
      }
      return bundledProducts.reduce((acc, item) => {
        let closure_0 = _require;
        let prices;
        if (item.prices[DEFAULT] != null) {
          const countryPrices = tmp2.countryPrices;
          if (countryPrices != null) {
            prices = countryPrices.prices;
          }
        }
        let tmp4 = null;
        if (null != prices) {
          let first;
          if (null == _require) {
            first = prices[0];
          } else {
            first = prices.find((currency) => currency.currency === closure_0);
          }
          if (first == null) {
            first = null;
          }
          tmp4 = first;
        }
        let num;
        if (tmp4 != null) {
          num = tmp4.amount;
        }
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0);
    } else {
      tmp(1369);
    }
    DEFAULT = constants3.DEFAULT;
  }
};
export const extractPriceByPurchaseTypes = function extractPriceByPurchaseTypes(
  type,
  defaultPriceSetAssignmentPurchaseType,
  arg2,
) {
  let closure_0 = arg2;
  let prices;
  if (type.prices[defaultPriceSetAssignmentPurchaseType] != null) {
    const countryPrices = tmp.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  let tmp3 = null;
  if (null != prices) {
    let first;
    if (null == arg2) {
      first = prices[0];
    } else {
      first = prices.find((currency) => currency.currency === closure_0);
    }
    if (first == null) {
      first = null;
    }
    tmp3 = first;
  }
  return tmp3;
};
export const NoDiscount = obj2;
export const DISCOUNT_DISPLAY_MINIMUM_THRESHOLD = 5;
export const getProductDiscount = function getProductDiscount(product, hasShopDiscount, DISCORD_ORB) {
  if (null == product) {
    return obj2;
  } else {
    _require = DISCORD_ORB;
    const bundledProducts = product.bundledProducts;
    let num = 0;
    if (null != bundledProducts) {
      const obj = require("PlatformUtils");
      const tmp = _require;
      if (obj.isAndroid()) {
        if (DISCORD_ORB !== CurrencyCodes.DISCORD_ORB) {
          let DEFAULT = constants3.MOBILE;
        }
        num = bundledProducts.reduce((acc, item) => {
          let closure_0 = _require;
          let prices;
          if (item.prices[DEFAULT] != null) {
            const countryPrices = tmp2.countryPrices;
            if (countryPrices != null) {
              prices = countryPrices.prices;
            }
          }
          let tmp4 = null;
          if (null != prices) {
            let first;
            if (null == _require) {
              first = prices[0];
            } else {
              first = prices.find((currency) => currency.currency === closure_0);
            }
            if (first == null) {
              first = null;
            }
            tmp4 = first;
          }
          let num;
          if (tmp4 != null) {
            num = tmp4.amount;
          }
          if (num == null) {
            num = 0;
          }
          return acc + num;
        }, 0);
      } else {
        tmp(1369);
      }
      DEFAULT = constants3.DEFAULT;
    }
    if (num <= 0) {
      return obj2;
    } else {
      const obj5 = require("PlatformUtils");
      const tmp19 = _require;
      if (obj5.isAndroid()) {
        let tmp8;
        if (DISCORD_ORB !== CurrencyCodes.DISCORD_ORB) {
          tmp8 = hasShopDiscount ? constants3.MOBILE_PREMIUM_TIER_2 : constants3.MOBILE;
        }
        _require = DISCORD_ORB;
        let prices;
        if (product.prices[tmp8] != null) {
          const countryPrices = tmp10.countryPrices;
          if (countryPrices != null) {
            prices = countryPrices.prices;
          }
        }
        let tmp12 = null;
        if (null != prices) {
          let first;
          if (null == DISCORD_ORB) {
            first = prices[0];
          } else {
            first = prices.find((currency) => currency.currency === closure_0);
          }
          if (first == null) {
            first = null;
          }
          tmp12 = first;
        }
        if (null != tmp12) {
          obj2 = { original: num, discountPercentage: Math.round(((num - tmp12.amount) / num) * 100) };
          const _Math = Math;
        }
        return obj2;
      } else {
        tmp19(1369);
      }
      tmp8 = hasShopDiscount ? constants3.PREMIUM_TIER_2 : constants3.DEFAULT;
    }
  }
};
export const getCollectiblesProductPriceComparisons = function getCollectiblesProductPriceComparisons(
  type,
  hasShopDiscount,
) {
  hasShopDiscount = hasShopDiscount.hasShopDiscount;
  let c0;
  let prices;
  const discount = hasShopDiscount.discount;
  if (type.prices[map1.DEFAULT] != null) {
    const countryPrices = tmp2.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  let tmp4 = null;
  if (null != prices) {
    let first = prices[0];
    if (first == null) {
      first = null;
    }
    tmp4 = first;
  }
  if (null == tmp4) {
    return null;
  } else if (tmp4.amount <= 0) {
    return { defaultPrice: tmp4, showDefaultPriceOnly: true };
  } else {
    c0 = undefined;
    let prices1;
    if (type.prices[map1.PREMIUM_TIER_2] != null) {
      const countryPrices2 = tmp17.countryPrices;
      if (countryPrices2 != null) {
        prices1 = countryPrices2.prices;
      }
    }
    let tmp7 = null;
    if (null != prices1) {
      let first1 = prices1[0];
      if (first1 == null) {
        first1 = null;
      }
      tmp7 = first1;
    }
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    let tmp12 = tmp4;
    if (type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      tmp12 = tmp4;
      if (hasShopDiscount) {
        const obj = { amount: discount.original };
        const merged = Object.assign(tmp4);
        tmp12 = obj;
      }
    }
    if (hasShopDiscount) {
      hasShopDiscount = null != tmp7;
    }
    let tmp16 = tmp12;
    if (hasShopDiscount) {
      tmp16 = tmp7;
    }
    return {
      defaultPrice: tmp4,
      originalPrice: tmp12,
      premiumPrice: tmp7,
      finalPrice: tmp16,
      showDiscountPrice: hasShopDiscount,
      finalPriceIsDifferent: tmp16.amount !== tmp12.amount,
      showDefaultPriceOnly: false,
    };
  }
};
export const isFreeCollectiblesProduct = function isFreeCollectiblesProduct(product) {
  let c0;
  let prices;
  if (product.prices[map1.DEFAULT] != null) {
    const countryPrices = tmp.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  let tmp3 = null;
  if (null != prices) {
    let first = prices[0];
    if (first == null) {
      first = null;
    }
    tmp3 = first;
  }
  let amount;
  if (tmp3 != null) {
    amount = tmp3.amount;
  }
  return 0 === amount;
};
export const extendVariantsProducts = function extendVariantsProducts(items) {
  return items.reduce(f94311, []);
};
export const getProductsFromCategories = function getProductsFromCategories(arr, arg1) {
  items = [...arr.values()];
  const obj = _mod12;
  const flatMapResult = obj.flatMap(items, "products");
  let reduced = flatMapResult;
  const uniqBy = _mod12.uniqBy;
  _mod12;
  if (arg1) {
    reduced = flatMapResult.reduce(f94311, []);
  }
  return uniqBy(reduced, "storeListingId");
};
export { getItemRecordsFromPurchases };
export { getItemRecordsFromCategories };
export const getCollectibleTypeLabel = function getCollectibleTypeLabel(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl4 = intl5.intl;
    return intl4.string(intl5.t["7v0T9P"]);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl3 = intl5.intl;
    return intl3.string(intl5.t.wR5wOo);
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t.x5CoXR);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = intl5.intl;
    return intl.string(intl5.t.GWrZOd);
  } else {
    return null;
  }
};
export const getAssetDisplayConfig = function getAssetDisplayConfig(banner_display_config) {
  let fromServerResult;
  if (null != banner_display_config) {
    fromServerResult = AssetDisplayConfigRecord.fromServer(banner_display_config);
  }
  return fromServerResult;
};
export const getAvatarDecorationsFromPurchases = function getAvatarDecorationsFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION);
};
export const getAvatarDecorationsFromCategories = function getAvatarDecorationsFromCategories(categories) {
  return getItemRecordsFromCategories(categories, CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION);
};
export const getAvatarDecorations = function getAvatarDecorations(stateFromStores, arr) {
  items = [
    ...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION),
    ...getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION),
  ];
  const obj = _mod12;
  return obj.uniqBy(items, "skuId");
};
export const getNameplatesFromPurchases = function getNameplatesFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.NAMEPLATE);
};
export const getNameplatesFromCategories = function getNameplatesFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.NAMEPLATE);
};
export const getNameplates = function getNameplates(stateFromStores, arr) {
  items = [
    ...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.NAMEPLATE),
    ...getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.NAMEPLATE),
  ];
  const obj = _mod12;
  return obj.uniqBy(items, "skuId");
};
export const getProfileEffectsFromPurchases = function getProfileEffectsFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
};
export const getProfileEffectsFromCategories = function getProfileEffectsFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
};
export const getProfileEffects = function getProfileEffects(stateFromStores, arr) {
  items = [
    ...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT),
    ...getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT),
  ];
  const obj = _mod12;
  return obj.uniqBy(items, "skuId");
};
export const groupProfileEffects = function groupProfileEffects(arr, arr2) {
  const tmp = getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
  let closure_0 = tmp;
  arr = getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
  const obj = {
    purchased: tmp,
    shopPreviews: arr.filter((skuId) => {
      skuId = skuId.skuId;
      return !closure_0.some((skuId) => skuId.skuId === skuId);
    }),
  };
  return obj;
};
export const getProfileFramesFromPurchases = function getProfileFramesFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME);
};
export const getProfileFramesFromCategories = function getProfileFramesFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME);
};
export const getProfileFrames = function getProfileFrames(stateFromStores, arr) {
  items = [
    ...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME),
    ...getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME),
  ];
  const obj = _mod12;
  return obj.uniqBy(items, "skuId");
};
export const isCollectiblesGiftCode = function isCollectiblesGiftCode(giftCode) {
  return giftCode.applicationId === unpackModuleId;
};
export const LOGO_ASPECT_RATIO = 3.8;
export const getLogoSize = function getLogoSize(arg0) {
  return 3.8 * arg0;
};
export const getDaysRemaining = function getDaysRemaining(date) {
  date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const UTC2 = Date.UTC;
  const UTCResult = UTC(fullYear, month, date.getDate());
  const fullYear1 = date.getFullYear();
  const month1 = date.getMonth();
  return Math.floor((UTC2(fullYear1, month1, date.getDate()) - UTCResult) / 86400000);
};
export const shouldShowLimitedTimeBadge = function shouldShowLimitedTimeBadge(date) {
  let tmp = null != date;
  if (tmp) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date();
    const _Date2 = Date;
    const fullYear = date.getFullYear();
    const month = date.getMonth();
    const _Date3 = Date;
    const UTC2 = Date.UTC;
    const UTCResult = UTC(fullYear, month, date.getDate());
    const fullYear1 = date.getFullYear();
    const month1 = date.getMonth();
    const _Math = Math;
    tmp = Math.floor((UTC2(fullYear1, month1, date.getDate()) - UTCResult) / 86400000) <= React4;
  }
  return tmp;
};
export const isProductNew = function isProductNew(cResult) {
  let tmp2 = null != tmp;
  if (tmp2) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date();
    tmp2 = date.getTime() < tmp;
  }
  return tmp2;
};
export const isBundleProduct = function isBundleProduct(type) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  return type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
};
export const getCollectiblesItemTypeForDisplay = function getCollectiblesItemTypeForDisplay(type) {
  if (null != type) {
    if (type.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      type = CollectiblesItemType.CollectiblesItemType.BUNDLE;
    } else {
      items = type.items;
      if (items != null) {
        const first = items[0];
        if (first != null) {
          type = first.type;
        }
      }
    }
    return type;
  }
};
export const getCollectiblesPrice = function getCollectiblesPrice(skusById) {
  let invoicePreview;
  let selectedSkuId;
  ({ invoicePreview, selectedSkuId } = skusById);
  let unitPrice;
  skusById = skusById.skusById;
  if (invoicePreview != null) {
    const invoiceItems = invoicePreview.invoiceItems;
    if (invoiceItems != null) {
      const first = invoiceItems[0];
      if (first != null) {
        unitPrice = first.unitPrice;
      }
    }
  }
  let tmp3;
  if (null != unitPrice) {
    const obj = { amount: null, currency: null };
    ({ amount: obj.amount, currency: obj.currency } = unitPrice);
    tmp3 = obj;
  }
  let tmp4 = tmp3;
  if (null == tmp3) {
    tmp4 = tmp3;
    if (null != selectedSkuId) {
      let price;
      if (skusById[selectedSkuId] != null) {
        price = tmp5.price;
      }
      tmp4 = tmp3;
      if (null != price) {
        tmp4 = { amount: skusById[selectedSkuId].price.amount, currency: skusById[selectedSkuId].price.currency };
        obj2 = { amount: skusById[selectedSkuId].price.amount, currency: skusById[selectedSkuId].price.currency };
      }
    }
  }
  return tmp4;
};
export const shouldHideGiftingForCurrency = function shouldHideGiftingForCurrency(currency) {
  const hasItem = null != currency && items.includes(currency);
  return hasItem;
};
export const getStrikeThroughPriceAmountForCollectiblesProduct =
  function getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, c5, arg2) {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    if (type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      const bundledProducts = stateFromStores.bundledProducts;
      let num = 0;
      let num2 = 0;
      if (null != bundledProducts) {
        const tmp2Result = PlatformUtils;
        if (tmp2Result.isAndroid()) {
          if (undefined !== CurrencyCodes.DISCORD_ORB) {
            let DEFAULT = constants3.MOBILE;
          }
          num2 = bundledProducts.reduce((acc, item) => {
            let closure_0 = _require;
            let prices;
            if (item.prices[DEFAULT] != null) {
              const countryPrices = tmp2.countryPrices;
              if (countryPrices != null) {
                prices = countryPrices.prices;
              }
            }
            let tmp4 = null;
            if (null != prices) {
              let first;
              if (null == _require) {
                first = prices[0];
              } else {
                first = prices.find((currency) => currency.currency === closure_0);
              }
              if (first == null) {
                first = null;
              }
              tmp4 = first;
            }
            let num;
            if (tmp4 != null) {
              num = tmp4.amount;
            }
            if (num == null) {
              num = 0;
            }
            return acc + num;
          }, 0);
        } else {
          PlatformUtils;
        }
        DEFAULT = constants3.DEFAULT;
      }
      return num2;
    } else {
      let tmp4;
      if (c5) {
        tmp4 = arg2 ? constants3.MOBILE : constants3.DEFAULT;
      } else {
        tmp4 = arg2 ? constants3.MOBILE_PREMIUM_TIER_2 : constants3.PREMIUM_TIER_2;
      }
      let prices;
      if (stateFromStores.prices[tmp4] != null) {
        let countryPrices = tmp5.countryPrices;
        if (countryPrices != null) {
          prices = countryPrices.prices;
        }
      }
      let tmp7 = null;
      if (null != prices) {
        let first = prices[0];
        if (first == null) {
          first = null;
        }
        tmp7 = first;
      }
      let amount;
      if (tmp7 != null) {
        amount = tmp7.amount;
      }
      return amount;
    }
  };
export const canActionOnProduct = function canActionOnProduct(arg0) {
  let isPartiallyOwnedBundle;
  let product;
  ({ product, isPartiallyOwnedBundle } = arg0);
  if (!isPartiallyOwnedBundle) {
    let skuId;
    const ORB_PROFILE_BADGE = metroImportAll.ORB_PROFILE_BADGE;
    if (product != null) {
      skuId = product.skuId;
    }
    isPartiallyOwnedBundle = ORB_PROFILE_BADGE === skuId && tmp;
  }
  return !isPartiallyOwnedBundle;
};
export const getProductTypeNameForLogging = function getProductTypeNameForLogging(arg0, arg1) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === arg0) {
    return "avatar decoration";
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === arg0) {
    return "profile effect";
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === arg0) {
    return "nameplate";
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === arg0) {
    return "profile frame";
  } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === arg0) {
    return "bundle";
  } else if (CollectiblesItemType.CollectiblesItemType.EXTERNAL_SKU === arg0) {
    let str3 = "3-day nitro credit";
    if (arg1 !== metroImportAll.FRACTIONAL_PREMIUM) {
      let str4 = "1-day nitro credit";
      if (arg1 !== metroImportAll.FRACTIONAL_PREMIUM_1_DAY) {
        let str5 = "unknown";
        if (arg1 === metroImportAll.ORB_PROFILE_BADGE) {
          str5 = "orb profile badge";
        }
        str4 = str5;
      }
      str3 = str4;
    }
    return str3;
  } else if (CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP === arg0) {
    return "variants group";
  } else {
    return "unknown";
  }
};
export const sortProductsByPrice = function sortProductsByPrice(arr, hasShopDiscount, arg2) {
  let closure_1 = arg2;
  return arr.sort((product, product2) => {
    let productOrbPrice;
    let productOrbPrice1;
    let tmp2;
    if (closure_1) {
      obj2 = { product, hasShopDiscount };
      const obj = CollectiblesProductUtils;
      productOrbPrice = obj.getProductOrbPrice(obj2);
      tmp2 = hasShopDiscount;
    } else {
      tmp2 = hasShopDiscount;
      const tmp4 = product.prices[hasShopDiscount ? map1.MOBILE_PREMIUM_TIER_2 : map1.MOBILE];
      let prices;
      if (tmp4 != null) {
        const countryPrices = tmp4.countryPrices;
        if (countryPrices != null) {
          prices = countryPrices.prices;
        }
      }
      productOrbPrice = null;
      if (null != prices) {
        let first = prices[0];
        if (first == null) {
          first = null;
        }
        productOrbPrice = first;
      }
    }
    if (closure_1) {
      const obj4 = { product: product2, hasShopDiscount: tmp2 };
      const obj3 = CollectiblesProductUtils;
      productOrbPrice1 = obj3.getProductOrbPrice(obj4);
    } else {
      const tmp13 = product2.prices[tmp2 ? map1.MOBILE_PREMIUM_TIER_2 : map1.MOBILE];
      let prices1;
      if (tmp13 != null) {
        const countryPrices2 = tmp13.countryPrices;
        if (countryPrices2 != null) {
          prices1 = countryPrices2.prices;
        }
      }
      productOrbPrice1 = null;
      if (null != prices1) {
        let first1 = prices1[0];
        if (first1 == null) {
          first1 = null;
        }
        productOrbPrice1 = first1;
      }
    }
    let num;
    if (productOrbPrice != null) {
      num = productOrbPrice.amount;
    }
    if (num == null) {
      num = 0;
    }
    let num2;
    if (productOrbPrice1 != null) {
      num2 = productOrbPrice1.amount;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  });
};
export const removeRewardProductsFilter = function removeRewardProductsFilter(arr) {
  return arr.filter((isCategoryReward) => !isCategoryReward.isCategoryReward);
};
