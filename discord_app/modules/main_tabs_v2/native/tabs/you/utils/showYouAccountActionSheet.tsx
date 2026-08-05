// discord_app/modules/main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx
import { YOU_ACCOUNT_ACTION_SHEET_KEY as closure_3 } from "YOU_SCREEN_ID";

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
  require("../../../../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(require("../../../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(15364, dependencyMap.paths), closure_3, { statusOnly: flag, disableHapticOnOpen: flag2 });
};