// === Module 11509: useMediaModalFooterActionStore ===

// Module 11509 (useMediaModalFooterActionStore)
import set from "set" /* 2 */;
import batchUpdates from "batchUpdates" /* 1249 */;
import keys from "keys" /* 560 */;

const obj = keys.create(() => ({}));
const result = set.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export const useMediaModalFooterActionStore = obj;
export const setMediaModalFooterAction = function setMediaModalFooterAction(arg0) {
  const _require = arg0;
  _require(1249).batchUpdates(() => closure_1_2.setState({ footerAction: closure_0 }));
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  batchUpdates.batchUpdates(() => state.setState({ footerAction: "Array" }));
};