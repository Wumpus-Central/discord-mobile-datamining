// === Module 15448: set ===

// Module 15448 (set)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import set from "set" /* 2 */;

const require = arg1;
let obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: null, dismissedGuildIds: null, guildGameIds: null };
let set = new Set();
obj[2] = set;
obj[3] = new Set();
obj[4] = {};
const PersistedStore = initializeDefault.PersistedStore;
class MobileGameCommunitiesStore extends PersistedStore {
}
const prototype = MobileGameCommunitiesStore.prototype;
prototype["initialize"] = function initialize(guilds) {
  if (null != guilds) {
    obj = { guilds: null, lastFetchedAt: null, lastFetchedGameIds: null, dismissedGuildIds: null, guildGameIds: null };
    guilds = guilds.guilds;
    obj[0] = guilds.map((features) => {
      obj = {};
      const merged = Object.assign(features);
      obj.features = new Set(features.features);
      return obj;
    });
    obj[1] = guilds.lastFetchedAt;
    const _Set = Set;
    const set = new Set(guilds.lastFetchedGameIds);
    obj[2] = set;
    const _Set2 = Set;
    const set1 = new Set(guilds.dismissedGuildIds);
    obj[3] = set1;
    let guildGameIds = guilds.guildGameIds;
    if (guildGameIds == null) {
      guildGameIds = {};
    }
    obj[4] = guildGameIds;
  }
};
prototype["getState"] = function getState() {
  obj = {
    guilds: guilds.map((features) => {
      obj = {};
      const merged = Object.assign(features);
      const items = [...features.features];
      obj.features = items;
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
  obj = {};
  const merged = Object.assign(obj);
  obj.guilds = [];
  obj.lastFetchedAt = 0;
  obj.lastFetchedGameIds = new Set();
  obj.guildGameIds = {};
  this.emitChange();
};
prototype["DEV_clearDismissedGuilds"] = function DEV_clearDismissedGuilds() {
  obj = {};
  const merged = Object.assign(obj);
  obj.dismissedGuildIds = new Set();
  this.emitChange();
};
prototype["DEV_clearState"] = function DEV_clearState() {
  obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set(), dismissedGuildIds: null, guildGameIds: null };
  const set = new Set();
  obj[3] = new Set();
  obj[4] = {};
  this.emitChange();
};
MobileGameCommunitiesStore.displayName = "MobileGameCommunitiesStore";
MobileGameCommunitiesStore.persistKey = "MobileGameCommunitiesStore";
obj = {
  MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ guilds, gameIds } = arg0);
    obj = {};
    const merged = Object.assign(obj.guildGameIds);
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.game_id) {
        let tmp4 = nextResult;
        obj[tmp3.id] = tmp3.game_id;
      }
      continue;
    }
    obj = {};
    const merged1 = Object.assign(obj);
    obj.guilds = guilds.map((body) => callback(table[0]).makeDiscoverableGuild(body));
    obj.lastFetchedAt = Date.now();
    obj.lastFetchedGameIds = new Set(gameIds);
    obj.guildGameIds = obj;
  },
  MOBILE_GAME_COMMUNITIES_DISMISS_GUILD: function handleDismissGuildAction(guildId) {
    obj = {};
    const merged = Object.assign(obj);
    const items = [];
    items[HermesBuiltin.arraySpread(obj.dismissedGuildIds, 0)] = guildId.guildId;
    obj.dismissedGuildIds = new Set(items);
  },
  LOGOUT: function handleLogout() {
    obj = { guilds: [], lastFetchedAt: 0, lastFetchedGameIds: new Set(), dismissedGuildIds: null, guildGameIds: null };
    const set = new Set();
    obj[3] = new Set();
    obj[4] = {};
  }
};
const mobileGameCommunitiesStore = new MobileGameCommunitiesStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesStore.tsx");

export default mobileGameCommunitiesStore;