// discord_app/actions/DraftActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

let obj = {
  clearDraft(id, ThreadSettings) {
    const obj = DispatcherDefault;
    const obj2 = { type: "DRAFT_CLEAR", channelId: id, draftType: ThreadSettings };
    obj.dispatch(obj2);
  },
  clearDraftCommand(channelId, draftType) {
    const obj = DispatcherDefault;
    const obj2 = { type: "DRAFT_COMMAND_CLEAR", channelId, draftType };
    obj.dispatch(obj2);
  },
  saveDraft(id, result1, ChannelMessage, toDraftCommandResult) {
    const obj = DispatcherDefault;
    const obj2 = {
      type: "DRAFT_SAVE",
      channelId: id,
      draft: result1,
      draftType: ChannelMessage,
      command: toDraftCommandResult,
    };
    obj.dispatch(obj2);
  },
  changeDraft(id, draft, ChannelMessage, command) {
    const obj = DispatcherDefault;
    const obj2 = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage, command };
    obj.dispatch(obj2);
  },
  changeThreadSettings(id, draft) {
    const obj = DispatcherDefault;
    const obj2 = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj2);
  },
  changeScheduledMessage(channelId, draft) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SCHEDULED_MESSAGE_DRAFT_CHANGE", channelId, draft };
    obj.dispatch(obj2);
  },
};
const result = size.fileFinishedImporting("actions/DraftActionCreators.tsx");

export default obj;
