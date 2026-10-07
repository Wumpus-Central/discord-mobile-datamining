// === Module 6109: useInputClearButton ===

// Module 6109 (useInputClearButton)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import CircleXIcon from "CircleXIcon" /* 4803 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((clearable, hasValue) => {
  const cResult = c.c(6);
  clearable = clearable.clearable;
  if (undefined !== clearable) {
    if (clearable) {
      if (hasValue.hasValue) {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = jsx(CircleXIcon.CircleXIcon, { size: "xs" });
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        const _Symbol2 = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.VkKicb);
          cResult[1] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== hasValue.clear) {
          const obj2 = { onPress: hasValue.clear, accessibilityLabel: tmp9, accessibilityRole: "button", hitSlop: 4 };
          cResult[2] = hasValue.clear;
          cResult[3] = obj2;
          let tmp11 = obj2;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== tmp11) {
          const obj3 = { content: first, pressableProps: tmp11 };
          cResult[4] = tmp11;
          cResult[5] = obj3;
          let tmp12 = obj3;
        } else {
          tmp12 = cResult[5];
        }
        return tmp12;
      }
    }
  }
}) : ((clearable, hasValue) => {
  clearable = clearable.clearable;
  if (undefined !== clearable) {
    if (clearable) {
      if (hasValue.hasValue) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs" }), pressableProps: null };
        const obj2 = { onPress: hasValue.clear, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.VkKicb);
        obj.pressableProps = obj2;
        return obj;
      }
    }
  }
});
let closure_4 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export const useInputClearButton = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(3);
  pressableProps = closure_4(arg0, arg1);
  if (null == pressableProps) {
    return null;
  } else {
    if (cResult[0] === pressableProps.content) {
    }
    const obj2 = {};
    const merged = Object.assign(pressableProps.pressableProps);
    obj2.children = pressableProps.content;
    const tmp7 = <Pressable />;
    ({ content: tmp[0], pressableProps } = pressableProps);
    cResult[1] = pressableProps;
    cResult[2] = tmp7;
  }
}) : ((arg0, arg1) => {
  const tmp = closure_4(arg0, arg1);
  let tmp2 = null;
  if (null != tmp) {
    const obj = {};
    const merged = Object.assign(tmp.pressableProps);
    obj.children = tmp.content;
    tmp2 = <Pressable />;
  }
  return tmp2;
});
export const useInputClearButtonConfig = tmp4;