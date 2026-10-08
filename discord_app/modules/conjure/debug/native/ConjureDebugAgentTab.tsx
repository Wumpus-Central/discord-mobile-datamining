// discord_app/modules/conjure/debug/native/ConjureDebugAgentTab.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureDebugFormat from "../ConjureDebugFormat.tsx";
import ConjureDebugLabels from "../ConjureDebugLabels.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureDebugStore from "../ConjureDebugStore.tsx";

require = fn;
const View = fn(17).View;
const forceCompaction = fn(13072).forceCompaction;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let closure_11 = [];
const createStyles = fn(5090);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 }, callRow: null, callHead: null, forceCompaction: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj2.callRow = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.callHead = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.forceCompaction = { gap: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ModelCallRow(call) {
      const cResult = c.c(20);
      call = call.call;
      const tmp4 = closure_12();
      if (cResult[0] !== call) {
        const modelCallOutcomeResult = ConjureDebugLabels.modelCallOutcome(call);
        cResult[0] = call;
        cResult[1] = modelCallOutcomeResult;
        let tmp5 = modelCallOutcomeResult;
        const tmpResult = ConjureDebugLabels;
      } else {
        tmp5 = cResult[1];
      }
      ({ text, bad } = tmp5);
      ({ callRow, callHead } = tmp4);
      if (cResult[2] !== call.observedAt) {
        const formatClockTimeResult = ConjureDebugFormat.formatClockTime(call.observedAt);
        cResult[2] = call.observedAt;
        cResult[3] = formatClockTimeResult;
        let tmp7 = formatClockTimeResult;
        const tmpResult2 = ConjureDebugFormat;
      } else {
        tmp7 = cResult[3];
      }
      if (cResult[4] !== tmp7) {
        const obj2 = { variant: "text-xs/normal", color: "text-subtle", children: tmp7 };
        const tmp11 = closure_1_8(Text_Text.Text, obj2);
        cResult[4] = tmp7;
        cResult[5] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] === call.model) {
        if (cResult[7] === call.role) {
          let tmp12 = cResult[8];
        }
        if (cResult[9] === tmp4.callHead) {
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp12) {
              let tmp14 = cResult[12];
            }
            let str = "text-muted";
            if (bad) {
              str = "text-feedback-critical";
            }
            if (cResult[13] === text) {
              if (cResult[14] === str) {
                let tmp18 = cResult[15];
              }
              if (cResult[16] === tmp4.callRow) {
                if (cResult[17] === tmp14) {
                  if (cResult[18] === tmp18) {
                    let tmp21 = cResult[19];
                  }
                  return tmp21;
                }
              }
              const obj3 = { style: callRow, children: null };
              const items = [tmp14, tmp18];
              obj3.children = items;
              const tmp24 = options(View, obj3);
              cResult[16] = tmp4.callRow;
              cResult[17] = tmp14;
              cResult[18] = tmp18;
              cResult[19] = tmp24;
              tmp21 = tmp24;
            }
            const obj4 = { variant: "text-xs/medium", color: str, children: text };
            const tmp20 = closure_1_8(Text_Text.Text, obj4);
            cResult[13] = text;
            cResult[14] = str;
            cResult[15] = tmp20;
            tmp18 = tmp20;
          }
        }
        const obj5 = { style: callHead, children: null };
        const items1 = [tmp9, tmp12];
        obj5.children = items1;
        const tmp17 = options(View, obj5);
        cResult[9] = tmp4.callHead;
        cResult[10] = tmp9;
        cResult[11] = tmp12;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      const obj6 = { variant: "text-xs/normal", color: "text-default", children: null };
      const items2 = [call.role, " \u00B7 ", call.model];
      obj6.children = items2;
      const tmp13 = options(Text_Text.Text, obj6);
      cResult[6] = call.model;
      cResult[7] = call.role;
      cResult[8] = tmp13;
      tmp12 = tmp13;
    }
  : function ModelCallRow(call) {
      call = call.call;
      const tmp = closure_12();
      const obj2 = { style: tmp.callRow, children: null };
      const obj3 = { style: tmp.callHead, children: null };
      ({ text, bad } = ConjureDebugLabels.modelCallOutcome(call));
      const obj4 = { variant: "text-xs/normal", color: "text-subtle", children: null };
      const modelCallOutcomeResult = ConjureDebugLabels.modelCallOutcome(call);
      obj4.children = ConjureDebugFormat.formatClockTime(call.observedAt);
      const items = [closure_1_8(Text_Text.Text, obj4)];
      const obj6 = { variant: "text-xs/normal", color: "text-default", children: null };
      const items1 = [call.role, " \u00B7 ", call.model];
      obj6.children = items1;
      items[1] = options(Text_Text.Text, obj6);
      obj3.children = items;
      const items2 = [options(View, obj3)];
      let str = "text-muted";
      if (bad) {
        str = "text-feedback-critical";
      }
      items2[1] = closure_1_8(Text_Text.Text, { variant: "text-xs/medium", color: str, children: text });
      obj2.children = items2;
      return options(View, obj2);
    };
ReactCompilerGating = fn(558);
let obj6 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureDebugAgentTab(projectId) {
      const cResult = projectId(576).c(80);
      projectId = projectId.projectId;
      ({ status, fetchState, onRefresh, traceVisible } = projectId);
      const obj = projectId(576);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureDebugStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function _() {
          return ConjureDebugStore.getLastTurnUsage(projectId);
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
      const tmp4 = closure_12();
      const stateFromStores = projectId(504).useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ConjureDebugStore];
        cResult[4] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== projectId) {
        class T {
          constructor() {
            return closure_7.getLastCompaction(projectId);
          }
        }
        const items3 = [projectId];
        cResult[5] = projectId;
        cResult[6] = T;
        cResult[7] = items3;
        let tmp13 = items3;
      } else {
        class T {
          constructor() {
            return closure_7.getLastCompaction(projectId);
          }
        }
        tmp13 = cResult[7];
      }
      const tmpResult = projectId(504);
      const stateFromStores1 = projectId(504).useStateFromStores(tmp10, T, tmp13);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return closure_7.getLastCompaction(projectId);
          }
        }
        const items4 = [ConjureDebugStore];
        cResult[8] = items4;
        const tmp15 = items4;
      } else {
        class T {
          constructor() {
            return closure_7.getLastCompaction(projectId);
          }
        }
      }
      if (cResult[9] !== projectId) {
        class L {
          constructor() {
            return closure_7.getLastCompactionDecline(projectId);
          }
        }
        const items5 = [projectId];
        cResult[9] = projectId;
        cResult[10] = L;
        cResult[11] = items5;
        let tmp17 = items5;
      } else {
        class L {
          constructor() {
            return closure_7.getLastCompactionDecline(projectId);
          }
        }
        tmp17 = cResult[11];
      }
      const tmpResult5 = projectId(504);
      const stateFromStores2 = projectId(504).useStateFromStores(tmp15, L, tmp17);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return closure_7.getLastCompactionDecline(projectId);
          }
        }
        const items6 = [ConjureDebugStore];
        cResult[12] = items6;
        const tmp19 = items6;
      } else {
        class L {
          constructor() {
            return closure_7.getLastCompactionDecline(projectId);
          }
        }
      }
      if (cResult[13] !== projectId) {
        class N {
          constructor() {
            return closure_7.getForceCompactionState(projectId);
          }
        }
        const items7 = [projectId];
        cResult[13] = projectId;
        cResult[14] = N;
        cResult[15] = items7;
        let tmp21 = items7;
      } else {
        class N {
          constructor() {
            return closure_7.getForceCompactionState(projectId);
          }
        }
        tmp21 = cResult[15];
      }
      const tmpResult6 = projectId(504);
      const stateFromStores3 = projectId(504).useStateFromStores(tmp19, N, tmp21);
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class N {
          constructor() {
            return closure_7.getForceCompactionState(projectId);
          }
        }
        const items8 = [ConjureDebugStore];
        cResult[16] = items8;
        const tmp23 = items8;
      } else {
        class N {
          constructor() {
            return closure_7.getForceCompactionState(projectId);
          }
        }
      }
      if (cResult[17] === projectId) {
        class N {
          constructor() {
            return closure_7.getForceCompactionState(projectId);
          }
        }
        const stateFromStores4 = tmp(504).useStateFromStores(tmp23, X, items9);
        if (cResult[21] !== projectId) {
          class W {
            constructor() {
              return forceCompaction(projectId);
            }
          }
          cResult[21] = projectId;
          cResult[22] = W;
        } else {
          class W {
            constructor() {
              return forceCompaction(projectId);
            }
          }
        }
        if (cResult[23] !== projectId) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          cResult[23] = projectId;
          cResult[24] = B;
        } else {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (status != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          if (tmp29 != null) {
            class B {
              constructor() {
                return forceCompaction(projectId, true);
              }
            }
          }
        }
        if (undefined == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (status != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          if (tmp31 != null) {
            class B {
              constructor() {
                return forceCompaction(projectId, true);
              }
            }
          }
        }
        if (undefined == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (status != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          if (tmp33 != null) {
            class B {
              constructor() {
                return forceCompaction(projectId, true);
              }
            }
          }
        }
        if (undefined == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        let tmp34;
        if (stateFromStores1 != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (tmp34 == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
          if (tmp30 != null) {
            class B {
              constructor() {
                return forceCompaction(projectId, true);
              }
            }
          }
          tmp34 = tmp35;
        }
        if (tmp34 == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (typeof stateFromStores3 === "object") {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        const tab = tmp4.tab;
        if (status != null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (undefined == null) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        if (cResult[25] === fetchState) {
          class B {
            constructor() {
              return forceCompaction(projectId, true);
            }
          }
        }
        const obj2 = { generatedAt: undefined, fetchState, onRefresh };
        const tmp40 = closure_8(tmp(17055).DebugSnapshotToolbar, obj2);
        cResult[25] = fetchState;
        cResult[26] = onRefresh;
        cResult[27] = undefined;
        cResult[28] = tmp40;
        const tmpResult8 = tmp(504);
      }
      class X {
        constructor() {
          if (traceVisible) {
            modelCalls = closure_11;
          } else {
            tmp = closure_7;
            tmp2 = projectId;
            modelCalls = closure_7.getModelCalls(projectId);
          }
          return modelCalls;
        }
      }
      items9 = [projectId, traceVisible];
      cResult[17] = projectId;
      cResult[18] = traceVisible;
      cResult[19] = X;
      cResult[20] = items9;
      const tmpResult7 = projectId(504);
    }
  : function ConjureDebugAgentTab(projectId) {
      projectId = projectId.projectId;
      ({ status, traceVisible } = projectId);
      ({ fetchState, onRefresh } = projectId);
      const tmp = closure_12();
      const tmp2 = projectId;
      const items = [ConjureDebugStore];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureDebugStore.getLastTurnUsage(projectId),
        items1,
      );
      const obj = projectId(504);
      const items2 = [ConjureDebugStore];
      const items3 = [projectId];
      const stateFromStores1 = projectId(504).useStateFromStores(
        items2,
        () => ConjureDebugStore.getLastCompaction(projectId),
        items3,
      );
      const obj2 = projectId(504);
      const items4 = [ConjureDebugStore];
      const items5 = [projectId];
      const stateFromStores2 = projectId(504).useStateFromStores(
        items4,
        () => ConjureDebugStore.getLastCompactionDecline(projectId),
        items5,
      );
      const obj3 = projectId(504);
      const items6 = [ConjureDebugStore];
      const items7 = [projectId];
      const stateFromStores3 = projectId(504).useStateFromStores(
        items6,
        () => ConjureDebugStore.getForceCompactionState(projectId),
        items7,
      );
      const obj4 = projectId(504);
      const items8 = [ConjureDebugStore];
      const items9 = [projectId, traceVisible];
      const stateFromStores4 = projectId(504).useStateFromStores(
        items8,
        () => {
          if (traceVisible) {
            let modelCalls = closure_11;
          } else {
            modelCalls = ConjureDebugStore.getModelCalls(projectId);
          }
          return modelCalls;
        },
        items9,
      );
      const items10 = [projectId];
      const items11 = [projectId];
      const callback = noop.useCallback(() => forceCompaction(projectId), items10);
      let lifetime;
      const callback1 = noop.useCallback(() => forceCompaction(projectId, true), items11);
      if (status != null) {
        const agent = status.agent;
        if (agent != null) {
          lifetime = agent.lifetime;
        }
      }
      if (lifetime == null) {
        lifetime = null;
      }
      let limits;
      if (status != null) {
        const agent2 = status.agent;
        if (agent2 != null) {
          limits = agent2.limits;
        }
      }
      if (limits == null) {
        limits = null;
      }
      let session;
      if (status != null) {
        const agent3 = status.agent;
        if (agent3 != null) {
          session = agent3.session;
        }
      }
      if (session == null) {
        session = null;
      }
      let promptCeiling;
      if (stateFromStores1 != null) {
        promptCeiling = stateFromStores1.promptCeiling;
      }
      if (promptCeiling == null) {
        let prop;
        if (limits != null) {
          prop = limits.context_window_tokens;
        }
        promptCeiling = prop;
      }
      if (promptCeiling == null) {
        promptCeiling = null;
      }
      let tmp15 = null;
      if (typeof stateFromStores3 === "object") {
        tmp15 = stateFromStores3;
      }
      const obj6 = { style: tmp.tab, children: null };
      let generated_at;
      if (status != null) {
        generated_at = status.generated_at;
      }
      if (generated_at == null) {
        generated_at = null;
      }
      const items12 = [
        closure_8(tmp2(17055).DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }),
        ,
        ,
        ,
        ,
        ,
      ];
      const obj7 = { title: null, children: null };
      const intl = tmp2(1126).intl;
      obj7.title = intl.string(traceVisible(3827).JghNal);
      if (null == lifetime) {
        const obj8 = { children: null };
        const intl3 = tmp2(1126).intl;
        obj8.children = intl3.string(traceVisible(3827).s0U5Fv);
        let tmp16Result5 = closure_8(tmp2(17055).DebugNote, obj8);
      } else {
        const obj9 = { label: null, value: null, hint: null };
        const intl34 = tmp2(1126).intl;
        obj9.label = intl34.string(traceVisible(3827)["9nqym2"]);
        const tmp2Result = tmp2(17052);
        obj9.value = tmp2Result.formatCount(tmp2(6933).runesFromUsd(lifetime.cost_usd));
        const intl35 = tmp2(1126).intl;
        const obj10 = { count: null };
        const tmp2Result43 = tmp2(6933);
        obj10.count = tmp2(17052).formatCount(lifetime.turns);
        obj9.hint = intl35.formatToPlainString(traceVisible(3827).NCdUIh, obj10);
        const items13 = [closure_8(tmp2(17055).DebugStatRow, obj9), , , ,];
        const intl36 = tmp2(1126).intl;
        const orchestrator = lifetime.orchestrator;
        const tmp2Result44 = tmp2(17052);
        const obj11 = { label: intl36.string(traceVisible(3827).xtxP0e), value: null, hint: null };
        const intl37 = tmp2(1126).intl;
        const obj12 = { count: null };
        const stringResult = intl36.string(traceVisible(3827).xtxP0e);
        const tmp2Result45 = tmp2(17052);
        obj12.count = tmp2Result45.formatCount(tmp2(6933).runeCount(orchestrator));
        obj11.value = intl37.formatToPlainString(traceVisible(3827).yHJxuP, obj12);
        const tmp2Result46 = tmp2(6933);
        const formatCountResult = tmp2(17052).formatCount(orchestrator.input_tokens);
        const tmp2Result47 = tmp2(17052);
        const tmp2Result48 = tmp2(17052);
        const formatCountResult1 = tmp2(17052).formatCount(orchestrator.output_tokens);
        const _HermesInternal4 = HermesInternal;
        obj11.hint =
          "" +
          formatCountResult +
          " in \u00B7 " +
          formatCountResult1 +
          " out \u00B7 " +
          tmp2(17052).formatCount(orchestrator.cache_read_input_tokens) +
          " cache read";
        items13[1] = closure_8(tmp2(17055).DebugStatRow, obj11);
        const intl38 = tmp2(1126).intl;
        const codegen = lifetime.codegen;
        const tmp2Result49 = tmp2(17052);
        const obj13 = { label: intl38.string(traceVisible(3827)["9Sj3SX"]), value: null, hint: null };
        const intl39 = tmp2(1126).intl;
        const obj14 = { count: null };
        const stringResult1 = intl38.string(traceVisible(3827)["9Sj3SX"]);
        const tmp2Result50 = tmp2(17052);
        obj14.count = tmp2Result50.formatCount(tmp2(6933).runeCount(codegen));
        obj13.value = intl39.formatToPlainString(traceVisible(3827).yHJxuP, obj14);
        const tmp2Result51 = tmp2(6933);
        const formatCountResult2 = tmp2(17052).formatCount(codegen.input_tokens);
        const tmp2Result52 = tmp2(17052);
        const tmp2Result53 = tmp2(17052);
        const formatCountResult3 = tmp2(17052).formatCount(codegen.output_tokens);
        const _HermesInternal5 = HermesInternal;
        obj13.hint =
          "" +
          formatCountResult2 +
          " in \u00B7 " +
          formatCountResult3 +
          " out \u00B7 " +
          tmp2(17052).formatCount(codegen.cache_read_input_tokens) +
          " cache read";
        items13[2] = closure_8(tmp2(17055).DebugStatRow, obj13);
        const intl40 = tmp2(1126).intl;
        const tmp2Result54 = tmp2(17052);
        const stringResult2 = intl40.string(traceVisible(3827).ANCEo3);
        const usageOrEmptyResult = tmp2(6933).usageOrEmpty(lifetime.compaction);
        const obj15 = { label: stringResult2, value: null, hint: null };
        const intl41 = tmp2(1126).intl;
        const obj16 = { count: null };
        const tmp2Result55 = tmp2(6933);
        const tmp2Result56 = tmp2(17052);
        obj16.count = tmp2Result56.formatCount(tmp2(6933).runeCount(usageOrEmptyResult));
        obj15.value = intl41.formatToPlainString(traceVisible(3827).yHJxuP, obj16);
        const tmp2Result57 = tmp2(6933);
        const formatCountResult4 = tmp2(17052).formatCount(usageOrEmptyResult.input_tokens);
        const tmp2Result58 = tmp2(17052);
        const tmp2Result59 = tmp2(17052);
        const formatCountResult5 = tmp2(17052).formatCount(usageOrEmptyResult.output_tokens);
        const _HermesInternal6 = HermesInternal;
        obj15.hint =
          "" +
          formatCountResult4 +
          " in \u00B7 " +
          formatCountResult5 +
          " out \u00B7 " +
          tmp2(17052).formatCount(usageOrEmptyResult.cache_read_input_tokens) +
          " cache read";
        items13[3] = closure_8(tmp2(17055).DebugStatRow, obj15);
        let outcomes;
        if (status != null) {
          const agent4 = status.agent;
          if (agent4 != null) {
            outcomes = agent4.outcomes;
          }
        }
        let tmp18Result9 = null;
        if (null != outcomes) {
          const _Object = Object;
          tmp18Result9 = null;
          if (Object.keys(status.agent.outcomes).length > 0) {
            const obj17 = { label: null, value: null };
            const intl2 = tmp2(1126).intl;
            obj17.label = intl2.string(traceVisible(3827).SQHm7C);
            const _Object2 = Object;
            const entries = Object.entries(status.agent.outcomes);
            const sorted = entries.sort((arg0, arg1) => {
              [, tmp] = arg0;
              [, tmp2] = arg1;
              return tmp2 - tmp;
            });
            const mapped = sorted.map((item) => {
              [tmp, tmp2] = item;
              return "" + projectId(dependencyMap[11]).formatCount(tmp2) + " " + tmp;
            });
            obj17.value = mapped.join(" \u00B7 ");
            tmp18Result9 = closure_8(tmp2(17055).DebugStatRow, obj17);
          }
        }
        const obj18 = { children: null };
        items13[4] = tmp18Result9;
        obj18.children = items13;
        tmp16Result5 = closure_9(closure_10, obj18);
        const tmp2Result60 = tmp2(17052);
      }
      obj7.children = tmp16Result5;
      items12[1] = closure_8(tmp2(17055).DebugSection, obj7);
      const obj19 = { title: null, children: null };
      const intl4 = tmp2(1126).intl;
      obj19.title = intl4.string(traceVisible(3827).dZHPE5);
      if (null == stateFromStores) {
        const obj20 = { children: null };
        const intl5 = tmp2(1126).intl;
        obj20.children = intl5.string(traceVisible(3827).DfVjal);
        let tmp18Result10 = closure_8(tmp2(17055).DebugNote, obj20);
      } else {
        const intl42 = tmp2(1126).intl;
        const total = stateFromStores.total;
        const obj21 = { label: intl42.string(traceVisible(3827)["7X3i9d"]), value: null, hint: null };
        const intl43 = tmp2(1126).intl;
        const obj22 = { count: null };
        const stringResult3 = intl42.string(traceVisible(3827)["7X3i9d"]);
        const tmp2Result61 = tmp2(17052);
        obj22.count = tmp2Result61.formatCount(tmp2(6933).runeCount(total));
        obj21.value = intl43.formatToPlainString(traceVisible(3827).yHJxuP, obj22);
        const tmp2Result62 = tmp2(6933);
        const formatCountResult6 = tmp2(17052).formatCount(total.input_tokens);
        const tmp2Result63 = tmp2(17052);
        const tmp2Result64 = tmp2(17052);
        const formatCountResult7 = tmp2(17052).formatCount(total.output_tokens);
        const _HermesInternal7 = HermesInternal;
        obj21.hint =
          "" +
          formatCountResult6 +
          " in \u00B7 " +
          formatCountResult7 +
          " out \u00B7 " +
          tmp2(17052).formatCount(total.cache_read_input_tokens) +
          " cache read";
        const items14 = [closure_8(tmp2(17055).DebugStatRow, obj21)];
        const obj23 = { label: null, value: null };
        const intl44 = tmp2(1126).intl;
        obj23.label = intl44.string(traceVisible(3827)["8OUg09"]);
        let cache_hit_rate = stateFromStores.cache_hit_rate;
        if (cache_hit_rate == null) {
          cache_hit_rate = tmp2(6933).cacheHitRate(stateFromStores.total);
          const tmp2Result66 = tmp2(6933);
        }
        const obj24 = { children: null };
        const _HermesInternal = HermesInternal;
        obj23.value = "" + Math.round(100 * cache_hit_rate) + "%";
        items14[1] = closure_8(tmp2(17055).DebugStatRow, obj23);
        obj24.children = items14;
        tmp18Result10 = closure_9(closure_10, obj24);
        const tmp2Result65 = tmp2(17052);
      }
      obj19.children = tmp18Result10;
      items12[2] = closure_8(tmp2(17055).DebugSection, obj19);
      const obj25 = { title: null, children: null };
      const intl6 = tmp2(1126).intl;
      obj25.title = intl6.string(traceVisible(3827).NbRk9a);
      if (null != stateFromStores1) {
        if (null != promptCeiling) {
          const obj26 = { children: null };
          const obj27 = { label: null, used: null, max: null, formatValue: null };
          const intl9 = tmp2(1126).intl;
          obj27.label = intl9.string(traceVisible(3827).Kw5wiQ);
          obj27.used = stateFromStores1.tokensAfter;
          obj27.max = promptCeiling;
          obj27.formatValue = tmp2(17052).formatCount;
          const items15 = [closure_8(tmp2(17055).DebugMeter, obj27)];
          const obj28 = { label: null, value: null, hint: null };
          const intl10 = tmp2(1126).intl;
          obj28.label = intl10.string(traceVisible(3827).mRbSns);
          const tmp2Result67 = tmp2(17052);
          const formatCountResult8 = tmp2(17052).formatCount(stateFromStores1.tokensBefore);
          const _HermesInternal2 = HermesInternal;
          obj28.value = "" + formatCountResult8 + " \u2192 " + tmp2(17052).formatCount(stateFromStores1.tokensAfter);
          const intl11 = tmp2(1126).intl;
          const obj29 = { count: null, time: null };
          const tmp2Result68 = tmp2(17052);
          obj29.count = tmp2(17052).formatCount(stateFromStores1.retainedMessages);
          const tmp2Result69 = tmp2(17052);
          obj29.time = tmp2(17052).formatObservedAt(stateFromStores1.observedAt);
          obj28.hint = intl11.formatToPlainString(traceVisible(3827).Vq3skS, obj29);
          items15[1] = closure_8(tmp2(17055).DebugStatRow, obj28);
          obj26.children = items15;
          let tmp18Result17 = closure_9(closure_10, obj26);
          const tmp2Result70 = tmp2(17052);
        }
        const items16 = [tmp18Result17, ,];
        let tmp18Result11 = null;
        if (null != stateFromStores2) {
          const obj30 = { label: null, value: null, critical: true, hint: null };
          const intl12 = tmp2(1126).intl;
          obj30.label = intl12.string(traceVisible(3827)["4BX5KK"]);
          const tmp2Result71 = tmp2(17052);
          const formatCountResult9 = tmp2(17052).formatCount(stateFromStores2.projected);
          const _HermesInternal3 = HermesInternal;
          obj30.value = "" + formatCountResult9 + " / " + tmp2(17052).formatCount(stateFromStores2.threshold);
          const intl13 = tmp2(1126).intl;
          const obj31 = { time: null };
          const tmp2Result72 = tmp2(17052);
          obj31.time = tmp2(17052).formatObservedAt(stateFromStores2.observedAt);
          obj30.hint = intl13.formatToPlainString(traceVisible(3827)["6ngCax"], obj31);
          tmp18Result11 = closure_8(tmp2(17055).DebugStatRow, obj30);
          const tmp2Result73 = tmp2(17052);
        }
        items16[1] = tmp18Result11;
        const obj32 = { style: tmp.forceCompaction, children: null };
        const obj33 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
        const intl14 = tmp2(1126).intl;
        obj33.text = intl14.string(traceVisible(3827)["1EiJeb"]);
        obj33.disabled = "pending" === stateFromStores3;
        obj33.onPress = callback;
        const items17 = [closure_8(tmp2(5375).Button, obj33), ,];
        let str9 = "text-muted";
        if (null != tmp15) {
          str9 = "text-muted";
          if ("compacted" !== tmp15.outcome) {
            str9 = "text-feedback-critical";
          }
        }
        const obj34 = {
          variant: "text-xs/normal",
          color: str9,
          children: tmp2(17053).forceCompactionStatus(stateFromStores3),
        };
        items17[1] = closure_8(tmp2(5086).Text, obj34);
        let pendingTurn;
        if (tmp15 != null) {
          pendingTurn = tmp15.pendingTurn;
        }
        let tmp16Result6 = null;
        if (true === pendingTurn) {
          const obj35 = { children: null };
          const obj36 = { variant: "critical-primary", size: "sm", text: null, onPress: null };
          const intl45 = tmp2(1126).intl;
          obj36.text = intl45.string(traceVisible(3827).ZxG2AI);
          obj36.onPress = callback1;
          const items18 = [closure_8(tmp2(5375).Button, obj36)];
          const obj37 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl46 = tmp2(1126).intl;
          obj37.children = intl46.string(traceVisible(3827).V73vdN);
          items18[1] = closure_8(tmp2(5086).Text, obj37);
          obj35.children = items18;
          tmp16Result6 = closure_9(closure_10, obj35);
        }
        items17[2] = tmp16Result6;
        obj32.children = items17;
        items16[2] = closure_9(View, obj32);
        obj25.children = items16;
        items12[3] = closure_9(tmp2(17055).DebugSection, obj25);
        if (traceVisible) {
          items12[4] = null;
          if (null != session) {
            const obj38 = { title: null, children: null };
            const intl18 = tmp2(1126).intl;
            obj38.title = intl18.string(traceVisible(3827).EsSzCS);
            let tmp16Result7 = null;
            if (null != session) {
              const obj39 = { label: null, value: null, hint: null };
              const intl19 = tmp2(1126).intl;
              obj39.label = intl19.string(traceVisible(3827).CLXHAs);
              obj39.value = tmp2(17052).formatObservedAt(session.instance_since);
              const intl20 = tmp2(1126).intl;
              obj39.hint = intl20.string(traceVisible(3827).UCwUEX);
              const items19 = [closure_8(tmp2(17055).DebugStatRow, obj39), , ,];
              const obj40 = { label: null, value: null };
              const intl21 = tmp2(1126).intl;
              obj40.label = intl21.string(traceVisible(3827)["8V8e1Z"]);
              const tmp2Result75 = tmp2(17052);
              obj40.value = tmp2(17052).formatCount(session.sockets);
              items19[1] = closure_8(tmp2(17055).DebugStatRow, obj40);
              const obj41 = { label: null, value: null };
              const intl22 = tmp2(1126).intl;
              obj41.label = intl22.string(traceVisible(3827)["4pBzYW"]);
              const intl23 = tmp2(1126).intl;
              const tmp20Result = traceVisible(3827);
              obj41.value = intl23.string(session.turn_inflight ? tmp20Result.Wv025I : tmp20Result["7/lsFY"]);
              items19[2] = closure_8(tmp2(17055).DebugStatRow, obj41);
              let tmp18Result12 = null;
              if (session.queued_messages > 0) {
                const obj42 = { label: null, value: null };
                const intl24 = tmp2(1126).intl;
                obj42.label = intl24.string(traceVisible(3827)["3oUYnv"]);
                obj42.value = tmp2(17052).formatCount(session.queued_messages);
                tmp18Result12 = closure_8(tmp2(17055).DebugStatRow, obj42);
                const tmp2Result77 = tmp2(17052);
              }
              const obj43 = { children: null };
              items19[3] = tmp18Result12;
              obj43.children = items19;
              tmp16Result7 = closure_9(closure_10, obj43);
              const tmp2Result76 = tmp2(17052);
            }
            const items20 = [tmp16Result7];
            let analytics;
            if (status != null) {
              analytics = status.analytics;
            }
            let tmp18Result13 = null;
            if (null != analytics) {
              const obj44 = { analytics: status.analytics };
              tmp18Result13 = closure_8(tmp2(17071).ConjureDebugAgentAnalyticsRows, obj44);
            }
            items20[1] = tmp18Result13;
            obj38.children = items20;
            let tmp16Result8 = closure_9(tmp2(17055).DebugSection, obj38);
          } else {
            let analytics1;
            if (status != null) {
              analytics1 = status.analytics;
            }
            tmp16Result8 = null;
          }
          items12[5] = tmp16Result8;
          let tmp16Result9 = null;
          if (null != limits) {
            const obj45 = { title: null, children: null };
            const intl25 = tmp2(1126).intl;
            obj45.title = intl25.string(traceVisible(3827)["LEIhp/"]);
            const obj46 = { label: null, value: null };
            const intl26 = tmp2(1126).intl;
            obj46.label = intl26.string(traceVisible(3827).IlDBN3);
            obj46.value = tmp2(17052).formatCount(limits.max_subagent_iterations);
            const items21 = [closure_8(tmp2(17055).DebugStatRow, obj46), , , , ,];
            const obj47 = { label: null, value: null };
            const intl27 = tmp2(1126).intl;
            obj47.label = intl27.string(traceVisible(3827)["ZdzKR+"]);
            const intl28 = tmp2(1126).intl;
            const obj48 = { count: null };
            const tmp2Result78 = tmp2(17052);
            obj48.count = tmp2(17052).formatCount(limits.context_window_tokens);
            obj47.value = intl28.formatToPlainString(traceVisible(3827).yHJxuP, obj48);
            items21[1] = closure_8(tmp2(17055).DebugStatRow, obj47);
            const obj49 = { label: null, value: null };
            const intl29 = tmp2(1126).intl;
            obj49.label = intl29.string(traceVisible(3827).cIhN2W);
            const intl30 = tmp2(1126).intl;
            const obj50 = { count: null };
            const tmp2Result79 = tmp2(17052);
            obj50.count = tmp2(17052).formatCount(limits.per_turn_max_output_tokens);
            obj49.value = intl30.formatToPlainString(traceVisible(3827).yHJxuP, obj50);
            items21[2] = closure_8(tmp2(17055).DebugStatRow, obj49);
            const obj51 = { label: null, value: null };
            const intl31 = tmp2(1126).intl;
            obj51.label = intl31.string(traceVisible(3827)["+fOn/q"]);
            const tmp2Result80 = tmp2(17052);
            obj51.value = tmp2(17052).formatCount(limits.max_user_message_chars);
            items21[3] = closure_8(tmp2(17055).DebugStatRow, obj51);
            const obj52 = { label: null, value: null };
            const intl32 = tmp2(1126).intl;
            obj52.label = intl32.string(traceVisible(3827).kIHga0);
            const tmp2Result81 = tmp2(17052);
            obj52.value = tmp2(17052).formatCount(limits.max_build_attempts);
            items21[4] = closure_8(tmp2(17055).DebugStatRow, obj52);
            const obj53 = { label: null, value: null };
            const intl33 = tmp2(1126).intl;
            obj53.label = intl33.string(traceVisible(3827).Iw03yW);
            const tmp2Result82 = tmp2(17052);
            obj53.value = tmp2(17052).formatCount(limits.max_session_attempts);
            items21[5] = closure_8(tmp2(17055).DebugStatRow, obj53);
            obj45.children = items21;
            tmp16Result9 = closure_9(tmp2(17055).DebugSection, obj45);
            const tmp2Result83 = tmp2(17052);
          }
          items12[6] = tmp16Result9;
          obj6.children = items12;
          return closure_9(View, obj6);
        } else {
          const obj54 = { title: null, children: null };
          const intl15 = tmp2(1126).intl;
          obj54.title = intl15.string(traceVisible(3827).TkTRdW);
          if (0 === stateFromStores4.length) {
            const obj55 = { children: null };
            const intl17 = tmp2(1126).intl;
            obj55.children = intl17.string(traceVisible(3827)["r3/FhI"]);
            let tmp18Result14 = closure_8(tmp2(17055).DebugNote, obj55);
          } else {
            const substr = stateFromStores4.slice(-tmp2(17053).MAX_MODEL_CALL_ROWS);
            const reversed = substr.reverse();
            const items22 = [reversed.map((call) => closure_1_8(closure_1_13, { call }, call.id))];
            let tmp18Result15 = null;
            if (stateFromStores4.length > tmp2(17053).MAX_MODEL_CALL_ROWS) {
              const obj56 = { variant: "text-xs/normal", color: "text-muted", children: null };
              const intl16 = tmp2(1126).intl;
              const obj57 = { shown: tmp2(17053).MAX_MODEL_CALL_ROWS, total: stateFromStores4.length };
              obj56.children = intl16.formatToPlainString(traceVisible(3827)["uZ9P/O"], obj57);
              tmp18Result15 = closure_8(tmp2(5086).Text, obj56);
            }
            const obj58 = { children: null };
            items22[1] = tmp18Result15;
            obj58.children = items22;
            tmp18Result14 = closure_9(closure_10, obj58);
          }
          obj54.children = tmp18Result14;
          closure_8(tmp2(17055).DebugSection, obj54);
        }
        const tmp2Result74 = tmp2(17053);
      }
      if (null != promptCeiling) {
        const intl8 = tmp2(1126).intl;
        const obj59 = { ceiling: tmp2(17052).formatCount(promptCeiling) };
        let formatToPlainStringResult = intl8.formatToPlainString(traceVisible(3827).GMLCNv, obj59);
        const tmp2Result84 = tmp2(17052);
      } else {
        const intl7 = tmp2(1126).intl;
        formatToPlainStringResult = intl7.string(traceVisible(3827).s0U5Fv);
      }
      tmp18Result17 = closure_8(tmp2(17055).DebugNote, { children: formatToPlainStringResult });
      const obj5 = projectId(504);
    };
