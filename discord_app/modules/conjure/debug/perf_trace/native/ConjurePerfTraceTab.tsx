// discord_app/modules/conjure/debug/perf_trace/native/ConjurePerfTraceTab.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import v1 from "../../../../../../_runtime/01279_v1.js";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/02000_asyncRequireImpl.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../../../actions/ModalActionCreators.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import FileManagerUtils from "../../../../../utils/FileManagerUtils.native.tsx";
import ConjurePerfTraceLayout from "../ConjurePerfTraceLayout.tsx";
import ConjurePerfTraceFormat from "../ConjurePerfTraceFormat.tsx";
import ConjurePerfTraceStats from "../ConjurePerfTraceStats.tsx";
import ConjurePerfTraceList from "../ConjurePerfTraceList.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ConjureDebugStore from "../../ConjureDebugStore.tsx";

const ConjureHeaderIconButtonDefault = tmp5(17038);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  list: { paddingHorizontal: nativeDefault.space.PX_16 },
  placeholder: null,
  header: null,
  tools: null,
  search: null,
  rowSlot: null,
  rowBody: null,
  rowTop: null,
  rowName: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.placeholder = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.header = {
  gap: nativeDefault.space.PX_12,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_12,
};
let obj5 = {
  gap: nativeDefault.space.PX_12,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_12,
};
obj2.tools = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.search = { flex: 1 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.rowSlot = { paddingBottom: nativeDefault.space.PX_8 };
let obj7 = { paddingBottom: nativeDefault.space.PX_8 };
obj2.rowBody = { gap: nativeDefault.space.PX_4 };
let obj8 = { gap: nativeDefault.space.PX_4 };
obj2.rowTop = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.rowName = { flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PerfTraceRow(projectId) {
      const cResult = projectId(576).c(39);
      projectId = projectId.projectId;
      const trace = projectId.trace;
      const tmp4 = closure_10();
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
          const perfTraceStatusResult = tmp(13224).perfTraceStatus(trace);
          cResult[5] = trace;
          cResult[6] = perfTraceStatusResult;
          let tmp11 = perfTraceStatusResult;
          const tmpResult = tmp(13224);
        } else {
          tmp11 = cResult[6];
        }
        if (cResult[7] !== tmp11) {
          const obj2 = { status: tmp11 };
          const tmp16 = closure_8(trace(17283), obj2);
          cResult[7] = tmp11;
          cResult[8] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] === tmp4.rowName) {
          if (cResult[10] === trace.name) {
            let tmp17 = cResult[11];
          }
          if (cResult[12] !== trace) {
            const perfTraceDurationResult = tmp(17279).perfTraceDuration(trace);
            cResult[12] = trace;
            cResult[13] = perfTraceDurationResult;
            let tmp20 = perfTraceDurationResult;
            const tmpResult3 = tmp(17279);
          } else {
            tmp20 = cResult[13];
          }
          if (cResult[14] !== tmp20) {
            const obj3 = { variant: "text-xs/normal", color: "text-subtle", children: tmp20 };
            const tmp24 = closure_8(tmp(5088).Text, obj3);
            cResult[14] = tmp20;
            cResult[15] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[15];
          }
          if (cResult[16] === tmp4.rowTop) {
            if (cResult[17] === tmp22) {
              if (cResult[18] === tmp13) {
                if (cResult[19] === tmp17) {
                  let tmp25 = cResult[20];
                }
                if (cResult[21] !== trace) {
                  const perfTraceSummaryResult = tmp(17279).perfTraceSummary(trace);
                  cResult[21] = trace;
                  cResult[22] = perfTraceSummaryResult;
                  let tmp29 = perfTraceSummaryResult;
                  const tmpResult4 = tmp(17279);
                } else {
                  tmp29 = cResult[22];
                }
                if (cResult[23] !== tmp29) {
                  const obj4 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: tmp29 };
                  const tmp33 = closure_8(tmp(5088).Text, obj4);
                  cResult[23] = tmp29;
                  cResult[24] = tmp33;
                  let tmp31 = tmp33;
                } else {
                  tmp31 = cResult[24];
                }
                if (cResult[25] !== tmp5) {
                  let tmp35 = null;
                  if (null != tmp5) {
                    const obj5 = {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      lineClamp: 2,
                      children: tmp5,
                    };
                    tmp35 = closure_8(tmp(5088).Text, obj5);
                  }
                  cResult[25] = tmp5;
                  cResult[26] = tmp35;
                  let tmp34 = tmp35;
                } else {
                  tmp34 = cResult[26];
                }
                if (cResult[27] === tmp4.rowBody) {
                  if (cResult[28] === tmp25) {
                    if (cResult[29] === tmp31) {
                      if (cResult[30] === tmp34) {
                        let tmp37 = cResult[31];
                      }
                      if (cResult[32] === tmp37) {
                        if (cResult[33] === tmp10) {
                          if (cResult[34] === trace.name) {
                            let tmp41 = cResult[35];
                          }
                          if (cResult[36] === tmp4.rowSlot) {
                            if (cResult[37] === tmp41) {
                              let tmp44 = cResult[38];
                            }
                            return tmp44;
                          }
                          const obj6 = { style: tmp9, children: tmp41 };
                          const tmp47 = closure_8(View, obj6);
                          cResult[36] = tmp4.rowSlot;
                          cResult[37] = tmp41;
                          cResult[38] = tmp47;
                          tmp44 = tmp47;
                        }
                      }
                      const obj7 = {
                        variant: "primary",
                        onPress: tmp10,
                        accessibilityLabel: trace.name,
                        children: tmp37,
                      };
                      const tmp43 = closure_8(tmp(6181).Card, obj7);
                      cResult[32] = tmp37;
                      cResult[33] = tmp10;
                      cResult[34] = trace.name;
                      cResult[35] = tmp43;
                      tmp41 = tmp43;
                    }
                  }
                }
                const obj8 = { style: rowBody, children: null };
                const items = [tmp25, tmp31, tmp34];
                obj8.children = items;
                const tmp40 = closure_9(View, obj8);
                cResult[27] = tmp4.rowBody;
                cResult[28] = tmp25;
                cResult[29] = tmp31;
                cResult[30] = tmp34;
                cResult[31] = tmp40;
                tmp37 = tmp40;
              }
            }
          }
          const obj9 = { style: rowTop, children: null };
          const items1 = [tmp13, tmp17, tmp22];
          obj9.children = items1;
          const tmp28 = closure_9(View, obj9);
          cResult[16] = tmp4.rowTop;
          cResult[17] = tmp22;
          cResult[18] = tmp13;
          cResult[19] = tmp17;
          cResult[20] = tmp28;
          tmp25 = tmp28;
        }
        const obj10 = {
          variant: "text-sm/semibold",
          color: "text-default",
          style: tmp4.rowName,
          lineClamp: 1,
          children: trace.name,
        };
        const tmp19 = closure_8(tmp(5088).Text, obj10);
        cResult[9] = tmp4.rowName;
        cResult[10] = trace.name;
        cResult[11] = tmp19;
        tmp17 = tmp19;
      }
      const fn = function f() {
        ModalActionCreatorsDefault.pushLazy(
          asyncRequireImpl(17277, dependencyMap.paths),
          { projectId, traceId: trace.id },
          "CONJURE_PERF_TRACE_MODAL",
        );
      };
      cResult[2] = projectId;
      cResult[3] = trace.id;
      cResult[4] = fn;
      tmp10 = fn;
      const obj = projectId(576);
    }
  : function PerfTraceRow(arg0) {
      ({ projectId: require, trace } = arg0);
      const tmp = closure_10();
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
          ModalActionCreatorsDefault.pushLazy(
            asyncRequireImpl(17277, dependencyMap.paths),
            { projectId, traceId: trace.id },
            "CONJURE_PERF_TRACE_MODAL",
          );
        },
        accessibilityLabel: trace.name,
        children: null,
      };
      const obj3 = { style: tmp.rowBody, children: null };
      const obj4 = { style: tmp.rowTop, children: null };
      const obj5 = { status: null };
      const tmp9 = trace(17283);
      obj5.status = ConjurePerfTraceLayout.perfTraceStatus(trace);
      const items = [
        closure_8(tmp9, obj5),
        closure_8(Text_Text.Text, {
          variant: "text-sm/semibold",
          color: "text-default",
          style: tmp.rowName,
          lineClamp: 1,
          children: trace.name,
        }),
      ];
      const obj8 = { variant: "text-xs/normal", color: "text-subtle", children: null };
      const obj7 = {
        variant: "text-sm/semibold",
        color: "text-default",
        style: tmp.rowName,
        lineClamp: 1,
        children: trace.name,
      };
      obj8.children = ConjurePerfTraceFormat.perfTraceDuration(trace);
      items[2] = closure_8(Text_Text.Text, obj8);
      obj4.children = items;
      const items1 = [closure_9(View, obj4), ,];
      const obj10 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: null };
      obj10.children = ConjurePerfTraceFormat.perfTraceSummary(trace);
      items1[1] = closure_8(Text_Text.Text, obj10);
      let tmp4Result = null;
      if (null != error) {
        const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: error };
        tmp4Result = closure_8(Text_Text.Text, obj12);
      }
      items1[2] = tmp4Result;
      obj3.children = items1;
      obj2.children = closure_9(View, obj3);
      obj.children = closure_8(Card.Card, obj2);
      return closure_8(View, obj);
    };
ReactCompilerGating = fn(558);
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
function openPerfTrace(projectId, traceId) {
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(17277, dependencyMap.paths),
    { projectId, traceId },
    "CONJURE_PERF_TRACE_MODAL",
  );
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/native/ConjurePerfTraceTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePerfTraceTab(projectId) {
      const cResult = projectId(576).c(49);
      projectId = projectId.projectId;
      const tmp4 = closure_10();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureDebugStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function f() {
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
      let obj = projectId(576);
      const stateFromStoresArray = projectId(504).useStateFromStoresArray(first, tmp8, tmp9);
      const tmpResult = projectId(504);
      const first1 = _slicedToArray(noop.useState(""), 2)[0];
      if (cResult[4] === first1) {
        if (cResult[5] === stateFromStoresArray) {
          let tmp12 = cResult[6];
        }
        importDefault = tmp12;
        if (cResult[7] !== tmp12) {
          const items2 = [];
          HermesBuiltin.arraySpread(tmp12, 0);
          class F {
            constructor() {
              combined = "conjure-traces-" + projectId + ".json";
              closure_0 = combined;
              obj = closure_0(closure_2[18]);
              combined1 = "conjure-traces-" + obj.v4();
              closure_1 = combined1;
              obj2 = closure_0(closure_2[19]);
              combined2 = "" + combined1 + "/" + combined;
              obj3 = closure_0(closure_2[20]);
              date = new Date();
              writeFileResult = obj2.writeFile(
                "cache",
                combined2,
                obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
                "utf8",
              );
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
                  return projectId(first[21]).saveDocuments(obj2);
                }
              });
              cleanupPromise = nextPromise.finally(
                closure_4(async () => {
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
                      return { value: "IconComponent", done: "+51" };
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
                          const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                          const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                        return { value: "IconComponent", done: "+51" };
                      }
                    } catch (tmp12) {
                      dependencyMap = tmp;
                      throw tmp12;
                    }
                  }
                }),
              );
              catchPromise = cleanupPromise.catch((error) => {
                const obj = combined(first[21]);
                if (isErrorWithCodeResult) {
                  const code = error.code;
                  const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
                }
                isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
              });
              return;
            }
          }
          cResult[7] = tmp12;
          cResult[8] = tmp18;
        }
        if (cResult[9] !== tmp12) {
          const tmpResult3 = tmp(17281);
          cResult[9] = tmp12;
          class F {
            constructor() {
              combined = "conjure-traces-" + projectId + ".json";
              closure_0 = combined;
              obj = closure_0(closure_2[18]);
              combined1 = "conjure-traces-" + obj.v4();
              closure_1 = combined1;
              obj2 = closure_0(closure_2[19]);
              combined2 = "" + combined1 + "/" + combined;
              obj3 = closure_0(closure_2[20]);
              date = new Date();
              writeFileResult = obj2.writeFile(
                "cache",
                combined2,
                obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
                "utf8",
              );
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
                  return projectId(first[21]).saveDocuments(obj2);
                }
              });
              cleanupPromise = nextPromise.finally(
                closure_4(async () => {
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
                      return { value: "IconComponent", done: "+51" };
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
                          const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                          const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                        return { value: "IconComponent", done: "+51" };
                      }
                    } catch (tmp12) {
                      dependencyMap = tmp;
                      throw tmp12;
                    }
                  }
                }),
              );
              catchPromise = cleanupPromise.catch((error) => {
                const obj = combined(first[21]);
                if (isErrorWithCodeResult) {
                  const code = error.code;
                  const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
                }
                isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
              });
              return;
            }
          }
          const sumPerfTraceStatsResult = tmp(17281).sumPerfTraceStats(tmp12);
        }
        if (cResult[11] === tmp12) {
          if (cResult[12] === projectId) {
            let tmp21 = cResult[13];
          }
          if (cResult[14] !== projectId) {
            class B {
              constructor(arg0) {
                obj = { projectId, trace: projectId.item };
                return jsx(PerfTraceRow, obj);
              }
            }
            cResult[14] = projectId;
            cResult[15] = B;
            class F {
              constructor() {
                combined = "conjure-traces-" + projectId + ".json";
                closure_0 = combined;
                obj = closure_0(closure_2[18]);
                combined1 = "conjure-traces-" + obj.v4();
                closure_1 = combined1;
                obj2 = closure_0(closure_2[19]);
                combined2 = "" + combined1 + "/" + combined;
                obj3 = closure_0(closure_2[20]);
                date = new Date();
                writeFileResult = obj2.writeFile(
                  "cache",
                  combined2,
                  obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
                  "utf8",
                );
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
                    return projectId(first[21]).saveDocuments(obj2);
                  }
                });
                cleanupPromise = nextPromise.finally(
                  closure_4(async () => {
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
                        return { value: "IconComponent", done: "+51" };
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
                            const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                            const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                          return { value: "IconComponent", done: "+51" };
                        }
                      } catch (tmp12) {
                        dependencyMap = tmp;
                        throw tmp12;
                      }
                    }
                  }),
                );
                catchPromise = cleanupPromise.catch((error) => {
                  const obj = combined(first[21]);
                  if (isErrorWithCodeResult) {
                    const code = error.code;
                    const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
                  }
                  isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
                });
                return;
              }
            }
          } else {
            class B {
              constructor(arg0) {
                obj = { projectId, trace: projectId.item };
                return jsx(PerfTraceRow, obj);
              }
            }
          }
          if (0 === stateFromStoresArray.length) {
            class B {
              constructor(arg0) {
                obj = { projectId, trace: projectId.item };
                return jsx(PerfTraceRow, obj);
              }
            }
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class B {
                constructor(arg0) {
                  obj = { projectId, trace: projectId.item };
                  return jsx(PerfTraceRow, obj);
                }
              }
              const tmp37 = closure_8(tmp(5088).Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: "No traces yet",
              });
              const tmp38 = closure_8(tmp(5088).Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "Turns and project operations over 100ms show up here as they run.",
              });
              cResult[16] = tmp38;
              class F {
                constructor() {
                  combined = "conjure-traces-" + projectId + ".json";
                  closure_0 = combined;
                  obj = closure_0(closure_2[18]);
                  combined1 = "conjure-traces-" + obj.v4();
                  closure_1 = combined1;
                  obj2 = closure_0(closure_2[19]);
                  combined2 = "" + combined1 + "/" + combined;
                  obj3 = closure_0(closure_2[20]);
                  date = new Date();
                  writeFileResult = obj2.writeFile(
                    "cache",
                    combined2,
                    obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
                    "utf8",
                  );
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
                      return projectId(first[21]).saveDocuments(obj2);
                    }
                  });
                  cleanupPromise = nextPromise.finally(
                    closure_4(async () => {
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
                          return { value: "IconComponent", done: "+51" };
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
                              const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                              const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                            return { value: "IconComponent", done: "+51" };
                          }
                        } catch (tmp12) {
                          dependencyMap = tmp;
                          throw tmp12;
                        }
                      }
                    }),
                  );
                  catchPromise = cleanupPromise.catch((error) => {
                    const obj = combined(first[21]);
                    if (isErrorWithCodeResult) {
                      const code = error.code;
                      const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
                    }
                    isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
                  });
                  return;
                }
              }
              cResult[17] = tmp37;
              const tmp35 = tmp38;
            } else {
              class B {
                constructor(arg0) {
                  obj = { projectId, trace: projectId.item };
                  return jsx(PerfTraceRow, obj);
                }
              }
            }
            if (cResult[18] !== tmp4.placeholder) {
              class B {
                constructor(arg0) {
                  obj = { projectId, trace: projectId.item };
                  return jsx(PerfTraceRow, obj);
                }
              }
              let obj2 = { style: tmp4.placeholder, children: null };
              const items3 = [,];
              class F {
                constructor() {
                  combined = "conjure-traces-" + projectId + ".json";
                  closure_0 = combined;
                  obj = closure_0(closure_2[18]);
                  combined1 = "conjure-traces-" + obj.v4();
                  closure_1 = combined1;
                  obj2 = closure_0(closure_2[19]);
                  combined2 = "" + combined1 + "/" + combined;
                  obj3 = closure_0(closure_2[20]);
                  date = new Date();
                  writeFileResult = obj2.writeFile(
                    "cache",
                    combined2,
                    obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
                    "utf8",
                  );
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
                      return projectId(first[21]).saveDocuments(obj2);
                    }
                  });
                  cleanupPromise = nextPromise.finally(
                    closure_4(async () => {
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
                          return { value: "IconComponent", done: "+51" };
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
                              const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                              const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                            return { value: "IconComponent", done: "+51" };
                          }
                        } catch (tmp12) {
                          dependencyMap = tmp;
                          throw tmp12;
                        }
                      }
                    }),
                  );
                  catchPromise = cleanupPromise.catch((error) => {
                    const obj = combined(first[21]);
                    if (isErrorWithCodeResult) {
                      const code = error.code;
                      const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
                    }
                    isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
                  });
                  return;
                }
              }
              items3[1] = tmp35;
              obj2.children = items3;
              const tmp41 = closure_9(View, obj2);
              cResult[18] = tmp4.placeholder;
              cResult[19] = tmp41;
              const tmp39 = tmp41;
            } else {
              class B {
                constructor(arg0) {
                  obj = { projectId, trace: projectId.item };
                  return jsx(PerfTraceRow, obj);
                }
              }
            }
            return tmp39;
          } else {
            class B {
              constructor(arg0) {
                obj = { projectId, trace: projectId.item };
                return jsx(PerfTraceRow, obj);
              }
            }
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              class M {
                constructor(arg0) {
                  return projectId.id;
                }
              }
              cResult[20] = M;
            } else {
              class M {
                constructor(arg0) {
                  return projectId.id;
                }
              }
            }
            const _Symbol = Symbol;
            class F {
              constructor() {
                combined = "conjure-traces-" + projectId + ".json";
                closure_0 = combined;
                obj = closure_0(closure_2[18]);
                combined1 = "conjure-traces-" + obj.v4();
                closure_1 = combined1;
                obj2 = closure_0(closure_2[19]);
                combined2 = "" + combined1 + "/" + combined;
                obj3 = closure_0(closure_2[20]);
                date = new Date();
                writeFileResult = obj2.writeFile(
                  "cache",
                  combined2,
                  obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
                  "utf8",
                );
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
                    return projectId(first[21]).saveDocuments(obj2);
                  }
                });
                cleanupPromise = nextPromise.finally(
                  closure_4(async () => {
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
                        return { value: "IconComponent", done: "+51" };
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
                            const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                            const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                          return { value: "IconComponent", done: "+51" };
                        }
                      } catch (tmp12) {
                        dependencyMap = tmp;
                        throw tmp12;
                      }
                    }
                  }),
                );
                catchPromise = cleanupPromise.catch((error) => {
                  const obj = combined(first[21]);
                  if (isErrorWithCodeResult) {
                    const code = error.code;
                    const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
                  }
                  isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
                });
                return;
              }
            }
            if (cResult[22] !== tmp4.search) {
              class M {
                constructor(arg0) {
                  return projectId.id;
                }
              }
              let obj3 = { style: tmp4.search, children: tmp24 };
              class F {
                constructor() {
                  combined = "conjure-traces-" + projectId + ".json";
                  closure_0 = combined;
                  obj = closure_0(closure_2[18]);
                  combined1 = "conjure-traces-" + obj.v4();
                  closure_1 = combined1;
                  obj2 = closure_0(closure_2[19]);
                  combined2 = "" + combined1 + "/" + combined;
                  obj3 = closure_0(closure_2[20]);
                  date = new Date();
                  writeFileResult = obj2.writeFile(
                    "cache",
                    combined2,
                    obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
                    "utf8",
                  );
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
                      return projectId(first[21]).saveDocuments(obj2);
                    }
                  });
                  cleanupPromise = nextPromise.finally(
                    closure_4(async () => {
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
                          return { value: "IconComponent", done: "+51" };
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
                              const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                              const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                            return { value: "IconComponent", done: "+51" };
                          }
                        } catch (tmp12) {
                          dependencyMap = tmp;
                          throw tmp12;
                        }
                      }
                    }),
                  );
                  catchPromise = cleanupPromise.catch((error) => {
                    const obj = combined(first[21]);
                    if (isErrorWithCodeResult) {
                      const code = error.code;
                      const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
                    }
                    isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
                  });
                  return;
                }
              }
              cResult[22] = tmp4.search;
              cResult[23] = tmp27;
            } else {
              class M {
                constructor(arg0) {
                  return projectId.id;
                }
              }
            }
            if (cResult[24] !== tmp21) {
              class M {
                constructor(arg0) {
                  return projectId.id;
                }
              }
              const obj4 = { IconComponent: null, onPress: null, accessibilityLabel: "Export as JSON" };
              ConjureHeaderIconButtonDefault;
              obj4.IconComponent = tmp(5044).DownloadIcon;
              obj4.onPress = tmp21;
              class F {
                constructor() {
                  combined = "conjure-traces-" + projectId + ".json";
                  closure_0 = combined;
                  obj = closure_0(closure_2[18]);
                  combined1 = "conjure-traces-" + obj.v4();
                  closure_1 = combined1;
                  obj2 = closure_0(closure_2[19]);
                  combined2 = "" + combined1 + "/" + combined;
                  obj3 = closure_0(closure_2[20]);
                  date = new Date();
                  writeFileResult = obj2.writeFile(
                    "cache",
                    combined2,
                    obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
                    "utf8",
                  );
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
                      return projectId(first[21]).saveDocuments(obj2);
                    }
                  });
                  cleanupPromise = nextPromise.finally(
                    closure_4(async () => {
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
                          return { value: "IconComponent", done: "+51" };
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
                              const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                              const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                            return { value: "IconComponent", done: "+51" };
                          }
                        } catch (tmp12) {
                          dependencyMap = tmp;
                          throw tmp12;
                        }
                      }
                    }),
                  );
                  catchPromise = cleanupPromise.catch((error) => {
                    const obj = combined(first[21]);
                    if (isErrorWithCodeResult) {
                      const code = error.code;
                      const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
                    }
                    isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
                  });
                  return;
                }
              }
              cResult[24] = tmp21;
              cResult[25] = tmp30;
            } else {
              class M {
                constructor(arg0) {
                  return projectId.id;
                }
              }
            }
            if (cResult[26] === tmp4.tools) {
              class M {
                constructor(arg0) {
                  return projectId.id;
                }
              }
            }
            const obj5 = { style: tmp4.tools, children: null };
            const items4 = [tmp27, tmp30];
            obj5.children = items4;
            const tmp34 = closure_9(View, obj5);
            cResult[26] = tmp4.tools;
            cResult[27] = tmp27;
            cResult[28] = tmp30;
            cResult[29] = tmp34;
          }
        }
        class F {
          constructor() {
            combined = "conjure-traces-" + projectId + ".json";
            closure_0 = combined;
            obj = closure_0(closure_2[18]);
            combined1 = "conjure-traces-" + obj.v4();
            closure_1 = combined1;
            obj2 = closure_0(closure_2[19]);
            combined2 = "" + combined1 + "/" + combined;
            obj3 = closure_0(closure_2[20]);
            date = new Date();
            writeFileResult = obj2.writeFile(
              "cache",
              combined2,
              obj3.perfTraceExport(projectId, closure_1, date.toISOString()),
              "utf8",
            );
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
                return projectId(first[21]).saveDocuments(obj2);
              }
            });
            cleanupPromise = nextPromise.finally(
              closure_4(async () => {
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
                    return { value: "IconComponent", done: "+51" };
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
                        const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                        const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                      return { value: "IconComponent", done: "+51" };
                    }
                  } catch (tmp12) {
                    dependencyMap = tmp;
                    throw tmp12;
                  }
                }
              }),
            );
            catchPromise = cleanupPromise.catch((error) => {
              const obj = combined(first[21]);
              if (isErrorWithCodeResult) {
                const code = error.code;
                const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
              }
              isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
            });
            return;
          }
        }
        cResult[11] = tmp12;
        cResult[12] = projectId;
        cResult[13] = F;
        tmp21 = F;
      }
      const tmp10 = _slicedToArray(noop.useState(""), 2);
      const filterPerfTracesResult = projectId(17284).filterPerfTraces(stateFromStoresArray, first1);
      cResult[4] = first1;
      cResult[5] = stateFromStoresArray;
      cResult[6] = filterPerfTracesResult;
      tmp12 = filterPerfTracesResult;
      const tmpResult4 = projectId(17284);
    }
  : function ConjurePerfTraceTab(projectId) {
      projectId = projectId.projectId;
      let first;
      let memo;
      const tmp = closure_10();
      let items = [ConjureDebugStore];
      const items1 = [projectId];
      const stateFromStoresArray = projectId(first[23]).useStateFromStoresArray(
        items,
        () => ConjureDebugStore.getTimingTraces(projectId),
        items1,
      );
      const tmp5 = memo(noop.useState(""), 2);
      first = tmp5[0];
      const items2 = [stateFromStoresArray, first];
      memo = noop.useMemo(() => ConjurePerfTraceList.filterPerfTraces(stateFromStoresArray, first), items2);
      const items3 = [memo];
      const memo1 = noop.useMemo(() => {
        const items = [...memo];
        return items.reverse();
      }, items3);
      const items4 = [memo];
      const items5 = [projectId, memo];
      const memo2 = noop.useMemo(() => ConjurePerfTraceStats.sumPerfTraceStats(memo), items4);
      [][0] = projectId;
      const callback = noop.useCallback(() => {
        let combined = "conjure-traces-" + projectId + ".json";
        const combined1 = "conjure-traces-" + v1.v4();
        const combined2 = "" + combined1 + "/" + combined;
        let obj2 = FileManagerUtils;
        let obj3 = ConjurePerfTraceList;
        const date = new Date();
        const writeFileResult = obj2.writeFile(
          "cache",
          combined2,
          obj3.perfTraceExport(projectId, memo, new Date().toISOString()),
          "utf8",
        );
        const nextPromise = obj2
          .writeFile("cache", combined2, obj3.perfTraceExport(projectId, memo, new Date().toISOString()), "utf8")
          .then((result) => {
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
              return projectId(first[21]).saveDocuments(obj2);
            }
          });
        obj2
          .writeFile("cache", combined2, obj3.perfTraceExport(projectId, memo, new Date().toISOString()), "utf8")
          .then((result) => {
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
              return projectId(first[21]).saveDocuments(obj2);
            }
          })
          .finally(
            asyncGeneratorStep(async () => {
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
                  return { value: "IconComponent", done: "+51" };
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
                      const obj6 = { value: combined(8331).clearFolder("cache", combined1), done: false };
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
                      const obj8 = { value: combined(8331).removeFile("cache", closure_128_1), done: false };
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
                    return { value: "IconComponent", done: "+51" };
                  }
                } catch (tmp12) {
                  dependencyMap = tmp;
                  throw tmp12;
                }
              }
            }),
          )
          .catch((error) => {
            const obj = combined(first[21]);
            if (isErrorWithCodeResult) {
              const code = error.code;
              const OPERATION_CANCELED = combined(first[21]).errorCodes.OPERATION_CANCELED;
            }
            isErrorWithCodeResult = combined(first[21]).isErrorWithCode(error);
          });
      }, items5);
      if (0 === stateFromStoresArray.length) {
        let obj2 = { style: tmp.placeholder, children: null };
        const items6 = [
          closure_8(tmp4(tmp3[15]).Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: "No traces yet",
          }),
          closure_8(tmp4(tmp3[15]).Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: "Turns and project operations over 100ms show up here as they run.",
          }),
        ];
        obj2.children = items6;
        let tmp16Result2 = closure_9(View, obj2);
      } else {
        let obj3 = {
          data: memo1,
          keyExtractor(id) {
            return id.id;
          },
          renderItem: tmp10,
          ListHeaderComponent: null,
          contentContainerStyle: null,
        };
        let obj4 = { style: tmp.header, children: null };
        const obj5 = { style: tmp.tools, children: null };
        let obj6 = { style: tmp.search, children: null };
        let obj7 = { accessibilityLabel: "Search traces", placeholder: "Search traces", size: "sm", onChange: tmp5[1] };
        obj6.children = closure_8(tmp4(tmp3[25]).SearchField, obj7);
        const items7 = [closure_8(View, obj6)];
        let obj8 = {
          IconComponent: tmp4(tmp3[27]).DownloadIcon,
          onPress: callback,
          accessibilityLabel: "Export as JSON",
        };
        items7[1] = closure_8(tmp2(tmp3[26]), obj8);
        obj5.children = items7;
        const items8 = [closure_9(View, obj5), ,];
        const obj9 = { stats: memo2 };
        items8[1] = closure_8(tmp2(tmp3[28]), obj9);
        let tmp16Result = null;
        if (0 === memo1.length) {
          tmp16Result = closure_8(tmp4(tmp3[15]).Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: "No traces match this search.",
          });
        }
        items8[2] = tmp16Result;
        obj4.children = items8;
        obj3.ListHeaderComponent = closure_9(View, obj4);
        const items9 = [tmp.list];
        const obj10 = { paddingBottom: tmp2(tmp3[7]).space.PX_16 + stateFromStoresArray(first[22])().bottom };
        items9[1] = obj10;
        obj3.contentContainerStyle = items9;
        tmp16Result2 = closure_8(tmp4(tmp3[29]).FlashList, obj3);
        const tmp2Result = tmp2(tmp3[26]);
      }
      return tmp16Result2;
    };
export { openPerfTrace };
