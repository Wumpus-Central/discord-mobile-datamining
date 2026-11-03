// discord_app/modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx
import CheckpointCharacterTextureUtils from "../../../character/CheckpointCharacterTextureUtils.tsx";
import CheckpointCharacterDataBinding from "../../../character/CheckpointCharacterDataBinding.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../../CheckpointStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj2 = { container: { flexGrow: 1 }, rive: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.rive = {};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStage(stage) {
  stage = stage.stage;
  const layout = stage.layout;
  const characterBottomInset = stage.characterBottomInset;
  _slicedToArray = undefined;
  height = undefined;
  let stateFromStores;
  const tmp = closure_8();
  const context = height.useContext(layout(characterBottomInset[6]));
  ({ width: c3, height } = layout(characterBottomInset[7])());
  const tmp5 = layout(characterBottomInset[8])(() =>
    CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(c3, height),
  );
  const textureScale = tmp5;
  const tmp4 = layout(characterBottomInset[7])();
  items = [stateFromStores];
  stateFromStores = stage(characterBottomInset[10]).useStateFromStores(
    items,
    () => stateFromStores.selectedCharacterTraits,
  );
  const items1 = [stage, stateFromStores, layout, characterBottomInset, height, tmp5];
  const memo = height.useMemo(
    () =>
      CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding({
        stage,
        traits: stateFromStores,
        layout,
        characterBottomInset,
        stageHeight: height,
        textureScale,
      }),
    items1,
  );
  const obj = stage(characterBottomInset[10]);
  [tmp10, tmp11] = height.useState(memo);
  const tmp9 = _slicedToArray(height.useState(memo), 2);
  const checkpointCharacterReferencedAssets = stage(characterBottomInset[12]).useCheckpointCharacterReferencedAssets({
    visibleDataBinding: tmp10,
    requestedDataBinding: memo,
    textureScale: tmp5,
  });
  const tmp13 = layout(characterBottomInset[8])(checkpointCharacterReferencedAssets);
  const obj2 = stage(characterBottomInset[12]);
  [tmp15, tmp16] = height.useState(null);
  const tmp14 = _slicedToArray(height.useState(null), 2);
  const checkpointCharacterTextureManager = stage(characterBottomInset[13]).useCheckpointCharacterTextureManager(tmp15);
  const obj3 = stage(characterBottomInset[13]);
  const obj4 = stage(characterBottomInset[14]);
  if (tmp18) {
    tmp11(memo);
  }
  let tmp22;
  if (stage.isActive) {
    tmp22 = context;
  }
  const obj5 = {
    ref: tmp22,
    style: tmp.container,
    accessible: true,
    accessibilityRole: "image",
    accessibilityLabel: null,
    children: null,
  };
  tmp18 =
    stage(characterBottomInset[14]).useCheckpointCharacterTextureSwaps({
      textureManager: checkpointCharacterTextureManager,
      referencedAssets: checkpointCharacterReferencedAssets,
      initialReferencedAssets: tmp13,
    }) && tmp10 !== memo;
  obj5.accessibilityLabel = stage(characterBottomInset[15]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj5.children = jsx(stage(characterBottomInset[16]).CheckpointCharacterRive, {
    artboard: "AB_Master",
    stateMachine: "SM_Master",
    fit: "layout",
    alignment: "center",
    referencedAssets: tmp13,
    onRiveFileChange: tmp16,
    dataBinding: tmp10,
    style: tmp.rive,
  });
  return (
    <tmp21 ref={tmp22} style={tmp.container} accessible accessibilityRole="image" accessibilityLabel={null}>
      {null}
    </tmp21>
  );
}
