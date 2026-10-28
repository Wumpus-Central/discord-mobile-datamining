// === Module 12121: AppLauncherBooleanOption ===

// Module 12121 (AppLauncherBooleanOption)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5072 */;
import FormCheckbox from "FormCheckbox" /* 6937 */;
import Form from "Form" /* 8985 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let obj2 = { container: { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center" }, checkboxWrapper: { flexShrink: 0 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherBooleanOption(onPress) {
  const cResult = c.c(18);
  ({ option, initialValue } = onPress);
  onPress = onPress.onPress;
  const hasError = onPress.hasError;
  const tmp4 = closure_5();
  if (cResult[0] !== initialValue) {
    const fn = function s() {
      let tmp2 = null != initialValue;
      if (tmp2) {
        tmp2 = "text" === initialValue.type;
      }
      if (tmp2) {
        tmp2 = "true" === initialValue.text;
      }
      return tmp2;
    };
    cResult[0] = initialValue;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  [checked, noop] = noop.useState(tmp5);
  if (cResult[2] !== checked) {
    const obj2 = { checked };
    cResult[2] = checked;
    cResult[3] = obj2;
    let tmp8 = obj2;
  } else {
    tmp8 = cResult[3];
  }
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative(tmp8);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (cResult[4] !== checked) {
    const obj3 = { checked };
    const tmp12 = jsx(FormCheckbox.FormCheckbox, { checked });
    cResult[4] = checked;
    cResult[5] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === onPress) {
    if (cResult[7] === checked) {
      let tmp13 = cResult[8];
    }
    if (cResult[9] === accessibilityRole) {
      if (cResult[10] === accessibilityState) {
        if (cResult[11] === hasError) {
          if (cResult[12] === option.displayName) {
            if (cResult[13] === tmp4.checkboxWrapper) {
              if (cResult[14] === tmp4.container) {
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp13) {
                    let tmp14 = cResult[17];
                  }
                  return tmp14;
                }
              }
            }
          }
        }
      }
    }
    const obj4 = { start: true, end: true, style: tmp4.container, hasError, label: option.displayName, accessibilityRole, accessibilityState, trailing: tmp10, trailingWrapperStyle: tmp4.checkboxWrapper, onPress: tmp13 };
    cResult[9] = accessibilityRole;
    cResult[10] = accessibilityState;
    cResult[11] = hasError;
    cResult[12] = option.displayName;
    cResult[13] = tmp4.checkboxWrapper;
    cResult[14] = tmp4.container;
    cResult[15] = tmp10;
    cResult[16] = tmp13;
    class W {
      constructor() {
        tmp = closure_3(!closure_2);
        tmp2 = onPress(!closure_2);
        return;
      }
    }
    tmp14 = jsx(Form.FormRow, { start: true, end: true, style: tmp4.container, hasError, label: option.displayName, accessibilityRole, accessibilityState, trailing: tmp10, trailingWrapperStyle: tmp4.checkboxWrapper, onPress: tmp13 });
    const tmp16 = jsx(Form.FormRow, { start: true, end: true, style: tmp4.container, hasError, label: option.displayName, accessibilityRole, accessibilityState, trailing: tmp10, trailingWrapperStyle: tmp4.checkboxWrapper, onPress: tmp13 });
  }
  class W {
    constructor() {
      tmp = closure_3(!closure_2);
      tmp2 = onPress(!closure_2);
      return;
    }
  }
  cResult[6] = onPress;
  cResult[7] = checked;
  cResult[8] = W;
  tmp13 = W;
  const tmpResult = useA11yRolesNative;
}) : (function AppLauncherBooleanOption(arg0) {
  ({ initialValue: require, onPress: dependencyMap } = arg0);
  checked = undefined;
  closure_3 = undefined;
  ({ option, hasError } = arg0);
  const tmp = closure_5();
  [checked, closure_3] = noop.useState(() => {
    let tmp2 = null != require;
    if (tmp2) {
      tmp2 = "text" === require.type;
    }
    if (tmp2) {
      tmp2 = "true" === require.text;
    }
    return tmp2;
  });
  const checkboxA11yNative = useA11yRolesNative.useCheckboxA11yNative({ checked });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  return jsx(Form.FormRow, {
    start: true,
    end: true,
    style: tmp.container,
    hasError,
    label: option.displayName,
    accessibilityRole,
    accessibilityState,
    trailing: jsx(FormCheckbox.FormCheckbox, { checked }),
    trailingWrapperStyle: tmp.checkboxWrapper,
    onPress() {
      closure_3(!first);
      dependencyMap(!first);
    }
  });
});