// === Module 9731: useExpressionPickerInsets ===

// Module 9731 (useExpressionPickerInsets)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6664 */;
import noop from "module_19" /* 19 */;

require = fn;
const EXPRESSION_FOOTER_HEIGHT = fn(1085).EXPRESSION_FOOTER_HEIGHT;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useExpressionPickerInsets(hasCategories) {
  const cResult = c.c(6);
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true, includeCustomKeyboardHeight: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== bottom) {
    const obj3 = { paddingBottom: bottom };
    cResult[1] = bottom;
    cResult[2] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[2];
  }
  let num4 = 0;
  if (hasCategories.hasCategories) {
    num4 = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom + num4;
  const sum1 = sum + nativeDefault.space.PX_16;
  if (cResult[3] === tmp5) {
    if (cResult[4] === sum1) {
      let tmp8 = cResult[5];
    }
    return tmp8;
  }
  const obj4 = { safeAreaStyle: tmp5, safeAreaBottomKeyboardAware: sum1 };
  cResult[3] = tmp5;
  cResult[4] = sum1;
  cResult[5] = obj4;
  tmp8 = obj4;
}) : (function useExpressionPickerInsets(hasCategories) {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = { safeAreaStyle: null, safeAreaBottomKeyboardAware: null };
  const items = [bottom];
  obj.safeAreaStyle = noop.useMemo(() => ({ paddingBottom: bottom }), items);
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets.bottom + num;
  obj.safeAreaBottomKeyboardAware = sum + nativeDefault.space.PX_16;
  return obj;
});