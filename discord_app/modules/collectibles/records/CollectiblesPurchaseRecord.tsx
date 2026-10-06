// === Module 7093: CollectiblesPurchaseRecord ===

// Module 7093 (CollectiblesPurchaseRecord)
import Constants from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import getPricesFromServerDefault from "getPricesFromServer" /* 5705 */;
import CollectiblesProductRecord from "CollectiblesProductRecord" /* 7068 */;
import CollectiblesItemRecord from "CollectiblesItemRecord" /* 7070 */;
import CollectiblesBundledProductRecord from "CollectiblesBundledProductRecord" /* 7069 */;
import size from "module_2" /* 2 */;

let sku_id;

const _false = CollectiblesItemRecord.createCollectiblesItemsFromServerResponse;
const React3 = CollectiblesProductRecord.CollectiblesVariantProductRecord;
const hasOwnProperty = CollectiblesShopConstants.REWARD_CATEGORY_AND_REWARD_SKU_IDS;
const PREMIUM_TYPE_NONE = Constants.PREMIUM_TYPE_NONE;
class CollectiblesPurchaseRecord {
  constructor(arg0) {
    ({ skuId: tmp.skuId, name: tmp.name, type: tmp.type, premiumType: tmp.premiumType, items: tmp.items, categorySkuId: tmp.categorySkuId, isCategoryReward: tmp.isCategoryReward, prices: tmp.prices, bundledProducts: tmp.bundledProducts, googleSkuIds: tmp.googleSkuIds, variants: tmp.variants, eligibleOffers: tmp.eligibleOffers, baseVariantName: tmp.baseVariantName, baseVariantSkuId: tmp.baseVariantSkuId, variantLabel: tmp.variantLabel, variantValue: tmp.variantValue, purchasedAt: tmp.purchasedAt, purchaseType: tmp.purchaseType, expiresAt: tmp.expiresAt } = arg0);
    const obj = Object.create(new.target.prototype);
    return obj;
  }
  static fromServer(sku_id) {
    let base_variant_name;
    let base_variant_sku_id;
    let bundled_products;
    let category_sku_id;
    let eligible_offers;
    let expires_at;
    let google_sku_ids;
    let mapped;
    let mapped1;
    let name;
    let premium_type;
    let prices;
    let purchase_type;
    let purchased_at;
    let type;
    let variant_label;
    let variant_value;
    let variants;
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
    const tmp6 = closure_3(merged.items);
    if (bundled_products != null) {
      mapped = bundled_products.map(CollectiblesBundledProductRecord.fromServer);
    }
    if (variants != null) {
      mapped1 = variants.map(fromServer.fromServer);
    }
    let date = purchased_at;
    ({ google_sku_ids, eligible_offers } = merged);
    if (null != purchased_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(purchased_at);
    }
    let date1 = null;
    if (null != expires_at) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date1 = new Date(expires_at);
    }
    if (typeof CollectiblesPurchaseRecord === "function") {
      const obj = Object.create(CollectiblesPurchaseRecord.prototype);
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
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesPurchaseRecord.tsx");

export default CollectiblesPurchaseRecord;