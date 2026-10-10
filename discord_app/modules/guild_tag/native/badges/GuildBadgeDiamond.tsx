// discord_app/modules/guild_tag/native/badges/GuildBadgeDiamond.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07576_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#4282D8", "#00BBFF"];
const primaryTintLuminances = [0.15, 0.42];
let items = [
  { base: 7, tint: 1 },
  { base: 3, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeDiamond.tsx");

export const GuildBadgeDiamond = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeDiamond(arg0) {
      const cResult = c.c(65);
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
      if (cResult[5] !== tmp4) {
        const obj2 = {
          primaryBaseColors,
          primaryTintColor: tmp4,
          primaryTintLuminances,
          primaryLuminanceWeights: items,
        };
        const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors(obj2);
        cResult[5] = tmp4;
        cResult[6] = transformedBadgeColors;
        let tmp11 = transformedBadgeColors;
        const tmpResult = GuildBadgeUtils;
      } else {
        tmp11 = cResult[6];
      }
      const primaryColorsTransformed = tmp11.primaryColorsTransformed;
      if (cResult[7] !== primaryColorsTransformed[1]) {
        const obj3 = {
          d: "M12 2H4V3H3V4H2V5H1V8H2V9H3V10H4V11H5V12H6V13H7V14H9V13H10V12H11V11H12V10H13V9H14V8H15V5H14V4H13V3H12V2Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp18 = React4(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[1];
        cResult[8] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] !== primaryColorsTransformed[0]) {
        const obj4 = { d: "M8 13H7V14H8V13Z", fill: primaryColorsTransformed[0] };
        const tmp27 = React4(inlineStyles.Path, obj4);
        const obj5 = { d: "M7 12H6V13H7V12Z", fill: primaryColorsTransformed[0] };
        const tmp28 = React4(inlineStyles.Path, obj5);
        const obj6 = { d: "M6 11H5V12H6V11Z", fill: primaryColorsTransformed[0] };
        const tmp29 = React4(inlineStyles.Path, obj6);
        const obj7 = { d: "M5 10H4V11H5V10Z", fill: primaryColorsTransformed[0] };
        const tmp30 = React4(inlineStyles.Path, obj7);
        const obj8 = { d: "M4 9H3V10H4V9Z", fill: primaryColorsTransformed[0] };
        const tmp31 = React4(inlineStyles.Path, obj8);
        const obj9 = { d: "M3 8H2V9H3V8Z", fill: primaryColorsTransformed[0] };
        const tmp32 = React4(inlineStyles.Path, obj9);
        const obj10 = { d: "M2 7H1V8H2V7Z", fill: primaryColorsTransformed[0] };
        const tmp33 = React4(inlineStyles.Path, obj10);
        cResult[9] = primaryColorsTransformed[0];
        cResult[10] = tmp32;
        cResult[11] = tmp33;
        cResult[12] = tmp27;
        cResult[13] = tmp28;
        cResult[14] = tmp29;
        cResult[15] = tmp30;
        cResult[16] = tmp31;
        let tmp25 = tmp31;
        let tmp24 = tmp30;
        let tmp23 = tmp29;
        let tmp22 = tmp28;
        let tmp21 = tmp27;
        let tmp20 = tmp33;
        let tmp19 = tmp32;
      } else {
        tmp19 = cResult[10];
        tmp20 = cResult[11];
        tmp21 = cResult[12];
        tmp22 = cResult[13];
        tmp23 = cResult[14];
        tmp24 = cResult[15];
        tmp25 = cResult[16];
      }
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp37 = React4(inlineStyles.Path, { d: "M4 3H3V4H4V3Z", fill: "white" });
        const tmp38 = React4(inlineStyles.Path, { d: "M3 4H2V5H3V4Z", fill: "white" });
        cResult[17] = tmp37;
        cResult[18] = tmp38;
        let tmp35 = tmp38;
        let tmp34 = tmp37;
      } else {
        tmp34 = cResult[17];
        tmp35 = cResult[18];
      }
      if (cResult[19] !== primaryColorsTransformed[0]) {
        const obj11 = {
          d: "M12 7.00001V8.00001H11V9.00001H9.99997V10H8.99997V11H7.99997V13H8.99997V12H9.99997V11H11V10H12V9.00001H13V8.00001H14V7.00001H12Z",
          fill: primaryColorsTransformed[0],
        };
        const tmp41 = React4(inlineStyles.Path, obj11);
        cResult[19] = primaryColorsTransformed[0];
        cResult[20] = tmp41;
        let tmp39 = tmp41;
      } else {
        tmp39 = cResult[20];
      }
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp49 = React4(inlineStyles.Path, {
          opacity: 0.5,
          d: "M4 7.00001V8.00001H5V9.00001H6V10H7V11H8V13H7V12H6V11H5V10H4V9.00001H3V8.00001H2V7.00001H4Z",
          fill: "white",
        });
        const tmp50 = React4(inlineStyles.Path, { d: "M2 5H1V7.00001H2V5Z", fill: "white" });
        const tmp51 = React4(inlineStyles.Path, { d: "M4 2V3L12 3V2L4 2Z", fill: "white" });
        const tmp52 = React4(inlineStyles.Path, {
          d: "M7.99802 6.99598V10.996H6.99802V9.99598H5.99802V8.99598H4.99802V7.99598H3.99802V6.99598H7.99802Z",
          fill: "white",
        });
        const tmp53 = React4(inlineStyles.Path, {
          d: "M7.99802 6.99598H11.998V5.99598H10.998V4.99598H9.99802V3.99598H8.99802V2.99598H7.99802V6.99598Z",
          fill: "white",
        });
        const tmp54 = React4(inlineStyles.Path, {
          opacity: 0.5,
          d: "M14.998 4.99598V6.99598H11.998V2.99598H12.998V3.99598H13.998V4.99598H14.998Z",
          fill: "white",
        });
        cResult[21] = tmp49;
        cResult[22] = tmp50;
        cResult[23] = tmp51;
        cResult[24] = tmp52;
        cResult[25] = tmp53;
        cResult[26] = tmp54;
        let tmp47 = tmp54;
        let tmp46 = tmp53;
        let tmp45 = tmp52;
        let tmp44 = tmp51;
        let tmp43 = tmp50;
        let tmp42 = tmp49;
      } else {
        tmp42 = cResult[21];
        tmp43 = cResult[22];
        tmp44 = cResult[23];
        tmp45 = cResult[24];
        tmp46 = cResult[25];
        tmp47 = cResult[26];
      }
      if (cResult[27] !== primaryColorsTransformed[0]) {
        const obj12 = {
          d: "M3.99997 3.00001V6.00001H4.99997V5.00001H5.99997V4.00001H6.99997V3.00001H3.99997Z",
          fill: primaryColorsTransformed[0],
        };
        const tmp57 = React4(inlineStyles.Path, obj12);
        cResult[27] = primaryColorsTransformed[0];
        cResult[28] = tmp57;
        let tmp55 = tmp57;
      } else {
        tmp55 = cResult[28];
      }
      if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp81 = React4(inlineStyles.Path, { d: "M2 4H1V5H2V4Z", fill: "black" });
        const tmp82 = React4(inlineStyles.Path, { d: "M2 8H1V9H2V8Z", fill: "black" });
        const tmp83 = React4(inlineStyles.Path, { d: "M3 9H2V10H3V9Z", fill: "black" });
        const tmp84 = React4(inlineStyles.Path, { d: "M4 10H3V11H4V10Z", fill: "black" });
        const tmp85 = React4(inlineStyles.Path, { d: "M5 11H4V12H5V11Z", fill: "black" });
        const tmp86 = React4(inlineStyles.Path, { d: "M6 12H5V13H6V12Z", fill: "black" });
        const tmp87 = React4(inlineStyles.Path, { d: "M7 13H6V14H7V13Z", fill: "black" });
        const tmp88 = React4(inlineStyles.Path, { d: "M3 3H2V4H3V3Z", fill: "black" });
        const tmp89 = React4(inlineStyles.Path, { d: "M4 2H3V3H4V2Z", fill: "black" });
        const tmp90 = React4(inlineStyles.Path, { d: "M14 5H15V4H14V5Z", fill: "black" });
        const tmp91 = React4(inlineStyles.Path, { d: "M14 9H15V8H14V9Z", fill: "black" });
        const tmp92 = React4(inlineStyles.Path, { d: "M13 10H14V9H13V10Z", fill: "black" });
        const tmp93 = React4(inlineStyles.Path, { d: "M12 11H13V10H12V11Z", fill: "black" });
        const tmp94 = React4(inlineStyles.Path, { d: "M11 12H12V11H11V12Z", fill: "black" });
        const tmp95 = React4(inlineStyles.Path, { d: "M10 13H11V12H10V13Z", fill: "black" });
        const tmp96 = React4(inlineStyles.Path, { d: "M9 14H10V13H9V14Z", fill: "black" });
        const tmp97 = React4(inlineStyles.Path, { d: "M13 4H14V3H13V4Z", fill: "black" });
        const tmp98 = React4(inlineStyles.Path, { d: "M12 3H13V2L12 2V3Z", fill: "black" });
        const tmp99 = React4(inlineStyles.Path, { d: "M1 5H0V8H1V5Z", fill: "black" });
        const tmp100 = React4(inlineStyles.Path, { d: "M16 5H15V8H16V5Z", fill: "black" });
        const tmp101 = React4(inlineStyles.Path, { d: "M7 14V15H9V14H7Z", fill: "black" });
        const tmp102 = React4(inlineStyles.Path, { d: "M4 1V2L12 2V1L4 1Z", fill: "black" });
        cResult[29] = tmp81;
        cResult[30] = tmp82;
        cResult[31] = tmp83;
        cResult[32] = tmp84;
        cResult[33] = tmp85;
        cResult[34] = tmp86;
        cResult[35] = tmp87;
        cResult[36] = tmp88;
        cResult[37] = tmp89;
        cResult[38] = tmp90;
        cResult[39] = tmp91;
        cResult[40] = tmp92;
        cResult[41] = tmp93;
        cResult[42] = tmp94;
        cResult[43] = tmp95;
        cResult[44] = tmp96;
        cResult[45] = tmp97;
        cResult[46] = tmp98;
        cResult[47] = tmp99;
        cResult[48] = tmp100;
        cResult[49] = tmp101;
        cResult[50] = tmp102;
        let tmp79 = tmp102;
        let tmp78 = tmp101;
        let tmp77 = tmp100;
        let tmp76 = tmp99;
        let tmp75 = tmp98;
        let tmp74 = tmp97;
        let tmp73 = tmp96;
        let tmp72 = tmp95;
        let tmp71 = tmp94;
        let tmp70 = tmp93;
        let tmp69 = tmp92;
        let tmp68 = tmp91;
        let tmp67 = tmp90;
        let tmp66 = tmp89;
        let tmp65 = tmp88;
        let tmp64 = tmp87;
        let tmp63 = tmp86;
        let tmp62 = tmp85;
        let tmp61 = tmp84;
        let tmp60 = tmp83;
        let tmp59 = tmp82;
        let tmp58 = tmp81;
      } else {
        tmp58 = cResult[29];
        tmp59 = cResult[30];
        tmp60 = cResult[31];
        tmp61 = cResult[32];
        tmp62 = cResult[33];
        tmp63 = cResult[34];
        tmp64 = cResult[35];
        tmp65 = cResult[36];
        tmp66 = cResult[37];
        tmp67 = cResult[38];
        tmp68 = cResult[39];
        tmp69 = cResult[40];
        tmp70 = cResult[41];
        tmp71 = cResult[42];
        tmp72 = cResult[43];
        tmp73 = cResult[44];
        tmp74 = cResult[45];
        tmp75 = cResult[46];
        tmp76 = cResult[47];
        tmp77 = cResult[48];
        tmp78 = cResult[49];
        tmp79 = cResult[50];
      }
      if (cResult[51] === num7) {
        if (cResult[52] === tmp5) {
          if (cResult[53] === tmp19) {
            if (cResult[54] === tmp20) {
              if (cResult[55] === tmp39) {
                if (cResult[56] === tmp55) {
                  if (cResult[57] === tmp16) {
                    if (cResult[58] === tmp21) {
                      if (cResult[59] === tmp22) {
                        if (cResult[60] === tmp23) {
                          if (cResult[61] === tmp24) {
                            if (cResult[62] === tmp25) {
                              if (cResult[63] === num6) {
                                let tmp103 = cResult[64];
                              }
                              return tmp103;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj13 = {};
      const merged = Object.assign(tmp5);
      obj13.width = num6;
      obj13.height = num7;
      obj13.viewBox = "0 0 16 16";
      obj13.fill = "none";
      items = [
        tmp16,
        tmp21,
        tmp22,
        tmp23,
        tmp24,
        tmp25,
        tmp19,
        tmp20,
        tmp34,
        tmp35,
        tmp39,
        tmp42,
        tmp43,
        tmp44,
        tmp45,
        tmp46,
        tmp47,
        tmp55,
        tmp58,
        tmp59,
        tmp60,
        tmp61,
        tmp62,
        tmp63,
        tmp64,
        tmp65,
        tmp66,
        tmp67,
        tmp68,
        tmp69,
        tmp70,
        tmp71,
        tmp72,
        tmp73,
        tmp74,
        tmp75,
        tmp76,
        tmp77,
        tmp78,
        tmp79,
      ];
      obj13.children = items;
      const tmp105 = hasOwnProperty(inlineStyles.Svg, obj13);
      cResult[51] = num7;
      cResult[52] = tmp5;
      cResult[53] = tmp19;
      cResult[54] = tmp20;
      cResult[55] = tmp39;
      cResult[56] = tmp55;
      cResult[57] = tmp16;
      cResult[58] = tmp21;
      cResult[59] = tmp22;
      cResult[60] = tmp23;
      cResult[61] = tmp24;
      cResult[62] = tmp25;
      cResult[63] = num6;
      cResult[64] = tmp105;
      tmp103 = tmp105;
    }
  : function GuildBadgeDiamond(primaryTintColor) {
      let num = primaryTintColor.width;
      if (num === undefined) {
        num = 24;
      }
      let num2 = primaryTintColor.height;
      if (num2 === undefined) {
        num2 = 24;
      }
      const merged = Object.assign(primaryTintColor, Object.assign({ width: 0, height: 0, primaryTintColor: 0 }));
      const primaryColorsTransformed = GuildBadgeUtils.getTransformedBadgeColors({
        primaryBaseColors,
        primaryTintColor: primaryTintColor.primaryTintColor,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
      }).primaryColorsTransformed;
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.width = num;
      obj3.height = num2;
      obj3.viewBox = "0 0 16 16";
      obj3.fill = "none";
      items = [
        React4(inlineStyles.Path, {
          d: "M12 2H4V3H3V4H2V5H1V8H2V9H3V10H4V11H5V12H6V13H7V14H9V13H10V12H11V11H12V10H13V9H14V8H15V5H14V4H13V3H12V2Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M8 13H7V14H8V13Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M7 12H6V13H7V12Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M6 11H5V12H6V11Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M5 10H4V11H5V10Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M4 9H3V10H4V9Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M3 8H2V9H3V8Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M2 7H1V8H2V7Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M4 3H3V4H4V3Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M3 4H2V5H3V4Z", fill: "white" }),
        React4(inlineStyles.Path, {
          d: "M12 7.00001V8.00001H11V9.00001H9.99997V10H8.99997V11H7.99997V13H8.99997V12H9.99997V11H11V10H12V9.00001H13V8.00001H14V7.00001H12Z",
          fill: primaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, {
          opacity: 0.5,
          d: "M4 7.00001V8.00001H5V9.00001H6V10H7V11H8V13H7V12H6V11H5V10H4V9.00001H3V8.00001H2V7.00001H4Z",
          fill: "white",
        }),
        React4(inlineStyles.Path, { d: "M2 5H1V7.00001H2V5Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M4 2V3L12 3V2L4 2Z", fill: "white" }),
        React4(inlineStyles.Path, {
          d: "M7.99802 6.99598V10.996H6.99802V9.99598H5.99802V8.99598H4.99802V7.99598H3.99802V6.99598H7.99802Z",
          fill: "white",
        }),
        React4(inlineStyles.Path, {
          d: "M7.99802 6.99598H11.998V5.99598H10.998V4.99598H9.99802V3.99598H8.99802V2.99598H7.99802V6.99598Z",
          fill: "white",
        }),
        React4(inlineStyles.Path, {
          opacity: 0.5,
          d: "M14.998 4.99598V6.99598H11.998V2.99598H12.998V3.99598H13.998V4.99598H14.998Z",
          fill: "white",
        }),
        React4(inlineStyles.Path, {
          d: "M3.99997 3.00001V6.00001H4.99997V5.00001H5.99997V4.00001H6.99997V3.00001H3.99997Z",
          fill: primaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, { d: "M2 4H1V5H2V4Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M2 8H1V9H2V8Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M3 9H2V10H3V9Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4 10H3V11H4V10Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M5 11H4V12H5V11Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M6 12H5V13H6V12Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M7 13H6V14H7V13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M3 3H2V4H3V3Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4 2H3V3H4V2Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 5H15V4H14V5Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 9H15V8H14V9Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M13 10H14V9H13V10Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M12 11H13V10H12V11Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M11 12H12V11H11V12Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M10 13H11V12H10V13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M9 14H10V13H9V14Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M13 4H14V3H13V4Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M12 3H13V2L12 2V3Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M1 5H0V8H1V5Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M16 5H15V8H16V5Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M7 14V15H9V14H7Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4 1V2L12 2V1L4 1Z", fill: "black" }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
