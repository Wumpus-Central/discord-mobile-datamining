// discord_app/modules/checkpoint/native/components/CheckpointForwardPreview.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import Checkpoint2025ForwardPreviewDefault from "../../2025/native/Checkpoint2025ForwardPreview.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let checkpointData;

const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (checkpointData) => {
      const obj = react;
      const cResult = obj.c(2);
      checkpointData = checkpointData.checkpointData;
      if (CheckpointVersions.V2025 === checkpointData.version) {
        let tmp5;
        if (cResult[0] !== checkpointData) {
          const tmp8 = jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
          cResult[0] = checkpointData;
          cResult[1] = tmp8;
          tmp5 = tmp8;
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
        return jsx(Checkpoint2025ForwardPreviewDefault, { checkpointData });
      } else {
        const V2026 = tmp.V2026;
        return null;
      }
    };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default tmp2;
