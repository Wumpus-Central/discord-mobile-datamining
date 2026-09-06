// === Module 15620: MobileGameCommunitiesStore ===

// Module 15620 (MobileGameCommunitiesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildDiscoveryUtils from "GuildDiscoveryUtils" /* 7341 */;

require = fn;
let guildGameIds = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set(), dismissedGuildIds: null, guildGameIds: null };
let set = new Set();
guildGameIds.dismissedGuildIds = new Set();
guildGameIds.guildGameIds = {};
const PersistedStore = initializeDefault.PersistedStore;
class MobileGameCommunitiesStore extends PersistedStore {
}
const prototype = MobileGameCommunitiesStore.prototype;
prototype["initialize"] = function initialize(guilds) {
  if (null != guilds) {
    let obj = { guilds: null, lastFetchedAt: null, lastFetchedGameIds: null, dismissedGuildIds: null, guildGameIds: null };
    guilds = guilds.guilds;
    obj.guilds = guilds.map((features) => {
      const obj = {};
      const merged = Object.assign(features);
      obj.features = new Set(features.features);
      return obj;
    });
    obj.lastFetchedAt = guilds.lastFetchedAt;
    const _Set = Set;
    const set = new Set(guilds.lastFetchedGameIds);
    obj.lastFetchedGameIds = set;
    const _Set2 = Set;
    const set1 = new Set(guilds.dismissedGuildIds);
    obj.dismissedGuildIds = set1;
    guildGameIds = guilds.guildGameIds;
    if (guildGameIds == null) {
      guildGameIds = {};
    }
    obj.guildGameIds = guildGameIds;
  }
};
prototype["getState"] = function getState() {
  obj = { guilds: null, lastFetchedAt: obj.lastFetchedAt, lastFetchedGameIds: null, dismissedGuildIds: [...obj.dismissedGuildIds], guildGameIds: obj.guildGameIds };
  const guilds = obj.guilds;
  obj.guilds = guilds.map((features) => {
    const obj = {};
    const merged = Object.assign(features);
    const items = [...features.features];
    obj.features = items;
    return obj;
  });
  let items = [...obj.lastFetchedGameIds];
  obj.lastFetchedGameIds = items;
  return obj;
};
prototype["getPresentableUpsellGuilds"] = function getPresentableUpsellGuilds() {
  const guilds = obj.guilds;
  return guilds.filter((id) => {
    dismissedGuildIds = dismissedGuildIds.dismissedGuildIds;
    return !dismissedGuildIds.has(id.id);
  });
};
prototype["hasGuilds"] = function hasGuilds() {
  return this.getPresentableUpsellGuilds().length > 0;
};
prototype["getLastFetchedAt"] = function getLastFetchedAt() {
  return obj.lastFetchedAt;
};
prototype["getLastFetchedGameIds"] = function getLastFetchedGameIds() {
  return obj.lastFetchedGameIds;
};
prototype["getGuildGameIds"] = function getGuildGameIds() {
  return obj.guildGameIds;
};
prototype["getDismissedGuildIds"] = function getDismissedGuildIds() {
  return obj.dismissedGuildIds;
};
prototype["DEV_clearFetchCache"] = function DEV_clearFetchCache() {
  const obj = {};
  const merged = Object.assign(obj);
  obj.guilds = [];
  obj.lastFetchedAt = 0;
  obj.lastFetchedGameIds = new Set();
  obj.guildGameIds = {};
  this.emitChange();
};
prototype["DEV_clearDismissedGuilds"] = function DEV_clearDismissedGuilds() {
  const obj = {};
  const merged = Object.assign(obj);
  obj.dismissedGuildIds = new Set();
  this.emitChange();
};
prototype["DEV_clearState"] = function DEV_clearState() {
  const obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set(), dismissedGuildIds: null, guildGameIds: null };
  const set = new Set();
  obj.dismissedGuildIds = new Set();
  obj.guildGameIds = {};
  this.emitChange();
};
MobileGameCommunitiesStore.displayName = "MobileGameCommunitiesStore";
MobileGameCommunitiesStore.persistKey = "MobileGameCommunitiesStore";
guildGameIds = {
  MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
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
    guildGameIds = {};
    const merged1 = Object.assign(guildGameIds);
    guildGameIds.guilds = guilds.map((item) => GuildDiscoveryUtils.makeDiscoverableGuild(item));
    guildGameIds.lastFetchedAt = Date.now();
    guildGameIds.lastFetchedGameIds = new Set(gameIds);
    guildGameIds.guildGameIds = guildGameIds;
  },
  MOBILE_GAME_COMMUNITIES_DISMISS_GUILD: function handleDismissGuildAction(guildId) {
    const obj = {};
    const merged = Object.assign(obj);
    const items = [];
    items[HermesBuiltin.arraySpread(obj.dismissedGuildIds, 0)] = guildId.guildId;
    obj.dismissedGuildIds = new Set(items);
  },
  LOGOUT: function handleLogout() {
    const obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set(), dismissedGuildIds: null, guildGameIds: null };
    const set = new Set();
    obj.dismissedGuildIds = new Set();
    obj.guildGameIds = {};
  }
};
const mobileGameCommunitiesStore = new MobileGameCommunitiesStore(DispatcherDefault, guildGameIds);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesStore.tsx");

export default mobileGameCommunitiesStore;