// === Module 4788: ApplicationStore ===

// Module 4788 (ApplicationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "module_32" /* 32 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

function addApplication(fromServer) {
  value = map.get(fromServer.id);
  const result = map4.set(fromServer.id, Date.now());
  let result1 = fromServer;
  if (null != value) {
    result1 = value.mergeFromApplicationUpdate(fromServer);
  }
  const result2 = map.set(fromServer.id, result1);
  const result3 = map3.set(fromServer.name.toLowerCase(), result1);
  for (const item10031 of tmp5) {
    let result4 = map3.set(item10031.toLowerCase(), result1);
    continue;
  }
  if (null != fromServer.linkedGames) {
    const linkedGames = fromServer.linkedGames;
    const iter = linkedGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp12 = nextResult;
      if (null == nextResult.application) {
        continue;
      } else {
        let obj3 = ApplicationRecord;
        let tmp13 = addApplication;
        if (tmp12.application instanceof ApplicationRecord) {
          let application = tmp12.application;
        } else {
          application = obj3.createFromServer(tmp12.application);
        }
        let tmp13Result = tmp13(application);
      }
    }
  }
  map5.delete(fromServer.id);
}
function handleWishlistAction(wishlistData) {
  const applications = wishlistData.wishlistData.applications;
  if (null != applications) {
    if (0 !== applications.length) {
      for (const item10010 of applications) {
        let tmp4 = addApplication(item10010);
        continue;
      }
    }
  }
  return false;
}
function handleAppWithBot(arg0) {
  ({ userId, applicationId } = arg0);
  let num = closure_10.botUserIdToAppUsage;
  if (null == closure_10.botUserIdToAppUsage[userId]) {
    let obj = { applicationId, lastUsedMs: null };
    const _Date = Date;
    obj.lastUsedMs = Date.now();
  } else {
    obj = { applicationId, lastUsedMs: tmp2.lastUsedMs };
  }
  num[userId] = obj;
  new Map();
  const entries = Object.entries(closure_10.botUserIdToAppUsage);
  applicationId = entries;
  userId = entries[Symbol.iterator]();
  num = 2;
}
function handleApplicationWidgetConfigFetchSuccess(applications) {
  applications = applications.applications;
  if (0 === applications.length) {
    return false;
  } else {
    for (const item10008 of applications) {
      let tmp5 = addApplication(ApplicationRecord.createFromServer(item10008));
      continue;
    }
    return true;
  }
}
function handleEntitlementsFetched(arg0) {
  let flag = false;
  const iter = arg0.entitlements[Symbol.iterator]();
  while (iter !== undefined) {
    let sku = iter.next().sku;
    let application;
    let tmp = sku;
    if (sku != null) {
      application = sku.application;
    }
    if (null != application) {
      let tmp6 = addApplication(ApplicationRecord.createFromServer(tmp.application));
      flag = true;
    }
    continue;
  }
  return flag;
}
function handleIntegrationsChanged(guildId) {
  guildId = guildId.guildId;
  if (map2.has(guildId)) {
    obj.delete(guildId);
  } else {
    return false;
  }
  obj = map2;
}
let closure_2 = [];
let map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
let set = new Set();
let closure_10 = { botUserIdToAppUsage: {} };
const PersistedStore = initializeDefault.PersistedStore;
class ApplicationStore extends PersistedStore {
}
const prototype = ApplicationStore.prototype;
prototype["initialize"] = function initialize(botUserIdToAppUsage) {
  if (null != botUserIdToAppUsage) {
    if (typeof botUserIdToAppUsage.botUserIdToAppUsage === "object") {
      for (const key10002 in arg0.botUserIdToAppUsage) {
        ({ applicationId, lastUsedMs } = arg0.botUserIdToAppUsage[key10002]);
        let tmp = typeof applicationId === "string";
        if (typeof applicationId === "string") {
          tmp = applicationId.length > 0;
        }
        if (tmp) {
          tmp = typeof lastUsedMs === "number";
        }
        if (tmp) {
          tmp = lastUsedMs > 0;
        }
        if (!tmp) {
          continue;
        } else {
          let obj = { applicationId, lastUsedMs };
          closure_10.botUserIdToAppUsage[key10002] = obj;
          continue;
        }
        continue;
      }
    }
  }
};
prototype["getState"] = function getState() {
  return closure_10;
};
prototype["_getAllApplications"] = function _getAllApplications() {
  return Array.from(map.values());
};
prototype["getGuildApplication"] = function getGuildApplication(arg0, arg1) {
  if (null != arg0) {
    const values = map.values();
    for (const item10011 of values) {
      if (item10011.guildId === arg0) {
        if (tmp5.type === arg1) {
          obj.return();
          return item10011;
        }
      }
      continue;
    }
  }
};
prototype["getGuildApplicationIds"] = function getGuildApplicationIds(arg0) {
  if (null == arg0) {
    value = closure_2;
  } else {
    value = map1.get(arg0);
    if (value == null) {
      value = closure_2;
    }
  }
  return value;
};
prototype["getGuildEmbeddedApplications"] = function getGuildEmbeddedApplications(arg0, arg1) {
  if (null != arg0) {
    map2.get(arg0);
    value = undefined;
    if (value != null) {
      value = value.get(arg1);
    }
    return value;
  }
};
prototype["getApplication"] = function getApplication(arg0) {
  if (null != arg0) {
    return map.get(arg0);
  }
};
prototype["getApplicationByName"] = function getApplicationByName(name) {
  if (null != name) {
    const formatted = name.toLowerCase();
    value = undefined;
    if (map3.has(formatted)) {
      value = map3.get(formatted);
    }
    return value;
  }
};
prototype["getApplicationLastUpdated"] = function getApplicationLastUpdated(arg0) {
  return map4.get(arg0);
};
prototype["isFetchingApplication"] = function isFetchingApplication(id) {
  return true === map5.get(id);
};
prototype["isHydrated"] = function isHydrated(item) {
  return set.has(item);
};
prototype["didFetchingApplicationFail"] = function didFetchingApplicationFail(applicationId) {
  return false === map5.get(applicationId);
};
prototype["getFetchingOrFailedFetchingIds"] = function getFetchingOrFailedFetchingIds() {
  return Array.from(map5.keys());
};
prototype["getAppIdForBotUserId"] = function getAppIdForBotUserId(id) {
  if (null != id) {
    let applicationId;
    if (closure_10.botUserIdToAppUsage[id] != null) {
      applicationId = tmp2.applicationId;
    }
    return applicationId;
  }
};
ApplicationStore.displayName = "ApplicationStore";
ApplicationStore.persistKey = "ApplicationStore";
const applicationStore = new ApplicationStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    map5.clear();
    set.clear();
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    const iter = arg0.applications[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = new.target;
      let tmp5 = new.target;
      let tmp7 = new ApplicationRecord(nextResult);
      let tmp9 = addApplication(tmp7);
      continue;
    }
  },
  APPLICATION_FETCH: function handleApplicationFetch(applicationId) {
    applicationId = applicationId.applicationId;
    value = map5.get(applicationId);
    const result = map5.set(applicationId, true);
    return true !== value;
  },
  APPLICATION_FETCH_SUCCESS: function handleApplicationFetchSuccess(application) {
    application = application.application;
    if (true === application.isHydrated) {
      set.add(application.id);
    }
    addApplication(ApplicationRecord.createFromServer(application));
  },
  APPLICATION_FETCH_FAIL: function handleApplicationFetchFail(applicationId) {
    applicationId = applicationId.applicationId;
    value = map5.get(applicationId);
    const result = map5.set(applicationId, false);
    return false !== value;
  },
  APPLICATIONS_FETCH: function handleApplicationsFetch(arg0) {
    let flag = false;
    const iter = arg0.applicationIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      value = map5.get(nextResult);
      let result = map5.set(nextResult, true);
      flag = true !== value;
      continue;
    }
    return flag;
  },
  APPLICATIONS_FETCH_SUCCESS: function handleApplicationsFetchSuccess(arg0) {
    const iter = arg0.applications[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (true === tmp) {
        let addResult = set.add(tmp3.id);
      }
      let tmp10 = addApplication(ApplicationRecord.createFromServer(tmp3));
      continue;
    }
  },
  APPLICATIONS_FETCH_FAIL: function handleApplicationsFetchFail(arg0) {
    let flag = false;
    for (const item10008 of tmp) {
      value = map5.get(item10008);
      let result = map5.set(item10008, false);
      flag = false !== value;
      continue;
    }
    return flag;
  },
  APPLICATION_UPDATE: function handleUpdateApplication(application) {
    addApplication(ApplicationRecord.createFromServer(application.application));
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: handleEntitlementsFetched,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: handleEntitlementsFetched,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: handleEntitlementsFetched,
  GUILD_APPLICATIONS_FETCH_SUCCESS: function handleGuildApplicationsFetchSuccess(guildId) {
    const items = [];
    const iter = guildId.applications[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr = items.push(nextResult.id);
      let tmp5 = addApplication(ApplicationRecord.createFromServer(nextResult));
      continue;
    }
    const result = map1.set(guildId.guildId, items);
  },
  GUILD_EMBEDDED_APPLICATIONS_FETCH_SUCCESS: function handleGuildEmbeddedApplicationsFetchSuccess(surface) {
    ({ guildId, items } = surface);
    items = [];
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let application = nextResult.application;
      let obj = { applicationId: application.id, status: nextResult.status };
      let arr = items.push(obj);
      let tmp5 = addApplication(ApplicationRecord.createFromServer(application));
      continue;
    }
    value = map2.get(guildId);
    if (null == value) {
      const _Map = Map;
      map = new Map();
      const result = map2.set(guildId, map);
      value = map;
    }
    const result1 = value.set(surface.surface, items);
  },
  GUILD_INTEGRATIONS_UPDATE: handleIntegrationsChanged,
  INTEGRATION_CREATE: handleIntegrationsChanged,
  INTEGRATION_UPDATE: handleIntegrationsChanged,
  INTEGRATION_DELETE: handleIntegrationsChanged,
  BILLING_PAYMENTS_FETCH_SUCCESS: function handleFetchPayments(arg0) {
    set = new Set();
    const iter = arg0.payments[Symbol.iterator]();
    while (iter !== undefined) {
      let sku = iter.next().sku;
      let application;
      if (sku != null) {
        application = sku.application;
      }
      let tmp2 = application;
      let hasItem = null == application;
      if (!hasItem) {
        hasItem = set.has(tmp2.id);
      }
      if (!hasItem) {
        let tmp8 = addApplication(ApplicationRecord.createFromServer(tmp2));
      }
      continue;
    }
    return set.size > 0;
  },
  PAYMENT_UPDATE: function handleUpdatePayment(payment) {
    payment = payment.payment;
    const sku = payment.sku;
    let application;
    if (sku != null) {
      application = sku.application;
    }
    if (null == application) {
      return false;
    } else {
      addApplication(ApplicationRecord.createFromServer(payment.sku.application));
    }
  },
  INVITE_RESOLVE_SUCCESS: function handleResolveInvite(invite) {
    invite = invite.invite;
    if (null == invite.target_application) {
      return false;
    } else {
      addApplication(ApplicationRecord.createFromServer(invite.target_application));
    }
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    const store_listing = giftCode.store_listing;
    let application;
    if (store_listing != null) {
      application = store_listing.sku.application;
    }
    if (null == application) {
      return false;
    } else {
      addApplication(ApplicationRecord.createFromServer(giftCode.store_listing.sku.application));
    }
  },
  LIBRARY_FETCH_SUCCESS: function handleLibraryApplicationsFetch(arg0) {
    while (tmp !== undefined) {
      let tmp5 = addApplication(ApplicationRecord.createFromServer(tmp2.application));
      continue;
    }
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetch(storeListing) {
    storeListing = storeListing.storeListing;
    if (null == storeListing.sku.application) {
      return false;
    } else {
      addApplication(ApplicationRecord.createFromServer(storeListing.sku.application));
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessages(messages) {
    messages = messages.messages;
    let item = messages.forEach((attachments) => {
      attachments = attachments.attachments;
      if (attachments != null) {
        const item = attachments.forEach((application) => {
          if (null != application.application) {
            closure_1_11(closure_1_1.createFromServer(application.application));
          }
        });
      }
    });
  },
  USER_PROFILE_FETCH_SUCCESS: function handleProfileFetchSuccess(userProfile) {
    ({ user, application } = userProfile.userProfile);
    let bot = user.bot;
    if (bot) {
      bot = null != application;
    }
    if (bot) {
      const obj = { userId: user.id, applicationId: application.id };
      handleAppWithBot(obj);
    }
  },
  APP_DM_OPEN: function handleAppDMOpen(botUserId) {
    botUserId = botUserId.botUserId;
    if (null != closure_10.botUserIdToAppUsage[botUserId]) {
      const obj = {};
      const merged = Object.assign(tmp);
      const _Date = Date;
      obj.lastUsedMs = Date.now();
      closure_10.botUserIdToAppUsage[botUserId] = obj;
    }
  },
  USER_AUTHORIZED_APPS_UPDATE: function handleAuthorizedAppsUpdate(tokens) {
    const values = Object.values(tokens.tokens);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult) {
        let tmp7 = addApplication(ApplicationRecord.createFromServer(tmp3.application));
        let bot = tmp3.application.bot;
        if (null != bot) {
          let obj = { userId: null, applicationId: null };
          obj.userId = tmp8.id;
          obj.applicationId = tmp3.application.id;
          let tmp12 = handleAppWithBot(obj);
        }
      }
      continue;
    }
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function handleNotificationCenterItemsSuccess(items) {
    items = items.items;
    const item = items.forEach((application) => {
      if (null != application.application) {
        addApplication(ApplicationRecord.createFromServer(application.application));
      }
    });
  },
  OAUTH2_TOKEN_CREATE: function handleOAuth2TokenCreate(application) {
    addApplication(ApplicationRecord.createFromServer(application.application));
  },
  WISHLIST_FETCH_SUCCESS: handleWishlistAction,
  WISHLIST_ADD_SKU_SUCCESS: handleWishlistAction,
  WISHLIST_REMOVE_SKU_SUCCESS: handleWishlistAction,
  SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function handleSocialLayerStorefrontLoadSuccess(storefront) {
    const application = storefront.storefront.application;
    if (null == application) {
      return false;
    } else {
      addApplication(application);
    }
  },
  WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS: function handleWishlistRecommendationsFetchSuccess(data) {
    const applications = data.data.applications;
    if (null != applications) {
      if (0 !== applications.length) {
        for (const item10010 of applications) {
          let tmp4 = addApplication(item10010);
          continue;
        }
      }
    }
    return false;
  },
  APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: handleApplicationWidgetConfigFetchSuccess,
  APPLICATION_WIDGET_CONFIG_DEVELOPER_FETCH_SUCCESS: handleApplicationWidgetConfigFetchSuccess,
  APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: handleApplicationWidgetConfigFetchSuccess
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/ApplicationStore.tsx");

export default applicationStore;