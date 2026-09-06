// discord_app/modules/icymi/ICYMIPopularGuildsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const require = fn;
let closure_3 = [];
let closure_4 = [];
let c5 = 0;
const Store = initializeDefault.Store;
class ICYMIPopularGuildsStore extends Store {}
const prototype = ICYMIPopularGuildsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore);
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
const iCYMIPopularGuildsStore = new ICYMIPopularGuildsStore(DispatcherDefault, {
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
    set1 = new Set(GuildStore.getGuildIds());
    const mapped = guilds.map((item) => {
      const obj = set(set1[1]);
      return obj.fromClientDiscoverableGuild(set(set1[2]).makeDiscoverableGuild(item));
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIPopularGuildsStore.tsx");

export default iCYMIPopularGuildsStore;
