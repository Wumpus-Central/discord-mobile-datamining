// === Module 13445: CheckpointCharacterStage ===

// Module 13445 (CheckpointCharacterStage)
import CheckpointCharacterReferencedAssets from "CheckpointCharacterReferencedAssets" /* 13446 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13612 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13615 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5014);
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
  let checkpointCharacterLoadedTextureNames;
  const tmp = closure_8();
  const context = str.useContext(characterBottomInset(width[7]));
  const size = characterBottomInset(width[8])();
  width = size.width;
  const height = size.height;
  str = "MobilePortrait";
  if (width > height) {
    str = "MobileLandscape";
  }
  const tmp5 = characterBottomInset(width[9])(() => CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(width, height));
  textureScale = tmp5;
  const items = [stateFromStores];
  stateFromStores = stage(width[11]).useStateFromStores(items, () => stateFromStores.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, str, characterBottomInset, height, tmp5];
  const memo = obj.useMemo(() => CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding({ stage, traits: stateFromStores, layout: str, characterBottomInset, stageHeight: height, textureScale }), items1);
  const tmp9 = height(str.useState(memo), 2);
  const first = tmp9[0];
  const faceID = memo.faceID;
  closure_129_0 = faceID;
  const headwearID = memo.headwearID;
  closure_129_1 = headwearID;
  const shoesID = memo.shoesID;
  closure_129_2 = shoesID;
  const wearableID = memo.wearableID;
  closure_129_3 = wearableID;
  const chapterID = memo.chapterID;
  closure_129_4 = chapterID;
  const device = memo.device;
  closure_129_5 = device;
  const items2 = [faceID, headwearID, shoesID, wearableID, chapterID, device];
  const faceID2 = first.faceID;
  closure_130_0 = faceID2;
  const headwearID2 = first.headwearID;
  closure_130_1 = headwearID2;
  const shoesID2 = first.shoesID;
  closure_130_2 = shoesID2;
  const wearableID2 = first.wearableID;
  closure_130_3 = wearableID2;
  const chapterID2 = first.chapterID;
  closure_130_4 = chapterID2;
  const device2 = first.device;
  closure_130_5 = device2;
  const items3 = [faceID2, headwearID2, shoesID2, wearableID2, chapterID2, device2];
  const memo1 = obj.useMemo(() => CheckpointCharacterReferencedAssets.getCheckpointCharacterVisibleTextureNames({ faceID: stage, headwearID: characterBottomInset, shoesID: width, wearableID: height }, str, closure_5), items2);
  const memo2 = obj.useMemo(() => CheckpointCharacterReferencedAssets.getCheckpointCharacterVisibleTextureNames({ faceID: stage, headwearID: characterBottomInset, shoesID: width, wearableID: height }, str, closure_5), items3);
  const obj2 = stage(width[11]);
  checkpointCharacterLoadedTextureNames = stage(width[13]).useCheckpointCharacterLoadedTextureNames({ visibleTextureNames: memo2, requestedTextureNames: memo1 });
  const items4 = [checkpointCharacterLoadedTextureNames, tmp5];
  const memo3 = obj.useMemo(() => CheckpointCharacterReferencedAssets.getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, closure_5), items4);
  const tmp15 = characterBottomInset(width[9])(memo3);
  const obj3 = stage(width[13]);
  [tmp17, tmp18] = height(str.useState(null), 2);
  const tmp16 = height(str.useState(null), 2);
  const obj4 = stage(width[14]);
  if (tmp19) {
    tmp9[1](memo);
  }
  let tmp23;
  if (stage.isActive) {
    tmp23 = context;
  }
  const obj5 = { ref: tmp23, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  tmp19 = stage(width[14]).useCheckpointCharacterTextureSwaps({ file: tmp17, referencedAssets: memo3, initialReferencedAssets: tmp15 }) && first !== memo;
  const tmp22 = textureScale;
  obj5.accessibilityLabel = stage(width[15]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj5.children = checkpointCharacterLoadedTextureNames(stage(width[16]).CheckpointCharacterRive, { artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp15, onRiveFileChange: tmp18, dataBinding: first, style: tmp.rive });
  return checkpointCharacterLoadedTextureNames(tmp22, obj5);
};