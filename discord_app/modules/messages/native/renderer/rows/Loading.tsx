// discord_app/modules/messages/native/renderer/rows/Loading.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Changeset from "../RowGeneratorConstants.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

({ LoadingType: c0, RowType: closure_1, SeparatorAction: obj1 } = Changeset);
let closure_3 = createCacheKey.createNativeStyleProperties({
  loadButtonBackgroundColor: ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  loadButtonColor: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  loadingColor: ThemesDefault.colors.ICON_SUBTLE,
});
let obj = {
  loadButtonBackgroundColor: ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  loadButtonColor: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  loadingColor: ThemesDefault.colors.ICON_SUBTLE,
};
const result = set.fileFinishedImporting("modules/messages/native/renderer/rows/Loading.tsx");

export const generateLoadingRowData = function generateLoadingRowData(rowType, theme) {
  ({ rowType, isLoading } = rowType);
  ({ changeType, text } = rowType);
  const tmp = callback(theme);
  if (rowType === constants.LOAD_BEFORE) {
    let LOAD_MORE_AFTER = constants3.LOAD_MORE_BEFORE;
  } else {
    LOAD_MORE_AFTER = constants3.LOAD_MORE_AFTER;
  }
  obj = {
    type: constants2.LOADING,
    id: rowType,
    button: obj,
    color: isLoading ? tmp.loadingColor : tmp.loadButtonColor,
    changeType,
    isLoading,
  };
  obj = { action: { type: LOAD_MORE_AFTER }, backgroundColor: tmp.loadButtonBackgroundColor, cornerRadius: 4, text };
  return obj;
};
