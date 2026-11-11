// === Module 9557: PromotionsStore ===

// Module 9557 (PromotionsStore)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import MarketingSurfaceTypeUtils from "MarketingSurfaceTypeUtils" /* 9560 */;
import MarketingSurfaceType from "MarketingSurfaceType" /* 9561 */;
import CampaignDevToolsUtils from "CampaignDevToolsUtils" /* 9604 */;
import selectActiveMarketingComponentDefault from "selectActiveMarketingComponent" /* 9612 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import PromotionRecord from "PromotionRecord" /* 9558 */;
import UserStore from "UserStore" /* 1385 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1386 */;
import MarketingComponentRecord from "MarketingComponentRecord" /* 9559 */;

require = fn;
function createEmptyPromotionsByType() {
  return { [closure_1_0(closure_1_2[6]).PromotionTypes.THIRD_PARTY]: {}, [closure_1_0(closure_1_2[6]).PromotionTypes.BOGO]: {}, [closure_1_0(closure_1_2[6]).PromotionTypes.THIRD_PARTY_DIRECT_FULFILLMENT]: {}, [closure_1_0(closure_1_2[6]).PromotionTypes.MARKETING_MOMENT]: {}, [closure_1_0(closure_1_2[6]).PromotionTypes.THIRD_PARTY_INBOUND]: {}, [closure_1_0(closure_1_2[6]).PromotionTypes.THIRD_PARTY_OUTBOUND]: {}, [closure_1_0(closure_1_2[6]).PromotionTypes.GIFT_PROMOTION]: {}, [closure_1_0(closure_1_2[6]).PromotionTypes.THIRD_PARTY_OUTBOUND_RECURRING]: {} };
}
function syncCampaignOverrideComponents() {
  let tmp = null != c17;
  if (tmp) {
    const currentUser = UserStore.getCurrentUser();
    items = [];
    let tmp4 = items;
    if (null != c17) {
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      tmp4 = items;
      if (true === isStaffResult) {
        let premiumTypeOverride;
        if (OverridePremiumTypeStore.hasPremiumTypeOverride(currentUser)) {
          premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeOverride();
        }
        tmp4 = closure_19(c17, currentUser, LocaleStore.locale, premiumTypeOverride);
      }
    }
    const isEqualResult = applyDefault.isEqual(tmp4, closure_18);
    let flag2 = !isEqualResult;
    if (!isEqualResult) {
      closure_18 = tmp4;
      flag2 = true;
    }
    tmp = flag2;
  }
  return tmp;
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
  closure_15 = value;
}
let closure_9 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
let c11 = false;
let c12 = null;
let locale = null;
const dependencyMap = createEmptyPromotionsByType();
let closure_15 = null;
let map = new Map();
let c17 = null;
let closure_18 = [];
const FunctionUtils = fn(2158);
let closure_19 = FunctionUtils.cachedFunction((components, arg1, arg2, arg3) => CampaignDevToolsUtils.resolveCampaignComponents(components.components, arg1, arg2, components.endDate, arg3));
let closure_21 = null;
let closure_22 = [];
let c23 = false;
const PersistedStore = initializeDefault.PersistedStore;
class PromotionsStore extends PersistedStore {
}
const prototype = PromotionsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_9 = arg0;
  }
  this.waitFor(UserSettingsProtoStore, UserStore, LocaleStore, OverridePremiumTypeStore);
  items = [UserStore, LocaleStore, OverridePremiumTypeStore];
  this.syncWith(items, syncCampaignOverrideComponents);
  const items1 = [UserSettingsProtoStore];
  this.syncWith(items1, initializeFromUserSettings);
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
    return closure_9.lastSeenOutboundPromotionStartDate;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastDismissedOutboundPromotionStartDate", {
  get: function lastDismissedOutboundPromotionStartDate() {
    return closure_15;
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
    return locale;
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
    return closure_9.hasFetchedConsumedInboundPromotionId;
  },
  set: undefined
});
Object.defineProperty(prototype, "consumedInboundPromotionId", {
  get: function consumedInboundPromotionId() {
    return closure_9.consumedInboundPromotionId;
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
prototype["getMarketingPromotionForEligibility"] = function getMarketingPromotionForEligibility(promotionId) {
  const self = this;
  let promotionByTypeAndId = null;
  if (this.campaignOverrideId !== promotionId) {
    promotionByTypeAndId = self.getPromotionByTypeAndId(require("constants").PromotionTypes.MARKETING_MOMENT, promotionId);
  }
  return promotionByTypeAndId;
};
prototype["getPromotionByTypeAndKey"] = function getPromotionByTypeAndKey(arg0, arg1) {
  closure_0 = arg1;
  const values = Object.values(dependencyMap[arg0]);
  return values.find((promotionKey) => promotionKey.promotionKey === closure_0);
};
prototype["getState"] = function getState() {
  return closure_9;
};
prototype["getMarketingComponentsBySurfaceAcrossPromotions"] = function getMarketingComponentsBySurfaceAcrossPromotions(items) {
  if (obj.isMarketingSurfaceType(items)) {
    const tmp3 = MarketingSurfaceType.MarketingSurfaceKindByType[items];
    closure_0 = tmp3;
    if (null != c17) {
      const currentUser = UserStore.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (true === isStaffResult) {
        const self = this;
        const prop = this.campaignOverrideComponents;
        let found = prop.filter((properties) => properties.properties.properties.oneofKind === closure_0);
      }
      return found;
    }
    let oneofKind;
    if (closure_21 != null) {
      oneofKind = closure_21.properties.properties.oneofKind;
    }
    if (oneofKind === tmp3) {
      items = [closure_21];
      found = items;
    } else {
      found = map.get(tmp3);
      if (found == null) {
        found = [];
      }
    }
  } else {
    return [];
  }
  obj = MarketingSurfaceTypeUtils;
};
Object.defineProperty(prototype, "campaignOverrideId", {
  get: function campaignOverrideId() {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    let tmp2 = null;
    if (true === isStaffResult) {
      let promotionId;
      if (_null != null) {
        promotionId = _null.promotionId;
      }
      if (promotionId == null) {
        promotionId = null;
      }
      tmp2 = promotionId;
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "campaignOverrideRows", {
  get: function campaignOverrideRows() {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (true !== isStaffResult) {
      items = [];
    } else {
      items = undefined;
      if (_null != null) {
        items = _null.components;
      }
      if (items == null) {
        items = [];
      }
    }
    return items;
  },
  set: undefined
});
Object.defineProperty(prototype, "campaignOverrideComponents", {
  get: function campaignOverrideComponents() {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    return true !== isStaffResult ? [] : closure_18;
  },
  set: undefined
});
prototype["getMarketingComponentBySurface"] = function getMarketingComponentBySurface(GIFT_CUSTOMIZATION_BANNER) {
  let marketingComponentByKind = null;
  if (obj.isMarketingSurfaceType(GIFT_CUSTOMIZATION_BANNER)) {
    const self = this;
    marketingComponentByKind = this.getMarketingComponentByKind(MarketingSurfaceType.MarketingSurfaceKindByType[GIFT_CUSTOMIZATION_BANNER]);
  }
  return marketingComponentByKind;
};
prototype["getMarketingComponentByKind"] = function getMarketingComponentByKind(arg0) {
  closure_0 = arg0;
  if (null != c17) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (true === isStaffResult) {
      const self = this;
      const prop = this.campaignOverrideComponents;
      let found = prop.find((properties) => properties.properties.properties.oneofKind === closure_0);
      if (found == null) {
        found = null;
      }
      return found;
    }
  }
  let oneofKind;
  if (closure_21 != null) {
    oneofKind = closure_21.properties.properties.oneofKind;
  }
  if (oneofKind === arg0) {
    return closure_21;
  } else {
    const currentUser2 = UserStore.getCurrentUser();
    const _Date = Date;
    const date = new Date();
    items = map.get(arg0);
    if (items == null) {
      items = [];
    }
    return selectActiveMarketingComponentDefault(items, date, (isIncludedInRollout) => {
      let isIncludedInRolloutResult = null != closure_1;
      if (isIncludedInRolloutResult) {
        isIncludedInRolloutResult = isIncludedInRollout.isIncludedInRollout(tmp.id, date);
      }
      return isIncludedInRolloutResult;
    });
  }
};
prototype["hasPromotion"] = function hasPromotion(arg0) {
  closure_0 = arg0;
  let values = Object.values(closure_14);
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
    return closure_22;
  },
  set: undefined
});
Object.defineProperty(prototype, "claimedOutboundPromotionCodesLoaded", {
  get: function claimedOutboundPromotionCodesLoaded() {
    return c23;
  },
  set: undefined
});
PromotionsStore.displayName = "PromotionsStore";
PromotionsStore.persistKey = "PromotionsPersistedStore";
const promotionsStore = new PromotionsStore(DispatcherDefault, {
  CAMPAIGN_OVERRIDE_SET: function handleCampaignOverride(promotionId) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    let flag = true === isStaffResult;
    if (flag) {
      let tmp3 = null;
      if (null != promotionId.promotionId) {
        tmp3 = promotionId;
      }
      c17 = tmp3;
      const currentUser1 = UserStore.getCurrentUser();
      items = [];
      let tmp5 = items;
      if (null != c17) {
        let isStaffResult1;
        if (currentUser1 != null) {
          isStaffResult1 = currentUser1.isStaff();
        }
        tmp5 = items;
        if (true === isStaffResult1) {
          let premiumTypeOverride;
          if (OverridePremiumTypeStore.hasPremiumTypeOverride(currentUser1)) {
            premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeOverride();
          }
          tmp5 = closure_19(c17, currentUser1, LocaleStore.locale, premiumTypeOverride);
        }
      }
      const isEqualResult = applyDefault.isEqual(tmp5, closure_18);
      flag = true;
      if (!isEqualResult) {
        closure_18 = tmp5;
        flag = true;
      }
    }
    return flag;
  },
  ACTIVE_PROMOTIONS_FETCH_SUCCESS: function handleActivePromotionsFetchSuccess(promotions) {
    promotions = promotions.promotions;
    closure_14 = createEmptyPromotionsByType();
    new Map();
    closure_21 = null;
    let item = promotions.forEach((id) => {
      let fromServer = closure_5.createFromServer(id);
      closure_14[id.promotion_type][id.id] = fromServer;
      const marketing_components = id.marketing_components;
      if (marketing_components != null) {
        const item = marketing_components.forEach((item) => {
          fromServer = MarketingComponentRecord.createFromServer(item, fromServer);
          const oneofKind = fromServer.properties.properties.oneofKind;
          if (null != oneofKind) {
            items = map.get(oneofKind);
            if (items == null) {
              items = [];
            }
            items.push(fromServer);
            const result = map.set(oneofKind, items);
          }
        });
      }
    });
    c12 = Date.now();
    c11 = false;
    if (!closure_9.hasFetchedConsumedInboundPromotionId) {
      closure_9.hasFetchedConsumedInboundPromotionId = true;
      closure_9.consumedInboundPromotionId = promotions.consumedInboundPromotionId;
    }
  },
  ACTIVE_PROMOTIONS_FETCH: function handleActivePromotionsFetchStart(locale) {
    c11 = true;
    locale = locale.locale;
  },
  ACTIVE_PROMOTIONS_FETCH_FAIL: function handleActivePromotionsFetchFail() {
    closure_14 = createEmptyPromotionsByType();
    map = new Map();
    closure_21 = null;
    c11 = false;
  },
  ACTIVE_PROMOTIONS_CLEAR: function handleActivePromotionsClear() {
    closure_14 = createEmptyPromotionsByType();
    map = new Map();
    closure_21 = null;
    c11 = false;
    c12 = Date.now();
  },
  OUTBOUND_PROMOTION_NOTICE_DISMISS: function handleDismissOutboundPromotionNotice() {
    if (0 === Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        closure_15 = tmp2;
      }
    }
  },
  OUTBOUND_PROMOTIONS_SEEN: function handleOutboundPromotionsSeen() {
    if (0 === Object.values(dependencyMap[require("constants").PromotionTypes.THIRD_PARTY_OUTBOUND]).length) {
      return false;
    } else {
      const tmp2 = getLatestActiveOutboundPromotionStartDate();
      if (null != tmp2) {
        closure_15 = tmp2;
        closure_9.lastSeenOutboundPromotionStartDate = tmp2;
      }
    }
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_SUCCESS: function handleClaimedOutboundPromotionCodesFetchSuccess(claimedOutboundPromotionCodes) {
    closure_22 = claimedOutboundPromotionCodes.claimedOutboundPromotionCodes;
    c23 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODES_FETCH_FAIL: function handleClaimedOutboundPromotionCodesFetchFail() {
    closure_22 = [];
    c23 = true;
  },
  CLAIMED_OUTBOUND_PROMOTION_CODE_ADD: function handleClaimedOutboundPromotionCodeAdd(claimedOutboundPromotionCode) {
    claimedOutboundPromotionCode = claimedOutboundPromotionCode.claimedOutboundPromotionCode;
    if (closure_22.some((promotion) => promotion.promotion.id === claimedOutboundPromotionCode.promotion.id)) {
      return false;
    } else {
      items = [];
      items[HermesBuiltin.arraySpread(closure_22, 0)] = claimedOutboundPromotionCode;
      closure_22 = items;
    }
  },
  LOGOUT: function handleLogout() {
    c17 = null;
    closure_18 = [];
    closure_9 = { hasFetchedConsumedInboundPromotionId: false, consumedInboundPromotionId: null, lastSeenOutboundPromotionStartDate: null };
    c11 = false;
    c12 = null;
    closure_14 = createEmptyPromotionsByType();
    map.clear();
    closure_21 = null;
    closure_22 = [];
    c23 = false;
  },
  PREMIUM_MARKETING_PREVIEW: function handlePremiumMarketingPreview(data) {
    data = data.data;
    let fromServer = null;
    if (null != data.promotion) {
      fromServer = PromotionRecord.createFromServer(data.promotion);
    }
    closure_21 = MarketingComponentRecord.createFromServer(data, fromServer);
    if (null != fromServer) {
      dependencyMap[fromServer.promotionType][fromServer.id] = fromServer;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/promotions/PromotionsStore.tsx");

export default promotionsStore;