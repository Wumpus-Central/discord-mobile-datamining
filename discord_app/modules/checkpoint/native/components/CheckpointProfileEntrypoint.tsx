// === Module 19156: CheckpointProfileEntrypoint ===

// Module 19156 (CheckpointProfileEntrypoint)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import _modDef3219 from "module_3219" /* 3219 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6223 */;
import TableRow from "TableRow" /* 7116 */;
import ExperimentalCheckpointIcon from "ExperimentalCheckpointIcon" /* 13637 */;
import openCheckpoint from "openCheckpoint" /* 13658 */;
import CheckpointStore from "CheckpointStore" /* 13657 */;
import size from "module_2" /* 2 */;

function handlePress() {
  openCheckpoint.openCheckpoint("user_profile");
}
function handleLongPress() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19157, dependencyMap.paths), "CheckpointTestingActionSheet");
}
function CheckpointProfileEntrypointRow() {
  const isCheckpointQAEnabled = CheckpointExperiments.useIsCheckpointQAEnabled("CheckpointProfileEntrypoint");
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => isFetching.isFetching);
  const obj3 = { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true };
  const intl = util.intl;
  obj3.label = intl.string(_modDef3219["8hclXY"]);
  const intl2 = util.intl;
  obj3.subLabel = intl2.string(_modDef3219.BFc4lY);
  if (stateFromStores) {
    let tmp5Result = <ActivityIndicator />;
  } else {
    const obj4 = { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon };
    tmp5Result = jsx(TableRow.TableRow.Icon, { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon });
  }
  obj3.icon = tmp5Result;
  obj3.onPress = handlePress;
  let tmp8;
  if (isCheckpointQAEnabled) {
    tmp8 = handleLongPress;
  }
  obj3.onLongPress = tmp8;
  return jsx(TableRow.TableRow, { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true });
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