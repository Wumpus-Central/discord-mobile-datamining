// discord_app/actions/UploadAttachmentActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("actions/UploadAttachmentActionCreators.tsx");

export default {
  popFirstFile(channelId) {
    const obj = { type: "UPLOAD_ATTACHMENT_POP_FILE", channelId };
    obj.dispatch(obj);
  },
  addFiles(draftType) {
    ({ files, channelId } = draftType);
    draftType = draftType.draftType;
    if (files.some(channelId(9308).itemNeedsHeicPreConversion)) {
      function dispatch(files) {
        const obj = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType };
        obj.dispatch(obj);
      }
      Promise.all(files.map(channelId(9308).maybePreConvertHeicItem)).then(dispatch);
      const allPromises = Promise.all(files.map(channelId(9308).maybePreConvertHeicItem));
    } else {
      draftType(573);
      let obj = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType };
      obj.dispatch(obj);
    }
  },
  addFile(draftType) {
    ({ file, channelId } = draftType);
    draftType = draftType.draftType;
    const allowOptimization = draftType.allowOptimization;
    let obj = channelId(allowOptimization[1]);
    if (obj.itemNeedsHeicPreConversion(file)) {
      function dispatch(result) {
        const obj = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: null, draftType, allowOptimization };
        const items = [result];
        obj.files = items;
        obj.dispatch(obj);
      }
      const result = channelId(tmp2[1]).maybePreConvertHeicItem(file);
      result.then(dispatch);
      const tmpResult = channelId(tmp2[1]);
    } else {
      obj = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: null, draftType: null, allowOptimization: null };
      let items = [file];
      obj.files = items;
      obj.draftType = draftType;
      obj.allowOptimization = allowOptimization;
      draftType(tmp2[0]).dispatch(obj);
      const obj2 = draftType(tmp2[0]);
    }
  },
  remove(channelId, id, draftType) {
    const obj = { type: "UPLOAD_ATTACHMENT_REMOVE_FILE", channelId, id, draftType };
    obj.dispatch(obj);
  },
  removeFiles(channelId, items3, InteractionModal) {
    const obj = {
      type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
      channelId,
      attachmentIds: items3,
      draftType: InteractionModal,
    };
    obj.dispatch(obj);
  },
  clearAll(channelId, draftType) {
    const obj = { type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES", channelId, draftType };
    obj.dispatch(obj);
  },
  update(channelId, id, draftType, arg3) {
    ({ description, filename, spoiler, thumbnail } = arg3);
    const obj = {
      type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
      channelId,
      id,
      filename,
      description,
      thumbnail,
      spoiler,
      draftType,
    };
    obj.dispatch(obj);
  },
  setUploads(uploads) {
    uploads = uploads.uploads;
    ({ channelId, draftType, resetState } = uploads);
    const obj = { type: "UPLOAD_ATTACHMENT_SET_UPLOADS", channelId, uploads: null, draftType: null };
    let mapped = uploads;
    if (resetState) {
      mapped = uploads.map((resetState) => resetState.resetState());
    }
    obj.uploads = mapped;
    obj.draftType = draftType;
    obj.dispatch(obj);
  },
  setFile(arg0) {
    ({ file, channelId, id, draftType, allowOptimization } = arg0);
    DispatcherDefault.dispatch({
      type: "UPLOAD_ATTACHMENT_SET_FILE",
      channelId,
      id,
      file,
      draftType,
      allowOptimization,
    });
  },
};
