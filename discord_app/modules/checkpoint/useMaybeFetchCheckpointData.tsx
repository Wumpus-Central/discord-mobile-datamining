// === Module 14440: useMaybeFetchCheckpointData ===

// Module 14440 (useMaybeFetchCheckpointData)
import GameActionCreators from "GameActionCreators" /* 9468 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;

require = fn;
const CheckpointFetchStates = fn(14150).CheckpointFetchStates;
let closure_5 = fn(6314).CHECKPOINT_GLOBAL_GAME_CATEGORIES;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/useMaybeFetchCheckpointData.tsx");

export function useMaybeFetchCheckpointData() {
  items = [CheckpointStore];
  const stateFromStores = stateFromStoresArray(504).useStateFromStores(items, () => CheckpointStore.fetchState);
  let obj = stateFromStoresArray(504);
  const items1 = [CheckpointStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items1, () => {
    ({ stats, globalStats } = CheckpointStore);
    let games1;
    if (globalStats != null) {
      games1 = globalStats.games;
    }
    if (!obj.hasCheckpointGames(stats)) {
      if (null != games1) {
        items = [];
        const item = closure_1_5.forEach((item) => {
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
  const effect = noop.useEffect(() => {
    const fetchState = CheckpointStore.fetchState;
    if (!tmp) {
      const checkpointData = stateFromStoresArray(14154).fetchCheckpointData();
      const obj = stateFromStoresArray(14154);
    }
    tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
  }, []);
  const items2 = [stateFromStoresArray];
  const effect1 = noop.useEffect(() => {
    const gamesWithSupplementalData = GameActionCreators.fetchGamesWithSupplementalData(stateFromStoresArray);
  }, items2);
  return stateFromStores;
}