// discord_app/modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx
import set from "../../../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../../../_runtime/02009_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import YOU_SCREEN_ID from "../YouConstants.tsx";

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
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(15962, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};