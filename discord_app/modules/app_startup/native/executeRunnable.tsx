// discord_app/modules/app_startup/native/executeRunnable.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import RequestGatewaySocketAll from "../../gateway/RequestGatewaySocket.tsx";
import PauseGatewaySocketAll from "../../gateway/PauseGatewaySocket.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
const NativeAppStartup = fn(17228);
({ init: hasOwnProperty, applicationReady: metroRequire } = NativeAppStartup);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_startup/native/executeRunnable.tsx");

export default function executeRunnable(arg0, arg1) {
  closure_0 = arg0;
  importDefault = arg1;
  new LoggerDefault(arg0).log("Loading the " + arg0 + " Discord runnable");
  const obj = new LoggerDefault(arg0);
  PauseGatewaySocketAll.setIsPaused(false);
  const combined = "executeRunnable:" + arg0;
  return RequestGatewaySocketAll.withRequest(
    combined,
    asyncGeneratorStep(async () => {
      closure_0(15).identifyWebSocket();
      const init = closure_1(9).init;
      await init.measureAsync(closure_1_5);
      await promise.promise;
      const _HermesInternal = HermesInternal;
      v2(7757).startBridgeTo("AppContainer:" + closure_129_0.toLowerCase());
      return closure_1(10).time("\u{1F3C3}", "Run", () => {
        const Emitter = closure_1(c3[8]).Emitter;
        return Emitter.batched(closure_1_1);
      });
    }),
  );
}
