// === Module 16960: NoticeActionCreators ===

// Module 16960 (NoticeActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    const obj2 = { type: "NOTICE_SHOW", notice: { id, type, message, buttonText, callback } };
    DispatcherDefault.dispatch(obj2);
  },
  dismiss(arg0) {
    const merged = Object.assign(arg0);
    DispatcherDefault.dispatch({ type: "NOTICE_DISMISS" });
  }
};