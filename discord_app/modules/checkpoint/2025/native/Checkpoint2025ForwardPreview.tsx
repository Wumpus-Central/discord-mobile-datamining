// discord_app/modules/checkpoint/2025/native/Checkpoint2025ForwardPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import CheckpointUtils from "../CheckpointUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import checkpoint_CheckpointConstants from "../CheckpointConstants.tsx";
import CheckpointColors from "../CheckpointColors.native.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CheckpointPersonas = checkpoint_CheckpointConstants.CheckpointPersonas;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/2025/native/Checkpoint2025ForwardPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Checkpoint2025ForwardPreview(checkpointData) {
      const cResult = c.c(9);
      let num = checkpointData.checkpointData.cardId;
      if (num == null) {
        num = 0;
      }
      const values = Object.values(CheckpointPersonas);
      let NINE = values.find((item) => item === num);
      if (typeof NINE !== "number") {
        NINE = CheckpointPersonas.NINE;
      }
      const tmp5 = CheckpointColors.CHECKPOINT_PERSONA_COLORS[NINE];
      if (cResult[0] !== tmp5.primaryColor) {
        const obj2 = { backgroundColor: tmp5.primaryColor };
        cResult[0] = tmp5.primaryColor;
        cResult[1] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== num) {
        const cardAssetUrl = CheckpointUtils.getCardAssetUrl(num);
        cResult[2] = num;
        cResult[3] = cardAssetUrl;
        let tmp7 = cardAssetUrl;
        const tmpResult = CheckpointUtils;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp7) {
        const obj3 = { uri: tmp7 };
        cResult[4] = tmp7;
        cResult[5] = obj3;
        let tmp9 = obj3;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp9) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      const tmp11 = jsx(FastImageDefault, { style: tmp6, width: 56, height: 56, source: tmp9 });
      cResult[6] = tmp6;
      cResult[7] = tmp9;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
  : function Checkpoint2025ForwardPreview(checkpointData) {
      let num = checkpointData.checkpointData.cardId;
      if (num == null) {
        num = 0;
      }
      const values = Object.values(CheckpointPersonas);
      let NINE = values.find((item) => item === num);
      if (typeof NINE !== "number") {
        NINE = CheckpointPersonas.NINE;
      }
      const size = { style: null, width: 56, height: 56, source: null };
      const obj = { backgroundColor: CheckpointColors.CHECKPOINT_PERSONA_COLORS[NINE].primaryColor };
      size.style = obj;
      const obj2 = { uri: null };
      obj2.uri = CheckpointUtils.getCardAssetUrl(num);
      size.source = obj2;
      return <tmp2 style={null} width={56} height={56} source={null} />;
    };
