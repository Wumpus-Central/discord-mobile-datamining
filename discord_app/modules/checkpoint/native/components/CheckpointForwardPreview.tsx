// discord_app/modules/checkpoint/native/components/CheckpointForwardPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import Checkpoint2025ForwardPreviewDefault from "../../2025/native/Checkpoint2025ForwardPreview.tsx";
import Checkpoint2026ForwardPreviewDefault from "Checkpoint2026ForwardPreview.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointForwardPreview(checkpointData) {
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
    }
  : function CheckpointForwardPreview(checkpointData) {
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
    };
