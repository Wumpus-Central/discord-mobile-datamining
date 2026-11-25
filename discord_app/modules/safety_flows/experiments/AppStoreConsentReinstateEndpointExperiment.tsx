// === Module 8037: AppStoreConsentReinstateEndpointExperiment ===

// Module 8037 (AppStoreConsentReinstateEndpointExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2026-10-app-store-consent-reinstate-endpoint", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/safety_flows/experiments/AppStoreConsentReinstateEndpointExperiment.tsx");

export function getIsAppStoreConsentReinstateEndpointEnabled(appStoreAgeSignalReport, arg1) {
  let autoTrackExposure = arg1;
  if (arg1 === undefined) {
    autoTrackExposure = true;
  }
  return config.getConfig({ location: appStoreAgeSignalReport }, { autoTrackExposure }).enabled;
}