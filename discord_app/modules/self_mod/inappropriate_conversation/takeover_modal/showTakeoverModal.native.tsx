// === Module 17414: showTakeoverModal ===

// Module 17414 (showTakeoverModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11061 */;
import Constants from "Constants" /* 11457 */;
import size from "module_2" /* 2 */;

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = SelfModInappropriateConversationExperiment;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15789, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
  }
};