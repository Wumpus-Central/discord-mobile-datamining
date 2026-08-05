import { dispatcher } from "../Dispatcher.tsx";
// discord_app/actions/UploadAttachmentActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/UploadAttachmentActionCreators.tsx");

export default {
  popFirstFile(channelId) {
    let obj = dispatcher;
    obj = { type: "UPLOAD_ATTACHMENT_POP_FILE", channelId };
    obj.dispatch(obj);
  },
  addFiles(arg0) {
    let channelId;
    let draftType;
    let files;
    ({ files, channelId, draftType } = arg0);
    dispatcher.dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType });
  },
  addFile(arg0) {
    let allowOptimization;
    let channelId;
    let draftType;
    let file;
    ({ file, channelId, draftType, allowOptimization } = arg0);
    const items = [file];
    dispatcher.dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: items, draftType, allowOptimization });
  },
  remove(channelId, id, draftType) {
    let obj = dispatcher;
    obj = { type: "UPLOAD_ATTACHMENT_REMOVE_FILE", channelId, id, draftType };
    obj.dispatch(obj);
  },
  removeFiles(channelId, found, InteractionModal) {
    let obj = dispatcher;
    obj = { type: "UPLOAD_ATTACHMENT_REMOVE_FILES", channelId, attachmentIds: found, draftType: InteractionModal };
    obj.dispatch(obj);
  },
  clearAll(channelId, draftType) {
    let obj = dispatcher;
    obj = { type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES", channelId, draftType };
    obj.dispatch(obj);
  },
  update(channelId, id, draftType) {
    let description;
    let filename;
    let spoiler;
    let thumbnail;
    ({ description, filename, spoiler, thumbnail } = arg3);
    let obj = dispatcher;
    obj = { type: "UPLOAD_ATTACHMENT_UPDATE_FILE", channelId, id, filename, description, thumbnail, spoiler, draftType };
    obj.dispatch(obj);
  },
  setUploads(uploads) {
    let channelId;
    let draftType;
    let resetState;
    uploads = uploads.uploads;
    ({ channelId, draftType, resetState } = uploads);
    let obj = dispatcher;
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
    let allowOptimization;
    let channelId;
    let draftType;
    let file;
    let id;
    ({ file, channelId, id, draftType, allowOptimization } = arg0);
    dispatcher.dispatch({ type: "UPLOAD_ATTACHMENT_SET_FILE", channelId, id, file, draftType, allowOptimization });
  }
};