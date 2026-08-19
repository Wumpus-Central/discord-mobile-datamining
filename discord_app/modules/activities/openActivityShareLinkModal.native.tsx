// discord_app/modules/activities/openActivityShareLinkModal.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import getBestActiveInput from "../../utils/native/ChatInputUtils.tsx";
import _modDef5260 from "../../actions/ModalActionCreators.tsx";

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = obj132.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  _modDef5260.pushLazy(asyncRequireImpl(13854, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  _modDef5260.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};