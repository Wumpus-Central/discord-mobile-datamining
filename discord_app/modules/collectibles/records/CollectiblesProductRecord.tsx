// === Module 7544: CollectiblesProductRecord ===

// Module 7544 (CollectiblesProductRecord)
import getPricesFromServerDefault from "getPricesFromServer" /* 5513 */;
import _slicedToArray from "module_32" /* 32 */;
import CollectiblesBundledProductRecord from "CollectiblesBundledProductRecord" /* 7545 */;
import CollectiblesStoreListingRecord from "CollectiblesStoreListingRecord" /* 7551 */;

const require = fn;
const CollectiblesItemRecord = fn(7546);
({ createCollectiblesItemsFromServerResponse: hasOwnProperty, transformSKUToCollectiblesItem: metroRequire } = CollectiblesItemRecord);
let closure_7 = fn(1076).REWARD_CATEGORY_AND_REWARD_SKU_IDS;
const Constants = fn(1074);
({ PREMIUM_TYPE_NONE: closure_8, PriceSetAssignmentPurchaseTypes: closure_9 } = Constants);
let CollectiblesProductRecord;
class CollectiblesProductRecord extends tmp3 {
  constructor(arg0) {
    tmp = new CollectiblesProductRecord(global, new.target);
    ({ summary: tmp.summary, type: tmp.type, premiumType: tmp.premiumType, items: tmp.items, categorySkuId: tmp.categorySkuId, isCategoryReward: tmp.isCategoryReward, prices: tmp.prices, bundledProducts: tmp.bundledProducts, previewAssets: tmp.previewAssets, googleSkuIds: tmp.googleSkuIds, variants: tmp.variants, eligibleOffers: tmp.eligibleOffers, badgeOverride: tmp.badgeOverride, hideBadge: tmp.hideBadge, isFirstParty: tmp.isFirstParty, baseVariantName: tmp.baseVariantName, variantLabel: tmp.variantLabel } = global);
    return tmp;
  }
}
CollectiblesProductRecord["fromServer"] = function fromServer(arg0) {
  ({ premium_type, bundled_products, preview_assets, variants } = arg0);
  ({ type, category_sku_id, prices, badge_override, hide_badge, is_first_party } = arg0);
  const merged = Object.assign({ type: 0, premium_type: 0, category_sku_id: 0, prices: 0, bundled_products: 0, preview_assets: 0, variants: 0, badge_override: 0, hide_badge: 0, is_first_party: 0 });
  const merged1 = Object.assign(arg0, merged);
  let obj = {};
  let tmp4 = CollectiblesProductRecord;
  const fromServerResult = super.fromServer(merged1);
  const merged2 = Object.assign(fromServerResult);
  obj.type = type;
  let tmp8 = null;
  if (premium_type !== React6) {
    tmp8 = premium_type;
  }
  obj.premiumType = tmp8;
  obj.categorySkuId = category_sku_id;
  obj.isCategoryReward = closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === merged1.sku_id);
  obj.prices = getPricesFromServerDefault(prices);
  obj.items = hasOwnProperty(merged1.items);
  let mapped;
  if (bundled_products != null) {
    mapped = bundled_products.map(CollectiblesBundledProductRecord.fromServer);
  }
  obj.bundledProducts = mapped;
  let tmp11;
  if (null != preview_assets) {
    obj = { fgStatic: null, fgAnimated: null, bgStatic: null, bgAnimated: null };
    ({ fg_static: obj2.fgStatic, fg_animated: obj2.fgAnimated, bg_static: obj2.bgStatic, bg_animated: obj2.bgAnimated } = preview_assets);
    tmp11 = obj;
  }
  obj.previewAssets = tmp11;
  let mapped1;
  if (variants != null) {
    mapped1 = variants.map(prototype.fromServer);
  }
  obj.variants = mapped1;
  ({ google_sku_ids: obj.googleSkuIds, eligible_offers: obj.eligibleOffers } = merged1);
  obj.badgeOverride = badge_override;
  obj.hideBadge = hide_badge;
  obj.isFirstParty = is_first_party;
  if (typeof CollectiblesProductRecord === "function") {
    tmp4 = new tmp4(obj, fromServerResult, merged, this, React6);
    ({ summary: tmp17.summary, type: tmp17.type, premiumType: tmp17.premiumType, items: tmp17.items, categorySkuId: tmp17.categorySkuId, isCategoryReward: tmp17.isCategoryReward, prices: tmp17.prices, bundledProducts: tmp17.bundledProducts, previewAssets: tmp17.previewAssets, googleSkuIds: tmp17.googleSkuIds, variants: tmp17.variants, eligibleOffers: tmp17.eligibleOffers, badgeOverride: tmp17.badgeOverride, hideBadge: tmp17.hideBadge, isFirstParty: tmp17.isFirstParty, baseVariantName: tmp17.baseVariantName, variantLabel: tmp17.variantLabel } = obj);
    return tmp4;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
CollectiblesProductRecord["fromStorefrontProductRecord"] = function fromStorefrontProductRecord(skus, arg1) {
  _require = skus;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const flattenVariantSkuId = obj.flattenVariantSkuId;
  let first;
  let found;
  if (null != flattenVariantSkuId) {
    skus = skus.skus;
    found = skus.find((id) => id.id === flattenVariantSkuId);
  }
  first = found;
  if (found == null) {
    first = skus.skus[0];
  }
  if (null != first) {
    let tenantMetadata = first.tenantMetadata;
    let collectibles;
    if (tenantMetadata != null) {
      collectibles = tenantMetadata.collectibles;
    }
    if (null != collectibles) {
      let tmp5 = null != found;
      if (tmp5) {
        tmp5 = skus.skus.length > 1;
      }
      if (skus.skus.length > 1) {
        if (!tmp5) {
          let type = require("CollectiblesItemType").CollectiblesItemType.VARIANTS_GROUP;
        }
        obj = closure_6(first);
        if (obj == null) {
          obj = {};
        }
        let items = obj.items;
        const first1 = _slicedToArray(first.selectedOptions, 1)[0];
        obj = { storeListingId: null, skuId: null, name: null, summary: null, styles: null, type: null, baseVariantName: null, variantLabel: null, premiumType: null, items: null, categorySkuId: null, isCategoryReward: null, prices: null, badgeOverride: null, hideBadge: null, previewAssets: null, variants: null, googleSkuIds: null, eligibleOffers: null, isFirstParty: null, bundledProducts: null };
        ({ id: obj3.storeListingId, id: obj3.skuId } = first);
        ({ name: obj3.name, summary: obj3.summary, primaryCollectionStyles: obj3.styles } = skus);
        obj.type = type;
        let name;
        if (tmp5) {
          name = skus.name;
        }
        obj.baseVariantName = name;
        let tmp13;
        if (tmp5) {
          let str;
          if (first1 != null) {
            str = first1.optionValue;
          }
          if (str == null) {
            str = "";
          }
          tmp13 = str;
        }
        obj.variantLabel = tmp13;
        items = closure_8;
        let premiumType = null;
        if (premiumType !== closure_8) {
          premiumType = collectibles.premiumType;
        }
        obj.premiumType = premiumType;
        if (items == null) {
          items = [obj.item];
          items = items.filter((item) => null != item);
        }
        obj.items = items;
        let str2 = skus.primaryCollectionId;
        if (str2 == null) {
          str2 = collectibles.categorySkuId;
        }
        if (str2 == null) {
          str2 = "";
        }
        obj.categorySkuId = str2;
        obj.isCategoryReward = closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === first.id);
        obj.prices = first.prices;
        ({ badgeOverride: obj3.badgeOverride, hideBadge: obj3.hideBadge } = skus);
        const previewAssetPaths = first.previewAssetPaths;
        obj.previewAssets = previewAssetPaths;
        let str3 = require("CollectiblesItemType").CollectiblesItemType.VARIANTS_GROUP;
        let found1;
        if (type === str3) {
          const skus1 = skus.skus;
          str3 = skus1.map((tenantMetadata) => {
            skus = tenantMetadata;
            tenantMetadata = tenantMetadata.tenantMetadata;
            let collectibles;
            if (tenantMetadata != null) {
              collectibles = tenantMetadata.collectibles;
            }
            if (null == collectibles) {
              return null;
            } else {
              let obj = timestampProducer(tenantMetadata);
              if (obj == null) {
                obj = {};
              }
              ({ items, item } = obj);
              first = _slicedToArray(tenantMetadata.selectedOptions, 1)[0];
              obj = { baseVariantName: skus.name, baseVariantSkuId: first.id, variantLabel: null, variantValue: null, storeListingId: null, skuId: null, name: null, summary: null, styles: "Button", type: "Array", premiumType: "call", items: 555687505, categorySkuId: 33518086, isCategoryReward: 47513600, prices: -713949184, previewAssets: 1459617794, googleSkuIds: 1912602627, eligibleOffers: 855, variants: 977, bundledProducts: 250226, isFirstParty: 283648 };
              let str;
              if (first != null) {
                str = first.optionValue;
              }
              if (str == null) {
                str = "";
              }
              obj.variantLabel = str;
              let str2 = collectibles.optionSelectorDisplayValue;
              if (str2 == null) {
                str2 = "";
              }
              obj.variantValue = str2;
              ({ id: obj2.storeListingId, id: obj2.skuId, name: obj2.name, summary: obj2.summary } = tenantMetadata);
              ({ type: obj2.type, premiumType } = collectibles);
              items = React6;
              premiumType = null;
              if (premiumType !== React6) {
                premiumType = collectibles.premiumType;
              }
              obj.premiumType = premiumType;
              if (items == null) {
                items = [item];
                item = (item) => null != item;
                items = items.filter(item);
              }
              obj.items = items;
              let str3 = skus.primaryCollectionId;
              if (str3 == null) {
                str3 = collectibles.categorySkuId;
              }
              if (str3 == null) {
                str3 = "";
              }
              obj.categorySkuId = str3;
              obj.isCategoryReward = closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === tenantMetadata.id);
              ({ prices: obj2.prices, previewAssetPaths } = tenantMetadata);
              obj.previewAssets = previewAssetPaths;
              let googleSkuIds = tenantMetadata.googleSkuIds;
              if (googleSkuIds == null) {
                obj = {};
                item = "";
                obj[React7.MOBILE] = "";
                obj[React7.MOBILE_PREMIUM_TIER_2] = "";
                googleSkuIds = obj;
              }
              obj.googleSkuIds = googleSkuIds;
              obj.eligibleOffers = tenantMetadata.eligibleOffers;
              obj.isFirstParty = collectibles.isFirstParty;
              if (typeof prototype === "function") {
                const tmp16 = new prototype(obj, tmp, premiumType, items, premiumType, item);
                ({ baseVariantName: tmp16.baseVariantName, baseVariantSkuId: tmp16.baseVariantSkuId, variantLabel: tmp16.variantLabel, variantValue: tmp16.variantValue } = obj);
                return tmp16;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          });
          found1 = str3.filter((item) => null != item);
        }
        obj.variants = found1;
        let googleSkuIds = first.googleSkuIds;
        if (googleSkuIds == null) {
          const obj1 = {};
          str3 = "";
          obj1[closure_9.MOBILE] = "";
          obj1[closure_9.MOBILE_PREMIUM_TIER_2] = "";
          googleSkuIds = obj1;
        }
        obj.googleSkuIds = googleSkuIds;
        obj.eligibleOffers = first.eligibleOffers;
        obj.isFirstParty = collectibles.isFirstParty;
        const bundledSkus = first.bundledSkus;
        let found2;
        if (bundledSkus != null) {
          const mapped = bundledSkus.map((tenantMetadata) => {
            tenantMetadata = tenantMetadata.tenantMetadata;
            let collectibles;
            if (tenantMetadata != null) {
              collectibles = tenantMetadata.collectibles;
            }
            let tmp3 = null;
            if (null != collectibles) {
              const obj = { type: collectibles.type, premiumType: null, name: null, skuId: null, summary: null, prices: null };
              let premiumType = null;
              tmp3 = CollectiblesBundledProductRecord;
              if (collectibles.premiumType !== closure_1_8) {
                premiumType = collectibles.premiumType;
              }
              obj.premiumType = premiumType;
              ({ name: obj.name, id: obj.skuId, summary: obj.summary, prices: obj.prices } = tenantMetadata);
              tmp3 = new tmp3(obj);
            }
            return tmp3;
          });
          found2 = mapped.filter((item) => null != item);
        }
        obj.bundledProducts = found2;
        if (typeof CollectiblesProductRecord === "function") {
          const tmp26 = new CollectiblesProductRecord(obj, tmp, premiumType, items, closure_7, type, str3);
          ({ summary: tmp26.summary, type: tmp26.type, premiumType: tmp26.premiumType, items: tmp26.items, categorySkuId: tmp26.categorySkuId, isCategoryReward: tmp26.isCategoryReward, prices: tmp26.prices, bundledProducts: tmp26.bundledProducts, previewAssets: tmp26.previewAssets, googleSkuIds: tmp26.googleSkuIds, variants: tmp26.variants, eligibleOffers: tmp26.eligibleOffers, badgeOverride: tmp26.badgeOverride, hideBadge: tmp26.hideBadge, isFirstParty: tmp26.isFirstParty, baseVariantName: tmp26.baseVariantName, variantLabel: tmp26.variantLabel } = obj);
          return tmp26;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      type = collectibles.type;
    }
  }
};
const prototype = function CollectiblesVariantProductRecord(arg0) {
  const tmp = new prototype(arg0, new.target);
  ({ baseVariantName: tmp.baseVariantName, baseVariantSkuId: tmp.baseVariantSkuId, variantLabel: tmp.variantLabel, variantValue: tmp.variantValue } = arg0);
  return tmp;
}.prototype;
class prototype extends CollectiblesProductRecord {
}
prototype["fromServer"] = function fromServer(arg0) {
  ({ base_variant_name, base_variant_sku_id, variant_label, variant_value } = arg0);
  const merged = Object.assign({ base_variant_name: 0, base_variant_sku_id: 0, variant_label: 0, variant_value: 0 });
  const obj = {};
  let tmp2 = prototype;
  const fromServerResult = super.fromServer(Object.assign(arg0, merged));
  const merged1 = Object.assign(fromServerResult);
  obj.baseVariantName = base_variant_name;
  obj.baseVariantSkuId = base_variant_sku_id;
  obj.variantLabel = variant_label;
  obj.variantValue = variant_value;
  if (typeof prototype === "function") {
    tmp2 = new tmp2(obj, fromServerResult, merged);
    ({ baseVariantName: tmp8.baseVariantName, baseVariantSkuId: tmp8.baseVariantSkuId, variantLabel: tmp8.variantLabel, variantValue: tmp8.variantValue } = obj);
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesProductRecord.tsx");

export default CollectiblesProductRecord;
export const CollectiblesVariantProductRecord = prototype;