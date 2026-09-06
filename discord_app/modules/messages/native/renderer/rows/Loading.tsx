// discord_app/modules/messages/native/renderer/rows/Loading.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import RowGeneratorConstants from "../RowGeneratorConstants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

({ LoadingType: closure_0, RowType: closure_1, SeparatorAction: c2 } = RowGeneratorConstants);
let closure_3 = createStyles.createNativeStyleProperties({
  loadButtonBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  loadButtonColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT,
  loadingColor: nativeDefault.colors.ICON_SUBTLE,
});
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
  let obj = {
    type: constants2.LOADING,
    id: rowType,
    button: null,
    color: isLoading ? tmp.loadingColor : tmp.loadButtonColor,
    changeType,
    isLoading,
  };
  obj = { action: { type: LOAD_MORE_AFTER }, backgroundColor: tmp.loadButtonBackgroundColor, cornerRadius: 4, text };
  obj.button = obj;
  return obj;
};
