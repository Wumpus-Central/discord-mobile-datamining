// === Module 16376: navigationTTIEnabled ===

// Module 16376 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14077 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};