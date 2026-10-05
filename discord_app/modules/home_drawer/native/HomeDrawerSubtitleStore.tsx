// discord_app/modules/home_drawer/native/HomeDrawerSubtitleStore.tsx
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

let c0 = null;
const obj = module_570.create((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return {
    currentType: "voice",
    startTimer() {
      let interval;
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
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerSubtitleStore.tsx");

export default obj;