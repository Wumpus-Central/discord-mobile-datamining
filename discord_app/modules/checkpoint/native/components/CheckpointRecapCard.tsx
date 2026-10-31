// === Module 13672: CheckpointRecapCard ===

// Module 13672 (CheckpointRecapCard)
import nativeDefault from "native" /* 575 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6433 */;
import CheckpointCardFrameDefault from "CheckpointCardFrame" /* 13424 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 13614 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13627 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const rect = { size: 240, top: nativeDefault.space.PX_16, left: -20 };
const CheckpointStatNumber = fn(13627);
const checkpointStatNumberWidth = CheckpointStatNumber.getCheckpointStatNumberWidth(2026, 64);
const createStyles = fn(5014);
let obj = { year: null };
const rect1 = { position: "absolute", left: 178 - checkpointStatNumberWidth / 2, top: 22.5, transform: null };
let items = [{ rotate: "90deg" }];
rect1.transform = items;
obj.year = rect1;
let closure_7 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default function CheckpointRecapCard(character) {
  character = character.character;
  ({ maxHeight, isStepFocusTarget } = character);
  if (isStepFocusTarget === undefined) {
    isStepFocusTarget = false;
  }
  let num = 1;
  const context = noop.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / 268, 0.75), 1);
  }
  const tmp = closure_7();
  const characterCardColorPalette = character(6091).getCharacterCardColorPalette(character);
  const obj2 = character(6091);
  const items = [character];
  const memo = noop.useMemo(() => {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      checkpointCharacterAccessibilityLabel = CheckpointCharacterAccessibilityUtils.getCheckpointCharacterAccessibilityLabel(tmp);
    }
    return checkpointCharacterAccessibilityLabel;
  }, items);
  const obj4 = { character, cardColorPalette: characterCardColorPalette, canvasWidth: 200, canvasHeight: 268, scale: num, clydeSize: 28, characterLayout: rect, children: null };
  const obj5 = { style: tmp.year, children: null };
  const obj3 = character(6091);
  obj5.children = jsx(CheckpointStatNumberDefault, { value: 2026, color: obj3.getCardColors(characterCardColorPalette).primaryBackgroundColor, size: 64 });
  obj4.children = <View style={tmp.year}>{null}</View>;
  const tmp11 = jsx(CheckpointCardFrameDefault, { character, cardColorPalette: characterCardColorPalette, canvasWidth: 200, canvasHeight: 268, scale: num, clydeSize: 28, characterLayout: rect, children: null });
  if (null == memo) {
    const obj6 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp11 };
    let obj7 = obj6;
  } else {
    let tmp12;
    if (isStepFocusTarget) {
      tmp12 = context;
    }
    obj7 = { ref: tmp12, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp11 };
  }
  return <View {...obj7} />;
};