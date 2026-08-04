// discord_app/modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx
import DEFAULT_DISCOVERY_CATEGORY_ID from "DEFAULT_DISCOVERY_CATEGORY_ID";
import { Store } from "initialize";

let c3;
let c4;
let c5;
let closure_6;
({ DEFAULT_DISCOVERY_CATEGORY_ID: c3, OTHER_DISCOVERY_CATEGORY_ID: c4, DISCOVERY_ALL_CATEGORIES_ID: c5, DISCOVERY_SIDEBAR_CATEGORIES: closure_6 } = DEFAULT_DISCOVERY_CATEGORY_ID);
let c7 = null;
let closure_8 = [];
let closure_9 = [];
let closure_10 = {};
class GuildDiscoveryCategoryStore extends Store {
}
const prototype = GuildDiscoveryCategoryStore.prototype;
prototype["getPrimaryCategories"] = function getPrimaryCategories() {
  return closure_8;
};
prototype["getDiscoveryCategories"] = function getDiscoveryCategories() {
  const mapped = closure_6.map((arg0) => {
    let closure_0 = arg0;
    return closure_9.find((categoryId) => categoryId.categoryId === closure_0);
  });
  const obj = { categoryId: closure_5, name: null };
  const found = mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.Ym2Ri6);
  const items = [obj, ...found];
  return items;
};
prototype["getClanDiscoveryCategories"] = function getClanDiscoveryCategories() {
  const mapped = closure_6.map((arg0) => {
    let closure_0 = arg0;
    return closure_9.find((categoryId) => categoryId.categoryId === closure_0);
  });
  const obj = { categoryId: closure_5, name: null };
  const found = mapped.filter(require(1351) /* isDiscordFrontendDevelopment */.isNotNullish);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.QToH29);
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
    const intl = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl.string(require(1236) /* getSystemLocale */.t.Ym2Ri6);
  } else {
    stringResult = table[arg0];
  }
  return stringResult;
};
GuildDiscoveryCategoryStore.displayName = "GuildDiscoveryCategoryStore";
const guildDiscoveryCategoryStore = new GuildDiscoveryCategoryStore(require("dispatcher"), {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function handleCategoryFetchSuccess(categories) {
    let categoryId;
    let name;
    categories = categories.categories;
    let c0;
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
      let id;
      let name;
      ({ id, name } = arg0);
      if (id !== outer1_3) {
        if (id !== outer1_4) {
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
          outer1_10[id] = name;
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
const result = require("initialize").fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryStore.tsx");

export default guildDiscoveryCategoryStore;
export const areDiscoveryCategoriesEqual = function areDiscoveryCategoriesEqual(arr, arr2) {
  const mapped = arr.map((arg0) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = arg0);
    return items;
  });
  return importDefault(12).isEqual(mapped, arr2.map((arg0) => {
    const items = [, ];
    ({ categoryId: arr[0], name: arr[1] } = arg0);
    return items;
  }));
};