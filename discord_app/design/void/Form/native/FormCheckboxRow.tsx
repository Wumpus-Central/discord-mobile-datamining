// === Module 6753: FormCheckboxRow ===

// Module 6753 (FormCheckboxRow)
import useA11yRolesNative from "useA11yRolesNative" /* 4578 */;
import FormRowDefault from "FormRow" /* 6754 */;
import Form_FormCheckboxDefault from "Form/FormCheckbox" /* 6763 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4866);
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