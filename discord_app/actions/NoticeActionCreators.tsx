// === Module 16024: dispatcher ===

// Module 16024 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default {
  show(type, message, buttonText, callback, id) {
    const obj = { id, type, message, buttonText, callback };
    obj.dispatch({ type: "NOTICE_SHOW", notice: obj });
  },
  dismiss(arg0) {
    const obj = { type: "NOTICE_DISMISS" };
    const merged = Object.assign(arg0);
    obj.dispatch(obj);
  }
};