// === Module 6638: FormCheckboxRow ===

// Module 6638 (FormCheckboxRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react_native from "react-native" /* 4600 */;
import Form_FormCheckboxDefault from "Form/FormCheckbox" /* 6639 */;
import FormRowDefault from "FormRow" /* 6640 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let selected;

let closure_3 = ["selected"];
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ checkboxWrapperStyle: { flexShrink: 0 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  let accessibilityRole;
  let accessibilityState;
  let tmp10;
  let tmp12;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== selected) {
    selected = selected.selected;
    const tmp8 = _objectWithoutProperties(selected, closure_3);
    cResult[0] = selected;
    cResult[1] = tmp8;
    cResult[2] = selected;
    tmp5 = selected;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmp9 = closure_6();
  if (cResult[3] !== tmp5) {
    const obj2 = { checked: tmp5 };
    cResult[3] = tmp5;
    cResult[4] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = react_native;
  const checkboxA11yNative = tmpResult.useCheckboxA11yNative(tmp10);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[5] !== tmp5) {
    const tmp15 = jsx(Form_FormCheckboxDefault, { selected: tmp5 });
    cResult[5] = tmp5;
    cResult[6] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === accessibilityRole) {
    if (cResult[8] === accessibilityState) {
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp9.checkboxWrapperStyle) {
          let tmp16;
          if (cResult[11] === tmp12) {
            tmp16 = cResult[12];
          }
          return tmp16;
        }
      }
    }
  }
  FormRowDefault;
  const merged = Object.assign(tmp4);
  const tmp19 = <tmp17 accessibilityRole={accessibilityRole} accessibilityState={accessibilityState} trailing={tmp12} trailingWrapperStyle={tmp9.checkboxWrapperStyle} />;
  cResult[7] = accessibilityRole;
  cResult[8] = accessibilityState;
  cResult[9] = tmp4;
  cResult[10] = tmp9.checkboxWrapperStyle;
  cResult[11] = tmp12;
  cResult[12] = tmp19;
  tmp16 = tmp19;
}) : ((selected) => {
  let accessibilityRole;
  let accessibilityState;
  selected = selected.selected;
  const merged = Object.assign(selected, Object.assign({ selected: 0 }));
  const tmp2 = closure_6();
  const obj = react_native;
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  FormRowDefault;
  const merged1 = Object.assign(merged);
  return <tmp4 accessibilityRole={accessibilityRole} accessibilityState={accessibilityState} trailing={jsx(Form_FormCheckboxDefault, { selected })} trailingWrapperStyle={tmp2.checkboxWrapperStyle} />;
});
const result = size.fileFinishedImporting("design/void/Form/native/FormCheckboxRow.tsx");

export default tmp3;