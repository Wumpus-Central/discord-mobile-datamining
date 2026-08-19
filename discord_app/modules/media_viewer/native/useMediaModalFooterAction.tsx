// === Module 10702: useMediaModalFooterActionStore ===

// Module 10702 (useMediaModalFooterActionStore)
import obj132 from "obj132" /* 2 */;
import batchUpdates from "batchUpdates" /* 705 */;
import keys from "keys" /* 644 */;

const obj = keys.create(() => ({}));
const result = obj132.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export const useMediaModalFooterActionStore = obj;
export const setMediaModalFooterAction = function setMediaModalFooterAction(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_2.setState({ footerAction: closure_0 }));
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  batchUpdates.batchUpdates(() => state.setState({ footerAction: "r" }));
};