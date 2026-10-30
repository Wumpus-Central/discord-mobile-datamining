// === Module 12334: AppLauncherBooleanOption ===

// Module 12334 (AppLauncherBooleanOption)
import nativeDefault from "native" /* 575 */;
import useA11yRolesNative from "useA11yRolesNative" /* 5077 */;
import FormCheckbox from "FormCheckbox" /* 6983 */;
import Form from "Form" /* 8169 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const obj2 = { container: { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg, alignItems: "center" }, checkboxWrapper: { flexShrink: 0 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
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
};