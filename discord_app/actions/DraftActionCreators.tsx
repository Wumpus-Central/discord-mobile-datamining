// discord_app/actions/DraftActionCreators.tsx
import { dispatcher } from "../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(id, ThreadSettings) {
    let obj = dispatcher;
    obj = { type: "DRAFT_CLEAR", channelId: id, draftType: ThreadSettings };
    obj.dispatch(obj);
  },
  saveDraft(id, result, ChannelMessage) {
    let obj = dispatcher;
    obj = { type: "DRAFT_SAVE", channelId: id, draft: result, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeDraft(id, draft, ChannelMessage) {
    let obj = dispatcher;
    obj = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeThreadSettings(id, draft) {
    let obj = dispatcher;
    obj = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj);
  },
  changeScheduledMessage(closure_0, draft) {
    let obj = dispatcher;
    obj = { type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId: closure_0, draft };
    obj.dispatch(obj);
  }
};