// discord_app/modules/rtc/RTCLatencyTestManager.tsx
import timestampDefault from "../debug/Logger.tsx";
import setDefault from "../../utils/Durations.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../../stores/MediaEngineStore.tsx";
import closure_4 from "../../stores/RTCRegionStore.tsx";
import { Features } from "../../../discord_common/js/packages/media-engine/Constants.tsx";

let require = arg1;
const SECOND = setDefault.Millis.SECOND;
let closure_7 = 30 * setDefault.Millis.SECOND;
let obj = new timestampDefault("RTCLatencyTestManager");
obj.enableNativeLogger(true);
initializeDefault;
class RTCLatencyTestManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult._handleConnectionOpen();
          }
    };
    applyArgumentsResult._handleTestRegionsResponse = function _handleTestRegionsResponse(body) {
      const mapped = body.map((region) => region.region);
      if (closure_4.shouldPerformLatencyTest(mapped)) {
        mediaEngine = mediaEngine.getMediaEngine();
        const rankRtcRegionsResult = mediaEngine.rankRtcRegions(body);
        mediaEngine.rankRtcRegions(body).then((url) => {
          closure_1_8.verbose("RTC region latency test completed, ranked regions are: ", url);
          const result = mapped(closure_1_2[6]).completeRTCLatencyTest(url, mapped);
        }).catch((arg0) => logger.warn(arg0));
        const nextPromise = mediaEngine.rankRtcRegions(body).then((url) => {
          closure_1_8.verbose("RTC region latency test completed, ranked regions are: ", url);
          const result = mapped(closure_1_2[6]).completeRTCLatencyTest(url, mapped);
        });
      } else {
        const _HermesInternal = HermesInternal;
        closure_8.verbose("RTC cached ranked preferred regions are " + closure_4.getPreferredRegions());
      }
    };
    applyArgumentsResult._fetchAndScheduleRefetch = function _fetchAndScheduleRefetch() {
      let num = 1;
      if (closure_1_3.supports(closure_1_5.PORT_AWARE_LATENCY_TESTING)) {
        num = 2;
      }
      const rTCLatencyTestRegions = applyArgumentsResult(closure_1_2[6]).fetchRTCLatencyTestRegions(num);
      obj = applyArgumentsResult(closure_1_2[6]);
      rTCLatencyTestRegions.then((body) => closure_0._handleTestRegionsResponse(body.body)).catch((arg0) => logger.warn(arg0));
      applyArgumentsResult.refetchTimeout = setTimeout(applyArgumentsResult._fetchAndScheduleRefetch, 360 * closure_1_1(closure_1_2[3]).Millis.MINUTE);
    };
    applyArgumentsResult._handleConnectionOpen = function _handleConnectionOpen() {
      if (null != window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT) {
        if (applyArgumentsResult(closure_1_2[7]).isPlatformEmbedded) {
          const _Math = Math;
          const _Math2 = Math;
          const rounded = Math.floor(closure_1_6 + Math.random() * closure_1_7);
          if (null != applyArgumentsResult.refetchTimeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp4.refetchTimeout);
          }
          const _setTimeout = setTimeout;
          applyArgumentsResult.refetchTimeout = setTimeout(applyArgumentsResult._fetchAndScheduleRefetch, rounded);
        }
      }
    };
    return applyArgumentsResult;
  }
}
RTCLatencyTestManager.prototype["_terminate"] = function _terminate() {
  if (null != this.refetchTimeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(tmp.refetchTimeout);
  }
};
const rTCLatencyTestManager = new RTCLatencyTestManager();
let result = require("set").fileFinishedImporting("modules/rtc/RTCLatencyTestManager.tsx");

export default rTCLatencyTestManager;