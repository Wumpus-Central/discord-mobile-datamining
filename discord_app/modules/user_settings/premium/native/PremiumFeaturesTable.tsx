// discord_app/modules/user_settings/premium/native/PremiumFeaturesTable.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl32 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import LegacyTokens from "../../../../design/migrations/native/LegacyTokens.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13301_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/13302_AssetRegistry.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import PremiumConstants from "../../../premium/PremiumConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj6;
let unpackModuleId;
const View = react_native.View;
const HorizontalGradient = Constants.HorizontalGradient;
({
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: metroImportDefault,
  PRICE_PLACEHOLDER: metroImportAll,
  PremiumTypes: c9,
  SubscriptionPlans: c10,
} = PremiumConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let c13 = "rgba(184, 69, 193, 0.5)";
let createStyles = createStyles_mod;
let obj = {
  container: { display: "flex", flex: 1, width: "100%" },
  headerText: { textAlign: "center" },
  logo: { marginTop: 8, marginBottom: -6 },
  table: { marginTop: 16 },
  row: { display: "flex", flexDirection: "row" },
  bottomBorder: { borderBottomColor: "rgba(106, 116, 128, 0.24)", borderBottomWidth: 1 },
  topBorderRadius: obj2,
  bottomBorderRadius: obj3,
  cell: { paddingVertical: 12 },
  labelCell: { flex: 1, justifyContent: "flex-start" },
  dataCell: { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 82 },
  themedHighlightedCell: obj4,
  nitroHomeHightlightedBorderLeftRight: {
    borderLeftColor: "rgba(184, 69, 193, 0.5)",
    borderLeftWidth: 2,
    borderRightColor: "rgba(184, 69, 193, 0.5)",
    borderRightWidth: 2,
  },
  premiumGroupCard: { marginTop: 16 },
  priceContainer: { alignItems: "center" },
};
obj2 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj4 = { backgroundColor: LegacyTokens.PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp8;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp5 = useThemeDefault();
      const obj2 = shared;
      const isThemeDarkResult = obj2.isThemeDark(tmp5);
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      const tmp7 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
      if (cResult[0] !== tmp7) {
        const obj3 = { source: AssetRegistryDefault, color: tmp7, size: native.IconSizes.SMALL };
        const Icon = native.Icon;
        const tmp10 = unpackModuleId(Icon, obj3);
        cResult[0] = tmp7;
        cResult[1] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[1];
      }
      return tmp8;
    }
  : () => {
      let tmp6;
      const tmp3 = useThemeDefault();
      const obj = shared;
      const isThemeDarkResult = obj.isThemeDark(tmp3);
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      const obj2 = { source: AssetRegistryDefault, color: tmp6, size: native.IconSizes.SMALL };
      tmp6 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
      const Icon = native.Icon;
      return unpackModuleId(Icon, obj2);
    };
createStyles = createStyles_mod;
let obj5 = { icon: obj6 };
obj6 = { tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_16 = createStyles.createStyles(obj5);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp4 = closure_16();
      if (cResult[0] !== tmp4.icon) {
        const obj2 = { source: AssetRegistryDefault2, style: tmp4.icon, size: native.IconSizes.SMALL };
        const Icon = native.Icon;
        const tmp8 = unpackModuleId(Icon, obj2);
        cResult[0] = tmp4.icon;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      let tmp;
      const obj = { source: AssetRegistryDefault2, style: tmp.icon, size: native.IconSizes.SMALL };
      tmp = closure_16();
      const Icon = native.Icon;
      return unpackModuleId(Icon, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (text) => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      text = text.text;
      if (cResult[0] !== text) {
        const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: text };
        const tmp6 = unpackModuleId(Text_Text.Text, obj2);
        cResult[0] = text;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (children) =>
      unpackModuleId(Text_Text.Text, {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: children.text,
      });
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_129_0;
      let column1;
      let column1AccessibilityLabel;
      let column2;
      let column2AccessibilityLabel;
      let disableAccessibility;
      let disableHighlightColumn2;
      let formatToPlainStringResult;
      let formatToPlainStringResult1;
      let highlightColumn1;
      let items;
      let items2;
      let label;
      let obj7;
      let rowName;
      let rowNumber;
      let tmp10;
      let variant;
      let withBottomBorder;
      let withBottomBorderRadius;
      let withTopBorderRadius;
      const obj = react2;
      const cResult = obj.c(51);
      ({
        label,
        column1,
        column2,
        withBottomBorder,
        withTopBorderRadius,
        withBottomBorderRadius,
        highlightColumn1,
        disableHighlightColumn2,
        variant,
        disableAccessibility,
        rowName,
        column1AccessibilityLabel,
        column2AccessibilityLabel,
        rowNumber,
      } = arg0);
      let bottomBorder = undefined === withBottomBorder || withBottomBorder;
      let str = "default";
      if (undefined !== variant) {
        str = variant;
      }
      const tmp8 = closure_14();
      [tmp10, closure_129_0] = react.useState(0);
      let num = 0;
      _slicedToArray(react.useState(0), 2);
      if (bottomBorder) {
        num = 1;
      }
      let num2 = 0;
      if (undefined !== withTopBorderRadius && withTopBorderRadius) {
        num2 = 2;
      }
      let num3 = 0;
      if (undefined !== withBottomBorderRadius && withBottomBorderRadius) {
        num3 = 2;
      }
      if (bottomBorder) {
        bottomBorder = tmp8.bottomBorder;
      }
      if (cResult[0] === tmp8.row) {
        let tmp11;
        let tmp13;
        if (cResult[1] === bottomBorder) {
          tmp11 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(nativeEvent) {
            return closure_1_0(nativeEvent.nativeEvent.layout.height);
          };
          cResult[3] = fn;
          tmp13 = fn;
        } else {
          tmp13 = cResult[3];
        }
        if (cResult[4] === tmp8.cell) {
          let tmp14;
          if (cResult[5] === tmp8.labelCell) {
            tmp14 = cResult[6];
          }
          if (cResult[7] === label) {
            if (cResult[8] === rowName) {
              if (cResult[9] === tmp14) {
                let tmp16;
                if (cResult[10] === !(undefined !== disableAccessibility && disableAccessibility)) {
                  tmp16 = cResult[11];
                }
                if (cResult[12] === tmp8.cell) {
                  if (cResult[13] === tmp8.dataCell) {
                    if (cResult[14] === (highlightColumn1 && tmp8.themedHighlightedCell)) {
                      if (
                        cResult[15] ===
                        (undefined !== withTopBorderRadius && withTopBorderRadius && tmp8.topBorderRadius)
                      ) {
                        let tmp23;
                        if (
                          cResult[16] ===
                          (undefined !== withBottomBorderRadius && withBottomBorderRadius && tmp8.bottomBorderRadius)
                        ) {
                          tmp23 = cResult[17];
                        }
                        if (cResult[18] === column1AccessibilityLabel) {
                          if (cResult[19] === rowName) {
                            let tmp24;
                            if (cResult[20] === rowNumber) {
                              tmp24 = cResult[21];
                            }
                            if (cResult[22] === column1) {
                              if (cResult[23] === tmp23) {
                                if (cResult[24] === tmp24) {
                                  let tmp29;
                                  let tmp34;
                                  if (cResult[25] === !(undefined !== disableAccessibility && disableAccessibility)) {
                                    tmp29 = cResult[26];
                                  }
                                  const sum = num + num2 + num3;
                                  if (cResult[27] === sum) {
                                    if (cResult[28] === column2) {
                                      if (cResult[29] === column2AccessibilityLabel) {
                                        if (
                                          cResult[30] === (undefined !== disableAccessibility && disableAccessibility)
                                        ) {
                                          if (
                                            cResult[31] ===
                                            (undefined !== disableHighlightColumn2 && disableHighlightColumn2)
                                          ) {
                                            if (cResult[32] === highlightColumn1) {
                                              if (cResult[33] === tmp10) {
                                                if (cResult[34] === rowName) {
                                                  if (cResult[35] === rowNumber) {
                                                    if (cResult[36] === tmp8.bottomBorderRadius) {
                                                      if (cResult[37] === tmp8.cell) {
                                                        if (cResult[38] === tmp8.dataCell) {
                                                          if (
                                                            cResult[39] === tmp8.nitroHomeHightlightedBorderLeftRight
                                                          ) {
                                                            if (cResult[40] === tmp8.themedHighlightedCell) {
                                                              if (cResult[41] === tmp8.topBorderRadius) {
                                                                if (cResult[42] === str) {
                                                                  if (
                                                                    cResult[43] ===
                                                                    (undefined !== withBottomBorderRadius &&
                                                                      withBottomBorderRadius)
                                                                  ) {
                                                                    if (
                                                                      cResult[44] ===
                                                                      (undefined !== withTopBorderRadius &&
                                                                        withTopBorderRadius)
                                                                    ) {
                                                                      tmp34 = cResult[45];
                                                                    }
                                                                    if (cResult[46] === tmp16) {
                                                                      if (cResult[47] === tmp29) {
                                                                        if (cResult[48] === tmp34) {
                                                                          let tmp52;
                                                                          if (cResult[49] === tmp11) {
                                                                            tmp52 = cResult[50];
                                                                          }
                                                                          return tmp52;
                                                                        }
                                                                      }
                                                                    }
                                                                    const obj2 = {
                                                                      style: tmp11,
                                                                      onLayout: tmp13,
                                                                      children: items,
                                                                    };
                                                                    items = [tmp16, tmp29, tmp34];
                                                                    const tmp55 = closure_12(View, obj2);
                                                                    cResult[46] = tmp16;
                                                                    cResult[47] = tmp29;
                                                                    cResult[48] = tmp34;
                                                                    cResult[49] = tmp11;
                                                                    cResult[50] = tmp55;
                                                                    tmp52 = tmp55;
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
                                  if ("nitro_home" === str) {
                                    if (!highlightColumn1) {
                                      let obj5;
                                      if (!(undefined !== disableHighlightColumn2 && disableHighlightColumn2)) {
                                        const items1 = [, , , , ,];
                                        const tmp37 =
                                          undefined !== withTopBorderRadius &&
                                          withTopBorderRadius &&
                                          tmp8.topBorderRadius;
                                        items1[0] = tmp37;
                                        let tmp38 = tmp4;
                                        if (tmp38) {
                                          tmp38 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
                                          const obj3 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
                                        }
                                        items1[1] = tmp38;
                                        items1[2] =
                                          undefined !== withBottomBorderRadius &&
                                          withBottomBorderRadius &&
                                          tmp8.bottomBorderRadius;
                                        let tmp40 = tmp5;
                                        if (tmp40) {
                                          tmp40 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
                                          const obj4 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
                                        }
                                        obj5 = {
                                          style: items1,
                                          accessibilityLabel: formatToPlainStringResult,
                                          accessible: !(undefined !== disableAccessibility && disableAccessibility),
                                          children: unpackModuleId(LinearGradientDefault, obj7),
                                        };
                                        items1[3] = tmp40;
                                        items1[4] = tmp8.nitroHomeHightlightedBorderLeftRight;
                                        items1[5] = { overflow: "hidden" };
                                        formatToPlainStringResult = undefined;
                                        if (null != column2AccessibilityLabel) {
                                          const intl3 = intl32.intl;
                                          const stringResult = intl3.string(intl32.t.lG6a5x);
                                          const intl4 = intl32.intl;
                                          const obj6 = {
                                            accessibilityLabel: column2AccessibilityLabel,
                                            rowNumber,
                                            rowName,
                                            columnNumber: 2,
                                            columnName: stringResult,
                                          };
                                          formatToPlainStringResult = intl4.formatToPlainString(intl32.t.EZjXN3, obj6);
                                        }
                                        obj7 = {
                                          style: items2,
                                          start: null,
                                          end: null,
                                          colors: [
                                            "rgba(133, 71, 198, 0.10)",
                                            "rgba(184, 69, 193, 0.10)",
                                            "rgba(171, 93, 138, 0.10)",
                                          ],
                                          children: column2,
                                        };
                                        items2 = [{ height: tmp10 - sum }, tmp8.dataCell];
                                        const obj8 = { height: tmp10 - sum };
                                        ({ START: obj9.start, END: obj9.end } = HorizontalGradient);
                                      }
                                      const tmp35Result = unpackModuleId(tmp36, obj5);
                                      cResult[27] = sum;
                                      cResult[28] = column2;
                                      cResult[29] = column2AccessibilityLabel;
                                      cResult[30] = undefined !== disableAccessibility && disableAccessibility;
                                      cResult[31] = undefined !== disableHighlightColumn2 && disableHighlightColumn2;
                                      cResult[32] = highlightColumn1;
                                      cResult[33] = tmp10;
                                      cResult[34] = rowName;
                                      cResult[35] = rowNumber;
                                      cResult[36] = tmp8.bottomBorderRadius;
                                      cResult[37] = tmp8.cell;
                                      cResult[38] = tmp8.dataCell;
                                      cResult[39] = tmp8.nitroHomeHightlightedBorderLeftRight;
                                      cResult[40] = tmp8.themedHighlightedCell;
                                      cResult[41] = tmp8.topBorderRadius;
                                      cResult[42] = str;
                                      cResult[43] = undefined !== withBottomBorderRadius && withBottomBorderRadius;
                                      cResult[44] = undefined !== withTopBorderRadius && withTopBorderRadius;
                                      cResult[45] = tmp35Result;
                                      tmp34 = tmp35Result;
                                    }
                                  }
                                  const items3 = [, , , ,];
                                  ({ cell: arr6[0], dataCell: arr6[1] } = tmp8);
                                  items3[2] =
                                    !highlightColumn1 &&
                                    !(undefined !== disableHighlightColumn2 && disableHighlightColumn2) &&
                                    tmp8.themedHighlightedCell;
                                  items3[3] =
                                    undefined !== withTopBorderRadius && withTopBorderRadius && tmp8.topBorderRadius;
                                  const obj10 = {
                                    style: items3,
                                    accessibilityLabel: formatToPlainStringResult1,
                                    accessible: !(undefined !== disableAccessibility && disableAccessibility),
                                    children: column2,
                                  };
                                  const tmp47 =
                                    undefined !== withBottomBorderRadius &&
                                    withBottomBorderRadius &&
                                    tmp8.bottomBorderRadius;
                                  items3[4] = tmp47;
                                  formatToPlainStringResult1 = undefined;
                                  if (null != column2AccessibilityLabel) {
                                    const intl5 = intl32.intl;
                                    const stringResult1 = intl5.string(intl32.t.lG6a5x);
                                    const intl6 = intl32.intl;
                                    const obj11 = {
                                      accessibilityLabel: column2AccessibilityLabel,
                                      rowNumber,
                                      rowName,
                                      columnNumber: 2,
                                      columnName: stringResult1,
                                    };
                                    formatToPlainStringResult1 = intl6.formatToPlainString(intl32.t.EZjXN3, obj11);
                                  }
                                  obj5 = obj10;
                                }
                              }
                            }
                            const obj12 = {
                              style: tmp23,
                              accessibilityLabel: tmp24,
                              accessible: !(undefined !== disableAccessibility && disableAccessibility),
                              children: column1,
                            };
                            const tmp32 = unpackModuleId(View, obj12);
                            cResult[22] = column1;
                            cResult[23] = tmp23;
                            cResult[24] = tmp24;
                            cResult[25] = !(undefined !== disableAccessibility && disableAccessibility);
                            cResult[26] = tmp32;
                            tmp29 = tmp32;
                          }
                        }
                        let formatToPlainStringResult2;
                        if (null != column1AccessibilityLabel) {
                          const intl = intl32.intl;
                          const stringResult2 = intl.string(intl32.t["t9uG/o"]);
                          const intl2 = intl32.intl;
                          const obj13 = {
                            accessibilityLabel: column1AccessibilityLabel,
                            rowNumber,
                            rowName,
                            columnNumber: 1,
                            columnName: stringResult2,
                          };
                          formatToPlainStringResult2 = intl2.formatToPlainString(intl32.t.EZjXN3, obj13);
                        }
                        cResult[18] = column1AccessibilityLabel;
                        cResult[19] = rowName;
                        cResult[20] = rowNumber;
                        cResult[21] = formatToPlainStringResult2;
                        tmp24 = formatToPlainStringResult2;
                      }
                    }
                  }
                }
                const items4 = [, , , ,];
                ({ cell: arr3[0], dataCell: arr3[1] } = tmp8);
                items4[2] = highlightColumn1 && tmp8.themedHighlightedCell;
                items4[3] = undefined !== withTopBorderRadius && withTopBorderRadius && tmp8.topBorderRadius;
                items4[4] = undefined !== withBottomBorderRadius && withBottomBorderRadius && tmp8.bottomBorderRadius;
                cResult[12] = tmp8.cell;
                cResult[13] = tmp8.dataCell;
                cResult[14] = highlightColumn1 && tmp8.themedHighlightedCell;
                cResult[15] = undefined !== withTopBorderRadius && withTopBorderRadius && tmp8.topBorderRadius;
                cResult[16] = undefined !== withBottomBorderRadius && withBottomBorderRadius && tmp8.bottomBorderRadius;
                cResult[17] = items4;
                tmp23 = items4;
              }
            }
          }
          const obj25 = {
            style: tmp14,
            accessible: !(undefined !== disableAccessibility && disableAccessibility),
            accessibilityLabel: rowName,
            children: label,
          };
          const tmp19 = unpackModuleId(View, obj25);
          cResult[7] = label;
          cResult[8] = rowName;
          cResult[9] = tmp14;
          cResult[10] = !(undefined !== disableAccessibility && disableAccessibility);
          cResult[11] = tmp19;
          tmp16 = tmp19;
        }
        const items5 = [,];
        ({ labelCell: arr2[0], cell: arr2[1] } = tmp8);
        cResult[4] = tmp8.cell;
        cResult[5] = tmp8.labelCell;
        cResult[6] = items5;
        tmp14 = items5;
      }
      const items6 = [tmp8.row, bottomBorder];
      cResult[0] = tmp8.row;
      cResult[1] = bottomBorder;
      cResult[2] = items6;
      tmp11 = items6;
    }
  : (withTopBorderRadius) => {
      let closure_0;
      let column1;
      let column1AccessibilityLabel;
      let column2;
      let column2AccessibilityLabel;
      let disableHighlightColumn2;
      let first;
      let formatToPlainStringResult;
      let formatToPlainStringResult1;
      let formatToPlainStringResult2;
      let highlightColumn1;
      let items1;
      let items5;
      let label;
      let obj10;
      let rowName;
      let rowNumber;
      let withBottomBorder;
      ({ column2, withBottomBorder } = withTopBorderRadius);
      ({ label, column1 } = withTopBorderRadius);
      if (withBottomBorder === undefined) {
        withBottomBorder = true;
      }
      let flag = withTopBorderRadius.withTopBorderRadius;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = withTopBorderRadius.withBottomBorderRadius;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({ highlightColumn1, disableHighlightColumn2 } = withTopBorderRadius);
      if (disableHighlightColumn2 === undefined) {
        disableHighlightColumn2 = false;
      }
      let str = withTopBorderRadius.variant;
      if (str === undefined) {
        str = "default";
      }
      let flag3 = withTopBorderRadius.disableAccessibility;
      if (flag3 === undefined) {
        flag3 = false;
      }
      ({ rowName, column1AccessibilityLabel, column2AccessibilityLabel, rowNumber } = withTopBorderRadius);
      closure_0 = undefined;
      const tmp = closure_14();
      [first, closure_0] = react.useState(0);
      let num = 0;
      if (withBottomBorder) {
        num = 1;
      }
      let num2 = 0;
      if (flag) {
        num2 = 2;
      }
      let num3 = 0;
      if (flag2) {
        num3 = 2;
      }
      const items = [tmp.row];
      if (withBottomBorder) {
        withBottomBorder = tmp.bottomBorder;
      }
      const obj = {
        style: items,
        onLayout(nativeEvent) {
          return closure_0(nativeEvent.nativeEvent.layout.height);
        },
        children: null,
      };
      items[1] = withBottomBorder;
      const obj2 = { style: items1, accessible: !flag3, accessibilityLabel: rowName, children: label };
      items1 = [,];
      ({ labelCell: arr2[0], cell: arr2[1] } = tmp);
      const items2 = [unpackModuleId(View, obj2), ,];
      const items3 = [, , , ,];
      ({ cell: arr4[0], dataCell: arr4[1] } = tmp);
      items3[2] = highlightColumn1 && tmp.themedHighlightedCell;
      items3[3] = flag && tmp.topBorderRadius;
      const obj3 = {
        style: items3,
        accessibilityLabel: formatToPlainStringResult,
        accessible: !flag3,
        children: column1,
      };
      const tmp7 = flag2 && tmp.bottomBorderRadius;
      items3[4] = tmp7;
      formatToPlainStringResult = undefined;
      if (null != column1AccessibilityLabel) {
        const intl = intl32.intl;
        const stringResult = intl.string(intl32.t["t9uG/o"]);
        const intl2 = intl32.intl;
        const obj4 = {
          accessibilityLabel: column1AccessibilityLabel,
          rowNumber,
          rowName,
          columnNumber: 1,
          columnName: stringResult,
        };
        formatToPlainStringResult = intl2.formatToPlainString(intl32.t.EZjXN3, obj4);
      }
      items2[1] = unpackModuleId(View, obj3);
      if ("nitro_home" === str) {
        if (!highlightColumn1) {
          let obj7;
          if (!disableHighlightColumn2) {
            const items4 = [, , , , ,];
            const tmp12 = flag && tmp.topBorderRadius;
            items4[0] = tmp12;
            let tmp13 = flag;
            if (tmp13) {
              tmp13 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
              const obj5 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
            }
            items4[1] = tmp13;
            items4[2] = flag2 && tmp.bottomBorderRadius;
            let tmp15 = flag2;
            if (tmp15) {
              tmp15 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
              const obj6 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
            }
            obj7 = {
              style: items4,
              accessibilityLabel: formatToPlainStringResult1,
              accessible: !flag3,
              children: unpackModuleId(LinearGradientDefault, obj10),
            };
            items4[3] = tmp15;
            items4[4] = tmp.nitroHomeHightlightedBorderLeftRight;
            items4[5] = { overflow: "hidden" };
            formatToPlainStringResult1 = undefined;
            if (null != column2AccessibilityLabel) {
              const intl3 = intl32.intl;
              const stringResult1 = intl3.string(intl32.t.lG6a5x);
              const intl4 = intl32.intl;
              const obj8 = {
                accessibilityLabel: column2AccessibilityLabel,
                rowNumber,
                rowName,
                columnNumber: 2,
                columnName: stringResult1,
              };
              formatToPlainStringResult1 = intl4.formatToPlainString(intl32.t.EZjXN3, obj8);
            }
            const sum = num + num2 + num3;
            obj10 = {
              style: items5,
              start: null,
              end: null,
              colors: ["rgba(133, 71, 198, 0.10)", "rgba(184, 69, 193, 0.10)", "rgba(171, 93, 138, 0.10)"],
              children: column2,
            };
            items5 = [{ height: first - sum }, tmp.dataCell];
            const obj11 = { height: first - sum };
            ({ START: obj9.start, END: obj9.end } = HorizontalGradient);
          }
          items2[2] = unpackModuleId(View, obj7);
          obj.children = items2;
          return closure_12(View, obj);
        }
      }
      const items6 = [, , , ,];
      ({ cell: arr7[0], dataCell: arr7[1] } = tmp);
      items6[2] = !highlightColumn1 && !disableHighlightColumn2 && tmp.themedHighlightedCell;
      if (flag) {
        flag = tmp.topBorderRadius;
      }
      items6[3] = flag;
      if (flag2) {
        flag2 = tmp.bottomBorderRadius;
      }
      const obj12 = {
        style: items6,
        accessibilityLabel: formatToPlainStringResult2,
        accessible: !flag3,
        children: column2,
      };
      items6[4] = flag2;
      formatToPlainStringResult2 = undefined;
      if (null != column2AccessibilityLabel) {
        const intl5 = intl32.intl;
        const stringResult2 = intl5.string(intl32.t.lG6a5x);
        const intl6 = intl32.intl;
        const obj23 = {
          accessibilityLabel: column2AccessibilityLabel,
          rowNumber,
          rowName,
          columnNumber: 2,
          columnName: stringResult2,
        };
        formatToPlainStringResult2 = intl6.formatToPlainString(intl32.t.EZjXN3, obj23);
      }
      obj7 = obj12;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let disableHighlightColumn2;
      let first;
      let highlightColumn1;
      let highlightNitroBasic;
      let intl11;
      let intl15;
      let intl19;
      let intl20;
      let intl21;
      let intl22;
      let intl23;
      let intl24;
      let intl25;
      let intl26;
      let intl27;
      let intl28;
      let intl29;
      let intl3;
      let intl30;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let isFractionalOnly;
      let isPremiumGroup;
      let items;
      let obj12;
      let obj16;
      let obj18;
      let obj20;
      let obj4;
      let obj8;
      let premiumGroupRole;
      let style;
      let titleOverride;
      let tmp16;
      let tmp19;
      let tmp20;
      let variant;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(96);
      ({ style, highlightNitroBasic, variant, titleOverride, isFractionalOnly, isPremiumGroup, premiumGroupRole } =
        arg0);
      _require = tmp4;
      let str = "default";
      if (undefined !== variant) {
        str = variant;
      }
      dependencyMap = tmp5;
      const tmp6 = closure_14();
      const tmp8 = str(4797)();
      const tmp9 = str(8898)(closure_10.PREMIUM_MONTH_TIER_0);
      const tmp10 = str(8898)(closure_10.PREMIUM_MONTH_TIER_2);
      let priceString;
      if (tmp9 != null) {
        priceString = tmp9.priceString;
      }
      if (priceString == null) {
        priceString = closure_8;
      }
      let priceString1;
      if (tmp10 != null) {
        priceString1 = tmp10.priceString;
      }
      if (priceString1 == null) {
        priceString1 = closure_8;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = tmp(4534);
        const maxFileSizeForPremiumType = tmpResult.getMaxFileSizeForPremiumType(closure_9.TIER_0);
        cResult[0] = maxFileSizeForPremiumType;
        first = maxFileSizeForPremiumType;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult4 = tmp(4534);
        const maxFileSizeForPremiumType1 = tmpResult4.getMaxFileSizeForPremiumType(closure_9.TIER_2);
        cResult[1] = maxFileSizeForPremiumType1;
        tmp16 = maxFileSizeForPremiumType1;
      } else {
        tmp16 = cResult[1];
      }
      if (cResult[2] !== tmp6.logo) {
        size = { style: tmp6.logo, width: 48, height: 9 };
        const tmp22 = closure_11(str(13303), size);
        const size1 = { style: tmp6.logo, width: 50, height: 9 };
        const tmp23 = closure_11(str(13304), size1);
        cResult[2] = tmp6.logo;
        cResult[3] = tmp22;
        cResult[4] = tmp23;
        tmp20 = tmp23;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[3];
        tmp20 = cResult[4];
      }
      if (cResult[5] === tmp19) {
        if (cResult[6] === tmp20) {
          let tmp25;
          let tmp26;
          let tmp7Result;
          if (cResult[7] === !(undefined !== isPremiumGroup && isPremiumGroup)) {
            tmp25 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t["t9uG/o"]);
            cResult[9] = stringResult;
            tmp26 = stringResult;
          } else {
            tmp26 = cResult[9];
          }
          const tmpResult5 = tmp(4735);
          if (tmpResult5.isThemeDark(tmp8)) {
            tmp7Result = tmp7(13305);
          } else {
            tmp7Result = tmp7(13306);
          }
          if (cResult[10] === tmp6.logo) {
            let tmp29;
            let tmp32;
            let tmp7Result2;
            if (cResult[11] === tmp7Result) {
              tmp29 = cResult[12];
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(tmp(1126).t.lG6a5x);
              cResult[13] = stringResult1;
              tmp32 = stringResult1;
            } else {
              tmp32 = cResult[13];
            }
            const tmpResult6 = tmp(4735);
            if (tmpResult6.isThemeDark(tmp8)) {
              tmp7Result2 = tmp7(13307);
            } else {
              tmp7Result2 = tmp7(13308);
            }
            if (cResult[14] === tmp6.logo) {
              let tmp35;
              if (cResult[15] === tmp7Result2) {
                tmp35 = cResult[16];
              }
              if (cResult[17] === (undefined !== isPremiumGroup && isPremiumGroup)) {
                if (cResult[18] === tmp29) {
                  let tmp38;
                  let tmp40;
                  let tmp39;
                  let tmp45;
                  if (cResult[19] === tmp35) {
                    tmp38 = cResult[20];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj2 = { text: intl3.string(tmp(1126).t.LkKGZ2) };
                    intl3 = tmp(1126).intl;
                    const tmp43 = closure_11(closure_18, obj2);
                    const intl4 = tmp(1126).intl;
                    const stringResult2 = intl4.string(tmp(1126).t.LkKGZ2);
                    cResult[21] = tmp43;
                    cResult[22] = stringResult2;
                    tmp40 = stringResult2;
                    tmp39 = tmp43;
                  } else {
                    tmp39 = cResult[21];
                    tmp40 = cResult[22];
                  }
                  const priceContainer = tmp6.priceContainer;
                  if (cResult[23] !== priceString) {
                    let tmp46;
                    const _Symbol4 = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      const fn = function $(text) {
                        const obj = { text };
                        return closure_1_11(closure_1_18, obj, text);
                      };
                      cResult[25] = fn;
                      tmp46 = fn;
                    } else {
                      tmp46 = cResult[25];
                    }
                    const parts = priceString.split(/ (?=\()/g);
                    const mapped = parts.map(tmp46);
                    cResult[23] = priceString;
                    cResult[24] = mapped;
                    tmp45 = mapped;
                  } else {
                    tmp45 = cResult[24];
                  }
                  if (cResult[26] === tmp6.priceContainer) {
                    let tmp48;
                    let tmp52;
                    if (cResult[27] === tmp45) {
                      tmp48 = cResult[28];
                    }
                    const priceContainer2 = tmp6.priceContainer;
                    if (cResult[29] !== priceString1) {
                      let tmp53;
                      const _Symbol5 = Symbol;
                      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                        function le(text) {
                          const obj = { text };
                          return closure_1_11(closure_1_18, obj, text);
                        }
                        cResult[31] = le;
                        tmp53 = le;
                      } else {
                        tmp53 = cResult[31];
                      }
                      const parts1 = priceString1.split(/ (?=\()/g);
                      const mapped1 = parts1.map(tmp53);
                      cResult[29] = priceString1;
                      cResult[30] = mapped1;
                      tmp52 = mapped1;
                    } else {
                      tmp52 = cResult[30];
                    }
                    if (cResult[32] === tmp6.priceContainer) {
                      let tmp55;
                      if (cResult[33] === tmp52) {
                        tmp55 = cResult[34];
                      }
                      if (cResult[35] === tmp48) {
                        if (cResult[36] === tmp55) {
                          if (cResult[37] === priceString) {
                            let tmp59;
                            let tmp60;
                            let tmp66;
                            let tmp65;
                            let tmp64;
                            let tmp72;
                            let tmp79;
                            let tmp78;
                            let tmp77;
                            let tmp76;
                            let tmp75;
                            let tmp74;
                            let tmp89;
                            let tmp95;
                            let tmp94;
                            let tmp93;
                            let tmp92;
                            let tmp91;
                            let tmp90;
                            let tmp107;
                            let tmp108;
                            let tmp113;
                            let tmp119;
                            let tmp118;
                            if (cResult[38] === priceString1) {
                              tmp59 = cResult[39];
                            }
                            const _Symbol6 = Symbol;
                            if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj3 = {
                                label: closure_11(closure_18, obj4),
                                rowName: intl6.string(tmp(1126).t.ORlUdL),
                                column1: closure_11(closure_15, {}),
                                column1AccessibilityLabel: intl7.string(tmp(1126).t["tq+6t/"]),
                                column2: closure_11(closure_15, {}),
                                column2AccessibilityLabel: intl8.string(tmp(1126).t["tq+6t/"]),
                              };
                              obj4 = { text: intl5.string(tmp(1126).t.ORlUdL) };
                              intl5 = tmp(1126).intl;
                              intl6 = tmp(1126).intl;
                              intl7 = tmp(1126).intl;
                              intl8 = tmp(1126).intl;
                              cResult[40] = obj3;
                              tmp60 = obj3;
                            } else {
                              tmp60 = cResult[40];
                            }
                            const _Symbol7 = Symbol;
                            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj5 = { text: intl9.string(tmp(1126).t["ufhQC+"]) };
                              intl9 = tmp(1126).intl;
                              const tmp69 = closure_11(closure_18, obj5);
                              const intl10 = tmp(1126).intl;
                              const stringResult3 = intl10.string(tmp(1126).t["ufhQC+"]);
                              const obj6 = {
                                variant: "text-md/medium",
                                color: "mobile-text-heading-primary",
                                children: first,
                              };
                              const tmp71 = closure_11(tmp(4892).Text, obj6);
                              cResult[41] = tmp69;
                              cResult[42] = stringResult3;
                              cResult[43] = tmp71;
                              tmp66 = tmp71;
                              tmp65 = stringResult3;
                              tmp64 = tmp69;
                            } else {
                              tmp64 = cResult[41];
                              tmp65 = cResult[42];
                              tmp66 = cResult[43];
                            }
                            const _Symbol8 = Symbol;
                            if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj7 = {
                                label: tmp64,
                                rowName: tmp65,
                                column1: tmp66,
                                column1AccessibilityLabel: first,
                                column2: closure_11(tmp(4892).Text, obj8),
                                column2AccessibilityLabel: tmp16,
                              };
                              obj8 = {
                                variant: "text-md/medium",
                                color: "mobile-text-heading-primary",
                                children: tmp16,
                              };
                              cResult[44] = obj7;
                              tmp72 = obj7;
                            } else {
                              tmp72 = cResult[44];
                            }
                            const _Symbol9 = Symbol;
                            if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj9 = { text: intl11.string(tmp(1126).t["svn/YX"]) };
                              intl11 = tmp(1126).intl;
                              const tmp82 = closure_11(closure_18, obj9);
                              const intl12 = tmp(1126).intl;
                              const stringResult4 = intl12.string(tmp(1126).t["svn/YX"]);
                              const tmp85 = closure_11(closure_15, {});
                              const intl13 = tmp(1126).intl;
                              const stringResult5 = intl13.string(tmp(1126).t["tq+6t/"]);
                              const tmp87 = closure_11(closure_15, {});
                              const intl14 = tmp(1126).intl;
                              const stringResult6 = intl14.string(tmp(1126).t["tq+6t/"]);
                              cResult[45] = tmp82;
                              cResult[46] = stringResult4;
                              cResult[47] = tmp85;
                              cResult[48] = stringResult5;
                              cResult[49] = tmp87;
                              cResult[50] = stringResult6;
                              tmp79 = stringResult6;
                              tmp78 = tmp87;
                              tmp77 = stringResult5;
                              tmp76 = tmp85;
                              tmp75 = stringResult4;
                              tmp74 = tmp82;
                            } else {
                              tmp74 = cResult[45];
                              tmp75 = cResult[46];
                              tmp76 = cResult[47];
                              tmp77 = cResult[48];
                              tmp78 = cResult[49];
                              tmp79 = cResult[50];
                            }
                            if (cResult[51] !== isFractionalOnly) {
                              const obj10 = {
                                label: tmp74,
                                rowName: tmp75,
                                column1: tmp76,
                                column1AccessibilityLabel: tmp77,
                                column2: tmp78,
                                column2AccessibilityLabel: tmp79,
                                hidden: isFractionalOnly,
                              };
                              cResult[51] = isFractionalOnly;
                              cResult[52] = obj10;
                              tmp89 = obj10;
                            } else {
                              tmp89 = cResult[52];
                            }
                            const _Symbol10 = Symbol;
                            if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj11 = { text: intl15.formatToPlainString(tmp(1126).t.DbkNFj, obj12) };
                              intl15 = tmp(1126).intl;
                              obj12 = { numBoosts };
                              const tmp99 = closure_11(closure_18, obj11);
                              const intl16 = tmp(1126).intl;
                              const obj13 = { numBoosts };
                              const formatToPlainStringResult = intl16.formatToPlainString(tmp(1126).t.DbkNFj, obj13);
                              const tmp102 = closure_11(closure_17, {});
                              const intl17 = tmp(1126).intl;
                              const stringResult7 = intl17.string(tmp(1126).t.l4qZrp);
                              const tmp105 = closure_11(closure_15, {});
                              const intl18 = tmp(1126).intl;
                              const stringResult8 = intl18.string(tmp(1126).t["tq+6t/"]);
                              cResult[53] = tmp99;
                              cResult[54] = formatToPlainStringResult;
                              cResult[55] = tmp102;
                              cResult[56] = stringResult7;
                              cResult[57] = tmp105;
                              cResult[58] = stringResult8;
                              tmp95 = stringResult8;
                              tmp94 = tmp105;
                              tmp93 = stringResult7;
                              tmp92 = tmp102;
                              tmp91 = formatToPlainStringResult;
                              tmp90 = tmp99;
                            } else {
                              tmp90 = cResult[53];
                              tmp91 = cResult[54];
                              tmp92 = cResult[55];
                              tmp93 = cResult[56];
                              tmp94 = cResult[57];
                              tmp95 = cResult[58];
                            }
                            if (cResult[59] !== isFractionalOnly) {
                              const obj14 = {
                                label: tmp90,
                                rowName: tmp91,
                                column1: tmp92,
                                column1AccessibilityLabel: tmp93,
                                column2: tmp94,
                                column2AccessibilityLabel: tmp95,
                                hidden: isFractionalOnly,
                              };
                              cResult[59] = isFractionalOnly;
                              cResult[60] = obj14;
                              tmp107 = obj14;
                            } else {
                              tmp107 = cResult[60];
                            }
                            const _Symbol11 = Symbol;
                            if (cResult[61] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj15 = {
                                label: closure_11(closure_18, obj16),
                                rowName: intl20.string(tmp(1126).t["Gv/rQ6"]),
                                column1: closure_11(closure_17, {}),
                                column1AccessibilityLabel: intl21.string(tmp(1126).t.l4qZrp),
                                column2: closure_11(closure_15, {}),
                                column2AccessibilityLabel: intl22.string(tmp(1126).t["tq+6t/"]),
                              };
                              obj16 = { text: intl19.string(tmp(1126).t["Gv/rQ6"]) };
                              intl19 = tmp(1126).intl;
                              intl20 = tmp(1126).intl;
                              intl21 = tmp(1126).intl;
                              intl22 = tmp(1126).intl;
                              cResult[61] = obj15;
                              tmp108 = obj15;
                            } else {
                              tmp108 = cResult[61];
                            }
                            const _Symbol12 = Symbol;
                            if (cResult[62] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj17 = {
                                label: closure_11(closure_18, obj18),
                                rowName: intl24.string(tmp(1126).t.myyAEr),
                                column1: closure_11(closure_17, {}),
                                column1AccessibilityLabel: intl25.string(tmp(1126).t.l4qZrp),
                                column2: closure_11(closure_15, {}),
                                column2AccessibilityLabel: intl26.string(tmp(1126).t["tq+6t/"]),
                              };
                              obj18 = { text: intl23.string(tmp(1126).t.myyAEr) };
                              intl23 = tmp(1126).intl;
                              intl24 = tmp(1126).intl;
                              intl25 = tmp(1126).intl;
                              intl26 = tmp(1126).intl;
                              cResult[62] = obj17;
                              tmp113 = obj17;
                            } else {
                              tmp113 = cResult[62];
                            }
                            const _Symbol13 = Symbol;
                            if (cResult[63] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj19 = {
                                label: closure_11(closure_18, obj20),
                                rowName: intl28.string(tmp(1126).t.S6yQr8),
                                column1: closure_11(closure_17, {}),
                                column1AccessibilityLabel: intl29.string(tmp(1126).t.l4qZrp),
                                column2: closure_11(closure_15, {}),
                                column2AccessibilityLabel: intl30.string(tmp(1126).t["tq+6t/"]),
                              };
                              obj20 = { text: intl27.string(tmp(1126).t.S6yQr8) };
                              intl27 = tmp(1126).intl;
                              intl28 = tmp(1126).intl;
                              intl29 = tmp(1126).intl;
                              intl30 = tmp(1126).intl;
                              const obj21 = {
                                withBottomBorder: false,
                                withBottomBorderRadius: true,
                                disableAccessibility: true,
                              };
                              cResult[63] = obj19;
                              cResult[64] = obj21;
                              tmp119 = obj21;
                              tmp118 = obj19;
                            } else {
                              tmp118 = cResult[63];
                              tmp119 = cResult[64];
                            }
                            if (cResult[65] === tmp38) {
                              if (cResult[66] === tmp59) {
                                if (cResult[67] === tmp89) {
                                  if (cResult[68] === tmp107) {
                                    let arr3;
                                    if (cResult[69] === tmp25) {
                                      arr3 = cResult[70];
                                    }
                                    if (cResult[71] === style) {
                                      let tmp125;
                                      let tmp126;
                                      if (cResult[72] === tmp6.container) {
                                        tmp125 = cResult[73];
                                      }
                                      if (cResult[74] !== titleOverride) {
                                        let stringResult9 = titleOverride;
                                        if (titleOverride == null) {
                                          const intl31 = tmp(1126).intl;
                                          stringResult9 = intl31.string(tmp(1126).t.vLz3Zs);
                                        }
                                        cResult[74] = titleOverride;
                                        cResult[75] = stringResult9;
                                        tmp126 = stringResult9;
                                      } else {
                                        tmp126 = cResult[75];
                                      }
                                      if (cResult[76] === tmp6.headerText) {
                                        let tmp128;
                                        if (cResult[77] === tmp126) {
                                          tmp128 = cResult[78];
                                        }
                                        if (cResult[79] === (undefined !== isPremiumGroup && isPremiumGroup)) {
                                          if (cResult[80] === premiumGroupRole) {
                                            let tmp131;
                                            if (cResult[81] === tmp6.premiumGroupCard) {
                                              tmp131 = cResult[82];
                                            }
                                            if (cResult[83] === arr3) {
                                              if (
                                                cResult[84] ===
                                                (undefined !== highlightNitroBasic && highlightNitroBasic)
                                              ) {
                                                if (cResult[85] === (undefined !== isPremiumGroup && isPremiumGroup)) {
                                                  let tmp135;
                                                  if (cResult[86] === str) {
                                                    tmp135 = cResult[87];
                                                  }
                                                  if (cResult[88] === tmp6.table) {
                                                    let tmp137;
                                                    if (cResult[89] === tmp135) {
                                                      tmp137 = cResult[90];
                                                    }
                                                    if (cResult[91] === tmp125) {
                                                      if (cResult[92] === tmp128) {
                                                        if (cResult[93] === tmp131) {
                                                          let tmp141;
                                                          if (cResult[94] === tmp137) {
                                                            tmp141 = cResult[95];
                                                          }
                                                          return tmp141;
                                                        }
                                                      }
                                                    }
                                                    const obj22 = { style: tmp125, children: items };
                                                    items = [tmp128, tmp131, tmp137];
                                                    const tmp144 = closure_12(View, obj22);
                                                    cResult[91] = tmp125;
                                                    cResult[92] = tmp128;
                                                    cResult[93] = tmp131;
                                                    cResult[94] = tmp137;
                                                    cResult[95] = tmp144;
                                                    tmp141 = tmp144;
                                                  }
                                                  const obj23 = { style: tmp134, children: tmp135 };
                                                  const tmp140 = closure_11(View, obj23);
                                                  cResult[88] = tmp6.table;
                                                  cResult[89] = tmp135;
                                                  cResult[90] = tmp140;
                                                  tmp137 = tmp140;
                                                }
                                              }
                                            }
                                            const mapped2 = arr3.map((item, rowNumber) => {
                                              const obj = {
                                                highlightColumn1,
                                                disableHighlightColumn2,
                                                variant: str,
                                                rowNumber,
                                              };
                                              const merged = Object.assign(item);
                                              return unpackModuleId(closure_19, obj, rowNumber);
                                            });
                                            cResult[83] = arr3;
                                            cResult[84] = undefined !== highlightNitroBasic && highlightNitroBasic;
                                            cResult[85] = undefined !== isPremiumGroup && isPremiumGroup;
                                            cResult[86] = str;
                                            cResult[87] = mapped2;
                                            tmp135 = mapped2;
                                          }
                                        }
                                        let tmp132 = tmp5 && null != premiumGroupRole;
                                        if (tmp132) {
                                          const obj24 = { style: tmp6.premiumGroupCard, premiumGroupRole };
                                          tmp132 = closure_11(tmp7(13309), obj24);
                                        }
                                        cResult[79] = undefined !== isPremiumGroup && isPremiumGroup;
                                        cResult[80] = premiumGroupRole;
                                        cResult[81] = tmp6.premiumGroupCard;
                                        cResult[82] = tmp132;
                                        tmp131 = tmp132;
                                      }
                                      const obj25 = {
                                        style: tmp6.headerText,
                                        variant: "heading-xl/extrabold",
                                        color: "mobile-text-heading-primary",
                                        accessibilityRole: "header",
                                        children: tmp126,
                                      };
                                      const tmp130 = closure_11(tmp(4892).Text, obj25);
                                      cResult[76] = tmp6.headerText;
                                      cResult[77] = tmp126;
                                      cResult[78] = tmp130;
                                      tmp128 = tmp130;
                                    }
                                    const items1 = [tmp6.container, style];
                                    cResult[71] = style;
                                    cResult[72] = tmp6.container;
                                    cResult[73] = items1;
                                    tmp125 = items1;
                                  }
                                }
                              }
                            }
                            const items2 = [
                              tmp25,
                              tmp38,
                              tmp59,
                              tmp60,
                              tmp72,
                              tmp89,
                              tmp107,
                              tmp108,
                              tmp113,
                              tmp118,
                              tmp119,
                            ];
                            const found = items2.filter((hidden) => null != hidden && !hidden.hidden);
                            cResult[65] = tmp38;
                            cResult[66] = tmp59;
                            cResult[67] = tmp89;
                            cResult[68] = tmp107;
                            cResult[69] = tmp25;
                            cResult[70] = found;
                            arr3 = found;
                          }
                        }
                      }
                      const obj26 = {
                        label: tmp39,
                        rowName: tmp40,
                        column1: tmp48,
                        column1AccessibilityLabel: priceString,
                        column2: tmp55,
                        column2AccessibilityLabel: priceString1,
                      };
                      cResult[35] = tmp48;
                      cResult[36] = tmp55;
                      cResult[37] = priceString;
                      cResult[38] = priceString1;
                      cResult[39] = obj26;
                      tmp59 = obj26;
                    }
                    const obj27 = { style: priceContainer2, children: tmp52 };
                    const tmp58 = closure_11(View, obj27);
                    cResult[32] = tmp6.priceContainer;
                    cResult[33] = tmp52;
                    cResult[34] = tmp58;
                    tmp55 = tmp58;
                  }
                  const obj28 = { style: priceContainer, children: tmp45 };
                  const tmp51 = closure_11(View, obj28);
                  cResult[26] = tmp6.priceContainer;
                  cResult[27] = tmp45;
                  cResult[28] = tmp51;
                  tmp48 = tmp51;
                }
              }
              const obj29 = {
                column1: tmp29,
                column2: tmp35,
                withBottomBorder: false,
                withTopBorderRadius: true,
                disableAccessibility: true,
                hidden: undefined !== isPremiumGroup && isPremiumGroup,
              };
              cResult[17] = undefined !== isPremiumGroup && isPremiumGroup;
              cResult[18] = tmp29;
              cResult[19] = tmp35;
              cResult[20] = obj29;
              tmp38 = obj29;
            }
            const obj30 = { accessible: true, accessibilityLabel: tmp32, style: tmp6.logo, source: tmp7Result2 };
            const tmp37 = closure_11(str(5981), obj30);
            cResult[14] = tmp6.logo;
            cResult[15] = tmp7Result2;
            cResult[16] = tmp37;
            tmp35 = tmp37;
          }
          const obj31 = { accessible: true, accessibilityLabel: tmp26, style: tmp6.logo, source: tmp7Result };
          const tmp31 = closure_11(str(5981), obj31);
          cResult[10] = tmp6.logo;
          cResult[11] = tmp7Result;
          cResult[12] = tmp31;
          tmp29 = tmp31;
        }
      }
      const obj32 = {
        column1: tmp19,
        column2: tmp20,
        withBottomBorder: false,
        disableAccessibility: true,
        hidden: !(undefined !== isPremiumGroup && isPremiumGroup),
      };
      cResult[5] = tmp19;
      cResult[6] = tmp20;
      cResult[7] = !(undefined !== isPremiumGroup && isPremiumGroup);
      cResult[8] = obj32;
      tmp25 = obj32;
    }
  : (highlightNitroBasic) => {
      let intl;
      let intl10;
      let intl11;
      let intl12;
      let intl13;
      let intl14;
      let intl15;
      let intl16;
      let intl17;
      let intl18;
      let intl19;
      let intl2;
      let intl20;
      let intl21;
      let intl22;
      let intl23;
      let intl24;
      let intl25;
      let intl26;
      let intl27;
      let intl28;
      let intl29;
      let intl3;
      let intl30;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let isFractionalOnly;
      let isPremiumGroup;
      let items1;
      let items2;
      let obj10;
      let obj11;
      let obj13;
      let obj15;
      let obj17;
      let obj19;
      let obj20;
      let obj21;
      let obj23;
      let obj25;
      let obj27;
      let obj6;
      let obj9;
      let parts;
      let parts1;
      let size1;
      let titleOverride;
      let tmp2Result4;
      let tmp2Result5;
      let tmp2Result6;
      let flag = highlightNitroBasic.highlightNitroBasic;
      const style = highlightNitroBasic.style;
      if (flag === undefined) {
        flag = false;
      }
      let str = highlightNitroBasic.variant;
      if (str === undefined) {
        str = "default";
      }
      ({ titleOverride, isFractionalOnly, isPremiumGroup } = highlightNitroBasic);
      if (isPremiumGroup === undefined) {
        isPremiumGroup = false;
      }
      const premiumGroupRole = highlightNitroBasic.premiumGroupRole;
      const tmp = closure_14();
      const tmp3 = isPremiumGroup;
      const tmp4 = str(isPremiumGroup[11])();
      const tmp5 = str(isPremiumGroup[19])(closure_10.PREMIUM_MONTH_TIER_0);
      const tmp6 = str(isPremiumGroup[19])(closure_10.PREMIUM_MONTH_TIER_2);
      let priceString;
      if (tmp5 != null) {
        priceString = tmp5.priceString;
      }
      if (priceString == null) {
        priceString = closure_8;
      }
      let priceString1;
      if (tmp6 != null) {
        priceString1 = tmp6.priceString;
      }
      if (priceString1 == null) {
        priceString1 = closure_8;
      }
      const tmp9 = flag;
      let obj = flag(tmp3[20]);
      const maxFileSizeForPremiumType = obj.getMaxFileSizeForPremiumType(closure_9.TIER_0);
      const obj2 = flag(tmp3[20]);
      const maxFileSizeForPremiumType1 = obj2.getMaxFileSizeForPremiumType(closure_9.TIER_2);
      const obj3 = {
        column1: closure_11(str(tmp3[21]), size),
        column2: closure_11(str(tmp3[22]), size1),
        withBottomBorder: false,
        disableAccessibility: true,
        hidden: !isPremiumGroup,
      };
      size = { style: tmp.logo, width: 48, height: 9 };
      size1 = { style: tmp.logo, width: 50, height: 9 };
      const items = [obj3, , , , , , , , , ,];
      const obj4 = {
        accessible: true,
        accessibilityLabel: intl.string(flag(tmp3[17]).t["t9uG/o"]),
        style: tmp.logo,
        source: tmp2Result4,
      };
      const tmp2Result = str(tmp3[25]);
      intl = flag(tmp3[17]).intl;
      const obj7 = flag(tmp3[12]);
      if (obj7.isThemeDark(tmp4)) {
        tmp2Result4 = tmp2(tmp3[23]);
      } else {
        tmp2Result4 = tmp2(tmp3[24]);
      }
      const obj5 = {
        column1: closure_11(tmp2Result, obj4),
        column2: closure_11(tmp2Result5, obj6),
        withBottomBorder: false,
        withTopBorderRadius: true,
        disableAccessibility: true,
        hidden: isPremiumGroup,
      };
      obj6 = {
        accessible: true,
        accessibilityLabel: intl2.string(tmp9(tmp3[17]).t.lG6a5x),
        style: tmp.logo,
        source: tmp2Result6,
      };
      tmp2Result5 = str(tmp3[25]);
      intl2 = tmp9(tmp3[17]).intl;
      const tmp9Result = tmp9(tmp3[12]);
      if (tmp9Result.isThemeDark(tmp4)) {
        tmp2Result6 = tmp2(tmp3[26]);
      } else {
        tmp2Result6 = tmp2(tmp3[27]);
      }
      items[1] = obj5;
      const obj8 = {
        label: closure_11(closure_18, obj9),
        rowName: intl4.string(tmp9(tmp3[17]).t.LkKGZ2),
        column1: closure_11(View, obj10),
        column1AccessibilityLabel: priceString,
        column2: closure_11(View, obj11),
        column2AccessibilityLabel: priceString1,
      };
      obj9 = { text: intl3.string(tmp9(tmp3[17]).t.LkKGZ2) };
      intl3 = tmp9(tmp3[17]).intl;
      intl4 = tmp9(tmp3[17]).intl;
      obj10 = {
        style: tmp.priceContainer,
        children: parts.map((text) => {
          const obj = { text };
          return closure_1_11(closure_1_18, obj, text);
        }),
      };
      parts = priceString.split(/ (?=\()/g);
      obj11 = {
        style: tmp.priceContainer,
        children: parts1.map((text) => {
          const obj = { text };
          return closure_1_11(closure_1_18, obj, text);
        }),
      };
      parts1 = priceString1.split(/ (?=\()/g);
      items[2] = obj8;
      const obj12 = {
        label: closure_11(closure_18, obj13),
        rowName: intl6.string(tmp9(tmp3[17]).t.ORlUdL),
        column1: closure_11(closure_15, {}),
        column1AccessibilityLabel: intl7.string(tmp9(tmp3[17]).t["tq+6t/"]),
        column2: closure_11(closure_15, {}),
        column2AccessibilityLabel: intl8.string(tmp9(tmp3[17]).t["tq+6t/"]),
      };
      obj13 = { text: intl5.string(tmp9(tmp3[17]).t.ORlUdL) };
      intl5 = tmp9(tmp3[17]).intl;
      intl6 = tmp9(tmp3[17]).intl;
      intl7 = tmp9(tmp3[17]).intl;
      intl8 = tmp9(tmp3[17]).intl;
      items[3] = obj12;
      const obj14 = {
        label: closure_11(closure_18, obj15),
        rowName: intl10.string(tmp9(tmp3[17]).t["ufhQC+"]),
        column1: closure_11(tmp9(tmp3[16]).Text, {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: maxFileSizeForPremiumType,
        }),
        column1AccessibilityLabel: maxFileSizeForPremiumType,
        column2: closure_11(tmp9(tmp3[16]).Text, {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: maxFileSizeForPremiumType1,
        }),
        column2AccessibilityLabel: maxFileSizeForPremiumType1,
      };
      obj15 = { text: intl9.string(tmp9(tmp3[17]).t["ufhQC+"]) };
      intl9 = tmp9(tmp3[17]).intl;
      intl10 = tmp9(tmp3[17]).intl;
      items[4] = obj14;
      const obj16 = {
        label: closure_11(closure_18, obj17),
        rowName: intl12.string(tmp9(tmp3[17]).t["svn/YX"]),
        column1: closure_11(closure_15, {}),
        column1AccessibilityLabel: intl13.string(tmp9(tmp3[17]).t["tq+6t/"]),
        column2: closure_11(closure_15, {}),
        column2AccessibilityLabel: intl14.string(tmp9(tmp3[17]).t["tq+6t/"]),
        hidden: isFractionalOnly,
      };
      obj17 = { text: intl11.string(tmp9(tmp3[17]).t["svn/YX"]) };
      intl11 = tmp9(tmp3[17]).intl;
      intl12 = tmp9(tmp3[17]).intl;
      intl13 = tmp9(tmp3[17]).intl;
      intl14 = tmp9(tmp3[17]).intl;
      items[5] = obj16;
      const obj18 = {
        label: closure_11(closure_18, obj19),
        rowName: intl16.formatToPlainString(tmp9(tmp3[17]).t.DbkNFj, obj21),
        column1: closure_11(closure_17, {}),
        column1AccessibilityLabel: intl17.string(tmp9(tmp3[17]).t.l4qZrp),
        column2: closure_11(closure_15, {}),
        column2AccessibilityLabel: intl18.string(tmp9(tmp3[17]).t["tq+6t/"]),
        hidden: isFractionalOnly,
      };
      obj19 = { text: intl15.formatToPlainString(tmp9(tmp3[17]).t.DbkNFj, obj20) };
      intl15 = tmp9(tmp3[17]).intl;
      obj20 = { numBoosts };
      intl16 = tmp9(tmp3[17]).intl;
      obj21 = { numBoosts };
      intl17 = tmp9(tmp3[17]).intl;
      intl18 = tmp9(tmp3[17]).intl;
      items[6] = obj18;
      const obj22 = {
        label: closure_11(closure_18, obj23),
        rowName: intl20.string(tmp9(tmp3[17]).t["Gv/rQ6"]),
        column1: closure_11(closure_17, {}),
        column1AccessibilityLabel: intl21.string(tmp9(tmp3[17]).t.l4qZrp),
        column2: closure_11(closure_15, {}),
        column2AccessibilityLabel: intl22.string(tmp9(tmp3[17]).t["tq+6t/"]),
      };
      obj23 = { text: intl19.string(tmp9(tmp3[17]).t["Gv/rQ6"]) };
      intl19 = tmp9(tmp3[17]).intl;
      intl20 = tmp9(tmp3[17]).intl;
      intl21 = tmp9(tmp3[17]).intl;
      intl22 = tmp9(tmp3[17]).intl;
      items[7] = obj22;
      const obj24 = {
        label: closure_11(closure_18, obj25),
        rowName: intl24.string(tmp9(tmp3[17]).t.myyAEr),
        column1: closure_11(closure_17, {}),
        column1AccessibilityLabel: intl25.string(tmp9(tmp3[17]).t.l4qZrp),
        column2: closure_11(closure_15, {}),
        column2AccessibilityLabel: intl26.string(tmp9(tmp3[17]).t["tq+6t/"]),
      };
      obj25 = { text: intl23.string(tmp9(tmp3[17]).t.myyAEr) };
      intl23 = tmp9(tmp3[17]).intl;
      intl24 = tmp9(tmp3[17]).intl;
      intl25 = tmp9(tmp3[17]).intl;
      intl26 = tmp9(tmp3[17]).intl;
      items[8] = obj24;
      const obj26 = {
        label: closure_11(closure_18, obj27),
        rowName: intl28.string(tmp9(tmp3[17]).t.S6yQr8),
        column1: closure_11(closure_17, {}),
        column1AccessibilityLabel: intl29.string(tmp9(tmp3[17]).t.l4qZrp),
        column2: closure_11(closure_15, {}),
        column2AccessibilityLabel: intl30.string(tmp9(tmp3[17]).t["tq+6t/"]),
      };
      obj27 = { text: intl27.string(tmp9(tmp3[17]).t.S6yQr8) };
      intl27 = tmp9(tmp3[17]).intl;
      intl28 = tmp9(tmp3[17]).intl;
      intl29 = tmp9(tmp3[17]).intl;
      intl30 = tmp9(tmp3[17]).intl;
      items[9] = obj26;
      items[10] = { withBottomBorder: false, withBottomBorderRadius: true, disableAccessibility: true };
      const found = items.filter((hidden) => null != hidden && !hidden.hidden);
      const obj28 = { style: items1, children: items2 };
      items1 = [tmp.container, style];
      const obj29 = {
        style: tmp.headerText,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        children: titleOverride,
      };
      const Text = tmp9(tmp3[16]).Text;
      if (titleOverride == null) {
        const intl31 = tmp9(tmp3[17]).intl;
        titleOverride = intl31.string(tmp9(tmp3[17]).t.vLz3Zs);
      }
      items2 = [closure_11(Text, obj29), ,];
      if (isPremiumGroup) {
        isPremiumGroup = null != premiumGroupRole;
      }
      if (isPremiumGroup) {
        const obj30 = { style: tmp.premiumGroupCard, premiumGroupRole };
        isPremiumGroup = closure_11(tmp2(tmp3[28]), obj30);
      }
      items2[1] = isPremiumGroup;
      const obj31 = {
        style: tmp.table,
        children: found.map((item, rowNumber) => {
          const obj = { highlightColumn1: flag, disableHighlightColumn2: isPremiumGroup, variant: str, rowNumber };
          const merged = Object.assign(item);
          return unpackModuleId(closure_19, obj, rowNumber);
        }),
      };
      items2[2] = closure_11(View, obj31);
      return closure_12(View, obj28);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesTable.tsx");

export default tmp5;
