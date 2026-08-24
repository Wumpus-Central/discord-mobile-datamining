// discord_app/modules/wishlists/WishlistUtils.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import useSKUPrice from "../storefront/StorefrontUtils.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../skus/SKURecord.tsx";
import { isCollectiblesWishlistItemRecord as closure_5 } from "records/CollectiblesWishlistItemRecord.tsx";
import { isPremiumWishlistItemRecord as closure_6, isSKUWishlistItemRecord } from "records/PremiumWishlistItemRecord.tsx";
import { SKUProductLines } from "../../Constants.tsx";
import { PremiumSubscriptionSKUs } from "../premium/PremiumConstants.tsx";

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
  return new closure_4(obj);
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
export const buildReorderedNitroFirstWishlistItems = function buildReorderedNitroFirstWishlistItems(arr) {
  const findIndexResult = arr.findIndex((skuId) => callback(table[9]).isPremiumSku(skuId.skuId));
  if (findIndexResult <= 0) {
    return arr;
  } else {
    const items = [];
    HermesBuiltin.arraySpread(arr, 0);
    const items1 = [callback(items.splice(findIndexResult, 1), 1)[0]];
    HermesBuiltin.arraySpread(items, 1);
    return items1;
  }
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