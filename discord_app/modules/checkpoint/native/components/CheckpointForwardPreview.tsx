// === Module 11339: CheckpointForwardPreview ===

// Module 11339 (CheckpointForwardPreview)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 5121 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 11340 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((checkpointData) => {
  const cResult = c.c(2);
  checkpointData = checkpointData.checkpointData;
  if (CheckpointVersions.V2025 === checkpointData.version) {
    if (cResult[0] !== checkpointData) {
      const obj2 = { checkpointData };
      const tmp8 = jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
      cResult[0] = checkpointData;
      cResult[1] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  } else {
    const V2026 = tmp3.V2026;
    return null;
  }
}) : ((checkpointData) => {
  checkpointData = checkpointData.checkpointData;
  if (CheckpointVersions.V2025 === checkpointData.version) {
    const obj = { checkpointData };
    return jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
});