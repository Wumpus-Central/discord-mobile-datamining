// discord_app/actions/RTCLatencyTestActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/RTCLatencyTestActionCreators.tsx");

export const fetchRTCLatencyTestRegions = function fetchRTCLatencyTestRegions(arg0) {
  const HTTP = HTTPUtils.HTTP;
  const obj = {
    url: "https:" + window.GLOBAL_ENV.RTC_LATENCY_ENDPOINT + "?v=" + arg0,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
  return HTTP.get(obj);
};
export const completeRTCLatencyTest = function completeRTCLatencyTest(latencyRankedRegions, mapped) {
  const obj = { type: "RTC_LATENCY_TEST_COMPLETE", latencyRankedRegions, geoRankedRegions: mapped };
  obj.dispatch(obj);
};
