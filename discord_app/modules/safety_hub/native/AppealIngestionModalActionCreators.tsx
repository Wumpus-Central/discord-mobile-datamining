// discord_app/modules/safety_hub/native/AppealIngestionModalActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import dispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = dispatcherDefault;
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    _modDef5265.pushLazy(asyncRequireImpl(11120, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    _modDef5265.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = _modDef5265;
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};