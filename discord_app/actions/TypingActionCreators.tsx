// discord_app/actions/TypingActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/TypingActionCreators.tsx");

export default {
  startTyping(id) {
    const obj = { type: "TYPING_START_LOCAL", channelId: id };
    obj.dispatch(obj);
  },
  stopTyping(id) {
    const obj = { type: "TYPING_STOP_LOCAL", channelId: id };
    obj.dispatch(obj);
  },
};
