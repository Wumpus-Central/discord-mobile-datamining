// === Module 11197: CheckpointForwardPreview ===

// Module 11197 (CheckpointForwardPreview)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 11198 */;
import size from "module_2" /* 2 */;

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
};