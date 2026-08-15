// discord_app/modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx
import { TAKEOVER_MODAL_KEY } from "LOCATION_CONTEXT_MOBILE";
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { InappropriateConversationExperiment } from "../SelfModInappropriateConversationExperiment.tsx";

const result = require("module_5260").fileFinishedImporting("modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx");

export const showTakeoverModal = function showTakeoverModal(arg0) {
  let channelId;
  let senderId;
  let warningId;
  let warningType;
  ({ warningId, warningType, senderId, channelId } = arg0);
  let obj = InappropriateConversationExperiment;
  if (obj.isEligibleForInappropriateConversationWarning({ location: "takeover-modal" })) {
    obj = { warningId: null, warningType: null, senderId: null, channelId: null };
    obj[0] = warningId;
    obj[1] = warningType;
    obj[2] = senderId;
    obj[3] = channelId;
    ModalActionCreators.pushLazy(asyncRequireImpl(15175, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = ModalActionCreators;
  }
};