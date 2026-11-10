// === Module 19280: CheckpointProfileEntrypoint ===

// Module 19280 (CheckpointProfileEntrypoint)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import _modDef3248 from "module_3248" /* 3248 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import openCheckpoint from "openCheckpoint" /* 13682 */;
import CheckpointStore from "CheckpointStore" /* 13681 */;
import size from "module_2" /* 2 */;

function handlePress() {
  openCheckpoint.openCheckpoint("user_profile");
}
function CheckpointProfileEntrypointRow() {
  checkpointQAMode = checkpointQAMode(6572).useCheckpointQAMode("CheckpointProfileEntrypoint");
  const obj = checkpointQAMode(6572);
  items = [CheckpointStore];
  const stateFromStores = checkpointQAMode(504).useStateFromStores(items, () => isFetching.isFetching);
  const obj3 = { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true };
  const intl = checkpointQAMode(1113).intl;
  obj3.label = intl.string(_modDef3248["8hclXY"]);
  const intl2 = checkpointQAMode(1113).intl;
  obj3.subLabel = intl2.string(_modDef3248.BFc4lY);
  if (stateFromStores) {
    let tmp5Result = <ActivityIndicator />;
  } else {
    const obj4 = { IconComponent: tmp(13661).ExperimentalCheckpointIcon };
    tmp5Result = jsx(tmp(7041).TableRow.Icon, { IconComponent: tmp(13661).ExperimentalCheckpointIcon });
  }
  obj3.icon = tmp5Result;
  obj3.onPress = handlePress;
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19281, dependencyMap.paths), "CheckpointTestingActionSheet", { mode: checkpointQAMode });
    };
  }
  obj3.onLongPress = fn;
  return jsx(checkpointQAMode(7041).TableRow, { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true });
}
const ActivityIndicator = _mod17.ActivityIndicator;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint() {
  let tmp = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    tmp = <CheckpointProfileEntrypointRow />;
  }
  return tmp;
};