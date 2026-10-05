// discord_app/modules/metric_kit_tracker/native/MetricKitManager.android.tsx
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class MetricKitManager extends AutomaticLifecycleManager {
  _initialize() {}
  _terminate() {}
}
const prototype = MetricKitManager.prototype;
const metricKitManager = new MetricKitManager();
const result = size.fileFinishedImporting("modules/metric_kit_tracker/native/MetricKitManager.android.tsx");

export default metricKitManager;
