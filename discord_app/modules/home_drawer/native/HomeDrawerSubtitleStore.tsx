// === Module 16025: keys ===

// Module 16025 (keys)
import set from "set" /* 2 */;
import keys from "keys" /* 560 */;

let c0 = null;
const obj = keys.create((arg0, arg1) => {
  c0 = arg0;
  closure_1 = arg1;
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
      if (null != _null) {
        const _clearInterval = clearInterval;
        clearInterval(_null);
        _null = null;
      }
      _null({ currentType: "voice" });
    }
  };
});
const result = set.fileFinishedImporting("modules/home_drawer/native/HomeDrawerSubtitleStore.tsx");

export default obj;