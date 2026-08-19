// === Module 16496: trackHttpRequest ===

// Module 16496 (trackHttpRequest)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import apexExperiment from "apexExperiment" /* 16497 */;
import trackZoomedInHttpRequestDefault from "trackZoomedInHttpRequest" /* 16498 */;

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