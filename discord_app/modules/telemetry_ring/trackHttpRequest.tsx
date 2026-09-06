// discord_app/modules/telemetry_ring/trackHttpRequest.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest.android.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackHttpRequest.tsx");

export default function trackHttpRequest(url) {
  let obj = {};
  const merged = Object.assign(url);
  let replaced = str;
  if (null != url.url) {
    replaced = str.split(/[?#]/)[0].replace(/\d+/g, "#");
    const str2 = str.split(/[?#]/)[0];
  }
  obj.url = replaced;
  trackZoomedInHttpRequestDefault(obj);
  const random = Math.random();
  if (random < obj2.getHttpRequestSampleRate()) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.source = "sample";
    AnalyticsUtilsDefault.track(AnalyticEvents.HTTP_REQUEST, obj);
    const tmp3Result = AnalyticsUtilsDefault;
  }
}
