// discord_app/modules/media_viewer/native/useMediaModalFooterAction.tsx
import react_native from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const useMediaModalFooterActionStore = module_570.create(() => ({}));
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaModalFooterAction.tsx");

export { useMediaModalFooterActionStore };
export const setMediaModalFooterAction = function setMediaModalFooterAction(footerAction) {
  _require = footerAction;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { footerAction };
    return obj.setState(obj);
  });
};
export const clearMediaModalFooterAction = function clearMediaModalFooterAction() {
  let state;
  const obj = react_native;
  obj.batchUpdates(() => state.setState({ footerAction: "r" }));
};