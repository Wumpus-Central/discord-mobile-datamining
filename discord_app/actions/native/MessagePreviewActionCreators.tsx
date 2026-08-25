// === Module 15997: ? ===

// Module 15997
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ME from "ME" /* 676 */;

({ Endpoints: c3, MAX_MESSAGES_PER_CHANNEL: c4 } = ME);
const result = set.fileFinishedImporting("actions/native/MessagePreviewActionCreators.tsx");

export default {
  fetchMessages(channelId, around) {
    const _require = channelId;
    closure_1 = around;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_3.MESSAGES(channelId), query: obj, retries: 2, oldFormErrors: true, rejectWithError: true };
    obj = { limit: closure_4, around };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = around(closure_1_2[2]);
      obj = { type: "LOAD_MESSAGES_AROUND_SUCCESS", channelId: closure_0, messages: body.body, around };
      obj.dispatch(obj);
    });
  },
  clearMessages() {
    dispatcherDefault.dispatch({ type: "CLEAR_MESSAGES_AROUND_SUCCESS" });
  }
};