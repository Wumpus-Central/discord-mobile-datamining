// discord_app/modules/checkpoint/testing/native/CheckpointTestingActionSheet.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import _modDef3094 from "../CheckpointTesting.messages.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import CheckpointTestingOptions from "../CheckpointTestingOptions.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
}
