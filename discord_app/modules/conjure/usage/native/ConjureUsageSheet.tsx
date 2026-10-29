// === Module 12602: ConjureUsageSheet ===

// Module 12602 (ConjureUsageSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3864 from "module_3864" /* 3864 */;
import Text_Text from "Text/Text" /* 5271 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 10816 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5005);
let obj2 = { row: { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 }, label: { flexShrink: 1 } };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleRow(arg0) {
  const cResult = c.c(13);
  ({ label, usage } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== label) {
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: label };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = label;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.label) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] !== usage) {
      const tmpResult = ConjureUsageTypes;
      const toLocaleStringResult = ConjureUsageTypes.runeCount(usage).toLocaleString();
      cResult[5] = usage;
      cResult[6] = toLocaleStringResult;
      let tmp10 = toLocaleStringResult;
      const runeCountResult = ConjureUsageTypes.runeCount(usage);
    } else {
      tmp10 = cResult[6];
    }
    if (cResult[7] !== tmp10) {
      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: tmp10 };
      const tmp14 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[7] = tmp10;
      cResult[8] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp4.row) {
      if (cResult[10] === tmp8) {
        if (cResult[11] === tmp12) {
          let tmp15 = cResult[12];
        }
        return tmp15;
      }
    }
    const obj4 = { style: tmp4.row, children: null };
    const items = [tmp8, tmp12];
    obj4.children = items;
    const tmp18 = timestampProducer(View, obj4);
    cResult[9] = tmp4.row;
    cResult[10] = tmp8;
    cResult[11] = tmp12;
    cResult[12] = tmp18;
    tmp15 = tmp18;
  }
  const tmp9 = hasOwnProperty(View, { style: tmp4.label, children: tmp5 });
  cResult[2] = tmp4.label;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj5 = { style: tmp4.label, children: tmp5 };
}) : (function RoleRow(arg0) {
  ({ label, usage } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.row, children: null };
  const items = [hasOwnProperty(View, { style: tmp.label, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }) }), ];
  const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const obj2 = { style: tmp.label, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }) };
  obj3.children = ConjureUsageTypes.runeCount(usage).toLocaleString();
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/usage/native/ConjureUsageSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureUsageSheet(projectId) {
  let obj = projectId;
  let cacheHitRateResult = dependencyMap;
  const cResult = projectId(576).c(86);
  projectId = projectId.projectId;
  let str = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureChatStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function x() {
      return ConjureChatStore.getProjectUsage(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp6 = items1;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const obj2 = projectId(576);
  let str2 = obj(504).useStateFromStores(first, tmp5, tmp6);
  if (null == str2) {
    return null;
  } else {
    if (cResult[4] === str.label) {
      if (cResult[5] === str.row) {
        if (cResult[6] === str2.classifier) {
          if (cResult[7] === str2.codegen) {
            if (cResult[8] === str2.compaction) {
              if (cResult[9] === str2.cost_usd) {
                if (cResult[10] === str2.image) {
                  if (cResult[11] === str2.orchestrator) {
                    const _HermesInternal = HermesInternal;
                    const combined = "" + cResult[21] + "%";
                    if (cResult[62] === cResult[12]) {
                      if (cResult[63] === combined) {
                        if (cResult[64] === tmp16) {
                          if (cResult[65] === tmp17) {
                            let tmp92 = cResult[66];
                          }
                          if (cResult[67] === tmp8) {
                            if (cResult[68] === tmp92) {
                              if (cResult[69] === tmp18) {
                                if (cResult[70] === tmp19) {
                                  let tmp95 = cResult[71];
                                }
                                if (cResult[72] === tmp9) {
                                  if (cResult[73] === tmp12) {
                                    if (cResult[74] === tmp13) {
                                      if (cResult[75] === tmp14) {
                                        if (cResult[76] === tmp95) {
                                          if (cResult[77] === tmp20) {
                                            let tmp98 = cResult[78];
                                          }
                                          if (cResult[79] === tmp10) {
                                            if (cResult[80] === tmp98) {
                                              let tmp101 = cResult[81];
                                            }
                                            if (cResult[82] === tmp11) {
                                              if (cResult[83] === tmp15) {
                                                if (cResult[84] === tmp101) {
                                                  let tmp104 = cResult[85];
                                                }
                                                return tmp104;
                                              }
                                            }
                                            const obj3 = { header: tmp15, children: tmp101 };
                                            const tmp106 = closure_5(tmp11, obj3);
                                            cResult[82] = tmp11;
                                            cResult[83] = tmp15;
                                            cResult[84] = tmp101;
                                            cResult[85] = tmp106;
                                            tmp104 = tmp106;
                                          }
                                          const obj4 = { children: tmp98 };
                                          const tmp103 = closure_5(tmp10, obj4);
                                          cResult[79] = tmp10;
                                          cResult[80] = tmp98;
                                          cResult[81] = tmp103;
                                          tmp101 = tmp103;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj5 = { direction: tmp20, spacing: tmp12, children: null };
                                const items2 = [tmp13, tmp14, tmp95];
                                obj5.children = items2;
                                const tmp100 = closure_6(tmp9, obj5);
                                cResult[72] = tmp9;
                                cResult[73] = tmp12;
                                cResult[74] = tmp13;
                                cResult[75] = tmp14;
                                cResult[76] = tmp95;
                                cResult[77] = tmp20;
                                cResult[78] = tmp100;
                                tmp98 = tmp100;
                              }
                            }
                          }
                          const obj6 = { style: tmp18, children: null };
                          const items3 = [tmp19, tmp92];
                          obj6.children = items3;
                          const tmp97 = closure_6(tmp8, obj6);
                          cResult[67] = tmp8;
                          cResult[68] = tmp92;
                          cResult[69] = tmp18;
                          cResult[70] = tmp19;
                          cResult[71] = tmp97;
                          tmp95 = tmp97;
                        }
                      }
                    }
                    const obj7 = { variant: cResult[22], color: cResult[23], children: combined };
                    const tmp94 = closure_5(cResult[12], obj7);
                    cResult[62] = cResult[12];
                    cResult[63] = combined;
                    cResult[64] = cResult[22];
                    cResult[65] = cResult[23];
                    cResult[66] = tmp94;
                    tmp92 = tmp94;
                  }
                }
              }
            }
          }
        }
      }
    }
    const objResult8 = obj(10816);
    const objResult9 = obj(10816);
    const sumTokenUsageResult = obj(10816).sumTokenUsage(str2.orchestrator, str2.codegen);
    const objResult10 = obj(10816);
    const ActionSheet = obj(7358).ActionSheet;
    const _Symbol = Symbol;
    if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { title: null };
      const intl = obj(1125).intl;
      obj8.title = intl.string(_modDef3864.p5EGzq);
      const tmp26 = closure_5(obj(7308).BottomSheetTitleHeader, obj8);
      cResult[27] = tmp26;
      let tmp23 = tmp26;
    } else {
      tmp23 = cResult[27];
    }
    const Stack = obj(6015).Stack;
    const PX_12 = nativeDefault.space.PX_12;
    if (cResult[28] !== str2.cost_usd) {
      const intl2 = obj(1125).intl;
      const obj9 = { runes: null };
      const objResult11 = obj(10816);
      obj9.runes = obj(10816).runesFromUsd(str2.cost_usd).toLocaleString();
      const formatToPlainStringResult = intl2.formatToPlainString(_modDef3864.gMuw5d, obj9);
      cResult[28] = str2.cost_usd;
      cResult[29] = formatToPlainStringResult;
      let tmp29 = formatToPlainStringResult;
      const runesFromUsdResult = obj(10816).runesFromUsd(str2.cost_usd);
    } else {
      tmp29 = cResult[29];
    }
    if (cResult[30] !== tmp29) {
      const obj10 = { variant: "text-md/semibold", color: "text-default", children: tmp29 };
      const tmp33 = closure_5(obj(5271).Text, obj10);
      cResult[30] = tmp29;
      cResult[31] = tmp33;
      let tmp31 = tmp33;
    } else {
      tmp31 = cResult[31];
    }
    const _Symbol2 = Symbol;
    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = obj(1125).intl;
      const stringResult = intl3.string(_modDef3864.xtxP0e);
      cResult[32] = stringResult;
      let tmp34 = stringResult;
    } else {
      tmp34 = cResult[32];
    }
    if (cResult[33] !== str2.orchestrator) {
      const obj11 = { label: tmp34, usage: str2.orchestrator };
      const tmp39 = closure_5(closure_8, obj11);
      cResult[33] = str2.orchestrator;
      cResult[34] = tmp39;
      let tmp36 = tmp39;
    } else {
      tmp36 = cResult[34];
    }
    const _Symbol3 = Symbol;
    if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = obj(1125).intl;
      const stringResult1 = intl4.string(_modDef3864["9Sj3SX"]);
      cResult[35] = stringResult1;
      let tmp40 = stringResult1;
    } else {
      tmp40 = cResult[35];
    }
    if (cResult[36] !== str2.codegen) {
      const obj12 = { label: tmp40, usage: str2.codegen };
      const tmp45 = closure_5(closure_8, obj12);
      cResult[36] = str2.codegen;
      cResult[37] = tmp45;
      let tmp42 = tmp45;
    } else {
      tmp42 = cResult[37];
    }
    const _Symbol4 = Symbol;
    if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = obj(1125).intl;
      const stringResult2 = intl5.string(_modDef3864.ANCEo3);
      cResult[38] = stringResult2;
      let tmp46 = stringResult2;
    } else {
      tmp46 = cResult[38];
    }
    if (cResult[39] !== str2.compaction) {
      const usageOrEmptyResult = obj(10816).usageOrEmpty(str2.compaction);
      cResult[39] = str2.compaction;
      cResult[40] = usageOrEmptyResult;
      let tmp48 = usageOrEmptyResult;
      const objResult12 = obj(10816);
    } else {
      tmp48 = cResult[40];
    }
    if (cResult[41] !== tmp48) {
      const obj13 = { label: tmp46, usage: tmp48 };
      const tmp53 = closure_5(closure_8, obj13);
      cResult[41] = tmp48;
      cResult[42] = tmp53;
      let tmp50 = tmp53;
    } else {
      tmp50 = cResult[42];
    }
    const _Symbol5 = Symbol;
    if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
      const intl6 = obj(1125).intl;
      const stringResult3 = intl6.string(_modDef3864.ugL6D4);
      cResult[43] = stringResult3;
      let tmp54 = stringResult3;
    } else {
      tmp54 = cResult[43];
    }
    if (cResult[44] !== str2.classifier) {
      const usageOrEmptyResult1 = obj(10816).usageOrEmpty(str2.classifier);
      cResult[44] = str2.classifier;
      cResult[45] = usageOrEmptyResult1;
      let tmp56 = usageOrEmptyResult1;
      const objResult13 = obj(10816);
    } else {
      tmp56 = cResult[45];
    }
    if (cResult[46] !== tmp56) {
      const obj14 = { label: tmp54, usage: tmp56 };
      const tmp61 = closure_5(closure_8, obj14);
      cResult[46] = tmp56;
      cResult[47] = tmp61;
      let tmp58 = tmp61;
    } else {
      tmp58 = cResult[47];
    }
    const _Symbol6 = Symbol;
    if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
      const intl7 = obj(1125).intl;
      const stringResult4 = intl7.string(_modDef3864.DHr5On);
      cResult[48] = stringResult4;
      let tmp62 = stringResult4;
    } else {
      tmp62 = cResult[48];
    }
    if (cResult[49] !== str2.image) {
      const usageOrEmptyResult2 = obj(10816).usageOrEmpty(str2.image);
      cResult[49] = str2.image;
      cResult[50] = usageOrEmptyResult2;
      let tmp64 = usageOrEmptyResult2;
      const objResult14 = obj(10816);
    } else {
      tmp64 = cResult[50];
    }
    if (cResult[51] !== tmp64) {
      const obj15 = { label: tmp62, usage: tmp64 };
      const tmp69 = closure_5(closure_8, obj15);
      cResult[51] = tmp64;
      cResult[52] = tmp69;
      let tmp66 = tmp69;
    } else {
      tmp66 = cResult[52];
    }
    if (cResult[53] === tmp36) {
      if (cResult[54] === tmp42) {
        if (cResult[55] === tmp50) {
          if (cResult[56] === tmp58) {
            if (cResult[57] === tmp66) {
              let tmp70 = cResult[58];
            }
            const row = str.row;
            const _Symbol7 = Symbol;
            if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
              const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
              const intl8 = obj(1125).intl;
              obj16.children = intl8.string(_modDef3864["8OUg09"]);
              const tmp74 = closure_5(obj(5271).Text, obj16);
              cResult[59] = tmp74;
              let str3 = tmp74;
            } else {
              str3 = cResult[59];
            }
            if (cResult[60] !== str.label) {
              const obj17 = { style: str.label, children: str3 };
              const tmp77 = closure_5(View, obj17);
              cResult[60] = str.label;
              cResult[61] = tmp77;
              let tmp75 = tmp77;
            } else {
              tmp75 = cResult[61];
            }
            const Text = obj(5271).Text;
            const _Math = Math;
            obj = obj(10816);
            cacheHitRateResult = obj.cacheHitRate(sumTokenUsageResult1);
            const rounded = Math.round(100 * cacheHitRateResult);
            cResult[4] = str.label;
            cResult[5] = str.row;
            cResult[6] = str2.classifier;
            cResult[7] = str2.codegen;
            cResult[8] = str2.compaction;
            cResult[9] = str2.cost_usd;
            cResult[10] = str2.image;
            cResult[11] = str2.orchestrator;
            cResult[12] = Text;
            cResult[13] = View;
            cResult[14] = Stack;
            cResult[15] = View;
            cResult[16] = ActionSheet;
            cResult[17] = PX_12;
            cResult[18] = tmp31;
            cResult[19] = tmp70;
            cResult[20] = tmp23;
            cResult[21] = rounded;
            str2 = "text-sm/medium";
            cResult[22] = "text-sm/medium";
            str = "text-default";
            cResult[23] = "text-default";
            cResult[24] = row;
            cResult[25] = tmp75;
            str3 = "vertical";
            cResult[26] = "vertical";
          }
        }
      }
    }
    const obj18 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: null };
    const items4 = [tmp36, tmp42, tmp50, tmp58, tmp66];
    obj18.children = items4;
    const tmp72 = closure_6(obj(6015).Stack, obj18);
    cResult[53] = tmp36;
    cResult[54] = tmp42;
    cResult[55] = tmp50;
    cResult[56] = tmp58;
    cResult[57] = tmp66;
    cResult[58] = tmp72;
    tmp70 = tmp72;
    sumTokenUsageResult1 = objResult8.sumTokenUsage(sumTokenUsageResult, obj(10816).usageOrEmpty(str2.compaction));
  }
  const objResult = obj(504);
}) : (function ConjureUsageSheet(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_7();
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureChatStore.getProjectUsage(projectId), items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp2Result = tmp2(10816);
    const tmp2Result8 = tmp2(10816);
    const sumTokenUsageResult = tmp2(10816).sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmp2Result9 = tmp2(10816);
    const obj2 = { header: null, children: null };
    const obj3 = { title: null };
    const intl = tmp2(1125).intl;
    obj3.title = intl.string(_modDef3864.p5EGzq);
    obj2.header = closure_5(tmp2(7308).BottomSheetTitleHeader, obj3);
    const obj4 = { children: null };
    const obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_12, children: null };
    const obj6 = { variant: "text-md/semibold", color: "text-default", children: null };
    const intl2 = tmp2(1125).intl;
    const obj7 = { runes: null };
    const sumTokenUsageResult1 = tmp2Result.sumTokenUsage(sumTokenUsageResult, tmp2(10816).usageOrEmpty(stateFromStores.compaction));
    const tmp2Result10 = tmp2(10816);
    obj7.runes = tmp2(10816).runesFromUsd(stateFromStores.cost_usd).toLocaleString();
    obj6.children = intl2.formatToPlainString(_modDef3864.gMuw5d, obj7);
    const items2 = [closure_5(tmp2(5271).Text, obj6), , ];
    const obj8 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: null };
    const obj9 = { label: null, usage: null };
    const intl3 = tmp2(1125).intl;
    obj9.label = intl3.string(_modDef3864.xtxP0e);
    obj9.usage = stateFromStores.orchestrator;
    const items3 = [closure_5(closure_8, obj9), , , , ];
    const obj10 = { label: null, usage: null };
    const intl4 = tmp2(1125).intl;
    obj10.label = intl4.string(_modDef3864["9Sj3SX"]);
    obj10.usage = stateFromStores.codegen;
    items3[1] = closure_5(closure_8, obj10);
    const obj11 = { label: null, usage: null };
    const intl5 = tmp2(1125).intl;
    obj11.label = intl5.string(_modDef3864.ANCEo3);
    const runesFromUsdResult = tmp2(10816).runesFromUsd(stateFromStores.cost_usd);
    obj11.usage = tmp2(10816).usageOrEmpty(stateFromStores.compaction);
    items3[2] = closure_5(closure_8, obj11);
    const obj12 = { label: null, usage: null };
    const intl6 = tmp2(1125).intl;
    obj12.label = intl6.string(_modDef3864.ugL6D4);
    const tmp2Result11 = tmp2(10816);
    obj12.usage = tmp2(10816).usageOrEmpty(stateFromStores.classifier);
    items3[3] = closure_5(closure_8, obj12);
    const obj13 = { label: null, usage: null };
    const intl7 = tmp2(1125).intl;
    obj13.label = intl7.string(_modDef3864.DHr5On);
    const tmp2Result12 = tmp2(10816);
    obj13.usage = tmp2(10816).usageOrEmpty(stateFromStores.image);
    items3[4] = closure_5(closure_8, obj13);
    obj8.children = items3;
    items2[1] = closure_6(tmp2(6015).Stack, obj8);
    const obj14 = { style: tmp.row, children: null };
    const obj15 = { style: tmp.label, children: null };
    const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl8 = tmp2(1125).intl;
    obj16.children = intl8.string(_modDef3864["8OUg09"]);
    obj15.children = closure_5(tmp2(5271).Text, obj16);
    const items4 = [closure_5(View, obj15), ];
    const obj17 = { variant: "text-sm/medium", color: "text-default", children: null };
    const _Math = Math;
    const tmp2Result13 = tmp2(10816);
    const _HermesInternal = HermesInternal;
    obj17.children = "" + Math.round(100 * tmp2(10816).cacheHitRate(sumTokenUsageResult1)) + "%";
    items4[1] = closure_5(tmp2(5271).Text, obj17);
    obj14.children = items4;
    items2[2] = closure_6(View, obj14);
    obj5.children = items2;
    obj4.children = closure_6(tmp2(6015).Stack, obj5);
    obj2.children = closure_5(View, obj4);
    return closure_5(tmp2(7358).ActionSheet, obj2);
  }
  const obj = projectId(504);
});
export const CONJURE_USAGE_SHEET_KEY = "ConjureUsageSheet";