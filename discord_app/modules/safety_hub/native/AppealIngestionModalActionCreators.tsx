// discord_app/modules/safety_hub/native/AppealIngestionModalActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId });
    const obj2 = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(12021, dependencyMap.paths),
      classificationId,
      APPEAL_INGESTION_MODAL_KEY,
    );
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  },
};
