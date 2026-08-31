// === Module 6192: useInputClearButton ===

// Module 6192 (useInputClearButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CircleXIcon from "CircleXIcon" /* 6193 */;
import { Pressable } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export const useInputClearButton = function useInputClearButton(clearProps, clearState) {
  let tmp;
  if (clearProps.isClearable) {
    if (clearState.hasValue) {
      let obj = { content: null, pressableProps: null };
      obj[0] = jsx(CircleXIcon.CircleXIcon, { size: "xs" });
      obj = { onPress: null, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
      obj[0] = clearState.clear;
      const intl = getSystemLocale.intl;
      obj[1] = intl.string(getSystemLocale.t.VkKicb);
      obj[1] = obj;
      tmp = obj;
    }
  }
  let tmp6 = null;
  if (null != tmp) {
    obj = {};
    const merged = Object.assign(tmp.pressableProps);
    obj.children = tmp.content;
    tmp6 = <Pressable />;
  }
  return tmp6;
};
export const useInputClearButtonConfig = function useInputClearButtonConfig(isClearable, state) {
  if (isClearable.isClearable) {
    if (state.hasValue) {
      let obj = { content: null, pressableProps: null };
      obj[0] = jsx(CircleXIcon.CircleXIcon, { size: "xs" });
      obj = { onPress: null, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
      obj[0] = state.clear;
      const intl = getSystemLocale.intl;
      obj[1] = intl.string(getSystemLocale.t.VkKicb);
      obj[1] = obj;
      return obj;
    }
  }
};