// discord_app/modules/orbs_arcade/OrbsArcadeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import OrbsArcadeTypes from "OrbsArcadeTypes.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
let c2 = false;
let fetchedAt = null;
let c4 = false;
let orbsArcadeGames = [];
let map = new Map();
const Store = initializeDefault.Store;
class OrbsArcadeStore extends Store {}
const prototype = OrbsArcadeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore);
};
Object.defineProperty(prototype, "isFetchingOrbsArcadeGames", {
  get: function isFetchingOrbsArcadeGames() {
    return c2;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastFetchedOrbsArcadeGamesAt", {
  get: function lastFetchedOrbsArcadeGamesAt() {
    return fetchedAt;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasFetchFailed", {
  get: function hasFetchFailed() {
    return c4;
  },
  set: undefined,
});
Object.defineProperty(prototype, "orbsArcadeGames", {
  get: function orbsArcadeGames() {
    return orbsArcadeGames;
  },
  set: undefined,
});
prototype["getGameStateForGame"] = function getGameStateForGame(id) {
  value = map.get(id);
  if (value == null) {
    value = null;
  }
  return value;
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
      map = new Map(
        values.map((gameId) => {
          const items = [gameId.gameId, gameId];
          return items;
        }),
      );
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
  LOGOUT: function initializeState() {
    c2 = false;
    fetchedAt = null;
    c4 = false;
    orbsArcadeGames = [];
    map = new Map();
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeStore.tsx");

export default orbsArcadeStore;
