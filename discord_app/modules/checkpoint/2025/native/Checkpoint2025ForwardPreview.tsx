// === Module 13362: Checkpoint2025ForwardPreview ===

// Module 13362 (Checkpoint2025ForwardPreview)
import jsxProd from "jsxProd" /* 21 */;
import FastImageDefault from "FastImage" /* 5712 */;
import CheckpointUtils from "CheckpointUtils" /* 6070 */;
import checkpoint_CheckpointConstants from "checkpoint/CheckpointConstants" /* 13363 */;
import CheckpointColors from "CheckpointColors" /* 13364 */;
import size from "module_2" /* 2 */;

const CheckpointPersonas = checkpoint_CheckpointConstants.CheckpointPersonas;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/2025/native/Checkpoint2025ForwardPreview.tsx");

export default function Checkpoint2025ForwardPreview(checkpointData) {
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