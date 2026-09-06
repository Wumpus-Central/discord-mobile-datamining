// === Module 17285: trackZoomedInHttpRequest ===

// Module 17285 (trackZoomedInHttpRequest)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import shouldRunDefault from "shouldRun" /* 1899 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    let obj = shouldRunDefault;
    obj = {};
    const merged = Object.assign(arg0);
    obj.source = "zoomed_in";
    obj.append(AnalyticEvents.HTTP_REQUEST, obj);
  } catch (err) {
  }
};