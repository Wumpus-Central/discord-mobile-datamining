// === Module 19896: closeIFrameModal ===

// Module 19896 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 19894 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  ModalActionCreatorsDefault.popWithKey(closure_2);
  DispatcherDefault.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId });
};