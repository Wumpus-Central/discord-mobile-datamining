// === Module 11184: Checkpoint2025ForwardPreview ===

// Module 11184 (Checkpoint2025ForwardPreview)
import jsxProd from "jsxProd" /* 21 */;
import CheckpointUtils from "CheckpointUtils" /* 5062 */;
import FastImageDefault from "FastImage" /* 5894 */;
import CheckpointColors from "CheckpointColors" /* 11185 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/2025/native/Checkpoint2025ForwardPreview.tsx");

export default function Checkpoint2025ForwardPreview(checkpointData) {
  let num = checkpointData.checkpointData.cardId;
  if (num == null) {
    num = 0;
  }
  const size = { style: null, width: 56, height: 56, source: null };
  const obj = { backgroundColor: CheckpointColors.CHECKPOINT_PERSONA_COLORS[num].primaryColor };
  size.style = obj;
  const obj2 = { uri: null };
  obj2.uri = CheckpointUtils.getCardAssetUrl(num);
  size.source = obj2;
  return <tmp style={null} width={56} height={56} source={null} />;
};