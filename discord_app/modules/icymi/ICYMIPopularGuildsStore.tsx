// discord_app/modules/icymi/ICYMIPopularGuildsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_2 from "../../stores/GuildStore.tsx";

const require = arg1;
let closure_3 = [];
let closure_4 = [];
let c5 = 0;
const Store = initializeDefault.Store;
class ICYMIPopularGuildsStore extends Store {}
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
    set = new Set(items.map((id) => id.id));
    set1 = new Set(guildIds.getGuildIds());
    const mapped = guilds.map((body) => {
      const obj = set(set1[1]);
      return obj.fromClientDiscoverableGuild(set(set1[2]).makeDiscoverableGuild(body));
    });
    const found = mapped.filter((id) => {
      const hasItem = set1.has(id.id);
      let tmp2 = !hasItem;
      if (!hasItem) {
        tmp2 = !set.has(id.id);
      }
      return tmp2;
    });
    items = [...found];
  },
  LOGOUT: function handleLogout() {
    closure_3 = [];
    closure_4 = [];
    c5 = 0;
  },
});
const result = require("set").fileFinishedImporting("modules/icymi/ICYMIPopularGuildsStore.tsx");

export default iCYMIPopularGuildsStore;
