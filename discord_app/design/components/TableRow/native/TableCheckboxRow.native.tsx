// === Module 5774: TableCheckboxRow ===

// Module 5774 (TableCheckboxRow)
import native from "native" /* 4425 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4440 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4458 */;
import TableRow from "TableRow" /* 5775 */;
import FormCheckbox from "FormCheckbox" /* 5787 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TableRow/native/TableCheckboxRow.native.tsx");

export const TableCheckboxRow = function TableCheckboxRow(checked) {
  checked = checked.checked;
  ({ label, subLabel, disabled } = checked);
  if (disabled === undefined) {
    disabled = false;
  }
  const onPress = checked.onPress;
  const merged = Object.assign(checked, Object.assign({ checked: 0, label: 0, subLabel: 0, disabled: 0, onPress: 0, accessibilityHint: 0 }));
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  const items = [sharedValue];
  const items1 = [onPress, sharedValue, checked];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const callback1 = noop.useCallback(() => {
    const result = sharedValue.set(0);
    onPress(!checked);
  }, items1);
  const nodeText = native.getNodeText(label);
  const nodeText1 = native.getNodeText(subLabel);
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked, disabled });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.arrow = false;
  obj5.label = label;
  obj5.subLabel = subLabel;
  obj5.disabled = disabled;
  obj5.accessibilityState = accessibilityState;
  obj5.accessible = true;
  obj5.accessibilityRole = accessibilityRole;
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  obj5.accessibilityLabel = "" + nodeText + ", " + str;
  obj5.accessibilityHint = checked.accessibilityHint;
  obj5.onPressIn = callback;
  obj5.onPress = callback1;
  obj5.trailing = jsx(FormCheckbox.FormCheckbox, { checked });
  return jsx(TableRow.TableRow, {});
};