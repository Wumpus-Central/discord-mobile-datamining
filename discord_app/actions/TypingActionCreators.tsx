// discord_app/actions/TypingActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import dispatcherDefault from "../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("actions/TypingActionCreators.tsx");

export default {
  startTyping(id) {
    const obj = { type: "TYPING_START_LOCAL", channelId: id };
    obj.dispatch(obj);
  },
  stopTyping(id) {
    const obj = { type: "TYPING_STOP_LOCAL", channelId: id };
    obj.dispatch(obj);
  }
};