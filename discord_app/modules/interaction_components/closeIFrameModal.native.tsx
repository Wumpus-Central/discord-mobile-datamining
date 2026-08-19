// === Module 16615: closeIFrameModal ===

// Module 16615 (closeIFrameModal)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef5260 from "module_5260" /* 5260 */;
import INTERACTION_IFRAME_MODAL_KEY from "INTERACTION_IFRAME_MODAL_KEY" /* 16613 */;

let closure_2 = INTERACTION_IFRAME_MODAL_KEY.INTERACTION_IFRAME_MODAL_KEY;
const result = obj132.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = _modDef5260;
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  dispatcherDefault.dispatch(obj);
};