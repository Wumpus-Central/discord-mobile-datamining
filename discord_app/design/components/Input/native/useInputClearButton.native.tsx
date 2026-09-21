// === Module 6857: useInputClearButton ===

// Module 6857 (useInputClearButton)
import util from "util" /* 1115 */;
import CircleXIcon from "CircleXIcon" /* 6858 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export const useInputClearButton = function useInputClearButton(clearProps, clearState) {
  const clearable = clearProps.clearable;
  let tmp;
  if (undefined !== clearable) {
    if (clearable) {
      if (clearState.hasValue) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs" }), pressableProps: null };
        const obj2 = { onPress: clearState.clear, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.VkKicb);
        obj.pressableProps = obj2;
        tmp = obj;
      }
    }
  }
  let tmp6 = null;
  if (null != tmp) {
    const obj3 = {};
    const merged = Object.assign(tmp.pressableProps);
    obj3.children = tmp.content;
    tmp6 = <Pressable />;
  }
  return tmp6;
};
export const useInputClearButtonConfig = function useInputClearButtonConfig(clearable, state) {
  clearable = clearable.clearable;
  if (undefined !== clearable) {
    if (clearable) {
      if (state.hasValue) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs" }), pressableProps: null };
        const obj2 = { onPress: state.clear, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.VkKicb);
        obj.pressableProps = obj2;
        return obj;
      }
    }
  }
};