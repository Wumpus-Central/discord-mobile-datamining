// discord_app/modules/checkpoint/native/components/CheckpointForwardPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import CheckpointUtils from "../../CheckpointUtils.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import CheckpointColors from "../../CheckpointColors.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function Checkpoint2025ForwardPreview(checkpointData) {
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
}
const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointForwardPreview.tsx");

export default function CheckpointForwardPreview(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  if (CheckpointVersions.V2025 === checkpointData.version) {
    const obj = { checkpointData };
    return <Checkpoint2025ForwardPreview checkpointData={checkpointData} />;
  } else {
    const V2026 = tmp.V2026;
    return null;
  }
}
