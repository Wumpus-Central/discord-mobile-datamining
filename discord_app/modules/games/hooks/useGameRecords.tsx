// === Module 12050: useGameRecords ===

// Module 12050 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import GameStore from "GameStore" /* 2138 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGameRecords.tsx");

export default function useGameRecords(memo) {
  _require = memo;
  const games = require("useGame").useGames(memo);
  const obj = require("useGame");
  items = [GameStore];
  const items1 = [memo];
  return require("initialize").useStateFromStoresArray(items, () => {
    const mapped = memo.map((item) => game.getGame(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
};