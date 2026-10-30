// discord_app/modules/checkpoint/useMaybeFetchCheckpointData.tsx
import GameActionCreators from "../games/GameActionCreators.tsx";
import CheckpointStore2 from "CheckpointStore.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import size from "../../../_runtime/metro/00002__.js";

const CheckpointStore = CheckpointStore2;

({ useEffect: c2, useMemo: c3 } = noop);
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
const result = size.fileFinishedImporting("modules/checkpoint/useMaybeFetchCheckpointData.tsx");

export function useMaybeFetchCheckpointData() {
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
      const checkpointData = stateFromStores1(dependencyMap[3]).fetchCheckpointData();
      const obj = stateFromStores1(dependencyMap[3]);
    }
    tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
  }, []);
  const items3 = [tmp3];
  closure_2(() => {
    const gamesWithSupplementalData = GameActionCreators.fetchGamesWithSupplementalData(closure_1);
  }, items3);
  return stateFromStores;
}
