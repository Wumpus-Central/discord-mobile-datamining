// discord_app/modules/icymi/ICYMIPopularGuildsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

let closure_3 = [];
let closure_4 = [];
let c5 = 0;
const Store = get_initializedDefault.Store;
class ICYMIPopularGuildsStore extends Store {
  initialize() {
    this.waitFor(GuildStore);
  }
  getOnboardingCategoryIds() {
    return closure_3;
  }
  getOnboardingGuilds() {
    return closure_4;
  }
  getCurrentOnboardingGuildOffset() {
    return c5;
  }
}
const prototype = ICYMIPopularGuildsStore.prototype;
ICYMIPopularGuildsStore.displayName = "ICYMIPopularGuildsStore";
let obj = {
  LOAD_ICYMI_POPULAR_GUILDS: function loadOnboardingPopularGuilds(categoryIds) {
    let guilds;
    let items;
    let offset;
    ({ guilds, offset } = categoryIds);
    set = undefined;
    let set1;
    if (0 === offset) {
      categoryIds = categoryIds.categoryIds;
      items = [];
      offset = 0;
    }
    set = new Set(items.map((id) => id.id));
    set1 = new Set(GuildStore.getGuildIds());
    const mapped = guilds.map((item) => {
      const fromClientDiscoverableGuild = set(set1[1]).fromClientDiscoverableGuild;
      set(set1[1]);
      const obj = set(set1[2]);
      return fromClientDiscoverableGuild(obj.makeDiscoverableGuild(item));
    });
    const found = mapped.filter((id) => {
      const hasItem = set1.has(id.id);
      const tmp2 = !hasItem && !set.has(id.id);
      return tmp2;
    });
    items = [...found];
  },
  LOGOUT: function handleLogout() {
    closure_3 = [];
    closure_4 = [];
    c5 = 0;
  },
};
const iCYMIPopularGuildsStore = new ICYMIPopularGuildsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/icymi/ICYMIPopularGuildsStore.tsx");

export default iCYMIPopularGuildsStore;
