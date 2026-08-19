// === Module 7524: dispatcher ===

// Module 7524 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(id, ThreadSettings) {
    const obj = { type: "DRAFT_CLEAR", channelId: id, draftType: ThreadSettings };
    obj.dispatch(obj);
  },
  saveDraft(id, result, ChannelMessage) {
    const obj = { type: "DRAFT_SAVE", channelId: id, draft: result, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeDraft(id, draft, ChannelMessage) {
    const obj = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeThreadSettings(id, draft) {
    const obj = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj);
  },
  changeScheduledMessage(closure_0, draft) {
    const obj = { type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId: closure_0, draft };
    obj.dispatch(obj);
  }
};