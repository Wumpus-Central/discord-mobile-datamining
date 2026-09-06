// === Module 16805: NoticeActionCreators ===

// Module 16805 (NoticeActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

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
  }
};