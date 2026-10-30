// === Module 18831: CheckpointProfileEntrypoint ===

// Module 18831 (CheckpointProfileEntrypoint)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import _modDef3091 from "module_3091" /* 3091 */;
import TableRow from "TableRow" /* 6969 */;
import ExperimentalCheckpointIcon from "ExperimentalCheckpointIcon" /* 13366 */;
import openCheckpoint from "openCheckpoint" /* 13384 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13397 */;
import size from "module_2" /* 2 */;

function handlePress() {
  const checkpointData = CheckpointActionCreators.fetchCheckpointData();
  openCheckpoint.openCheckpoint("user_profile");
}
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointProfileEntrypoint.tsx");

export default function CheckpointProfileEntrypoint() {
  let tmp3 = null;
  if (obj.useIsCheckpointEnabled("CheckpointProfileEntrypoint")) {
    const obj2 = { label: null, subLabel: null, icon: null, onPress: null, arrow: true, start: true, end: true };
    const intl = util.intl;
    obj2.label = intl.string(_modDef3091["8hclXY"]);
    const intl2 = util.intl;
    obj2.subLabel = intl2.string(_modDef3091.BFc4lY);
    const obj3 = { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon };
    obj2.icon = jsx(TableRow.TableRow.Icon, { IconComponent: ExperimentalCheckpointIcon.ExperimentalCheckpointIcon });
    obj2.onPress = handlePress;
    tmp3 = jsx(TableRow.TableRow, { label: null, subLabel: null, icon: null, onPress: null, arrow: true, start: true, end: true });
  }
  return tmp3;
};