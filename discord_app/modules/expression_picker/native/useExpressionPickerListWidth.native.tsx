// discord_app/modules/expression_picker/native/useExpressionPickerListWidth.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ExpressionPickerViewType from "../ExpressionPickerConstants.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ACTION_SHEET_START_HEIGHT_RATIO from "../../action_sheet/native/ActionSheetConstants.tsx";

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