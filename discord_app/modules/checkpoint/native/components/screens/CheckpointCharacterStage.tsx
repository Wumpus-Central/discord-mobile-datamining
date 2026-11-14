// discord_app/modules/checkpoint/native/components/screens/CheckpointCharacterStage.tsx
import CheckpointCharacterTextureUtils from "../../../character/CheckpointCharacterTextureUtils.tsx";
import CheckpointCharacterDataBinding from "../../../character/CheckpointCharacterDataBinding.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../../../CheckpointStore.tsx";

require = fn;
function CheckpointCharacterStage(stage) {
  stage = stage.stage;
  const layout = stage.layout;
  const isHidden = stage.isHidden;
  const characterBottomInset = stage.characterBottomInset;
  _slicedToArray = undefined;
  height = undefined;
  let textureScale;
  let dataBinding;
  let ref;
  let num;
  const tmp = dataBinding();
  const context = height.useContext(layout(isHidden[6]));
  ({ width: c3, height } = layout(isHidden[7])());
  const tmp4 = layout(isHidden[7])();
  items = [textureScale];
  closure_5 = stage(isHidden[8]).useStateFromStores(items, () => textureScale.compactAssets);
  const tmp6 = layout(isHidden[9])(() =>
    CheckpointCharacterTextureUtils.getCheckpointCharacterTextureScale(c3, height, closure_5),
  );
  textureScale = tmp6;
  const obj2 = stage(isHidden[8]);
  const items1 = [textureScale];
  const stateFromStores = stage(isHidden[8]).useStateFromStores(items1, () => textureScale.selectedCharacterTraits);
  const items2 = [stage, isHidden, stateFromStores, layout, tmp6];
  const memo = height.useMemo(
    () =>
      CheckpointCharacterDataBinding.getCheckpointCharacterDataBinding({
        stage,
        isHidden,
        traits: stateFromStores,
        layout,
        textureScale,
      }),
    items2,
  );
  const obj3 = stage(isHidden[8]);
  [tmp10, tmp11] = height.useState(memo);
  const tmp9 = _slicedToArray(height.useState(memo), 2);
  const checkpointCharacterReferencedAssets = stage(isHidden[12]).useCheckpointCharacterReferencedAssets({
    visibleDataBinding: tmp10,
    requestedDataBinding: memo,
    textureScale: tmp6,
  });
  const tmp13 = layout(isHidden[9])(checkpointCharacterReferencedAssets);
  const obj4 = stage(isHidden[12]);
  [tmp15, tmp16] = height.useState(null);
  const tmp14 = _slicedToArray(height.useState(null), 2);
  const checkpointCharacterTextureManager = stage(isHidden[13]).useCheckpointCharacterTextureManager(tmp15);
  const obj5 = stage(isHidden[13]);
  let isOutfitPreloaded = stage(isHidden[14]).useCheckpointCharacterTextureSwaps({
    textureManager: checkpointCharacterTextureManager,
    referencedAssets: checkpointCharacterReferencedAssets,
    initialReferencedAssets: tmp13,
  });
  const obj6 = stage(isHidden[14]);
  const checkpointCharacterOutfitPreload = stage(isHidden[15]).useCheckpointCharacterOutfitPreload({
    visibleDataBinding: tmp10,
    requestedDataBinding: memo,
  });
  dataBinding = checkpointCharacterOutfitPreload.dataBinding;
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
  num = 0;
  if ("MobilePortrait" === layout) {
    let num2 = 30;
    if (null != characterBottomInset) {
      const _Math = Math;
      num2 = Math.round(((0.75 * height - (height - characterBottomInset)) / height) * 1080);
    }
    num = num2;
  }
  const items4 = [dataBinding, num];
  const memo1 = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(dataBinding);
    obj.mobileLift = num;
    return obj;
  }, items4);
  const obj7 = stage(isHidden[15]);
  let tmp27;
  const checkpointCharacterGradientFadeIn = stage(isHidden[16]).useCheckpointCharacterGradientFadeIn({
    stage,
    dataBinding: memo1,
  });
  if (stage.isActive) {
    tmp27 = context;
  }
  const obj8 = {
    ref: tmp27,
    style: tmp.container,
    accessible: true,
    accessibilityRole: "image",
    accessibilityLabel: null,
    children: null,
  };
  const tmp26 = closure_5;
  const tmp5Result = stage(isHidden[16]);
  obj8.accessibilityLabel = stage(isHidden[17]).getCheckpointCharacterAccessibilityLabel(stateFromStores);
  obj8.children = stateFromStores(stage(isHidden[18]).CheckpointCharacterRive, {
    ref,
    artboard: "AB_Master",
    stateMachine: "SM_Master",
    fit: "layout",
    alignment: "center",
    referencedAssets: tmp13,
    onRiveFileChange: tmp16,
    dataBinding: checkpointCharacterGradientFadeIn,
    onDataBindingChange: checkpointCharacterOutfitPreload.onDataBindingChange,
    style: tmp.rive,
  });
  return stateFromStores(tmp26, obj8);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5306);
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
}
