// === Module 16881: navigationTTIEnabled ===

// Module 16881 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14676 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  return isTTITest.isTTITest;
};