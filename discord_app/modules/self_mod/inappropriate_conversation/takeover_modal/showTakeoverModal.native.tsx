// discord_app/modules/self_mod/inappropriate_conversation/takeover_modal/showTakeoverModal.native.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../../../../actions/ModalActionCreators.tsx";
import LOCATION_CONTEXT_MOBILE from "../../Constants.tsx";
import InappropriateConversationExperiment from "../SelfModInappropriateConversationExperiment.tsx";

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
    _modDef4611.pushLazy(asyncRequireImpl(15269, dependencyMap.paths), obj, TAKEOVER_MODAL_KEY);
    const obj2 = _modDef4611;
  }
};