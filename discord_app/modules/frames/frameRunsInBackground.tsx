// === Module 13865: frameRunsInBackground ===

// Module 13865 (frameRunsInBackground)
import FramesConstants from "FramesConstants" /* 6776 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground;
  if (allowConjureRunInBackground) {
    allowConjureRunInBackground = allowConjureRunInBackground.allowConjureRunInBackground;
  }
  return allowConjureRunInBackground;
};