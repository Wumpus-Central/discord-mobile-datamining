// === Module 10185: EXPRESSION_PICKER_ACTION_SHEET_KEY ===

// Module 10185 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = obj132.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10186, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};