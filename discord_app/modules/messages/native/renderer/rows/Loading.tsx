// === Module 12801: generateLoadingRowData ===

// Module 12801 (generateLoadingRowData)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import Changeset from "Changeset" /* 8158 */;
import createCacheKey from "createCacheKey" /* 4661 */;

({ LoadingType: c0, RowType: closure_1, SeparatorAction: obj1 } = Changeset);
let closure_3 = createCacheKey.createNativeStyleProperties({ loadButtonBackgroundColor: ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, loadButtonColor: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, loadingColor: ThemesDefault.colors.ICON_SUBTLE });
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/rows/Loading.tsx");

export const generateLoadingRowData = function generateLoadingRowData(rowType, theme) {
  ({ rowType, isLoading } = rowType);
  ({ changeType, text } = rowType);
  const tmp = callback(theme);
  if (rowType === constants.LOAD_BEFORE) {
    let LOAD_MORE_AFTER = constants3.LOAD_MORE_BEFORE;
  } else {
    LOAD_MORE_AFTER = constants3.LOAD_MORE_AFTER;
  }
  const obj = { action: { type: LOAD_MORE_AFTER }, backgroundColor: tmp.loadButtonBackgroundColor, cornerRadius: 4, text };
  return obj;
};