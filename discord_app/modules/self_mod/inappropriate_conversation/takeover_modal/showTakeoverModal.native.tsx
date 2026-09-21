// discord_app/modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import SelfModInappropriateConversationExperiment from "../SelfModInappropriateConversationExperiment.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const TAKEOVER_MODAL_KEY = Constants.TAKEOVER_MODAL_KEY;
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx",
);

export const showTakeoverModal = function showTakeoverModal(arg0) {
  ({ warningId, warningType, senderId, channelId } = arg0);
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    const obj3 = { warningId, warningType, senderId, channelId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16036, dependencyMap.paths), obj3, TAKEOVER_MODAL_KEY);
  }
  obj = SelfModInappropriateConversationExperiment;
};
