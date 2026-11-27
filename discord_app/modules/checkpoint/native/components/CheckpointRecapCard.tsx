// discord_app/modules/checkpoint/native/components/CheckpointRecapCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1654 from "../../../../../_runtime/metro/01654__.js";
import CheckpointCharacterAccessibilityUtils from "../../CheckpointCharacterAccessibilityUtils.tsx";
import CheckpointCardFrameDefault from "card/CheckpointCardFrame.tsx";
import useCheckpointCharacterImagesDefault from "../../hooks/useCheckpointCharacterImages.tsx";
import useCheckpointCompositeRevealStyleDefault from "../useCheckpointCompositeRevealStyle.tsx";
import CheckpointShareCardYearDefault from "share/CheckpointShareCardYear.tsx";
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const rect = { size: 240, top: nativeDefault.space.PX_16, left: -20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default function CheckpointRecapCard(character) {
  character = character.character;
  ({ maxHeight, maxScale } = character);
  if (maxScale === undefined) {
    maxScale = 1;
  }
  let flag = character.isStepFocusTarget;
  if (flag === undefined) {
    flag = false;
  }
  const tmp3 = useCheckpointCharacterImagesDefault(character, 240);
  let bound = maxScale;
  const context = noop.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(maxHeight / 268, 0.75), maxScale);
  }
  const tmp4 = useCheckpointCompositeRevealStyleDefault(tmp3);
  const characterCardColorPalette = character(6422).getCharacterCardColorPalette(character);
  const obj2 = character(6422);
  items = [character];
  const memo = noop.useMemo(() => {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      checkpointCharacterAccessibilityLabel =
        CheckpointCharacterAccessibilityUtils.getCheckpointCharacterAccessibilityLabel(tmp);
    }
    return checkpointCharacterAccessibilityLabel;
  }, items);
  const obj4 = { style: tmp4, children: null };
  const obj5 = {
    images: tmp3,
    cardColorPalette: characterCardColorPalette,
    canvasWidth: 200,
    canvasHeight: 268,
    scale: bound,
    clydeSize: 28,
    characterLayout: rect,
    children: null,
  };
  const obj3 = character(6422);
  const obj6 = { path: null, x: null, color: null };
  const tmpResult = CheckpointCardFrameDefault;
  obj6.path = character(12650).YEAR_PATH;
  obj6.x = 200 - character(12650).YEAR_WIDTH;
  obj6.color = obj3.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  obj5.children = jsx(CheckpointShareCardYearDefault, { path: null, x: null, color: null });
  obj4.children = (
    <tmpResult
      images={tmp3}
      cardColorPalette={characterCardColorPalette}
      canvasWidth={200}
      canvasHeight={268}
      scale={bound}
      clydeSize={28}
      characterLayout={rect}
    >
      {null}
    </tmpResult>
  );
  const tmp13 = jsx(_modDef1654.View, { style: tmp4, children: null });
  if (null == memo) {
    const obj7 = {
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: tmp13,
    };
    let obj8 = obj7;
  } else {
    let tmp15;
    if (flag) {
      tmp15 = context;
    }
    obj8 = { ref: tmp15, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp13 };
  }
  return <View {...obj8} />;
}
export const CARD_WIDTH = 200;
export const CARD_HEIGHT = 268;
