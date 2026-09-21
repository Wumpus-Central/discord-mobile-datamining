// === Module 17234: useUserRowWithSubLabelHeight ===

// Module 17234 (useUserRowWithSubLabelHeight)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4457 */;
import useFontScale from "useFontScale" /* 5193 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10375 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11259 */;
import ActionStatusSubLabel from "ActionStatusSubLabel" /* 16781 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserRowWithSubLabelHeight.tsx");

export const getUserRowWithSubLabelHeight = function getUserRowWithSubLabelHeight(rowHeight) {
  return Math.max(rowHeight.rowHeight, 2 * rowHeight.rowPadding + rowHeight.labelLineHeight + rowHeight.subLabelLines * rowHeight.subLabelLineHeight);
};
export const useUserRowWithSubLabelHeight = function useUserRowWithSubLabelHeight(arg0) {
  let num = arg0;
  if (arg0 === undefined) {
    num = 1;
  }
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight("text-md/semibold");
  const fontScale = useFontScale.useFontScale();
  return roundToNearestPixelDefault(Math.max(token, 2 * token1 + scaledTextLineHeight + num * (ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale)));
};