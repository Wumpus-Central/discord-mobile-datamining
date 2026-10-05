// === Module 1468: NetworkUtils ===

// Module 1468 (NetworkUtils)
import utils_NetworkUtils from "utils/NetworkUtils" /* 1469 */;
import size from "module_2" /* 2 */;

let closure_2 = [];
let c3 = false;
const obj = {
  awaitOnline() {
    const promise = new Promise((fn) => {
      let whenOnline;
      let _default = whenOnline(closure_1[0]).default;
      const tmp = whenOnline;
      if (_default.isOnline()) {
        return fn();
      } else {
        whenOnline = function whenOnline() {
          const item = closure_2_2.forEach((fn) => fn());
          closure_2_2.length = 0;
          c3 = false;
          const _default = utils_NetworkUtils.default;
          _default.removeOnlineCallback(whenOnline);
        };
        closure_2.push(fn);
        const tmp5 = c3;
        if (!tmp5) {
          c3 = true;
          const _default2 = tmp(closure_1[0]).default;
          _default2.addOnlineCallback(whenOnline);
        }
      }
    });
    return promise;
  }
};
const merged = Object.assign(utils_NetworkUtils.default);
const result = size.fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;