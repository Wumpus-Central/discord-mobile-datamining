// === Module 13953: ACTIVITY_SHARE_LINK_MODAL ===

// Module 13953 (ACTIVITY_SHARE_LINK_MODAL)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import getBestActiveInput from "getBestActiveInput" /* 4242 */;
import _modDef4611 from "module_4611" /* 4611 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = set.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  _modDef4611.pushLazy(asyncRequireImpl(13954, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  _modDef4611.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};