// === Module 13234: openCheckpoint ===

// Module 13234 (openCheckpoint)
import Constants from "Constants" /* 1084 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export function openCheckpoint(devtools, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.CHECKPOINT_STARTED, { source: devtools });
  const obj2 = { source: devtools };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13235, dependencyMap.paths), { didPlayerShareDataWithDiscord: flag }, "CHECKPOINT_MODAL");
}