// === Module 16894: closeIFrameModal ===

// Module 16894 (closeIFrameModal)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef4676 from "module_4676" /* 4676 */;
import INTERACTION_IFRAME_MODAL_KEY from "INTERACTION_IFRAME_MODAL_KEY" /* 16892 */;

let closure_2 = INTERACTION_IFRAME_MODAL_KEY.INTERACTION_IFRAME_MODAL_KEY;
const result = set.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = _modDef4676;
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  dispatcherDefault.dispatch(obj);
};