// discord_app/modules/user_settings/premium/native/PremiumFeaturesTable.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import _modDef13301 from "../../../../../_runtime/metro/13301__.js";
import _modDef13302 from "../../../../../_runtime/metro/13302__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const util = EZjXN3(1126);
require = fn;
const View = fn(17).View;
const HorizontalGradient = fn(1085).HorizontalGradient;
const PremiumConstants = fn(1379);
({
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_7,
  PRICE_PLACEHOLDER: closure_8,
  PremiumTypes: closure_9,
  SubscriptionPlans: c10,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let c13 = "rgba(184, 69, 193, 0.5)";
let createStyles = fn(4896);
let obj2 = {
  container: { display: "flex", flex: 1, width: "100%" },
  headerText: { textAlign: "center" },
  logo: { marginTop: 8, marginBottom: -6 },
  table: { marginTop: 16 },
  row: { display: "flex", flexDirection: "row" },
  bottomBorder: { borderBottomColor: "rgba(106, 116, 128, 0.24)", borderBottomWidth: 1 },
  topBorderRadius: { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm },
  bottomBorderRadius: null,
  cell: null,
  labelCell: null,
  dataCell: null,
  themedHighlightedCell: null,
  nitroHomeHightlightedBorderLeftRight: null,
  premiumGroupCard: null,
  priceContainer: null,
};
let obj3 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj2.bottomBorderRadius = {
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
};
obj2.cell = { paddingVertical: 12 };
obj2.labelCell = { flex: 1, justifyContent: "flex-start" };
obj2.dataCell = { flexDirection: "row", justifyContent: "center", alignItems: "center", width: 82 };
let obj4 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj2.themedHighlightedCell = { backgroundColor: fn(5627).PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
obj2.nitroHomeHightlightedBorderLeftRight = {
  borderLeftColor: "rgba(184, 69, 193, 0.5)",
  borderLeftWidth: 2,
  borderRightColor: "rgba(184, 69, 193, 0.5)",
  borderRightWidth: 2,
};
obj2.premiumGroupCard = { marginTop: 16 };
obj2.priceContainer = { alignItems: "center" };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp5 = useThemeDefault();
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      const tmp7 = shared.isThemeDark(tmp5) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
      if (cResult[0] !== tmp7) {
        const obj3 = { source: _modDef13301, color: tmp7, size: native.IconSizes.SMALL };
        const tmp10 = closure_1_11(native.Icon, obj3);
        cResult[0] = tmp7;
        cResult[1] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[1];
      }
      return tmp8;
    }
  : () => {
      const tmp3 = useThemeDefault();
      const unsafe_rawColors = nativeDefault.unsafe_rawColors;
      const isThemeDarkResult = shared.isThemeDark(tmp3);
      const tmp6 = shared.isThemeDark(tmp3) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860;
      return closure_1_11(native.Icon, {
        source: _modDef13301,
        color: shared.isThemeDark(tmp3) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_860,
        size: native.IconSizes.SMALL,
      });
    };
createStyles = fn(4896);
let obj8 = { icon: null };
let obj5 = { backgroundColor: fn(5627).PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG };
obj8.icon = { tintColor: nativeDefault.colors.TEXT_MUTED };
let closure_16 = createStyles.createStyles(obj8);
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp4 = closure_16();
      if (cResult[0] !== tmp4.icon) {
        const obj2 = { source: _modDef13302, style: tmp4.icon, size: native.IconSizes.SMALL };
        const tmp8 = closure_1_11(native.Icon, obj2);
        cResult[0] = tmp4.icon;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const tmp = closure_16();
      return closure_1_11(native.Icon, {
        source: _modDef13302,
        style: closure_16().icon,
        size: native.IconSizes.SMALL,
      });
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (text) => {
      const cResult = c.c(2);
      text = text.text;
      if (cResult[0] !== text) {
        const obj2 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: text };
        const tmp6 = closure_1_11(Text_Text.Text, obj2);
        cResult[0] = text;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : (children) =>
      closure_1_11(Text_Text.Text, {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: children.text,
      });
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let EZjXN3 = require;
      let obj = dependencyMap;
      const cResult = c.c(51);
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
        rowNumber: themedHighlightedCell,
      } = arg0);
      let bottomBorder = undefined === withBottomBorder || withBottomBorder;
      let str = "default";
      if (undefined !== variant) {
        str = variant;
      }
      let topBorderRadius = closure_14();
      [tmp7, require] = noop.useState(0);
      let num = 0;
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
        bottomBorder = topBorderRadius.bottomBorder;
      }
      if (cResult[0] === topBorderRadius.row) {
        if (cResult[1] === bottomBorder) {
          let tmp8 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function s(nativeEvent) {
            return _require(nativeEvent.nativeEvent.layout.height);
          };
          cResult[3] = fn;
          let tmp10 = fn;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] === topBorderRadius.cell) {
          if (cResult[5] === topBorderRadius.labelCell) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] === label) {
            if (cResult[8] === rowName) {
              if (cResult[9] === tmp11) {
                if (cResult[10] === tmp12) {
                  let tmp13 = cResult[11];
                }
                let themedHighlightedCell2 = highlightColumn1;
                if (highlightColumn1) {
                  themedHighlightedCell2 = topBorderRadius.themedHighlightedCell;
                }
                let topBorderRadius2 = tmp2;
                if (tmp2) {
                  topBorderRadius2 = topBorderRadius.topBorderRadius;
                }
                let bottomBorderRadius = tmp3;
                if (tmp3) {
                  bottomBorderRadius = topBorderRadius.bottomBorderRadius;
                }
                if (cResult[12] === topBorderRadius.cell) {
                  if (cResult[13] === topBorderRadius.dataCell) {
                    if (cResult[14] === themedHighlightedCell2) {
                      if (cResult[15] === topBorderRadius2) {
                        if (cResult[16] === bottomBorderRadius) {
                          let tmp17 = cResult[17];
                        }
                        if (cResult[18] === column1AccessibilityLabel) {
                          if (cResult[19] === rowName) {
                            if (cResult[20] === themedHighlightedCell) {
                              let tmp18 = cResult[21];
                            }
                            if (cResult[22] === column1) {
                              if (cResult[23] === tmp17) {
                                if (cResult[24] === tmp18) {
                                  if (cResult[25] === tmp22) {
                                    let tmp23 = cResult[26];
                                  }
                                  const sum = num + num2 + num3;
                                  if (cResult[27] === sum) {
                                    if (cResult[28] === column2) {
                                      if (cResult[29] === column2AccessibilityLabel) {
                                        if (cResult[30] === tmp5) {
                                          if (cResult[31] === tmp4) {
                                            if (cResult[32] === highlightColumn1) {
                                              if (cResult[33] === tmp7) {
                                                if (cResult[34] === rowName) {
                                                  if (cResult[35] === themedHighlightedCell) {
                                                    if (cResult[36] === topBorderRadius.bottomBorderRadius) {
                                                      if (cResult[37] === topBorderRadius.cell) {
                                                        if (cResult[38] === topBorderRadius.dataCell) {
                                                          if (
                                                            cResult[39] ===
                                                            topBorderRadius.nitroHomeHightlightedBorderLeftRight
                                                          ) {
                                                            if (cResult[40] === topBorderRadius.themedHighlightedCell) {
                                                              if (cResult[41] === topBorderRadius.topBorderRadius) {
                                                                if (cResult[42] === str) {
                                                                  if (cResult[43] === tmp3) {
                                                                    if (cResult[44] === tmp2) {
                                                                      if (cResult[46] === tmp13) {
                                                                        if (cResult[47] === tmp23) {
                                                                          if (cResult[48] === tmp28) {
                                                                            if (cResult[49] === tmp8) {
                                                                              let tmp45 = cResult[50];
                                                                            }
                                                                            return tmp45;
                                                                          }
                                                                        }
                                                                      }
                                                                      const obj3 = {
                                                                        style: tmp8,
                                                                        onLayout: tmp10,
                                                                        children: null,
                                                                      };
                                                                      const items = [tmp13, tmp23, cResult[45]];
                                                                      obj3.children = items;
                                                                      const tmp48 = __initData(View, obj3);
                                                                      cResult[46] = tmp13;
                                                                      cResult[47] = tmp23;
                                                                      cResult[48] = cResult[45];
                                                                      cResult[49] = tmp8;
                                                                      cResult[50] = tmp48;
                                                                      tmp45 = tmp48;
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
                                  }
                                  if ("nitro_home" === str) {
                                    if (!highlightColumn1) {
                                      if (!tmp4) {
                                        let topBorderRadius3 = tmp2;
                                        if (tmp2) {
                                          topBorderRadius3 = topBorderRadius.topBorderRadius;
                                        }
                                        const items1 = [topBorderRadius3, , , , ,];
                                        let tmp31 = tmp2;
                                        if (tmp2) {
                                          const obj4 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
                                          tmp31 = obj4;
                                        }
                                        items1[1] = tmp31;
                                        let bottomBorderRadius2 = tmp3;
                                        if (tmp3) {
                                          bottomBorderRadius2 = topBorderRadius.bottomBorderRadius;
                                        }
                                        items1[2] = bottomBorderRadius2;
                                        let tmp33 = tmp3;
                                        if (tmp3) {
                                          const obj5 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
                                          tmp33 = obj5;
                                        }
                                        let obj6 = {
                                          style: null,
                                          accessibilityLabel: null,
                                          accessible: null,
                                          children: null,
                                        };
                                        items1[3] = tmp33;
                                        items1[4] = topBorderRadius.nitroHomeHightlightedBorderLeftRight;
                                        items1[5] = { overflow: "hidden" };
                                        obj6.style = items1;
                                        let formatToPlainStringResult;
                                        if (null != column2AccessibilityLabel) {
                                          const intl3 = util.intl;
                                          const intl4 = util.intl;
                                          const obj7 = {
                                            accessibilityLabel: column2AccessibilityLabel,
                                            rowNumber: themedHighlightedCell,
                                            rowName,
                                            columnNumber: 2,
                                            columnName: intl3.string(util.t.lG6a5x),
                                          };
                                          formatToPlainStringResult = intl4.formatToPlainString(util.t.EZjXN3, obj7);
                                          const stringResult = intl3.string(util.t.lG6a5x);
                                        }
                                        obj6.accessibilityLabel = formatToPlainStringResult;
                                        obj6.accessible = !tmp5;
                                        const obj8 = {
                                          style: null,
                                          start: null,
                                          end: null,
                                          colors: null,
                                          children: null,
                                        };
                                        const obj9 = { height: tmp7 - sum };
                                        const items2 = [obj9, topBorderRadius.dataCell];
                                        obj8.style = items2;
                                        ({ START: obj10.start, END: obj10.end } = HorizontalGradient);
                                        obj8.colors = [
                                          "rgba(133, 71, 198, 0.10)",
                                          "rgba(184, 69, 193, 0.10)",
                                          "rgba(171, 93, 138, 0.10)",
                                        ];
                                        obj8.children = column2;
                                        obj6.children = closure_1_11(LinearGradientDefault, obj8);
                                      }
                                      const tmp29Result = closure_1_11(tmp30, obj6);
                                      cResult[27] = sum;
                                      cResult[28] = column2;
                                      cResult[29] = column2AccessibilityLabel;
                                      cResult[30] = tmp5;
                                      cResult[31] = tmp4;
                                      cResult[32] = highlightColumn1;
                                      cResult[33] = tmp7;
                                      cResult[34] = rowName;
                                      cResult[35] = themedHighlightedCell;
                                      cResult[36] = topBorderRadius.bottomBorderRadius;
                                      cResult[37] = topBorderRadius.cell;
                                      cResult[38] = topBorderRadius.dataCell;
                                      ({ nitroHomeHightlightedBorderLeftRight: tmp[39], themedHighlightedCell } =
                                        topBorderRadius);
                                      cResult[40] = themedHighlightedCell;
                                      topBorderRadius = topBorderRadius.topBorderRadius;
                                      cResult[41] = topBorderRadius;
                                      cResult[42] = str;
                                      cResult[43] = tmp3;
                                      cResult[44] = tmp2;
                                      cResult[45] = tmp29Result;
                                    }
                                  }
                                  const items3 = [, , , ,];
                                  ({ cell: arr6[0], dataCell: arr6[1] } = topBorderRadius);
                                  let themedHighlightedCell3 = !highlightColumn1;
                                  if (!highlightColumn1) {
                                    themedHighlightedCell3 = !tmp4;
                                  }
                                  if (themedHighlightedCell3) {
                                    themedHighlightedCell3 = topBorderRadius.themedHighlightedCell;
                                  }
                                  items3[2] = themedHighlightedCell3;
                                  let topBorderRadius4 = tmp2;
                                  if (tmp2) {
                                    topBorderRadius4 = topBorderRadius.topBorderRadius;
                                  }
                                  items3[3] = topBorderRadius4;
                                  let bottomBorderRadius3 = tmp3;
                                  if (tmp3) {
                                    bottomBorderRadius3 = topBorderRadius.bottomBorderRadius;
                                  }
                                  const obj11 = {
                                    style: null,
                                    accessibilityLabel: null,
                                    accessible: null,
                                    children: null,
                                  };
                                  items3[4] = bottomBorderRadius3;
                                  obj11.style = items3;
                                  let formatToPlainStringResult1;
                                  if (null != column2AccessibilityLabel) {
                                    const intl5 = util.intl;
                                    const intl6 = util.intl;
                                    EZjXN3 = util.t.EZjXN3;
                                    obj = {
                                      accessibilityLabel: column2AccessibilityLabel,
                                      rowNumber: themedHighlightedCell,
                                      rowName,
                                      columnNumber: 2,
                                      columnName: intl5.string(util.t.lG6a5x),
                                    };
                                    formatToPlainStringResult1 = intl6.formatToPlainString(EZjXN3, obj);
                                    const stringResult1 = intl5.string(util.t.lG6a5x);
                                  }
                                  obj11.accessibilityLabel = formatToPlainStringResult1;
                                  obj11.accessible = !tmp5;
                                  obj11.children = column2;
                                  obj6 = obj11;
                                }
                              }
                            }
                            const obj12 = {
                              style: tmp17,
                              accessibilityLabel: tmp18,
                              accessible: !tmp5,
                              children: column1,
                            };
                            const tmp26 = closure_1_11(View, obj12);
                            cResult[22] = column1;
                            cResult[23] = tmp17;
                            cResult[24] = tmp18;
                            cResult[25] = !tmp5;
                            cResult[26] = tmp26;
                            tmp23 = tmp26;
                          }
                        }
                        let formatToPlainStringResult2;
                        if (null != column1AccessibilityLabel) {
                          const intl = util.intl;
                          const intl2 = util.intl;
                          const obj13 = {
                            accessibilityLabel: column1AccessibilityLabel,
                            rowNumber: themedHighlightedCell,
                            rowName,
                            columnNumber: 1,
                            columnName: intl.string(util.t["t9uG/o"]),
                          };
                          formatToPlainStringResult2 = intl2.formatToPlainString(util.t.EZjXN3, obj13);
                          const stringResult2 = intl.string(util.t["t9uG/o"]);
                        }
                        cResult[18] = column1AccessibilityLabel;
                        cResult[19] = rowName;
                        cResult[20] = themedHighlightedCell;
                        cResult[21] = formatToPlainStringResult2;
                        tmp18 = formatToPlainStringResult2;
                      }
                    }
                  }
                }
                const items4 = [, , , ,];
                ({ cell: arr3[0], dataCell: arr3[1] } = topBorderRadius);
                items4[2] = themedHighlightedCell2;
                items4[3] = topBorderRadius2;
                items4[4] = bottomBorderRadius;
                cResult[12] = topBorderRadius.cell;
                cResult[13] = topBorderRadius.dataCell;
                cResult[14] = themedHighlightedCell2;
                cResult[15] = topBorderRadius2;
                cResult[16] = bottomBorderRadius;
                cResult[17] = items4;
                tmp17 = items4;
              }
            }
          }
          const obj24 = { style: tmp11, accessible: !tmp5, accessibilityLabel: rowName, children: label };
          const tmp16 = closure_1_11(View, obj24);
          cResult[7] = label;
          cResult[8] = rowName;
          cResult[9] = tmp11;
          cResult[10] = !tmp5;
          cResult[11] = tmp16;
          tmp13 = tmp16;
        }
        const items5 = [,];
        ({ labelCell: arr2[0], cell: arr2[1] } = topBorderRadius);
        cResult[4] = topBorderRadius.cell;
        cResult[5] = topBorderRadius.labelCell;
        cResult[6] = items5;
        tmp11 = items5;
      }
      const items6 = [topBorderRadius.row, bottomBorder];
      cResult[0] = topBorderRadius.row;
      cResult[1] = bottomBorder;
      cResult[2] = items6;
      tmp8 = items6;
      const tmp6 = _slicedToArray(noop.useState(0), 2);
    }
  : (withTopBorderRadius) => {
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
      const tmp = closure_14();
      const tmp2 = _slicedToArray(noop.useState(0), 2);
      closure_0 = tmp2[1];
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
      const obj2 = { style: null, accessible: !flag3, accessibilityLabel: rowName, children: label };
      const items1 = [,];
      ({ labelCell: arr2[0], cell: arr2[1] } = tmp);
      obj2.style = items1;
      const items2 = [closure_1_11(View, obj2), ,];
      const items3 = [, , , ,];
      ({ cell: arr4[0], dataCell: arr4[1] } = tmp);
      let themedHighlightedCell = highlightColumn1;
      if (highlightColumn1) {
        themedHighlightedCell = tmp.themedHighlightedCell;
      }
      items3[2] = themedHighlightedCell;
      let topBorderRadius = flag;
      if (flag) {
        topBorderRadius = tmp.topBorderRadius;
      }
      items3[3] = topBorderRadius;
      let bottomBorderRadius = flag2;
      if (flag2) {
        bottomBorderRadius = tmp.bottomBorderRadius;
      }
      const obj3 = { style: items3, accessibilityLabel: null, accessible: null, children: null };
      items3[4] = bottomBorderRadius;
      let formatToPlainStringResult;
      if (null != column1AccessibilityLabel) {
        const intl = util.intl;
        const intl2 = util.intl;
        const obj4 = {
          accessibilityLabel: column1AccessibilityLabel,
          rowNumber,
          rowName,
          columnNumber: 1,
          columnName: intl.string(util.t["t9uG/o"]),
        };
        formatToPlainStringResult = intl2.formatToPlainString(util.t.EZjXN3, obj4);
        const stringResult = intl.string(util.t["t9uG/o"]);
      }
      obj3.accessibilityLabel = formatToPlainStringResult;
      obj3.accessible = !flag3;
      obj3.children = column1;
      items2[1] = closure_1_11(View, obj3);
      if ("nitro_home" === str) {
        if (!highlightColumn1) {
          if (!disableHighlightColumn2) {
            let topBorderRadius2 = flag;
            if (flag) {
              topBorderRadius2 = tmp.topBorderRadius;
            }
            const items4 = [topBorderRadius2, , , , ,];
            let tmp10 = flag;
            if (flag) {
              const obj5 = { borderTopColor: rgba1846919305, borderTopWidth: 2 };
              tmp10 = obj5;
            }
            items4[1] = tmp10;
            let bottomBorderRadius2 = flag2;
            if (flag2) {
              bottomBorderRadius2 = tmp.bottomBorderRadius;
            }
            items4[2] = bottomBorderRadius2;
            let tmp12 = flag2;
            if (flag2) {
              const obj6 = { borderBottomColor: rgba1846919305, borderBottomWidth: 2 };
              tmp12 = obj6;
            }
            let obj7 = { style: null, accessibilityLabel: null, accessible: null, children: null };
            items4[3] = tmp12;
            items4[4] = tmp.nitroHomeHightlightedBorderLeftRight;
            items4[5] = { overflow: "hidden" };
            obj7.style = items4;
            let formatToPlainStringResult1;
            if (null != column2AccessibilityLabel) {
              const intl3 = util.intl;
              const intl4 = util.intl;
              const obj8 = {
                accessibilityLabel: column2AccessibilityLabel,
                rowNumber,
                rowName,
                columnNumber: 2,
                columnName: intl3.string(util.t.lG6a5x),
              };
              formatToPlainStringResult1 = intl4.formatToPlainString(util.t.EZjXN3, obj8);
              const stringResult1 = intl3.string(util.t.lG6a5x);
            }
            obj7.accessibilityLabel = formatToPlainStringResult1;
            obj7.accessible = !flag3;
            const sum = num + num2 + num3;
            const obj10 = { style: null, start: null, end: null, colors: null, children: null };
            const obj11 = { height: tmp2[0] - sum };
            const items5 = [obj11, tmp.dataCell];
            obj10.style = items5;
            ({ START: obj9.start, END: obj9.end } = HorizontalGradient);
            obj10.colors = ["rgba(133, 71, 198, 0.10)", "rgba(184, 69, 193, 0.10)", "rgba(171, 93, 138, 0.10)"];
            obj10.children = column2;
            obj7.children = closure_1_11(LinearGradientDefault, obj10);
          }
          items2[2] = closure_1_11(View, obj7);
          obj.children = items2;
          return __initData(View, obj);
        }
      }
      const items6 = [, , , ,];
      ({ cell: arr7[0], dataCell: arr7[1] } = tmp);
      let themedHighlightedCell2 = !highlightColumn1;
      if (!highlightColumn1) {
        themedHighlightedCell2 = !disableHighlightColumn2;
      }
      if (themedHighlightedCell2) {
        themedHighlightedCell2 = tmp.themedHighlightedCell;
      }
      items6[2] = themedHighlightedCell2;
      if (flag) {
        flag = tmp.topBorderRadius;
      }
      items6[3] = flag;
      if (flag2) {
        flag2 = tmp.bottomBorderRadius;
      }
      const obj12 = { style: items6, accessibilityLabel: null, accessible: null, children: null };
      items6[4] = flag2;
      let formatToPlainStringResult2;
      if (null != column2AccessibilityLabel) {
        const intl5 = util.intl;
        const intl6 = util.intl;
        const obj23 = {
          accessibilityLabel: column2AccessibilityLabel,
          rowNumber,
          rowName,
          columnNumber: 2,
          columnName: intl5.string(util.t.lG6a5x),
        };
        formatToPlainStringResult2 = intl6.formatToPlainString(util.t.EZjXN3, obj23);
        const stringResult2 = intl5.string(util.t.lG6a5x);
      }
      obj12.accessibilityLabel = formatToPlainStringResult2;
      obj12.accessible = !flag3;
      obj12.children = column2;
      obj7 = obj12;
    };
ReactCompilerGating = fn(558);
let obj9 = { tintColor: nativeDefault.colors.TEXT_MUTED };
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesTable.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const tmp = _require;
      const cResult = require("c").c(96);
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
        const maxFileSizeForPremiumType = tmp(4534).getMaxFileSizeForPremiumType(closure_9.TIER_0);
        cResult[0] = maxFileSizeForPremiumType;
        let first = maxFileSizeForPremiumType;
        const tmpResult = tmp(4534);
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const maxFileSizeForPremiumType1 = tmp(4534).getMaxFileSizeForPremiumType(closure_9.TIER_2);
        cResult[1] = maxFileSizeForPremiumType1;
        let tmp16 = maxFileSizeForPremiumType1;
        const tmpResult4 = tmp(4534);
      } else {
        tmp16 = cResult[1];
      }
      if (cResult[2] !== tmp6.logo) {
        const size = { style: tmp6.logo, width: 48, height: 9 };
        const tmp22 = closure_11(tmp7(13303), size);
        const size1 = { style: tmp6.logo, width: 50, height: 9 };
        const tmp23 = closure_11(tmp7(13304), size1);
        cResult[2] = tmp6.logo;
        cResult[3] = tmp22;
        cResult[4] = tmp23;
        let tmp20 = tmp23;
        let tmp19 = tmp22;
      } else {
        tmp19 = cResult[3];
        tmp20 = cResult[4];
      }
      if (cResult[5] === tmp19) {
        if (cResult[6] === tmp20) {
          if (cResult[7] === tmp24) {
            let tmp25 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t["t9uG/o"]);
            cResult[9] = stringResult;
            let tmp26 = stringResult;
          } else {
            tmp26 = cResult[9];
          }
          if (tmpResult5.isThemeDark(tmp8)) {
            let tmp7Result = tmp7(13305);
          } else {
            tmp7Result = tmp7(13306);
          }
          if (cResult[10] === tmp6.logo) {
            if (cResult[11] === tmp7Result) {
              let tmp29 = cResult[12];
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(tmp(1126).t.lG6a5x);
              cResult[13] = stringResult1;
              let tmp32 = stringResult1;
            } else {
              tmp32 = cResult[13];
            }
            if (tmpResult6.isThemeDark(tmp8)) {
              let tmp7Result2 = tmp7(13307);
            } else {
              tmp7Result2 = tmp7(13308);
            }
            if (cResult[14] === tmp6.logo) {
              if (cResult[15] === tmp7Result2) {
                let tmp35 = cResult[16];
              }
              if (cResult[17] === tmp5) {
                if (cResult[18] === tmp29) {
                  if (cResult[19] === tmp35) {
                    let tmp38 = cResult[20];
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj2 = { text: null };
                    const intl3 = tmp(1126).intl;
                    obj2.text = intl3.string(tmp(1126).t.LkKGZ2);
                    const tmp43 = closure_11(closure_18, obj2);
                    const intl4 = tmp(1126).intl;
                    const stringResult2 = intl4.string(tmp(1126).t.LkKGZ2);
                    cResult[21] = tmp43;
                    cResult[22] = stringResult2;
                    let tmp40 = stringResult2;
                    let tmp39 = tmp43;
                  } else {
                    tmp39 = cResult[21];
                    tmp40 = cResult[22];
                  }
                  if (cResult[23] !== priceString) {
                    const _Symbol4 = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      const fn = function $(text) {
                        return closure_1_11(closure_1_18, { text }, text);
                      };
                      cResult[25] = fn;
                      let tmp47 = fn;
                    } else {
                      tmp47 = cResult[25];
                    }
                    const parts = priceString.split(/ (?=\()/g);
                    const mapped = parts.map(tmp47);
                    cResult[23] = priceString;
                    cResult[24] = mapped;
                  } else {
                    if (cResult[26] === tmp6.priceContainer) {
                      if (cResult[27] === tmp46) {
                        let tmp50 = cResult[28];
                      }
                      if (cResult[29] !== priceString1) {
                        const _Symbol5 = Symbol;
                        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                          function le(text) {
                            return closure_1_11(closure_1_18, { text }, text);
                          }
                          cResult[31] = le;
                          let tmp56 = le;
                        } else {
                          tmp56 = cResult[31];
                        }
                        const parts1 = priceString1.split(/ (?=\()/g);
                        const mapped1 = parts1.map(tmp56);
                        cResult[29] = priceString1;
                        cResult[30] = mapped1;
                      } else {
                        if (cResult[32] === tmp6.priceContainer) {
                          if (cResult[33] === tmp55) {
                            let tmp59 = cResult[34];
                          }
                          if (cResult[35] === tmp50) {
                            if (cResult[36] === tmp59) {
                              if (cResult[37] === priceString) {
                                if (cResult[38] === priceString1) {
                                  let tmp63 = cResult[39];
                                }
                                const _Symbol6 = Symbol;
                                if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj3 = {
                                    label: null,
                                    rowName: null,
                                    column1: null,
                                    column1AccessibilityLabel: null,
                                    column2: null,
                                    column2AccessibilityLabel: null,
                                  };
                                  const obj4 = { text: null };
                                  const intl5 = tmp(1126).intl;
                                  obj4.text = intl5.string(tmp(1126).t.ORlUdL);
                                  obj3.label = closure_11(closure_18, obj4);
                                  const intl6 = tmp(1126).intl;
                                  obj3.rowName = intl6.string(tmp(1126).t.ORlUdL);
                                  obj3.column1 = closure_11(closure_15, {});
                                  const intl7 = tmp(1126).intl;
                                  obj3.column1AccessibilityLabel = intl7.string(tmp(1126).t["tq+6t/"]);
                                  obj3.column2 = closure_11(closure_15, {});
                                  const intl8 = tmp(1126).intl;
                                  obj3.column2AccessibilityLabel = intl8.string(tmp(1126).t["tq+6t/"]);
                                  cResult[40] = obj3;
                                  let tmp64 = obj3;
                                } else {
                                  tmp64 = cResult[40];
                                }
                                const _Symbol7 = Symbol;
                                if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj5 = { text: null };
                                  const intl9 = tmp(1126).intl;
                                  obj5.text = intl9.string(tmp(1126).t["ufhQC+"]);
                                  const tmp73 = closure_11(closure_18, obj5);
                                  const intl10 = tmp(1126).intl;
                                  const stringResult3 = intl10.string(tmp(1126).t["ufhQC+"]);
                                  const obj6 = {
                                    variant: "text-md/medium",
                                    color: "mobile-text-heading-primary",
                                    children: first,
                                  };
                                  const tmp75 = closure_11(tmp(4892).Text, obj6);
                                  cResult[41] = tmp73;
                                  cResult[42] = stringResult3;
                                  cResult[43] = tmp75;
                                  let tmp70 = tmp75;
                                  let tmp69 = stringResult3;
                                  let tmp68 = tmp73;
                                } else {
                                  tmp68 = cResult[41];
                                  tmp69 = cResult[42];
                                  tmp70 = cResult[43];
                                }
                                const _Symbol8 = Symbol;
                                if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj7 = {
                                    label: tmp68,
                                    rowName: tmp69,
                                    column1: tmp70,
                                    column1AccessibilityLabel: first,
                                    column2: null,
                                    column2AccessibilityLabel: null,
                                  };
                                  const obj8 = {
                                    variant: "text-md/medium",
                                    color: "mobile-text-heading-primary",
                                    children: tmp16,
                                  };
                                  obj7.column2 = closure_11(tmp(4892).Text, obj8);
                                  obj7.column2AccessibilityLabel = tmp16;
                                  cResult[44] = obj7;
                                  let tmp76 = obj7;
                                } else {
                                  tmp76 = cResult[44];
                                }
                                const _Symbol9 = Symbol;
                                if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj9 = { text: null };
                                  const intl11 = tmp(1126).intl;
                                  obj9.text = intl11.string(tmp(1126).t["svn/YX"]);
                                  const tmp86 = closure_11(closure_18, obj9);
                                  const intl12 = tmp(1126).intl;
                                  const stringResult4 = intl12.string(tmp(1126).t["svn/YX"]);
                                  const tmp89 = closure_11(closure_15, {});
                                  const intl13 = tmp(1126).intl;
                                  const stringResult5 = intl13.string(tmp(1126).t["tq+6t/"]);
                                  const tmp91 = closure_11(closure_15, {});
                                  const intl14 = tmp(1126).intl;
                                  const stringResult6 = intl14.string(tmp(1126).t["tq+6t/"]);
                                  cResult[45] = tmp86;
                                  cResult[46] = stringResult4;
                                  cResult[47] = tmp89;
                                  cResult[48] = stringResult5;
                                  cResult[49] = tmp91;
                                  cResult[50] = stringResult6;
                                  let tmp83 = stringResult6;
                                  let tmp82 = tmp91;
                                  let tmp81 = stringResult5;
                                  let tmp80 = tmp89;
                                  let tmp79 = stringResult4;
                                  let tmp78 = tmp86;
                                } else {
                                  tmp78 = cResult[45];
                                  tmp79 = cResult[46];
                                  tmp80 = cResult[47];
                                  tmp81 = cResult[48];
                                  tmp82 = cResult[49];
                                  tmp83 = cResult[50];
                                }
                                if (cResult[51] !== isFractionalOnly) {
                                  const obj10 = {
                                    label: tmp78,
                                    rowName: tmp79,
                                    column1: tmp80,
                                    column1AccessibilityLabel: tmp81,
                                    column2: tmp82,
                                    column2AccessibilityLabel: tmp83,
                                    hidden: isFractionalOnly,
                                  };
                                  cResult[51] = isFractionalOnly;
                                  cResult[52] = obj10;
                                  let tmp93 = obj10;
                                } else {
                                  tmp93 = cResult[52];
                                }
                                const _Symbol10 = Symbol;
                                if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj11 = { text: null };
                                  const intl15 = tmp(1126).intl;
                                  const obj12 = { numBoosts };
                                  obj11.text = intl15.formatToPlainString(tmp(1126).t.DbkNFj, obj12);
                                  const tmp103 = closure_11(closure_18, obj11);
                                  const intl16 = tmp(1126).intl;
                                  const obj13 = { numBoosts };
                                  const formatToPlainStringResult = intl16.formatToPlainString(
                                    tmp(1126).t.DbkNFj,
                                    obj13,
                                  );
                                  const tmp106 = closure_11(closure_17, {});
                                  const intl17 = tmp(1126).intl;
                                  const stringResult7 = intl17.string(tmp(1126).t.l4qZrp);
                                  const tmp109 = closure_11(closure_15, {});
                                  const intl18 = tmp(1126).intl;
                                  const stringResult8 = intl18.string(tmp(1126).t["tq+6t/"]);
                                  cResult[53] = tmp103;
                                  cResult[54] = formatToPlainStringResult;
                                  cResult[55] = tmp106;
                                  cResult[56] = stringResult7;
                                  cResult[57] = tmp109;
                                  cResult[58] = stringResult8;
                                  let tmp99 = stringResult8;
                                  let tmp98 = tmp109;
                                  let tmp97 = stringResult7;
                                  let tmp96 = tmp106;
                                  let tmp95 = formatToPlainStringResult;
                                  let tmp94 = tmp103;
                                } else {
                                  tmp94 = cResult[53];
                                  tmp95 = cResult[54];
                                  tmp96 = cResult[55];
                                  tmp97 = cResult[56];
                                  tmp98 = cResult[57];
                                  tmp99 = cResult[58];
                                }
                                if (cResult[59] !== isFractionalOnly) {
                                  const obj14 = {
                                    label: tmp94,
                                    rowName: tmp95,
                                    column1: tmp96,
                                    column1AccessibilityLabel: tmp97,
                                    column2: tmp98,
                                    column2AccessibilityLabel: tmp99,
                                    hidden: isFractionalOnly,
                                  };
                                  cResult[59] = isFractionalOnly;
                                  cResult[60] = obj14;
                                  let tmp111 = obj14;
                                } else {
                                  tmp111 = cResult[60];
                                }
                                const _Symbol11 = Symbol;
                                if (cResult[61] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj15 = {
                                    label: null,
                                    rowName: null,
                                    column1: null,
                                    column1AccessibilityLabel: null,
                                    column2: null,
                                    column2AccessibilityLabel: null,
                                  };
                                  const obj16 = { text: null };
                                  const intl19 = tmp(1126).intl;
                                  obj16.text = intl19.string(tmp(1126).t["Gv/rQ6"]);
                                  obj15.label = closure_11(closure_18, obj16);
                                  const intl20 = tmp(1126).intl;
                                  obj15.rowName = intl20.string(tmp(1126).t["Gv/rQ6"]);
                                  obj15.column1 = closure_11(closure_17, {});
                                  const intl21 = tmp(1126).intl;
                                  obj15.column1AccessibilityLabel = intl21.string(tmp(1126).t.l4qZrp);
                                  obj15.column2 = closure_11(closure_15, {});
                                  const intl22 = tmp(1126).intl;
                                  obj15.column2AccessibilityLabel = intl22.string(tmp(1126).t["tq+6t/"]);
                                  cResult[61] = obj15;
                                  let tmp112 = obj15;
                                } else {
                                  tmp112 = cResult[61];
                                }
                                const _Symbol12 = Symbol;
                                if (cResult[62] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj17 = {
                                    label: null,
                                    rowName: null,
                                    column1: null,
                                    column1AccessibilityLabel: null,
                                    column2: null,
                                    column2AccessibilityLabel: null,
                                  };
                                  const obj18 = { text: null };
                                  const intl23 = tmp(1126).intl;
                                  obj18.text = intl23.string(tmp(1126).t.myyAEr);
                                  obj17.label = closure_11(closure_18, obj18);
                                  const intl24 = tmp(1126).intl;
                                  obj17.rowName = intl24.string(tmp(1126).t.myyAEr);
                                  obj17.column1 = closure_11(closure_17, {});
                                  const intl25 = tmp(1126).intl;
                                  obj17.column1AccessibilityLabel = intl25.string(tmp(1126).t.l4qZrp);
                                  obj17.column2 = closure_11(closure_15, {});
                                  const intl26 = tmp(1126).intl;
                                  obj17.column2AccessibilityLabel = intl26.string(tmp(1126).t["tq+6t/"]);
                                  cResult[62] = obj17;
                                  let tmp117 = obj17;
                                } else {
                                  tmp117 = cResult[62];
                                }
                                const _Symbol13 = Symbol;
                                if (cResult[63] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj19 = {
                                    label: null,
                                    rowName: null,
                                    column1: null,
                                    column1AccessibilityLabel: null,
                                    column2: null,
                                    column2AccessibilityLabel: null,
                                  };
                                  const obj20 = { text: null };
                                  const intl27 = tmp(1126).intl;
                                  obj20.text = intl27.string(tmp(1126).t.S6yQr8);
                                  obj19.label = closure_11(closure_18, obj20);
                                  const intl28 = tmp(1126).intl;
                                  obj19.rowName = intl28.string(tmp(1126).t.S6yQr8);
                                  obj19.column1 = closure_11(closure_17, {});
                                  const intl29 = tmp(1126).intl;
                                  obj19.column1AccessibilityLabel = intl29.string(tmp(1126).t.l4qZrp);
                                  obj19.column2 = closure_11(closure_15, {});
                                  const intl30 = tmp(1126).intl;
                                  obj19.column2AccessibilityLabel = intl30.string(tmp(1126).t["tq+6t/"]);
                                  const obj21 = {
                                    withBottomBorder: false,
                                    withBottomBorderRadius: true,
                                    disableAccessibility: true,
                                  };
                                  cResult[63] = obj19;
                                  cResult[64] = obj21;
                                  let tmp123 = obj21;
                                  let tmp122 = obj19;
                                } else {
                                  tmp122 = cResult[63];
                                  tmp123 = cResult[64];
                                }
                                if (cResult[65] === tmp38) {
                                  if (cResult[66] === tmp63) {
                                    if (cResult[67] === tmp93) {
                                      if (cResult[68] === tmp111) {
                                        if (cResult[69] === tmp25) {
                                          let arr3 = cResult[70];
                                        }
                                        if (cResult[71] === style) {
                                          if (cResult[72] === tmp6.container) {
                                            let tmp129 = cResult[73];
                                          }
                                          if (cResult[74] !== titleOverride) {
                                            let stringResult9 = titleOverride;
                                            if (titleOverride == null) {
                                              const intl31 = tmp(1126).intl;
                                              stringResult9 = intl31.string(tmp(1126).t.vLz3Zs);
                                            }
                                            cResult[74] = titleOverride;
                                            cResult[75] = stringResult9;
                                            let tmp130 = stringResult9;
                                          } else {
                                            tmp130 = cResult[75];
                                          }
                                          if (cResult[76] === tmp6.headerText) {
                                            if (cResult[77] === tmp130) {
                                              let tmp132 = cResult[78];
                                            }
                                            if (cResult[79] === tmp5) {
                                              if (cResult[80] === premiumGroupRole) {
                                                if (cResult[81] === tmp6.premiumGroupCard) {
                                                  let tmp135 = cResult[82];
                                                }
                                                if (cResult[83] === arr3) {
                                                  if (cResult[84] === tmp4) {
                                                    if (cResult[85] === tmp5) {
                                                      if (cResult[86] === str) {
                                                        let tmp139 = cResult[87];
                                                      }
                                                      if (cResult[88] === tmp6.table) {
                                                        if (cResult[89] === tmp139) {
                                                          let tmp141 = cResult[90];
                                                        }
                                                        if (cResult[91] === tmp129) {
                                                          if (cResult[92] === tmp132) {
                                                            if (cResult[93] === tmp135) {
                                                              if (cResult[94] === tmp141) {
                                                                let tmp145 = cResult[95];
                                                              }
                                                              return tmp145;
                                                            }
                                                          }
                                                        }
                                                        const obj22 = { style: tmp129, children: null };
                                                        const items = [tmp132, tmp135, tmp141];
                                                        obj22.children = items;
                                                        const tmp148 = closure_12(View, obj22);
                                                        cResult[91] = tmp129;
                                                        cResult[92] = tmp132;
                                                        cResult[93] = tmp135;
                                                        cResult[94] = tmp141;
                                                        cResult[95] = tmp148;
                                                        tmp145 = tmp148;
                                                      }
                                                      const obj23 = { style: tmp138, children: tmp139 };
                                                      const tmp144 = closure_11(View, obj23);
                                                      cResult[88] = tmp6.table;
                                                      cResult[89] = tmp139;
                                                      cResult[90] = tmp144;
                                                      tmp141 = tmp144;
                                                    }
                                                  }
                                                }
                                                const mapped2 = arr3.map((item, rowNumber) => {
                                                  const obj = {};
                                                  const merged = Object.assign(item);
                                                  obj.highlightColumn1 = highlightColumn1;
                                                  obj.disableHighlightColumn2 = disableHighlightColumn2;
                                                  obj.variant = str;
                                                  obj.rowNumber = rowNumber;
                                                  return closure_2_11(closure_19, obj, rowNumber);
                                                });
                                                cResult[83] = arr3;
                                                cResult[84] = tmp4;
                                                cResult[85] = tmp5;
                                                cResult[86] = str;
                                                cResult[87] = mapped2;
                                                tmp139 = mapped2;
                                              }
                                            }
                                            let tmp136 = tmp5;
                                            if (tmp5) {
                                              tmp136 = null != premiumGroupRole;
                                            }
                                            if (tmp136) {
                                              const obj24 = { style: tmp6.premiumGroupCard, premiumGroupRole };
                                              tmp136 = closure_11(tmp7(13309), obj24);
                                            }
                                            cResult[79] = tmp5;
                                            cResult[80] = premiumGroupRole;
                                            cResult[81] = tmp6.premiumGroupCard;
                                            cResult[82] = tmp136;
                                            tmp135 = tmp136;
                                          }
                                          const obj25 = {
                                            style: tmp6.headerText,
                                            variant: "heading-xl/extrabold",
                                            color: "mobile-text-heading-primary",
                                            accessibilityRole: "header",
                                            children: tmp130,
                                          };
                                          const tmp134 = closure_11(tmp(4892).Text, obj25);
                                          cResult[76] = tmp6.headerText;
                                          cResult[77] = tmp130;
                                          cResult[78] = tmp134;
                                          tmp132 = tmp134;
                                        }
                                        const items1 = [tmp6.container, style];
                                        cResult[71] = style;
                                        cResult[72] = tmp6.container;
                                        cResult[73] = items1;
                                        tmp129 = items1;
                                      }
                                    }
                                  }
                                }
                                const items2 = [
                                  tmp25,
                                  tmp38,
                                  tmp63,
                                  tmp64,
                                  tmp76,
                                  tmp93,
                                  tmp111,
                                  tmp112,
                                  tmp117,
                                  tmp122,
                                  tmp123,
                                ];
                                const found = items2.filter((hidden) => null != hidden && !hidden.hidden);
                                cResult[65] = tmp38;
                                cResult[66] = tmp63;
                                cResult[67] = tmp93;
                                cResult[68] = tmp111;
                                cResult[69] = tmp25;
                                cResult[70] = found;
                                arr3 = found;
                              }
                            }
                          }
                          const obj26 = {
                            label: tmp39,
                            rowName: tmp40,
                            column1: tmp50,
                            column1AccessibilityLabel: priceString,
                            column2: tmp59,
                            column2AccessibilityLabel: priceString1,
                          };
                          cResult[35] = tmp50;
                          cResult[36] = tmp59;
                          cResult[37] = priceString;
                          cResult[38] = priceString1;
                          cResult[39] = obj26;
                          tmp63 = obj26;
                        }
                        const obj27 = { style: tmp54, children: cResult[30] };
                        const tmp62 = closure_11(View, obj27);
                        cResult[32] = tmp6.priceContainer;
                        cResult[33] = cResult[30];
                        cResult[34] = tmp62;
                        tmp59 = tmp62;
                      }
                    }
                    const obj28 = { style: tmp45, children: cResult[24] };
                    const tmp53 = closure_11(View, obj28);
                    cResult[26] = tmp6.priceContainer;
                    cResult[27] = cResult[24];
                    cResult[28] = tmp53;
                    tmp50 = tmp53;
                  }
                }
              }
              const obj29 = {
                column1: tmp29,
                column2: tmp35,
                withBottomBorder: false,
                withTopBorderRadius: true,
                disableAccessibility: true,
                hidden: tmp5,
              };
              cResult[17] = tmp5;
              cResult[18] = tmp29;
              cResult[19] = tmp35;
              cResult[20] = obj29;
              tmp38 = obj29;
            }
            const obj30 = { accessible: true, accessibilityLabel: tmp32, style: tmp6.logo, source: tmp7Result2 };
            const tmp37 = closure_11(tmp7(5981), obj30);
            cResult[14] = tmp6.logo;
            cResult[15] = tmp7Result2;
            cResult[16] = tmp37;
            tmp35 = tmp37;
            tmpResult6 = tmp(4735);
          }
          const obj31 = { accessible: true, accessibilityLabel: tmp26, style: tmp6.logo, source: tmp7Result };
          const tmp31 = closure_11(tmp7(5981), obj31);
          cResult[10] = tmp6.logo;
          cResult[11] = tmp7Result;
          cResult[12] = tmp31;
          tmp29 = tmp31;
          tmpResult5 = tmp(4735);
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
      let obj = require("c");
    }
  : (highlightNitroBasic) => {
      let flag = highlightNitroBasic.highlightNitroBasic;
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
      const maxFileSizeForPremiumType = flag(tmp3[20]).getMaxFileSizeForPremiumType(closure_9.TIER_0);
      let obj = flag(tmp3[20]);
      const maxFileSizeForPremiumType1 = flag(tmp3[20]).getMaxFileSizeForPremiumType(closure_9.TIER_2);
      const obj3 = {
        column1: null,
        column2: null,
        withBottomBorder: false,
        disableAccessibility: true,
        hidden: !isPremiumGroup,
      };
      const size = { style: tmp.logo, width: 48, height: 9 };
      obj3.column1 = closure_11(str(tmp3[21]), size);
      const size1 = { style: tmp.logo, width: 50, height: 9 };
      obj3.column2 = closure_11(str(tmp3[22]), size1);
      const items = [obj3, , , , , , , , , ,];
      const obj4 = { accessible: true, accessibilityLabel: null, style: null, source: null };
      const obj2 = flag(tmp3[20]);
      const intl = flag(tmp3[17]).intl;
      obj4.accessibilityLabel = intl.string(flag(tmp3[17]).t["t9uG/o"]);
      obj4.style = tmp.logo;
      const tmp2Result = str(tmp3[25]);
      if (obj7.isThemeDark(tmp4)) {
        let tmp2Result4 = tmp2(tmp3[23]);
      } else {
        tmp2Result4 = tmp2(tmp3[24]);
      }
      const obj5 = {
        column1: closure_11(tmp2Result, obj4),
        column2: null,
        withBottomBorder: false,
        withTopBorderRadius: true,
        disableAccessibility: true,
        hidden: null,
      };
      obj4.source = tmp2Result4;
      const obj6 = { accessible: true, accessibilityLabel: null, style: null, source: null };
      obj7 = flag(tmp3[12]);
      const intl2 = tmp9(tmp3[17]).intl;
      obj6.accessibilityLabel = intl2.string(tmp9(tmp3[17]).t.lG6a5x);
      obj6.style = tmp.logo;
      const tmp2Result5 = str(tmp3[25]);
      if (tmp9Result.isThemeDark(tmp4)) {
        let tmp2Result6 = tmp2(tmp3[26]);
      } else {
        tmp2Result6 = tmp2(tmp3[27]);
      }
      obj6.source = tmp2Result6;
      obj5.column2 = closure_11(tmp2Result5, obj6);
      obj5.hidden = isPremiumGroup;
      items[1] = obj5;
      const obj8 = {
        label: null,
        rowName: null,
        column1: null,
        column1AccessibilityLabel: null,
        column2: null,
        column2AccessibilityLabel: null,
      };
      const obj9 = { text: null };
      const intl3 = tmp9(tmp3[17]).intl;
      obj9.text = intl3.string(tmp9(tmp3[17]).t.LkKGZ2);
      obj8.label = closure_11(closure_18, obj9);
      const intl4 = tmp9(tmp3[17]).intl;
      obj8.rowName = intl4.string(tmp9(tmp3[17]).t.LkKGZ2);
      const obj10 = { style: tmp.priceContainer, children: null };
      const parts = priceString.split(/ (?=\()/g);
      obj10.children = parts.map((text) => closure_1_11(closure_1_18, { text }, text));
      obj8.column1 = closure_11(View, obj10);
      obj8.column1AccessibilityLabel = priceString;
      const obj11 = { style: tmp.priceContainer, children: null };
      const parts1 = priceString1.split(/ (?=\()/g);
      obj11.children = parts1.map((text) => closure_1_11(closure_1_18, { text }, text));
      obj8.column2 = closure_11(View, obj11);
      obj8.column2AccessibilityLabel = priceString1;
      items[2] = obj8;
      const obj12 = {
        label: null,
        rowName: null,
        column1: null,
        column1AccessibilityLabel: null,
        column2: null,
        column2AccessibilityLabel: null,
      };
      const obj13 = { text: null };
      const intl5 = tmp9(tmp3[17]).intl;
      obj13.text = intl5.string(tmp9(tmp3[17]).t.ORlUdL);
      obj12.label = closure_11(closure_18, obj13);
      const intl6 = tmp9(tmp3[17]).intl;
      obj12.rowName = intl6.string(tmp9(tmp3[17]).t.ORlUdL);
      obj12.column1 = closure_11(closure_15, {});
      const intl7 = tmp9(tmp3[17]).intl;
      obj12.column1AccessibilityLabel = intl7.string(tmp9(tmp3[17]).t["tq+6t/"]);
      obj12.column2 = closure_11(closure_15, {});
      const intl8 = tmp9(tmp3[17]).intl;
      obj12.column2AccessibilityLabel = intl8.string(tmp9(tmp3[17]).t["tq+6t/"]);
      items[3] = obj12;
      const obj14 = {
        label: null,
        rowName: null,
        column1: null,
        column1AccessibilityLabel: null,
        column2: null,
        column2AccessibilityLabel: null,
      };
      const obj15 = { text: null };
      const intl9 = tmp9(tmp3[17]).intl;
      obj15.text = intl9.string(tmp9(tmp3[17]).t["ufhQC+"]);
      obj14.label = closure_11(closure_18, obj15);
      const intl10 = tmp9(tmp3[17]).intl;
      obj14.rowName = intl10.string(tmp9(tmp3[17]).t["ufhQC+"]);
      obj14.column1 = closure_11(tmp9(tmp3[16]).Text, {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: maxFileSizeForPremiumType,
      });
      obj14.column1AccessibilityLabel = maxFileSizeForPremiumType;
      obj14.column2 = closure_11(tmp9(tmp3[16]).Text, {
        variant: "text-md/medium",
        color: "mobile-text-heading-primary",
        children: maxFileSizeForPremiumType1,
      });
      obj14.column2AccessibilityLabel = maxFileSizeForPremiumType1;
      items[4] = obj14;
      const obj16 = {
        label: null,
        rowName: null,
        column1: null,
        column1AccessibilityLabel: null,
        column2: null,
        column2AccessibilityLabel: null,
        hidden: null,
      };
      const obj17 = { text: null };
      const intl11 = tmp9(tmp3[17]).intl;
      obj17.text = intl11.string(tmp9(tmp3[17]).t["svn/YX"]);
      obj16.label = closure_11(closure_18, obj17);
      const intl12 = tmp9(tmp3[17]).intl;
      obj16.rowName = intl12.string(tmp9(tmp3[17]).t["svn/YX"]);
      obj16.column1 = closure_11(closure_15, {});
      const intl13 = tmp9(tmp3[17]).intl;
      obj16.column1AccessibilityLabel = intl13.string(tmp9(tmp3[17]).t["tq+6t/"]);
      obj16.column2 = closure_11(closure_15, {});
      const intl14 = tmp9(tmp3[17]).intl;
      obj16.column2AccessibilityLabel = intl14.string(tmp9(tmp3[17]).t["tq+6t/"]);
      obj16.hidden = isFractionalOnly;
      items[5] = obj16;
      const obj18 = {
        label: null,
        rowName: null,
        column1: null,
        column1AccessibilityLabel: null,
        column2: null,
        column2AccessibilityLabel: null,
        hidden: null,
      };
      const obj19 = { text: null };
      const intl15 = tmp9(tmp3[17]).intl;
      obj19.text = intl15.formatToPlainString(tmp9(tmp3[17]).t.DbkNFj, { numBoosts });
      obj18.label = closure_11(closure_18, obj19);
      const intl16 = tmp9(tmp3[17]).intl;
      obj18.rowName = intl16.formatToPlainString(tmp9(tmp3[17]).t.DbkNFj, { numBoosts });
      obj18.column1 = closure_11(closure_17, {});
      const intl17 = tmp9(tmp3[17]).intl;
      obj18.column1AccessibilityLabel = intl17.string(tmp9(tmp3[17]).t.l4qZrp);
      obj18.column2 = closure_11(closure_15, {});
      const intl18 = tmp9(tmp3[17]).intl;
      obj18.column2AccessibilityLabel = intl18.string(tmp9(tmp3[17]).t["tq+6t/"]);
      obj18.hidden = isFractionalOnly;
      items[6] = obj18;
      const obj22 = {
        label: null,
        rowName: null,
        column1: null,
        column1AccessibilityLabel: null,
        column2: null,
        column2AccessibilityLabel: null,
      };
      const obj23 = { text: null };
      const intl19 = tmp9(tmp3[17]).intl;
      obj23.text = intl19.string(tmp9(tmp3[17]).t["Gv/rQ6"]);
      obj22.label = closure_11(closure_18, obj23);
      const intl20 = tmp9(tmp3[17]).intl;
      obj22.rowName = intl20.string(tmp9(tmp3[17]).t["Gv/rQ6"]);
      obj22.column1 = closure_11(closure_17, {});
      const intl21 = tmp9(tmp3[17]).intl;
      obj22.column1AccessibilityLabel = intl21.string(tmp9(tmp3[17]).t.l4qZrp);
      obj22.column2 = closure_11(closure_15, {});
      const intl22 = tmp9(tmp3[17]).intl;
      obj22.column2AccessibilityLabel = intl22.string(tmp9(tmp3[17]).t["tq+6t/"]);
      items[7] = obj22;
      const obj24 = {
        label: null,
        rowName: null,
        column1: null,
        column1AccessibilityLabel: null,
        column2: null,
        column2AccessibilityLabel: null,
      };
      const obj25 = { text: null };
      const intl23 = tmp9(tmp3[17]).intl;
      obj25.text = intl23.string(tmp9(tmp3[17]).t.myyAEr);
      obj24.label = closure_11(closure_18, obj25);
      const intl24 = tmp9(tmp3[17]).intl;
      obj24.rowName = intl24.string(tmp9(tmp3[17]).t.myyAEr);
      obj24.column1 = closure_11(closure_17, {});
      const intl25 = tmp9(tmp3[17]).intl;
      obj24.column1AccessibilityLabel = intl25.string(tmp9(tmp3[17]).t.l4qZrp);
      obj24.column2 = closure_11(closure_15, {});
      const intl26 = tmp9(tmp3[17]).intl;
      obj24.column2AccessibilityLabel = intl26.string(tmp9(tmp3[17]).t["tq+6t/"]);
      items[8] = obj24;
      const obj26 = {
        label: null,
        rowName: null,
        column1: null,
        column1AccessibilityLabel: null,
        column2: null,
        column2AccessibilityLabel: null,
      };
      const obj27 = { text: null };
      const intl27 = tmp9(tmp3[17]).intl;
      obj27.text = intl27.string(tmp9(tmp3[17]).t.S6yQr8);
      obj26.label = closure_11(closure_18, obj27);
      const intl28 = tmp9(tmp3[17]).intl;
      obj26.rowName = intl28.string(tmp9(tmp3[17]).t.S6yQr8);
      obj26.column1 = closure_11(closure_17, {});
      const intl29 = tmp9(tmp3[17]).intl;
      obj26.column1AccessibilityLabel = intl29.string(tmp9(tmp3[17]).t.l4qZrp);
      obj26.column2 = closure_11(closure_15, {});
      const intl30 = tmp9(tmp3[17]).intl;
      obj26.column2AccessibilityLabel = intl30.string(tmp9(tmp3[17]).t["tq+6t/"]);
      items[9] = obj26;
      items[10] = { withBottomBorder: false, withBottomBorderRadius: true, disableAccessibility: true };
      const found = items.filter((hidden) => null != hidden && !hidden.hidden);
      const obj28 = { style: null, children: null };
      const items1 = [tmp.container, highlightNitroBasic.style];
      obj28.style = items1;
      const obj29 = {
        style: tmp.headerText,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        children: null,
      };
      if (titleOverride == null) {
        const intl31 = tmp9(tmp3[17]).intl;
        titleOverride = intl31.string(tmp9(tmp3[17]).t.vLz3Zs);
      }
      obj29.children = titleOverride;
      const items2 = [closure_11(tmp9(tmp3[16]).Text, obj29), ,];
      if (isPremiumGroup) {
        isPremiumGroup = null != premiumGroupRole;
      }
      if (isPremiumGroup) {
        const obj30 = { style: tmp.premiumGroupCard, premiumGroupRole };
        isPremiumGroup = closure_11(tmp2(tmp3[28]), obj30);
      }
      items2[1] = isPremiumGroup;
      const obj20 = { numBoosts };
      const obj21 = { numBoosts };
      tmp9Result = tmp9(tmp3[12]);
      items2[2] = closure_11(View, {
        style: tmp.table,
        children: found.map((item, rowNumber) => {
          const obj = {};
          const merged = Object.assign(item);
          obj.highlightColumn1 = flag;
          obj.disableHighlightColumn2 = isPremiumGroup;
          obj.variant = str;
          obj.rowNumber = rowNumber;
          return closure_2_11(closure_19, obj, rowNumber);
        }),
      });
      obj28.children = items2;
      return closure_12(View, obj28);
    };
