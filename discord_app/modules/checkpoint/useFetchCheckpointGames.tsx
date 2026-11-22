// === Module 12799: useFetchCheckpointGames ===

// Module 12799 (useFetchCheckpointGames)
import GameActionCreators from "GameActionCreators" /* 9054 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12128 */;

require = fn;
let closure_4 = fn(5969).CHECKPOINT_GLOBAL_GAME_CATEGORIES;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/useFetchCheckpointGames.tsx");

export function useFetchCheckpointGames() {
  items = [CheckpointStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    ({ stats, globalStats } = CheckpointStore);
    let games1;
    if (globalStats != null) {
      games1 = globalStats.games;
    }
    if (!obj.hasCheckpointGames(stats)) {
      if (null != games1) {
        items = [];
        const item = closure_1_4.forEach((item) => {
          const first = games1[item.list][0];
          if (null != first) {
            items.push(first.id);
          }
        });
        return items;
      }
    }
    let mapped;
    if (stats != null) {
      const games = stats.games;
      if (games != null) {
        const games2 = games.games;
        mapped = games2.map((game) => game.game.id);
      }
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  });
  const items1 = [stateFromStoresArray];
  const effect = noop.useEffect(() => {
    const gamesWithSupplementalData = GameActionCreators.fetchGamesWithSupplementalData(stateFromStoresArray);
  }, items1);
}