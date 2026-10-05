// discord_app/actions/native/UploadActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import DraftStore2 from "../../stores/DraftStore.tsx";
import UploadStore from "../../stores/UploadStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const DraftStore = DraftStore2;

const DraftType = DraftStore2.DraftType;
let obj = {
  restoreFailedUpload(messageId, file) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file };
    obj.dispatch(obj2);
  },
  cancel(channelId, file) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
    obj.dispatch(obj2);
    const messageForFile = UploadStore.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === DraftStore.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        const obj3 = { type: "DRAFT_SAVE", channelId: null, draft: null, draftType: DraftType.ChannelMessage };
        ({ channel_id: obj4.channelId, content: obj4.draft } = messageForFile);
        const tmpResult = DispatcherDefault;
        tmpResult.dispatch(obj3);
      }
    }
  },
  cancelUploadItem(found, itemId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId };
    obj.dispatch(obj2);
  },
};
const result = size.fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default obj;
