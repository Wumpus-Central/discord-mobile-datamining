// === Module 9342: useExpressionPickerListWidth ===

// Module 9342 (useExpressionPickerListWidth)
import obj132 from "obj132" /* 2 */;
import ExpressionPickerViewType from "ExpressionPickerViewType" /* 1338 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 6951 */;

const PADDING_HORIZONTAL = ExpressionPickerViewType.PADDING_HORIZONTAL;
const ACTION_SHEET_MAX_WIDTH = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_MAX_WIDTH;
const result = obj132.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

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