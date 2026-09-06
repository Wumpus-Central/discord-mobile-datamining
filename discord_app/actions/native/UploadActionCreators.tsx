// discord_app/actions/native/UploadActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import DraftStore from "../../stores/DraftStore.tsx";
import UploadStore from "../../stores/UploadStore.tsx";

const DraftType = fn(4901).DraftType;
const size = fn(2);
const result = size.fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default {
  restoreFailedUpload(messageId, file) {
    const obj = { type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file };
    obj.dispatch(obj);
  },
  cancel(channelId, file) {
    let obj = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
    obj.dispatch(obj);
    const messageForFile = UploadStore.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === DraftStore.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        obj = { type: "DRAFT_SAVE", channelId: null, draft: null, draftType: null };
        ({ channel_id: obj4.channelId, content: obj4.draft } = messageForFile);
        obj.draftType = DraftType.ChannelMessage;
        DispatcherDefault.dispatch(obj);
        const tmpResult = DispatcherDefault;
      }
    }
  },
  cancelUploadItem(found, itemId) {
    const obj = { type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId };
    obj.dispatch(obj);
  },
};
