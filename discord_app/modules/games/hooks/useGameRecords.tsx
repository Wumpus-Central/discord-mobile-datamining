// === Module 19211: useGameRecords ===

// Module 19211 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1385 */;
import GameStore from "GameStore" /* 2019 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGameRecords.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGameRecords(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  const obj = require("c");
  const tmp = _require;
  const games = require("useGame").useGames(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const mapped = closure_0.map((item) => game.getGame(item));
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj2 = require("useGame");
  return tmp(504).useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useGameRecords(arg0) {
  _require = arg0;
  const games = require("useGame").useGames(arg0);
  const obj = require("useGame");
  const items = [GameStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    const mapped = closure_0.map((item) => game.getGame(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
});