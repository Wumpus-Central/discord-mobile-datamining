// discord_app/modules/parent_tools/FamilyCenterStore.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import clearAllDefault from "../../stores/MobileCacheSnapshotStore.tsx";
import maybeFetchCollectiblesForInvoicesDefault from "FamilyCenterActionCreators.tsx";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import { getCountryCodeByAlpha2 } from "../i18n/CountryCodeUtils.tsx";
import closure_5 from "../../stores/UserStore.tsx";
import items from "FamilyCenterConstants.tsx";

let prototype = arg1;
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
  ({ actions, guilds, totals, spendingLimit, monthlyPurchases, invoices, gifts, teenId: c10, rangeStartId: c11 } = familyCenterTeenActivity);
  closure_0 = undefined;
  ({ topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
  const tmp = freshTeenActivityWithMap();
  closure_0 = tmp;
  const item = actions.forEach((display_type) => {
    const value = lib.get(display_type.display_type);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_14 = tmp;
  closure_32 = guilds.reduce((arg0, approximate_member_count) => {
    let obj = {};
    const merged = Object.assign(arg0);
    obj = {};
    const merged1 = Object.assign(lib(1430).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
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
    let reduced = linkedUsers.reduce((arg0, user_id) => {
      const obj = {};
      const merged = Object.assign(arg0);
      obj[user_id.user_id] = user_id;
      return obj;
    }, {});
  } else {
    reduced = {};
  }
  c13 = true;
  if (null != invoices) {
    closure_29 = invoices.reduce((arg0, invoice_items) => {
      if (null != invoice_items.invoice_items) {
        if (invoice_items.invoice_items.length > 0) {
          ({ sku_id, subscription_plan_id } = invoice_items.invoice_items[0]);
          if (!tmp) {
            const obj = { sku_id: null, subscription_plan_id: null, total: null, currency: null };
            obj[0] = sku_id;
            obj[1] = subscription_plan_id;
            ({ total: obj[2], currency: obj[3] } = invoice_items);
            arg0[invoice_items.id] = obj;
          }
          tmp = null == sku_id && null == subscription_plan_id;
        }
      }
      return arg0;
    }, {});
  }
  if (null != gifts) {
    closure_30 = gifts.reduce((arg0, entitlement_id) => {
      arg0[entitlement_id.entitlement_id] = entitlement_id;
      return arg0;
    }, {});
  }
  if (spendingLimit == null) {
    spendingLimit = null;
  }
  if (monthlyPurchases == null) {
    monthlyPurchases = null;
  }
  if (ageGroup == null) {
    ageGroup = null;
  }
  c20 = false;
  closure_21 = DISCORD_EPOCHDefault.fromTimestamp(Date.now());
  c19 = true;
}
function handleLinkedUserFetch(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    let reduced = linkedUsers.reduce((arg0, user_id) => {
      const obj = {};
      const merged = Object.assign(arg0);
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
    let reduced = linkedUsers.reduce((arg0, user_id) => {
      const obj = {};
      const merged = Object.assign(arg0);
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
    ({ actions, totals, guilds, invoices, gifts, spendingLimit, monthlyPurchases, teenId: c10, rangeStartId: c11 } = familyCenterTeenActivity);
    closure_0 = undefined;
    ({ topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
    const tmp7 = freshTeenActivityWithMap();
    closure_0 = tmp7;
    const item = actions.forEach((display_type) => {
      const value = lib.get(display_type.display_type);
      if (!tmp) {
        const result = value.set(display_type.event_id, display_type);
      }
    });
    closure_14 = tmp7;
    closure_32 = guilds.reduce((arg0, approximate_member_count) => {
      let obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(lib(1430).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
      let num = approximate_member_count.approximate_member_count;
      if (num == null) {
        num = 0;
      }
      obj.approximateMemberCount = num;
      obj[approximate_member_count.id] = obj;
      return obj;
    }, closure_32);
    if (null != invoices) {
      closure_29 = invoices.reduce((arg0, invoice_items) => {
        if (null != invoice_items.invoice_items) {
          if (invoice_items.invoice_items.length > 0) {
            ({ sku_id, subscription_plan_id } = invoice_items.invoice_items[0]);
            if (!tmp) {
              const obj = { sku_id: null, subscription_plan_id: null, total: null, currency: null };
              obj[0] = sku_id;
              obj[1] = subscription_plan_id;
              ({ total: obj[2], currency: obj[3] } = invoice_items);
              arg0[invoice_items.id] = obj;
            }
            tmp = null == sku_id && null == subscription_plan_id;
          }
        }
        return arg0;
      }, {});
    }
    if (null != gifts) {
      closure_30 = gifts.reduce((arg0, entitlement_id) => {
        arg0[entitlement_id.entitlement_id] = entitlement_id;
        return arg0;
      }, {});
    }
    c20 = false;
    const _Date = Date;
    closure_21 = DISCORD_EPOCHDefault.fromTimestamp(Date.now());
    if (spendingLimit == null) {
      spendingLimit = null;
    }
    if (monthlyPurchases == null) {
      monthlyPurchases = null;
    }
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  ({ actions, guilds } = familyCenterTeenActivity.familyCenterTeenActivity);
  closure_0 = closure_14;
  const item = actions.forEach((display_type) => {
    const value = lib.get(display_type.display_type);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_32 = guilds.reduce((arg0, approximate_member_count) => {
    let obj = {};
    const merged = Object.assign(arg0);
    obj = {};
    const merged1 = Object.assign(lib(1430).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
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
    let reduced = linkedUsers.reduce((arg0, user_id) => {
      const obj = {};
      const merged = Object.assign(arg0);
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
    let reduced = linkedUsers.reduce((arg0, user_id) => {
      const obj = {};
      const merged = Object.assign(arg0);
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
  tab = tab.tab;
}
function handleCurrentUserUpdate(user) {
  user = user.user;
  let users;
  if (undefined === user.linked_users) {
    return false;
  } else {
    users = authStore.getUsers();
    let linked_users = user.linked_users;
    if (linked_users.some((arg0) => undefined === table[arg0.user_id])) {
      const _Object = Object;
      if (user.linked_users.length > Object.keys(reduced).length) {
        const linkedUsers = maybeFetchCollectiblesForInvoicesDefault.fetchLinkedUsers();
        const obj2 = maybeFetchCollectiblesForInvoicesDefault;
      }
    }
    linked_users = user.linked_users;
    if (linked_users === undefined) {
      linked_users = [];
    }
    if (linked_users.length > 0) {
      reduced = linked_users.reduce((arg0, user_id) => {
        const obj = {};
        const merged = Object.assign(arg0);
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
      let reduced = linkedUsers.reduce((arg0, user_id) => {
        const obj = {};
        const merged = Object.assign(arg0);
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
  closure_12 = {};
  c16 = null;
  c17 = null;
  closure_14 = freshTeenActivityWithMap();
  closure_15 = { [closure_9.USER_ADD]: 0, [closure_9.GUILD_ADD]: 0, [closure_9.USER_INTERACTION]: 0, [closure_9.GUILD_INTERACTION]: 0, [closure_9.USER_CALLED]: 0, [closure_9.TOTAL_VOICE_MINUTES]: 0, [closure_9.PURCHASES]: 0, [closure_9.GIFTS]: 0 };
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
    let ACTIVITY = FamilyCenterSubPages.REQUESTS;
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
clearAllDefault;
({ FAMILY_CENTER_REFETCH_COOLDOWN: closure_6, FAMILY_CENTER_SUB_ROUTES } = items);
const FamilyCenterSubPages = items.FamilyCenterSubPages;
const TeenActionDisplayType = items.TeenActionDisplayType;
let c10 = null;
let c11 = null;
let closure_12 = {};
let c13 = false;
let closure_14 = freshTeenActivityWithMap();
const PURCHASES = TeenActionDisplayType.PURCHASES;
let closure_15 = { [TeenActionDisplayType.USER_ADD]: 0, [TeenActionDisplayType.GUILD_ADD]: 0, [TeenActionDisplayType.USER_INTERACTION]: 0, [TeenActionDisplayType.GUILD_INTERACTION]: 0, [TeenActionDisplayType.USER_CALLED]: 0, [TeenActionDisplayType.TOTAL_VOICE_MINUTES]: 0, [PURCHASES]: 0, [TeenActionDisplayType.GIFTS]: 0 };
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
  REQUESTS = pathname1 === FAMILY_CENTER_SUB_ROUTES.FAMILY_CENTER_SETTINGS ? FamilyCenterSubPages.SETTINGS : FamilyCenterSubPages.ACTIVITY;
}
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
            return obj.loadCache();
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
      LOGOUT: reset
    };
    tmp = new tmp(obj, handleSetLocationMetadata, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    return tmp;
  }
}
prototype = FamilyCenterStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_5);
};
prototype["loadCache"] = function loadCache() {
  let snapshot = this.readSnapshot(FamilyCenterStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    let linkedUsers = snapshot.linkedUsers;
    if (linkedUsers === undefined) {
      linkedUsers = [];
    }
    if (linkedUsers.length > 0) {
      let reduced = linkedUsers.reduce((arg0, user_id) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[user_id.user_id] = user_id;
        return obj;
      }, {});
    } else {
      reduced = {};
    }
    c13 = true;
    const guilds = snapshot.guilds;
    closure_32 = guilds.reduce((arg0, approximate_member_count) => {
      let obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(lib(1430).dangerouslyConstructGuildRecordFromUntypedObject(approximate_member_count));
      let num = approximate_member_count.approximate_member_count;
      if (num == null) {
        num = 0;
      }
      obj.approximateMemberCount = num;
      obj[approximate_member_count.id] = obj;
      return obj;
    }, closure_32);
    const teenActivity = snapshot.teenActivity;
    closure_0 = undefined;
    const tmp4 = freshTeenActivityWithMap();
    closure_0 = tmp4;
    const item = teenActivity.forEach((display_type) => {
      const value = lib.get(display_type.display_type);
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
    snapshot = teenActivityTotals.reduce((arg0, str) => {
      [tmp2, tmp3] = callback(str.split(":"), 2);
      let obj = lib(5368);
      const result = obj.displayTypeFromString(tmp2);
      let tmp5 = arg0;
      if (undefined !== result) {
        obj = {};
        const merged = Object.assign(arg0);
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
  obj = { linkedUsers: Object.values(closure_12), teenActivityTotals: null, teenActivity: null, guilds: null };
  const entries = Object.entries(closure_15);
  obj[1] = entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  let items = [];
  const item = closure_14.forEach((arr) => {
    items = [...Array.from(arr.values())];
    items.push.apply(items);
  });
  obj[2] = items;
  obj[3] = Object.values(closure_32);
  obj[1] = obj;
  return obj;
};
prototype["getSelectedTeenId"] = function getSelectedTeenId() {
  return c10;
};
prototype["getLinkedUsers"] = function getLinkedUsers() {
  return closure_12;
};
prototype["getLinkTimestamp"] = function getLinkTimestamp(closure_0) {
  let tmp2 = null;
  if (null != table[closure_0]) {
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
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(c11);
    const obj = DISCORD_EPOCHDefault;
  }
  return extractTimestampResult;
};
prototype["getActionsForDisplayType"] = function getActionsForDisplayType(aPIError) {
  const value = closure_14.get(aPIError);
  if (null != value) {
    const _Array = Array;
    let items = Array.from(value.values());
  } else {
    items = [];
  }
  return items;
};
prototype["getTotalForDisplayType"] = function getTotalForDisplayType(closure_0) {
  return table2[closure_0];
};
prototype["getLinkCode"] = function getLinkCode(arg0) {
  return c16;
};
prototype["getLinkCodeExpiresAt"] = function getLinkCodeExpiresAt() {
  return c17;
};
prototype["getGuild"] = function getGuild(arg0) {
  return table5[arg0];
};
prototype["getSelectedTab"] = function getSelectedTab() {
  return REQUESTS;
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
    let tmp3 = item10014;
    if (null != item10014.price) {
      let tmp4 = currency;
      if (null != currency) {
        let tmp5 = item10014;
        let tmp6 = currency;
        if (tmp3.price.currency !== currency) {
          let tmp9 = obj;
          obj.return();
          return null;
        }
      }
      let tmp7 = item10014;
      currency = tmp3.price.currency;
      let tmp8 = num;
      num = num + tmp3.price.amount;
      flag = true;
    }
    continue;
  }
  let tmp10 = null;
  if (flag) {
    tmp10 = null;
    if (null != currency) {
      const obj = { amount: null, currency: null };
      obj[0] = num;
      obj[1] = currency;
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
  return table3[entity_id];
};
prototype["getGiftInfo"] = function getGiftInfo(entity_id) {
  return table4[entity_id];
};
prototype["getAgeGroup"] = function getAgeGroup() {
  return c31;
};
prototype["canRefetch"] = function canRefetch() {
  let tmp = null === c21;
  if (!tmp) {
    tmp = DISCORD_EPOCHDefault.age(c21) > closure_6;
    const obj = DISCORD_EPOCHDefault;
  }
  return tmp;
};
prototype["isCurrentUserInRestrictedHours"] = function isCurrentUserInRestrictedHours() {
  if (obj.getIsFamilyCenterV3Enabled({ location: "isInRestrictedHours" })) {
    const currentUser = authStore.getCurrentUser();
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
  obj = prototype(5369);
};
FamilyCenterStore.displayName = "FamilyCenterStore";
FamilyCenterStore.LATEST_SNAPSHOT_VERSION = 3;
prototype = undefined;
let obj = { CONNECTION_OPEN: handleConnectionOpen, CURRENT_USER_UPDATE: handleCurrentUserUpdate, CACHE_LOADED_LAZY: null, FAMILY_CENTER_INITIAL_LOAD: null, FAMILY_CENTER_FETCH_START: null, FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: null, FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: null, FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: null, FAMILY_CENTER_REQUEST_LINK_SUCCESS: null, FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: null, FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: null, FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: null, FAMILY_CENTER_HANDLE_TAB_SELECT: null, SET_LOCATION_METADATA: null, LOGOUT: null };
class CACHE_LOADED_LAZY {
  constructor() {
    return obj.loadCache();
  }
}
obj[2] = CACHE_LOADED_LAZY;
obj[3] = handleInitialLoad;
obj[4] = handleFetchStart;
obj[5] = handleLinkedUserFetch;
obj[6] = handleTeenActivityFetch;
obj[7] = handleTeenActivityMoreFetch;
obj[8] = handleRequestLinkSuccess;
obj[9] = handleUserLinkStatusUpdate;
obj[10] = handleUserLinkRemove;
obj[11] = handleLinkCodeFetch;
obj[12] = handleTabSelect;
obj[13] = handleSetLocationMetadata;
obj[14] = reset;
prototype = new prototype(obj, tmp2, tmp, PURCHASES, pathname, _location2, handleConnectionOpen, CACHE_LOADED_LAZY, handleInitialLoad, handleFetchStart, handleLinkedUserFetch, handleTeenActivityFetch);
// ThrowIfThisInitialized (0x7c)
let result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterStore.tsx");

export default prototype;