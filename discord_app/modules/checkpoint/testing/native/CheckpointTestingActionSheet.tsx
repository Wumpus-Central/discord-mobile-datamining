// === Module 18875: CheckpointTestingActionSheet ===

// Module 18875 (CheckpointTestingActionSheet)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1113 */;
import _modDef3094 from "module_3094" /* 3094 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7321 */;
import ActionSheet from "ActionSheet" /* 7366 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 18876 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet() {
  let obj = { header: null, children: null };
  const obj2 = { title: null };
  let intl = util.intl;
  obj2.title = intl.string(_modDef3094["9dS734"]);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: null });
  const obj3 = { hasIcons: false, children: null };
  const prop = CheckpointTestingOptions.CHECKPOINT_TESTING_OPTIONS;
  obj3.children = prop.map((label) => {
    const obj = { label: null, subLabel: null, onPress: null };
    const intl = label(1113).intl;
    obj.label = intl.string(label.label);
    let stringResult;
    if (null != label.description) {
      const intl2 = label(1113).intl;
      stringResult = intl2.string(label.description);
    }
    obj.subLabel = stringResult;
    obj.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      label.action();
    };
    return closure_3(label(6975).TableRow, obj, label.id);
  });
  obj.children = jsx(TableRowGroup.TableRowGroup, { hasIcons: false, children: null });
  return jsx(ActionSheet.ActionSheet, { header: null, children: null });
};