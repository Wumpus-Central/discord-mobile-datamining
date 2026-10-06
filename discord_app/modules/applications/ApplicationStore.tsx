// === Module 5124: ApplicationStore ===

// Module 5124 (ApplicationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ApplicationRecord from "ApplicationRecord" /* 2009 */;
import size from "module_2" /* 2 */;

let attachments;

function addApplication(fromServer) {
  const value = map.get(fromServer.id);
  const result = map4.set(fromServer.id, Date.now());
  let result1 = fromServer;
  if (null != value) {
    result1 = value.mergeFromApplicationUpdate(fromServer);
  }
  const result2 = map.set(fromServer.id, result1);
  const str = fromServer.name;
  const result3 = map3.set(str.toLowerCase(), result1);
  const aliases = fromServer.aliases;
  for (const item10031 of aliases) {
    let result4 = map3.set(item10031.toLowerCase(), result1);
    continue;
  }
  if (null != fromServer.linkedGames) {
    const linkedGames = fromServer.linkedGames;
    const iter = linkedGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp11 = nextResult;
      if (null != nextResult.application) {
        let application;
        if (tmp11.application instanceof ApplicationRecord) {
          application = tmp11.application;
        } else {
          application = ApplicationRecord.createFromServer(tmp11.application);
        }
        let tmp12Result = addApplication(application);
      }
      continue;
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
  let applicationId;
  let num;
  let obj;
  let userId;
  ({ userId, applicationId } = arg0);
  const botUserIdToAppUsage = closure_10.botUserIdToAppUsage;
  if (null == closure_10.botUserIdToAppUsage[userId]) {
    const _Date = Date;
    obj = { applicationId, lastUsedMs: Date.now() };
    const obj2 = { applicationId, lastUsedMs: Date.now() };
  } else {
    obj = { applicationId, lastUsedMs: closure_10.botUserIdToAppUsage[userId].lastUsedMs };
  }
  botUserIdToAppUsage[userId] = obj;
  map = new Map();
  const entries = Object.entries(closure_10.botUserIdToAppUsage);
  const tmp5 = entries[Symbol.iterator]();
  while (tmp5 !== undefined) {
    let tmp8 = _slicedToArray(tmp6, 2);
    let result = map.set(tmp8[0], tmp8[1]);
    continue;
  }
  const arr2 = Array.from(map.entries());
  const sorted = arr2.sort((arg0, arg1) => arg1[1].lastUsedMs - arg0[1].lastUsedMs);
  for (let num = 0; num < sorted.length; num = num + 1) {
    if (10 <= num) {
      delete closure_10.botUserIdToAppUsage[arr[num][0]];
    }
  }
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
    map2.delete(guildId);
  } else {
    return false;
  }
}
let closure_2 = [];
let map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
let set = new Set();
const authStore = { botUserIdToAppUsage: {} };
const PersistedStore = get_initializedDefault.PersistedStore;
class ApplicationStore extends PersistedStore {
  initialize(botUserIdToAppUsage) {
    let applicationId;
    let lastUsedMs;
    if (null != botUserIdToAppUsage) {
      if (typeof botUserIdToAppUsage.botUserIdToAppUsage === "object") {
        for (const key10002 in botUserIdToAppUsage.botUserIdToAppUsage) {
          ({ applicationId, lastUsedMs } = botUserIdToAppUsage.botUserIdToAppUsage[key10002]);
          let tmp = typeof applicationId === "string" && applicationId.length > 0 && typeof lastUsedMs === "number" && lastUsedMs > 0;
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
  }
  getState() {
    return closure_10;
  }
  _getAllApplications() {
    return Array.from(map.values());
  }
  getGuildApplication(arg0, arg1) {
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
  }
  getGuildApplicationIds(arg0) {
    let value;
    if (null == arg0) {
      value = closure_2;
    } else {
      value = map1.get(arg0);
      if (value == null) {
        value = closure_2;
      }
    }
    return value;
  }
  getGuildEmbeddedApplications(arg0, arg1) {
    if (null != arg0) {
      const value = map2.get(arg0);
      let value2;
      if (value != null) {
        value2 = value.get(arg1);
      }
      return value2;
    }
  }
  getApplication(arg0) {
    if (null != arg0) {
      return map.get(arg0);
    }
  }
  getApplicationByName(name) {
    if (null != name) {
      const formatted = name.toLowerCase();
      let value;
      if (map3.has(formatted)) {
        value = map3.get(formatted);
      }
      return value;
    }
  }
  getApplicationLastUpdated(arg0) {
    return map4.get(arg0);
  }
  isFetchingApplication(application_id) {
    return true === map5.get(application_id);
  }
  isHydrated(applicationId) {
    return set.has(applicationId);
  }
  didFetchingApplicationFail(application_id) {
    return false === map5.get(application_id);
  }
  getFetchingOrFailedFetchingIds() {
    return Array.from(map5.keys());
  }
  getAppIdForBotUserId(id) {
    if (null != id) {
      let applicationId;
      if (closure_10.botUserIdToAppUsage[id] != null) {
        applicationId = tmp2.applicationId;
      }
      return applicationId;
    }
  }
}
const prototype = ApplicationStore.prototype;
ApplicationStore.displayName = "ApplicationStore";
ApplicationStore.persistKey = "ApplicationStore";
let obj = {
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
      let self = this;
      let self2 = this;
      let tmp5 = new ApplicationRecord(nextResult);
      let tmp7 = addApplication(tmp5);
      continue;
    }
  },
  APPLICATION_FETCH: function handleApplicationFetch(applicationId) {
    applicationId = applicationId.applicationId;
    const value = map5.get(applicationId);
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
    const value = map5.get(applicationId);
    const result = map5.set(applicationId, false);
    return false !== value;
  },
  APPLICATIONS_FETCH: function handleApplicationsFetch(arg0) {
    let flag = false;
    const iter = arg0.applicationIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let value = map5.get(nextResult);
      let result = map5.set(nextResult, true);
      flag = true !== value;
      continue;
    }
    return flag;
  },
  APPLICATIONS_FETCH_SUCCESS: function handleApplicationsFetchSuccess(isHydrated) {
    isHydrated = isHydrated.isHydrated;
    const iter = isHydrated.applications[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (true === isHydrated) {
        let addResult = set.add(tmp2.id);
      }
      let tmp9 = addApplication(ApplicationRecord.createFromServer(tmp2));
      continue;
    }
  },
  APPLICATIONS_FETCH_FAIL: function handleApplicationsFetchFail(applicationIds) {
    applicationIds = applicationIds.applicationIds;
    let flag = false;
    for (const item10008 of applicationIds) {
      let value = map5.get(item10008);
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
    guildId = guildId.guildId;
    const iter = guildId.applications[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr = items.push(nextResult.id);
      let tmp5 = addApplication(ApplicationRecord.createFromServer(nextResult));
      continue;
    }
    const result = map1.set(guildId, items);
  },
  GUILD_EMBEDDED_APPLICATIONS_FETCH_SUCCESS: function handleGuildEmbeddedApplicationsFetchSuccess(surface) {
    let guildId;
    let items;
    ({ guildId, items } = surface);
    const items1 = [];
    surface = surface.surface;
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let application = nextResult.application;
      let obj = { applicationId: application.id, status: nextResult.status };
      let arr = items1.push(obj);
      let tmp5 = addApplication(ApplicationRecord.createFromServer(application));
      continue;
    }
    let value = map2.get(guildId);
    if (null == value) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
      const result = map2.set(guildId, map);
      value = map;
    }
    const result1 = value.set(surface, items1);
  },
  GUILD_INTEGRATIONS_UPDATE: handleIntegrationsChanged,
  INTEGRATION_CREATE: handleIntegrationsChanged,
  INTEGRATION_UPDATE: handleIntegrationsChanged,
  INTEGRATION_DELETE: handleIntegrationsChanged,
  BILLING_PAYMENTS_FETCH_SUCCESS: function handleFetchPayments(payments) {
    payments = payments.payments;
    set = new Set();
    const iter = payments[Symbol.iterator]();
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
    const tmp = arg0.libraryApplications[Symbol.iterator]();
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
    let application;
    let user;
    ({ user, application } = userProfile.userProfile);
    const bot = user.bot && null != application;
    if (bot) {
      const obj = { userId: user.id, applicationId: application.id };
      handleAppWithBot(obj);
    }
  },
  APP_DM_OPEN: function handleAppDMOpen(botUserId) {
    botUserId = botUserId.botUserId;
    if (null != closure_10.botUserIdToAppUsage[botUserId]) {
      const botUserIdToAppUsage = closure_10.botUserIdToAppUsage;
      const obj = { lastUsedMs: Date.now() };
      const merged = Object.assign(tmp);
      const _Date = Date;
      botUserIdToAppUsage[botUserId] = obj;
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
          let obj = { userId: tmp8.id, applicationId: tmp3.application.id };
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
};
const applicationStore = new ApplicationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/applications/ApplicationStore.tsx");

export default applicationStore;