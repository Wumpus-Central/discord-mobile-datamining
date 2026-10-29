// === Module 13238: CheckpointShareCard ===

// Module 13238 (CheckpointShareCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointCardTypes from "CheckpointCardTypes" /* 6078 */;
import CheckpointCardColors from "CheckpointCardColors" /* 6079 */;
import CheckpointCardFrame from "CheckpointCardFrame" /* 13239 */;
import CheckpointShareCardYear from "CheckpointShareCardYear" /* 13240 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13241 */;
import CheckpointShareCardStatsDefault from "CheckpointShareCardStats" /* 13242 */;
import CheckpointShareCardPowerBarDefault from "CheckpointShareCardPowerBar" /* 13243 */;
import CheckpointShareCardFooterDefault from "CheckpointShareCardFooter" /* 13244 */;
import noop from "module_19" /* 19 */;

const CheckpointCardFrameDefault = CheckpointCardFrame;
const CheckpointShareCardYearDefault = CheckpointShareCardYear;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 200;
let c8 = 0.6944444444444444;
let c9 = 24;
const characterLayout = { size: 224, top: 24, left: -12 };
const characterLayout2 = { size: 230.4, top: 17.28, left: -5.76 };
const layout = { iconSize: 16, textVariant: "text-sm/medium" };
const layout2 = { iconSize: 12, textVariant: "text-xs/medium" };
const createStyles = fn(5005);
let obj2 = { card: { overflow: "hidden" }, portraitCard: null, characterAndStatsCard: null, portraitStats: null, characterAndStatsStats: null, portraitStatRow: null, characterAndStatsStatRow: null };
let size = { width: 200, height: fn(13239).CHECKPOINT_CARD_HEIGHT };
obj2.portraitCard = size;
obj2.characterAndStatsCard = { width: 300, height: 198 };
const rect = { position: "absolute", top: 56, left: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.portraitStats = rect;
const rect1 = { position: "absolute", top: 0, bottom: 0, right: nativeDefault.space.PX_16, width: 122, justifyContent: "center", gap: 10 };
obj2.characterAndStatsStats = rect1;
obj2.portraitStatRow = { height: 16, gap: nativeDefault.space.PX_8 };
let obj3 = { height: 16, gap: nativeDefault.space.PX_8 };
obj2.characterAndStatsStatRow = { height: 12, gap: nativeDefault.space.PX_4 };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { height: 12, gap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareCard(arg0) {
  const cResult = c.c(42);
  ({ cardType, character, stats } = arg0);
  const tmp4 = closure_14();
  let tmp5 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp5 = character;
  }
  if (cResult[0] !== character) {
    const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(character);
    const tmpResult = CheckpointCardColors;
    const cardColors = CheckpointCardColors.getCardColors(characterCardColorPalette);
    cResult[0] = character;
    cResult[1] = characterCardColorPalette;
    cResult[2] = cardColors;
    let tmp7 = cardColors;
    let tmp6 = characterCardColorPalette;
    const tmpResult2 = CheckpointCardColors;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    const _Symbol4 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { path: CheckpointShareCardYear.YEAR_PATH, x: 154 };
      const tmp63 = React4(CheckpointShareCardYearDefault, obj2);
      cResult[3] = tmp63;
      let tmp59 = tmp63;
    } else {
      tmp59 = cResult[3];
    }
    if (cResult[4] === tmp5) {
      if (cResult[5] === tmp6) {
        let tmp64 = cResult[6];
      }
      if (cResult[7] === stats) {
        if (cResult[8] === tmp4.characterAndStatsStatRow) {
          if (cResult[9] === tmp4.characterAndStatsStats) {
            let tmp71 = cResult[10];
          }
          const _Symbol5 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp81 = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
            cResult[11] = tmp81;
            let tmp78 = tmp81;
          } else {
            tmp78 = cResult[11];
          }
          if (cResult[12] === tmp64) {
          }
          const obj3 = { children: null };
          const items = [tmp64, tmp71, tmp78];
          obj3.children = items;
          const tmp85 = timestampProducer(hasOwnProperty, obj3);
          cResult[12] = tmp64;
          cResult[13] = tmp71;
          cResult[14] = tmp85;
        }
      }
      let tmp72 = null != stats;
      if (tmp72) {
        const obj4 = { children: null };
        const obj5 = { stats, layout: layout2, style: null, rowStyle: null };
        ({ characterAndStatsStats: obj14.style, characterAndStatsStatRow: obj14.rowStyle } = tmp4);
        const items1 = [React4(CheckpointShareCardStatsDefault, obj5), ];
        const obj7 = { stats };
        items1[1] = React4(CheckpointShareCardPowerBarDefault, obj7);
        obj4.children = items1;
        tmp72 = timestampProducer(hasOwnProperty, obj4);
      }
      cResult[7] = stats;
      cResult[8] = tmp4.characterAndStatsStatRow;
      cResult[9] = tmp4.characterAndStatsStats;
      cResult[10] = tmp72;
      tmp71 = tmp72;
    }
    const obj8 = { character: tmp5, cardColorPalette: tmp6, canvasWidth: 432, scale, clydeSize, characterLayout: characterLayout2, children: tmp59 };
    const tmp70 = React4(CheckpointCardFrameDefault, obj8);
    cResult[4] = tmp5;
    cResult[5] = tmp6;
    cResult[6] = tmp70;
    tmp64 = tmp70;
  } else {
    if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { path: CheckpointShareCardYear.YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
        const tmp42 = React4(CheckpointShareCardYearDefault, obj9);
        cResult[15] = tmp42;
        let tmp37 = tmp42;
      } else {
        tmp37 = cResult[15];
      }
      if (cResult[16] === tmp5) {
        if (cResult[17] === tmp6) {
          let tmp43 = cResult[18];
        }
        const _Symbol3 = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp53 = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
          cResult[19] = tmp53;
          let tmp50 = tmp53;
        } else {
          tmp50 = cResult[19];
        }
        if (cResult[20] !== tmp43) {
          const obj10 = { children: null };
          const items2 = [tmp43, tmp50];
          obj10.children = items2;
          const tmp57 = timestampProducer(hasOwnProperty, obj10);
          cResult[20] = tmp43;
          cResult[21] = tmp57;
          let tmp54 = tmp57;
        } else {
          tmp54 = cResult[21];
        }
        let tmp35 = tmp54;
      }
      const obj11 = { character: tmp5, cardColorPalette: tmp6, canvasWidth: v200, clydeSize, characterLayout, children: tmp37 };
      const tmp49 = React4(CheckpointCardFrameDefault, obj11);
      cResult[16] = tmp5;
      cResult[17] = tmp6;
      cResult[18] = tmp49;
      tmp43 = tmp49;
    } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
      const _Symbol6 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        const obj12 = { path: CheckpointShareCardYear.SHORT_YEAR_PATH, x: v200 - CheckpointShareCardYear.YEAR_WIDTH };
        const tmp15 = React4(CheckpointShareCardYearDefault, obj12);
        cResult[22] = tmp15;
        let tmp10 = tmp15;
      } else {
        tmp10 = cResult[22];
      }
      if (cResult[23] !== tmp6) {
        const obj13 = { character: null, cardColorPalette: tmp6, canvasWidth: v200, clydeSize, children: tmp10 };
        const tmp21 = React4(CheckpointCardFrameDefault, obj13);
        cResult[23] = tmp6;
        cResult[24] = tmp21;
        let tmp16 = tmp21;
      } else {
        tmp16 = cResult[24];
      }
      if (cResult[25] === stats) {
        if (cResult[26] === tmp4.portraitStatRow) {
          if (cResult[27] === tmp4.portraitStats) {
            let tmp22 = cResult[28];
          }
          const _Symbol = Symbol;
          if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp30 = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
            cResult[29] = tmp30;
            let tmp27 = tmp30;
          } else {
            tmp27 = cResult[29];
          }
          if (cResult[30] === tmp16) {
            if (cResult[31] === tmp22) {
              let tmp31 = cResult[32];
            }
            tmp35 = tmp31;
          }
          const obj15 = { children: null };
          const items3 = [tmp16, tmp22, tmp27];
          obj15.children = items3;
          const tmp34 = timestampProducer(hasOwnProperty, obj15);
          cResult[30] = tmp16;
          cResult[31] = tmp22;
          cResult[32] = tmp34;
          tmp31 = tmp34;
        }
      }
      let tmp23 = null != stats;
      if (tmp23) {
        const obj16 = { stats, layout, style: null, rowStyle: null };
        ({ portraitStats: obj6.style, portraitStatRow: obj6.rowStyle } = tmp4);
        tmp23 = React4(CheckpointShareCardStatsDefault, obj16);
      }
      cResult[25] = stats;
      cResult[26] = tmp4.portraitStatRow;
      cResult[27] = tmp4.portraitStats;
      cResult[28] = tmp23;
      tmp22 = tmp23;
    }
    const tmp87 = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp4.characterAndStatsCard : tmp4.portraitCard;
    if (cResult[33] === tmp4.card) {
      if (cResult[34] === tmp87) {
        let tmp88 = cResult[35];
      }
      if (cResult[36] === tmp35) {
        if (cResult[37] === tmp88) {
          let tmp89 = cResult[38];
        }
        if (cResult[39] === tmp7) {
          if (cResult[40] === tmp89) {
            let tmp93 = cResult[41];
          }
          return tmp93;
        }
        const obj17 = { value: tmp7, children: tmp89 };
        const tmp95 = React4(CheckpointShareCardContext.CheckpointShareCardColorsContext.Provider, obj17);
        cResult[39] = tmp7;
        cResult[40] = tmp89;
        cResult[41] = tmp95;
        tmp93 = tmp95;
      }
      const obj18 = { style: tmp88, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp35 };
      const tmp92 = React4(View, obj18);
      cResult[36] = tmp35;
      cResult[37] = tmp88;
      cResult[38] = tmp92;
      tmp89 = tmp92;
    }
    const items4 = [tmp4.card, tmp87];
    cResult[33] = tmp4.card;
    cResult[34] = tmp87;
    cResult[35] = items4;
    tmp88 = items4;
  }
}) : (function CheckpointShareCard(arg0) {
  ({ cardType, character, stats } = arg0);
  const tmp = closure_14();
  let tmp4 = null;
  if (cardType !== CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY) {
    tmp4 = character;
  }
  const characterCardColorPalette = CheckpointCardColors.getCharacterCardColorPalette(character);
  const tmp2Result = CheckpointCardColors;
  const cardColors = CheckpointCardColors.getCardColors(characterCardColorPalette);
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === cardType) {
    const obj = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: 432, scale, clydeSize, characterLayout: characterLayout2, children: null };
    const obj2 = { path: null, x: 154 };
    const tmp23 = CheckpointCardFrameDefault;
    obj2.path = CheckpointShareCardYear.YEAR_PATH;
    obj.children = React4(CheckpointShareCardYearDefault, obj2);
    const items = [React4(tmp23, obj), , ];
    let tmp19Result = null != stats;
    if (tmp19Result) {
      const obj4 = { children: null };
      const obj5 = { stats, layout: layout2, style: null, rowStyle: null };
      ({ characterAndStatsStats: obj11.style, characterAndStatsStatRow: obj11.rowStyle } = tmp);
      const items1 = [React4(CheckpointShareCardStatsDefault, obj5), ];
      const obj6 = { stats };
      items1[1] = React4(CheckpointShareCardPowerBarDefault, obj6);
      obj4.children = items1;
      tmp19Result = timestampProducer(hasOwnProperty, obj4);
    }
    const obj7 = { children: null };
    items[1] = tmp19Result;
    items[2] = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: true });
    obj7.children = items;
    let tmp19Result2 = timestampProducer(hasOwnProperty, obj7);
  } else if (CheckpointCardTypes.CheckpointCardTypes.CHARACTER_ONLY === cardType) {
    const obj8 = { children: null };
    const obj9 = { character: tmp4, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize, characterLayout, children: null };
    const obj10 = { path: null, x: null };
    const tmp14 = CheckpointCardFrameDefault;
    obj10.path = CheckpointShareCardYear.YEAR_PATH;
    obj10.x = v200 - CheckpointShareCardYear.YEAR_WIDTH;
    obj9.children = React4(CheckpointShareCardYearDefault, obj10);
    const items2 = [React4(tmp14, obj9), React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: false })];
    obj8.children = items2;
    tmp19Result2 = timestampProducer(hasOwnProperty, obj8);
  } else if (CheckpointCardTypes.CheckpointCardTypes.STATS_ONLY === cardType) {
    const obj12 = { character: null, cardColorPalette: characterCardColorPalette, canvasWidth: v200, clydeSize, children: null };
    const obj13 = { path: null, x: null };
    const tmp36 = CheckpointCardFrameDefault;
    obj13.path = CheckpointShareCardYear.SHORT_YEAR_PATH;
    obj13.x = v200 - CheckpointShareCardYear.YEAR_WIDTH;
    obj12.children = React4(CheckpointShareCardYearDefault, obj13);
    const items3 = [React4(tmp36, obj12), , ];
    let tmp34Result = null != stats;
    if (tmp34Result) {
      const obj14 = { stats, layout, style: null, rowStyle: null };
      ({ portraitStats: obj3.style, portraitStatRow: obj3.rowStyle } = tmp);
      tmp34Result = React4(CheckpointShareCardStatsDefault, obj14);
    }
    const obj15 = { children: null };
    items3[1] = tmp34Result;
    items3[2] = React4(CheckpointShareCardFooterDefault, { isCharacterAndStats: false });
    obj15.children = items3;
    tmp19Result2 = timestampProducer(hasOwnProperty, obj15);
  }
  const obj16 = { value: cardColors, children: null };
  const items4 = [tmp.card, ];
  const obj17 = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items4[1] = cardType === CheckpointCardTypes.CheckpointCardTypes.DEFAULT ? tmp.characterAndStatsCard : tmp.portraitCard;
  obj17.style = items4;
  obj17.children = tmp19Result2;
  obj16.children = React4(View, obj17);
  return React4(CheckpointShareCardContext.CheckpointShareCardColorsContext.Provider, obj16);
});
export function getCheckpointShareCardSize(item) {
  if (CheckpointCardTypes.CheckpointCardTypes.DEFAULT === item) {
    return { width: 300, height: 198 };
  } else {
    const size = { width: v200, height: CheckpointCardFrame.CHECKPOINT_CARD_HEIGHT };
    return size;
  }
}