// discord_app/modules/parent_tools/FamilyCenterStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators.tsx";
import FamilyCenterV3Experiment from "FamilyCenterV3Experiment.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import MobileCacheSnapshotStore from "../../stores/MobileCacheSnapshotStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function freshTeenActivityWithMap() {
  const map = new Map();
  const result = map.set(TeenActionDisplayType.USER_ADD, new Map());
  map1 = new Map();
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
function handleFetchStart() {
  c20 = true;
}
function handleInitialLoad(arg0) {
  ({ linkedUsers, familyCenterTeenActivity, ageGroup } = arg0);
  ({
    actions,
    guilds,
    totals,
    spendingLimit,
    monthlyPurchases,
    invoices,
    gifts,
    teenId: c10,
    rangeStartId: c11,
  } = familyCenterTeenActivity);
  ({ topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
  const tmp = freshTeenActivityWithMap();
  closure_0 = tmp;
  const item = actions.forEach((display_type) => {
    value = closure_0.get(display_type.display_type);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_14 = tmp;
  if (undefined !== totals) {
    snapshot = totals;
  }
  closure_32 = guilds.reduce((acc, approximate_member_count) => {
    let obj = {};
    const merged = Object.assign(acc);
    obj = {};
    const merged1 = Object.assign(
      closure_0(1971).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count),
    );
    let num = approximate_member_count.approximate_member_count;
    if (num == null) {
      num = 0;
    }
    obj.approximateMemberCount = num;
    obj[approximate_member_count.id] = obj;
    return obj;
  }, closure_32);
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    reduced = linkedUsers.reduce((acc, user_id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[user_id.user_id] = user_id;
      return obj;
    }, {});
  } else {
    reduced = {};
  }
  c13 = true;
  if (null != invoices) {
    closure_29 = invoices.reduce((acc, invoice_items) => {
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
    closure_30 = gifts.reduce((acc, entitlement_id) => {
      acc[entitlement_id.entitlement_id] = entitlement_id;
      return acc;
    }, {});
  }
  closure_23 = topUserActivities;
  closure_24 = topGuildActivities;
  c25 = totalSpendAmount;
  c26 = totalSpendCurrency;
  if (spendingLimit == null) {
    spendingLimit = null;
  }
  c27 = spendingLimit;
  if (monthlyPurchases == null) {
    monthlyPurchases = null;
  }
  c28 = monthlyPurchases;
  if (ageGroup == null) {
    ageGroup = null;
  }
  c31 = ageGroup;
  c20 = false;
  c21 = SnowflakeUtilsDefault.fromTimestamp(Date.now());
  c19 = true;
}
function handleLinkedUserFetch(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    reduced = linkedUsers.reduce((acc, user_id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[user_id.user_id] = user_id;
      return obj;
    }, {});
  } else {
    reduced = {};
  }
  c13 = true;
}
function handleRequestLinkSuccess(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    reduced = linkedUsers.reduce((acc, user_id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[user_id.user_id] = user_id;
      return obj;
    }, {});
  } else {
    reduced = {};
  }
  c13 = true;
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined === familyCenterTeenActivity) {
    return false;
  } else {
    ({
      actions,
      totals,
      guilds,
      invoices,
      gifts,
      spendingLimit,
      monthlyPurchases,
      teenId: c10,
      rangeStartId: c11,
    } = familyCenterTeenActivity);
    ({ topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
    const tmp7 = freshTeenActivityWithMap();
    closure_0 = tmp7;
    const item = actions.forEach((display_type) => {
      value = closure_0.get(display_type.display_type);
      if (!tmp) {
        const result = value.set(display_type.event_id, display_type);
      }
    });
    closure_14 = tmp7;
    if (undefined !== totals) {
      snapshot = totals;
    }
    closure_32 = guilds.reduce((acc, approximate_member_count) => {
      let obj = {};
      const merged = Object.assign(acc);
      obj = {};
      const merged1 = Object.assign(
        closure_0(1971).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count),
      );
      let num = approximate_member_count.approximate_member_count;
      if (num == null) {
        num = 0;
      }
      obj.approximateMemberCount = num;
      obj[approximate_member_count.id] = obj;
      return obj;
    }, closure_32);
    if (null != invoices) {
      closure_29 = invoices.reduce((acc, invoice_items) => {
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
      closure_30 = gifts.reduce((acc, entitlement_id) => {
        acc[entitlement_id.entitlement_id] = entitlement_id;
        return acc;
      }, {});
    }
    closure_23 = topUserActivities;
    closure_24 = topGuildActivities;
    c20 = false;
    const _Date = Date;
    c21 = SnowflakeUtilsDefault.fromTimestamp(Date.now());
    c25 = totalSpendAmount;
    c26 = totalSpendCurrency;
    if (spendingLimit == null) {
      spendingLimit = null;
    }
    c27 = spendingLimit;
    if (monthlyPurchases == null) {
      monthlyPurchases = null;
    }
    c28 = monthlyPurchases;
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  ({ actions, guilds } = familyCenterTeenActivity.familyCenterTeenActivity);
  closure_0 = closure_14;
  const item = actions.forEach((display_type) => {
    value = closure_0.get(display_type.display_type);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_32 = guilds.reduce((acc, approximate_member_count) => {
    let obj = {};
    const merged = Object.assign(acc);
    obj = {};
    const merged1 = Object.assign(
      closure_0(1971).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count),
    );
    let num = approximate_member_count.approximate_member_count;
    if (num == null) {
      num = 0;
    }
    obj.approximateMemberCount = num;
    obj[approximate_member_count.id] = obj;
    return obj;
  }, closure_32);
}
function handleUserLinkStatusUpdate(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    reduced = linkedUsers.reduce((acc, user_id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[user_id.user_id] = user_id;
      return obj;
    }, {});
  } else {
    reduced = {};
  }
  c13 = true;
}
function handleUserLinkRemove(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    reduced = linkedUsers.reduce((acc, user_id) => {
      const obj = {};
      const merged = Object.assign(acc);
      obj[user_id.user_id] = user_id;
      return obj;
    }, {});
  } else {
    reduced = {};
  }
  c13 = true;
}
function handleLinkCodeFetch(arg0) {
  ({ linkCode: c16, expiresAt: c17 } = arg0);
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
    let linked_users = user.linked_users;
    if (linked_users.some((item) => undefined === closure_0[item.user_id])) {
      const _Object = Object;
      if (user.linked_users.length > Object.keys(reduced).length) {
        const linkedUsers = FamilyCenterActionCreatorsDefault.fetchLinkedUsers();
      }
    }
    linked_users = user.linked_users;
    if (linked_users === undefined) {
      linked_users = [];
    }
    if (linked_users.length > 0) {
      reduced = linked_users.reduce((acc, user_id) => {
        const obj = {};
        const merged = Object.assign(acc);
        obj[user_id.user_id] = user_id;
        return obj;
      }, {});
    } else {
      reduced = {};
    }
    c13 = true;
  }
}
function handleConnectionOpen(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (null == linkedUsers) {
    return false;
  } else {
    if (linkedUsers === undefined) {
      linkedUsers = [];
    }
    if (linkedUsers.length > 0) {
      reduced = linkedUsers.reduce((acc, user_id) => {
        const obj = {};
        const merged = Object.assign(acc);
        obj[user_id.user_id] = user_id;
        return obj;
      }, {});
    } else {
      reduced = {};
    }
    c13 = true;
  }
}
function handleSetLocationMetadata(countryCode) {
  countryCode = countryCode.countryCode;
  if (null != countryCode) {
    let tmp2 = getCountryCodeByAlpha2(countryCode);
    if (tmp2 == null) {
      tmp2 = null;
    }
    c22 = tmp2;
  }
}
function reset() {
  c10 = null;
  c11 = null;
  reduced = {};
  c16 = null;
  c17 = null;
  closure_14 = freshTeenActivityWithMap();
  snapshot = {
    [closure_1_9.USER_ADD]: 0,
    [closure_1_9.GUILD_ADD]: 0,
    [closure_1_9.USER_INTERACTION]: 0,
    [closure_1_9.GUILD_INTERACTION]: 0,
    [closure_1_9.USER_CALLED]: 0,
    [closure_1_9.TOTAL_VOICE_MINUTES]: 0,
    [closure_1_9.PURCHASES]: 0,
    [closure_1_9.GIFTS]: 0,
  };
  closure_32 = {};
  c20 = false;
  c21 = null;
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
  c13 = false;
  closure_23 = [];
  closure_24 = [];
  c25 = null;
  c26 = null;
  c27 = null;
  c28 = null;
  closure_29 = {};
  closure_30 = {};
  c31 = null;
  c19 = false;
}
const getCountryCodeByAlpha2 = fn(4776).getCountryCodeByAlpha2;
const FamilyCenterConstants = fn(7538);
({ FAMILY_CENTER_REFETCH_COOLDOWN: metroRequire, FAMILY_CENTER_SUB_ROUTES } = FamilyCenterConstants);
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
const TeenActionDisplayType = FamilyCenterConstants.TeenActionDisplayType;
let c10 = null;
let c11 = null;
let reduced = {};
let c13 = false;
let closure_14 = freshTeenActivityWithMap();
const PURCHASES = TeenActionDisplayType.PURCHASES;
let snapshot = {
  [TeenActionDisplayType.USER_ADD]: 0,
  [TeenActionDisplayType.GUILD_ADD]: 0,
  [TeenActionDisplayType.USER_INTERACTION]: 0,
  [TeenActionDisplayType.GUILD_INTERACTION]: 0,
  [TeenActionDisplayType.USER_CALLED]: 0,
  [TeenActionDisplayType.TOTAL_VOICE_MINUTES]: 0,
  [PURCHASES]: 0,
  [TeenActionDisplayType.GIFTS]: 0,
};
let c16 = null;
let c17 = null;
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
  REQUESTS =
    pathname1 === FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_SETTINGS
      ? FamilyCenterSubPages.SETTINGS
      : FamilyCenterSubPages.ACTIVITY;
}
let ACTIVITY = REQUESTS;
let c19 = false;
let c20 = false;
let c21 = null;
let c22 = null;
let closure_23 = [];
let closure_24 = [];
let c25 = null;
let c26 = null;
let c27 = null;
let c28 = null;
let closure_29 = {};
let closure_30 = {};
let c31 = null;
let closure_32 = {};
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
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: handleLinkedUserFetch,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: handleTeenActivityFetch,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: handleTeenActivityMoreFetch,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: handleRequestLinkSuccess,
      FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: handleUserLinkStatusUpdate,
      FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: handleUserLinkRemove,
      FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: handleLinkCodeFetch,
      FAMILY_CENTER_HANDLE_TAB_SELECT: handleTabSelect,
      SET_LOCATION_METADATA: handleSetLocationMetadata,
      LOGOUT: reset,
    };
    tmp = new tmp(obj, handleSetLocationMetadata, new.target, tmp);
    closure_0 = tmp;
    return tmp;
  }
}
let prototype = FamilyCenterStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["loadCache"] = function loadCache() {
  snapshot = this.readSnapshot(FamilyCenterStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    let linkedUsers = snapshot.linkedUsers;
    if (linkedUsers === undefined) {
      linkedUsers = [];
    }
    if (linkedUsers.length > 0) {
      reduced = linkedUsers.reduce((acc, user_id) => {
        const obj = {};
        const merged = Object.assign(acc);
        obj[user_id.user_id] = user_id;
        return obj;
      }, {});
    } else {
      reduced = {};
    }
    c13 = true;
    const guilds = snapshot.guilds;
    closure_32 = guilds.reduce((acc, approximate_member_count) => {
      let obj = {};
      const merged = Object.assign(acc);
      obj = {};
      const merged1 = Object.assign(
        closure_0(1971).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count),
      );
      let num = approximate_member_count.approximate_member_count;
      if (num == null) {
        num = 0;
      }
      obj.approximateMemberCount = num;
      obj[approximate_member_count.id] = obj;
      return obj;
    }, closure_32);
    const teenActivity = snapshot.teenActivity;
    const tmp4 = freshTeenActivityWithMap();
    closure_0 = tmp4;
    const item = teenActivity.forEach((display_type) => {
      value = closure_0.get(display_type.display_type);
      if (!tmp) {
        const result = value.set(display_type.event_id, display_type);
      }
    });
    closure_14 = tmp4;
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
    snapshot = teenActivityTotals.reduce((acc, item) => {
      [tmp2, tmp3] = _slicedToArray(item.split(":"), 2);
      let obj = closure_0(7593);
      const result = obj.displayTypeFromString(tmp2);
      let tmp5 = acc;
      if (undefined !== result) {
        obj = {};
        const merged = Object.assign(acc);
        const _parseInt = parseInt;
        obj[result] = parseInt(tmp3, 10);
        tmp5 = obj;
      }
      return tmp5;
    }, obj);
  }
};
prototype["takeSnapshot"] = function takeSnapshot() {
  let obj = { version: FamilyCenterStore.LATEST_SNAPSHOT_VERSION, data: null };
  obj = { linkedUsers: Object.values(reduced), teenActivityTotals: null, teenActivity: null, guilds: null };
  const entries = Object.entries(snapshot);
  obj.teenActivityTotals = entries.map((item) => {
    [tmp, tmp2] = item;
    return "" + tmp + ":" + tmp2;
  });
  let items = [];
  const item = closure_14.forEach((arr) => {
    items = [...Array.from(arr.values())];
    items.push.apply(items);
  });
  obj.teenActivity = items;
  obj.guilds = Object.values(closure_32);
  obj.data = obj;
  return obj;
};
prototype["getSelectedTeenId"] = function getSelectedTeenId() {
  return c10;
};
prototype["getLinkedUsers"] = function getLinkedUsers() {
  return reduced;
};
prototype["getLinkTimestamp"] = function getLinkTimestamp(arg0) {
  let tmp2 = null;
  if (null != reduced[arg0]) {
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
  if (null != c11) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(c11);
  }
  return extractTimestampResult;
};
prototype["getActionsForDisplayType"] = function getActionsForDisplayType(arg0) {
  value = closure_14.get(arg0);
  if (null != value) {
    const _Array = Array;
    let items = Array.from(value.values());
  } else {
    items = [];
  }
  return items;
};
prototype["getTotalForDisplayType"] = function getTotalForDisplayType(item) {
  return snapshot[item];
};
prototype["getLinkCode"] = function getLinkCode() {
  return c16;
};
prototype["getLinkCodeExpiresAt"] = function getLinkCodeExpiresAt() {
  return c17;
};
prototype["getGuild"] = function getGuild(arg0) {
  return closure_32[arg0];
};
prototype["getSelectedTab"] = function getSelectedTab() {
  return ACTIVITY;
};
prototype["getStartId"] = function getStartId() {
  return c11;
};
prototype["getIsInitialized"] = function getIsInitialized() {
  return c19;
};
prototype["getAreLinkedUsersProcessed"] = function getAreLinkedUsersProcessed() {
  return c13;
};
prototype["getUserCountry"] = function getUserCountry() {
  return c22;
};
prototype["isLoading"] = function isLoading() {
  return c20;
};
prototype["getTopUserActivities"] = function getTopUserActivities() {
  return closure_23;
};
prototype["getTopGuildActivities"] = function getTopGuildActivities() {
  return closure_24;
};
prototype["getTotalSpendAmount"] = function getTotalSpendAmount() {
  return c25;
};
prototype["getTotalSpendCurrency"] = function getTotalSpendCurrency() {
  return c26;
};
prototype["getTotalGiftValue"] = function getTotalGiftValue() {
  let currency = null;
  let num = 0;
  let flag = false;
  const values = Object.values(closure_30);
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
      const obj = { amount: num, currency };
      tmp10 = obj;
    }
  }
  return tmp10;
};
prototype["getSpendingLimit"] = function getSpendingLimit() {
  return c27;
};
prototype["getMonthlyPurchases"] = function getMonthlyPurchases() {
  return c28;
};
prototype["getPurchaseInfo"] = function getPurchaseInfo(entity_id) {
  return closure_29[entity_id];
};
prototype["getGiftInfo"] = function getGiftInfo(entity_id) {
  return closure_30[entity_id];
};
prototype["getAgeGroup"] = function getAgeGroup() {
  return c31;
};
prototype["canRefetch"] = function canRefetch() {
  let tmp = null === c21;
  if (!tmp) {
    tmp = SnowflakeUtilsDefault.age(c21) > timestampProducer;
  }
  return tmp;
};
prototype["isCurrentUserInRestrictedHours"] = function isCurrentUserInRestrictedHours() {
  if (obj.getIsFamilyCenterV3Enabled({ location: "isInRestrictedHours" })) {
    const currentUser = UserStore.getCurrentUser();
    let flag2;
    if (currentUser != null) {
      const restrictedSchedule = currentUser.restrictedSchedule;
      if (restrictedSchedule != null) {
        flag2 = restrictedSchedule.isInRestrictedHours();
      }
    }
    if (flag2 == null) {
      flag2 = false;
    }
    return flag2;
  } else {
    return false;
  }
  obj = FamilyCenterV3Experiment;
};
FamilyCenterStore.displayName = "FamilyCenterStore";
FamilyCenterStore.LATEST_SNAPSHOT_VERSION = 3;
let closure_129_0;
let obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  CURRENT_USER_UPDATE: handleCurrentUserUpdate,
  CACHE_LOADED_LAZY: null,
  FAMILY_CENTER_INITIAL_LOAD: null,
  FAMILY_CENTER_FETCH_START: null,
  FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: null,
  FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: null,
  FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: null,
  FAMILY_CENTER_REQUEST_LINK_SUCCESS: null,
  FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: null,
  FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: null,
  FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: null,
  FAMILY_CENTER_HANDLE_TAB_SELECT: null,
  SET_LOCATION_METADATA: null,
  LOGOUT: null,
};
class CACHE_LOADED_LAZY {
  constructor() {
    return closure_0.loadCache();
  }
}
obj.CACHE_LOADED_LAZY = CACHE_LOADED_LAZY;
obj.FAMILY_CENTER_INITIAL_LOAD = handleInitialLoad;
obj.FAMILY_CENTER_FETCH_START = handleFetchStart;
obj.FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS = handleLinkedUserFetch;
obj.FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS = handleTeenActivityFetch;
obj.FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS = handleTeenActivityMoreFetch;
obj.FAMILY_CENTER_REQUEST_LINK_SUCCESS = handleRequestLinkSuccess;
obj.FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS = handleUserLinkStatusUpdate;
obj.FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS = handleUserLinkRemove;
obj.FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS = handleLinkCodeFetch;
obj.FAMILY_CENTER_HANDLE_TAB_SELECT = handleTabSelect;
obj.SET_LOCATION_METADATA = handleSetLocationMetadata;
obj.LOGOUT = reset;
prototype = new prototype(
  obj,
  tmp2,
  tmp,
  PURCHASES,
  pathname,
  _location2,
  handleConnectionOpen,
  CACHE_LOADED_LAZY,
  handleInitialLoad,
  handleFetchStart,
  handleLinkedUserFetch,
  handleTeenActivityFetch,
);
closure_129_0 = prototype;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterStore.tsx");

export default prototype;
