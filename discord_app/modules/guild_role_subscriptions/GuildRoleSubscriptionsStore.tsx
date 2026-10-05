// === Module 4502: GuildRoleSubscriptionsStore ===

// Module 4502 (GuildRoleSubscriptionsStore)
import _modDef38 from "module_38" /* 38 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import CreatorMonetizationReviewConstants from "CreatorMonetizationReviewConstants" /* 4503 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4504 */;
import size from "module_2" /* 2 */;

let closure_10, closure_11, closure_7, closure_9;

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
  const tmp3 = prop[Symbol.iterator]();
  while (tmp3 !== undefined) {
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
    let result = map1.set(nextResult.id, nextResult);
    continue;
  }
}
let closure_2 = CreatorMonetizationReviewConstants.DefaultCreatorMonetizationRestrictions;
const FetchState = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED" };
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap((guild_id) => {
  let prop;
  const items = ["guild:" + guild_id.guild_id, ...prop.map(makeGroupListingIndexSubscriptionListingTag)];
  prop = guild_id.subscription_listings_ids;
  return items;
}, (id) => id.id);
const secondaryIndexMap1 = new SecondaryIndexMap.SecondaryIndexMap((application_id) => {
  const items = ["application:" + application_id.application_id, "plan:" + application_id.subscription_plans[0].id];
  return items;
}, (id) => id.id);
const metroImportDefault = {};
const set = new Set();
const React4 = {};
const authStore = {};
const unpackModuleId = {};
let closure_12 = {};
const map = new Map();
const map1 = new Map();
let closure_19 = [];
const Store = get_initializedDefault.Store;
class GuildRoleSubscriptionsStore extends Store {
  getSubscriptionGroupListingsForGuildFetchState(guildId) {
    let NOT_FETCHED = closure_7[guildId];
    if (NOT_FETCHED == null) {
      NOT_FETCHED = obj.NOT_FETCHED;
    }
    return NOT_FETCHED;
  }
  getDidFetchListingForSubscriptionPlanId(item) {
    return set.has(item);
  }
  getSubscriptionGroupListing(arg0) {
    return secondaryIndexMap.get(arg0);
  }
  getSubscriptionGroupListingsForGuild(arg0) {
    return secondaryIndexMap.values("guild:" + arg0);
  }
  getSubscriptionGroupListingForSubscriptionListing(id) {
    const values = secondaryIndexMap.values("subscription_listing:" + id);
    _modDef38(values.length <= 1, "Found multiple group listings for listing");
    return values[0];
  }
  getSubscriptionListing(item10017) {
    return secondaryIndexMap1.get(item10017);
  }
  getSubscriptionListingsForGuild(arg0) {
    let values;
    const first = this.getSubscriptionGroupListingsForGuild(arg0)[0];
    let application_id;
    if (first != null) {
      application_id = first.application_id;
    }
    if (null != application_id) {
      const _HermesInternal = HermesInternal;
      values = secondaryIndexMap1.values("application:" + application_id);
    } else {
      values = closure_19;
    }
    return values;
  }
  getSubscriptionListingForPlan(arg0) {
    const values = secondaryIndexMap1.values("plan:" + arg0);
    _modDef38(values.length <= 1, "Found multiple listings for plan");
    return values[0];
  }
  getSubscriptionSettings(id) {
    return closure_9[id];
  }
  getSubscriptionTrial(id) {
    return closure_10[id];
  }
  getMonetizationRestrictions(id) {
    return closure_11[id];
  }
  getMonetizationRestrictionsFetchState(id) {
    let NOT_FETCHED = closure_12[id];
    if (NOT_FETCHED == null) {
      NOT_FETCHED = obj.NOT_FETCHED;
    }
    return NOT_FETCHED;
  }
  getApplicationIdForGuild(guild_id) {
    return map.get(guild_id);
  }
  getBenefitChannel(arg0) {
    return map1.get(arg0);
  }
}
const prototype = GuildRoleSubscriptionsStore.prototype;
GuildRoleSubscriptionsStore.displayName = "GuildRoleSubscriptionsStore";
const obj2 = {
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
    const tmp = getSubscriptionGroupListingsForGuild(guildId);
    for (const item10012 of tmp) {
      let deleteResult = secondaryIndexMap.delete(item10012.id);
      let subscription_listings_ids = item10012.subscription_listings_ids;
      for (const item10022 of subscription_listings_ids) {
        let deleteResult1 = secondaryIndexMap1.delete(item10022);
        continue;
      }
      continue;
    }
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function handleFetchListingsSuccess(arg0) {
    let benefitChannels;
    let groupListings;
    let guildId;
    let settings;
    let subscriptionTrials;
    ({ guildId, groupListings, subscriptionTrials } = arg0);
    closure_7[guildId] = obj.FETCHED;
    ({ benefitChannels, settings } = arg0);
    const tmp = groupListings[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = saveGroupListing(tmp2);
      continue;
    }
    closure_9[guildId] = settings;
    for (const item10023 of subscriptionTrials) {
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
    const groupListing = listing.groupListing;
    const result = secondaryIndexMap1.set(listing.id, listing);
    saveGroupListing(groupListing);
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
  }
};
const guildRoleSubscriptionsStore = new GuildRoleSubscriptionsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsStore.tsx");

export default guildRoleSubscriptionsStore;
export { FetchState };