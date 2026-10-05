// === Module 9409: useGuildProfileGames ===

// Module 9409 (useGuildProfileGames)
import react2 from "react" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import react from "react" /* 19 */;
import GameRecord from "GameRecord" /* 2008 */;
import GameStore from "GameStore" /* 2007 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, game, gameActivity, games, map, set;

let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    if (null != arg0) {
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let self3 = this;
        let self4 = this;
        set = map.set;
        let id = nextResult.id;
        let tmp13 = new GameRecord(nextResult);
        let result = set(id, tmp13);
        continue;
      }
    }
    cResult[0] = arg0;
    cResult[1] = map;
    tmp2 = map;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(function() {
    map = new Map();
    if (null == closure_0) {
      return map;
    } else {
      for (const item10012 of closure_0) {
        let self = this;
        let self2 = this;
        set = map.set;
        let id = item10012.id;
        let tmp7 = new GameRecord(item10012);
        let result = set(id, tmp7);
        continue;
      }
      return map;
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((games) => {
  let authenticated;
  let closure_1;
  let tmp4;
  let tmp5;
  _require = games;
  const obj = require("react");
  const cResult = obj.c(9);
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
  const tmpResult = require("get initialized");
  const tmp7 = null != games && !tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === games.gameApplicationIds) {
    let tmp8;
    let tmp13;
    if (cResult[3] === tmp7) {
      tmp8 = cResult[4];
    }
    const tmpResult3 = require("useGame");
    const games1 = tmpResult3.useGames(tmp8);
    const tmp12 = closure_6(games);
    dependencyMap = tmp12;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GameStore];
      cResult[5] = items1;
      tmp13 = items1;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === tmp12) {
      let tmp15;
      if (cResult[7] === games.gameApplicationIds) {
        tmp15 = cResult[8];
      }
      const tmpResult4 = require("get initialized");
      return tmpResult4.useStateFromStoresArray(tmp13, tmp15);
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
    cResult[6] = tmp12;
    cResult[7] = games.gameApplicationIds;
    cResult[8] = fn2;
    tmp15 = fn2;
  }
  const tmp9 = tmp7 ? [] : games.gameApplicationIds;
  cResult[2] = games.gameApplicationIds;
  cResult[3] = tmp7;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((games) => {
  let authenticated;
  let closure_1;
  _require = games;
  games = games.games;
  const items = [AuthenticationStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => authenticated.isAuthenticated());
  require("useGame");
  const tmp = _require;
  if (null != games) {
    let items1;
    if (!stateFromStores) {
      items1 = [];
    }
    tmp5(items1);
    dependencyMap = closure_6(games);
    const items2 = [GameStore];
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresArray(items2, () => {
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
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((gameActivity) => {
  const obj = react2;
  const cResult = obj.c(11);
  gameActivity = gameActivity.gameActivity;
  const tmp2 = closure_7(gameActivity);
  if (cResult[0] === gameActivity) {
    let arr;
    let tmp4;
    let tmp8;
    if (cResult[1] === tmp2) {
      arr = cResult[2];
    }
    if (cResult[3] !== arr) {
      const substr = arr.slice(0, 5);
      cResult[3] = arr;
      cResult[4] = substr;
      tmp4 = substr;
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
      tmp8 = substr1;
    } else {
      tmp8 = cResult[6];
    }
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp6) {
        let tmp10;
        if (cResult[9] === tmp8) {
          tmp10 = cResult[10];
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
    if (closure_0[arg0.id] != null) {
      num = tmp2.score;
    }
    if (num == null) {
      num = 0;
    }
    let num2;
    if (closure_0[arg1.id] != null) {
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
}) : ((gameActivity) => {
  let items1;
  let items2;
  let items3;
  let memo;
  gameActivity = gameActivity.gameActivity;
  let tmp = closure_7(gameActivity);
  const args = tmp;
  let items = [tmp, gameActivity];
  memo = memo.useMemo(() => {
    let closure_0 = gameActivity;
    const items = [...closure_1];
    return items.sort((arg0, arg1) => {
      let num;
      if (closure_0[arg0.id] != null) {
        num = tmp2.score;
      }
      if (num == null) {
        num = 0;
      }
      let num2;
      if (closure_0[arg1.id] != null) {
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
  const obj = {
    gamesToDisplay: memo.useMemo(() => memo.slice(0, 5), items1),
    lastGameToDisplay: memo.useMemo(() => {
      let tmp = memo[5];
      if (tmp == null) {
        tmp = null;
      }
      return tmp;
    }, items2),
    remainingGames: memo.useMemo(() => memo.slice(5), items3)
  };
  items1 = [memo];
  items2 = [memo];
  items3 = [memo];
  return obj;
});
let result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfileGames.tsx");

export default tmp3;
export const useAllGuildProfileGames = tmp2;