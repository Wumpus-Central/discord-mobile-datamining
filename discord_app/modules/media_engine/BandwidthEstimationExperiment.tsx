// === Module 13098: ? ===

// Module 13098
import obj132 from "obj132" /* 2 */;
import createExperiment from "createExperiment" /* 4286 */;

const items = [{ id: 1, label: "Golive Simulcast without prober 720p@500k", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/", simulcastEnabled: true } }, { id: 2, label: "Golive Simulcast 720p@500k", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe", simulcastEnabled: true } }, { id: 3, label: "Golive with pacing", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer", simulcastEnabled: false } }, { id: 4, label: "Golive with pacing and probing", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe", simulcastEnabled: false } }, { id: 5, label: "Golive Simulcast 720p@750k", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k", simulcastEnabled: true } }, { id: 6, label: "Golive Simulcast 720p@1000k", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k", simulcastEnabled: true } }];
let closure_0 = createExperiment.createExperiment({ kind: "user", id: "2024-06_rtc_pacer__simulcast", label: "RTC Pacer & Golive Simulcast", defaultConfig: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/", simulcastEnabled: false }, treatments: items });
const result = obj132.fileFinishedImporting("modules/media_engine/BandwidthEstimationExperiment.tsx");

export default {
  getConfig(autoTrackExposure, arr) {
    currentConfig = currentConfig.getCurrentConfig({ location: "e1c55b_1" }, { autoTrackExposure });
    if (!this.supportsBandwidthEstimationExperimentFullname(currentConfig.fullname, arr)) {
      currentConfig.enabled = false;
    }
    return currentConfig;
  },
  supportsBandwidthEstimationExperimentFullname(fullname, arr) {
    const mediaEngineExperiments = this.getMediaEngineExperiments(fullname);
    if (null === mediaEngineExperiments) {
      return false;
    } else {
      for (const item10010 of mediaEngineExperiments) {
        if (arg1.includes(item10010)) {
          continue;
        } else {
          obj.return();
          let flag = false;
          return false;
        }
      }
      return true;
    }
  },
  getMediaEngineExperiments(fullname) {
    const parts = fullname.split("/");
    let found = null;
    if (3 === parts.length) {
      found = null;
      if ("bandwidth_estimation" === parts[0]) {
        const parts1 = parts[1].split(",");
        found = parts1.filter((item, index) => 0 !== item.length);
      }
    }
    return found;
  }
};