// === Module 17424: trackZoomedInHttpRequest ===

// Module 17424 (trackZoomedInHttpRequest)
import Constants from "Constants" /* 1085 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1990 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.source = "zoomed_in";
    ZoomedInTelemetryDefault.append(AnalyticEvents.HTTP_REQUEST, obj2);
  } catch (err) {
  }
};