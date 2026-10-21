// discord_app/modules/frames/frameRunsInBackground.tsx
import FramesConstants from "FramesConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/frameRunsInBackground.tsx");

export default function frameRunsInBackground(data, allowConjureRunInBackground) {
  allowConjureRunInBackground = isLaunched(data) && data.data.runsInBackground;
  if (allowConjureRunInBackground) {
    allowConjureRunInBackground = allowConjureRunInBackground.allowConjureRunInBackground;
  }
  return allowConjureRunInBackground;
}
