// discord_app/components_native/common/TouchableBackground.tsx
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["activeBackgroundColor", "pressableStyle", "style", "children", "onPressIn", "onPressOut"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { default: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/TouchableBackground.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TouchableBackground(onPressOut) {
      const cResult = c.c(28);
      if (cResult[0] !== onPressOut) {
        ({ activeBackgroundColor, pressableStyle, style, children, onPressIn } = onPressOut);
        closure_0 = onPressIn;
        onPressOut = onPressOut.onPressOut;
        closure_1 = onPressOut;
        const tmp11 = _objectWithoutProperties(onPressOut, closure_2);
        cResult[0] = onPressOut;
        cResult[1] = activeBackgroundColor;
        cResult[2] = children;
        cResult[3] = onPressIn;
        cResult[4] = onPressOut;
        cResult[5] = pressableStyle;
        cResult[6] = tmp11;
        cResult[7] = style;
        let tmp2 = activeBackgroundColor;
      } else {
        tmp2 = cResult[1];
        closure_0 = cResult[3];
        closure_1 = cResult[4];
      }
      const tmp12 = closure_9();
      [tmp14, closure_2] = noop.useState(false);
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
        class R {
          constructor(arg0) {
            if (closure_1 != null) {
              tmp2 = onPressOut;
              tmpResult = tmp(onPressOut);
            }
            tmp4 = closure_2(false);
            return;
          }
        }
        cResult[10] = tmp5;
        cResult[11] = R;
      } else {
        class R {
          constructor(arg0) {
            if (closure_1 != null) {
              tmp2 = onPressOut;
              tmpResult = tmp(onPressOut);
            }
            tmp4 = closure_2(false);
            return;
          }
        }
      }
      if (cResult[12] === tmp2) {
        class R {
          constructor(arg0) {
            if (closure_1 != null) {
              tmp2 = onPressOut;
              tmpResult = tmp(onPressOut);
            }
            tmp4 = closure_2(false);
            return;
          }
        }
      }
      let tmp17 = tmp14;
      if (tmp14) {
        class R {
          constructor(arg0) {
            if (closure_1 != null) {
              tmp2 = onPressOut;
              tmpResult = tmp(onPressOut);
            }
            tmp4 = closure_2(false);
            return;
          }
        }
        if (tmp2 == null) {
          class R {
            constructor(arg0) {
              if (closure_1 != null) {
                tmp2 = onPressOut;
                tmpResult = tmp(onPressOut);
              }
              tmp4 = closure_2(false);
              return;
            }
          }
        }
        const obj2 = { backgroundColor: tmp2 };
        tmp17 = obj2;
      }
      cResult[12] = tmp2;
      cResult[13] = tmp14;
      cResult[14] = tmp12;
      cResult[15] = tmp17;
      const tmp13 = _slicedToArray(noop.useState(false), 2);
    }
  : function TouchableBackground(onPressOut) {
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
      [tmp4, c2] = noop.useState(false);
      const items = [onPressIn];
      const items1 = [onPressOut];
      const callback = noop.useCallback((arg0) => {
        _undefined(true);
        if (onPressIn != null) {
          tmp2(arg0);
        }
      }, items);
      const obj = { accessibilityRole: "button", style: pressableStyle };
      const callback1 = noop.useCallback((arg0) => {
        if (onPressOut != null) {
          tmp(arg0);
        }
        _undefined(false);
      }, items1);
      const merged1 = Object.assign(merged);
      obj.onPressIn = callback;
      obj.onPressOut = callback1;
      const items2 = [style];
      if (tmp4) {
        if (activeBackgroundColor == null) {
          activeBackgroundColor = tmp2.default.backgroundColor;
        }
        const obj2 = { backgroundColor: activeBackgroundColor };
      }
      items2[1] = tmp4;
      obj.children = <timestampProducer style={items2}>{children}</timestampProducer>;
      return <React5 accessibilityRole="button" style={pressableStyle} />;
    };
