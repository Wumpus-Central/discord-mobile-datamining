// === Module 14516: CheckpointTestingActionSheet ===

// Module 14516 (CheckpointTestingActionSheet)
import util from "util" /* 1113 */;
import _modDef3341 from "module_3341" /* 3341 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import TableRowGroup from "TableRowGroup" /* 7229 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7396 */;
import ActionSheet from "ActionSheet" /* 7434 */;
import TableSwitchRow from "TableSwitchRow" /* 7437 */;
import CheckpointMitigationOverrideStore from "CheckpointMitigationOverrideStore" /* 14517 */;
import CheckpointTestingOptions from "CheckpointTestingOptions" /* 14519 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

function handleNoCharacterChange(isNoCharacter) {
  closure_3.setState({ isNoCharacter });
}
function handleCompactAssetsChange(isCompactAssets) {
  closure_3.setState({ isCompactAssets });
}
function CheckpointMitigationOverrides() {
  const tmp = closure_3((isNoCharacter) => isNoCharacter.isNoCharacter);
  const intl = util.intl;
  const tmp2 = closure_3((isCompactAssets) => isCompactAssets.isCompactAssets);
  const intl2 = util.intl;
  const stringResult = intl.string(_modDef3341.kXGgZf);
  const intl3 = util.intl;
  const stringResult1 = intl2.string(_modDef3341.FbmMyu);
  const obj = { title: stringResult, hasIcons: false, children: null };
  items = [React4(TableSwitchRow.TableSwitchRow, { label: stringResult1, value: tmp, onValueChange: handleNoCharacterChange }), ];
  const obj2 = { label: stringResult1, value: tmp, onValueChange: handleNoCharacterChange };
  const stringResult2 = intl3.string(_modDef3341.j5X4PU);
  items[1] = React4(TableSwitchRow.TableSwitchRow, { label: intl3.string(_modDef3341.j5X4PU), value: tmp2, onValueChange: handleCompactAssetsChange });
  obj.children = items;
  return hasOwnProperty(TableRowGroup.TableRowGroup, obj);
}
let closure_3 = CheckpointMitigationOverrideStore.useCheckpointMitigationOverrideStore;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = size.fileFinishedImporting("modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx");

export default function CheckpointTestingActionSheet(mode) {
  mode = mode.mode;
  const checkpointTestingOptions = CheckpointTestingOptions.getCheckpointTestingOptions(mode);
  let intl = util.intl;
  const obj2 = { header: null, children: null };
  const obj3 = { title: null };
  const intl2 = util.intl;
  obj3.title = intl2.string(_modDef3341["9dS734"]);
  obj2.header = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3);
  let tmp5Result = "all" === mode;
  if (tmp5Result) {
    tmp5Result = React4(CheckpointMitigationOverrides, {});
  }
  items = [tmp5Result, ];
  const stringResult = intl.string(_modDef3341.r0B3ck);
  items[1] = React4(TableRowGroup.TableRowGroup, {
    title: intl.string(_modDef3341.r0B3ck),
    hasIcons: false,
    children: checkpointTestingOptions.map((label) => {
      const obj = { label: null, onPress: null };
      const intl = label(1113).intl;
      obj.label = intl.string(label.label);
      obj.onPress = function onPress() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        label.action();
      };
      return closure_4(label(6926).TableRow, obj, label.id);
    })
  });
  obj2.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj2);
};