// === Module 8034: generateHydrationId ===

// Module 8034 (generateHydrationId)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/generateHydrationId.tsx");

export const generateHydrationId = function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
};