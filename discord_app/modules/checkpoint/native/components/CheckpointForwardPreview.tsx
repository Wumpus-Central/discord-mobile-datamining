// discord_app/modules/checkpoint/native/components/CheckpointForwardPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import Checkpoint2025ForwardPreviewDefault from "../../2025/native/Checkpoint2025ForwardPreview.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (checkpointData) => {
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
    }
  : (checkpointData) => {
      checkpointData = checkpointData.checkpointData;
      if (CheckpointVersions.V2025 === checkpointData.version) {
        const obj = { checkpointData };
        return jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
      } else {
        const V2026 = tmp.V2026;
        return null;
      }
    };
