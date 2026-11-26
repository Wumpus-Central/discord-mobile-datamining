// discord_app/modules/checkpoint/native/openCheckpointFromLink.tsx
import PostConnectionCallbackStore from "../../gateway/PostConnectionCallbackStore.tsx";
import CheckpointExperiments from "../CheckpointExperiments.tsx";
import openCheckpoint from "../openCheckpoint.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
