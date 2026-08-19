// === Module 1474: awaitOnline ===

// Module 1474 (awaitOnline)
import obj132 from "obj132" /* 2 */;
import notifyListeners from "notifyListeners" /* 1475 */;

let closure_2 = [];
let c3 = false;
const obj = {};
const merged = Object.assign(notifyListeners.default);
obj.awaitOnline = function awaitOnline() {
  return new Promise((fn) => {
    if (_default.isOnline()) {
      return fn();
    } else {
      function whenOnline(closure_1) {
        const item = closure_1_2.forEach((item, index) => item());
        closure_1_2.length = 0;
        c3 = false;
        whenOnline(closure_1_1[0]).default.removeOnlineCallback(whenOnline);
      }
      arr = arr.push(fn);
      if (!c3) {
        c3 = true;
        tmp(table[0]).default.addOnlineCallback(whenOnline);
        const _default2 = tmp(table[0]).default;
      }
    }
    _default = whenOnline(table[0]).default;
    tmp = whenOnline;
  });
};
const result = obj132.fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;