// discord_app/modules/telemetry_ring/trackHttpRequest.tsx
import { AnalyticEvents } from "ME";

const result = require("trackZoomedInHttpRequest").fileFinishedImporting("modules/telemetry_ring/trackHttpRequest.tsx");

export default function trackHttpRequest(url) {
  let obj = {};
  const merged = Object.assign(url);
  let replaced = str;
  if (null != url.url) {
    replaced = str.split(/[?#]/)[0].replace(/\d+/g, "#");
    const str2 = str.split(/[?#]/)[0];
  }
  obj.url = replaced;
  require("trackZoomedInHttpRequest.android.tsx")(obj);
  const random = Math.random();
  if (random < obj2.getHttpRequestSampleRate()) {
    obj = {};
    const merged1 = Object.assign(obj);
    obj.source = "sample";
    require("../../utils/AnalyticsUtils.tsx").track(AnalyticEvents.HTTP_REQUEST, obj);
    const tmp3Result = require("../../utils/AnalyticsUtils.tsx");
  }
};