// discord_app/actions/UploadAttachmentActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

let obj = {
  popFirstFile(channelId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_ATTACHMENT_POP_FILE", channelId };
    obj.dispatch(obj2);
  },
  addFiles(draftType) {
    let channelId;
    let files;
    ({ files, channelId } = draftType);
    draftType = draftType.draftType;
    if (files.some(channelId(8843).itemNeedsImagePreConversion)) {
      function dispatch(files) {
        const obj = DispatcherDefault;
        const obj2 = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType };
        obj.dispatch(obj2);
      }
      const allPromises = Promise.all(files.map(channelId(8843).maybePreConvertImageItem));
      allPromises.then(dispatch);
    } else {
      let obj = draftType(584);
      let obj2 = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files, draftType };
      obj.dispatch(obj2);
    }
  },
  addFile(draftType) {
    let channelId;
    let file;
    let items;
    ({ file, channelId } = draftType);
    draftType = draftType.draftType;
    const allowOptimization = draftType.allowOptimization;
    let obj = channelId(allowOptimization[1]);
    const tmp = channelId;
    if (obj.itemNeedsImagePreConversion(file)) {
      function dispatch(result) {
        let items;
        const obj2 = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: items, draftType, allowOptimization };
        items = [result];
        const obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
      const tmpResult = tmp(allowOptimization[1]);
      const result = tmpResult.maybePreConvertImageItem(file);
      result.then(dispatch);
    } else {
      let obj2 = draftType(tmp2[0]);
      const obj3 = { type: "UPLOAD_ATTACHMENT_ADD_FILES", channelId, files: items, draftType, allowOptimization };
      items = [file];
      obj2.dispatch(obj3);
    }
  },
  remove(channelId, id, draftType) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_ATTACHMENT_REMOVE_FILE", channelId, id, draftType };
    obj.dispatch(obj2);
  },
  removeFiles(channelId, items3, InteractionModal) {
    const obj = DispatcherDefault;
    const obj2 = {
      type: "UPLOAD_ATTACHMENT_REMOVE_FILES",
      channelId,
      attachmentIds: items3,
      draftType: InteractionModal,
    };
    obj.dispatch(obj2);
  },
  clearAll(channelId, draftType) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_ATTACHMENT_CLEAR_ALL_FILES", channelId, draftType };
    obj.dispatch(obj2);
  },
  update(channelId, id, draftType, arg3) {
    let description;
    let filename;
    let spoiler;
    let thumbnail;
    ({ description, filename, spoiler, thumbnail } = arg3);
    const obj = DispatcherDefault;
    const obj2 = {
      type: "UPLOAD_ATTACHMENT_UPDATE_FILE",
      channelId,
      id,
      filename,
      description,
      thumbnail,
      spoiler,
      draftType,
    };
    obj.dispatch(obj2);
  },
  setUploads(uploads) {
    let channelId;
    let draftType;
    let mapped;
    let resetState;
    uploads = uploads.uploads;
    ({ channelId, draftType, resetState } = uploads);
    const obj = { type: "UPLOAD_ATTACHMENT_SET_UPLOADS", channelId, uploads: mapped, draftType };
    mapped = uploads;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (resetState) {
      mapped = uploads.map((resetState) => resetState.resetState());
    }
    dispatch(obj);
  },
  setFile(arg0) {
    let allowOptimization;
    let channelId;
    let draftType;
    let file;
    let id;
    ({ file, channelId, id, draftType, allowOptimization } = arg0);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "UPLOAD_ATTACHMENT_SET_FILE", channelId, id, file, draftType, allowOptimization });
  },
};
let result = size.fileFinishedImporting("actions/UploadAttachmentActionCreators.tsx");

export default obj;
