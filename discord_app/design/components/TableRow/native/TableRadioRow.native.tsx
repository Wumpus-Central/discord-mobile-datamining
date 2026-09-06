// === Module 5688: TableRadioRow ===

// Module 5688 (TableRadioRow)
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import TableRow from "TableRow" /* 5605 */;
import TableRadioGroup from "TableRadioGroup" /* 5685 */;
import FormRadio from "FormRadio" /* 5689 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioRow.native.tsx");

export const TableRadioRow = function TableRadioRow(value) {
  value = value.value;
  require = value;
  ({ label, subLabel, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ legacyCompat_selected, legacyCompat_onPress: dependencyMap } = value);
  const merged = Object.assign(value, Object.assign({ value: 0, label: 0, subLabel: 0, disabled: 0, accessibilityHint: 0, legacyCompat_selected: 0, legacyCompat_onPress: 0 }));
  const context = noop.useContext(TableRadioGroup.TableRadioGroupContext);
  const onSelect = context.onSelect;
  if (legacyCompat_selected == null) {
    legacyCompat_selected = context.selectedValue === value;
  }
  let tmp2Result = tmp2(4264);
  const nodeText = tmp2Result.getNodeText(label);
  tmp2Result = tmp2(4264);
  const nodeText1 = tmp2Result.getNodeText(subLabel);
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected: legacyCompat_selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.arrow = false;
  obj.label = label;
  obj.subLabel = subLabel;
  obj.disabled = disabled;
  obj.accessibilityState = accessibilityState;
  obj.accessible = true;
  obj.accessibilityRole = accessibilityRole;
  let str = nodeText1;
  if (nodeText1 == null) {
    str = "";
  }
  obj.accessibilityLabel = "" + nodeText + ", " + str;
  obj.accessibilityHint = value.accessibilityHint;
  obj.onPress = function onPress(arg0) {
    if (dependencyMap != null) {
      tmp(arg0);
    }
    onSelect(value);
  };
  obj.trailing = jsx(FormRadio.FormRadio, { selected: legacyCompat_selected });
  return jsx(TableRow.TableRow, {});
};