// discord_app/modules/expression_picker/native/openExpressionPickerActionSheet.tsx
const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  require("../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(9841, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};