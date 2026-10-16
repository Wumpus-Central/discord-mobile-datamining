// === Module 12711: useMaybeFetchCheckpointData ===

// Module 12711 (useMaybeFetchCheckpointData)
import GameActionCreators from "GameActionCreators" /* 7232 */;
import CheckpointStore2 from "CheckpointStore" /* 12654 */;
import noop from "module_19" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const CheckpointStore = CheckpointStore2;

({ useEffect: c2, useMemo: c3 } = noop);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
const result = size.fileFinishedImporting("modules/checkpoint/useMaybeFetchCheckpointData.tsx");

export const useMaybeFetchCheckpointData = ReactCompilerGating.isReactCompilerEnabled() ? (function useMaybeFetchCheckpointData() {
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function s() {
      return CheckpointStore.fetchState;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [CheckpointStore];
    const fn2 = function f() {
      const stats = CheckpointStore.stats;
      let games1;
      if (stats != null) {
        const games = stats.games;
        if (games != null) {
          games1 = games.games;
        }
      }
      return games1;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== stateFromStores1) {
    let mapped;
    if (stateFromStores1 != null) {
      mapped = stateFromStores1.map((game) => game.game.id);
    }
    if (mapped == null) {
      mapped = [];
    }
    cResult[4] = stateFromStores1;
    cResult[5] = mapped;
    let tmp11 = mapped;
  } else {
    tmp11 = cResult[5];
  }
  _require = tmp11;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        fetchState = closure_1_4.fetchState;
        tmp = fetchState !== closure_1_5.INIT && fetchState !== closure_1_5.ERROR;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1_1;
          obj = closure_0(closure_1_1[5]);
          checkpointData = obj.fetchCheckpointData();
        }
        return;
      }
    }
    const items2 = [];
    cResult[6] = F;
    cResult[7] = items2;
    let tmp14 = items2;
  } else {
    class F {
      constructor() {
        fetchState = closure_1_4.fetchState;
        tmp = fetchState !== closure_1_5.INIT && fetchState !== closure_1_5.ERROR;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1_1;
          obj = closure_0(closure_1_1[5]);
          checkpointData = obj.fetchCheckpointData();
        }
        return;
      }
    }
    tmp14 = cResult[7];
  }
  closure_2(F, tmp14);
  if (cResult[8] !== tmp11) {
    class F {
      constructor() {
        fetchState = closure_1_4.fetchState;
        tmp = fetchState !== closure_1_5.INIT && fetchState !== closure_1_5.ERROR;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1_1;
          obj = closure_0(closure_1_1[5]);
          checkpointData = obj.fetchCheckpointData();
        }
        return;
      }
    }
    const items3 = [tmp11];
    cResult[8] = tmp11;
    cResult[9] = tmp19;
    cResult[10] = items3;
    let tmp18 = items3;
  } else {
    class F {
      constructor() {
        fetchState = closure_1_4.fetchState;
        tmp = fetchState !== closure_1_5.INIT && fetchState !== closure_1_5.ERROR;
        if (!tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1_1;
          obj = closure_0(closure_1_1[5]);
          checkpointData = obj.fetchCheckpointData();
        }
        return;
      }
    }
    tmp18 = cResult[10];
  }
  closure_2(tmp19, tmp18);
  return stateFromStores;
}) : (function useMaybeFetchCheckpointData() {
  const items = [CheckpointStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => CheckpointStore.fetchState);
  let obj = stateFromStores1(504);
  const items1 = [CheckpointStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => {
    const stats = CheckpointStore.stats;
    let games1;
    if (stats != null) {
      const games = stats.games;
      if (games != null) {
        games1 = games.games;
      }
    }
    return games1;
  });
  const items2 = [stateFromStores1];
  const tmp3 = closure_3(() => {
    let mapped;
    if (stateFromStores1 != null) {
      mapped = stateFromStores1.map((game) => game.game.id);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  }, items2);
  dependencyMap = tmp3;
  closure_2(() => {
    const fetchState = CheckpointStore.fetchState;
    if (!tmp) {
      const checkpointData = stateFromStores1(dependencyMap[5]).fetchCheckpointData();
      const obj = stateFromStores1(dependencyMap[5]);
    }
    tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
  }, []);
  const items3 = [tmp3];
  closure_2(() => {
    const gamesWithSupplementalData = GameActionCreators.fetchGamesWithSupplementalData(closure_1);
  }, items3);
  return stateFromStores;
});