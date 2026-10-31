// === Module 9773: LeaveGroupDMConfirmationAlert ===

// Module 9773 (LeaveGroupDMConfirmationAlert)
import util from "util" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import useAlertStore from "useAlertStore" /* 5960 */;
import AlertModal from "AlertModal" /* 5964 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6974 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function LeaveGroupDMConfirmationAlert(onConfirm) {
  onConfirm = onConfirm.onConfirm;
  checked = undefined;
  ({ title, body, confirmText, cancelText } = onConfirm);
  [checked, obj3.onPress] = noop.useState(false);
  const items = [onConfirm, checked];
  const callback = noop.useCallback(() => onConfirm(first), items);
  const obj = { title, content: body, extraContent: null, actions: null };
  const obj2 = { hasIcons: false, children: null };
  const obj3 = { label: null, checked: null, onPress: null };
  const intl = util.intl;
  obj3.label = intl.string(util.t.bq3JXs);
  obj3.checked = checked;
  obj2.children = hasOwnProperty(TableCheckboxRow.TableCheckboxRow, obj3);
  obj.extraContent = hasOwnProperty(TableRowGroup.TableRowGroup, obj2);
  const obj4 = { children: null };
  const items1 = [hasOwnProperty(AlertModal.AlertActionButton, { variant: "primary", text: confirmText, onPress: callback }), hasOwnProperty(AlertModal.AlertActionButton, { variant: "secondary", text: cancelText })];
  obj4.children = items1;
  obj.actions = React5(timestampProducer, obj4);
  return hasOwnProperty(AlertModal.AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/LeaveGroupDMConfirmationAlert.tsx");

export function openLeaveGroupDMConfirmationAlert(arg0) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("leave-group-dm-confirmation", hasOwnProperty(LeaveGroupDMConfirmationAlert, {}));
}