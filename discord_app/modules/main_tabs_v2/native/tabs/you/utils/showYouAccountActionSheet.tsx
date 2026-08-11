// discord_app/modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx
import { YOU_ACCOUNT_ACTION_SHEET_KEY as closure_3 } from "YOU_SCREEN_ID";
import { asyncRequireImpl } from "../../../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../../../action_sheet/native/ActionSheetActionCreators.tsx";

const result = require("YouStatusRadioGroup").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx");

export const showYouAccountActionSheet = function showYouAccountActionSheet() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let flag2 = arg1;
  if (arg1 === undefined) {
    flag2 = true;
  }
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(15507, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};