// === Module 19175: navigationTTIEnabled ===

// Module 19175 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16722 */;
import NavigationTTIExperiment2 from "NavigationTTIExperiment" /* 19176 */;
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