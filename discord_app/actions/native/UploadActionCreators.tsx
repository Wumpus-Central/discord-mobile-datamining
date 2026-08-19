// discord_app/actions/native/UploadActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import handleChanged from "../../stores/DraftStore.tsx";
import { DraftType } from "../../stores/DraftStore.tsx";
import initialize from "../../stores/UploadStore.tsx";

const result = require("obj132").fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default {
  restoreFailedUpload(messageId, file) {
    const obj = { type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file };
    obj.dispatch(obj);
  },
  cancel(channelId, file) {
    let obj = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
    obj.dispatch(obj);
    messageForFile = messageForFile.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === draft.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        obj = { type: "DRAFT_SAVE", channelId: null, draft: null, draftType: null };
        ({ channel_id: obj4[1], content: obj4[2] } = messageForFile);
        obj[3] = DraftType.ChannelMessage;
        dispatcherDefault.dispatch(obj);
        const tmpResult = dispatcherDefault;
      }
    }
  },
  cancelUploadItem(found, itemId) {
    const obj = { type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId };
    obj.dispatch(obj);
  }
};