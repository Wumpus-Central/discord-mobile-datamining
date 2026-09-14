// === Module 9436: UploadAttachmentActionCreators ===

// Module 9436 (UploadAttachmentActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("actions/UploadAttachmentActionCreators.tsx");

export default {
  popFirstFile(channelId) {
    DispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_POP_FILE", channelId });
  },
  addFiles(draftType) {
    ({ files, channelId } = draftType);
    draftType = draftType.draftType;
    if (files.some(channelId(9437).itemNeedsImagePreConversion)) {
      function dispatch(files) {
        DispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType });
      }
      Promise.all(files.map(channelId(9437).maybePreConvertImageItem)).then(dispatch);
      const allPromises = Promise.all(files.map(channelId(9437).maybePreConvertImageItem));
    } else {
      const obj2 = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType };
      draftType(573).dispatch(obj2);
      const obj = draftType(573);
    }
  },
  addFile(draftType) {
    ({ file, channelId } = draftType);
    draftType = draftType.draftType;
    const allowOptimization = draftType.allowOptimization;
    if (obj.itemNeedsImagePreConversion(file)) {
      function dispatch(result) {
        const obj2 = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: null, draftType, allowOptimization };
        const items = [result];
        obj2.files = items;
        DispatcherDefault.dispatch(obj2);
      }
      const result = channelId(tmp2[1]).maybePreConvertImageItem(file);
      result.then(dispatch);
      const tmpResult = channelId(tmp2[1]);
    } else {
      const obj3 = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: null, draftType: null, allowOptimization: null };
      let items = [file];
      obj3.files = items;
      obj3.draftType = draftType;
      obj3.allowOptimization = allowOptimization;
      draftType(tmp2[0]).dispatch(obj3);
      let obj2 = draftType(tmp2[0]);
    }
  },
  remove(channelId, id, draftType) {
    DispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_REMOVE_FILE", channelId, id, draftType });
  },
  removeFiles(channelId, items3, InteractionModal) {
    DispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_REMOVE_FILES", channelId, attachmentIds: items3, draftType: InteractionModal });
  },
  clearAll(channelId, draftType) {
    DispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES", channelId, draftType });
  },
  update(channelId, id, draftType, arg3) {
    ({ description, filename, spoiler, thumbnail } = arg3);
    DispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_UPDATE_FILE", channelId, id, filename, description, thumbnail, spoiler, draftType });
  },
  setUploads(uploads) {
    uploads = uploads.uploads;
    ({ channelId, draftType, resetState } = uploads);
    const obj2 = { type: "UPLOAD_ATTACHMENT_SET_UPLOADS", channelId, uploads: null, draftType: null };
    let mapped = uploads;
    if (resetState) {
      mapped = uploads.map((resetState) => resetState.resetState());
    }
    obj2.uploads = mapped;
    obj2.draftType = draftType;
    DispatcherDefault.dispatch(obj2);
  },
  setFile(arg0) {
    ({ file, channelId, id, draftType, allowOptimization } = arg0);
    DispatcherDefault.dispatch({ type: "UPLOAD_ATTACHMENT_SET_FILE", channelId, id, file, draftType, allowOptimization });
  }
};