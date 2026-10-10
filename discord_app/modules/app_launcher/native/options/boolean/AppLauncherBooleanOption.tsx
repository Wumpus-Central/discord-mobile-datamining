// === Module 11883: AppLauncherBooleanOption ===

// Module 11883 (AppLauncherBooleanOption)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Form from "Form" /* 8579 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { container: { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center" } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { flexDirection: "row", width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherBooleanOption(onPress) {
  const cResult = c.c(14);
  ({ style, option, initialValue } = onPress);
  onPress = onPress.onPress;
  const hasError = onPress.hasError;
  const tmp4 = closure_5();
  if (cResult[0] !== initialValue) {
    const fn = function c() {
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
  [selected, closure_3] = noop.useState(tmp5);
  if (cResult[2] === style) {
    if (cResult[3] === tmp4.container) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === onPress) {
      if (cResult[6] === selected) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] === hasError) {
        if (cResult[9] === option.displayName) {
          if (cResult[10] === selected) {
            if (cResult[11] === tmp8) {
              if (cResult[12] === tmp9) {
                let tmp10 = cResult[13];
              }
              return tmp10;
            }
          }
        }
      }
      const obj2 = { start: true, end: true, style: tmp8, hasError, label: option.displayName, selected, onPress: tmp9 };
      const tmp12 = jsx(Form.FormCheckboxRow, { start: true, end: true, style: tmp8, hasError, label: option.displayName, selected, onPress: tmp9 });
      cResult[8] = hasError;
      cResult[9] = option.displayName;
      cResult[10] = selected;
      cResult[11] = tmp8;
      cResult[12] = tmp9;
      cResult[13] = tmp12;
      tmp10 = tmp12;
    }
    const fn2 = function v() {
      closure_3(!first);
      onPress(!first);
    };
    cResult[5] = onPress;
    cResult[6] = selected;
    cResult[7] = fn2;
    tmp9 = fn2;
  }
  const items = [tmp4.container, style];
  cResult[2] = style;
  cResult[3] = tmp4.container;
  cResult[4] = items;
  tmp8 = items;
}) : (function AppLauncherBooleanOption(arg0) {
  ({ initialValue: require, onPress: dependencyMap } = arg0);
  selected = undefined;
  closure_3 = undefined;
  ({ style, option, hasError } = arg0);
  [selected, closure_3] = noop.useState(() => {
    let tmp2 = null != require;
    if (tmp2) {
      tmp2 = "text" === require.type;
    }
    if (tmp2) {
      tmp2 = "true" === require.text;
    }
    return tmp2;
  });
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
});