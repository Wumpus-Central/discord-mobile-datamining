// === Module 7777: DraftActionCreators ===

// Module 7777 (DraftActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(id, ThreadSettings) {
    const obj = { type: "DRAFT_CLEAR", channelId: id, draftType: ThreadSettings };
    obj.dispatch(obj);
  },
  clearDraftCommand(channelId, draftType) {
    const obj = { type: "DRAFT_COMMAND_CLEAR", channelId, draftType };
    obj.dispatch(obj);
  },
  saveDraft(id, result1, ChannelMessage, toDraftCommandResult) {
    const obj = { type: "DRAFT_SAVE", channelId: id, draft: result1, draftType: ChannelMessage, command: toDraftCommandResult };
    obj.dispatch(obj);
  },
  changeDraft(id, draft, ChannelMessage, command) {
    const obj = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage, command };
    obj.dispatch(obj);
  },
  changeThreadSettings(id, draft) {
    const obj = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj);
  },
  changeScheduledMessage(channelId, draft) {
    const obj = { type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId, draft };
    obj.dispatch(obj);
  }
};