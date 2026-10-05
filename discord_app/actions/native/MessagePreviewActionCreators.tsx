// discord_app/actions/native/MessagePreviewActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Endpoints: c3, MAX_MESSAGES_PER_CHANNEL: closure_4 } = Constants);
let obj = {
  fetchMessages(channelId, around) {
    let obj;
    _require = channelId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = {
      url: closure_3.MESSAGES(channelId),
      query: obj,
      retries: 2,
      oldFormErrors: true,
      rejectWithError: true,
    };
    obj = { limit, around };
    const value = HTTP.get(request);
    value.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "LOAD_MESSAGES_AROUND_SUCCESS", channelId, messages: body.body, around };
      obj.dispatch(obj2);
    });
  },
  clearMessages() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CLEAR_MESSAGES_AROUND_SUCCESS" });
  },
};
const result = size.fileFinishedImporting("actions/native/MessagePreviewActionCreators.tsx");

export default obj;
