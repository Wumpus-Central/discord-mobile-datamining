// === Module 18328: showYouAccountActionSheet ===

// Module 18328 (showYouAccountActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import YouConstants from "YouConstants" /* 18329 */;
import size from "module_2" /* 2 */;

let closure_3 = YouConstants.YOU_ACCOUNT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18330, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
}