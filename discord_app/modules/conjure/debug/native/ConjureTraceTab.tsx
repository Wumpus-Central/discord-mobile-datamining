// discord_app/modules/conjure/debug/native/ConjureTraceTab.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../../intl/index.native.tsx";
import v1 from "../../../../../_runtime/01266_v1.js";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import FileManagerUtils from "../../../../utils/FileManagerUtils.native.tsx";
import ConjureTraceFormat from "ConjureTraceFormat.tsx";
import debug_ConjureTraceFormat from "../ConjureTraceFormat.tsx";
import ConjureTraceUtils from "../ConjureTraceUtils.tsx";
import ConjureTimeFormat from "../ConjureTimeFormat.tsx";
import ConjureTraceDetailSheet from "ConjureTraceDetailSheet.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ConjureProjectStore from "../../projects/ConjureProjectStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ConjureTraceDetailSheetDefault = ConjureTraceDetailSheet;
let _require,
  c1,
  c2,
  catchPromise,
  cleanupPromise,
  combined,
  combined1,
  combined2,
  date,
  dependencyMap,
  entry,
  importDefault,
  nextPromise,
  projectId,
  tmp5,
  traceExportPayload,
  turnId,
  writeFile,
  writeFileResult;

let c9;
let metroImportAll;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
function itemKey(key) {
  return key.key;
}
function itemType(kind) {
  return kind.kind;
}
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  list: obj2,
  header: obj3,
  tools: obj4,
  search: { flex: 1 },
  placeholder: obj5,
  overview: obj6,
  overviewBar: obj7,
  legend: obj8,
  legendItem: obj9,
  swatch: { width: 8, height: 8, borderRadius: 4 },
  groupHead: obj10,
  rowSlot: obj11,
  rowNested: obj12,
  rowBody: obj13,
  rowTop: obj14,
  rowTitle: { flexShrink: 1 },
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj5 = { padding: nativeDefault.space.PX_16 };
obj6 = { gap: nativeDefault.space.PX_8 };
obj7 = {
  flexDirection: "row",
  height: 6,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj8 = { gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj10 = {
  flexDirection: "row",
  alignItems: "baseline",
  gap: nativeDefault.space.PX_8,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
};
obj11 = { paddingBottom: nativeDefault.space.PX_8 };
obj12 = { marginLeft: nativeDefault.space.PX_16 };
obj13 = { gap: nativeDefault.space.PX_4 };
obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (entry) => {
      let formatToPlainStringResult;
      let items;
      let items1;
      let rowBody;
      let rowTop;
      let str;
      let str2;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp23;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      let tmpResult5;
      const obj = react2;
      const cResult = obj.c(74);
      entry = entry.entry;
      const onPress = entry.onPress;
      const tmp4 = closure_10();
      const obj2 = ConjureTraceFormat;
      const traceCategoryTextStyles = obj2.useTraceCategoryTextStyles();
      if (cResult[0] === traceCategoryTextStyles) {
        if (cResult[1] === entry) {
          if (cResult[2] === onPress) {
            if (cResult[3] === tmp4.rowBody) {
              if (cResult[4] === tmp4.rowNested) {
                if (cResult[5] === tmp4.rowSlot) {
                  if (cResult[6] === tmp4.rowTop) {
                    tmp6 = cResult[7];
                    tmp7 = cResult[8];
                    tmp8 = cResult[9];
                    tmp9 = cResult[10];
                    tmp10 = cResult[11];
                    str = cResult[12];
                    tmp11 = cResult[13];
                    tmp12 = cResult[14];
                    tmp13 = cResult[15];
                    tmp14 = cResult[16];
                    tmp15 = cResult[17];
                    tmp16 = cResult[18];
                    str2 = cResult[19];
                    tmp17 = cResult[20];
                    tmp18 = cResult[21];
                    tmp19 = cResult[22];
                    tmp20 = cResult[23];
                  }
                  if (cResult[36] === tmp6) {
                    if (cResult[37] === str) {
                      if (cResult[38] === tmp12) {
                        let tmp37;
                        if (cResult[39] === tmp13) {
                          tmp37 = cResult[40];
                        }
                        if (cResult[41] === tmp4.rowTitle) {
                          let tmp40;
                          let tmp43;
                          if (cResult[42] === tmp19) {
                            tmp40 = cResult[43];
                          }
                          if (cResult[44] !== tmp20) {
                            let tmp44 = null;
                            if (null != tmp20) {
                              const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp20 };
                              tmp44 = metroImportAll(Text_Text.Text, obj3);
                            }
                            cResult[44] = tmp20;
                            cResult[45] = tmp44;
                            tmp43 = tmp44;
                          } else {
                            tmp43 = cResult[45];
                          }
                          if (cResult[46] === tmp7) {
                            if (cResult[47] === tmp37) {
                              if (cResult[48] === tmp40) {
                                if (cResult[49] === tmp43) {
                                  if (cResult[50] === tmp14) {
                                    let tmp46;
                                    if (cResult[51] === tmp15) {
                                      tmp46 = cResult[52];
                                    }
                                    if (cResult[53] === entry.kind) {
                                      let tmp49;
                                      let tmp53;
                                      if (cResult[54] === entry.summary) {
                                        tmp49 = cResult[55];
                                      }
                                      if (cResult[56] !== entry.error) {
                                        let tmp54 = null;
                                        if (null != entry.error) {
                                          const obj4 = {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-critical",
                                            lineClamp: 2,
                                            children: entry.error,
                                          };
                                          tmp54 = metroImportAll(Text_Text.Text, obj4);
                                        }
                                        cResult[56] = entry.error;
                                        cResult[57] = tmp54;
                                        tmp53 = tmp54;
                                      } else {
                                        tmp53 = cResult[57];
                                      }
                                      if (cResult[58] === tmp8) {
                                        if (cResult[59] === tmp46) {
                                          if (cResult[60] === tmp49) {
                                            if (cResult[61] === tmp53) {
                                              let tmp56;
                                              if (cResult[62] === tmp16) {
                                                tmp56 = cResult[63];
                                              }
                                              if (cResult[64] === tmp9) {
                                                if (cResult[65] === tmp56) {
                                                  if (cResult[66] === str2) {
                                                    if (cResult[67] === tmp17) {
                                                      let tmp59;
                                                      if (cResult[68] === tmp18) {
                                                        tmp59 = cResult[69];
                                                      }
                                                      if (cResult[70] === tmp10) {
                                                        if (cResult[71] === tmp11) {
                                                          let tmp62;
                                                          if (cResult[72] === tmp59) {
                                                            tmp62 = cResult[73];
                                                          }
                                                          return tmp62;
                                                        }
                                                      }
                                                      const obj5 = { style: tmp11, children: tmp59 };
                                                      const tmp64 = metroImportAll(tmp10, obj5);
                                                      cResult[70] = tmp10;
                                                      cResult[71] = tmp11;
                                                      cResult[72] = tmp59;
                                                      cResult[73] = tmp64;
                                                      tmp62 = tmp64;
                                                    }
                                                  }
                                                }
                                              }
                                              const obj6 = {
                                                variant: str2,
                                                onPress: tmp17,
                                                accessibilityLabel: tmp18,
                                                children: tmp56,
                                              };
                                              const tmp61 = metroImportAll(tmp9, obj6);
                                              cResult[64] = tmp9;
                                              cResult[65] = tmp56;
                                              cResult[66] = str2;
                                              cResult[67] = tmp17;
                                              cResult[68] = tmp18;
                                              cResult[69] = tmp61;
                                              tmp59 = tmp61;
                                            }
                                          }
                                        }
                                      }
                                      const obj7 = { style: tmp16, children: items };
                                      items = [tmp46, tmp49, tmp53];
                                      const tmp58 = React4(tmp8, obj7);
                                      cResult[58] = tmp8;
                                      cResult[59] = tmp46;
                                      cResult[60] = tmp49;
                                      cResult[61] = tmp53;
                                      cResult[62] = tmp16;
                                      cResult[63] = tmp58;
                                      tmp56 = tmp58;
                                    }
                                    let tmp51 = null;
                                    if ("tool" === entry.kind) {
                                      tmp51 = null;
                                      if (null != entry.summary) {
                                        const obj8 = {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          lineClamp: 2,
                                          children: entry.summary,
                                        };
                                        tmp51 = metroImportAll(Text_Text.Text, obj8);
                                      }
                                    }
                                    cResult[53] = entry.kind;
                                    cResult[54] = entry.summary;
                                    cResult[55] = tmp51;
                                    tmp49 = tmp51;
                                  }
                                }
                              }
                            }
                          }
                          const obj9 = { style: tmp14, children: items1 };
                          items1 = [tmp15, tmp37, tmp40, tmp43];
                          const tmp48 = React4(tmp7, obj9);
                          cResult[46] = tmp7;
                          cResult[47] = tmp37;
                          cResult[48] = tmp40;
                          cResult[49] = tmp43;
                          cResult[50] = tmp14;
                          cResult[51] = tmp15;
                          cResult[52] = tmp48;
                          tmp46 = tmp48;
                        }
                        const obj10 = {
                          variant: "text-xs/semibold",
                          color: "text-default",
                          style: tmp4.rowTitle,
                          lineClamp: 1,
                          children: tmp19,
                        };
                        const tmp42 = metroImportAll(Text_Text.Text, obj10);
                        cResult[41] = tmp4.rowTitle;
                        cResult[42] = tmp19;
                        cResult[43] = tmp42;
                        tmp40 = tmp42;
                      }
                    }
                  }
                  const obj11 = { variant: str, style: tmp12, children: tmp13 };
                  const tmp39 = metroImportAll(tmp6, obj11);
                  cResult[36] = tmp6;
                  cResult[37] = str;
                  cResult[38] = tmp12;
                  cResult[39] = tmp13;
                  cResult[40] = tmp39;
                  tmp37 = tmp39;
                }
              }
            }
          }
        }
      }
      const tmpResult = ConjureTraceUtils;
      const traceCategoryResult = tmpResult.traceCategory(entry);
      const tmp22 = "model" === entry.kind ? entry.model : entry.tool;
      if (cResult[24] === entry.durationMs) {
        if (cResult[25] === entry.kind) {
          if (cResult[26] === entry.promptTokens) {
            tmp23 = cResult[27];
          }
          const rowNested = "tool" === entry.kind && null != entry.parentId && tmp4.rowNested;
          if (cResult[28] === tmp4.rowSlot) {
            let tmp30;
            if (cResult[29] === rowNested) {
              tmp30 = cResult[30];
            }
            const Card = Card_Card.Card;
            if (cResult[31] === entry) {
              let tmp31;
              let tmp32;
              if (cResult[32] === onPress) {
                tmp31 = cResult[33];
              }
              ({ rowBody, rowTop } = tmp4);
              if (cResult[34] !== entry.status) {
                const obj12 = { status: entry.status };
                const tmp34 = metroImportAll(ConjureTraceFormat.TraceStatusDot, obj12);
                cResult[34] = entry.status;
                cResult[35] = tmp34;
                tmp32 = tmp34;
              } else {
                tmp32 = cResult[35];
              }
              const Text = Text_Text.Text;
              const tmpResult4 = debug_ConjureTraceFormat;
              const categoryLabelResult = tmpResult4.categoryLabel(traceCategoryResult);
              cResult[0] = traceCategoryTextStyles;
              cResult[1] = entry;
              cResult[2] = onPress;
              cResult[3] = tmp4.rowBody;
              cResult[4] = tmp4.rowNested;
              cResult[5] = tmp4.rowSlot;
              cResult[6] = tmp4.rowTop;
              cResult[7] = Text;
              cResult[8] = View;
              cResult[9] = View;
              cResult[10] = Card;
              cResult[11] = View;
              cResult[12] = "text-xs/semibold";
              cResult[13] = tmp30;
              cResult[14] = traceCategoryTextStyles[traceCategoryResult];
              cResult[15] = categoryLabelResult;
              cResult[16] = rowTop;
              cResult[17] = tmp32;
              cResult[18] = rowBody;
              cResult[19] = "primary";
              cResult[20] = tmp31;
              cResult[21] = tmp22;
              cResult[22] = tmp22;
              cResult[23] = tmp23;
              tmp15 = tmp32;
              tmp20 = tmp23;
              tmp19 = tmp22;
              tmp18 = tmp22;
              tmp17 = tmp31;
              str2 = "primary";
              tmp16 = rowBody;
              tmp14 = rowTop;
              tmp13 = categoryLabelResult;
              tmp12 = tmp35;
              tmp11 = tmp30;
              str = "text-xs/semibold";
              tmp10 = View;
              tmp9 = Card;
              tmp8 = View;
              tmp7 = View;
              tmp6 = Text;
            }
            const fn = function k() {
              return onPress(entry);
            };
            cResult[31] = entry;
            cResult[32] = onPress;
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
      if ("model" === entry.kind) {
        if (null != entry.promptTokens) {
          const intl = intl7.intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj13 = { tokens: tmpResult5.formatTokens(entry.promptTokens) };
          const v6GQUgQ = _modDef3723["6GQUgQ"];
          tmpResult5 = debug_ConjureTraceFormat;
          formatToPlainStringResult = formatToPlainString(v6GQUgQ, obj13);
        }
        cResult[24] = entry.durationMs;
        cResult[25] = entry.kind;
        cResult[26] = entry.promptTokens;
        cResult[27] = formatToPlainStringResult;
        tmp23 = formatToPlainStringResult;
      }
      formatToPlainStringResult = null;
      if (null != entry.durationMs) {
        const tmpResult6 = debug_ConjureTraceFormat;
        formatToPlainStringResult = tmpResult6.formatDuration(entry.durationMs);
      }
    }
  : (entry) => {
      let Card;
      let formatToPlainStringResult;
      let items1;
      let items2;
      let obj5;
      let obj6;
      let tmp2Result;
      let tmp2Result3;
      entry = entry.entry;
      const onPress = entry.onPress;
      const tmp = closure_10();
      const obj = ConjureTraceFormat;
      const traceCategoryTextStyles = obj.useTraceCategoryTextStyles();
      const obj2 = ConjureTraceUtils;
      const traceCategoryResult = obj2.traceCategory(entry);
      const tmp6 = "model" === entry.kind ? entry.model : entry.tool;
      if ("model" === entry.kind) {
        if (null != entry.promptTokens) {
          const intl = intl7.intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj3 = { tokens: tmp2Result.formatTokens(entry.promptTokens) };
          const v6GQUgQ = _modDef3723["6GQUgQ"];
          tmp2Result = debug_ConjureTraceFormat;
          formatToPlainStringResult = formatToPlainString(v6GQUgQ, obj3);
        }
        const items = [tmp.rowSlot];
        const rowNested = "tool" === entry.kind && null != entry.parentId && tmp.rowNested;
        items[1] = rowNested;
        const obj4 = { style: items, children: metroImportAll(Card, obj5) };
        obj5 = {
          variant: "primary",
          onPress() {
            return onPress(entry);
          },
          accessibilityLabel: tmp6,
          children: React4(View, obj6),
        };
        obj6 = { style: tmp.rowBody, children: items2 };
        const obj7 = { style: tmp.rowTop, children: items1 };
        Card = Card_Card.Card;
        const obj8 = { status: entry.status };
        items1 = [metroImportAll(ConjureTraceFormat.TraceStatusDot, obj8), , ,];
        const obj9 = {
          variant: "text-xs/semibold",
          style: traceCategoryTextStyles[traceCategoryResult],
          children: tmp2Result3.categoryLabel(traceCategoryResult),
        };
        const Text = Text_Text.Text;
        tmp2Result3 = debug_ConjureTraceFormat;
        items1[1] = metroImportAll(Text, obj9);
        const obj10 = {
          variant: "text-xs/semibold",
          color: "text-default",
          style: tmp.rowTitle,
          lineClamp: 1,
          children: tmp6,
        };
        items1[2] = metroImportAll(Text_Text.Text, obj10);
        let tmp11Result = null;
        if (null != formatToPlainStringResult) {
          const obj11 = { variant: "text-xs/normal", color: "text-subtle", children: formatToPlainStringResult };
          tmp11Result = metroImportAll(Text_Text.Text, obj11);
        }
        items1[3] = tmp11Result;
        items2 = [React4(View, obj7), ,];
        let tmp11Result3 = null;
        if ("tool" === entry.kind) {
          tmp11Result3 = null;
          if (null != entry.summary) {
            const obj12 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: entry.summary };
            tmp11Result3 = metroImportAll(Text_Text.Text, obj12);
          }
        }
        items2[1] = tmp11Result3;
        let tmp11Result4 = null;
        if (null != entry.error) {
          const obj13 = {
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            lineClamp: 2,
            children: entry.error,
          };
          tmp11Result4 = metroImportAll(Text_Text.Text, obj13);
        }
        items2[2] = tmp11Result4;
        return metroImportAll(View, obj4);
      }
      formatToPlainStringResult = null;
      if (null != entry.durationMs) {
        const tmp2Result4 = debug_ConjureTraceFormat;
        formatToPlainStringResult = tmp2Result4.formatDuration(entry.durationMs);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (entries) => {
      let arr;
      let items;
      let tmp7;
      let tmp = _require;
      const tmp2 = arr;
      let obj = require("react");
      const cResult = obj.c(23);
      entries = entries.entries;
      const tmp4 = closure_10();
      _require = tmp4;
      let obj2 = require("ConjureTraceFormat");
      const traceCategoryFillStyles = obj2.useTraceCategoryFillStyles();
      if (cResult[0] !== entries) {
        const tmpResult = tmp(tmp2[11]);
        const traceCategoryTotalsResult = tmpResult.traceCategoryTotals(entries);
        let num = 0;
        cResult[0] = entries;
        let num2 = 1;
        cResult[1] = traceCategoryTotalsResult;
        arr = traceCategoryTotalsResult;
      } else {
        arr = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function x(arg0, ms) {
          return arg0 + ms.ms;
        };
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const reduced = arr.reduce(tmp7, 0);
      if (cResult[3] === traceCategoryFillStyles) {
        if (cResult[4] === reduced) {
          let tmp10;
          if (cResult[5] === arr) {
            tmp10 = cResult[6];
          }
          if (cResult[7] === tmp4.overviewBar) {
            let tmp12;
            if (cResult[8] === tmp10) {
              tmp12 = cResult[9];
            }
            if (cResult[10] === traceCategoryFillStyles) {
              if (cResult[11] === reduced) {
                if (cResult[12] === tmp4.legendItem) {
                  if (cResult[13] === tmp4.swatch) {
                    let tmp17;
                    if (cResult[14] === arr) {
                      tmp17 = cResult[15];
                    }
                    if (cResult[16] === tmp4.legend) {
                      let tmp19;
                      if (cResult[17] === tmp17) {
                        tmp19 = cResult[18];
                      }
                      if (cResult[19] === tmp4.overview) {
                        if (cResult[20] === tmp12) {
                          let tmp23;
                          if (cResult[21] === tmp19) {
                            tmp23 = cResult[22];
                          }
                          return tmp23;
                        }
                      }
                      let obj3 = { style: tmp9, children: items };
                      items = [tmp12, tmp19];
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
              let intl;
              let items;
              let items1;
              let obj4;
              let tmp7Result;
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
                num2 = Math.round((num / tmp2) * 100);
              }
              const obj2 = { style: items };
              items = [closure_0.swatch, traceCategoryFillStyles[item]];
              const obj = { style: closure_0.legendItem, children: items1 };
              items1 = [metroImportAll(View, obj2), , , ,];
              const obj3 = { variant: "text-xs/normal", color: "text-muted", children: obj4.categoryLabel(item) };
              const Text = Text_Text.Text;
              obj4 = debug_ConjureTraceFormat;
              items1[1] = metroImportAll(Text, obj3);
              const obj5 = {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: intl.formatToPlainString(_modDef3723["3dQ1ly"], { percent: num2 }),
              };
              const Text2 = Text_Text.Text;
              intl = intl7.intl;
              items1[2] = metroImportAll(Text2, obj5);
              const Text3 = Text_Text.Text;
              const intl2 = intl7.intl;
              const formatToPlainString = intl2.formatToPlainString;
              let num4;
              const Ow0k34 = _modDef3723.Ow0k34;
              if (found != null) {
                num4 = found.calls;
              }
              if (num4 == null) {
                num4 = 0;
              }
              const obj6 = {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: formatToPlainString(Ow0k34, { count: num4 }),
              };
              items1[3] = metroImportAll(Text3, obj6);
              let tmp6Result = null;
              if (0 !== num) {
                const obj7 = {
                  variant: "text-xs/normal",
                  color: "text-subtle",
                  children: tmp7Result.formatDuration(num),
                };
                const Text4 = Text_Text.Text;
                tmp7Result = debug_ConjureTraceFormat;
                tmp6Result = metroImportAll(Text4, obj7);
              }
              items1[4] = tmp6Result;
              return React4(View, obj, item);
            });
            cResult[10] = traceCategoryFillStyles;
            cResult[11] = reduced;
            cResult[12] = tmp4.legendItem;
            cResult[13] = tmp4.swatch;
            cResult[14] = arr;
            cResult[15] = mapped;
            tmp17 = mapped;
          }
          let obj5 = {
            style: tmp4.overviewBar,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            children: tmp10,
          };
          const tmp15 = closure_8(View, obj5);
          let num4 = 7;
          cResult[7] = tmp4.overviewBar;
          cResult[8] = tmp10;
          cResult[9] = tmp15;
          tmp12 = tmp15;
        }
      }
      let mapped1 = null;
      if (0 !== reduced) {
        mapped1 = arr.map((item) => {
          let category;
          let items;
          let ms;
          ({ category, ms } = item);
          let tmp = null;
          if (0 !== ms) {
            const obj = { style: items };
            items = [traceCategoryFillStyles[category]];
            const obj2 = { flex: ms };
            items[1] = obj2;
            tmp = metroImportAll(View, obj, category);
          }
          return tmp;
        });
      }
      cResult[3] = traceCategoryFillStyles;
      cResult[4] = reduced;
      cResult[5] = arr;
      cResult[6] = mapped1;
      tmp10 = mapped1;
    }
  : (arg0) => {
      let TRACE_CATEGORIES;
      let closure_2;
      let items1;
      let mapped;
      const entries = arg0.entries;
      let tmp = closure_10();
      let closure_1 = tmp;
      const tmp2 = entries;
      let obj = entries(16761);
      dependencyMap = obj.useTraceCategoryFillStyles();
      let items = [entries];
      const memo = react.useMemo(() => {
        const obj = ConjureTraceUtils;
        return obj.traceCategoryTotals(entries);
      }, items);
      const reduced = memo.reduce((acc, ms) => acc + ms.ms, 0);
      let obj2 = { style: tmp.overview, children: items1 };
      let obj3 = {
        style: tmp.overviewBar,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: mapped,
      };
      mapped = null;
      if (0 !== reduced) {
        mapped = memo.map((item) => {
          let category;
          let items;
          let ms;
          ({ category, ms } = item);
          let tmp = null;
          if (0 !== ms) {
            const obj = { style: items };
            items = [closure_2[category]];
            const obj2 = { flex: ms };
            items[1] = obj2;
            tmp = metroImportAll(View, obj, category);
          }
          return tmp;
        });
      }
      items1 = [closure_8(View, obj3)];
      let obj4 = {
        style: tmp.legend,
        children: TRACE_CATEGORIES.map((item) => {
          let intl;
          let items;
          let items1;
          let obj4;
          let tmp7Result;
          let closure_0 = item;
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
            num2 = Math.round((num / tmp2) * 100);
          }
          const obj2 = { style: items };
          items = [closure_1.swatch, closure_2[item]];
          const obj = { style: closure_1.legendItem, children: items1 };
          items1 = [metroImportAll(View, obj2), , , ,];
          const obj3 = { variant: "text-xs/normal", color: "text-muted", children: obj4.categoryLabel(item) };
          const Text = Text_Text.Text;
          obj4 = debug_ConjureTraceFormat;
          items1[1] = metroImportAll(Text, obj3);
          const obj5 = {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: intl.formatToPlainString(_modDef3723["3dQ1ly"], { percent: num2 }),
          };
          const Text2 = Text_Text.Text;
          intl = intl7.intl;
          items1[2] = metroImportAll(Text2, obj5);
          const Text3 = Text_Text.Text;
          const intl2 = intl7.intl;
          const formatToPlainString = intl2.formatToPlainString;
          let num4;
          const Ow0k34 = _modDef3723.Ow0k34;
          if (found != null) {
            num4 = found.calls;
          }
          if (num4 == null) {
            num4 = 0;
          }
          const obj6 = {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: formatToPlainString(Ow0k34, { count: num4 }),
          };
          items1[3] = metroImportAll(Text3, obj6);
          let tmp6Result = null;
          if (0 !== num) {
            const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7Result.formatDuration(num) };
            const Text4 = Text_Text.Text;
            tmp7Result = debug_ConjureTraceFormat;
            tmp6Result = metroImportAll(Text4, obj7);
          }
          items1[4] = tmp6Result;
          return React4(View, obj, item);
        }),
      };
      TRACE_CATEGORIES = tmp2(16763).TRACE_CATEGORIES;
      items1[1] = closure_8(View, obj4);
      return closure_9(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let first;
      let first1;
      let groupHead;
      let stateFromStoresArray;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp7;
      let tmp8;
      let tmp = projectId;
      let tmp2 = stateFromStoresArray;
      let obj = projectId(stateFromStoresArray[9]);
      const cResult = obj.c(59);
      projectId = projectId.projectId;
      const tmp4 = closure_10();
      importDefault = tmp4;
      const bottom = require("useSafeAreaInsets")().bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ConjureProjectStore];
        cResult[0] = items;
        first = items;
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let tmpResult = tmp(tmp2[18]);
      stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureProjectStore];
        cResult[4] = items2;
        tmp10 = items2;
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
        tmp13 = items3;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult3 = tmp(tmp2[18]);
      const stateFromStores = tmpResult3.useStateFromStores(tmp10, tmp12, tmp13);
      let obj4 = X;
      const tmp15 = first1(X.useState(""), 2);
      first1 = tmp15[0];
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return projectId(stateFromStoresArray[19]).clearTraceDetailCache;
          }
        }
        cResult[8] = I;
      } else {
        class I {
          constructor() {
            return projectId(stateFromStoresArray[19]).clearTraceDetailCache;
          }
        }
      }
      if (cResult[9] !== projectId) {
        class I {
          constructor() {
            return projectId(stateFromStoresArray[19]).clearTraceDetailCache;
          }
        }
        tmp19[0] = projectId;
        cResult[9] = projectId;
        cResult[10] = tmp19;
      } else {
        class I {
          constructor() {
            return projectId(stateFromStoresArray[19]).clearTraceDetailCache;
          }
        }
      }
      const effect = obj4.useEffect(I, tmp19);
      if (cResult[11] === stateFromStoresArray) {
        class I {
          constructor() {
            return projectId(stateFromStoresArray[19]).clearTraceDetailCache;
          }
        }
        if (cResult[14] !== projectId) {
          class X {
            constructor(entryId) {
              let obj2;
              const tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = {
                key: ConjureTraceDetailSheet.CONJURE_TRACE_DETAIL_SHEET_KEY,
                content: metroImportAll(ConjureTraceDetailSheetDefault, obj2),
              };
              obj2 = { projectId, entryId: entryId.id, initialEntry: entryId };
              showActionSheet(obj);
            }
          }
          cResult[14] = projectId;
          cResult[15] = X;
        } else {
          class X {
            constructor(entryId) {
              let obj2;
              const tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = {
                key: ConjureTraceDetailSheet.CONJURE_TRACE_DETAIL_SHEET_KEY,
                content: metroImportAll(ConjureTraceDetailSheetDefault, obj2),
              };
              obj2 = { projectId, entryId: entryId.id, initialEntry: entryId };
              showActionSheet(obj);
            }
          }
        }
        X = tmp22;
        if (cResult[16] === tmp22) {
          class X {
            constructor(entryId) {
              let obj2;
              const tmp = ActionSheetActionCreators;
              const showActionSheet = tmp.showActionSheet;
              const obj = {
                key: ConjureTraceDetailSheet.CONJURE_TRACE_DETAIL_SHEET_KEY,
                content: metroImportAll(ConjureTraceDetailSheetDefault, obj2),
              };
              obj2 = { projectId, entryId: entryId.id, initialEntry: entryId };
              showActionSheet(obj);
            }
          }
          if (cResult[19] === stateFromStoresArray) {
            class X {
              constructor(entryId) {
                let obj2;
                const tmp = ActionSheetActionCreators;
                const showActionSheet = tmp.showActionSheet;
                const obj = {
                  key: ConjureTraceDetailSheet.CONJURE_TRACE_DETAIL_SHEET_KEY,
                  content: metroImportAll(ConjureTraceDetailSheetDefault, obj2),
                };
                obj2 = { projectId, entryId: entryId.id, initialEntry: entryId };
                showActionSheet(obj);
              }
            }
            class O {
              constructor() {
                combined = "vibegrations-trace-" + projectId + ".json";
                closure_0 = combined;
                obj = closure_0(closure_2[23]);
                combined1 = "vibegrations-trace-" + obj.v4();
                closure_1 = combined1;
                tmp3 = closure_0(closure_2[24]);
                writeFile = tmp3.writeFile;
                combined2 = "" + combined1 + "/" + combined;
                tmp5 = closure_0(closure_2[11]);
                traceExportPayload = tmp5.traceExportPayload;
                date = new Date();
                writeFileResult = writeFile(
                  "cache",
                  combined2,
                  traceExportPayload(projectId, closure_2, date.toISOString()),
                  "utf8",
                );
                nextPromise = writeFileResult.then(function (result) {
                  let items;
                  if (null == result) {
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error = new Error("trace file was not written");
                    throw error;
                  } else {
                    const _encodeURI = encodeURI;
                    const _HermesInternal = HermesInternal;
                    combined = "file://" + encodeURI(result.replace(/^file:\/*/, "/"));
                    const obj2 = { sourceUris: items, fileName: combined, mimeType: "application/json", copy: true };
                    items = [combined];
                    const obj = projectId(stateFromStoresArray[25]);
                    return obj.saveDocuments(obj2);
                  }
                });
                cleanupPromise = nextPromise.finally(
                  closure_3(async () => {
                    let closure_0;
                    if (c2 === 2) {
                      c2 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp2 === 3) {
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
                        c2 = 2;
                        if (0 === c1) {
                          if (arg0 === 1) {
                            c2 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c2 = 3;
                            const obj4 = { value, done: true };
                            return obj4;
                          } else {
                            combined = tmp3;
                            c1 = 1;
                            const obj5 = combined(c2[24]);
                            c2 = 1;
                            const obj6 = { value: obj5.clearFolder("cache", combined1), done: false };
                            return obj6;
                          }
                        } else if (1 === c1) {
                          if (arg0 === 1) {
                            c2 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c2 = 3;
                            const obj7 = { value, done: true };
                            return obj7;
                          } else {
                            c1 = 2;
                            const obj2 = combined(c2[24]);
                            c2 = 1;
                            const obj8 = { value: obj2.removeFile("cache", closure_128_1), done: false };
                            return obj8;
                          }
                        } else if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj = { value, done: true };
                          return obj;
                        } else {
                          c2 = 3;
                          return { value: "IconComponent", done: null };
                        }
                      } catch (tmp11) {
                        c2 = 3;
                        throw tmp11;
                      }
                    }
                  }),
                );
                catchPromise = cleanupPromise.catch((error) => {
                  const obj = projectId(stateFromStoresArray[25]);
                  if (obj.isErrorWithCode(error)) {
                    const code = error.code;
                    const OPERATION_CANCELED = projectId(stateFromStoresArray[25]).errorCodes.OPERATION_CANCELED;
                  }
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
              tmp3 = closure_0(closure_2[24]);
              writeFile = tmp3.writeFile;
              combined2 = "" + combined1 + "/" + combined;
              tmp5 = closure_0(closure_2[11]);
              traceExportPayload = tmp5.traceExportPayload;
              date = new Date();
              writeFileResult = writeFile(
                "cache",
                combined2,
                traceExportPayload(projectId, closure_2, date.toISOString()),
                "utf8",
              );
              nextPromise = writeFileResult.then(function (result) {
                let items;
                if (null == result) {
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  const error = new Error("trace file was not written");
                  throw error;
                } else {
                  const _encodeURI = encodeURI;
                  const _HermesInternal = HermesInternal;
                  combined = "file://" + encodeURI(result.replace(/^file:\/*/, "/"));
                  const obj2 = { sourceUris: items, fileName: combined, mimeType: "application/json", copy: true };
                  items = [combined];
                  const obj = projectId(stateFromStoresArray[25]);
                  return obj.saveDocuments(obj2);
                }
              });
              cleanupPromise = nextPromise.finally(
                closure_3(async () => {
                  let closure_0;
                  if (c2 === 2) {
                    c2 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp2 === 3) {
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
                      c2 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          combined = tmp3;
                          c1 = 1;
                          const obj5 = combined(c2[24]);
                          c2 = 1;
                          const obj6 = { value: obj5.clearFolder("cache", combined1), done: false };
                          return obj6;
                        }
                      } else if (1 === c1) {
                        if (arg0 === 1) {
                          c2 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 3;
                          const obj7 = { value, done: true };
                          return obj7;
                        } else {
                          c1 = 2;
                          const obj2 = combined(c2[24]);
                          c2 = 1;
                          const obj8 = { value: obj2.removeFile("cache", closure_128_1), done: false };
                          return obj8;
                        }
                      } else if (arg0 === 1) {
                        c2 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c2 = 3;
                        const obj = { value, done: true };
                        return obj;
                      } else {
                        c2 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } catch (tmp11) {
                      c2 = 3;
                      throw tmp11;
                    }
                  }
                }),
              );
              catchPromise = cleanupPromise.catch((error) => {
                const obj = projectId(stateFromStoresArray[25]);
                if (obj.isErrorWithCode(error)) {
                  const code = error.code;
                  const OPERATION_CANCELED = projectId(stateFromStoresArray[25]).errorCodes.OPERATION_CANCELED;
                }
              });
              return;
            }
          }
          cResult[19] = stateFromStoresArray;
          cResult[20] = projectId;
          cResult[21] = O;
        }
        const fn3 = function j(item) {
          let items;
          let tmp13Result;
          let tmp9Result;
          item = item.item;
          if ("entry" === item.kind) {
            const obj2 = { entry: item.entry, onPress: X };
            tmp9Result = metroImportAll(closure_11, obj2);
          } else {
            const obj3 = { style: groupHead.groupHead, children: items };
            const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: item.label };
            items = [metroImportAll(Text_Text.Text, obj4), ,];
            let tmp2 = null;
            if (null != item.started) {
              const obj = { variant: "text-xs/normal", color: "text-subtle", children: item.started };
              tmp2 = metroImportAll(Text_Text.Text, obj);
            }
            items[1] = tmp2;
            let tmp3 = null;
            if (null != item.spanMs) {
              const obj5 = {
                variant: "text-xs/normal",
                color: "text-subtle",
                children: tmp13Result.formatDuration(item.spanMs),
              };
              const Text = Text_Text.Text;
              tmp13Result = debug_ConjureTraceFormat;
              tmp3 = metroImportAll(Text, obj5);
            }
            items[2] = tmp3;
            tmp9Result = React4(View, obj3);
          }
          return tmp9Result;
        };
        cResult[16] = tmp22;
        cResult[17] = tmp4.groupHead;
        cResult[18] = fn3;
      }
      const items4 = [];
      const tmpResult4 = tmp(tmp2[11]);
      const groupTraceByTurnResult = tmpResult4.groupTraceByTurn(stateFromStoresArray);
      let item = groupTraceByTurnResult.forEach((turnId, index) => {
        let intl;
        let obj3;
        let tmpResult;
        const obj = ConjureTraceUtils;
        const filterTraceResult = obj.filterTrace(turnId.entries, first1);
        if (0 !== filterTraceResult.length) {
          turnId = turnId.turnId;
          const push = items4.push;
          if (turnId == null) {
            turnId = index;
          }
          const _HermesInternal = HermesInternal;
          const obj2 = {
            kind: "group",
            key: "group-" + turnId,
            label: intl.formatToPlainString(_modDef3723.gPwGYA, obj3),
            started: tmpResult.formatClockTime(turnId.startedAt),
            spanMs: turnId.spanMs,
          };
          intl = intl7.intl;
          obj3 = { number: index + 1 };
          tmpResult = ConjureTimeFormat;
          push(obj2);
          for (const item10041 of filterTraceResult) {
            let obj4 = { kind: "entry", key: item10041.id, entry: item10041 };
            let arr3 = items4.push(obj4);
            continue;
          }
        }
      });
      cResult[11] = stateFromStoresArray;
      cResult[12] = first1;
      cResult[13] = items4;
    }
  : (projectId) => {
      let ConjureHistoryPlaceholder;
      let SearchField;
      let Text;
      let groupHead;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let items10;
      let items11;
      let items9;
      let obj10;
      let obj13;
      let obj4;
      let obj6;
      let tmp16;
      projectId = projectId.projectId;
      let stateFromStoresArray;
      let onPress;
      let tmp = closure_10();
      importDefault = tmp;
      let tmp2 = importDefault;
      let tmp3 = stateFromStoresArray;
      const bottom = require("useSafeAreaInsets")().bottom;
      let obj = projectId(stateFromStoresArray[18]);
      let items = [ConjureProjectStore];
      const items1 = [projectId];
      stateFromStoresArray = obj.useStateFromStoresArray(items, () => ConjureProjectStore.getTrace(projectId), items1);
      let obj2 = projectId(stateFromStoresArray[18]);
      const items2 = [ConjureProjectStore];
      const items3 = [projectId];
      const stateFromStores = obj2.useStateFromStores(
        items2,
        () => ConjureProjectStore.getHistoryState(projectId, "trace"),
        items3,
      );
      const tmp6 = onPress(react.useState(""), 2);
      const first = tmp6[0];
      const items4 = [projectId];
      const tmp8 = tmp6[1];
      const effect = react.useEffect(() => projectId(stateFromStoresArray[19]).clearTraceDetailCache, items4);
      const items5 = [stateFromStoresArray, first];
      const items6 = [projectId];
      const memo = react.useMemo(() => {
        const items = [];
        let obj = projectId(stateFromStoresArray[11]);
        const groupTraceByTurnResult = obj.groupTraceByTurn(stateFromStoresArray);
        const item = groupTraceByTurnResult.forEach((turnId, index) => {
          let intl;
          let obj3;
          let tmpResult;
          const obj = ConjureTraceUtils;
          const filterTraceResult = obj.filterTrace(turnId.entries, first);
          if (0 !== filterTraceResult.length) {
            turnId = turnId.turnId;
            const push = items.push;
            if (turnId == null) {
              turnId = index;
            }
            const _HermesInternal = HermesInternal;
            const obj2 = {
              kind: "group",
              key: "group-" + turnId,
              label: intl.formatToPlainString(_modDef3723.gPwGYA, obj3),
              started: tmpResult.formatClockTime(turnId.startedAt),
              spanMs: turnId.spanMs,
            };
            intl = intl7.intl;
            obj3 = { number: index + 1 };
            tmpResult = ConjureTimeFormat;
            push(obj2);
            for (const item10041 of filterTraceResult) {
              let obj4 = { kind: "entry", key: item10041.id, entry: item10041 };
              let arr3 = items.push(obj4);
              continue;
            }
          }
        });
        return items;
      }, items5);
      onPress = react.useCallback((entryId) => {
        let obj2;
        const tmp = ActionSheetActionCreators;
        const showActionSheet = tmp.showActionSheet;
        const obj = {
          key: ConjureTraceDetailSheet.CONJURE_TRACE_DETAIL_SHEET_KEY,
          content: metroImportAll(ConjureTraceDetailSheetDefault, obj2),
        };
        obj2 = { projectId, entryId: entryId.id, initialEntry: entryId };
        showActionSheet(obj);
      }, items6);
      const items7 = [onPress, tmp];
      const items8 = [stateFromStoresArray, projectId];
      const callback1 = react.useCallback((item) => {
        let items;
        let tmp13Result;
        let tmp9Result;
        item = item.item;
        if ("entry" === item.kind) {
          const obj2 = { entry: item.entry, onPress };
          tmp9Result = metroImportAll(closure_11, obj2);
        } else {
          const obj3 = { style: groupHead.groupHead, children: items };
          const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: item.label };
          items = [metroImportAll(Text_Text.Text, obj4), ,];
          let tmp2 = null;
          if (null != item.started) {
            const obj = { variant: "text-xs/normal", color: "text-subtle", children: item.started };
            tmp2 = metroImportAll(Text_Text.Text, obj);
          }
          items[1] = tmp2;
          let tmp3 = null;
          if (null != item.spanMs) {
            const obj5 = {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: tmp13Result.formatDuration(item.spanMs),
            };
            const Text = Text_Text.Text;
            tmp13Result = debug_ConjureTraceFormat;
            tmp3 = metroImportAll(Text, obj5);
          }
          items[2] = tmp3;
          tmp9Result = React4(View, obj3);
        }
        return tmp9Result;
      }, items7);
      if (0 === stateFromStoresArray.length) {
        let obj3 = { style: tmp.placeholder, children: closure_8(ConjureHistoryPlaceholder, obj4) };
        obj4 = {
          state: stateFromStores,
          emptyTitle: intl.string(tmp2(tmp3[13])["Tpvy/s"]),
          emptyBody: intl2.string(tmp2(tmp3[13]).J0WcVA),
        };
        ConjureHistoryPlaceholder = tmp4(tmp3[26]).ConjureHistoryPlaceholder;
        intl = tmp4(tmp3[12]).intl;
        intl2 = tmp4(tmp3[12]).intl;
        tmp16 = closure_8(View, obj3);
      } else {
        let obj5 = {
          data: memo,
          keyExtractor: itemKey,
          getItemType: itemType,
          renderItem: callback1,
          ListHeaderComponent: closure_9(View, obj6),
          ListEmptyComponent: closure_8(Text, obj13),
          contentContainerStyle: items11,
          keyboardShouldPersistTaps: "handled",
        };
        obj6 = { style: tmp.header, children: items9 };
        let obj7 = { entries: stateFromStoresArray };
        const FlashList = tmp4(tmp3[30]).FlashList;
        items9 = [closure_8(closure_12, obj7), ,];
        let obj8 = { style: tmp.tools, children: items10 };
        const obj9 = { style: tmp.search, children: closure_8(SearchField, obj10) };
        obj10 = {
          accessibilityLabel: intl3.string(tmp2(tmp3[13])["EY8/Mt"]),
          placeholder: intl4.string(tmp2(tmp3[13])["EY8/Mt"]),
          size: "sm",
          onChange: tmp8,
        };
        SearchField = tmp4(tmp3[27]).SearchField;
        intl3 = tmp4(tmp3[12]).intl;
        intl4 = tmp4(tmp3[12]).intl;
        items10 = [closure_8(View, obj9)];
        const obj11 = {
          IconComponent: projectId(tmp3[29]).DownloadIcon,
          onPress: tmp13,
          accessibilityLabel: intl5.string(tmp2(tmp3[13]).WXrPRZ),
        };
        const tmp2Result = tmp2(tmp3[28]);
        intl5 = tmp4(tmp3[12]).intl;
        items10[1] = closure_8(tmp2Result, obj11);
        items9[1] = closure_9(View, obj8);
        const obj12 = { state: stateFromStores, hasRows: true };
        items9[2] = closure_8(projectId(tmp3[26]).ConjureHistoryNotice, obj12);
        obj13 = { variant: "text-sm/medium", color: "text-default", children: intl6.string(tmp2(tmp3[13]).tDB4lC) };
        Text = tmp4(tmp3[16]).Text;
        intl6 = tmp4(tmp3[12]).intl;
        items11 = [tmp.list];
        items11[1] = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + bottom };
        const obj14 = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + bottom };
        tmp16 = closure_8(FlashList, obj5);
      }
      return tmp16;
    };
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureTraceTab.tsx");

export default tmp4;
