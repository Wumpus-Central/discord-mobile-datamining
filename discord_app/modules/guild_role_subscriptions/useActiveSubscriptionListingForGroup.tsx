// discord_app/modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx
import noop from "../../../_runtime/00019_noop.js";
import addSubscriptionPlan from "../../stores/billing/SubscriptionPlanStore.tsx";
import reset from "../../stores/billing/SubscriptionStore.tsx";
import makeGroupListingIndexSubscriptionListingTag from "GuildRoleSubscriptionsStore.tsx";
import { SubscriptionTypes } from "../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useActiveSubscriptionListingForGroup.tsx");

export default function useActiveSubscriptionListingForGroup(arg0) {
  const _require = arg0;
  const items = [sku_id];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => sku_id.getSubscriptions());
  const items1 = [stateFromStores];
  React = React.useMemo(() => {
    if (null == stateFromStores) {
      return {};
    } else {
      const obj = {};
      const _Object = Object;
      const values = Object.values(tmp);
      for (const item10012 of values) {
        if (item10012.type === soft_deleted.GUILD) {
          let obj2 = callback(stateFromStores[6]);
          obj[obj2.getRoleSubscriptionPlanId(item10012)] = item10012;
        }
        continue;
      }
      return obj;
    }
  }, items1);
  let obj = _require(stateFromStores[5]);
  let obj2 = React;
  let tmp = _require;
  let tmp2 = stateFromStores;
  const items2 = [activeSubscriptionPlanFromStore];
  const activeSubscription = _require(stateFromStores[5]).useStateFromStoresObject(items2, () => {
    let tmp2 = null;
    let subscriptionGroupListing = null;
    if (null != closure_0) {
      subscriptionGroupListing = activeSubscriptionPlanFromStore.getSubscriptionGroupListing(tmp3);
    }
    let prop;
    if (subscriptionGroupListing != null) {
      prop = subscriptionGroupListing.subscription_listings_ids;
    }
    if (prop == null) {
      prop = [];
    }
    for (const item10017 of prop) {
      let subscriptionListing = activeSubscriptionPlanFromStore.getSubscriptionListing(item10017);
      id = undefined;
      if (subscriptionListing != null) {
        id = subscriptionListing.subscription_plans[0].id;
      }
      if (null != id) {
        let tmp13 = table[tmp10];
        if (null != tmp13) {
          tmp2 = tmp13;
          let tmp = subscriptionListing;
          obj.return();
          break;
        }
        let obj = { activeSubscription: null, activeSubscriptionListing: null };
        obj[0] = tmp2;
        obj[1] = tmp;
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
  const obj3 = _require(stateFromStores[5]);
  const items3 = [id];
  activeSubscriptionPlanFromStore = tmp(tmp2[5]).useStateFromStores(items3, () => {
    let value = null;
    if (null != id) {
      value = id.get(tmp);
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
      isFetchingForSKUResult = id.isFetchingForSKU(sku_id);
    }
    if (!isFetchingForSKUResult) {
      const obj = callback(stateFromStores[7]);
      const subscriptionPlansForSKU = obj.fetchSubscriptionPlansForSKU(sku_id, undefined, undefined, soft_deleted);
    }
  }, items4);
  return { activeSubscription: activeSubscription.activeSubscription, activeSubscriptionListing, activeSubscriptionPlanFromStore };
};