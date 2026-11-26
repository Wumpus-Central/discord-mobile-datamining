// === Module 15481: openCheckpointFromLink ===

// Module 15481 (openCheckpointFromLink)
import PostConnectionCallbackStore from "PostConnectionCallbackStore" /* 5847 */;
import CheckpointExperiments from "CheckpointExperiments" /* 6769 */;
import openCheckpoint from "openCheckpoint" /* 12625 */;
import size from "module_2" /* 2 */;

PostConnectionCallbackStore.addPostConnectionCallback;
const result = size.fileFinishedImporting("modules/checkpoint/native/openCheckpointFromLink.tsx");

export function openCheckpointFromLink() {
  addPostConnectionCallback(() => {
    if (obj.getIsCheckpointEnabled("openCheckpointFromLink")) {
      openCheckpoint.openCheckpoint("deep_link");
      const tmpResult = openCheckpoint;
    }
    obj = CheckpointExperiments;
  });
}