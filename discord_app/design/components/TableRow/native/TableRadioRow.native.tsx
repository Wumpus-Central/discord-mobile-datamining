// === Module 7702: TableRadioRow ===

// Module 7702 (TableRadioRow)
import useCheckboxA11yNative from "useCheckboxA11yNative" /* 4205 */;
import TableRowInner from "TableRowInner" /* 5607 */;
import context2 from "context" /* 7701 */;
import FormRadio from "FormRadio" /* 7703 */;
import closure_2 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRadioRow.native.tsx");

export const TableRadioRow = function TableRadioRow(value) {
  value = value.value;
  require = value;
  ({ label, subLabel, disabled } = value);
  if (disabled === undefined) {
    disabled = false;
  }
  ({ legacyCompat_selected, legacyCompat_onPress: dependencyMap } = value);
  const merged = Object.assign(value, Object.create(null));
  let onSelect;
  const context = onSelect.useContext(context2.TableRadioGroupContext);
  onSelect = context.onSelect;
  if (legacyCompat_selected == null) {
    legacyCompat_selected = context.selectedValue === value;
  }
  let tmp2Result = tmp2(4199);
  const nodeText = tmp2Result.getNodeText(label);
  tmp2Result = tmp2(4199);
  const nodeText1 = tmp2Result.getNodeText(subLabel);
  const radioA11yNative = useCheckboxA11yNative.useRadioA11yNative({ selected: legacyCompat_selected, disabled });
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
    if (closure_1 != null) {
      tmp(arg0);
    }
    onSelect(closure_0);
  };
  obj.trailing = jsx(FormRadio.FormRadio, { selected: legacyCompat_selected });
  return jsx(TableRowInner.TableRow, {});
};