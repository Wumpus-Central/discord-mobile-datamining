// === Module 16498: trackZoomedInHttpRequest ===

// Module 16498 (trackZoomedInHttpRequest)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import shouldRunDefault from "shouldRun" /* 13558 */;

const AnalyticEvents = ME.AnalyticEvents;
const result = obj132.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

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