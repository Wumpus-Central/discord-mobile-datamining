// === Module 10595: useMediaModalFooterAction ===

// Module 10595 (useMediaModalFooterAction)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1271 */;
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useMediaModalFooterActionStore = module_570.create(() => ({}));
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
  ReactBatchUpdates.batchUpdates(() => state.setState({ footerAction: "create" }));
};