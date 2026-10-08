// discord_app/modules/guild_tag/native/badges/GuildBadgeCat.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/07550_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#353639", "#74767F", "#D1CDD5"];
const primaryTintLuminances = [0.1, 0.4, 0.7];
let items = [
  { base: 10, tint: 1 },
  { base: 4, tint: 1 },
  { base: 6, tint: 1 },
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCat.tsx");

export const GuildBadgeCat = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildBadgeCat(arg0) {
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
          d: "M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp18 = React4(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[1];
        cResult[8] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp22 = React4(inlineStyles.Path, { d: "M13 15V16H3V15H13Z", fill: "black" });
        const tmp23 = React4(inlineStyles.Path, { d: "M14 15H13V14H14V15Z", fill: "black" });
        cResult[9] = tmp22;
        cResult[10] = tmp23;
        let tmp20 = tmp23;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[9];
        tmp20 = cResult[10];
      }
      if (cResult[11] !== primaryColorsTransformed[2]) {
        const obj4 = { d: "M14 14H13V13H14V14Z", fill: primaryColorsTransformed[2] };
        const tmp27 = React4(inlineStyles.Path, obj4);
        const obj5 = { d: "M3 14H2V13H3V14Z", fill: primaryColorsTransformed[2] };
        const tmp28 = React4(inlineStyles.Path, obj5);
        cResult[11] = primaryColorsTransformed[2];
        cResult[12] = tmp27;
        cResult[13] = tmp28;
        let tmp25 = tmp28;
        let tmp24 = tmp27;
      } else {
        tmp24 = cResult[12];
        tmp25 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp53 = React4(inlineStyles.Path, { d: "M3 15H2V14H3V15Z", fill: "black" });
        const tmp54 = React4(inlineStyles.Path, { d: "M5 2H4V1H5V2Z", fill: "black" });
        const tmp55 = React4(inlineStyles.Path, { d: "M6 3H5V2H6V3Z", fill: "black" });
        const tmp56 = React4(inlineStyles.Path, { d: "M4 1H2V0H4V1Z", fill: "black" });
        const tmp57 = React4(inlineStyles.Path, { d: "M11 1H12V2H11V1Z", fill: "black" });
        const tmp58 = React4(inlineStyles.Path, { d: "M10 2H11V3H10V2Z", fill: "black" });
        const tmp59 = React4(inlineStyles.Path, { d: "M10 10H11V11H10V10Z", fill: "white" });
        const tmp60 = React4(inlineStyles.Path, { d: "M9 11H12V12H9V11Z", fill: "white" });
        const tmp61 = React4(inlineStyles.Path, { d: "M4 11H7V12H4V11Z", fill: "white" });
        const tmp62 = React4(inlineStyles.Path, { d: "M4 12H12V13H4V12Z", fill: "white" });
        const tmp63 = React4(inlineStyles.Path, { d: "M3 13.0005H13V14.0005H3V13.0005Z", fill: "white" });
        const tmp64 = React4(inlineStyles.Path, { d: "M5 10H6V11H5V10Z", fill: "white" });
        const tmp65 = React4(inlineStyles.Path, { d: "M6 9.00024H9.99999V10.0002H6V9.00024Z", fill: "white" });
        const tmp66 = React4(inlineStyles.Path, { d: "M12 0H14V1H12V0Z", fill: "black" });
        const tmp67 = React4(inlineStyles.Path, { d: "M10 4H6V3H10V4Z", fill: "black" });
        const tmp68 = React4(inlineStyles.Path, { d: "M15 14H14V13H15V14Z", fill: "black" });
        const tmp69 = React4(inlineStyles.Path, { d: "M14 13H13V12H14V13Z", fill: "black" });
        const tmp70 = React4(inlineStyles.Path, { d: "M2 14H1V13H2V14Z", fill: "black" });
        const tmp71 = React4(inlineStyles.Path, { d: "M3 13H2V12H3V13Z", fill: "black" });
        const tmp72 = React4(inlineStyles.Path, { d: "M16 13H15V6H16V13Z", fill: "black" });
        const tmp73 = React4(inlineStyles.Path, { d: "M15 6H14V0H15V6Z", fill: "black" });
        const tmp74 = React4(inlineStyles.Path, { d: "M2 6H1V0H2V6Z", fill: "black" });
        const tmp75 = React4(inlineStyles.Path, { d: "M1 13H0V6H1V13Z", fill: "black" });
        cResult[14] = tmp54;
        cResult[15] = tmp55;
        cResult[16] = tmp56;
        cResult[17] = tmp57;
        cResult[18] = tmp58;
        cResult[19] = tmp59;
        cResult[20] = tmp60;
        cResult[21] = tmp61;
        cResult[22] = tmp62;
        cResult[23] = tmp63;
        cResult[24] = tmp64;
        cResult[25] = tmp65;
        cResult[26] = tmp66;
        cResult[27] = tmp67;
        cResult[28] = tmp68;
        cResult[29] = tmp69;
        cResult[30] = tmp70;
        cResult[31] = tmp71;
        cResult[32] = tmp72;
        cResult[33] = tmp73;
        cResult[34] = tmp74;
        cResult[35] = tmp75;
        cResult[36] = tmp53;
        let tmp51 = tmp53;
        let tmp50 = tmp75;
        let tmp49 = tmp74;
        let tmp48 = tmp73;
        let tmp47 = tmp72;
        let tmp46 = tmp71;
        let tmp45 = tmp70;
        let tmp44 = tmp69;
        let tmp43 = tmp68;
        let tmp42 = tmp67;
        let tmp41 = tmp66;
        let tmp40 = tmp65;
        let tmp39 = tmp64;
        let tmp38 = tmp63;
        let tmp37 = tmp62;
        let tmp36 = tmp61;
        let tmp35 = tmp60;
        let tmp34 = tmp59;
        let tmp33 = tmp58;
        let tmp32 = tmp57;
        let tmp31 = tmp56;
        let tmp30 = tmp55;
        let tmp29 = tmp54;
      } else {
        tmp29 = cResult[14];
        tmp30 = cResult[15];
        tmp31 = cResult[16];
        tmp32 = cResult[17];
        tmp33 = cResult[18];
        tmp34 = cResult[19];
        tmp35 = cResult[20];
        tmp36 = cResult[21];
        tmp37 = cResult[22];
        tmp38 = cResult[23];
        tmp39 = cResult[24];
        tmp40 = cResult[25];
        tmp41 = cResult[26];
        tmp42 = cResult[27];
        tmp43 = cResult[28];
        tmp44 = cResult[29];
        tmp45 = cResult[30];
        tmp46 = cResult[31];
        tmp47 = cResult[32];
        tmp48 = cResult[33];
        tmp49 = cResult[34];
        tmp50 = cResult[35];
        tmp51 = cResult[36];
      }
      if (cResult[37] !== primaryColorsTransformed[0]) {
        const obj6 = { d: "M10 2.99976H11V5.99976H10V2.99976Z", fill: primaryColorsTransformed[0] };
        const tmp80 = React4(inlineStyles.Path, obj6);
        const obj7 = { d: "M5 2.99976H6V5.99976H5V2.99976Z", fill: primaryColorsTransformed[0] };
        const tmp81 = React4(inlineStyles.Path, obj7);
        const obj8 = { d: "M7 3.99976H9V6.99983H7V3.99976Z", fill: primaryColorsTransformed[0] };
        const tmp82 = React4(inlineStyles.Path, obj8);
        cResult[37] = primaryColorsTransformed[0];
        cResult[38] = tmp80;
        cResult[39] = tmp81;
        cResult[40] = tmp82;
        let tmp78 = tmp82;
        let tmp77 = tmp81;
        let tmp76 = tmp80;
      } else {
        tmp76 = cResult[38];
        tmp77 = cResult[39];
        tmp78 = cResult[40];
      }
      if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp92 = React4(inlineStyles.Path, { d: "M12 3H13V4H12V3Z", fill: "#FF7FC0" });
        const tmp93 = React4(inlineStyles.Path, { d: "M13 2H14V5H13V2Z", fill: "#FF7FC0" });
        const tmp94 = React4(inlineStyles.Path, { d: "M12 8.99994H11V7H12V8.99994Z", fill: "black" });
        const tmp95 = React4(inlineStyles.Path, { d: "M5 8.99994H4V7H5V8.99994Z", fill: "black" });
        const tmp96 = React4(inlineStyles.Path, { d: "M4 4H3V3H4V4Z", fill: "#FF7FC0" });
        const tmp97 = React4(inlineStyles.Path, { d: "M3 5H2V2H3V5Z", fill: "#FF7FC0" });
        const tmp98 = React4(inlineStyles.Path, { d: "M15 11H12V10H15V11Z", fill: "black" });
        const tmp99 = React4(inlineStyles.Path, { d: "M4 11H1V10H4V11Z", fill: "black" });
        cResult[41] = tmp92;
        cResult[42] = tmp93;
        cResult[43] = tmp94;
        cResult[44] = tmp95;
        cResult[45] = tmp96;
        cResult[46] = tmp97;
        cResult[47] = tmp98;
        cResult[48] = tmp99;
        let tmp90 = tmp99;
        let tmp89 = tmp98;
        let tmp88 = tmp97;
        let tmp87 = tmp96;
        let tmp86 = tmp95;
        let tmp85 = tmp94;
        let tmp84 = tmp93;
        let tmp83 = tmp92;
      } else {
        tmp83 = cResult[41];
        tmp84 = cResult[42];
        tmp85 = cResult[43];
        tmp86 = cResult[44];
        tmp87 = cResult[45];
        tmp88 = cResult[46];
        tmp89 = cResult[47];
        tmp90 = cResult[48];
      }
      if (cResult[49] !== primaryColorsTransformed[2]) {
        const obj9 = { d: "M13 14H3V15H13V14Z", fill: primaryColorsTransformed[2] };
        const tmp102 = React4(inlineStyles.Path, obj9);
        cResult[49] = primaryColorsTransformed[2];
        cResult[50] = tmp102;
        let tmp100 = tmp102;
      } else {
        tmp100 = cResult[50];
      }
      if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp107 = React4(inlineStyles.Path, { d: "M10 11H6V10H10V11Z", fill: "black" });
        const tmp108 = React4(inlineStyles.Path, { d: "M8.99999 12H7V11H8.99999V12Z", fill: "black" });
        const tmp109 = React4(inlineStyles.Path, { d: "M9 9H7V7H9V9Z", fill: "white" });
        cResult[51] = tmp107;
        cResult[52] = tmp108;
        cResult[53] = tmp109;
        let tmp105 = tmp109;
        let tmp104 = tmp108;
        let tmp103 = tmp107;
      } else {
        tmp103 = cResult[51];
        tmp104 = cResult[52];
        tmp105 = cResult[53];
      }
      if (cResult[54] === num7) {
        if (cResult[55] === tmp5) {
          if (cResult[56] === tmp76) {
            if (cResult[57] === tmp77) {
              if (cResult[58] === tmp78) {
                if (cResult[59] === tmp16) {
                  if (cResult[60] === tmp100) {
                    if (cResult[61] === tmp24) {
                      if (cResult[62] === tmp25) {
                        if (cResult[63] === num6) {
                          let tmp110 = cResult[64];
                        }
                        return tmp110;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj10 = {};
      const merged = Object.assign(tmp5);
      obj10.width = num6;
      obj10.height = num7;
      obj10.viewBox = "0 0 16 16";
      obj10.fill = "none";
      items = [
        tmp16,
        tmp19,
        tmp20,
        tmp24,
        tmp25,
        tmp51,
        tmp29,
        tmp30,
        tmp31,
        tmp32,
        tmp33,
        tmp34,
        tmp35,
        tmp36,
        tmp37,
        tmp38,
        tmp39,
        tmp40,
        tmp41,
        tmp42,
        tmp43,
        tmp44,
        tmp45,
        tmp46,
        tmp47,
        tmp48,
        tmp49,
        tmp50,
        tmp76,
        tmp77,
        tmp78,
        tmp83,
        tmp84,
        tmp85,
        tmp86,
        tmp87,
        tmp88,
        tmp89,
        tmp90,
        tmp100,
        tmp103,
        tmp104,
        tmp105,
      ];
      obj10.children = items;
      const tmp112 = hasOwnProperty(inlineStyles.Svg, obj10);
      cResult[54] = num7;
      cResult[55] = tmp5;
      cResult[56] = tmp76;
      cResult[57] = tmp77;
      cResult[58] = tmp78;
      cResult[59] = tmp16;
      cResult[60] = tmp100;
      cResult[61] = tmp24;
      cResult[62] = tmp25;
      cResult[63] = num6;
      cResult[64] = tmp112;
      tmp110 = tmp112;
    }
  : function GuildBadgeCat(primaryTintColor) {
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
          d: "M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M13 15V16H3V15H13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 15H13V14H14V15Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 14H13V13H14V14Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M3 14H2V13H3V14Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M3 15H2V14H3V15Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M5 2H4V1H5V2Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M6 3H5V2H6V3Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4 1H2V0H4V1Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M11 1H12V2H11V1Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M10 2H11V3H10V2Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M10 10H11V11H10V10Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M9 11H12V12H9V11Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M4 11H7V12H4V11Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M4 12H12V13H4V12Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M3 13.0005H13V14.0005H3V13.0005Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M5 10H6V11H5V10Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M6 9.00024H9.99999V10.0002H6V9.00024Z", fill: "white" }),
        React4(inlineStyles.Path, { d: "M12 0H14V1H12V0Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M10 4H6V3H10V4Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M15 14H14V13H15V14Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 13H13V12H14V13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M2 14H1V13H2V14Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M3 13H2V12H3V13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M16 13H15V6H16V13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M15 6H14V0H15V6Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M2 6H1V0H2V6Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M1 13H0V6H1V13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M10 2.99976H11V5.99976H10V2.99976Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M5 2.99976H6V5.99976H5V2.99976Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M7 3.99976H9V6.99983H7V3.99976Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M12 3H13V4H12V3Z", fill: "#FF7FC0" }),
        React4(inlineStyles.Path, { d: "M13 2H14V5H13V2Z", fill: "#FF7FC0" }),
        React4(inlineStyles.Path, { d: "M12 8.99994H11V7H12V8.99994Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M5 8.99994H4V7H5V8.99994Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4 4H3V3H4V4Z", fill: "#FF7FC0" }),
        React4(inlineStyles.Path, { d: "M3 5H2V2H3V5Z", fill: "#FF7FC0" }),
        React4(inlineStyles.Path, { d: "M15 11H12V10H15V11Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4 11H1V10H4V11Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M13 14H3V15H13V14Z", fill: primaryColorsTransformed[2] }),
        React4(inlineStyles.Path, { d: "M10 11H6V10H10V11Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M8.99999 12H7V11H8.99999V12Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M9 9H7V7H9V9Z", fill: "white" }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
