// === Module 15809: openCheckpointModal ===

// Module 15809 (openCheckpointModal)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/openCheckpointModal.tsx");

export default function openCheckpointModal(source) {
  AnalyticsUtilsDefault.track(AnalyticEvents.CHECKPOINT_STARTED, { source });
  const obj2 = { source };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15810, dependencyMap.paths), undefined, "CHECKPOINT_MODAL");
};