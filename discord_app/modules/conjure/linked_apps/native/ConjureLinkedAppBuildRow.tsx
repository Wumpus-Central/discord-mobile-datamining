// === Module 12727: ConjureLinkedAppBuildRow ===

// Module 12727 (ConjureLinkedAppBuildRow)
import util from "util" /* 1114 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5253 */;
import TableRow from "TableRow" /* 6969 */;
import TableRowGroup from "TableRowGroup" /* 7054 */;
import conjureLinkedApps from "conjureLinkedApps" /* 12464 */;
import ConjureLinkedAppBuildSheetDefault from "ConjureLinkedAppBuildSheet" /* 12469 */;
import noop from "module_19" /* 19 */;

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
    const obj2 = { content: jsx(ConjureLinkedAppBuildSheetDefault, { sheetKey: ConjureLinkedAppBuildSheet, title, value, onPick: onChange }), key: ConjureLinkedAppBuildSheet, stackingBehavior: "stack" };
    ActionSheetActionCreators.showActionSheet(obj2);
  };
  obj.children = jsx(TableRow.TableRow, { label: stringResult, trailing: null, arrow: true, disabled: null, onPress: null });
  return jsx(TableRowGroup.TableRowGroup, { hasIcons: false, children: null });
};