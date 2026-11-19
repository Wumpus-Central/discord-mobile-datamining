// discord_app/modules/checkpoint/native/components/CheckpointCharacterStageLayer.tsx
import usePrevious from "../../../../hooks/usePrevious.tsx";
import CheckpointFadeLayerDefault from "CheckpointFadeLayer.tsx";
import CheckpointCharacterStageDefault from "screens/CheckpointCharacterStage.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const CheckpointTransitionConstants = fn(12423);
({
  CHECKPOINT_CHARACTER_STAGE_FADE: metroImportDefault,
  CHECKPOINT_CHARACTER_STAGE_HIDE: closure_8,
  CHECKPOINT_INSTANT: closure_9,
  CheckpointCharacterStageHiddenBy: closure_10,
} = CheckpointTransitionConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointCharacterStageLayer.tsx");

export default function CheckpointCharacterStageLayer(arg0) {
  ({ stage, hiddenBy, isActive } = arg0);
  closure_0 = tmp2;
  ({ layout, characterBottomInset, onExitPlaying, style, children } = arg0);
  [tmp4, tmp5] = noop.useState(hiddenBy === constants.STATS);
  c1 = tmp5;
  let tmp6 = !tmp2;
  if (hiddenBy !== constants.STATS) {
    tmp6 = tmp4;
  }
  if (tmp6) {
    tmp5(false);
  }
  let tmp8 = tmp2;
  if (hiddenBy === constants.STATS) {
    tmp8 = !tmp4;
  }
  if (!tmp8) {
    tmp8 = tmp9;
  }
  const tmp3 = _slicedToArray(noop.useState(hiddenBy === constants.STATS), 2);
  const obj2 = { value: stage, shouldUpdate: !tmp8 };
  let currentWhen = usePrevious.useCurrentWhen(obj2);
  if (currentWhen == null) {
    currentWhen = stage;
  }
  const currentWhen1 = usePrevious.useCurrentWhen({ value: characterBottomInset, shouldUpdate: tmp12 });
  const tmp10Result = usePrevious;
  const currentWhen2 = usePrevious.useCurrentWhen({ value: children, shouldUpdate: tmp12 });
  const tmp10Result3 = usePrevious;
  const currentWhen3 = usePrevious.useCurrentWhen({ value: hiddenBy, shouldUpdate: null != hiddenBy });
  const obj4 = {
    visible: null == hiddenBy,
    enter: currentWhen3 === constants.CUSTOMIZATION_ROUTE_CHANGE ? metroImportDefault : React6,
    exit: hiddenBy === constants.CUSTOMIZATION_ROUTE_CHANGE ? metroImportDefault : React5,
    keepMounted: true,
    onExitComplete() {
      if (closure_0) {
        _undefined(true);
      }
    },
    style,
    children: null,
  };
  const obj5 = {
    collapsable: false,
    style: absoluteFill.absoluteFill,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  let str = "none";
  const obj3 = { value: hiddenBy, shouldUpdate: null != hiddenBy };
  const tmp10Result4 = usePrevious;
  if (isActive) {
    str = "auto";
  }
  obj5.pointerEvents = str;
  obj5.accessibilityElementsHidden = !isActive;
  let str2 = "no-hide-descendants";
  if (isActive) {
    str2 = "auto";
  }
  obj5.importantForAccessibility = str2;
  obj5.children = closure_1_11(CheckpointCharacterStageDefault, {
    stage: currentWhen,
    layout,
    isActive,
    isHidden: tmp4,
    characterBottomInset: currentWhen1,
    onExitPlaying,
  });
  items = [closure_1_11(timestampProducer, obj5), currentWhen2];
  obj4.children = items;
  return application_id(CheckpointFadeLayerDefault, obj4);
}
