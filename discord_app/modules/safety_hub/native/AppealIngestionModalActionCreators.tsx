// discord_app/modules/safety_hub/native/AppealIngestionModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = require("AppealIngestionModal").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = dispatcher;
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    ModalActionCreators.pushLazy(asyncRequireImpl(11351, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    ModalActionCreators.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = ModalActionCreators;
    dispatcher.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};