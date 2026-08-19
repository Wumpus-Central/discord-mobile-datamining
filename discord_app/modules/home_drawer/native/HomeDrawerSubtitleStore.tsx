// discord_app/modules/home_drawer/native/HomeDrawerSubtitleStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import keys from "../../../../_runtime/00644_keys.js";

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
        callback({ currentType: str });
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
const result = obj132.fileFinishedImporting("modules/home_drawer/native/HomeDrawerSubtitleStore.tsx");

export default obj;