// === Module 10370: EXPRESSION_PICKER_ACTION_SHEET_KEY ===

// Module 10370 (EXPRESSION_PICKER_ACTION_SHEET_KEY)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const ExpressionPickerActionSheet = "ExpressionPickerActionSheet";
const result = set.fileFinishedImporting("modules/expression_picker/native/openExpressionPickerActionSheet.tsx");

export const EXPRESSION_PICKER_ACTION_SHEET_KEY = "ExpressionPickerActionSheet";
export const openExpressionPickerActionSheet = function openExpressionPickerActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10371, dependencyMap.paths), ExpressionPickerActionSheet, arg0);
};