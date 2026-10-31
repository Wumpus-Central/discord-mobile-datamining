// discord_app/modules/orbs_arcade/OrbsArcadeActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import OrbsArcadeRewardUtils from "utils/OrbsArcadeRewardUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import OrbsArcadeStore from "OrbsArcadeStore.tsx";
import Backoff from "../../../discord_common/js/packages/backoff/Backoff.tsx";

require = fn;
function fetchOrbsArcadeGames() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _fetchOrbsArcadeGames() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp5;
          let id2;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          let games;
          let gameStateByGameId;
          let ownedRewardSkuIds;
          if (!OrbsArcadeStore.isFetchingOrbsArcadeGames) {
            DispatcherDefault.dispatch({ type: "ORBS_ARCADE_FETCH_GAMES_BEGIN" });
            id2 = id.getId();
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: constants.ORBS_ARCADE_GAMES, rejectWithError: false };
            c4 = 2;
            c5 = 1;
            const obj7 = { value: HTTP.get(obj6), done: false };
            return obj7;
          }
        }
      } else {
        if (1 === tmp8) {
          c3 = 0;
          closure_128_6 = closure_2;
          const _Date = Date;
          const timestamp = Date.now();
          closure_129_11 = timestamp + closure_129_10.fail();
          const obj8 = { type: "ORBS_ARCADE_FETCH_GAMES_FAILURE", userId: id2, error: null };
          const tmp23 = new closure_129_1(closure_129_2[9])(closure_128_6);
          obj8.error = tmp23;
          closure_129_1(closure_129_2[6]).dispatch(obj8);
          const obj2 = closure_129_1(closure_129_2[6]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_1 = value;
          closure_128_2 = closure_129_0(closure_129_2[8]).orbsArcadeGamesFromServer(closure_128_1.body);
          games = closure_128_2.games;
          gameStateByGameId = closure_128_2.gameStateByGameId;
          ownedRewardSkuIds = closure_128_2.ownedRewardSkuIds;
          closure_129_10.succeed();
          closure_129_11 = 0;
          const obj9 = closure_129_0(closure_129_2[8]);
          const obj11 = {
            type: "ORBS_ARCADE_FETCH_GAMES_SUCCESS",
            userId: id2,
            orbsArcadeGames: games,
            gameStateByGameId,
            ownedRewardSkuIds,
            fetchedAt: null,
          };
          const _Date2 = Date;
          obj11.fetchedAt = Date.now();
          closure_129_1(closure_129_2[6]).dispatch(obj11);
          c3 = 0;
          const obj10 = closure_129_1(closure_129_2[6]);
        }
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c5 = 3;
    } catch (tmp33) {
      closure_2 = tmp33;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp33;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_14 = async function _resetOrbsArcadeGame(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: Endpoints.ORBS_ARCADE_RESET_GAME(closure_0), rejectWithError: false };
          c5 = 3;
          c6 = 1;
          const obj5 = { value: HTTP.post(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_0 = closure_3;
        const tmp19 = new closure_130_1(closure_130_2[9])(closure_129_0);
        throw tmp19;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c4 = 0;
        c5 = 2;
        c6 = 1;
        const obj = { value: closure_130_12(), done: false };
        return obj;
      }
    } catch (tmp25) {
      closure_3 = tmp25;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp25;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_15 = async function _ensureOrbsArcadeEnrollment(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = _require;
          let body;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const request = {
            url: Endpoints.ORBS_ARCADE_GAME_ENROLLMENT(_require.id),
            body: null,
            rejectWithError: false,
          };
          const obj4 = { game_version_id: _require.versionId };
          request.body = obj4;
          c5 = 2;
          c6 = 1;
          const obj5 = { value: HTTP.put(request), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        const tmp25 = new closure_130_1(closure_130_2[9])(closure_129_2);
        throw tmp25;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        body = value.body;
        c4 = 0;
        const obj7 = { type: "ORBS_ARCADE_GAME_STATE_UPDATE", game_id: closure_129_0.id, game_state: body };
        closure_130_1(closure_130_2[6]).dispatch(obj7);
        c6 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp27) {
      closure_3 = tmp27;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp27;
      } else {
        c5 = tmp;
      }
    }
  }
};
function postOrbsArcadeClaimRewards() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _postOrbsArcadeClaimRewards() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: Endpoints.ORBS_ARCADE_CLAIM_REWARDS(closure_0), rejectWithError: false });
  closure_129_0 = value;
  return closure_130_0(closure_130_2[8]).orbsArcadeClaimedRewardFromServer(closure_129_0.body);
};
let closure_18 = async function _postOrbsArcadeClaimRewardsWithRetry(arg0) {
  closure_4 = tmp3;
  closure_131_0 = closure_0;
  const id2 = id.getId();
  closure_131_2 = null;
  await postOrbsArcadeClaimRewards(closure_0);
  if (1 === tmp8) {
    c6 = 0;
    closure_131_4 = closure_5;
    if (
      (function isRetryableClaimError(status) {
        status = status.status;
        let tmp = null == status;
        if (!tmp) {
          tmp = status >= 500;
        }
        return tmp;
      })(tmp51)
    ) {
      new Promise((arg0) => new closure_1_1(closure_1_2[5])(closure_1_8, closure_1_9).fail(arg0));
      c7 = 2;
      c8 = 1;
    } else {
      throw closure_131_4;
    }
    tmp51 = new closure_132_1(closure_132_2[9])(closure_131_4);
  } else if (2 === tmp8) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else if (id2 !== closure_132_4.getId()) {
      const _Error = Error;
      const error = new Error("Switched accounts before retrying an Orbs Arcade claim");
      throw error;
    } else {
      c6 = 2;
      c7 = 5;
      c8 = 1;
      return { value: closure_132_16(closure_131_0), done: false };
    }
  } else if (3 === tmp8) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_131_2 = value;
      if (obj4.hasOrbsArcadeUnclaimedRewards(closure_131_2.gameState)) {
        c6 = 0;
      } else {
        c6 = 0;
        c8 = 3;
        return { value: closure_131_2, done: true };
      }
      obj4 = closure_132_0(closure_132_2[10]);
    }
  } else if (4 === tmp8) {
    c6 = 0;
    closure_131_5 = closure_5;
    if (null != closure_131_2) {
      c8 = 3;
      return { value: closure_131_2, done: true };
    } else {
      throw closure_131_5;
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c6 = 0;
    c8 = 3;
    return { value, done: true };
  } else {
    closure_131_3 = value;
    const obj11 = { gameState: closure_131_3.gameState, entitlements: null };
    closure_1 = 0;
    let entitlements;
    if (closure_131_2 != null) {
      entitlements = closure_131_2.entitlements;
    }
    closure_2 = entitlements;
    if (entitlements == null) {
      closure_2 = [];
    }
    const items = [];
    closure_1 = HermesBuiltin.arraySpread(closure_2, closure_1);
    closure_1 = HermesBuiltin.arraySpread(closure_131_3.entitlements, closure_1);
    obj11.entitlements = items;
    c6 = 0;
    c8 = 3;
    return { value: obj11, done: true };
  }
  return value;
};
let closure_19 = async function _claimOrbsArcadeRewards() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp5;
            closure_129_0 = gameId;
            closure_129_1 = undefined;
            let id2;
            closure_129_3 = undefined;
            if (claimingRewards.isClaimingRewards(gameId)) {
              c6 = 3;
              return { value: null, done: true };
            } else {
              const obj6 = { type: "ORBS_ARCADE_CLAIM_REWARDS_BEGIN", gameId };
              DispatcherDefault.dispatch(obj6);
              id2 = id.getId();
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj7 = {
                value: (function postOrbsArcadeClaimRewardsWithRetry() {
                  const self = this;
                  const apply = closure_1_18.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(gameId),
                done: false,
              };
              return obj7;
            }
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_129_4 = closure_3;
          const tmp20 = new closure_130_1(closure_130_2[9])(closure_129_4);
          closure_129_3 = tmp20;
          const obj8 = {
            type: "ORBS_ARCADE_CLAIM_REWARDS_FAILURE",
            userId: id2,
            gameId: closure_129_0,
            error: closure_129_3,
          };
          closure_130_1(closure_130_2[6]).dispatch(obj8);
          if (id2 !== closure_130_4.getId()) {
            c6 = 3;
            return { value: null, done: true };
          } else {
            throw closure_129_3;
          }
          const obj3 = closure_130_1(closure_130_2[6]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_129_1 = value;
          const obj11 = {
            type: "ORBS_ARCADE_CLAIM_REWARDS_SUCCESS",
            userId: id2,
            gameId: closure_129_0,
            gameState: closure_129_1.gameState,
          };
          closure_130_1(closure_130_2[6]).dispatch(obj11);
          c4 = 0;
          let tmp10 = null;
          if (id2 === closure_130_4.getId()) {
            tmp10 = closure_129_1;
          }
          c6 = 3;
          const obj = { value: tmp10, done: true };
          return obj;
        }
      } catch (tmp36) {
        closure_3 = tmp36;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp36;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1072).Endpoints;
let closure_7 = 30 * DurationsDefault.Millis.MINUTE;
const SECOND = DurationsDefault.Millis.SECOND;
let closure_9 = 5 * DurationsDefault.Millis.SECOND;
let result = 5 * DurationsDefault.Millis.SECOND;
const importDefaultResult1 = new Backoff(result, 10 * DurationsDefault.Millis.MINUTE);
let c11 = 0;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeActionCreators.tsx");

export { fetchOrbsArcadeGames };
export function fetchOrbsArcadeGamesIfStale() {
  if (!OrbsArcadeStore.isFetchingOrbsArcadeGames) {
    if (!OrbsArcadeStore.hasFetchFailed) {
      ({ lastFetchedOrbsArcadeGamesAt, hasFetchFailed } = OrbsArcadeStore);
      let tmp4 = !hasFetchFailed;
      if (!hasFetchFailed) {
        tmp4 = null != lastFetchedOrbsArcadeGamesAt;
      }
      if (tmp4) {
        const _Date2 = Date;
        tmp4 = Date.now() - lastFetchedOrbsArcadeGamesAt < closure_7;
      }
      if (tmp4) {
        const orbsArcadeGames = OrbsArcadeStore.orbsArcadeGames;
        tmp4 = !orbsArcadeGames.some((id) => {
          gameStateForGame = gameStateForGame.getGameStateForGame(id.id);
          let result = null != gameStateForGame;
          if (result) {
            result = OrbsArcadeRewardUtils.isOrbsArcadeEnrollmentOver(gameStateForGame);
          }
          return result;
        });
      }
      if (!tmp4) {
        fetchOrbsArcadeGames();
      }
    } else {
      const _Date = Date;
    }
  }
}
export function resetOrbsArcadeGame() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function ensureOrbsArcadeEnrollment() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function claimOrbsArcadeRewards() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
