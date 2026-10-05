// === Module 16414: GuildDiscoveryCategoryStore ===

// Module 16414 (GuildDiscoveryCategoryStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9249 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ DEFAULT_DISCOVERY_CATEGORY_ID: c3, OTHER_DISCOVERY_CATEGORY_ID: closure_4, DISCOVERY_ALL_CATEGORIES_ID: hasOwnProperty, DISCOVERY_SIDEBAR_CATEGORIES: metroRequire } = GlobalDiscoveryServersConstants);
let c7 = null;
let closure_8 = [];
let closure_9 = [];
const authStore = {};
const Store = get_initializedDefault.Store;
class GuildDiscoveryCategoryStore extends Store {
  getPrimaryCategories() {
    return closure_8;
  }
  getDiscoveryCategories() {
    let intl;
    const mapped = metroRequire.map((item) => {
      let closure_0 = item;
      return closure_1_9.find((categoryId) => categoryId.categoryId === closure_0);
    });
    const obj = { categoryId: hasOwnProperty, name: intl.string(intl2.t.Ym2Ri6) };
    const found = mapped.filter(GlobalUtils.isNotNullish);
    intl = intl2.intl;
    const items = [obj, ...found];
    return items;
  }
  getClanDiscoveryCategories() {
    let intl;
    const mapped = metroRequire.map((item) => {
      let closure_0 = item;
      return closure_1_9.find((categoryId) => categoryId.categoryId === closure_0);
    });
    const obj = { categoryId: hasOwnProperty, name: intl.string(intl2.t.QToH29) };
    const found = mapped.filter(GlobalUtils.isNotNullish);
    intl = intl2.intl;
    const items = [obj, ...found];
    return items;
  }
  getAllCategories() {
    return closure_9;
  }
  getFetchedLocale() {
    return c7;
  }
  getCategoryName(arg0) {
    let stringResult;
    if (arg0 === hasOwnProperty) {
      const intl = intl2.intl;
      stringResult = intl.string(intl2.t.Ym2Ri6);
    } else {
      stringResult = closure_10[arg0];
    }
    return stringResult;
  }
}
const prototype = GuildDiscoveryCategoryStore.prototype;
GuildDiscoveryCategoryStore.displayName = "GuildDiscoveryCategoryStore";
let obj = {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function handleCategoryFetchSuccess(categories) {
    let name;
    categories = categories.categories;
    let obj;
    const items = [];
    const items1 = [];
    const locale = categories.locale;
    const sorted = categories.sort((name, name2) => {
      let num = 1;
      if (name.name < name2.name) {
        num = -1;
      }
      return num;
    });
    const item = sorted.forEach((item) => {
      let id;
      let name;
      ({ id, name } = item);
      if (id !== _false) {
        if (id !== React3) {
          if (true === tmp) {
            const obj2 = { categoryId: id, name };
            items.push(obj2);
          }
          const obj3 = { categoryId: id, name };
          items1.push(obj3);
          closure_10[id] = name;
        }
      }
    });
    if (null != obj) {
      ({ categoryId, name } = obj);
      obj = { categoryId, name };
      items.push(obj);
      closure_10[categoryId] = name;
    }
  }
};
const guildDiscoveryCategoryStore = new GuildDiscoveryCategoryStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx");

export default guildDiscoveryCategoryStore;
export const areDiscoveryCategoriesEqual = function areDiscoveryCategoriesEqual(arr, arr2) {
  const isEqual = _modDef12.isEqual;
  _modDef12;
  const mapped = arr.map((item) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = item);
    return items;
  });
  return isEqual(mapped, arr2.map((item) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = item);
    return items;
  }));
};