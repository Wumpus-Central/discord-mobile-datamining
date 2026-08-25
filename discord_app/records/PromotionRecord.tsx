// === Module 7488: createFromServer ===

// Module 7488 (createFromServer)
import hasFlag from "hasFlag" /* 1403 */;
import toJSDefault from "toJS" /* 1931 */;
import closure_2 from "createFromServer" /* 7489 */;

require = arg1;
toJSDefault;
let PromotionRecord;
class PromotionRecord extends tmp2 {
  constructor(arg0) {
    tmp3 = new PromotionRecord(tmp2, new.target, tmp, new.target, global, PromotionRecord);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp3.id, trialId: tmp3.trialId, startDate: tmp3.startDate, endDate: tmp3.endDate, outboundRedemptionEndDate: tmp3.outboundRedemptionEndDate, inboundHeaderText: tmp3.inboundHeaderText, inboundBodyText: tmp3.inboundBodyText, inboundHelpCenterLink: tmp3.inboundHelpCenterLink, outboundTitle: tmp3.outboundTitle, outboundRedemptionModalBody: tmp3.outboundRedemptionModalBody, outboundTermsAndConditions: tmp3.outboundTermsAndConditions, outboundRedemptionPageLink: tmp3.outboundRedemptionPageLink, outboundRedemptionUrlFormat: tmp3.outboundRedemptionUrlFormat, flags } = global);
    if (flags == null) {
      flags = 0;
    }
    tmp3.flags = flags;
    prop = global.inboundRestrictedCountries;
    if (prop == null) {
      prop = [];
    }
    tmp3.inboundRestrictedCountries = prop;
    prop1 = global.outboundRestrictedCountries;
    if (prop1 == null) {
      prop1 = [];
    }
    tmp3.outboundRestrictedCountries = prop1;
    allowedCountries = global.allowedCountries;
    if (allowedCountries == null) {
      allowedCountries = [];
    }
    tmp3.allowedCountries = allowedCountries;
    BLOCKLIST = global.countryListMode;
    if (BLOCKLIST == null) {
      tmp4 = closure_0;
      tmp5 = closure_1;
      BLOCKLIST = require("CountryListMode").CountryListMode.BLOCKLIST;
    }
    tmp3.countryListMode = BLOCKLIST;
    ({ promotionType: tmp3.promotionType, partnerId: tmp3.partnerId, marketingComponents: tmp3.marketingComponents, rewardSkuIds: tmp3.rewardSkuIds, bogoRewardEnabled } = global);
    if (bogoRewardEnabled == null) {
      bogoRewardEnabled = false;
    }
    tmp3.bogoRewardEnabled = bogoRewardEnabled;
    tmp3.promotionKey = global.promotionKey;
    return tmp3;
  }
}
const prototype = PromotionRecord.prototype;
PromotionRecord["createFromServer"] = function createFromServer(id) {
  const date = new Date(id.start_date);
  const date1 = new Date(id.end_date);
  const obj = { id: id.id, trialId: id.trial_id, startDate: date, endDate: date1, outboundRedemptionEndDate: null, inboundHeaderText: null, inboundBodyText: null, inboundHelpCenterLink: null, outboundTitle: null, outboundRedemptionModalBody: null, outboundTermsAndConditions: null, outboundRedemptionPageLink: null, outboundRedemptionUrlFormat: null, flags: null, inboundRestrictedCountries: null, outboundRestrictedCountries: null, allowedCountries: null, countryListMode: null, promotionType: null, partnerId: null, marketingComponents: null, rewardSkuIds: null, bogoRewardEnabled: null, promotionKey: null };
  let date2 = null;
  if (null != id.outbound_redemption_end_date) {
    const _Date = Date;
    date2 = new Date(id.outbound_redemption_end_date);
  }
  obj[4] = date2;
  let str = id.inbound_header_text;
  if (str == null) {
    str = "";
  }
  obj[5] = str;
  let str2 = id.inbound_body_text;
  if (str2 == null) {
    str2 = "";
  }
  obj[6] = str2;
  let str3 = id.inbound_help_center_link;
  if (str3 == null) {
    str3 = "";
  }
  obj[7] = str3;
  let str4 = id.outbound_title;
  if (str4 == null) {
    str4 = "";
  }
  obj[8] = str4;
  let str5 = id.outbound_redemption_modal_body;
  if (str5 == null) {
    str5 = "";
  }
  obj[9] = str5;
  let str6 = id.outbound_terms_and_conditions;
  if (str6 == null) {
    str6 = "";
  }
  obj[10] = str6;
  let str7 = id.outbound_redemption_page_link;
  if (str7 == null) {
    str7 = "";
  }
  obj[11] = str7;
  let str8 = id.outbound_redemption_url_format;
  if (str8 == null) {
    str8 = "";
  }
  obj[12] = str8;
  ({ flags: obj[13], inbound_restricted_countries: obj[14], outbound_restricted_countries: obj[15], allowed_countries } = id);
  if (allowed_countries == null) {
    allowed_countries = [];
  }
  obj[16] = allowed_countries;
  let BLOCKLIST = id.country_list_mode;
  if (BLOCKLIST == null) {
    BLOCKLIST = date(date1[2]).CountryListMode.BLOCKLIST;
  }
  obj[17] = BLOCKLIST;
  ({ promotion_type: obj[18], partner_id } = id);
  if (partner_id == null) {
    partner_id = null;
  }
  obj[19] = partner_id;
  let marketing_components = id.marketing_components;
  if (marketing_components == null) {
    marketing_components = [];
  }
  obj[20] = marketing_components.map((arg0) => closure_1_2.createFromServer(arg0, { startDate: date, endDate: date1 }));
  const metadata = id.metadata;
  let reward_sku_ids;
  if (metadata != null) {
    const premium_promotion = metadata.premium_promotion;
    if (premium_promotion != null) {
      reward_sku_ids = premium_promotion.reward_sku_ids;
    }
  }
  if (reward_sku_ids == null) {
    const metadata2 = id.metadata;
    let reward_sku_ids1;
    if (metadata2 != null) {
      const gift_promotion = metadata2.gift_promotion;
      if (gift_promotion != null) {
        reward_sku_ids1 = gift_promotion.reward_sku_ids;
      }
    }
    reward_sku_ids = reward_sku_ids1;
  }
  if (reward_sku_ids == null) {
    reward_sku_ids = [];
  }
  obj[21] = reward_sku_ids;
  const metadata3 = id.metadata;
  let enabled;
  if (metadata3 != null) {
    const premium_promotion2 = metadata3.premium_promotion;
    if (premium_promotion2 != null) {
      const reward_config = premium_promotion2.reward_config;
      if (reward_config != null) {
        const bogo = reward_config.bogo;
        if (bogo != null) {
          enabled = bogo.enabled;
        }
      }
    }
  }
  obj[22] = true === enabled;
  let str9 = id.promotion_key;
  if (str9 == null) {
    str9 = "";
  }
  obj[23] = str9;
  return new PromotionRecord(obj);
};
Object.defineProperty(prototype, "isBogo", {
  get: function isBogo() {
    return this.promotionType === require(7515) /* CountryListMode */.PromotionTypes.BOGO;
  },
  set: undefined
});
Object.defineProperty(prototype, "isMarketingMoment", {
  get: function isMarketingMoment() {
    return this.promotionType === require(7515) /* CountryListMode */.PromotionTypes.MARKETING_MOMENT;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasBogoReward", {
  get: function hasBogoReward() {
    return this.bogoRewardEnabled;
  },
  set: undefined
});
prototype["hasFlag"] = function hasFlag(arg0) {
  return hasFlag.hasFlag(this.flags, arg0);
};
prototype["isCountryRestricted"] = function isCountryRestricted(arg0) {
  const self = this;
  if (this.countryListMode === require(7515) /* CountryListMode */.CountryListMode.ALLOWLIST) {
    const allowedCountries = self.allowedCountries;
    return !allowedCountries.includes(arg0);
  } else {
    const promotionType = self.promotionType;
    if (tmp(7515).PromotionTypes.THIRD_PARTY_INBOUND !== promotionType) {
      if (tmp(7515).PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT !== promotionType) {
        if (tmp(7515).PromotionTypes.THIRD_PARTY_OUTBOUND !== promotionType) {
          if (tmp(7515).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING !== promotionType) {
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
const result = require("set").fileFinishedImporting("records/PromotionRecord.tsx");

export default PromotionRecord;