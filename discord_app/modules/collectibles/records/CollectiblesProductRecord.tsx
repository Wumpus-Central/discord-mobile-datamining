// discord_app/modules/collectibles/records/CollectiblesProductRecord.tsx
import getPricesFromServerDefault from "../../skus/utils/getPricesFromServer.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import CollectiblesBundledProductRecord from "CollectiblesBundledProductRecord.tsx";
import CollectiblesStoreListingRecord from "CollectiblesStoreListingRecord.tsx";

const require = fn;
const CollectiblesItemRecord = fn(7874);
({ createCollectiblesItemsFromServerResponse: hasOwnProperty, transformSKUToCollectiblesItem: metroRequire } =
  CollectiblesItemRecord);
let closure_7 = fn(1076).REWARD_CATEGORY_AND_REWARD_SKU_IDS;
const Constants = fn(1074);
({ PREMIUM_TYPE_NONE: closure_8, PriceSetAssignmentPurchaseTypes: closure_9 } = Constants);
let CollectiblesProductRecord;
class CollectiblesProductRecord extends tmp3 {
  constructor(arg0) {
    tmp = new CollectiblesProductRecord(global, new.target);
    ({
      summary: tmp.summary,
      type: tmp.type,
      premiumType: tmp.premiumType,
      items: tmp.items,
      categorySkuId: tmp.categorySkuId,
      isCategoryReward: tmp.isCategoryReward,
      prices: tmp.prices,
      bundledProducts: tmp.bundledProducts,
      previewAssets: tmp.previewAssets,
      googleSkuIds: tmp.googleSkuIds,
      variants: tmp.variants,
      eligibleOffers: tmp.eligibleOffers,
      badgeOverride: tmp.badgeOverride,
      hideBadge: tmp.hideBadge,
      isFirstParty: tmp.isFirstParty,
      baseVariantName: tmp.baseVariantName,
      variantLabel: tmp.variantLabel,
    } = global);
    return tmp;
  }
}
CollectiblesProductRecord["fromServer"] = function fromServer(arg0) {
  ({ premium_type, bundled_products, preview_assets, variants } = arg0);
  ({ type, category_sku_id, prices, badge_override, hide_badge, is_first_party } = arg0);
  const merged = Object.assign({
    type: 0,
    premium_type: 0,
    category_sku_id: 0,
    prices: 0,
    bundled_products: 0,
    preview_assets: 0,
    variants: 0,
    badge_override: 0,
    hide_badge: 0,
    is_first_party: 0,
  });
  const merged1 = Object.assign(arg0, merged);
  const obj = {};
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
    ({
      fg_static: obj2.fgStatic,
      fg_animated: obj2.fgAnimated,
      bg_static: obj2.bgStatic,
      bg_animated: obj2.bgAnimated,
    } = preview_assets);
    tmp11 = { fgStatic: null, fgAnimated: null, bgStatic: null, bgAnimated: null };
    const obj3 = { fgStatic: null, fgAnimated: null, bgStatic: null, bgAnimated: null };
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
    const tmp42 = new CollectiblesProductRecord(obj, fromServerResult, merged, this, React6);
    ({
      summary: tmp17.summary,
      type: tmp17.type,
      premiumType: tmp17.premiumType,
      items: tmp17.items,
      categorySkuId: tmp17.categorySkuId,
      isCategoryReward: tmp17.isCategoryReward,
      prices: tmp17.prices,
      bundledProducts: tmp17.bundledProducts,
      previewAssets: tmp17.previewAssets,
      googleSkuIds: tmp17.googleSkuIds,
      variants: tmp17.variants,
      eligibleOffers: tmp17.eligibleOffers,
      badgeOverride: tmp17.badgeOverride,
      hideBadge: tmp17.hideBadge,
      isFirstParty: tmp17.isFirstParty,
      baseVariantName: tmp17.baseVariantName,
      variantLabel: tmp17.variantLabel,
    } = obj);
    return tmp42;
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
        let obj2 = closure_6(first);
        if (obj2 == null) {
          obj2 = {};
        }
        let items = obj2.items;
        const first1 = _slicedToArray(first.selectedOptions, 1)[0];
        const obj4 = {
          storeListingId: null,
          skuId: null,
          name: null,
          summary: null,
          styles: null,
          type: null,
          baseVariantName: null,
          variantLabel: null,
          premiumType: null,
          items: null,
          categorySkuId: null,
          isCategoryReward: null,
          prices: null,
          badgeOverride: null,
          hideBadge: null,
          previewAssets: null,
          variants: null,
          googleSkuIds: null,
          eligibleOffers: null,
          isFirstParty: null,
          bundledProducts: null,
        };
        ({ id: obj3.storeListingId, id: obj3.skuId } = first);
        ({ name: obj3.name, summary: obj3.summary, primaryCollectionStyles: obj3.styles } = skus);
        obj4.type = type;
        let name;
        if (tmp5) {
          name = skus.name;
        }
        obj4.baseVariantName = name;
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
        obj4.variantLabel = tmp13;
        let premiumType = collectibles.premiumType;
        let items1 = closure_8;
        let premiumType1 = null;
        if (premiumType !== closure_8) {
          premiumType1 = collectibles.premiumType;
        }
        obj4.premiumType = premiumType1;
        if (items == null) {
          items1 = [obj2.item];
          items = items1.filter((item) => null != item);
        }
        obj4.items = items;
        let str2 = skus.primaryCollectionId;
        if (str2 == null) {
          str2 = collectibles.categorySkuId;
        }
        if (str2 == null) {
          str2 = "";
        }
        obj4.categorySkuId = str2;
        obj4.isCategoryReward = closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === first.id);
        obj4.prices = first.prices;
        ({ badgeOverride: obj3.badgeOverride, hideBadge: obj3.hideBadge } = skus);
        const previewAssetPaths = first.previewAssetPaths;
        obj4.previewAssets = previewAssetPaths;
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
              const obj3 = {
                baseVariantName: skus.name,
                baseVariantSkuId: first.id,
                variantLabel: null,
                variantValue: null,
                storeListingId: null,
                skuId: null,
                name: null,
                summary: null,
                styles: "Button",
                type: "Array",
                premiumType: "padding",
                items: true,
                categorySkuId: true,
                isCategoryReward: true,
                prices: true,
                previewAssets: true,
                googleSkuIds: true,
                eligibleOffers: true,
                variants: true,
                bundledProducts: true,
                isFirstParty: true,
              };
              let str;
              if (first != null) {
                str = first.optionValue;
              }
              if (str == null) {
                str = "";
              }
              obj3.variantLabel = str;
              let str2 = collectibles.optionSelectorDisplayValue;
              if (str2 == null) {
                str2 = "";
              }
              obj3.variantValue = str2;
              ({ id: obj2.storeListingId, id: obj2.skuId, name: obj2.name, summary: obj2.summary } = tenantMetadata);
              ({ type: obj2.type, premiumType } = collectibles);
              let items1 = React6;
              let premiumType1 = null;
              if (premiumType !== React6) {
                premiumType1 = collectibles.premiumType;
              }
              obj3.premiumType = premiumType1;
              if (items == null) {
                items1 = [item];
                item = (item) => null != item;
                items = items1.filter(item);
              }
              obj3.items = items;
              let str3 = skus.primaryCollectionId;
              if (str3 == null) {
                str3 = collectibles.categorySkuId;
              }
              if (str3 == null) {
                str3 = "";
              }
              obj3.categorySkuId = str3;
              obj3.isCategoryReward = closure_7.some((rewardSkuId) => rewardSkuId.rewardSkuId === tenantMetadata.id);
              ({ prices: obj2.prices, previewAssetPaths } = tenantMetadata);
              obj3.previewAssets = previewAssetPaths;
              let googleSkuIds = tenantMetadata.googleSkuIds;
              if (googleSkuIds == null) {
                const obj5 = {};
                item = "";
                obj5[React7.MOBILE] = "";
                obj5[React7.MOBILE_PREMIUM_TIER_2] = "";
                googleSkuIds = obj5;
              }
              obj3.googleSkuIds = googleSkuIds;
              obj3.eligibleOffers = tenantMetadata.eligibleOffers;
              obj3.isFirstParty = collectibles.isFirstParty;
              if (typeof prototype === "function") {
                const tmp16 = new prototype(obj3, tmp, premiumType, items1, premiumType1, item);
                ({
                  baseVariantName: tmp16.baseVariantName,
                  baseVariantSkuId: tmp16.baseVariantSkuId,
                  variantLabel: tmp16.variantLabel,
                  variantValue: tmp16.variantValue,
                } = obj3);
                return tmp16;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          });
          found1 = str3.filter((item) => null != item);
        }
        obj4.variants = found1;
        let googleSkuIds = first.googleSkuIds;
        if (googleSkuIds == null) {
          const obj7 = {};
          str3 = "";
          obj7[closure_9.MOBILE] = "";
          obj7[closure_9.MOBILE_PREMIUM_TIER_2] = "";
          googleSkuIds = obj7;
        }
        obj4.googleSkuIds = googleSkuIds;
        obj4.eligibleOffers = first.eligibleOffers;
        obj4.isFirstParty = collectibles.isFirstParty;
        const bundledSkus = first.bundledSkus;
        let found2;
        if (bundledSkus != null) {
          const mapped = bundledSkus.map((tenantMetadata) => {
            tenantMetadata = tenantMetadata.tenantMetadata;
            let collectibles;
            if (tenantMetadata != null) {
              collectibles = tenantMetadata.collectibles;
            }
            let tmp32 = null;
            if (null != collectibles) {
              const obj = {
                type: collectibles.type,
                premiumType: null,
                name: null,
                skuId: null,
                summary: null,
                prices: null,
              };
              let premiumType = null;
              if (collectibles.premiumType !== closure_1_8) {
                premiumType = collectibles.premiumType;
              }
              obj.premiumType = premiumType;
              ({ name: obj.name, id: obj.skuId, summary: obj.summary, prices: obj.prices } = tenantMetadata);
              tmp32 = new CollectiblesBundledProductRecord(obj);
            }
            return tmp32;
          });
          found2 = mapped.filter((item) => null != item);
        }
        obj4.bundledProducts = found2;
        if (typeof CollectiblesProductRecord === "function") {
          const tmp26 = new CollectiblesProductRecord(obj4, tmp, premiumType, items1, closure_7, type, str3);
          ({
            summary: tmp26.summary,
            type: tmp26.type,
            premiumType: tmp26.premiumType,
            items: tmp26.items,
            categorySkuId: tmp26.categorySkuId,
            isCategoryReward: tmp26.isCategoryReward,
            prices: tmp26.prices,
            bundledProducts: tmp26.bundledProducts,
            previewAssets: tmp26.previewAssets,
            googleSkuIds: tmp26.googleSkuIds,
            variants: tmp26.variants,
            eligibleOffers: tmp26.eligibleOffers,
            badgeOverride: tmp26.badgeOverride,
            hideBadge: tmp26.hideBadge,
            isFirstParty: tmp26.isFirstParty,
            baseVariantName: tmp26.baseVariantName,
            variantLabel: tmp26.variantLabel,
          } = obj4);
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
  ({
    baseVariantName: tmp.baseVariantName,
    baseVariantSkuId: tmp.baseVariantSkuId,
    variantLabel: tmp.variantLabel,
    variantValue: tmp.variantValue,
  } = arg0);
  return tmp;
}.prototype;
class prototype extends CollectiblesProductRecord {}
prototype["fromServer"] = function fromServer(arg0) {
  ({ base_variant_name, base_variant_sku_id, variant_label, variant_value } = arg0);
  const merged = Object.assign({ base_variant_name: 0, base_variant_sku_id: 0, variant_label: 0, variant_value: 0 });
  const obj = {};
  const fromServerResult = super.fromServer(Object.assign(arg0, merged));
  const merged1 = Object.assign(fromServerResult);
  obj.baseVariantName = base_variant_name;
  obj.baseVariantSkuId = base_variant_sku_id;
  obj.variantLabel = variant_label;
  obj.variantValue = variant_value;
  if (typeof prototype === "function") {
    const tmp22 = new prototype(obj, fromServerResult, merged);
    ({
      baseVariantName: tmp8.baseVariantName,
      baseVariantSkuId: tmp8.baseVariantSkuId,
      variantLabel: tmp8.variantLabel,
      variantValue: tmp8.variantValue,
    } = obj);
    return tmp22;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesProductRecord.tsx");

export default CollectiblesProductRecord;
export const CollectiblesVariantProductRecord = prototype;
