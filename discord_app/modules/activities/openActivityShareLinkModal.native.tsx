// discord_app/modules/activities/openActivityShareLinkModal.native.tsx
import set from "../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import getBestActiveInput from "../../utils/native/ChatInputUtils.tsx";
import _modDef4763 from "../../actions/ModalActionCreators.tsx";

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = set.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  _modDef4763.pushLazy(asyncRequireImpl(14486, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, {
    presentation: "modal",
  });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  _modDef4763.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
