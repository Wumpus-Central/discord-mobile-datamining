// === Module 18947: navigationTTIEnabled ===

// Module 18947 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16524 */;
import NavigationTTIExperiment2 from "NavigationTTIExperiment" /* 18948 */;
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