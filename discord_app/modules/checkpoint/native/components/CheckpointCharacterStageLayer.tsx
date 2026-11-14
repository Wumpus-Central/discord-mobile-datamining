// discord_app/modules/checkpoint/native/components/CheckpointCharacterStageLayer.tsx
import usePrevious from "../../../../hooks/usePrevious.tsx";
import CheckpointFadeLayerDefault from "CheckpointFadeLayer.tsx";
import CheckpointCharacterStageDefault from "screens/CheckpointCharacterStage.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const CheckpointTransitionConstants = fn(14276);
({ CHECKPOINT_CHARACTER_STAGE_HIDE: metroImportDefault, CHECKPOINT_INSTANT: closure_8 } =
  CheckpointTransitionConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCharacterStageLayer.tsx");

export default function CheckpointCharacterStageLayer(arg0) {
  ({ stage, isCovered, isActive } = arg0);
  ({ layout, characterBottomInset, style, children } = arg0);
  [tmp2, tmp3] = noop.useState(isCovered);
  c0 = tmp3;
  let tmp4 = !isCovered;
  if (!isCovered) {
    tmp4 = tmp2;
  }
  if (tmp4) {
    tmp3(false);
  }
  let tmp6 = isCovered;
  if (isCovered) {
    tmp6 = !tmp2;
  }
  const tmp = _slicedToArray(noop.useState(isCovered), 2);
  let currentWhen = usePrevious.useCurrentWhen({ value: stage, shouldUpdate: !tmp6 });
  if (currentWhen == null) {
    currentWhen = stage;
  }
  const obj2 = { value: stage, shouldUpdate: !tmp6 };
  const currentWhen1 = usePrevious.useCurrentWhen({ value: characterBottomInset, shouldUpdate: !tmp6 });
  const obj3 = { value: characterBottomInset, shouldUpdate: !tmp6 };
  const tmp7Result = usePrevious;
  const currentWhen2 = usePrevious.useCurrentWhen({ value: children, shouldUpdate: !tmp6 });
  const obj5 = {
    visible: !isCovered,
    enter,
    exit,
    keepMounted: true,
    onExitComplete() {
      return _undefined(true);
    },
    style,
    children: null,
  };
  const obj6 = {
    collapsable: false,
    style: absoluteFill.absoluteFill,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  let str = "none";
  const obj4 = { value: children, shouldUpdate: !tmp6 };
  const tmp7Result2 = usePrevious;
  if (isActive) {
    str = "auto";
  }
  obj6.pointerEvents = str;
  obj6.accessibilityElementsHidden = !isActive;
  let str2 = "no-hide-descendants";
  if (isActive) {
    str2 = "auto";
  }
  obj6.importantForAccessibility = str2;
  obj6.children = React6(CheckpointCharacterStageDefault, {
    stage: currentWhen,
    layout,
    isActive,
    isHidden: tmp2,
    characterBottomInset: currentWhen1,
  });
  items = [React6(timestampProducer, obj6), currentWhen2];
  obj5.children = items;
  return refs(CheckpointFadeLayerDefault, obj5);
}
