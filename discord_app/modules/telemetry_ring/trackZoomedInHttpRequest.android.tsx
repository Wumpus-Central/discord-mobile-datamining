// discord_app/modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx
import Constants from "../../Constants.tsx";
import ZoomedInTelemetryDefault from "native/channels/ZoomedInTelemetry.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx");

export default function trackZoomedInHttpRequest(arg0) {
  try {
    let obj = ZoomedInTelemetryDefault;
    obj = {};
    const merged = Object.assign(arg0);
    obj.source = "zoomed_in";
    obj.append(AnalyticEvents.HTTP_REQUEST, obj);
  } catch (err) {}
}
