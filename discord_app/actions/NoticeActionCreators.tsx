// discord_app/actions/NoticeActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import dispatcherDefault from "../Dispatcher.tsx";

const result = set.fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    let obj = dispatcherDefault;
    obj = { id, type, message, buttonText, callback };
    obj.dispatch({ type: "NOTICE_SHOW", notice: obj });
  },
  dismiss(arg0) {
    let obj = dispatcherDefault;
    obj = { type: "NOTICE_DISMISS" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};