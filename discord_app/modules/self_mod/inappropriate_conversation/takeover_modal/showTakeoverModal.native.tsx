// === Module 16823: showTakeoverModal ===

// Module 16823 (showTakeoverModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10625 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 10920 */;

const TAKEOVER_MODAL_KEY = LOCATION_CONTEXT_MOBILE.TAKEOVER_MODAL_KEY;
const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = InappropriateConversationExperiment;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    _modDef4676.pushLazy(asyncRequireImpl(15413, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = _modDef4676;
  }
};