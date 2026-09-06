// === Module 11391: SafetyToolsActionCreators ===

// Module 11391 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Constants from "Constants" /* 11363 */;
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
  obj.openLazy(require("asyncRequireImpl")(11392, dependencyMap.paths), tmp, obj);
};