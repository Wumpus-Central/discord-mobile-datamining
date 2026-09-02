// === Module 17217: closeIFrameModal ===

// Module 17217 (closeIFrameModal)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import _modDef4723 from "module_4723" /* 4723 */;
import INTERACTION_IFRAME_MODAL_KEY from "INTERACTION_IFRAME_MODAL_KEY" /* 17215 */;

let closure_2 = INTERACTION_IFRAME_MODAL_KEY.INTERACTION_IFRAME_MODAL_KEY;
const result = set.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = _modDef4723;
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  dispatcherDefault.dispatch(obj);
};