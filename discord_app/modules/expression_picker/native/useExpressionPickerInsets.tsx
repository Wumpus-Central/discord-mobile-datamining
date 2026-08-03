import noop from "noop";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";

const result = require("useSafeAreaInsets").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  let bottom;
  bottom = bottom(1581)().bottom;
  const obj = { safeAreaStyle: null, safeAreaBottomKeyboardAware: null };
  const items = [bottom];
  obj[0] = React.useMemo(() => ({ paddingBottom: bottom }), items);
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = bottom(5281)({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj[1] = sum + bottom(712).space.PX_16;
  return obj;
};