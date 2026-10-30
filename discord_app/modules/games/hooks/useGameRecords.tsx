// === Module 19509: useGameRecords ===

// Module 19509 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GameStore from "GameStore" /* 2015 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGameRecords.tsx");

export default function useGameRecords(memo) {
  _require = memo;
  const games = require("useGame").useGames(memo);
  const obj = require("useGame");
  const items = [GameStore];
  const items1 = [memo];
  return require("initialize").useStateFromStoresArray(items, () => {
    const mapped = memo.map((item) => game.getGame(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
};