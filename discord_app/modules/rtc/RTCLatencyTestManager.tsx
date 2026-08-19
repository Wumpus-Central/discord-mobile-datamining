// === Module 16694: _terminate ===

// Module 16694 (_terminate)
import timestampDefault from "timestamp" /* 3 */;
import obj132Default from "obj132" /* 687 */;
import initializeDefault from "initialize" /* 5038 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import initialize from "initialize" /* 4565 */;
import { Features } from "DesktopSources" /* 4529 */;

let require = fn;
const SECOND = obj132Default.Millis.SECOND;
let closure_7 = 30 * obj132Default.Millis.SECOND;
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
      const mapped = body.map((item, index) => item.region);
      if (closure_4.shouldPerformLatencyTest(mapped)) {
        mediaEngine = mediaEngine.getMediaEngine();
        const rankRtcRegionsResult = mediaEngine.rankRtcRegions(body);
        mediaEngine.rankRtcRegions(body).then((result) => {
          closure_1_8.verbose("RTC region latency test completed, ranked regions are: ", result);
          result = mapped(closure_1_2[6]).completeRTCLatencyTest(result, mapped);
        }).catch((error) => logger.warn(error));
        const nextPromise = mediaEngine.rankRtcRegions(body).then((result) => {
          closure_1_8.verbose("RTC region latency test completed, ranked regions are: ", result);
          result = mapped(closure_1_2[6]).completeRTCLatencyTest(result, mapped);
        });
      } else {
        const _HermesInternal = HermesInternal;
        closure_8.verbose("RTC cached ranked preferred regions are " + closure_4.getPreferredRegions());
      }
    };
    applyArgumentsResult._fetchAndScheduleRefetch = function _fetchAndScheduleRefetch() {
      let num = 1;
      if (closure_1_3.supports(Features.PORT_AWARE_LATENCY_TESTING)) {
        num = 2;
      }
      const rTCLatencyTestRegions = applyArgumentsResult(dependencyMap[6]).fetchRTCLatencyTestRegions(num);
      obj = applyArgumentsResult(dependencyMap[6]);
      rTCLatencyTestRegions.then((result) => closure_0._handleTestRegionsResponse(result.body)).catch((error) => logger.warn(error));
      applyArgumentsResult.refetchTimeout = setTimeout(applyArgumentsResult._fetchAndScheduleRefetch, 360 * obj132Default.Millis.MINUTE);
    };
    applyArgumentsResult._handleConnectionOpen = function _handleConnectionOpen() {
      if (null != window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT) {
        if (applyArgumentsResult(dependencyMap[7]).isPlatformEmbedded) {
          const _Math = Math;
          const _Math2 = Math;
          const rounded = Math.floor(SECOND + Math.random() * closure_1_7);
          if (null != applyArgumentsResult.refetchTimeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(applyArgumentsResult.refetchTimeout);
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
let result = require("obj132").fileFinishedImporting("modules/rtc/RTCLatencyTestManager.tsx");

export default rTCLatencyTestManager;