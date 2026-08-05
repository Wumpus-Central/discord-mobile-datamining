// discord_app/actions/RTCLatencyTestActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/RTCLatencyTestActionCreators.tsx");

export const fetchRTCLatencyTestRegions = function fetchRTCLatencyTestRegions(arg0) {
  const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.HTTP;
  const obj = { url: "https:" + window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT + "?v=" + arg0, rejectWithError: null };
  obj[1] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx") /* sendRequest */.rejectWithMigratedError();
  return HTTP.get(obj);
};
export const completeRTCLatencyTest = function completeRTCLatencyTest(latencyRankedRegions, mapped) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions, geoRankedRegions: mapped };
  obj.dispatch(obj);
};