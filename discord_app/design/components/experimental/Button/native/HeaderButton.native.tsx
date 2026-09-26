// discord_app/design/components/experimental/Button/native/HeaderButton.native.tsx
import BaseTextButton from "../../../Button/native/BaseTextButton.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
class HeaderButton {
  constructor(arg0) {
    tmp = closure_4();
    obj = { accessibilityRole: "header" };
    merged = Object.assign(global);
    obj.pillStyle = tmp.pill;
    obj.size = "sm";
    obj.textVariant = c3;
    obj.variant = "secondary-overlay";
    return jsx(closure_0(closure_1[5]).BaseTextButton, obj);
  }
}
const jsx = fn(21).jsx;
const React3 = "heading-md/bold";
const diff = fn(5286).SMALL_BUTTON_HEIGHT - 2 * fn(5286).BUTTON_BORDER_WIDTH;
const diff1 = diff - fn(4832).TextStyleSheet["heading-md/bold"].lineHeight;
const createStyles = fn(4836);
const React4 = createStyles.createStyles({ pill: { paddingVertical: diff1 / 2 } });
HeaderButton.Icon = fn(5282).BaseTextButton.Icon;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };
