import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";
// discord_app/modules/expression_picker/native/useExpressionPickerListWidth.native.tsx
import { PADDING_HORIZONTAL } from "ExpressionPickerViewType";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";

const result = require("useWindowDimensions").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

export default function useExpressionPickerListWidth(arg0) {
  const rect = useSafeAreaInsets();
  const diff = useWindowDimensions().width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};