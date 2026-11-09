// === Module 18896: GuildDiscoveryCategoryStore ===

// Module 18896 (GuildDiscoveryCategoryStore)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import util from "util" /* 1113 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9156 */;
import size from "module_2" /* 2 */;

({ DEFAULT_DISCOVERY_CATEGORY_ID: c3, OTHER_DISCOVERY_CATEGORY_ID: closure_4, DISCOVERY_ALL_CATEGORIES_ID: hasOwnProperty, DISCOVERY_SIDEBAR_CATEGORIES: closure_6 } = GlobalDiscoveryServersConstants);
let c7 = null;
let closure_8 = [];
let closure_9 = [];
let closure_10 = {};
const Store = initializeDefault.Store;
class GuildDiscoveryCategoryStore extends Store {
}
const prototype = GuildDiscoveryCategoryStore.prototype;
prototype["getPrimaryCategories"] = function getPrimaryCategories() {
  return closure_8;
};
prototype["getDiscoveryCategories"] = function getDiscoveryCategories() {
  const mapped = timestampProducer.map((item) => {
    closure_0 = item;
    return closure_1_9.find((categoryId) => categoryId.categoryId === closure_0);
  });
  const obj = { categoryId, name: null };
  const found = mapped.filter(GlobalUtils.isNotNullish);
  const intl = util.intl;
  obj.name = intl.string(util.t.Ym2Ri6);
  items = [obj, ...found];
  return items;
};
prototype["getClanDiscoveryCategories"] = function getClanDiscoveryCategories() {
  const mapped = timestampProducer.map((item) => {
    closure_0 = item;
    return closure_1_9.find((categoryId) => categoryId.categoryId === closure_0);
  });
  const obj = { categoryId, name: null };
  const found = mapped.filter(GlobalUtils.isNotNullish);
  const intl = util.intl;
  obj.name = intl.string(util.t.QToH29);
  items = [obj, ...found];
  return items;
};
prototype["getAllCategories"] = function getAllCategories() {
  return closure_9;
};
prototype["getFetchedLocale"] = function getFetchedLocale() {
  return c7;
};
prototype["getCategoryName"] = function getCategoryName(arg0) {
  if (arg0 === categoryId) {
    const intl = util.intl;
    let stringResult = intl.string(util.t.Ym2Ri6);
  } else {
    stringResult = closure_10[arg0];
  }
  return stringResult;
};
GuildDiscoveryCategoryStore.displayName = "GuildDiscoveryCategoryStore";
const guildDiscoveryCategoryStore = new GuildDiscoveryCategoryStore(DispatcherDefault, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function handleCategoryFetchSuccess(categories) {
    categories = categories.categories;
    let obj;
    items = [];
    const items1 = [];
    const sorted = categories.sort((name, name2) => {
      let num = 1;
      if (name.name < name2.name) {
        num = -1;
      }
      return num;
    });
    const item = sorted.forEach((item) => {
      ({ id, name } = item);
      if (id !== React3) {
        if (id !== React4) {
          if (true === tmp) {
            const obj2 = { categoryId: id, name };
            items.push(obj2);
          }
          const obj3 = { categoryId: id, name };
          items1.push(obj3);
          closure_10[id] = name;
        } else {
          obj = { categoryId: id, name };
        }
      }
    });
    if (null != obj) {
      ({ categoryId, name } = obj);
      obj = { categoryId, name };
      items.push(obj);
      closure_10[categoryId] = name;
    }
    const locale = categories.locale;
  }
});
const result = size.fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx");

export default guildDiscoveryCategoryStore;
export function areDiscoveryCategoriesEqual(arr, arr2) {
  const mapped = arr.map((item) => {
    items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = item);
    return items;
  });
  return applyDefault.isEqual(mapped, arr2.map((item) => {
    items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = item);
    return items;
  }));
}