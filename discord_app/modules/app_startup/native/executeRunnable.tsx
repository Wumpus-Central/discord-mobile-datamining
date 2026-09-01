// === Module 16805: executeRunnable ===

// Module 16805 (executeRunnable)
import timestampDefault from "timestamp" /* 3 */;
import setRequestedByAll from "setRequestedBy" /* 675 */;
import getIsPausedAll from "getIsPaused" /* 13322 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import linkFromAppsFlyer from "linkFromAppsFlyer" /* 16806 */;

const require = arg1;
({ init: c5, applicationReady: closure_6 } = linkFromAppsFlyer);
const result = require("set").fileFinishedImporting("modules/app_startup/native/executeRunnable.tsx");

export default function executeRunnable(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  new timestampDefault(arg0).log("Loading the " + arg0 + " Discord runnable");
  const obj = new timestampDefault(arg0);
  getIsPausedAll.setIsPaused(false);
  const obj2 = getIsPausedAll;
  const combined = "executeRunnable:" + arg0;
  return setRequestedByAll.withRequest(combined, callback(function*() {
    const obj4 = closure_1_0(15);
    obj4.identifyWebSocket();
    const init = closure_1_1(9).init;
    yield init.measureAsync(closure_1_5);
    yield closure_1_6.promise;
    const _HermesInternal = HermesInternal;
    v0(675).startBridgeTo("AppContainer:" + closure_0.toLowerCase());
    const obj9 = v0(675);
    return closure_1_1(10).time("\u{1F3C3}", "Run", () => {
      const Emitter = callback(table[8]).Emitter;
      return Emitter.batched(callback);
    });
  }));
};