// === Module 6265: createEmptyPromotionsByType ===

// Module 6265 (createEmptyPromotionsByType)
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import createFromServer from "createFromServer";
import closure_4 from "createFromServer";
import { PersistedStore } from "initialize";

const require = arg1;
function createEmptyPromotionsByType() {
  return { [closure_0(closure_1[3]).PromotionTypes.THIRD_PARTY]: {}, [closure_0(closure_1[3]).PromotionTypes.BOGO]: {}, [closure_0(closure_1[3]).PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT]: {}, [closure_0(closure_1[3]).PromotionTypes.MARKETING_MOMENT]: {}, [closure_0(closure_1[3]).PromotionTypes.THIRD_PARTY_INBOUND]: {}, [closure_0(closure_1[3]).PromotionTypes.THIRD_PARTY_OUTBOUND]: {}, [closure_0(closure_1[3]).PromotionTypes.GIFT_PROMOTION]: {}, [closure_0(closure_1[3]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]: {} };
}
function getLatestActiveOutboundPromotionStartDate() {
  let startDate = null;
  const values = Object.values(dependencyMap[require(undefined, 6267) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]);
  for (const item10019 of values) {
    let tmp3 = item10019;
    let tmp4 = startDate;
    let tmp5 = null == startDate;
    if (!tmp5) {
      let tmp6 = item10019;
      let tmp7 = startDate;
      tmp5 = tmp3.startDate > startDate;
    }
    if (tmp5) {
      let tmp8 = item10019;
      startDate = tmp3.startDate;
    }
    continue;
  }
  let toISOStringResult;
  if (startDate != null) {
    toISOStringResult = startDate.toISOString();
  }
  if (toISOStringResult == null) {
    toISOStringResult = null;
  }
  return toISOStringResult;
}
function initializeFromUserSettings() {
  const userContent = settings.settings.userContent;
  let value;
  if (userContent != null) {
    if (userContent.lastDismissedOutboundPromotionStartDate != null) {
      value = iter.value;
    }
  }
  if (value == null) {
    value = null;
  }
  let c14 = value;
}
let closure_5 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
let c7 = null;
let c8 = false;
let c9 = null;
let c10 = false;
let c11 = null;
let c12 = null;
let closure_13 = createEmptyPromotionsByType();
let c14 = null;
let map = new Map();
let closure_16 = [];
let c17 = false;
class PromotionsStore extends PersistedStore {
}
const prototype = PromotionsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    let closure_5 = arg0;
  }
  this.waitFor(handleConnectionClosedOrResumed);
  const items = [handleConnectionClosedOrResumed];
  this.syncWith(items, initializeFromUserSettings);
};
Object.defineProperty(prototype, "outboundPromotions", {
  get: function outboundPromotions() {
    return Object.values(dependencyMap[require(undefined, 6267) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]);
  },
  set: undefined
});
Object.defineProperty(prototype, "outboundRecurringPromotions", {
  get: function outboundRecurringPromotions() {
    return Object.values(dependencyMap[require(undefined, 6267) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
  },
  set: undefined
});
Object.defineProperty(prototype, "lastSeenOutboundPromotionStartDate", {
  get: function lastSeenOutboundPromotionStartDate() {
    return closure_5.lastSeenOutboundPromotionStartDate;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastDismissedOutboundPromotionStartDate", {
  get: function lastDismissedOutboundPromotionStartDate(arg0) {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActivePromotions", {
  get: function lastFetchedActivePromotions() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActivePromotionsLocale", {
  get: function lastFetchedActivePromotionsLocale() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingActivePromotions", {
  get: function isFetchingActivePromotions() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchedConsumedInboundPromotionId", {
  get: function hasFetchedConsumedInboundPromotionId() {
    return closure_5.hasFetchedConsumedInboundPromotionId;
  },
  set: undefined
});
Object.defineProperty(prototype, "consumedInboundPromotionId", {
  get: function consumedInboundPromotionId() {
    return closure_5.consumedInboundPromotionId;
  },
  set: undefined
});
Object.defineProperty(prototype, "bogoPromotion", {
  get: function bogoPromotion(arg0) {
    return c7;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingActiveBogoPromotion", {
  get: function isFetchingActiveBogoPromotion() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActiveBogoPromotion", {
  get: function lastFetchedActiveBogoPromotion() {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "promotionsByType", {
  get: function promotionsByType() {
    return closure_13;
  },
  set: undefined
});
prototype["getPromotionByTypeAndId"] = function getPromotionByTypeAndId(MARKETING_MOMENT, promotionId) {
  let tmp2;
  if (dependencyMap[MARKETING_MOMENT] != null) {
    tmp2 = tmp[promotionId];
  }
  return tmp2;
};
prototype["getPromotionByTypeAndKey"] = function getPromotionByTypeAndKey(arg0, arg1) {
  let closure_0 = arg1;
  const values = Object.values(dependencyMap[arg0]);
  return values.find((promotionKey) => promotionKey.promotionKey === closure_0);
};
prototype["getState"] = function getState() {
  return closure_5;
};
prototype["getMarketingComponentByType"] = function getMarketingComponentByType(GIFT_CUSTOMIZATION_BANNER) {
  let value = map.get(GIFT_CUSTOMIZATION_BANNER);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["hasPromotion"] = function hasPromotion(closure_0) {
  let values = Object.values(closure_13);
  return values.some((arg0) => {
    const values = Object.values(arg0);
    return values.some((promotionKey) => promotionKey.promotionKey === closure_0);
  });
};
prototype["getPromotionsByPartner"] = function getPromotionsByPartner(arg0) {
  const _require = arg0;
  const obj = { oneTime: null, recurring: null };
  let values = Object.values(dependencyMap[_require(undefined, 6267).PromotionTypes.THIRD_PARTY_OUTBOUND]);
  obj[0] = values.filter((partnerId) => partnerId.partnerId === closure_0);
  values = Object.values(dependencyMap[_require(undefined, 6267).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
  obj[1] = values.filter((partnerId) => partnerId.partnerId === closure_0);
  return obj;
};
prototype["getGiftPromotion"] = function getGiftPromotion() {
  const tmp = dependencyMap[require(undefined, 6267) /* CountryListMode */.PromotionTypes.GIFT_PROMOTION];
  const keys = Object.keys(tmp);
  let tmp2 = null;
  if (0 !== keys.length) {
    tmp2 = tmp[keys[0]];
  }
  return tmp2;
};
prototype["getGiftPromotionRewardSkuIds"] = function getGiftPromotionRewardSkuIds() {
  const giftPromotion = this.getGiftPromotion();
  let rewardSkuIds;
  if (giftPromotion != null) {
    rewardSkuIds = giftPromotion.rewardSkuIds;
  }
  if (rewardSkuIds == null) {
    rewardSkuIds = [];
  }
  return rewardSkuIds;
};
prototype["getMarketingMomentPromotion"] = function getMarketingMomentPromotion() {
  const tmp = dependencyMap[require(undefined, 6267) /* CountryListMode */.PromotionTypes.MARKETING_MOMENT];
  const keys = Object.keys(tmp);
  if (0 === keys.length) {
    return null;
  } else {
    const _Date = Date;
    const date = new Date();
    let tmp7 = null;
    if (tmp[keys[0]].endDate >= date) {
      tmp7 = tmp2;
    }
    return tmp7;
  }
};
prototype["getMarketingMomentRewardSkuIds"] = function getMarketingMomentRewardSkuIds() {
  const marketingMomentPromotion = this.getMarketingMomentPromotion();
  let rewardSkuIds;
  if (marketingMomentPromotion != null) {
    rewardSkuIds = marketingMomentPromotion.rewardSkuIds;
  }
  if (rewardSkuIds == null) {
    rewardSkuIds = [];
  }
  return rewardSkuIds;
};
prototype["getActiveBogoRewardPromotion"] = function getActiveBogoRewardPromotion() {
  const date = new Date();
  const values = Object.values(dependencyMap[date(undefined, 6267).PromotionTypes.MARKETING_MOMENT]);
  let found = values.find((hasBogoReward) => {
    hasBogoReward = hasBogoReward.hasBogoReward;
    if (hasBogoReward) {
      hasBogoReward = hasBogoReward.endDate >= date;
    }
    return hasBogoReward;
  });
  if (found == null) {
    found = null;
  }
  return found;
};
Object.defineProperty(prototype, "claimedOutboundPromotionCodes", {
  get: function claimedOutboundPromotionCodes() {
    return closure_16;
  },
  set: undefined
});
Object.defineProperty(prototype, "claimedOutboundPromotionCodesLoaded", {
  get: function claimedOutboundPromotionCodesLoaded() {
    return c17;
  },
  set: undefined
});
PromotionsStore.displayName = "PromotionsStore";
PromotionsStore.persistKey = "PromotionsPersistedStore";
let items = [
  (arg0) => {
    try {
      delete tmp[tmp2];
      return arg0;
    } catch (err) {
    }
  }
];
PromotionsStore.migrations = items;
const promotionsStore = new PromotionsStore(require("dispatcher"), {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: function handleActivePromotionsFetchSuccess(promotions) {
    promotions = promotions.promotions;
    let closure_13 = createEmptyPromotionsByType();
    const map = new Map();
    let item = promotions.forEach((id) => {
      table[id.promotion_type][id.id] = createFromServer.createFromServer(id);
      const marketing_components = id.marketing_components;
      if (marketing_components != null) {
        const item = marketing_components.forEach((component_type) => {
          const result = closure_15.set(component_type.component_type, closure_4.createFromServer(component_type));
        });
      }
    });
    let closure_11 = Date.now();
    let c10 = false;
    if (!closure_5.hasFetchedConsumedInboundPromotionId) {
      closure_5.hasFetchedConsumedInboundPromotionId = true;
      closure_5.consumedInboundPromotionId = promotions.consumedInboundPromotionId;
    }
  },
  ACTIVE_PROMOTIONS_FETCH: function handleActivePromotionsFetchStart(locale) {
    let c10 = true;
    locale = locale.locale;
  },
  ACTIVE_PROMOTIONS_FETCH_FAIL: function handleActivePromotionsFetchFail() {
    let closure_13 = createEmptyPromotionsByType();
    const map = new Map();
    let c10 = false;
  },
  ACTIVE_PROMOTIONS_CLEAR: function handleActivePromotionsClear() {
    let closure_13 = createEmptyPromotionsByType();
    const map = new Map();
    let c7 = null;
    let c10 = false;
    let closure_11 = Date.now();
  },
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function handleActiveBogoPromotionFetchSuccess(activePromotion) {
    let endDate;
    let startDate;
    activePromotion = activePromotion.activePromotion;
    const obj = { id: activePromotion.id, startDate: startDate.toISOString(), endDate: endDate.toISOString() };
    ({ startDate, endDate } = activePromotion);
    let closure_9 = Date.now();
    let c8 = false;
  },
  ACTIVE_BOGO_PROMOTION_FETCH: function handleActiveBogoPromotionFetchStart() {
    let c8 = true;
  },
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function handleActiveBogoPromotionFetchFail() {
    let c7 = null;
    let c8 = false;
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function handleDismissOutboundPromotionNotice() {
    if (0 === Object.values(dependencyMap[require(undefined, 6267) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        let c14 = tmp2;
      }
    }
  },
  OUTBOUND_PROMOTIONS_SEEN: function handleOutboundPromotionsSeen() {
    if (0 === Object.values(dependencyMap[require(undefined, 6267) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        let c14 = tmp2;
        closure_5.lastSeenOutboundPromotionStartDate = tmp2;
      }
    }
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function handleClaimedOutboundPromotionCodesFetchSuccess(claimedOutboundPromotionCodes) {
    let closure_16 = claimedOutboundPromotionCodes.claimedOutboundPromotionCodes;
    let c17 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function handleClaimedOutboundPromotionCodesFetchFail() {
    let closure_16 = [];
    let c17 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function handleClaimedOutboundPromotionCodeAdd(claimedOutboundPromotionCode) {
    claimedOutboundPromotionCode = claimedOutboundPromotionCode.claimedOutboundPromotionCode;
    if (items.some((promotion) => promotion.promotion.id === claimedOutboundPromotionCode.promotion.id)) {
      return false;
    } else {
      items = [];
      items[HermesBuiltin.arraySpread(items, 0)] = claimedOutboundPromotionCode;
    }
  },
  LOGOUT: function handleLogout() {
    let closure_5 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
    let c10 = false;
    let c11 = null;
    let c8 = false;
    let c9 = null;
    let closure_13 = createEmptyPromotionsByType();
    let c7 = null;
    map.clear();
    let closure_16 = [];
    let c17 = false;
  },
  PREMIUM_MARKETING_PREVIEW: function handlePremiumMarketingPreview(data) {
    data = data.data;
    const fromServer = closure_4.createFromServer(data);
    const result = map.set(fromServer.componentType, fromServer);
    if (null != data.promotion) {
      dependencyMap[data.promotion.promotion_type][data.promotion.id] = createFromServer.createFromServer(data.promotion);
    }
  }
});
let result = require("createFromServer").fileFinishedImporting("modules/premium/promotions/PromotionsStore.tsx");

export default promotionsStore;