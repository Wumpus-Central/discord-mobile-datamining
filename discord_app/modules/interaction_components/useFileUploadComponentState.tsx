// === Module 17230: useFileUploadComponentState ===

// Module 17230 (useFileUploadComponentState)
import closure_3 from "noop" /* 19 */;
import { DraftType } from "handleChanged" /* 4855 */;
import closure_5 from "map" /* 4854 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/interaction_components/useFileUploadComponentState.tsx");

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
      type = tmp.type;
    }
    return type === state(uploadIds[5]).ComponentType.FILE_UPLOAD ? state.uploadIds : [];
  }, items);
  uploads = setUploadIds.getUploads(channelId, currentUploads.InteractionModal);
  const items1 = [uploadIds, uploads];
  currentUploads = uploads.useMemo(() => {
    const mapped = uploadIds.map((arg0) => {
      closure_0 = arg0;
      return closure_3.find((id) => id.id === closure_0);
    });
    return mapped.filter((arg0) => null != arg0);
  }, items1);
  const items2 = [executeStateUpdate];
  setUploadIds = uploads.useCallback((uploadIds) => executeStateUpdate({ type: state(uploadIds[5]).ComponentType.FILE_UPLOAD, uploadIds }), items2);
  const items3 = [uploadIds, currentUploads, setUploadIds];
  const effect = uploads.useEffect(() => {
    if (uploadIds.length > currentUploads.length) {
      setUploadIds(uploadIds.filter((arg0) => {
        closure_0 = arg0;
        return closure_4.some((id) => id.id === closure_0);
      }));
    }
  }, items3);
  return { uploadIds, setUploadIds, currentUploads, error: error.error };
};