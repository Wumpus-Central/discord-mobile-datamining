// === Module 15739: initialize ===

// Module 15739 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

const require = fn;
let closure_3 = [];
let closure_4 = [];
let c5 = 0;
const Store = initializeDefault.Store;
class ICYMIPopularGuildsStore extends Store {
}
const prototype = ICYMIPopularGuildsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2);
};
prototype["getOnboardingCategoryIds"] = function getOnboardingCategoryIds() {
  return closure_3;
};
prototype["getOnboardingGuilds"] = function getOnboardingGuilds() {
  return closure_4;
};
prototype["getCurrentOnboardingGuildOffset"] = function getCurrentOnboardingGuildOffset() {
  return c5;
};
ICYMIPopularGuildsStore.displayName = "ICYMIPopularGuildsStore";
const iCYMIPopularGuildsStore = new ICYMIPopularGuildsStore(dispatcherDefault, {
  LOAD_ICYMI_POPULAR_GUILDS: function loadOnboardingPopularGuilds(categoryIds) {
    ({ guilds, offset } = categoryIds);
    let set;
    let set1;
    if (0 === offset) {
      categoryIds = categoryIds.categoryIds;
      let items = [];
      offset = 0;
    }
    set = new Set(items.map((item, index) => item.id));
    set1 = new Set(guildIds.getGuildIds());
    const mapped = guilds.map((item, index) => {
      const obj = set(set1[1]);
      return obj.fromClientDiscoverableGuild(set(set1[2]).makeDiscoverableGuild(item));
    });
    const found = mapped.filter((item, index) => {
      const hasItem = set1.has(item.id);
      let tmp2 = !hasItem;
      if (!hasItem) {
        tmp2 = !set.has(item.id);
      }
      return tmp2;
    });
    items = [...found];
  },
  LOGOUT: function handleLogout() {
    closure_3 = [];
    closure_4 = [];
    c5 = 0;
  }
});
const result = require("obj132").fileFinishedImporting("modules/icymi/ICYMIPopularGuildsStore.tsx");

export default iCYMIPopularGuildsStore;