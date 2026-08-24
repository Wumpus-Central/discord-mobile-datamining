// === Module 8505: dispatcher ===

// Module 8505 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("actions/UploadAttachmentActionCreators.tsx");

export default {
  popFirstFile(channelId) {
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_ATTACHMENT_POP_FILE", channelId };
    obj.dispatch(obj);
  },
  addFiles(arg0) {
    ({ files, channelId, draftType } = arg0);
    dispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType });
  },
  addFile(arg0) {
    ({ file, channelId, draftType, allowOptimization } = arg0);
    const items = [file];
    dispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: items, draftType, allowOptimization });
  },
  remove(channelId, id, draftType) {
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_ATTACHMENT_REMOVE_FILE", channelId, id, draftType };
    obj.dispatch(obj);
  },
  removeFiles(channelId, found, InteractionModal) {
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_ATTACHMENT_REMOVE_FILES", channelId, attachmentIds: found, draftType: InteractionModal };
    obj.dispatch(obj);
  },
  clearAll(channelId, draftType) {
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES", channelId, draftType };
    obj.dispatch(obj);
  },
  update(channelId, id, draftType) {
    ({ description, filename, spoiler, thumbnail } = arg3);
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_ATTACHMENT_UPDATE_FILE", channelId, id, filename, description, thumbnail, spoiler, draftType };
    obj.dispatch(obj);
  },
  setUploads(uploads) {
    uploads = uploads.uploads;
    ({ channelId, draftType, resetState } = uploads);
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_ATTACHMENT_SET_UPLOADS", channelId, uploads: null, draftType: null };
    let mapped = uploads;
    if (resetState) {
      mapped = uploads.map((resetState) => resetState.resetState());
    }
    obj[2] = mapped;
    obj[3] = draftType;
    obj.dispatch(obj);
  },
  setFile(arg0) {
    ({ file, channelId, id, draftType, allowOptimization } = arg0);
    dispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_SET_FILE", channelId, id, file, draftType, allowOptimization });
  }
};