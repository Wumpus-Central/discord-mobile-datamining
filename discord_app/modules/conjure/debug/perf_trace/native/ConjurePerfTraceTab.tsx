// === Module 17065: ConjurePerfTraceTab ===

// Module 17065 (ConjurePerfTraceTab)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import Text_Text from "Text/Text" /* 5086 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import Card from "Card" /* 6186 */;
import ConjureTraceFormat from "ConjureTraceFormat" /* 17057 */;
import ConjurePerfTraceFormat from "ConjurePerfTraceFormat" /* 17067 */;
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 17068 */;
import noop from "module_19" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 17048 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { list: { paddingHorizontal: nativeDefault.space.PX_16 }, placeholder: null, rowSlot: null, rowBody: null, rowTop: null, rowName: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.placeholder = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.rowSlot = { paddingBottom: nativeDefault.space.PX_8 };
let obj5 = { paddingBottom: nativeDefault.space.PX_8 };
obj2.rowBody = { gap: nativeDefault.space.PX_4 };
let obj6 = { gap: nativeDefault.space.PX_4 };
obj2.rowTop = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.rowName = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerfTraceRow(projectId) {
  const cResult = projectId(576).c(39);
  projectId = projectId.projectId;
  const trace = projectId.trace;
  const tmp4 = closure_8();
  if (cResult[0] !== trace.spans) {
    const spans = trace.spans;
    const found = spans.find((error) => null != error.error);
    let error;
    if (found != null) {
      error = found.error;
    }
    cResult[0] = trace.spans;
    cResult[1] = error;
    let tmp5 = error;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === projectId) {
    if (cResult[3] === trace.id) {
      let tmp10 = cResult[4];
    }
    ({ rowBody, rowTop } = tmp4);
    if (cResult[5] !== trace) {
      const perfTraceStatusResult = tmp(17068).perfTraceStatus(trace);
      cResult[5] = trace;
      cResult[6] = perfTraceStatusResult;
      let tmp11 = perfTraceStatusResult;
      const tmpResult = tmp(17068);
    } else {
      tmp11 = cResult[6];
    }
    if (cResult[7] !== tmp11) {
      const obj2 = { status: tmp11 };
      const tmp15 = closure_6(tmp(17057).TraceStatusDot, obj2);
      cResult[7] = tmp11;
      cResult[8] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp4.rowName) {
      if (cResult[10] === trace.name) {
        let tmp16 = cResult[11];
      }
      if (cResult[12] !== trace) {
        let str = tmp(17067).perfTraceDuration(trace);
        if (str == null) {
          str = "still running";
        }
        cResult[12] = trace;
        cResult[13] = str;
        let tmp19 = str;
        const tmpResult3 = tmp(17067);
      } else {
        tmp19 = cResult[13];
      }
      if (cResult[14] !== tmp19) {
        const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp19 };
        const tmp23 = closure_6(tmp(5086).Text, obj3);
        cResult[14] = tmp19;
        cResult[15] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[15];
      }
      if (cResult[16] === tmp4.rowTop) {
        if (cResult[17] === tmp21) {
          if (cResult[18] === tmp13) {
            if (cResult[19] === tmp16) {
              let tmp24 = cResult[20];
            }
            if (cResult[21] !== trace) {
              const perfTraceSummaryResult = tmp(17067).perfTraceSummary(trace);
              cResult[21] = trace;
              cResult[22] = perfTraceSummaryResult;
              let tmp28 = perfTraceSummaryResult;
              const tmpResult4 = tmp(17067);
            } else {
              tmp28 = cResult[22];
            }
            if (cResult[23] !== tmp28) {
              const obj4 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: tmp28 };
              const tmp32 = closure_6(tmp(5086).Text, obj4);
              cResult[23] = tmp28;
              cResult[24] = tmp32;
              let tmp30 = tmp32;
            } else {
              tmp30 = cResult[24];
            }
            if (cResult[25] !== tmp5) {
              let tmp34 = null;
              if (null != tmp5) {
                const obj5 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: tmp5 };
                tmp34 = closure_6(tmp(5086).Text, obj5);
              }
              cResult[25] = tmp5;
              cResult[26] = tmp34;
              let tmp33 = tmp34;
            } else {
              tmp33 = cResult[26];
            }
            if (cResult[27] === tmp4.rowBody) {
              if (cResult[28] === tmp24) {
                if (cResult[29] === tmp30) {
                  if (cResult[30] === tmp33) {
                    let tmp36 = cResult[31];
                  }
                  if (cResult[32] === tmp36) {
                    if (cResult[33] === tmp10) {
                      if (cResult[34] === trace.name) {
                        let tmp40 = cResult[35];
                      }
                      if (cResult[36] === tmp4.rowSlot) {
                        if (cResult[37] === tmp40) {
                          let tmp43 = cResult[38];
                        }
                        return tmp43;
                      }
                      const obj6 = { style: tmp9, children: tmp40 };
                      const tmp46 = closure_6(View, obj6);
                      cResult[36] = tmp4.rowSlot;
                      cResult[37] = tmp40;
                      cResult[38] = tmp46;
                      tmp43 = tmp46;
                    }
                  }
                  const obj7 = { variant: "primary", onPress: tmp10, accessibilityLabel: trace.name, children: tmp36 };
                  cResult[32] = tmp36;
                  cResult[33] = tmp10;
                  cResult[34] = trace.name;
                  class T {
                    constructor() {
                      obj = closure_1(closure_2[6]);
                      obj1 = { projectId, traceId: trace.id };
                      pushLazyResult = obj.pushLazy(closure_0(closure_2[8])(closure_2[7], closure_2.paths), obj1, "CONJURE_PERF_TRACE_MODAL");
                      return;
                    }
                  }
                  tmp40 = closure_6(tmp(6186).Card, obj7);
                  const tmp42 = closure_6(tmp(6186).Card, obj7);
                }
              }
            }
            const obj8 = { style: rowBody, children: null };
            const items = [tmp24, tmp30, tmp33];
            obj8.children = items;
            const tmp39 = closure_7(View, obj8);
            class T {
              constructor() {
                obj = closure_1(closure_2[6]);
                obj1 = { projectId, traceId: trace.id };
                pushLazyResult = obj.pushLazy(closure_0(closure_2[8])(closure_2[7], closure_2.paths), obj1, "CONJURE_PERF_TRACE_MODAL");
                return;
              }
            }
            cResult[27] = tmp4.rowBody;
            cResult[28] = tmp24;
            cResult[29] = tmp30;
            cResult[30] = tmp33;
            cResult[31] = tmp39;
            tmp36 = tmp39;
          }
        }
      }
      const obj9 = { style: rowTop, children: null };
      const items1 = [tmp13, tmp16, tmp21];
      obj9.children = items1;
      const tmp27 = closure_7(View, obj9);
      class T {
        constructor() {
          obj = closure_1(closure_2[6]);
          obj1 = { projectId, traceId: trace.id };
          pushLazyResult = obj.pushLazy(closure_0(closure_2[8])(closure_2[7], closure_2.paths), obj1, "CONJURE_PERF_TRACE_MODAL");
          return;
        }
      }
      cResult[17] = tmp21;
      cResult[18] = tmp13;
      cResult[19] = tmp16;
      cResult[20] = tmp27;
      tmp24 = tmp27;
    }
    const obj10 = { variant: "text-sm/semibold", color: "text-default", style: tmp4.rowName, lineClamp: 1, children: trace.name };
    const tmp18 = closure_6(tmp(5086).Text, obj10);
    cResult[9] = tmp4.rowName;
    class T {
      constructor() {
        obj = closure_1(closure_2[6]);
        obj1 = { projectId, traceId: trace.id };
        pushLazyResult = obj.pushLazy(closure_0(closure_2[8])(closure_2[7], closure_2.paths), obj1, "CONJURE_PERF_TRACE_MODAL");
        return;
      }
    }
    cResult[11] = tmp18;
    tmp16 = tmp18;
  }
  class T {
    constructor() {
      obj = closure_1(closure_2[6]);
      obj1 = { projectId, traceId: trace.id };
      pushLazyResult = obj.pushLazy(closure_0(closure_2[8])(closure_2[7], closure_2.paths), obj1, "CONJURE_PERF_TRACE_MODAL");
      return;
    }
  }
  cResult[2] = projectId;
  cResult[3] = trace.id;
  cResult[4] = T;
  tmp10 = T;
  const obj = projectId(576);
}) : (function PerfTraceRow(arg0) {
  ({ projectId: require, trace } = arg0);
  const tmp = closure_8();
  const spans = trace.spans;
  const found = spans.find((error) => null != error.error);
  let error;
  if (found != null) {
    error = found.error;
  }
  const obj = { style: tmp.rowSlot, children: null };
  const obj2 = {
    variant: "primary",
    onPress() {
      ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(17066, dependencyMap.paths), { projectId, traceId: trace.id }, "CONJURE_PERF_TRACE_MODAL");
    },
    accessibilityLabel: trace.name,
    children: null
  };
  const obj3 = { style: tmp.rowBody, children: null };
  const obj4 = { style: tmp.rowTop, children: null };
  const obj5 = { status: ConjurePerfTraceLayout.perfTraceStatus(trace) };
  const items = [closure_6(ConjureTraceFormat.TraceStatusDot, obj5), closure_6(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", style: tmp.rowName, lineClamp: 1, children: trace.name }), ];
  const obj7 = { variant: "text-sm/semibold", color: "text-default", style: tmp.rowName, lineClamp: 1, children: trace.name };
  let str = ConjurePerfTraceFormat.perfTraceDuration(trace);
  if (str == null) {
    str = "still running";
  }
  items[2] = closure_6(Text_Text.Text, { variant: "text-xs/normal", color: "text-subtle", children: str });
  obj4.children = items;
  const items1 = [closure_7(View, obj4), , ];
  const obj9 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: null };
  obj9.children = ConjurePerfTraceFormat.perfTraceSummary(trace);
  items1[1] = closure_6(Text_Text.Text, obj9);
  let tmp4Result = null;
  if (null != error) {
    const obj10 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: error };
    tmp4Result = closure_6(Text_Text.Text, obj10);
  }
  items1[2] = tmp4Result;
  obj3.children = items1;
  obj2.children = closure_7(View, obj3);
  obj.children = closure_6(Card.Card, obj2);
  return closure_6(View, obj);
});
ReactCompilerGating = fn(558);
let obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePerfTraceTab(projectId) {
  const cResult = projectId(576).c(22);
  projectId = projectId.projectId;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureDebugStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    const fn = function x() {
      return ConjureDebugStore.getTimingTraces(projectId);
    };
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = projectId(576);
  const stateFromStoresArray = projectId(504).useStateFromStoresArray(first, tmp8, tmp9);
  if (cResult[4] !== stateFromStoresArray) {
    const items2 = [];
    HermesBuiltin.arraySpread(stateFromStoresArray, 0);
    const reversed = items2.reverse();
    cResult[4] = stateFromStoresArray;
    cResult[5] = reversed;
    let tmp10 = reversed;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== projectId) {
    const fn2 = function _(trace) {
      return timestampProducer(closure_9, { projectId, trace: trace.item });
    };
    cResult[6] = projectId;
    cResult[7] = fn2;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[7];
  }
  if (0 === stateFromStoresArray.length) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp27 = closure_6(tmp(5086).Text, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" });
      const tmp28 = closure_6(tmp(5086).Text, { variant: "text-sm/normal", color: "text-muted", children: "Turns and project operations over 100ms record a timing trace here when they finish." });
      cResult[8] = tmp27;
      cResult[9] = tmp28;
      let tmp25 = tmp28;
      let tmp24 = tmp27;
    } else {
      tmp24 = cResult[8];
      tmp25 = cResult[9];
    }
    if (cResult[10] !== tmp4.placeholder) {
      const obj2 = { style: tmp4.placeholder, children: null };
      const items3 = [tmp24, tmp25];
      obj2.children = items3;
      const tmp32 = closure_7(View, obj2);
      cResult[10] = tmp4.placeholder;
      cResult[11] = tmp32;
      let tmp29 = tmp32;
    } else {
      tmp29 = cResult[11];
    }
    return tmp29;
  } else {
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          return projectId.id;
        }
      }
      cResult[12] = I;
    } else {
      class I {
        constructor(arg0) {
          return projectId.id;
        }
      }
    }
    const sum = nativeDefault.space.PX_16 + useSafeAreaInsetsDefault().bottom;
    if (cResult[13] !== sum) {
      class I {
        constructor(arg0) {
          return projectId.id;
        }
      }
      tmp19[0] = sum;
      cResult[13] = sum;
      cResult[14] = tmp19;
    } else {
      class I {
        constructor(arg0) {
          return projectId.id;
        }
      }
    }
    if (cResult[15] === tmp4.list) {
      class I {
        constructor(arg0) {
          return projectId.id;
        }
      }
      if (cResult[18] === tmp10) {
        class I {
          constructor(arg0) {
            return projectId.id;
          }
        }
      }
      const obj3 = { data: tmp10, keyExtractor: I, renderItem: tmp15, contentContainerStyle: tmp20 };
      const tmp23 = closure_6(tmp(8600).FlashList, obj3);
      cResult[18] = tmp10;
      cResult[19] = tmp15;
      cResult[20] = tmp20;
      cResult[21] = tmp23;
    }
    const items4 = [tmp4.list, tmp19];
    cResult[15] = tmp4.list;
    cResult[16] = tmp19;
    cResult[17] = items4;
  }
  const tmpResult = projectId(504);
}) : (function ConjurePerfTraceTab(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_8();
  let items = [ConjureDebugStore];
  const items1 = [projectId];
  const stateFromStoresArray = projectId(504).useStateFromStoresArray(items, () => ConjureDebugStore.getTimingTraces(projectId), items1);
  const items2 = [stateFromStoresArray];
  [][0] = projectId;
  const memo = noop.useMemo(() => {
    const items = [...stateFromStoresArray];
    return items.reverse();
  }, items2);
  if (0 === stateFromStoresArray.length) {
    const obj2 = { style: tmp.placeholder, children: null };
    const items3 = [closure_6(tmp4(5086).Text, { variant: "text-sm/medium", color: "text-default", children: "No perf traces yet" }), closure_6(tmp4(5086).Text, { variant: "text-sm/normal", color: "text-muted", children: "Turns and project operations over 100ms record a timing trace here when they finish." })];
    obj2.children = items3;
    let tmp8 = closure_7(View, obj2);
  } else {
    const obj3 = {
      data: memo,
      keyExtractor(id) {
          return id.id;
        },
      renderItem: tmp6,
      contentContainerStyle: null
    };
    const items4 = [tmp.list, ];
    const obj4 = { paddingBottom: stateFromStoresArray(587).space.PX_16 + stateFromStoresArray(1630)().bottom };
    items4[1] = obj4;
    obj3.contentContainerStyle = items4;
    tmp8 = closure_6(tmp4(8600).FlashList, obj3);
  }
  return tmp8;
});