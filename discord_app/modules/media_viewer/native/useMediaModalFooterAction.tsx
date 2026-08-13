// discord_app/modules/media_viewer/native/useMediaModalFooterAction.tsx
import keys from "keys";
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

const obj = keys.create(() => ({}));
const result = require("set").fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export const useMediaModalFooterActionStore = obj;
export const setMediaModalFooterAction = function setMediaModalFooterAction(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_2.setState({ footerAction: closure_0 }));
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  batchUpdates.batchUpdates(() => state.setState({ footerAction: "sa" }));
};