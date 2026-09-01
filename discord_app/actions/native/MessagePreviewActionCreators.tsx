// discord_app/actions/native/MessagePreviewActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import ME from "../../Constants.tsx";

({ Endpoints: c3, MAX_MESSAGES_PER_CHANNEL: c4 } = ME);
const result = set.fileFinishedImporting("actions/native/MessagePreviewActionCreators.tsx");

export default {
  fetchMessages(channelId, around) {
    const _require = channelId;
    closure_1 = around;
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
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
  },
};
