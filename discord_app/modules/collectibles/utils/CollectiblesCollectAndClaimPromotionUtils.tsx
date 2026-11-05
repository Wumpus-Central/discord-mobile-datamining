// discord_app/modules/collectibles/utils/CollectiblesCollectAndClaimPromotionUtils.tsx
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import StorefrontCollectionStore from "../../storefront/StorefrontCollectionStore.tsx";
import CollectiblesCategoryStore from "../CollectiblesCategoryStore.tsx";

require = fn;
function getCollectionQualifyingSkuCount(bundledProducts, collectionId) {
  _require = collectionId;
  if (obj.isBundleProduct(bundledProducts)) {
    const collection = StorefrontCollectionStore.getCollection(collectionId);
    let flatMapResult;
    if (collection != null) {
      const products = collection.products;
      flatMapResult = products.flatMap((skuIds) => skuIds.skuIds);
    }
    if (flatMapResult == null) {
      flatMapResult = [];
    }
    const set = new Set(flatMapResult);
    if (tmpResult.isBundleProduct(bundledProducts)) {
      bundledProducts = bundledProducts.bundledProducts;
      if (bundledProducts == null) {
        bundledProducts = bundledProducts.items;
      }
      const _Set = Set;
      const set1 = new Set(bundledProducts.map((skuId) => skuId.skuId));
      items = [];
      HermesBuiltin.arraySpread(set1, 0);
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1.filter((item) => {
      const product = CollectiblesCategoryStore.getProduct(item);
      let categorySkuId;
      if (product != null) {
        categorySkuId = product.categorySkuId;
      }
      let hasItem = categorySkuId === closure_0;
      if (!hasItem) {
        hasItem = set.has(item);
      }
      return hasItem;
    }).length;
  } else {
    let num = 0;
    if (bundledProducts.categorySkuId === collectionId) {
      num = 1;
    }
    return num;
  }
  obj = require("CollectiblesUtils");
}
let closure_3 = fn(9636).getCollectiblesCollectAndClaim;
const CollectibleShopTab = fn(1074).CollectibleShopTab;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesCollectAndClaimPromotionUtils.tsx");

export function getCollectAndClaimPromotionForCollectiblesProduct(selectedProduct, rewardStatus) {
  const tmp = closure_3(rewardStatus);
  let tmp2 = null;
  if (null != rewardStatus.rewardStatus) {
    tmp2 = null;
    if (null != tmp) {
      tmp2 = null;
      if (0 !== getCollectionQualifyingSkuCount(selectedProduct, tmp.collectionId)) {
        tmp2 = rewardStatus;
      }
    }
  }
  return tmp2;
}
export function getBundleChildSkuIds(bundledProducts) {
  if (obj.isBundleProduct(bundledProducts)) {
    bundledProducts = bundledProducts.bundledProducts;
    if (bundledProducts == null) {
      bundledProducts = bundledProducts.items;
    }
    const _Set = Set;
    const set = new Set(bundledProducts.map((skuId) => skuId.skuId));
    items = [];
    HermesBuiltin.arraySpread(set, 0);
    return items;
  } else {
    return [];
  }
  obj = CollectiblesUtils;
}
export { getCollectionQualifyingSkuCount };
export function getCollectiblesPromotionSurface(shopHome, arg1) {
  if (CollectibleShopTab.HOME === arg1) {
    return shopHome.shopHome;
  } else {
    return tmp.COLLECTION_INDEX === arg1 ? shopHome.indexPage : undefined;
  }
}
