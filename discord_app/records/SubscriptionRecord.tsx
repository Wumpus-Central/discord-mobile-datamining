// discord_app/records/SubscriptionRecord.tsx
import PremiumTypeUtils from "../utils/PremiumTypeUtils.tsx";
import PremiumSubscription from "../modules/premium/PremiumSubscription.tsx";
import Record from "../lib/Record.tsx";
import GooglePlayPriceChangeRecord from "../modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx";
import InvoiceRecord from "InvoiceRecord.tsx";

require = fn;
function createSubscriptionItemFromServer(id) {
  return { id: id.id, planId: id.plan_id, quantity: id.quantity };
}
const Constants = fn(1074);
({
  PaymentGateways: hasOwnProperty,
  SubscriptionStatusTypes: metroRequire,
  SubscriptionStatusTypesSets: closure_7,
  SubscriptionTypes: closure_8,
} = Constants);
const BillingConstants = fn(4229);
({ SubscriptionPauseReason: closure_9, SubscriptionPauseReasonSets: c10 } = BillingConstants);
const PremiumConstants = fn(1373);
({ PREMIUM_PLANS: closure_11, SubscriptionPlanInfo: closure_12, SubscriptionPlans: map1 } = PremiumConstants);
let SubscriptionRecord;
class SubscriptionRecord extends tmp2 {
  constructor(arg0) {
    tmp7 = new SubscriptionRecord(tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
    ({
      id: tmp7.id,
      type: tmp7.type,
      items: tmp7.items,
      createdAt: tmp7.createdAt,
      canceledAt: tmp7.canceledAt,
      currentPeriodStart: tmp7.currentPeriodStart,
      currentPeriodEnd: tmp7.currentPeriodEnd,
      status: tmp7.status,
      paymentSourceId: tmp7.paymentSourceId,
      paymentGateway: tmp7.paymentGateway,
      paymentGatewayPlanId: tmp7.paymentGatewayPlanId,
      paymentGatewaySubscriptionId: tmp7.paymentGatewaySubscriptionId,
      trialId: tmp7.trialId,
      trialEndsAt: tmp7.trialEndsAt,
      renewalMutations: tmp7.renewalMutations,
      currency: tmp7.currency,
      pauseEndsAt: tmp7.pauseEndsAt,
      pauseReason: tmp7.pauseReason,
      metadata: tmp7.metadata,
      latestInvoice: tmp7.latestInvoice,
      useStorekitResubscribe: tmp7.useStorekitResubscribe,
      price: tmp7.price,
      userId: tmp7.userId,
      streakStartedAt: tmp7.streakStartedAt,
      eligiblePaymentGateways: tmp7.eligiblePaymentGateways,
      priceChange: tmp7.priceChange,
    } = global);
    renewalMutations = tmp7.renewalMutations;
    planId = global.items[0].planId;
    closure_0 = planId;
    planId = null;
    if (global.type === SubscriptionTypes.PREMIUM) {
      tmp11 = SubscriptionPlanInfo;
      ({ interval, intervalCount } = SubscriptionPlanInfo[global.items[0].planId]);
      tmp12 = closure_0;
      tmp13 = closure_2;
      obj = closure_0(closure_2[6]);
      basePlanIdForSubscriptionItems = obj.getBasePlanIdForSubscriptionItems(global.items, interval, intervalCount);
      closure_0 = basePlanIdForSubscriptionItems;
      tmp9 = null;
      tmp10 = basePlanIdForSubscriptionItems;
      if (null != renewalMutations) {
        tmp12Result = tmp12(tmp13[6]);
        basePlanIdForSubscriptionItems1 = tmp12Result.getBasePlanIdForSubscriptionItems(
          renewalMutations.items,
          interval,
          intervalCount,
        );
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
    tmp7.additionalPlans = items.filter((planId) => planId.planId !== basePlanIdForSubscriptionItems);
    tmp16 = null != renewalMutations && null != tmp9;
    if (tmp16) {
      renewalMutations.planId = tmp9;
      items1 = renewalMutations.items;
      renewalMutations.additionalPlans = items1.filter((planId) => planId.planId !== planId2);
    }
    return tmp7;
  }
}
const prototype = SubscriptionRecord.prototype;
SubscriptionRecord["createFromServer"] = function createFromServer(id) {
  let obj = {
    id: id.id,
    type: id.type,
    createdAt: new Date(id.created_at),
    canceledAt: null,
    currentPeriodStart: null,
    currentPeriodEnd: null,
    status: null,
    paymentSourceId: null,
    paymentGateway: null,
    paymentGatewayPlanId: null,
    paymentGatewaySubscriptionId: null,
    trialId: null,
    trialEndsAt: null,
    items: null,
    renewalMutations: null,
    streakStartedAt: null,
    currency: null,
    pauseEndsAt: null,
    pauseReason: null,
    metadata: null,
    useStorekitResubscribe: null,
    price: null,
    userId: null,
  };
  let date1 = null;
  if (null != id.canceled_at) {
    const _Date = Date;
    date1 = new Date(id.canceled_at);
  }
  obj.canceledAt = date1;
  const date = new Date(id.created_at);
  obj.currentPeriodStart = new Date(id.current_period_start);
  const date2 = new Date(id.current_period_start);
  obj.currentPeriodEnd = new Date(id.current_period_end);
  ({
    status: obj.status,
    payment_source_id: obj.paymentSourceId,
    payment_gateway: obj.paymentGateway,
    payment_gateway_plan_id: obj.paymentGatewayPlanId,
    payment_gateway_subscription_id: obj.paymentGatewaySubscriptionId,
    trial_id: obj.trialId,
  } = id);
  let date4 = null;
  if (null != id.trial_ends_at) {
    const _Date2 = Date;
    date4 = new Date(id.trial_ends_at);
  }
  obj.trialEndsAt = date4;
  const items = id.items;
  obj.items = items.map(createSubscriptionItemFromServer);
  let tmp12 = null;
  if (null != id.renewal_mutations) {
    obj = { items: null, paymentGatewayPlanId: null };
    const items1 = id.renewal_mutations.items;
    obj.items = items1.map(createSubscriptionItemFromServer);
    obj.paymentGatewayPlanId = id.renewal_mutations.payment_gateway_plan_id;
    tmp12 = obj;
  }
  obj.renewalMutations = tmp12;
  let date5 = null;
  if (null != id.streak_started_at) {
    const _Date3 = Date;
    date5 = new Date(id.streak_started_at);
  }
  obj.streakStartedAt = date5;
  obj.currency = id.currency;
  let date6 = null;
  if (null != id.pause_ends_at) {
    const _Date4 = Date;
    date6 = new Date(id.pause_ends_at);
  }
  obj.pauseEndsAt = date6;
  ({
    pause_reason: obj.pauseReason,
    metadata: obj.metadata,
    use_storekit_resubscribe: obj.useStorekitResubscribe,
    price: obj.price,
    user_id: obj.userId,
  } = id);
  if (null != id.latest_invoice) {
    obj = { latestInvoice: InvoiceRecord.createInvoiceFromServer(id.latest_invoice) };
    let obj1 = obj;
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
    fromServer = GooglePlayPriceChangeRecord.createFromServer(id.price_change);
  }
  obj.priceChange = fromServer;
  return new SubscriptionRecord(obj);
};
prototype["getCurrentSubscriptionPlanIdForGroup"] = function getCurrentSubscriptionPlanIdForGroup(items) {
  items = this.items;
  const found = items.find((planId) => items.includes(planId.planId));
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
  set: undefined,
});
Object.defineProperty(prototype, "isACOM", {
  get: function isACOM() {
    return this.paymentGateway === constants.APPLE_ADVANCED_COMMERCE;
  },
  set: undefined,
});
Object.defineProperty(prototype, "planIdForCurrencies", {
  get: function planIdForCurrencies() {
    const self = this;
    if (this.isPremium) {
      let tmp5 = null != self.planIdFromItems;
      if (tmp5) {
        tmp5 = "" !== self.planIdFromItems;
      }
      require("../../_runtime/metro/00038__.js")(tmp5, "Premium subscription has no planId for currencies");
      let planId = self.planIdFromItems;
      const tmp3 = require("../../_runtime/metro/00038__.js");
    } else {
      planId = self.planId;
    }
    return planId;
  },
  set: undefined,
});
Object.defineProperty(prototype, "planIdFromItems", {
  get: function planIdFromItems() {
    return this.getCurrentSubscriptionPlanIdForGroup(Object.values(map1));
  },
  set: undefined,
});
Object.defineProperty(prototype, "premiumPlanIdFromItems", {
  get: function premiumPlanIdFromItems() {
    const items = [...closure_1_11];
    return this.getCurrentSubscriptionPlanIdForGroup(items);
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPurchasedViaDesktop", {
  get: function isPurchasedViaDesktop() {
    return null == this.paymentGateway;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPurchasedViaAppleGeneric", {
  get: function isPurchasedViaAppleGeneric() {
    return this.paymentGateway === constants.APPLE_PARTNER || this.isACOM;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPurchasedViaApple", {
  get: function isPurchasedViaApple() {
    return this.paymentGateway === constants.APPLE || this.isACOM;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPurchasedViaGoogle", {
  get: function isPurchasedViaGoogle() {
    return this.paymentGateway === constants.GOOGLE;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPurchasedExternally", {
  get: function isPurchasedExternally() {
    return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isOnPlatformMatchingExternalPaymentGateway", {
  get: function isOnPlatformMatchingExternalPaymentGateway() {
    let isPurchasedViaApple = this.isPurchasedViaApple;
    if (isPurchasedViaApple) {
      isPurchasedViaApple = require("PlatformUtils").isIOS();
      const obj = require("PlatformUtils");
    }
    if (!isPurchasedViaApple) {
      let isPurchasedViaGoogle = this.isPurchasedViaGoogle;
      if (isPurchasedViaGoogle) {
        isPurchasedViaGoogle = require("BillingPlatformUtils").isGooglePlayBillingSupported();
        const obj2 = require("BillingPlatformUtils");
      }
      isPurchasedViaApple = isPurchasedViaGoogle;
    }
    return isPurchasedViaApple;
  },
  set: undefined,
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
  set: undefined,
});
Object.defineProperty(prototype, "hasPremiumNitroMonthly", {
  get: function hasPremiumNitroMonthly() {
    const items = this.items;
    return null != items.find((planId) => planId.planId === PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  },
  set: undefined,
});
Object.defineProperty(prototype, "isBoostOnly", {
  get: function isBoostOnly() {
    let items = this.items;
    return items.every((planId) => {
      const items = [,];
      ({ PREMIUM_MONTH_GUILD: arr[0], PREMIUM_YEAR_GUILD: arr[1] } = closure_1_13);
      return items.includes(planId.planId);
    });
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPausedOrPausePending", {
  get: function isPausedOrPausePending() {
    const ALL_PAUSE = constants3.ALL_PAUSE;
    return ALL_PAUSE.has(this.status);
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPaused", {
  get: function isPaused() {
    return this.status === constants2.PAUSED;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPausedForFractionalPremium", {
  get: function isPausedForFractionalPremium() {
    let tmp = this.status === constants2.PAUSED;
    if (tmp) {
      tmp = this.pauseReason === constants5.FRACTIONAL_PREMIUM;
    }
    return tmp;
  },
  set: undefined,
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
  set: undefined,
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
  set: undefined,
});
Object.defineProperty(prototype, "isEnded", {
  get: function isEnded() {
    return this.status === constants2.ENDED;
  },
  set: undefined,
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
  set: undefined,
});
Object.defineProperty(prototype, "isActive", {
  get: function isActive() {
    return this.status === constants2.ACTIVE;
  },
  set: undefined,
});
Object.defineProperty(prototype, "statusAllowsPerks", {
  get: function statusAllowsPerks() {
    const ALLOW_PERKS = constants3.ALLOW_PERKS;
    return ALLOW_PERKS.has(this.status);
  },
  set: undefined,
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
  set: undefined,
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
  set: undefined,
});
Object.defineProperty(prototype, "premiumSince", {
  get: function premiumSince() {
    let createdAt = this.streakStartedAt;
    if (createdAt == null) {
      createdAt = this.createdAt;
    }
    return createdAt;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasAnyPremiumNitro", {
  get: function hasAnyPremiumNitro() {
    const items = this.items;
    return items.some((planId) => set.has(planId.planId));
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasAnyPremiumGroup", {
  get: function hasAnyPremiumGroup() {
    const items = this.items;
    return items.some((planId) => planId.planId === constants.PREMIUM_GROUP_MONTH);
  },
  set: undefined,
});
prototype["hasPremiumAtLeast"] = function hasPremiumAtLeast(TIER_2) {
  closure_0 = TIER_2;
  let someResult = this.isPremium;
  if (someResult) {
    const items = this.items;
    someResult = items.some((item) =>
      PremiumTypeUtils.isPremiumAtLeast(dependencyMap[item.planId].premiumType, closure_0),
    );
  }
  return someResult;
};
const size = fn(2);
const result = size.fileFinishedImporting("records/SubscriptionRecord.tsx");

export default SubscriptionRecord;
export { SubscriptionRecord };
