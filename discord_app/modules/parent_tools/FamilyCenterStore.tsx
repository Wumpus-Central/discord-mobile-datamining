// === Module 7048: FamilyCenterStore ===

// Module 7048 (FamilyCenterStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import GuildRecordUtils from "GuildRecordUtils" /* 2066 */;
import CountryCodeUtils from "CountryCodeUtils" /* 5105 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7050 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import UserStore from "UserStore" /* 1377 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7049 */;
import size from "module_2" /* 2 */;

let closure_14, closure_29, closure_30, closure_32, map, map1, set2, set3, set4, set5;

let FAMILY_CENTER_SUB_ROUTES;
let REQUESTS;
let metroRequire;
let tmp;
let tmp2;
const f94036 = (acc, user_id) => {
  const obj = {};
  const merged = Object.assign(acc);
  obj[user_id.user_id] = user_id;
  return obj;
};
const f94038 = (acc, id) => {
  let num;
  const obj = {};
  const merged = Object.assign(acc);
  id = id.id;
  const obj2 = { approximateMemberCount: num };
  const obj3 = GuildRecordUtils;
  const merged1 = Object.assign(obj3.dangerouslyConstructGuildRecordFromUntypedObject(id));
  num = id.approximate_member_count;
  if (num == null) {
    num = 0;
  }
  obj[id] = obj2;
  return obj;
};
const f94039 = (acc, invoice_items) => {
  let sku_id;
  let subscription_plan_id;
  if (null != invoice_items.invoice_items) {
    if (invoice_items.invoice_items.length > 0) {
      ({ sku_id, subscription_plan_id } = invoice_items.invoice_items[0]);
      const tmp = null == sku_id && null == subscription_plan_id;
      if (!tmp) {
        const obj = { sku_id, subscription_plan_id, total: null, currency: null };
        ({ total: obj.total, currency: obj.currency } = invoice_items);
        acc[invoice_items.id] = obj;
      }
    }
  }
  return acc;
};
const f94040 = (acc, entitlement_id) => {
  acc[entitlement_id.entitlement_id] = entitlement_id;
  return acc;
};
function freshTeenActivityWithMap() {
  map = new Map();
  const USER_ADD = TeenActionDisplayType.USER_ADD;
  set = map.set;
  map1 = new Map();
  const result = set(USER_ADD, map1);
  const GUILD_ADD = TeenActionDisplayType.GUILD_ADD;
  set2 = map.set;
  const map2 = new Map();
  set2(GUILD_ADD, map2);
  const USER_INTERACTION = TeenActionDisplayType.USER_INTERACTION;
  set3 = map.set;
  const map3 = new Map();
  set3(USER_INTERACTION, map3);
  const GUILD_INTERACTION = TeenActionDisplayType.GUILD_INTERACTION;
  set4 = map.set;
  const map4 = new Map();
  set4(GUILD_INTERACTION, map4);
  const USER_CALLED = TeenActionDisplayType.USER_CALLED;
  set5 = map.set;
  const map5 = new Map();
  set5(USER_CALLED, map5);
  const TOTAL_VOICE_MINUTES = TeenActionDisplayType.TOTAL_VOICE_MINUTES;
  const set6 = map.set;
  const map6 = new Map();
  set6(TOTAL_VOICE_MINUTES, map6);
  const PURCHASES = TeenActionDisplayType.PURCHASES;
  const set7 = map.set;
  const map7 = new Map();
  set7(PURCHASES, map7);
  const GIFTS = TeenActionDisplayType.GIFTS;
  const set8 = map.set;
  const map8 = new Map();
  set8(GIFTS, map8);
  return map;
}
function handleFetchStart() {
  c20 = true;
}
function handleInitialLoad(arg0) {
  let actions;
  let familyCenterTeenActivity;
  let gifts;
  let guilds;
  let invoices;
  let linkedUsers;
  let totals;
  ({ linkedUsers, familyCenterTeenActivity, ageGroup } = arg0);
  ({ actions, guilds, totals, spendingLimit, monthlyPurchases, invoices, gifts, teenId: c10, rangeStartId: c11 } = familyCenterTeenActivity);
  ({ topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
  const tmp = freshTeenActivityWithMap();
  let closure_0 = tmp;
  const item = actions.forEach((display_type) => {
    const value = closure_0.get(display_type.display_type);
    const tmp = undefined === value || value.has(display_type.event_id);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_14 = tmp;
  if (undefined !== totals) {
    closure_15 = totals;
  }
  closure_32 = guilds.reduce(f94038, closure_32);
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    reduced = linkedUsers.reduce(f94036, {});
  } else {
    reduced = {};
  }
  c13 = true;
  if (null != invoices) {
    closure_29 = invoices.reduce(f94039, {});
  }
  if (null != gifts) {
    closure_30 = gifts.reduce(f94040, {});
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
  const obj2 = SnowflakeUtilsDefault;
  c21 = obj2.fromTimestamp(Date.now());
  c19 = true;
}
function handleLinkedUserFetch(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    reduced = linkedUsers.reduce(f94036, {});
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
    reduced = linkedUsers.reduce(f94036, {});
  } else {
    reduced = {};
  }
  c13 = true;
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  let actions;
  let gifts;
  let guilds;
  let invoices;
  let totals;
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined === familyCenterTeenActivity) {
    return false;
  } else {
    ({ actions, totals, guilds, invoices, gifts, spendingLimit, monthlyPurchases, teenId: c10, rangeStartId: c11 } = familyCenterTeenActivity);
    ({ topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency } = familyCenterTeenActivity);
    const tmp7 = freshTeenActivityWithMap();
    let closure_0 = tmp7;
    const item = actions.forEach((display_type) => {
      const value = closure_0.get(display_type.display_type);
      const tmp = undefined === value || value.has(display_type.event_id);
      if (!tmp) {
        const result = value.set(display_type.event_id, display_type);
      }
    });
    closure_14 = tmp7;
    if (undefined !== totals) {
      closure_15 = totals;
    }
    let tmp = closure_32;
    closure_32 = guilds.reduce(f94038, closure_32);
    if (null != invoices) {
      closure_29 = invoices.reduce(f94039, {});
    }
    if (null != gifts) {
      closure_30 = gifts.reduce(f94040, {});
    }
    c20 = false;
    let obj = SnowflakeUtilsDefault;
    const _Date = Date;
    c21 = obj.fromTimestamp(Date.now());
    if (spendingLimit == null) {
      spendingLimit = null;
    }
    if (monthlyPurchases == null) {
      monthlyPurchases = null;
    }
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  let actions;
  let guilds;
  ({ actions, guilds } = familyCenterTeenActivity.familyCenterTeenActivity);
  let closure_0 = closure_14;
  const item = actions.forEach((display_type) => {
    const value = closure_0.get(display_type.display_type);
    const tmp = undefined === value || value.has(display_type.event_id);
    if (!tmp) {
      const result = value.set(display_type.event_id, display_type);
    }
  });
  closure_32 = guilds.reduce(f94038, closure_32);
}
function handleUserLinkStatusUpdate(linkedUsers) {
  linkedUsers = linkedUsers.linkedUsers;
  if (linkedUsers === undefined) {
    linkedUsers = [];
  }
  if (linkedUsers.length > 0) {
    reduced = linkedUsers.reduce(f94036, {});
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
    reduced = linkedUsers.reduce(f94036, {});
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
    const linked_users = user.linked_users;
    if (linked_users.some((item) => undefined === closure_0[item.user_id])) {
      const _Object = Object;
      if (user.linked_users.length > Object.keys(reduced).length) {
        const obj2 = FamilyCenterActionCreatorsDefault;
        const linkedUsers = obj2.fetchLinkedUsers();
      }
    }
    let linked_users1 = user.linked_users;
    if (linked_users1 === undefined) {
      linked_users1 = [];
    }
    if (linked_users1.length > 0) {
      reduced = linked_users1.reduce(f94036, {});
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
      reduced = linkedUsers.reduce(f94036, {});
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
  closure_15 = { [closure_1_9.USER_ADD]: 0, [closure_1_9.GUILD_ADD]: 0, [closure_1_9.USER_INTERACTION]: 0, [closure_1_9.GUILD_INTERACTION]: 0, [closure_1_9.USER_CALLED]: 0, [closure_1_9.TOTAL_VOICE_MINUTES]: 0, [closure_1_9.PURCHASES]: 0, [closure_1_9.GIFTS]: 0 };
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
  topUserActivities = [];
  topGuildActivities = [];
  totalSpendAmount = null;
  totalSpendCurrency = null;
  spendingLimit = null;
  monthlyPurchases = null;
  closure_29 = {};
  closure_30 = {};
  ageGroup = null;
  c19 = false;
}
const getCountryCodeByAlpha2 = CountryCodeUtils.getCountryCodeByAlpha2;
({ FAMILY_CENTER_REFETCH_COOLDOWN: metroRequire, FAMILY_CENTER_SUB_ROUTES } = FamilyCenterConstants);
const FamilyCenterSubPages = FamilyCenterConstants.FamilyCenterSubPages;
const TeenActionDisplayType = FamilyCenterConstants.TeenActionDisplayType;
let c10 = null;
let c11 = null;
let reduced = {};
let c13 = false;
const authStore2 = freshTeenActivityWithMap();
let PURCHASES = TeenActionDisplayType.PURCHASES;
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
  REQUESTS = FamilyCenterSubPages.REQUESTS;
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
let c19 = false;
let c20 = false;
let c21 = null;
let c22 = null;
let topUserActivities = [];
let topGuildActivities = [];
let totalSpendAmount = null;
let totalSpendCurrency = null;
let spendingLimit = null;
let monthlyPurchases = null;
let set = {};
const __initData = {};
let ageGroup = null;
const __initData2 = {};
class FamilyCenterStore extends MobileCacheSnapshotStore {
  constructor() {
    const obj = {
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
      LOGOUT: reset
    };
    const tmp2 = new tmp(obj, handleSetLocationMetadata, new.target, tmp);
    let closure_0 = tmp2;
    return tmp2;
  }
  initialize() {
    this.waitFor(UserStore);
  }
  loadCache() {
    const snapshot = this.readSnapshot(FamilyCenterStore.LATEST_SNAPSHOT_VERSION);
    if (null != snapshot) {
      let linkedUsers = snapshot.linkedUsers;
      if (linkedUsers === undefined) {
        linkedUsers = [];
      }
      let num = 0;
      if (linkedUsers.length > 0) {
        reduced = linkedUsers.reduce(f94036, {});
      } else {
        reduced = {};
      }
      c13 = true;
      const guilds = snapshot.guilds;
      let tmp2 = closure_32;
      closure_32 = guilds.reduce(f94038, closure_32);
      const teenActivity = snapshot.teenActivity;
      let tmp4 = freshTeenActivityWithMap();
      let closure_0 = tmp4;
      const item = teenActivity.forEach((display_type) => {
        const value = closure_0.get(display_type.display_type);
        const tmp = undefined === value || value.has(display_type.event_id);
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
      closure_15 = teenActivityTotals.reduce((acc, item) => {
        function displayTypeFromString(arg0) {
          const values = Object.values(closure_1_9);
          for (const item10011 of values) {
            if (item10011.toString() === arg0) {
              obj.return();
              return item10011;
            }
          }
        }
        const tmp = _slicedToArray(item.split(":"), 2);
        const tmp2 = tmp[1];
        const tmp3 = displayTypeFromString(tmp[0]);
        let tmp4 = acc;
        if (undefined !== tmp3) {
          const obj = {};
          const merged = Object.assign(acc);
          const _parseInt = parseInt;
          obj[tmp3] = parseInt(tmp2, 10);
          tmp4 = obj;
        }
        return tmp4;
      }, obj);
    }
  }
  takeSnapshot() {
    let entries;
    let items;
    let obj2;
    const obj = { version: FamilyCenterStore.LATEST_SNAPSHOT_VERSION, data: obj2 };
    obj2 = {
      linkedUsers: Object.values(reduced),
      teenActivityTotals: entries.map((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        return "" + tmp + ":" + tmp2;
      }),
      teenActivity: items,
      guilds: Object.values(closure_32)
    };
    entries = Object.entries(closure_15);
    items = [];
    const item = closure_14.forEach((arr) => {
      items = [...from(arr.values())];
      items.push.apply(items);
    });
    return obj;
  }
  getSelectedTeenId() {
    return c10;
  }
  getLinkedUsers() {
    return reduced;
  }
  getLinkTimestamp(arg0) {
    let tmp2 = null;
    if (null != reduced[arg0]) {
      let created_at = tmp.updated_at;
      if (created_at == null) {
        created_at = tmp.created_at;
      }
      tmp2 = created_at;
    }
    return tmp2;
  }
  getRangeStartTimestamp() {
    let extractTimestampResult = null;
    if (null != c11) {
      const obj = SnowflakeUtilsDefault;
      extractTimestampResult = obj.extractTimestamp(c11);
    }
    return extractTimestampResult;
  }
  getActionsForDisplayType(arg0) {
    let items;
    const value = closure_14.get(arg0);
    if (null != value) {
      const _Array = Array;
      items = Array.from(value.values());
    } else {
      items = [];
    }
    return items;
  }
  getTotalForDisplayType(item) {
    return closure_15[item];
  }
  getLinkCode() {
    return c16;
  }
  getLinkCodeExpiresAt() {
    return c17;
  }
  getGuild(arg0) {
    return closure_32[arg0];
  }
  getSelectedTab() {
    return ACTIVITY;
  }
  getStartId() {
    return c11;
  }
  getIsInitialized() {
    return c19;
  }
  getAreLinkedUsersProcessed() {
    return c13;
  }
  getUserCountry() {
    return c22;
  }
  isLoading() {
    return c20;
  }
  getTopUserActivities() {
    return topUserActivities;
  }
  getTopGuildActivities() {
    return topGuildActivities;
  }
  getTotalSpendAmount() {
    return totalSpendAmount;
  }
  getTotalSpendCurrency() {
    return totalSpendCurrency;
  }
  getTotalGiftValue() {
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
        tmp10 = { amount: num, currency };
        const obj2 = { amount: num, currency };
      }
    }
    return tmp10;
  }
  getSpendingLimit() {
    return spendingLimit;
  }
  getMonthlyPurchases() {
    return monthlyPurchases;
  }
  getPurchaseInfo(entity_id) {
    return closure_29[entity_id];
  }
  getGiftInfo(entity_id) {
    return closure_30[entity_id];
  }
  getAgeGroup() {
    return ageGroup;
  }
  canRefetch() {
    let tmp = null === c21;
    if (!tmp) {
      const obj = SnowflakeUtilsDefault;
      tmp = obj.age(c21) > metroRequire;
    }
    return tmp;
  }
  isCurrentUserInRestrictedHours() {
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
  }
}
const prototype = FamilyCenterStore.prototype;
FamilyCenterStore.displayName = "FamilyCenterStore";
FamilyCenterStore.LATEST_SNAPSHOT_VERSION = 3;
let prototype1;
let obj = { CONNECTION_OPEN: handleConnectionOpen, CURRENT_USER_UPDATE: handleCurrentUserUpdate, CACHE_LOADED_LAZY, FAMILY_CENTER_INITIAL_LOAD: handleInitialLoad, FAMILY_CENTER_FETCH_START: handleFetchStart, FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: handleLinkedUserFetch, FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: handleTeenActivityFetch, FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: handleTeenActivityMoreFetch, FAMILY_CENTER_REQUEST_LINK_SUCCESS: handleRequestLinkSuccess, FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: handleUserLinkStatusUpdate, FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: handleUserLinkRemove, FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: handleLinkCodeFetch, FAMILY_CENTER_HANDLE_TAB_SELECT: handleTabSelect, SET_LOCATION_METADATA: handleSetLocationMetadata, LOGOUT: reset };
class CACHE_LOADED_LAZY {
  constructor() {
    return closure_0.loadCache();
  }
}
prototype1 = new prototype(obj, tmp2, tmp, PURCHASES, pathname, _location2, handleConnectionOpen, CACHE_LOADED_LAZY, handleInitialLoad, handleFetchStart, handleLinkedUserFetch, handleTeenActivityFetch);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterStore.tsx");

export default prototype1;