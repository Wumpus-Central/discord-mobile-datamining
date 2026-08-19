// === Module 16545: showTakeoverModal ===

// Module 16545 (showTakeoverModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 10569 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10576 */;

const TAKEOVER_MODAL_KEY = LOCATION_CONTEXT_MOBILE.TAKEOVER_MODAL_KEY;
const result = obj132.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = InappropriateConversationExperiment;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    _modDef5260.pushLazy(asyncRequireImpl(15175, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
  }
};