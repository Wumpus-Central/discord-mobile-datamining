// discord_app/modules/safety_hub/native/AppealIngestionModalActionCreators.tsx
const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = require("AppealIngestionModal").fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    let obj = require("../../../Dispatcher.tsx");
    obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    require("../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(11213, dependencyMap.paths), classificationId, APPEAL_INGESTION_MODAL_KEY);
  },
  close() {
    require("../../../actions/ModalActionCreators.tsx").popWithKey(APPEAL_INGESTION_MODAL_KEY);
    const obj = require("../../../actions/ModalActionCreators.tsx");
    require("../../../Dispatcher.tsx").dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  }
};