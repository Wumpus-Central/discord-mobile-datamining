// discord_app/modules/orbs_arcade/OrbsArcadeActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import OrbsArcadeStore from "OrbsArcadeStore.tsx";
import Backoff from "../../../discord_common/js/packages/backoff/Backoff.tsx";

require = fn;
function fetchOrbsArcadeGames() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _fetchOrbsArcadeGames() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
          closure_1 = tmp4;
          closure_0 = tmp6;
          let id2;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          let games;
          let gameStateByGameId;
          if (OrbsArcadeStore.isFetchingOrbsArcadeGames) {
            c10 = true;
            c5 = 3;
          } else {
            DispatcherDefault.dispatch({ type: "ORBS_ARCADE_FETCH_GAMES_BEGIN" });
            id2 = id.getId();
            c3 = 2;
            const HTTP = HTTPUtils.HTTP;
            const obj6 = { url: constants.ORBS_ARCADE_GAMES, rejectWithError: false };
            c4 = 3;
            c5 = 1;
            const obj7 = { value: HTTP.get(obj6), done: false };
            return obj7;
          }
        }
      } else if (1 !== tmp9) {
        if (2 === tmp9) {
          c3 = 1;
          closure_128_5 = closure_2;
          const _Date = Date;
          const timestamp = Date.now();
          closure_129_9 = timestamp + closure_129_8.fail();
          const obj8 = { type: "ORBS_ARCADE_FETCH_GAMES_FAILURE", userId: id2, error: null };
          const tmp28 = new closure_129_1(closure_129_2[9])(closure_128_5);
          obj8.error = tmp28;
          closure_129_1(closure_129_2[6]).dispatch(obj8);
          const obj2 = closure_129_1(closure_129_2[6]);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          if (closure_129_10) {
            closure_129_10 = false;
            closure_129_11();
          }
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_1 = value;
          closure_128_2 = closure_129_0(closure_129_2[8]).orbsArcadeGamesFromServer(closure_128_1.body);
          games = closure_128_2.games;
          gameStateByGameId = closure_128_2.gameStateByGameId;
          closure_129_8.succeed();
          closure_129_9 = 0;
          const obj9 = closure_129_0(closure_129_2[8]);
          const obj11 = {
            type: "ORBS_ARCADE_FETCH_GAMES_SUCCESS",
            userId: id2,
            orbsArcadeGames: games,
            gameStateByGameId,
            fetchedAt: null,
          };
          const _Date2 = Date;
          obj11.fetchedAt = Date.now();
          closure_129_1(closure_129_2[6]).dispatch(obj11);
          c3 = 1;
          const obj10 = closure_129_1(closure_129_2[6]);
        }
        c3 = 0;
        if (closure_129_10) {
          closure_129_10 = false;
          closure_129_11();
        }
      }
      c3 = 0;
      if (closure_129_10) {
        closure_129_10 = false;
        closure_129_11();
      }
      throw closure_2;
    } catch (tmp48) {
      closure_2 = tmp48;
      if (tmp5 === c3) {
        c5 = tmp3;
        throw tmp48;
      } else if (tmp2 === tmp50) {
        c4 = tmp2;
      } else {
        c4 = tmp;
      }
    }
  }
};
const Endpoints = fn(1087).Endpoints;
let closure_7 = 30 * DurationsDefault.Millis.MINUTE;
const result = 5 * DurationsDefault.Millis.SECOND;
const importDefaultResult1 = new Backoff(result, 10 * DurationsDefault.Millis.MINUTE);
let c9 = 0;
let c10 = false;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/orbs_arcade/OrbsArcadeActionCreators.tsx");

export { fetchOrbsArcadeGames };
export const fetchOrbsArcadeGamesIfStale = function fetchOrbsArcadeGamesIfStale() {
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
      if (!tmp4) {
        fetchOrbsArcadeGames();
      }
    } else {
      const _Date = Date;
    }
  }
};
