// === Module 11080: ? ===

// Module 11080
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = obj132.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    const obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    _modDef5260.pushLazy(asyncRequireImpl(11081, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    _modDef5260.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};