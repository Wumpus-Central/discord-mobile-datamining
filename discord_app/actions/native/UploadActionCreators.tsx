// === Module 11324: ? ===

// Module 11324
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "handleChanged" /* 4854 */;
import { DraftType } from "handleChanged" /* 4854 */;
import closure_4 from "initialize" /* 7582 */;

const result = require("set").fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default {
  restoreFailedUpload(messageId, file) {
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file };
    obj.dispatch(obj);
  },
  cancel(channelId, file) {
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
    obj.dispatch(obj);
    messageForFile = messageForFile.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === draft.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        obj = { type: "DRAFT_SAVE", channelId: null, draft: null, draftType: null };
        ({ channel_id: obj4[1], content: obj4[2] } = messageForFile);
        obj[3] = tmp6.ChannelMessage;
        dispatcherDefault.dispatch(obj);
        const tmpResult = dispatcherDefault;
      }
      tmp6 = DraftType;
    }
  },
  cancelUploadItem(found, itemId) {
    let obj = dispatcherDefault;
    obj = { type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId };
    obj.dispatch(obj);
  }
};