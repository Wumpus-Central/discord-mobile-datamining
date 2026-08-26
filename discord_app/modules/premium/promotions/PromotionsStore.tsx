// discord_app/modules/premium/promotions/PromotionsStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import closure_3 from "../../user_settings/UserSettingsProtoStore.tsx";
import closure_4 from "../../../records/PromotionRecord.tsx";
import closure_5 from "../../../stores/UserStore.tsx";
import closure_6 from "MarketingComponentRecord.tsx";

const require = arg1;
function createEmptyPromotionsByType() {
  return { [closure_0(closure_2[4]).PromotionTypes.THIRD_PARTY]: {}, [closure_0(closure_2[4]).PromotionTypes.BOGO]: {}, [closure_0(closure_2[4]).PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT]: {}, [closure_0(closure_2[4]).PromotionTypes.MARKETING_MOMENT]: {}, [closure_0(closure_2[4]).PromotionTypes.THIRD_PARTY_INBOUND]: {}, [closure_0(closure_2[4]).PromotionTypes.THIRD_PARTY_OUTBOUND]: {}, [closure_0(closure_2[4]).PromotionTypes.GIFT_PROMOTION]: {}, [closure_0(closure_2[4]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]: {} };
}
function getLatestActiveOutboundPromotionStartDate() {
  let startDate = null;
  const values = Object.values(dependencyMap[require(undefined, 7581) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]);
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
  c16 = value;
}
let closure_7 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
let c9 = null;
let c10 = false;
let c11 = null;
let c12 = false;
let c13 = null;
let c14 = null;
let closure_15 = createEmptyPromotionsByType();
let c16 = null;
let map = new Map();
let c18 = null;
let closure_19 = [];
let c20 = false;
const PersistedStore = initializeDefault.PersistedStore;
class PromotionsStore extends PersistedStore {
}
const prototype = PromotionsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_7 = arg0;
  }
  this.waitFor(closure_3, closure_5);
  const items = [closure_3];
  this.syncWith(items, initializeFromUserSettings);
};
Object.defineProperty(prototype, "outboundPromotions", {
  get: function outboundPromotions() {
    return Object.values(dependencyMap[require(undefined, 7581) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]);
  },
  set: undefined
});
Object.defineProperty(prototype, "outboundRecurringPromotions", {
  get: function outboundRecurringPromotions() {
    return Object.values(dependencyMap[require(undefined, 7581) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
  },
  set: undefined
});
Object.defineProperty(prototype, "lastSeenOutboundPromotionStartDate", {
  get: function lastSeenOutboundPromotionStartDate() {
    return closure_7.lastSeenOutboundPromotionStartDate;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastDismissedOutboundPromotionStartDate", {
  get: function lastDismissedOutboundPromotionStartDate(arg0) {
    return c16;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActivePromotions", {
  get: function lastFetchedActivePromotions() {
    return c13;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActivePromotionsLocale", {
  get: function lastFetchedActivePromotionsLocale() {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingActivePromotions", {
  get: function isFetchingActivePromotions() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchedConsumedInboundPromotionId", {
  get: function hasFetchedConsumedInboundPromotionId() {
    return closure_7.hasFetchedConsumedInboundPromotionId;
  },
  set: undefined
});
Object.defineProperty(prototype, "consumedInboundPromotionId", {
  get: function consumedInboundPromotionId() {
    return closure_7.consumedInboundPromotionId;
  },
  set: undefined
});
Object.defineProperty(prototype, "bogoPromotion", {
  get: function bogoPromotion(arg0) {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingActiveBogoPromotion", {
  get: function isFetchingActiveBogoPromotion() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActiveBogoPromotion", {
  get: function lastFetchedActiveBogoPromotion() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "promotionsByType", {
  get: function promotionsByType() {
    return closure_15;
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
  closure_0 = arg1;
  const values = Object.values(dependencyMap[arg0]);
  return values.find((promotionKey) => promotionKey.promotionKey === closure_0);
};
prototype["getState"] = function getState() {
  return closure_7;
};
prototype["getMarketingComponentByType"] = function getMarketingComponentByType(GIFT_CUSTOMIZATION_BANNER) {
  let componentType;
  if (_null != null) {
    componentType = _null.componentType;
  }
  if (componentType === GIFT_CUSTOMIZATION_BANNER) {
    return _null;
  } else {
    const currentUser2 = currentUser.getCurrentUser();
    const _Date = Date;
    const date = new Date();
    let items = map.get(GIFT_CUSTOMIZATION_BANNER);
    if (items == null) {
      items = [];
    }
    return date(7582)(items, date, (isIncludedInRollout) => {
      let isIncludedInRolloutResult = null != closure_0;
      if (isIncludedInRolloutResult) {
        isIncludedInRolloutResult = isIncludedInRollout.isIncludedInRollout(tmp.id, date);
      }
      return isIncludedInRolloutResult;
    });
  }
};
prototype["hasPromotion"] = function hasPromotion(closure_0) {
  let values = Object.values(closure_15);
  return values.some((arg0) => {
    const values = Object.values(arg0);
    return values.some((promotionKey) => promotionKey.promotionKey === closure_0);
  });
};
prototype["getPromotionsByPartner"] = function getPromotionsByPartner(arg0) {
  const _require = arg0;
  const obj = { oneTime: null, recurring: null };
  let values = Object.values(dependencyMap[_require(undefined, 7581).PromotionTypes.THIRD_PARTY_OUTBOUND]);
  obj[0] = values.filter((partnerId) => partnerId.partnerId === closure_0);
  values = Object.values(dependencyMap[_require(undefined, 7581).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
  obj[1] = values.filter((partnerId) => partnerId.partnerId === closure_0);
  return obj;
};
prototype["getGiftPromotion"] = function getGiftPromotion() {
  const tmp = dependencyMap[require(undefined, 7581) /* CountryListMode */.PromotionTypes.GIFT_PROMOTION];
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
  const tmp = dependencyMap[require(undefined, 7581) /* CountryListMode */.PromotionTypes.MARKETING_MOMENT];
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
  const values = Object.values(dependencyMap[date(undefined, 7581).PromotionTypes.MARKETING_MOMENT]);
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
    return closure_19;
  },
  set: undefined
});
Object.defineProperty(prototype, "claimedOutboundPromotionCodesLoaded", {
  get: function claimedOutboundPromotionCodesLoaded() {
    return c20;
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
const promotionsStore = new PromotionsStore(dispatcherDefault, {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: function handleActivePromotionsFetchSuccess(promotions) {
    promotions = promotions.promotions;
    closure_15 = createEmptyPromotionsByType();
    map = new Map();
    c18 = null;
    let item = promotions.forEach((id) => {
      const fromServer = closure_4.createFromServer(id);
      table[id.promotion_type][id.id] = fromServer;
      const marketing_components = id.marketing_components;
      if (marketing_components != null) {
        const item = marketing_components.forEach((component_type) => {
          let items = closure_1_17.get(component_type.component_type);
          if (items == null) {
            items = [];
          }
          items.push(closure_1_6.createFromServer(component_type, fromServer));
          const result = closure_1_17.set(component_type.component_type, items);
        });
      }
    });
    closure_13 = Date.now();
    c12 = false;
    if (!closure_7.hasFetchedConsumedInboundPromotionId) {
      closure_7.hasFetchedConsumedInboundPromotionId = true;
      closure_7.consumedInboundPromotionId = promotions.consumedInboundPromotionId;
    }
  },
  ACTIVE_PROMOTIONS_FETCH: function handleActivePromotionsFetchStart(locale) {
    c12 = true;
    locale = locale.locale;
  },
  ACTIVE_PROMOTIONS_FETCH_FAIL: function handleActivePromotionsFetchFail() {
    closure_15 = createEmptyPromotionsByType();
    map = new Map();
    c18 = null;
    c12 = false;
  },
  ACTIVE_PROMOTIONS_CLEAR: function handleActivePromotionsClear() {
    closure_15 = createEmptyPromotionsByType();
    map = new Map();
    c18 = null;
    c9 = null;
    c12 = false;
    closure_13 = Date.now();
  },
  ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS: function handleActiveBogoPromotionFetchSuccess(activePromotion) {
    activePromotion = activePromotion.activePromotion;
    const obj = { id: activePromotion.id, startDate: startDate.toISOString(), endDate: endDate.toISOString() };
    ({ startDate, endDate } = activePromotion);
    closure_11 = Date.now();
    c10 = false;
  },
  ACTIVE_BOGO_PROMOTION_FETCH: function handleActiveBogoPromotionFetchStart() {
    c10 = true;
  },
  ACTIVE_BOGO_PROMOTION_FETCH_FAIL: function handleActiveBogoPromotionFetchFail() {
    c9 = null;
    c10 = false;
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function handleDismissOutboundPromotionNotice() {
    if (0 === Object.values(dependencyMap[require(undefined, 7581) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        closure_16 = tmp2;
      }
    }
  },
  OUTBOUND_PROMOTIONS_SEEN: function handleOutboundPromotionsSeen() {
    if (0 === Object.values(dependencyMap[require(undefined, 7581) /* CountryListMode */.PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        closure_16 = tmp2;
        closure_7.lastSeenOutboundPromotionStartDate = tmp2;
      }
    }
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function handleClaimedOutboundPromotionCodesFetchSuccess(claimedOutboundPromotionCodes) {
    closure_19 = claimedOutboundPromotionCodes.claimedOutboundPromotionCodes;
    c20 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function handleClaimedOutboundPromotionCodesFetchFail() {
    closure_19 = [];
    c20 = true;
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
    closure_7 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
    c12 = false;
    c13 = null;
    c10 = false;
    c11 = null;
    closure_15 = createEmptyPromotionsByType();
    c9 = null;
    map.clear();
    c18 = null;
    closure_19 = [];
    c20 = false;
  },
  PREMIUM_MARKETING_PREVIEW: function handlePremiumMarketingPreview(data) {
    data = data.data;
    let fromServer = null;
    if (null != data.promotion) {
      fromServer = closure_4.createFromServer(data.promotion);
    }
    closure_18 = closure_6.createFromServer(data, fromServer);
    if (null != fromServer) {
      dependencyMap[fromServer.promotionType][fromServer.id] = fromServer;
    }
  }
});
let result = require("set").fileFinishedImporting("modules/premium/promotions/PromotionsStore.tsx");

export default promotionsStore;