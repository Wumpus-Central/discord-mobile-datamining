// discord_app/modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx
import SubscriptionPlanActionCreators from "../../actions/SubscriptionPlanActionCreators.tsx";
import subscriptionUtils from "subscriptionUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import SubscriptionPlanStore from "../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore.tsx";

require = fn;
const SubscriptionTypes = fn(1074).SubscriptionTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx");

export default function useActiveSubscriptionListingForGroup(arg0) {
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
        let tmp6 = item10012;
        if (item10012.type === SubscriptionTypes.GUILD) {
          let obj2 = subscriptionUtils;
          obj[obj2.getRoleSubscriptionPlanId(tmp6)] = tmp6;
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
        let obj = { activeSubscription: tmp2, activeSubscriptionListing: tmp };
        return obj;
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
  activeSubscriptionPlanFromStore = tmp(tmp2[5]).useStateFromStores(items3, () => {
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
  return {
    activeSubscription: activeSubscription.activeSubscription,
    activeSubscriptionListing,
    activeSubscriptionPlanFromStore,
  };
}
