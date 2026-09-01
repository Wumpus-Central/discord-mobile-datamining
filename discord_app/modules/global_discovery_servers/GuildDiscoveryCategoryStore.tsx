// === Module 16058: getPrimaryCategories ===

// Module 16058 (getPrimaryCategories)
import set from "set" /* 2 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1471 */;
import DEFAULT_DISCOVERY_CATEGORY_ID from "DEFAULT_DISCOVERY_CATEGORY_ID" /* 9730 */;

({ DEFAULT_DISCOVERY_CATEGORY_ID: c3, OTHER_DISCOVERY_CATEGORY_ID: c4, DISCOVERY_ALL_CATEGORIES_ID: c5, DISCOVERY_SIDEBAR_CATEGORIES: closure_6 } = DEFAULT_DISCOVERY_CATEGORY_ID);
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
  const mapped = closure_6.map((arg0) => {
    closure_0 = arg0;
    return closure_9.find((categoryId) => categoryId.categoryId === closure_0);
  });
  const obj = { categoryId: closure_5, name: null };
  const found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.Ym2Ri6);
  const items = [obj, ...found];
  return items;
};
prototype["getClanDiscoveryCategories"] = function getClanDiscoveryCategories() {
  const mapped = closure_6.map((arg0) => {
    closure_0 = arg0;
    return closure_9.find((categoryId) => categoryId.categoryId === closure_0);
  });
  const obj = { categoryId: closure_5, name: null };
  const found = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.QToH29);
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
  if (arg0 === closure_5) {
    const intl = getSystemLocale.intl;
    let stringResult = intl.string(getSystemLocale.t.Ym2Ri6);
  } else {
    stringResult = table[arg0];
  }
  return stringResult;
};
GuildDiscoveryCategoryStore.displayName = "GuildDiscoveryCategoryStore";
const guildDiscoveryCategoryStore = new GuildDiscoveryCategoryStore(dispatcherDefault, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function handleCategoryFetchSuccess(categories) {
    categories = categories.categories;
    c0 = undefined;
    const items = [];
    const items1 = [];
    const sorted = categories.sort((name, name2) => {
      let num = 1;
      if (name.name < name2.name) {
        num = -1;
      }
      return num;
    });
    const item = sorted.forEach((arg0) => {
      ({ id, name } = arg0);
      if (id !== closure_1_3) {
        if (id !== closure_1_4) {
          if (true === tmp) {
            let obj = { categoryId: null, name: null };
            obj[0] = id;
            obj[1] = name;
            items.push(obj);
          }
          obj = { categoryId: null, name: null };
          obj[0] = id;
          obj[1] = name;
          items1.push(obj);
          closure_1_10[id] = name;
        } else {
          obj = { categoryId: null, name: null };
          obj[0] = id;
          obj[1] = name;
        }
      }
    });
    if (null != c0) {
      ({ categoryId, name } = c0);
      let obj = { categoryId: null, name: null };
      obj[0] = categoryId;
      obj[1] = name;
      items.push(obj);
      closure_10[categoryId] = name;
    }
    const locale = categories.locale;
  }
});
const result = set.fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx");

export default guildDiscoveryCategoryStore;
export const areDiscoveryCategoriesEqual = function areDiscoveryCategoriesEqual(arr, arr2) {
  const mapped = arr.map((arg0) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = arg0);
    return items;
  });
  return applyDefault.isEqual(mapped, arr2.map((arg0) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = arg0);
    return items;
  }));
};