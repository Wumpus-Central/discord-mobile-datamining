// === Module 7160: useInputClearButton ===

// Module 7160 (useInputClearButton)
import util from "util" /* 1113 */;
import CircleXIcon from "CircleXIcon" /* 7161 */;
import noop from "module_19" /* 19 */;

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export function useInputClearButton(clearProps, clearState) {
  const clearable = clearProps.clearable;
  const disabled = clearProps.disabled;
  const readOnly = clearProps.readOnly;
  let tmp4;
  if (tmp) {
    if (clearState.hasValue) {
      if (!tmp3) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs", accessible: false }), pressableProps: null };
        const obj2 = { onPress: clearState.clear, disabled: tmp2, accessibilityState: null, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
        const obj3 = { disabled: tmp2 };
        obj2.accessibilityState = obj3;
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.VkKicb);
        obj.pressableProps = obj2;
        tmp4 = obj;
      }
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    const obj4 = {};
    const merged = Object.assign(tmp4.pressableProps);
    obj4.children = tmp4.content;
    tmp9 = <Pressable />;
  }
  return tmp9;
}
export function useInputClearButtonConfig(merged, state) {
  const clearable = merged.clearable;
  const disabled = merged.disabled;
  const readOnly = merged.readOnly;
  if (tmp) {
    if (state.hasValue) {
      if (!tmp3) {
        const obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs", accessible: false }), pressableProps: null };
        const obj2 = { onPress: state.clear, disabled: tmp2, accessibilityState: null, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
        const obj3 = { disabled: tmp2 };
        obj2.accessibilityState = obj3;
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.VkKicb);
        obj.pressableProps = obj2;
        return obj;
      }
    }
  }
  tmp = undefined !== clearable && clearable;
  tmp3 = undefined !== readOnly && readOnly;
}