// discord_app/modules/conjure/debug/native/ConjureDebugAgentTab.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import conjureDebugConnection from "../conjureDebugConnection.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureChatStore from "../../chat/ConjureChatStore.tsx";
import ConjureDebugStore from "../ConjureDebugStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4969);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 }, forceCompaction: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj2.forceCompaction = { gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureDebugAgentTab(projectId) {
      const cResult = projectId(576).c(102);
      projectId = projectId.projectId;
      ({ status, fetchState, onRefresh } = projectId);
      closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureDebugStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        class S {
          constructor() {
            return closure_7.getLastTurnUsage(projectId);
          }
        }
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = S;
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        class S {
          constructor() {
            return closure_7.getLastTurnUsage(projectId);
          }
        }
        tmp8 = cResult[3];
      }
      const obj = projectId(576);
      const stateFromStores = projectId(504).useStateFromStores(first, S, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_7.getLastTurnUsage(projectId);
          }
        }
        const items2 = [ConjureDebugStore];
        cResult[4] = items2;
        const tmp10 = items2;
      } else {
        class S {
          constructor() {
            return closure_7.getLastTurnUsage(projectId);
          }
        }
      }
      if (cResult[5] !== projectId) {
        class S {
          constructor() {
            return closure_7.getLastTurnUsage(projectId);
          }
        }
        const items3 = [projectId];
        cResult[5] = projectId;
        cResult[6] = tmp13;
        cResult[7] = items3;
        let tmp12 = items3;
      } else {
        class S {
          constructor() {
            return closure_7.getLastTurnUsage(projectId);
          }
        }
        tmp12 = cResult[7];
      }
      const tmpResult = projectId(504);
      const stateFromStores1 = projectId(504).useStateFromStores(tmp10, tmp13, tmp12);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_7.getLastTurnUsage(projectId);
          }
        }
        const items4 = [ConjureDebugStore];
        cResult[8] = items4;
        const tmp15 = items4;
      } else {
        class S {
          constructor() {
            return closure_7.getLastTurnUsage(projectId);
          }
        }
      }
      if (cResult[9] !== projectId) {
        class T {
          constructor() {
            return closure_7.getLastCompactionDecline(projectId);
          }
        }
        const items5 = [projectId];
        cResult[9] = projectId;
        cResult[10] = T;
        cResult[11] = items5;
        let tmp17 = items5;
      } else {
        class T {
          constructor() {
            return closure_7.getLastCompactionDecline(projectId);
          }
        }
        tmp17 = cResult[11];
      }
      const tmpResult6 = projectId(504);
      const stateFromStores2 = projectId(504).useStateFromStores(tmp15, T, tmp17);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return closure_7.getLastCompactionDecline(projectId);
          }
        }
        const items6 = [ConjureDebugStore];
        cResult[12] = items6;
        const tmp19 = items6;
      } else {
        class T {
          constructor() {
            return closure_7.getLastCompactionDecline(projectId);
          }
        }
      }
      if (cResult[13] !== projectId) {
        class I {
          constructor() {
            return closure_7.getForceCompactionState(projectId);
          }
        }
        const items7 = [projectId];
        cResult[13] = projectId;
        cResult[14] = I;
        cResult[15] = items7;
        let tmp21 = items7;
      } else {
        class I {
          constructor() {
            return closure_7.getForceCompactionState(projectId);
          }
        }
        tmp21 = cResult[15];
      }
      const tmpResult7 = projectId(504);
      const stateFromStores3 = projectId(504).useStateFromStores(tmp19, I, tmp21);
      if (cResult[16] !== projectId) {
        class O {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.forceCompaction(projectId);
          }
        }
        cResult[16] = projectId;
        cResult[17] = O;
      } else {
        class O {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.forceCompaction(projectId);
          }
        }
      }
      if (cResult[18] !== projectId) {
        class B {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.forceCompaction(projectId, true);
          }
        }
        cResult[18] = projectId;
        cResult[19] = B;
      } else {
        class B {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.forceCompaction(projectId, true);
          }
        }
      }
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.forceCompaction(projectId, true);
          }
        }
        const items8 = [ConjureDebugStore];
        cResult[20] = items8;
        const tmp25 = items8;
      } else {
        class B {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.forceCompaction(projectId, true);
          }
        }
      }
      if (cResult[21] !== projectId) {
        class L {
          constructor() {
            return closure_7.getSandboxRestartState(projectId);
          }
        }
        const items9 = [projectId];
        cResult[21] = projectId;
        cResult[22] = L;
        cResult[23] = items9;
        let tmp27 = items9;
      } else {
        class L {
          constructor() {
            return closure_7.getSandboxRestartState(projectId);
          }
        }
        tmp27 = cResult[23];
      }
      const tmpResult8 = projectId(504);
      const stateFromStores4 = projectId(504).useStateFromStores(tmp25, L, tmp27);
      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            return closure_7.getSandboxRestartState(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        cResult[24] = items10;
        const tmp29 = items10;
      } else {
        class L {
          constructor() {
            return closure_7.getSandboxRestartState(projectId);
          }
        }
      }
      if (cResult[25] !== projectId) {
        class V {
          constructor() {
            return closure_6.isThinking(projectId);
          }
        }
        const items11 = [projectId];
        cResult[25] = projectId;
        cResult[26] = V;
        cResult[27] = items11;
        let tmp31 = items11;
      } else {
        class V {
          constructor() {
            return closure_6.isThinking(projectId);
          }
        }
        tmp31 = cResult[27];
      }
      const tmpResult9 = projectId(504);
      const stateFromStores5 = projectId(504).useStateFromStores(tmp29, V, tmp31);
      if (cResult[28] !== projectId) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
        cResult[28] = projectId;
        cResult[29] = K;
      } else {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      if (status != null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
        if (tmp35 != null) {
          class K {
            constructor() {
              obj = closure_0(closure_2[16]);
              return obj.restartConjureSandbox(projectId);
            }
          }
        }
      }
      if (undefined == null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      if (status != null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
        if (tmp37 != null) {
          class K {
            constructor() {
              obj = closure_0(closure_2[16]);
              return obj.restartConjureSandbox(projectId);
            }
          }
        }
      }
      if (undefined == null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      if (status != null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
        if (tmp39 != null) {
          class K {
            constructor() {
              obj = closure_0(closure_2[16]);
              return obj.restartConjureSandbox(projectId);
            }
          }
        }
      }
      if (undefined == null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      let tmp40;
      if (stateFromStores1 != null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      if (tmp40 == null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
        if (tmp36 != null) {
          class K {
            constructor() {
              obj = closure_0(closure_2[16]);
              return obj.restartConjureSandbox(projectId);
            }
          }
        }
        tmp40 = tmp41;
      }
      if (tmp40 == null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      if (typeof stateFromStores3 === "object") {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      if (status != null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      if (undefined == null) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      if (cResult[30] === fetchState) {
        class K {
          constructor() {
            obj = closure_0(closure_2[16]);
            return obj.restartConjureSandbox(projectId);
          }
        }
      }
      const tmpResult10 = projectId(504);
      cResult[30] = fetchState;
      cResult[31] = onRefresh;
      cResult[32] = undefined;
      cResult[33] = closure_8(projectId(12486).DebugSnapshotToolbar, { generatedAt: undefined, fetchState, onRefresh });
      const tmp43 = closure_8(projectId(12486).DebugSnapshotToolbar, { generatedAt: undefined, fetchState, onRefresh });
    }
  : function ConjureDebugAgentTab(projectId) {
      projectId = projectId.projectId;
      const status = projectId.status;
      ({ fetchState, onRefresh } = projectId);
      const tmp = closure_11();
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
      const items8 = [projectId];
      const items9 = [projectId];
      const callback = noop.useCallback(() => conjureDebugConnection.forceCompaction(projectId), items8);
      const callback1 = noop.useCallback(() => conjureDebugConnection.forceCompaction(projectId, true), items9);
      const obj4 = projectId(504);
      const items10 = [ConjureDebugStore];
      const items11 = [projectId];
      const stateFromStores4 = projectId(504).useStateFromStores(
        items10,
        () => ConjureDebugStore.getSandboxRestartState(projectId),
        items11,
      );
      const obj5 = projectId(504);
      const items12 = [ConjureChatStore];
      const items13 = [projectId];
      const items14 = [projectId];
      const stateFromStores5 = projectId(504).useStateFromStores(
        items12,
        () => ConjureChatStore.isThinking(projectId),
        items13,
      );
      let lifetime;
      const callback2 = noop.useCallback(() => conjureDebugConnection.restartConjureSandbox(projectId), items14);
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
      let tmp18 = null;
      if (typeof stateFromStores3 === "object") {
        tmp18 = stateFromStores3;
      }
      const obj7 = { style: tmp.tab, children: null };
      let generated_at;
      if (status != null) {
        generated_at = status.generated_at;
      }
      if (generated_at == null) {
        generated_at = null;
      }
      const items15 = [
        closure_8(tmp2(12486).DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }),
        ,
        ,
        ,
        ,
        ,
      ];
      const obj8 = { title: null, children: null };
      const intl = tmp2(1128).intl;
      obj8.title = intl.string(_modDef3830.JghNal);
      if (null == lifetime) {
        const obj9 = { children: null };
        const intl3 = tmp2(1128).intl;
        obj9.children = intl3.string(_modDef3830.s0U5Fv);
        let tmp19Result5 = closure_8(tmp2(12486).DebugNote, obj9);
      } else {
        const obj10 = { label: null, value: null, hint: null };
        const intl32 = tmp2(1128).intl;
        obj10.label = intl32.string(_modDef3830["9nqym2"]);
        const tmp2Result = tmp2(12484);
        obj10.value = tmp2Result.formatCount(tmp2(10676).runesFromUsd(lifetime.cost_usd));
        const intl33 = tmp2(1128).intl;
        const obj11 = { count: null };
        const tmp2Result44 = tmp2(10676);
        obj11.count = tmp2(12484).formatCount(lifetime.turns);
        obj10.hint = intl33.formatToPlainString(_modDef3830.NCdUIh, obj11);
        const items16 = [closure_8(tmp2(12486).DebugStatRow, obj10), , , ,];
        const intl34 = tmp2(1128).intl;
        const orchestrator = lifetime.orchestrator;
        const tmp2Result45 = tmp2(12484);
        const obj12 = { label: intl34.string(_modDef3830.xtxP0e), value: null, hint: null };
        const intl35 = tmp2(1128).intl;
        const obj13 = { count: null };
        const stringResult = intl34.string(_modDef3830.xtxP0e);
        const tmp2Result46 = tmp2(12484);
        obj13.count = tmp2Result46.formatCount(tmp2(10676).runeCount(orchestrator));
        obj12.value = intl35.formatToPlainString(_modDef3830.yHJxuP, obj13);
        const tmp2Result47 = tmp2(10676);
        const formatCountResult = tmp2(12484).formatCount(orchestrator.input_tokens);
        const tmp2Result48 = tmp2(12484);
        const tmp2Result49 = tmp2(12484);
        const formatCountResult1 = tmp2(12484).formatCount(orchestrator.output_tokens);
        const _HermesInternal4 = HermesInternal;
        obj12.hint =
          "" +
          formatCountResult +
          " in \u00B7 " +
          formatCountResult1 +
          " out \u00B7 " +
          tmp2(12484).formatCount(orchestrator.cache_read_input_tokens) +
          " cache read";
        items16[1] = closure_8(tmp2(12486).DebugStatRow, obj12);
        const intl36 = tmp2(1128).intl;
        const codegen = lifetime.codegen;
        const tmp2Result50 = tmp2(12484);
        const obj14 = { label: intl36.string(_modDef3830["9Sj3SX"]), value: null, hint: null };
        const intl37 = tmp2(1128).intl;
        const obj15 = { count: null };
        const stringResult1 = intl36.string(_modDef3830["9Sj3SX"]);
        const tmp2Result51 = tmp2(12484);
        obj15.count = tmp2Result51.formatCount(tmp2(10676).runeCount(codegen));
        obj14.value = intl37.formatToPlainString(_modDef3830.yHJxuP, obj15);
        const tmp2Result52 = tmp2(10676);
        const formatCountResult2 = tmp2(12484).formatCount(codegen.input_tokens);
        const tmp2Result53 = tmp2(12484);
        const tmp2Result54 = tmp2(12484);
        const formatCountResult3 = tmp2(12484).formatCount(codegen.output_tokens);
        const _HermesInternal5 = HermesInternal;
        obj14.hint =
          "" +
          formatCountResult2 +
          " in \u00B7 " +
          formatCountResult3 +
          " out \u00B7 " +
          tmp2(12484).formatCount(codegen.cache_read_input_tokens) +
          " cache read";
        items16[2] = closure_8(tmp2(12486).DebugStatRow, obj14);
        const intl38 = tmp2(1128).intl;
        const tmp2Result55 = tmp2(12484);
        const stringResult2 = intl38.string(_modDef3830.ANCEo3);
        const usageOrEmptyResult = tmp2(10676).usageOrEmpty(lifetime.compaction);
        const obj16 = { label: stringResult2, value: null, hint: null };
        const intl39 = tmp2(1128).intl;
        const obj17 = { count: null };
        const tmp2Result56 = tmp2(10676);
        const tmp2Result57 = tmp2(12484);
        obj17.count = tmp2Result57.formatCount(tmp2(10676).runeCount(usageOrEmptyResult));
        obj16.value = intl39.formatToPlainString(_modDef3830.yHJxuP, obj17);
        const tmp2Result58 = tmp2(10676);
        const formatCountResult4 = tmp2(12484).formatCount(usageOrEmptyResult.input_tokens);
        const tmp2Result59 = tmp2(12484);
        const tmp2Result60 = tmp2(12484);
        const formatCountResult5 = tmp2(12484).formatCount(usageOrEmptyResult.output_tokens);
        const _HermesInternal6 = HermesInternal;
        obj16.hint =
          "" +
          formatCountResult4 +
          " in \u00B7 " +
          formatCountResult5 +
          " out \u00B7 " +
          tmp2(12484).formatCount(usageOrEmptyResult.cache_read_input_tokens) +
          " cache read";
        items16[3] = closure_8(tmp2(12486).DebugStatRow, obj16);
        let outcomes;
        if (status != null) {
          const agent4 = status.agent;
          if (agent4 != null) {
            outcomes = agent4.outcomes;
          }
        }
        let tmp21Result6 = null;
        if (null != outcomes) {
          const _Object = Object;
          tmp21Result6 = null;
          if (Object.keys(status.agent.outcomes).length > 0) {
            const obj18 = { label: null, value: null };
            const intl2 = tmp2(1128).intl;
            obj18.label = intl2.string(_modDef3830.SQHm7C);
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
            obj18.value = mapped.join(" \u00B7 ");
            tmp21Result6 = closure_8(tmp2(12486).DebugStatRow, obj18);
          }
        }
        const obj19 = { children: null };
        items16[4] = tmp21Result6;
        obj19.children = items16;
        tmp19Result5 = closure_10(closure_9, obj19);
        const tmp2Result61 = tmp2(12484);
      }
      obj8.children = tmp19Result5;
      items15[1] = closure_8(tmp2(12486).DebugSection, obj8);
      const obj20 = { title: null, children: null };
      const intl4 = tmp2(1128).intl;
      obj20.title = intl4.string(_modDef3830.dZHPE5);
      if (null == stateFromStores) {
        const obj21 = { children: null };
        const intl5 = tmp2(1128).intl;
        obj21.children = intl5.string(_modDef3830.DfVjal);
        let tmp21Result7 = closure_8(tmp2(12486).DebugNote, obj21);
      } else {
        const intl40 = tmp2(1128).intl;
        const total = stateFromStores.total;
        const obj22 = { label: intl40.string(_modDef3830["7X3i9d"]), value: null, hint: null };
        const intl41 = tmp2(1128).intl;
        const obj23 = { count: null };
        const stringResult3 = intl40.string(_modDef3830["7X3i9d"]);
        const tmp2Result62 = tmp2(12484);
        obj23.count = tmp2Result62.formatCount(tmp2(10676).runeCount(total));
        obj22.value = intl41.formatToPlainString(_modDef3830.yHJxuP, obj23);
        const tmp2Result63 = tmp2(10676);
        const formatCountResult6 = tmp2(12484).formatCount(total.input_tokens);
        const tmp2Result64 = tmp2(12484);
        const tmp2Result65 = tmp2(12484);
        const formatCountResult7 = tmp2(12484).formatCount(total.output_tokens);
        const _HermesInternal7 = HermesInternal;
        obj22.hint =
          "" +
          formatCountResult6 +
          " in \u00B7 " +
          formatCountResult7 +
          " out \u00B7 " +
          tmp2(12484).formatCount(total.cache_read_input_tokens) +
          " cache read";
        const items17 = [closure_8(tmp2(12486).DebugStatRow, obj22)];
        const obj24 = { label: null, value: null };
        const intl42 = tmp2(1128).intl;
        obj24.label = intl42.string(_modDef3830["8OUg09"]);
        let cache_hit_rate = stateFromStores.cache_hit_rate;
        if (cache_hit_rate == null) {
          cache_hit_rate = tmp2(10676).cacheHitRate(stateFromStores.total);
          const tmp2Result67 = tmp2(10676);
        }
        const obj25 = { children: null };
        const _HermesInternal = HermesInternal;
        obj24.value = "" + Math.round(100 * cache_hit_rate) + "%";
        items17[1] = closure_8(tmp2(12486).DebugStatRow, obj24);
        obj25.children = items17;
        tmp21Result7 = closure_10(closure_9, obj25);
        const tmp2Result66 = tmp2(12484);
      }
      obj20.children = tmp21Result7;
      items15[2] = closure_8(tmp2(12486).DebugSection, obj20);
      const obj26 = { title: null, children: null };
      const intl6 = tmp2(1128).intl;
      obj26.title = intl6.string(_modDef3830.NbRk9a);
      if (null != stateFromStores1) {
        if (null != promptCeiling) {
          const obj27 = { children: null };
          const obj28 = { label: null, used: null, max: null, formatValue: null };
          const intl9 = tmp2(1128).intl;
          obj28.label = intl9.string(_modDef3830.Kw5wiQ);
          obj28.used = stateFromStores1.tokensAfter;
          obj28.max = promptCeiling;
          obj28.formatValue = tmp2(12484).formatCount;
          const items18 = [closure_8(tmp2(12486).DebugMeter, obj28)];
          const obj29 = { label: null, value: null, hint: null };
          const intl10 = tmp2(1128).intl;
          obj29.label = intl10.string(_modDef3830.mRbSns);
          const tmp2Result68 = tmp2(12484);
          const formatCountResult8 = tmp2(12484).formatCount(stateFromStores1.tokensBefore);
          const _HermesInternal2 = HermesInternal;
          obj29.value = "" + formatCountResult8 + " \u2192 " + tmp2(12484).formatCount(stateFromStores1.tokensAfter);
          const intl11 = tmp2(1128).intl;
          const obj30 = { count: null, time: null };
          const tmp2Result69 = tmp2(12484);
          obj30.count = tmp2(12484).formatCount(stateFromStores1.retainedMessages);
          const tmp2Result70 = tmp2(12484);
          obj30.time = tmp2(12484).formatObservedAt(stateFromStores1.observedAt);
          obj29.hint = intl11.formatToPlainString(_modDef3830.Vq3skS, obj30);
          items18[1] = closure_8(tmp2(12486).DebugStatRow, obj29);
          obj27.children = items18;
          let tmp21Result11 = closure_10(closure_9, obj27);
          const tmp2Result71 = tmp2(12484);
        }
        const items19 = [tmp21Result11, , , ,];
        let tmp21Result8 = null;
        if (null != stateFromStores2) {
          const obj31 = { label: null, value: null, critical: true, hint: null };
          const intl12 = tmp2(1128).intl;
          obj31.label = intl12.string(_modDef3830["4BX5KK"]);
          const tmp2Result72 = tmp2(12484);
          const formatCountResult9 = tmp2(12484).formatCount(stateFromStores2.projected);
          const _HermesInternal3 = HermesInternal;
          obj31.value = "" + formatCountResult9 + " / " + tmp2(12484).formatCount(stateFromStores2.threshold);
          const intl13 = tmp2(1128).intl;
          const obj32 = { time: null };
          const tmp2Result73 = tmp2(12484);
          obj32.time = tmp2(12484).formatObservedAt(stateFromStores2.observedAt);
          obj31.hint = intl13.formatToPlainString(_modDef3830["6ngCax"], obj32);
          tmp21Result8 = closure_8(tmp2(12486).DebugStatRow, obj31);
          const tmp2Result74 = tmp2(12484);
        }
        items19[1] = tmp21Result8;
        const obj33 = { style: tmp.forceCompaction, children: null };
        const obj34 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
        const intl14 = tmp2(1128).intl;
        obj34.text = intl14.string(_modDef3830["1EiJeb"]);
        obj34.disabled = "pending" === stateFromStores3;
        obj34.onPress = callback;
        const items20 = [closure_8(tmp2(5230).Button, obj34), ,];
        let str9 = "text-muted";
        if (null != tmp18) {
          str9 = "text-muted";
          if ("compacted" !== tmp18.outcome) {
            str9 = "text-feedback-critical";
          }
        }
        const obj35 = {
          variant: "text-xs/normal",
          color: str9,
          children: tmp2(12483).forceCompactionStatus(stateFromStores3),
        };
        items20[1] = closure_8(tmp2(5220).Text, obj35);
        let pendingTurn;
        if (tmp18 != null) {
          pendingTurn = tmp18.pendingTurn;
        }
        let tmp19Result6 = null;
        if (true === pendingTurn) {
          const obj36 = { children: null };
          const obj37 = { variant: "critical-primary", size: "sm", text: null, onPress: null };
          const intl43 = tmp2(1128).intl;
          obj37.text = intl43.string(_modDef3830.ZxG2AI);
          obj37.onPress = callback1;
          const items21 = [closure_8(tmp2(5230).Button, obj37)];
          const obj38 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl44 = tmp2(1128).intl;
          obj38.children = intl44.string(_modDef3830.V73vdN);
          items21[1] = closure_8(tmp2(5220).Text, obj38);
          obj36.children = items21;
          tmp19Result6 = closure_10(closure_9, obj36);
        }
        items20[2] = tmp19Result6;
        obj33.children = items20;
        items19[2] = closure_10(View, obj33);
        const obj39 = { style: tmp.forceCompaction, children: null };
        const obj40 = { variant: "secondary", size: "sm", text: null, loading: null, disabled: null, onPress: null };
        const intl15 = tmp2(1128).intl;
        obj40.text = intl15.string(_modDef3830["5qCjBu"]);
        let tmp38 = "pending" === stateFromStores4;
        obj40.loading = tmp38;
        if (!tmp38) {
          tmp38 = stateFromStores5;
        }
        obj40.disabled = tmp38;
        obj40.onPress = callback2;
        const items22 = [closure_8(tmp2(5230).Button, obj40)];
        let str11 = "text-muted";
        if (typeof stateFromStores4 === "object") {
          str11 = "text-muted";
          if ("restarted" !== stateFromStores4.outcome) {
            str11 = "text-feedback-critical";
          }
        }
        const obj41 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str11, children: null };
        const tmp2Result75 = tmp2(12483);
        obj41.children = tmp2(12483).sandboxRestartStatus(stateFromStores4);
        items22[1] = closure_8(tmp2(5220).Text, obj41);
        obj39.children = items22;
        items19[3] = closure_10(View, obj39);
        const obj42 = { projectId };
        items19[4] = closure_8(tmp2(12490).ConjureDebugRestartAgent, obj42);
        obj26.children = items19;
        items15[3] = closure_10(tmp2(12486).DebugSection, obj26);
        const obj43 = { projectId };
        items15[4] = closure_8(tmp2(12490).ConjureDebugGitSection, obj43);
        if (null != session) {
          const obj44 = { title: null, children: null };
          const intl16 = tmp2(1128).intl;
          obj44.title = intl16.string(_modDef3830.EsSzCS);
          let tmp19Result7 = null;
          if (null != session) {
            const obj45 = { label: null, value: null, hint: null };
            const intl17 = tmp2(1128).intl;
            obj45.label = intl17.string(_modDef3830.CLXHAs);
            obj45.value = tmp2(12484).formatObservedAt(session.instance_since);
            const intl18 = tmp2(1128).intl;
            obj45.hint = intl18.string(_modDef3830.UCwUEX);
            const items23 = [closure_8(tmp2(12486).DebugStatRow, obj45), , ,];
            const obj46 = { label: null, value: null };
            const intl19 = tmp2(1128).intl;
            obj46.label = intl19.string(_modDef3830["8V8e1Z"]);
            const tmp2Result77 = tmp2(12484);
            obj46.value = tmp2(12484).formatCount(session.sockets);
            items23[1] = closure_8(tmp2(12486).DebugStatRow, obj46);
            const obj47 = { label: null, value: null };
            const intl20 = tmp2(1128).intl;
            obj47.label = intl20.string(_modDef3830["4pBzYW"]);
            const intl21 = tmp2(1128).intl;
            const tmp23Result = _modDef3830;
            obj47.value = intl21.string(session.turn_inflight ? tmp23Result.Wv025I : tmp23Result["7/lsFY"]);
            items23[2] = closure_8(tmp2(12486).DebugStatRow, obj47);
            let tmp21Result9 = null;
            if (session.queued_messages > 0) {
              const obj48 = { label: null, value: null };
              const intl22 = tmp2(1128).intl;
              obj48.label = intl22.string(_modDef3830["3oUYnv"]);
              obj48.value = tmp2(12484).formatCount(session.queued_messages);
              tmp21Result9 = closure_8(tmp2(12486).DebugStatRow, obj48);
              const tmp2Result79 = tmp2(12484);
            }
            const obj49 = { children: null };
            items23[3] = tmp21Result9;
            obj49.children = items23;
            tmp19Result7 = closure_10(closure_9, obj49);
            const tmp2Result78 = tmp2(12484);
          }
          const items24 = [tmp19Result7];
          let analytics;
          if (status != null) {
            analytics = status.analytics;
          }
          let tmp21Result10 = null;
          if (null != analytics) {
            const obj50 = { analytics: status.analytics };
            tmp21Result10 = closure_8(tmp2(12488).ConjureDebugAgentAnalyticsRows, obj50);
          }
          items24[1] = tmp21Result10;
          obj44.children = items24;
          let tmp19Result8 = closure_10(tmp2(12486).DebugSection, obj44);
        } else {
          let analytics1;
          if (status != null) {
            analytics1 = status.analytics;
          }
          tmp19Result8 = null;
        }
        items15[5] = tmp19Result8;
        let tmp19Result9 = null;
        if (null != limits) {
          const obj51 = { title: null, children: null };
          const intl23 = tmp2(1128).intl;
          obj51.title = intl23.string(_modDef3830["LEIhp/"]);
          const obj52 = { label: null, value: null };
          const intl24 = tmp2(1128).intl;
          obj52.label = intl24.string(_modDef3830.IlDBN3);
          obj52.value = tmp2(12484).formatCount(limits.max_subagent_iterations);
          const items25 = [closure_8(tmp2(12486).DebugStatRow, obj52), , , , ,];
          const obj53 = { label: null, value: null };
          const intl25 = tmp2(1128).intl;
          obj53.label = intl25.string(_modDef3830["ZdzKR+"]);
          const intl26 = tmp2(1128).intl;
          const obj54 = { count: null };
          const tmp2Result80 = tmp2(12484);
          obj54.count = tmp2(12484).formatCount(limits.context_window_tokens);
          obj53.value = intl26.formatToPlainString(_modDef3830.yHJxuP, obj54);
          items25[1] = closure_8(tmp2(12486).DebugStatRow, obj53);
          const obj55 = { label: null, value: null };
          const intl27 = tmp2(1128).intl;
          obj55.label = intl27.string(_modDef3830.cIhN2W);
          const intl28 = tmp2(1128).intl;
          const obj56 = { count: null };
          const tmp2Result81 = tmp2(12484);
          obj56.count = tmp2(12484).formatCount(limits.per_turn_max_output_tokens);
          obj55.value = intl28.formatToPlainString(_modDef3830.yHJxuP, obj56);
          items25[2] = closure_8(tmp2(12486).DebugStatRow, obj55);
          const obj57 = { label: null, value: null };
          const intl29 = tmp2(1128).intl;
          obj57.label = intl29.string(_modDef3830["+fOn/q"]);
          const tmp2Result82 = tmp2(12484);
          obj57.value = tmp2(12484).formatCount(limits.max_user_message_chars);
          items25[3] = closure_8(tmp2(12486).DebugStatRow, obj57);
          const obj58 = { label: null, value: null };
          const intl30 = tmp2(1128).intl;
          obj58.label = intl30.string(_modDef3830.kIHga0);
          const tmp2Result83 = tmp2(12484);
          obj58.value = tmp2(12484).formatCount(limits.max_build_attempts);
          items25[4] = closure_8(tmp2(12486).DebugStatRow, obj58);
          const obj59 = { label: null, value: null };
          const intl31 = tmp2(1128).intl;
          obj59.label = intl31.string(_modDef3830.Iw03yW);
          const tmp2Result84 = tmp2(12484);
          obj59.value = tmp2(12484).formatCount(limits.max_session_attempts);
          items25[5] = closure_8(tmp2(12486).DebugStatRow, obj59);
          obj51.children = items25;
          tmp19Result9 = closure_10(tmp2(12486).DebugSection, obj51);
          const tmp2Result85 = tmp2(12484);
        }
        items15[6] = tmp19Result9;
        obj7.children = items15;
        return closure_10(View, obj7);
      }
      if (null != promptCeiling) {
        const intl8 = tmp2(1128).intl;
        const obj60 = { ceiling: tmp2(12484).formatCount(promptCeiling) };
        let formatToPlainStringResult = intl8.formatToPlainString(_modDef3830.GMLCNv, obj60);
        const tmp2Result86 = tmp2(12484);
      } else {
        const intl7 = tmp2(1128).intl;
        formatToPlainStringResult = intl7.string(_modDef3830.s0U5Fv);
      }
      tmp21Result11 = closure_8(tmp2(12486).DebugNote, { children: formatToPlainStringResult });
      const obj6 = projectId(504);
    };
