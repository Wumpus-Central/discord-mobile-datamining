// === Module 14485: openActivityShareLinkModal ===

// Module 14485 (openActivityShareLinkModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = ChatInputUtils;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14486, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreatorsDefault.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};