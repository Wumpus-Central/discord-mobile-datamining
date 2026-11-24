// discord_app/modules/media/native/ImageLoadMetricsManager.native.tsx
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import NativeImageLoadMetricsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeImageLoadMetricsModule.tsx";
import buildImageLoadMetricProperties from "buildImageLoadMetricProperties.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import NetworkStore from "../../../stores/NetworkStore.tsx";
import ApexExperiment from "../../experiments/apex/index.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ PixelRatio: c3, NativeEventEmitter } = get_ActivityIndicator);
const AnalyticEvents = Constants.AnalyticEvents;
const nativeEventEmitter = new NativeEventEmitter(NativeImageLoadMetricsModuleDefault);
let closure_9 = ApexExperiment.createApexExperiment({
  name: "2026-10-mobile-image-load-metrics",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: false }, 2: { enabled: true } },
});
class ImageLoadMetricsManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleExperimentChange = function handleExperimentChange() {
      const enabled = config.getConfig({ location: "image_load_metrics_manager" }).enabled;
      if ((enabled !== null) != applyArgumentsResult.subscription) {
        if (enabled) {
          applyArgumentsResult.subscription = nativeEventEmitter.addListener(
            "ImageLoadMetricsBatchEvent",
            applyArgumentsResult.handleImageLoadMetricsBatch,
          );
          NativeImageLoadMetricsModuleDefault.setEnabled(true);
        } else {
          applyArgumentsResult.stopRecording();
        }
      }
    };
    items = [,];
    items[0] = closure_4;
    items[1] = applyArgumentsResult.handleExperimentChange;
    items1 = [];
    items1[0] = items;
    map = new Map(items1);
    applyArgumentsResult.stores = map;
    applyArgumentsResult.handleImageLoadMetricsBatch = function handleImageLoadMetricsBatch(metrics) {
      metrics = metrics.metrics;
      const item = metrics.forEach((item) => closure_1_0.trackImageLoadMetric(item));
    };
    return applyArgumentsResult;
  }
}
const prototype = ImageLoadMetricsManager.prototype;
prototype["_terminate"] = function _terminate() {
  this.stopRecording();
};
prototype["stopRecording"] = function stopRecording() {
  NativeImageLoadMetricsModuleDefault.setEnabled(false);
  const subscription = this.subscription;
  if (subscription != null) {
    subscription.remove();
  }
  this.subscription = undefined;
};
prototype["trackImageLoadMetric"] = function trackImageLoadMetric(item) {
  const imageLoadMetricProperties = buildImageLoadMetricProperties.buildImageLoadMetricProperties(item, React3.get());
  if (null != imageLoadMetricProperties) {
    const obj4 = {};
    const merged = Object.assign(imageLoadMetricProperties);
    ({ dataSavingMode: obj3.data_saving_mode, dataSavingMode: obj3.low_quality_image_mode } =
      UnsyncedUserSettingsStore);
    obj4.connection_type = NetworkStore.getType();
    obj4.effective_connection_speed = NetworkStore.getEffectiveConnectionSpeed();
    obj4.service_provider = NetworkStore.getServiceProvider();
    AnalyticsUtilsDefault.track(AnalyticEvents.IMAGE_LOADING_COMPLETED, obj4);
  }
};
const imageLoadMetricsManager = new ImageLoadMetricsManager();
const result = size.fileFinishedImporting("modules/media/native/ImageLoadMetricsManager.native.tsx");

export default imageLoadMetricsManager;
