// === Module 8740: FamilyCenterStore ===

// Module 8740 (FamilyCenterStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8742 */;
import _slicedToArray from "module_32" /* 32 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1071 */;
import UserStore from "UserStore" /* 1388 */;

const require = fn;
function freshTeenActivityWithMap() {
  const map = new Map();
  const result = map.set(TeenActionDisplayType.USER_ADD, new Map());
  const map1 = new Map();
  const result1 = map.set(TeenActionDisplayType.GUILD_ADD, new Map());
  const map2 = new Map();
  const result2 = map.set(TeenActionDisplayType.USER_INTERACTION, new Map());
  const map3 = new Map();
  const result3 = map.set(TeenActionDisplayType.GUILD_INTERACTION, new Map());
  const map4 = new Map();
  const result4 = map.set(TeenActionDisplayType.USER_CALLED, new Map());
  const map5 = new Map();
  const result5 = map.set(TeenActionDisplayType.TOTAL_VOICE_MINUTES, new Map());
  const map6 = new Map();
  const result6 = map.set(TeenActionDisplayType.PURCHASES, new Map());
  const map7 = new Map();
  const result7 = map.set(TeenActionDisplayType.GIFTS, new Map());
  return map;
}
function processLinkedUsers() {
  items = linkedUsers;
  if (linkedUsers === undefined) {
    items = [];
  }
  let tmp;
  if (null != c11) {
    tmp = dependencyMap[c11];
  }
  if (items.length > 0) {
    let reduced = items.reduce((acc, user_id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[user_id.user_id] = user_id;
      return obj;
    }, {});
  } else {
    reduced = {};
  }
  dependencyMap = reduced;
  c14 = true;
  let tmp4 = null != tmp;
  if (tmp4) {
    let link_status;
    if (dependencyMap[tmp.user_id] != null) {
      link_status = tmp6.link_status;
    }
    tmp4 = link_status !== UserLinkStatus.ACTIVE;
  }
  if (tmp4) {
    c11 = null;
    c12 = null;
    closure_15 = freshTeenActivityWithMap();
    let obj = {};
    obj[TeenActionDisplayType.USER_ADD] = 0;
    obj[TeenActionDisplayType.GUILD_ADD] = 0;
    obj[TeenActionDisplayType.USER_INTERACTION] = 0;
    obj[TeenActionDisplayType.GUILD_INTERACTION] = 0;
    obj[TeenActionDisplayType.USER_CALLED] = 0;
    obj[TeenActionDisplayType.TOTAL_VOICE_MINUTES] = 0;
    obj[TeenActionDisplayType.PURCHASES] = 0;
    obj[TeenActionDisplayType.GIFTS] = 0;
    closure_16 = obj;
    closure_25 = [];
    closure_26 = [];
    c27 = null;
    c28 = null;
    c29 = null;
    c30 = null;
    closure_31 = {};
    closure_32 = {};
  }
  return dependencyMap;
}
function handleFetchStart() {
  c21 = true;
  c22 = false;
}
function handleInitialLoadFailure() {
  if (c21) {
    c21 = false;
    c22 = true;
  } else {
    return false;
  }
}
function handleTeenActivityFetchFailure() {
  c21 = false;
}
function handleInitialLoad(linkedUsers) {
  ({ familyCenterTeenActivity, ageGroup } = linkedUsers);
  ({ actions, guilds, totals, spendingLimit, monthlyPurchases, invoices, gifts, teenId: c11, rangeStartId: c12 } = familyCenterTeenActivity);
  ({ topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
  const tmp = freshTeenActivityWithMap();
  closure_0 = tmp;
  const item = actions.forEach((display_type) => {
    value = closure_0.get(display_type.display_type);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_15 = tmp;
  if (undefined !== totals) {
    closure_16 = totals;
  }
  closure_34 = guilds.reduce((acc, approximate_member_count) => {
    const obj = {};
    const merged = Object.assign(acc);
    const obj2 = {};
    const merged1 = Object.assign(closure_0(dependencyMap[5]).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
    let num = approximate_member_count.approximate_member_count;
    if (num == null) {
      num = 0;
    }
    obj2.approximateMemberCount = num;
    obj[approximate_member_count.id] = obj2;
    return obj;
  }, closure_34);
  processLinkedUsers(linkedUsers.linkedUsers);
  if (null != invoices) {
    closure_31 = invoices.reduce((acc, invoice_items) => {
      if (null != invoice_items.invoice_items) {
        if (invoice_items.invoice_items.length > 0) {
          ({ sku_id, subscription_plan_id } = invoice_items.invoice_items[0]);
          if (!tmp) {
            const obj = { sku_id, subscription_plan_id, total: null, currency: null };
            ({ total: obj.total, currency: obj.currency } = invoice_items);
            acc[invoice_items.id] = obj;
          }
          tmp = null == sku_id && null == subscription_plan_id;
        }
      }
      return acc;
    }, {});
  }
  if (null != gifts) {
    closure_32 = gifts.reduce((acc, entitlement_id) => {
      acc[entitlement_id.entitlement_id] = entitlement_id;
      return acc;
    }, {});
  }
  closure_25 = topUserActivities;
  closure_26 = topGuildActivities;
  c27 = totalSpendAmount;
  c28 = totalSpendCurrency;
  if (spendingLimit == null) {
    spendingLimit = null;
  }
  c29 = spendingLimit;
  if (monthlyPurchases == null) {
    monthlyPurchases = null;
  }
  c30 = monthlyPurchases;
  if (ageGroup == null) {
    ageGroup = null;
  }
  c33 = ageGroup;
  c21 = false;
  c22 = false;
  c23 = SnowflakeUtilsDefault.fromTimestamp(Date.now());
  c20 = true;
}
function handleLinkedUserFetch(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleRequestLinkSuccess(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined === familyCenterTeenActivity) {
    return false;
  } else {
    ({ actions, totals, guilds, invoices, gifts, spendingLimit, monthlyPurchases, teenId: c11, rangeStartId: c12 } = familyCenterTeenActivity);
    ({ topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
    const tmp7 = freshTeenActivityWithMap();
    closure_0 = tmp7;
    const item = actions.forEach((display_type) => {
      value = closure_0.get(display_type.display_type);
      if (!tmp) {
        const result = value.set(display_type.event_id, display_type);
      }
    });
    closure_15 = tmp7;
    if (undefined !== totals) {
      closure_16 = totals;
    }
    closure_34 = guilds.reduce((acc, approximate_member_count) => {
      const obj = {};
      const merged = Object.assign(acc);
      const obj2 = {};
      const merged1 = Object.assign(closure_0(dependencyMap[5]).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
      let num = approximate_member_count.approximate_member_count;
      if (num == null) {
        num = 0;
      }
      obj2.approximateMemberCount = num;
      obj[approximate_member_count.id] = obj2;
      return obj;
    }, closure_34);
    if (null != invoices) {
      closure_31 = invoices.reduce((acc, invoice_items) => {
        if (null != invoice_items.invoice_items) {
          if (invoice_items.invoice_items.length > 0) {
            ({ sku_id, subscription_plan_id } = invoice_items.invoice_items[0]);
            if (!tmp) {
              const obj = { sku_id, subscription_plan_id, total: null, currency: null };
              ({ total: obj.total, currency: obj.currency } = invoice_items);
              acc[invoice_items.id] = obj;
            }
            tmp = null == sku_id && null == subscription_plan_id;
          }
        }
        return acc;
      }, {});
    }
    if (null != gifts) {
      closure_32 = gifts.reduce((acc, entitlement_id) => {
        acc[entitlement_id.entitlement_id] = entitlement_id;
        return acc;
      }, {});
    }
    closure_25 = topUserActivities;
    closure_26 = topGuildActivities;
    c21 = false;
    const _Date = Date;
    c23 = SnowflakeUtilsDefault.fromTimestamp(Date.now());
    c27 = totalSpendAmount;
    c28 = totalSpendCurrency;
    if (spendingLimit == null) {
      spendingLimit = null;
    }
    c29 = spendingLimit;
    if (monthlyPurchases == null) {
      monthlyPurchases = null;
    }
    c30 = monthlyPurchases;
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  ({ actions, guilds } = familyCenterTeenActivity.familyCenterTeenActivity);
  closure_0 = closure_15;
  const item = actions.forEach((display_type) => {
    value = closure_0.get(display_type.display_type);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_34 = guilds.reduce((acc, approximate_member_count) => {
    const obj = {};
    const merged = Object.assign(acc);
    const obj2 = {};
    const merged1 = Object.assign(closure_0(dependencyMap[5]).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
    let num = approximate_member_count.approximate_member_count;
    if (num == null) {
      num = 0;
    }
    obj2.approximateMemberCount = num;
    obj[approximate_member_count.id] = obj2;
    return obj;
  }, closure_34);
}
function handleUserLinkStatusUpdate(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleUserLinkRemove(linkedUsers) {
  processLinkedUsers(linkedUsers.linkedUsers);
}
function handleLinkCodeFetch(arg0) {
  ({ linkCode: c17, expiresAt: c18 } = arg0);
}
function handleTabSelect(tab) {
  ACTIVITY = tab.tab;
}
function handleCurrentUserUpdate(user) {
  user = user.user;
  let users;
  if (undefined === user.linked_users) {
    return false;
  } else {
    users = UserStore.getUsers();
    const linked_users = user.linked_users;
    if (linked_users.some((item) => undefined === closure_0[item.user_id])) {
      const _Object = Object;
      if (user.linked_users.length > Object.keys(closure_13).length) {
        const linkedUsers = FamilyCenterActionCreatorsDefault.fetchLinkedUsers();
      }
    }
    processLinkedUsers(user.linked_users);
  }
}
function handleConnectionOpen(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (null == linkedUsers) {
    return false;
  } else {
    processLinkedUsers(linkedUsers);
  }
}
function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = getCountryCodeByAlpha2(countryCode);
    if (tmp2 == null) {
      tmp2 = null;
    }
    c24 = tmp2;
  }
}
function reset() {
  c11 = null;
  c12 = null;
  closure_15 = freshTeenActivityWithMap();
  closure_16 = { [closure_1_9.USER_ADD]: 0, [closure_1_9.GUILD_ADD]: 0, [closure_1_9.USER_INTERACTION]: 0, [closure_1_9.GUILD_INTERACTION]: 0, [closure_1_9.USER_CALLED]: 0, [closure_1_9.TOTAL_VOICE_MINUTES]: 0, [closure_1_9.PURCHASES]: 0, [closure_1_9.GIFTS]: 0 };
  closure_25 = [];
  closure_26 = [];
  c27 = null;
  c28 = null;
  c29 = null;
  c30 = null;
  closure_31 = {};
  closure_32 = {};
  closure_13 = {};
  c17 = null;
  c18 = null;
  closure_34 = {};
  c21 = false;
  c22 = false;
  c23 = null;
  let pathname;
  if (window != null) {
    const _location = window.location;
    if (_location != null) {
      pathname = _location.pathname;
    }
  }
  if (pathname === FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_MY_FAMILY) {
    ACTIVITY = FamilyCenterSubPages.REQUESTS;
  } else {
    let pathname1;
    if (window != null) {
      const _location2 = window.location;
      if (_location2 != null) {
        pathname1 = _location2.pathname;
      }
    }
    if (pathname1 === tmp2.FAMILY_CENTER_SETTINGS) {
      ACTIVITY = FamilyCenterSubPages.SETTINGS;
    } else {
      ACTIVITY = FamilyCenterSubPages.ACTIVITY;
    }
  }
  c14 = false;
  c33 = null;
  c20 = false;
}
const getCountryCodeByAlpha2 = fn(5997).getCountryCodeByAlpha2;
const FamilyCenterConstants = fn(8741);
({ FAMILY_CENTER_REFETCH_COOLDOWN: closure_6, FAMILY_CENTER_SUB_ROUTES } = FamilyCenterConstants);
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
const TeenActionDisplayType = FamilyCenterConstants.TeenActionDisplayType;
const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
let c11 = null;
let c12 = null;
let dependencyMap = {};
let c14 = false;
let closure_15 = freshTeenActivityWithMap();
const PURCHASES = TeenActionDisplayType.PURCHASES;
let closure_16 = { [TeenActionDisplayType.USER_ADD]: 0, [TeenActionDisplayType.GUILD_ADD]: 0, [TeenActionDisplayType.USER_INTERACTION]: 0, [TeenActionDisplayType.GUILD_INTERACTION]: 0, [TeenActionDisplayType.USER_CALLED]: 0, [TeenActionDisplayType.TOTAL_VOICE_MINUTES]: 0, [PURCHASES]: 0, [TeenActionDisplayType.GIFTS]: 0 };
let c17 = null;
let c18 = null;
let pathname;
if (window != null) {
  let _location = window.location;
  if (_location != null) {
    pathname = _location.pathname;
  }
}
let _location2 = FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_MY_FAMILY;
if (pathname === _location2) {
  let REQUESTS = FamilyCenterSubPages.REQUESTS;
} else {
  _location2 = window;
  let pathname1;
  if (window != null) {
    _location2 = _location2.location;
    if (_location2 != null) {
      pathname1 = _location2.pathname;
    }
  }
  REQUESTS = pathname1 === FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_SETTINGS ? FamilyCenterSubPages.SETTINGS : FamilyCenterSubPages.ACTIVITY;
}
let ACTIVITY = REQUESTS;
let c20 = false;
let c21 = false;
let c22 = false;
let c23 = null;
let c24 = null;
let closure_25 = [];
let closure_26 = [];
let c27 = null;
let c28 = null;
let c29 = null;
let c30 = null;
let closure_31 = {};
let closure_32 = {};
let c33 = null;
let closure_34 = {};
let FamilyCenterStore;
class FamilyCenterStore extends tmp4 {
  constructor() {
    closure_0 = undefined;
    obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      CURRENT_USER_UPDATE: handleCurrentUserUpdate,
      CACHE_LOADED_LAZY() {
            return closure_0.loadCache();
          },
      FAMILY_CENTER_INITIAL_LOAD: handleInitialLoad,
      FAMILY_CENTER_FETCH_START: handleFetchStart,
      FAMILY_CENTER_INITIAL_LOAD_FAILURE: handleInitialLoadFailure,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: handleLinkedUserFetch,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: handleTeenActivityFetch,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_FAILURE: handleTeenActivityFetchFailure,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: handleTeenActivityMoreFetch,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: handleRequestLinkSuccess,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: handleUserLinkStatusUpdate,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: handleUserLinkRemove,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: handleLinkCodeFetch,
      FAMILY_CENTER_HANDLE_TAB_SELECT: handleTabSelect,
      SET_LOCATION_METADATA: handleSetLocationMetadata,
      LOGOUT: reset
    };
    tmp1 = new tmp(obj, handleSetLocationMetadata, new.target, tmp);
    closure_0 = tmp1;
    return tmp1;
  }
}
const prototype = FamilyCenterStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["loadCache"] = function loadCache() {
  const snapshot = this.readSnapshot(FamilyCenterStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    processLinkedUsers(snapshot.linkedUsers);
    const guilds = snapshot.guilds;
    closure_34 = guilds.reduce((acc, approximate_member_count) => {
      const obj = {};
      const merged = Object.assign(acc);
      const obj2 = {};
      const merged1 = Object.assign(closure_0(dependencyMap[5]).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
      let num = approximate_member_count.approximate_member_count;
      if (num == null) {
        num = 0;
      }
      obj2.approximateMemberCount = num;
      obj[approximate_member_count.id] = obj2;
      return obj;
    }, closure_34);
    const teenActivity = snapshot.teenActivity;
    const tmp6 = freshTeenActivityWithMap();
    closure_0 = tmp6;
    const item = teenActivity.forEach((display_type) => {
      value = closure_0.get(display_type.display_type);
      if (!tmp) {
        const result = value.set(display_type.event_id, display_type);
      }
    });
    closure_15 = tmp6;
    const teenActivityTotals = snapshot.teenActivityTotals;
    let obj = {};
    obj[TeenActionDisplayType.USER_ADD] = 0;
    obj[TeenActionDisplayType.GUILD_ADD] = 0;
    obj[TeenActionDisplayType.USER_INTERACTION] = 0;
    obj[TeenActionDisplayType.GUILD_INTERACTION] = 0;
    obj[TeenActionDisplayType.USER_CALLED] = 0;
    obj[TeenActionDisplayType.TOTAL_VOICE_MINUTES] = 0;
    obj[TeenActionDisplayType.PURCHASES] = 0;
    obj[TeenActionDisplayType.GIFTS] = 0;
    closure_16 = teenActivityTotals.reduce((acc, item) => {
      const tmp = _slicedToArray(item.split(":"), 2);
      const tmp2 = (function displayTypeFromString(arg0) {
        const values = Object.values(closure_1_9);
        for (const item10011 of values) {
          if (item10011.toString() === arg0) {
            obj.return();
            return item10011;
          }
        }
      })(tmp[0]);
      let tmp3 = acc;
      if (undefined !== tmp2) {
        const obj = {};
        const merged = Object.assign(acc);
        const _parseInt = parseInt;
        obj[tmp2] = parseInt(tmp[1], 10);
        tmp3 = obj;
      }
      return tmp3;
    }, obj);
  }
};
prototype["takeSnapshot"] = function takeSnapshot() {
  const obj = { version: FamilyCenterStore.LATEST_SNAPSHOT_VERSION, data: null };
  const obj2 = { linkedUsers: Object.values(closure_13), teenActivityTotals: null, teenActivity: null, guilds: null };
  const entries = Object.entries(closure_16);
  obj2.teenActivityTotals = entries.map((item) => {
    [tmp, tmp2] = item;
    return "" + tmp + ":" + tmp2;
  });
  items = [];
  const item = closure_15.forEach((arr) => {
    items = [...Array.from(arr.values())];
    items.push.apply(items);
  });
  obj2.teenActivity = items;
  obj2.guilds = Object.values(closure_34);
  obj.data = obj2;
  return obj;
};
prototype["getSelectedTeenId"] = function getSelectedTeenId() {
  return c11;
};
prototype["getLinkedUsers"] = function getLinkedUsers() {
  return closure_13;
};
prototype["getLinkTimestamp"] = function getLinkTimestamp(arg0) {
  let tmp2 = null;
  if (null != dependencyMap[arg0]) {
    let created_at = tmp.updated_at;
    if (created_at == null) {
      created_at = tmp.created_at;
    }
    tmp2 = created_at;
  }
  return tmp2;
};
prototype["getRangeStartTimestamp"] = function getRangeStartTimestamp() {
  let extractTimestampResult = null;
  if (null != c12) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(c12);
  }
  return extractTimestampResult;
};
prototype["getActionsForDisplayType"] = function getActionsForDisplayType(arg0) {
  value = closure_15.get(arg0);
  if (null != value) {
    const _Array = Array;
    items = Array.from(value.values());
  } else {
    items = [];
  }
  return items;
};
prototype["getTotalForDisplayType"] = function getTotalForDisplayType(item) {
  return closure_16[item];
};
prototype["getLinkCode"] = function getLinkCode() {
  return c17;
};
prototype["getLinkCodeExpiresAt"] = function getLinkCodeExpiresAt() {
  return c18;
};
prototype["getGuild"] = function getGuild(arg0) {
  return closure_34[arg0];
};
prototype["getSelectedTab"] = function getSelectedTab() {
  return ACTIVITY;
};
prototype["getStartId"] = function getStartId() {
  return c12;
};
prototype["getIsInitialized"] = function getIsInitialized() {
  return c20;
};
prototype["getAreLinkedUsersProcessed"] = function getAreLinkedUsersProcessed() {
  return c14;
};
prototype["getUserCountry"] = function getUserCountry() {
  return c24;
};
prototype["isLoading"] = function isLoading() {
  return c21;
};
prototype["hasInitialLoadFailed"] = function hasInitialLoadFailed() {
  return c22;
};
prototype["getTopUserActivities"] = function getTopUserActivities() {
  return closure_25;
};
prototype["getTopGuildActivities"] = function getTopGuildActivities() {
  return closure_26;
};
prototype["getTotalSpendAmount"] = function getTotalSpendAmount() {
  return c27;
};
prototype["getTotalSpendCurrency"] = function getTotalSpendCurrency() {
  return c28;
};
prototype["getTotalGiftValue"] = function getTotalGiftValue() {
  let currency = null;
  let num = 0;
  let flag = false;
  const values = Object.values(closure_32);
  for (const item10014 of values) {
    if (null != item10014.price) {
      if (null != currency) {
        if (item10014.price.currency !== currency) {
          obj.return();
          return null;
        }
      }
      currency = item10014.price.currency;
      num = num + item10014.price.amount;
      flag = true;
    }
    continue;
  }
  let tmp10 = null;
  if (flag) {
    tmp10 = null;
    if (null != currency) {
      const obj2 = { amount: num, currency };
      tmp10 = obj2;
    }
  }
  return tmp10;
};
prototype["getSpendingLimit"] = function getSpendingLimit() {
  return c29;
};
prototype["getMonthlyPurchases"] = function getMonthlyPurchases() {
  return c30;
};
prototype["getPurchaseInfo"] = function getPurchaseInfo(entity_id) {
  return closure_31[entity_id];
};
prototype["getGiftInfo"] = function getGiftInfo(entity_id) {
  return closure_32[entity_id];
};
prototype["getAgeGroup"] = function getAgeGroup() {
  return c33;
};
prototype["canRefetch"] = function canRefetch() {
  let tmp = null === c23;
  if (!tmp) {
    tmp = SnowflakeUtilsDefault.age(c23) > timestampProducer;
  }
  return tmp;
};
prototype["isCurrentUserInRestrictedHours"] = function isCurrentUserInRestrictedHours() {
  const currentUser = UserStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    const restrictedSchedule = currentUser.restrictedSchedule;
    if (restrictedSchedule != null) {
      flag = restrictedSchedule.isInRestrictedHours();
    }
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
FamilyCenterStore.displayName = "FamilyCenterStore";
FamilyCenterStore.LATEST_SNAPSHOT_VERSION = 3;
let closure_129_0;
let obj = { CONNECTION_OPEN: handleConnectionOpen, CURRENT_USER_UPDATE: handleCurrentUserUpdate, CACHE_LOADED_LAZY: null, FAMILY_CENTER_INITIAL_LOAD: null, FAMILY_CENTER_FETCH_START: null, FAMILY_CENTER_INITIAL_LOAD_FAILURE: null, FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: null, FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: null, FAMILY_CENTER_TEEN_ACTIVITY_FETCH_FAILURE: null, FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: null, FAMILY_CENTER_REQUEST_LINK_SUCCESS: null, FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: null, FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: null, FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: null, FAMILY_CENTER_HANDLE_TAB_SELECT: null, SET_LOCATION_METADATA: null, LOGOUT: null };
class CACHE_LOADED_LAZY {
  constructor() {
    return closure_0.loadCache();
  }
}
obj.CACHE_LOADED_LAZY = CACHE_LOADED_LAZY;
obj.FAMILY_CENTER_INITIAL_LOAD = handleInitialLoad;
obj.FAMILY_CENTER_FETCH_START = handleFetchStart;
obj.FAMILY_CENTER_INITIAL_LOAD_FAILURE = handleInitialLoadFailure;
obj.FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS = handleLinkedUserFetch;
obj.FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS = handleTeenActivityFetch;
obj.FAMILY_CENTER_TEEN_ACTIVITY_FETCH_FAILURE = handleTeenActivityFetchFailure;
obj.FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS = handleTeenActivityMoreFetch;
obj.FAMILY_CENTER_REQUEST_LINK_SUCCESS = handleRequestLinkSuccess;
obj.FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS = handleUserLinkStatusUpdate;
obj.FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS = handleUserLinkRemove;
obj.FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS = handleLinkCodeFetch;
obj.FAMILY_CENTER_HANDLE_TAB_SELECT = handleTabSelect;
obj.SET_LOCATION_METADATA = handleSetLocationMetadata;
obj.LOGOUT = reset;
const prototype1 = new prototype(obj, tmp2, tmp, PURCHASES, pathname, _location2, handleConnectionOpen, CACHE_LOADED_LAZY, handleInitialLoad, handleFetchStart, handleInitialLoadFailure, handleLinkedUserFetch);
closure_129_0 = prototype1;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterStore.tsx");

export default prototype1;