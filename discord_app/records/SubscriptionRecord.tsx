// === Module 4046: createSubscriptionItemFromServer ===

// Module 4046 (createSubscriptionItemFromServer)
import toJSDefault from "toJS" /* 1931 */;
import createFromServer from "createFromServer" /* 4047 */;
import createFromServer2 from "createFromServer" /* 4048 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import set from "set" /* 4050 */;

const require = fn;
function createSubscriptionItemFromServer(id) {
  return { id: id.id, planId: id.plan_id, quantity: id.quantity };
}
toJSDefault;
({ PaymentGateways: c5, SubscriptionStatusTypes: closure_6, SubscriptionStatusTypesSets: error, SubscriptionTypes: closure_8 } = ME);
({ SubscriptionPauseReason: c9, SubscriptionPauseReasonSets: c10 } = require("set"));
({ PREMIUM_PLANS: unpackModuleId, SubscriptionPlanInfo: closure_12, SubscriptionPlans: map1 } = GuildFeatures);
let SubscriptionRecord;
class SubscriptionRecord extends tmp2 {
  constructor(arg0) {
    tmp7 = new SubscriptionRecord(tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp7.id, type: tmp7.type, items: tmp7.items, createdAt: tmp7.createdAt, canceledAt: tmp7.canceledAt, currentPeriodStart: tmp7.currentPeriodStart, currentPeriodEnd: tmp7.currentPeriodEnd, status: tmp7.status, paymentSourceId: tmp7.paymentSourceId, paymentGateway: tmp7.paymentGateway, paymentGatewayPlanId: tmp7.paymentGatewayPlanId, paymentGatewaySubscriptionId: tmp7.paymentGatewaySubscriptionId, trialId: tmp7.trialId, trialEndsAt: tmp7.trialEndsAt, renewalMutations: tmp7.renewalMutations, currency: tmp7.currency, pauseEndsAt: tmp7.pauseEndsAt, pauseReason: tmp7.pauseReason, metadata: tmp7.metadata, latestInvoice: tmp7.latestInvoice, useStorekitResubscribe: tmp7.useStorekitResubscribe, price: tmp7.price, userId: tmp7.userId, streakStartedAt: tmp7.streakStartedAt, eligiblePaymentGateways: tmp7.eligiblePaymentGateways, priceChange: tmp7.priceChange } = global);
    renewalMutations = tmp7.renewalMutations;
    planId = global.items[0].planId;
    closure_0 = planId;
    planId = null;
    if (global.type === SubscriptionTypes.PREMIUM) {
      tmp11 = SubscriptionPlanInfo;
      ({ interval, intervalCount } = SubscriptionPlanInfo[global.items[0].planId]);
      tmp12 = closure_0;
      tmp13 = closure_2;
      obj = require("getNonePlanIdForIntervalType");
      basePlanIdForSubscriptionItems = obj.getBasePlanIdForSubscriptionItems(global.items, interval, intervalCount);
      closure_0 = basePlanIdForSubscriptionItems;
      tmp9 = null;
      tmp10 = basePlanIdForSubscriptionItems;
      if (null != renewalMutations) {
        tmp12Result = require("getNonePlanIdForIntervalType");
        basePlanIdForSubscriptionItems1 = tmp12Result.getBasePlanIdForSubscriptionItems(renewalMutations.items, interval, intervalCount);
        planId = basePlanIdForSubscriptionItems1;
        tmp9 = basePlanIdForSubscriptionItems1;
        tmp10 = basePlanIdForSubscriptionItems;
      }
    } else {
      tmp8 = null != renewalMutations;
      if (tmp8) {
        num = 0;
        tmp8 = renewalMutations.items.length > 0;
      }
      tmp9 = null;
      tmp10 = planId;
      if (tmp8) {
        planId2 = renewalMutations.items[0].planId;
        planId = planId2;
        tmp9 = planId2;
        tmp10 = planId;
      }
    }
    tmp7.planId = tmp10;
    items = global.items;
    tmp7.additionalPlans = items.filter((item, index) => item.planId !== basePlanIdForSubscriptionItems);
    tmp16 = null != renewalMutations && null != tmp9;
    if (tmp16) {
      renewalMutations.planId = tmp9;
      items1 = renewalMutations.items;
      renewalMutations.additionalPlans = items1.filter((item, index) => item.planId !== planId2);
    }
    return tmp7;
  }
}
const prototype = SubscriptionRecord.prototype;
SubscriptionRecord["createFromServer"] = function createFromServer(id) {
  let obj = { id: id.id, type: id.type, createdAt: new Date(id.created_at), canceledAt: null, currentPeriodStart: null, currentPeriodEnd: null, status: null, paymentSourceId: null, paymentGateway: null, paymentGatewayPlanId: null, paymentGatewaySubscriptionId: null, trialId: null, trialEndsAt: null, items: null, renewalMutations: null, streakStartedAt: null, currency: null, pauseEndsAt: null, pauseReason: null, metadata: null, useStorekitResubscribe: null, price: null, userId: null };
  let date1 = null;
  if (null != id.canceled_at) {
    const _Date = Date;
    date1 = new Date(id.canceled_at);
  }
  obj[3] = date1;
  const date = new Date(id.created_at);
  obj[4] = new Date(id.current_period_start);
  const date2 = new Date(id.current_period_start);
  obj[5] = new Date(id.current_period_end);
  ({ status: obj[6], payment_source_id: obj[7], payment_gateway: obj[8], payment_gateway_plan_id: obj[9], payment_gateway_subscription_id: obj[10], trial_id: obj[11] } = id);
  let date4 = null;
  if (null != id.trial_ends_at) {
    const _Date2 = Date;
    date4 = new Date(id.trial_ends_at);
  }
  obj[12] = date4;
  const items = id.items;
  obj[13] = items.map(createSubscriptionItemFromServer);
  let tmp12 = null;
  if (null != id.renewal_mutations) {
    obj = { items: null, paymentGatewayPlanId: null };
    const items1 = id.renewal_mutations.items;
    obj[0] = items1.map(createSubscriptionItemFromServer);
    obj[1] = id.renewal_mutations.payment_gateway_plan_id;
    tmp12 = obj;
  }
  obj[14] = tmp12;
  let date5 = null;
  if (null != id.streak_started_at) {
    const _Date3 = Date;
    date5 = new Date(id.streak_started_at);
  }
  obj[15] = date5;
  obj[16] = id.currency;
  let date6 = null;
  if (null != id.pause_ends_at) {
    const _Date4 = Date;
    date6 = new Date(id.pause_ends_at);
  }
  obj[17] = date6;
  ({ pause_reason: obj[18], metadata: obj[19], use_storekit_resubscribe: obj[20], price: obj[21], user_id: obj[22] } = id);
  if (null != id.latest_invoice) {
    obj = { latestInvoice: null };
    obj[0] = closure_4.createInvoiceFromServer(id.latest_invoice);
    obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  let prop = id.eligible_payment_gateways;
  if (prop == null) {
    prop = null;
  }
  obj.eligiblePaymentGateways = prop;
  let fromServer = null;
  if (null != id.price_change) {
    fromServer = closure_3.createFromServer(id.price_change);
  }
  obj.priceChange = fromServer;
  return new SubscriptionRecord(obj);
};
prototype["getCurrentSubscriptionPlanIdForGroup"] = function getCurrentSubscriptionPlanIdForGroup(items) {
  closure_0 = items;
  items = this.items;
  const found = items.find((item, index) => items.includes(item.planId));
  let planId;
  if (found != null) {
    planId = found.planId;
  }
  return planId;
};
Object.defineProperty(prototype, "isPremium", {
  get: function isPremium() {
    return this.type === constants4.PREMIUM;
  },
  set: undefined
});
Object.defineProperty(prototype, "isACOM", {
  get: function isACOM() {
    return this.paymentGateway === constants.APPLE_ADVANCED_COMMERCE;
  },
  set: undefined
});
Object.defineProperty(prototype, "planIdForCurrencies", {
  get: function planIdForCurrencies() {
    const self = this;
    if (this.isPremium) {
      let tmp5 = null != self.planIdFromItems;
      if (tmp5) {
        tmp5 = "" !== self.planIdFromItems;
      }
      importDefault(38)(tmp5, "Premium subscription has no planId for currencies");
      let planId = self.planIdFromItems;
      const tmp3 = importDefault(38);
    } else {
      planId = self.planId;
    }
    return planId;
  },
  set: undefined
});
Object.defineProperty(prototype, "planIdFromItems", {
  get: function planIdFromItems() {
    return this.getCurrentSubscriptionPlanIdForGroup(Object.values(closure_13));
  },
  set: undefined
});
Object.defineProperty(prototype, "premiumPlanIdFromItems", {
  get: function premiumPlanIdFromItems() {
    const items = [...closure_11];
    return this.getCurrentSubscriptionPlanIdForGroup(items);
  },
  set: undefined
});
Object.defineProperty(prototype, "isPurchasedViaDesktop", {
  get: function isPurchasedViaDesktop() {
    return null == this.paymentGateway;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPurchasedViaAppleGeneric", {
  get: function isPurchasedViaAppleGeneric() {
    return this.paymentGateway === constants.APPLE_PARTNER || this.isACOM;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPurchasedViaApple", {
  get: function isPurchasedViaApple() {
    return this.paymentGateway === constants.APPLE || this.isACOM;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPurchasedViaGoogle", {
  get: function isPurchasedViaGoogle() {
    return this.paymentGateway === constants.GOOGLE;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPurchasedExternally", {
  get: function isPurchasedExternally() {
    return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
  },
  set: undefined
});
Object.defineProperty(prototype, "isOnPlatformMatchingExternalPaymentGateway", {
  get: function isOnPlatformMatchingExternalPaymentGateway() {
    let isPurchasedViaApple = this.isPurchasedViaApple;
    if (isPurchasedViaApple) {
      isPurchasedViaApple = require(500) /* obj132 */.isIOS();
      const obj = require(500) /* obj132 */;
    }
    if (!isPurchasedViaApple) {
      let isPurchasedViaGoogle = this.isPurchasedViaGoogle;
      if (isPurchasedViaGoogle) {
        isPurchasedViaGoogle = require(4052) /* isPremiumGiftingSupported */.isGooglePlayBillingSupported();
        const obj2 = require(4052) /* isPremiumGiftingSupported */;
      }
      isPurchasedViaApple = isPurchasedViaGoogle;
    }
    return isPurchasedViaApple;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasExternalPlanChange", {
  get: function hasExternalPlanChange() {
    const self = this;
    let isPurchasedExternally = this.isPurchasedExternally;
    if (isPurchasedExternally) {
      isPurchasedExternally = null != self.renewalMutations;
    }
    if (isPurchasedExternally) {
      isPurchasedExternally = self.paymentGatewayPlanId !== self.renewalMutations.paymentGatewayPlanId;
    }
    return isPurchasedExternally;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasPremiumNitroMonthly", {
  get: function hasPremiumNitroMonthly() {
    const items = this.items;
    return null != items.find((item, index) => item.planId === PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  },
  set: undefined
});
Object.defineProperty(prototype, "isBoostOnly", {
  get: function isBoostOnly() {
    let items = this.items;
    return items.every((item, index) => {
      const items = [, ];
      ({ PREMIUM_MONTH_GUILD: arr[0], PREMIUM_YEAR_GUILD: arr[1] } = closure_13);
      return items.includes(item.planId);
    });
  },
  set: undefined
});
Object.defineProperty(prototype, "isPausedOrPausePending", {
  get: function isPausedOrPausePending() {
    const ALL_PAUSE = constants3.ALL_PAUSE;
    return ALL_PAUSE.has(this.status);
  },
  set: undefined
});
Object.defineProperty(prototype, "isPaused", {
  get: function isPaused() {
    return this.status === constants2.PAUSED;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPausedForFractionalPremium", {
  get: function isPausedForFractionalPremium() {
    let tmp = this.status === constants2.PAUSED;
    if (tmp) {
      tmp = this.pauseReason === constants5.FRACTIONAL_PREMIUM;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPausedAllowsUpdatesButNotResume", {
  get: function isPausedAllowsUpdatesButNotResume() {
    let hasItem = this.status === constants2.PAUSED;
    if (hasItem) {
      const CAN_MAKE_SUBSCRIPTION_UPDATES = constants6.CAN_MAKE_SUBSCRIPTION_UPDATES;
      hasItem = CAN_MAKE_SUBSCRIPTION_UPDATES.has(tmp.pauseReason);
    }
    return hasItem;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPausedAllowsResumeButNotUpdates", {
  get: function isPausedAllowsResumeButNotUpdates() {
    const self = this;
    let tmp = this.status === constants2.PAUSED;
    if (tmp) {
      let tmp3 = null === self.pauseReason;
      if (!tmp3) {
        const CAN_MAKE_SUBSCRIPTION_UPDATES = constants6.CAN_MAKE_SUBSCRIPTION_UPDATES;
        tmp3 = !CAN_MAKE_SUBSCRIPTION_UPDATES.has(self.pauseReason);
      }
      tmp = tmp3;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEnded", {
  get: function isEnded() {
    return this.status === constants2.ENDED;
  },
  set: undefined
});
Object.defineProperty(prototype, "endedAt", {
  get: function endedAt() {
    let self = this;
    if (this.status !== constants2.ENDED) {
      return null;
    } else {
      const metadata = self.metadata;
      let ended_at;
      if (metadata != null) {
        ended_at = metadata.ended_at;
      }
      if (null != ended_at) {
        const _Date = Date;
        self = new Date(self.metadata.ended_at);
        let currentPeriodEnd = self;
      } else {
        currentPeriodEnd = self.currentPeriodEnd;
      }
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "isActive", {
  get: function isActive() {
    return this.status === constants2.ACTIVE;
  },
  set: undefined
});
Object.defineProperty(prototype, "statusAllowsPerks", {
  get: function statusAllowsPerks() {
    const ALLOW_PERKS = constants3.ALLOW_PERKS;
    return ALLOW_PERKS.has(this.status);
  },
  set: undefined
});
Object.defineProperty(prototype, "hasActiveTrial", {
  get: function hasActiveTrial() {
    const self = this;
    let tmp = null != this.trialId && null != self.trialEndsAt;
    if (tmp) {
      const _Date = Date;
      const date = new Date();
      tmp = date < self.trialEndsAt;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasActiveDiscount", {
  get: function hasActiveDiscount() {
    const self = this;
    if (null == this.metadata) {
      return false;
    } else {
      const active_discount_expires_at = self.metadata.active_discount_expires_at;
      let tmp = null != self.metadata.active_discount_id && null != active_discount_expires_at;
      if (tmp) {
        const _Date = Date;
        const date = new Date();
        const _Date2 = Date;
        const date1 = new Date(active_discount_expires_at);
        tmp = date <= date1;
      }
      return tmp;
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "premiumSince", {
  get: function premiumSince() {
    let createdAt = this.streakStartedAt;
    if (createdAt == null) {
      createdAt = this.createdAt;
    }
    return createdAt;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasAnyPremiumNitro", {
  get: function hasAnyPremiumNitro() {
    const items = this.items;
    return items.some((item, index) => set.has(item.planId));
  },
  set: undefined
});
Object.defineProperty(prototype, "hasAnyPremiumGroup", {
  get: function hasAnyPremiumGroup() {
    const items = this.items;
    return items.some((item, index) => item.planId === constants.PREMIUM_GROUP_MONTH);
  },
  set: undefined
});
prototype["hasPremiumAtLeast"] = function hasPremiumAtLeast(TIER_2) {
  closure_0 = TIER_2;
  let someResult = this.isPremium;
  if (someResult) {
    const items = this.items;
    someResult = items.some((item, index) => TIER_2(dependencyMap[10]).isPremiumAtLeast(closure_1_12[item.planId].premiumType, TIER_2));
  }
  return someResult;
};
const result = require("obj132").fileFinishedImporting("records/SubscriptionRecord.tsx");

export default SubscriptionRecord;
export { SubscriptionRecord };