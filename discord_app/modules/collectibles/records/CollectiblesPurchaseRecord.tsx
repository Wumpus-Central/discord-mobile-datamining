// discord_app/modules/collectibles/records/CollectiblesPurchaseRecord.tsx
import fromServer from "fromServer";
import { createCollectiblesItemsFromServerResponse as closure_3 } from "createCollectiblesItemsFromServerResponse";
import { CollectiblesVariantProductRecord as closure_4 } from "fromServer";
import { REWARD_CATEGORY_AND_REWARD_SKU_IDS as closure_5 } from "items";
import { PREMIUM_TYPE_NONE } from "ME";

let prototype;
prototype = function CollectiblesPurchaseRecord(arg0) {
  ({ skuId: tmp.skuId, name: tmp.name, type: tmp.type, premiumType: tmp.premiumType, items: tmp.items, categorySkuId: tmp.categorySkuId, isCategoryReward: tmp.isCategoryReward, prices: tmp.prices, bundledProducts: tmp.bundledProducts, googleSkuIds: tmp.googleSkuIds, variants: tmp.variants, eligibleOffers: tmp.eligibleOffers, baseVariantName: tmp.baseVariantName, baseVariantSkuId: tmp.baseVariantSkuId, variantLabel: tmp.variantLabel, variantValue: tmp.variantValue, purchasedAt: tmp.purchasedAt, purchaseType: tmp.purchaseType, expiresAt: tmp.expiresAt } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromServer"] = function fromServer(sku_id) {
  let base_variant_name;
  let base_variant_sku_id;
  let bundled_products;
  let category_sku_id;
  let eligible_offers;
  let expires_at;
  let google_sku_ids;
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
  const merged = Object.assign(sku_id, Object.create(null));
  let tmp3 = null;
  if (premium_type !== PREMIUM_TYPE_NONE) {
    tmp3 = premium_type;
  }
  const someResult = closure_5.some((rewardSkuId) => rewardSkuId.rewardSkuId === sku_id);
  let mapped;
  const tmp5 = sku_id(4326)(prices);
  if (bundled_products != null) {
    mapped = bundled_products.map(fromServer.fromServer);
  }
  let mapped1;
  if (variants != null) {
    mapped1 = variants.map(fromServer2.fromServer);
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
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.skuId = sku_id;
  obj.name = name;
  obj.type = type;
  obj.premiumType = tmp3;
  obj.items = callback(merged.items);
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
};
const result = require("fromServer").fileFinishedImporting("modules/collectibles/records/CollectiblesPurchaseRecord.tsx");

export default prototype;