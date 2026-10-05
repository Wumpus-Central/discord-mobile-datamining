// === Module 7055: CollectiblesProductRecord ===

// Module 7055 (CollectiblesProductRecord)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import getPricesFromServerDefault from "getPricesFromServer" /* 5698 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import CollectiblesBundledProductRecord from "CollectiblesBundledProductRecord" /* 7056 */;
import CollectiblesItemRecord from "CollectiblesItemRecord" /* 7057 */;
import CollectiblesStoreListingRecord from "CollectiblesStoreListingRecord" /* 7062 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, skus;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
({ createCollectiblesItemsFromServerResponse: hasOwnProperty, transformSKUToCollectiblesItem: metroRequire } = CollectiblesItemRecord);
const metroImportDefault = CollectiblesShopConstants.REWARD_CATEGORY_AND_REWARD_SKU_IDS;
({ PREMIUM_TYPE_NONE: metroImportAll, PriceSetAssignmentPurchaseTypes: c9 } = Constants);
class CollectiblesProductRecord extends CollectiblesStoreListingRecord {
  constructor(arg0) {
    const tmp = new CollectiblesProductRecord(arg0, new.target);
    ({ summary: tmp.summary, type: tmp.type, premiumType: tmp.premiumType, items: tmp.items, categorySkuId: tmp.categorySkuId, isCategoryReward: tmp.isCategoryReward, prices: tmp.prices, bundledProducts: tmp.bundledProducts, previewAssets: tmp.previewAssets, googleSkuIds: tmp.googleSkuIds, variants: tmp.variants, eligibleOffers: tmp.eligibleOffers, badgeOverride: tmp.badgeOverride, hideBadge: tmp.hideBadge, isFirstParty: tmp.isFirstParty, baseVariantName: tmp.baseVariantName, variantLabel: tmp.variantLabel } = arg0);
    return tmp;
  }
  static fromServer(arg0) {
    let badge_override;
    let bundled_products;
    let category_sku_id;
    let hide_badge;
    let is_first_party;
    let mapped;
    let mapped1;
    let premium_type;
    let preview_assets;
    let prices;
    let tmp11;
    let tmp8;
    let type;
    let variants;
    ({ premium_type, bundled_products, preview_assets, variants } = arg0);
    ({ type, category_sku_id, prices, badge_override, hide_badge, is_first_party } = arg0);
    const merged = Object.assign({ type: 0, premium_type: 0, category_sku_id: 0, prices: 0, bundled_products: 0, preview_assets: 0, variants: 0, badge_override: 0, hide_badge: 0, is_first_party: 0 });
    const merged1 = Object.assign(arg0, merged);
    const obj = { type, premiumType: tmp8, categorySkuId: category_sku_id, isCategoryReward: closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === merged1.sku_id), prices: getPricesFromServerDefault(prices), items: hasOwnProperty(merged1.items), bundledProducts: mapped, previewAssets: tmp11, variants: mapped1, badgeOverride: badge_override, hideBadge: hide_badge, isFirstParty: is_first_party };
    const fromServerResult = super.fromServer(merged1);
    const merged2 = Object.assign(fromServerResult);
    tmp8 = null;
    if (premium_type !== metroImportAll) {
      tmp8 = premium_type;
    }
    mapped = undefined;
    if (bundled_products != null) {
      mapped = bundled_products.map(CollectiblesBundledProductRecord.fromServer);
    }
    tmp11 = undefined;
    if (null != preview_assets) {
      const obj3 = { fgStatic: null, fgAnimated: null, bgStatic: null, bgAnimated: null };
      ({ fg_static: obj2.fgStatic, fg_animated: obj2.fgAnimated, bg_static: obj2.bgStatic, bg_animated: obj2.bgAnimated } = preview_assets);
      tmp11 = obj3;
    }
    mapped1 = undefined;
    if (variants != null) {
      mapped1 = variants.map(CollectiblesVariantProductRecord.fromServer);
    }
    ({ google_sku_ids: obj.googleSkuIds, eligible_offers: obj.eligibleOffers } = merged1);
    if (typeof CollectiblesProductRecord === "function") {
      const self = this;
      const self2 = this;
      ({ summary: tmp15.summary, type: tmp15.type, premiumType: tmp15.premiumType, items: tmp15.items, categorySkuId: tmp15.categorySkuId, isCategoryReward: tmp15.isCategoryReward, prices: tmp15.prices, bundledProducts: tmp15.bundledProducts, previewAssets: tmp15.previewAssets, googleSkuIds: tmp15.googleSkuIds, variants: tmp15.variants, eligibleOffers: tmp15.eligibleOffers, badgeOverride: tmp15.badgeOverride, hideBadge: tmp15.hideBadge, isFirstParty: tmp15.isFirstParty, baseVariantName: tmp15.baseVariantName, variantLabel: tmp15.variantLabel } = obj);
      const tmp42 = new CollectiblesProductRecord(obj, fromServerResult, merged, this, metroImportAll);
      return tmp42;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromStorefrontProductRecord(skus, arg1) {
    let found1;
    let found2;
    let googleSkuIds;
    let name;
    let premiumType1;
    let previewAssetPaths;
    let str2;
    let tmp13;
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
          let type;
          if (!tmp5) {
            let tmp6 = _require;
            type = require("CollectiblesItemType").CollectiblesItemType.VARIANTS_GROUP;
          }
          let obj2 = closure_6(first);
          if (obj2 == null) {
            obj2 = {};
          }
          let items = obj2.items;
          let item = obj2.item;
          const first1 = _slicedToArray(first.selectedOptions, 1)[0];
          const obj4 = { storeListingId: null, skuId: null, name: null, summary: null, styles: null, type, baseVariantName: name, variantLabel: tmp13, premiumType: premiumType1, items, categorySkuId: str2, isCategoryReward: closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === first.id), prices: first.prices, badgeOverride: null, hideBadge: null, previewAssets: previewAssetPaths, variants: found1, googleSkuIds, eligibleOffers: first.eligibleOffers, isFirstParty: collectibles.isFirstParty, bundledProducts: found2 };
          ({ id: obj3.storeListingId, id: obj3.skuId } = first);
          ({ name: obj3.name, summary: obj3.summary, primaryCollectionStyles: obj3.styles } = skus);
          name = undefined;
          if (tmp5) {
            name = skus.name;
          }
          tmp13 = undefined;
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
          let premiumType = collectibles.premiumType;
          let items1 = closure_8;
          premiumType1 = null;
          if (premiumType !== closure_8) {
            premiumType1 = collectibles.premiumType;
          }
          if (items == null) {
            items1 = [item];
            items = items1.filter((item) => null != item);
          }
          str2 = skus.primaryCollectionId;
          if (str2 == null) {
            str2 = collectibles.categorySkuId;
          }
          if (str2 == null) {
            str2 = "";
          }
          ({ badgeOverride: obj3.badgeOverride, hideBadge: obj3.hideBadge } = skus);
          previewAssetPaths = first.previewAssetPaths;
          let str3 = require("CollectiblesItemType").CollectiblesItemType.VARIANTS_GROUP;
          found1 = undefined;
          if (type === str3) {
            const skus1 = skus.skus;
            str3 = skus1.map(function(tenantMetadata) {
              let googleSkuIds;
              let item;
              let items;
              let premiumType;
              let premiumType1;
              let previewAssetPaths;
              let str;
              let str2;
              let str3;
              skus = tenantMetadata;
              tenantMetadata = tenantMetadata.tenantMetadata;
              let collectibles;
              if (tenantMetadata != null) {
                collectibles = tenantMetadata.collectibles;
              }
              if (null == collectibles) {
                return null;
              } else {
                let obj = metroRequire(tenantMetadata);
                if (obj == null) {
                  obj = {};
                }
                ({ items, item } = obj);
                first = _slicedToArray(tenantMetadata.selectedOptions, 1)[0];
                const obj3 = { baseVariantName: skus.name, baseVariantSkuId: first.id, variantLabel: str, variantValue: str2, storeListingId: null, skuId: null, name: null, summary: null, styles: "Button", type: "Array", premiumType: premiumType1, items, categorySkuId: str3, isCategoryReward: closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === id.id), prices: "r", previewAssets: previewAssetPaths, googleSkuIds, eligibleOffers: tenantMetadata.eligibleOffers, variants: "targetUserId", bundledProducts: "textRed", isFirstParty: collectibles.isFirstParty };
                str = undefined;
                const tmp6 = skus;
                if (first != null) {
                  str = first.optionValue;
                }
                if (str == null) {
                  str = "";
                }
                str2 = collectibles.optionSelectorDisplayValue;
                if (str2 == null) {
                  str2 = "";
                }
                ({ id: obj2.storeListingId, id: obj2.skuId, name: obj2.name, summary: obj2.summary } = tenantMetadata);
                ({ type: obj2.type, premiumType } = collectibles);
                let items1 = metroImportAll;
                premiumType1 = null;
                if (premiumType !== metroImportAll) {
                  premiumType1 = collectibles.premiumType;
                }
                if (items == null) {
                  items1 = [item];
                  item = (item) => null != item;
                  items = items1.filter(item);
                }
                str3 = tmp6.primaryCollectionId;
                if (str3 == null) {
                  str3 = collectibles.categorySkuId;
                }
                if (str3 == null) {
                  str3 = "";
                }
                ({ prices: obj2.prices, previewAssetPaths } = tenantMetadata);
                googleSkuIds = tenantMetadata.googleSkuIds;
                if (googleSkuIds == null) {
                  const obj5 = {};
                  item = "";
                  obj5[React4.MOBILE] = "";
                  obj5[React4.MOBILE_PREMIUM_TIER_2] = "";
                  googleSkuIds = obj5;
                }
                const self = this;
                if (typeof CollectiblesVariantProductRecord === "function") {
                  const self2 = this;
                  const self3 = this;
                  const tmp13 = new CollectiblesVariantProductRecord(obj3, tmp, premiumType, items1, premiumType1, item);
                  ({ baseVariantName: tmp13.baseVariantName, baseVariantSkuId: tmp13.baseVariantSkuId, variantLabel: tmp13.variantLabel, variantValue: tmp13.variantValue } = obj3);
                  return tmp13;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
            });
            found1 = str3.filter((item) => null != item);
          }
          googleSkuIds = first.googleSkuIds;
          if (googleSkuIds == null) {
            const obj7 = {};
            str3 = "";
            obj7[closure_9.MOBILE] = "";
            obj7[closure_9.MOBILE_PREMIUM_TIER_2] = "";
            googleSkuIds = obj7;
          }
          const bundledSkus = first.bundledSkus;
          found2 = undefined;
          if (bundledSkus != null) {
            const mapped = bundledSkus.map(function(tenantMetadata) {
              let premiumType;
              tenantMetadata = tenantMetadata.tenantMetadata;
              let collectibles;
              if (tenantMetadata != null) {
                collectibles = tenantMetadata.collectibles;
              }
              let tmp32 = null;
              if (null != collectibles) {
                const obj = { type: collectibles.type, premiumType, name: null, skuId: null, summary: null, prices: null };
                premiumType = null;
                if (collectibles.premiumType !== closure_1_8) {
                  premiumType = collectibles.premiumType;
                }
                ({ name: obj.name, id: obj.skuId, summary: obj.summary, prices: obj.prices } = tenantMetadata);
                const self = this;
                const self2 = this;
                tmp32 = new CollectiblesBundledProductRecord(obj);
              }
              return tmp32;
            });
            found2 = mapped.filter((item) => null != item);
          }
          let self = this;
          if (typeof CollectiblesProductRecord === "function") {
            let self2 = this;
            let self3 = this;
            const tmp23 = new CollectiblesProductRecord(obj4, tmp, premiumType, items1, closure_7, type, str3);
            ({ summary: tmp23.summary, type: tmp23.type, premiumType: tmp23.premiumType, items: tmp23.items, categorySkuId: tmp23.categorySkuId, isCategoryReward: tmp23.isCategoryReward, prices: tmp23.prices, bundledProducts: tmp23.bundledProducts, previewAssets: tmp23.previewAssets, googleSkuIds: tmp23.googleSkuIds, variants: tmp23.variants, eligibleOffers: tmp23.eligibleOffers, badgeOverride: tmp23.badgeOverride, hideBadge: tmp23.hideBadge, isFirstParty: tmp23.isFirstParty, baseVariantName: tmp23.baseVariantName, variantLabel: tmp23.variantLabel } = obj4);
            return tmp23;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        type = collectibles.type;
      }
    }
  }
}
class CollectiblesVariantProductRecord extends CollectiblesProductRecord {
  constructor(arg0) {
    const tmp = new CollectiblesVariantProductRecord(arg0, new.target);
    ({ baseVariantName: tmp.baseVariantName, baseVariantSkuId: tmp.baseVariantSkuId, variantLabel: tmp.variantLabel, variantValue: tmp.variantValue } = arg0);
    return tmp;
  }
  static fromServer(arg0) {
    let base_variant_name;
    let base_variant_sku_id;
    let variant_label;
    let variant_value;
    ({ base_variant_name, base_variant_sku_id, variant_label, variant_value } = arg0);
    const merged = Object.assign({ base_variant_name: 0, base_variant_sku_id: 0, variant_label: 0, variant_value: 0 });
    const obj = { baseVariantName: base_variant_name, baseVariantSkuId: base_variant_sku_id, variantLabel: variant_label, variantValue: variant_value };
    const fromServerResult = super.fromServer(Object.assign(arg0, merged));
    const merged1 = Object.assign(fromServerResult);
    if (typeof CollectiblesVariantProductRecord === "function") {
      const self = this;
      const self2 = this;
      ({ baseVariantName: tmp6.baseVariantName, baseVariantSkuId: tmp6.baseVariantSkuId, variantLabel: tmp6.variantLabel, variantValue: tmp6.variantValue } = obj);
      const tmp22 = new CollectiblesVariantProductRecord(obj, fromServerResult, merged);
      return tmp22;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesProductRecord.tsx");

export default CollectiblesProductRecord;
export { CollectiblesVariantProductRecord };