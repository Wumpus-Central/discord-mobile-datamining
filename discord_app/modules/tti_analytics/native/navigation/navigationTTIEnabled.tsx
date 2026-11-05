// === Module 18909: navigationTTIEnabled ===

// Module 18909 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16479 */;
import NavigationTTIExperiment2 from "NavigationTTIExperiment" /* 18910 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
}