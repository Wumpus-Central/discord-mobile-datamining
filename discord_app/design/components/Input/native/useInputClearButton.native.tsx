// discord_app/design/components/Input/native/useInputClearButton.native.tsx
import util from "../../../../intl/index.native.tsx";
import CircleXIcon from "../../Icon/native/redesign/generated/CircleXIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/useInputClearButton.native.tsx");

export const useInputClearButton = function useInputClearButton(clearProps, clearState) {
  let tmp;
  if (clearProps.isClearable) {
    if (clearState.hasValue) {
      let obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs" }), pressableProps: null };
      obj = { onPress: clearState.clear, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.VkKicb);
      obj.pressableProps = obj;
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
      let obj = { content: jsx(CircleXIcon.CircleXIcon, { size: "xs" }), pressableProps: null };
      obj = { onPress: state.clear, accessibilityLabel: null, accessibilityRole: "button", hitSlop: 4 };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.VkKicb);
      obj.pressableProps = obj;
      return obj;
    }
  }
};
