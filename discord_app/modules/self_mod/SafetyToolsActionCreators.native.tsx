// === Module 11423: SafetyToolsActionCreators ===

// Module 11423 (SafetyToolsActionCreators)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import Constants from "Constants" /* 11395 */;
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
  obj.openLazy(require("asyncRequireImpl")(11424, dependencyMap.paths), tmp, obj);
};