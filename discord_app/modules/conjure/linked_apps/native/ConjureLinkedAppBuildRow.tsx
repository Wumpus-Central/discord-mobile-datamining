// discord_app/modules/conjure/linked_apps/native/ConjureLinkedAppBuildRow.tsx
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import conjureLinkedApps from "../conjureLinkedApps.tsx";
import ConjureLinkedAppBuildSheetDefault from "ConjureLinkedAppBuildSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ConjureLinkedAppBuildSheet = "ConjureLinkedAppBuildSheet";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildRow.tsx");

export default function ConjureLinkedAppBuildRow(value) {
  value = value.value;
  require = value;
  const onChange = value.onChange;
  const intl = util.intl;
  const stringResult = intl.string(onChange(3865).Odrcmq);
  dependencyMap = stringResult;
  const obj = { hasIcons: false, children: null };
  let obj2 = { label: stringResult, trailing: null, arrow: true, disabled: null, onPress: null };
  const obj3 = { text: conjureLinkedApps.linkedAppBuildLabel(value) };
  obj2.trailing = jsx(TableRow.TableRow.TrailingText, { text: conjureLinkedApps.linkedAppBuildLabel(value) });
  obj2.disabled = value.disabled;
  obj2.onPress = function openSheet() {
    const obj2 = {
      content: jsx(ConjureLinkedAppBuildSheetDefault, {
        sheetKey: ConjureLinkedAppBuildSheet,
        title,
        value,
        onPick: onChange,
      }),
      key: ConjureLinkedAppBuildSheet,
      stackingBehavior: "stack",
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  };
  obj.children = jsx(TableRow.TableRow, {
    label: stringResult,
    trailing: null,
    arrow: true,
    disabled: null,
    onPress: null,
  });
  return jsx(TableRowGroup.TableRowGroup, { hasIcons: false, children: null });
}
