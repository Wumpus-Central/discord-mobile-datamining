// === Module 19654: CheckpointProfileEntrypoint ===

// Module 19654 (CheckpointProfileEntrypoint)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import _modDef3317 from "module_3317" /* 3317 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import openCheckpoint from "openCheckpoint" /* 14258 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;
import size from "module_2" /* 2 */;

function handlePress() {
  openCheckpoint.openCheckpoint("user_profile");
}
function CheckpointProfileEntrypointRow() {
  checkpointQAMode = checkpointQAMode(6748).useCheckpointQAMode("CheckpointProfileEntrypoint");
  const obj = checkpointQAMode(6748);
  items = [CheckpointStore];
  const stateFromStores = checkpointQAMode(504).useStateFromStores(items, () => isFetching.isFetching);
  const obj3 = { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true };
  const intl = checkpointQAMode(1113).intl;
  obj3.label = intl.string(_modDef3317["8hclXY"]);
  const intl2 = checkpointQAMode(1113).intl;
  obj3.subLabel = intl2.string(_modDef3317.BFc4lY);
  if (stateFromStores) {
    let tmp5Result = <ActivityIndicator />;
  } else {
    const obj4 = { IconComponent: tmp(15190).ExperimentalCheckpointIcon };
    tmp5Result = jsx(tmp(7443).TableRow.Icon, { IconComponent: tmp(15190).ExperimentalCheckpointIcon });
  }
  obj3.icon = tmp5Result;
  obj3.onPress = handlePress;
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19655, dependencyMap.paths), "CheckpointTestingActionSheet", { mode: checkpointQAMode });
    };
  }
  obj3.onLongPress = fn;
  return jsx(checkpointQAMode(7443).TableRow, { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true });
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