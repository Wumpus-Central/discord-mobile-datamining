// discord_app/modules/media_viewer/native/useMediaModalFooterAction.tsx
import set from "../../../../_runtime/00002_set.js";
import batchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import keys from "../../../../_runtime/00644_keys.js";

const obj = keys.create(() => ({}));
const result = set.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export const useMediaModalFooterActionStore = obj;
export const setMediaModalFooterAction = function setMediaModalFooterAction(arg0) {
  const _require = arg0;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => closure_1_2.setState({ footerAction: closure_0 }));
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  batchUpdates.batchUpdates(() => state.setState({ footerAction: "r" }));
};