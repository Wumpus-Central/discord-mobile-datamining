// === Module 9187: Button/HeaderButton ===

// Module 9187 (Button/HeaderButton)
import BaseTextButton from "BaseTextButton" /* 5187 */;
import noop from "module_19" /* 19 */;

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
const diff = fn(5191).SMALL_BUTTON_HEIGHT - 2 * fn(5191).BUTTON_BORDER_WIDTH;
const diff1 = diff - fn(4752).TextStyleSheet["heading-md/bold"].lineHeight;
const createStyles = fn(4756);
const React4 = createStyles.createStyles({ pill: { paddingVertical: diff1 / 2 } });
HeaderButton.Icon = fn(5187).BaseTextButton.Icon;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };