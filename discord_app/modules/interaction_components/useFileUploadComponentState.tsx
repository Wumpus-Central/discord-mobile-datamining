// === Module 17526: useFileUploadComponentState ===

// Module 17526 (useFileUploadComponentState)
import Server from "Server" /* 1985 */;
import DraftStore from "DraftStore" /* 7031 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7267 */;
import size from "module_2" /* 2 */;

const DraftType = DraftStore.DraftType;
const result = size.fileFinishedImporting("modules/interaction_components/useFileUploadComponentState.tsx");

export const useFileUploadComponentState = function useFileUploadComponentState(maxValues) {
  let currentUploads;
  let executeStateUpdate;
  let setUploadIds;
  let state;
  let uploadIds;
  let uploads;
  let obj = state(uploadIds[3]);
  const componentStateContext = obj.useComponentStateContext();
  executeStateUpdate(uploadIds[4])(null != componentStateContext, "useFileUploadComponentState must be used within a ComponentStateContextProvider");
  const channelId = componentStateContext.channelId;
  executeStateUpdate(uploadIds[4])(null != channelId, "useFileUploadComponentState must be used inside a channel");
  const componentState = componentStateContext.useComponentState(maxValues);
  state = componentState.state;
  executeStateUpdate = componentState.executeStateUpdate;
  const items = [state];
  const error = componentState.error;
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
      let closure_0 = item;
      return uploads.find((id) => id.id === closure_0);
    });
    return mapped.filter((item) => null != item);
  }, items1);
  const items2 = [executeStateUpdate];
  setUploadIds = uploads.useCallback((uploadIds) => {
    const obj = { type: Server.ComponentType.FILE_UPLOAD, uploadIds };
    return executeStateUpdate(obj);
  }, items2);
  const items3 = [uploadIds, currentUploads, setUploadIds];
  const effect = uploads.useEffect(() => {
    if (uploadIds.length > currentUploads.length) {
      setUploadIds(uploadIds.filter((item) => {
        let closure_0 = item;
        return currentUploads.some((id) => id.id === closure_0);
      }));
    }
  }, items3);
  return { uploadIds, setUploadIds, currentUploads, error };
};