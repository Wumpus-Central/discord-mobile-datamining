// === Module 15466: MobileGameCommunitiesStore ===

// Module 15466 (MobileGameCommunitiesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 6854 */;
import size from "module_2" /* 2 */;

let dismissedGuildIds;

let set;
let set1;
let guildGameIds = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: set, dismissedGuildIds: set1, guildGameIds: {} };
set = new Set();
set1 = new Set();
const PersistedStore = get_initializedDefault.PersistedStore;
class MobileGameCommunitiesStore extends PersistedStore {
  initialize(guilds) {
    let set1;
    if (null != guilds) {
      let obj = {
        guilds: guilds.map((features) => {
            const obj = { features: new Set(features.features) };
            const merged = Object.assign(features);
            new Set(features.features);
            return obj;
          }),
        lastFetchedAt: guilds.lastFetchedAt,
        lastFetchedGameIds: set,
        dismissedGuildIds: set1,
        guildGameIds
      };
      guilds = guilds.guilds;
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(guilds.lastFetchedGameIds);
      const _Set2 = Set;
      const self3 = this;
      const self4 = this;
      guildGameIds = guilds.guildGameIds;
      set1 = new Set(guilds.dismissedGuildIds);
      if (guildGameIds == null) {
        guildGameIds = {};
      }
    }
  }
  getState() {
    let guilds;
    let items;
    let obj;
    obj = {
      guilds: guilds.map((features) => {
        let items;
        const obj = { features: items };
        const merged = Object.assign(features);
        items = [...features.features];
        return obj;
      }),
      lastFetchedAt: obj.lastFetchedAt,
      lastFetchedGameIds: items,
      dismissedGuildIds: [...obj.dismissedGuildIds],
      guildGameIds: obj.guildGameIds
    };
    guilds = obj.guilds;
    items = [...obj.lastFetchedGameIds];
    return obj;
  }
  getPresentableUpsellGuilds() {
    const guilds = obj.guilds;
    return guilds.filter((id) => {
      dismissedGuildIds = dismissedGuildIds.dismissedGuildIds;
      return !dismissedGuildIds.has(id.id);
    });
  }
  hasGuilds() {
    return this.getPresentableUpsellGuilds().length > 0;
  }
  getLastFetchedAt() {
    return obj.lastFetchedAt;
  }
  getLastFetchedGameIds() {
    return obj.lastFetchedGameIds;
  }
  getGuildGameIds() {
    return obj.guildGameIds;
  }
  getDismissedGuildIds() {
    return obj.dismissedGuildIds;
  }
  DEV_clearFetchCache() {
    const obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set(), guildGameIds: {} };
    const merged = Object.assign(obj);
    new Set();
    this.emitChange();
  }
  DEV_clearDismissedGuilds() {
    const obj = { dismissedGuildIds: new Set() };
    const merged = Object.assign(obj);
    new Set();
    this.emitChange();
  }
  DEV_clearState() {
    ({ guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set(), dismissedGuildIds: new Set(), guildGameIds: {} });
    new Set();
    new Set();
    this.emitChange();
  }
}
const prototype = MobileGameCommunitiesStore.prototype;
MobileGameCommunitiesStore.displayName = "MobileGameCommunitiesStore";
MobileGameCommunitiesStore.persistKey = "MobileGameCommunitiesStore";
let obj2 = {
  MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let gameIds;
    let guilds;
    ({ guilds, gameIds } = arg0);
    guildGameIds = {};
    const merged = Object.assign(guildGameIds.guildGameIds);
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.game_id) {
        guildGameIds[tmp3.id] = tmp3.game_id;
      }
      continue;
    }
    const obj2 = {
      guilds: guilds.map((item) => {
        const obj = GuildDiscoveryUtils;
        return obj.makeDiscoverableGuild(item);
      }),
      lastFetchedAt: Date.now(),
      lastFetchedGameIds: new Set(gameIds),
      guildGameIds
    };
    const merged1 = Object.assign(guildGameIds);
    guildGameIds = obj2;
    new Set(gameIds);
  },
  MOBILE_GAME_COMMUNITIES_DISMISS_GUILD: function handleDismissGuildAction(guildId) {
    let items;
    const obj = { dismissedGuildIds: new Set(items) };
    guildId = guildId.guildId;
    const merged = Object.assign(obj);
    items = [];
    items[HermesBuiltin.arraySpread(items, obj.dismissedGuildIds, 0)] = guildId;
    new Set(items);
  },
  LOGOUT: function handleLogout() {
    ({ guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set(), dismissedGuildIds: new Set(), guildGameIds: {} });
    new Set();
    new Set();
  }
};
const mobileGameCommunitiesStore = new MobileGameCommunitiesStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesStore.tsx");

export default mobileGameCommunitiesStore;