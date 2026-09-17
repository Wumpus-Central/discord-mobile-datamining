// === Module 10438: useExpressionPickerListWidth ===

// Module 10438 (useExpressionPickerListWidth)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7265 */;
import size from "module_2" /* 2 */;

const PADDING_HORIZONTAL = ExpressionPickerConstants.PADDING_HORIZONTAL;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

export default function useExpressionPickerListWidth(arg0) {
  const rect = useSafeAreaInsetsDefault();
  const diff = useWindowDimensionsDefault().width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};