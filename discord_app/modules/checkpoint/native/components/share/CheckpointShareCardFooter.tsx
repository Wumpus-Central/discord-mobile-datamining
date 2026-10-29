// === Module 13244: CheckpointShareCardFooter ===

// Module 13244 (CheckpointShareCardFooter)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5271 */;
import useToken from "useToken" /* 5289 */;
import inlineStyles from "inlineStyles" /* 8017 */;
import CheckpointShareCardContext from "CheckpointShareCardContext" /* 13241 */;
import ArrowLargeRightIcon from "ArrowLargeRightIcon" /* 13245 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let size = { width: 145, height: 28 };
const size1 = { width: 140, height: 24 };
const createStyles = fn(5005);
let obj = { footer: { position: "absolute", bottom: 0, left: 0, flexDirection: "row", alignItems: "center" }, portraitFooter: null, characterAndStatsFooter: null, footerTitle: null, footerButton: null, portraitFooterButton: null, characterAndStatsFooterButton: null };
let obj2 = {};
const merged = Object.assign(size);
obj2.paddingLeft = nativeDefault.space.PX_12;
obj2.gap = nativeDefault.space.PX_8;
obj.portraitFooter = obj2;
let obj4 = {};
const merged1 = Object.assign(size1);
obj4.paddingLeft = nativeDefault.space.PX_12;
obj4.gap = nativeDefault.space.PX_4;
obj.characterAndStatsFooter = obj4;
obj.footerTitle = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
let obj5 = { fontSize: 12, lineHeight: 14, letterSpacing: -0.48, color: nativeDefault.colors.BLACK };
obj.footerButton = { alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
obj.portraitFooterButton = { width: 16, height: 16 };
obj.characterAndStatsFooterButton = { width: 12, height: 12 };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj6 = { alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: nativeDefault.colors.BLACK };
size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardFooter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareCardFooter(isCharacterAndStats) {
  const cResult = c.c(32);
  isCharacterAndStats = isCharacterAndStats.isCharacterAndStats;
  const tmp4 = closure_10();
  const context = noop.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext);
  ({ primaryBackgroundColor, tertiaryBackgroundColor } = context);
  const token = useToken.useToken(nativeDefault.colors.BLACK);
  ({ width, height } = isCharacterAndStats ? size1 : size);
  const tmp8 = isCharacterAndStats ? tmp4.characterAndStatsFooter : tmp4.portraitFooter;
  if (cResult[0] === tmp4.footer) {
    if (cResult[1] === tmp8) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === height) {
      if (cResult[4] === width) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] === primaryBackgroundColor) {
        if (cResult[7] === tmp10) {
          let tmp15 = cResult[8];
        }
        if (cResult[9] === height) {
          if (cResult[10] === tmp15) {
            if (cResult[11] === width) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] !== tmp4.footerTitle) {
              const obj3 = { variant: "display-sm", style: tmp4.footerTitle, allowFontScaling: false, children: "CHECKPOINT" };
              const tmp24 = timestampProducer(Text_Text.Text, obj3);
              cResult[13] = tmp4.footerTitle;
              cResult[14] = tmp24;
              let tmp22 = tmp24;
            } else {
              tmp22 = cResult[14];
            }
            const tmp25 = isCharacterAndStats ? tmp4.characterAndStatsFooterButton : tmp4.portraitFooterButton;
            if (cResult[15] !== token) {
              const obj4 = { offsetX: 1.5, offsetY: 1.5, blurRadius: 0, color: token };
              const items = [obj4];
              cResult[15] = token;
              cResult[16] = items;
              let tmp26 = items;
            } else {
              tmp26 = cResult[16];
            }
            if (cResult[17] === tmp26) {
              if (cResult[18] === tertiaryBackgroundColor) {
                let tmp27 = cResult[19];
              }
              if (cResult[20] === tmp4.footerButton) {
                if (cResult[21] === tmp25) {
                  if (cResult[22] === tmp27) {
                    let tmp28 = cResult[23];
                  }
                  const _Symbol = Symbol;
                  if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj5 = { size: "xxs", color: nativeDefault.colors.BLACK };
                    const tmp32 = timestampProducer(ArrowLargeRightIcon.ArrowLargeRightIcon, obj5);
                    cResult[24] = tmp32;
                    let tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[24];
                  }
                  if (cResult[25] !== tmp28) {
                    const obj6 = { style: tmp28, children: tmp30 };
                    const tmp36 = timestampProducer(hasOwnProperty, obj6);
                    cResult[25] = tmp28;
                    cResult[26] = tmp36;
                    let tmp33 = tmp36;
                  } else {
                    tmp33 = cResult[26];
                  }
                  if (cResult[27] === tmp33) {
                    if (cResult[28] === tmp9) {
                      if (cResult[29] === tmp18) {
                        if (cResult[30] === tmp22) {
                          let tmp37 = cResult[31];
                        }
                        return tmp37;
                      }
                    }
                  }
                  const obj7 = { style: tmp9, children: null };
                  const items1 = [tmp18, tmp22, tmp33];
                  obj7.children = items1;
                  const tmp40 = React5(hasOwnProperty, obj7);
                  cResult[27] = tmp33;
                  cResult[28] = tmp9;
                  cResult[29] = tmp18;
                  cResult[30] = tmp22;
                  cResult[31] = tmp40;
                  tmp37 = tmp40;
                }
              }
              const items2 = [tmp4.footerButton, tmp25, tmp27];
              cResult[20] = tmp4.footerButton;
              cResult[21] = tmp25;
              cResult[22] = tmp27;
              cResult[23] = items2;
              tmp28 = items2;
            }
            const obj8 = { backgroundColor: tertiaryBackgroundColor, boxShadow: tmp26 };
            cResult[17] = tmp26;
            cResult[18] = tertiaryBackgroundColor;
            cResult[19] = obj8;
            tmp27 = obj8;
          }
        }
        size = { style: React4.absoluteFill, width, height, children: tmp15 };
        const tmp21 = timestampProducer(inlineStylesDefault, size);
        cResult[9] = height;
        cResult[10] = tmp15;
        cResult[11] = width;
        cResult[12] = tmp21;
        tmp18 = tmp21;
      }
      const obj9 = { d: tmp10, fill: primaryBackgroundColor };
      const tmp17 = timestampProducer(inlineStyles.Path, obj9);
      cResult[6] = primaryBackgroundColor;
      cResult[7] = tmp10;
      cResult[8] = tmp17;
      tmp15 = tmp17;
    }
    const _HermesInternal = HermesInternal;
    const combined = "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z";
    cResult[3] = height;
    cResult[4] = width;
    cResult[5] = combined;
    tmp10 = combined;
  }
  const items3 = [tmp4.footer, tmp8];
  cResult[0] = tmp4.footer;
  cResult[1] = tmp8;
  cResult[2] = items3;
  tmp9 = items3;
}) : (function CheckpointShareCardFooter(isCharacterAndStats) {
  isCharacterAndStats = isCharacterAndStats.isCharacterAndStats;
  const tmp = closure_10();
  const context = noop.useContext(CheckpointShareCardContext.CheckpointShareCardColorsContext);
  ({ primaryBackgroundColor, tertiaryBackgroundColor } = context);
  ({ width, height } = isCharacterAndStats ? size1 : size);
  const items = [tmp.footer, ];
  const obj2 = { style: items, children: null };
  items[1] = isCharacterAndStats ? tmp.characterAndStatsFooter : tmp.portraitFooter;
  const token = useToken.useToken(nativeDefault.colors.BLACK);
  size = { style: React4.absoluteFill, width, height, children: null };
  const tmp5Result = inlineStylesDefault;
  size.children = timestampProducer(inlineStyles.Path, { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor });
  const items1 = [timestampProducer(tmp5Result, size), timestampProducer(Text_Text.Text, { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" }), ];
  const items2 = [tmp.footerButton, , ];
  const obj5 = { style: items2, children: null };
  items2[1] = isCharacterAndStats ? tmp.characterAndStatsFooterButton : tmp.portraitFooterButton;
  const obj6 = { backgroundColor: tertiaryBackgroundColor, boxShadow: null };
  const items3 = [{ offsetX: 1.5, offsetY: 1.5, blurRadius: 0, color: token }];
  obj6.boxShadow = items3;
  items2[2] = obj6;
  const obj3 = { d: "M0 0H" + width - 13 + "L" + width + " 12V" + height + "H0Z", fill: primaryBackgroundColor };
  const obj4 = { variant: "display-sm", style: tmp.footerTitle, allowFontScaling: false, children: "CHECKPOINT" };
  obj5.children = timestampProducer(ArrowLargeRightIcon.ArrowLargeRightIcon, { size: "xxs", color: nativeDefault.colors.BLACK });
  items1[2] = timestampProducer(hasOwnProperty, obj5);
  obj2.children = items1;
  return React5(hasOwnProperty, obj2);
});