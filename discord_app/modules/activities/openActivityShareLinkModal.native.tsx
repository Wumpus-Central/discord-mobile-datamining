// discord_app/modules/activities/openActivityShareLinkModal.native.tsx
import asyncRequireImpl from "../../../_runtime/01980_asyncRequireImpl.js";
import ChatInputUtils from "../../utils/native/ChatInputUtils.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  ChatInputUtils.dismissKeyboard();
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(14773, dependencyMap.paths),
    { applicationId, customId, linkId, message, onShare },
    ACTIVITY_SHARE_LINK_MODAL,
    { presentation: "modal" },
  );
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
