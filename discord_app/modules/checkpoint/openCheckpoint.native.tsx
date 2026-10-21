// discord_app/modules/checkpoint/openCheckpoint.native.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../_runtime/02002_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/openCheckpoint.native.tsx");

export const openCheckpoint = function openCheckpoint(devtools, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.CHECKPOINT_STARTED, { source: devtools });
  const obj2 = { source: devtools };
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(12842, dependencyMap.paths),
    { didPlayerShareDataWithDiscord: flag },
    "CHECKPOINT_MODAL",
  );
};
