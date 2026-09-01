// discord_app/modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import shouldRunDefault from "native/channels/ZoomedInTelemetry.tsx";

const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    let obj = shouldRunDefault;
    obj = {};
    const merged = Object.assign(arg0);
    obj.source = "zoomed_in";
    obj.append(AnalyticEvents.HTTP_REQUEST, obj);
  } catch (err) {}
}
