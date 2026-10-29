// === Module 13487: CheckpointRecapCard ===

// Module 13487 (CheckpointRecapCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6079 */;
import CheckpointCharacterAccessibilityUtils from "CheckpointCharacterAccessibilityUtils" /* 6421 */;
import CheckpointCardFrameDefault from "CheckpointCardFrame" /* 13239 */;
import CheckpointStepHeaderRefContextDefault from "CheckpointStepHeaderRefContext" /* 13259 */;
import CheckpointStatNumberDefault from "CheckpointStatNumber" /* 13440 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let c6 = 268;
const rect = { size: 240, top: nativeDefault.space.PX_16, left: -20 };
let c8 = 2026;
const CheckpointStatNumber = fn(13440);
const checkpointStatNumberWidth = CheckpointStatNumber.getCheckpointStatNumberWidth(2026, 64);
const createStyles = fn(5005);
let obj = { year: null };
const rect1 = { position: "absolute", left: 178 - checkpointStatNumberWidth / 2, top: 22.5, transform: null };
let items = [{ rotate: "90deg" }];
rect1.transform = items;
obj.year = rect1;
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointRecapCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointRecapCard(arg0) {
  const cResult = c.c(21);
  ({ character, maxHeight, isStepFocusTarget } = arg0);
  const tmp5 = closure_9();
  let num = 1;
  const context = noop.useContext(CheckpointStepHeaderRefContextDefault);
  if (null != maxHeight) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.min(Math.max(maxHeight / canvasHeight, 0.75), 1);
  }
  if (cResult[0] !== character) {
    const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(character);
    const tmpResult = CheckpointCardColors;
    const cardColors = CheckpointCardColors.getCardColors(characterCardColorPalette);
    cResult[0] = character;
    cResult[1] = characterCardColorPalette;
    cResult[2] = cardColors;
    let tmp11 = cardColors;
    let tmp10 = characterCardColorPalette;
    const tmpResult3 = CheckpointCardColors;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const primaryBackgroundColor = tmp11.primaryBackgroundColor;
  if (cResult[3] !== character) {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      checkpointCharacterAccessibilityLabel = CheckpointCharacterAccessibilityUtils.getCheckpointCharacterAccessibilityLabel(character);
      const tmpResult4 = CheckpointCharacterAccessibilityUtils;
    }
    cResult[3] = character;
    cResult[4] = checkpointCharacterAccessibilityLabel;
    let tmp14 = checkpointCharacterAccessibilityLabel;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== primaryBackgroundColor) {
    const obj2 = { value, color: primaryBackgroundColor, size: 64 };
    const tmp19 = jsx(CheckpointStatNumberDefault, { value, color: primaryBackgroundColor, size: 64 });
    cResult[5] = primaryBackgroundColor;
    cResult[6] = tmp19;
    let tmp16 = tmp19;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === tmp5.year) {
    if (cResult[8] === tmp16) {
      let tmp20 = cResult[9];
    }
    if (cResult[10] === tmp10) {
      if (cResult[11] === character) {
        if (cResult[12] === num) {
          if (cResult[13] === tmp20) {
            let tmp22 = cResult[14];
          }
          if (null == tmp14) {
            if (cResult[15] !== tmp22) {
              const obj3 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp22 };
              const tmp35 = <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">{tmp22}</View>;
              cResult[15] = tmp22;
              cResult[16] = tmp35;
              let tmp32 = tmp35;
            } else {
              tmp32 = cResult[16];
            }
            return tmp32;
          } else {
            let tmp27;
            if (tmp4) {
              tmp27 = context;
            }
            if (cResult[17] === tmp14) {
              if (cResult[18] === tmp22) {
                if (cResult[19] === tmp27) {
                  let tmp28 = cResult[20];
                }
                return tmp28;
              }
            }
            const obj4 = { ref: tmp27, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp14, children: tmp22 };
            const tmp31 = <View ref={tmp27} accessible accessibilityRole="image" accessibilityLabel={tmp14}>{tmp22}</View>;
            cResult[17] = tmp14;
            cResult[18] = tmp22;
            cResult[19] = tmp27;
            cResult[20] = tmp31;
            tmp28 = tmp31;
          }
        }
      }
    }
    const obj5 = { character, cardColorPalette: tmp10, canvasWidth: 200, canvasHeight, scale: num, clydeSize: 28, characterLayout: rect, children: tmp20 };
    const tmp26 = jsx(CheckpointCardFrameDefault, { character, cardColorPalette: tmp10, canvasWidth: 200, canvasHeight, scale: num, clydeSize: 28, characterLayout: rect, children: tmp20 });
    cResult[10] = tmp10;
    cResult[11] = character;
    cResult[12] = num;
    cResult[13] = tmp20;
    cResult[14] = tmp26;
    tmp22 = tmp26;
  }
  const tmp21 = <View style={tmp5.year}>{tmp16}</View>;
  cResult[7] = tmp5.year;
  cResult[8] = tmp16;
  cResult[9] = tmp21;
  tmp20 = tmp21;
  const obj6 = { style: tmp5.year, children: tmp16 };
  tmp4 = undefined !== isStepFocusTarget && isStepFocusTarget;
}) : (function CheckpointRecapCard(character) {
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
    num = Math.min(Math.max(maxHeight / canvasHeight, 0.75), 1);
  }
  const tmp = closure_9();
  const characterCardColorPalette = character(6079).getCharacterCardColorPalette(character);
  const obj2 = character(6079);
  const items = [character];
  const memo = noop.useMemo(() => {
    let checkpointCharacterAccessibilityLabel = null;
    if (null != character) {
      checkpointCharacterAccessibilityLabel = CheckpointCharacterAccessibilityUtils.getCheckpointCharacterAccessibilityLabel(tmp);
    }
    return checkpointCharacterAccessibilityLabel;
  }, items);
  const obj4 = { character, cardColorPalette: characterCardColorPalette, canvasWidth: 200, canvasHeight, scale: num, clydeSize: 28, characterLayout: rect, children: null };
  const obj5 = { style: tmp.year, children: null };
  const obj3 = character(6079);
  const tmp2Result = CheckpointCardFrameDefault;
  obj5.children = jsx(CheckpointStatNumberDefault, { value, color: obj3.getCardColors(characterCardColorPalette).primaryBackgroundColor, size: 64 });
  obj4.children = <View style={tmp.year}>{null}</View>;
  const tmp12 = <tmp2Result character={character} cardColorPalette={characterCardColorPalette} canvasWidth={200} canvasHeight={canvasHeight} scale={num} clydeSize={28} characterLayout={rect}>{null}</tmp2Result>;
  if (null == memo) {
    const obj7 = { accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp12 };
    let obj8 = obj7;
  } else {
    let tmp13;
    if (isStepFocusTarget) {
      tmp13 = context;
    }
    obj8 = { ref: tmp13, accessible: true, accessibilityRole: "image", accessibilityLabel: memo, children: tmp12 };
  }
  return <View {...obj8} />;
});