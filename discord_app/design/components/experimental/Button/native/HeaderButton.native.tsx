// === Module 8905: Button/HeaderButton ===

// Module 8905 (Button/HeaderButton)
import BaseTextButton from "BaseTextButton" /* 4976 */;
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
const diff = fn(4980).SMALL_BUTTON_HEIGHT - 2 * fn(4980).BUTTON_BORDER_WIDTH;
const diff1 = diff - fn(4556).TextStyleSheet["heading-md/bold"].lineHeight;
fn(4560);
const createStyles = { pill: { paddingVertical: diff1 / 2 } };
const React4 = createStyles.createStyles(createStyles);
HeaderButton.Icon = fn(4976).BaseTextButton.Icon;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };