// === Module 9895: useExpressionPickerListWidth ===

// Module 9895 (useExpressionPickerListWidth)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6646 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PADDING_HORIZONTAL = ExpressionPickerConstants.PADDING_HORIZONTAL;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const rect = useSafeAreaInsetsDefault();
  const diff = useWindowDimensionsDefault().width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
}) : ((arg0) => {
  const rect = useSafeAreaInsetsDefault();
  const diff = useWindowDimensionsDefault().width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
});