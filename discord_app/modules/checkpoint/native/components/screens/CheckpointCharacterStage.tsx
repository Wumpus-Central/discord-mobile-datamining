// === Module 14198: CheckpointCharacterStage ===

// Module 14198 (CheckpointCharacterStage)
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 14199 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 14365 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;

require = fn;
function CheckpointCharacterStage(stage) {
  stage = stage.stage;
  const layout = stage.layout;
  const isHidden = stage.isHidden;
  const characterBottomInset = stage.characterBottomInset;
  noop = undefined;
  height = undefined;
  closure_6 = undefined;
  let stateFromStores;
  let ref;
  const tmp = stateFromStores();
  const context = noop.useContext(layout(isHidden[6]));
  ({ width: c4, height } = layout(isHidden[7])());
  const tmp4 = layout(isHidden[7])();
  items = [closure_6];
  closure_6 = stage(isHidden[8]).useStateFromStores(items, () => closure_6.compactAssets);
  const tmp6 = layout(isHidden[9])(() => CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(c4, height, closure_6));
  const textureScale = tmp6;
  let obj2 = stage(isHidden[8]);
  const items1 = [closure_6];
  stateFromStores = stage(isHidden[8]).useStateFromStores(items1, () => closure_6.selectedCharacterTraits);
  const items2 = [stage, isHidden, stateFromStores, layout, characterBottomInset, height, tmp6];
  const memo = noop.useMemo(() => {
    const obj2 = { stage, isHidden, traits: stateFromStores, layout, mobileLift: null, textureScale: null };
    let num = 0;
    if ("MobilePortrait" === layout) {
      let num2 = 30;
      if (null != characterBottomInset) {
        const _Math = Math;
        num2 = Math.round((0.75 * height - (height - characterBottomInset)) / height * 1080);
      }
      num = num2;
    }
    obj2.mobileLift = num;
    obj2.textureScale = textureScale;
    return CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding(obj2);
  }, items2);
  const obj3 = stage(isHidden[8]);
  [tmp10, tmp11] = characterBottomInset(noop.useState(memo), 2);
  const tmp9 = characterBottomInset(noop.useState(memo), 2);
  const checkpointCharacterReferencedAssets = stage(isHidden[12]).useCheckpointCharacterReferencedAssets({ visibleDataBinding: tmp10, requestedDataBinding: memo, textureScale: tmp6 });
  const tmp13 = layout(isHidden[9])(checkpointCharacterReferencedAssets);
  const obj4 = stage(isHidden[12]);
  [tmp15, tmp16] = characterBottomInset(noop.useState(null), 2);
  const tmp14 = characterBottomInset(noop.useState(null), 2);
  const checkpointCharacterTextureManager = stage(isHidden[13]).useCheckpointCharacterTextureManager(tmp15);
  const obj5 = stage(isHidden[13]);
  let isOutfitPreloaded = stage(isHidden[14]).useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp13 });
  const obj6 = stage(isHidden[14]);
  const checkpointCharacterOutfitPreload = stage(isHidden[15]).useCheckpointCharacterOutfitPreload({ visibleDataBinding: tmp10, requestedDataBinding: memo });
  ({ dataBinding, onDataBindingChange } = checkpointCharacterOutfitPreload);
  if (isOutfitPreloaded) {
    isOutfitPreloaded = checkpointCharacterOutfitPreload.isOutfitPreloaded;
  }
  if (isOutfitPreloaded) {
    isOutfitPreloaded = tmp10 !== memo;
  }
  if (isOutfitPreloaded) {
    tmp11(memo);
  }
  ref = obj.useRef(null);
  const items3 = [isHidden];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    if (isHidden) {
      if (current != null) {
        current.pause();
      }
    } else if (current != null) {
      current.play();
    }
  }, items3);
  let tmp24;
  if (stage.isActive) {
    tmp24 = context;
  }
  const obj8 = { ref: tmp24, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  const obj7 = stage(isHidden[15]);
  const tmp23 = height;
  obj8.accessibilityLabel = stage(isHidden[16]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj8.children = textureScale(stage(isHidden[17]).CheckpointCharacterRive, { ref, artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp13, onRiveFileChange: tmp16, dataBinding, onDataBindingChange, style: tmp.rive });
  return textureScale(tmp23, obj8);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj2 = { container: { flexGrow: 1 }, rive: null };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.rive = {};
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx");

export default function CheckpointCharacterStageGate(arg0) {
  items = [CheckpointStore];
  let tmp = null;
  if (obj.useStateFromStores(items, () => CheckpointStore.isCharacterCreatorEnabled)) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp = <CheckpointCharacterStage />;
  }
  return tmp;
};