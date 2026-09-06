// discord_app/modules/media_viewer/native/useMediaModalFooterAction.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

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