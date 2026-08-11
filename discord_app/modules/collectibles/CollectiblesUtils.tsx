// discord_app/modules/collectibles/CollectiblesUtils.tsx
import { isAvatarDecorationRecord } from "fromServer";
import { isNameplateRecord } from "fromServer";
import { isProfileEffectRecord } from "fromServer";
import { isProfileFrameRecord } from "fromServer";
import { AssetDisplayConfigRecord } from "fromServer";
import items from "items";
import ME from "ME";
import { CurrencyCodes } from "sum";
import { apply } from "../../../_runtime/00012_apply.js";
import { CollectiblesItemType } from "../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import { set } from "../../utils/PlatformUtils.tsx";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";
import { formatSingleCurrencyPrice } from "../../utils/PriceUtils.tsx";
import { parseServerPerkConfigKind } from "../premium/perks_state/PerksStateUtils.tsx";

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
function getItemRecordsFromPurchases(arr, PROFILE_EFFECT) {
  if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    let tmpResult = tmp(12);
    const items = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const found = tmpResult.flatMap(items, "items").filter(isAvatarDecorationRecord);
    tmpResult = tmp(12);
    return tmpResult.uniqBy(found, "skuId");
  } else if (PROFILE_EFFECT === tmp(1949).CollectiblesItemType.NAMEPLATE) {
    const items1 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const tmpResult1 = tmp(12);
    const found1 = tmp(12).flatMap(items1, "items").filter(isNameplateRecord);
    const flatMapResult1 = tmp(12).flatMap(items1, "items");
    return tmp(12).uniqBy(found1, "skuId");
  } else if (PROFILE_EFFECT === tmp(1949).CollectiblesItemType.PROFILE_EFFECT) {
    const items2 = [];
    HermesBuiltin.arraySpread(arr.values(), 0);
    const tmpResult3 = tmp(12);
    const found2 = tmp(12).flatMap(items2, "items").filter(isProfileEffectRecord);
    const flatMapResult2 = tmp(12).flatMap(items2, "items");
    return tmp(12).uniqBy(found2, "skuId");
  } else if (PROFILE_EFFECT === tmp(1949).CollectiblesItemType.PROFILE_FRAME) {
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
  const items = [...arr.values()];
  let obj = apply;
  const flatMapResult = apply.flatMap(items, "products");
  const uniqByResult = apply.uniqBy(flatMapResult.reduce((arr, type) => {
    const callback = type;
    if (null != type) {
      if (type.type === callback(table[14]).CollectiblesItemType.VARIANTS_GROUP) {
        if (null != type.variants) {
          const variants = type.variants;
          let combined = tmp(tmp2[15]).concat(arr, variants.map((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            ({ storeListingId: obj.variantGroupStoreListingId, eligibleOffers: obj.eligibleOffers } = closure_0);
            return obj;
          }));
          const tmpResult = tmp(tmp2[15]);
        }
        return combined;
      }
      tmp = callback;
      tmp2 = table;
    }
    arr.push(type);
    combined = arr;
  }, []), "storeListingId");
  if (PROFILE_EFFECT === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    let tmpResult = tmp(12);
    const found = tmpResult.flatMap(uniqByResult, "items").filter(isAvatarDecorationRecord);
    tmpResult = tmp(12);
    return tmpResult.uniqBy(found, "skuId");
  } else if (PROFILE_EFFECT === tmp(1949).CollectiblesItemType.NAMEPLATE) {
    const tmpResult1 = tmp(12);
    const found1 = tmp(12).flatMap(uniqByResult, "items").filter(isNameplateRecord);
    const flatMapResult2 = tmp(12).flatMap(uniqByResult, "items");
    return tmp(12).uniqBy(found1, "skuId");
  } else if (PROFILE_EFFECT === tmp(1949).CollectiblesItemType.PROFILE_EFFECT) {
    const tmpResult3 = tmp(12);
    const found2 = tmp(12).flatMap(uniqByResult, "items").filter(isProfileEffectRecord);
    const flatMapResult3 = tmp(12).flatMap(uniqByResult, "items");
    return tmp(12).uniqBy(found2, "skuId");
  } else if (PROFILE_EFFECT === tmp(1949).CollectiblesItemType.PROFILE_FRAME) {
    const tmpResult5 = tmp(12);
    const found3 = tmp(12).flatMap(uniqByResult, "items").filter(isProfileFrameRecord);
    const flatMapResult4 = tmp(12).flatMap(uniqByResult, "items");
    return tmp(12).uniqBy(found3, "skuId");
  } else {
    return [];
  }
  const obj2 = apply;
}
({ EXTERNAL_PRODUCT_SKU_IDS: metroImportAll, LIMITED_TIME_BADGE_DAYS_THRESHOLD: c9, SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS: c10 } = items);
({ COLLECTIBLES_APPLICATION_ID: unpackModuleId, EntitlementTypes: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = ME);
let obj = { NITRO: "nitro", THIRDPARTY: "thirdparty" };
let closure_16 = { [obj.NITRO]: "nitro", [obj.THIRDPARTY]: "xbox" };
obj = { original: -1, discountPercentage: -1 };
items = [, , ];
({ KZT: arr[0], NGN: arr[1], EGP: arr[2] } = CurrencyCodes);
const result = require("fromServer").fileFinishedImporting("modules/collectibles/CollectiblesUtils.tsx");

export const ShopDiscountSource = obj;
export const getAnalyticsShopDiscountSource = function getAnalyticsShopDiscountSource(shopDiscountSource) {
  let tmp = null;
  if (null != shopDiscountSource) {
    tmp = table2[shopDiscountSource];
  }
  return tmp;
};
export const getShopDiscountSource = function getShopDiscountSource(currentUser) {
  const obj = getPremiumPlanItem;
  if (obj.canUseShopDiscounts(currentUser)) {
    if (tmpResult.canUseCollectibles(currentUser)) {
      return obj.NITRO;
    } else {
      let perks;
      if (currentUser != null) {
        perks = currentUser.perks;
      }
      const perkSource = parseServerPerkConfigKind.getPerkSource(perks, tmp4(1940).Perk.SHOP_DISCOUNTS);
      let hasItem;
      if (perkSource != null) {
        hasItem = perkSource.includes(tmp4(1940).PerkSource.SOURCE_NITRO);
      }
      if (hasItem) {
        let NITRO = obj.NITRO;
      } else {
        NITRO = null;
        if (tmp4Result.getIsCrepeEnabled("getShopDiscountSource")) {
          let hasItem1;
          if (perkSource != null) {
            hasItem1 = perkSource.includes(tmp4(1940).PerkSource.SOURCE_THIRDPARTY_CROISSANT);
          }
          NITRO = null;
          if (hasItem1) {
            NITRO = obj.THIRDPARTY;
          }
        }
        tmp4Result = tmp4(7018);
      }
      return NITRO;
    }
    tmpResult = tmp(3966);
  } else {
    return null;
  }
  tmp = importDefault;
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
export const getPriceForCollectiblesProduct = function getPriceForCollectiblesProduct(arg0, c5, arg2) {
  if (!arg2) {
    const tmp4 = arg0.prices[c5 ? tmp.PREMIUM_TIER_2 : tmp.DEFAULT];
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
      str = formatSingleCurrencyPrice.formatPrice(amount, currency);
      const obj = formatSingleCurrencyPrice;
    }
    return str;
  }
};
export const getDefaultPriceSetAssignmentPurchaseType = function getDefaultPriceSetAssignmentPurchaseType(canUseShopDiscountsResult) {
  if (!obj.isAndroid()) {
    const tmpResult = set;
  }
  return canUseShopDiscountsResult ? closure_13.PREMIUM_TIER_2 : closure_13.DEFAULT;
};
export const getBundleItemsPriceSum = function getBundleItemsPriceSum(bundledProducts) {
  const _require = arg1;
  bundledProducts = bundledProducts.bundledProducts;
  if (null == bundledProducts) {
    return 0;
  } else {
    if (obj.isAndroid()) {
      if (arg1 !== CurrencyCodes.DISCORD_ORB) {
        let DEFAULT = constants3.MOBILE;
      }
      return bundledProducts.reduce((arg0, arg1) => {
        let prices;
        if (arg1.prices[DEFAULT] != null) {
          const countryPrices = tmp2.countryPrices;
          if (countryPrices != null) {
            prices = countryPrices.prices;
          }
        }
        let tmp4 = null;
        if (null != prices) {
          if (null == closure_0) {
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
        return arg0 + num;
      }, 0);
    } else {
      const tmpResult = tmp(500);
    }
    DEFAULT = constants3.DEFAULT;
    obj = _set;
    tmp = _require;
  }
};
export const extractPriceByPurchaseTypes = function extractPriceByPurchaseTypes(arg0, arg1, arg2) {
  let closure_0 = arg2;
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
    let _require = DISCORD_ORB;
    const bundledProducts = product.bundledProducts;
    if (null == bundledProducts) {
      if (0 <= 0) {
        return obj;
      } else {
        if (!obj5.isAndroid()) {
          const tmp20Result = _set;
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
          obj = { original: null, discountPercentage: null };
          obj[0] = 0;
          const _Math = Math;
          obj[1] = Math.round((0 - tmp13.amount) / 0 * 100);
        }
        return obj;
      }
    } else {
      obj = _set;
      if (obj.isAndroid()) {
        if (DISCORD_ORB !== CurrencyCodes.DISCORD_ORB) {
          let DEFAULT = constants3.MOBILE;
        }
        const reduced = bundledProducts.reduce((arg0, arg1) => {
          let prices;
          if (arg1.prices[DEFAULT] != null) {
            const countryPrices = tmp2.countryPrices;
            if (countryPrices != null) {
              prices = countryPrices.prices;
            }
          }
          let tmp4 = null;
          if (null != prices) {
            if (null == closure_0) {
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
          return arg0 + num;
        }, 0);
      } else {
        const tmpResult = tmp(500);
      }
      DEFAULT = constants3.DEFAULT;
      tmp = _require;
    }
  }
};
export const getCollectiblesProductPriceComparisons = function getCollectiblesProductPriceComparisons(type, hasShopDiscount) {
  hasShopDiscount = hasShopDiscount.hasShopDiscount;
  let _require;
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
    let obj = { defaultPrice: null, showDefaultPriceOnly: true };
    obj[0] = tmp4;
    return obj;
  } else {
    _require = undefined;
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
    if (type === _CollectiblesItemType.CollectiblesItemType.BUNDLE) {
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
    obj = { defaultPrice: null, originalPrice: null, premiumPrice: null, finalPrice: null, showDiscountPrice: null, finalPriceIsDifferent: null, showDefaultPriceOnly: false };
    obj[0] = tmp4;
    obj[1] = tmp12;
    obj[2] = tmp7;
    obj[3] = tmp16;
    obj[4] = hasShopDiscount;
    obj[5] = tmp16.amount !== tmp12.amount;
    return obj;
  }
  tmp = constants3;
};
export const isFreeCollectiblesProduct = function isFreeCollectiblesProduct(product) {
  let c0;
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
    const callback = type;
    if (null != type) {
      if (type.type === callback(table[14]).CollectiblesItemType.VARIANTS_GROUP) {
        if (null != type.variants) {
          const variants = type.variants;
          let combined = tmp(tmp2[15]).concat(arr, variants.map((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            ({ storeListingId: obj.variantGroupStoreListingId, eligibleOffers: obj.eligibleOffers } = closure_0);
            return obj;
          }));
          const tmpResult = tmp(tmp2[15]);
        }
        return combined;
      }
      tmp = callback;
      tmp2 = table;
    }
    arr.push(type);
    combined = arr;
  }, []);
};
export const getProductsFromCategories = function getProductsFromCategories(closure_14, arg1) {
  const items = [...closure_14.values()];
  const flatMapResult = apply.flatMap(items, "products");
  const obj = apply;
  let reduced = flatMapResult;
  if (arg1) {
    reduced = flatMapResult.reduce((arr, type) => {
      const callback = type;
      if (null != type) {
        if (type.type === callback(table[14]).CollectiblesItemType.VARIANTS_GROUP) {
          if (null != type.variants) {
            const variants = type.variants;
            let combined = tmp(tmp2[15]).concat(arr, variants.map((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              ({ storeListingId: obj.variantGroupStoreListingId, eligibleOffers: obj.eligibleOffers } = closure_0);
              return obj;
            }));
            const tmpResult = tmp(tmp2[15]);
          }
          return combined;
        }
        tmp = callback;
        tmp2 = table;
      }
      arr.push(type);
      combined = arr;
    }, []);
  }
  return apply.uniqBy(reduced, "storeListingId");
};
export { getItemRecordsFromPurchases };
export { getItemRecordsFromCategories };
export const getCollectibleTypeLabel = function getCollectibleTypeLabel(type) {
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
    const intl4 = tmp(1236).intl;
    return intl4.string(tmp(1236).t["7v0T9P"]);
  } else if (tmp(1949).CollectiblesItemType.PROFILE_EFFECT === type) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.wR5wOo);
  } else if (tmp(1949).CollectiblesItemType.NAMEPLATE === type) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t.x5CoXR);
  } else if (tmp(1949).CollectiblesItemType.PROFILE_FRAME === type) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.GWrZOd);
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
export const getAvatarDecorations = function getAvatarDecorations(stateFromStores, first) {
  const items = [...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION), ...getItemRecordsFromCategories(first, CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION)];
  return apply.uniqBy(items, "skuId");
};
export const getNameplatesFromPurchases = function getNameplatesFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.NAMEPLATE);
};
export const getNameplatesFromCategories = function getNameplatesFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.NAMEPLATE);
};
export const getNameplates = function getNameplates(stateFromStores, first) {
  const items = [...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.NAMEPLATE), ...getItemRecordsFromCategories(first, CollectiblesItemType.CollectiblesItemType.NAMEPLATE)];
  return apply.uniqBy(items, "skuId");
};
export const getProfileEffectsFromPurchases = function getProfileEffectsFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
};
export const getProfileEffectsFromCategories = function getProfileEffectsFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
};
export const getProfileEffects = function getProfileEffects(stateFromStores, first) {
  const items = [...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT), ...getItemRecordsFromCategories(first, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT)];
  return apply.uniqBy(items, "skuId");
};
export const groupProfileEffects = function groupProfileEffects(arr, arr) {
  const tmp = getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
  require = tmp;
  arr = getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT);
  return {
    purchased: tmp,
    shopPreviews: getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT).filter((skuId) => {
      skuId = skuId.skuId;
      return !skuId.some((skuId) => skuId.skuId === skuId);
    })
  };
};
export const getProfileFramesFromPurchases = function getProfileFramesFromPurchases(arr) {
  return getItemRecordsFromPurchases(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME);
};
export const getProfileFramesFromCategories = function getProfileFramesFromCategories(arr) {
  return getItemRecordsFromCategories(arr, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME);
};
export const getProfileFrames = function getProfileFrames(stateFromStores, first) {
  const items = [...getItemRecordsFromPurchases(stateFromStores, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME), ...getItemRecordsFromCategories(first, CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME)];
  return apply.uniqBy(items, "skuId");
};
export const isCollectiblesGiftCode = function isCollectiblesGiftCode(giftCode) {
  return giftCode.applicationId === closure_11;
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
    tmp = Math.floor((Date.UTC(fullYear1, month1, date.getDate()) - Date.UTC(fullYear, month, date.getDate())) / 86400000) <= closure_9;
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
      const items = type.items;
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
  let invoicePreview;
  let selectedSkuId;
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
    let obj = { amount: null, currency: null };
    ({ amount: obj[0], currency: obj[1] } = unitPrice);
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
        obj = { amount: null, currency: null };
        obj[0] = tmp5.price.amount;
        obj[1] = tmp5.price.currency;
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
export const getStrikeThroughPriceAmountForCollectiblesProduct = function getStrikeThroughPriceAmountForCollectiblesProduct(type, c5, arg2) {
  type = undefined;
  if (type != null) {
    type = type.type;
  }
  if (type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const bundledProducts = type.bundledProducts;
    if (null == bundledProducts) {
      return 0;
    } else {
      let tmp2Result = tmp2(500);
      if (tmp2Result.isAndroid()) {
        if (undefined !== CurrencyCodes.DISCORD_ORB) {
          let DEFAULT = constants3.MOBILE;
        }
        const reduced = bundledProducts.reduce((arg0, arg1) => {
          let prices;
          if (arg1.prices[DEFAULT] != null) {
            const countryPrices = tmp2.countryPrices;
            if (countryPrices != null) {
              prices = countryPrices.prices;
            }
          }
          let tmp4 = null;
          if (null != prices) {
            if (null == closure_0) {
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
          return arg0 + num;
        }, 0);
      } else {
        tmp2Result = tmp2(500);
      }
      DEFAULT = constants3.DEFAULT;
    }
  } else if (!c5) {
    const tmp5 = type.prices[arg2 ? tmp16.MOBILE_PREMIUM_TIER_2 : tmp16.PREMIUM_TIER_2];
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
  let isPartiallyOwnedBundle;
  let product;
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
  } else if (tmp(1949).CollectiblesItemType.PROFILE_EFFECT === arg0) {
    return "profile effect";
  } else if (tmp(1949).CollectiblesItemType.NAMEPLATE === arg0) {
    return "nameplate";
  } else if (tmp(1949).CollectiblesItemType.PROFILE_FRAME === arg0) {
    return "profile frame";
  } else if (tmp(1949).CollectiblesItemType.BUNDLE === arg0) {
    return "bundle";
  } else if (tmp(1949).CollectiblesItemType.EXTERNAL_SKU === arg0) {
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
  } else if (tmp(1949).CollectiblesItemType.VARIANTS_GROUP === arg0) {
    return "variants group";
  } else {
    return "unknown";
  }
};
export const sortProductsByPrice = function sortProductsByPrice(arr) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  return arr.sort((arg0, arg1) => {
    if (closure_1) {
      let obj = callback(outer1_2[17]);
      obj = { product: null, hasShopDiscount: null };
      obj[0] = arg0;
      obj[1] = callback;
      let productOrbPrice = obj.getProductOrbPrice(obj);
      let tmp2 = callback;
    } else {
      tmp2 = callback;
      const tmp4 = arg0.prices[callback ? outer1_13.MOBILE_PREMIUM_TIER_2 : outer1_13.MOBILE];
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
      obj = { product: null, hasShopDiscount: null };
      obj[0] = arg1;
      obj[1] = tmp2;
      let productOrbPrice1 = callback(outer1_2[17]).getProductOrbPrice(obj);
      const obj3 = callback(outer1_2[17]);
    } else {
      const tmp13 = arg1.prices[tmp2 ? outer1_13.MOBILE_PREMIUM_TIER_2 : outer1_13.MOBILE];
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