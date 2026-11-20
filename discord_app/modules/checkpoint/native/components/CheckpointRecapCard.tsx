// === Module 12660: CheckpointRecapCard ===

// Module 12660 (CheckpointRecapCard)
import nativeDefault from "native" /* 575 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6216 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 12384 */;
import CheckpointCardFrameDefault from "CheckpointCardFrame" /* 12396 */;
import CheckpointShareCardYearDefault from "CheckpointShareCardYear" /* 12400 */;
import noop from "module_19" /* 19 */;

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
  let bound = maxScale;
  const context = noop.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    bound = Math.min(Math.max(maxHeight / 268, 0.75), maxScale);
  }
  const characterCardColorPalette = character(5874).getCharacterCardColorPalette(character);
  const obj2 = character(5874);
  items = [character];
  const memo = noop.useMemo(() => {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      checkpointCharacterAccessibilityLabel = CheckpointCharacterAccessibilityUtils.getCheckpointCharacterAccessibilityLabel(tmp);
    }
    return checkpointCharacterAccessibilityLabel;
  }, items);
  const obj4 = { character, cardColorPalette: characterCardColorPalette, canvasWidth: 200, canvasHeight: 268, scale: bound, clydeSize: 28, characterLayout: rect, children: null };
  const obj3 = character(5874);
  const obj5 = { path: null, x: null, color: null };
  const tmpResult = CheckpointCardFrameDefault;
  obj5.path = character(12400).YEAR_PATH;
  obj5.x = 200 - character(12400).YEAR_WIDTH;
  obj5.color = obj3.getCardColors(characterCardColorPalette).primaryBackgroundColor;
  obj4.children = jsx(CheckpointShareCardYearDefault, { path: null, x: null, color: null });
  const tmp11 = <tmpResult character={character} cardColorPalette={characterCardColorPalette} canvasWidth={200} canvasHeight={268} scale={bound} clydeSize={28} characterLayout={rect}>{null}</tmpResult>;
  if (null == memo) {
    const obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp11 };
    let obj7 = obj6;
  } else {
    let tmp13;
    if (flag) {
      tmp13 = context;
    }
    obj7 = { ref: tmp13, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp11 };
  }
  return <View {...obj7} />;
};
export const CARD_WIDTH = 200;
export const CARD_HEIGHT = 268;