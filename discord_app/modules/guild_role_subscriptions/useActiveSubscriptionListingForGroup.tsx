// discord_app/modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx
import Constants from "../../Constants.tsx";
import SubscriptionPlanActionCreators from "../../actions/SubscriptionPlanActionCreators.tsx";
import subscriptionUtils from "subscriptionUtils.tsx";
import react_mod from "../../../_runtime/00019_react.js";
import SubscriptionPlanStore from "../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c5, dependencyMap;

let react = react_mod;
const SubscriptionTypes = Constants.SubscriptionTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activeSubscription;
      let activeSubscriptionListing;
      let closure_0;
      let closure_1;
      let stateFromStores1;
      let tmp10;
      let tmp20;
      let tmp6;
      let tmp7;
      _require = arg0;
      let tmp = _require;
      let tmp2 = _require;
      const tmp3 = dependencyMap;
      let obj = require("react");
      const cResult = obj.c(21);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp8 = stateFromStores1;
        const items = [stateFromStores1];
        class S {
          constructor() {
            return stateFromStores1.getSubscriptions();
          }
        }
        cResult[0] = items;
        cResult[1] = S;
        tmp6 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmp2Result = tmp2(504);
      const stateFromStores = tmp2Result.useStateFromStores(tmp6, S);
      if (null != stateFromStores) {
        let tmp11;
        if (cResult[3] !== stateFromStores) {
          let obj2 = {};
          const _Object = Object;
          const values = Object.values(stateFromStores);
          class S {
            constructor() {
              return stateFromStores1.getSubscriptions();
            }
          }
          let tmp13 = values;
          for (const item10048 of values) {
            if (item10048.type === SubscriptionTypes.GUILD) {
              class S {
                constructor() {
                  return stateFromStores1.getSubscriptions();
                }
              }
              let obj5 = require("subscriptionUtils");
              obj2[obj5.getRoleSubscriptionPlanId(item10048)] = item10048;
            }
            class S {
              constructor() {
                return stateFromStores1.getSubscriptions();
              }
            }
          }
          cResult[3] = stateFromStores;
          cResult[4] = obj2;
          tmp11 = obj2;
        } else {
          tmp11 = cResult[4];
        }
        tmp10 = tmp11;
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {};
          cResult[2] = obj3;
          class S {
            constructor() {
              return stateFromStores1.getSubscriptions();
            }
          }
        } else {
          tmp10 = cResult[2];
        }
      }
      dependencyMap = tmp10;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [c5];
        class S {
          constructor() {
            return stateFromStores1.getSubscriptions();
          }
        }
        cResult[5] = items1;
        tmp20 = items1;
      } else {
        tmp20 = cResult[5];
      }
      if (cResult[6] === arg0) {
        let tmp22;
        let tmp31;
        if (cResult[7] === tmp10) {
          tmp22 = cResult[8];
        }
        class S {
          constructor() {
            return stateFromStores1.getSubscriptions();
          }
        }
        const obj6 = require("get initialized");
        const stateFromStoresObject = obj6.useStateFromStoresObject(tmp20, tmp22);
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
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [sku_id];
          class S {
            constructor() {
              return stateFromStores1.getSubscriptions();
            }
          }
          cResult[9] = items2;
          tmp31 = items2;
        } else {
          tmp31 = cResult[9];
        }
        if (cResult[10] !== id) {
          class U {
            constructor() {
              let value = null;
              if (null != id) {
                value = SubscriptionPlanStore.get(tmp);
              }
              return value;
            }
          }
          cResult[10] = id;
          class S {
            constructor() {
              return stateFromStores1.getSubscriptions();
            }
          }
          cResult[11] = U;
        } else {
          class U {
            constructor() {
              let value = null;
              if (null != id) {
                value = SubscriptionPlanStore.get(tmp);
              }
              return value;
            }
          }
        }
        const tmp23Result = tmp23(504);
        stateFromStores1 = tmp23Result.useStateFromStores(tmp31, U);
        if (activeSubscriptionListing != null) {
          class U {
            constructor() {
              let value = null;
              if (null != id) {
                value = SubscriptionPlanStore.get(tmp);
              }
              return value;
            }
          }
        }
        c5 = tmp35;
        if (cResult[12] === undefined) {
          class U {
            constructor() {
              let value = null;
              if (null != id) {
                value = SubscriptionPlanStore.get(tmp);
              }
              return value;
            }
          }
        }
        class E {
          constructor() {
            const isFetchingForSKUResult =
              null != stateFromStores1 || null == sku_id || SubscriptionPlanStore.isFetchingForSKU(sku_id);
            if (!isFetchingForSKUResult) {
              const obj = SubscriptionPlanActionCreators;
              const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, c5);
            }
          }
        }
        const items3 = [stateFromStores1, sku_id, undefined];
        cResult[12] = undefined;
        cResult[13] = stateFromStores1;
        cResult[14] = sku_id;
        cResult[15] = E;
        cResult[16] = items3;
      }
      const fn = function h() {
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
            let tmp;
            let tmp13 = closure_1[tmp10];
            if (null != tmp13) {
              tmp2 = tmp13;
              tmp = subscriptionListing;
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
      cResult[8] = fn;
      tmp22 = fn;
    }
  : (arg0) => {
      let activeSubscriptionPlanFromStore;
      let closure_0;
      let closure_2;
      let sku_id;
      let stateFromStores;
      _require = arg0;
      let tmp = _require;
      let tmp2 = stateFromStores;
      let obj = require("get initialized");
      const items = [sku_id];
      stateFromStores = obj.useStateFromStores(items, () => sku_id.getSubscriptions());
      let obj2 = react;
      const items1 = [stateFromStores];
      react = react.useMemo(() => {
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
      const items2 = [activeSubscriptionPlanFromStore];
      const obj3 = require("get initialized");
      const stateFromStoresObject = obj3.useStateFromStoresObject(items2, () => {
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
            let tmp;
            let tmp13 = closure_2[tmp10];
            if (null != tmp13) {
              tmp2 = tmp13;
              tmp = subscriptionListing;
              obj.return();
              break;
            }
            let obj2 = { activeSubscription: tmp2, activeSubscriptionListing: tmp };
            return obj2;
          }
          continue;
        }
      });
      const activeSubscriptionListing = stateFromStoresObject.activeSubscriptionListing;
      let first;
      const activeSubscription = stateFromStoresObject.activeSubscription;
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
      const items3 = [id];
      const tmpResult = tmp(tmp2[7]);
      activeSubscriptionPlanFromStore = tmpResult.useStateFromStores(items3, () => {
        let value = null;
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
        const isFetchingForSKUResult =
          null != activeSubscriptionPlanFromStore || null == sku_id || SubscriptionPlanStore.isFetchingForSKU(sku_id);
        if (!isFetchingForSKUResult) {
          const obj = SubscriptionPlanActionCreators;
          const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, soft_deleted);
        }
      }, items4);
      return { activeSubscription, activeSubscriptionListing, activeSubscriptionPlanFromStore };
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx");

export default tmp2;
