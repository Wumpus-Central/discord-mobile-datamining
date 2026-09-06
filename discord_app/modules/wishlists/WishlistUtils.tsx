// === Module 13068: WishlistUtils ===

// Module 13068 (WishlistUtils)
import util from "util" /* 1114 */;
import StorefrontUtils from "StorefrontUtils" /* 7231 */;
import _slicedToArray from "module_32" /* 32 */;
import SKURecord from "SKURecord" /* 5511 */;

require = fn;
let closure_4 = fn(8780).isCollectiblesWishlistItemRecord;
let closure_5 = fn(8781).isPremiumWishlistItemRecord;
const isSKUWishlistItemRecord = fn(8782).isSKUWishlistItemRecord;
const SKUProductLines = fn(1074).SKUProductLines;
const PremiumSubscriptionSKUs = fn(1373).PremiumSubscriptionSKUs;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/WishlistUtils.tsx");

export const createNitroSuggestedSku = function createNitroSuggestedSku() {
  const obj = { id: PremiumSubscriptionSKUs.TIER_2, productLine: SKUProductLines.PREMIUM, name: null, features: null, genres: null, manifests: null, availableRegions: null, locales: null, bundledSkuIds: null, selectedOptions: null, eligibleOffers: null, prices: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.lG6a5x);
  obj.features = new Set();
  const set = new Set();
  obj.genres = new Set();
  obj.manifests = [];
  obj.availableRegions = [];
  obj.locales = [];
  obj.bundledSkuIds = [];
  obj.selectedOptions = [];
  obj.eligibleOffers = [];
  obj.prices = {};
  const set1 = new Set();
  return new SKURecord(obj);
};
export const isEligibleWishlistItemOnMobile = function isEligibleWishlistItemOnMobile(sku, isWishlistOwner) {
  isWishlistOwner = isWishlistOwner.isWishlistOwner;
  if (isSKUWishlistItemRecord(sku)) {
    if (sku.sku.productLine === SKUProductLines.SOCIAL_LAYER_GAME_ITEM) {
      if (!isWishlistOwner) {
        isWishlistOwner = StorefrontUtils.isSlayerSkuAvailableOnThisPlatform(sku.sku);
      }
      let tmp2 = isWishlistOwner;
    }
    return tmp2;
  }
  tmp2 = closure_4(sku);
  if (!tmp2) {
    tmp2 = closure_5(sku);
  }
};
export const buildReorderedWishlistData = function buildReorderedWishlistData(set, arg1, arg2, arg3) {
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
  items.splice(arg3, 0, _slicedToArray(items.splice(arg2, 1), 1)[0]);
  return { newWishlistData: set.set("items", items), previousSkuId: skuId2, nextSkuId: skuId3 };
};
export const buildReorderedOwnedItemsLastWishlistItems = function buildReorderedOwnedItemsLastWishlistItems(items, fn) {
  let tmp = items;
  items = [];
  const items1 = [];
  for (const item10009 of arg0) {
    let tmp2 = item10009;
    let arr3 = items;
    if (arg1(item10009)) {
      arr3 = items1;
    }
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