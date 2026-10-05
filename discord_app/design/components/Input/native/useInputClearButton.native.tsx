// discord_app/design/components/Input/native/useInputClearButton.native.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import CircleXIcon from "../../Icon/native/redesign/generated/CircleXIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let clearable;

const Pressable = react_native.Pressable;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const obj = react2;
      const cResult = obj.c(3);
      const tmp2 = closure_4(arg0, arg1);
      let tmp3 = null;
      if (null != tmp2) {
        if (cResult[0] === tmp2.content) {
          let tmp4;
          if (cResult[1] === tmp2.pressableProps) {
            tmp4 = cResult[2];
          }
          tmp3 = tmp4;
        }
        const merged = Object.assign(tmp2.pressableProps);
        const tmp9 = <Pressable>{tmp2.content}</Pressable>;
        cResult[0] = tmp2.content;
        cResult[1] = tmp2.pressableProps;
        cResult[2] = tmp9;
        tmp4 = tmp9;
      }
      return tmp3;
    }
  : (arg0, arg1) => {
      const tmp = closure_4(arg0, arg1);
      let tmp2 = null;
      if (null != tmp) {
        const merged = Object.assign(tmp.pressableProps);
        tmp2 = <Pressable>{tmp.content}</Pressable>;
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (clearable, hasValue) => {
      const obj = react2;
      const cResult = obj.c(6);
      clearable = clearable.clearable;
      if (undefined !== clearable) {
        if (clearable) {
          if (hasValue.hasValue) {
            let first;
            let tmp9;
            let tmp11;
            let tmp12;
            const _Symbol = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp8 = jsx(CircleXIcon.CircleXIcon, { size: "xs" });
              cResult[0] = tmp8;
              first = tmp8;
            } else {
              first = cResult[0];
            }
            const _Symbol2 = Symbol;
            const clear = hasValue.clear;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = intl2.intl;
              const stringResult = intl.string(intl2.t.VkKicb);
              cResult[1] = stringResult;
              tmp9 = stringResult;
            } else {
              tmp9 = cResult[1];
            }
            if (cResult[2] !== hasValue.clear) {
              const obj2 = { onPress: clear, accessibilityLabel: tmp9, accessibilityRole: "button", hitSlop: 4 };
              cResult[2] = hasValue.clear;
              cResult[3] = obj2;
              tmp11 = obj2;
            } else {
              tmp11 = cResult[3];
            }
            if (cResult[4] !== tmp11) {
              const obj3 = { content: first, pressableProps: tmp11 };
              cResult[4] = tmp11;
              cResult[5] = obj3;
              tmp12 = obj3;
            } else {
              tmp12 = cResult[5];
            }
            return tmp12;
          }
        }
      }
    }
  : (clearable, hasValue) => {
      let intl;
      let obj2;
      clearable = clearable.clearable;
      if (undefined !== clearable) {
        if (clearable) {
          if (hasValue.hasValue) {
            const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs" }), pressableProps: obj2 };
            obj2 = {
              onPress: hasValue.clear,
              accessibilityLabel: intl.string(intl2.t.VkKicb),
              accessibilityRole: "button",
              hitSlop: 4,
            };
            intl = intl2.intl;
            return obj;
          }
        }
      }
    };
let closure_4 = tmp4;
const result = size.fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export const useInputClearButton = tmp3;
export const useInputClearButtonConfig = tmp4;
