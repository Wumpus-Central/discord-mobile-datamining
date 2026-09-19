// === Module 16863: navigationTTIEnabled ===

// Module 16863 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14664 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};