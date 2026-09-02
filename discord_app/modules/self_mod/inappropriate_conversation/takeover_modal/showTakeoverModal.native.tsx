// === Module 17146: showTakeoverModal ===

// Module 17146 (showTakeoverModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10926 */;
import LOCATION_CONTEXT_MOBILE from "LOCATION_CONTEXT_MOBILE" /* 11220 */;

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
    _modDef4723.pushLazy(asyncRequireImpl(15550, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = _modDef4723;
  }
};