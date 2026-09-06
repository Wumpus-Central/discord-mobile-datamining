// discord_app/design/void/Form/native/FormCheckboxRow.tsx
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import FormRowDefault from "FormRow.tsx";
import Form_FormCheckboxDefault from "FormCheckbox.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
}
