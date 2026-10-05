// discord_app/modules/safety_hub/native/AppealIngestionModalActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
let obj = {
  open(classificationId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj2);
    const obj3 = ModalActionCreatorsDefault;
    obj3.pushLazy(asyncRequire(11498, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj2 = DispatcherDefault;
    obj2.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  },
};
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default obj;
