// === Module 15045: CheckpointProfileEntrypoint ===

// Module 15045 (CheckpointProfileEntrypoint)
import jsxProd from "jsxProd" /* 21 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import openCheckpoint from "openCheckpoint" /* 12625 */;
import size from "module_2" /* 2 */;

function CheckpointProfileEntrypointRow(source) {
  source = source.source;
  const checkpointQAMode = source(6769).useCheckpointQAMode("CheckpointProfileEntrypoint");
  const obj2 = { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true };
  const intl = source(1112).intl;
  obj2.label = intl.string(checkpointQAMode(3495)["8hclXY"]);
  const intl2 = source(1112).intl;
  obj2.subLabel = intl2.string(checkpointQAMode(3495).BFc4lY);
  const obj = source(6769);
  obj2.icon = jsx(source(6144).TableRow.Icon, { IconComponent: source(14118).ExperimentalCheckpointIcon });
  obj2.onPress = function onPress() {
    return openCheckpoint.openCheckpoint(source);
  };
  let fn;
  if ("off" !== checkpointQAMode) {
    fn = () => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15046, dependencyMap.paths), "CheckpointTestingActionSheet", { mode: checkpointQAMode });
    };
  }
  obj2.onLongPress = fn;
  return jsx(source(6144).TableRow, { label: null, subLabel: null, icon: null, onPress: null, onLongPress: null, arrow: true, start: true, end: true });
}
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