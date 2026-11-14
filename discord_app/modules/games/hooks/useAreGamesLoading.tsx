// === Module 12136: useAreGamesLoading ===

// Module 12136 (useAreGamesLoading)
import GameStore from "GameStore" /* 2141 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useAreGamesLoading.tsx");

export default function useAreGamesLoading(arg0) {
  _require = arg0;
  items = [GameStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => closure_0.some((item) => null == game.getGame(item) && !game.hasNoData(item) && !game.didFetchingFail(item)), items1);
};