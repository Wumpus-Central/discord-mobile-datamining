// discord_app/modules/activities/openActivityShareLinkModal.native.tsx
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";
import { getBestActiveInput } from "../../utils/native/ChatInputUtils.tsx";
const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = require("ActivityShareLinkModal").fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  let applicationId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  ModalActionCreators.pushLazy(asyncRequireImpl(13822, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  ModalActionCreators.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};