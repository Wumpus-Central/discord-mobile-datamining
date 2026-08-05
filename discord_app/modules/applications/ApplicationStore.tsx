// discord_app/modules/applications/ApplicationStore.tsx
import _slicedToArray from "_slicedToArray";
import createExecutable from "createExecutable";
import { PersistedStore } from "initialize";
import set from "initialize";

function addApplication(fromServer) {
  const value = map.get(fromServer.id);
  const result = map3.set(fromServer.id, Date.now());
  let result1 = fromServer;
  if (null != value) {
    result1 = value.mergeFromApplicationUpdate(fromServer);
  }
  const result2 = map.set(fromServer.id, result1);
  const result3 = map2.set(fromServer.name.toLowerCase(), result1);
  for (const item10031 of tmp5) {
    let tmp6 = map2;
    let result4 = map2.set(item10031.toLowerCase(), result1);
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
        let tmp14 = nextResult;
        let obj3 = createExecutable;
        let tmp13 = addApplication;
        if (tmp12.application instanceof createExecutable) {
          let tmp16 = nextResult;
          let application = tmp12.application;
        } else {
          let tmp15 = nextResult;
          application = obj3.createFromServer(tmp12.application);
        }
        let tmp13Result = tmp13(application);
      }
    }
  }
  map4.delete(fromServer.id);
}
function handleWishlistAction(wishlistData) {
  const applications = wishlistData.wishlistData.applications;
  if (null != applications) {
    if (0 !== applications.length) {
      for (const item10010 of applications) {
        let tmp3 = addApplication;
        let tmp4 = addApplication(item10010);
        continue;
      }
    }
  }
  return false;
}
function handleAppWithBot(arg0) {
  let applicationId;
  let userId;
  ({ userId, applicationId } = arg0);
  let num = closure_9.botUserIdToAppUsage;
  if (null == closure_9.botUserIdToAppUsage[userId]) {
    let obj = { applicationId: null, lastUsedMs: null };
    obj[0] = applicationId;
    const _Date = Date;
    obj[1] = Date.now();
  } else {
    obj = { applicationId: null, lastUsedMs: null };
    obj[0] = applicationId;
    obj[1] = tmp2.lastUsedMs;
  }
  num[userId] = obj;
  new Map();
  const entries = Object.entries(closure_9.botUserIdToAppUsage);
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
      let tmp3 = addApplication;
      let tmp4 = createExecutable;
      let tmp5 = addApplication(createExecutable.createFromServer(item10008));
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
      let tmp3 = addApplication;
      let tmp4 = createExecutable;
      let tmp5 = sku;
      let tmp6 = addApplication(createExecutable.createFromServer(tmp.application));
      flag = true;
    }
    continue;
  }
  return flag;
}
let closure_2 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
let set = new Set();
let closure_9 = { botUserIdToAppUsage: {} };
class ApplicationStore extends PersistedStore {
}
const prototype = ApplicationStore.prototype;
prototype["initialize"] = function initialize(botUserIdToAppUsage) {
  let applicationId;
  let lastUsedMs;
  if (null != botUserIdToAppUsage) {
    if (typeof botUserIdToAppUsage.botUserIdToAppUsage === "object") {
      for (const key10002 in arg0.botUserIdToAppUsage) {
        let tmp3 = key10002;
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
          let tmp2 = closure_9;
          let obj = { applicationId: null, lastUsedMs: null };
          obj[0] = applicationId;
          obj[1] = lastUsedMs;
          closure_9.botUserIdToAppUsage[key10002] = obj;
          continue;
        }
        continue;
      }
    }
  }
};
prototype["getState"] = function getState() {
  return closure_9;
};
prototype["_getAllApplications"] = function _getAllApplications() {
  return Array.from(map.values());
};
prototype["getGuildApplication"] = function getGuildApplication(_slicedToArray, createExecutable) {
  if (null != _slicedToArray) {
    const values = map.values();
    for (const item10011 of values) {
      if (item10011.guildId === arg0) {
        let tmp6 = item10011;
        if (tmp5.type === arg1) {
          let tmp7 = obj;
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
    let value = closure_2;
  } else {
    value = map1.get(arg0);
    if (value == null) {
      value = closure_2;
    }
  }
  return value;
};
prototype["getApplication"] = function getApplication(arg0) {
  if (null != arg0) {
    return map.get(arg0);
  }
};
prototype["getApplicationByName"] = function getApplicationByName(name) {
  if (null != name) {
    const formatted = name.toLowerCase();
    let value;
    if (map2.has(formatted)) {
      value = map2.get(formatted);
    }
    return value;
  }
};
prototype["getApplicationLastUpdated"] = function getApplicationLastUpdated(arg0) {
  return map3.get(arg0);
};
prototype["isFetchingApplication"] = function isFetchingApplication(id) {
  return true === map4.get(id);
};
prototype["isHydrated"] = function isHydrated(id) {
  return set.has(id);
};
prototype["didFetchingApplicationFail"] = function didFetchingApplicationFail(applicationId) {
  return false === map4.get(applicationId);
};
prototype["getFetchingOrFailedFetchingIds"] = function getFetchingOrFailedFetchingIds() {
  return Array.from(map4.keys());
};
prototype["getAppIdForBotUserId"] = function getAppIdForBotUserId(id) {
  if (null != id) {
    let applicationId;
    if (closure_9.botUserIdToAppUsage[id] != null) {
      applicationId = tmp2.applicationId;
    }
    return applicationId;
  }
};
ApplicationStore.displayName = "ApplicationStore";
ApplicationStore.persistKey = "ApplicationStore";
const applicationStore = new ApplicationStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    map.clear();
    map1.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    set.clear();
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    const iter = arg0.applications[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = addApplication;
      let tmp3 = createExecutable;
      let tmp4 = new.target;
      let tmp5 = new.target;
      let tmp6 = nextResult;
      let tmp7 = new createExecutable(nextResult);
      let tmp8 = tmp7;
      let tmp9 = addApplication(tmp7);
      continue;
    }
  },
  APPLICATION_FETCH: function handleApplicationFetch(applicationId) {
    applicationId = applicationId.applicationId;
    const value = map4.get(applicationId);
    const result = map4.set(applicationId, true);
    return true !== value;
  },
  APPLICATION_FETCH_SUCCESS: function handleApplicationFetchSuccess(application) {
    application = application.application;
    if (true === application.isHydrated) {
      set.add(application.id);
    }
    addApplication(createExecutable.createFromServer(application));
  },
  APPLICATION_FETCH_FAIL: function handleApplicationFetchFail(applicationId) {
    applicationId = applicationId.applicationId;
    const value = map4.get(applicationId);
    const result = map4.set(applicationId, false);
    return false !== value;
  },
  APPLICATIONS_FETCH: function handleApplicationsFetch(arg0) {
    let flag = false;
    const iter = arg0.applicationIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = map4;
      let value = map4.get(nextResult);
      let result = map4.set(nextResult, true);
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
        let tmp4 = set;
        let tmp5 = nextResult;
        let addResult = set.add(tmp3.id);
      }
      let tmp7 = addApplication;
      let tmp8 = createExecutable;
      let tmp9 = nextResult;
      let tmp10 = addApplication(createExecutable.createFromServer(tmp3));
      continue;
    }
  },
  APPLICATIONS_FETCH_FAIL: function handleApplicationsFetchFail(arg0) {
    let flag = false;
    for (const item10008 of tmp) {
      let tmp2 = map4;
      let value = map4.get(item10008);
      let result = map4.set(item10008, false);
      flag = false !== value;
      continue;
    }
    return flag;
  },
  APPLICATION_UPDATE: function handleUpdateApplication(application) {
    addApplication(createExecutable.createFromServer(application.application));
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
      let tmp3 = addApplication;
      let tmp4 = createExecutable;
      let tmp5 = addApplication(createExecutable.createFromServer(nextResult));
      continue;
    }
    const result = map1.set(guildId.guildId, items);
  },
  BILLING_PAYMENTS_FETCH_SUCCESS: function handleFetchPayments(arg0) {
    const set = new Set();
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
        let tmp4 = application;
        hasItem = set.has(tmp2.id);
      }
      if (!hasItem) {
        let tmp5 = addApplication;
        let tmp6 = createExecutable;
        let tmp7 = application;
        let tmp8 = addApplication(createExecutable.createFromServer(tmp2));
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
      addApplication(createExecutable.createFromServer(payment.sku.application));
    }
  },
  INVITE_RESOLVE_SUCCESS: function handleResolveInvite(invite) {
    invite = invite.invite;
    if (null == invite.target_application) {
      return false;
    } else {
      addApplication(createExecutable.createFromServer(invite.target_application));
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
      addApplication(createExecutable.createFromServer(giftCode.store_listing.sku.application));
    }
  },
  LIBRARY_FETCH_SUCCESS: function handleLibraryApplicationsFetch(arg0) {
    while (tmp !== undefined) {
      let tmp3 = addApplication;
      let tmp4 = createExecutable;
      let tmp5 = addApplication(createExecutable.createFromServer(tmp2.application));
      continue;
    }
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetch(storeListing) {
    storeListing = storeListing.storeListing;
    if (null == storeListing.sku.application) {
      return false;
    } else {
      addApplication(createExecutable.createFromServer(storeListing.sku.application));
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessages(messages) {
    messages = messages.messages;
    let item = messages.forEach((attachments) => {
      attachments = attachments.attachments;
      if (attachments != null) {
        const item = attachments.forEach((application) => {
          if (null != application.application) {
            callback(createExecutable.createFromServer(application.application));
          }
        });
      }
    });
  },
  USER_PROFILE_FETCH_SUCCESS: function handleProfileFetchSuccess(userProfile) {
    let application;
    let user;
    ({ user, application } = userProfile.userProfile);
    let bot = user.bot;
    if (bot) {
      bot = null != application;
    }
    if (bot) {
      const obj = { userId: null, applicationId: null };
      obj[0] = user.id;
      obj[1] = application.id;
      handleAppWithBot(obj);
    }
  },
  APP_DM_OPEN: function handleAppDMOpen(botUserId) {
    botUserId = botUserId.botUserId;
    if (null != closure_9.botUserIdToAppUsage[botUserId]) {
      const obj = {};
      const merged = Object.assign(tmp);
      const _Date = Date;
      obj.lastUsedMs = Date.now();
      closure_9.botUserIdToAppUsage[botUserId] = obj;
    }
  },
  USER_AUTHORIZED_APPS_UPDATE: function handleAuthorizedAppsUpdate(tokens) {
    const values = Object.values(tokens.tokens);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult) {
        let tmp4 = addApplication;
        let tmp5 = createExecutable;
        let tmp6 = nextResult;
        let tmp7 = addApplication(createExecutable.createFromServer(tmp3.application));
        let bot = tmp3.application.bot;
        if (null != bot) {
          let tmp9 = handleAppWithBot;
          let obj = { userId: null, applicationId: null };
          let tmp10 = bot;
          obj[0] = tmp8.id;
          let tmp11 = nextResult;
          obj[1] = tmp3.application.id;
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
        callback(createExecutable.createFromServer(application.application));
      }
    });
  },
  OAUTH2_TOKEN_CREATE: function handleOAuth2TokenCreate(application) {
    addApplication(createExecutable.createFromServer(application.application));
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
          let tmp3 = addApplication;
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
let result = set.fileFinishedImporting("modules/applications/ApplicationStore.tsx");

export default applicationStore;