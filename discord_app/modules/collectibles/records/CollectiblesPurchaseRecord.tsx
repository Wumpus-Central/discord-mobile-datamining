// === Module 7570: CollectiblesPurchaseRecord ===

// Module 7570 (CollectiblesPurchaseRecord)
import getPricesFromServerDefault from "getPricesFromServer" /* 5513 */;
import CollectiblesBundledProductRecord from "CollectiblesBundledProductRecord" /* 7545 */;

let closure_3 = fn(7546).createCollectiblesItemsFromServerResponse;
const fromServer = fn(7544).CollectiblesVariantProductRecord;
let closure_5 = fn(1076).REWARD_CATEGORY_AND_REWARD_SKU_IDS;
const PREMIUM_TYPE_NONE = fn(1074).PREMIUM_TYPE_NONE;
const prototype = function CollectiblesPurchaseRecord(arg0) {
  ({ skuId: tmp.skuId, name: tmp.name, type: tmp.type, premiumType: tmp.premiumType, items: tmp.items, categorySkuId: tmp.categorySkuId, isCategoryReward: tmp.isCategoryReward, prices: tmp.prices, bundledProducts: tmp.bundledProducts, googleSkuIds: tmp.googleSkuIds, variants: tmp.variants, eligibleOffers: tmp.eligibleOffers, baseVariantName: tmp.baseVariantName, baseVariantSkuId: tmp.baseVariantSkuId, variantLabel: tmp.variantLabel, variantValue: tmp.variantValue, purchasedAt: tmp.purchasedAt, purchaseType: tmp.purchaseType, expiresAt: tmp.expiresAt } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromServer"] = function fromServer(sku_id) {
  sku_id = sku_id.sku_id;
  ({ premium_type, bundled_products, variants, purchased_at, expires_at } = sku_id);
  ({ type, name, category_sku_id, prices, base_variant_name, base_variant_sku_id, variant_label, variant_value, purchase_type } = sku_id);
  const merged = Object.assign(sku_id, Object.assign({ type: 0, sku_id: 0, name: 0, premium_type: 0, category_sku_id: 0, prices: 0, bundled_products: 0, variants: 0, base_variant_name: 0, base_variant_sku_id: 0, variant_label: 0, variant_value: 0, purchased_at: 0, purchase_type: 0, expires_at: 0 }));
  let tmp3 = null;
  if (premium_type !== PREMIUM_TYPE_NONE) {
    tmp3 = premium_type;
  }
  const someResult = closure_5.some((rewardSkuId) => rewardSkuId.rewardSkuId === sku_id);
  const tmp5 = getPricesFromServerDefault(prices);
  if (bundled_products != null) {
    const mapped = bundled_products.map(CollectiblesBundledProductRecord.fromServer);
  }
  if (variants != null) {
    const mapped1 = variants.map(fromServer.fromServer);
  }
  let date = purchased_at;
  ({ google_sku_ids, eligible_offers } = merged);
  if (null != purchased_at) {
    const _Date = Date;
    date = new Date(purchased_at);
  }
  let date1 = null;
  if (null != expires_at) {
    const _Date2 = Date;
    date1 = new Date(expires_at);
  }
  if (typeof prototype === "function") {
    const obj = Object.create(prototype.prototype);
    obj.skuId = sku_id;
    obj.name = name;
    obj.type = type;
    obj.premiumType = tmp3;
    obj.items = tmp6;
    obj.categorySkuId = category_sku_id;
    obj.isCategoryReward = someResult;
    obj.prices = tmp5;
    obj.bundledProducts = mapped;
    obj.googleSkuIds = google_sku_ids;
    obj.variants = mapped1;
    obj.eligibleOffers = eligible_offers;
    obj.baseVariantName = base_variant_name;
    obj.baseVariantSkuId = base_variant_sku_id;
    obj.variantLabel = variant_label;
    obj.variantValue = variant_value;
    obj.purchasedAt = date;
    obj.purchaseType = purchase_type;
    obj.expiresAt = date1;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp6 = closure_3(merged.items);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesPurchaseRecord.tsx");

export default prototype;