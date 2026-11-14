// === Module 9624: PromotionRecord ===

// Module 9624 (PromotionRecord)
import FlagUtils from "FlagUtils" /* 1406 */;
import Record from "Record" /* 1408 */;
import MarketingComponentRecord from "MarketingComponentRecord" /* 9625 */;

require = fn;
let PromotionRecord;
class PromotionRecord extends tmp2 {
  constructor(arg0) {
    tmp4 = new PromotionRecord(tmp3, tmp2, new.target, new.target, tmp, global);
    ({ id: tmp4.id, trialId: tmp4.trialId, startDate: tmp4.startDate, endDate: tmp4.endDate, outboundRedemptionEndDate: tmp4.outboundRedemptionEndDate, inboundHeaderText: tmp4.inboundHeaderText, inboundBodyText: tmp4.inboundBodyText, inboundHelpCenterLink: tmp4.inboundHelpCenterLink, outboundTitle: tmp4.outboundTitle, outboundRedemptionModalBody: tmp4.outboundRedemptionModalBody, outboundTermsAndConditions: tmp4.outboundTermsAndConditions, outboundRedemptionPageLink: tmp4.outboundRedemptionPageLink, outboundRedemptionUrlFormat: tmp4.outboundRedemptionUrlFormat, flags } = global);
    if (flags == null) {
      flags = 0;
    }
    tmp4.flags = flags;
    prop = global.inboundRestrictedCountries;
    if (prop == null) {
      prop = [];
    }
    tmp4.inboundRestrictedCountries = prop;
    prop1 = global.outboundRestrictedCountries;
    if (prop1 == null) {
      prop1 = [];
    }
    tmp4.outboundRestrictedCountries = prop1;
    allowedCountries = global.allowedCountries;
    if (allowedCountries == null) {
      allowedCountries = [];
    }
    tmp4.allowedCountries = allowedCountries;
    BLOCKLIST = global.countryListMode;
    if (BLOCKLIST == null) {
      tmp5 = closure_0;
      tmp6 = closure_1;
      BLOCKLIST = closure_0(closure_1[2]).CountryListMode.BLOCKLIST;
    }
    tmp4.countryListMode = BLOCKLIST;
    ({ promotionType: tmp4.promotionType, partnerId: tmp4.partnerId, marketingComponents: tmp4.marketingComponents, rewardSkuIds: tmp4.rewardSkuIds, bogoRewardEnabled } = global);
    if (bogoRewardEnabled == null) {
      bogoRewardEnabled = false;
    }
    tmp4.bogoRewardEnabled = bogoRewardEnabled;
    boostBogoMaxCredits = global.boostBogoMaxCredits;
    if (boostBogoMaxCredits == null) {
      boostBogoMaxCredits = null;
    }
    tmp4.boostBogoMaxCredits = boostBogoMaxCredits;
    ({ promotionKey: tmp4.promotionKey, priority } = global);
    if (priority == null) {
      tmp8 = closure_0;
      tmp9 = closure_1;
      priority = closure_0(closure_1[2]).FALLBACK_PROMOTION_PRIORITY;
    }
    tmp4.priority = priority;
    return tmp4;
  }
}
const prototype = PromotionRecord.prototype;
PromotionRecord["createFromServer"] = function createFromServer(id) {
  const date = new Date(id.start_date);
  const date1 = new Date(id.end_date);
  const metadata = id.metadata;
  let boost_bogo;
  if (metadata != null) {
    const premium_promotion = metadata.premium_promotion;
    if (premium_promotion != null) {
      const reward_config = premium_promotion.reward_config;
      if (reward_config != null) {
        boost_bogo = reward_config.boost_bogo;
      }
    }
  }
  let FALLBACK_PROMOTION_PRIORITY = id.priority;
  if (FALLBACK_PROMOTION_PRIORITY == null) {
    FALLBACK_PROMOTION_PRIORITY = date(date1[2]).FALLBACK_PROMOTION_PRIORITY;
  }
  const obj = { id: id.id, trialId: id.trial_id, startDate: date, endDate: date1, outboundRedemptionEndDate: null, inboundHeaderText: null, inboundBodyText: null, inboundHelpCenterLink: null, outboundTitle: null, outboundRedemptionModalBody: null, outboundTermsAndConditions: null, outboundRedemptionPageLink: null, outboundRedemptionUrlFormat: null, flags: null, inboundRestrictedCountries: null, outboundRestrictedCountries: null, allowedCountries: null, countryListMode: null, promotionType: null, partnerId: null, marketingComponents: null, rewardSkuIds: null, bogoRewardEnabled: null, boostBogoMaxCredits: null, promotionKey: null, priority: null };
  let date2 = null;
  if (null != id.outbound_redemption_end_date) {
    const _Date = Date;
    date2 = new Date(id.outbound_redemption_end_date);
  }
  obj.outboundRedemptionEndDate = date2;
  let str = id.inbound_header_text;
  if (str == null) {
    str = "";
  }
  obj.inboundHeaderText = str;
  let str2 = id.inbound_body_text;
  if (str2 == null) {
    str2 = "";
  }
  obj.inboundBodyText = str2;
  let str3 = id.inbound_help_center_link;
  if (str3 == null) {
    str3 = "";
  }
  obj.inboundHelpCenterLink = str3;
  let str4 = id.outbound_title;
  if (str4 == null) {
    str4 = "";
  }
  obj.outboundTitle = str4;
  let str5 = id.outbound_redemption_modal_body;
  if (str5 == null) {
    str5 = "";
  }
  obj.outboundRedemptionModalBody = str5;
  let str6 = id.outbound_terms_and_conditions;
  if (str6 == null) {
    str6 = "";
  }
  obj.outboundTermsAndConditions = str6;
  let str7 = id.outbound_redemption_page_link;
  if (str7 == null) {
    str7 = "";
  }
  obj.outboundRedemptionPageLink = str7;
  let str8 = id.outbound_redemption_url_format;
  if (str8 == null) {
    str8 = "";
  }
  obj.outboundRedemptionUrlFormat = str8;
  ({ flags: obj.flags, inbound_restricted_countries: obj.inboundRestrictedCountries, outbound_restricted_countries: obj.outboundRestrictedCountries, allowed_countries } = id);
  if (allowed_countries == null) {
    allowed_countries = [];
  }
  obj.allowedCountries = allowed_countries;
  let BLOCKLIST = id.country_list_mode;
  if (BLOCKLIST == null) {
    BLOCKLIST = date(date1[2]).CountryListMode.BLOCKLIST;
  }
  obj.countryListMode = BLOCKLIST;
  ({ promotion_type: obj.promotionType, partner_id } = id);
  if (partner_id == null) {
    partner_id = null;
  }
  obj.partnerId = partner_id;
  let marketing_components = id.marketing_components;
  if (marketing_components == null) {
    marketing_components = [];
  }
  obj.marketingComponents = marketing_components.map((item) => MarketingComponentRecord.createFromServer(item, { startDate: date, endDate: date1, priority: FALLBACK_PROMOTION_PRIORITY }));
  const metadata2 = id.metadata;
  let reward_sku_ids;
  if (metadata2 != null) {
    const premium_promotion2 = metadata2.premium_promotion;
    if (premium_promotion2 != null) {
      reward_sku_ids = premium_promotion2.reward_sku_ids;
    }
  }
  if (reward_sku_ids == null) {
    const metadata3 = id.metadata;
    let reward_sku_ids1;
    if (metadata3 != null) {
      const gift_promotion = metadata3.gift_promotion;
      if (gift_promotion != null) {
        reward_sku_ids1 = gift_promotion.reward_sku_ids;
      }
    }
    reward_sku_ids = reward_sku_ids1;
  }
  if (reward_sku_ids == null) {
    reward_sku_ids = [];
  }
  obj.rewardSkuIds = reward_sku_ids;
  const metadata4 = id.metadata;
  let enabled;
  if (metadata4 != null) {
    const premium_promotion3 = metadata4.premium_promotion;
    if (premium_promotion3 != null) {
      const reward_config2 = premium_promotion3.reward_config;
      if (reward_config2 != null) {
        const bogo = reward_config2.bogo;
        if (bogo != null) {
          enabled = bogo.enabled;
        }
      }
    }
  }
  obj.bogoRewardEnabled = true === enabled;
  let enabled1;
  if (boost_bogo != null) {
    enabled1 = boost_bogo.enabled;
  }
  let tmp15 = null;
  if (true === enabled1) {
    let max_credits_per_user = boost_bogo.max_credits_per_user;
    if (max_credits_per_user == null) {
      max_credits_per_user = null;
    }
    tmp15 = max_credits_per_user;
  }
  obj.boostBogoMaxCredits = tmp15;
  let str9 = id.promotion_key;
  if (str9 == null) {
    str9 = "";
  }
  obj.promotionKey = str9;
  obj.priority = FALLBACK_PROMOTION_PRIORITY;
  return new PromotionRecord(obj);
};
Object.defineProperty(prototype, "isBogo", {
  get: function isBogo() {
    return this.promotionType === require("constants").PromotionTypes.BOGO;
  },
  set: undefined
});
Object.defineProperty(prototype, "isMarketingMoment", {
  get: function isMarketingMoment() {
    return this.promotionType === require("constants").PromotionTypes.MARKETING_MOMENT;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasBogoReward", {
  get: function hasBogoReward() {
    return this.bogoRewardEnabled;
  },
  set: undefined
});
prototype["hasFlag"] = function hasFlag(IS_ANIMATED) {
  return FlagUtils.hasFlag(this.flags, IS_ANIMATED);
};
prototype["isCountryRestricted"] = function isCountryRestricted(arg0) {
  const self = this;
  if (this.countryListMode === require("constants").CountryListMode.ALLOWLIST) {
    const allowedCountries = self.allowedCountries;
    return !allowedCountries.includes(arg0);
  } else {
    const promotionType = self.promotionType;
    if (require("constants").PromotionTypes.THIRD_PARTY_INBOUND !== promotionType) {
      if (require("constants").PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT !== promotionType) {
        if (require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND !== promotionType) {
          if (require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING !== promotionType) {
            return false;
          }
        }
        const outboundRestrictedCountries = self.outboundRestrictedCountries;
        return outboundRestrictedCountries.includes(arg0);
      }
    }
    const inboundRestrictedCountries = self.inboundRestrictedCountries;
    return inboundRestrictedCountries.includes(arg0);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("records/PromotionRecord.tsx");

export default PromotionRecord;