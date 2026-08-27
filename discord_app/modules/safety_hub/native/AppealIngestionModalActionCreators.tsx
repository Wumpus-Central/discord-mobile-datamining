// === Module 11387: ? ===

// Module 11387
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = dispatcherDefault;
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    _modDef4676.pushLazy(asyncRequireImpl(11388, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    _modDef4676.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = _modDef4676;
    dispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};