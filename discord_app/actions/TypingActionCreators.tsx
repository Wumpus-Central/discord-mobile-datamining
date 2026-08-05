// discord_app/actions/TypingActionCreators.tsx
import { dispatcher } from "../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/TypingActionCreators.tsx");

export default {
  startTyping(id) {
    let obj = dispatcher;
    obj = { type: "TYPING_START_LOCAL", channelId: id };
    obj.dispatch(obj);
  },
  stopTyping(id) {
    let obj = dispatcher;
    obj = { type: "TYPING_STOP_LOCAL", channelId: id };
    obj.dispatch(obj);
  }
};