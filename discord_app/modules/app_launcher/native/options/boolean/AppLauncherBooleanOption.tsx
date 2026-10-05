// discord_app/modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let onPress;

let obj2;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = {
  flexDirection: "row",
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
};
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let closure_3;
      let first;
      let initialValue;
      let option;
      let style;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(14);
      ({ style, option, initialValue } = onPress);
      onPress = onPress.onPress;
      const hasError = onPress.hasError;
      const tmp4 = closure_5();
      if (cResult[0] !== initialValue) {
        const fn = function c() {
          return null != initialValue && "text" === initialValue.type && "true" === initialValue.text;
        };
        cResult[0] = initialValue;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      [first, closure_3] = react.useState(tmp5);
      if (cResult[2] === style) {
        let tmp8;
        if (cResult[3] === tmp4.container) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === onPress) {
          let tmp9;
          if (cResult[6] === first) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === hasError) {
            if (cResult[9] === option.displayName) {
              if (cResult[10] === first) {
                if (cResult[11] === tmp8) {
                  let tmp10;
                  if (cResult[12] === tmp9) {
                    tmp10 = cResult[13];
                  }
                  return tmp10;
                }
              }
            }
          }
          const tmp12 = jsx(Form.FormCheckboxRow, {
            start: true,
            end: true,
            style: tmp8,
            hasError,
            label: option.displayName,
            selected: first,
            onPress: tmp9,
          });
          cResult[8] = hasError;
          cResult[9] = option.displayName;
          cResult[10] = first;
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
        cResult[6] = first;
        cResult[7] = fn2;
        tmp9 = fn2;
      }
      const items = [tmp4.container, style];
      cResult[2] = style;
      cResult[3] = tmp4.container;
      cResult[4] = items;
      tmp8 = items;
    }
  : (arg0) => {
      let closure_129_0;
      let closure_129_1;
      let closure_3;
      let first;
      let hasError;
      let option;
      let style;
      ({ initialValue: closure_129_0, onPress: closure_129_1 } = arg0);
      first = undefined;
      closure_3 = undefined;
      ({ style, option, hasError } = arg0);
      const tmp = closure_5();
      [first, closure_3] = react.useState(
        () => null != closure_1_0 && "text" === closure_1_0.type && "true" === closure_1_0.text,
      );
      const items = [tmp.container, style];
      return jsx(Form.FormCheckboxRow, {
        start: true,
        end: true,
        style: items,
        hasError,
        label: option.displayName,
        selected: first,
        onPress() {
          closure_3(!first);
          closure_1_1(!first);
        },
      });
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/options/boolean/AppLauncherBooleanOption.tsx");

export default tmp2;
