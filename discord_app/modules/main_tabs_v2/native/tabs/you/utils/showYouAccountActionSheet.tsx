// === Module 15697: showYouAccountActionSheet ===

// Module 15697 (showYouAccountActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;
import YOU_SCREEN_ID from "YOU_SCREEN_ID" /* 15698 */;

let closure_3 = YOU_SCREEN_ID.YOU_ACCOUNT_ACTION_SHEET_KEY;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15699, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};