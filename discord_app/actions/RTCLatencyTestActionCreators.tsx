// === Module 16695: fetchRTCLatencyTestRegions ===

// Module 16695 (fetchRTCLatencyTestRegions)
import obj132 from "obj132" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/RTCLatencyTestActionCreators.tsx");

export const fetchRTCLatencyTestRegions = function fetchRTCLatencyTestRegions(arg0) {
  const HTTP = sendRequest.HTTP;
  const obj = { url: "https:" + window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT + "?v=" + arg0, rejectWithError: sendRequest.rejectWithMigratedError() };
  return HTTP.get(obj);
};
export const completeRTCLatencyTest = function completeRTCLatencyTest(latencyRankedRegions, mapped) {
  const obj = { type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions, geoRankedRegions: mapped };
  obj.dispatch(obj);
};