// === Module 14995: CheckpointProfileEntrypoint ===

// Module 14995 (CheckpointProfileEntrypoint)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import openCheckpoint from "openCheckpoint" /* 12576 */;
import CheckpointStore from "CheckpointStore" /* 12571 */;
import size from "module_2" /* 2 */;

function CheckpointProfileEntrypointRow(source) {
  source = source.source;
  const checkpointQAMode = source(6738).useCheckpointQAMode("CheckpointProfileEntrypoint");
  const obj = source(6738);
  items = [CheckpointStore];
  const stateFromStores = source(504).useStateFromStores(items, () => isFetching.isFetching);
  const obj3 = { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true };
  const intl = source(1112).intl;
  obj3.label = intl.string(checkpointQAMode(3494)["8hclXY"]);
  const intl2 = source(1112).intl;
  obj3.subLabel = intl2.string(checkpointQAMode(3494).BFc4lY);
  if (stateFromStores) {
    let tmp5Result = <ActivityIndicator />;
  } else {
    const obj4 = { IconComponent: tmp(14066).ExperimentalCheckpointIcon };
    tmp5Result = jsx(tmp(6113).TableRow.Icon, { IconComponent: tmp(14066).ExperimentalCheckpointIcon });
  }
  obj3.icon = tmp5Result;
  obj3.onPress = function onPress() {
    return openCheckpoint.openCheckpoint(source);
  };
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14996, dependencyMap.paths), "CheckpointTestingActionSheet", { mode: checkpointQAMode });
    };
  }
  obj3.onLongPress = fn;
  return jsx(source(6113).TableRow, { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true });
}
const ActivityIndicator = _mod17.ActivityIndicator;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint(source) {
  let tmp = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    const obj2 = { source: source.source };
    tmp = <CheckpointProfileEntrypointRow source={source.source} />;
  }
  return tmp;
};