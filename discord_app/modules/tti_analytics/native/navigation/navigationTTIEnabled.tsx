// === Module 16470: navigationTTIEnabled ===

// Module 16470 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14152 */;
import NavigationTTIExperiment2 from "NavigationTTIExperiment" /* 16471 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};