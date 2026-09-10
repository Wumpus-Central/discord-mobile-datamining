// === Module 10338: useActionSheetStartHeight ===

// Module 10338 (useActionSheetStartHeight)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import ActionSheetConstants from "ActionSheetConstants" /* 7203 */;
import size from "module_2" /* 2 */;

let closure_2 = ActionSheetConstants.ACTION_SHEET_START_HEIGHT_RATIO;
const result = size.fileFinishedImporting("modules/action_sheet/native/useActionSheetStartHeight.tsx");

export default function useActionSheetHeight() {
  return useWindowDimensionsDefault().height * closure_2;
};