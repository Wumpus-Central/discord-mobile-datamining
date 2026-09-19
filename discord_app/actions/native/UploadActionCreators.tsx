// === Module 11998: UploadActionCreators ===

// Module 11998 (UploadActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DraftStore from "DraftStore" /* 5105 */;
import UploadStore from "UploadStore" /* 8078 */;

const DraftType = fn(5105).DraftType;
const size = fn(2);
const result = size.fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default {
  restoreFailedUpload(messageId, file) {
    DispatcherDefault.dispatch({ type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file });
  },
  cancel(channelId, file) {
    DispatcherDefault.dispatch({ type: "UPLOAD_CANCEL_REQUEST", channelId, file });
    const messageForFile = UploadStore.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === DraftStore.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        const obj3 = { type: "DRAFT_SAVE", channelId: null, draft: null, draftType: null };
        ({ channel_id: obj4.channelId, content: obj4.draft } = messageForFile);
        obj3.draftType = DraftType.ChannelMessage;
        DispatcherDefault.dispatch(obj3);
        const tmpResult = DispatcherDefault;
      }
    }
    const obj2 = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
  },
  cancelUploadItem(found, itemId) {
    DispatcherDefault.dispatch({ type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId });
  }
};