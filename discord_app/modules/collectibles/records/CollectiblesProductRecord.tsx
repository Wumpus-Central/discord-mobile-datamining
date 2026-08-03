// === Module 5805: fromServer ===

// Module 5805 (fromServer)
import _slicedToArray from "_slicedToArray";
import fromServer from "fromServer";
import createCollectiblesItemsFromServerResponse from "createCollectiblesItemsFromServerResponse";
import "fromServer";
import { REWARD_CATEGORY_AND_REWARD_SKU_IDS as closure_7 } from "items";
import ME from "ME";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
({ createCollectiblesItemsFromServerResponse: c5, transformSKUToCollectiblesItem: closure_6 } = createCollectiblesItemsFromServerResponse);
({ PREMIUM_TYPE_NONE: metroImportAll, PriceSetAssignmentPurchaseTypes: c9 } = ME);
let CollectiblesProductRecord;
class CollectiblesProductRecord extends tmp3 {
  constructor(arg0) {
    tmp = new CollectiblesProductRecord(global, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ summary: tmp.summary, type: tmp.type, premiumType: tmp.premiumType, items: tmp.items, categorySkuId: tmp.categorySkuId, isCategoryReward: tmp.isCategoryReward, prices: tmp.prices, bundledProducts: tmp.bundledProducts, previewAssets: tmp.previewAssets, googleSkuIds: tmp.googleSkuIds, variants: tmp.variants, eligibleOffers: tmp.eligibleOffers, badgeOverride: tmp.badgeOverride, hideBadge: tmp.hideBadge, isFirstParty: tmp.isFirstParty } = global);
    return tmp;
  }
}
CollectiblesProductRecord["fromServer"] = function fromServer(arg0) {
  let badge_override;
  let bundled_products;
  let category_sku_id;
  let hide_badge;
  let is_first_party;
  let premium_type;
  let preview_assets;
  let prices;
  let type;
  let variants;
  ({ premium_type, bundled_products, preview_assets, variants } = arg0);
  ({ type, category_sku_id, prices, badge_override, hide_badge, is_first_party } = arg0);
  let obj = Object.create(null);
  const merged = Object.assign(arg0, obj);
  obj = {};
  let tmp4 = CollectiblesProductRecord;
  const fromServerResult = super.fromServer(merged);
  const merged1 = Object.assign(fromServerResult);
  obj.type = type;
  let tmp8 = null;
  if (premium_type !== closure_8) {
    tmp8 = premium_type;
  }
  obj.premiumType = tmp8;
  obj.categorySkuId = category_sku_id;
  obj.isCategoryReward = closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === merged.sku_id);
  obj.prices = importDefault(4234)(prices);
  obj.items = callback(merged.items);
  let mapped;
  if (bundled_products != null) {
    mapped = bundled_products.map(fromServer.fromServer);
  }
  obj.bundledProducts = mapped;
  let tmp11;
  if (null != preview_assets) {
    obj = { fgStatic: null, fgAnimated: null, bgStatic: null, bgAnimated: null };
    ({ fg_static: obj2[0], fg_animated: obj2[1], bg_static: obj2[2], bg_animated: obj2[3] } = preview_assets);
    tmp11 = obj;
  }
  obj.previewAssets = tmp11;
  let mapped1;
  if (variants != null) {
    mapped1 = variants.map(prototype.fromServer);
  }
  obj.variants = mapped1;
  ({ google_sku_ids: obj.googleSkuIds, eligible_offers: obj.eligibleOffers } = merged);
  obj.badgeOverride = badge_override;
  obj.hideBadge = hide_badge;
  obj.isFirstParty = is_first_party;
  if (typeof CollectiblesProductRecord !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  tmp4 = new tmp4(obj, fromServerResult, obj, this, closure_8);
  // ThrowIfThisInitialized (0x7c)
  ({ summary: tmp14.summary, type: tmp14.type, premiumType: tmp14.premiumType, items: tmp14.items, categorySkuId: tmp14.categorySkuId, isCategoryReward: tmp14.isCategoryReward, prices: tmp14.prices, bundledProducts: tmp14.bundledProducts, previewAssets: tmp14.previewAssets, googleSkuIds: tmp14.googleSkuIds, variants: tmp14.variants, eligibleOffers: tmp14.eligibleOffers, badgeOverride: tmp14.badgeOverride, hideBadge: tmp14.hideBadge, isFirstParty: tmp14.isFirstParty } = obj);
  return tmp4;
};
CollectiblesProductRecord["fromStorefrontProductRecord"] = function fromStorefrontProductRecord(skus) {
  let previewAssetPaths;
  const _require = skus;
  let first = skus.skus[0];
  if (null != first) {
    let tenantMetadata = first.tenantMetadata;
    let collectibles;
    if (tenantMetadata != null) {
      collectibles = tenantMetadata.collectibles;
    }
    if (null != collectibles) {
      if (skus.skus.length > 1) {
        let type = _require(1901).CollectiblesItemType.VARIANTS_GROUP;
      } else {
        type = collectibles.type;
      }
      let obj = callback2(first);
      if (obj == null) {
        obj = {};
      }
      let items = obj.items;
      obj = { storeListingId: null, skuId: null, name: null, summary: null, styles: null, type: null, premiumType: null, items: null, categorySkuId: null, isCategoryReward: null, prices: null, previewAssets: null, variants: null, googleSkuIds: null, eligibleOffers: "r", isFirstParty: "trafikljus", bundledProducts: "v\u00E5gr\u00E4ta trafikljus" };
      ({ id: obj2[0], id: obj2[1] } = first);
      ({ name: obj2[2], summary: obj2[3], primaryCollectionStyles: obj2[4] } = skus);
      obj[5] = type;
      let premiumType = collectibles.premiumType;
      items = closure_8;
      premiumType = null;
      if (premiumType !== closure_8) {
        premiumType = collectibles.premiumType;
      }
      obj[6] = premiumType;
      if (items == null) {
        items = [obj.item];
        items = items.filter((arg0) => null != arg0);
      }
      obj[7] = items;
      let str = skus.primaryCollectionId;
      if (str == null) {
        str = collectibles.categorySkuId;
      }
      if (str == null) {
        str = "";
      }
      obj[8] = str;
      obj[9] = closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === first.id);
      ({ prices: obj2[10], previewAssetPaths } = first);
      obj[11] = previewAssetPaths;
      let str2 = _require(1901).CollectiblesItemType.VARIANTS_GROUP;
      let found;
      if (type === str2) {
        skus = skus.skus;
        str2 = skus.map((tenantMetadata) => {
          let item;
          let items;
          let premiumType;
          let previewAssetPaths;
          const skus = tenantMetadata;
          tenantMetadata = tenantMetadata.tenantMetadata;
          let collectibles;
          if (tenantMetadata != null) {
            collectibles = tenantMetadata.collectibles;
          }
          if (null == collectibles) {
            return null;
          } else {
            let obj = outer1_6(tenantMetadata);
            if (obj == null) {
              obj = {};
            }
            ({ items, item } = obj);
            const first = outer1_3(tenantMetadata.selectedOptions, 1)[0];
            obj = { baseVariantName: null, baseVariantSkuId: null, variantLabel: null, variantValue: null, storeListingId: null, skuId: null, name: null, summary: null, styles: "e", type: "Array", premiumType: "accessibilityRole", items: "y", categorySkuId: false, isCategoryReward: false, prices: null, previewAssets: null, googleSkuIds: null, eligibleOffers: null, variants: null, bundledProducts: null, isFirstParty: 199.5 };
            obj[0] = skus.name;
            obj[1] = first.id;
            let str;
            if (first != null) {
              str = first.optionValue;
            }
            if (str == null) {
              str = "";
            }
            obj[2] = str;
            let str2 = collectibles.optionSelectorDisplayValue;
            if (str2 == null) {
              str2 = "";
            }
            obj[3] = str2;
            ({ id: obj2[4], id: obj2[5], name: obj2[6], summary: obj2[7] } = tenantMetadata);
            ({ type: obj2[9], premiumType } = collectibles);
            items = outer1_8;
            premiumType = null;
            if (premiumType !== outer1_8) {
              premiumType = collectibles.premiumType;
            }
            obj[10] = premiumType;
            if (items == null) {
              items = [item];
              item = (arg0) => null != arg0;
              items = items.filter(item);
            }
            obj[11] = items;
            let str3 = skus.primaryCollectionId;
            if (str3 == null) {
              str3 = collectibles.categorySkuId;
            }
            if (str3 == null) {
              str3 = "";
            }
            obj[12] = str3;
            obj[13] = outer1_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === tenantMetadata.id);
            ({ prices: obj2[14], previewAssetPaths } = tenantMetadata);
            obj[15] = previewAssetPaths;
            let googleSkuIds = tenantMetadata.googleSkuIds;
            if (googleSkuIds == null) {
              obj = {};
              obj[outer1_9.MOBILE] = "";
              obj[outer1_9.MOBILE_PREMIUM_TIER_2] = "";
              googleSkuIds = obj;
            }
            obj[16] = googleSkuIds;
            obj[20] = collectibles.isFirstParty;
            if (typeof outer1_10 !== "fileFinishedImporting") {
              HermesBuiltin.throwTypeError();
            }
            const tmp16 = new outer1_14(obj, tmp, premiumType, items, premiumType, item);
            // ThrowIfThisInitialized (0x7c)
            ({ baseVariantName: tmp16.baseVariantName, baseVariantSkuId: tmp16.baseVariantSkuId, variantLabel: tmp16.variantLabel, variantValue: tmp16.variantValue } = obj);
            return tmp16;
          }
        });
        found = str2.filter((arg0) => null != arg0);
      }
      obj[12] = found;
      let googleSkuIds = first.googleSkuIds;
      if (googleSkuIds == null) {
        obj = {};
        str2 = "";
        obj[closure_9.MOBILE] = "";
        obj[closure_9.MOBILE_PREMIUM_TIER_2] = "";
        googleSkuIds = obj;
      }
      obj[13] = googleSkuIds;
      obj[15] = collectibles.isFirstParty;
      const bundledSkus = first.bundledSkus;
      let found1;
      if (bundledSkus != null) {
        const mapped = bundledSkus.map((tenantMetadata) => {
          tenantMetadata = tenantMetadata.tenantMetadata;
          let collectibles;
          if (tenantMetadata != null) {
            collectibles = tenantMetadata.collectibles;
          }
          let tmp3 = null;
          if (null != collectibles) {
            const obj = { type: null, premiumType: null, name: null, skuId: null, summary: null, prices: null };
            obj[0] = collectibles.type;
            let premiumType = null;
            tmp3 = fromServer;
            if (collectibles.premiumType !== closure_8) {
              premiumType = collectibles.premiumType;
            }
            obj[1] = premiumType;
            ({ name: obj[2], id: obj[3], summary: obj[4], prices: obj[5] } = tenantMetadata);
            tmp3 = new tmp3(obj);
          }
          return tmp3;
        });
        found1 = mapped.filter((arg0) => null != arg0);
      }
      obj[16] = found1;
      if (typeof CollectiblesProductRecord !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      const tmp19 = new CollectiblesProductRecord(obj, premiumType, items, closure_7, type, str2);
      // ThrowIfThisInitialized (0x7c)
      ({ summary: tmp19.summary, type: tmp19.type, premiumType: tmp19.premiumType, items: tmp19.items, categorySkuId: tmp19.categorySkuId, isCategoryReward: tmp19.isCategoryReward, prices: tmp19.prices, bundledProducts: tmp19.bundledProducts, previewAssets: tmp19.previewAssets, googleSkuIds: tmp19.googleSkuIds, variants: tmp19.variants, eligibleOffers: tmp19.eligibleOffers, badgeOverride: tmp19.badgeOverride, hideBadge: tmp19.hideBadge, isFirstParty: tmp19.isFirstParty } = obj);
      return tmp19;
    }
  }
};
let prototype;
prototype = function CollectiblesVariantProductRecord(arg0) {
  const tmp = new prototype(arg0, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ baseVariantName: tmp.baseVariantName, baseVariantSkuId: tmp.baseVariantSkuId, variantLabel: tmp.variantLabel, variantValue: tmp.variantValue } = arg0);
  return tmp;
}.prototype;
class prototype extends CollectiblesProductRecord {
}
prototype["fromServer"] = function fromServer(arg0) {
  let base_variant_name;
  let base_variant_sku_id;
  let variant_label;
  let variant_value;
  ({ base_variant_name, base_variant_sku_id, variant_label, variant_value } = arg0);
  let obj = Object.create(null);
  obj = {};
  let tmp2 = prototype;
  const fromServerResult = super.fromServer(Object.assign(arg0, obj));
  const merged = Object.assign(fromServerResult);
  obj.baseVariantName = base_variant_name;
  obj.baseVariantSkuId = base_variant_sku_id;
  obj.variantLabel = variant_label;
  obj.variantValue = variant_value;
  if (typeof prototype !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  tmp2 = new tmp2(obj, fromServerResult, obj);
  // ThrowIfThisInitialized (0x7c)
  ({ baseVariantName: tmp5.baseVariantName, baseVariantSkuId: tmp5.baseVariantSkuId, variantLabel: tmp5.variantLabel, variantValue: tmp5.variantValue } = obj);
  return tmp2;
};
const result = require("createCollectiblesItemsFromServerResponse").fileFinishedImporting("modules/collectibles/records/CollectiblesProductRecord.tsx");

export default CollectiblesProductRecord;
export const CollectiblesVariantProductRecord = prototype;