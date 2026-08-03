// === Module 16398: _terminate ===

// Module 16398 (_terminate)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import initialize from "initialize";
import { Features } from "DesktopSources";
import "initialize";

let require = arg1;
const SECOND = require("set").Millis.SECOND;
let closure_7 = 30 * require("set").Millis.SECOND;
let obj = new require("set")("RTCLatencyTestManager");
obj.enableNativeLogger(true);
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
      if (initialize.shouldPerformLatencyTest(mapped)) {
        mediaEngine = mediaEngine.getMediaEngine();
        const rankRtcRegionsResult = mediaEngine.rankRtcRegions(body);
        mediaEngine.rankRtcRegions(body).then((url) => {
          outer1_8.verbose("RTC region latency test completed, ranked regions are: ", url);
          const result = mapped(outer1_2[6]).completeRTCLatencyTest(url, mapped);
        }).catch((arg0) => logger.warn(arg0));
        const nextPromise = mediaEngine.rankRtcRegions(body).then((url) => {
          outer1_8.verbose("RTC region latency test completed, ranked regions are: ", url);
          const result = mapped(outer1_2[6]).completeRTCLatencyTest(url, mapped);
        });
      } else {
        const _HermesInternal = HermesInternal;
        closure_8.verbose("RTC cached ranked preferred regions are " + initialize.getPreferredRegions());
      }
    };
    applyArgumentsResult._fetchAndScheduleRefetch = function _fetchAndScheduleRefetch() {
      let num = 1;
      if (outer1_3.supports(outer1_5.PORT_AWARE_LATENCY_TESTING)) {
        num = 2;
      }
      const rTCLatencyTestRegions = applyArgumentsResult(outer1_2[6]).fetchRTCLatencyTestRegions(num);
      const obj = applyArgumentsResult(outer1_2[6]);
      rTCLatencyTestRegions.then((body) => closure_0._handleTestRegionsResponse(body.body)).catch((arg0) => logger.warn(arg0));
      applyArgumentsResult.refetchTimeout = setTimeout(applyArgumentsResult._fetchAndScheduleRefetch, 360 * outer1_1(outer1_2[3]).Millis.MINUTE);
    };
    applyArgumentsResult._handleConnectionOpen = function _handleConnectionOpen() {
      if (null != window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT) {
        if (applyArgumentsResult(outer1_2[7]).isPlatformEmbedded) {
          const _Math = Math;
          const _Math2 = Math;
          const rounded = Math.floor(outer1_6 + Math.random() * outer1_7);
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
let result = require("DesktopSources").fileFinishedImporting("modules/rtc/RTCLatencyTestManager.tsx");

export default rTCLatencyTestManager;