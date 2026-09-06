// === Module 7136: FormCheckboxRow ===

// Module 7136 (FormCheckboxRow)
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import FormRowDefault from "FormRow" /* 7137 */;
import Form_FormCheckboxDefault from "Form/FormCheckbox" /* 7146 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default function FormCheckboxRow(selected) {
  selected = selected.selected;
  const merged = Object.assign(selected, Object.assign({ selected: 0 }));
  let obj = useA11yRolesNative;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  obj = {};
  const tmp2 = closure_4();
  const merged1 = Object.assign(merged);
  obj.accessibilityRole = accessibilityRole;
  obj.accessibilityState = accessibilityState;
  obj.trailing = jsx(Form_FormCheckboxDefault, { selected });
  obj.trailingWrapperStyle = tmp2.checkboxWrapperStyle;
  return jsx(FormRowDefault, {});
};