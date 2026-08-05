// discord_app/modules/app_startup/native/executeRunnable.tsx
import createFastConnectSocket from "createFastConnectSocket";
import linkFromAppsFlyer from "linkFromAppsFlyer";
import { timestamp } from "../../debug/Logger.tsx";

let c5;
let closure_6;
const require = arg1;
({ init: c5, applicationReady: closure_6 } = linkFromAppsFlyer);
const result = require("timestamp").fileFinishedImporting("modules/app_startup/native/executeRunnable.tsx");

export default function executeRunnable(arg0, arg1) {
  let closure_0 = arg0;
  const importDefault = arg1;
  new timestamp(arg0).log("Loading the " + arg0 + " Discord runnable");
  const obj = new timestamp(arg0);
  importAll(12814).setIsPaused(false);
  const obj2 = importAll(12814);
  const combined = "executeRunnable:" + arg0;
  return importAll(675).withRequest(combined, callback(function*() {
    const obj4 = outer1_0(15);
    obj4.identifyWebSocket();
    const init = outer1_1(9).init;
    yield init.measureAsync(outer1_5);
    yield outer1_6.promise;
    const _HermesInternal = HermesInternal;
    v0(675).startBridgeTo("AppContainer:" + closure_0.toLowerCase());
    const obj9 = v0(675);
    return outer1_1(10).time("\u{1F3C3}", "Run", () => {
      const Emitter = tmp4(table[8]).Emitter;
      return Emitter.batched(tmp4);
    });
  }));
};