// === Module 11509: useMediaModalFooterAction ===

// Module 11509 (useMediaModalFooterAction)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const useMediaModalFooterActionStore = module_560.create(() => ({}));
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export { useMediaModalFooterActionStore };
export const setMediaModalFooterAction = function setMediaModalFooterAction(footerAction) {
  _require = footerAction;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { footerAction };
    return obj.setState(obj);
  });
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  ReactBatchUpdates.batchUpdates(() => state.setState({ footerAction: "Array" }));
};