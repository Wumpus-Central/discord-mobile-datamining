// === Module 7554: CollectiblesUtils ===

// Module 7554 (CollectiblesUtils)
import _mod12 from "module_12" /* 12 */;
import Constants2 from "Constants" /* 1085 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import PerksStateUtils from "PerksStateUtils" /* 1377 */;
import NameplateRecord from "NameplateRecord" /* 1887 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import PriceUtils from "PriceUtils" /* 7234 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7547 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7548 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7549 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import ShopAssetConfigRecord from "ShopAssetConfigRecord" /* 7555 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function getItemRecordsFromPurchases(arr, PROFILE_EFFECT) {
  if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    let tmpResult = tmp(12);
    items = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const found = tmpResult.flatMap(items, "items").filter(isAvatarDecorationRecord);
    tmpResult = tmp(12);
    return tmpResult.uniqBy(found, "skuId");
  } else if (PROFILE_EFFECT === tmp(1889).CollectiblesItemType.NAMEPLATE) {
    const items1 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const tmpResult1 = tmp(12);
    const found1 = tmp(12).flatMap(items1, "items").filter(isNameplateRecord);
    const flatMapResult1 = tmp(12).flatMap(items1, "items");
    return tmp(12).uniqBy(found1, "skuId");
  } else if (PROFILE_EFFECT === tmp(1889).CollectiblesItemType.PROFILE_EFFECT) {
    const items2 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const tmpResult3 = tmp(12);
    const found2 = tmp(12).flatMap(items2, "items").filter(isProfileEffectRecord);
    const flatMapResult2 = tmp(12).flatMap(items2, "items");
    return tmp(12).uniqBy(found2, "skuId");
  } else if (PROFILE_EFFECT === tmp(1889).CollectiblesItemType.PROFILE_FRAME) {
    const items3 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const tmpResult5 = tmp(12);
    const found3 = tmp(12).flatMap(items3, "items").filter(isProfileFrameRecord);
    const flatMapResult3 = tmp(12).flatMap(items3, "items");
    return tmp(12).uniqBy(found3, "skuId");
  } else {
    return [];
  }
}
function getItemRecordsFromCategories(arr, PROFILE_EFFECT) {
  items = [...arr.values()];
  const flatMapResult = _mod12.flatMap(items, "products");
  const uniqByResult = _mod12.uniqBy(flatMapResult.reduce((arr, type) => {
    closure_0 = type;
    if (null != type) {
      if (type.type === require("CollectiblesItemType").CollectiblesItemType.VARIANTS_GROUP) {
        if (null != type.variants) {
          const variants = type.variants;
          let combined = tmp(tmp2[15]).concat(arr, variants.map((item) => {
            obj = {};
            const merged = Object.assign(item);
            ({ storeListingId: obj.variantGroupStoreListingId, eligibleOffers: obj.eligibleOffers } = closure_0);
            return obj;
          }));
          const tmpResult = tmp(tmp2[15]);
        }
        return combined;
      }
      tmp = _require;
      tmp2 = dependencyMap;
    }
    arr.push(type);
    combined = arr;
  }, []), "storeListingId");
  if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    let tmpResult = tmp(12);
    const found = tmpResult.flatMap(uniqByResult, "items").filter(isAvatarDecorationRecord);
    tmpResult = tmp(12);
    return tmpResult.uniqBy(found, "skuId");
  } else if (PROFILE_EFFECT === tmp(1889).CollectiblesItemType.NAMEPLATE) {
    const tmpResult1 = tmp(12);
    const found1 = tmp(12).flatMap(uniqByResult, "items").filter(isNameplateRecord);
    const flatMapResult2 = tmp(12).flatMap(uniqByResult, "items");
    return tmp(12).uniqBy(found1, "skuId");
  } else if (PROFILE_EFFECT === tmp(1889).CollectiblesItemType.PROFILE_EFFECT) {
    const tmpResult3 = tmp(12);
    const found2 = tmp(12).flatMap(uniqByResult, "items").filter(isProfileEffectRecord);
    const flatMapResult3 = tmp(12).flatMap(uniqByResult, "items");
    return tmp(12).uniqBy(found2, "skuId");
  } else if (PROFILE_EFFECT === tmp(1889).CollectiblesItemType.PROFILE_FRAME) {
    const tmpResult5 = tmp(12);
    const found3 = tmp(12).flatMap(uniqByResult, "items").filter(isProfileFrameRecord);
    const flatMapResult4 = tmp(12).flatMap(uniqByResult, "items");
    return tmp(12).uniqBy(found3, "skuId");
  } else {
    return [];
  }
}
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
const AssetDisplayConfigRecord = ShopAssetConfigRecord.AssetDisplayConfigRecord;
({ EXTERNAL_PRODUCT_SKU_IDS: closure_8, LIMITED_TIME_BADGE_DAYS_THRESHOLD: closure_9, SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS: c10 } = CollectiblesShopConstants);
({ COLLECTIBLES_APPLICATION_ID: closure_11, EntitlementTypes: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = Constants);
const CurrencyCodes = Constants2.CurrencyCodes;
let obj = { NITRO: "nitro", THIRDPARTY: "thirdparty" };
let closure_16 = { [obj.NITRO]: "nitro", [obj.THIRDPARTY]: "xbox" };
obj = { original: -1, discountPercentage: -1 };
let items = [, , ];
({ KZT: arr[0], NGN: arr[1], EGP: arr[2] } = CurrencyCodes);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesUtils.tsx");

export const ShopDiscountSource = obj;
export const getAnalyticsShopDiscountSource = function getAnalyticsShopDiscountSource(shopDiscountSource) {
  let tmp = null;
  if (null != shopDiscountSource) {
    tmp = closure_16[shopDiscountSource];
  }
  return tmp;
};
export const getShopDiscountSource = function getShopDiscountSource(currentUser) {
  obj = PremiumUtilsDefault;
  if (obj.canUseShopDiscounts(currentUser)) {
    if (tmpResult.canUseCollectibles(currentUser)) {
      return obj.NITRO;
    } else {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = PerksStateUtils.getPerkSource(perks, tmp4(1379).Perk.SHOP_DISCOUNTS);
      let hasItem;
      if (perkSource != null) {
        hasItem = perkSource.includes(tmp4(1379).PerkSource.SOURCE_NITRO);
      }
      if (hasItem) {
        let NITRO = obj.NITRO;
      } else {
        NITRO = null;
        if (tmp4Result.getIsXboxGamePassPerksEnabled("getShopDiscountSource")) {
          let hasItem1;
          if (perkSource != null) {
            hasItem1 = perkSource.includes(tmp4(1379).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
          }
          NITRO = null;
          if (hasItem1) {
            NITRO = obj.THIRDPARTY;
          }
        }
        tmp4Result = tmp4(7556);
      }
      return NITRO;
    }
    tmpResult = PremiumUtilsDefault;
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
  if (!arg2) {
    const tmp4 = stateFromStores.prices[c5 ? tmp.PREMIUM_TIER_2 : tmp.DEFAULT];
    let prices;
    if (tmp4 != null) {
      const countryPrices = tmp4.countryPrices;
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
    return tmp7;
  }
};
export const getFormattedPriceForCollectiblesProduct = function getFormattedPriceForCollectiblesProduct(arg0, arg1, arg2) {
  if (!arg2) {
    const tmp4 = arg0.prices[arg1 ? tmp.PREMIUM_TIER_2 : tmp.DEFAULT];
    let prices;
    if (tmp4 != null) {
      const countryPrices = tmp4.countryPrices;
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
    let str = "";
    if (null != tmp7) {
      let amount;
      if (tmp7 != null) {
        amount = tmp7.amount;
      }
      let currency;
      if (tmp7 != null) {
        currency = tmp7.currency;
      }
      str = PriceUtils.formatPrice(amount, currency);
    }
    return str;
  }
};
export const getDefaultPriceSetAssignmentPurchaseType = function getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult, arg1) {
  if (!obj.isAndroid()) {
    const tmpResult = PlatformUtils;
  }
  return canUseShopDiscountsResult ? constants3.PREMIUM_TIER_2 : constants3.DEFAULT;
};
export const getBundleItemsPriceSum = function getBundleItemsPriceSum(bundledProducts, arg1) {
  _require = arg1;
  bundledProducts = bundledProducts.bundledProducts;
  if (null == bundledProducts) {
    return 0;
  } else {
    if (obj.isAndroid()) {
      if (arg1 !== CurrencyCodes.DISCORD_ORB) {
        let DEFAULT = constants3.MOBILE;
      }
      return bundledProducts.reduce((acc, item) => {
        closure_0 = _require;
        let prices;
        if (item.prices[DEFAULT] != null) {
          const countryPrices = tmp2.countryPrices;
          if (countryPrices != null) {
            prices = countryPrices.prices;
          }
        }
        let tmp4 = null;
        if (null != prices) {
          if (null == _require) {
            let first = prices[0];
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
      const tmpResult = tmp(1115);
    }
    DEFAULT = constants3.DEFAULT;
    obj = require("PlatformUtils");
    tmp = _require;
  }
};
export const extractPriceByPurchaseTypes = function extractPriceByPurchaseTypes(arg0, arg1, arg2) {
  closure_0 = arg2;
  let prices;
  if (arg0.prices[arg1] != null) {
    const countryPrices = tmp.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  let tmp3 = null;
  if (null != prices) {
    if (null == arg2) {
      let first = prices[0];
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
export const NoDiscount = obj;
export const DISCOUNT_DISPLAY_MINIMUM_THRESHOLD = 5;
export const getProductDiscount = function getProductDiscount(product, hasShopDiscount, DISCORD_ORB) {
  if (null == product) {
    return obj;
  } else {
    _require = DISCORD_ORB;
    const bundledProducts = product.bundledProducts;
    if (null == bundledProducts) {
      if (0 <= 0) {
        return obj;
      } else {
        if (!obj5.isAndroid()) {
          const tmp20Result = require("PlatformUtils");
        }
        _require = DISCORD_ORB;
        const tmp11 = product.prices[hasShopDiscount ? constants3.PREMIUM_TIER_2 : constants3.DEFAULT];
        let prices;
        if (tmp11 != null) {
          const countryPrices = tmp11.countryPrices;
          if (countryPrices != null) {
            prices = countryPrices.prices;
          }
        }
        let tmp13 = null;
        if (null != prices) {
          if (null == DISCORD_ORB) {
            let first = prices[0];
          } else {
            first = prices.find((currency) => currency.currency === closure_0);
          }
          if (first == null) {
            first = null;
          }
          tmp13 = first;
        }
        if (null != tmp13) {
          obj = { original: 0, discountPercentage: null };
          const _Math = Math;
          obj.discountPercentage = Math.round((0 - tmp13.amount) / 0 * 100);
        }
        return obj;
      }
    } else {
      obj = require("PlatformUtils");
      if (obj.isAndroid()) {
        if (DISCORD_ORB !== CurrencyCodes.DISCORD_ORB) {
          let DEFAULT = constants3.MOBILE;
        }
        const reduced = bundledProducts.reduce((acc, item) => {
          closure_0 = _require;
          let prices;
          if (item.prices[DEFAULT] != null) {
            const countryPrices = tmp2.countryPrices;
            if (countryPrices != null) {
              prices = countryPrices.prices;
            }
          }
          let tmp4 = null;
          if (null != prices) {
            if (null == _require) {
              let first = prices[0];
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
        const tmpResult = tmp(1115);
      }
      DEFAULT = constants3.DEFAULT;
      tmp = _require;
    }
  }
};
export const getCollectiblesProductPriceComparisons = function getCollectiblesProductPriceComparisons(type, hasShopDiscount) {
  hasShopDiscount = hasShopDiscount.hasShopDiscount;
  c0 = undefined;
  let prices;
  if (type.prices[constants3.DEFAULT] != null) {
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
    obj = { defaultPrice: tmp4, showDefaultPriceOnly: true };
    return obj;
  } else {
    c0 = undefined;
    let prices1;
    if (type.prices[tmp.PREMIUM_TIER_2] != null) {
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
        obj = {};
        const merged = Object.assign(tmp4);
        obj.amount = hasShopDiscount.discount.original;
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
    obj = { defaultPrice: tmp4, originalPrice: tmp12, premiumPrice: tmp7, finalPrice: tmp16, showDiscountPrice: hasShopDiscount, finalPriceIsDifferent: tmp16.amount !== tmp12.amount, showDefaultPriceOnly: false };
    return obj;
  }
  tmp = constants3;
};
export const isFreeCollectiblesProduct = function isFreeCollectiblesProduct(product) {
  c0 = undefined;
  let prices;
  if (product.prices[constants3.DEFAULT] != null) {
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
  return items.reduce((arr, type) => {
    closure_0 = type;
    if (null != type) {
      if (type.type === require("CollectiblesItemType").CollectiblesItemType.VARIANTS_GROUP) {
        if (null != type.variants) {
          const variants = type.variants;
          let combined = tmp(tmp2[15]).concat(arr, variants.map((item) => {
            obj = {};
            const merged = Object.assign(item);
            ({ storeListingId: obj.variantGroupStoreListingId, eligibleOffers: obj.eligibleOffers } = closure_0);
            return obj;
          }));
          const tmpResult = tmp(tmp2[15]);
        }
        return combined;
      }
      tmp = _require;
      tmp2 = dependencyMap;
    }
    arr.push(type);
    combined = arr;
  }, []);
};
export const getProductsFromCategories = function getProductsFromCategories(arr, arg1) {
  items = [...arr.values()];
  const flatMapResult = _mod12.flatMap(items, "products");
  let reduced = flatMapResult;
  if (arg1) {
    reduced = flatMapResult.reduce((arr, type) => {
      closure_0 = type;
      if (null != type) {
        if (type.type === require("CollectiblesItemType").CollectiblesItemType.VARIANTS_GROUP) {
          if (null != type.variants) {
            const variants = type.variants;
            let combined = tmp(tmp2[15]).concat(arr, variants.map((item) => {
              obj = {};
              const merged = Object.assign(item);
              ({ storeListingId: obj.variantGroupStoreListingId, eligibleOffers: obj.eligibleOffers } = closure_0);
              return obj;
            }));
            const tmpResult = tmp(tmp2[15]);
          }
          return combined;
        }
        tmp = _require;
        tmp2 = dependencyMap;
      }
      arr.push(type);
      combined = arr;
    }, []);
  }
  return _mod12.uniqBy(reduced, "storeListingId");
};
export { getItemRecordsFromPurchases };
export { getItemRecordsFromCategories };
export const getCollectibleTypeLabel = function getCollectibleTypeLabel(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t["7v0T9P"]);
  } else if (tmp(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.wR5wOo);
  } else if (tmp(1889).CollectiblesItemType.NAMEPLATE === type) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t.x5CoXR);
  } else if (tmp(1889).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.GWrZOd);
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
  items = [...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION), ...getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION)];
  return _mod12.uniqBy(items, "skuId");
};
export const getNameplatesFromPurchases = function getNameplatesFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.NAMEPLATE);
};
export const getNameplatesFromCategories = function getNameplatesFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.NAMEPLATE);
};
export const getNameplates = function getNameplates(stateFromStores, arr) {
  items = [...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.NAMEPLATE), ...getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.NAMEPLATE)];
  return _mod12.uniqBy(items, "skuId");
};
export const getProfileEffectsFromPurchases = function getProfileEffectsFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
};
export const getProfileEffectsFromCategories = function getProfileEffectsFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
};
export const getProfileEffects = function getProfileEffects(stateFromStores, arr) {
  items = [...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT), ...getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT)];
  return _mod12.uniqBy(items, "skuId");
};
export const groupProfileEffects = function groupProfileEffects(arr, arr) {
  const tmp = getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
  closure_0 = tmp;
  arr = getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
  return {
    purchased: tmp,
    shopPreviews: getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT).filter((skuId) => {
      skuId = skuId.skuId;
      return !closure_0.some((skuId) => skuId.skuId === skuId);
    })
  };
};
export const getProfileFramesFromPurchases = function getProfileFramesFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME);
};
export const getProfileFramesFromCategories = function getProfileFramesFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME);
};
export const getProfileFrames = function getProfileFrames(stateFromStores, arr) {
  items = [...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME), ...getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME)];
  return _mod12.uniqBy(items, "skuId");
};
export const isCollectiblesGiftCode = function isCollectiblesGiftCode(giftCode) {
  return giftCode.applicationId === closure_1_11;
};
export const LOGO_ASPECT_RATIO = 3.8;
export const getLogoSize = function getLogoSize(arg0) {
  return 3.8 * arg0;
};
export const getDaysRemaining = function getDaysRemaining(date) {
  date = new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const fullYear1 = date.getFullYear();
  const month1 = date.getMonth();
  return Math.floor((Date.UTC(fullYear1, month1, date.getDate()) - Date.UTC(fullYear, month, date.getDate())) / 86400000);
};
export const shouldShowLimitedTimeBadge = function shouldShowLimitedTimeBadge(date) {
  let tmp = null != date;
  if (tmp) {
    const _Date = Date;
    date = new Date();
    const _Date2 = Date;
    const fullYear = date.getFullYear();
    const month = date.getMonth();
    const _Date3 = Date;
    const fullYear1 = date.getFullYear();
    const month1 = date.getMonth();
    const _Math = Math;
    tmp = Math.floor((Date.UTC(fullYear1, month1, date.getDate()) - Date.UTC(fullYear, month, date.getDate())) / 86400000) <= React7;
    const UTCResult = Date.UTC(fullYear, month, date.getDate());
  }
  return tmp;
};
export const isProductNew = function isProductNew(skuId) {
  let tmp2 = null != tmp;
  if (tmp2) {
    const _Date = Date;
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
export const getCollectiblesPrice = function getCollectiblesPrice(arg0) {
  ({ invoicePreview, selectedSkuId } = arg0);
  let unitPrice;
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
    obj = { amount: null, currency: null };
    ({ amount: obj.amount, currency: obj.currency } = unitPrice);
    tmp3 = obj;
  }
  let tmp4 = tmp3;
  if (null == tmp3) {
    tmp4 = tmp3;
    if (null != selectedSkuId) {
      let price;
      if (arg0.skusById[selectedSkuId] != null) {
        price = tmp5.price;
      }
      tmp4 = tmp3;
      if (null != price) {
        obj = { amount: tmp5.price.amount, currency: tmp5.price.currency };
        tmp4 = obj;
      }
    }
  }
  return tmp4;
};
export const shouldHideGiftingForCurrency = function shouldHideGiftingForCurrency(currency) {
  let hasItem = null != currency;
  if (hasItem) {
    hasItem = items.includes(currency);
  }
  return hasItem;
};
export const getStrikeThroughPriceAmountForCollectiblesProduct = function getStrikeThroughPriceAmountForCollectiblesProduct(stateFromStores, c5, arg2) {
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const bundledProducts = stateFromStores.bundledProducts;
    if (null == bundledProducts) {
      return 0;
    } else {
      let tmp2Result = tmp2(1115);
      if (tmp2Result.isAndroid()) {
        if (undefined !== CurrencyCodes.DISCORD_ORB) {
          let DEFAULT = constants3.MOBILE;
        }
        const reduced = bundledProducts.reduce((acc, item) => {
          closure_0 = _require;
          let prices;
          if (item.prices[DEFAULT] != null) {
            const countryPrices = tmp2.countryPrices;
            if (countryPrices != null) {
              prices = countryPrices.prices;
            }
          }
          let tmp4 = null;
          if (null != prices) {
            if (null == _require) {
              let first = prices[0];
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
        tmp2Result = tmp2(1115);
      }
      DEFAULT = constants3.DEFAULT;
    }
  } else if (!c5) {
    const tmp5 = stateFromStores.prices[arg2 ? tmp16.MOBILE_PREMIUM_TIER_2 : tmp16.PREMIUM_TIER_2];
    let prices;
    if (tmp5 != null) {
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
  ({ product, isPartiallyOwnedBundle } = arg0);
  if (!isPartiallyOwnedBundle) {
    let skuId;
    if (product != null) {
      skuId = product.skuId;
    }
    isPartiallyOwnedBundle = constants.ORB_PROFILE_BADGE === skuId && tmp;
    const tmp5 = constants.ORB_PROFILE_BADGE === skuId && tmp;
  }
  return !isPartiallyOwnedBundle;
};
export const getProductTypeNameForLogging = function getProductTypeNameForLogging(arg0, arg1) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === arg0) {
    return "avatar decoration";
  } else if (tmp(1889).CollectiblesItemType.PROFILE_EFFECT === arg0) {
    return "profile effect";
  } else if (tmp(1889).CollectiblesItemType.NAMEPLATE === arg0) {
    return "nameplate";
  } else if (tmp(1889).CollectiblesItemType.PROFILE_FRAME === arg0) {
    return "profile frame";
  } else if (tmp(1889).CollectiblesItemType.BUNDLE === arg0) {
    return "bundle";
  } else if (tmp(1889).CollectiblesItemType.EXTERNAL_SKU === arg0) {
    let str3 = "3-day nitro credit";
    if (arg1 !== constants.FRACTIONAL_PREMIUM) {
      let str4 = "1-day nitro credit";
      if (arg1 !== tmp4.FRACTIONAL_PREMIUM_1_DAY) {
        let str5 = "unknown";
        if (arg1 === tmp4.ORB_PROFILE_BADGE) {
          str5 = "orb profile badge";
        }
        str4 = str5;
      }
      str3 = str4;
    }
    return str3;
  } else if (tmp(1889).CollectiblesItemType.VARIANTS_GROUP === arg0) {
    return "variants group";
  } else {
    return "unknown";
  }
};
export const sortProductsByPrice = function sortProductsByPrice(arr, hasShopDiscount, arg2) {
  closure_1 = arg2;
  return arr.sort((product, product2) => {
    if (closure_1) {
      obj = { product, hasShopDiscount };
      let productOrbPrice = obj.getProductOrbPrice(obj);
      let tmp2 = hasShopDiscount;
    } else {
      tmp2 = hasShopDiscount;
      const tmp4 = product.prices[hasShopDiscount ? constants3.MOBILE_PREMIUM_TIER_2 : constants3.MOBILE];
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
      obj = { product: product2, hasShopDiscount: tmp2 };
      let productOrbPrice1 = CollectiblesProductUtils.getProductOrbPrice(obj);
    } else {
      const tmp13 = product2.prices[tmp2 ? constants3.MOBILE_PREMIUM_TIER_2 : constants3.MOBILE];
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