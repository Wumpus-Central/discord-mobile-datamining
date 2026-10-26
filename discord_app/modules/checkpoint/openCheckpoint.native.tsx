// === Module 12954: openCheckpoint ===

// Module 12954 (openCheckpoint)
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export const openCheckpoint = function openCheckpoint(devtools, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.CHECKPOINT_STARTED, { source: devtools });
  const obj2 = { source: devtools };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12955, dependencyMap.paths), { didPlayerShareDataWithDiscord: flag }, "CHECKPOINT_MODAL");
};