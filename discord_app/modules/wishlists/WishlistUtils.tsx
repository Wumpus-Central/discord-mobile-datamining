// === Module 12735: createNitroSuggestedSku ===

// Module 12735 (createNitroSuggestedSku)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import useSKUPrice from "useSKUPrice" /* 6087 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "createFromServer" /* 4521 */;
import { isCollectiblesWishlistItemRecord as closure_4 } from "createCollectiblesItemFromServerResponse" /* 10686 */;
import { isPremiumWishlistItemRecord as closure_5, isSKUWishlistItemRecord } from "fromServer" /* 10687 */;
import { SKUProductLines } from "ME" /* 673 */;
import { PremiumSubscriptionSKUs } from "GuildFeatures" /* 1923 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/wishlists/WishlistUtils.tsx");

export const createNitroSuggestedSku = function createNitroSuggestedSku() {
  const obj = { id: PremiumSubscriptionSKUs.TIER_2, productLine: SKUProductLines.PREMIUM, name: null, features: null, genres: null, manifests: null, availableRegions: null, locales: null, bundledSkuIds: null, selectedOptions: null, eligibleOffers: null, prices: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.lG6a5x);
  obj[3] = new Set();
  const set = new Set();
  obj[4] = new Set();
  obj[5] = [];
  obj[6] = [];
  obj[7] = [];
  obj[8] = [];
  obj[9] = [];
  obj[10] = [];
  obj[11] = {};
  const set1 = new Set();
  return new closure_3(obj);
};
export const isEligibleWishlistItemOnMobile = function isEligibleWishlistItemOnMobile(sku, isWishlistOwner) {
  isWishlistOwner = isWishlistOwner.isWishlistOwner;
  if (isSKUWishlistItemRecord(sku)) {
    if (sku.sku.productLine === SKUProductLines.SOCIAL_LAYER_GAME_ITEM) {
      if (!isWishlistOwner) {
        isWishlistOwner = useSKUPrice.isSlayerSkuAvailableOnThisPlatform(sku.sku);
        const obj = useSKUPrice;
      }
      let tmp2 = isWishlistOwner;
    }
    return tmp2;
  }
  tmp2 = callback2(sku);
  if (!tmp2) {
    tmp2 = callback3(sku);
  }
};
export const buildReorderedWishlistData = function buildReorderedWishlistData(set) {
  if (arg2 < arg3) {
    let skuId;
    if (arg1[arg3] != null) {
      skuId = tmp6.skuId;
    }
    if (skuId == null) {
      skuId = null;
    }
    let skuId1;
    if (arg1[arg3 + 1] != null) {
      skuId1 = tmp9.skuId;
    }
    if (skuId1 == null) {
      skuId1 = null;
    }
    let skuId3 = skuId1;
    let skuId2 = skuId;
  } else {
    skuId2 = undefined;
    if (arg1[arg3 - 1] != null) {
      skuId2 = tmp.skuId;
    }
    if (skuId2 == null) {
      skuId2 = null;
    }
    skuId3 = undefined;
    if (arg1[arg3] != null) {
      skuId3 = tmp4.skuId;
    }
    if (skuId3 == null) {
      skuId3 = null;
    }
  }
  const items = [...arg1];
  items.splice(arg3, 0, callback(items.splice(arg2, 1), 1)[0]);
  return { newWishlistData: set.set("items", items), previousSkuId: skuId2, nextSkuId: skuId3 };
};
export const buildReorderedOwnedItemsLastWishlistItems = function buildReorderedOwnedItemsLastWishlistItems(items) {
  let tmp = items;
  items = [];
  const items1 = [];
  for (const item10009 of arg0) {
    let tmp2 = item10009;
    let arr3 = items;
    if (arg1(item10009)) {
      arr3 = items1;
    }
    let tmp3 = item10009;
    let arr = arr3.push(tmp2);
    continue;
  }
  if (0 !== items1.length) {
    const items2 = [];
    HermesBuiltin.arraySpread(items1, HermesBuiltin.arraySpread(items, 0));
    tmp = items2;
  }
  return tmp;
};