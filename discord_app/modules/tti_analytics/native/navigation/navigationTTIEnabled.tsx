// === Module 16175: navigationTTIEnabled ===

// Module 16175 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 13882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};