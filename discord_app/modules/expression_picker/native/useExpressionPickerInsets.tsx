// === Module 10086: useExpressionPickerInsets ===

// Module 10086 (useExpressionPickerInsets)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasCategories;

const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasCategories) => {
  let first;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  hasCategories = hasCategories.hasCategories;
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true, includeCustomKeyboardHeight: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const bottom2 = useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom;
  if (cResult[1] !== bottom) {
    const obj3 = { paddingBottom: bottom };
    cResult[1] = bottom;
    cResult[2] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[2];
  }
  let num4 = 0;
  if (hasCategories) {
    num4 = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = bottom2 + num4;
  const sum1 = sum + nativeDefault.space.PX_16;
  if (cResult[3] === tmp5) {
    let tmp8;
    if (cResult[4] === sum1) {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  const obj4 = { safeAreaStyle: tmp5, safeAreaBottomKeyboardAware: sum1 };
  cResult[3] = tmp5;
  cResult[4] = sum1;
  cResult[5] = obj4;
  tmp8 = obj4;
}) : ((hasCategories) => {
  let items;
  let sum;
  hasCategories = hasCategories.hasCategories;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = { safeAreaStyle: react.useMemo(() => ({ paddingBottom: bottom }), items), safeAreaBottomKeyboardAware: sum + nativeDefault.space.PX_16 };
  items = [bottom];
  const bottom2 = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom;
  let num = 0;
  if (hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  sum = bottom2 + num;
  return obj;
});
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default tmp2;