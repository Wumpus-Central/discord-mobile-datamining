import ME from "ME";

let c3;
let c4;
({ Endpoints: c3, MAX_MESSAGES_PER_CHANNEL: c4 } = ME);
const result = require("dispatcher").fileFinishedImporting("actions/native/MessagePreviewActionCreators.tsx");

export default {
  fetchMessages(channelId, around) {
    const _require = channelId;
    let closure_1 = around;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_3.MESSAGES(channelId), query: obj, retries: 2, oldFormErrors: true, rejectWithError: true };
    obj = { limit: closure_4, around };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = around(outer1_2[2]);
      obj = { type: "LOAD_MESSAGES_AROUND_SUCCESS", channelId: closure_0, messages: body.body, around };
      obj.dispatch(obj);
    });
  },
  clearMessages() {
    importDefault(709).dispatch({ type: "CLEAR_MESSAGES_AROUND_SUCCESS" });
  }
};