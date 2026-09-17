// discord_app/modules/checkpoint/native/components/openCheckpointModal.tsx
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/openCheckpointModal.tsx");

export default function openCheckpointModal(source) {
  AnalyticsUtilsDefault.track(AnalyticEvents.CHECKPOINT_STARTED, { source });
  const obj2 = { source };
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15810, dependencyMap.paths), undefined, "CHECKPOINT_MODAL");
}
