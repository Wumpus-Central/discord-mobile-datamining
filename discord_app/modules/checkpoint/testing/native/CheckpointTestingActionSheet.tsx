// === Module 19252: CheckpointTestingActionSheet ===

// Module 19252 (CheckpointTestingActionSheet)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1113 */;
import _modDef3250 from "module_3250" /* 3250 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import TableRowGroup from "TableRowGroup" /* 7126 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7382 */;
import ActionSheet from "ActionSheet" /* 7426 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 19253 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet() {
  let obj = { header: null, children: null };
  const obj2 = { title: null };
  let intl = util.intl;
  obj2.title = intl.string(_modDef3250["9dS734"]);
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
    return closure_3(label(7038).TableRow, obj, label.id);
  });
  obj.children = jsx(TableRowGroup.TableRowGroup, { hasIcons: false, children: null });
  return jsx(ActionSheet.ActionSheet, { header: null, children: null });
};