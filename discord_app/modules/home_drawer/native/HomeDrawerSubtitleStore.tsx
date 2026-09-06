// discord_app/modules/home_drawer/native/HomeDrawerSubtitleStore.tsx
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

let c0 = null;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerSubtitleStore.tsx");

export default module_560.create((arg0, arg1) => {
  closure_0 = arg0;
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
        if ("voice" === closure_1_1().currentType) {
          str = "activity";
        }
        closure_1_0({ currentType: str });
      }, 3500);
    },
    stopTimer() {
      if (null != c0) {
        const _clearInterval = clearInterval;
        clearInterval(c0);
        c0 = null;
      }
      closure_0({ currentType: "voice" });
    }
  };
});