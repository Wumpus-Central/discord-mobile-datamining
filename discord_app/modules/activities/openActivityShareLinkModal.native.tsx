// discord_app/modules/activities/openActivityShareLinkModal.native.tsx
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
  let obj = require("../../utils/native/ChatInputUtils.tsx") /* getBestActiveInput */;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  require("../../actions/ModalActionCreators.tsx").pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13658, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  require("../../actions/ModalActionCreators.tsx").popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};