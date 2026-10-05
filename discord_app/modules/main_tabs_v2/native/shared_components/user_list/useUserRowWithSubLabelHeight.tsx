// === Module 16937: useUserRowWithSubLabelHeight ===

// Module 16937 (useUserRowWithSubLabelHeight)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import useFontScale from "useFontScale" /* 5602 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10723 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import ActionStatusSubLabel from "ActionStatusSubLabel" /* 16382 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getUserRowWithSubLabelHeight(rowHeight) {
  return Math.max(rowHeight.rowHeight, 2 * rowHeight.rowPadding + rowHeight.labelLineHeight + rowHeight.subLabelLines * rowHeight.subLabelLineHeight);
}
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/useUserRowWithSubLabelHeight.tsx");

export { getUserRowWithSubLabelHeight };
export const useUserRowWithSubLabelHeight = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  let num = 1;
  if (undefined !== arg0) {
    num = arg0;
  }
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const tmpResult = useToken;
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const tmpResult4 = useToken;
  const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight("text-md/semibold");
  const tmpResult5 = useScaledTextLineHeight;
  const fontScale = useFontScale.useFontScale();
  const result = ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale;
  if (cResult[0] === scaledTextLineHeight) {
    if (cResult[1] === token) {
      if (cResult[2] === token1) {
        if (cResult[3] === result) {
          if (cResult[4] === num) {
            let tmp10 = cResult[5];
          }
          return tmp10;
        }
      }
    }
  }
  const tmpResult6 = useFontScale;
  const tmp4ResultResult = roundToNearestPixelDefault(Math.max(token, 2 * token1 + scaledTextLineHeight + num * result));
  cResult[0] = scaledTextLineHeight;
  cResult[1] = token;
  cResult[2] = token1;
  cResult[3] = result;
  cResult[4] = num;
  cResult[5] = tmp4ResultResult;
  tmp10 = tmp4ResultResult;
  const tmp4Result = roundToNearestPixelDefault;
}) : (() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 1;
  }
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_HEIGHT);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight("text-md/semibold");
  const fontScale = useFontScale.useFontScale();
  return roundToNearestPixelDefault(Math.max(token, 2 * token1 + scaledTextLineHeight + num * (ActionStatusSubLabel.ACTION_STATUS_SUB_LABEL_LINE_HEIGHT * fontScale)));
});