// === Module 11463: SafetyToolsActionCreators ===

// Module 11463 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import Constants from "Constants" /* 11435 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.getSafetyToolsActionSheetKey;
const result = size.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = closure_3(channelId);
  _require = tmp;
  const obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_0);
    }
  };
  obj.openLazy(require("asyncRequireImpl")(11464, dependencyMap.paths), tmp, obj);
};