const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = require("AppealIngestionModal").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = importDefault(709);
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(11217, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    importDefault(4461).popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = importDefault(4461);
    importDefault(709).dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};