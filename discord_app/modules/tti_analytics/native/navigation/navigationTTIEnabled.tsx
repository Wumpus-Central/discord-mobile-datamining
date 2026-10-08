// === Module 16774: navigationTTIEnabled ===

// Module 16774 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14471 */;
import NavigationTTIExperiment2 from "NavigationTTIExperiment" /* 16775 */;
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