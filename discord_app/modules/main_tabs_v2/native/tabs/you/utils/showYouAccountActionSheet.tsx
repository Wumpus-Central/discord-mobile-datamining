// === Module 15629: showYouAccountActionSheet ===

// Module 15629 (showYouAccountActionSheet)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import YOU_SCREEN_ID from "YOU_SCREEN_ID" /* 15630 */;

let closure_3 = YOU_SCREEN_ID.YOU_ACCOUNT_ACTION_SHEET_KEY;
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15631, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};