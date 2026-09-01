// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import CreatorMonetizationRestrictions from "../creator_monetization_review/CreatorMonetizationReviewConstants.tsx";
import version from "../../../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx";
import set from "../../../_runtime/00002_set.js";

function makeGroupListingIndexSubscriptionListingTag(arg0) {
  return "subscription_listing:" + arg0;
}
function getSubscriptionGroupListingsForGuild(arg0) {
  return secondaryIndexMap.values("guild:" + arg0);
}
function saveGroupListing(groupListing) {
  const result = secondaryIndexMap.set(groupListing.id, groupListing);
  const result1 = map.set(groupListing.guild_id, groupListing.application_id);
  let prop = groupListing.subscription_listings;
  if (prop == null) {
    prop = [];
  }
  while (tmp3 !== undefined) {
    let tmp5 = saveListing;
    let tmp6 = saveListing(tmp4);
    continue;
  }
}
function saveListing(id) {
  const result = secondaryIndexMap1.set(id.id, id);
}
function saveBenefitChannels(benefitChannels) {
  const iter = benefitChannels[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = map1;
    let result = map1.set(nextResult.id, nextResult);
    continue;
  }
}
let closure_2 = CreatorMonetizationRestrictions.DefaultCreatorMonetizationRestrictions;
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const secondaryIndexMap = new version.SecondaryIndexMap(
  (guild_id) => {
    const items = ["guild:" + guild_id.guild_id, ...prop.map(makeGroupListingIndexSubscriptionListingTag)];
    prop = guild_id.subscription_listings_ids;
    return items;
  },
  (id) => id.id,
);
const secondaryIndexMap1 = new version.SecondaryIndexMap(
  (application_id) => {
    const items = ["application:" + application_id.application_id, "plan:" + application_id.subscription_plans[0].id];
    return items;
  },
  (id) => id.id,
);
let closure_7 = {};
let set = new Set();
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
const map = new Map();
const map1 = new Map();
let closure_19 = [];
const Store = initializeDefault.Store;
class GuildRoleSubscriptionsStore extends Store {}
const prototype = GuildRoleSubscriptionsStore.prototype;
prototype["getSubscriptionGroupListingsForGuildFetchState"] = function getSubscriptionGroupListingsForGuildFetchState(
  guildId,
) {
  let NOT_FETCHED = table[guildId];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getDidFetchListingForSubscriptionPlanId"] = function getDidFetchListingForSubscriptionPlanId(arg0) {
  return set.has(arg0);
};
prototype["getSubscriptionGroupListing"] = function getSubscriptionGroupListing(arg0) {
  return secondaryIndexMap.get(arg0);
};
prototype["getSubscriptionGroupListingsForGuild"] = function getSubscriptionGroupListingsForGuild(arg0) {
  return secondaryIndexMap.values("guild:" + arg0);
};
prototype["getSubscriptionGroupListingForSubscriptionListing"] =
  function getSubscriptionGroupListingForSubscriptionListing(createSubscription) {
    const values = secondaryIndexMap.values("subscription_listing:" + createSubscription);
    _modDef38(values.length <= 1, "Found multiple group listings for listing");
    return values[0];
  };
prototype["getSubscriptionListing"] = function getSubscriptionListing(editStateId) {
  return secondaryIndexMap1.get(editStateId);
};
prototype["getSubscriptionListingsForGuild"] = function getSubscriptionListingsForGuild(closure_0) {
  const first = this.getSubscriptionGroupListingsForGuild(closure_0)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  if (null != application_id) {
    const _HermesInternal = HermesInternal;
    let values = secondaryIndexMap1.values("application:" + application_id);
  } else {
    values = closure_19;
  }
  return values;
};
prototype["getSubscriptionListingForPlan"] = function getSubscriptionListingForPlan(closure_0) {
  const values = secondaryIndexMap1.values("plan:" + closure_0);
  _modDef38(values.length <= 1, "Found multiple listings for plan");
  return values[0];
};
prototype["getSubscriptionSettings"] = function getSubscriptionSettings(id) {
  return table2[id];
};
prototype["getSubscriptionTrial"] = function getSubscriptionTrial(id) {
  return table3[id];
};
prototype["getMonetizationRestrictions"] = function getMonetizationRestrictions(id) {
  return table4[id];
};
prototype["getMonetizationRestrictionsFetchState"] = function getMonetizationRestrictionsFetchState(id) {
  let NOT_FETCHED = table5[id];
  if (NOT_FETCHED == null) {
    NOT_FETCHED = obj.NOT_FETCHED;
  }
  return NOT_FETCHED;
};
prototype["getApplicationIdForGuild"] = function getApplicationIdForGuild(guild_id) {
  return map.get(guild_id);
};
prototype["getBenefitChannel"] = function getBenefitChannel(closure_0) {
  return map1.get(closure_0);
};
GuildRoleSubscriptionsStore.displayName = "GuildRoleSubscriptionsStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    secondaryIndexMap.clear();
    secondaryIndexMap1.clear();
    closure_7 = {};
    set.clear();
    closure_9 = {};
    closure_10 = {};
    closure_11 = {};
    closure_12 = {};
    map.clear();
    map1.clear();
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function handleUpdateSettings(settings) {
    settings = settings.settings;
    closure_9[settings.guild_id] = settings;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function handleFetchListings(guildId) {
    guildId = guildId.guildId;
    closure_7[guildId] = obj.FETCHING;
    for (const item10012 of tmp) {
      let tmp2 = secondaryIndexMap;
      let deleteResult = secondaryIndexMap.delete(item10012.id);
      let subscription_listings_ids = item10012.subscription_listings_ids;
      let tmp4 = subscription_listings_ids;
      let tmp5 = subscription_listings_ids;
      for (const item10022 of subscription_listings_ids) {
        let tmp6 = secondaryIndexMap1;
        let deleteResult1 = secondaryIndexMap1.delete(item10022);
        continue;
      }
      continue;
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function handleFetchListingsSuccess(arg0) {
    ({ guildId, groupListings, subscriptionTrials } = arg0);
    closure_7[guildId] = obj.FETCHED;
    ({ benefitChannels, settings } = arg0);
    while (tmp !== undefined) {
      let tmp3 = saveGroupListing;
      let tmp4 = saveGroupListing(tmp2);
      continue;
    }
    closure_9[guildId] = settings;
    for (const item10023 of subscriptionTrials) {
      let tmp5 = closure_10;
      closure_10[item10023.id] = item10023;
      continue;
    }
    saveBenefitChannels(benefitChannels);
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function handleFetchListingsFailure(guildId) {
    closure_7[guildId.guildId] = obj.FETCHED;
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function handleUpdateGroupListing(listing) {
    listing = listing.listing;
    saveGroupListing(listing);
    if (null != listing.benefit_channels) {
      saveBenefitChannels(listing.benefit_channels);
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function handleDeleteGroupListing(groupListingId) {
    secondaryIndexMap.delete(groupListingId.groupListingId);
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function handleFetchListingForPlan(planId) {
    set.add(planId.planId);
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function handleFetchListingForPlanSuccess(groupListing) {
    saveGroupListing(groupListing.groupListing);
  },
  GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function handleCreateListing(listing) {
    listing = listing.listing;
    const result = secondaryIndexMap1.set(listing.id, listing);
    saveGroupListing(listing.groupListing);
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function handleUpdateListing(listing) {
    listing = listing.listing;
    const result = secondaryIndexMap1.set(listing.id, listing);
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function handleDeleteListing(listingId) {
    return secondaryIndexMap1.delete(listingId.listingId);
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function handleUpdateSubscriptionTrial(subscriptionTrial) {
    subscriptionTrial = subscriptionTrial.subscriptionTrial;
    closure_10[subscriptionTrial.id] = subscriptionTrial;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function handleFetchRestrictions(guildId) {
    closure_12[guildId.guildId] = obj.FETCHING;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function handleFetchRestrictionsSuccess(guildId) {
    guildId = guildId.guildId;
    closure_11[guildId] = guildId.restrictions;
    closure_12[guildId] = obj.FETCHED;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function handleFetchRestrictionsFailure(guildId) {
    guildId = guildId.guildId;
    closure_12[guildId] = obj.FETCHED;
    closure_11[guildId] = closure_2;
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function handleFetchRestrictionsAborted(guildId) {
    closure_12[guildId.guildId] = obj.NOT_FETCHED;
  },
};
const guildRoleSubscriptionsStore = new GuildRoleSubscriptionsStore(dispatcherDefault, obj);
let result = set.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx");

export default guildRoleSubscriptionsStore;
export const FetchState = obj;
