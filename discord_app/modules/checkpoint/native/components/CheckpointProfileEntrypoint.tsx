// === Module 18881: CheckpointProfileEntrypoint ===

// Module 18881 (CheckpointProfileEntrypoint)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import _modDef3092 from "module_3092" /* 3092 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6088 */;
import TableRow from "TableRow" /* 6975 */;
import ExperimentalCheckpointIcon from "ExperimentalCheckpointIcon" /* 13416 */;
import openCheckpoint from "openCheckpoint" /* 13434 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13450 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const checkpointData = CheckpointActionCreators.fetchCheckpointData();
  openCheckpoint.openCheckpoint("user_profile");
}
function handleLongPress() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18882, dependencyMap.paths), "CheckpointTestingActionSheet");
}
function CheckpointProfileEntrypointRow() {
  const isCheckpointQAEnabled = CheckpointExperiments.useIsCheckpointQAEnabled("CheckpointProfileEntrypoint");
  const obj2 = { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true };
  const intl = util.intl;
  obj2.label = intl.string(_modDef3092["8hclXY"]);
  const intl2 = util.intl;
  obj2.subLabel = intl2.string(_modDef3092.BFc4lY);
  obj2.icon = jsx(TableRow.TableRow.Icon, { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon });
  obj2.onPress = handlePress;
  let tmp3;
  if (isCheckpointQAEnabled) {
    tmp3 = handleLongPress;
  }
  obj2.onLongPress = tmp3;
  return jsx(TableRow.TableRow, { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true });
}
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint() {
  let tmp = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    tmp = <CheckpointProfileEntrypointRow />;
  }
  return tmp;
};