// === Module 16470: GuildDiscoveryCategoryStore ===

// Module 16470 (GuildDiscoveryCategoryStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9066 */;
import size from "module_2" /* 2 */;

({ DEFAULT_DISCOVERY_CATEGORY_ID: c3, OTHER_DISCOVERY_CATEGORY_ID: closure_4, DISCOVERY_ALL_CATEGORIES_ID: hasOwnProperty, DISCOVERY_SIDEBAR_CATEGORIES: metroRequire } = GlobalDiscoveryServersConstants);
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
  const items = [obj, ...found];
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
  const items = [obj, ...found];
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
    const items = [];
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
            obj = { categoryId: id, name };
            items.push(obj);
          }
          obj = { categoryId: id, name };
          items1.push(obj);
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
    locale = categories.locale;
  }
});
const result = size.fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx");

export default guildDiscoveryCategoryStore;
export const areDiscoveryCategoriesEqual = function areDiscoveryCategoriesEqual(arr, arr2) {
  const mapped = arr.map((item) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = item);
    return items;
  });
  return _modDef12.isEqual(mapped, arr2.map((item) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = item);
    return items;
  }));
};