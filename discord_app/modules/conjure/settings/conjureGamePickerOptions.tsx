// discord_app/modules/conjure/settings/conjureGamePickerOptions.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import _mod7076 from "../../../../_runtime/metro/07076__.js";
import GamesActionCreatorsDefault from "../../../actions/GamesActionCreators.native.tsx";
import useConjureSettingPickerOptions from "useConjureSettingPickerOptions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RunningGameStore from "../../game_detection/RunningGameStore.native.tsx";
import DetectableGameStore from "../../../stores/DetectableGameStore.tsx";

require = fn;
const keys = ["label", "description"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/conjureGamePickerOptions.tsx");

export function useConjureGameOptions() {
  const effect = noop.useEffect(() => {
    const detectableGames = stateFromStores1(memo[3]).getDetectableGames();
  }, []);
  items = [DetectableGameStore];
  stateFromStores = stateFromStores(memo[4]).useStateFromStores(items, () => games.games);
  let obj = stateFromStores(memo[4]);
  let items1 = [RunningGameStore];
  const stateFromStores1 = stateFromStores(memo[4]).useStateFromStores(items1, () => {
    runningGames = runningGames.getRunningGames();
    return runningGames
      .flatMap((id) => {
        if (null != id.id) {
          items = [id.id];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      })
      .join(",");
  });
  const items2 = [stateFromStores];
  memo = noop.useMemo(() => {
    const set = new Set();
    items = [];
    const iter = stateFromStores[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (!set.has(nextResult.id)) {
        let addResult = set.add(tmp3.id);
        let obj = { id: null, value: null, label: null, description: null };
        ({ id: obj2.id, id: obj2.value, name: obj2.label } = tmp3);
        let joined;
        if (tmp3.aliases.length > 0) {
          let aliases = tmp3.aliases;
          joined = aliases.join(", ");
        }
        obj.description = joined;
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  }, items2);
  const items3 = [memo, stateFromStores1];
  return noop.useMemo(() => ({ allOptions: memo, runningIds: stateFromStores1.split(",") }), items3);
}
export function conjureGamePickerOptions(allOptions, query, runningIds, first1) {
  closure_1 = runningIds;
  new Set(first1);
  if ("" === query.trim()) {
    let found = allOptions.filter((value) => {
      let hasItem = set.has(value.value);
      if (!hasItem) {
        hasItem = closure_1.includes(value.value);
      }
      return hasItem;
    });
  } else {
    items = [];
    HermesBuiltin.arraySpread(allOptions, 0);
    const obj2 = { keys };
    found = _mod7076.matchSorter(items, query, obj2).slice(0, 50);
    const matchSorterResult = _mod7076.matchSorter(items, query, obj2);
  }
  new Set(found.map((value) => value.value));
  const found1 = first1.filter((item) => !set1.has(item));
  const mapped = found1.map((id) => {
    allOptions = id;
    let found = allOptions.find((value) => value.value === closure_0);
    if (found == null) {
      const obj = { id, value: id, label: id };
      found = obj;
    }
    return found;
  });
  const items1 = [...mapped];
  return useConjureSettingPickerOptions.withPickCap(items1, first1);
}
export function useConjureGameNameLookup() {
  const effect = noop.useEffect(() => {
    const detectableGames = GamesActionCreatorsDefault.getDetectableGames();
  }, []);
  items = [DetectableGameStore];
  const items1 = [initialize.useStateFromStores(items, () => detectableGame.games)];
  return noop.useCallback((id) => {
    detectableGame = detectableGame.getDetectableGame(id);
    let name;
    if (detectableGame != null) {
      name = detectableGame.name;
    }
    return name;
  }, items1);
}
