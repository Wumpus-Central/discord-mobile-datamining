// === Module 14950: keys ===

// Module 14950 (keys)
import keys from "keys";

let c0 = null;
const obj = keys.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return {
    currentType: "voice",
    startTimer() {
      if (null != interval) {
        const _clearInterval = clearInterval;
        clearInterval(interval);
      }
      interval = setInterval(() => {
        let str = "voice";
        if ("voice" === callback().currentType) {
          str = "activity";
        }
        closure_0({ currentType: str });
      }, 3500);
    },
    stopTimer() {
      if (null != callback) {
        const _clearInterval = clearInterval;
        clearInterval(callback);
        callback = null;
      }
      callback({ currentType: "voice" });
    }
  };
});
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerSubtitleStore.tsx");

export default obj;