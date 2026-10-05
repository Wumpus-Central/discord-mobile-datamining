// discord_app/design/components/experimental/Button/native/HeaderButton.native.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import Text_Text from "../../../Text/native/Text.tsx";
import BaseTextButton2 from "../../../Button/native/BaseTextButton.native.tsx";
import ButtonConstants from "../../../Button/native/ButtonConstants.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import createStyles from "../../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
let c3 = "heading-md/bold";
const diff = ButtonConstants.SMALL_BUTTON_HEIGHT - 2 * ButtonConstants.BUTTON_BORDER_WIDTH;
const diff1 = diff - Text_Text.TextStyleSheet["heading-md/bold"].lineHeight;
let obj = { pill: { paddingVertical: diff1 / 2 } };
let closure_4 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
      const tmp7 = (
        <BaseTextButton
          accessibilityRole="header"
          pillStyle={tmp4.pill}
          size="sm"
          textVariant={textVariant}
          variant="secondary-overlay"
        />
      );
      cResult[0] = arg0;
      cResult[1] = tmp4.pill;
      cResult[2] = tmp7;
      tmp5 = tmp7;
    }
  : (arg0) => {
      const tmp = closure_4();
      const BaseTextButton = BaseTextButton2.BaseTextButton;
      const merged = Object.assign(arg0);
      return (
        <BaseTextButton
          accessibilityRole="header"
          pillStyle={tmp.pill}
          size="sm"
          textVariant={textVariant}
          variant="secondary-overlay"
        />
      );
    };
tmp5.Icon = BaseTextButton2.BaseTextButton.Icon;
const result = size.fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export const HeaderButton = tmp5;
