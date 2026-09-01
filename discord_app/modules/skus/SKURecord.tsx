// discord_app/modules/skus/SKURecord.tsx
import toJSDefault from "../../lib/Record.tsx";
import hooksDefault from "../../../_runtime/04075_hooks.js";
import getPricesFromServerDefault from "utils/getPricesFromServer.tsx";
import transformProfileEffectKeyFrameFromServerDefault from "utils/transformSKUTenantMetadata.tsx";
import closure_3 from "../../records/ApplicationRecord.tsx";
import { THE_GAME_AWARD_WINNER_SKUS as closure_4 } from "SKUConstants.tsx";
import ME from "../../Constants.tsx";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";

const require = arg1;
toJSDefault;
({ GIFTABLE_CURRENCIES: c5, OperatingSystems: closure_6, SKUFlags: error, SKUTypes: closure_8 } = ME);
let SKURecord;
class SKURecord extends tmp2 {
  constructor(arg0) {
    tmp = new SKURecord(new.target, new.target, global);
    // ThrowIfThisInitialized (0x7c)
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
    fromServer = closure_3.createFromServer(id.application);
  }
  obj[3] = fromServer;
  let prop = id.eligible_payment_gateways;
  if (prop == null) {
    prop = null;
  }
  obj[4] = prop;
  let google_sku_ids = id.google_sku_ids;
  if (google_sku_ids == null) {
    google_sku_ids = null;
  }
  obj[5] = google_sku_ids;
  ({ product_line: obj[6], name } = id);
  if (name == null) {
    name = "";
  }
  obj[7] = name;
  let tmp6 = null;
  if (null != id.release_date) {
    tmp6 = hooksDefault(id.release_date);
  }
  obj[8] = tmp6;
  let tmp9 = null;
  if (null != id.preorder_release_at) {
    tmp9 = hooksDefault(id.preorder_release_at);
  }
  obj[9] = tmp9;
  ({ preorder_approximate_release_date: obj[10], summary: obj[11] } = id);
  obj[12] = new Set(id.features);
  const set = new Set(id.features);
  const tmp = SKURecord;
  obj[13] = new Set(id.genres);
  ({ dependent_sku_id: obj[14], manifests: obj[15], available_regions: obj[16], access_type: obj[17], system_requirements: obj[18], content_rating: obj[19], content_rating_agency: obj[20], legal_notice: obj[21] } = id);
  let tmp14 = null;
  if (null != price) {
    obj = { amount: null, currency: null, saleAmount: null, salePercentage: null, premium: null };
    ({ amount: obj2[0], currency: obj2[1], sale_amount: obj2[2], sale_percentage: obj2[3], premium: obj2[4] } = price);
    tmp14 = obj;
  }
  obj[22] = tmp14;
  obj[23] = getPricesFromServerDefault(id.prices);
  let flag = id.premium;
  if (flag == null) {
    flag = false;
  }
  obj[24] = flag;
  obj[25] = id.show_age_gate || false;
  obj[26] = id.restricted || false;
  let str = id.slug;
  if (str == null) {
    str = "";
  }
  obj[27] = str;
  obj[28] = id.exclusive || false;
  let locales = id.locales;
  if (locales == null) {
    locales = ["en-US"];
  }
  obj[29] = locales;
  ({ flags: obj[30], external_purchase_url: obj[31], deleted } = id);
  if (deleted == null) {
    deleted = false;
  }
  obj[32] = deleted;
  let bundled_sku_ids = id.bundled_sku_ids;
  if (bundled_sku_ids == null) {
    bundled_sku_ids = [];
  }
  obj[33] = bundled_sku_ids;
  const bundled_skus = id.bundled_skus;
  let mapped;
  if (bundled_skus != null) {
    mapped = bundled_skus.map((arg0) => closure_9.createFromServer(arg0));
  }
  if (mapped == null) {
    mapped = [];
  }
  obj[34] = mapped;
  obj[35] = transformProfileEffectKeyFrameFromServerDefault(id.tenant_metadata);
  const selected_options = id.selected_options;
  let mapped1;
  if (selected_options != null) {
    mapped1 = selected_options.map((optionName) => ({ optionName: optionName.option_name, optionValue: optionName.option_value }));
  }
  if (mapped1 == null) {
    mapped1 = [];
  }
  obj[36] = mapped1;
  ({ product_id: obj[37], thumbnail_asset_id: obj[38], description: obj[39], orbs_reward: obj[40], eligible_offers } = id);
  if (eligible_offers == null) {
    eligible_offers = [];
  }
  obj[41] = eligible_offers;
  let tmp17 = null;
  if (null != id.preview_asset_paths) {
    obj = { fgStatic: null, fgAnimated: null, bgStatic: null, bgAnimated: null };
    obj[0] = id.preview_asset_paths.fg_static;
    obj[1] = id.preview_asset_paths.fg_animated;
    obj[2] = id.preview_asset_paths.bg_static;
    obj[3] = id.preview_asset_paths.bg_animated;
    tmp17 = obj;
  }
  obj[42] = tmp17;
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
        let obj = { amount: null, currency: null };
        obj[0] = tmp2.amount;
        obj[1] = price.currency;
        return obj;
      }
    }
    if (flag) {
      if (null != price.saleAmount) {
        obj = { amount: null, currency: null };
        ({ saleAmount: obj2[0], currency: obj2[1] } = price);
      }
      return obj;
    }
    obj = { amount: null, currency: null };
    ({ amount: obj[0], currency: obj[1] } = price);
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
    let hasFlagResult = hasFlag /* hasFlag */.hasFlag(this.flags, constants2.AVAILABLE);
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
      hasFlagResult = hasFlag /* hasFlag */.hasFlag(self.flags, constants2.PREMIUM_AND_DISTRIBUTION);
      const obj = hasFlag;
    }
    available = hasFlagResult;
  }
  return available;
};
prototype["isAvailable"] = function isAvailable() {
  return hasFlag /* hasFlag */.hasFlag(this.flags, constants2.AVAILABLE);
};
prototype["isPremiumPerk"] = function isPremiumPerk() {
  const self = this;
  let premium = this.premium;
  if (premium) {
    let hasFlagResult = hasFlag /* hasFlag */.hasFlag(self.flags, constants2.PREMIUM_PURCHASE);
    if (!hasFlagResult) {
      hasFlagResult = tmp(1399).hasFlag(self.flags, tmp3.PREMIUM_AND_DISTRIBUTION);
      const tmpResult = tmp(1399);
    }
    premium = hasFlagResult;
    const obj = hasFlag;
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
const result = require("set").fileFinishedImporting("modules/skus/SKURecord.tsx");

export default SKURecord;