// discord_app/actions/UploadAttachmentActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import dispatcherDefault from "../Dispatcher.tsx";

let result = set.fileFinishedImporting("actions/UploadAttachmentActionCreators.tsx");

export default {
  popFirstFile(channelId) {
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_ATTACHMENT_POP_FILE", channelId };
    obj.dispatch(obj);
  },
  addFiles(draftType) {
    ({ files, channelId } = draftType);
    draftType = draftType.draftType;
    if (files.some(channelId(8513).itemNeedsHeicPreConversion)) {
      function dispatch(files) {
        let obj = draftType(closure_1_2[0]);
        obj = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType };
        obj.dispatch(obj);
      }
      Promise.all(files.map(channelId(8513).maybePreConvertHeicItem)).then(dispatch);
      const allPromises = Promise.all(files.map(channelId(8513).maybePreConvertHeicItem));
    } else {
      let obj = draftType(709);
      obj = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId: null, files: null, draftType: null };
      obj[1] = channelId;
      obj[2] = files;
      obj[3] = draftType;
      obj.dispatch(obj);
    }
  },
  addFile(draftType) {
    ({ file, channelId } = draftType);
    draftType = draftType.draftType;
    const allowOptimization = draftType.allowOptimization;
    let obj = channelId(allowOptimization[1]);
    if (obj.itemNeedsHeicPreConversion(file)) {
      function dispatch(arg0) {
        let obj = draftType(allowOptimization[0]);
        obj = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: items, draftType, allowOptimization };
        items = [arg0];
        obj.dispatch(obj);
      }
      const result = channelId(tmp2[1]).maybePreConvertHeicItem(file);
      result.then(dispatch);
      const tmpResult = channelId(tmp2[1]);
    } else {
      obj = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId: null, files: null, draftType: null, allowOptimization: null };
      obj[1] = channelId;
      let items = [file];
      obj[2] = items;
      obj[3] = draftType;
      obj[4] = allowOptimization;
      draftType(tmp2[0]).dispatch(obj);
      const obj2 = draftType(tmp2[0]);
    }
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