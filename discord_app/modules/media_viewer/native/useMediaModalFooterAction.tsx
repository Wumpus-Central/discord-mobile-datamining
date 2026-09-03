// === Module 11333: useMediaModalFooterActionStore ===

// Module 11333 (useMediaModalFooterActionStore)
import set from "set" /* 2 */;
import batchUpdates from "batchUpdates" /* 702 */;
import keys from "keys" /* 641 */;

const obj = keys.create(() => ({}));
const result = set.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export const useMediaModalFooterActionStore = obj;
export const setMediaModalFooterAction = function setMediaModalFooterAction(arg0) {
  const _require = arg0;
  _require(702).batchUpdates(() => closure_1_2.setState({ footerAction: closure_0 }));
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  batchUpdates.batchUpdates(() => state.setState({ footerAction: "Array" }));
};