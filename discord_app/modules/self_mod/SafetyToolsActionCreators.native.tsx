// === Module 10604: openSafetyToolsActionSheet ===

// Module 10604 (openSafetyToolsActionSheet)
import obj132 from "obj132" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 10569 */;

let closure_3 = LOCATION_CONTEXT_MOBILE.getSafetyToolsActionSheetKey;
const result = obj132.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const _require = tmp;
  const obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(closure_0);
    }
  };
  obj.openLazy(_require(2007)(10605, dependencyMap.paths), tmp, obj);
};