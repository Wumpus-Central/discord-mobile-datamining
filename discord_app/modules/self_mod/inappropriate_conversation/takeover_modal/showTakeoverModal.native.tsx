// === Module 19809: showTakeoverModal ===

// Module 19809 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import Constants from "Constants" /* 11396 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11403 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18048, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
  obj = SelfModInappropriateConversationExperiment;
}