// === Module 8570: Button/HeaderButton ===

// Module 8570 (Button/HeaderButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import BaseTextButton2 from "BaseTextButton" /* 5595 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let c3 = "heading-md/bold";
const diff = ButtonConstants.SMALL_BUTTON_HEIGHT - 2 * ButtonConstants.BUTTON_BORDER_WIDTH;
const diff1 = diff - Text_Text.TextStyleSheet["heading-md/bold"].lineHeight;
let obj = { pill: { paddingVertical: diff1 / 2 } };
let closure_4 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_4();
  if (cResult[0] === arg0) {
    let tmp5;
    if (cResult[1] === tmp4.pill) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  const merged = Object.assign(arg0);
  const tmp7 = <BaseTextButton accessibilityRole="header" pillStyle={tmp4.pill} size="sm" textVariant={textVariant} variant="secondary-overlay" />;
  cResult[0] = arg0;
  cResult[1] = tmp4.pill;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : ((arg0) => {
  const tmp = closure_4();
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  const merged = Object.assign(arg0);
  return <BaseTextButton accessibilityRole="header" pillStyle={tmp.pill} size="sm" textVariant={textVariant} variant="secondary-overlay" />;
});
tmp5.Icon = BaseTextButton2.BaseTextButton.Icon;
const result = size.fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export const HeaderButton = tmp5;