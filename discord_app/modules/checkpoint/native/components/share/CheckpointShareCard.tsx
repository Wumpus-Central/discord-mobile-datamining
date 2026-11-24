// === Module 12433: CheckpointShareCard ===

// Module 12433 (CheckpointShareCard)
import nativeDefault from "native" /* 575 */;
import _modDef1653 from "module_1653" /* 1653 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6295 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6296 */;
import CheckpointCardFrame from "CheckpointCardFrame" /* 12434 */;
import useCheckpointCharacterImagesDefault from "useCheckpointCharacterImages" /* 12439 */;
import useCheckpointCompositeRevealStyleDefault from "useCheckpointCompositeRevealStyle" /* 12441 */;
import CheckpointShareCardYear from "CheckpointShareCardYear" /* 12442 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 12443 */;
import CheckpointShareCardStatsDefault from "CheckpointShareCardStats" /* 12444 */;
import CheckpointShareCardFooterDefault from "CheckpointShareCardFooter" /* 12445 */;
import noop from "module_19" /* 19 */;

const CheckpointCardFrameDefault = CheckpointCardFrame;
const CheckpointShareCardYearDefault = CheckpointShareCardYear;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: closure_6 } = jsxProd);
let c7 = 200;
const result = fn(12434).CHECKPOINT_CARD_HEIGHT * 0.6944444444444444;
const characterLayout = { size: 224, top: 16, left: -12 };
const rect = { size: 224, top: nativeDefault.space.PX_16, left: -4 };
let layout = { iconSize: 16, textVariant: "body-sm/medium" };
let obj2 = {};
const merged = Object.assign(layout);
obj2.reactionsIcon = fn(12437).EmojiSlightlySmilingFaceIcon;
const createStyles = fn(4917);
const obj3 = { card: { overflow: "hidden" }, portraitCard: null, characterAndStatsCard: null, characterAndStatsCanvas: null, portraitStats: null, characterAndStatsStats: null, statRow: null };
let size = { width: 200, height: fn(12434).CHECKPOINT_CARD_HEIGHT };
obj3.portraitCard = size;
obj3.characterAndStatsCard = { width: 300, height: result };
let size1 = { width: 432, height: fn(12434).CHECKPOINT_CARD_HEIGHT, transform: null, transformOrigin: "top left" };
let items = [{ scale: 0.6944444444444444 }];
size1.transform = items;
obj3.characterAndStatsCanvas = size1;
const rect1 = { position: "absolute", top: 56, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj3.portraitStats = rect1;
const size2 = { position: "absolute", top: 29, height: 226, right: nativeDefault.space.PX_24, width: 176, justifyContent: "center", gap: nativeDefault.space.PX_12 + 2 };
obj3.characterAndStatsStats = size2;
obj3.statRow = { height: 16, gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj3);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCard.tsx");

export default function CheckpointShareCard(arg0) {
  ({ cardType, character, stats } = arg0);
  const tmp = closure_13();
  let tmp4 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp4 = character;
  }
  const tmp6 = useCheckpointCharacterImagesDefault(tmp4, 224);
  const tmp7 = useCheckpointCompositeRevealStyleDefault(tmp6);
  const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(character);
  const tmp2Result = CheckpointCardColors;
  const cardColors = CheckpointCardColors.getCardColors(characterCardColorPalette);
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    layout = { style: tmp.characterAndStatsCanvas, children: null };
    obj2 = { images: tmp6, cardColorPalette: characterCardColorPalette, canvasWidth: 432, isCharacterAndStats: true, clydeSize: 24, characterLayout: rect, children: null };
    const obj4 = { path: null, x: 156.25 };
    const tmp5Result = CheckpointCardFrameDefault;
    obj4.path = CheckpointShareCardYear.YEAR_PATH;
    obj2.children = React4(CheckpointShareCardYearDefault, obj4);
    items = [React4(tmp5Result, obj2), , ];
    let tmp22Result = null != stats;
    if (tmp22Result) {
      const obj5 = { stats, layout: obj2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj11.style, statRow: obj11.rowStyle } = tmp);
      tmp22Result = React4(CheckpointShareCardStatsDefault, obj5);
    }
    items[1] = tmp22Result;
    items[2] = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    layout.children = items;
    let tmp29Result = hasOwnProperty(View, layout);
    const tmp5Result6 = CheckpointShareCardYearDefault;
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    const obj6 = { children: null };
    const obj7 = { images: tmp6, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, characterLayout, children: null };
    const obj8 = { path: null, x: null };
    const tmp5Result7 = CheckpointCardFrameDefault;
    obj8.path = CheckpointShareCardYear.YEAR_PATH;
    obj8.x = v200 - CheckpointShareCardYear.YEAR_WIDTH;
    obj7.children = React4(CheckpointShareCardYearDefault, obj8);
    const items1 = [React4(tmp5Result7, obj7), React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: false })];
    obj6.children = items1;
    tmp29Result = hasOwnProperty(timestampProducer, obj6);
    const tmp5Result8 = CheckpointShareCardYearDefault;
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    const obj9 = { images: tmp6, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize: 24, children: null };
    const obj10 = { path: null, x: null };
    const tmp5Result9 = CheckpointCardFrameDefault;
    obj10.path = CheckpointShareCardYear.SHORT_YEAR_PATH;
    obj10.x = v200 - CheckpointShareCardYear.YEAR_WIDTH;
    obj9.children = React4(CheckpointShareCardYearDefault, obj10);
    const items2 = [React4(tmp5Result9, obj9), , ];
    let tmp31Result = null != stats;
    if (tmp31Result) {
      const obj12 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, statRow: obj3.rowStyle } = tmp);
      tmp31Result = React4(CheckpointShareCardStatsDefault, obj12);
    }
    const obj13 = { children: null };
    items2[1] = tmp31Result;
    items2[2] = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
    obj13.children = items2;
    tmp29Result = hasOwnProperty(timestampProducer, obj13);
    const tmp5Result10 = CheckpointShareCardYearDefault;
  }
  const obj14 = { value: cardColors, children: null };
  const items3 = [tmp.card, tmp7, ];
  const obj15 = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items3[2] = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp.characterAndStatsCard : tmp.portraitCard;
  obj15.style = items3;
  obj15.children = tmp29Result;
  obj14.children = React4(_modDef1653.View, obj15);
  return React4(CheckpointShareCardContext.CheckpointShareCardColorsContext.Provider, obj14);
};
export function getCheckpointShareCardSize(item) {
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === item) {
    const size = { width: 300, height: result };
    return size;
  } else {
    const size1 = { width: v200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
    return size1;
  }
}