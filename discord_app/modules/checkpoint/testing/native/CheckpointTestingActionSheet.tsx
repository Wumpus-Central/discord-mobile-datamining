// discord_app/modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3271 from "../CheckpointTesting.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import CheckpointTestingOptions from "../CheckpointTestingOptions.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    }),
  });
  return jsx(ActionSheet.ActionSheet, { header: null, children: null });
}
