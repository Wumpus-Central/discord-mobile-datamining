// === Module 8570: Button/HeaderButton ===

// Module 8570 (Button/HeaderButton)
import c from "c" /* 576 */;
import BaseTextButton from "BaseTextButton" /* 5595 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c3 = "heading-md/bold";
const diff = fn(5600).SMALL_BUTTON_HEIGHT - 2 * fn(5600).BUTTON_BORDER_WIDTH;
const diff1 = diff - fn(4886).TextStyleSheet["heading-md/bold"].lineHeight;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles({ pill: { paddingVertical: diff1 / 2 } });
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp4.pill) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { accessibilityRole: "header" };
  const merged = Object.assign(arg0);
  obj2.pillStyle = tmp4.pill;
  obj2.size = "sm";
  obj2.textVariant = textVariant;
  obj2.variant = "secondary-overlay";
  const tmp7 = jsx(BaseTextButton.BaseTextButton, { accessibilityRole: "header" });
  cResult[0] = arg0;
  cResult[1] = tmp4.pill;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : ((arg0) => {
  const obj = { accessibilityRole: "header" };
  const merged = Object.assign(arg0);
  obj.pillStyle = closure_4().pill;
  obj.size = "sm";
  obj.textVariant = textVariant;
  obj.variant = "secondary-overlay";
  return jsx(BaseTextButton.BaseTextButton, { accessibilityRole: "header" });
});
tmp5.Icon = fn(5595).BaseTextButton.Icon;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export const HeaderButton = tmp5;