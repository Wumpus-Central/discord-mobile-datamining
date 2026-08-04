// discord_app/utils/NetworkUtils.tsx
let closure_2 = [];
let c3 = false;
const obj = {};
const merged = Object.assign(require("notifyListeners").default);
obj.awaitOnline = function awaitOnline() {
  return new Promise((arg0) => {
    if (_default.isOnline()) {
      return arg0();
    } else {
      function whenOnline(arg0) {
        const item = outer1_2.forEach((arg0) => arg0());
        outer1_2.length = 0;
        let c3 = false;
        whenOnline(outer1_1[0]).default.removeOnlineCallback(whenOnline);
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
const result = require("set").fileFinishedImporting("utils/NetworkUtils.tsx");

export default obj;