// === Module 16781: ConjureTraceTab ===

// Module 16781 (ConjureTraceTab)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import v1 from "v1" /* 1266 */;
import _modDef3753 from "module_3753" /* 3753 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import Card2 from "Card" /* 6002 */;
import FileManagerUtils from "FileManagerUtils" /* 7887 */;
import ConjureTraceFormat from "ConjureTraceFormat" /* 16782 */;
import debug_ConjureTraceFormat from "debug/ConjureTraceFormat" /* 16783 */;
import ConjureTraceUtils from "ConjureTraceUtils" /* 16784 */;
import ConjureTimeFormat from "ConjureTimeFormat" /* 16786 */;
import ConjureTraceDetailSheet from "ConjureTraceDetailSheet" /* 16787 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;

const require = globalThis.__r;
const ConjureTraceDetailSheetDefault = ConjureTraceDetailSheet;

require = fn;
function itemKey(key) {
  return key.key;
}
function itemType(kind) {
  return kind.kind;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { list: { paddingHorizontal: nativeDefault.space.PX_16 }, header: null, tools: null, search: null, placeholder: null, overview: null, overviewBar: null, legend: null, legendItem: null, swatch: null, groupHead: null, rowSlot: null, rowNested: null, rowBody: null, rowTop: null, rowTitle: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.header = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.tools = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.search = { flex: 1 };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.placeholder = { padding: nativeDefault.space.PX_16 };
let obj6 = { padding: nativeDefault.space.PX_16 };
obj2.overview = { gap: nativeDefault.space.PX_8 };
let obj7 = { gap: nativeDefault.space.PX_8 };
obj2.overviewBar = { flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj8 = { flexDirection: "row", height: 6, borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.legend = { gap: nativeDefault.space.PX_4 };
let obj9 = { gap: nativeDefault.space.PX_4 };
obj2.legendItem = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.swatch = { width: 8, height: 8, borderRadius: 4 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.groupHead = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
let obj11 = { flexDirection: "row", alignItems: "baseline", gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj2.rowSlot = { paddingBottom: nativeDefault.space.PX_8 };
let obj12 = { paddingBottom: nativeDefault.space.PX_8 };
obj2.rowNested = { marginLeft: nativeDefault.space.PX_16 };
let obj13 = { marginLeft: nativeDefault.space.PX_16 };
obj2.rowBody = { gap: nativeDefault.space.PX_4 };
let obj14 = { gap: nativeDefault.space.PX_4 };
obj2.rowTop = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.rowTitle = { flexShrink: 1 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((entry) => {
  const cResult = c.c(74);
  entry = entry.entry;
  let str = entry.onPress;
  const tmp4 = closure_10();
  let str2 = ConjureTraceFormat.useTraceCategoryTextStyles();
  if (cResult[0] === str2) {
    if (cResult[1] === entry) {
      if (cResult[2] === str) {
        if (cResult[3] === tmp4.rowBody) {
          if (cResult[4] === tmp4.rowNested) {
            if (cResult[5] === tmp4.rowSlot) {
              if (cResult[6] === tmp4.rowTop) {
                if (cResult[36] === cResult[7]) {
                  if (cResult[37] === tmp10) {
                    if (cResult[38] === tmp12) {
                      if (cResult[39] === tmp13) {
                        let tmp52 = cResult[40];
                      }
                      if (cResult[41] === tmp4.rowTitle) {
                        if (cResult[42] === tmp20) {
                          let tmp55 = cResult[43];
                        }
                        if (cResult[44] !== tmp21) {
                          let tmp59 = null;
                          if (null != tmp21) {
                            const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp21 };
                            tmp59 = closure_1_8(Text_Text.Text, obj3);
                          }
                          cResult[44] = tmp21;
                          cResult[45] = tmp59;
                          let tmp58 = tmp59;
                        } else {
                          tmp58 = cResult[45];
                        }
                        if (cResult[46] === tmp6) {
                          if (cResult[47] === tmp52) {
                            if (cResult[48] === tmp55) {
                              if (cResult[49] === tmp58) {
                                if (cResult[50] === tmp14) {
                                  if (cResult[51] === tmp15) {
                                    let tmp61 = cResult[52];
                                  }
                                  if (cResult[53] === entry.kind) {
                                    if (cResult[54] === entry.summary) {
                                      let tmp64 = cResult[55];
                                    }
                                    if (cResult[56] !== entry.error) {
                                      let tmp69 = null;
                                      if (null != entry.error) {
                                        const obj4 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: entry.error };
                                        tmp69 = closure_1_8(Text_Text.Text, obj4);
                                      }
                                      cResult[56] = entry.error;
                                      cResult[57] = tmp69;
                                      let tmp68 = tmp69;
                                    } else {
                                      tmp68 = cResult[57];
                                    }
                                    if (cResult[58] === tmp7) {
                                      if (cResult[59] === tmp61) {
                                        if (cResult[60] === tmp64) {
                                          if (cResult[61] === tmp68) {
                                            if (cResult[62] === tmp16) {
                                              let tmp71 = cResult[63];
                                            }
                                            if (cResult[64] === tmp8) {
                                              if (cResult[65] === tmp71) {
                                                if (cResult[66] === tmp17) {
                                                  if (cResult[67] === tmp18) {
                                                    if (cResult[68] === tmp19) {
                                                      let tmp74 = cResult[69];
                                                    }
                                                    if (cResult[70] === tmp9) {
                                                      if (cResult[71] === tmp11) {
                                                        if (cResult[72] === tmp74) {
                                                          let tmp77 = cResult[73];
                                                        }
                                                        return tmp77;
                                                      }
                                                    }
                                                    const obj5 = { style: tmp11, children: tmp74 };
                                                    const tmp79 = closure_1_8(tmp9, obj5);
                                                    cResult[70] = tmp9;
                                                    cResult[71] = tmp11;
                                                    cResult[72] = tmp74;
                                                    cResult[73] = tmp79;
                                                    tmp77 = tmp79;
                                                  }
                                                }
                                              }
                                            }
                                            const obj6 = { variant: tmp17, onPress: tmp18, accessibilityLabel: tmp19, children: tmp71 };
                                            const tmp76 = closure_1_8(tmp8, obj6);
                                            cResult[64] = tmp8;
                                            cResult[65] = tmp71;
                                            cResult[66] = tmp17;
                                            cResult[67] = tmp18;
                                            cResult[68] = tmp19;
                                            cResult[69] = tmp76;
                                            tmp74 = tmp76;
                                          }
                                        }
                                      }
                                    }
                                    const obj7 = { style: tmp16, children: null };
                                    const items = [tmp61, tmp64, tmp68];
                                    obj7.children = items;
                                    const tmp73 = options(tmp7, obj7);
                                    cResult[58] = tmp7;
                                    cResult[59] = tmp61;
                                    cResult[60] = tmp64;
                                    cResult[61] = tmp68;
                                    cResult[62] = tmp16;
                                    cResult[63] = tmp73;
                                    tmp71 = tmp73;
                                  }
                                  let tmp66 = null;
                                  if ("tool" === entry.kind) {
                                    tmp66 = null;
                                    if (null != entry.summary) {
                                      const obj8 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: entry.summary };
                                      tmp66 = closure_1_8(Text_Text.Text, obj8);
                                    }
                                  }
                                  cResult[53] = entry.kind;
                                  cResult[54] = entry.summary;
                                  cResult[55] = tmp66;
                                  tmp64 = tmp66;
                                }
                              }
                            }
                          }
                        }
                        const obj9 = { style: tmp14, children: null };
                        const items1 = [tmp15, tmp52, tmp55, tmp58];
                        obj9.children = items1;
                        const tmp63 = options(tmp6, obj9);
                        cResult[46] = tmp6;
                        cResult[47] = tmp52;
                        cResult[48] = tmp55;
                        cResult[49] = tmp58;
                        cResult[50] = tmp14;
                        cResult[51] = tmp15;
                        cResult[52] = tmp63;
                        tmp61 = tmp63;
                      }
                      const obj10 = { variant: "text-xs/semibold", color: "text-default", style: tmp4.rowTitle, lineClamp: 1, children: tmp20 };
                      const tmp57 = closure_1_8(Text_Text.Text, obj10);
                      cResult[41] = tmp4.rowTitle;
                      cResult[42] = tmp20;
                      cResult[43] = tmp57;
                      tmp55 = tmp57;
                    }
                  }
                }
                const obj11 = { variant: cResult[12], style: cResult[14], children: cResult[15] };
                const tmp54 = closure_1_8(cResult[7], obj11);
                cResult[36] = cResult[7];
                cResult[37] = cResult[12];
                cResult[38] = cResult[14];
                cResult[39] = cResult[15];
                cResult[40] = tmp54;
                tmp52 = tmp54;
              }
            }
          }
        }
      }
    }
  }
  const traceCategoryResult = ConjureTraceUtils.traceCategory(entry);
  const tmp23 = "model" === entry.kind ? entry.model : entry.tool;
  if (cResult[24] === entry.durationMs) {
    if (cResult[25] === entry.kind) {
      if (cResult[26] === entry.promptTokens) {
        let rowNested = "tool" === entry.kind;
        if (rowNested) {
          rowNested = null != entry.parentId;
        }
        if (rowNested) {
          rowNested = tmp4.rowNested;
        }
        if (cResult[28] === tmp4.rowSlot) {
          if (cResult[29] === rowNested) {
            let tmp30 = cResult[30];
          }
          const Card = Card2.Card;
          if (cResult[31] === entry) {
            if (cResult[32] === str) {
              let tmp31 = cResult[33];
            }
            ({ rowBody, rowTop } = tmp4);
            if (cResult[34] !== entry.status) {
              const obj12 = { status: entry.status };
              const tmp34 = closure_1_8(ConjureTraceFormat.TraceStatusDot, obj12);
              cResult[34] = entry.status;
              cResult[35] = tmp34;
              let tmp32 = tmp34;
            } else {
              tmp32 = cResult[35];
            }
            const Text = Text_Text.Text;
            const categoryLabelResult = debug_ConjureTraceFormat.categoryLabel(traceCategoryResult);
            cResult[0] = str2;
            cResult[1] = entry;
            cResult[2] = str;
            cResult[3] = tmp4.rowBody;
            cResult[4] = tmp4.rowNested;
            cResult[5] = tmp4.rowSlot;
            cResult[6] = tmp4.rowTop;
            cResult[7] = Text;
            cResult[8] = View;
            cResult[9] = View;
            cResult[10] = Card;
            cResult[11] = View;
            str = "text-xs/semibold";
            cResult[12] = "text-xs/semibold";
            cResult[13] = tmp30;
            cResult[14] = str2[traceCategoryResult];
            cResult[15] = categoryLabelResult;
            cResult[16] = rowTop;
            cResult[17] = tmp32;
            cResult[18] = rowBody;
            str2 = "primary";
            cResult[19] = "primary";
            cResult[20] = tmp31;
            cResult[21] = tmp23;
            cResult[22] = tmp23;
            cResult[23] = tmp24;
            const tmpResult4 = debug_ConjureTraceFormat;
          }
          const fn = function k() {
            return str(entry);
          };
          cResult[31] = entry;
          cResult[32] = str;
          cResult[33] = fn;
          tmp31 = fn;
        }
        const items2 = [tmp4.rowSlot, rowNested];
        cResult[28] = tmp4.rowSlot;
        cResult[29] = rowNested;
        cResult[30] = items2;
        tmp30 = items2;
      }
    }
  }
  if ("model" !== entry.kind) {
    let formatDurationResult = null;
    if (null != entry.durationMs) {
      formatDurationResult = debug_ConjureTraceFormat.formatDuration(entry.durationMs);
      const tmpResult5 = debug_ConjureTraceFormat;
    }
    cResult[24] = entry.durationMs;
    cResult[25] = entry.kind;
    cResult[26] = entry.promptTokens;
    cResult[27] = formatDurationResult;
  }
  const intl = util.intl;
  const obj13 = { tokens: null };
  const tmpResult = ConjureTraceUtils;
  obj13.tokens = debug_ConjureTraceFormat.formatTokens(entry.promptTokens);
  formatDurationResult = intl.formatToPlainString(_modDef3753["6GQUgQ"], obj13);
  const tmpResult6 = debug_ConjureTraceFormat;
}) : ((entry) => {
  entry = entry.entry;
  const onPress = entry.onPress;
  const tmp = closure_10();
  const traceCategoryTextStyles = ConjureTraceFormat.useTraceCategoryTextStyles();
  const traceCategoryResult = ConjureTraceUtils.traceCategory(entry);
  const tmp6 = "model" === entry.kind ? entry.model : entry.tool;
  if ("model" === entry.kind) {
    if (null != entry.promptTokens) {
      const intl = util.intl;
      const obj3 = { tokens: debug_ConjureTraceFormat.formatTokens(entry.promptTokens) };
      let formatToPlainStringResult = intl.formatToPlainString(_modDef3753["6GQUgQ"], obj3);
      const tmp2Result = debug_ConjureTraceFormat;
    }
    const items = [tmp.rowSlot, ];
    let rowNested = "tool" === entry.kind;
    if (rowNested) {
      rowNested = null != entry.parentId;
    }
    if (rowNested) {
      rowNested = tmp.rowNested;
    }
    const obj4 = { style: null, children: null };
    items[1] = rowNested;
    obj4.style = items;
    const obj5 = {
      variant: "primary",
      onPress() {
          return onPress(entry);
        },
      accessibilityLabel: tmp6,
      children: null
    };
    const obj6 = { style: tmp.rowBody, children: null };
    const obj7 = { style: tmp.rowTop, children: null };
    const obj8 = { status: entry.status };
    const items1 = [closure_1_8(ConjureTraceFormat.TraceStatusDot, obj8), , , ];
    const obj9 = { variant: "text-xs/semibold", style: traceCategoryTextStyles[traceCategoryResult], children: debug_ConjureTraceFormat.categoryLabel(traceCategoryResult) };
    items1[1] = closure_1_8(Text_Text.Text, obj9);
    const obj10 = { variant: "text-xs/semibold", color: "text-default", style: tmp.rowTitle, lineClamp: 1, children: tmp6 };
    items1[2] = closure_1_8(Text_Text.Text, obj10);
    let tmp10Result = null;
    if (null != formatToPlainStringResult) {
      const obj11 = { variant: "text-xs/normal", color: "text-subtle", children: formatToPlainStringResult };
      tmp10Result = closure_1_8(Text_Text.Text, obj11);
    }
    items1[3] = tmp10Result;
    obj7.children = items1;
    const items2 = [options(View, obj7), , ];
    let tmp10Result3 = null;
    if ("tool" === entry.kind) {
      tmp10Result3 = null;
      if (null != entry.summary) {
        const obj12 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: entry.summary };
        tmp10Result3 = closure_1_8(Text_Text.Text, obj12);
      }
    }
    items2[1] = tmp10Result3;
    let tmp10Result4 = null;
    if (null != entry.error) {
      const obj13 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: entry.error };
      tmp10Result4 = closure_1_8(Text_Text.Text, obj13);
    }
    items2[2] = tmp10Result4;
    obj6.children = items2;
    obj5.children = options(View, obj6);
    obj4.children = closure_1_8(Card2.Card, obj5);
    return closure_1_8(View, obj4);
  }
  formatToPlainStringResult = null;
  if (null != entry.durationMs) {
    formatToPlainStringResult = debug_ConjureTraceFormat.formatDuration(entry.durationMs);
    const tmp2Result4 = debug_ConjureTraceFormat;
  }
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((entries) => {
  const cResult = require("c").c(23);
  entries = entries.entries;
  const tmp4 = closure_10();
  _require = tmp4;
  let obj = require("c");
  const traceCategoryFillStyles = require("ConjureTraceFormat").useTraceCategoryFillStyles();
  if (cResult[0] !== entries) {
    const traceCategoryTotalsResult = tmp(tmp2[11]).traceCategoryTotals(entries);
    cResult[0] = entries;
    cResult[1] = traceCategoryTotalsResult;
    arr = traceCategoryTotalsResult;
    const tmpResult = tmp(tmp2[11]);
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function x(arg0, ms) {
      return arg0 + ms.ms;
    };
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const reduced = arr.reduce(tmp7, 0);
  if (cResult[3] === traceCategoryFillStyles) {
    if (cResult[4] === reduced) {
      if (cResult[5] === arr) {
        let tmp10 = cResult[6];
      }
      if (cResult[7] === tmp4.overviewBar) {
        if (cResult[8] === tmp10) {
          let tmp12 = cResult[9];
        }
        if (cResult[10] === traceCategoryFillStyles) {
          if (cResult[11] === reduced) {
            if (cResult[12] === tmp4.legendItem) {
              if (cResult[13] === tmp4.swatch) {
                if (cResult[14] === arr) {
                  let tmp17 = cResult[15];
                }
                if (cResult[16] === tmp4.legend) {
                  if (cResult[17] === tmp17) {
                    let tmp19 = cResult[18];
                  }
                  if (cResult[19] === tmp4.overview) {
                    if (cResult[20] === tmp12) {
                      if (cResult[21] === tmp19) {
                        let tmp23 = cResult[22];
                      }
                      return tmp23;
                    }
                  }
                  let obj3 = { style: tmp9, children: null };
                  let items = [tmp12, tmp19];
                  obj3.children = items;
                  const tmp26 = closure_9(View, obj3);
                  cResult[19] = tmp4.overview;
                  cResult[20] = tmp12;
                  cResult[21] = tmp19;
                  cResult[22] = tmp26;
                  tmp23 = tmp26;
                }
                let obj4 = { style: tmp16, children: tmp17 };
                const tmp22 = closure_8(View, obj4);
                cResult[16] = tmp4.legend;
                cResult[17] = tmp17;
                cResult[18] = tmp22;
                tmp19 = tmp22;
              }
            }
          }
        }
        const TRACE_CATEGORIES = tmp(tmp2[11]).TRACE_CATEGORIES;
        const mapped = TRACE_CATEGORIES.map((item) => {
          closure_0 = item;
          const found = arr.find((category) => category.category === closure_0);
          let num;
          if (found != null) {
            num = found.ms;
          }
          if (num == null) {
            num = 0;
          }
          let num2 = 0;
          if (0 !== reduced) {
            const _Math = Math;
            num2 = Math.round(num / tmp2 * 100);
          }
          const obj = { style: closure_0.legendItem, children: null };
          const obj2 = { style: null };
          const items = [closure_0.swatch, traceCategoryFillStyles[item]];
          obj2.style = items;
          const items1 = [closure_2_8(View, obj2), , , , ];
          const obj3 = { variant: "text-xs/normal", color: "text-muted", children: debug_ConjureTraceFormat.categoryLabel(item) };
          items1[1] = closure_2_8(Text_Text.Text, obj3);
          const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: null };
          const intl = util.intl;
          obj5.children = intl.formatToPlainString(_modDef3753["3dQ1ly"], { percent: num2 });
          items1[2] = closure_2_8(Text_Text.Text, obj5);
          const intl2 = util.intl;
          let num4;
          if (found != null) {
            num4 = found.calls;
          }
          if (num4 == null) {
            num4 = 0;
          }
          items1[3] = closure_2_8(Text_Text.Text, { variant: "text-xs/normal", color: "text-subtle", children: intl2.formatToPlainString(_modDef3753.Ow0k34, { count: num4 }) });
          let tmp6Result = null;
          if (0 !== num) {
            const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: debug_ConjureTraceFormat.formatDuration(num) };
            tmp6Result = closure_2_8(Text_Text.Text, obj7);
            const tmp7Result = debug_ConjureTraceFormat;
          }
          items1[4] = tmp6Result;
          obj.children = items1;
          return options(View, obj, item);
        });
        cResult[10] = traceCategoryFillStyles;
        cResult[11] = reduced;
        cResult[12] = tmp4.legendItem;
        cResult[13] = tmp4.swatch;
        cResult[14] = arr;
        cResult[15] = mapped;
        tmp17 = mapped;
      }
      let obj5 = { style: tmp4.overviewBar, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp10 };
      const tmp15 = closure_8(View, obj5);
      cResult[7] = tmp4.overviewBar;
      cResult[8] = tmp10;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
  }
  let mapped1 = null;
  if (0 !== reduced) {
    mapped1 = arr.map((item) => {
      ({ category, ms } = item);
      let tmp = null;
      if (0 !== ms) {
        const obj = { style: null };
        const items = [traceCategoryFillStyles[category], ];
        const obj2 = { flex: ms };
        items[1] = obj2;
        obj.style = items;
        tmp = closure_2_8(View, obj, category);
      }
      return tmp;
    });
  }
  cResult[3] = traceCategoryFillStyles;
  cResult[4] = reduced;
  cResult[5] = arr;
  cResult[6] = mapped1;
  tmp10 = mapped1;
  let obj2 = require("ConjureTraceFormat");
}) : ((arg0) => {
  const entries = arg0.entries;
  let tmp = closure_10();
  closure_1 = tmp;
  dependencyMap = entries(16782).useTraceCategoryFillStyles();
  let items = [entries];
  const memo = noop.useMemo(() => ConjureTraceUtils.traceCategoryTotals(entries), items);
  const reduced = memo.reduce((acc, ms) => acc + ms.ms, 0);
  let obj2 = { style: tmp.overview, children: null };
  let obj3 = { style: tmp.overviewBar, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  let mapped = null;
  if (0 !== reduced) {
    mapped = memo.map((item) => {
      ({ category, ms } = item);
      let tmp = null;
      if (0 !== ms) {
        const obj = { style: null };
        const items = [dependencyMap[category], ];
        const obj2 = { flex: ms };
        items[1] = obj2;
        obj.style = items;
        tmp = closure_2_8(View, obj, category);
      }
      return tmp;
    });
  }
  obj3.children = mapped;
  let items1 = [closure_8(View, obj3), ];
  let obj4 = { style: tmp.legend, children: null };
  const TRACE_CATEGORIES = entries(16784).TRACE_CATEGORIES;
  obj4.children = TRACE_CATEGORIES.map((item) => {
    closure_0 = item;
    const found = memo.find((category) => category.category === closure_0);
    let num;
    if (found != null) {
      num = found.ms;
    }
    if (num == null) {
      num = 0;
    }
    let num2 = 0;
    if (0 !== reduced) {
      const _Math = Math;
      num2 = Math.round(num / tmp2 * 100);
    }
    const obj = { style: closure_1.legendItem, children: null };
    const obj2 = { style: null };
    const items = [closure_1.swatch, dependencyMap[item]];
    obj2.style = items;
    const items1 = [closure_2_8(View, obj2), , , , ];
    const obj3 = { variant: "text-xs/normal", color: "text-muted", children: debug_ConjureTraceFormat.categoryLabel(item) };
    items1[1] = closure_2_8(Text_Text.Text, obj3);
    const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: null };
    const intl = util.intl;
    obj5.children = intl.formatToPlainString(_modDef3753["3dQ1ly"], { percent: num2 });
    items1[2] = closure_2_8(Text_Text.Text, obj5);
    const intl2 = util.intl;
    let num4;
    if (found != null) {
      num4 = found.calls;
    }
    if (num4 == null) {
      num4 = 0;
    }
    items1[3] = closure_2_8(Text_Text.Text, { variant: "text-xs/normal", color: "text-subtle", children: intl2.formatToPlainString(_modDef3753.Ow0k34, { count: num4 }) });
    let tmp6Result = null;
    if (0 !== num) {
      const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: debug_ConjureTraceFormat.formatDuration(num) };
      tmp6Result = closure_2_8(Text_Text.Text, obj7);
      const tmp7Result = debug_ConjureTraceFormat;
    }
    items1[4] = tmp6Result;
    obj.children = items1;
    return options(View, obj, item);
  });
  items1[1] = closure_8(View, obj4);
  obj2.children = items1;
  return closure_9(View, obj2);
});
ReactCompilerGating = fn(558);
const obj15 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureTraceTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = projectId(stateFromStoresArray[9]).c(59);
  projectId = projectId.projectId;
  const tmp4 = closure_10();
  importDefault = tmp4;
  const bottom = require("useSafeAreaInsets")().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function v() {
      return ConjureProjectStore.getTrace(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = projectId(stateFromStoresArray[9]);
  stateFromStoresArray = projectId(stateFromStoresArray[18]).useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureProjectStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== projectId) {
    const fn2 = function _() {
      return ConjureProjectStore.getHistoryState(projectId, "trace");
    };
    const items3 = [projectId];
    cResult[5] = projectId;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp13 = items3;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  let tmpResult = projectId(stateFromStoresArray[18]);
  const stateFromStores = projectId(stateFromStoresArray[18]).useStateFromStores(tmp10, tmp12, tmp13);
  let obj4 = noop;
  const tmpResult3 = projectId(stateFromStoresArray[18]);
  first1 = first1(noop.useState(""), 2)[0];
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return projectId(closure_2[19]).clearTraceDetailCache;
      }
    }
    cResult[8] = I;
  } else {
    class I {
      constructor() {
        return projectId(closure_2[19]).clearTraceDetailCache;
      }
    }
  }
  if (cResult[9] !== projectId) {
    class I {
      constructor() {
        return projectId(closure_2[19]).clearTraceDetailCache;
      }
    }
    tmp19[0] = projectId;
    cResult[9] = projectId;
    cResult[10] = tmp19;
  } else {
    class I {
      constructor() {
        return projectId(closure_2[19]).clearTraceDetailCache;
      }
    }
  }
  const effect = obj4.useEffect(I, tmp19);
  if (cResult[11] === stateFromStoresArray) {
    class I {
      constructor() {
        return projectId(closure_2[19]).clearTraceDetailCache;
      }
    }
    if (cResult[14] !== projectId) {
      class X {
        constructor(arg0) {
          obj = closure_0(closure_2[21]);
          obj1 = { key: closure_0(closure_2[22]).CONJURE_TRACE_DETAIL_SHEET_KEY, content: null };
          obj4 = { projectId, entryId: projectId.id, initialEntry: projectId };
          obj1.content = jsx(closure_1(closure_2[22]), obj4);
          showActionSheetResult = obj.showActionSheet(obj1);
          return;
        }
      }
      cResult[14] = projectId;
      cResult[15] = X;
    } else {
      class X {
        constructor(arg0) {
          obj = closure_0(closure_2[21]);
          obj1 = { key: closure_0(closure_2[22]).CONJURE_TRACE_DETAIL_SHEET_KEY, content: null };
          obj4 = { projectId, entryId: projectId.id, initialEntry: projectId };
          obj1.content = jsx(closure_1(closure_2[22]), obj4);
          showActionSheetResult = obj.showActionSheet(obj1);
          return;
        }
      }
    }
    noop = X;
    if (cResult[16] === X) {
      class X {
        constructor(arg0) {
          obj = closure_0(closure_2[21]);
          obj1 = { key: closure_0(closure_2[22]).CONJURE_TRACE_DETAIL_SHEET_KEY, content: null };
          obj4 = { projectId, entryId: projectId.id, initialEntry: projectId };
          obj1.content = jsx(closure_1(closure_2[22]), obj4);
          showActionSheetResult = obj.showActionSheet(obj1);
          return;
        }
      }
      if (cResult[19] === stateFromStoresArray) {
        class X {
          constructor(arg0) {
            obj = closure_0(closure_2[21]);
            obj1 = { key: closure_0(closure_2[22]).CONJURE_TRACE_DETAIL_SHEET_KEY, content: null };
            obj4 = { projectId, entryId: projectId.id, initialEntry: projectId };
            obj1.content = jsx(closure_1(closure_2[22]), obj4);
            showActionSheetResult = obj.showActionSheet(obj1);
            return;
          }
        }
        class O {
          constructor() {
            combined = "vibegrations-trace-" + projectId + ".json";
            closure_0 = combined;
            obj = closure_0(closure_2[23]);
            combined1 = "vibegrations-trace-" + obj.v4();
            closure_1 = combined1;
            obj2 = closure_0(closure_2[24]);
            combined2 = "" + combined1 + "/" + combined;
            obj3 = closure_0(closure_2[11]);
            date = new Date();
            writeFileResult = obj2.writeFile("cache", combined2, obj3.traceExportPayload(projectId, closure_2, date.toISOString()), "utf8");
            nextPromise = writeFileResult.then((result) => {
              if (null == result) {
                const _Error = Error;
                const error = new Error("trace file was not written");
                throw error;
              } else {
                const _encodeURI = encodeURI;
                const _HermesInternal = HermesInternal;
                combined = "file://" + encodeURI(result.replace(/^file:\/*/, "/"));
                const obj2 = { sourceUris: null, fileName: null, mimeType: "application/json", copy: true };
                const items = [combined];
                obj2.sourceUris = items;
                obj2.fileName = combined;
                return projectId(stateFromStoresArray[25]).saveDocuments(obj2);
              }
            });
            cleanupPromise = nextPromise.finally(closure_3(async () => {
              if (dependencyMap === 2) {
                dependencyMap = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  dependencyMap = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      combined = tmp4;
                      c1 = 1;
                      dependencyMap = 1;
                      const obj6 = { value: combined(7887).clearFolder("cache", combined1), done: false };
                      return obj6;
                    }
                  } else if (1 === tmp4) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      const obj7 = { value, done: true };
                      return obj7;
                    } else {
                      c1 = 2;
                      dependencyMap = 1;
                      const obj8 = { value: combined(7887).removeFile("cache", closure_128_1), done: false };
                      return obj8;
                    }
                  } else if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    dependencyMap = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp12) {
                  dependencyMap = tmp;
                  throw tmp12;
                }
              }
            }));
            catchPromise = cleanupPromise.catch((error) => {
              if (obj.isErrorWithCode(error)) {
                const code = error.code;
                const OPERATION_CANCELED = combined(stateFromStoresArray[25]).errorCodes.OPERATION_CANCELED;
              }
              obj = combined(stateFromStoresArray[25]);
            });
            return;
          }
        }
      }
      class O {
        constructor() {
          combined = "vibegrations-trace-" + projectId + ".json";
          closure_0 = combined;
          obj = closure_0(closure_2[23]);
          combined1 = "vibegrations-trace-" + obj.v4();
          closure_1 = combined1;
          obj2 = closure_0(closure_2[24]);
          combined2 = "" + combined1 + "/" + combined;
          obj3 = closure_0(closure_2[11]);
          date = new Date();
          writeFileResult = obj2.writeFile("cache", combined2, obj3.traceExportPayload(projectId, closure_2, date.toISOString()), "utf8");
          nextPromise = writeFileResult.then((result) => {
            if (null == result) {
              const _Error = Error;
              const error = new Error("trace file was not written");
              throw error;
            } else {
              const _encodeURI = encodeURI;
              const _HermesInternal = HermesInternal;
              combined = "file://" + encodeURI(result.replace(/^file:\/*/, "/"));
              const obj2 = { sourceUris: null, fileName: null, mimeType: "application/json", copy: true };
              const items = [combined];
              obj2.sourceUris = items;
              obj2.fileName = combined;
              return projectId(stateFromStoresArray[25]).saveDocuments(obj2);
            }
          });
          cleanupPromise = nextPromise.finally(closure_3(async () => {
            if (dependencyMap === 2) {
              dependencyMap = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                dependencyMap = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    combined = tmp4;
                    c1 = 1;
                    dependencyMap = 1;
                    const obj6 = { value: combined(7887).clearFolder("cache", combined1), done: false };
                    return obj6;
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj7 = { value, done: true };
                    return obj7;
                  } else {
                    c1 = 2;
                    dependencyMap = 1;
                    const obj8 = { value: combined(7887).removeFile("cache", closure_128_1), done: false };
                    return obj8;
                  }
                } else if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  dependencyMap = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp12) {
                dependencyMap = tmp;
                throw tmp12;
              }
            }
          }));
          catchPromise = cleanupPromise.catch((error) => {
            if (obj.isErrorWithCode(error)) {
              const code = error.code;
              const OPERATION_CANCELED = combined(stateFromStoresArray[25]).errorCodes.OPERATION_CANCELED;
            }
            obj = combined(stateFromStoresArray[25]);
          });
          return;
        }
      }
      cResult[19] = stateFromStoresArray;
      cResult[20] = projectId;
      cResult[21] = O;
    }
    const fn3 = function j(item) {
      item = item.item;
      if ("entry" === item.kind) {
        const obj2 = { entry: item.entry, onPress };
        let tmp9Result = closure_2_8(closure_11, obj2);
      } else {
        const obj3 = { style: groupHead.groupHead, children: null };
        const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: item.label };
        const items = [closure_2_8(Text_Text.Text, obj4), , ];
        let tmp2 = null;
        if (null != item.started) {
          const obj = { variant: "text-xs/normal", color: "text-subtle", children: item.started };
          tmp2 = closure_2_8(Text_Text.Text, obj);
        }
        items[1] = tmp2;
        let tmp3 = null;
        if (null != item.spanMs) {
          const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: debug_ConjureTraceFormat.formatDuration(item.spanMs) };
          tmp3 = closure_2_8(Text_Text.Text, obj5);
          const tmp13Result = debug_ConjureTraceFormat;
        }
        items[2] = tmp3;
        obj3.children = items;
        tmp9Result = options(View, obj3);
      }
      return tmp9Result;
    };
    cResult[16] = X;
    cResult[17] = tmp4.groupHead;
    cResult[18] = fn3;
  }
  const items4 = [];
  const tmp15 = first1(noop.useState(""), 2);
  const tmpResult4 = projectId(stateFromStoresArray[11]);
  let item = projectId(stateFromStoresArray[11]).groupTraceByTurn(stateFromStoresArray).forEach((turnId, index) => {
    const filterTraceResult = ConjureTraceUtils.filterTrace(turnId.entries, first1);
    if (0 !== filterTraceResult.length) {
      turnId = turnId.turnId;
      if (turnId == null) {
        turnId = index;
      }
      const obj2 = { kind: "group", key: null, label: null, started: null, spanMs: null };
      const _HermesInternal = HermesInternal;
      obj2.key = "group-" + turnId;
      const intl = util.intl;
      const obj3 = { number: index + 1 };
      obj2.label = intl.formatToPlainString(_modDef3753.gPwGYA, obj3);
      obj2.started = ConjureTimeFormat.formatClockTime(turnId.startedAt);
      obj2.spanMs = turnId.spanMs;
      items4.push(obj2);
      for (const item10041 of filterTraceResult) {
        let obj4 = { kind: "entry", key: item10041.id, entry: item10041 };
        let arr3 = items4.push(obj4);
        continue;
      }
      const tmpResult = ConjureTimeFormat;
    }
  });
  cResult[11] = stateFromStoresArray;
  cResult[12] = first1;
  cResult[13] = items4;
  const groupTraceByTurnResult = projectId(stateFromStoresArray[11]).groupTraceByTurn(stateFromStoresArray);
}) : ((projectId) => {
  projectId = projectId.projectId;
  let stateFromStoresArray;
  let onPress;
  const tmp = closure_10();
  importDefault = tmp;
  let items = [ConjureProjectStore];
  const items1 = [projectId];
  stateFromStoresArray = projectId(stateFromStoresArray[18]).useStateFromStoresArray(items, () => ConjureProjectStore.getTrace(projectId), items1);
  let obj = projectId(stateFromStoresArray[18]);
  const items2 = [ConjureProjectStore];
  const items3 = [projectId];
  const stateFromStores = projectId(stateFromStoresArray[18]).useStateFromStores(items2, () => ConjureProjectStore.getHistoryState(projectId, "trace"), items3);
  const tmp6 = onPress(noop.useState(""), 2);
  const first = tmp6[0];
  const items4 = [projectId];
  const effect = noop.useEffect(() => projectId(stateFromStoresArray[19]).clearTraceDetailCache, items4);
  const items5 = [stateFromStoresArray, first];
  const items6 = [projectId];
  const memo = noop.useMemo(() => {
    const items = [];
    let obj = projectId(stateFromStoresArray[11]);
    const item = projectId(stateFromStoresArray[11]).groupTraceByTurn(stateFromStoresArray).forEach((turnId, index) => {
      const filterTraceResult = ConjureTraceUtils.filterTrace(turnId.entries, first);
      if (0 !== filterTraceResult.length) {
        turnId = turnId.turnId;
        if (turnId == null) {
          turnId = index;
        }
        const obj2 = { kind: "group", key: null, label: null, started: null, spanMs: null };
        const _HermesInternal = HermesInternal;
        obj2.key = "group-" + turnId;
        const intl = util.intl;
        const obj3 = { number: index + 1 };
        obj2.label = intl.formatToPlainString(_modDef3753.gPwGYA, obj3);
        obj2.started = ConjureTimeFormat.formatClockTime(turnId.startedAt);
        obj2.spanMs = turnId.spanMs;
        items.push(obj2);
        for (const item10041 of filterTraceResult) {
          let obj4 = { kind: "entry", key: item10041.id, entry: item10041 };
          let arr3 = items.push(obj4);
          continue;
        }
        const tmpResult = ConjureTimeFormat;
      }
    });
    return items;
  }, items5);
  onPress = noop.useCallback((entryId) => {
    const obj2 = { key: ConjureTraceDetailSheet.CONJURE_TRACE_DETAIL_SHEET_KEY, content: closure_2_8(ConjureTraceDetailSheetDefault, { projectId, entryId: entryId.id, initialEntry: entryId }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items6);
  const items7 = [onPress, tmp];
  const items8 = [stateFromStoresArray, projectId];
  const callback1 = noop.useCallback((item) => {
    item = item.item;
    if ("entry" === item.kind) {
      const obj2 = { entry: item.entry, onPress };
      let tmp9Result = closure_2_8(closure_11, obj2);
    } else {
      const obj3 = { style: groupHead.groupHead, children: null };
      const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: item.label };
      const items = [closure_2_8(Text_Text.Text, obj4), , ];
      let tmp2 = null;
      if (null != item.started) {
        const obj = { variant: "text-xs/normal", color: "text-subtle", children: item.started };
        tmp2 = closure_2_8(Text_Text.Text, obj);
      }
      items[1] = tmp2;
      let tmp3 = null;
      if (null != item.spanMs) {
        const obj5 = { variant: "text-xs/normal", color: "text-subtle", children: debug_ConjureTraceFormat.formatDuration(item.spanMs) };
        tmp3 = closure_2_8(Text_Text.Text, obj5);
        const tmp13Result = debug_ConjureTraceFormat;
      }
      items[2] = tmp3;
      obj3.children = items;
      tmp9Result = options(View, obj3);
    }
    return tmp9Result;
  }, items7);
  if (0 === stateFromStoresArray.length) {
    let obj3 = { style: tmp.placeholder, children: null };
    let obj4 = { state: stateFromStores, emptyTitle: null, emptyBody: null };
    let intl = tmp4(tmp3[12]).intl;
    obj4.emptyTitle = intl.string(tmp2(tmp3[13])["Tpvy/s"]);
    const intl2 = tmp4(tmp3[12]).intl;
    obj4.emptyBody = intl2.string(tmp2(tmp3[13]).J0WcVA);
    obj3.children = closure_8(tmp4(tmp3[26]).ConjureHistoryPlaceholder, obj4);
    let tmp15 = closure_8(View, obj3);
  } else {
    let obj5 = { data: memo, keyExtractor: itemKey, getItemType: itemType, renderItem: callback1, ListHeaderComponent: null, ListEmptyComponent: null, contentContainerStyle: null, keyboardShouldPersistTaps: "handled" };
    let obj6 = { style: tmp.header, children: null };
    let obj7 = { entries: stateFromStoresArray };
    const items9 = [closure_8(closure_12, obj7), , ];
    let obj8 = { style: tmp.tools, children: null };
    const obj9 = { style: tmp.search, children: null };
    const obj10 = { accessibilityLabel: null, placeholder: null, size: "sm", onChange: null };
    const intl3 = tmp4(tmp3[12]).intl;
    obj10.accessibilityLabel = intl3.string(tmp2(tmp3[13])["EY8/Mt"]);
    const intl4 = tmp4(tmp3[12]).intl;
    obj10.placeholder = intl4.string(tmp2(tmp3[13])["EY8/Mt"]);
    obj10.onChange = tmp6[1];
    obj9.children = closure_8(tmp4(tmp3[27]).SearchField, obj10);
    const items10 = [closure_8(View, obj9), ];
    const obj11 = { IconComponent: tmp4(tmp3[29]).DownloadIcon, onPress: tmp12, accessibilityLabel: null };
    const intl5 = tmp4(tmp3[12]).intl;
    obj11.accessibilityLabel = intl5.string(tmp2(tmp3[13]).WXrPRZ);
    items10[1] = closure_8(tmp2(tmp3[28]), obj11);
    obj8.children = items10;
    items9[1] = closure_9(View, obj8);
    const obj12 = { state: stateFromStores, hasRows: true };
    items9[2] = closure_8(tmp4(tmp3[26]).ConjureHistoryNotice, obj12);
    obj6.children = items9;
    obj5.ListHeaderComponent = closure_9(View, obj6);
    const obj13 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl6 = tmp4(tmp3[12]).intl;
    obj13.children = intl6.string(tmp2(tmp3[13]).tDB4lC);
    obj5.ListEmptyComponent = closure_8(tmp4(tmp3[16]).Text, obj13);
    const items11 = [tmp.list, ];
    const obj14 = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + require("useSafeAreaInsets")().bottom };
    items11[1] = obj14;
    obj5.contentContainerStyle = items11;
    tmp15 = closure_8(tmp4(tmp3[30]).FlashList, obj5);
    const tmp2Result = tmp2(tmp3[28]);
  }
  return tmp15;
});