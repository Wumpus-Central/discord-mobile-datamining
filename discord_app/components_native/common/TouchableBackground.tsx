// discord_app/components_native/common/TouchableBackground.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../_runtime/00576_react.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let onPressOut;

let metroImportDefault;
let metroRequire;
let obj2;
let closure_2 = ["activeBackgroundColor", "pressableStyle", "style", "children", "onPressIn", "onPressOut"];
({ View: metroRequire, Pressable: metroImportDefault } = react_native);
const jsx = Fragment.jsx;
let obj = { default: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_9 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPressOut) => {
      let activeBackgroundColor;
      let children;
      let closure_129_2;
      let onPressIn;
      let pressableStyle;
      let style;
      let tmp14;
      let tmp2;
      const obj = react2;
      const cResult = obj.c(28);
      if (cResult[0] !== onPressOut) {
        ({ activeBackgroundColor, pressableStyle, style, children, onPressIn } = onPressOut);
        let closure_0 = onPressIn;
        onPressOut = onPressOut.onPressOut;
        let closure_1 = onPressOut;
        cResult[0] = onPressOut;
        cResult[1] = activeBackgroundColor;
        cResult[2] = children;
        cResult[3] = onPressIn;
        cResult[4] = onPressOut;
        cResult[5] = pressableStyle;
        cResult[6] = _objectWithoutProperties(onPressOut, closure_2);
        cResult[7] = style;
        tmp2 = activeBackgroundColor;
        const tmp11 = _objectWithoutProperties(onPressOut, closure_2);
      } else {
        tmp2 = cResult[1];
        closure_0 = cResult[3];
        closure_1 = cResult[4];
      }
      const tmp12 = closure_9();
      [tmp14, closure_129_2] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[8] !== onPressIn) {
        const fn = function p(arg0) {
          closure_1_2(true);
          if (closure_0 != null) {
            tmp2(arg0);
          }
        };
        cResult[8] = onPressIn;
        cResult[9] = fn;
      }
      if (cResult[10] !== tmp5) {
        class E {
          constructor(arg0) {
            if (closure_1 != null) {
              tmp(arg0);
            }
            closure_1_2(false);
          }
        }
        cResult[10] = tmp5;
        cResult[11] = E;
      } else {
        class E {
          constructor(arg0) {
            if (closure_1 != null) {
              tmp(arg0);
            }
            closure_1_2(false);
          }
        }
      }
      if (cResult[12] === tmp2) {
        class E {
          constructor(arg0) {
            if (closure_1 != null) {
              tmp(arg0);
            }
            closure_1_2(false);
          }
        }
      }
      let tmp17 = tmp14;
      if (tmp17) {
        class E {
          constructor(arg0) {
            if (closure_1 != null) {
              tmp(arg0);
            }
            closure_1_2(false);
          }
        }
        const tmp18 = tmp2;
        if (tmp2 == null) {
          class E {
            constructor(arg0) {
              if (closure_1 != null) {
                tmp(arg0);
              }
              closure_1_2(false);
            }
          }
        }
        tmp17 = { backgroundColor: tmp18 };
        const obj2 = { backgroundColor: tmp18 };
      }
      cResult[12] = tmp2;
      cResult[13] = tmp14;
      cResult[14] = tmp12;
      cResult[15] = tmp17;
    }
  : (onPressOut) => {
      let activeBackgroundColor;
      let c2;
      let children;
      let onPressIn;
      let pressableStyle;
      let style;
      let tmp4;
      ({ activeBackgroundColor, onPressIn } = onPressOut);
      onPressOut = onPressOut.onPressOut;
      ({ pressableStyle, style, children } = onPressOut);
      const merged = Object.assign(
        onPressOut,
        Object.assign({
          activeBackgroundColor: 0,
          pressableStyle: 0,
          style: 0,
          children: 0,
          onPressIn: 0,
          onPressOut: 0,
        }),
      );
      c2 = undefined;
      const tmp2 = closure_9();
      [tmp4, c2] = _slicedToArray(react.useState(false), 2);
      const items = [onPressIn];
      const items1 = [onPressOut];
      const tmp3 = _slicedToArray(react.useState(false), 2);
      const callback = react.useCallback((arg0) => {
        _undefined(true);
        if (onPressIn != null) {
          tmp2(arg0);
        }
      }, items);
      const callback1 = react.useCallback((arg0) => {
        if (onPressOut != null) {
          tmp(arg0);
        }
        _undefined(false);
      }, items1);
      const merged1 = Object.assign(merged);
      const items2 = [style];
      if (tmp4) {
        if (activeBackgroundColor == null) {
          activeBackgroundColor = tmp2.default.backgroundColor;
        }
        tmp4 = { backgroundColor: activeBackgroundColor };
      }
      items2[1] = tmp4;
      return (
        <metroImportDefault
          accessibilityRole="button"
          style={pressableStyle}
          onPressIn={callback}
          onPressOut={callback1}
        >
          <metroRequire style={items2}>{children}</metroRequire>
        </metroImportDefault>
      );
    };
const result = size.fileFinishedImporting("components_native/common/TouchableBackground.tsx");

export default tmp3;
