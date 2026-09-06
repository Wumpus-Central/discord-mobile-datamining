// === Module 12177: AppLauncherBooleanOption ===

// Module 12177 (AppLauncherBooleanOption)
import nativeDefault from "native" /* 576 */;
import Form from "Form" /* 8593 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center" };
createStyles.container = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default function AppLauncherBooleanOption(arg0) {
  ({ initialValue: require, onPress: dependencyMap } = arg0);
  ({ style, option, hasError } = arg0);
  let tmp2 = _slicedToArray(noop.useState(() => {
    let tmp2 = null != require;
    if (tmp2) {
      tmp2 = "text" === require.type;
    }
    if (tmp2) {
      tmp2 = "true" === require.text;
    }
    return tmp2;
  }), 2);
  const selected = tmp2[0];
  closure_3 = tmp2[1];
  const obj = {
    start: true,
    end: true,
    style: null,
    hasError,
    label: option.displayName,
    selected,
    onPress() {
      closure_3(!first);
      dependencyMap(!first);
    }
  };
  const items = [closure_5().container, style];
  obj.style = items;
  return jsx(Form.FormCheckboxRow, {
    start: true,
    end: true,
    style: null,
    hasError,
    label: option.displayName,
    selected,
    onPress() {
      closure_3(!first);
      dependencyMap(!first);
    }
  });
};