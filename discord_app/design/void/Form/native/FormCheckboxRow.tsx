// === Module 6631: FormCheckboxRow ===

// Module 6631 (FormCheckboxRow)
import c from "c" /* 576 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4594 */;
import Form_FormCheckboxDefault from "Form/FormCheckbox" /* 6632 */;
import FormRowDefault from "FormRow" /* 6633 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["selected"];
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  const cResult = c.c(13);
  if (cResult[0] !== selected) {
    selected = selected.selected;
    const tmp8 = _objectWithoutProperties(selected, closure_3);
    cResult[0] = selected;
    cResult[1] = tmp8;
    cResult[2] = selected;
    let tmp5 = selected;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_6();
  if (cResult[3] !== tmp5) {
    const obj2 = { checked: tmp5 };
    cResult[3] = tmp5;
    cResult[4] = obj2;
    let tmp10 = obj2;
  } else {
    tmp10 = cResult[4];
  }
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp10);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[5] !== tmp5) {
    const obj3 = { selected: tmp5 };
    const tmp15 = jsx(Form_FormCheckboxDefault, { selected: tmp5 });
    cResult[5] = tmp5;
    cResult[6] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === accessibilityRole) {
    if (cResult[8] === accessibilityState) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp9.checkboxWrapperStyle) {
          if (cResult[11] === tmp12) {
            let tmp16 = cResult[12];
          }
          return tmp16;
        }
      }
    }
  }
  const obj4 = {};
  const tmpResult = useA11yRolesNative;
  const merged = Object.assign(tmp4);
  obj4.accessibilityRole = accessibilityRole;
  obj4.accessibilityState = accessibilityState;
  obj4.trailing = tmp12;
  obj4.trailingWrapperStyle = tmp9.checkboxWrapperStyle;
  const tmp19 = jsx(FormRowDefault, {});
  cResult[7] = accessibilityRole;
  cResult[8] = accessibilityState;
  cResult[9] = tmp4;
  cResult[10] = tmp9.checkboxWrapperStyle;
  cResult[11] = tmp12;
  cResult[12] = tmp19;
  tmp16 = tmp19;
}) : ((selected) => {
  selected = selected.selected;
  const merged = Object.assign(selected, Object.assign({ selected: 0 }));
  const tmp2 = closure_6();
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.accessibilityRole = accessibilityRole;
  obj2.accessibilityState = accessibilityState;
  obj2.trailing = jsx(Form_FormCheckboxDefault, { selected });
  obj2.trailingWrapperStyle = tmp2.checkboxWrapperStyle;
  return jsx(FormRowDefault, {});
});