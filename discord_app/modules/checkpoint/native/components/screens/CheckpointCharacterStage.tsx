// === Module 13685: CheckpointCharacterStage ===

// Module 13685 (CheckpointCharacterStage)
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13687 */;
import CheckpointCharacterDataBinding from "CheckpointCharacterDataBinding" /* 13853 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13656 */;

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
  const isHidden = stage.isHidden;
  const characterBottomInset = stage.characterBottomInset;
  noop = undefined;
  height = undefined;
  let ref;
  const tmp = ref();
  const context = noop.useContext(layout(isHidden[6]));
  ({ width: c4, height } = layout(isHidden[7])());
  const tmp5 = layout(isHidden[8])(() => CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(c4, height));
  const textureScale = tmp5;
  const tmp4 = layout(isHidden[7])();
  items = [textureScale];
  const stateFromStores = stage(isHidden[10]).useStateFromStores(items, () => textureScale.selectedCharacterTraits);
  const items1 = [stage, stateFromStores, layout, characterBottomInset, height, tmp5];
  const memo = noop.useMemo(() => {
    const obj2 = { stage, traits: stateFromStores, layout, mobileLift: null, textureScale: null };
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
  }, items1);
  let obj2 = stage(isHidden[10]);
  [tmp10, tmp11] = characterBottomInset(noop.useState(memo), 2);
  const tmp9 = characterBottomInset(noop.useState(memo), 2);
  const checkpointCharacterReferencedAssets = stage(isHidden[12]).useCheckpointCharacterReferencedAssets({ visibleDataBinding: tmp10, requestedDataBinding: memo, textureScale: tmp5 });
  const tmp13 = layout(isHidden[8])(checkpointCharacterReferencedAssets);
  const obj3 = stage(isHidden[12]);
  [tmp15, tmp16] = characterBottomInset(noop.useState(null), 2);
  const tmp14 = characterBottomInset(noop.useState(null), 2);
  const checkpointCharacterTextureManager = stage(isHidden[13]).useCheckpointCharacterTextureManager(tmp15);
  const obj4 = stage(isHidden[13]);
  const obj5 = stage(isHidden[14]);
  if (tmp18) {
    tmp11(memo);
  }
  ref = obj.useRef(null);
  const items2 = [isHidden];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    if (isHidden) {
      if (current != null) {
        current.pause();
      }
    } else if (current != null) {
      current.play();
    }
  }, items2);
  let tmp24;
  if (stage.isActive) {
    tmp24 = context;
  }
  const obj6 = { ref: tmp24, style: tmp.container, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  tmp18 = stage(isHidden[14]).useCheckpointCharacterTextureSwaps({ textureManager: checkpointCharacterTextureManager, referencedAssets: checkpointCharacterReferencedAssets, initialReferencedAssets: tmp13 }) && tmp10 !== memo;
  const tmp23 = height;
  obj6.accessibilityLabel = stage(isHidden[15]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj6.children = stateFromStores(stage(isHidden[16]).CheckpointCharacterRive, { ref, artboard: "AB_Master", stateMachine: "SM_Master", fit: "layout", alignment: "center", referencedAssets: tmp13, onRiveFileChange: tmp16, dataBinding: tmp10, style: tmp.rive });
  return stateFromStores(tmp23, obj6);
};