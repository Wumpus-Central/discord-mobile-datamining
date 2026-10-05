// discord_app/modules/guild_tag/native/badges/GuildBadgeCat.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import inlineStyles from "../../../../../_runtime/08136_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let closure_2 = ["width", "height", "primaryTintColor"];
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const primaryBaseColors = ["#353639", "#74767F", "#D1CDD5"];
const primaryTintLuminances = [0.1, 0.4, 0.7];
let items = [
  { base: 10, tint: 1 },
  { base: 4, tint: 1 },
  { base: 6, tint: 1 },
];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let height;
      let primaryTintColor;
      let tmp100;
      let tmp103;
      let tmp104;
      let tmp105;
      let tmp11;
      let tmp16;
      let tmp19;
      let tmp20;
      let tmp24;
      let tmp25;
      let tmp29;
      let tmp30;
      let tmp31;
      let tmp32;
      let tmp33;
      let tmp34;
      let tmp35;
      let tmp36;
      let tmp37;
      let tmp38;
      let tmp39;
      let tmp4;
      let tmp40;
      let tmp41;
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
      let tmp6;
      let tmp7;
      let tmp76;
      let tmp77;
      let tmp78;
      let tmp83;
      let tmp84;
      let tmp85;
      let tmp86;
      let tmp87;
      let tmp88;
      let tmp89;
      let tmp90;
      let width;
      const obj = react2;
      const cResult = obj.c(65);
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
      if (cResult[5] !== tmp4) {
        const obj2 = {
          primaryBaseColors,
          primaryTintColor: tmp4,
          primaryTintLuminances,
          primaryLuminanceWeights: items,
        };
        const tmpResult = GuildBadgeUtils;
        const transformedBadgeColors = tmpResult.getTransformedBadgeColors(obj2);
        cResult[5] = tmp4;
        cResult[6] = transformedBadgeColors;
        tmp11 = transformedBadgeColors;
      } else {
        tmp11 = cResult[6];
      }
      const primaryColorsTransformed = tmp11.primaryColorsTransformed;
      if (cResult[7] !== primaryColorsTransformed[1]) {
        const obj3 = {
          d: "M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z",
          fill: primaryColorsTransformed[1],
        };
        const tmp18 = React3(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[1];
        cResult[8] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp22 = React3(inlineStyles.Path, { d: "M13 15V16H3V15H13Z", fill: "black" });
        const tmp23 = React3(inlineStyles.Path, { d: "M14 15H13V14H14V15Z", fill: "black" });
        cResult[9] = tmp22;
        cResult[10] = tmp23;
        tmp20 = tmp23;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[9];
        tmp20 = cResult[10];
      }
      if (cResult[11] !== primaryColorsTransformed[2]) {
        const obj4 = { d: "M14 14H13V13H14V14Z", fill: primaryColorsTransformed[2] };
        const tmp27 = React3(inlineStyles.Path, obj4);
        const obj5 = { d: "M3 14H2V13H3V14Z", fill: primaryColorsTransformed[2] };
        const tmp28 = React3(inlineStyles.Path, obj5);
        cResult[11] = primaryColorsTransformed[2];
        cResult[12] = tmp27;
        cResult[13] = tmp28;
        tmp25 = tmp28;
        tmp24 = tmp27;
      } else {
        tmp24 = cResult[12];
        tmp25 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp53 = React3(inlineStyles.Path, { d: "M3 15H2V14H3V15Z", fill: "black" });
        const tmp54 = React3(inlineStyles.Path, { d: "M5 2H4V1H5V2Z", fill: "black" });
        const tmp55 = React3(inlineStyles.Path, { d: "M6 3H5V2H6V3Z", fill: "black" });
        const tmp56 = React3(inlineStyles.Path, { d: "M4 1H2V0H4V1Z", fill: "black" });
        const tmp57 = React3(inlineStyles.Path, { d: "M11 1H12V2H11V1Z", fill: "black" });
        const tmp58 = React3(inlineStyles.Path, { d: "M10 2H11V3H10V2Z", fill: "black" });
        const tmp59 = React3(inlineStyles.Path, { d: "M10 10H11V11H10V10Z", fill: "white" });
        const tmp60 = React3(inlineStyles.Path, { d: "M9 11H12V12H9V11Z", fill: "white" });
        const tmp61 = React3(inlineStyles.Path, { d: "M4 11H7V12H4V11Z", fill: "white" });
        const tmp62 = React3(inlineStyles.Path, { d: "M4 12H12V13H4V12Z", fill: "white" });
        const tmp63 = React3(inlineStyles.Path, { d: "M3 13.0005H13V14.0005H3V13.0005Z", fill: "white" });
        const tmp64 = React3(inlineStyles.Path, { d: "M5 10H6V11H5V10Z", fill: "white" });
        const tmp65 = React3(inlineStyles.Path, { d: "M6 9.00024H9.99999V10.0002H6V9.00024Z", fill: "white" });
        const tmp66 = React3(inlineStyles.Path, { d: "M12 0H14V1H12V0Z", fill: "black" });
        const tmp67 = React3(inlineStyles.Path, { d: "M10 4H6V3H10V4Z", fill: "black" });
        const tmp68 = React3(inlineStyles.Path, { d: "M15 14H14V13H15V14Z", fill: "black" });
        const tmp69 = React3(inlineStyles.Path, { d: "M14 13H13V12H14V13Z", fill: "black" });
        const tmp70 = React3(inlineStyles.Path, { d: "M2 14H1V13H2V14Z", fill: "black" });
        const tmp71 = React3(inlineStyles.Path, { d: "M3 13H2V12H3V13Z", fill: "black" });
        const tmp72 = React3(inlineStyles.Path, { d: "M16 13H15V6H16V13Z", fill: "black" });
        const tmp73 = React3(inlineStyles.Path, { d: "M15 6H14V0H15V6Z", fill: "black" });
        const tmp74 = React3(inlineStyles.Path, { d: "M2 6H1V0H2V6Z", fill: "black" });
        const tmp75 = React3(inlineStyles.Path, { d: "M1 13H0V6H1V13Z", fill: "black" });
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
        tmp51 = tmp53;
        tmp50 = tmp75;
        tmp49 = tmp74;
        tmp48 = tmp73;
        tmp47 = tmp72;
        tmp46 = tmp71;
        tmp45 = tmp70;
        tmp44 = tmp69;
        tmp43 = tmp68;
        tmp42 = tmp67;
        tmp41 = tmp66;
        tmp40 = tmp65;
        tmp39 = tmp64;
        tmp38 = tmp63;
        tmp37 = tmp62;
        tmp36 = tmp61;
        tmp35 = tmp60;
        tmp34 = tmp59;
        tmp33 = tmp58;
        tmp32 = tmp57;
        tmp31 = tmp56;
        tmp30 = tmp55;
        tmp29 = tmp54;
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
        const tmp80 = React3(inlineStyles.Path, obj6);
        const obj7 = { d: "M5 2.99976H6V5.99976H5V2.99976Z", fill: primaryColorsTransformed[0] };
        const tmp81 = React3(inlineStyles.Path, obj7);
        const obj8 = { d: "M7 3.99976H9V6.99983H7V3.99976Z", fill: primaryColorsTransformed[0] };
        const tmp82 = React3(inlineStyles.Path, obj8);
        cResult[37] = primaryColorsTransformed[0];
        cResult[38] = tmp80;
        cResult[39] = tmp81;
        cResult[40] = tmp82;
        tmp78 = tmp82;
        tmp77 = tmp81;
        tmp76 = tmp80;
      } else {
        tmp76 = cResult[38];
        tmp77 = cResult[39];
        tmp78 = cResult[40];
      }
      if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp92 = React3(inlineStyles.Path, { d: "M12 3H13V4H12V3Z", fill: "#FF7FC0" });
        const tmp93 = React3(inlineStyles.Path, { d: "M13 2H14V5H13V2Z", fill: "#FF7FC0" });
        const tmp94 = React3(inlineStyles.Path, { d: "M12 8.99994H11V7H12V8.99994Z", fill: "black" });
        const tmp95 = React3(inlineStyles.Path, { d: "M5 8.99994H4V7H5V8.99994Z", fill: "black" });
        const tmp96 = React3(inlineStyles.Path, { d: "M4 4H3V3H4V4Z", fill: "#FF7FC0" });
        const tmp97 = React3(inlineStyles.Path, { d: "M3 5H2V2H3V5Z", fill: "#FF7FC0" });
        const tmp98 = React3(inlineStyles.Path, { d: "M15 11H12V10H15V11Z", fill: "black" });
        const tmp99 = React3(inlineStyles.Path, { d: "M4 11H1V10H4V11Z", fill: "black" });
        cResult[41] = tmp92;
        cResult[42] = tmp93;
        cResult[43] = tmp94;
        cResult[44] = tmp95;
        cResult[45] = tmp96;
        cResult[46] = tmp97;
        cResult[47] = tmp98;
        cResult[48] = tmp99;
        tmp90 = tmp99;
        tmp89 = tmp98;
        tmp88 = tmp97;
        tmp87 = tmp96;
        tmp86 = tmp95;
        tmp85 = tmp94;
        tmp84 = tmp93;
        tmp83 = tmp92;
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
        const tmp102 = React3(inlineStyles.Path, obj9);
        cResult[49] = primaryColorsTransformed[2];
        cResult[50] = tmp102;
        tmp100 = tmp102;
      } else {
        tmp100 = cResult[50];
      }
      if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp107 = React3(inlineStyles.Path, { d: "M10 11H6V10H10V11Z", fill: "black" });
        const tmp108 = React3(inlineStyles.Path, { d: "M8.99999 12H7V11H8.99999V12Z", fill: "black" });
        const tmp109 = React3(inlineStyles.Path, { d: "M9 9H7V7H9V9Z", fill: "white" });
        cResult[51] = tmp107;
        cResult[52] = tmp108;
        cResult[53] = tmp109;
        tmp105 = tmp109;
        tmp104 = tmp108;
        tmp103 = tmp107;
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
                        let tmp110;
                        if (cResult[63] === num6) {
                          tmp110 = cResult[64];
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
      const obj10 = { width: num6, height: num7, viewBox: "0 0 16 16", fill: "none", children: items };
      const Svg = inlineStyles.Svg;
      const merged = Object.assign(tmp5);
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
      const tmp112 = hasOwnProperty(Svg, obj10);
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
  : (width) => {
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
      const obj = GuildBadgeUtils;
      const obj2 = { primaryBaseColors, primaryTintColor, primaryTintLuminances, primaryLuminanceWeights: items };
      const primaryColorsTransformed = obj.getTransformedBadgeColors(obj2).primaryColorsTransformed;
      const obj3 = { width: num, height: num2, viewBox: "0 0 16 16", fill: "none", children: items };
      const Svg = inlineStyles.Svg;
      const merged1 = Object.assign(merged);
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];
      const obj4 = {
        d: "M2 1H4V2H5V3H6V4H10V3H11V2H12V1H14V6H15V13H14V14H13V15H3V14H2V13H1V6H2V1Z",
        fill: primaryColorsTransformed[1],
      };
      items[0] = React3(inlineStyles.Path, obj4);
      items[1] = React3(inlineStyles.Path, { d: "M13 15V16H3V15H13Z", fill: "black" });
      items[2] = React3(inlineStyles.Path, { d: "M14 15H13V14H14V15Z", fill: "black" });
      const obj5 = { d: "M14 14H13V13H14V14Z", fill: primaryColorsTransformed[2] };
      items[3] = React3(inlineStyles.Path, obj5);
      const obj6 = { d: "M3 14H2V13H3V14Z", fill: primaryColorsTransformed[2] };
      items[4] = React3(inlineStyles.Path, obj6);
      items[5] = React3(inlineStyles.Path, { d: "M3 15H2V14H3V15Z", fill: "black" });
      items[6] = React3(inlineStyles.Path, { d: "M5 2H4V1H5V2Z", fill: "black" });
      items[7] = React3(inlineStyles.Path, { d: "M6 3H5V2H6V3Z", fill: "black" });
      items[8] = React3(inlineStyles.Path, { d: "M4 1H2V0H4V1Z", fill: "black" });
      items[9] = React3(inlineStyles.Path, { d: "M11 1H12V2H11V1Z", fill: "black" });
      items[10] = React3(inlineStyles.Path, { d: "M10 2H11V3H10V2Z", fill: "black" });
      items[11] = React3(inlineStyles.Path, { d: "M10 10H11V11H10V10Z", fill: "white" });
      items[12] = React3(inlineStyles.Path, { d: "M9 11H12V12H9V11Z", fill: "white" });
      items[13] = React3(inlineStyles.Path, { d: "M4 11H7V12H4V11Z", fill: "white" });
      items[14] = React3(inlineStyles.Path, { d: "M4 12H12V13H4V12Z", fill: "white" });
      items[15] = React3(inlineStyles.Path, { d: "M3 13.0005H13V14.0005H3V13.0005Z", fill: "white" });
      items[16] = React3(inlineStyles.Path, { d: "M5 10H6V11H5V10Z", fill: "white" });
      items[17] = React3(inlineStyles.Path, { d: "M6 9.00024H9.99999V10.0002H6V9.00024Z", fill: "white" });
      items[18] = React3(inlineStyles.Path, { d: "M12 0H14V1H12V0Z", fill: "black" });
      items[19] = React3(inlineStyles.Path, { d: "M10 4H6V3H10V4Z", fill: "black" });
      items[20] = React3(inlineStyles.Path, { d: "M15 14H14V13H15V14Z", fill: "black" });
      items[21] = React3(inlineStyles.Path, { d: "M14 13H13V12H14V13Z", fill: "black" });
      items[22] = React3(inlineStyles.Path, { d: "M2 14H1V13H2V14Z", fill: "black" });
      items[23] = React3(inlineStyles.Path, { d: "M3 13H2V12H3V13Z", fill: "black" });
      items[24] = React3(inlineStyles.Path, { d: "M16 13H15V6H16V13Z", fill: "black" });
      items[25] = React3(inlineStyles.Path, { d: "M15 6H14V0H15V6Z", fill: "black" });
      items[26] = React3(inlineStyles.Path, { d: "M2 6H1V0H2V6Z", fill: "black" });
      items[27] = React3(inlineStyles.Path, { d: "M1 13H0V6H1V13Z", fill: "black" });
      const obj7 = { d: "M10 2.99976H11V5.99976H10V2.99976Z", fill: primaryColorsTransformed[0] };
      items[28] = React3(inlineStyles.Path, obj7);
      const obj8 = { d: "M5 2.99976H6V5.99976H5V2.99976Z", fill: primaryColorsTransformed[0] };
      items[29] = React3(inlineStyles.Path, obj8);
      const obj9 = { d: "M7 3.99976H9V6.99983H7V3.99976Z", fill: primaryColorsTransformed[0] };
      items[30] = React3(inlineStyles.Path, obj9);
      items[31] = React3(inlineStyles.Path, { d: "M12 3H13V4H12V3Z", fill: "#FF7FC0" });
      items[32] = React3(inlineStyles.Path, { d: "M13 2H14V5H13V2Z", fill: "#FF7FC0" });
      items[33] = React3(inlineStyles.Path, { d: "M12 8.99994H11V7H12V8.99994Z", fill: "black" });
      items[34] = React3(inlineStyles.Path, { d: "M5 8.99994H4V7H5V8.99994Z", fill: "black" });
      items[35] = React3(inlineStyles.Path, { d: "M4 4H3V3H4V4Z", fill: "#FF7FC0" });
      items[36] = React3(inlineStyles.Path, { d: "M3 5H2V2H3V5Z", fill: "#FF7FC0" });
      items[37] = React3(inlineStyles.Path, { d: "M15 11H12V10H15V11Z", fill: "black" });
      items[38] = React3(inlineStyles.Path, { d: "M4 11H1V10H4V11Z", fill: "black" });
      const obj10 = { d: "M13 14H3V15H13V14Z", fill: primaryColorsTransformed[2] };
      items[39] = React3(inlineStyles.Path, obj10);
      items[40] = React3(inlineStyles.Path, { d: "M10 11H6V10H10V11Z", fill: "black" });
      items[41] = React3(inlineStyles.Path, { d: "M8.99999 12H7V11H8.99999V12Z", fill: "black" });
      items[42] = React3(inlineStyles.Path, { d: "M9 9H7V7H9V9Z", fill: "white" });
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCat.tsx");

export const GuildBadgeCat = tmp4;
