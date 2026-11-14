// === Module 5151: isActionRequired ===

// Module 5151 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 5148 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 5149 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = LoginRequiredActionStore;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = UserRequiredActionStore;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};