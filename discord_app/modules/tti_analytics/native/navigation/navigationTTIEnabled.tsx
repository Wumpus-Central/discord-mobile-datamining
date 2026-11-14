// === Module 19362: navigationTTIEnabled ===

// Module 19362 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 16840 */;
import NavigationTTIExperiment2 from "NavigationTTIExperiment" /* 19363 */;
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