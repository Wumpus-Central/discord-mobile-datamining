// === Module 19996: ApplicationSubscriptionsStore ===

// Module 19996 (ApplicationSubscriptionsStore)
import _modDef38 from "module_38" /* 38 */;
import initializeAll from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import EntitlementRecord from "EntitlementRecord" /* 2166 */;
import SKUStore from "SKUStore" /* 6360 */;

function makeGroupListingIndexSubscriptionListingTag(arg0) {
  return "subscription_listing:" + arg0;
}
function saveGroupListing(id) {
  const result = secondaryIndexMap.set(id.id, id);
  let prop = id.subscription_listings;
  if (prop == null) {
    prop = [];
  }
  while (tmp2 !== undefined) {
    let tmp5 = saveListing(tmp3);
    continue;
  }
  tmp2 = prop[Symbol.iterator]();
}
function saveListing(id) {
  const result = secondaryIndexMap1.set(id.id, id);
}
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const secondaryIndexMap = new fn(4970).SecondaryIndexMap((application_id) => {
  items = ["application:" + application_id.application_id, ...prop.map(makeGroupListingIndexSubscriptionListingTag)];
  prop = application_id.subscription_listings_ids;
  return items;
}, (id) => id.id);
const secondaryIndexMap1 = new fn(4970).SecondaryIndexMap((application_id) => {
  items = ["application:" + application_id.application_id, "plan:" + application_id.subscription_plans[0].id];
  return items;
}, (id) => id.id);
const secondaryIndexMap2 = new fn(4970).SecondaryIndexMap((applicationId) => {
  items = ["entitlement:" + applicationId.applicationId + ":" + applicationId.guildId + ":" + applicationId.isValid(null, SKUStore), "entitlement:" + applicationId.guildId + ":" + applicationId.isValid(null, SKUStore)];
  return items;
}, (id) => id.id);
let closure_9 = {};
let closure_10 = {};
const Store = initializeAll.Store;
class ApplicationSubscriptionsStore extends Store {
}
const prototype = ApplicationSubscriptionsStore.prototype;
prototype["getSubscriptionGroupListingsForApplicationFetchState"] = function getSubscriptionGroupListingsForApplicationFetchState(arg0) {
  let NOT_FETCHED = closure_9[arg0];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getSubscriptionGroupListing"] = function getSubscriptionGroupListing(arg0) {
  return secondaryIndexMap.get(arg0);
};
prototype["getSubscriptionGroupListingForSubscriptionListing"] = function getSubscriptionGroupListingForSubscriptionListing(arg0) {
  const values = secondaryIndexMap.values("subscription_listing:" + arg0);
  _modDef38(values.length <= 1, "Found multiple group listings for listing");
  return values[0];
};
prototype["getSubscriptionListing"] = function getSubscriptionListing(arg0) {
  return secondaryIndexMap1.get(arg0);
};
prototype["getSubscriptionListingsForApplication"] = function getSubscriptionListingsForApplication(arg0) {
  return secondaryIndexMap1.values("application:" + arg0);
};
prototype["getEntitlementsForGuildFetchState"] = function getEntitlementsForGuildFetchState(id2) {
  let NOT_FETCHED = closure_10[id2];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getSubscriptionListingForPlan"] = function getSubscriptionListingForPlan(arg0) {
  const values = secondaryIndexMap1.values("plan:" + arg0);
  _modDef38(values.length <= 1, "Found multiple listings for plan");
  return values[0];
};
prototype["getApplicationEntitlementsForGuild"] = function getApplicationEntitlementsForGuild(id, guildId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  return secondaryIndexMap2.values("entitlement:" + id + ":" + guildId + ":" + flag);
};
prototype["getEntitlementsForGuild"] = function getEntitlementsForGuild(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  return secondaryIndexMap2.values("entitlement:" + arg0 + ":" + flag);
};
ApplicationSubscriptionsStore.displayName = "ApplicationSubscriptionStore";
const applicationSubscriptionsStore = new ApplicationSubscriptionsStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    secondaryIndexMap.clear();
    secondaryIndexMap1.clear();
    secondaryIndexMap2.clear();
    closure_9 = {};
    closure_10 = {};
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function handleFetchListings(applicationId) {
    closure_9[applicationId.applicationId] = obj.FETCHING;
    value = secondaryIndexMap.get(applicationId.groupListingId);
    if (null != value) {
      const subscription_listings_ids = value.subscription_listings_ids;
      for (const item10015 of subscription_listings_ids) {
        let deleteResult = secondaryIndexMap1.delete(item10015);
        continue;
      }
    }
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function handleFetchListingsSuccess(applicationId) {
    closure_9[applicationId.applicationId] = obj.FETCHED;
    saveGroupListing(applicationId.groupListing);
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function handleFetchListingsFailure(applicationId) {
    closure_9[applicationId.applicationId] = obj.FETCHED;
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(guildId) {
    closure_10[guildId.guildId] = obj.FETCHING;
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(entitlements) {
    entitlements = entitlements.entitlements;
    closure_10[entitlements.guildId] = obj.FETCHED;
    const item = entitlements.forEach((item) => {
      const fromServer = EntitlementRecord.createFromServer(item);
      const result = secondaryIndexMap2.set(fromServer.id, fromServer);
    });
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(guildId) {
    closure_10[guildId.guildId] = obj.NOT_FETCHED;
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function handleFetchListingForPlanSuccess(groupListing) {
    saveGroupListing(groupListing.groupListing);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium_apps/ApplicationSubscriptionsStore.tsx");

export default applicationSubscriptionsStore;
export { FetchState };