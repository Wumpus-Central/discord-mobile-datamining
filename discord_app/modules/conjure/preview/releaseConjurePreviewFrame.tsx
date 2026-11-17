// === Module 7357: releaseConjurePreviewFrame ===

// Module 7357 (releaseConjurePreviewFrame)
import conjurePreviewSurface from "conjurePreviewSurface" /* 7349 */;
import frameRunsInBackgroundDefault from "frameRunsInBackground" /* 7358 */;
import leaveFrame from "leaveFrame" /* 7359 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/releaseConjurePreviewFrame.tsx");

export default function releaseConjurePreviewFrame(arg0) {
  const conjureBuilderPreviewFrames = conjurePreviewSurface.getConjureBuilderPreviewFrames(arg0);
  for (const item10013 of conjureBuilderPreviewFrames) {
    if (!frameRunsInBackgroundDefault(item10013, UnsyncedUserSettingsStore)) {
      let obj2 = leaveFrame;
      let leaveFrameResult = obj2.leaveFrame(item10013.id);
    }
    continue;
  }
};