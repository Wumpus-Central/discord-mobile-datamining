// === Module 14084: AppealIngestionModalActionCreators ===

// Module 14084 (AppealIngestionModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId });
    const obj2 = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14085, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};