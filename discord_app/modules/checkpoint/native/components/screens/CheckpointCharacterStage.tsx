// === Module 12469: CheckpointCharacterStage ===

// Module 12469 (CheckpointCharacterStage)
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 12470 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 12636 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12417 */;

require = fn;
function CheckpointCharacterStage(stage) {
  stage = stage.stage;
  const layout = stage.layout;
  const isHidden = stage.isHidden;
  ({ characterBottomInset, onExitPlaying } = stage);
  noop = undefined;
  height = undefined;
  closure_6 = undefined;
  let stateFromStores;
  closure_10 = undefined;
  let ref;
  let num;
  const tmp = stateFromStores();
  const context = noop.useContext(layout(isHidden[6]));
  ({ width: c4, height } = layout(isHidden[7])());
  const tmp4 = layout(isHidden[7])();
  items = [closure_6];
  closure_6 = stage(isHidden[8]).useStateFromStores(items, () => closure_6.compactAssets);
  const tmp6 = layout(isHidden[9])(() => CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(c4, height, closure_6));
  const textureScale = tmp6;
  const obj2 = stage(isHidden[8]);
  const items1 = [closure_6];
  stateFromStores = stage(isHidden[8]).useStateFromStores(items1, () => closure_6.selectedCharacterTraits);
  const items2 = [stage, isHidden, stateFromStores, layout, tmp6];
  const memo = noop.useMemo(() => CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding({ stage, isHidden, traits: stateFromStores, layout, textureScale }), items2);
  const tmp9 = onExitPlaying(noop.useState(memo), 2);
  const first = tmp9[0];
  const obj3 = stage(isHidden[8]);
  const checkpointCharacterPreloadedTextureNames = stage(isHidden[12]).useCheckpointCharacterPreloadedTextureNames(stage, tmp11);
  const obj4 = stage(isHidden[12]);
  const checkpointCharacterReferencedAssets = stage(isHidden[13]).useCheckpointCharacterReferencedAssets({ visibleDataBinding: first, requestedDataBinding: memo, textureScale: tmp6, preloadedTextureNames: checkpointCharacterPreloadedTextureNames });
  const tmp14 = layout(isHidden[9])(checkpointCharacterReferencedAssets);
  const obj5 = stage(isHidden[13]);
  [tmp16, tmp17] = onExitPlaying(noop.useState(null), 2);
  const tmp15 = onExitPlaying(noop.useState(null), 2);
  const checkpointCharacterTextureManager = stage(isHidden[14]).useCheckpointCharacterTextureManager(tmp16);
  const obj6 = stage(isHidden[14]);
  let isOutfitPreloaded = stage(isHidden[15]).useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp14 });
  const obj7 = stage(isHidden[15]);
  const checkpointCharacterOutfitPreload = stage(isHidden[16]).useCheckpointCharacterOutfitPreload({ visibleDataBinding: first, requestedDataBinding: memo });
  const dataBinding = checkpointCharacterOutfitPreload.dataBinding;
  if (isOutfitPreloaded) {
    isOutfitPreloaded = checkpointCharacterOutfitPreload.isOutfitPreloaded;
  }
  if (isOutfitPreloaded) {
    isOutfitPreloaded = first !== memo;
  }
  if (isOutfitPreloaded) {
    tmp9[1](memo);
  }
  const tmp21 = stage === stage(isHidden[17]).CheckpointCharacterStage.EXIT && first === memo;
  closure_10 = tmp21;
  const items3 = [tmp21, onExitPlaying];
  const effect = obj.useEffect(() => {
    if (closure_10) {
      onExitPlaying();
    }
  }, items3);
  ref = obj.useRef(null);
  const items4 = [isHidden];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (isHidden) {
      if (current != null) {
        current.pause();
      }
    } else if (current != null) {
      current.play();
    }
  }, items4);
  num = 0;
  if ("MobilePortrait" === layout) {
    let num2 = 30;
    if (null != characterBottomInset) {
      const _Math = Math;
      num2 = Math.round((0.75 * height - (height - characterBottomInset)) / height * 1080);
    }
    num = num2;
  }
  const items5 = [dataBinding, num];
  const memo1 = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(dataBinding);
    obj.mobileLift = num;
    return obj;
  }, items5);
  const obj8 = stage(isHidden[16]);
  let tmp30;
  const checkpointCharacterGradientFadeIn = stage(isHidden[18]).useCheckpointCharacterGradientFadeIn({ stage, dataBinding: memo1 });
  if (stage.isActive) {
    tmp30 = context;
  }
  const obj9 = { ref: tmp30, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  const tmp29 = height;
  const tmp5Result = stage(isHidden[18]);
  obj9.accessibilityLabel = stage(isHidden[19]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj9.children = textureScale(stage(isHidden[20]).CheckpointCharacterRive, { ref, artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp14, onRiveFileChange: tmp17, dataBinding: checkpointCharacterGradientFadeIn, onDataBindingChange: checkpointCharacterOutfitPreload.onDataBindingChange, style: tmp.rive });
  return textureScale(tmp29, obj9);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4823);
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