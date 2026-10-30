// discord_app/modules/expression_picker/native/useExpressionPickerListWidth.native.tsx
import ExpressionPickerConstants from "../ExpressionPickerConstants.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
