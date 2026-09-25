// === Module 12806: Loading ===

// Module 12806 (Loading)
import nativeDefault from "native" /* 576 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7370 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

({ LoadingType: closure_0, RowType: closure_1, SeparatorAction: c2 } = RowGeneratorConstants);
let closure_3 = createStyles.createNativeStyleProperties({ loadButtonBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, loadButtonColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, loadingColor: nativeDefault.colors.ICON_SUBTLE });
const result = size.fileFinishedImporting("modules/messages/native/renderer/rows/Loading.tsx");

export const generateLoadingRowData = function generateLoadingRowData(rowType, theme) {
  ({ rowType, isLoading } = rowType);
  ({ changeType, text } = rowType);
  const tmp = closure_3(theme);
  if (rowType === constants.LOAD_BEFORE) {
    let LOAD_MORE_AFTER = constants3.LOAD_MORE_BEFORE;
  } else {
    LOAD_MORE_AFTER = constants3.LOAD_MORE_AFTER;
  }
  const obj = { type: constants2.LOADING, id: rowType, button: { action: { type: LOAD_MORE_AFTER }, backgroundColor: tmp.loadButtonBackgroundColor, cornerRadius: 4, text }, color: isLoading ? tmp.loadingColor : tmp.loadButtonColor, changeType, isLoading };
  return obj;
};