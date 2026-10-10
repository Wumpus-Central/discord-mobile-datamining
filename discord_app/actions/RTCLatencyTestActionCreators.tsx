// === Module 18179: RTCLatencyTestActionCreators ===

// Module 18179 (RTCLatencyTestActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/RTCLatencyTestActionCreators.tsx");

export const fetchRTCLatencyTestRegions = function fetchRTCLatencyTestRegions(arg0) {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: "https:" + window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT + "?v=" + arg0, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const completeRTCLatencyTest = function completeRTCLatencyTest(latencyRankedRegions, mapped) {
  DispatcherDefault.dispatch({ type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions, geoRankedRegions: mapped });
};