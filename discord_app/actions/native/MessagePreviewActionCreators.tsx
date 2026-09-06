// discord_app/actions/native/MessagePreviewActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ Endpoints: c3, MAX_MESSAGES_PER_CHANNEL: closure_4 } = Constants);
const result = size.fileFinishedImporting("actions/native/MessagePreviewActionCreators.tsx");

export default {
  fetchMessages(channelId, around) {
    _require = channelId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = {
      url: closure_3.MESSAGES(channelId),
      query: { limit, around },
      retries: 2,
      oldFormErrors: true,
      rejectWithError: true,
    };
    value = HTTP.get(request);
    value.then((body) => {
      const obj = { type: "LOAD_MESSAGES_AROUND_SUCCESS", channelId, messages: body.body, around };
      obj.dispatch(obj);
    });
  },
  clearMessages() {
    DispatcherDefault.dispatch({ type: "CLEAR_MESSAGES_AROUND_SUCCESS" });
  },
};
