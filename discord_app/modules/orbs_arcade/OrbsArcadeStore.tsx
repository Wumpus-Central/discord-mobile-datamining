// discord_app/modules/orbs_arcade/OrbsArcadeStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import OrbsArcadeTypes from "OrbsArcadeTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import VirtualCurrencyStore from "../virtual_currency/stores/VirtualCurrencyStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

const orbs_arcade_game_state = tmp(17012);
require = fn;
function handleBalanceChange(balance) {
  balance = balance.balance;
  let num = 0;
  if (null != balance) {
    num = balance - balance;
  }
  let diff = num;
  let flag = false;
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    if (tmp9 <= diff) {
      diff = diff - tmp10;
      let deleteResult = map.delete(tmp8);
      flag = true;
    }
    continue;
  }
  return flag;
}
let c2 = false;
let fetchedAt = null;
let c4 = false;
let orbsArcadeGames = [];
new Map();
new Set();
let set = new Set();
let c9 = null;
let set1 = new Set();
let map = new Map();
let balance = null;
const Store = initializeDefault.Store;
class OrbsArcadeStore extends Store {}
const prototype = OrbsArcadeStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, VirtualCurrencyStore);
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
Object.defineProperty(prototype, "ownedRewardSkuIds", {
  get: function ownedRewardSkuIds() {
    return set;
  },
  set: undefined,
});
prototype["isClaimingRewards"] = function isClaimingRewards(id) {
  return set.has(id);
};
Object.defineProperty(prototype, "isLaunchingAnyGame", {
  get: function isLaunchingAnyGame() {
    return null != c9;
  },
  set: undefined,
});
prototype["isLaunchingGame"] = function isLaunchingGame(id) {
  return c9 === id;
};
Object.defineProperty(prototype, "heldRunChargeTotal", {
  get: function heldRunChargeTotal() {
    return Array.from(map.values()).reduce((acc, item) => acc + item, 0);
  },
  set: undefined,
});
OrbsArcadeStore.displayName = "OrbsArcadeStore";
const orbsArcadeStore = new OrbsArcadeStore(DispatcherDefault, {
  ORBS_ARCADE_FETCH_GAMES_BEGIN: function handleFetchGamesBegin() {
    c2 = true;
  },
  ORBS_ARCADE_FETCH_GAMES_SUCCESS: function handleFetchGamesSuccess(ownedRewardSkuIds) {
    ownedRewardSkuIds = ownedRewardSkuIds.ownedRewardSkuIds;
    ({ userId, orbsArcadeGames, gameStateByGameId, fetchedAt } = ownedRewardSkuIds);
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
      const _Set = Set;
      set = new Set(ownedRewardSkuIds);
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
  ORBS_ARCADE_GAME_STATE_UPDATE: function handleGameStateUpdate(game_id) {
    game_id = game_id.game_id;
    const result = OrbsArcadeTypes.orbsArcadeGameStateFromServer(game_id.game_state);
    value = map.get(game_id);
    if (value != null) {
      const currentRun = value.currentRun;
    }
    const currentRun2 = result.currentRun;
    const result1 = map.set(game_id, result);
    if (null != currentRun2) {
      let id;
      if (currentRun != null) {
        id = currentRun.id;
      }
      if (currentRun2.id !== id) {
        if (tmp7) {
          map.delete(currentRun.id);
        }
        if (null == currentRun2.endedAt) {
          if (currentRun2.chargeType === orbs_arcade_game_state.OrbsArcadeChargeType.VIRTUAL_CURRENCY) {
            require = result;
            const found = orbsArcadeGames.find((id) => id.id === result.gameId);
            let orbCost = null;
            if (null != found) {
              orbCost = null;
              if (found.versionId === result.gameVersionId) {
                orbCost = found.orbCost;
              }
            }
            let tmp13 = null;
            if (null != orbCost) {
              tmp13 = null;
              if (orbCost > 0) {
                tmp13 = orbCost;
              }
            }
            if (null != tmp13) {
              const result2 = map.set(currentRun2.id, tmp13);
            }
          }
        }
        tmp7 = null != currentRun && null == currentRun.endedAt;
      }
    }
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
    gameId = gameId.gameId;
    map = new Map();
    balance = VirtualCurrencyStore.balance;
  },
  ORBS_ARCADE_LAUNCH_GAME_END: function handleLaunchGameEnd(gameId) {
    if (c9 !== gameId.gameId) {
      return false;
    } else {
      c9 = null;
    }
  },
  VIRTUAL_CURRENCY_BALANCE_UPDATE: handleBalanceChange,
  VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS: handleBalanceChange,
  LOGOUT: function initializeState() {
    c2 = false;
    fetchedAt = null;
    c4 = false;
    orbsArcadeGames = [];
    new Map();
    new Set();
    set = new Set();
    c9 = null;
    const set1 = new Set();
    map = new Map();
    balance = null;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeStore.tsx");

export default orbsArcadeStore;
