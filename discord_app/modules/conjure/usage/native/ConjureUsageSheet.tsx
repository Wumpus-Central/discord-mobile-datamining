// discord_app/modules/conjure/usage/native/ConjureUsageSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureTypes from "../../ConjureTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureChatStore from "../../chat/ConjureChatStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  row: { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 },
  label: { flexShrink: 1 },
};
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
          const tmpResult = ConjureTypes;
          const toLocaleStringResult = ConjureTypes.runeCount(usage).toLocaleString();
          cResult[5] = usage;
          cResult[6] = toLocaleStringResult;
          let tmp10 = toLocaleStringResult;
          const runeCountResult = ConjureTypes.runeCount(usage);
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
    }
  : (arg0) => {
      ({ label, usage } = arg0);
      const tmp = closure_7();
      const obj = { style: tmp.row, children: null };
      const items = [
        hasOwnProperty(View, {
          style: tmp.label,
          children: hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: label,
          }),
        }),
      ];
      const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const obj2 = {
        style: tmp.label,
        children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }),
      };
      obj3.children = ConjureTypes.runeCount(usage).toLocaleString();
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      obj.children = items;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/usage/native/ConjureUsageSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let obj = projectId;
      let cacheHitRateResult = dependencyMap;
      const cResult = projectId(576).c(79);
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
                    if (cResult[10] === str2.orchestrator) {
                      const _HermesInternal = HermesInternal;
                      const combined = "" + cResult[20] + "%";
                      if (cResult[55] === cResult[11]) {
                        if (cResult[56] === combined) {
                          if (cResult[57] === tmp16) {
                            if (cResult[58] === tmp17) {
                              let tmp84 = cResult[59];
                            }
                            if (cResult[60] === tmp8) {
                              if (cResult[61] === tmp84) {
                                if (cResult[62] === tmp18) {
                                  if (cResult[63] === tmp19) {
                                    let tmp87 = cResult[64];
                                  }
                                  if (cResult[65] === tmp9) {
                                    if (cResult[66] === tmp12) {
                                      if (cResult[67] === tmp13) {
                                        if (cResult[68] === tmp14) {
                                          if (cResult[69] === tmp87) {
                                            if (cResult[70] === tmp20) {
                                              let tmp90 = cResult[71];
                                            }
                                            if (cResult[72] === tmp10) {
                                              if (cResult[73] === tmp90) {
                                                let tmp93 = cResult[74];
                                              }
                                              if (cResult[75] === tmp11) {
                                                if (cResult[76] === tmp15) {
                                                  if (cResult[77] === tmp93) {
                                                    let tmp96 = cResult[78];
                                                  }
                                                  return tmp96;
                                                }
                                              }
                                              const obj3 = { header: tmp15, children: tmp93 };
                                              const tmp98 = closure_5(tmp11, obj3);
                                              cResult[75] = tmp11;
                                              cResult[76] = tmp15;
                                              cResult[77] = tmp93;
                                              cResult[78] = tmp98;
                                              tmp96 = tmp98;
                                            }
                                            const obj4 = { children: tmp90 };
                                            const tmp95 = closure_5(tmp10, obj4);
                                            cResult[72] = tmp10;
                                            cResult[73] = tmp90;
                                            cResult[74] = tmp95;
                                            tmp93 = tmp95;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj5 = { direction: tmp20, spacing: tmp12, children: null };
                                  const items2 = [tmp13, tmp14, tmp87];
                                  obj5.children = items2;
                                  const tmp92 = closure_6(tmp9, obj5);
                                  cResult[65] = tmp9;
                                  cResult[66] = tmp12;
                                  cResult[67] = tmp13;
                                  cResult[68] = tmp14;
                                  cResult[69] = tmp87;
                                  cResult[70] = tmp20;
                                  cResult[71] = tmp92;
                                  tmp90 = tmp92;
                                }
                              }
                            }
                            const obj6 = { style: tmp18, children: null };
                            const items3 = [tmp19, tmp84];
                            obj6.children = items3;
                            const tmp89 = closure_6(tmp8, obj6);
                            cResult[60] = tmp8;
                            cResult[61] = tmp84;
                            cResult[62] = tmp18;
                            cResult[63] = tmp19;
                            cResult[64] = tmp89;
                            tmp87 = tmp89;
                          }
                        }
                      }
                      const obj7 = { variant: cResult[21], color: cResult[22], children: combined };
                      const tmp86 = closure_5(cResult[11], obj7);
                      cResult[55] = cResult[11];
                      cResult[56] = combined;
                      cResult[57] = cResult[21];
                      cResult[58] = cResult[22];
                      cResult[59] = tmp86;
                      tmp84 = tmp86;
                    }
                  }
                }
              }
            }
          }
        }
        const objResult7 = obj(6747);
        const objResult8 = obj(6747);
        const sumTokenUsageResult = obj(6747).sumTokenUsage(str2.orchestrator, str2.codegen);
        const objResult9 = obj(6747);
        const ActionSheet = obj(6701).ActionSheet;
        const _Symbol = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { title: null };
          const intl = obj(1126).intl;
          obj8.title = intl.string(_modDef3723.p5EGzq);
          const tmp26 = closure_5(obj(6644).BottomSheetTitleHeader, obj8);
          cResult[26] = tmp26;
          let tmp23 = tmp26;
        } else {
          tmp23 = cResult[26];
        }
        const Stack = obj(5593).Stack;
        const PX_12 = nativeDefault.space.PX_12;
        if (cResult[27] !== str2.cost_usd) {
          const intl2 = obj(1126).intl;
          const obj9 = { runes: null };
          const objResult10 = obj(6747);
          obj9.runes = obj(6747).runesFromUsd(str2.cost_usd).toLocaleString();
          const formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.gMuw5d, obj9);
          cResult[27] = str2.cost_usd;
          cResult[28] = formatToPlainStringResult;
          let tmp29 = formatToPlainStringResult;
          const runesFromUsdResult = obj(6747).runesFromUsd(str2.cost_usd);
        } else {
          tmp29 = cResult[28];
        }
        if (cResult[29] !== tmp29) {
          const obj10 = { variant: "text-md/semibold", color: "text-default", children: tmp29 };
          const tmp33 = closure_5(obj(4886).Text, obj10);
          cResult[29] = tmp29;
          cResult[30] = tmp33;
          let tmp31 = tmp33;
        } else {
          tmp31 = cResult[30];
        }
        const _Symbol2 = Symbol;
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = obj(1126).intl;
          const stringResult = intl3.string(_modDef3723.xtxP0e);
          cResult[31] = stringResult;
          let tmp34 = stringResult;
        } else {
          tmp34 = cResult[31];
        }
        if (cResult[32] !== str2.orchestrator) {
          const obj11 = { label: tmp34, usage: str2.orchestrator };
          const tmp39 = closure_5(closure_8, obj11);
          cResult[32] = str2.orchestrator;
          cResult[33] = tmp39;
          let tmp36 = tmp39;
        } else {
          tmp36 = cResult[33];
        }
        const _Symbol3 = Symbol;
        if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = obj(1126).intl;
          const stringResult1 = intl4.string(_modDef3723["9Sj3SX"]);
          cResult[34] = stringResult1;
          let tmp40 = stringResult1;
        } else {
          tmp40 = cResult[34];
        }
        if (cResult[35] !== str2.codegen) {
          const obj12 = { label: tmp40, usage: str2.codegen };
          const tmp45 = closure_5(closure_8, obj12);
          cResult[35] = str2.codegen;
          cResult[36] = tmp45;
          let tmp42 = tmp45;
        } else {
          tmp42 = cResult[36];
        }
        const _Symbol4 = Symbol;
        if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
          const intl5 = obj(1126).intl;
          const stringResult2 = intl5.string(_modDef3723.ANCEo3);
          cResult[37] = stringResult2;
          let tmp46 = stringResult2;
        } else {
          tmp46 = cResult[37];
        }
        if (cResult[38] !== str2.compaction) {
          const usageOrEmptyResult = obj(6747).usageOrEmpty(str2.compaction);
          cResult[38] = str2.compaction;
          cResult[39] = usageOrEmptyResult;
          let tmp48 = usageOrEmptyResult;
          const objResult11 = obj(6747);
        } else {
          tmp48 = cResult[39];
        }
        if (cResult[40] !== tmp48) {
          const obj13 = { label: tmp46, usage: tmp48 };
          const tmp53 = closure_5(closure_8, obj13);
          cResult[40] = tmp48;
          cResult[41] = tmp53;
          let tmp50 = tmp53;
        } else {
          tmp50 = cResult[41];
        }
        const _Symbol5 = Symbol;
        if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
          const intl6 = obj(1126).intl;
          const stringResult3 = intl6.string(_modDef3723.ugL6D4);
          cResult[42] = stringResult3;
          let tmp54 = stringResult3;
        } else {
          tmp54 = cResult[42];
        }
        if (cResult[43] !== str2.classifier) {
          const usageOrEmptyResult1 = obj(6747).usageOrEmpty(str2.classifier);
          cResult[43] = str2.classifier;
          cResult[44] = usageOrEmptyResult1;
          let tmp56 = usageOrEmptyResult1;
          const objResult12 = obj(6747);
        } else {
          tmp56 = cResult[44];
        }
        if (cResult[45] !== tmp56) {
          const obj14 = { label: tmp54, usage: tmp56 };
          const tmp61 = closure_5(closure_8, obj14);
          cResult[45] = tmp56;
          cResult[46] = tmp61;
          let tmp58 = tmp61;
        } else {
          tmp58 = cResult[46];
        }
        if (cResult[47] === tmp36) {
          if (cResult[48] === tmp42) {
            if (cResult[49] === tmp50) {
              if (cResult[50] === tmp58) {
                let tmp62 = cResult[51];
              }
              const row = str.row;
              const _Symbol6 = Symbol;
              if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
                const intl7 = obj(1126).intl;
                obj15.children = intl7.string(_modDef3723["8OUg09"]);
                const tmp66 = closure_5(obj(4886).Text, obj15);
                cResult[52] = tmp66;
                let str3 = tmp66;
              } else {
                str3 = cResult[52];
              }
              if (cResult[53] !== str.label) {
                const obj16 = { style: str.label, children: str3 };
                const tmp69 = closure_5(View, obj16);
                cResult[53] = str.label;
                cResult[54] = tmp69;
                let tmp67 = tmp69;
              } else {
                tmp67 = cResult[54];
              }
              const Text = obj(4886).Text;
              const _Math = Math;
              obj = obj(6747);
              cacheHitRateResult = obj.cacheHitRate(sumTokenUsageResult1);
              const rounded = Math.round(100 * cacheHitRateResult);
              cResult[4] = str.label;
              cResult[5] = str.row;
              cResult[6] = str2.classifier;
              cResult[7] = str2.codegen;
              cResult[8] = str2.compaction;
              cResult[9] = str2.cost_usd;
              cResult[10] = str2.orchestrator;
              cResult[11] = Text;
              cResult[12] = View;
              cResult[13] = Stack;
              cResult[14] = View;
              cResult[15] = ActionSheet;
              cResult[16] = PX_12;
              cResult[17] = tmp31;
              cResult[18] = tmp62;
              cResult[19] = tmp23;
              cResult[20] = rounded;
              str2 = "text-sm/medium";
              cResult[21] = "text-sm/medium";
              str = "text-default";
              cResult[22] = "text-default";
              cResult[23] = row;
              cResult[24] = tmp67;
              str3 = "vertical";
              cResult[25] = "vertical";
            }
          }
        }
        const obj17 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: null };
        const items4 = [tmp36, tmp42, tmp50, tmp58];
        obj17.children = items4;
        const tmp64 = closure_6(obj(5593).Stack, obj17);
        cResult[47] = tmp36;
        cResult[48] = tmp42;
        cResult[49] = tmp50;
        cResult[50] = tmp58;
        cResult[51] = tmp64;
        tmp62 = tmp64;
        sumTokenUsageResult1 = objResult7.sumTokenUsage(sumTokenUsageResult, obj(6747).usageOrEmpty(str2.compaction));
      }
      const objResult = obj(504);
    }
  : (projectId) => {
      projectId = projectId.projectId;
      const tmp = closure_7();
      const items = [ConjureChatStore];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureChatStore.getProjectUsage(projectId),
        items1,
      );
      if (null == stateFromStores) {
        return null;
      } else {
        const tmp2Result = tmp2(6747);
        const tmp2Result7 = tmp2(6747);
        const sumTokenUsageResult = tmp2(6747).sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
        const tmp2Result8 = tmp2(6747);
        const obj2 = { header: null, children: null };
        const obj3 = { title: null };
        const intl = tmp2(1126).intl;
        obj3.title = intl.string(_modDef3723.p5EGzq);
        obj2.header = closure_5(tmp2(6644).BottomSheetTitleHeader, obj3);
        const obj4 = { children: null };
        const obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_12, children: null };
        const obj6 = { variant: "text-md/semibold", color: "text-default", children: null };
        const intl2 = tmp2(1126).intl;
        const obj7 = { runes: null };
        const sumTokenUsageResult1 = tmp2Result.sumTokenUsage(
          sumTokenUsageResult,
          tmp2(6747).usageOrEmpty(stateFromStores.compaction),
        );
        const tmp2Result9 = tmp2(6747);
        obj7.runes = tmp2(6747).runesFromUsd(stateFromStores.cost_usd).toLocaleString();
        obj6.children = intl2.formatToPlainString(_modDef3723.gMuw5d, obj7);
        const items2 = [closure_5(tmp2(4886).Text, obj6), ,];
        const obj8 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: null };
        const obj9 = { label: null, usage: null };
        const intl3 = tmp2(1126).intl;
        obj9.label = intl3.string(_modDef3723.xtxP0e);
        obj9.usage = stateFromStores.orchestrator;
        const items3 = [closure_5(closure_8, obj9), , ,];
        const obj10 = { label: null, usage: null };
        const intl4 = tmp2(1126).intl;
        obj10.label = intl4.string(_modDef3723["9Sj3SX"]);
        obj10.usage = stateFromStores.codegen;
        items3[1] = closure_5(closure_8, obj10);
        const obj11 = { label: null, usage: null };
        const intl5 = tmp2(1126).intl;
        obj11.label = intl5.string(_modDef3723.ANCEo3);
        const runesFromUsdResult = tmp2(6747).runesFromUsd(stateFromStores.cost_usd);
        obj11.usage = tmp2(6747).usageOrEmpty(stateFromStores.compaction);
        items3[2] = closure_5(closure_8, obj11);
        const obj12 = { label: null, usage: null };
        const intl6 = tmp2(1126).intl;
        obj12.label = intl6.string(_modDef3723.ugL6D4);
        const tmp2Result10 = tmp2(6747);
        obj12.usage = tmp2(6747).usageOrEmpty(stateFromStores.classifier);
        items3[3] = closure_5(closure_8, obj12);
        obj8.children = items3;
        items2[1] = closure_6(tmp2(5593).Stack, obj8);
        const obj13 = { style: tmp.row, children: null };
        const obj14 = { style: tmp.label, children: null };
        const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl7 = tmp2(1126).intl;
        obj15.children = intl7.string(_modDef3723["8OUg09"]);
        obj14.children = closure_5(tmp2(4886).Text, obj15);
        const items4 = [closure_5(View, obj14)];
        const obj16 = { variant: "text-sm/medium", color: "text-default", children: null };
        const _Math = Math;
        const tmp2Result11 = tmp2(6747);
        const _HermesInternal = HermesInternal;
        obj16.children = "" + Math.round(100 * tmp2(6747).cacheHitRate(sumTokenUsageResult1)) + "%";
        items4[1] = closure_5(tmp2(4886).Text, obj16);
        obj13.children = items4;
        items2[2] = closure_6(View, obj13);
        obj5.children = items2;
        obj4.children = closure_6(tmp2(5593).Stack, obj5);
        obj2.children = closure_5(View, obj4);
        return closure_5(tmp2(6701).ActionSheet, obj2);
      }
      const obj = projectId(504);
    };
export const CONJURE_USAGE_SHEET_KEY = "ConjureUsageSheet";
