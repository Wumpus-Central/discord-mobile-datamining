// === Module 14144: GuildBadgeBunny ===

// Module 14144 (GuildBadgeBunny)
import c from "c" /* 576 */;
import v1 from "v1" /* 1279 */;
import inlineStyles from "inlineStyles" /* 7576 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 14122 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const primaryBaseColors = ["#847D8B", "#D1CDD5"];
const primaryTintLuminances = [0.2, 0.65];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBunny.tsx");

export const GuildBadgeBunny = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBadgeBunny(arg0) {
  const cResult = c.c(56);
  if (cResult[0] !== arg0) {
    ({ width, height, primaryTintColor } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = primaryTintColor;
    cResult[2] = tmp10;
    cResult[3] = width;
    cResult[4] = height;
    let tmp7 = height;
    let tmp6 = width;
    let tmp5 = tmp10;
    let tmp4 = primaryTintColor;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  let num6 = 24;
  if (undefined !== tmp6) {
    num6 = tmp6;
  }
  let num7 = 24;
  if (undefined !== tmp7) {
    num7 = tmp7;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const v4Result = v1.v4();
    cResult[5] = v4Result;
    let tmp11 = v4Result;
    const tmpResult = v1;
  } else {
    tmp11 = cResult[5];
  }
  const combined = "badge-bunny-clip-" + tmp11;
  if (cResult[6] !== tmp4) {
    const obj2 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items };
    const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors(obj2);
    cResult[6] = tmp4;
    cResult[7] = transformedBadgeColors;
    let tmp14 = transformedBadgeColors;
    const tmpResult2 = GuildBadgeUtils;
  } else {
    tmp14 = cResult[7];
  }
  const primaryColorsTransformed = tmp14.primaryColorsTransformed;
  if (cResult[8] !== primaryColorsTransformed[1]) {
    const obj3 = { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] };
    const tmp21 = hasOwnProperty(inlineStyles.Path, obj3);
    cResult[8] = primaryColorsTransformed[1];
    cResult[9] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[9];
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp30 = hasOwnProperty(inlineStyles.Path, { d: "M5 8H4V6H3V4H2V2H4V4H5V8Z", fill: "#FF7FC0" });
    const tmp31 = hasOwnProperty(inlineStyles.Path, { d: "M12 8H11V4H12V2H14V4H13V6H12V8Z", fill: "#FF7FC0" });
    const tmp32 = hasOwnProperty(inlineStyles.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z", fill: "white" });
    const tmp33 = hasOwnProperty(inlineStyles.Path, { d: "M9 12V13H7V12H9Z", fill: "#FF1B90" });
    const tmp34 = hasOwnProperty(inlineStyles.Path, { d: "M14 15V16H2V15H14Z", fill: "black" });
    const tmp35 = hasOwnProperty(inlineStyles.Path, { d: "M2 15H1V14H2V15Z", fill: "black" });
    const tmp36 = hasOwnProperty(inlineStyles.Path, { d: "M15 15H14V14H15V15Z", fill: "black" });
    cResult[10] = tmp34;
    cResult[11] = tmp35;
    cResult[12] = tmp36;
    cResult[13] = tmp30;
    cResult[14] = tmp31;
    cResult[15] = tmp32;
    cResult[16] = tmp33;
    let tmp28 = tmp33;
    let tmp27 = tmp32;
    let tmp26 = tmp31;
    let tmp25 = tmp30;
    let tmp24 = tmp36;
    let tmp23 = tmp35;
    let tmp22 = tmp34;
  } else {
    tmp22 = cResult[10];
    tmp23 = cResult[11];
    tmp24 = cResult[12];
    tmp25 = cResult[13];
    tmp26 = cResult[14];
    tmp27 = cResult[15];
    tmp28 = cResult[16];
  }
  if (cResult[17] !== primaryColorsTransformed[0]) {
    const obj4 = { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] };
    const tmp40 = hasOwnProperty(inlineStyles.Path, obj4);
    const obj5 = { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] };
    const tmp41 = hasOwnProperty(inlineStyles.Path, obj5);
    cResult[17] = primaryColorsTransformed[0];
    cResult[18] = tmp40;
    cResult[19] = tmp41;
    let tmp38 = tmp41;
    let tmp37 = tmp40;
  } else {
    tmp37 = cResult[18];
    tmp38 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp64 = hasOwnProperty(inlineStyles.Path, { d: "M1 14H0V12H1V14Z", fill: "black" });
    const tmp65 = hasOwnProperty(inlineStyles.Path, { d: "M16 14H15V12H16V14Z", fill: "black" });
    const tmp66 = hasOwnProperty(inlineStyles.Path, { d: "M2 12H1V10H2V12Z", fill: "black" });
    const tmp67 = hasOwnProperty(inlineStyles.Path, { d: "M15 12H14V10H15V12Z", fill: "black" });
    const tmp68 = hasOwnProperty(inlineStyles.Path, { d: "M3 10H2V9H3V10Z", fill: "black" });
    const tmp69 = hasOwnProperty(inlineStyles.Path, { d: "M14 10H13V9H14V10Z", fill: "black" });
    const tmp70 = hasOwnProperty(inlineStyles.Path, { d: "M4 9H3V8H4V9Z", fill: "black" });
    const tmp71 = hasOwnProperty(inlineStyles.Path, { d: "M13 9H12V8H13V9Z", fill: "black" });
    const tmp72 = hasOwnProperty(inlineStyles.Path, { d: "M3 8H2V6H3V8Z", fill: "black" });
    const tmp73 = hasOwnProperty(inlineStyles.Path, { d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z", fill: "black" });
    const tmp74 = hasOwnProperty(inlineStyles.Path, { d: "M14 8H13V6H14V8Z", fill: "black" });
    const tmp75 = hasOwnProperty(inlineStyles.Path, { d: "M2 6H1V4H2V6Z", fill: "black" });
    const tmp76 = hasOwnProperty(inlineStyles.Path, { d: "M15 6H14V4H15V6Z", fill: "black" });
    const tmp77 = hasOwnProperty(inlineStyles.Path, { d: "M1 4H0V1H1V4Z", fill: "black" });
    const tmp78 = hasOwnProperty(inlineStyles.Path, { d: "M16 4H15V1H16V4Z", fill: "black" });
    const tmp79 = hasOwnProperty(inlineStyles.Path, { d: "M6 3H5V1H6V3Z", fill: "black" });
    const tmp80 = hasOwnProperty(inlineStyles.Path, { d: "M11 3H10V1H11V3Z", fill: "black" });
    const tmp81 = hasOwnProperty(inlineStyles.Path, { d: "M5 1H1V0H5V1Z", fill: "black" });
    const tmp82 = hasOwnProperty(inlineStyles.Path, { d: "M15 1H11V0H15V1Z", fill: "black" });
    const tmp83 = hasOwnProperty(inlineStyles.Path, { d: "M6 12H5V10H6V12Z", fill: "black" });
    const tmp84 = hasOwnProperty(inlineStyles.Path, { d: "M11 12H10V10H11V12Z", fill: "black" });
    cResult[20] = tmp64;
    cResult[21] = tmp65;
    cResult[22] = tmp66;
    cResult[23] = tmp67;
    cResult[24] = tmp68;
    cResult[25] = tmp69;
    cResult[26] = tmp70;
    cResult[27] = tmp71;
    cResult[28] = tmp72;
    cResult[29] = tmp73;
    cResult[30] = tmp74;
    cResult[31] = tmp75;
    cResult[32] = tmp76;
    cResult[33] = tmp77;
    cResult[34] = tmp78;
    cResult[35] = tmp79;
    cResult[36] = tmp80;
    cResult[37] = tmp81;
    cResult[38] = tmp82;
    cResult[39] = tmp83;
    cResult[40] = tmp84;
    let tmp62 = tmp84;
    let tmp61 = tmp83;
    let tmp60 = tmp82;
    let tmp59 = tmp81;
    let tmp58 = tmp80;
    let tmp57 = tmp79;
    let tmp56 = tmp78;
    let tmp55 = tmp77;
    let tmp54 = tmp76;
    let tmp53 = tmp75;
    let tmp52 = tmp74;
    let tmp51 = tmp73;
    let tmp50 = tmp72;
    let tmp49 = tmp71;
    let tmp48 = tmp70;
    let tmp47 = tmp69;
    let tmp46 = tmp68;
    let tmp45 = tmp67;
    let tmp44 = tmp66;
    let tmp43 = tmp65;
    let tmp42 = tmp64;
  } else {
    tmp42 = cResult[20];
    tmp43 = cResult[21];
    tmp44 = cResult[22];
    tmp45 = cResult[23];
    tmp46 = cResult[24];
    tmp47 = cResult[25];
    tmp48 = cResult[26];
    tmp49 = cResult[27];
    tmp50 = cResult[28];
    tmp51 = cResult[29];
    tmp52 = cResult[30];
    tmp53 = cResult[31];
    tmp54 = cResult[32];
    tmp55 = cResult[33];
    tmp56 = cResult[34];
    tmp57 = cResult[35];
    tmp58 = cResult[36];
    tmp59 = cResult[37];
    tmp60 = cResult[38];
    tmp61 = cResult[39];
    tmp62 = cResult[40];
  }
  if (cResult[41] !== primaryColorsTransformed[0]) {
    const obj6 = { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] };
    const tmp88 = hasOwnProperty(inlineStyles.Path, obj6);
    const obj7 = { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] };
    const tmp89 = hasOwnProperty(inlineStyles.Path, obj7);
    cResult[41] = primaryColorsTransformed[0];
    cResult[42] = tmp88;
    cResult[43] = tmp89;
    let tmp86 = tmp89;
    let tmp85 = tmp88;
  } else {
    tmp85 = cResult[42];
    tmp86 = cResult[43];
  }
  if (cResult[44] === tmp37) {
    if (cResult[45] === tmp38) {
      if (cResult[46] === tmp85) {
        if (cResult[47] === tmp86) {
          if (cResult[48] === tmp19) {
            let tmp90 = cResult[49];
          }
          const _Symbol = Symbol;
          if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { children: null };
            const obj9 = { id: combined, children: hasOwnProperty(inlineStyles.Rect, { width: "16", height: "16", fill: "white" }) };
            obj8.children = hasOwnProperty(inlineStyles.ClipPath, obj9);
            const tmp94 = hasOwnProperty(inlineStyles.Defs, obj8);
            cResult[50] = tmp94;
            let tmp92 = tmp94;
          } else {
            tmp92 = cResult[50];
          }
          if (cResult[51] === num7) {
            if (cResult[52] === tmp5) {
              if (cResult[53] === tmp90) {
                if (cResult[54] === num6) {
                  let tmp95 = cResult[55];
                }
                return tmp95;
              }
            }
          }
          const obj10 = {};
          const merged = Object.assign(tmp5);
          obj10.width = num6;
          obj10.height = num7;
          obj10.viewBox = "0 0 16 16";
          obj10.fill = "none";
          items = [tmp90, tmp92];
          obj10.children = items;
          const tmp100 = timestampProducer(inlineStyles.Svg, obj10);
          cResult[51] = num7;
          cResult[52] = tmp5;
          cResult[53] = tmp90;
          cResult[54] = num6;
          cResult[55] = tmp100;
          tmp95 = tmp100;
        }
      }
    }
  }
  const obj11 = { clipPath: "url(#" + combined + ")", children: null };
  const items1 = [tmp19, tmp25, tmp26, tmp27, tmp28, tmp22, tmp23, tmp24, tmp37, tmp38, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp85, tmp86];
  obj11.children = items1;
  const tmp91 = timestampProducer(inlineStyles.G, obj11);
  cResult[44] = tmp37;
  cResult[45] = tmp38;
  cResult[46] = tmp85;
  cResult[47] = tmp86;
  cResult[48] = tmp19;
  cResult[49] = tmp91;
  tmp90 = tmp91;
}) : (function GuildBadgeBunny(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
  const memo = noop.useMemo(() => "badge-bunny-clip-" + v1.v4(), []);
  const primaryColorsTransformed = GuildBadgeUtils.getTransformedBadgeColors({ primaryBaseColors, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items }).primaryColorsTransformed;
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.width = num;
  obj3.height = num2;
  obj3.viewBox = "0 0 16 16";
  obj3.fill = "none";
  const obj4 = { clipPath: "url(#" + memo + ")", children: null };
  items = [hasOwnProperty(inlineStyles.Path, { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] }), hasOwnProperty(inlineStyles.Path, { d: "M5 8H4V6H3V4H2V2H4V4H5V8Z", fill: "#FF7FC0" }), hasOwnProperty(inlineStyles.Path, { d: "M12 8H11V4H12V2H14V4H13V6H12V8Z", fill: "#FF7FC0" }), hasOwnProperty(inlineStyles.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z", fill: "white" }), hasOwnProperty(inlineStyles.Path, { d: "M9 12V13H7V12H9Z", fill: "#FF1B90" }), hasOwnProperty(inlineStyles.Path, { d: "M14 15V16H2V15H14Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M2 15H1V14H2V15Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M15 15H14V14H15V15Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] }), hasOwnProperty(inlineStyles.Path, { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] }), hasOwnProperty(inlineStyles.Path, { d: "M1 14H0V12H1V14Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M16 14H15V12H16V14Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M2 12H1V10H2V12Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M15 12H14V10H15V12Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M3 10H2V9H3V10Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M14 10H13V9H14V10Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M4 9H3V8H4V9Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M13 9H12V8H13V9Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M3 8H2V6H3V8Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M14 8H13V6H14V8Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M2 6H1V4H2V6Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M15 6H14V4H15V6Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M1 4H0V1H1V4Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M16 4H15V1H16V4Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M6 3H5V1H6V3Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M11 3H10V1H11V3Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M5 1H1V0H5V1Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M15 1H11V0H15V1Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M6 12H5V10H6V12Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M11 12H10V10H11V12Z", fill: "black" }), hasOwnProperty(inlineStyles.Path, { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] }), hasOwnProperty(inlineStyles.Path, { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] })];
  obj4.children = items;
  const items1 = [timestampProducer(inlineStyles.G, obj4), ];
  const obj10 = { children: null };
  const obj2 = { primaryBaseColors, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items };
  const obj5 = { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] };
  const obj6 = { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] };
  const obj7 = { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] };
  const obj8 = { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] };
  const obj9 = { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] };
  obj10.children = hasOwnProperty(inlineStyles.ClipPath, { id: memo, children: hasOwnProperty(inlineStyles.Rect, { width: "16", height: "16", fill: "white" }) });
  items1[1] = hasOwnProperty(inlineStyles.Defs, obj10);
  obj3.children = items1;
  return timestampProducer(inlineStyles.Svg, obj3);
});