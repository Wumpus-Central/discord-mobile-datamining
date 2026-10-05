// discord_app/design/utils/native/useFocus.native.tsx
import react2 from "../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_129_0;
      let first;
      let tmp3;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(3);
      [tmp3, closure_129_0] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          onFocus() {
            return closure_1_0(true);
          },
          onBlur() {
            return closure_1_0(false);
          },
        };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3) {
        const obj3 = { focusProps: first, isFocused: tmp3 };
        cResult[1] = tmp3;
        cResult[2] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : () => {
      const tmp = _slicedToArray(react.useState(false), 2);
      let closure_0 = tmp[1];
      const obj = {
        focusProps: react.useMemo(
          () => ({
            onFocus() {
              return closure_1_0(true);
            },
            onBlur() {
              return closure_1_0(false);
            },
          }),
          [],
        ),
        isFocused: tmp[0],
      };
      return obj;
    };
const result = size.fileFinishedImporting("design/utils/native/useFocus.native.tsx");

export const useFocus = tmp2;
