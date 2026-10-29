// === Module 13243: CheckpointShareCardPowerBar ===

// Module 13243 (CheckpointShareCardPowerBar)
import nativeDefault from "native" /* 587 */;
import inlineStyles from "inlineStyles" /* 8017 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CHECKPOINT_2026_POWER_BAR_UNITS = fn(6054).CHECKPOINT_2026_POWER_BAR_UNITS;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let items = ["M0 0H10L4.44 8H0V0Z"];
items[HermesBuiltin.arraySpread(Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2).fill("M5.65 0H13L7.35 8H0L5.65 0Z"), 1)] = "M5.56 0H10V8H0L5.56 0Z";
const ArrayResult = Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2);
let items1 = [10];
items1[HermesBuiltin.arraySpread(Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2).fill(13), 1)] = 10;
const createStyles = fn(5005);
let obj = { powerBar: null, powerLevel: { flexDirection: "row", gap: 2 }, powerText: null, powerUnits: null };
const rect = { position: "absolute", top: 75, left: 12, flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 6, paddingVertical: 2, transform: null, transformOrigin: "top left" };
let items2 = [{ rotate: "90deg" }];
rect.transform = items2;
obj.powerBar = rect;
const ArrayResult1 = Array(CHECKPOINT_2026_POWER_BAR_UNITS - 2);
obj.powerText = { fontSize: 8, lineHeight: 8, letterSpacing: -0.08, color: nativeDefault.colors.BLACK };
obj.powerUnits = { flexDirection: "row" };
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj2 = { fontSize: 8, lineHeight: 8, letterSpacing: -0.08, color: nativeDefault.colors.BLACK };
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/share/CheckpointShareCardPowerBar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointShareCardPowerBar(stats) {
  const cResult = stats(576).c(24);
  stats = stats.stats;
  const tmp4 = closure_9();
  const tertiaryBackgroundColor = noop.useContext(stats(13241).CheckpointShareCardColorsContext).tertiaryBackgroundColor;
  let obj = stats(576);
  token = stats(5289).useToken(token(587).colors.BLACK);
  if (cResult[0] !== tertiaryBackgroundColor) {
    const obj3 = { backgroundColor: tertiaryBackgroundColor };
    cResult[0] = tertiaryBackgroundColor;
    cResult[1] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4.powerBar) {
    if (cResult[3] === tmp6) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] !== tmp4.powerText) {
      const obj4 = { variant: "experimental/mono-md/normal", style: tmp4.powerText, allowFontScaling: false, children: "LVL" };
      const tmp10 = closure_5(tmp(5271).Text, obj4);
      cResult[5] = tmp4.powerText;
      cResult[6] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[6];
    }
    if (cResult[7] === stats.powerLevel) {
      if (cResult[8] === tmp4.powerText) {
        let tmp11 = cResult[9];
      }
      if (cResult[10] === tmp4.powerLevel) {
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp11) {
            let tmp14 = cResult[13];
          }
          if (cResult[14] === stats.powerLevelUnits) {
            if (cResult[15] === token) {
              let tmp19 = cResult[16];
            }
            if (cResult[17] === tmp4.powerUnits) {
              if (cResult[18] === tmp19) {
                let tmp22 = cResult[19];
              }
              if (cResult[20] === tmp7) {
                if (cResult[21] === tmp14) {
                  if (cResult[22] === tmp22) {
                    let tmp26 = cResult[23];
                  }
                  return tmp26;
                }
              }
              const obj5 = { style: tmp7, children: null };
              items = [tmp14, tmp22];
              obj5.children = items;
              const tmp29 = closure_6(View, obj5);
              cResult[20] = tmp7;
              cResult[21] = tmp14;
              cResult[22] = tmp22;
              cResult[23] = tmp29;
              tmp26 = tmp29;
            }
            const obj6 = { style: tmp18, children: tmp19 };
            const tmp25 = closure_5(View, obj6);
            cResult[17] = tmp4.powerUnits;
            cResult[18] = tmp19;
            cResult[19] = tmp25;
            tmp22 = tmp25;
          }
          const mapped = items.map((d, index) => {
            const size = { width: 0.75 * tmp, height: 6, viewBox: "0 0 " + items1[index] + " 8", style: null, children: null };
            let obj;
            if (index > 0) {
              obj = { marginLeft: -3 };
            }
            size.style = obj;
            const obj2 = { d, fill: token, opacity: null };
            let num = 0.3;
            if (index < stats.powerLevelUnits) {
              num = 1;
            }
            obj2.opacity = num;
            size.children = hasOwnProperty(inlineStyles.Path, obj2);
            return hasOwnProperty(inlineStylesDefault, size, index);
          });
          cResult[14] = stats.powerLevelUnits;
          cResult[15] = token;
          cResult[16] = mapped;
          tmp19 = mapped;
        }
      }
      const obj7 = { style: tmp4.powerLevel, children: null };
      items1 = [tmp8, tmp11];
      obj7.children = items1;
      const tmp17 = closure_6(View, obj7);
      cResult[10] = tmp4.powerLevel;
      cResult[11] = tmp8;
      cResult[12] = tmp11;
      cResult[13] = tmp17;
      tmp14 = tmp17;
    }
    const obj8 = { variant: "experimental/mono-md/bold", style: tmp4.powerText, allowFontScaling: false, children: stats.powerLevel };
    const tmp13 = closure_5(tmp(5271).Text, obj8);
    cResult[7] = stats.powerLevel;
    cResult[8] = tmp4.powerText;
    cResult[9] = tmp13;
    tmp11 = tmp13;
  }
  const items2 = [tmp4.powerBar, tmp6];
  cResult[2] = tmp4.powerBar;
  cResult[3] = tmp6;
  cResult[4] = items2;
  tmp7 = items2;
  let obj2 = stats(5289);
}) : (function CheckpointShareCardPowerBar(stats) {
  stats = stats.stats;
  const tmp = closure_9();
  importDefault = stats(5289).useToken(nativeDefault.colors.BLACK);
  let obj2 = { style: null, children: null };
  items = [tmp.powerBar, { backgroundColor: noop.useContext(stats(13241).CheckpointShareCardColorsContext).tertiaryBackgroundColor }];
  obj2.style = items;
  const obj3 = { style: tmp.powerLevel, children: null };
  items1 = [closure_5(stats(5271).Text, { variant: "experimental/mono-md/normal", style: tmp.powerText, allowFontScaling: false, children: "LVL" }), closure_5(stats(5271).Text, { variant: "experimental/mono-md/bold", style: tmp.powerText, allowFontScaling: false, children: stats.powerLevel })];
  obj3.children = items1;
  const items2 = [closure_6(View, obj3), ];
  let obj = stats(5289);
  const obj4 = { variant: "experimental/mono-md/normal", style: tmp.powerText, allowFontScaling: false, children: "LVL" };
  const obj5 = { variant: "experimental/mono-md/bold", style: tmp.powerText, allowFontScaling: false, children: stats.powerLevel };
  items2[1] = closure_5(View, {
    style: tmp.powerUnits,
    children: items.map((d, index) => {
      const size = { width: 0.75 * tmp, height: 6, viewBox: "0 0 " + items1[index] + " 8", style: null, children: null };
      let obj;
      if (index > 0) {
        obj = { marginLeft: -3 };
      }
      size.style = obj;
      const obj2 = { d, fill, opacity: null };
      let num = 0.3;
      if (index < stats.powerLevelUnits) {
        num = 1;
      }
      obj2.opacity = num;
      size.children = hasOwnProperty(inlineStyles.Path, obj2);
      return hasOwnProperty(inlineStylesDefault, size, index);
    })
  });
  obj2.children = items2;
  return closure_6(View, obj2);
});