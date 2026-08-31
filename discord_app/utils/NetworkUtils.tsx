// === Module 1473: awaitOnline ===

// Module 1473 (awaitOnline)
import set from "set" /* 2 */;
import notifyListeners from "notifyListeners" /* 1474 */;

let closure_2 = [];
let c3 = false;
const obj = {};
const merged = Object.assign(notifyListeners.default);
obj.awaitOnline = function awaitOnline() {
  return new Promise((arg0) => {
    if (_default.isOnline()) {
      return arg0();
    } else {
      function whenOnline(arg0) {
        const item = closure_1_2.forEach((arg0) => arg0());
        closure_1_2.length = 0;
        c3 = false;
        whenOnline(closure_1_1[0]).default.removeOnlineCallback(whenOnline);
      }
      arr = arr.push(arg0);
      if (!c3) {
        c3 = true;
        tmp(tmp2[0]).default.addOnlineCallback(whenOnline);
      }
    }
    _default = whenOnline(table[0]).default;
    tmp = whenOnline;
    tmp2 = table;
  });
};
const result = set.fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;