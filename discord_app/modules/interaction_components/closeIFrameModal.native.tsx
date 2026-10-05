// discord_app/modules/interaction_components/closeIFrameModal.native.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import InteractionIframeConstants from "native/InteractionIframeConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = InteractionIframeConstants.INTERACTION_IFRAME_MODAL_KEY;
const result = size.fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_2);
  const obj2 = DispatcherDefault;
  const obj3 = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  obj2.dispatch(obj3);
}
