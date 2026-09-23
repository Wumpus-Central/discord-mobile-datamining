// === Module 7467: FormCheckboxRow ===

// Module 7467 (FormCheckboxRow)
import useA11yRolesNative from "useA11yRolesNative" /* 4541 */;
import FormRowDefault from "FormRow" /* 7468 */;
import Form_FormCheckboxDefault from "Form/FormCheckbox" /* 7477 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let closure_4 = createStyles.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default function FormCheckboxRow(selected) {
  selected = selected.selected;
  const merged = Object.assign(selected, Object.assign({ selected: 0 }));
  const tmp2 = closure_4();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityState = accessibilityState;
  obj2.trailing = jsx(Form_FormCheckboxDefault, { selected });
  obj2.trailingWrapperStyle = tmp2.checkboxWrapperStyle;
  return jsx(FormRowDefault, {});
};