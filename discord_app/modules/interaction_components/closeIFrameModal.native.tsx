// === Module 17860: closeIFrameModal ===

// Module 17860 (closeIFrameModal)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import InteractionIframeConstants from "InteractionIframeConstants" /* 17858 */;
import size from "module_2" /* 2 */;

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  ModalActionCreatorsDefault.popWithKey(closure_2);
  DispatcherDefault.dispatch({ type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId });
};