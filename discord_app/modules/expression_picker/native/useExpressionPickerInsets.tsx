// discord_app/modules/expression_picker/native/useExpressionPickerInsets.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const EXPRESSION_FOOTER_HEIGHT = fn(1074).EXPRESSION_FOOTER_HEIGHT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerInsets.tsx");

export default function useExpressionPickerInsets(hasCategories) {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = { safeAreaStyle: null, safeAreaBottomKeyboardAware: null };
  const items = [bottom];
  obj.safeAreaStyle = noop.useMemo(() => ({ paddingBottom: bottom }), items);
  let num = 0;
  if (hasCategories.hasCategories) {
    num = EXPRESSION_FOOTER_HEIGHT;
  }
  const sum =
    useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true, includeCustomKeyboardHeight: false }).insets
      .bottom + num;
  obj.safeAreaBottomKeyboardAware = sum + nativeDefault.space.PX_16;
  return obj;
}
