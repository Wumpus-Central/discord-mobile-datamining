// === Module 17443: executeRunnable ===

// Module 17443 (executeRunnable)
import LoggerDefault from "Logger" /* 3 */;
import RequestGatewaySocketAll from "RequestGatewaySocket" /* 7266 */;
import PauseGatewaySocketAll from "PauseGatewaySocket" /* 13493 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import NativeAppStartup from "NativeAppStartup" /* 17444 */;
import size from "module_2" /* 2 */;

let closure_1, importDefault;

let hasOwnProperty;
let metroRequire;
({ init: hasOwnProperty, applicationReady: metroRequire } = NativeAppStartup);
const result = size.fileFinishedImporting("modules/app_startup/native/executeRunnable.tsx");

export default function executeRunnable(arg0, arg1) {
  let closure_0 = arg0;
  importDefault = arg1;
  const obj = new LoggerDefault(arg0);
  obj.log("Loading the " + arg0 + " Discord runnable");
  const obj2 = PauseGatewaySocketAll;
  obj2.setIsPaused(false);
  const tmp3 = RequestGatewaySocketAll;
  const withRequest = tmp3.withRequest;
  const combined = "executeRunnable:" + arg0;
  return withRequest(combined, _asyncToGenerator(async () => {
    closure_1 = tmp3;
    closure_0 = tmp3;
    const obj5 = closure_0(c3[5]);
    obj5.identifyWebSocket();
    const init = closure_1(c3[6]).init;
    await init.measureAsync(closure_1_5);
    await promise.promise;
    const _HermesInternal = HermesInternal;
    const obj9 = v2(c3[4]);
    obj9.startBridgeTo("AppContainer:" + closure_129_0.toLowerCase());
    const obj10 = closure_1(c3[7]);
    return obj10.time("\u{1F3C3}", "Run", () => {
      const Emitter = closure_1(c3[8]).Emitter;
      return Emitter.batched(closure_1_1);
    });
  }));
};