// discord_app/design/components/Button/native/IconButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import Button_BaseButton from "BaseButton.native.tsx";
import BaseIconButton from "BaseIconButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let closure_5 = createStyles.createStyles((arg0) => {
  const labelPressable = {
    paddingBottom: nativeDefault.space.PX_4,
    gap: nativeDefault.space.PX_8,
    alignItems: "center",
    alignSelf: "center",
    flexGrow: null,
  };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  labelPressable.flexGrow = num;
  return { labelPressable, label: { textAlign: "center" } };
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/IconButton.native.tsx");

export const IconButton = noop.forwardRef((grow, ref) => {
  ({ label, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint } = grow);
  const merged = Object.assign(
    grow,
    Object.assign({ label: 0, grow: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, accessibilityHint: 0 }),
  );
  const tmp2 = closure_5(grow.grow);
  if (null != label) {
    const obj2 = { style: tmp2.labelPressable };
    const merged1 = Object.assign(merged);
    obj2.variant = "none";
    obj2.accessibilityLabel = accessibilityLabel;
    obj2.accessibilityHint = accessibilityHint;
    const obj3 = { ref };
    const merged2 = Object.assign(merged);
    obj3.accessibilityRole = "none";
    obj3.accessibilityLabel = "";
    obj3.size = "lg";
    obj3.maxFontSizeMultiplier = maxFontSizeMultiplier;
    const items = [React3(BaseIconButton.BaseIconButton, obj3)];
    const obj4 = {
      style: tmp2.label,
      variant: "text-xs/medium",
      color: "interactive-text-default",
      maxFontSizeMultiplier,
      children: label,
    };
    items[1] = React3(Text_Text.Text, obj4);
    obj2.children = items;
    let tmp9 = React4(Button_BaseButton.BaseButton, obj2);
  } else {
    const obj = { ref };
    const merged3 = Object.assign(merged);
    obj.accessibilityLabel = accessibilityLabel;
    obj.accessibilityHint = accessibilityHint;
    obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
    tmp9 = React3(BaseIconButton.BaseIconButton, obj);
  }
  return tmp9;
});
