// === Module 16788: useActiveSubscriptionListingForGroup ===

// Module 16788 (useActiveSubscriptionListingForGroup)
import SubscriptionPlanActionCreators from "SubscriptionPlanActionCreators" /* 6946 */;
import subscriptionUtils from "subscriptionUtils" /* 15309 */;
import noop from "module_19" /* 19 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4731 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4700 */;

const require = globalThis.__r;

require = fn;
const SubscriptionTypes = fn(1085).SubscriptionTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveSubscriptionListingForGroup(arg0) {
  _require = arg0;
  const cResult = require("c").c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores1];
    const fn = function p() {
      return stateFromStores1.getSubscriptions();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
  if (null != stateFromStores) {
    if (cResult[3] !== stateFromStores) {
      let obj2 = {};
      const _Object = Object;
      const values = Object.values(stateFromStores);
      for (const item10048 of values) {
        if (item10048.type === SubscriptionTypes.GUILD) {
          let obj5 = require("subscriptionUtils");
          obj2[obj5.getRoleSubscriptionPlanId(item10048)] = item10048;
        }
        continue;
      }
      cResult[3] = stateFromStores;
      cResult[4] = obj2;
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {};
      cResult[2] = obj3;
      let tmp10 = obj3;
    } else {
      tmp10 = cResult[2];
    }
    dependencyMap = tmp10;
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [c5];
      cResult[5] = items1;
      let tmp23 = items1;
    } else {
      tmp23 = cResult[5];
    }
    if (cResult[6] === arg0) {
      if (cResult[7] === tmp10) {
        let tmp25 = cResult[8];
      }
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp23, tmp25);
      ({ activeSubscription, activeSubscriptionListing } = stateFromStoresObject);
      let first;
      if (activeSubscriptionListing != null) {
        first = activeSubscriptionListing.subscription_plans[0];
      }
      let id;
      if (first != null) {
        id = first.id;
      }
      let sku_id;
      if (first != null) {
        sku_id = first.sku_id;
      }
      const _Symbol3 = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [sku_id];
        cResult[9] = items2;
        let tmp34 = items2;
      } else {
        tmp34 = cResult[9];
      }
      if (cResult[10] !== id) {
        class P {
          constructor() {
            value = null;
            if (null != id) {
              tmp3 = closure_3;
              value = closure_3.get(tmp);
            }
            return value;
          }
        }
        cResult[10] = id;
        cResult[11] = P;
      } else {
        class P {
          constructor() {
            value = null;
            if (null != id) {
              tmp3 = closure_3;
              value = closure_3.get(tmp);
            }
            return value;
          }
        }
      }
      const obj6 = require("initialize");
      stateFromStores1 = require("initialize").useStateFromStores(tmp34, P);
      if (activeSubscriptionListing != null) {
        class P {
          constructor() {
            value = null;
            if (null != id) {
              tmp3 = closure_3;
              value = closure_3.get(tmp);
            }
            return value;
          }
        }
      }
      c5 = tmp38;
      if (cResult[12] === undefined) {
        class P {
          constructor() {
            value = null;
            if (null != id) {
              tmp3 = closure_3;
              value = closure_3.get(tmp);
            }
            return value;
          }
        }
      }
      class A {
        constructor() {
          isFetchingForSKUResult = null != closure_4;
          if (!isFetchingForSKUResult) {
            tmp2 = sku_id;
            isFetchingForSKUResult = null == sku_id;
          }
          if (!isFetchingForSKUResult) {
            tmp3 = closure_3;
            tmp4 = sku_id;
            isFetchingForSKUResult = closure_3.isFetchingForSKU(sku_id);
          }
          if (!isFetchingForSKUResult) {
            tmp5 = closure_0;
            tmp6 = closure_1;
            obj = closure_0(closure_1[9]);
            tmp7 = sku_id;
            tmp8 = soft_deleted;
            tmp9 = obj;
            subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, soft_deleted);
          }
          return;
        }
      }
      const items3 = [stateFromStores1, sku_id, undefined];
      cResult[12] = undefined;
      cResult[13] = stateFromStores1;
      cResult[14] = sku_id;
      cResult[15] = A;
      cResult[16] = items3;
      const tmp26Result = require("initialize");
    }
    const fn2 = function h() {
      let tmp2 = null;
      let subscriptionGroupListing = null;
      if (null != closure_0) {
        subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp3);
      }
      let prop;
      if (subscriptionGroupListing != null) {
        prop = subscriptionGroupListing.subscription_listings_ids;
      }
      if (prop == null) {
        prop = [];
      }
      for (const item10017 of prop) {
        let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10017);
        id = undefined;
        if (subscriptionListing != null) {
          id = subscriptionListing.subscription_plans[0].id;
        }
        if (null != id) {
          let tmp13 = closure_1[tmp10];
          if (null != tmp13) {
            tmp2 = tmp13;
            let tmp = subscriptionListing;
            obj.return();
            break;
          }
          let obj2 = { activeSubscription: tmp2, activeSubscriptionListing: tmp };
          return obj2;
        }
        continue;
      }
    };
    cResult[6] = arg0;
    cResult[7] = tmp10;
    cResult[8] = fn2;
    tmp25 = fn2;
  }
  const tmp2Result = require("initialize");
}) : (function useActiveSubscriptionListingForGroup(arg0) {
  _require = arg0;
  const items = [sku_id];
  stateFromStores = require("initialize").useStateFromStores(items, () => sku_id.getSubscriptions());
  const items1 = [stateFromStores];
  noop = noop.useMemo(() => {
    if (null == stateFromStores) {
      return {};
    } else {
      const obj = {};
      const _Object = Object;
      const values = Object.values(tmp);
      for (const item10012 of values) {
        if (item10012.type === SubscriptionTypes.GUILD) {
          let obj2 = subscriptionUtils;
          obj[obj2.getRoleSubscriptionPlanId(item10012)] = item10012;
        }
        continue;
      }
      return obj;
    }
  }, items1);
  let obj = require("initialize");
  let obj2 = noop;
  let tmp = _require;
  let tmp2 = stateFromStores;
  const items2 = [activeSubscriptionPlanFromStore];
  const activeSubscription = require("initialize").useStateFromStoresObject(items2, () => {
    let tmp2 = null;
    let subscriptionGroupListing = null;
    if (null != closure_0) {
      subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp3);
    }
    let prop;
    if (subscriptionGroupListing != null) {
      prop = subscriptionGroupListing.subscription_listings_ids;
    }
    if (prop == null) {
      prop = [];
    }
    for (const item10017 of prop) {
      let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10017);
      id = undefined;
      if (subscriptionListing != null) {
        id = subscriptionListing.subscription_plans[0].id;
      }
      if (null != id) {
        let tmp13 = closure_2[tmp10];
        if (null != tmp13) {
          tmp2 = tmp13;
          let tmp = subscriptionListing;
          obj.return();
          break;
        }
        let obj2 = { activeSubscription: tmp2, activeSubscriptionListing: tmp };
        return obj2;
      }
      continue;
    }
  });
  const activeSubscriptionListing = activeSubscription.activeSubscriptionListing;
  let first;
  if (activeSubscriptionListing != null) {
    first = activeSubscriptionListing.subscription_plans[0];
  }
  let id;
  if (first != null) {
    id = first.id;
  }
  sku_id = undefined;
  if (first != null) {
    sku_id = first.sku_id;
  }
  const obj3 = require("initialize");
  const items3 = [id];
  activeSubscriptionPlanFromStore = tmp(tmp2[7]).useStateFromStores(items3, () => {
    value = null;
    if (null != id) {
      value = SubscriptionPlanStore.get(tmp);
    }
    return value;
  });
  let soft_deleted;
  if (activeSubscriptionListing != null) {
    soft_deleted = activeSubscriptionListing.soft_deleted;
  }
  const items4 = [activeSubscriptionPlanFromStore, sku_id, soft_deleted];
  const effect = obj2.useEffect(() => {
    let isFetchingForSKUResult = null != activeSubscriptionPlanFromStore;
    if (!isFetchingForSKUResult) {
      isFetchingForSKUResult = null == sku_id;
    }
    if (!isFetchingForSKUResult) {
      isFetchingForSKUResult = SubscriptionPlanStore.isFetchingForSKU(sku_id);
    }
    if (!isFetchingForSKUResult) {
      const obj = SubscriptionPlanActionCreators;
      const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, soft_deleted);
    }
  }, items4);
  return { activeSubscription: activeSubscription.activeSubscription, activeSubscriptionListing, activeSubscriptionPlanFromStore };
});