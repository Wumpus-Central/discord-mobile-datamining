// === Module 15223: useManageSubscriptionCardData ===

// Module 15223 (useManageSubscriptionCardData)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4193 */;

const require = fn;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx");

export default function useManageSubscriptionCardData(currentPeriodEnd) {
  let obj = require("subscriptionUtils");
  _require = obj.getRoleSubscriptionPlanId(currentPeriodEnd);
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
  const tmp6 = stateFromStores2(expanded.useState(false), 2);
  expanded = tmp6[0];
  closure_5 = tmp6[1];
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
  if (null == stateFromStores) {
    obj = {
      guild: stateFromStores2,
      expanded,
      handleToggleExpanded() {
          return closure_5((arg0) => !arg0);
        },
      listing: stateFromStores,
      groupListing: stateFromStores1,
      subscriptionInfo: undefined
    };
    return obj;
  } else {
    let str2 = "";
    const obj6 = stateFromStores(tmp2[5])(currentPeriodEnd.currentPeriodEnd);
    const tmp9 = stateFromStores;
    if (null != currentPeriodEnd.price) {
      str2 = tmp(tmp2[6]).formatPrice(currentPeriodEnd.price, currentPeriodEnd.currency);
      const tmpResult = tmp(tmp2[6]);
    }
    const formatResult = stateFromStores(tmp2[5])(currentPeriodEnd.currentPeriodEnd).format("M/D/YY");
    obj = { memberSince: tmp9(tmp2[5])(currentPeriodEnd.createdAt).format("M/D/YY"), nextRenewalDate: formatResult, nextRenewalLabel: null, subscriptionPrice: null, isCancelled: null, isPastDue: null, isTrial: null };
    const intl = tmp(tmp2[7]).intl;
    const string = intl.string;
    let UAfot2 = tmp(tmp2[7]).t;
    if (currentPeriodEnd.status === SubscriptionStatusTypes.CANCELED) {
      UAfot2 = UAfot2.UAfot2;
      let stringResult = string(UAfot2);
    } else {
      stringResult = string(UAfot2.CVjLcM);
    }
    obj.nextRenewalLabel = stringResult;
    obj.subscriptionPrice = str2;
    obj.isCancelled = currentPeriodEnd.status === SubscriptionStatusTypes.CANCELED;
    obj.isPastDue = currentPeriodEnd.status === SubscriptionStatusTypes.PAST_DUE;
    obj.isTrial = currentPeriodEnd.hasActiveTrial;
    const obj8 = tmp9(tmp2[5])(currentPeriodEnd.createdAt);
  }
  const obj5 = require("GuildRoleSubscriptionsHooks");
};