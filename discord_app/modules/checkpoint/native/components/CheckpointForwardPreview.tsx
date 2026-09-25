// discord_app/modules/checkpoint/native/components/CheckpointForwardPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import Checkpoint2025ForwardPreviewDefault from "../../2025/native/Checkpoint2025ForwardPreview.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default function CheckpointForwardPreview(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  if (CheckpointVersions.V2025 === checkpointData.version) {
    const obj = { checkpointData };
    return jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
}
