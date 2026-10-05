// === Module 5696: SKURecord ===

// Module 5696 (SKURecord)
import _modDef4461 from "module_4461" /* 4461 */;
import SKUConstants from "SKUConstants" /* 5697 */;
import getPricesFromServerDefault from "getPricesFromServer" /* 5698 */;
import transformSKUTenantMetadataDefault from "transformSKUTenantMetadata" /* 5699 */;
import Record from "Record" /* 1392 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const set = SKUConstants.THE_GAME_AWARD_WINNER_SKUS;
({ GIFTABLE_CURRENCIES: hasOwnProperty, OperatingSystems: metroRequire, SKUFlags: metroImportDefault, SKUTypes: metroImportAll } = Constants);
class SKURecord extends Record {
  constructor(externalPurchaseUrl) {
    const tmp = new SKURecord(new.target, this, externalPurchaseUrl);
    ({ id: tmp.id, type: tmp.type, applicationId: tmp.applicationId, application: tmp.application, eligiblePaymentGateways: tmp.eligiblePaymentGateways, googleSkuIds: tmp.googleSkuIds, productLine: tmp.productLine, name: tmp.name, preorderReleaseAt: tmp.preorderReleaseAt, preorderApproximateReleaseDate: tmp.preorderApproximateReleaseDate, releaseDate: tmp.releaseDate, summary: tmp.summary, features: tmp.features, genres: tmp.genres, dependentSkuId: tmp.dependentSkuId, manifests: tmp.manifests, availableRegions: tmp.availableRegions, accessType: tmp.accessType, systemRequirements: tmp.systemRequirements, contentRating: tmp.contentRating, contentRatingAgency: tmp.contentRatingAgency, legalNotice: tmp.legalNotice, price: tmp.price, prices: tmp.prices, premium: tmp.premium, showAgeGate: tmp.showAgeGate, restricted: tmp.restricted, slug: tmp.slug, exclusive: tmp.exclusive, locales: tmp.locales, flags: tmp.flags } = externalPurchaseUrl);
    tmp.externalPurchaseUrl = externalPurchaseUrl.externalPurchaseUrl || null;
    ({ deleted: tmp.deleted, bundledSkuIds: tmp.bundledSkuIds, bundledSkus: tmp.bundledSkus, tenantMetadata: tmp.tenantMetadata, selectedOptions: tmp.selectedOptions, productId: tmp.productId, thumbnailAssetId: tmp.thumbnailAssetId, description: tmp.description, orbsReward: tmp.orbsReward, eligibleOffers: tmp.eligibleOffers, previewAssetPaths: tmp.previewAssetPaths } = externalPurchaseUrl);
    return tmp;
  }
  static createFromServer(id) {
    let bundled_sku_ids;
    let deleted;
    let eligible_offers;
    let flag;
    let fromServer;
    let google_sku_ids;
    let locales;
    let mapped;
    let mapped1;
    let name;
    let prop;
    let str;
    let tmp14;
    let tmp17;
    let tmp6;
    let tmp9;
    const price = id.price;
    const obj = { id: id.id, type: id.type, applicationId: id.application_id, application: fromServer, eligiblePaymentGateways: prop, googleSkuIds: google_sku_ids, productLine: null, name, releaseDate: tmp6, preorderReleaseAt: tmp9, preorderApproximateReleaseDate: null, summary: null, features: new Set(id.features), genres: new Set(id.genres), dependentSkuId: null, manifests: null, availableRegions: null, accessType: null, systemRequirements: null, contentRating: null, contentRatingAgency: null, legalNotice: null, price: tmp14, prices: getPricesFromServerDefault(id.prices), premium: flag, showAgeGate: id.show_age_gate || false, restricted: id.restricted || false, slug: str, exclusive: id.exclusive || false, locales, flags: null, externalPurchaseUrl: null, deleted, bundledSkuIds: bundled_sku_ids, bundledSkus: mapped, tenantMetadata: transformSKUTenantMetadataDefault(id.tenant_metadata), selectedOptions: mapped1, productId: null, thumbnailAssetId: null, description: null, orbsReward: null, eligibleOffers: eligible_offers, previewAssetPaths: tmp17 };
    fromServer = null;
    if (null != id.application) {
      fromServer = ApplicationRecord.createFromServer(id.application);
    }
    prop = id.eligible_payment_gateways;
    if (prop == null) {
      prop = null;
    }
    google_sku_ids = id.google_sku_ids;
    if (google_sku_ids == null) {
      google_sku_ids = null;
    }
    ({ product_line: obj.productLine, name } = id);
    if (name == null) {
      name = "";
    }
    tmp6 = null;
    if (null != id.release_date) {
      tmp6 = _modDef4461(id.release_date);
    }
    tmp9 = null;
    if (null != id.preorder_release_at) {
      tmp9 = _modDef4461(id.preorder_release_at);
    }
    ({ preorder_approximate_release_date: obj.preorderApproximateReleaseDate, summary: obj.summary } = id);
    new Set(id.features);
    ({ dependent_sku_id: obj.dependentSkuId, manifests: obj.manifests, available_regions: obj.availableRegions, access_type: obj.accessType, system_requirements: obj.systemRequirements, content_rating: obj.contentRating, content_rating_agency: obj.contentRatingAgency, legal_notice: obj.legalNotice } = id);
    tmp14 = null;
    new Set(id.genres);
    if (null != price) {
      const obj3 = { amount: null, currency: null, saleAmount: null, salePercentage: null, premium: null };
      ({ amount: obj2.amount, currency: obj2.currency, sale_amount: obj2.saleAmount, sale_percentage: obj2.salePercentage, premium: obj2.premium } = price);
      tmp14 = obj3;
    }
    flag = id.premium;
    if (flag == null) {
      flag = false;
    }
    str = id.slug;
    if (str == null) {
      str = "";
    }
    locales = id.locales;
    if (locales == null) {
      locales = ["en-US"];
    }
    ({ flags: obj.flags, external_purchase_url: obj.externalPurchaseUrl, deleted } = id);
    if (deleted == null) {
      deleted = false;
    }
    bundled_sku_ids = id.bundled_sku_ids;
    if (bundled_sku_ids == null) {
      bundled_sku_ids = [];
    }
    const bundled_skus = id.bundled_skus;
    mapped = undefined;
    if (bundled_skus != null) {
      mapped = bundled_skus.map((item) => SKURecord.createFromServer(item));
    }
    if (mapped == null) {
      mapped = [];
    }
    const selected_options = id.selected_options;
    mapped1 = undefined;
    if (selected_options != null) {
      mapped1 = selected_options.map((optionName) => ({ optionName: optionName.option_name, optionValue: optionName.option_value }));
    }
    if (mapped1 == null) {
      mapped1 = [];
    }
    ({ product_id: obj.productId, thumbnail_asset_id: obj.thumbnailAssetId, description: obj.description, orbs_reward: obj.orbsReward, eligible_offers } = id);
    if (eligible_offers == null) {
      eligible_offers = [];
    }
    tmp17 = null;
    if (null != id.preview_asset_paths) {
      tmp17 = { fgStatic: id.preview_asset_paths.fg_static, fgAnimated: id.preview_asset_paths.fg_animated, bgStatic: id.preview_asset_paths.bg_static, bgAnimated: id.preview_asset_paths.bg_animated };
      const obj5 = { fgStatic: id.preview_asset_paths.fg_static, fgAnimated: id.preview_asset_paths.fg_animated, bgStatic: id.preview_asset_paths.bg_static, bgAnimated: id.preview_asset_paths.bg_animated };
    }
    return new SKURecord(obj);
  }
  isGiftable() {
    const self = this;
    let price = arg0;
    if (arg0 === undefined) {
      price = self.price;
    }
    const hasItem = self.type === metroImportAll.DURABLE_PRIMARY && self.available && self.requiresPayment && null != price && hasOwnProperty.has(price.currency) && null == self.externalPurchaseUrl;
    return hasItem;
  }
  getPrice() {
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
          return { amount: tmp2.amount, currency: price.currency };
        }
      }
      if (flag) {
        let obj;
        if (null != price.saleAmount) {
          const obj5 = { amount: null, currency: null };
          ({ saleAmount: obj2.amount, currency: obj2.currency } = price);
          obj = obj5;
        }
        return obj;
      }
      obj = { amount: null, currency: null };
      ({ amount: obj.amount, currency: obj.currency } = price);
    }
  }
  getDisplaySalePercentage() {
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
  }
  isAvailableForDistribution() {
    const self = this;
    let available = this.available && null != self.getPrice() && null == self.externalPurchaseUrl;
    if (available) {
      const premium = self.premium;
      let hasFlagResult = !premium;
      if (premium) {
        const obj = require("FlagUtils");
        hasFlagResult = obj.hasFlag(self.flags, metroImportDefault.PREMIUM_AND_DISTRIBUTION);
      }
      available = hasFlagResult;
    }
    return available;
  }
  isAvailable() {
    const obj = require("FlagUtils");
    return obj.hasFlag(this.flags, metroImportDefault.AVAILABLE);
  }
  isPremiumPerk() {
    const self = this;
    let premium = this.premium;
    if (premium) {
      const obj = require("FlagUtils");
      let hasFlagResult = obj.hasFlag(self.flags, metroImportDefault.PREMIUM_PURCHASE);
      if (!hasFlagResult) {
        const tmpResult = require("FlagUtils");
        hasFlagResult = tmpResult.hasFlag(self.flags, metroImportDefault.PREMIUM_AND_DISTRIBUTION);
      }
      premium = hasFlagResult;
    }
    return premium;
  }
  hasFeature(arg0) {
    const features = this.features;
    return features.has(arg0);
  }
  isPreorder() {
    return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate;
  }
}
const prototype = SKURecord.prototype;
Object.defineProperty(prototype, "supportedOperatingSystems", {
  get: function supportedOperatingSystems() {
    let keys;
    if (null != this.systemRequirements) {
      const _Object = Object;
      keys = Object.keys(tmp.systemRequirements);
    } else {
      keys = [];
    }
    if (keys.length <= 0) {
      const items = [metroRequire.WINDOWS];
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
Object.defineProperty(prototype, "requiresPayment", {
  get: function requiresPayment() {
    const price = this.getPrice();
    return !this.premium && null != price && price.amount > 0;
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
    const obj = require("FlagUtils");
    const hasFlagResult = obj.hasFlag(this.flags, metroImportDefault.AVAILABLE) || null != this.externalPurchaseUrl;
    return hasFlagResult;
  },
  set: undefined
});
const result = size.fileFinishedImporting("modules/skus/SKURecord.tsx");

export default SKURecord;