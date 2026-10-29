// === Module 13210: CheckpointForwardPreview ===

// Module 13210 (CheckpointForwardPreview)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import CheckpointConstants from "CheckpointConstants" /* 6054 */;
import Checkpoint2025ForwardPreviewDefault from "Checkpoint2025ForwardPreview" /* 13211 */;
import Checkpoint2026ForwardPreviewDefault from "Checkpoint2026ForwardPreview" /* 13214 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointForwardPreview(checkpointData) {
  const cResult = c.c(4);
  checkpointData = checkpointData.checkpointData;
  const version = checkpointData.version;
  if (CheckpointVersions.V2025 === version) {
    if (cResult[0] !== checkpointData) {
      const obj2 = { checkpointData };
      const tmp12 = jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
      cResult[0] = checkpointData;
      cResult[1] = tmp12;
      let tmp9 = tmp12;
    } else {
      tmp9 = cResult[1];
    }
    return tmp9;
  } else if (tmp3.V2026 === version) {
    if (cResult[2] !== checkpointData) {
      const obj3 = { checkpointData };
      const tmp8 = jsx(Checkpoint2026ForwardPreviewDefault, { checkpointData });
      cResult[2] = checkpointData;
      cResult[3] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[3];
    }
    return tmp5;
  } else {
    return null;
  }
}) : (function CheckpointForwardPreview(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  const version = checkpointData.version;
  if (CheckpointVersions.V2025 === version) {
    const obj2 = { checkpointData };
    return jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
  } else if (tmp.V2026 === version) {
    const obj = { checkpointData };
    return jsx(Checkpoint2026ForwardPreviewDefault, { checkpointData });
  } else {
    return null;
  }
});