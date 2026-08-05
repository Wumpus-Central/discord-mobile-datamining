// discord_app/modules/expression_picker/native/openExpressionPickerActionSheet.tsx
import { asyncRequireImpl } from "../../../../_runtime/01959_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl /* asyncRequireImpl */(9841, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};