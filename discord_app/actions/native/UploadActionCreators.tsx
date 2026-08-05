// discord_app/actions/native/UploadActionCreators.tsx
import handleChanged from "handleChanged";
import { DraftType } from "handleChanged";
import initialize from "initialize";
import { dispatcher } from "../../Dispatcher.tsx";

const result = require("dispatcher").fileFinishedImporting("actions/native/UploadActionCreators.tsx");

export default {
  restoreFailedUpload(messageId, file) {
    let obj = dispatcher;
    obj = { type: "UPLOAD_RESTORE_FAILED_UPLOAD", messageId, file };
    obj.dispatch(obj);
  },
  cancel(channelId, file) {
    let obj = dispatcher;
    obj = { type: "UPLOAD_CANCEL_REQUEST", channelId, file };
    obj.dispatch(obj);
    messageForFile = messageForFile.getMessageForFile(file.id);
    if (null != messageForFile) {
      if ("" === draft.getDraft(messageForFile.channel_id, DraftType.ChannelMessage)) {
        obj = { type: "DRAFT_SAVE", channelId: null, draft: null, draftType: null };
        ({ channel_id: obj4[1], content: obj4[2] } = messageForFile);
        obj[3] = tmp6.ChannelMessage;
        dispatcher.dispatch(obj);
        const tmpResult = dispatcher;
      }
      tmp6 = DraftType;
    }
  },
  cancelUploadItem(found, itemId) {
    let obj = dispatcher;
    obj = { type: "UPLOAD_ITEM_CANCEL_REQUEST", file: found, itemId };
    obj.dispatch(obj);
  }
};