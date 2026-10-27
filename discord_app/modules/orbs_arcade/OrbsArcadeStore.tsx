// === Module 16434: OrbsArcadeStore ===

// Module 16434 (OrbsArcadeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import OrbsArcadeTypes from "OrbsArcadeTypes" /* 16435 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let c2 = false;
let fetchedAt = null;
let c4 = false;
let orbsArcadeGames = [];
let map = new Map();
new Set();
let set = new Set();
const Store = initializeDefault.Store;
class OrbsArcadeStore extends Store {
}
const prototype = OrbsArcadeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
};
Object.defineProperty(prototype, "isFetchingOrbsArcadeGames", {
  get: function isFetchingOrbsArcadeGames() {
    return c2;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchedOrbsArcadeGamesAt", {
  get: function lastFetchedOrbsArcadeGamesAt() {
    return fetchedAt;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchFailed", {
  get: function hasFetchFailed() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "orbsArcadeGames", {
  get: function orbsArcadeGames() {
    return orbsArcadeGames;
  },
  set: undefined
});
prototype["getGame"] = function getGame(arg0) {
  closure_0 = arg0;
  let found = orbsArcadeGames.find((id) => id.id === closure_0);
  if (found == null) {
    found = null;
  }
  return found;
};
prototype["getGameStateForGame"] = function getGameStateForGame(id) {
  value = map.get(id);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["isClaimingRewards"] = function isClaimingRewards(id) {
  return set.has(id);
};
prototype["isLaunchingGame"] = function isLaunchingGame(id) {
  return set.has(id);
};
OrbsArcadeStore.displayName = "OrbsArcadeStore";
const orbsArcadeStore = new OrbsArcadeStore(DispatcherDefault, {
  ORBS_ARCADE_FETCH_GAMES_BEGIN: function handleFetchGamesBegin() {
    c2 = true;
  },
  ORBS_ARCADE_FETCH_GAMES_SUCCESS: function handleFetchGamesSuccess(arg0) {
    ({ userId, orbsArcadeGames, gameStateByGameId, fetchedAt } = arg0);
    if (userId !== AuthenticationStore.getId()) {
      return false;
    } else {
      c2 = false;
      c4 = false;
      const _Map = Map;
      const _Object = Object;
      const values = Object.values(gameStateByGameId);
      map = new Map(values.map((gameId) => {
        const items = [gameId.gameId, gameId];
        return items;
      }));
    }
  },
  ORBS_ARCADE_FETCH_GAMES_FAILURE: function handleFetchGamesFailure(userId) {
    if (userId.userId !== AuthenticationStore.getId()) {
      return false;
    } else {
      c2 = false;
      c4 = true;
    }
  },
  ORBS_ARCADE_GAME_STATE_UPDATE: function handleGameStateUpdate(arg0) {
    ({ game_id, game_state } = arg0);
    const result = map.set(game_id, OrbsArcadeTypes.orbsArcadeGameStateFromServer(game_state));
  },
  ORBS_ARCADE_CLAIM_REWARDS_BEGIN: function handleClaimRewardsBegin(gameId) {
    set = new Set(set);
    set = set.add(gameId.gameId);
  },
  ORBS_ARCADE_CLAIM_REWARDS_SUCCESS: function handleClaimRewardsSuccess(gameId) {
    gameId = gameId.gameId;
    ({ userId, gameState } = gameId);
    if (userId !== AuthenticationStore.getId()) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      set.delete(gameId);
      const result = map.set(gameId, gameState);
    }
  },
  ORBS_ARCADE_CLAIM_REWARDS_FAILURE: function handleClaimRewardsFailure(arg0) {
    ({ userId, gameId } = arg0);
    if (userId !== AuthenticationStore.getId()) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      set.delete(gameId);
    }
  },
  ORBS_ARCADE_LAUNCH_GAME_BEGIN: function handleLaunchGameBegin(gameId) {
    set = new Set(set);
    set = set.add(gameId.gameId);
  },
  ORBS_ARCADE_LAUNCH_GAME_END: function handleLaunchGameEnd(gameId) {
    set = new Set(set);
    set.delete(gameId.gameId);
  },
  LOGOUT: function initializeState() {
    c2 = false;
    fetchedAt = null;
    c4 = false;
    orbsArcadeGames = [];
    map = new Map();
    new Set();
    set = new Set();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeStore.tsx");

export default orbsArcadeStore;