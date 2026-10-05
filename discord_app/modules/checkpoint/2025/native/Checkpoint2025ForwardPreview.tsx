// === Module 11327: Checkpoint2025ForwardPreview ===

// Module 11327 (Checkpoint2025ForwardPreview)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import CheckpointUtils from "CheckpointUtils" /* 5124 */;
import FastImageDefault from "FastImage" /* 5974 */;
import checkpoint_CheckpointConstants from "checkpoint/CheckpointConstants" /* 11328 */;
import CheckpointColors from "CheckpointColors" /* 11329 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointPersonas = checkpoint_CheckpointConstants.CheckpointPersonas;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((checkpointData) => {
  let tmp6;
  let tmp7;
  let tmp9;
  const obj = react;
  const cResult = obj.c(9);
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
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== num) {
    const tmpResult = CheckpointUtils;
    const cardAssetUrl = tmpResult.getCardAssetUrl(num);
    cResult[2] = num;
    cResult[3] = cardAssetUrl;
    tmp7 = cardAssetUrl;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== tmp7) {
    const obj3 = { uri: tmp7 };
    cResult[4] = tmp7;
    cResult[5] = obj3;
    tmp9 = obj3;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp6) {
    let tmp10;
    if (cResult[7] === tmp9) {
      tmp10 = cResult[8];
    }
    return tmp10;
  }
  const tmp11 = jsx(FastImageDefault, { style: tmp6, width: 56, height: 56, source: tmp9 });
  cResult[6] = tmp6;
  cResult[7] = tmp9;
  cResult[8] = tmp11;
  tmp10 = tmp11;
}) : ((checkpointData) => {
  let obj4;
  let num = checkpointData.checkpointData.cardId;
  if (num == null) {
    num = 0;
  }
  const values = Object.values(CheckpointPersonas);
  let NINE = values.find((item) => item === num);
  if (typeof NINE !== "number") {
    NINE = CheckpointPersonas.NINE;
  }
  const obj = { backgroundColor: CheckpointColors.CHECKPOINT_PERSONA_COLORS[NINE].primaryColor };
  FastImageDefault;
  const obj2 = { uri: obj4.getCardAssetUrl(num) };
  obj4 = CheckpointUtils;
  return <tmp2 style={obj} width={56} height={56} source={obj2} />;
});
const result = size.fileFinishedImporting("modules/checkpoint/2025/native/Checkpoint2025ForwardPreview.tsx");

export default tmp2;