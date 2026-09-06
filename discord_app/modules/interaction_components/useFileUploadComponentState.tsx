// === Module 17396: useFileUploadComponentState ===

// Module 17396 (useFileUploadComponentState)
import Server from "Server" /* 1894 */;
import noop from "module_19" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4900 */;

require = fn;
const DraftType = fn(4901).DraftType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/useFileUploadComponentState.tsx");

export const useFileUploadComponentState = function useFileUploadComponentState(maxValues) {
  const componentStateContext = state(uploadIds[3]).useComponentStateContext();
  executeStateUpdate(uploadIds[4])(null != componentStateContext, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
  const channelId = componentStateContext.channelId;
  executeStateUpdate(uploadIds[4])(null != channelId, "useFileUploadComponentState must be used inside a channel");
  const error = componentStateContext.useComponentState(maxValues);
  state = error.state;
  executeStateUpdate = error.executeStateUpdate;
  const items = [state];
  uploadIds = uploads.useMemo(() => {
    let type;
    if (state != null) {
      type = state.type;
    }
    return type === Server.ComponentType.FILE_UPLOAD ? state.uploadIds : [];
  }, items);
  uploads = setUploadIds.getUploads(channelId, currentUploads.InteractionModal);
  const items1 = [uploadIds, uploads];
  currentUploads = uploads.useMemo(() => {
    const mapped = uploadIds.map((item) => {
      closure_0 = item;
      return uploads.find((id) => id.id === closure_0);
    });
    return mapped.filter((item) => null != item);
  }, items1);
  const items2 = [executeStateUpdate];
  setUploadIds = uploads.useCallback((uploadIds) => executeStateUpdate({ type: Server.ComponentType.FILE_UPLOAD, uploadIds }), items2);
  const items3 = [uploadIds, currentUploads, setUploadIds];
  const effect = uploads.useEffect(() => {
    if (uploadIds.length > currentUploads.length) {
      setUploadIds(uploadIds.filter((item) => {
        closure_0 = item;
        return currentUploads.some((id) => id.id === closure_0);
      }));
    }
  }, items3);
  return { uploadIds, setUploadIds, currentUploads, error: error.error };
};