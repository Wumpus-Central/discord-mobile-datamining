// discord_app/modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx
import asyncRequireImpl from "../../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import YouConstants from "../YouConstants.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let closure_3 = YouConstants.YOU_ACCOUNT_ACTION_SHEET_KEY;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16371, dependencyMap.paths), closure_3, {
    statusOnly: flag,
    disableHapticOnOpen: flag2,
  });
};
