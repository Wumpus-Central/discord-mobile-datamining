// === Module 8574: useSimilarGames ===

// Module 8574 (useSimilarGames)
import GameStore from "GameStore" /* 2007 */;
import UserStore from "UserStore" /* 1377 */;

const require = fn;
fn(8448).SIMILAR_GAMES_BLOCKED_GAME_IDS;
let closure_5 = [];
const similarGames = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSimilarGames.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = data(576).c(14);
  if (cResult[0] !== arg0) {
    const hasItem = set.has(arg0);
    cResult[0] = arg0;
    cResult[1] = hasItem;
    let tmp4 = hasItem;
  } else {
    tmp4 = cResult[1];
  }
  const obj = data(576);
  const tmp7 = !tmp4;
  const similarGameIds = data(8447).useSimilarGameIds(arg0, tmp7);
  ({ data, isLoading, error } = similarGameIds);
  if (tmp4) {
    let tmp10 = closure_5;
  } else {
    tmp10 = data;
  }
  data = tmp10;
  let tmpResult = data(8447);
  const games = data(6822).useGames(tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore];
    cResult[2] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== tmp10) {
    class S {
      constructor() {
        return data.some(() => { ... });
      }
    }
    const items1 = [tmp10];
    cResult[3] = tmp10;
    cResult[4] = S;
    cResult[5] = items1;
    let tmp15 = items1;
  } else {
    class S {
      constructor() {
        return data.some(() => { ... });
      }
    }
    tmp15 = cResult[5];
  }
  const tmpResult4 = data(6822);
  const stateFromStores = data(504).useStateFromStores(tmp12, S, tmp15);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return data.some(() => { ... });
      }
    }
    const items2 = [GameStore, UserStore];
    cResult[6] = items2;
    const tmp17 = items2;
  } else {
    class S {
      constructor() {
        return data.some(() => { ... });
      }
    }
  }
  if (cResult[7] !== tmp10) {
    class S {
      constructor() {
        return data.some(() => { ... });
      }
    }
    const items3 = [tmp10];
    cResult[7] = tmp10;
    cResult[8] = tmp21;
    cResult[9] = items3;
    let tmp20 = items3;
  } else {
    class S {
      constructor() {
        return data.some(() => { ... });
      }
    }
    tmp20 = cResult[9];
  }
  const tmpResult5 = data(504);
  const stateFromStoresArray = data(504).useStateFromStoresArray(tmp17, tmp21, tmp20);
  if (tmp4) {
    class S {
      constructor() {
        return data.some(() => { ... });
      }
    }
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return data.some(() => { ... });
        }
      }
      tmp26[1] = closure_6;
      cResult[10] = tmp26;
    } else {
      class S {
        constructor() {
          return data.some(() => { ... });
        }
      }
    }
    return tmp26;
  } else {
    class S {
      constructor() {
        return data.some(() => { ... });
      }
    }
    if (cResult[11] === stateFromStoresArray) {
      class S {
        constructor() {
          return data.some(() => { ... });
        }
      }
      return tmp24;
    }
    const obj2 = { isFetching: null == error && null == data || isLoading || stateFromStores, similarGames: stateFromStoresArray };
    cResult[11] = stateFromStoresArray;
    cResult[12] = null == error && null == data || isLoading || stateFromStores;
    cResult[13] = obj2;
    tmp24 = obj2;
  }
  const tmpResult6 = data(504);
}) : ((arg0) => {
  const hasItem = set.has(arg0);
  const similarGameIds = data(8447).useSimilarGameIds(arg0, !hasItem);
  ({ data, isLoading, error } = similarGameIds);
  if (hasItem) {
    let tmp7 = closure_5;
  } else {
    tmp7 = data;
  }
  data = tmp7;
  const obj = data(8447);
  const tmp2 = !hasItem;
  const games = data(6822).useGames(tmp7);
  const tmp3Result = data(6822);
  const items = [GameStore];
  const items1 = [tmp7];
  const stateFromStores = data(504).useStateFromStores(items, () => data.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items1);
  data(504);
  const items2 = [GameStore, UserStore];
  [][0] = tmp7;
  if (hasItem) {
    const obj2 = { isFetching: false, similarGames };
    let obj3 = obj2;
  } else {
    obj3 = { isFetching: null == error && null == data || isLoading || stateFromStores, similarGames: tmp11 };
    const tmp13 = null == error && null == data || isLoading || stateFromStores;
  }
  return obj3;
});