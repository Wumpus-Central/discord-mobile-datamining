// discord_app/modules/checkpoint/native/components/Checkpoint2026ForwardPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import CheckpointCardColors from "../../CheckpointCardColors.tsx";
import CheckpointExperiments from "../../CheckpointExperiments.tsx";
import useCheckpointCharacterImagesDefault from "../../hooks/useCheckpointCharacterImages.tsx";
import ExperimentalCheckpointIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalCheckpointIcon.tsx";
import get_ActivityIndicator from "../../../../../_runtime/metro/00017__.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const nativeDefault = tmp4(575);
const _modDef1653 = tmp4(1653);
const CheckpointCharacterCompositeDefault = tmp4(12436);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let obj = { preview: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, layer: null };
let obj2 = { transform: null };
let items = [{ translateY: -2 }];
obj2.transform = items;
obj.layer = obj2;
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/Checkpoint2026ForwardPreview.tsx");

export default function Checkpoint2026ForwardPreview(checkpointData) {
  checkpointData = checkpointData.checkpointData;
  let layer = closure_6();
  let tmp7Result = dependencyMap;
  const character = checkpointData.character;
  const isCheckpointCardEnabled = CheckpointExperiments.useIsCheckpointCardEnabled("Checkpoint2026ForwardPreview");
  const obj2 = CheckpointCardColors;
  if (!isCheckpointCardEnabled) {
    return null;
  } else {
    const obj3 = { style: null, children: null };
    items = [layer.preview];
    const obj4 = { backgroundColor: obj2.getCardColors(checkpointData.cardColorPalette).secondaryBackgroundColor };
    items[1] = obj4;
    obj3.style = items;
    if (null != character) {
      const obj5 = { style: null, children: null };
      const items1 = [absoluteFill.absoluteFill, ,];
      layer = layer.layer;
      items1[1] = layer;
      items1[2] = tmp6;
      obj5.style = items1;
      const obj6 = { images: tmp5 };
      tmp7Result = <tmp4 images={tmp5} />;
      obj5.children = tmp7Result;
      let tmp7Result3 = jsx(_modDef1653.View, { style: null, children: null });
    } else {
      const obj7 = { color: nativeDefault.colors.BLACK };
      tmp7Result3 = jsx(ExperimentalCheckpointIcon.ExperimentalCheckpointIcon, { color: nativeDefault.colors.BLACK });
    }
    obj3.children = tmp7Result3;
    <React4 style={null}>{null}</React4>;
  }
  tmp5 = useCheckpointCharacterImagesDefault(character, 56);
}
