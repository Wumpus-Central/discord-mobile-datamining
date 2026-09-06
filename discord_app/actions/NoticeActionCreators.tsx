// discord_app/actions/NoticeActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    let obj = { type: "NOTICE_SHOW", notice: null };
    obj = { id, type, message, buttonText, callback };
    obj.notice = obj;
    obj.dispatch(obj);
  },
  dismiss(arg0) {
    const obj = { type: "NOTICE_DISMISS" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  },
};
