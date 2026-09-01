// === Module 10354: useExpressionPickerInsets ===

// Module 10354 (useExpressionPickerInsets)
import closure_2 from "noop" /* 19 */;
import { EXPRESSION_FOOTER_HEIGHT } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  let bottom;
  bottom = bottom(1628)().bottom;
  const obj = { safeAreaStyle: React.useMemo(() => ({ paddingBottom: bottom }), items), safeAreaBottomKeyboardAware: null };
  items = [bottom];
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = bottom(5594)({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj[1] = sum + bottom(712).space.PX_16;
  return obj;
};