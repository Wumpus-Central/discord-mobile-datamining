// discord_app/actions/DraftActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import dispatcherDefault from "../Dispatcher.tsx";

const result = set.fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(id, ThreadSettings) {
    let obj = dispatcherDefault;
    obj = { type: "DRAFT_CLEAR", channelId: id, draftType: ThreadSettings };
    obj.dispatch(obj);
  },
  clearDraftCommand(channelId, draftType) {
    let obj = dispatcherDefault;
    obj = { type: "DRAFT_COMMAND_CLEAR", channelId, draftType };
    obj.dispatch(obj);
  },
  saveDraft(id, result, ChannelMessage, toDraftCommandResult) {
    let obj = dispatcherDefault;
    obj = {
      type: "DRAFT_SAVE",
      channelId: id,
      draft: result,
      draftType: ChannelMessage,
      command: toDraftCommandResult,
    };
    obj.dispatch(obj);
  },
  changeDraft(id, draft, ChannelMessage) {
    let obj = dispatcherDefault;
    obj = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage, command: arg3 };
    obj.dispatch(obj);
  },
  changeThreadSettings(id, draft) {
    let obj = dispatcherDefault;
    obj = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj);
  },
  changeScheduledMessage(closure_0, draft) {
    let obj = dispatcherDefault;
    obj = { type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId: closure_0, draft };
    obj.dispatch(obj);
  },
};
