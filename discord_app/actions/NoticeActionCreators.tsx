// === Module 16979: NoticeActionCreators ===

// Module 16979 (NoticeActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = {
  show(type, message, buttonText, callback, id) {
    let obj3;
    const obj2 = { type: "NOTICE_SHOW", notice: obj3 };
    obj3 = { id, type, message, buttonText, callback };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  },
  dismiss(arg0) {
    const dispatch = DispatcherDefault.dispatch;
    const obj = { type: "NOTICE_DISMISS" };
    DispatcherDefault;
    const merged = Object.assign(arg0);
    dispatch(obj);
  }
};
const result = size.fileFinishedImporting("actions/NoticeActionCreators.tsx");

export default obj;