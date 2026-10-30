// discord_app/modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx
import CheckpointCharacterTextureUtils from "../../../character/CheckpointCharacterTextureUtils.tsx";
import CheckpointCharacterDataBinding from "../../../character/CheckpointCharacterDataBinding.tsx";
import CheckpointCharacterReferencedAssets from "../../../character/CheckpointCharacterReferencedAssets.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../../CheckpointStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { container: { flexGrow: 1 }, rive: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.rive = {};
let closure_8 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStage(stage) {
  stage = stage.stage;
  const characterBottomInset = stage.characterBottomInset;
  let width;
  let str;
  let textureScale;
  let stateFromStores;
  let faceID;
  let headwearID;
  let shoesID;
  let wearableID;
  let chapterID;
  let checkpointCharacterLoadedTextureNames;
  const tmp = headwearID();
  const context = str.useContext(characterBottomInset(width[6]));
  const size = characterBottomInset(width[7])();
  width = size.width;
  const height = size.height;
  str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp5 = characterBottomInset(width[8])(() =>
    CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(width, height),
  );
  textureScale = tmp5;
  const items = [stateFromStores];
  stateFromStores = stage(width[10]).useStateFromStores(items, () => stateFromStores.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, str, characterBottomInset, height, tmp5];
  const memo = obj.useMemo(
    () =>
      CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding({
        stage,
        traits: stateFromStores,
        layout: str,
        characterBottomInset,
        stageHeight: height,
        textureScale,
      }),
    items1,
  );
  faceID = memo.faceID;
  headwearID = memo.headwearID;
  shoesID = memo.shoesID;
  wearableID = memo.wearableID;
  chapterID = memo.chapterID;
  const items2 = [faceID, headwearID, shoesID, wearableID, chapterID, str];
  const memo1 = obj.useMemo(
    () =>
      CheckpointCharacterReferencedAssets.getCheckpointCharacterVisibleTextureNames(
        { faceID, headwearID, shoesID, wearableID },
        chapterID,
        str,
      ),
    items2,
  );
  const obj2 = stage(width[10]);
  checkpointCharacterLoadedTextureNames = stage(width[13]).useCheckpointCharacterLoadedTextureNames(memo1);
  const items3 = [checkpointCharacterLoadedTextureNames, tmp5];
  const memo2 = obj.useMemo(
    () =>
      CheckpointCharacterReferencedAssets.getCheckpointCharacterReferencedAssets(
        checkpointCharacterLoadedTextureNames,
        closure_5,
      ),
    items3,
  );
  const tmp12 = characterBottomInset(width[8])(memo2);
  const obj3 = stage(width[13]);
  [tmp14, tmp15] = height(str.useState(null), 2);
  const tmp13 = height(str.useState(null), 2);
  const checkpointCharacterTextureSwaps = stage(width[14]).useCheckpointCharacterTextureSwaps(tmp14, memo2, tmp12);
  let tmp19;
  if (stage.isActive) {
    tmp19 = context;
  }
  const obj5 = {
    ref: tmp19,
    style: tmp.container,
    accessible: true,
    accessibilityRole: "image",
    accessibilityLabel: null,
    children: null,
  };
  const obj4 = stage(width[14]);
  const tmp18 = textureScale;
  obj5.accessibilityLabel = stage(width[15]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj5.children = faceID(stage(width[16]).CheckpointCharacterRive, {
    artboard: "AB_Master",
    stateMachine: "SM_Master",
    fit: "layout",
    alignment: "center",
    referencedAssets: tmp12,
    onRiveFileChange: tmp15,
    dataBinding: memo,
    style: tmp.rive,
  });
  return faceID(tmp18, obj5);
}
