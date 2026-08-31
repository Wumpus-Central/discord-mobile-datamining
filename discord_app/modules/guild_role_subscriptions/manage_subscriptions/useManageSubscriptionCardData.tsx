// === Module 14786: useManageSubscriptionCardData ===

// Module 14786 (useManageSubscriptionCardData)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "createGuildRecordFromRust" /* 1909 */;
import closure_6 from "makeGroupListingIndexSubscriptionListingTag" /* 4085 */;
import { SubscriptionStatusTypes } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/manage_subscriptions/useManageSubscriptionCardData.tsx");

export default function useManageSubscriptionCardData(currentPeriodEnd) {
  let obj = _require(stateFromStores1[8]);
  _require = obj.getRoleSubscriptionPlanId(currentPeriodEnd);
  const items = [fetchSubscriptionsSettings];
  const stateFromStores = _require(stateFromStores1[9]).useStateFromStores(items, () => fetchSubscriptionsSettings.getSubscriptionListingForPlan(closure_0));
  const obj2 = _require(stateFromStores1[9]);
  const items1 = [fetchSubscriptionsSettings];
  stateFromStores1 = _require(stateFromStores1[9]).useStateFromStores(items1, () => {
    let subscriptionGroupListingForSubscriptionListing = null;
    if (null != stateFromStores) {
      subscriptionGroupListingForSubscriptionListing = fetchSubscriptionsSettings.getSubscriptionGroupListingForSubscriptionListing(tmp.id);
    }
    return subscriptionGroupListingForSubscriptionListing;
  });
  const obj3 = _require(stateFromStores1[9]);
  const items2 = [closure_5];
  const stateFromStores2 = _require(stateFromStores1[9]).useStateFromStores(items2, () => {
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    return guild.getGuild(guild_id);
  });
  const tmp6 = stateFromStores2(first.useState(false), 2);
  first = tmp6[0];
  closure_5 = tmp6[1];
  const obj4 = _require(stateFromStores1[9]);
  fetchSubscriptionsSettings = _require(stateFromStores1[10]).useFetchSubscriptionsSettings().fetchSubscriptionsSettings;
  const items3 = [first, stateFromStores2, fetchSubscriptionsSettings];
  const effect = first.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = null != stateFromStores2;
    }
    if (tmp) {
      tmp = null == fetchSubscriptionsSettings.getSubscriptionSettings(stateFromStores2.id);
    }
    if (tmp) {
      fetchSubscriptionsSettings(stateFromStores2.id);
    }
  }, items3);
  if (null == stateFromStores) {
    obj = { guild: null, expanded: null, handleToggleExpanded: null, listing: null, groupListing: null, subscriptionInfo: null };
    obj[0] = stateFromStores2;
    obj[1] = first;
    obj[2] = function handleToggleExpanded() {
      return guild((arg0) => !arg0);
    };
    obj[3] = stateFromStores;
    obj[4] = stateFromStores1;
    obj[5] = undefined;
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
    obj = { memberSince: null, nextRenewalDate: null, nextRenewalLabel: null, subscriptionPrice: null, isCancelled: null, isPastDue: null, isTrial: null };
    obj[0] = tmp9(tmp2[5])(currentPeriodEnd.createdAt).format("M/D/YY");
    obj[1] = formatResult;
    const intl = tmp(tmp2[7]).intl;
    const string = intl.string;
    let UAfot2 = tmp(tmp2[7]).t;
    if (currentPeriodEnd.status === SubscriptionStatusTypes.CANCELED) {
      UAfot2 = UAfot2.UAfot2;
      let stringResult = string(UAfot2);
    } else {
      stringResult = string(UAfot2.CVjLcM);
    }
    obj[2] = stringResult;
    obj[3] = str2;
    obj[4] = currentPeriodEnd.status === SubscriptionStatusTypes.CANCELED;
    obj[5] = currentPeriodEnd.status === SubscriptionStatusTypes.PAST_DUE;
    obj[6] = currentPeriodEnd.hasActiveTrial;
    const obj8 = tmp9(tmp2[5])(currentPeriodEnd.createdAt);
  }
};