// discord_app/modules/activities/openActivityShareLinkModal.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ChatInputUtils from "../../utils/native/ChatInputUtils.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = size.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");
const ACTIVITY_SHARE_LINK_MODAL_export = "ACTIVITY_SHARE_LINK_MODAL";

export { ACTIVITY_SHARE_LINK_MODAL_export as ACTIVITY_SHARE_LINK_MODAL };
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  let applicationId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  const obj = ChatInputUtils;
  obj.dismissKeyboard();
  const obj2 = ModalActionCreatorsDefault;
  const obj3 = { applicationId, customId, linkId, message, onShare };
  obj2.pushLazy(asyncRequire(14345, dependencyMap.paths), obj3, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
