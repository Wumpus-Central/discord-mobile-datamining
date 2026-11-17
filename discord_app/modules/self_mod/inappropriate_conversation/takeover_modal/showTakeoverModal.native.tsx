// === Module 20199: showTakeoverModal ===

// Module 20199 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import Constants from "Constants" /* 12024 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 12032 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(18373, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
  obj = SelfModInappropriateConversationExperiment;
}