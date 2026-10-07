// discord_app/modules/guild_profile/hooks/useGuildProfileGames.tsx
import c from "../../../../_runtime/00576_c.js";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GameRecord from "../../games/GameRecord.tsx";
import GameStore from "../../games/GameStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(2);
      if (cResult[0] !== arg0) {
        const _Map = Map;
        const map = new Map();
        if (null != arg0) {
          const iter = arg0[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp13 = new.target;
            let tmp14 = new.target;
            let tmp16 = new GameRecord(nextResult);
            let result = map.set(nextResult.id, tmp16);
            continue;
          }
        }
        cResult[0] = arg0;
        cResult[1] = map;
        let tmp2 = map;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      closure_0 = arg0;
      const items = [arg0];
      return noop.useMemo(() => {
        const map = new Map();
        if (null == closure_0) {
          return map;
        } else {
          for (const item10012 of tmp) {
            let tmp5 = new.target;
            let tmp6 = new.target;
            let tmp8 = new GameRecord(item10012);
            let result = map.set(item10012.id, tmp8);
            continue;
          }
          return map;
        }
      }, items);
    };
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (games) => {
      _require = games;
      const cResult = require("c").c(9);
      games = games.games;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function n() {
          return authenticated.isAuthenticated();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      const tmp7 = null != games && !require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] === games.gameApplicationIds) {
        if (cResult[3] === tmp7) {
          const games1 = tmp(6822).useGames(cResult[4]);
          const tmp11 = closure_6(games);
          dependencyMap = tmp11;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [GameStore];
            cResult[5] = items1;
            let tmp12 = items1;
          } else {
            tmp12 = cResult[5];
          }
          if (cResult[6] === tmp11) {
            if (cResult[7] === games.gameApplicationIds) {
              let tmp14 = cResult[8];
            }
            return tmp(504).useStateFromStoresArray(tmp12, tmp14);
          }
          const fn2 = function y() {
            const gameApplicationIds = games.gameApplicationIds;
            const mapped = gameApplicationIds.map((item) => {
              game = game.getGame(item);
              if (game == null) {
                game = closure_1_1.get(item);
              }
              return game;
            });
            return mapped.filter(GlobalUtils.isNotNullish);
          };
          cResult[6] = tmp11;
          cResult[7] = games.gameApplicationIds;
          cResult[8] = fn2;
          tmp14 = fn2;
          const tmpResult3 = tmp(6822);
        }
      }
      cResult[2] = games.gameApplicationIds;
      cResult[3] = tmp7;
      cResult[4] = tmp7 ? [] : games.gameApplicationIds;
      const tmp8 = tmp7 ? [] : games.gameApplicationIds;
      const tmpResult = require("initialize");
    }
  : (games) => {
      _require = games;
      games = games.games;
      const items = [AuthenticationStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => authenticated.isAuthenticated());
      require("useGame");
      if (null != games) {
        if (!stateFromStores) {
          let items1 = [];
        }
        tmp5(items1);
        dependencyMap = closure_6(games);
        const items2 = [GameStore];
        return tmp(504).useStateFromStoresArray(items2, () => {
          const gameApplicationIds = games.gameApplicationIds;
          const mapped = gameApplicationIds.map((item) => {
            game = game.getGame(item);
            if (game == null) {
              game = closure_1_1.get(item);
            }
            return game;
          });
          return mapped.filter(GlobalUtils.isNotNullish);
        });
      }
      items1 = games.gameApplicationIds;
      const obj = require("initialize");
      tmp = _require;
    };
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileGames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (gameActivity) => {
      const cResult = c.c(11);
      gameActivity = gameActivity.gameActivity;
      const tmp2 = closure_7(gameActivity);
      if (cResult[0] === gameActivity) {
        if (cResult[1] === tmp2) {
          let arr = cResult[2];
        }
        if (cResult[3] !== arr) {
          const substr = arr.slice(0, 5);
          cResult[3] = arr;
          cResult[4] = substr;
          let tmp4 = substr;
        } else {
          tmp4 = cResult[4];
        }
        let tmp6 = arr[5];
        if (tmp6 == null) {
          tmp6 = null;
        }
        if (cResult[5] !== arr) {
          const substr1 = arr.slice(5);
          cResult[5] = arr;
          cResult[6] = substr1;
          let tmp8 = substr1;
        } else {
          tmp8 = cResult[6];
        }
        if (cResult[7] === tmp4) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp8) {
              let tmp10 = cResult[10];
            }
            return tmp10;
          }
        }
        const obj2 = { gamesToDisplay: tmp4, lastGameToDisplay: tmp6, remainingGames: tmp8 };
        cResult[7] = tmp4;
        cResult[8] = tmp6;
        cResult[9] = tmp8;
        cResult[10] = obj2;
        tmp10 = obj2;
      }
      const items = [...tmp2];
      const sorted = items.sort((arg0, arg1) => {
        let num;
        if (dependencyMap[arg0.id] != null) {
          num = tmp2.score;
        }
        if (num == null) {
          num = 0;
        }
        let num2;
        if (dependencyMap[arg1.id] != null) {
          num2 = tmp3.score;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let num3 = 0;
        if (num !== num2) {
          num3 = num2 - num;
        }
        return num3;
      });
      cResult[0] = gameActivity;
      cResult[1] = tmp2;
      cResult[2] = sorted;
      arr = sorted;
    }
  : (gameActivity) => {
      gameActivity = gameActivity.gameActivity;
      let tmp = closure_7(gameActivity);
      const args = tmp;
      let items = [tmp, gameActivity];
      memo = memo.useMemo(() => {
        dependencyMap = gameActivity;
        const items = [...closure_1];
        return items.sort((arg0, arg1) => {
          let num;
          if (dependencyMap[arg0.id] != null) {
            num = tmp2.score;
          }
          if (num == null) {
            num = 0;
          }
          let num2;
          if (dependencyMap[arg1.id] != null) {
            num2 = tmp3.score;
          }
          if (num2 == null) {
            num2 = 0;
          }
          let num3 = 0;
          if (num !== num2) {
            num3 = num2 - num;
          }
          return num3;
        });
      }, items);
      const obj = { gamesToDisplay: null, lastGameToDisplay: null, remainingGames: null };
      const items1 = [memo];
      obj.gamesToDisplay = memo.useMemo(() => memo.slice(0, 5), items1);
      const items2 = [memo];
      obj.lastGameToDisplay = memo.useMemo(() => {
        let tmp = memo[5];
        if (tmp == null) {
          tmp = null;
        }
        return tmp;
      }, items2);
      const items3 = [memo];
      obj.remainingGames = memo.useMemo(() => memo.slice(5), items3);
      return obj;
    };
export const useAllGuildProfileGames = tmp2;
