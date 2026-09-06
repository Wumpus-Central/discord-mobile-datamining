// === Module 17285: trackZoomedInHttpRequest ===

// Module 17285 (trackZoomedInHttpRequest)
import Constants from "Constants" /* 1074 */;
import ZoomedInTelemetryDefault from "ZoomedInTelemetry" /* 1899 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    let obj = ZoomedInTelemetryDefault;
    obj = {};
    const merged = Object.assign(arg0);
    obj.source = "zoomed_in";
    obj.append(AnalyticEvents.HTTP_REQUEST, obj);
  } catch (err) {
  }
};