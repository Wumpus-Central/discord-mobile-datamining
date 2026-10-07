// discord_app/modules/guild_tag/native/badges/GuildBadgeDog.tsx
import c from "../../../../../_runtime/00576_c.js";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["width", "height", "primaryTintColor", "secondaryTintColor"];
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const primaryBaseColors = ["#705224", "#F6A830"];
const secondaryBaseColors = ["#FFE880"];
const primaryTintLuminances = [0.05, 0.4];
let items = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryTintLuminances = [0.8];
const items1 = [{ base: 6, tint: 1 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeDog.tsx");

export const GuildBadgeDog = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(52);
      if (cResult[0] !== arg0) {
        ({ width, height, primaryTintColor, secondaryTintColor } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = primaryTintColor;
        cResult[2] = tmp11;
        cResult[3] = secondaryTintColor;
        cResult[4] = width;
        cResult[5] = height;
        let tmp8 = height;
        let tmp7 = width;
        let tmp6 = secondaryTintColor;
        let tmp5 = tmp11;
        let tmp4 = primaryTintColor;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      let num7 = 24;
      if (undefined !== tmp7) {
        num7 = tmp7;
      }
      let num8 = 24;
      if (undefined !== tmp8) {
        num8 = tmp8;
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp6) {
          let tmp12 = cResult[8];
        }
        ({ primaryColorsTransformed, secondaryColorsTransformed } = tmp12);
        if (cResult[9] !== primaryColorsTransformed[1]) {
          const obj2 = {
            d: "M3 2.00002V5.00002H11V6.00001H9.99997V7.00001H8.99997V8.00001L15 8.00001V10H14V11H8V14H1V10V4.00002H2V2.00002H3Z",
            fill: primaryColorsTransformed[1],
          };
          const tmp16 = React4(inlineStyles.Path, obj2);
          cResult[9] = primaryColorsTransformed[1];
          cResult[10] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[10];
        }
        if (cResult[11] !== secondaryColorsTransformed[0]) {
          const obj3 = {
            d: "M8 8.00002V9.00002H7V11H6V12H3V11H2V10H1V14H8V11H14V10H15V8.00002H8Z",
            fill: secondaryColorsTransformed[0],
          };
          const tmp19 = React4(inlineStyles.Path, obj3);
          cResult[11] = secondaryColorsTransformed[0];
          cResult[12] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = React4(inlineStyles.Path, { d: "M9 12H8V14H9V12Z", fill: "#FF1C90" });
          cResult[13] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[13];
        }
        if (cResult[14] !== primaryColorsTransformed[1]) {
          const obj4 = { d: "M7.99997 2.00002H6.99997V4.00002H7.99997V2.00002Z", fill: primaryColorsTransformed[1] };
          const tmp27 = React4(inlineStyles.Path, obj4);
          const obj5 = { d: "M5 2.00002V1.00002L3 1.00002V2.00002H5Z", fill: primaryColorsTransformed[1] };
          const tmp28 = React4(inlineStyles.Path, obj5);
          cResult[14] = primaryColorsTransformed[1];
          cResult[15] = tmp27;
          cResult[16] = tmp28;
          let tmp25 = tmp28;
          let tmp24 = tmp27;
        } else {
          tmp24 = cResult[15];
          tmp25 = cResult[16];
        }
        const _Symbol2 = Symbol;
        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp33 = React4(inlineStyles.Path, { d: "M4 5H6V2L4 2L4 5Z", fill: "#FF7FC0" });
          const tmp34 = React4(inlineStyles.Path, { d: "M8 4H10V2H8V4Z", fill: "#FF7FC0" });
          const tmp35 = React4(inlineStyles.Path, { d: "M9 12V15H11V12H9Z", fill: "#FF7FC0" });
          cResult[17] = tmp34;
          cResult[18] = tmp35;
          cResult[19] = tmp33;
          let tmp31 = tmp33;
          let tmp30 = tmp35;
          let tmp29 = tmp34;
        } else {
          tmp29 = cResult[17];
          tmp30 = cResult[18];
          tmp31 = cResult[19];
        }
        if (cResult[20] !== primaryColorsTransformed[0]) {
          const obj6 = { d: "M12 8V9H13V10H15V8H12Z", fill: primaryColorsTransformed[0] };
          const tmp38 = React4(inlineStyles.Path, obj6);
          cResult[20] = primaryColorsTransformed[0];
          cResult[21] = tmp38;
          let tmp36 = tmp38;
        } else {
          tmp36 = cResult[21];
        }
        if (cResult[22] !== primaryColorsTransformed[1]) {
          const obj7 = { d: "M9 1.00002H8V2.00002H9V1.00002Z", fill: primaryColorsTransformed[1] };
          const tmp41 = React4(inlineStyles.Path, obj7);
          cResult[22] = primaryColorsTransformed[1];
          cResult[23] = tmp41;
          let tmp39 = tmp41;
        } else {
          tmp39 = cResult[23];
        }
        const _Symbol3 = Symbol;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp44 = React4(inlineStyles.Path, { d: "M10 1.00002H9V2.00002H10V1.00002Z", fill: "#FF7FC0" });
          cResult[24] = tmp44;
          let tmp42 = tmp44;
        } else {
          tmp42 = cResult[24];
        }
        if (cResult[25] !== primaryColorsTransformed[1]) {
          const obj8 = { d: "M12 6.00002H11V7.00002H12V6.00002Z", fill: primaryColorsTransformed[1] };
          const tmp47 = React4(inlineStyles.Path, obj8);
          cResult[25] = primaryColorsTransformed[1];
          cResult[26] = tmp47;
          let tmp45 = tmp47;
        } else {
          tmp45 = cResult[26];
        }
        const _Symbol4 = Symbol;
        if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp63 = React4(inlineStyles.Path, { d: "M9 14H1V15H9V14Z", fill: "black" });
          const tmp64 = React4(inlineStyles.Path, { d: "M1 14L1 4.00002H0L0 14H1Z", fill: "black" });
          const tmp65 = React4(inlineStyles.Path, { d: "M2 2.00002H1V4.00002H2V2.00002Z", fill: "black" });
          const tmp66 = React4(inlineStyles.Path, { d: "M4 2.00002H3V5.00002H4V2.00002Z", fill: "black" });
          const tmp67 = React4(inlineStyles.Path, { d: "M11 16V15H9V16H11Z", fill: "black" });
          const tmp68 = React4(inlineStyles.Path, { d: "M6 9H7V6H6V9Z", fill: "black" });
          const tmp69 = React4(inlineStyles.Path, { d: "M3 1.00002H2V2.00002H3V1.00002Z", fill: "black" });
          const tmp70 = React4(inlineStyles.Path, { d: "M8 1.00002H7V2.00002H8V1.00002Z", fill: "black" });
          const tmp71 = React4(inlineStyles.Path, { d: "M3 5.00002H2V6.00002H3V5.00002Z", fill: "black" });
          const tmp72 = React4(inlineStyles.Path, { d: "M12 5.00002H11V6.00002H12V5.00002Z", fill: "black" });
          const tmp73 = React4(inlineStyles.Path, {
            d: "M14 10V11H7.99997V12H11V15H12V13H13V12H15V10H14Z",
            fill: "black",
          });
          const tmp74 = React4(inlineStyles.Path, {
            d: "M13 7V6H12V7H11V6H9.99997V7H8.99997V8H15V10H16V7H13Z",
            fill: "black",
          });
          const tmp75 = React4(inlineStyles.Path, { d: "M2.99997 0V1H4.99997V2H5.99997V0H2.99997Z", fill: "black" });
          const tmp76 = React4(inlineStyles.Path, {
            d: "M7.99997 0V1H9.99997V4H6.99997V2H5.99997V5H11V0H7.99997Z",
            fill: "black",
          });
          cResult[27] = tmp63;
          cResult[28] = tmp64;
          cResult[29] = tmp65;
          cResult[30] = tmp66;
          cResult[31] = tmp67;
          cResult[32] = tmp68;
          cResult[33] = tmp69;
          cResult[34] = tmp70;
          cResult[35] = tmp71;
          cResult[36] = tmp72;
          cResult[37] = tmp73;
          cResult[38] = tmp74;
          cResult[39] = tmp75;
          cResult[40] = tmp76;
          let tmp61 = tmp76;
          let tmp60 = tmp75;
          let tmp59 = tmp74;
          let tmp58 = tmp73;
          let tmp57 = tmp72;
          let tmp56 = tmp71;
          let tmp55 = tmp70;
          let tmp54 = tmp69;
          let tmp53 = tmp68;
          let tmp52 = tmp67;
          let tmp51 = tmp66;
          let tmp50 = tmp65;
          let tmp49 = tmp64;
          let tmp48 = tmp63;
        } else {
          tmp48 = cResult[27];
          tmp49 = cResult[28];
          tmp50 = cResult[29];
          tmp51 = cResult[30];
          tmp52 = cResult[31];
          tmp53 = cResult[32];
          tmp54 = cResult[33];
          tmp55 = cResult[34];
          tmp56 = cResult[35];
          tmp57 = cResult[36];
          tmp58 = cResult[37];
          tmp59 = cResult[38];
          tmp60 = cResult[39];
          tmp61 = cResult[40];
        }
        if (cResult[41] === num8) {
          if (cResult[42] === tmp5) {
            if (cResult[43] === tmp36) {
              if (cResult[44] === tmp39) {
                if (cResult[45] === tmp45) {
                  if (cResult[46] === tmp14) {
                    if (cResult[47] === tmp17) {
                      if (cResult[48] === tmp24) {
                        if (cResult[49] === tmp25) {
                          if (cResult[50] === num7) {
                            let tmp77 = cResult[51];
                          }
                          return tmp77;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj9 = {};
        const merged = Object.assign(tmp5);
        obj9.width = num7;
        obj9.height = num8;
        obj9.viewBox = "0 0 16 16";
        obj9.fill = "none";
        items = [
          tmp14,
          tmp17,
          tmp21,
          tmp24,
          tmp25,
          tmp31,
          tmp29,
          tmp30,
          tmp36,
          tmp39,
          tmp42,
          tmp45,
          tmp48,
          tmp49,
          tmp50,
          tmp51,
          tmp52,
          tmp53,
          tmp54,
          tmp55,
          tmp56,
          tmp57,
          tmp58,
          tmp59,
          tmp60,
          tmp61,
        ];
        obj9.children = items;
        const tmp82 = hasOwnProperty(inlineStyles.Svg, obj9);
        cResult[41] = num8;
        cResult[42] = tmp5;
        cResult[43] = tmp36;
        cResult[44] = tmp39;
        cResult[45] = tmp45;
        cResult[46] = tmp14;
        cResult[47] = tmp17;
        cResult[48] = tmp24;
        cResult[49] = tmp25;
        cResult[50] = num7;
        cResult[51] = tmp82;
        tmp77 = tmp82;
      }
      const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({
        primaryBaseColors,
        primaryTintColor: tmp4,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
        secondaryBaseColors,
        secondaryTintColor: tmp6,
        secondaryTintLuminances,
        secondaryLuminanceWeights: items1,
      });
      cResult[6] = tmp4;
      cResult[7] = tmp6;
      cResult[8] = transformedBadgeColors;
      tmp12 = transformedBadgeColors;
      const obj10 = {
        primaryBaseColors,
        primaryTintColor: tmp4,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
        secondaryBaseColors,
        secondaryTintColor: tmp6,
        secondaryTintLuminances,
        secondaryLuminanceWeights: items1,
      };
      const tmpResult = GuildBadgeUtils;
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
      ({ primaryTintColor, secondaryTintColor } = width);
      const merged = Object.assign(
        width,
        Object.assign({ width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 }),
      );
      const transformedBadgeColors = GuildBadgeUtils.getTransformedBadgeColors({
        primaryBaseColors,
        primaryTintColor,
        primaryTintLuminances,
        primaryLuminanceWeights: items,
        secondaryBaseColors,
        secondaryTintColor,
        secondaryTintLuminances,
        secondaryLuminanceWeights: items1,
      });
      const primaryColorsTransformed = transformedBadgeColors.primaryColorsTransformed;
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.width = num;
      obj3.height = num2;
      obj3.viewBox = "0 0 16 16";
      obj3.fill = "none";
      items = [
        React4(inlineStyles.Path, {
          d: "M3 2.00002V5.00002H11V6.00001H9.99997V7.00001H8.99997V8.00001L15 8.00001V10H14V11H8V14H1V10V4.00002H2V2.00002H3Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, {
          d: "M8 8.00002V9.00002H7V11H6V12H3V11H2V10H1V14H8V11H14V10H15V8.00002H8Z",
          fill: transformedBadgeColors.secondaryColorsTransformed[0],
        }),
        React4(inlineStyles.Path, { d: "M9 12H8V14H9V12Z", fill: "#FF1C90" }),
        React4(inlineStyles.Path, {
          d: "M7.99997 2.00002H6.99997V4.00002H7.99997V2.00002Z",
          fill: primaryColorsTransformed[1],
        }),
        React4(inlineStyles.Path, { d: "M5 2.00002V1.00002L3 1.00002V2.00002H5Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M4 5H6V2L4 2L4 5Z", fill: "#FF7FC0" }),
        React4(inlineStyles.Path, { d: "M8 4H10V2H8V4Z", fill: "#FF7FC0" }),
        React4(inlineStyles.Path, { d: "M9 12V15H11V12H9Z", fill: "#FF7FC0" }),
        React4(inlineStyles.Path, { d: "M12 8V9H13V10H15V8H12Z", fill: primaryColorsTransformed[0] }),
        React4(inlineStyles.Path, { d: "M9 1.00002H8V2.00002H9V1.00002Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M10 1.00002H9V2.00002H10V1.00002Z", fill: "#FF7FC0" }),
        React4(inlineStyles.Path, { d: "M12 6.00002H11V7.00002H12V6.00002Z", fill: primaryColorsTransformed[1] }),
        React4(inlineStyles.Path, { d: "M9 14H1V15H9V14Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M1 14L1 4.00002H0L0 14H1Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M2 2.00002H1V4.00002H2V2.00002Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M4 2.00002H3V5.00002H4V2.00002Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M11 16V15H9V16H11Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M6 9H7V6H6V9Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M3 1.00002H2V2.00002H3V1.00002Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M8 1.00002H7V2.00002H8V1.00002Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M3 5.00002H2V6.00002H3V5.00002Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M12 5.00002H11V6.00002H12V5.00002Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M14 10V11H7.99997V12H11V15H12V13H13V12H15V10H14Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M13 7V6H12V7H11V6H9.99997V7H8.99997V8H15V10H16V7H13Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M2.99997 0V1H4.99997V2H5.99997V0H2.99997Z", fill: "black" }),
        React4(inlineStyles.Path, { d: "M7.99997 0V1H9.99997V4H6.99997V2H5.99997V5H11V0H7.99997Z", fill: "black" }),
      ];
      obj3.children = items;
      return hasOwnProperty(inlineStyles.Svg, obj3);
    };
