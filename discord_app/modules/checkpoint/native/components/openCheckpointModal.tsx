// === Module 12652: openCheckpointModal ===

// Module 12652 (openCheckpointModal)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/openCheckpointModal.tsx");

export default function openCheckpointModal(source) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.CHECKPOINT_STARTED, { source });
  const obj2 = { source };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12653, dependencyMap.paths), { didPlayerShareDataWithDiscord: flag }, "CHECKPOINT_MODAL");
};