// discord_app/modules/premium/native/components/LinkButton.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({
  defaultContainerStyle: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" },
  disabledContainerStyle: { opacity: 0.5 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/components/LinkButton.tsx");

export const LinkButton = function LinkButton(textColor) {
  ({ disabled, variant } = textColor);
  ({ onPress, text, containerStyle, textStyle } = textColor);
  if (variant === undefined) {
    variant = "text-xs/medium";
  }
  let str = textColor.textColor;
  if (str === undefined) {
    str = "text-link";
  }
  const tmp = closure_4();
  const items = [tmp.defaultContainerStyle, ,];
  let disabledContainerStyle = disabled;
  if (disabled) {
    disabledContainerStyle = tmp.disabledContainerStyle;
  }
  const obj = {
    style: items,
    hitSlop: { top: 8, right: 8, bottom: 8 },
    accessibilityRole: "button",
    activeOpacity: 0.2,
    disabled,
    onPress,
    children: null,
  };
  items[1] = disabledContainerStyle;
  items[2] = containerStyle;
  const items1 = [
    React2(Text_Text.Text, { style: textStyle, variant, color: str, children: text }),
    textColor.iconRight,
  ];
  obj.children = items1;
  return React3(Pressables.PressableOpacity, obj);
};
