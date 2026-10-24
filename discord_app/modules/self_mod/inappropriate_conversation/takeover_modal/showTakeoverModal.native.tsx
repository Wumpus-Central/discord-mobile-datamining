// === Module 18761: showTakeoverModal ===

// Module 18761 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import Constants from "Constants" /* 10923 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 10930 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17091, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
  obj = SelfModInappropriateConversationExperiment;
};