// discord_app/modules/expression_picker/native/useExpressionPickerInsets.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";
import { EXPRESSION_FOOTER_HEIGHT } from "../../../Constants.tsx";

const result = require("set").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  let bottom;
  bottom = bottom(1611)().bottom;
  const obj = {
    safeAreaStyle: React.useMemo(() => ({ paddingBottom: bottom }), items),
    safeAreaBottomKeyboardAware: null,
  };
  items = [bottom];
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = bottom(6981)({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj[1] = sum + bottom(576).space.PX_16;
  return obj;
}
