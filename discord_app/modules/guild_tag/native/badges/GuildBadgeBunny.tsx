// === Module 13752: GuildBadgeBunny ===

// Module 13752 (GuildBadgeBunny)
import react2 from "react" /* 576 */;
import v1 from "v1" /* 1266 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import GuildBadgeUtils from "GuildBadgeUtils" /* 13730 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let closure_2 = ["width", "height", "primaryTintColor"];
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const primaryBaseColors = ["#847D8B", "#D1CDD5"];
const primaryTintLuminances = [0.2, 0.65];
let items = [{ base: 4, tint: 1 }, { base: 3, tint: 1 }];
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ClipPath;
  let height;
  let items1;
  let obj9;
  let primaryTintColor;
  let tmp11;
  let tmp14;
  let tmp19;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp37;
  let tmp38;
  let tmp4;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp48;
  let tmp49;
  let tmp5;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp55;
  let tmp56;
  let tmp57;
  let tmp58;
  let tmp59;
  let tmp6;
  let tmp60;
  let tmp61;
  let tmp62;
  let tmp7;
  let tmp85;
  let tmp86;
  let width;
  const obj = react2;
  const cResult = obj.c(56);
  if (cResult[0] !== arg0) {
    ({ width, height, primaryTintColor } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = primaryTintColor;
    cResult[2] = tmp10;
    cResult[3] = width;
    cResult[4] = height;
    tmp7 = height;
    tmp6 = width;
    tmp5 = tmp10;
    tmp4 = primaryTintColor;
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
    const tmpResult = v1;
    const v4Result = tmpResult.v4();
    cResult[5] = v4Result;
    tmp11 = v4Result;
  } else {
    tmp11 = cResult[5];
  }
  const combined = "badge-bunny-clip-" + tmp11;
  if (cResult[6] !== tmp4) {
    const obj2 = { primaryBaseColors, primaryTintColor: tmp4, primaryTintLuminances, primaryLuminanceWeights: items };
    const tmpResult2 = GuildBadgeUtils;
    const transformedBadgeColors = tmpResult2.getTransformedBadgeColors(obj2);
    cResult[6] = tmp4;
    cResult[7] = transformedBadgeColors;
    tmp14 = transformedBadgeColors;
  } else {
    tmp14 = cResult[7];
  }
  const primaryColorsTransformed = tmp14.primaryColorsTransformed;
  if (cResult[8] !== primaryColorsTransformed[1]) {
    const obj3 = { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] };
    const tmp21 = hasOwnProperty(inlineStyles.Path, obj3);
    cResult[8] = primaryColorsTransformed[1];
    cResult[9] = tmp21;
    tmp19 = tmp21;
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
    tmp28 = tmp33;
    tmp27 = tmp32;
    tmp26 = tmp31;
    tmp25 = tmp30;
    tmp24 = tmp36;
    tmp23 = tmp35;
    tmp22 = tmp34;
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
    tmp38 = tmp41;
    tmp37 = tmp40;
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
    tmp62 = tmp84;
    tmp61 = tmp83;
    tmp60 = tmp82;
    tmp59 = tmp81;
    tmp58 = tmp80;
    tmp57 = tmp79;
    tmp56 = tmp78;
    tmp55 = tmp77;
    tmp54 = tmp76;
    tmp53 = tmp75;
    tmp52 = tmp74;
    tmp51 = tmp73;
    tmp50 = tmp72;
    tmp49 = tmp71;
    tmp48 = tmp70;
    tmp47 = tmp69;
    tmp46 = tmp68;
    tmp45 = tmp67;
    tmp44 = tmp66;
    tmp43 = tmp65;
    tmp42 = tmp64;
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
    tmp86 = tmp89;
    tmp85 = tmp88;
  } else {
    tmp85 = cResult[42];
    tmp86 = cResult[43];
  }
  if (cResult[44] === tmp37) {
    if (cResult[45] === tmp38) {
      if (cResult[46] === tmp85) {
        if (cResult[47] === tmp86) {
          let tmp90;
          let tmp92;
          if (cResult[48] === tmp19) {
            tmp90 = cResult[49];
          }
          const _Symbol = Symbol;
          if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { children: hasOwnProperty(ClipPath, obj9) };
            const Defs = inlineStyles.Defs;
            obj9 = { id: combined, children: hasOwnProperty(inlineStyles.Rect, { width: "16", height: "16", fill: "white" }) };
            ClipPath = inlineStyles.ClipPath;
            const tmp94 = hasOwnProperty(Defs, obj8);
            cResult[50] = tmp94;
            tmp92 = tmp94;
          } else {
            tmp92 = cResult[50];
          }
          if (cResult[51] === num7) {
            if (cResult[52] === tmp5) {
              if (cResult[53] === tmp90) {
                let tmp95;
                if (cResult[54] === num6) {
                  tmp95 = cResult[55];
                }
                return tmp95;
              }
            }
          }
          const obj10 = { width: num6, height: num7, viewBox: "0 0 16 16", fill: "none", children: items };
          const Svg = inlineStyles.Svg;
          const merged = Object.assign(tmp5);
          items = [tmp90, tmp92];
          const tmp100 = metroRequire(Svg, obj10);
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
  const obj11 = { clipPath: "url(#" + combined + ")", children: items1 };
  const G = inlineStyles.G;
  items1 = [tmp19, tmp25, tmp26, tmp27, tmp28, tmp22, tmp23, tmp24, tmp37, tmp38, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp85, tmp86];
  const tmp91 = metroRequire(G, obj11);
  cResult[44] = tmp37;
  cResult[45] = tmp38;
  cResult[46] = tmp85;
  cResult[47] = tmp86;
  cResult[48] = tmp19;
  cResult[49] = tmp91;
  tmp90 = tmp91;
}) : ((width) => {
  let ClipPath;
  let items1;
  let obj11;
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const primaryTintColor = width.primaryTintColor;
  const merged = Object.assign(width, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
  const memo = react.useMemo(() => {
    const obj = v1;
    return "badge-bunny-clip-" + obj.v4();
  }, []);
  let obj = GuildBadgeUtils;
  const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj2).primaryColorsTransformed;
  const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items1 };
  const Svg = inlineStyles.Svg;
  const merged1 = Object.assign(merged);
  const obj4 = { clipPath: "url(#" + memo + ")", children: items };
  const G = inlineStyles.G;
  items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  const obj5 = { d: "M13 8V6H14V4H15V1H11V3H10V7H11V8H5V7H6V3H5V1H1V4H2V6H3V8H4V9H3V10H2V12H1V14H2V15H14V14H15V12H14V10H13V9H12V8H13Z", fill: primaryColorsTransformed[1] };
  items[0] = hasOwnProperty(inlineStyles.Path, obj5);
  items[1] = hasOwnProperty(inlineStyles.Path, { d: "M5 8H4V6H3V4H2V2H4V4H5V8Z", fill: "#FF7FC0" });
  items[2] = hasOwnProperty(inlineStyles.Path, { d: "M12 8H11V4H12V2H14V4H13V6H12V8Z", fill: "#FF7FC0" });
  items[3] = hasOwnProperty(inlineStyles.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M9 11H10V12H11V13H12V15H4V13H5V12H6V11H7V9H9V11Z", fill: "white" });
  items[4] = hasOwnProperty(inlineStyles.Path, { d: "M9 12V13H7V12H9Z", fill: "#FF1B90" });
  items[5] = hasOwnProperty(inlineStyles.Path, { d: "M14 15V16H2V15H14Z", fill: "black" });
  items[6] = hasOwnProperty(inlineStyles.Path, { d: "M2 15H1V14H2V15Z", fill: "black" });
  items[7] = hasOwnProperty(inlineStyles.Path, { d: "M15 15H14V14H15V15Z", fill: "black" });
  const obj6 = { d: "M2 14H1V13H2V14Z", fill: primaryColorsTransformed[0] };
  items[8] = hasOwnProperty(inlineStyles.Path, obj6);
  const obj7 = { d: "M15 14H14V13H15V14Z", fill: primaryColorsTransformed[0] };
  items[9] = hasOwnProperty(inlineStyles.Path, obj7);
  items[10] = hasOwnProperty(inlineStyles.Path, { d: "M1 14H0V12H1V14Z", fill: "black" });
  items[11] = hasOwnProperty(inlineStyles.Path, { d: "M16 14H15V12H16V14Z", fill: "black" });
  items[12] = hasOwnProperty(inlineStyles.Path, { d: "M2 12H1V10H2V12Z", fill: "black" });
  items[13] = hasOwnProperty(inlineStyles.Path, { d: "M15 12H14V10H15V12Z", fill: "black" });
  items[14] = hasOwnProperty(inlineStyles.Path, { d: "M3 10H2V9H3V10Z", fill: "black" });
  items[15] = hasOwnProperty(inlineStyles.Path, { d: "M14 10H13V9H14V10Z", fill: "black" });
  items[16] = hasOwnProperty(inlineStyles.Path, { d: "M4 9H3V8H4V9Z", fill: "black" });
  items[17] = hasOwnProperty(inlineStyles.Path, { d: "M13 9H12V8H13V9Z", fill: "black" });
  items[18] = hasOwnProperty(inlineStyles.Path, { d: "M3 8H2V6H3V8Z", fill: "black" });
  items[19] = hasOwnProperty(inlineStyles.Path, { d: "M7 7H9V3H10V7H11V8H5V7H6V3H7V7Z", fill: "black" });
  items[20] = hasOwnProperty(inlineStyles.Path, { d: "M14 8H13V6H14V8Z", fill: "black" });
  items[21] = hasOwnProperty(inlineStyles.Path, { d: "M2 6H1V4H2V6Z", fill: "black" });
  items[22] = hasOwnProperty(inlineStyles.Path, { d: "M15 6H14V4H15V6Z", fill: "black" });
  items[23] = hasOwnProperty(inlineStyles.Path, { d: "M1 4H0V1H1V4Z", fill: "black" });
  items[24] = hasOwnProperty(inlineStyles.Path, { d: "M16 4H15V1H16V4Z", fill: "black" });
  items[25] = hasOwnProperty(inlineStyles.Path, { d: "M6 3H5V1H6V3Z", fill: "black" });
  items[26] = hasOwnProperty(inlineStyles.Path, { d: "M11 3H10V1H11V3Z", fill: "black" });
  items[27] = hasOwnProperty(inlineStyles.Path, { d: "M5 1H1V0H5V1Z", fill: "black" });
  items[28] = hasOwnProperty(inlineStyles.Path, { d: "M15 1H11V0H15V1Z", fill: "black" });
  items[29] = hasOwnProperty(inlineStyles.Path, { d: "M6 12H5V10H6V12Z", fill: "black" });
  items[30] = hasOwnProperty(inlineStyles.Path, { d: "M11 12H10V10H11V12Z", fill: "black" });
  const obj8 = { d: "M14 14H12V15H14V14Z", fill: primaryColorsTransformed[0] };
  items[31] = hasOwnProperty(inlineStyles.Path, obj8);
  const obj9 = { d: "M4 14H2V15H4V14Z", fill: primaryColorsTransformed[0] };
  items[32] = hasOwnProperty(inlineStyles.Path, obj9);
  items1 = [metroRequire(G, obj4), ];
  const obj10 = { children: hasOwnProperty(ClipPath, obj11) };
  const Defs = inlineStyles.Defs;
  obj11 = { id: memo, children: hasOwnProperty(inlineStyles.Rect, { width: "16", height: "16", fill: "white" }) };
  ClipPath = inlineStyles.ClipPath;
  items1[1] = hasOwnProperty(Defs, obj10);
  return metroRequire(Svg, obj3);
});
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBunny.tsx");

export const GuildBadgeBunny = tmp3;