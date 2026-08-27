// === Module 14053: ACTIVITY_SHARE_LINK_MODAL ===

// Module 14053 (ACTIVITY_SHARE_LINK_MODAL)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import getBestActiveInput from "getBestActiveInput" /* 4307 */;
import _modDef4676 from "module_4676" /* 4676 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = set.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  _modDef4676.pushLazy(asyncRequireImpl(14054, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  _modDef4676.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};