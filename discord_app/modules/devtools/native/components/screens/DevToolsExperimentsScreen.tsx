// === Module 11435: DevToolsExperimentsScreen ===

// Module 11435 (DevToolsExperimentsScreen)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import FingerprintUtils from "FingerprintUtils" /* 1265 */;
import ExperimentManager from "ExperimentManager" /* 4787 */;
import TableRow5 from "TableRow" /* 6000 */;
import TableRowGroup6 from "TableRowGroup" /* 6081 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6651 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import ExperimentDevToolsUtils from "ExperimentDevToolsUtils" /* 7547 */;
import useExperimentAssignments from "useExperimentAssignments" /* 11433 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2074 */;
import ExperimentConstants from "ExperimentConstants" /* 4783 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, importDefault, map;

let c10;
let c9;
let closure_12;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let unpackModuleId;
const View = react_native.View;
({ ExperimentBuckets: c9, ExperimentTypes: c10 } = ExperimentConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, listContainer: obj3, searchBar: obj4, debugContainer: obj5, copyExperimentLink: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj4 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj5 = { marginTop: nativeDefault.space.PX_16 };
obj6 = { marginTop: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let memo2 = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let arr;
  let closure_0;
  let experiments;
  let experiments2;
  let overridesInfo;
  let overridesInfo2;
  let tmp6;
  let tmp7;
  let obj = require("react");
  const cResult = obj.c(30);
  const tmp4 = closure_13();
  [tmp6, tmp7] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  const obj2 = require("useLegacyExperiments");
  const legacyExperiments = obj2.useLegacyExperiments();
  ({ experiments, overridesInfo } = legacyExperiments);
  const obj3 = require("useApexExperiments");
  const apexExperiments = obj3.useApexExperiments();
  ({ experiments: experiments2, overridesInfo: overridesInfo2 } = apexExperiments);
  if (cResult[0] === experiments2) {
    let tmp10;
    if (cResult[1] === experiments) {
      tmp10 = cResult[2];
    }
    if (cResult[3] === overridesInfo2) {
      let tmp13;
      let tmp20;
      if (cResult[4] === overridesInfo) {
        tmp13 = cResult[5];
      }
      _require = tmp13;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { includeKeyboardHeight: true };
        cResult[6] = obj4;
        tmp20 = obj4;
      } else {
        tmp20 = cResult[6];
      }
      const insets = arr(6478)(tmp20).insets;
      const tmp22 = arr(6553)();
      if (cResult[7] === tmp10) {
        if (cResult[8] === tmp13) {
          let tmp26;
          if (cResult[9] === tmp6) {
            arr = cResult[10];
          }
          if (cResult[11] !== arr.length) {
            const items = [arr.length];
            cResult[11] = arr.length;
            class A {
              constructor(arg0, arg1) {
                tmp = closure_1[arg1];
                obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                return jsx(closure_14, obj);
              }
            }
            cResult[12] = items;
            tmp26 = items;
          } else {
            tmp26 = cResult[12];
          }
          if (cResult[13] === arr) {
            let tmp27;
            if (cResult[14] === tmp13) {
              tmp27 = cResult[15];
            }
            const tmp21Result = arr(12);
            if (tmp21Result.isEmpty(tmp10)) {
              let tmp45;
              const _Symbol3 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                ({ Illustration: require("generated/NoResults").NoResults, title: "No Experiments", body: "No experiments are currently running." });
                const EmptyState = tmp(1188).EmptyState;
                class A {
                  constructor(arg0, arg1) {
                    tmp = closure_1[arg1];
                    obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                    return jsx(closure_14, obj);
                  }
                }
                cResult[16] = tmp47;
                tmp45 = tmp47;
              } else {
                tmp45 = cResult[16];
              }
              return tmp45;
            } else {
              let tmp31;
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { size: "md", onChange: tmp7 };
                const tmp30 = closure_11(require("SearchField").SearchField, obj6);
                class A {
                  constructor(arg0, arg1) {
                    tmp = closure_1[arg1];
                    obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                    return jsx(closure_14, obj);
                  }
                }
                cResult[17] = tmp30;
              }
              if (cResult[18] !== tmp4.searchBar) {
                const obj7 = { style: tmp4.searchBar, children: null };
                class A {
                  constructor(arg0, arg1) {
                    tmp = closure_1[arg1];
                    obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                    return jsx(closure_14, obj);
                  }
                }
                const tmp34 = closure_11(View, obj7);
                cResult[18] = tmp4.searchBar;
                cResult[19] = tmp34;
                tmp31 = tmp34;
              } else {
                tmp31 = cResult[19];
              }
              class A {
                constructor(arg0, arg1) {
                  tmp = closure_1[arg1];
                  obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                  return jsx(closure_14, obj);
                }
              }
              const sum = tmp35 + tmp21(587).space.PX_16;
              if (cResult[20] === tmp22) {
                if (cResult[21] === tmp27) {
                  if (cResult[22] === tmp26) {
                    if (cResult[23] === tmp4.listContainer) {
                      let tmp37;
                      if (cResult[24] === sum) {
                        tmp37 = cResult[25];
                      }
                      if (cResult[26] === tmp4.container) {
                        if (cResult[27] === tmp31) {
                          let tmp40;
                          if (cResult[28] === tmp37) {
                            tmp40 = cResult[29];
                          }
                          return tmp40;
                        }
                      }
                      class A {
                        constructor(arg0, arg1) {
                          tmp = closure_1[arg1];
                          obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                          return jsx(closure_14, obj);
                        }
                      }
                      tmp43[0] = tmp4.container;
                      const items1 = [tmp31, tmp37];
                      tmp43[1] = items1;
                      const tmp44 = closure_12(View, tmp43);
                      cResult[26] = tmp4.container;
                      cResult[27] = tmp31;
                      cResult[28] = tmp37;
                      cResult[29] = tmp44;
                      tmp40 = tmp44;
                    }
                  }
                }
              }
              const obj8 = { style: tmp4.listContainer, sections: tmp26, estimatedListSize: "windowSize", itemSize: tmp22, insetEnd: sum, renderItem: tmp27 };
              const tmp39 = closure_11(arr(6559), obj8);
              cResult[20] = tmp22;
              cResult[21] = tmp27;
              cResult[22] = tmp26;
              cResult[23] = tmp4.listContainer;
              cResult[24] = sum;
              cResult[25] = tmp39;
              tmp37 = tmp39;
            }
          }
          class A {
            constructor(arg0, arg1) {
              tmp = closure_1[arg1];
              obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
              return jsx(closure_14, obj);
            }
          }
          cResult[13] = arr;
          cResult[14] = tmp13;
          cResult[15] = A;
          tmp27 = A;
        }
      }
      const getBestMatches = tmp(11436).getBestMatches;
      require("UserSettingsExperimentsUtils");
      const sortEntries = tmp(11436).sortEntries;
      require("UserSettingsExperimentsUtils");
      const tmpResult4 = require("UserSettingsExperimentsUtils");
      const bestMatches = getBestMatches(sortEntries(tmpResult4.getEntries(tmp10), tmp13), tmp6);
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      cResult[9] = tmp6;
      cResult[10] = bestMatches;
      arr = bestMatches;
    }
    const obj9 = {};
    const merged = Object.assign(overridesInfo);
    const merged1 = Object.assign(overridesInfo2);
    cResult[3] = overridesInfo2;
    cResult[4] = overridesInfo;
    cResult[5] = obj9;
    tmp13 = obj9;
  }
  const obj10 = {};
  const merged2 = Object.assign(experiments);
  const merged3 = Object.assign(experiments2);
  cResult[0] = experiments2;
  cResult[1] = experiments;
  cResult[2] = obj10;
  tmp10 = obj10;
}) : (() => {
  let experiments;
  let experiments2;
  let items4;
  let memo1;
  let obj8;
  let overridesInfo2;
  let tmp21;
  let tmp3;
  let tmp4;
  const tmp = closure_13();
  [tmp3, tmp4] = overridesInfo2(memo1.useState(""), 2);
  overridesInfo2(memo1.useState(""), 2);
  let obj = experiments(experiments2[12]);
  const legacyExperiments = obj.useLegacyExperiments();
  experiments = legacyExperiments.experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  const obj2 = experiments(experiments2[13]);
  const apexExperiments = obj2.useApexExperiments();
  experiments2 = apexExperiments.experiments;
  overridesInfo2 = apexExperiments.overridesInfo;
  let items = [experiments, experiments2];
  const memo = memo1.useMemo(() => {
    const obj = {};
    const merged = Object.assign(experiments);
    const merged1 = Object.assign(experiments2);
    return obj;
  }, items);
  const items1 = [overridesInfo, overridesInfo2];
  memo1 = memo1.useMemo(() => {
    const obj = {};
    const merged = Object.assign(overridesInfo);
    const merged1 = Object.assign(overridesInfo2);
    return obj;
  }, items1);
  const insets = overridesInfo(experiments2[14])({ includeKeyboardHeight: true }).insets;
  const tmp12 = overridesInfo(experiments2[15])();
  const getBestMatches = experiments(experiments2[16]).getBestMatches;
  experiments(experiments2[16]);
  const sortEntries = experiments(experiments2[16]).sortEntries;
  experiments(experiments2[16]);
  const obj3 = experiments(experiments2[16]);
  const bestMatches = getBestMatches(sortEntries(obj3.getEntries(memo), memo1), tmp3);
  const items2 = [bestMatches.length];
  const items3 = [bestMatches, memo1];
  const memo2 = memo1.useMemo(() => {
    const items = [bestMatches.length];
    return items;
  }, items2);
  const callback = memo1.useCallback((arg0, arg1) => {
    const obj = { id: bestMatches[arg1].id, experiment: bestMatches[arg1].experiment, override: memo1[bestMatches[arg1].id], start: 0 === arg1, end: arg1 === bestMatches.length - 1 };
    return unpackModuleId(closure_14, obj);
  }, items3);
  const obj4 = overridesInfo(experiments2[17]);
  if (obj4.isEmpty(memo)) {
    const obj5 = { Illustration: experiments(experiments2[19]).NoResults, title: "No Experiments", body: "No experiments are currently running." };
    const EmptyState = tmp5(tmp6[18]).EmptyState;
    tmp21 = closure_11(EmptyState, obj5);
  } else {
    const obj6 = { style: tmp.container, children: items4 };
    const obj7 = { style: tmp.searchBar, children: closure_11(experiments(experiments2[20]).SearchField, obj8) };
    obj8 = { size: "md", onChange: tmp4 };
    items4 = [closure_11(bestMatches, obj7), ];
    const obj9 = { style: tmp.listContainer, sections: memo2, estimatedListSize: "windowSize", itemSize: tmp12, insetEnd: insets.bottom + overridesInfo(experiments2[9]).space.PX_16, renderItem: callback };
    const tmp11Result = overridesInfo(experiments2[21]);
    items4[1] = closure_11(tmp11Result, obj9);
    tmp21 = closure_12(bestMatches, obj6);
  }
  return tmp21;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let arr;
  let end;
  let experiment;
  let start;
  let obj = id(experiment[11]);
  const cResult = obj.c(18);
  id = id.id;
  const override = id.override;
  experiment = id.experiment;
  ({ start, end } = id);
  if (cResult[0] !== experiment) {
    const tmpResult = id(experiment[22]);
    const experimentVariantsForDevTools = tmpResult.getExperimentVariantsForDevTools(experiment);
    cResult[0] = experiment;
    cResult[1] = experimentVariantsForDevTools;
    arr = experimentVariantsForDevTools;
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === experiment) {
    if (cResult[3] === id) {
      if (cResult[4] === override) {
        let tmp5;
        if (cResult[5] === arr) {
          tmp5 = cResult[6];
        }
        let variantId;
        if (override != null) {
          variantId = override.variantId;
        }
        if (cResult[7] === variantId) {
          let tmp8;
          let tmp11;
          if (cResult[8] === arr) {
            tmp8 = cResult[9];
          }
          if (cResult[10] !== tmp8) {
            let obj2 = { variant: "text-md/medium", color: "text-muted", children: tmp8 };
            const tmp13 = closure_11(id(experiment[25]).Text, obj2);
            cResult[10] = tmp8;
            cResult[11] = tmp13;
            tmp11 = tmp13;
          } else {
            tmp11 = cResult[11];
          }
          if (cResult[12] === end) {
            if (cResult[13] === experiment.title) {
              if (cResult[14] === tmp5) {
                if (cResult[15] === start) {
                  let tmp14;
                  if (cResult[16] === tmp11) {
                    tmp14 = cResult[17];
                  }
                  return tmp14;
                }
              }
            }
          }
          let obj3 = { height: "100%", start, end, label: experiment.title, labelLineClamp: 1, onPress: tmp5, trailing: tmp11 };
          const tmp16 = closure_11(id(experiment[26]).TableRow, obj3);
          cResult[12] = end;
          cResult[13] = experiment.title;
          cResult[14] = tmp5;
          cResult[15] = start;
          cResult[16] = tmp11;
          cResult[17] = tmp16;
          tmp14 = tmp16;
        }
        let str = "N/A";
        if (null != variantId) {
          let label;
          const found = arr.find((id) => id.id === variantId);
          if (null != found) {
            label = found.label;
          } else {
            const _HermesInternal = HermesInternal;
            label = "Unknown (" + variantId + ")";
          }
          str = label;
        }
        cResult[7] = variantId;
        cResult[8] = arr;
        cResult[9] = str;
        tmp8 = str;
      }
    }
  }
  const fn = function b() {
    let system;
    map = new Map();
    const item = arr.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const item1 = map.forEach((label) => {
      let closure_0 = label;
      let obj = {
        label: label.label,
        onPress() {
          const obj = map(system[23]);
          obj.overrideBucket(system.system, closure_2_0, id.id);
          const obj2 = items(system[24]);
          obj2.hideActionSheet("UserSettingsExperimentBucket");
        }
      };
      items.push(obj);
    });
    let obj = {
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        const obj = id(experiment[23]);
        obj.overrideBucket(system.system, map, null);
        const obj2 = override(experiment[24]);
        obj2.hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    arr = items.push(obj);
    let obj2 = override(experiment[24]);
    const obj3 = { default: closure_1_18 };
    const obj4 = {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink() {
        const obj = items(system[24]);
        return obj.hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    obj2.openLazy(Promise.resolve(obj3), "UserSettingsExperimentBucket", obj4);
  };
  cResult[2] = experiment;
  cResult[3] = id;
  cResult[4] = override;
  cResult[5] = arr;
  cResult[6] = fn;
  tmp5 = fn;
}) : ((id) => {
  let end;
  let start;
  id = id.id;
  const override = id.override;
  const experiment = id.experiment;
  let items = [experiment];
  ({ start, end } = id);
  const memo = react.useMemo(() => {
    const obj = ExperimentDevToolsUtils;
    return obj.getExperimentVariantsForDevTools(experiment);
  }, items);
  const items1 = [id, experiment, override, memo];
  let variantId;
  const callback = react.useCallback(() => {
    let system;
    map = new Map();
    const item = memo.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const item1 = map.forEach((label) => {
      let closure_0 = label;
      let obj = {
        label: label.label,
        onPress() {
          const obj = map(system[23]);
          obj.overrideBucket(system.system, closure_2_0, id.id);
          const obj2 = items(system[24]);
          obj2.hideActionSheet("UserSettingsExperimentBucket");
        }
      };
      items.push(obj);
    });
    let obj = {
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        const obj = id(experiment[23]);
        obj.overrideBucket(system.system, map, null);
        const obj2 = override(experiment[24]);
        obj2.hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    items.push(obj);
    let obj2 = override(experiment[24]);
    const obj3 = { default: closure_1_18 };
    const obj4 = {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink() {
        const obj = items(system[24]);
        return obj.hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    obj2.openLazy(Promise.resolve(obj3), "UserSettingsExperimentBucket", obj4);
  }, items1);
  if (override != null) {
    variantId = override.variantId;
  }
  let str = "N/A";
  if (null != variantId) {
    let label;
    const found = memo.find((id) => id.id === variantId);
    if (null != found) {
      label = found.label;
    } else {
      const _HermesInternal = HermesInternal;
      label = "Unknown (" + variantId + ")";
    }
    str = label;
  }
  let obj = { height: "100%", start, end, label: experiment.title, labelLineClamp: 1, onPress: callback, trailing: closure_11(id(experiment[25]).Text, { variant: "text-md/medium", color: "text-muted", children: str }) };
  const TableRow = id(experiment[26]).TableRow;
  return closure_11(TableRow, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let experiment;
  let first;
  let flag;
  let id;
  let items;
  let obj7;
  let obj9;
  let override;
  let str;
  let str2;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(55);
  ({ id, override, experiment } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id1 = AuthenticationStore.getId();
    cResult[0] = id1;
    first = id1;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const installationForTracking = AuthenticationStore.getInstallationForTracking();
    let maybeExtractIdResult = null;
    if (null != installationForTracking) {
      const tmpResult = FingerprintUtils;
      maybeExtractIdResult = tmpResult.maybeExtractId(installationForTracking);
    }
    cResult[1] = maybeExtractIdResult;
    tmp8 = maybeExtractIdResult;
  } else {
    tmp8 = cResult[1];
  }
  let tmp12 = first;
  if ("installation" === experiment.kind) {
    tmp12 = first;
    if (null != tmp8) {
      tmp12 = tmp8;
    }
  }
  const tmpResult3 = useExperimentAssignments;
  const experimentAssignment = tmpResult3.useExperimentAssignment(experiment, tmp12);
  const tmpResult4 = useExperimentAssignments;
  const experimentServerAssignment = tmpResult4.useExperimentServerAssignment(experiment, tmp12);
  if (cResult[2] === experimentAssignment) {
    if (cResult[3] === experiment.system) {
      if (cResult[4] === id) {
        if (cResult[5] === override) {
          if (cResult[6] === experimentServerAssignment) {
            if (cResult[7] === tmp4.debugContainer) {
              tmp16 = cResult[8];
              tmp17 = cResult[9];
              tmp18 = cResult[10];
              tmp19 = cResult[11];
              tmp20 = cResult[12];
              tmp21 = cResult[13];
              tmp22 = cResult[14];
              str = cResult[15];
              flag = cResult[16];
              tmp23 = cResult[17];
              tmp24 = cResult[18];
              tmp25 = cResult[19];
              tmp26 = cResult[20];
            }
            if (cResult[37] === tmp16) {
              let tmp47;
              if (cResult[38] === tmp22) {
                tmp47 = cResult[39];
              }
              if (cResult[40] === tmp17) {
                if (cResult[41] === tmp47) {
                  if (cResult[42] === str) {
                    let tmp50;
                    if (cResult[43] === flag) {
                      tmp50 = cResult[44];
                    }
                    if (cResult[45] === tmp18) {
                      if (cResult[46] === tmp19) {
                        if (cResult[47] === tmp20) {
                          if (cResult[48] === tmp21) {
                            if (cResult[49] === tmp50) {
                              if (cResult[50] === tmp23) {
                                if (cResult[51] === tmp24) {
                                  if (cResult[52] === tmp25) {
                                    let tmp53;
                                    if (cResult[53] === tmp26) {
                                      tmp53 = cResult[54];
                                    }
                                    return tmp53;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj2 = { style: tmp23, children: items };
                    items = [tmp24, tmp25, tmp26, tmp19, tmp20, tmp21, tmp50];
                    const tmp55 = closure_12(tmp18, obj2);
                    cResult[45] = tmp18;
                    cResult[46] = tmp19;
                    cResult[47] = tmp20;
                    cResult[48] = tmp21;
                    cResult[49] = tmp50;
                    cResult[50] = tmp23;
                    cResult[51] = tmp24;
                    cResult[52] = tmp25;
                    cResult[53] = tmp26;
                    cResult[54] = tmp55;
                    tmp53 = tmp55;
                  }
                }
              }
              const obj3 = { title: str, hasIcons: flag, children: tmp47 };
              const tmp52 = unpackModuleId(tmp17, obj3);
              cResult[40] = tmp17;
              cResult[41] = tmp47;
              cResult[42] = str;
              cResult[43] = flag;
              cResult[44] = tmp52;
              tmp50 = tmp52;
            }
            const obj4 = { label: tmp22 };
            const tmp49 = unpackModuleId(tmp16, obj4);
            cResult[37] = tmp16;
            cResult[38] = tmp22;
            cResult[39] = tmp49;
            tmp47 = tmp49;
          }
        }
      }
    }
  }
  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(arg0) {
        return -closure_1_3(arg0, 2)[1];
      }
    }
    cResult[21] = J;
  } else {
    class J {
      constructor(arg0) {
        return -closure_1_3(arg0, 2)[1];
      }
    }
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        first = tmp[0];
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
    cResult[22] = V;
  } else {
    class V {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        first = tmp[0];
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
  }
  const obj5 = _modDef12;
  const sortByResult = obj5.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id), J);
  const mapped = sortByResult.map(V);
  if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
    class V {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        first = tmp[0];
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
    let NOT_ELIGIBLE = experimentAssignment;
    if (experimentAssignment == null) {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    const _HermesInternal = HermesInternal;
    str2 = "Currently assigned to bucket " + NOT_ELIGIBLE;
  } else {
    class V {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        first = tmp[0];
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
    str2 = "Currently unassigned";
    if (null != experimentAssignment) {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      str2 = "Currently assigned to variant " + experimentAssignment;
    }
  }
  const debugContainer = tmp4.debugContainer;
  if (null == experimentServerAssignment) {
    class V {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        first = tmp[0];
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
  }
  if (cResult[23] === str2) {
    class V {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        first = tmp[0];
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
    const _Symbol = Symbol;
    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      cResult[26] = unpackModuleId(native.Spacer, { size: 16 });
      const tmp34 = unpackModuleId(native.Spacer, { size: 16 });
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
    }
    if (cResult[27] !== experimentServerAssignment) {
      let json;
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      if (null != experimentServerAssignment) {
        class V {
          constructor(arg0) {
            tmp = closure_1_3(arg0, 2);
            first = tmp[0];
            date = new Date(tmp[1]);
            return "" + date.toLocaleString() + " (" + first + ")";
          }
        }
        json = JSON.stringify(experimentServerAssignment, undefined, 2);
      }
      cResult[27] = experimentServerAssignment;
      cResult[28] = json;
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
    }
    if (cResult[29] !== tmp35) {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      const obj6 = { title: "Server Descriptor", hasIcons: false, children: unpackModuleId(TableRow5.TableRow, obj7) };
      const TableRowGroup2 = TableRowGroup6.TableRowGroup;
      obj7 = { label: tmp35 };
      cResult[29] = tmp35;
      cResult[30] = unpackModuleId(TableRowGroup2, obj6);
      const tmp38 = unpackModuleId(TableRowGroup2, obj6);
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      cResult[31] = unpackModuleId(native.Spacer, { size: 16 });
      const tmp40 = unpackModuleId(native.Spacer, { size: 16 });
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
    }
    if (cResult[32] !== override) {
      let json1;
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      if (null != override) {
        class V {
          constructor(arg0) {
            tmp = closure_1_3(arg0, 2);
            first = tmp[0];
            date = new Date(tmp[1]);
            return "" + date.toLocaleString() + " (" + first + ")";
          }
        }
        json1 = JSON.stringify(override.originalDescriptor, undefined, 2);
      }
      cResult[32] = override;
      cResult[33] = json1;
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
    }
    if (cResult[34] !== tmp41) {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      const obj8 = { title: "Override Descriptor", hasIcons: false, children: unpackModuleId(TableRow5.TableRow, obj9) };
      const TableRowGroup3 = TableRowGroup6.TableRowGroup;
      obj9 = { label: tmp41 };
      cResult[34] = tmp41;
      cResult[35] = unpackModuleId(TableRowGroup3, obj8);
      const tmp44 = unpackModuleId(TableRowGroup3, obj8);
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      cResult[36] = unpackModuleId(native.Spacer, { size: 16 });
      const tmp46 = unpackModuleId(native.Spacer, { size: 16 });
    } else {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
    }
    const TableRowGroup4 = TableRowGroup6.TableRowGroup;
    const TableRow = TableRow5.TableRow;
    let str5 = "None";
    if (0 !== mapped.length) {
      class V {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          first = tmp[0];
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + first + ")";
        }
      }
      str5 = mapped.join("\n");
    }
    cResult[2] = experimentAssignment;
    cResult[3] = experiment.system;
    cResult[4] = id;
    cResult[5] = override;
    cResult[6] = experimentServerAssignment;
    cResult[7] = tmp4.debugContainer;
    cResult[8] = TableRow;
    cResult[9] = TableRowGroup4;
    cResult[10] = View;
    cResult[11] = tmp39;
    cResult[12] = tmp43;
    cResult[13] = tmp45;
    cResult[14] = str5;
    cResult[15] = "Recent Exposures";
    cResult[16] = false;
    cResult[17] = debugContainer;
    cResult[18] = tmp31;
    cResult[19] = tmp33;
    cResult[20] = tmp37;
    tmp22 = str5;
    tmp26 = tmp37;
    tmp25 = tmp33;
    tmp24 = tmp31;
    tmp23 = debugContainer;
    flag = false;
    str = "Recent Exposures";
    tmp21 = tmp45;
    tmp20 = tmp43;
    tmp19 = tmp39;
    tmp18 = View;
    tmp17 = TableRowGroup4;
    tmp16 = TableRow;
  }
  const obj10 = { title: "Overview", hasIcons: false, children: unpackModuleId(TableRow5.TableRow, { label: str2, subLabel: undefined }) };
  const TableRowGroup = TableRowGroup6.TableRowGroup;
  cResult[23] = str2;
  cResult[24] = undefined;
  cResult[25] = unpackModuleId(TableRowGroup, obj10);
  const tmp32 = unpackModuleId(TableRowGroup, obj10);
}) : ((id) => {
  let experiment;
  let items;
  let override;
  let str;
  let str4;
  ({ override, experiment } = id);
  id = id.id;
  const tmp = closure_13();
  const id1 = AuthenticationStore.getId();
  const installationForTracking = AuthenticationStore.getInstallationForTracking();
  let maybeExtractIdResult = null;
  if (null != installationForTracking) {
    const obj = FingerprintUtils;
    maybeExtractIdResult = obj.maybeExtractId(installationForTracking);
  }
  let tmp7 = id1;
  if ("installation" === experiment.kind) {
    tmp7 = id1;
    if (null != maybeExtractIdResult) {
      tmp7 = maybeExtractIdResult;
    }
  }
  const obj2 = useExperimentAssignments;
  const experimentAssignment = obj2.useExperimentAssignment(experiment, tmp7);
  const obj3 = useExperimentAssignments;
  const experimentServerAssignment = obj3.useExperimentServerAssignment(experiment, tmp7);
  const obj4 = _modDef12;
  const sortByResult = obj4.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id), (arg0) => {
    let tmp;
    [, tmp] = arg0;
    return -tmp;
  });
  const mapped = sortByResult.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const date = new Date(tmp2);
    return "" + date.toLocaleString() + " (" + tmp + ")";
  });
  if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
    let NOT_ELIGIBLE = experimentAssignment;
    if (experimentAssignment == null) {
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    const _HermesInternal2 = HermesInternal;
    str = "Currently assigned to bucket " + NOT_ELIGIBLE;
  } else {
    str = "Currently unassigned";
    if (null != experimentAssignment) {
      const _HermesInternal = HermesInternal;
      str = "Currently assigned to variant " + experimentAssignment;
    }
  }
  const obj5 = { style: tmp.debugContainer, children: items };
  const TableRowGroup = TableRowGroup6.TableRowGroup;
  const obj6 = { label: str, subLabel: str4 };
  str4 = undefined;
  const TableRow = TableRow5.TableRow;
  if (null == experimentServerAssignment) {
    str4 = "Warning: Server did not send any experiment config. You may need to check the \"Send to Client\" box in the admin UI.";
  }
  items = [, , , , , , ];
  const obj7 = { title: "Overview", hasIcons: false, children: unpackModuleId(TableRow, obj6) };
  items[0] = unpackModuleId(TableRowGroup, obj7);
  items[1] = unpackModuleId(native.Spacer, { size: 16 });
  const TableRowGroup2 = TableRowGroup6.TableRowGroup;
  let str5 = "None";
  let str6 = "None";
  const TableRow2 = TableRow5.TableRow;
  if (null != experimentServerAssignment) {
    const _JSON = JSON;
    str6 = JSON.stringify(experimentServerAssignment, undefined, 2);
  }
  const obj8 = { title: "Server Descriptor", hasIcons: false, children: unpackModuleId(TableRow2, { label: str6 }) };
  items[2] = unpackModuleId(TableRowGroup2, obj8);
  items[3] = unpackModuleId(native.Spacer, { size: 16 });
  const TableRowGroup3 = TableRowGroup6.TableRowGroup;
  let json = str5;
  const TableRow3 = TableRow5.TableRow;
  if (null != override) {
    const _JSON2 = JSON;
    json = JSON.stringify(override.originalDescriptor, undefined, 2);
  }
  const obj9 = { title: "Override Descriptor", hasIcons: false, children: unpackModuleId(TableRow3, { label: json }) };
  items[4] = unpackModuleId(TableRowGroup3, obj9);
  items[5] = unpackModuleId(native.Spacer, { size: 16 });
  const TableRowGroup4 = TableRowGroup6.TableRowGroup;
  const TableRow4 = TableRow5.TableRow;
  if (0 !== mapped.length) {
    str5 = mapped.join("\n");
  }
  const obj10 = { title: "Recent Exposures", hasIcons: false, children: unpackModuleId(TableRow4, { label: str5 }) };
  items[6] = unpackModuleId(TableRowGroup4, obj10);
  return closure_12(View, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let flag;
  let id;
  let items;
  let obj10;
  let obj12;
  let obj14;
  let obj4;
  let obj8;
  let override;
  let str;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp21;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = obj8(576);
  const cResult = obj.c(55);
  ({ id, override } = arg0);
  const tmp3 = closure_13();
  if (cResult[0] === id) {
    if (cResult[1] === override) {
      if (cResult[2] === tmp3) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
        str = cResult[5];
        tmp6 = cResult[6];
        tmp7 = cResult[7];
        tmp8 = cResult[8];
        flag = cResult[9];
        tmp9 = cResult[10];
        tmp10 = cResult[11];
        tmp11 = cResult[12];
        tmp12 = cResult[13];
        tmp13 = cResult[14];
        tmp14 = cResult[15];
        tmp15 = cResult[16];
      }
      if (cResult[38] === tmp4) {
        if (cResult[39] === str) {
          if (cResult[40] === flag) {
            let tmp72;
            if (cResult[41] === tmp9) {
              tmp72 = cResult[42];
            }
            if (cResult[43] === tmp5) {
              if (cResult[44] === tmp6) {
                if (cResult[45] === tmp7) {
                  if (cResult[46] === tmp8) {
                    if (cResult[47] === tmp72) {
                      if (cResult[48] === tmp10) {
                        if (cResult[49] === tmp11) {
                          if (cResult[50] === tmp12) {
                            if (cResult[51] === tmp13) {
                              if (cResult[52] === tmp14) {
                                let tmp75;
                                if (cResult[53] === tmp15) {
                                  tmp75 = cResult[54];
                                }
                                return tmp75;
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
            const obj5 = { style: tmp10, children: items };
            items = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp6, tmp7, tmp8, tmp72];
            const tmp77 = closure_12(tmp5, obj5);
            cResult[43] = tmp5;
            cResult[44] = tmp6;
            cResult[45] = tmp7;
            cResult[46] = tmp8;
            cResult[47] = tmp72;
            cResult[48] = tmp10;
            cResult[49] = tmp11;
            cResult[50] = tmp12;
            cResult[51] = tmp13;
            cResult[52] = tmp14;
            cResult[53] = tmp15;
            cResult[54] = tmp77;
            tmp75 = tmp77;
          }
        }
      }
      const obj6 = { title: str, hasIcons: flag, children: tmp9 };
      const tmp74 = closure_11(tmp4, obj6);
      cResult[38] = tmp4;
      cResult[39] = str;
      cResult[40] = flag;
      cResult[41] = tmp9;
      cResult[42] = tmp74;
      tmp72 = tmp74;
    }
  }
  const loadedGuildExperiment = ExperimentStore.getLoadedGuildExperiment(id);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        return -_slicedToArray(arg0, 2)[1];
      }
    }
    cResult[17] = O;
  } else {
    class O {
      constructor(arg0) {
        return -_slicedToArray(arg0, 2)[1];
      }
    }
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        const tmp = _slicedToArray(arg0, 2);
        const first = tmp[0];
        const date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
    cResult[18] = P;
  } else {
    class P {
      constructor(arg0) {
        const tmp = _slicedToArray(arg0, 2);
        const first = tmp[0];
        const date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
  }
  const obj3 = _modDef12;
  const sortByResult = obj3.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), O);
  const mapped = sortByResult.map(P);
  if (cResult[19] !== id) {
    class P {
      constructor(arg0) {
        const tmp = _slicedToArray(arg0, 2);
        const first = tmp[0];
        const date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + first + ")";
      }
    }
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      cResult[22] = M;
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    const tmp20Result = _modDef12;
    obj8 = {};
    const items1 = [];
    const sortByResult1 = tmp20Result.sortBy(GuildStore.getGuildsArray(), M);
    const iter = sortByResult1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      let tmp31 = nextResult;
      let guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, nextResult.id);
      let NOT_ELIGIBLE;
      if (guildExperimentDescriptor != null) {
        class M {
          constructor(name) {
            const str = name.name;
            return str.toLowerCase();
          }
        }
      }
      if (NOT_ELIGIBLE == null) {
        class M {
          constructor(name) {
            const str = name.name;
            return str.toLowerCase();
          }
        }
        NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
      }
      let tmp35 = NOT_ELIGIBLE;
      if (!(NOT_ELIGIBLE in obj8)) {
        class M {
          constructor(name) {
            const str = name.name;
            return str.toLowerCase();
          }
        }
        obj8[tmp35] = 0;
      }
      obj8[tmp35] = obj8[tmp35] + 1;
      let _HermesInternal = HermesInternal;
      let arr = items1.push("" + tmp31.name + ": " + tmp35);
      continue;
    }
    const obj7 = _modDef12(obj8);
    const keys = obj7.keys();
    const _Number = Number;
    const mapped1 = keys.map(Number);
    const sorted = mapped1.sort();
    const mapped2 = sorted.map((item) => "" + obj8[item] + " guilds are in bucket " + item);
    const joined = mapped2.join(", ");
    cResult[19] = id;
    cResult[20] = items1;
    cResult[21] = joined;
    tmp21 = joined;
    obj4 = items1;
  } else {
    class M {
      constructor(name) {
        const str = name.name;
        return str.toLowerCase();
      }
    }
    tmp21 = cResult[21];
  }
  const debugContainer = tmp3.debugContainer;
  const combined = "Current Assignments: " + tmp21;
  if (null == loadedGuildExperiment) {
    class M {
      constructor(name) {
        const str = name.name;
        return str.toLowerCase();
      }
    }
  }
  if (cResult[23] === combined) {
    let tmp71;
    class M {
      constructor(name) {
        const str = name.name;
        return str.toLowerCase();
      }
    }
    const _Symbol = Symbol;
    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      cResult[26] = closure_11(obj8(1188).Spacer, { size: 16 });
      const tmp49 = closure_11(obj8(1188).Spacer, { size: 16 });
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    const joined1 = obj4.join("\n");
    if (cResult[27] !== joined1) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      const obj9 = { title: "Guild Assignments", hasIcons: false, children: closure_11(obj8(6000).TableRow, obj10) };
      const TableRowGroup2 = obj8(6081).TableRowGroup;
      obj10 = { label: joined1 };
      cResult[27] = joined1;
      cResult[28] = closure_11(TableRowGroup2, obj9);
      const tmp53 = closure_11(TableRowGroup2, obj9);
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      cResult[29] = closure_11(obj8(1188).Spacer, { size: 16 });
      const tmp56 = closure_11(obj8(1188).Spacer, { size: 16 });
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    let str7 = "None";
    if (null != loadedGuildExperiment) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      str7 = JSON.stringify(loadedGuildExperiment, undefined, 2);
    }
    if (cResult[30] !== str7) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      const obj11 = { title: "Server Descriptor", hasIcons: false, children: closure_11(obj8(6000).TableRow, obj12) };
      const TableRowGroup3 = obj8(6081).TableRowGroup;
      obj12 = { label: str7 };
      cResult[30] = str7;
      cResult[31] = closure_11(TableRowGroup3, obj11);
      const tmp59 = closure_11(TableRowGroup3, obj11);
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      cResult[32] = closure_11(obj8(1188).Spacer, { size: 16 });
      const tmp62 = closure_11(obj8(1188).Spacer, { size: 16 });
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    if (cResult[33] !== override) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      cResult[33] = override;
      cResult[34] = "None";
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    if (cResult[35] !== tmp63) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      const obj13 = { title: "Override Descriptor", hasIcons: false, children: closure_11(obj8(6000).TableRow, obj14) };
      const TableRowGroup4 = obj8(6081).TableRowGroup;
      obj14 = { label: tmp63 };
      cResult[35] = tmp63;
      cResult[36] = closure_11(TableRowGroup4, obj13);
      const tmp66 = closure_11(TableRowGroup4, obj13);
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      cResult[37] = closure_11(obj8(1188).Spacer, { size: 16 });
      const tmp69 = closure_11(obj8(1188).Spacer, { size: 16 });
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    const TableRowGroup5 = obj8(6081).TableRowGroup;
    const tmp70 = obj8;
    if (0 === mapped.length) {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
      tmp71 = closure_11(tmp70(6000).TableRow, { label: "none" });
    } else {
      class M {
        constructor(name) {
          const str = name.name;
          return str.toLowerCase();
        }
      }
    }
    cResult[0] = id;
    cResult[1] = override;
    cResult[2] = tmp3;
    cResult[3] = TableRowGroup5;
    cResult[4] = View;
    cResult[5] = "Recent Exposures";
    cResult[6] = tmp60;
    cResult[7] = tmp64;
    cResult[8] = tmp67;
    cResult[9] = false;
    cResult[10] = tmp71;
    cResult[11] = debugContainer;
    cResult[12] = tmp45;
    cResult[13] = tmp47;
    cResult[14] = tmp51;
    cResult[15] = tmp54;
    cResult[16] = tmp57;
    tmp9 = tmp71;
    tmp15 = tmp57;
    tmp14 = tmp54;
    tmp13 = tmp51;
    tmp12 = tmp47;
    tmp11 = tmp45;
    tmp10 = debugContainer;
    flag = false;
    tmp8 = tmp67;
    tmp7 = tmp64;
    tmp6 = tmp60;
    str = "Recent Exposures";
    tmp5 = View;
    tmp4 = TableRowGroup5;
  }
  const obj15 = { title: "Overview", hasIcons: false, children: closure_11(obj8(6000).TableRow, { label: combined, subLabel: null }) };
  const TableRowGroup = obj8(6081).TableRowGroup;
  cResult[23] = combined;
  cResult[24] = null;
  cResult[25] = closure_11(TableRowGroup, obj15);
  const tmp46 = closure_11(TableRowGroup, obj15);
}) : ((arg0) => {
  let TableRow2;
  let id;
  let items1;
  let mapped3;
  let obj9;
  let override;
  let str;
  ({ id, override } = arg0);
  const tmp = closure_13();
  const loadedGuildExperiment = ExperimentStore.getLoadedGuildExperiment(id);
  let obj = _modDef12;
  const sortByResult = obj.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), (arg0) => {
    let tmp;
    [, tmp] = arg0;
    return -tmp;
  });
  const mapped = sortByResult.map((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    const date = new Date(tmp2);
    return "" + date.toLocaleString() + " (" + tmp + ")";
  });
  const obj3 = {};
  const items = [];
  const obj2 = _modDef12;
  const sortByResult1 = obj2.sortBy(GuildStore.getGuildsArray(), (name) => {
    const str = name.name;
    return str.toLowerCase();
  });
  const iter = sortByResult1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let guildExperimentDescriptor = ExperimentStore.getGuildExperimentDescriptor(id, nextResult.id);
    let bucket;
    if (guildExperimentDescriptor != null) {
      bucket = guildExperimentDescriptor.bucket;
    }
    if (bucket == null) {
      bucket = constants.NOT_ELIGIBLE;
    }
    let tmp10 = bucket;
    if (!(bucket in obj3)) {
      obj3[tmp10] = 0;
    }
    obj3[tmp10] = obj3[tmp10] + 1;
    let _HermesInternal = HermesInternal;
    let arr = items.push("" + tmp5.name + ": " + tmp10);
    continue;
  }
  const obj4 = _modDef12(obj3);
  const keys = obj4.keys();
  const mapped1 = keys.map(Number);
  const sorted = mapped1.sort();
  const mapped2 = sorted.map((item) => "" + obj3[item] + " guilds are in bucket " + item);
  const obj5 = { style: tmp.debugContainer, children: items1 };
  const joined = mapped2.join(", ");
  const TableRowGroup = obj3(6081).TableRowGroup;
  const obj6 = { label: "Current Assignments: " + joined, subLabel: str };
  const TableRow = obj3(6000).TableRow;
  str = null;
  if (null == loadedGuildExperiment) {
    str = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
  }
  items1 = [, , , , , , , , ];
  const obj7 = { title: "Overview", hasIcons: false, children: closure_11(TableRow, obj6) };
  items1[0] = closure_11(TableRowGroup, obj7);
  items1[1] = closure_11(obj3(1188).Spacer, { size: 16 });
  const obj8 = { title: "Guild Assignments", hasIcons: false, children: closure_11(TableRow2, obj9) };
  const TableRowGroup2 = tmp20(6081).TableRowGroup;
  obj9 = { label: items.join("\n") };
  TableRow2 = tmp20(6000).TableRow;
  items1[2] = closure_11(TableRowGroup2, obj8);
  items1[3] = closure_11(obj3(1188).Spacer, { size: 16 });
  const TableRowGroup3 = tmp20(6081).TableRowGroup;
  let str2 = "None";
  let str3 = "None";
  const TableRow3 = tmp20(6000).TableRow;
  if (null != loadedGuildExperiment) {
    const _JSON = JSON;
    str3 = JSON.stringify(loadedGuildExperiment, undefined, 2);
  }
  const obj10 = { title: "Server Descriptor", hasIcons: false, children: closure_11(TableRow3, { label: str3 }) };
  items1[4] = closure_11(TableRowGroup3, obj10);
  items1[5] = closure_11(obj3(1188).Spacer, { size: 16 });
  const TableRowGroup4 = tmp20(6081).TableRowGroup;
  const TableRow4 = tmp20(6000).TableRow;
  if (null != override) {
    const _JSON2 = JSON;
    str2 = JSON.stringify(override, undefined, 2);
  }
  const obj11 = { title: "Override Descriptor", hasIcons: false, children: closure_11(TableRow4, { label: str2 }) };
  items1[6] = closure_11(TableRowGroup4, obj11);
  items1[7] = closure_11(obj3(1188).Spacer, { size: 16 });
  const TableRowGroup5 = tmp20(6081).TableRowGroup;
  if (0 === mapped.length) {
    mapped3 = closure_11(tmp20(6000).TableRow, { label: "none" });
  } else {
    mapped3 = mapped.map((label) => {
      const obj = { label, labelLineClamp: 1 };
      return closure_1_11(obj3(dependencyMap[26]).TableRow, obj, label);
    });
  }
  items1[8] = closure_11(TableRowGroup5, { title: "Recent Exposures", hasIcons: false, children: mapped3 });
  return closure_12(View, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let experiment;
  let id;
  let obj8;
  let onCopyLink;
  let options;
  let override;
  let tmp5;
  let obj = onCopyLink(576);
  const cResult = obj.c(25);
  ({ experiment, override, id, options, onCopyLink } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== id) {
    const tmpResult = onCopyLink(7545);
    const uRLForExperiment = tmpResult.getURLForExperiment(id);
    cResult[0] = id;
    cResult[1] = uRLForExperiment;
    tmp5 = uRLForExperiment;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  if (cResult[2] === tmp5) {
    let tmp7;
    if (cResult[3] === onCopyLink) {
      tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
      cResult[5] = obj2;
    }
    if (cResult[6] !== options) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0, arg1) {
            let isDestructive;
            let label;
            let onPress;
            ({ label, isDestructive, onPress } = arg0);
            let variant = "default";
            const TableRow = onCopyLink(dependencyMap[26]).TableRow;
            if (isDestructive) {
              variant = "danger";
            }
            return closure_1_11(TableRow, { variant, label, onPress }, arg1);
          }
        }
        cResult[8] = T;
      } else {
        class T {
          constructor(arg0, arg1) {
            let isDestructive;
            let label;
            let onPress;
            ({ label, isDestructive, onPress } = arg0);
            let variant = "default";
            const TableRow = onCopyLink(dependencyMap[26]).TableRow;
            if (isDestructive) {
              variant = "danger";
            }
            return closure_1_11(TableRow, { variant, label, onPress }, arg1);
          }
        }
      }
      const mapped = options.map(T);
      cResult[6] = options;
      cResult[7] = mapped;
    } else {
      class T {
        constructor(arg0, arg1) {
          let isDestructive;
          let label;
          let onPress;
          ({ label, isDestructive, onPress } = arg0);
          let variant = "default";
          const TableRow = onCopyLink(dependencyMap[26]).TableRow;
          if (isDestructive) {
            variant = "danger";
          }
          return closure_1_11(TableRow, { variant, label, onPress }, arg1);
        }
      }
    }
    if (cResult[9] !== tmp11) {
      class T {
        constructor(arg0, arg1) {
          let isDestructive;
          let label;
          let onPress;
          ({ label, isDestructive, onPress } = arg0);
          let variant = "default";
          const TableRow = onCopyLink(dependencyMap[26]).TableRow;
          if (isDestructive) {
            variant = "danger";
          }
          return closure_1_11(TableRow, { variant, label, onPress }, arg1);
        }
      }
      const obj3 = { title: "Experiment Assignments", hasIcons: false, children: tmp11 };
      cResult[9] = tmp11;
      cResult[10] = closure_11(onCopyLink(6081).TableRowGroup, obj3);
      const tmp15 = closure_11(onCopyLink(6081).TableRowGroup, obj3);
    } else {
      class T {
        constructor(arg0, arg1) {
          let isDestructive;
          let label;
          let onPress;
          ({ label, isDestructive, onPress } = arg0);
          let variant = "default";
          const TableRow = onCopyLink(dependencyMap[26]).TableRow;
          if (isDestructive) {
            variant = "danger";
          }
          return closure_1_11(TableRow, { variant, label, onPress }, arg1);
        }
      }
    }
    if (cResult[11] === tmp5) {
      class T {
        constructor(arg0, arg1) {
          let isDestructive;
          let label;
          let onPress;
          ({ label, isDestructive, onPress } = arg0);
          let variant = "default";
          const TableRow = onCopyLink(dependencyMap[26]).TableRow;
          if (isDestructive) {
            variant = "danger";
          }
          return closure_1_11(TableRow, { variant, label, onPress }, arg1);
        }
      }
      if (cResult[14] === tmp4.copyExperimentLink) {
        let tmp25;
        class T {
          constructor(arg0, arg1) {
            let isDestructive;
            let label;
            let onPress;
            ({ label, isDestructive, onPress } = arg0);
            let variant = "default";
            const TableRow = onCopyLink(dependencyMap[26]).TableRow;
            if (isDestructive) {
              variant = "danger";
            }
            return closure_1_11(TableRow, { variant, label, onPress }, arg1);
          }
        }
        if (cResult[17] === experiment) {
          class T {
            constructor(arg0, arg1) {
              let isDestructive;
              let label;
              let onPress;
              ({ label, isDestructive, onPress } = arg0);
              let variant = "default";
              const TableRow = onCopyLink(dependencyMap[26]).TableRow;
              if (isDestructive) {
                variant = "danger";
              }
              return closure_1_11(TableRow, { variant, label, onPress }, arg1);
            }
          }
        }
        if ("guild" === experiment.kind) {
          class T {
            constructor(arg0, arg1) {
              let isDestructive;
              let label;
              let onPress;
              ({ label, isDestructive, onPress } = arg0);
              let variant = "default";
              const TableRow = onCopyLink(dependencyMap[26]).TableRow;
              if (isDestructive) {
                variant = "danger";
              }
              return closure_1_11(TableRow, { variant, label, onPress }, arg1);
            }
          }
          const obj4 = { id, override };
          tmp25 = closure_11(closure_16, obj4);
        } else {
          class T {
            constructor(arg0, arg1) {
              let isDestructive;
              let label;
              let onPress;
              ({ label, isDestructive, onPress } = arg0);
              let variant = "default";
              const TableRow = onCopyLink(dependencyMap[26]).TableRow;
              if (isDestructive) {
                variant = "danger";
              }
              return closure_1_11(TableRow, { variant, label, onPress }, arg1);
            }
          }
          const obj5 = { id, override, experiment };
          tmp25 = closure_11(closure_15, obj5);
        }
        cResult[17] = experiment;
        cResult[18] = id;
        cResult[19] = override;
        cResult[20] = tmp25;
      }
      const obj6 = { style: tmp4.copyExperimentLink, children: tmp16 };
      cResult[14] = tmp4.copyExperimentLink;
      cResult[15] = tmp16;
      cResult[16] = closure_11(View, obj6);
      const tmp22 = closure_11(View, obj6);
    }
    const obj7 = { title: "Share", hasIcons: false, children: closure_11(onCopyLink(6000).TableRow, obj8) };
    const TableRowGroup = onCopyLink(6081).TableRowGroup;
    obj8 = { label: "Copy Link", subLabel: tmp5, onPress: tmp7 };
    cResult[11] = tmp5;
    cResult[12] = tmp7;
    cResult[13] = closure_11(TableRowGroup, obj7);
    const tmp18 = closure_11(TableRowGroup, obj7);
  }
  const fn = function x() {
    let obj = ClipboardUtils;
    obj.copy(closure_1, () => {
      const obj = closure_1(dependencyMap[32]);
      const obj2 = { key: "experiment-link-copied", content: "Copied experiment link", IconComponent: onCopyLink(dependencyMap[33]).CircleCheckIcon, iconColor: "status-positive" };
      obj.open(obj2);
      if (closure_1_0 != null) {
        closure_1_0();
      }
    });
  };
  cResult[2] = tmp5;
  cResult[3] = onCopyLink;
  cResult[4] = fn;
  tmp7 = fn;
}) : ((arg0) => {
  let TableRowGroup2;
  let experiment;
  let id;
  let items1;
  let obj3;
  let obj6;
  let onCopyLink;
  let options;
  let override;
  let tmp6Result;
  ({ experiment, override, id, options, onCopyLink } = arg0);
  const tmp = closure_13();
  let obj = onCopyLink(7545);
  const uRLForExperiment = obj.getURLForExperiment(id);
  const items = [uRLForExperiment, onCopyLink];
  let obj2 = { style: obj3, children: items1 };
  obj3 = { paddingHorizontal: uRLForExperiment(587).space.PX_12 };
  const callback = react.useCallback(() => {
    let obj = ClipboardUtils;
    obj.copy(uRLForExperiment, () => {
      const obj = uRLForExperiment(dependencyMap[32]);
      const obj2 = { key: "experiment-link-copied", content: "Copied experiment link", IconComponent: onCopyLink(dependencyMap[33]).CircleCheckIcon, iconColor: "status-positive" };
      obj.open(obj2);
      if (closure_1_0 != null) {
        closure_1_0();
      }
    });
  }, items);
  const obj4 = {
    title: "Experiment Assignments",
    hasIcons: false,
    children: options.map((item, index) => {
      let isDestructive;
      let label;
      let onPress;
      ({ label, isDestructive, onPress } = item);
      let variant = "default";
      const TableRow = onCopyLink(dependencyMap[26]).TableRow;
      if (isDestructive) {
        variant = "danger";
      }
      return closure_1_11(TableRow, { variant, label, onPress }, index);
    })
  };
  const TableRowGroup = onCopyLink(6081).TableRowGroup;
  items1 = [closure_11(TableRowGroup, obj4), , ];
  const obj5 = { style: tmp.copyExperimentLink, children: closure_11(TableRowGroup2, obj6) };
  obj6 = { title: "Share", hasIcons: false, children: closure_11(onCopyLink(6000).TableRow, { label: "Copy Link", subLabel: uRLForExperiment, onPress: callback }) };
  TableRowGroup2 = onCopyLink(6081).TableRowGroup;
  items1[1] = closure_11(View, obj5);
  if ("guild" === experiment.kind) {
    const obj7 = { id, override };
    tmp6Result = closure_11(closure_16, obj7);
  } else {
    const obj8 = { id, override, experiment };
    tmp6Result = closure_11(closure_15, obj8);
  }
  items1[2] = tmp6Result;
  return closure_12(View, obj2);
});
let closure_17 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let experiment;
  let id;
  let onCopyLink;
  let options;
  let override;
  const obj = react2;
  const cResult = obj.c(12);
  ({ id, experiment, override, options, onCopyLink } = arg0);
  if (cResult[0] === experiment.title) {
    let tmp4;
    if (cResult[1] === id) {
      tmp4 = cResult[2];
    }
    if (cResult[3] === experiment) {
      if (cResult[4] === id) {
        if (cResult[5] === onCopyLink) {
          if (cResult[6] === options) {
            let tmp6;
            if (cResult[7] === override) {
              tmp6 = cResult[8];
            }
            if (cResult[9] === tmp4) {
              let tmp10;
              if (cResult[10] === tmp6) {
                tmp10 = cResult[11];
              }
              return tmp10;
            }
            const obj2 = { header: tmp4, children: tmp6 };
            const tmp12 = unpackModuleId(Sheet_BottomSheet.BottomSheet, obj2);
            cResult[9] = tmp4;
            cResult[10] = tmp6;
            cResult[11] = tmp12;
            tmp10 = tmp12;
          }
        }
      }
    }
    const obj3 = { experiment, override, id, options, onCopyLink };
    const tmp9 = unpackModuleId(closure_17, obj3);
    cResult[3] = experiment;
    cResult[4] = id;
    cResult[5] = onCopyLink;
    cResult[6] = options;
    cResult[7] = override;
    cResult[8] = tmp9;
    tmp6 = tmp9;
  }
  const obj4 = { title: experiment.title, subtitle: id };
  const tmp5 = unpackModuleId(BottomSheetTitleHeader.BottomSheetTitleHeader, obj4);
  cResult[0] = experiment.title;
  cResult[1] = id;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let experiment;
  let id;
  let obj2;
  let onCopyLink;
  let options;
  let override;
  ({ id, experiment } = arg0);
  ({ override, options, onCopyLink } = arg0);
  const obj = { header: unpackModuleId(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), children: unpackModuleId(closure_17, { experiment, override, id, options, onCopyLink }) };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: experiment.title, subtitle: id };
  return unpackModuleId(BottomSheet, obj);
});
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx");

export default memoResult;
export const ExperimentDetails = tmp7;