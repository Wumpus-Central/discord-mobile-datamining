// === Module 16644: MessagePreviewActionCreators ===

// Module 16644 (MessagePreviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ Endpoints: c3, MAX_MESSAGES_PER_CHANNEL: closure_4 } = Constants);
const result = size.fileFinishedImporting("actions/native/MessagePreviewActionCreators.tsx");

export default {
  fetchMessages(channelId, around) {
    _require = channelId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_3.MESSAGES(channelId), query: { limit, around }, retries: 2, oldFormErrors: true, rejectWithError: true };
    value = HTTP.get(request);
    value.then((body) => {
      const obj = { type: "LOAD_MESSAGES_AROUND_SUCCESS", channelId, messages: body.body, around };
      obj.dispatch(obj);
    });
  },
  clearMessages() {
    DispatcherDefault.dispatch({ type: "CLEAR_MESSAGES_AROUND_SUCCESS" });
  }
};