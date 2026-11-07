// === Module 9714: PromotionsStore ===

// Module 9714 (PromotionsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import MarketingSurfaceType from "MarketingSurfaceType" /* 9718 */;
import selectActiveMarketingComponentDefault from "selectActiveMarketingComponent" /* 9757 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import PromotionRecord from "PromotionRecord" /* 9715 */;
import UserStore from "UserStore" /* 1385 */;
import MarketingComponentRecord from "MarketingComponentRecord" /* 9716 */;

require = fn;
function createEmptyPromotionsByType() {
  return { [closure_1_0(closure_1_2[4]).PromotionTypes.THIRD_PARTY]: {}, [closure_1_0(closure_1_2[4]).PromotionTypes.BOGO]: {}, [closure_1_0(closure_1_2[4]).PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT]: {}, [closure_1_0(closure_1_2[4]).PromotionTypes.MARKETING_MOMENT]: {}, [closure_1_0(closure_1_2[4]).PromotionTypes.THIRD_PARTY_INBOUND]: {}, [closure_1_0(closure_1_2[4]).PromotionTypes.THIRD_PARTY_OUTBOUND]: {}, [closure_1_0(closure_1_2[4]).PromotionTypes.GIFT_PROMOTION]: {}, [closure_1_0(closure_1_2[4]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]: {} };
}
function getLatestActiveOutboundPromotionStartDate() {
  let startDate = null;
  const values = Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND]);
  for (const item10019 of values) {
    let tmp5 = null == startDate;
    if (!tmp5) {
      tmp5 = item10019.startDate > startDate;
    }
    if (tmp5) {
      startDate = item10019.startDate;
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
  const userContent = UserSettingsProtoStore.settings.userContent;
  value = undefined;
  if (userContent != null) {
    if (userContent.lastDismissedOutboundPromotionStartDate != null) {
      value = iter.value;
    }
  }
  if (value == null) {
    value = null;
  }
  closure_13 = value;
}
let closure_7 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
let c9 = false;
let c10 = null;
let locale = null;
const dependencyMap = createEmptyPromotionsByType();
let closure_13 = null;
let map = new Map();
let map1 = new Map();
let map2 = new Map();
map = map2;
let closure_17 = null;
let closure_18 = [];
let c19 = false;
const PersistedStore = initializeDefault.PersistedStore;
class PromotionsStore extends PersistedStore {
}
const prototype = PromotionsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_7 = arg0;
  }
  this.waitFor(UserSettingsProtoStore, UserStore);
  items = [UserSettingsProtoStore];
  this.syncWith(items, initializeFromUserSettings);
};
Object.defineProperty(prototype, "outboundPromotions", {
  get: function outboundPromotions() {
    return Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND]);
  },
  set: undefined
});
Object.defineProperty(prototype, "outboundRecurringPromotions", {
  get: function outboundRecurringPromotions() {
    return Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
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
  get: function lastDismissedOutboundPromotionStartDate() {
    return closure_13;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActivePromotions", {
  get: function lastFetchedActivePromotions() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedActivePromotionsLocale", {
  get: function lastFetchedActivePromotionsLocale() {
    return locale;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetchingActivePromotions", {
  get: function isFetchingActivePromotions() {
    return c9;
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
Object.defineProperty(prototype, "promotionsByType", {
  get: function promotionsByType() {
    return closure_12;
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
prototype["getAllMarketingComponentsByType"] = function getAllMarketingComponentsByType(arg0, arg1) {
  let componentType;
  if (closure_17 != null) {
    componentType = closure_17.componentType;
  }
  if (componentType === arg0) {
    if (closure_17.promotionId === arg1) {
      items = [closure_17];
      value2 = items;
    }
    return value2;
  }
  value = map2.get(arg1);
  value2 = undefined;
  if (value != null) {
    value2 = value.get(arg0);
  }
  if (value2 == null) {
    value2 = [];
  }
};
prototype["getMarketingComponentsByTypeAcrossPromotions"] = function getMarketingComponentsByTypeAcrossPromotions(arg0) {
  let componentType;
  if (closure_17 != null) {
    componentType = closure_17.componentType;
  }
  if (componentType === arg0) {
    items = [closure_17];
    let items1 = items;
  } else {
    items1 = map1.get(arg0);
    if (items1 == null) {
      items1 = [];
    }
  }
  return items1;
};
prototype["getMarketingComponentByType"] = function getMarketingComponentByType(GIFT_CUSTOMIZATION_BANNER) {
  let componentType;
  if (closure_17 != null) {
    componentType = closure_17.componentType;
  }
  if (componentType === GIFT_CUSTOMIZATION_BANNER) {
    return closure_17;
  } else {
    const currentUser = UserStore.getCurrentUser();
    const _Date = Date;
    const date = new Date();
    items = map1.get(GIFT_CUSTOMIZATION_BANNER);
    if (items == null) {
      items = [];
    }
    return selectActiveMarketingComponentDefault(items, date, (isIncludedInRollout) => {
      let isIncludedInRolloutResult = null != closure_0;
      if (isIncludedInRolloutResult) {
        isIncludedInRolloutResult = isIncludedInRollout.isIncludedInRollout(tmp.id, date);
      }
      return isIncludedInRolloutResult;
    });
  }
};
prototype["getMarketingComponentBySurface"] = function getMarketingComponentBySurface(arg0) {
  let marketingComponentByKind = null;
  if (obj.isMarketingSurfaceType(arg0)) {
    const self = this;
    marketingComponentByKind = this.getMarketingComponentByKind(MarketingSurfaceType.MarketingSurfaceKindByType[arg0]);
  }
  return marketingComponentByKind;
};
prototype["getMarketingComponentByKind"] = function getMarketingComponentByKind(arg0) {
  let oneofKind;
  if (closure_17 != null) {
    oneofKind = closure_17.properties.properties.oneofKind;
  }
  if (oneofKind === arg0) {
    return closure_17;
  } else {
    const currentUser = UserStore.getCurrentUser();
    const _Date = Date;
    const date = new Date();
    items = map.get(arg0);
    if (items == null) {
      items = [];
    }
    return selectActiveMarketingComponentDefault(items, date, (isIncludedInRollout) => {
      let isIncludedInRolloutResult = null != closure_0;
      if (isIncludedInRolloutResult) {
        isIncludedInRolloutResult = isIncludedInRollout.isIncludedInRollout(tmp.id, date);
      }
      return isIncludedInRolloutResult;
    });
  }
};
prototype["hasPromotion"] = function hasPromotion(arg0) {
  closure_0 = arg0;
  let values = Object.values(closure_12);
  return values.some((item) => {
    const values = Object.values(item);
    return values.some((promotionKey) => promotionKey.promotionKey === closure_1_0);
  });
};
prototype["getPromotionsByPartner"] = function getPromotionsByPartner(arg0) {
  closure_0 = arg0;
  const obj = { oneTime: null, recurring: null };
  const values = Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND]);
  obj.oneTime = values.filter((partnerId) => partnerId.partnerId === closure_0);
  const values2 = Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]);
  obj.recurring = values2.filter((partnerId) => partnerId.partnerId === closure_0);
  return obj;
};
prototype["getGiftPromotion"] = function getGiftPromotion() {
  const tmp = dependencyMap[require("constants").PromotionTypes.GIFT_PROMOTION];
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
  const tmp = dependencyMap[require("constants").PromotionTypes.MARKETING_MOMENT];
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
  const values = Object.values(dependencyMap[require("constants").PromotionTypes.MARKETING_MOMENT]);
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
prototype["hasActiveBogoRewardPromotion"] = function hasActiveBogoRewardPromotion() {
  return null !== this.getActiveBogoRewardPromotion();
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
const promotionsStore = new PromotionsStore(DispatcherDefault, {
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: function handleActivePromotionsFetchSuccess(promotions) {
    promotions = promotions.promotions;
    closure_12 = createEmptyPromotionsByType();
    new Map();
    new Map();
    new Map();
    closure_17 = null;
    let item = promotions.forEach((id) => {
      let fromServer = closure_4.createFromServer(id);
      closure_12[id.promotion_type][id.id] = fromServer;
      map = new Map();
      let result = closure_15.set(id.id, map);
      const marketing_components = id.marketing_components;
      if (marketing_components != null) {
        const item = marketing_components.forEach((item) => {
          fromServer = MarketingComponentRecord.createFromServer(item, fromServer);
          items = map1.get(fromServer.componentType);
          if (items == null) {
            items = [];
          }
          items.push(fromServer);
          const result = map1.set(fromServer.componentType, items);
          let value3 = map.get(fromServer.componentType);
          if (value3 == null) {
            value3 = [];
          }
          value3.push(fromServer);
          const result1 = map.set(fromServer.componentType, value3);
          const oneofKind = fromServer.properties.properties.oneofKind;
          if (null != oneofKind) {
            let value4 = closure_2_16.get(oneofKind);
            if (value4 == null) {
              value4 = [];
            }
            value4.push(fromServer);
            const result2 = closure_2_16.set(oneofKind, value4);
          }
        });
      }
    });
    c10 = Date.now();
    c9 = false;
    if (!closure_7.hasFetchedConsumedInboundPromotionId) {
      closure_7.hasFetchedConsumedInboundPromotionId = true;
      closure_7.consumedInboundPromotionId = promotions.consumedInboundPromotionId;
    }
  },
  ACTIVE_PROMOTIONS_FETCH: function handleActivePromotionsFetchStart(locale) {
    c9 = true;
    locale = locale.locale;
  },
  ACTIVE_PROMOTIONS_FETCH_FAIL: function handleActivePromotionsFetchFail() {
    closure_12 = createEmptyPromotionsByType();
    map = new Map();
    map1 = new Map();
    map2 = new Map();
    closure_17 = null;
    c9 = false;
  },
  ACTIVE_PROMOTIONS_CLEAR: function handleActivePromotionsClear() {
    closure_12 = createEmptyPromotionsByType();
    map = new Map();
    map1 = new Map();
    map2 = new Map();
    closure_17 = null;
    c9 = false;
    c10 = Date.now();
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function handleDismissOutboundPromotionNotice() {
    if (0 === Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        closure_13 = tmp2;
      }
    }
  },
  OUTBOUND_PROMOTIONS_SEEN: function handleOutboundPromotionsSeen() {
    if (0 === Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        closure_13 = tmp2;
        closure_7.lastSeenOutboundPromotionStartDate = tmp2;
      }
    }
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function handleClaimedOutboundPromotionCodesFetchSuccess(claimedOutboundPromotionCodes) {
    closure_18 = claimedOutboundPromotionCodes.claimedOutboundPromotionCodes;
    c19 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function handleClaimedOutboundPromotionCodesFetchFail() {
    closure_18 = [];
    c19 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function handleClaimedOutboundPromotionCodeAdd(claimedOutboundPromotionCode) {
    claimedOutboundPromotionCode = claimedOutboundPromotionCode.claimedOutboundPromotionCode;
    if (closure_18.some((promotion) => promotion.promotion.id === claimedOutboundPromotionCode.promotion.id)) {
      return false;
    } else {
      items = [];
      items[HermesBuiltin.arraySpread(closure_18, 0)] = claimedOutboundPromotionCode;
      closure_18 = items;
    }
  },
  LOGOUT: function handleLogout() {
    closure_7 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
    c9 = false;
    c10 = null;
    closure_12 = createEmptyPromotionsByType();
    map.clear();
    map1.clear();
    map2.clear();
    closure_17 = null;
    closure_18 = [];
    c19 = false;
  },
  PREMIUM_MARKETING_PREVIEW: function handlePremiumMarketingPreview(data) {
    data = data.data;
    let fromServer = null;
    if (null != data.promotion) {
      fromServer = PromotionRecord.createFromServer(data.promotion);
    }
    closure_17 = MarketingComponentRecord.createFromServer(data, fromServer);
    if (null != fromServer) {
      dependencyMap[fromServer.promotionType][fromServer.id] = fromServer;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsStore.tsx");

export default promotionsStore;