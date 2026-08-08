// discord_app/modules/premium/promotions/PromotionsStore.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import createFromServer from "createFromServer";
import closure_5 from "createFromServer";
import { PersistedStore } from "initialize";
import { comparePriorityDescending } from "selectActiveMarketingComponent.tsx";

const require = arg1;
function createEmptyPromotionsByType() {
  return { [closure_0(closure_2[3]).PromotionTypes.THIRD_PARTY]: {}, [closure_0(closure_2[3]).PromotionTypes.BOGO]: {}, [closure_0(closure_2[3]).PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT]: {}, [closure_0(closure_2[3]).PromotionTypes.MARKETING_MOMENT]: {}, [closure_0(closure_2[3]).PromotionTypes.THIRD_PARTY_INBOUND]: {}, [closure_0(closure_2[3]).PromotionTypes.THIRD_PARTY_OUTBOUND]: {}, [closure_0(closure_2[3]).PromotionTypes.GIFT_PROMOTION]: {}, [closure_0(closure_2[3]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]: {} };
}
function getLatestActiveOutboundPromotionStartDate() {
  let startDate = null;
  const values = Object.values(dependencyMap[require(undefined, 7346) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]);
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
  let c15 = value;
}
let closure_6 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
let c8 = null;
let c9 = false;
let c10 = null;
let c11 = false;
let c12 = null;
let c13 = null;
let closure_14 = createEmptyPromotionsByType();
let c15 = null;
let map = new Map();
let c17 = null;
let closure_18 = [];
let c19 = false;
class PromotionsStore extends PersistedStore {
}
const prototype = PromotionsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    let closure_6 = arg0;
  }
  this.waitFor(handleConnectionClosedOrResumed);
  const items = [handleConnectionClosedOrResumed];
  this.syncWith(items, initializeFromUserSettings);
};
Object.defineProperty(prototype, "outboundPromotions", {
  get: function outboundPromotions() {
    return Object.values(dependencyMap[require(undefined, 7346) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]);
  },
  set: undefined
});
Object.defineProperty(prototype, "outboundRecurringPromotions", {
  get: function outboundRecurringPromotions() {
    return Object.values(dependencyMap[require(undefined, 7346) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
  },
  set: undefined
});
Object.defineProperty(prototype, "lastSeenOutboundPromotionStartDate", {
  get: function lastSeenOutboundPromotionStartDate() {
    return closure_6.lastSeenOutboundPromotionStartDate;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastDismissedOutboundPromotionStartDate", {
  get: function lastDismissedOutboundPromotionStartDate(arg0) {
    return c15;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActivePromotions", {
  get: function lastFetchedActivePromotions() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActivePromotionsLocale", {
  get: function lastFetchedActivePromotionsLocale() {
    return c13;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingActivePromotions", {
  get: function isFetchingActivePromotions() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchedConsumedInboundPromotionId", {
  get: function hasFetchedConsumedInboundPromotionId() {
    return closure_6.hasFetchedConsumedInboundPromotionId;
  },
  set: undefined
});
Object.defineProperty(prototype, "consumedInboundPromotionId", {
  get: function consumedInboundPromotionId() {
    return closure_6.consumedInboundPromotionId;
  },
  set: undefined
});
Object.defineProperty(prototype, "bogoPromotion", {
  get: function bogoPromotion(arg0) {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingActiveBogoPromotion", {
  get: function isFetchingActiveBogoPromotion() {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActiveBogoPromotion", {
  get: function lastFetchedActiveBogoPromotion() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "promotionsByType", {
  get: function promotionsByType() {
    return closure_14;
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
  return closure_6;
};
prototype["getMarketingComponentByType"] = function getMarketingComponentByType(GIFT_CUSTOMIZATION_BANNER) {
  let componentType;
  if (_null != null) {
    componentType = _null.componentType;
  }
  if (componentType === GIFT_CUSTOMIZATION_BANNER) {
    let tmp4Result = _null;
  } else {
    let items = map.get(GIFT_CUSTOMIZATION_BANNER);
    if (items == null) {
      items = [];
    }
    const _Date = Date;
    const date = new Date();
    tmp4Result = comparePriorityDescending(items, date);
    const tmp4 = comparePriorityDescending;
  }
  return tmp4Result;
};
prototype["hasPromotion"] = function hasPromotion(closure_0) {
  let values = Object.values(closure_14);
  return values.some((arg0) => {
    const values = Object.values(arg0);
    return values.some((promotionKey) => promotionKey.promotionKey === closure_0);
  });
};
prototype["getPromotionsByPartner"] = function getPromotionsByPartner(arg0) {
  const _require = arg0;
  const obj = { oneTime: null, recurring: null };
  let values = Object.values(dependencyMap[_require(undefined, 7346).PromotionTypes.THIRD_PARTY_OUTBOUND]);
  obj[0] = values.filter((partnerId) => partnerId.partnerId === closure_0);
  values = Object.values(dependencyMap[_require(undefined, 7346).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
  obj[1] = values.filter((partnerId) => partnerId.partnerId === closure_0);
  return obj;
};
prototype["getGiftPromotion"] = function getGiftPromotion() {
  const tmp = dependencyMap[require(undefined, 7346) /* CountryListMode */.PromotionTypes.GIFT_PROMOTION];
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
  const tmp = dependencyMap[require(undefined, 7346) /* CountryListMode */.PromotionTypes.MARKETING_MOMENT];
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
  const values = Object.values(dependencyMap[date(undefined, 7346).PromotionTypes.MARKETING_MOMENT]);
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
    return closure_18;
  },
  set: undefined
});
Object.defineProperty(prototype, "claimedOutboundPromotionCodesLoaded", {
  get: function claimedOutboundPromotionCodesLoaded() {
    return c19;
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
    let closure_14 = createEmptyPromotionsByType();
    const map = new Map();
    let c17 = null;
    let item = promotions.forEach((id) => {
      let closure_0 = id;
      table[id.promotion_type][id.id] = createFromServer.createFromServer(id);
      const marketing_components = id.marketing_components;
      if (marketing_components != null) {
        const item = marketing_components.forEach((component_type) => {
          let items = outer1_16.get(component_type.component_type);
          if (items == null) {
            items = [];
          }
          items.push(outer1_5.createFromServer(component_type, closure_0));
          const result = outer1_16.set(component_type.component_type, items);
        });
      }
    });
    let closure_12 = Date.now();
    let c11 = false;
    if (!closure_6.hasFetchedConsumedInboundPromotionId) {
      closure_6.hasFetchedConsumedInboundPromotionId = true;
      closure_6.consumedInboundPromotionId = promotions.consumedInboundPromotionId;
    }
  },
  ACTIVE_PROMOTIONS_FETCH: function handleActivePromotionsFetchStart(locale) {
    let c11 = true;
    locale = locale.locale;
  },
  ACTIVE_PROMOTIONS_FETCH_FAIL: function handleActivePromotionsFetchFail() {
    let closure_14 = createEmptyPromotionsByType();
    const map = new Map();
    let c17 = null;
    let c11 = false;
  },
  ACTIVE_PROMOTIONS_CLEAR: function handleActivePromotionsClear() {
    let closure_14 = createEmptyPromotionsByType();
    const map = new Map();
    let c17 = null;
    let c8 = null;
    let c11 = false;
    let closure_12 = Date.now();
  },
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function handleActiveBogoPromotionFetchSuccess(activePromotion) {
    let endDate;
    let startDate;
    activePromotion = activePromotion.activePromotion;
    const obj = { id: activePromotion.id, startDate: startDate.toISOString(), endDate: endDate.toISOString() };
    ({ startDate, endDate } = activePromotion);
    let closure_10 = Date.now();
    let c9 = false;
  },
  ACTIVE_BOGO_PROMOTION_FETCH: function handleActiveBogoPromotionFetchStart() {
    let c9 = true;
  },
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function handleActiveBogoPromotionFetchFail() {
    let c8 = null;
    let c9 = false;
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function handleDismissOutboundPromotionNotice() {
    if (0 === Object.values(dependencyMap[require(undefined, 7346) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        let c15 = tmp2;
      }
    }
  },
  OUTBOUND_PROMOTIONS_SEEN: function handleOutboundPromotionsSeen() {
    if (0 === Object.values(dependencyMap[require(undefined, 7346) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        let c15 = tmp2;
        closure_6.lastSeenOutboundPromotionStartDate = tmp2;
      }
    }
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function handleClaimedOutboundPromotionCodesFetchSuccess(claimedOutboundPromotionCodes) {
    let closure_18 = claimedOutboundPromotionCodes.claimedOutboundPromotionCodes;
    let c19 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function handleClaimedOutboundPromotionCodesFetchFail() {
    let closure_18 = [];
    let c19 = true;
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
    let closure_6 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
    let c11 = false;
    let c12 = null;
    let c9 = false;
    let c10 = null;
    let closure_14 = createEmptyPromotionsByType();
    let c8 = null;
    map.clear();
    let c17 = null;
    let closure_18 = [];
    let c19 = false;
  },
  PREMIUM_MARKETING_PREVIEW: function handlePremiumMarketingPreview(data) {
    data = data.data;
    let closure_17 = closure_5.createFromServer(data, data.promotion);
    if (null != data.promotion) {
      dependencyMap[data.promotion.promotion_type][data.promotion.id] = createFromServer.createFromServer(data.promotion);
    }
  }
});
let result = require("createFromServer").fileFinishedImporting("modules/premium/promotions/PromotionsStore.tsx");

export default promotionsStore;