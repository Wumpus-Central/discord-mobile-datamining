// === Module 12135: useGameRecords ===

// Module 12135 (useGameRecords)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import GameStore from "GameStore" /* 2141 */;

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