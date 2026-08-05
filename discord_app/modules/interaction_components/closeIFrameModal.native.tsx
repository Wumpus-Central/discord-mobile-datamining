// discord_app/modules/interaction_components/closeIFrameModal.native.tsx
import { INTERACTION_IFRAME_MODAL_KEY as closure_2 } from "INTERACTION_IFRAME_MODAL_KEY";
import { ModalActionCreators } from "../../actions/ModalActionCreators.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

const result = require("dispatcher").fileFinishedImporting("modules/interaction_components/closeIFrameModal.native.tsx");

export default function closeIFrameModal(applicationId) {
  let obj = ModalActionCreators;
  obj.popWithKey(closure_2);
  obj = { type: "INTERACTION_IFRAME_MODAL_CLOSE", applicationId };
  dispatcher.dispatch(obj);
};