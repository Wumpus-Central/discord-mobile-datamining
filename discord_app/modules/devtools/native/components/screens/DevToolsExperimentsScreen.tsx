// === Module 11366: DevToolsExperimentsScreen ===

// Module 11366 (DevToolsExperimentsScreen)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import FingerprintUtils from "FingerprintUtils" /* 1278 */;
import ExperimentManager from "ExperimentManager" /* 5021 */;
import TableRow2 from "TableRow" /* 6179 */;
import TableRowGroup2 from "TableRowGroup" /* 6264 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6838 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import ExperimentDevToolsUtils from "ExperimentDevToolsUtils" /* 8143 */;
import useExperimentAssignments from "useExperimentAssignments" /* 11364 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ExperimentStore from "ExperimentStore" /* 5016 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2087 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ExperimentConstants = fn(5017);
({ ExperimentBuckets: closure_9, ExperimentTypes: c10 } = ExperimentConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, listContainer: null, searchBar: null, debugContainer: null, copyExperimentLink: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.listContainer = { paddingHorizontal: nativeDefault.space.PX_12 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.searchBar = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
let obj5 = { paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
obj.debugContainer = { marginTop: nativeDefault.space.PX_16 };
let obj6 = { marginTop: nativeDefault.space.PX_16 };
obj.copyExperimentLink = { marginTop: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
fn(558);
let obj7 = { marginTop: nativeDefault.space.PX_16 };
let ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ExperimentGroup(id) {
  const cResult = variantId(experiment[11]).c(18);
  id = id.id;
  variantId = id;
  const override = id.override;
  experiment = id.experiment;
  ({ start, end } = id);
  if (cResult[0] !== experiment) {
    const experimentVariantsForDevTools = tmp(tmp2[22]).getExperimentVariantsForDevTools(experiment);
    cResult[0] = experiment;
    cResult[1] = experimentVariantsForDevTools;
    let arr = experimentVariantsForDevTools;
    const tmpResult = tmp(tmp2[22]);
  } else {
    arr = cResult[1];
  }
  if (cResult[2] === experiment) {
    if (cResult[3] === id) {
      if (cResult[4] === override) {
        if (cResult[5] === arr) {
          let tmp5 = cResult[6];
        }
        variantId = undefined;
        if (override != null) {
          variantId = override.variantId;
        }
        if (cResult[7] === variantId) {
          if (cResult[8] === arr) {
            let str = cResult[9];
          }
          if (cResult[10] !== str) {
            const obj2 = { variant: "text-md/medium", color: "text-muted", children: str };
            const tmp13 = closure_11(tmp(tmp2[25]).Text, obj2);
            cResult[10] = str;
            cResult[11] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[11];
          }
          if (cResult[12] === end) {
            if (cResult[13] === experiment.title) {
              if (cResult[14] === tmp5) {
                if (cResult[15] === start) {
                  if (cResult[16] === tmp11) {
                    let tmp14 = cResult[17];
                  }
                  return tmp14;
                }
              }
            }
          }
          const obj3 = { height: "100%", start, end, label: experiment.title, labelLineClamp: 1, onPress: tmp5, trailing: tmp11 };
          const tmp16 = closure_11(tmp(tmp2[26]).TableRow, obj3);
          cResult[12] = end;
          cResult[13] = experiment.title;
          cResult[14] = tmp5;
          cResult[15] = start;
          cResult[16] = tmp11;
          cResult[17] = tmp16;
          tmp14 = tmp16;
        }
        if (null == variantId) {
          cResult[7] = variantId;
          cResult[8] = arr;
          cResult[9] = "N/A";
          str = "N/A";
        } else {
          const found = arr.find((id) => id.id === variantId);
          if (null != found) {
            let label = found.label;
          } else {
            const _HermesInternal = HermesInternal;
            label = "Unknown (" + variantId + ")";
          }
        }
      }
    }
  }
  const fn = function b() {
    const map = new Map();
    const item = arr.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const item1 = map.forEach((label) => {
      items.push({
        label: label.label,
        onPress() {
          variantId(experiment[23]).overrideBucket(closure_2_2.system, map, label.id);
          const obj = variantId(experiment[23]);
          override(experiment[24]).hideActionSheet("UserSettingsExperimentBucket");
        }
      });
    });
    arr = items.push({
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        variantId(experiment[23]).overrideBucket(closure_1_2.system, map, null);
        const obj = variantId(experiment[23]);
        override(experiment[24]).hideActionSheet("UserSettingsExperimentBucket");
      }
    });
    let obj = {
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        variantId(experiment[23]).overrideBucket(closure_1_2.system, map, null);
        const obj = variantId(experiment[23]);
        override(experiment[24]).hideActionSheet("UserSettingsExperimentBucket");
      }
    };
    override(experiment[24]).openLazy(Promise.resolve({ default: closure_1_18 }), "UserSettingsExperimentBucket", {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink() {
        return items(experiment[24]).hideActionSheet("UserSettingsExperimentBucket");
      }
    });
  };
  cResult[2] = experiment;
  cResult[3] = id;
  cResult[4] = override;
  cResult[5] = arr;
  cResult[6] = fn;
  tmp5 = fn;
  let obj = variantId(experiment[11]);
}) : (function ExperimentGroup(id) {
  id = id.id;
  const override = id.override;
  const experiment = id.experiment;
  let items = [experiment];
  ({ start, end } = id);
  const memo = noop.useMemo(() => ExperimentDevToolsUtils.getExperimentVariantsForDevTools(experiment), items);
  const items1 = [id, experiment, override, memo];
  let variantId;
  const callback = noop.useCallback(() => {
    const map = new Map();
    const item = memo.forEach((id) => {
      const result = map.set(id.id, id);
    });
    const items = [];
    const item1 = map.forEach((label) => {
      items.push({
        label: label.label,
        onPress() {
          variantId(experiment[23]).overrideBucket(closure_2_2.system, map, label.id);
          const obj = variantId(experiment[23]);
          override(experiment[24]).hideActionSheet("UserSettingsExperimentBucket");
        }
      });
    });
    items.push({
      label: "Clear Override",
      isDestructive: true,
      onPress() {
        variantId(experiment[23]).overrideBucket(closure_1_2.system, map, null);
        const obj = variantId(experiment[23]);
        override(experiment[24]).hideActionSheet("UserSettingsExperimentBucket");
      }
    });
    override(experiment[24]).openLazy(Promise.resolve({ default: closure_1_18 }), "UserSettingsExperimentBucket", {
      id: map,
      experiment,
      override: items,
      options: items,
      onCopyLink() {
        return items(experiment[24]).hideActionSheet("UserSettingsExperimentBucket");
      }
    });
  }, items1);
  if (override != null) {
    variantId = override.variantId;
  }
  if (null == variantId) {
    let obj = { height: "100%", start, end, label: experiment.title, labelLineClamp: 1, onPress: callback, trailing: null };
    const obj2 = { variant: "text-md/medium", color: "text-muted", children: "N/A" };
    obj.trailing = closure_11(variantId(experiment[25]).Text, obj2);
    return closure_11(variantId(experiment[26]).TableRow, obj);
  } else {
    const found = memo.find((id) => id.id === variantId);
    if (null != found) {
      let label = found.label;
    } else {
      const _HermesInternal = HermesInternal;
      label = "Unknown (" + variantId + ")";
    }
  }
}));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserExperimentDebugView(arg0) {
  const cResult = c.c(55);
  ({ id, override, experiment } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id1 = AuthenticationStore.getId();
    cResult[0] = id1;
    let first = id1;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const installationForTracking = AuthenticationStore.getInstallationForTracking();
    let maybeExtractIdResult = null;
    if (null != installationForTracking) {
      maybeExtractIdResult = FingerprintUtils.maybeExtractId(installationForTracking);
      const tmpResult = FingerprintUtils;
    }
    cResult[1] = maybeExtractIdResult;
    let tmp8 = maybeExtractIdResult;
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
  const experimentAssignment = useExperimentAssignments.useExperimentAssignment(experiment, tmp12);
  const tmpResult3 = useExperimentAssignments;
  const experimentServerAssignment = useExperimentAssignments.useExperimentServerAssignment(experiment, tmp12);
  if (cResult[2] === experimentAssignment) {
    if (cResult[3] === experiment.system) {
      if (cResult[4] === id) {
        if (cResult[5] === override) {
          if (cResult[6] === experimentServerAssignment) {
            if (cResult[7] === tmp4.debugContainer) {
              let tmp16 = cResult[8];
              let tmp17 = cResult[9];
              let tmp18 = cResult[10];
              let tmp19 = cResult[11];
              let tmp20 = cResult[12];
              let tmp21 = cResult[13];
              let tmp22 = cResult[14];
              let str = cResult[15];
              let flag = cResult[16];
              let tmp23 = cResult[17];
              let tmp24 = cResult[18];
              let tmp25 = cResult[19];
              let tmp26 = cResult[20];
            }
            if (cResult[37] === tmp16) {
              if (cResult[38] === tmp22) {
                let tmp47 = cResult[39];
              }
              if (cResult[40] === tmp17) {
                if (cResult[41] === tmp47) {
                  if (cResult[42] === str) {
                    if (cResult[43] === flag) {
                      let tmp50 = cResult[44];
                    }
                    if (cResult[45] === tmp18) {
                      if (cResult[46] === tmp19) {
                        if (cResult[47] === tmp20) {
                          if (cResult[48] === tmp21) {
                            if (cResult[49] === tmp50) {
                              if (cResult[50] === tmp23) {
                                if (cResult[51] === tmp24) {
                                  if (cResult[52] === tmp25) {
                                    if (cResult[53] === tmp26) {
                                      let tmp53 = cResult[54];
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
                    const obj2 = { style: tmp23, children: null };
                    const items = [tmp24, tmp25, tmp26, tmp19, tmp20, tmp21, tmp50];
                    obj2.children = items;
                    const tmp55 = __initData(tmp18, obj2);
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
              const tmp52 = closure_1_11(tmp17, obj3);
              cResult[40] = tmp17;
              cResult[41] = tmp47;
              cResult[42] = str;
              cResult[43] = flag;
              cResult[44] = tmp52;
              tmp50 = tmp52;
            }
            const obj4 = { label: tmp22 };
            const tmp49 = closure_1_11(tmp16, obj4);
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
    class H {
      constructor(arg0) {
        return -closure_1_3(arg0, 2)[1];
      }
    }
    cResult[21] = H;
  } else {
    class H {
      constructor(arg0) {
        return -closure_1_3(arg0, 2)[1];
      }
    }
  }
  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
    cResult[22] = J;
  } else {
    class J {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
  }
  const tmpResult4 = useExperimentAssignments;
  const mapped = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id), H).map(J);
  if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
    class J {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
    let NOT_ELIGIBLE = experimentAssignment;
    if (experimentAssignment == null) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    const _HermesInternal = HermesInternal;
    let str2 = "Currently assigned to bucket " + NOT_ELIGIBLE;
  } else {
    class J {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
    str2 = "Currently unassigned";
    if (null != experimentAssignment) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      str2 = "Currently assigned to variant " + experimentAssignment;
    }
  }
  const debugContainer = tmp4.debugContainer;
  if (null == experimentServerAssignment) {
    class J {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
  }
  if (cResult[23] === str2) {
    class J {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
    const _Symbol = Symbol;
    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      const tmp34 = closure_1_11(native.Spacer, { size: 16 });
      cResult[26] = tmp34;
    } else {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
    }
    if (cResult[27] !== experimentServerAssignment) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      if (null != experimentServerAssignment) {
        class J {
          constructor(arg0) {
            tmp = closure_1_3(arg0, 2);
            date = new Date(tmp[1]);
            return "" + date.toLocaleString() + " (" + tmp[0] + ")";
          }
        }
        const json = JSON.stringify(experimentServerAssignment, undefined, 2);
      }
      cResult[27] = experimentServerAssignment;
      cResult[28] = json;
    } else {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
    }
    if (cResult[29] !== tmp35) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      const obj6 = { title: "Server Descriptor", hasIcons: false, children: null };
      const obj7 = { label: tmp35 };
      obj6.children = closure_1_11(TableRow2.TableRow, obj7);
      const tmp38 = closure_1_11(TableRowGroup2.TableRowGroup, obj6);
      cResult[29] = tmp35;
      cResult[30] = tmp38;
    } else {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      const tmp40 = closure_1_11(native.Spacer, { size: 16 });
      cResult[31] = tmp40;
    } else {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
    }
    if (cResult[32] !== override) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      if (null != override) {
        class J {
          constructor(arg0) {
            tmp = closure_1_3(arg0, 2);
            date = new Date(tmp[1]);
            return "" + date.toLocaleString() + " (" + tmp[0] + ")";
          }
        }
        const json1 = JSON.stringify(override.originalDescriptor, undefined, 2);
      }
      cResult[32] = override;
      cResult[33] = json1;
    } else {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
    }
    if (cResult[34] !== tmp41) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      const obj8 = { title: "Override Descriptor", hasIcons: false, children: null };
      const obj9 = { label: tmp41 };
      obj8.children = closure_1_11(TableRow2.TableRow, obj9);
      const tmp44 = closure_1_11(TableRowGroup2.TableRowGroup, obj8);
      cResult[34] = tmp41;
      cResult[35] = tmp44;
    } else {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
      const tmp46 = closure_1_11(native.Spacer, { size: 16 });
      cResult[36] = tmp46;
    } else {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
        }
      }
    }
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const TableRow = TableRow2.TableRow;
    let str5 = "None";
    if (0 !== mapped.length) {
      class J {
        constructor(arg0) {
          tmp = closure_1_3(arg0, 2);
          date = new Date(tmp[1]);
          return "" + date.toLocaleString() + " (" + tmp[0] + ")";
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
    cResult[9] = TableRowGroup;
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
    tmp17 = TableRowGroup;
    tmp16 = TableRow;
  }
  const sortByResult = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id), H);
  const tmp32 = closure_1_11(TableRowGroup2.TableRowGroup, { title: "Overview", hasIcons: false, children: closure_1_11(TableRow2.TableRow, { label: str2, subLabel: undefined }) });
  cResult[23] = str2;
  cResult[24] = undefined;
  cResult[25] = tmp32;
  const obj10 = { title: "Overview", hasIcons: false, children: closure_1_11(TableRow2.TableRow, { label: str2, subLabel: undefined }) };
}) : (function UserExperimentDebugView(id) {
  ({ override, experiment } = id);
  id = AuthenticationStore.getId();
  const installationForTracking = AuthenticationStore.getInstallationForTracking();
  let maybeExtractIdResult = null;
  if (null != installationForTracking) {
    maybeExtractIdResult = FingerprintUtils.maybeExtractId(installationForTracking);
  }
  let tmp7 = id;
  if ("installation" === experiment.kind) {
    tmp7 = id;
    if (null != maybeExtractIdResult) {
      tmp7 = maybeExtractIdResult;
    }
  }
  const tmp = closure_13();
  const experimentAssignment = useExperimentAssignments.useExperimentAssignment(experiment, tmp7);
  const experimentServerAssignment = useExperimentAssignments.useExperimentServerAssignment(experiment, tmp7);
  const mapped = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id.id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  }).map((item) => {
    [tmp, tmp2] = item;
    return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
  });
  if (experiment.system === ExperimentManager.ExperimentSystem.LEGACY) {
    let NOT_ELIGIBLE = experimentAssignment;
    if (experimentAssignment == null) {
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    const _HermesInternal2 = HermesInternal;
    let str = "Currently assigned to bucket " + NOT_ELIGIBLE;
  } else {
    str = "Currently unassigned";
    if (null != experimentAssignment) {
      const _HermesInternal = HermesInternal;
      str = "Currently assigned to variant " + experimentAssignment;
    }
  }
  const obj5 = { style: tmp.debugContainer, children: null };
  const obj6 = { label: str, subLabel: null };
  let str4;
  if (null == experimentServerAssignment) {
    str4 = "Warning: Server did not send any experiment config. You may need to check the \"Send to Client\" box in the admin UI.";
  }
  const sortByResult = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.USER, id.id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  obj6.subLabel = str4;
  const items = [closure_1_11(TableRowGroup2.TableRowGroup, { title: "Overview", hasIcons: false, children: closure_1_11(TableRow2.TableRow, obj6) }), closure_1_11(native.Spacer, { size: 16 }), , , , , ];
  let str5 = "None";
  let str6 = "None";
  if (null != experimentServerAssignment) {
    const _JSON = JSON;
    str6 = JSON.stringify(experimentServerAssignment, undefined, 2);
  }
  const obj7 = { title: "Overview", hasIcons: false, children: closure_1_11(TableRow2.TableRow, obj6) };
  items[2] = closure_1_11(TableRowGroup2.TableRowGroup, { title: "Server Descriptor", hasIcons: false, children: closure_1_11(TableRow2.TableRow, { label: str6 }) });
  items[3] = closure_1_11(native.Spacer, { size: 16 });
  let json = str5;
  if (null != override) {
    const _JSON2 = JSON;
    json = JSON.stringify(override.originalDescriptor, undefined, 2);
  }
  const obj8 = { title: "Server Descriptor", hasIcons: false, children: closure_1_11(TableRow2.TableRow, { label: str6 }) };
  items[4] = closure_1_11(TableRowGroup2.TableRowGroup, { title: "Override Descriptor", hasIcons: false, children: closure_1_11(TableRow2.TableRow, { label: json }) });
  items[5] = closure_1_11(native.Spacer, { size: 16 });
  if (0 !== mapped.length) {
    str5 = mapped.join("\n");
  }
  const obj9 = { title: "Override Descriptor", hasIcons: false, children: closure_1_11(TableRow2.TableRow, { label: json }) };
  items[6] = closure_1_11(TableRowGroup2.TableRowGroup, { title: "Recent Exposures", hasIcons: false, children: closure_1_11(TableRow2.TableRow, { label: str5 }) });
  obj5.children = items;
  return __initData(View, obj5);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildExperimentDebugView(arg0) {
  let tmp = dependencyMap;
  const cResult = require("c").c(55);
  ({ id, override } = arg0);
  let flag = closure_13();
  if (cResult[0] === id) {
    if (cResult[1] === override) {
      if (cResult[2] === flag) {
        if (cResult[38] === cResult[3]) {
          if (cResult[39] === tmp5) {
            if (cResult[40] === tmp9) {
              if (cResult[41] === tmp10) {
                let tmp71 = cResult[42];
              }
              if (cResult[43] === tmp4) {
                if (cResult[44] === tmp6) {
                  if (cResult[45] === tmp7) {
                    if (cResult[46] === tmp8) {
                      if (cResult[47] === tmp71) {
                        if (cResult[48] === tmp11) {
                          if (cResult[49] === tmp12) {
                            if (cResult[50] === tmp13) {
                              if (cResult[51] === tmp14) {
                                if (cResult[52] === tmp15) {
                                  if (cResult[53] === tmp16) {
                                    let tmp74 = cResult[54];
                                  }
                                  return tmp74;
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
              const obj5 = { style: tmp11, children: null };
              const items = [tmp12, tmp13, tmp14, tmp15, tmp16, tmp6, tmp7, tmp8, tmp71];
              obj5.children = items;
              const tmp76 = closure_12(tmp4, obj5);
              cResult[43] = tmp4;
              cResult[44] = tmp6;
              cResult[45] = tmp7;
              cResult[46] = tmp8;
              cResult[47] = tmp71;
              cResult[48] = tmp11;
              cResult[49] = tmp12;
              cResult[50] = tmp13;
              cResult[51] = tmp14;
              cResult[52] = tmp15;
              cResult[53] = tmp16;
              cResult[54] = tmp76;
              tmp74 = tmp76;
            }
          }
        }
        const obj6 = { title: cResult[5], hasIcons: cResult[9], children: cResult[10] };
        const tmp73 = closure_11(cResult[3], obj6);
        cResult[38] = cResult[3];
        cResult[39] = cResult[5];
        cResult[40] = cResult[9];
        cResult[41] = cResult[10];
        cResult[42] = tmp73;
        tmp71 = tmp73;
      }
    }
  }
  const loadedGuildExperiment = ExperimentStore.getLoadedGuildExperiment(id);
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        return -closure_1_3(arg0, 2)[1];
      }
    }
    cResult[17] = O;
  } else {
    class O {
      constructor(arg0) {
        return -closure_1_3(arg0, 2)[1];
      }
    }
  }
  if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
    cResult[18] = P;
  } else {
    class P {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
  }
  let items1 = importDefault;
  const obj = require("c");
  const mapped = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), O).map(P);
  if (cResult[19] !== id) {
    class P {
      constructor(arg0) {
        tmp = closure_1_3(arg0, 2);
        date = new Date(tmp[1]);
        return "" + date.toLocaleString() + " (" + tmp[0] + ")";
      }
    }
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          str = arg0.name;
          return str.toLowerCase();
        }
      }
      cResult[22] = F;
    } else {
      class F {
        constructor(arg0) {
          str = arg0.name;
          return str.toLowerCase();
        }
      }
    }
    const sortByResult1 = _modDef12.sortBy(GuildStore.getGuildsArray(), F);
    _require = {};
    items1 = [];
    sortByResult1[Symbol.iterator]();
    tmp = null;
    const items1Result = _modDef12;
  } else {
    class F {
      constructor(arg0) {
        str = arg0.name;
        return str.toLowerCase();
      }
    }
    let obj13 = tmp;
    while (true) {
      class F {
        constructor(arg0) {
          str = arg0.name;
          return str.toLowerCase();
        }
      }
      let debugContainer = flag.debugContainer;
      let _HermesInternal = HermesInternal;
      let str3 = "Current Assignments: ";
      let combined = "Current Assignments: " + tmp21;
      let tmp30 = null;
      if (null != loadedGuildExperiment) {
        class F {
          constructor(arg0) {
            str = arg0.name;
            return str.toLowerCase();
          }
        }
      } else {
        class F {
          constructor(arg0) {
            str = arg0.name;
            return str.toLowerCase();
          }
        }
        break;
      }
      if (cResult[23] === combined) {
        class F {
          constructor(arg0) {
            str = arg0.name;
            return str.toLowerCase();
          }
        }
        let _Symbol = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          let tmp37 = closure_11(require("native").Spacer, { size: 16 });
          cResult[26] = tmp37;
          let tmp35 = tmp37;
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        let str4 = "\n";
        let joined = obj4.join("\n");
        if (cResult[27] !== joined) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          let obj7 = { title: "Guild Assignments", hasIcons: false, children: null };
          let obj8 = { label: joined };
          obj7.children = closure_11(require("TableRow").TableRow, obj8);
          let tmp41 = closure_11(require("TableRowGroup").TableRowGroup, obj7);
          cResult[27] = joined;
          cResult[28] = tmp41;
          let tmp39 = tmp41;
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        let _Symbol2 = Symbol;
        if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          let tmp44 = closure_11(require("native").Spacer, { size: 16 });
          cResult[29] = tmp44;
          let tmp42 = tmp44;
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        let str5 = "None";
        let str6 = "None";
        if (null != loadedGuildExperiment) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          str6 = JSON.stringify(loadedGuildExperiment, undefined, 2);
        }
        if (cResult[30] !== str6) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          let obj9 = { title: "Server Descriptor", hasIcons: false, children: null };
          let obj10 = { label: str6 };
          obj9.children = closure_11(require("TableRow").TableRow, obj10);
          let tmp47 = closure_11(require("TableRowGroup").TableRowGroup, obj9);
          cResult[30] = str6;
          cResult[31] = tmp47;
          let tmp45 = tmp47;
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        let _Symbol3 = Symbol;
        if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          let tmp50 = closure_11(require("native").Spacer, { size: 16 });
          cResult[32] = tmp50;
          let tmp48 = tmp50;
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        if (cResult[33] !== override) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          cResult[33] = override;
          cResult[34] = str5;
          let tmp51 = str5;
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        if (cResult[35] !== tmp51) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          let obj11 = { title: "Override Descriptor", hasIcons: false, children: null };
          let obj12 = { label: tmp51 };
          obj11.children = closure_11(require("TableRow").TableRow, obj12);
          let tmp54 = closure_11(require("TableRowGroup").TableRowGroup, obj11);
          cResult[35] = tmp51;
          cResult[36] = tmp54;
          let tmp52 = tmp54;
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        let _Symbol4 = Symbol;
        if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          let tmp57 = closure_11(require("native").Spacer, { size: 16 });
          cResult[37] = tmp57;
          let tmp55 = tmp57;
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        let TableRow = _require;
        let TableRowGroup = require("TableRowGroup").TableRowGroup;
        let str7 = 0;
        if (0 === mapped.length) {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
          TableRow = TableRow(6179).TableRow;
          obj13 = { label: "none" };
          let tmp58 = closure_11(TableRow, obj13);
        } else {
          class F {
            constructor(arg0) {
              str = arg0.name;
              return str.toLowerCase();
            }
          }
        }
        cResult[str7] = id;
        cResult[1] = override;
        cResult[2] = flag;
        cResult[3] = TableRowGroup;
        cResult[4] = tmp27;
        str7 = "Recent Exposures";
        cResult[5] = "Recent Exposures";
        cResult[6] = tmp48;
        cResult[7] = tmp52;
        cResult[8] = tmp55;
        flag = false;
        cResult[9] = false;
        cResult[10] = tmp58;
        cResult[11] = debugContainer;
        cResult[12] = tmp31;
        cResult[13] = tmp35;
        cResult[14] = tmp39;
        cResult[15] = tmp42;
        override = 16;
        cResult[16] = tmp45;
        let flag2 = false;
        let str8 = "Recent Exposures";
      }
      let obj14 = { title: "Overview", hasIcons: false, children: null };
      let obj15 = { label: combined, subLabel: tmp30 };
      obj14.children = closure_11(require("TableRow").TableRow, obj15);
      let tmp34 = closure_11(require("TableRowGroup").TableRowGroup, obj14);
      cResult[23] = combined;
      cResult[24] = tmp30;
      cResult[25] = tmp34;
      tmp31 = tmp34;
    }
  }
  const sortByResult = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), O);
}) : (function GuildExperimentDebugView(arg0) {
  ({ id, override } = arg0);
  const loadedGuildExperiment = ExperimentStore.getLoadedGuildExperiment(id);
  const tmp = closure_13();
  const mapped = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  }).map((item) => {
    [tmp, tmp2] = item;
    return "" + new Date(tmp2).toLocaleString() + " (" + tmp + ")";
  });
  const sortByResult = _modDef12.sortBy(ExperimentStore.getRecentExposures(constants2.GUILD, id), (arg0) => {
    [, tmp] = arg0;
    return -tmp;
  });
  const obj3 = {};
  const items = [];
  const iter = _modDef12.sortBy(GuildStore.getGuildsArray(), (name) => name.name.toLowerCase())[Symbol.iterator]();
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
  const sortByResult1 = _modDef12.sortBy(GuildStore.getGuildsArray(), (name) => name.name.toLowerCase());
  const keys = _modDef12(obj3).keys();
  const mapped1 = keys.map(Number);
  const sorted = mapped1.sort();
  const mapped2 = sorted.map((item) => "" + obj3[item] + " guilds are in bucket " + item);
  const obj5 = { style: tmp.debugContainer, children: null };
  const joined = mapped2.join(", ");
  const obj6 = { label: "Current Assignments: " + joined, subLabel: null };
  let str = null;
  if (null == loadedGuildExperiment) {
    str = "Warning: Server did not send any experiment config. You may need to check the 'Send to Client' box in the admin UI.";
  }
  const obj4 = _modDef12(obj3);
  obj6.subLabel = str;
  const items1 = [closure_11(obj3(6264).TableRowGroup, { title: "Overview", hasIcons: false, children: closure_11(obj3(6179).TableRow, obj6) }), closure_11(obj3(1200).Spacer, { size: 16 }), , , , , , , ];
  const obj8 = { title: "Guild Assignments", hasIcons: false, children: null };
  const obj7 = { title: "Overview", hasIcons: false, children: closure_11(obj3(6179).TableRow, obj6) };
  obj8.children = closure_11(obj3(6179).TableRow, { label: items.join("\n") });
  items1[2] = closure_11(obj3(6264).TableRowGroup, obj8);
  items1[3] = closure_11(obj3(1200).Spacer, { size: 16 });
  let str2 = "None";
  let str3 = "None";
  if (null != loadedGuildExperiment) {
    const _JSON = JSON;
    str3 = JSON.stringify(loadedGuildExperiment, undefined, 2);
  }
  const obj9 = { label: items.join("\n") };
  items1[4] = closure_11(obj3(6264).TableRowGroup, { title: "Server Descriptor", hasIcons: false, children: closure_11(obj3(6179).TableRow, { label: str3 }) });
  items1[5] = closure_11(obj3(1200).Spacer, { size: 16 });
  if (null != override) {
    const _JSON2 = JSON;
    str2 = JSON.stringify(override, undefined, 2);
  }
  const obj10 = { title: "Server Descriptor", hasIcons: false, children: closure_11(obj3(6179).TableRow, { label: str3 }) };
  items1[6] = closure_11(obj3(6264).TableRowGroup, { title: "Override Descriptor", hasIcons: false, children: closure_11(obj3(6179).TableRow, { label: str2 }) });
  items1[7] = closure_11(obj3(1200).Spacer, { size: 16 });
  if (0 === mapped.length) {
    let mapped3 = closure_11(tmp20(6179).TableRow, { label: "none" });
  } else {
    mapped3 = mapped.map((label) => closure_1_11(obj3(dependencyMap[26]).TableRow, { label, labelLineClamp: 1 }, label));
  }
  items1[8] = closure_11(obj3(6264).TableRowGroup, { title: "Recent Exposures", hasIcons: false, children: mapped3 });
  obj5.children = items1;
  return closure_12(View, obj5);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExperimentDetails(arg0) {
  const cResult = onCopyLink(576).c(25);
  ({ experiment, override, id, options, onCopyLink } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] !== id) {
    const uRLForExperiment = onCopyLink(8141).getURLForExperiment(id);
    cResult[0] = id;
    cResult[1] = uRLForExperiment;
    let tmp5 = uRLForExperiment;
    const tmpResult = onCopyLink(8141);
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  if (cResult[2] === tmp5) {
    if (cResult[3] === onCopyLink) {
      let tmp7 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
      cResult[5] = obj2;
    }
    if (cResult[6] !== options) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(arg0, arg1) {
            ({ label, isDestructive, onPress } = arg0);
            tmp = closure_1_11;
            variant = "default";
            if (isDestructive) {
              variant = "danger";
            }
            return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
          }
        }
        cResult[8] = C;
      } else {
        class C {
          constructor(arg0, arg1) {
            ({ label, isDestructive, onPress } = arg0);
            tmp = closure_1_11;
            variant = "default";
            if (isDestructive) {
              variant = "danger";
            }
            return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
          }
        }
      }
      const mapped = options.map(C);
      cResult[6] = options;
      cResult[7] = mapped;
    } else {
      class C {
        constructor(arg0, arg1) {
          ({ label, isDestructive, onPress } = arg0);
          tmp = closure_1_11;
          variant = "default";
          if (isDestructive) {
            variant = "danger";
          }
          return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
        }
      }
      if (cResult[9] !== tmp11) {
        class C {
          constructor(arg0, arg1) {
            ({ label, isDestructive, onPress } = arg0);
            tmp = closure_1_11;
            variant = "default";
            if (isDestructive) {
              variant = "danger";
            }
            return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
          }
        }
        const obj3 = { title: "Experiment Assignments", hasIcons: false, children: tmp11 };
        const tmp16 = closure_11(onCopyLink(6264).TableRowGroup, obj3);
        cResult[9] = tmp11;
        cResult[10] = tmp16;
      } else {
        class C {
          constructor(arg0, arg1) {
            ({ label, isDestructive, onPress } = arg0);
            tmp = closure_1_11;
            variant = "default";
            if (isDestructive) {
              variant = "danger";
            }
            return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
          }
        }
      }
      if (cResult[11] === tmp5) {
        class C {
          constructor(arg0, arg1) {
            ({ label, isDestructive, onPress } = arg0);
            tmp = closure_1_11;
            variant = "default";
            if (isDestructive) {
              variant = "danger";
            }
            return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
          }
        }
        if (cResult[14] === tmp4.copyExperimentLink) {
          class C {
            constructor(arg0, arg1) {
              ({ label, isDestructive, onPress } = arg0);
              tmp = closure_1_11;
              variant = "default";
              if (isDestructive) {
                variant = "danger";
              }
              return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
            }
          }
          if (cResult[17] === experiment) {
            class C {
              constructor(arg0, arg1) {
                ({ label, isDestructive, onPress } = arg0);
                tmp = closure_1_11;
                variant = "default";
                if (isDestructive) {
                  variant = "danger";
                }
                return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
              }
            }
          }
          if ("guild" === experiment.kind) {
            class C {
              constructor(arg0, arg1) {
                ({ label, isDestructive, onPress } = arg0);
                tmp = closure_1_11;
                variant = "default";
                if (isDestructive) {
                  variant = "danger";
                }
                return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
              }
            }
            const obj4 = { id, override };
            let tmp25 = closure_11(closure_16, obj4);
          } else {
            class C {
              constructor(arg0, arg1) {
                ({ label, isDestructive, onPress } = arg0);
                tmp = closure_1_11;
                variant = "default";
                if (isDestructive) {
                  variant = "danger";
                }
                return tmp(onCopyLink(closure_1_2[26]).TableRow, { variant, label, onPress }, arg1);
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
        const obj6 = { style: tmp4.copyExperimentLink, children: tmp17 };
        const tmp23 = closure_11(View, obj6);
        cResult[14] = tmp4.copyExperimentLink;
        cResult[15] = tmp17;
        cResult[16] = tmp23;
      }
      const obj7 = { title: "Share", hasIcons: false, children: null };
      const obj8 = { label: "Copy Link", subLabel: tmp5, onPress: tmp7 };
      obj7.children = closure_11(onCopyLink(6179).TableRow, obj8);
      const tmp19 = closure_11(onCopyLink(6264).TableRowGroup, obj7);
      cResult[11] = tmp5;
      cResult[12] = tmp7;
      cResult[13] = tmp19;
    }
  }
  class S {
    constructor() {
      obj = closure_0(closure_2[31]);
      copyResult = obj.copy(closure_1, () => { ... });
      return;
    }
  }
  cResult[2] = tmp5;
  cResult[3] = onCopyLink;
  cResult[4] = S;
  tmp7 = S;
  const obj = onCopyLink(576);
}) : (function ExperimentDetails(arg0) {
  ({ experiment, override, id, options, onCopyLink } = arg0);
  const tmp = closure_13();
  const uRLForExperiment = onCopyLink(8141).getURLForExperiment(id);
  const items = [uRLForExperiment, onCopyLink];
  const obj2 = { style: null, children: null };
  const obj3 = { paddingHorizontal: null };
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(uRLForExperiment, () => {
      uRLForExperiment(4809).open("experiment-link-copied", { text: "Copied experiment link", variant: "success" });
      if (onCopyLink != null) {
        onCopyLink();
      }
    });
  }, items);
  obj3.paddingHorizontal = uRLForExperiment(587).space.PX_12;
  obj2.style = obj3;
  const obj = onCopyLink(8141);
  const items1 = [
    closure_11(onCopyLink(6264).TableRowGroup, {
      title: "Experiment Assignments",
      hasIcons: false,
      children: options.map((item, index) => {
        ({ label, isDestructive, onPress } = item);
        let variant = "default";
        if (isDestructive) {
          variant = "danger";
        }
        return closure_1_11(onCopyLink(6179).TableRow, { variant, label, onPress }, index);
      })
    }),
  ,

  ];
  const obj5 = { style: tmp.copyExperimentLink, children: null };
  const obj4 = {
    title: "Experiment Assignments",
    hasIcons: false,
    children: options.map((item, index) => {
      ({ label, isDestructive, onPress } = item);
      let variant = "default";
      if (isDestructive) {
        variant = "danger";
      }
      return closure_1_11(onCopyLink(6179).TableRow, { variant, label, onPress }, index);
    })
  };
  obj5.children = closure_11(onCopyLink(6264).TableRowGroup, { title: "Share", hasIcons: false, children: closure_11(onCopyLink(6179).TableRow, { label: "Copy Link", subLabel: uRLForExperiment, onPress: callback }) });
  items1[1] = closure_11(View, obj5);
  if ("guild" === experiment.kind) {
    const obj7 = { id, override };
    let tmp6Result = closure_11(closure_16, obj7);
  } else {
    const obj8 = { id, override, experiment };
    tmp6Result = closure_11(closure_15, obj8);
  }
  items1[2] = tmp6Result;
  obj2.children = items1;
  return closure_12(View, obj2);
});
let closure_17 = tmp5;
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExperimentActionSheet(arg0) {
  const cResult = c.c(12);
  ({ id, experiment, override, options, onCopyLink } = arg0);
  if (cResult[0] === experiment.title) {
    if (cResult[1] === id) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === experiment) {
      if (cResult[4] === id) {
        if (cResult[5] === onCopyLink) {
          if (cResult[6] === options) {
            if (cResult[7] === override) {
              let tmp6 = cResult[8];
            }
            if (cResult[9] === tmp4) {
              if (cResult[10] === tmp6) {
                let tmp10 = cResult[11];
              }
              return tmp10;
            }
            const obj2 = { header: tmp4, children: tmp6 };
            const tmp12 = closure_1_11(Sheet_BottomSheet.BottomSheet, obj2);
            cResult[9] = tmp4;
            cResult[10] = tmp6;
            cResult[11] = tmp12;
            tmp10 = tmp12;
          }
        }
      }
    }
    const obj3 = { experiment, override, id, options, onCopyLink };
    const tmp9 = closure_1_11(closure_17, obj3);
    cResult[3] = experiment;
    cResult[4] = id;
    cResult[5] = onCopyLink;
    cResult[6] = options;
    cResult[7] = override;
    cResult[8] = tmp9;
    tmp6 = tmp9;
  }
  const tmp5 = closure_1_11(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: experiment.title, subtitle: id });
  cResult[0] = experiment.title;
  cResult[1] = id;
  cResult[2] = tmp5;
  tmp4 = tmp5;
  const obj4 = { title: experiment.title, subtitle: id };
}) : (function ExperimentActionSheet(arg0) {
  ({ id, experiment } = arg0);
  ({ override, options, onCopyLink } = arg0);
  const obj = { header: closure_1_11(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: experiment.title, subtitle: id }), children: closure_1_11(closure_17, { experiment, override, id, options, onCopyLink }) };
  return closure_1_11(Sheet_BottomSheet.BottomSheet, obj);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsExperimentsScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsExperimentsScreen() {
  const cResult = require("c").c(30);
  const tmp4 = closure_13();
  const obj = require("c");
  [tmp6, tmp7] = noop.useState("");
  const tmp5 = _slicedToArray(noop.useState(""), 2);
  const legacyExperiments = require("useLegacyExperiments").useLegacyExperiments();
  ({ experiments, overridesInfo } = legacyExperiments);
  const obj2 = require("useLegacyExperiments");
  const apexExperiments = require("useApexExperiments").useApexExperiments();
  ({ experiments: experiments2, overridesInfo: overridesInfo2 } = apexExperiments);
  if (cResult[0] === experiments2) {
    if (cResult[1] === experiments) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] === overridesInfo2) {
      if (cResult[4] === overridesInfo) {
        let tmp13 = cResult[5];
      }
      _require = tmp13;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { includeKeyboardHeight: true };
        cResult[6] = obj4;
        let tmp20 = obj4;
      } else {
        tmp20 = cResult[6];
      }
      const insets = arr(6664)(tmp20).insets;
      const tmp22 = arr(6737)();
      if (cResult[7] === tmp10) {
        if (cResult[8] === tmp13) {
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
            let tmp24 = items;
          } else {
            tmp24 = cResult[12];
          }
          if (cResult[13] === arr) {
            if (cResult[14] === tmp13) {
              let tmp25 = cResult[15];
            }
            if (tmp21Result.isEmpty(tmp10)) {
              const _Symbol3 = Symbol;
              if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                const EmptyState = tmp(1200).EmptyState;
                { Illustration: null, title: "No Experiments", body: "No experiments are currently running." }.Illustration = tmp(8358).NoResults;
                class A {
                  constructor(arg0, arg1) {
                    tmp = closure_1[arg1];
                    obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                    return jsx(closure_14, obj);
                  }
                }
                cResult[16] = tmp45;
                let tmp43 = tmp45;
                const obj5 = { Illustration: null, title: "No Experiments", body: "No experiments are currently running." };
              } else {
                tmp43 = cResult[16];
              }
              return tmp43;
            } else {
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                const obj6 = { size: "md", onChange: tmp7 };
                const tmp28 = closure_11(tmp(6738).SearchField, obj6);
                class A {
                  constructor(arg0, arg1) {
                    tmp = closure_1[arg1];
                    obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                    return jsx(closure_14, obj);
                  }
                }
                cResult[17] = tmp28;
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
                const tmp32 = closure_11(View, obj7);
                cResult[18] = tmp4.searchBar;
                cResult[19] = tmp32;
                let tmp29 = tmp32;
              } else {
                tmp29 = cResult[19];
              }
              class A {
                constructor(arg0, arg1) {
                  tmp = closure_1[arg1];
                  obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                  return jsx(closure_14, obj);
                }
              }
              const sum = tmp33 + tmp21(587).space.PX_16;
              if (cResult[20] === tmp22) {
                if (cResult[21] === tmp25) {
                  if (cResult[22] === tmp24) {
                    if (cResult[23] === tmp4.listContainer) {
                      if (cResult[24] === sum) {
                        let tmp35 = cResult[25];
                      }
                      if (cResult[26] === tmp4.container) {
                        if (cResult[27] === tmp29) {
                          if (cResult[28] === tmp35) {
                            let tmp38 = cResult[29];
                          }
                          return tmp38;
                        }
                      }
                      class A {
                        constructor(arg0, arg1) {
                          tmp = closure_1[arg1];
                          obj = { id: tmp.id, experiment: tmp.experiment, override: closure_0[tmp.id], start: 0 === arg1, end: arg1 === closure_1.length - 1 };
                          return jsx(closure_14, obj);
                        }
                      }
                      tmp41[0] = tmp4.container;
                      const items1 = [tmp29, tmp35];
                      tmp41[1] = items1;
                      const tmp42 = closure_12(View, tmp41);
                      cResult[26] = tmp4.container;
                      cResult[27] = tmp29;
                      cResult[28] = tmp35;
                      cResult[29] = tmp42;
                      tmp38 = tmp42;
                    }
                  }
                }
              }
              const obj8 = { style: tmp4.listContainer, sections: tmp24, estimatedListSize: "windowSize", itemSize: tmp22, insetEnd: sum, renderItem: tmp25 };
              const tmp37 = closure_11(tmp21(6743), obj8);
              cResult[20] = tmp22;
              cResult[21] = tmp25;
              cResult[22] = tmp24;
              cResult[23] = tmp4.listContainer;
              cResult[24] = sum;
              cResult[25] = tmp37;
              tmp35 = tmp37;
            }
            tmp21Result = tmp21(12);
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
          tmp25 = A;
        }
      }
      const tmpResult = tmp(11367);
      const tmpResult3 = tmp(11367);
      const bestMatches = tmpResult.getBestMatches(tmpResult3.sortEntries(tmp(11367).getEntries(tmp10), tmp13), tmp6);
      cResult[7] = tmp10;
      cResult[8] = tmp13;
      cResult[9] = tmp6;
      cResult[10] = bestMatches;
      arr = bestMatches;
      const tmpResult4 = tmp(11367);
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
  const obj3 = require("useApexExperiments");
}) : (function DevToolsExperimentsScreen() {
  const tmp = closure_13();
  [tmp3, tmp4] = overridesInfo2(memo1.useState(""), 2);
  const tmp2 = overridesInfo2(memo1.useState(""), 2);
  const legacyExperiments = experiments(experiments2[12]).useLegacyExperiments();
  experiments = legacyExperiments.experiments;
  const overridesInfo = legacyExperiments.overridesInfo;
  const obj = experiments(experiments2[12]);
  const apexExperiments = experiments(experiments2[13]).useApexExperiments();
  experiments2 = apexExperiments.experiments;
  overridesInfo2 = apexExperiments.overridesInfo;
  let items = [experiments, experiments2];
  const memo = memo1.useMemo(() => {
    const merged = Object.assign(experiments);
    const merged1 = Object.assign(experiments2);
    return {};
  }, items);
  const items1 = [overridesInfo, overridesInfo2];
  memo1 = memo1.useMemo(() => {
    const merged = Object.assign(overridesInfo);
    const merged1 = Object.assign(overridesInfo2);
    return {};
  }, items1);
  const obj2 = experiments(experiments2[13]);
  const tmp12 = overridesInfo(experiments2[15])();
  const obj3 = experiments(experiments2[16]);
  const obj4 = experiments(experiments2[16]);
  const bestMatches = obj3.getBestMatches(obj4.sortEntries(experiments(experiments2[16]).getEntries(memo), memo1), tmp3);
  const items2 = [bestMatches.length];
  const items3 = [bestMatches, memo1];
  const memo2 = memo1.useMemo(() => {
    const items = [bestMatches.length];
    return items;
  }, items2);
  const callback = memo1.useCallback((arg0, arg1) => closure_2_11(closure_14, { id: bestMatches[arg1].id, experiment: bestMatches[arg1].experiment, override: memo1[bestMatches[arg1].id], start: 0 === arg1, end: arg1 === bestMatches.length - 1 }), items3);
  const obj5 = experiments(experiments2[16]);
  if (obj6.isEmpty(memo)) {
    const obj7 = { Illustration: tmp5(tmp6[19]).NoResults, title: "No Experiments", body: "No experiments are currently running." };
    let tmp19 = closure_11(tmp5(tmp6[18]).EmptyState, obj7);
  } else {
    const obj8 = { style: tmp.container, children: null };
    const obj9 = { style: tmp.searchBar, children: null };
    const obj10 = { size: "md", onChange: tmp4 };
    obj9.children = closure_11(tmp5(tmp6[20]).SearchField, obj10);
    const items4 = [closure_11(bestMatches, obj9), ];
    const obj11 = { style: tmp.listContainer, sections: memo2, estimatedListSize: "windowSize", itemSize: tmp12, insetEnd: overridesInfo(experiments2[14])({ includeKeyboardHeight: true }).insets.bottom + tmp11(tmp6[9]).space.PX_16, renderItem: callback };
    items4[1] = closure_11(tmp11(tmp6[21]), obj11);
    obj8.children = items4;
    tmp19 = closure_12(bestMatches, obj8);
    const tmp11Result = tmp11(tmp6[21]);
  }
  return tmp19;
}));
export const ExperimentDetails = tmp5;