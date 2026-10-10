// === Module 15493: useManageSubscriptionCardData ===

// Module 15493 (useManageSubscriptionCardData)
import util from "util" /* 1126 */;
import _modDef4702 from "module_4702" /* 4702 */;
import PriceUtils from "PriceUtils" /* 6939 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4743 */;

const require = globalThis.__r;

require = fn;
function computeSubscriptionInfo(subscription) {
  subscription = subscription.subscription;
  let str = "";
  const obj = _modDef4702(subscription.currentPeriodEnd);
  if (null != subscription.price) {
    str = PriceUtils.formatPrice(subscription.price, subscription.currency);
  }
  const formatResult = _modDef4702(subscription.currentPeriodEnd).format("M/D/YY");
  const obj4 = { memberSince: _modDef4702(subscription.createdAt).format("M/D/YY"), nextRenewalDate: formatResult, nextRenewalLabel: null, subscriptionPrice: null, isCancelled: null, isPastDue: null, isTrial: null };
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (subscription.status === SubscriptionStatusTypes.CANCELED) {
    let stringResult = string(t.UAfot2);
  } else {
    stringResult = string(t.CVjLcM);
  }
  obj4.nextRenewalLabel = stringResult;
  obj4.subscriptionPrice = str;
  obj4.isCancelled = subscription.status === SubscriptionStatusTypes.CANCELED;
  obj4.isPastDue = subscription.status === SubscriptionStatusTypes.PAST_DUE;
  obj4.isTrial = subscription.hasActiveTrial;
  return obj4;
}
const SubscriptionStatusTypes = fn(1085).SubscriptionStatusTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useManageSubscriptionCardData(items) {
  const cResult = require("c").c(26);
  if (cResult[0] !== items) {
    const roleSubscriptionPlanId = tmp(tmp2[10]).getRoleSubscriptionPlanId(items);
    cResult[0] = items;
    cResult[1] = roleSubscriptionPlanId;
    let tmp4 = roleSubscriptionPlanId;
    const tmpResult = tmp(tmp2[10]);
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    items = [fetchSubscriptionsSettings];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    cResult[3] = tmp4;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, S);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    const items1 = [fetchSubscriptionsSettings];
    cResult[5] = items1;
    const tmp10 = items1;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp12;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const tmpResult5 = require("initialize");
  stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp12);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    const items2 = [GuildStore];
    cResult[8] = items2;
    const tmp14 = items2;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  if (stateFromStores1 != null) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  if (cResult[9] !== undefined) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    if (stateFromStores1 != null) {
      class S {
        constructor() {
          return closure_6.getSubscriptionListingForPlan(closure_0);
        }
      }
    }
    class F {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        if (closure_2 != null) {
          guild_id = closure_2.guild_id;
        }
        return closure_5.getGuild(guild_id);
      }
    }
    cResult[9] = tmp16;
    cResult[10] = F;
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const tmpResult6 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp14, F);
  const tmp18 = stateFromStores2(first.useState(false), 2);
  first = tmp18[0];
  GuildStore = tmp18[1];
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
    class F {
      constructor() {
        guild_id = undefined;
        tmp = closure_5;
        if (closure_2 != null) {
          guild_id = closure_2.guild_id;
        }
        return closure_5.getGuild(guild_id);
      }
    }
  } else {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  const tmpResult7 = require("initialize");
  fetchSubscriptionsSettings = require("GuildRoleSubscriptionsHooks").useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
  if (cResult[12] === first) {
    class S {
      constructor() {
        return closure_6.getSubscriptionListingForPlan(closure_0);
      }
    }
  }
  class T {
    constructor() {
      tmp = closure_4;
      if (closure_4) {
        tmp2 = closure_3;
        tmp3 = null;
        tmp = null != closure_3;
      }
      if (tmp) {
        tmp4 = closure_6;
        tmp5 = closure_3;
        tmp6 = null;
        tmp = null == closure_6.getSubscriptionSettings(closure_3.id);
      }
      if (tmp) {
        tmp7 = closure_6;
        tmp8 = closure_3;
        tmp9 = closure_6(closure_3.id);
      }
      return;
    }
  }
  const items3 = [first, stateFromStores2, fetchSubscriptionsSettings];
  cResult[12] = first;
  cResult[13] = fetchSubscriptionsSettings;
  cResult[14] = stateFromStores2;
  cResult[15] = T;
  cResult[16] = items3;
  const tmpResult8 = require("GuildRoleSubscriptionsHooks");
}) : (function useManageSubscriptionCardData(subscription) {
  _require = require("subscriptionUtils").getRoleSubscriptionPlanId(subscription);
  const obj = require("subscriptionUtils");
  const items = [fetchSubscriptionsSettings];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionListingForPlan(closure_0));
  const obj2 = require("initialize");
  const items1 = [fetchSubscriptionsSettings];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let subscriptionGroupListingForSubscriptionListing = null;
    if (null != stateFromStores) {
      subscriptionGroupListingForSubscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListingForSubscriptionListing(tmp.id);
    }
    return subscriptionGroupListingForSubscriptionListing;
  });
  const obj3 = require("initialize");
  const items2 = [closure_5];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => {
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const tmp4 = stateFromStores2(expanded.useState(false), 2);
  expanded = tmp4[0];
  closure_5 = tmp4[1];
  const obj4 = require("initialize");
  fetchSubscriptionsSettings = require("GuildRoleSubscriptionsHooks").useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
  const items3 = [expanded, stateFromStores2, fetchSubscriptionsSettings];
  const effect = expanded.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null != stateFromStores2;
    }
    if (tmp) {
      tmp = null == GuildRoleSubscriptionsStore.getSubscriptionSettings(stateFromStores2.id);
    }
    if (tmp) {
      fetchSubscriptionsSettings(stateFromStores2.id);
    }
  }, items3);
  let tmp7;
  if (null != stateFromStores) {
    const obj6 = { subscription };
    tmp7 = computeSubscriptionInfo(obj6);
  }
  return {
    guild: stateFromStores2,
    expanded,
    handleToggleExpanded() {
      return closure_5((arg0) => !arg0);
    },
    listing: stateFromStores,
    groupListing: stateFromStores1,
    subscriptionInfo: tmp7
  };
});