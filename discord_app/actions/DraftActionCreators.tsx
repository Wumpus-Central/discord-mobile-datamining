// === Module 7879: DraftActionCreators ===

// Module 7879 (DraftActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(id, ThreadSettings) {
    DispatcherDefault.dispatch({ type: "DRAFT_CLEAR", channelId: id, draftType: ThreadSettings });
  },
  clearDraftCommand(channelId, draftType) {
    DispatcherDefault.dispatch({ type: "DRAFT_COMMAND_CLEAR", channelId, draftType });
  },
  saveDraft(id, result1, ChannelMessage, toDraftCommandResult) {
    DispatcherDefault.dispatch({ type: "DRAFT_SAVE", channelId: id, draft: result1, draftType: ChannelMessage, command: toDraftCommandResult });
  },
  changeDraft(id, draft, ChannelMessage, command) {
    DispatcherDefault.dispatch({ type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage, command });
  },
  changeThreadSettings(id, draft) {
    DispatcherDefault.dispatch({ type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft });
  },
  changeScheduledMessage(channelId, draft) {
    DispatcherDefault.dispatch({ type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId, draft });
  }
};