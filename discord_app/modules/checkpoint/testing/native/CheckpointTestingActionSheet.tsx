// === Module 19468: CheckpointTestingActionSheet ===

// Module 19468 (CheckpointTestingActionSheet)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1113 */;
import _modDef3271 from "module_3271" /* 3271 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import TableRowGroup from "TableRowGroup" /* 7680 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7847 */;
import ActionSheet from "ActionSheet" /* 7885 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 19469 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet(mode) {
  const checkpointTestingOptions = CheckpointTestingOptions.getCheckpointTestingOptions(mode.mode);
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  let intl = util.intl;
  obj3.title = intl.string(_modDef3271["9dS734"]);
  obj2.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  obj2.children = jsx(TableRowGroup.TableRowGroup, {
    hasIcons: false,
    children: checkpointTestingOptions.map((label) => {
      const obj = { label: null, onPress: null };
      const intl = label(1113).intl;
      obj.label = intl.string(label.label);
      obj.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        label.action();
      };
      return closure_3(label(7379).TableRow, obj, label.id);
    })
  });
  return jsx(ActionSheet.ActionSheet, { header: null, children: null });
};