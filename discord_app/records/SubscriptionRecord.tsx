// discord_app/records/SubscriptionRecord.tsx
import PremiumTypeUtils from "../utils/PremiumTypeUtils.tsx";
import PremiumSubscription from "../modules/premium/PremiumSubscription.tsx";
import Record from "../lib/Record.tsx";
import GooglePlayPriceChangeRecord from "../modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx";
import InvoiceRecord from "InvoiceRecord.tsx";
import Constants from "../Constants.tsx";
import BillingConstants from "../components/billing/BillingConstants.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function createSubscriptionItemFromServer(id) {
  return { id: id.id, planId: id.plan_id, quantity: id.quantity };
}
({
  PaymentGateways: hasOwnProperty,
  SubscriptionStatusTypes: metroRequire,
  SubscriptionStatusTypesSets: metroImportDefault,
  SubscriptionTypes: metroImportAll,
} = Constants);
({ SubscriptionPauseReason: c9, SubscriptionPauseReasonSets: c10 } = BillingConstants);
({ PREMIUM_PLANS: unpackModuleId, SubscriptionPlanInfo: closure_12, SubscriptionPlans: map1 } = PremiumConstants);
class SubscriptionRecord extends Record {
  constructor(type) {
    let interval;
    let intervalCount;
    let tmp10;
    let tmp9;
    const tmp7 = new SubscriptionRecord(tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
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
    } = type);
    const renewalMutations = tmp7.renewalMutations;
    let planId = type.items[0].planId;
    let planId2 = null;
    if (type.type === metroImportAll.PREMIUM) {
      ({ interval, intervalCount } = closure_12[type.items[0].planId]);
      const obj = PremiumSubscription;
      const basePlanIdForSubscriptionItems = obj.getBasePlanIdForSubscriptionItems(type.items, interval, intervalCount);
      planId = basePlanIdForSubscriptionItems;
      tmp9 = null;
      tmp10 = basePlanIdForSubscriptionItems;
      if (null != renewalMutations) {
        const tmp12Result = PremiumSubscription;
        const basePlanIdForSubscriptionItems1 = tmp12Result.getBasePlanIdForSubscriptionItems(
          renewalMutations.items,
          interval,
          intervalCount,
        );
        planId2 = basePlanIdForSubscriptionItems1;
        tmp9 = basePlanIdForSubscriptionItems1;
        tmp10 = basePlanIdForSubscriptionItems;
      }
    } else {
      tmp9 = null;
      tmp10 = planId;
      const tmp8 = null != renewalMutations && renewalMutations.items.length > 0;
      if (tmp8) {
        planId2 = renewalMutations.items[0].planId;
        tmp9 = planId2;
        tmp10 = planId;
      }
    }
    tmp7.planId = tmp10;
    const items = type.items;
    tmp7.additionalPlans = items.filter((planId) => planId.planId !== planId);
    const tmp16 = null != renewalMutations && null != tmp9;
    if (tmp16) {
      renewalMutations.planId = tmp9;
      const items1 = renewalMutations.items;
      renewalMutations.additionalPlans = items1.filter((planId) => planId.planId !== planId2);
    }
    return tmp7;
  }
  static createFromServer(id) {
    let date1;
    let date4;
    let date5;
    let date6;
    let fromServer;
    let items;
    let items1;
    let obj4;
    let prop;
    let tmp8;
    const obj = {
      id: id.id,
      type: id.type,
      createdAt: new Date(id.created_at),
      canceledAt: date1,
      currentPeriodStart: new Date(id.current_period_start),
      currentPeriodEnd: new Date(id.current_period_end),
      status: null,
      paymentSourceId: null,
      paymentGateway: null,
      paymentGatewayPlanId: null,
      paymentGatewaySubscriptionId: null,
      trialId: null,
      trialEndsAt: date4,
      items: items.map(createSubscriptionItemFromServer),
      renewalMutations: tmp8,
      streakStartedAt: date5,
      currency: id.currency,
      pauseEndsAt: date6,
      pauseReason: null,
      metadata: null,
      useStorekitResubscribe: null,
      price: null,
      userId: null,
      eligiblePaymentGateways: prop,
      priceChange: fromServer,
    };
    date1 = null;
    new Date(id.created_at);
    if (null != id.canceled_at) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date1 = new Date(id.canceled_at);
    }
    new Date(id.current_period_start);
    ({
      status: obj.status,
      payment_source_id: obj.paymentSourceId,
      payment_gateway: obj.paymentGateway,
      payment_gateway_plan_id: obj.paymentGatewayPlanId,
      payment_gateway_subscription_id: obj.paymentGatewaySubscriptionId,
      trial_id: obj.trialId,
    } = id);
    date4 = null;
    new Date(id.current_period_end);
    if (null != id.trial_ends_at) {
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      date4 = new Date(id.trial_ends_at);
    }
    items = id.items;
    tmp8 = null;
    if (null != id.renewal_mutations) {
      const obj2 = {
        items: items1.map(createSubscriptionItemFromServer),
        paymentGatewayPlanId: id.renewal_mutations.payment_gateway_plan_id,
      };
      items1 = id.renewal_mutations.items;
      tmp8 = obj2;
    }
    date5 = null;
    if (null != id.streak_started_at) {
      const _Date3 = Date;
      const self5 = this;
      const self6 = this;
      date5 = new Date(id.streak_started_at);
    }
    date6 = null;
    if (null != id.pause_ends_at) {
      const _Date4 = Date;
      const self7 = this;
      const self8 = this;
      date6 = new Date(id.pause_ends_at);
    }
    ({
      pause_reason: obj.pauseReason,
      metadata: obj.metadata,
      use_storekit_resubscribe: obj.useStorekitResubscribe,
      price: obj.price,
      user_id: obj.userId,
    } = id);
    if (null != id.latest_invoice) {
      obj4 = { latestInvoice: InvoiceRecord.createInvoiceFromServer(id.latest_invoice) };
      const obj3 = { latestInvoice: InvoiceRecord.createInvoiceFromServer(id.latest_invoice) };
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    prop = id.eligible_payment_gateways;
    if (prop == null) {
      prop = null;
    }
    fromServer = null;
    if (null != id.price_change) {
      fromServer = GooglePlayPriceChangeRecord.createFromServer(id.price_change);
    }
    return new SubscriptionRecord(obj);
  }
  getCurrentSubscriptionPlanIdForGroup(items) {
    items = this.items;
    const found = items.find((planId) => items.includes(planId.planId));
    let planId;
    if (found != null) {
      planId = found.planId;
    }
    return planId;
  }
  hasPremiumAtLeast(TIER_2) {
    let closure_0 = TIER_2;
    let someResult = this.isPremium;
    if (someResult) {
      const items = this.items;
      someResult = items.some((item) => {
        const tmp = closure_12[item.planId];
        const obj = PremiumTypeUtils;
        return obj.isPremiumAtLeast(tmp.premiumType, TIER_2);
      });
    }
    return someResult;
  }
}
const prototype = SubscriptionRecord.prototype;
Object.defineProperty(prototype, "isPremium", {
  get: function isPremium() {
    return this.type === metroImportAll.PREMIUM;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isACOM", {
  get: function isACOM() {
    return this.paymentGateway === hasOwnProperty.APPLE_ADVANCED_COMMERCE;
  },
  set: undefined,
});
Object.defineProperty(prototype, "planIdForCurrencies", {
  get: function planIdForCurrencies() {
    let planId;
    const self = this;
    if (this.isPremium) {
      let tmp5 = null != self.planIdFromItems;
      const tmp3 = require("../../_runtime/metro/00038__.js");
      if (tmp5) {
        tmp5 = "" !== self.planIdFromItems;
      }
      tmp3(tmp5, "Premium subscription has no planId for currencies");
      planId = self.planIdFromItems;
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
    return this.paymentGateway === hasOwnProperty.APPLE_PARTNER || this.isACOM;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPurchasedViaApple", {
  get: function isPurchasedViaApple() {
    return this.paymentGateway === hasOwnProperty.APPLE || this.isACOM;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPurchasedViaGoogle", {
  get: function isPurchasedViaGoogle() {
    return this.paymentGateway === hasOwnProperty.GOOGLE;
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
      const obj = require("PlatformUtils");
      isPurchasedViaApple = obj.isIOS();
    }
    if (!isPurchasedViaApple) {
      let isPurchasedViaGoogle = this.isPurchasedViaGoogle;
      if (isPurchasedViaGoogle) {
        const obj2 = require("BillingPlatformUtils");
        isPurchasedViaGoogle = obj2.isGooglePlayBillingSupported();
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
    const isPurchasedExternally =
      this.isPurchasedExternally &&
      null != self.renewalMutations &&
      self.paymentGatewayPlanId !== self.renewalMutations.paymentGatewayPlanId;
    return isPurchasedExternally;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasPremiumNitroMonthly", {
  get: function hasPremiumNitroMonthly() {
    let PREMIUM_MONTH_TIER_2;
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
    const ALL_PAUSE = metroImportDefault.ALL_PAUSE;
    return ALL_PAUSE.has(this.status);
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPaused", {
  get: function isPaused() {
    return this.status === metroRequire.PAUSED;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPausedForFractionalPremium", {
  get: function isPausedForFractionalPremium() {
    return this.status === metroRequire.PAUSED && this.pauseReason === constants5.FRACTIONAL_PREMIUM;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isPausedAllowsUpdatesButNotResume", {
  get: function isPausedAllowsUpdatesButNotResume() {
    let hasItem = this.status === metroRequire.PAUSED;
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
    let tmp = this.status === metroRequire.PAUSED;
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
    return this.status === metroRequire.ENDED;
  },
  set: undefined,
});
Object.defineProperty(prototype, "endedAt", {
  get: function endedAt() {
    const self = this;
    let tmp = null;
    if (this.status === metroRequire.ENDED) {
      let currentPeriodEnd;
      const metadata = self.metadata;
      let ended_at;
      if (metadata != null) {
        ended_at = metadata.ended_at;
      }
      if (null != ended_at) {
        const _Date = Date;
        const self2 = this;
        const self3 = this;
        currentPeriodEnd = new Date(self.metadata.ended_at);
      } else {
        currentPeriodEnd = self.currentPeriodEnd;
      }
      tmp = currentPeriodEnd;
    }
    return tmp;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isActive", {
  get: function isActive() {
    return this.status === metroRequire.ACTIVE;
  },
  set: undefined,
});
Object.defineProperty(prototype, "statusAllowsPerks", {
  get: function statusAllowsPerks() {
    const ALLOW_PERKS = metroImportDefault.ALLOW_PERKS;
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
      const self2 = this;
      const self3 = this;
      tmp = new Date() < self.trialEndsAt;
      const date = new Date();
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
        const self2 = this;
        const self3 = this;
        const _Date2 = Date;
        const self4 = this;
        const self5 = this;
        const date = new Date();
        tmp = date <= new Date(active_discount_expires_at);
        const date1 = new Date(active_discount_expires_at);
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
const result = size.fileFinishedImporting("records/SubscriptionRecord.tsx");

export default SubscriptionRecord;
export { SubscriptionRecord };
