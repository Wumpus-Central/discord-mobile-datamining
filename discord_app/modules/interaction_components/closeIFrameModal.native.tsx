// === Module 17403: closeIFrameModal ===

// Module 17403 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 17401 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  DispatcherDefault.dispatch(obj);
};