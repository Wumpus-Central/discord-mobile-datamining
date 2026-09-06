// discord_app/modules/safety_hub/native/AppealIngestionModalActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const APPEAL_INGESTION_MODAL_KEY = "APPEAL_INGESTION_MODAL_KEY";
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionModalActionCreators.tsx");

export default {
  open(classificationId) {
    const obj = { type: "SAFETY_HUB_APPEAL_OPEN", classificationId: classificationId.classificationId };
    obj.dispatch(obj);
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(11886, dependencyMap.paths),
      classificationId,
      APPEAL_INGESTION_MODAL_KEY,
    );
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(APPEAL_INGESTION_MODAL_KEY);
    DispatcherDefault.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
  },
};
