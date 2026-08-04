// discord_app/actions/DraftActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/DraftActionCreators.tsx");

export default {
  clearDraft(id, ThreadSettings) {
    let obj = importDefault(709);
    obj = { type: "DRAFT_CLEAR", channelId: id, draftType: ThreadSettings };
    obj.dispatch(obj);
  },
  saveDraft(id, result, ChannelMessage) {
    let obj = importDefault(709);
    obj = { type: "DRAFT_SAVE", channelId: id, draft: result, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeDraft(id, draft, ChannelMessage) {
    let obj = importDefault(709);
    obj = { type: "DRAFT_CHANGE", channelId: id, draft, draftType: ChannelMessage };
    obj.dispatch(obj);
  },
  changeThreadSettings(id, draft) {
    let obj = importDefault(709);
    obj = { type: "THREAD_SETTINGS_DRAFT_CHANGE", channelId: id, draft };
    obj.dispatch(obj);
  }
};