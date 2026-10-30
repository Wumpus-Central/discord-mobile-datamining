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
const characterLayout = { size: 224, top: 24, left: -12 };
const characterLayout2 = { size: 230.4, top: 17.28, left: -5.76 };
const layout = { iconSize: 16, textVariant: "text-sm/medium" };
const layout2 = { iconSize: 12, textVariant: "text-xs/medium" };
const createStyles = fn(5009);
let obj2 = {
  card: { overflow: "hidden" },
  portraitCard: null,
  characterAndStatsCard: null,
  portraitStats: null,
  characterAndStatsStats: null,
  portraitStatRow: null,
  characterAndStatsStatRow: null,
};
let size = { width: 200, height: fn(13389).CHECKPOINT_CARD_HEIGHT };
obj2.portraitCard = size;
obj2.characterAndStatsCard = { width: 300, height: 198 };
const rect = {
  position: "absolute",
  top: 56,
  left: nativeDefault.space.PX_12,
  right: nativeDefault.space.PX_12,
  gap: nativeDefault.space.PX_8,
};
obj2.portraitStats = rect;
const rect1 = {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: nativeDefault.space.PX_16,
  width: 122,
  justifyContent: "center",
  gap: 10,
};
obj2.characterAndStatsStats = rect1;
obj2.portraitStatRow = { height: 16, gap: nativeDefault.space.PX_8 };
const obj3 = { height: 16, gap: nativeDefault.space.PX_8 };
obj2.characterAndStatsStatRow = { height: 12, gap: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCard.tsx");

export default function CheckpointShareCard(arg0) {
  ({ cardType, character, stats } = arg0);
  const tmp = closure_12();
  let tmp4 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp4 = character;
  }
  const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(character);
  const tmp2Result = CheckpointCardColors;
  const cardColors = CheckpointCardColors.getCardColors(characterCardColorPalette);
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    const obj = {
      character: tmp4,
      cardColorPalette: characterCardColorPalette,
      canvasWidth: 432,
      scale: 0.6944444444444444,
      clydeSize: 24,
      characterLayout: characterLayout2,
      children: null,
    };
    const obj2 = { path: null, x: 154 };
    const tmp22 = CheckpointCardFrameDefault;
    obj2.path = CheckpointShareCardYear.YEAR_PATH;
    obj.children = React4(CheckpointShareCardYearDefault, obj2);
    const items = [React4(tmp22, obj), ,];
    let tmp18Result = null != stats;
    if (tmp18Result) {
      const obj4 = { children: null };
      const obj5 = { stats, layout: layout2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj11.style, characterAndStatsStatRow: obj11.rowStyle } = tmp);
      const items1 = [React4(CheckpointShareCardStatsDefault, obj5)];
      const obj6 = { stats };
      items1[1] = React4(CheckpointShareCardPowerBarDefault, obj6);
      obj4.children = items1;
      tmp18Result = timestampProducer(hasOwnProperty, obj4);
    }
    const obj7 = { children: null };
    items[1] = tmp18Result;
    items[2] = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    obj7.children = items;
    let tmp18Result2 = timestampProducer(hasOwnProperty, obj7);
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
    const obj12 = {
      character: null,
      cardColorPalette: characterCardColorPalette,
      canvasWidth: v200,
      clydeSize: 24,
      children: null,
    };
    const obj13 = { path: null, x: null };
    const tmp33 = CheckpointCardFrameDefault;
    obj13.path = CheckpointShareCardYear.SHORT_YEAR_PATH;
    obj13.x = v200 - CheckpointShareCardYear.YEAR_WIDTH;
    obj12.children = React4(CheckpointShareCardYearDefault, obj13);
    const items3 = [React4(tmp33, obj12), ,];
    let tmp31Result = null != stats;
    if (tmp31Result) {
      const obj14 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, portraitStatRow: obj3.rowStyle } = tmp);
      tmp31Result = React4(CheckpointShareCardStatsDefault, obj14);
    }
    const obj15 = { children: null };
    items3[1] = tmp31Result;
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
    return { width: 300, height: 198 };
  } else {
    const size = { width: v200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
    return size;
  }
}
