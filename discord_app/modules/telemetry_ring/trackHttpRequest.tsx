// discord_app/modules/telemetry_ring/trackHttpRequest.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import apexExperiment from "HttpRequestSampleExperiment.tsx";
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest.android.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/telemetry_ring/trackHttpRequest.tsx");

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
    expandEventPropertiesDefault.track(AnalyticEvents.HTTP_REQUEST, obj);
    const tmp3Result = expandEventPropertiesDefault;
  }
  obj2 = apexExperiment;
};