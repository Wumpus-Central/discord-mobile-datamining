// === Module 5511: SKURecord ===

// Module 5511 (SKURecord)
import _modDef4153 from "module_4153" /* 4153 */;
import getPricesFromServerDefault from "getPricesFromServer" /* 5513 */;
import transformSKUTenantMetadataDefault from "transformSKUTenantMetadata" /* 5514 */;
import Record from "Record" /* 1386 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

const require = fn;
fn(5512).THE_GAME_AWARD_WINNER_SKUS;
const Constants = fn(1074);
({ GIFTABLE_CURRENCIES: hasOwnProperty, OperatingSystems: metroRequire, SKUFlags: closure_7, SKUTypes: closure_8 } = Constants);
let SKURecord;
class SKURecord extends tmp2 {
  constructor(arg0) {
    tmp = new SKURecord(new.target, new.target, global);
    ({ id: tmp.id, type: tmp.type, applicationId: tmp.applicationId, application: tmp.application, eligiblePaymentGateways: tmp.eligiblePaymentGateways, googleSkuIds: tmp.googleSkuIds, productLine: tmp.productLine, name: tmp.name, preorderReleaseAt: tmp.preorderReleaseAt, preorderApproximateReleaseDate: tmp.preorderApproximateReleaseDate, releaseDate: tmp.releaseDate, summary: tmp.summary, features: tmp.features, genres: tmp.genres, dependentSkuId: tmp.dependentSkuId, manifests: tmp.manifests, availableRegions: tmp.availableRegions, accessType: tmp.accessType, systemRequirements: tmp.systemRequirements, contentRating: tmp.contentRating, contentRatingAgency: tmp.contentRatingAgency, legalNotice: tmp.legalNotice, price: tmp.price, prices: tmp.prices, premium: tmp.premium, showAgeGate: tmp.showAgeGate, restricted: tmp.restricted, slug: tmp.slug, exclusive: tmp.exclusive, locales: tmp.locales, flags: tmp.flags } = global);
    tmp.externalPurchaseUrl = global.externalPurchaseUrl || null;
    ({ deleted: tmp.deleted, bundledSkuIds: tmp.bundledSkuIds, bundledSkus: tmp.bundledSkus, tenantMetadata: tmp.tenantMetadata, selectedOptions: tmp.selectedOptions, productId: tmp.productId, thumbnailAssetId: tmp.thumbnailAssetId, description: tmp.description, orbsReward: tmp.orbsReward, eligibleOffers: tmp.eligibleOffers, previewAssetPaths: tmp.previewAssetPaths } = global);
    return tmp;
  }
}
const prototype = SKURecord.prototype;
SKURecord["createFromServer"] = function createFromServer(id) {
  const price = id.price;
  let obj = { id: id.id, type: id.type, applicationId: id.application_id, application: null, eligiblePaymentGateways: null, googleSkuIds: null, productLine: null, name: null, releaseDate: null, preorderReleaseAt: null, preorderApproximateReleaseDate: null, summary: null, features: null, genres: null, dependentSkuId: null, manifests: null, availableRegions: null, accessType: null, systemRequirements: null, contentRating: null, contentRatingAgency: null, legalNotice: null, price: null, prices: null, premium: null, showAgeGate: null, restricted: null, slug: null, exclusive: null, locales: null, flags: null, externalPurchaseUrl: null, deleted: null, bundledSkuIds: null, bundledSkus: null, tenantMetadata: null, selectedOptions: null, productId: null, thumbnailAssetId: null, description: null, orbsReward: null, eligibleOffers: null, previewAssetPaths: null };
  let fromServer = null;
  if (null != id.application) {
    fromServer = ApplicationRecord.createFromServer(id.application);
  }
  obj.application = fromServer;
  let prop = id.eligible_payment_gateways;
  if (prop == null) {
    prop = null;
  }
  obj.eligiblePaymentGateways = prop;
  let google_sku_ids = id.google_sku_ids;
  if (google_sku_ids == null) {
    google_sku_ids = null;
  }
  obj.googleSkuIds = google_sku_ids;
  ({ product_line: obj.productLine, name } = id);
  if (name == null) {
    name = "";
  }
  obj.name = name;
  let tmp6 = null;
  if (null != id.release_date) {
    tmp6 = _modDef4153(id.release_date);
  }
  obj.releaseDate = tmp6;
  let tmp9 = null;
  if (null != id.preorder_release_at) {
    tmp9 = _modDef4153(id.preorder_release_at);
  }
  obj.preorderReleaseAt = tmp9;
  ({ preorder_approximate_release_date: obj.preorderApproximateReleaseDate, summary: obj.summary } = id);
  obj.features = new Set(id.features);
  set = new Set(id.features);
  const tmp = SKURecord;
  obj.genres = new Set(id.genres);
  ({ dependent_sku_id: obj.dependentSkuId, manifests: obj.manifests, available_regions: obj.availableRegions, access_type: obj.accessType, system_requirements: obj.systemRequirements, content_rating: obj.contentRating, content_rating_agency: obj.contentRatingAgency, legal_notice: obj.legalNotice } = id);
  let tmp14 = null;
  if (null != price) {
    obj = { amount: null, currency: null, saleAmount: null, salePercentage: null, premium: null };
    ({ amount: obj2.amount, currency: obj2.currency, sale_amount: obj2.saleAmount, sale_percentage: obj2.salePercentage, premium: obj2.premium } = price);
    tmp14 = obj;
  }
  obj.price = tmp14;
  obj.prices = getPricesFromServerDefault(id.prices);
  let flag = id.premium;
  if (flag == null) {
    flag = false;
  }
  obj.premium = flag;
  obj.showAgeGate = id.show_age_gate || false;
  obj.restricted = id.restricted || false;
  let str = id.slug;
  if (str == null) {
    str = "";
  }
  obj.slug = str;
  obj.exclusive = id.exclusive || false;
  let locales = id.locales;
  if (locales == null) {
    locales = ["en-US"];
  }
  obj.locales = locales;
  ({ flags: obj.flags, external_purchase_url: obj.externalPurchaseUrl, deleted } = id);
  if (deleted == null) {
    deleted = false;
  }
  obj.deleted = deleted;
  let bundled_sku_ids = id.bundled_sku_ids;
  if (bundled_sku_ids == null) {
    bundled_sku_ids = [];
  }
  obj.bundledSkuIds = bundled_sku_ids;
  const bundled_skus = id.bundled_skus;
  let mapped;
  if (bundled_skus != null) {
    mapped = bundled_skus.map((item) => SKURecord.createFromServer(item));
  }
  if (mapped == null) {
    mapped = [];
  }
  obj.bundledSkus = mapped;
  obj.tenantMetadata = transformSKUTenantMetadataDefault(id.tenant_metadata);
  const selected_options = id.selected_options;
  let mapped1;
  if (selected_options != null) {
    mapped1 = selected_options.map((optionName) => ({ optionName: optionName.option_name, optionValue: optionName.option_value }));
  }
  if (mapped1 == null) {
    mapped1 = [];
  }
  obj.selectedOptions = mapped1;
  ({ product_id: obj.productId, thumbnail_asset_id: obj.thumbnailAssetId, description: obj.description, orbs_reward: obj.orbsReward, eligible_offers } = id);
  if (eligible_offers == null) {
    eligible_offers = [];
  }
  obj.eligibleOffers = eligible_offers;
  let tmp17 = null;
  if (null != id.preview_asset_paths) {
    obj = { fgStatic: id.preview_asset_paths.fg_static, fgAnimated: id.preview_asset_paths.fg_animated, bgStatic: id.preview_asset_paths.bg_static, bgAnimated: id.preview_asset_paths.bg_animated };
    tmp17 = obj;
  }
  obj.previewAssetPaths = tmp17;
  return new tmp(obj);
};
Object.defineProperty(prototype, "supportedOperatingSystems", {
  get: function supportedOperatingSystems() {
    if (null != this.systemRequirements) {
      const _Object = Object;
      let keys = Object.keys(tmp.systemRequirements);
    } else {
      keys = [];
    }
    if (keys.length <= 0) {
      const items = [constants.WINDOWS];
      keys = items;
    }
    return keys;
  },
  set: undefined
});
Object.defineProperty(prototype, "isOnSale", {
  get: function isOnSale() {
    return null != this.price && null != this.price.saleAmount;
  },
  set: undefined
});
prototype["isGiftable"] = function isGiftable() {
  const self = this;
  let price = arg0;
  if (arg0 === undefined) {
    price = self.price;
  }
  let hasItem = self.type === constants3.DURABLE_PRIMARY && self.available && self.requiresPayment;
  if (hasItem) {
    hasItem = null != price;
  }
  if (hasItem) {
    hasItem = set2.has(price.currency);
  }
  if (hasItem) {
    hasItem = null == self.externalPurchaseUrl;
  }
  return hasItem;
};
prototype["getPrice"] = function getPrice() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = null;
  }
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const price = this.price;
  if (null == price) {
    return null;
  } else {
    if (null != tmp) {
      const premium = price.premium;
      let tmp2;
      if (premium != null) {
        tmp2 = premium[tmp];
      }
      if (null != tmp2) {
        let obj = { amount: tmp2.amount, currency: price.currency };
        return obj;
      }
    }
    if (flag) {
      if (null != price.saleAmount) {
        obj = { amount: null, currency: null };
        ({ saleAmount: obj2.amount, currency: obj2.currency } = price);
      }
      return obj;
    }
    obj = { amount: null, currency: null };
    ({ amount: obj.amount, currency: obj.currency } = price);
  }
};
prototype["getDisplaySalePercentage"] = function getDisplaySalePercentage() {
  const self = this;
  let combined = null;
  if (null != this.price) {
    combined = null;
    if (null != self.price.salePercentage) {
      const _HermesInternal = HermesInternal;
      combined = "-" + self.price.salePercentage + "%";
    }
  }
  return combined;
};
Object.defineProperty(prototype, "requiresPayment", {
  get: function requiresPayment() {
    const price = this.getPrice();
    const premium = this.premium;
    let tmp2 = !premium;
    if (!premium) {
      tmp2 = null != price;
    }
    if (tmp2) {
      tmp2 = price.amount > 0;
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "isTheGameAwardsWinner", {
  get: function isTheGameAwardsWinner() {
    return set.has(this.id);
  },
  set: undefined
});
Object.defineProperty(prototype, "available", {
  get: function available() {
    let hasFlagResult = require("FlagUtils").hasFlag(this.flags, constants2.AVAILABLE);
    if (!hasFlagResult) {
      hasFlagResult = null != this.externalPurchaseUrl;
    }
    return hasFlagResult;
  },
  set: undefined
});
prototype["isAvailableForDistribution"] = function isAvailableForDistribution() {
  const self = this;
  let available = this.available;
  if (available) {
    available = null != self.getPrice();
  }
  if (available) {
    available = null == self.externalPurchaseUrl;
  }
  if (available) {
    const premium = self.premium;
    let hasFlagResult = !premium;
    if (premium) {
      hasFlagResult = require("FlagUtils").hasFlag(self.flags, constants2.PREMIUM_AND_DISTRIBUTION);
      const obj = require("FlagUtils");
    }
    available = hasFlagResult;
  }
  return available;
};
prototype["isAvailable"] = function isAvailable() {
  return require("FlagUtils").hasFlag(this.flags, constants2.AVAILABLE);
};
prototype["isPremiumPerk"] = function isPremiumPerk() {
  const self = this;
  let premium = this.premium;
  if (premium) {
    let hasFlagResult = require("FlagUtils").hasFlag(self.flags, constants2.PREMIUM_PURCHASE);
    if (!hasFlagResult) {
      hasFlagResult = tmp(1384).hasFlag(self.flags, tmp3.PREMIUM_AND_DISTRIBUTION);
      const tmpResult = tmp(1384);
    }
    premium = hasFlagResult;
    const obj = require("FlagUtils");
    tmp = require;
    tmp3 = constants2;
  }
  return premium;
};
prototype["hasFeature"] = function hasFeature(arg0) {
  const features = this.features;
  return features.has(arg0);
};
prototype["isPreorder"] = function isPreorder() {
  return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/skus/SKURecord.tsx");

export default SKURecord;