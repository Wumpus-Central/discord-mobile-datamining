// discord_app/modules/media_engine/BandwidthEstimationExperiment.tsx
import createExperiment from "../experiments/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  kind: "user",
  id: "2024-06_rtc_pacer__simulcast",
  label: "RTC Pacer & Golive Simulcast",
  defaultConfig: {
    enabled: true,
    fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/",
    simulcastEnabled: false,
  },
  treatments: null,
};
const items = [
  {
    id: 1,
    label: "Golive Simulcast without prober 720p@500k",
    config: {
      enabled: true,
      fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/",
      simulcastEnabled: true,
    },
  },
  {
    id: 2,
    label: "Golive Simulcast 720p@500k",
    config: {
      enabled: true,
      fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe",
      simulcastEnabled: true,
    },
  },
  {
    id: 3,
    label: "Golive with pacing",
    config: {
      enabled: true,
      fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer",
      simulcastEnabled: false,
    },
  },
  {
    id: 4,
    label: "Golive with pacing and probing",
    config: {
      enabled: true,
      fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe",
      simulcastEnabled: false,
    },
  },
  {
    id: 5,
    label: "Golive Simulcast 720p@750k",
    config: {
      enabled: true,
      fullname:
        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k",
      simulcastEnabled: true,
    },
  },
  {
    id: 6,
    label: "Golive Simulcast 720p@1000k",
    config: {
      enabled: true,
      fullname:
        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k",
      simulcastEnabled: true,
    },
  },
];
obj.treatments = items;
let currentConfig = createExperiment.createExperiment(obj);
obj = {
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
        found = parts1.filter((item) => 0 !== item.length);
      }
    }
    return found;
  },
};
const result = size.fileFinishedImporting("modules/media_engine/BandwidthEstimationExperiment.tsx");

export default obj;
