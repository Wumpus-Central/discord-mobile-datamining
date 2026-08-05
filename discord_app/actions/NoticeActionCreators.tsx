// discord_app/actions/NoticeActionCreators.tsx
import { dispatcher } from "../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    let obj = dispatcher;
    obj = { id, type, message, buttonText, callback };
    obj.dispatch({ type: "NOTICE_SHOW", notice: obj });
  },
  dismiss(arg0) {
    let obj = dispatcher;
    obj = { type: "NOTICE_DISMISS" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};