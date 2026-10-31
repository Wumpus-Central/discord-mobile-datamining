// discord_app/modules/checkpoint/native/components/share/CheckpointShareCard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointCardTypes from "../../../../../../discord_common/js/shared/shared-constants/CheckpointCardTypes.tsx";
import CheckpointCardColors from "../../../CheckpointCardColors.tsx";
import CheckpointCardFrame from "../card/CheckpointCardFrame.tsx";
import CheckpointShareCardYear from "CheckpointShareCardYear.tsx";
import CheckpointShareCardContext from "CheckpointShareCardContext.tsx";
import CheckpointShareCardStatsDefault from "CheckpointShareCardStats.tsx";
import CheckpointShareCardPowerBarDefault from "CheckpointShareCardPowerBar.tsx";
import CheckpointShareCardFooterDefault from "CheckpointShareCardFooter.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const CheckpointCardFrameDefault = CheckpointCardFrame;
const CheckpointShareCardYearDefault = CheckpointShareCardYear;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 200;
const result = fn(13424).CHECKPOINT_CARD_HEIGHT * 0.6944444444444444;
const characterLayout = { size: 224, top: 24, left: -12 };
const characterLayout2 = { size: 224, top: 24, left: -4 };
let layout = { iconSize: 16, textVariant: "text-sm/medium" };
let obj2 = {};
const merged = Object.assign(layout);
obj2.reactionsIcon = fn(13426).EmojiSlightlySmilingFaceIcon;
const createStyles = fn(5014);
let obj4 = {
  card: { overflow: "hidden" },
  portraitCard: null,
  characterAndStatsCard: null,
  characterAndStatsCanvas: null,
  portraitStats: null,
  characterAndStatsStats: null,
  statRow: null,
};
let size = { width: 200, height: fn(13424).CHECKPOINT_CARD_HEIGHT };
obj4.portraitCard = size;
obj4.characterAndStatsCard = { width: 300, height: result };
let size1 = { width: 432, height: fn(13424).CHECKPOINT_CARD_HEIGHT, transform: null, transformOrigin: "top left" };
let items = [{ scale: 0.6944444444444444 }];
size1.transform = items;
obj4.characterAndStatsCanvas = size1;
const rect = {
  position: "absolute",
  top: 56,
  left: nativeDefault.space.PX_12,
  right: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
};
obj4.portraitStats = rect;
const size2 = {
  position: "absolute",
  top: 29,
  height: 226,
  right: nativeDefault.space.PX_24,
  width: 176,
  justifyContent: "center",
  gap: nativeDefault.space.PX_12 + 2,
};
obj4.characterAndStatsStats = size2;
obj4.statRow = { height: 16, gap: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj4);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCard.tsx");

export default function CheckpointShareCard(arg0) {
  ({ cardType, character, stats } = arg0);
  const tmp = closure_13();
  let tmp4 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp4 = character;
  }
  const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(character);
  const tmp2Result = CheckpointCardColors;
  const cardColors = CheckpointCardColors.getCardColors(characterCardColorPalette);
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    layout = { style: tmp.characterAndStatsCanvas, children: null };
    obj2 = {
      character: tmp4,
      cardColorPalette: characterCardColorPalette,
      canvasWidth: 432,
      isCharacterAndStats: true,
      clydeSize: 24,
      characterLayout: characterLayout2,
      children: null,
    };
    const obj4 = { path: null, x: 156.25 };
    const tmp22 = CheckpointCardFrameDefault;
    obj4.path = CheckpointShareCardYear.YEAR_PATH;
    obj2.children = React4(CheckpointShareCardYearDefault, obj4);
    const items = [React4(tmp22, obj2), ,];
    let tmp18Result = null != stats;
    if (tmp18Result) {
      const obj5 = { children: null };
      const obj6 = { stats, layout: obj2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj12.style, statRow: obj12.rowStyle } = tmp);
      const items1 = [React4(CheckpointShareCardStatsDefault, obj6)];
      const obj7 = { stats };
      items1[1] = React4(CheckpointShareCardPowerBarDefault, obj7);
      obj5.children = items1;
      tmp18Result = timestampProducer(hasOwnProperty, obj5);
    }
    items[1] = tmp18Result;
    items[2] = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    layout.children = items;
    let tmp18Result2 = timestampProducer(View, layout);
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    const obj8 = { children: null };
    const obj9 = {
      character: tmp4,
      cardColorPalette: characterCardColorPalette,
      canvasWidth: v200,
      clydeSize: 24,
      characterLayout,
      children: null,
    };
    const obj10 = { path: null, x: null };
    const tmp14 = CheckpointCardFrameDefault;
    obj10.path = CheckpointShareCardYear.YEAR_PATH;
    obj10.x = v200 - CheckpointShareCardYear.YEAR_WIDTH;
    obj9.children = React4(CheckpointShareCardYearDefault, obj10);
    const items2 = [React4(tmp14, obj9), React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: false })];
    obj8.children = items2;
    tmp18Result2 = timestampProducer(hasOwnProperty, obj8);
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    const obj11 = {
      character: null,
      cardColorPalette: characterCardColorPalette,
      canvasWidth: v200,
      clydeSize: 24,
      children: null,
    };
    const obj13 = { path: null, x: null };
    const tmp34 = CheckpointCardFrameDefault;
    obj13.path = CheckpointShareCardYear.SHORT_YEAR_PATH;
    obj13.x = v200 - CheckpointShareCardYear.YEAR_WIDTH;
    obj11.children = React4(CheckpointShareCardYearDefault, obj13);
    const items3 = [React4(tmp34, obj11), ,];
    let tmp32Result = null != stats;
    if (tmp32Result) {
      const obj14 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, statRow: obj3.rowStyle } = tmp);
      tmp32Result = React4(CheckpointShareCardStatsDefault, obj14);
    }
    const obj15 = { children: null };
    items3[1] = tmp32Result;
    items3[2] = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
    obj15.children = items3;
    tmp18Result2 = timestampProducer(hasOwnProperty, obj15);
  }
  const obj16 = { value: cardColors, children: null };
  const items4 = [tmp.card];
  const obj17 = {
    style: null,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  items4[1] =
    cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp.characterAndStatsCard : tmp.portraitCard;
  obj17.style = items4;
  obj17.children = tmp18Result2;
  obj16.children = React4(View, obj17);
  return React4(CheckpointShareCardContext.CheckpointShareCardColorsContext.Provider, obj16);
}
export function getCheckpointShareCardSize(item) {
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === item) {
    const size = { width: 300, height: result };
    return size;
  } else {
    const size1 = { width: v200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
    return size1;
  }
}
