// discord_app/modules/guild_tag/native/badges/GuildBadgeTrophy.tsx
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
const primaryBaseColors = ["#FD6214", "#FFB84B", "#FFE361"];
const primaryTintLuminances = [0.3, 0.56, 0.77];
let items = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
  { base: 3, tint: 1 },
];
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let height;
      let primaryTintColor;
      let tmp100;
      let tmp101;
      let tmp102;
      let tmp103;
      let tmp104;
      let tmp105;
      let tmp11;
      let tmp16;
      let tmp19;
      let tmp22;
      let tmp25;
      let tmp26;
      let tmp27;
      let tmp28;
      let tmp29;
      let tmp30;
      let tmp38;
      let tmp4;
      let tmp41;
      let tmp42;
      let tmp46;
      let tmp49;
      let tmp5;
      let tmp52;
      let tmp53;
      let tmp57;
      let tmp6;
      let tmp60;
      let tmp63;
      let tmp66;
      let tmp69;
      let tmp7;
      let tmp72;
      let tmp75;
      let tmp78;
      let tmp79;
      let tmp80;
      let tmp85;
      let tmp88;
      let tmp89;
      let tmp90;
      let tmp91;
      let tmp97;
      let width;
      const obj = react2;
      const cResult = obj.c(78);
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
      if (cResult[7] !== primaryColorsTransformed[2]) {
        const obj3 = {
          d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z",
          fill: primaryColorsTransformed[2],
        };
        const tmp18 = React3(inlineStyles.Path, obj3);
        cResult[7] = primaryColorsTransformed[2];
        cResult[8] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = React3(inlineStyles.Path, { d: "M12 15H3.99998V16H12V15Z", fill: "black" });
        cResult[9] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== primaryColorsTransformed[1]) {
        const obj4 = { d: "M12 14H3.99998V15H12V14Z", fill: primaryColorsTransformed[1] };
        const tmp24 = React3(inlineStyles.Path, obj4);
        cResult[10] = primaryColorsTransformed[1];
        cResult[11] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp32 = React3(inlineStyles.Path, { d: "M13 13H12V15H13V13Z", fill: "black" });
        const tmp33 = React3(inlineStyles.Path, {
          d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z",
          fill: "black",
        });
        const tmp34 = React3(inlineStyles.Path, { d: "M3.99998 13H2.99998V15H3.99998V13Z", fill: "black" });
        const tmp35 = React3(inlineStyles.Path, { d: "M5 10V11H6V12H4V13H7V10H5Z", fill: "black" });
        const tmp36 = React3(inlineStyles.Path, { d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z", fill: "black" });
        const tmp37 = React3(inlineStyles.Path, { d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z", fill: "white" });
        cResult[12] = tmp35;
        cResult[13] = tmp36;
        cResult[14] = tmp37;
        cResult[15] = tmp32;
        cResult[16] = tmp33;
        cResult[17] = tmp34;
        tmp30 = tmp34;
        tmp29 = tmp33;
        tmp28 = tmp32;
        tmp27 = tmp37;
        tmp26 = tmp36;
        tmp25 = tmp35;
      } else {
        tmp25 = cResult[12];
        tmp26 = cResult[13];
        tmp27 = cResult[14];
        tmp28 = cResult[15];
        tmp29 = cResult[16];
        tmp30 = cResult[17];
      }
      if (cResult[18] !== primaryColorsTransformed[0]) {
        const obj5 = { d: "M5 7.99998H6L6 3.99998H5V7.99998Z", fill: primaryColorsTransformed[0] };
        const tmp40 = React3(inlineStyles.Path, obj5);
        cResult[18] = primaryColorsTransformed[0];
        cResult[19] = tmp40;
        tmp38 = tmp40;
      } else {
        tmp38 = cResult[19];
      }
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp44 = React3(inlineStyles.Path, { d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z", fill: "black" });
        const tmp45 = React3(inlineStyles.Path, { d: "M12 6.99998H13V3.99998H12V6.99998Z", fill: "black" });
        cResult[20] = tmp44;
        cResult[21] = tmp45;
        tmp42 = tmp45;
        tmp41 = tmp44;
      } else {
        tmp41 = cResult[20];
        tmp42 = cResult[21];
      }
      if (cResult[22] !== primaryColorsTransformed[1]) {
        const obj6 = { d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z", fill: primaryColorsTransformed[1] };
        const tmp48 = React3(inlineStyles.Path, obj6);
        cResult[22] = primaryColorsTransformed[1];
        cResult[23] = tmp48;
        tmp46 = tmp48;
      } else {
        tmp46 = cResult[23];
      }
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp51 = React3(inlineStyles.Path, {
          d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z",
          fill: "black",
        });
        cResult[24] = tmp51;
        tmp49 = tmp51;
      } else {
        tmp49 = cResult[24];
      }
      if (cResult[25] !== primaryColorsTransformed[1]) {
        const obj7 = { d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z", fill: primaryColorsTransformed[1] };
        const tmp55 = React3(inlineStyles.Path, obj7);
        const obj8 = { d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z", fill: primaryColorsTransformed[1] };
        const tmp56 = React3(inlineStyles.Path, obj8);
        cResult[25] = primaryColorsTransformed[1];
        cResult[26] = tmp55;
        cResult[27] = tmp56;
        tmp53 = tmp56;
        tmp52 = tmp55;
      } else {
        tmp52 = cResult[26];
        tmp53 = cResult[27];
      }
      if (cResult[28] !== primaryColorsTransformed[0]) {
        const obj9 = { d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z", fill: primaryColorsTransformed[0] };
        const tmp59 = React3(inlineStyles.Path, obj9);
        cResult[28] = primaryColorsTransformed[0];
        cResult[29] = tmp59;
        tmp57 = tmp59;
      } else {
        tmp57 = cResult[29];
      }
      if (cResult[30] !== primaryColorsTransformed[1]) {
        const obj10 = { d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z", fill: primaryColorsTransformed[1] };
        const tmp62 = React3(inlineStyles.Path, obj10);
        cResult[30] = primaryColorsTransformed[1];
        cResult[31] = tmp62;
        tmp60 = tmp62;
      } else {
        tmp60 = cResult[31];
      }
      if (cResult[32] !== primaryColorsTransformed[0]) {
        const obj11 = { d: "M11 6.99998H10V7.99998H11V6.99998Z", fill: primaryColorsTransformed[0] };
        const tmp65 = React3(inlineStyles.Path, obj11);
        cResult[32] = primaryColorsTransformed[0];
        cResult[33] = tmp65;
        tmp63 = tmp65;
      } else {
        tmp63 = cResult[33];
      }
      if (cResult[34] !== primaryColorsTransformed[1]) {
        const obj12 = { d: "M14 6.99998H12V7.99998H14V6.99998Z", fill: primaryColorsTransformed[1] };
        const tmp68 = React3(inlineStyles.Path, obj12);
        cResult[34] = primaryColorsTransformed[1];
        cResult[35] = tmp68;
        tmp66 = tmp68;
      } else {
        tmp66 = cResult[35];
      }
      if (cResult[36] !== primaryColorsTransformed[0]) {
        const obj13 = { d: "M10 7.99998H9V8.99998H10V7.99998Z", fill: primaryColorsTransformed[0] };
        const tmp71 = React3(inlineStyles.Path, obj13);
        cResult[36] = primaryColorsTransformed[0];
        cResult[37] = tmp71;
        tmp69 = tmp71;
      } else {
        tmp69 = cResult[37];
      }
      if (cResult[38] !== primaryColorsTransformed[1]) {
        const obj14 = { d: "M11 2H10V6.99999H11V2Z", fill: primaryColorsTransformed[1] };
        const tmp74 = React3(inlineStyles.Path, obj14);
        cResult[38] = primaryColorsTransformed[1];
        cResult[39] = tmp74;
        tmp72 = tmp74;
      } else {
        tmp72 = cResult[39];
      }
      if (cResult[40] !== primaryColorsTransformed[2]) {
        const obj15 = { d: "M5.99998 2H4.99998V3.99999H5.99998V2Z", fill: primaryColorsTransformed[2] };
        const tmp77 = React3(inlineStyles.Path, obj15);
        cResult[40] = primaryColorsTransformed[2];
        cResult[41] = tmp77;
        tmp75 = tmp77;
      } else {
        tmp75 = cResult[41];
      }
      if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp82 = React3(inlineStyles.Path, { d: "M14 3.99998V2.99998H12V3.99998H14Z", fill: "white" });
        const tmp83 = React3(inlineStyles.Path, { d: "M8 10H7V12H8V10Z", fill: "white" });
        const tmp84 = React3(inlineStyles.Path, {
          d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z",
          fill: "black",
        });
        cResult[42] = tmp82;
        cResult[43] = tmp83;
        cResult[44] = tmp84;
        tmp80 = tmp84;
        tmp79 = tmp83;
        tmp78 = tmp82;
      } else {
        tmp78 = cResult[42];
        tmp79 = cResult[43];
        tmp80 = cResult[44];
      }
      if (cResult[45] !== primaryColorsTransformed[1]) {
        const obj16 = { d: "M3 7V4H2V8H4V7H3Z", fill: primaryColorsTransformed[1] };
        const tmp87 = React3(inlineStyles.Path, obj16);
        cResult[45] = primaryColorsTransformed[1];
        cResult[46] = tmp87;
        tmp85 = tmp87;
      } else {
        tmp85 = cResult[46];
      }
      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp93 = React3(inlineStyles.Path, {
          d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z",
          fill: "black",
        });
        const tmp94 = React3(inlineStyles.Path, { d: "M10 12V11H11V10H9V13H12V12H10Z", fill: "black" });
        const tmp95 = React3(inlineStyles.Path, { d: "M14 8.99998V7.99998H12V8.99998H14Z", fill: "black" });
        const tmp96 = React3(inlineStyles.Path, { d: "M16 3.99998H15V6.99998H16V3.99998Z", fill: "black" });
        cResult[47] = tmp93;
        cResult[48] = tmp94;
        cResult[49] = tmp95;
        cResult[50] = tmp96;
        tmp91 = tmp96;
        tmp90 = tmp95;
        tmp89 = tmp94;
        tmp88 = tmp93;
      } else {
        tmp88 = cResult[47];
        tmp89 = cResult[48];
        tmp90 = cResult[49];
        tmp91 = cResult[50];
      }
      if (cResult[51] !== primaryColorsTransformed[1]) {
        const obj17 = { d: "M14 3.99998H13V6.99998H14V3.99998Z", fill: primaryColorsTransformed[1] };
        const tmp99 = React3(inlineStyles.Path, obj17);
        cResult[51] = primaryColorsTransformed[1];
        cResult[52] = tmp99;
        tmp97 = tmp99;
      } else {
        tmp97 = cResult[52];
      }
      if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp107 = React3(inlineStyles.Path, { d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z", fill: "black" });
        const tmp108 = React3(inlineStyles.Path, { d: "M11 9.99998H12V8.99998H11V9.99998Z", fill: "black" });
        const tmp109 = React3(inlineStyles.Path, { d: "M14 7.99998H15V6.99998H14V7.99998Z", fill: "black" });
        const tmp110 = React3(inlineStyles.Path, { d: "M14 3.99998H15V2.99998H14V3.99998Z", fill: "black" });
        const tmp111 = React3(inlineStyles.Path, { d: "M7 13H4V14H7V13Z", fill: "white" });
        const tmp112 = React3(inlineStyles.Path, { d: "M4 1V8H5V2H6V7H7V2H12V1H4Z", fill: "white" });
        cResult[53] = tmp107;
        cResult[54] = tmp108;
        cResult[55] = tmp109;
        cResult[56] = tmp110;
        cResult[57] = tmp111;
        cResult[58] = tmp112;
        tmp105 = tmp112;
        tmp104 = tmp111;
        tmp103 = tmp110;
        tmp102 = tmp109;
        tmp101 = tmp108;
        tmp100 = tmp107;
      } else {
        tmp100 = cResult[53];
        tmp101 = cResult[54];
        tmp102 = cResult[55];
        tmp103 = cResult[56];
        tmp104 = cResult[57];
        tmp105 = cResult[58];
      }
      if (cResult[59] === num7) {
        if (cResult[60] === tmp5) {
          if (cResult[61] === tmp38) {
            if (cResult[62] === tmp46) {
              if (cResult[63] === tmp52) {
                if (cResult[64] === tmp53) {
                  if (cResult[65] === tmp57) {
                    if (cResult[66] === tmp60) {
                      if (cResult[67] === tmp63) {
                        if (cResult[68] === tmp66) {
                          if (cResult[69] === tmp69) {
                            if (cResult[70] === tmp72) {
                              if (cResult[71] === tmp75) {
                                if (cResult[72] === tmp85) {
                                  if (cResult[73] === tmp97) {
                                    if (cResult[74] === tmp16) {
                                      if (cResult[75] === tmp22) {
                                        let tmp113;
                                        if (cResult[76] === num6) {
                                          tmp113 = cResult[77];
                                        }
                                        return tmp113;
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
              }
            }
          }
        }
      }
      const obj18 = { width: num6, height: num7, viewBox: "0 0 16 16", fill: "none", children: items };
      const Svg = inlineStyles.Svg;
      const merged = Object.assign(tmp5);
      items = [
        tmp16,
        tmp19,
        tmp22,
        tmp28,
        tmp29,
        tmp30,
        tmp25,
        tmp26,
        tmp27,
        tmp38,
        tmp41,
        tmp42,
        tmp46,
        tmp49,
        tmp52,
        tmp53,
        tmp57,
        tmp60,
        tmp63,
        tmp66,
        tmp69,
        tmp72,
        tmp75,
        tmp78,
        tmp79,
        tmp80,
        tmp85,
        tmp88,
        tmp89,
        tmp90,
        tmp91,
        tmp97,
        tmp100,
        tmp101,
        tmp102,
        tmp103,
        tmp104,
        tmp105,
      ];
      const tmp115 = hasOwnProperty(Svg, obj18);
      cResult[59] = num7;
      cResult[60] = tmp5;
      cResult[61] = tmp38;
      cResult[62] = tmp46;
      cResult[63] = tmp52;
      cResult[64] = tmp53;
      cResult[65] = tmp57;
      cResult[66] = tmp60;
      cResult[67] = tmp63;
      cResult[68] = tmp66;
      cResult[69] = tmp69;
      cResult[70] = tmp72;
      cResult[71] = tmp75;
      cResult[72] = tmp85;
      cResult[73] = tmp97;
      cResult[74] = tmp16;
      cResult[75] = tmp22;
      cResult[76] = num6;
      cResult[77] = tmp115;
      tmp113 = tmp115;
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
      items = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,];
      const obj4 = {
        d: "M4.99998 8.99999V10H7V13H4V15H12V13H9V10H11V8.99999H12V7.99999H14V6.99999H15V3.99999H14V2.99999H12V1H4V3H2V3.99999H0.999985V6.99999H1.99998V7.99999H3.99998V8.99999H4.99998Z",
        fill: primaryColorsTransformed[2],
      };
      items[0] = React3(inlineStyles.Path, obj4);
      items[1] = React3(inlineStyles.Path, { d: "M12 15H3.99998V16H12V15Z", fill: "black" });
      const obj5 = { d: "M12 14H3.99998V15H12V14Z", fill: primaryColorsTransformed[1] };
      items[2] = React3(inlineStyles.Path, obj5);
      items[3] = React3(inlineStyles.Path, { d: "M13 13H12V15H13V13Z", fill: "black" });
      items[4] = React3(inlineStyles.Path, { d: "M3.99998 8.99998V7.99998H1.99998V8.99998H3.99998Z", fill: "black" });
      items[5] = React3(inlineStyles.Path, { d: "M3.99998 13H2.99998V15H3.99998V13Z", fill: "black" });
      items[6] = React3(inlineStyles.Path, { d: "M5 10V11H6V12H4V13H7V10H5Z", fill: "black" });
      items[7] = React3(inlineStyles.Path, { d: "M0 6.99998H1L1 3.99998H0L0 6.99998Z", fill: "black" });
      items[8] = React3(inlineStyles.Path, { d: "M1 6.99998H2L2 3.99998H1L1 6.99998Z", fill: "white" });
      const obj6 = { d: "M5 7.99998H6L6 3.99998H5V7.99998Z", fill: primaryColorsTransformed[0] };
      items[9] = React3(inlineStyles.Path, obj6);
      items[10] = React3(inlineStyles.Path, { d: "M3 6.99998H4L4 3.99998H3L3 6.99998Z", fill: "black" });
      items[11] = React3(inlineStyles.Path, { d: "M12 6.99998H13V3.99998H12V6.99998Z", fill: "black" });
      const obj7 = { d: "M12 8H11V7H9V8H7V10H8V13H9V10H11V9H12V8Z", fill: primaryColorsTransformed[1] };
      items[12] = React3(inlineStyles.Path, obj7);
      items[13] = React3(inlineStyles.Path, { d: "M4.99998 8.99998H3.99998V9.99998H4.99998V8.99998Z", fill: "black" });
      const obj8 = { d: "M4.99998 7.99998H3.99998V8.99998H4.99998V7.99998Z", fill: primaryColorsTransformed[1] };
      items[14] = React3(inlineStyles.Path, obj8);
      const obj9 = { d: "M5.99998 8.99998H4.99998V9.99998H5.99998V8.99998Z", fill: primaryColorsTransformed[1] };
      items[15] = React3(inlineStyles.Path, obj9);
      const obj10 = { d: "M6.99998 7.99998H5.99998V8.99998H6.99998V7.99998Z", fill: primaryColorsTransformed[0] };
      items[16] = React3(inlineStyles.Path, obj10);
      const obj11 = { d: "M6.99998 6.99998H5.99998V7.99998H6.99998V6.99998Z", fill: primaryColorsTransformed[1] };
      items[17] = React3(inlineStyles.Path, obj11);
      const obj12 = { d: "M11 6.99998H10V7.99998H11V6.99998Z", fill: primaryColorsTransformed[0] };
      items[18] = React3(inlineStyles.Path, obj12);
      const obj13 = { d: "M14 6.99998H12V7.99998H14V6.99998Z", fill: primaryColorsTransformed[1] };
      items[19] = React3(inlineStyles.Path, obj13);
      const obj14 = { d: "M10 7.99998H9V8.99998H10V7.99998Z", fill: primaryColorsTransformed[0] };
      items[20] = React3(inlineStyles.Path, obj14);
      const obj15 = { d: "M11 2H10V6.99999H11V2Z", fill: primaryColorsTransformed[1] };
      items[21] = React3(inlineStyles.Path, obj15);
      const obj16 = { d: "M5.99998 2H4.99998V3.99999H5.99998V2Z", fill: primaryColorsTransformed[2] };
      items[22] = React3(inlineStyles.Path, obj16);
      items[23] = React3(inlineStyles.Path, { d: "M14 3.99998V2.99998H12V3.99998H14Z", fill: "white" });
      items[24] = React3(inlineStyles.Path, { d: "M8 10H7V12H8V10Z", fill: "white" });
      items[25] = React3(inlineStyles.Path, { d: "M1.99998 6.99998H0.999985V7.99998H1.99998V6.99998Z", fill: "black" });
      const obj17 = { d: "M3 7V4H2V8H4V7H3Z", fill: primaryColorsTransformed[1] };
      items[26] = React3(inlineStyles.Path, obj17);
      items[27] = React3(inlineStyles.Path, { d: "M1.99998 2.99998H0.999985V3.99998H1.99998V2.99998Z", fill: "black" });
      items[28] = React3(inlineStyles.Path, { d: "M10 12V11H11V10H9V13H12V12H10Z", fill: "black" });
      items[29] = React3(inlineStyles.Path, { d: "M14 8.99998V7.99998H12V8.99998H14Z", fill: "black" });
      items[30] = React3(inlineStyles.Path, { d: "M16 3.99998H15V6.99998H16V3.99998Z", fill: "black" });
      const obj18 = { d: "M14 3.99998H13V6.99998H14V3.99998Z", fill: primaryColorsTransformed[1] };
      items[31] = React3(inlineStyles.Path, obj18);
      items[32] = React3(inlineStyles.Path, { d: "M13 2V0H3V2H2V3H4V1H12V3H14V2H13Z", fill: "black" });
      items[33] = React3(inlineStyles.Path, { d: "M11 9.99998H12V8.99998H11V9.99998Z", fill: "black" });
      items[34] = React3(inlineStyles.Path, { d: "M14 7.99998H15V6.99998H14V7.99998Z", fill: "black" });
      items[35] = React3(inlineStyles.Path, { d: "M14 3.99998H15V2.99998H14V3.99998Z", fill: "black" });
      items[36] = React3(inlineStyles.Path, { d: "M7 13H4V14H7V13Z", fill: "white" });
      items[37] = React3(inlineStyles.Path, { d: "M4 1V8H5V2H6V7H7V2H12V1H4Z", fill: "white" });
      return hasOwnProperty(Svg, obj3);
    };
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeTrophy.tsx");

export const GuildBadgeTrophy = tmp4;
