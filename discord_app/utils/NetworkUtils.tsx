// === Module 1461: NetworkUtils ===

// Module 1461 (NetworkUtils)
import utils_NetworkUtils from "utils/NetworkUtils" /* 1462 */;
import size from "module_2" /* 2 */;

let closure_2 = [];
let c3 = false;
const obj = {};
const merged = Object.assign(utils_NetworkUtils.default);
obj.awaitOnline = function awaitOnline() {
  return new Promise((fn) => {
    if (_default.isOnline()) {
      return fn();
    } else {
      function whenOnline() {
        const item = closure_2_2.forEach((fn) => fn());
        closure_2_2.length = 0;
        c3 = false;
        utils_NetworkUtils.default.removeOnlineCallback(whenOnline);
      }
      closure_2.push(fn);
      if (!c3) {
        c3 = true;
        tmp(1462).default.addOnlineCallback(whenOnline);
        const _default2 = tmp(1462).default;
      }
    }
    _default = whenOnline(1462).default;
    tmp = whenOnline;
  });
};
const result = size.fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;