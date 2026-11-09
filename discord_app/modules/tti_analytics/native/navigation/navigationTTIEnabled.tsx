// === Module 18960: navigationTTIEnabled ===

// Module 18960 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16534 */;
import NavigationTTIExperiment2 from "NavigationTTIExperiment" /* 18961 */;
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