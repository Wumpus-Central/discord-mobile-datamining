// === Module 16608: useFileUploadComponentState ===

// Module 16608 (useFileUploadComponentState)
import noop from "noop" /* 19 */;
import { DraftType } from "handleChanged" /* 4825 */;
import map from "map" /* 4824 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/interaction_components/useFileUploadComponentState.tsx");

export const useFileUploadComponentState = function useFileUploadComponentState(maxValues) {
  const componentStateContext = state(uploadIds[3]).useComponentStateContext();
  executeStateUpdate(uploadIds[4])(null != componentStateContext, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
  const channelId = componentStateContext.channelId;
  executeStateUpdate(uploadIds[4])(null != channelId, "useFileUploadComponentState must be used inside a channel");
  error = componentStateContext.useComponentState(maxValues);
  state = error.state;
  executeStateUpdate = error.executeStateUpdate;
  const items = [state];
  uploadIds = uploads.useMemo(() => {
    let type;
    if (state != null) {
      type = state.type;
    }
    return type === state(uploadIds[5]).ComponentType.FILE_UPLOAD ? state.uploadIds : [];
  }, items);
  uploads = setUploadIds.getUploads(channelId, currentUploads.InteractionModal);
  const items1 = [uploadIds, uploads];
  currentUploads = uploads.useMemo(() => {
    const mapped = uploadIds.map((item, index) => {
      closure_0 = item;
      return closure_3.find((item, index) => item.id === closure_0);
    });
    return mapped.filter((item, index) => null != item);
  }, items1);
  const items2 = [executeStateUpdate];
  setUploadIds = uploads.useCallback((uploadIds) => executeStateUpdate({ type: state(uploadIds[5]).ComponentType.FILE_UPLOAD, uploadIds }), items2);
  const items3 = [uploadIds, currentUploads, setUploadIds];
  const effect = uploads.useEffect(() => {
    if (uploadIds.length > currentUploads.length) {
      setUploadIds(uploadIds.filter((item, index) => {
        closure_0 = item;
        return closure_4.some((item, index) => item.id === closure_0);
      }));
    }
  }, items3);
  return { uploadIds, setUploadIds, currentUploads, error: error.error };
};