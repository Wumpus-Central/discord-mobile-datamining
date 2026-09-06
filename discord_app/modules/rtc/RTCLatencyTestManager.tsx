// discord_app/modules/rtc/RTCLatencyTestManager.tsx
import LoggerDefault from "../debug/Logger.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import RTCLatencyTestActionCreators from "../../actions/RTCLatencyTestActionCreators.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCRegionStore from "../../stores/RTCRegionStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const Features = fn(4585).Features;
const SECOND = DurationsDefault.Millis.SECOND;
let closure_7 = 30 * DurationsDefault.Millis.SECOND;
let obj = new LoggerDefault("RTCLatencyTestManager");
obj.enableNativeLogger(true);
class RTCLatencyTestManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return applyArgumentsResult._handleConnectionOpen();
      },
    };
    applyArgumentsResult._handleTestRegionsResponse = function _handleTestRegionsResponse(body) {
      const mapped = body.map((region) => region.region);
      if (closure_4.shouldPerformLatencyTest(mapped)) {
        mediaEngine = mediaEngine.getMediaEngine();
        const rankRtcRegionsResult = mediaEngine.rankRtcRegions(body);
        mediaEngine
          .rankRtcRegions(body)
          .then((result) => {
            obj.verbose("RTC region latency test completed, ranked regions are: ", result);
            result = applyArgumentsResult(dependencyMap[6]).completeRTCLatencyTest(result, mapped);
          })
          .catch((error) => logger.warn(error));
        const nextPromise = mediaEngine.rankRtcRegions(body).then((result) => {
          obj.verbose("RTC region latency test completed, ranked regions are: ", result);
          result = applyArgumentsResult(dependencyMap[6]).completeRTCLatencyTest(result, mapped);
        });
      } else {
        const _HermesInternal = HermesInternal;
        logger.verbose("RTC cached ranked preferred regions are " + closure_4.getPreferredRegions());
      }
    };
    applyArgumentsResult._fetchAndScheduleRefetch = function _fetchAndScheduleRefetch() {
      let num = 1;
      if (MediaEngineStore.supports(Features.PORT_AWARE_LATENCY_TESTING)) {
        num = 2;
      }
      const rTCLatencyTestRegions = RTCLatencyTestActionCreators.fetchRTCLatencyTestRegions(num);
      rTCLatencyTestRegions
        .then((body) => closure_1_0._handleTestRegionsResponse(body.body))
        .catch((error) => logger.warn(error));
      applyArgumentsResult.refetchTimeout = setTimeout(
        applyArgumentsResult._fetchAndScheduleRefetch,
        360 * DurationsDefault.Millis.MINUTE,
      );
    };
    applyArgumentsResult._handleConnectionOpen = function _handleConnectionOpen() {
      if (null != window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT) {
        if (PlatformUtils.isPlatformEmbedded) {
          const _Math = Math;
          const _Math2 = Math;
          const rounded = Math.floor(SECOND + Math.random() * closure_7);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/RTCLatencyTestManager.tsx");

export default rTCLatencyTestManager;
