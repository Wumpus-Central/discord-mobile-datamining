// discord_app/modules/expression_picker/native/openExpressionPickerActionSheet.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = set.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10286, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};