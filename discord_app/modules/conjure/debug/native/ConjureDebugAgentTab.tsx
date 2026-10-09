// === Module 17222: ConjureDebugAgentTab ===

// Module 17222 (ConjureDebugAgentTab)
import nativeDefault from "native" /* 587 */;
import _modDef3827 from "module_3827" /* 3827 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureDebugStore from "ConjureDebugStore" /* 13165 */;

const require = fn;
const View = fn(17).View;
const forceCompaction = fn(13164).forceCompaction;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 }, forceCompaction: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj2.forceCompaction = { gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureDebugAgentTab(projectId) {
  const cResult = projectId(576).c(71);
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
    class P {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    const items5 = [projectId];
    cResult[9] = projectId;
    cResult[10] = P;
    cResult[11] = items5;
    let tmp17 = items5;
  } else {
    class P {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    tmp17 = cResult[11];
  }
  const tmpResult4 = projectId(504);
  const stateFromStores2 = projectId(504).useStateFromStores(tmp15, P, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
    const items6 = [ConjureDebugStore];
    cResult[12] = items6;
    const tmp19 = items6;
  } else {
    class P {
      constructor() {
        return closure_7.getLastCompactionDecline(projectId);
      }
    }
  }
  if (cResult[13] !== projectId) {
    class F {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
    const items7 = [projectId];
    cResult[13] = projectId;
    cResult[14] = F;
    cResult[15] = items7;
    let tmp21 = items7;
  } else {
    class F {
      constructor() {
        return closure_7.getForceCompactionState(projectId);
      }
    }
    tmp21 = cResult[15];
  }
  const tmpResult5 = projectId(504);
  const stateFromStores3 = projectId(504).useStateFromStores(tmp19, F, tmp21);
  if (cResult[16] !== projectId) {
    class O {
      constructor() {
        return forceCompaction(projectId);
      }
    }
    cResult[16] = projectId;
    cResult[17] = O;
  } else {
    class O {
      constructor() {
        return forceCompaction(projectId);
      }
    }
  }
  if (cResult[18] !== projectId) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    cResult[18] = projectId;
    cResult[19] = E;
  } else {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (status != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    if (tmp26 != null) {
      class E {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
  }
  if (undefined == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (status != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    if (tmp28 != null) {
      class E {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
  }
  if (undefined == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (status != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    if (tmp30 != null) {
      class E {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
  }
  if (undefined == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  let tmp31;
  if (stateFromStores1 != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (tmp31 == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
    if (tmp27 != null) {
      class E {
        constructor() {
          return forceCompaction(projectId, true);
        }
      }
    }
    tmp31 = tmp32;
  }
  if (tmp31 == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (typeof stateFromStores3 === "object") {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (status != null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (undefined == null) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  if (cResult[20] === fetchState) {
    class E {
      constructor() {
        return forceCompaction(projectId, true);
      }
    }
  }
  const tmpResult6 = projectId(504);
  cResult[20] = fetchState;
  cResult[21] = onRefresh;
  cResult[22] = undefined;
  cResult[23] = closure_8(projectId(17210).DebugSnapshotToolbar, { generatedAt: undefined, fetchState, onRefresh });
  const tmp34 = closure_8(projectId(17210).DebugSnapshotToolbar, { generatedAt: undefined, fetchState, onRefresh });
}) : (function ConjureDebugAgentTab(projectId) {
  projectId = projectId.projectId;
  const status = projectId.status;
  ({ fetchState, onRefresh } = projectId);
  const tmp = closure_11();
  const tmp2 = projectId;
  const items = [ConjureDebugStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => ConjureDebugStore.getLastTurnUsage(projectId), items1);
  const obj = projectId(504);
  const items2 = [ConjureDebugStore];
  const items3 = [projectId];
  const stateFromStores1 = projectId(504).useStateFromStores(items2, () => ConjureDebugStore.getLastCompaction(projectId), items3);
  const obj2 = projectId(504);
  const items4 = [ConjureDebugStore];
  const items5 = [projectId];
  const stateFromStores2 = projectId(504).useStateFromStores(items4, () => ConjureDebugStore.getLastCompactionDecline(projectId), items5);
  const obj3 = projectId(504);
  const items6 = [ConjureDebugStore];
  const items7 = [projectId];
  const stateFromStores3 = projectId(504).useStateFromStores(items6, () => ConjureDebugStore.getForceCompactionState(projectId), items7);
  const items8 = [projectId];
  const items9 = [projectId];
  const callback = noop.useCallback(() => forceCompaction(projectId), items8);
  let lifetime;
  const callback1 = noop.useCallback(() => forceCompaction(projectId, true), items9);
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
  const obj5 = { style: tmp.tab, children: null };
  let generated_at;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items10 = [closure_8(tmp2(17210).DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , ];
  const obj6 = { title: null, children: null };
  const intl = tmp2(1126).intl;
  obj6.title = intl.string(_modDef3827.JghNal);
  if (null == lifetime) {
    const obj7 = { children: null };
    const intl3 = tmp2(1126).intl;
    obj7.children = intl3.string(_modDef3827.s0U5Fv);
    let tmp16Result5 = closure_8(tmp2(17210).DebugNote, obj7);
  } else {
    const obj8 = { label: null, value: null, hint: null };
    const intl31 = tmp2(1126).intl;
    obj8.label = intl31.string(_modDef3827["9nqym2"]);
    const tmp2Result = tmp2(17207);
    obj8.value = tmp2Result.formatCount(tmp2(6940).runesFromUsd(lifetime.cost_usd));
    const intl32 = tmp2(1126).intl;
    const obj9 = { count: null };
    const tmp2Result43 = tmp2(6940);
    obj9.count = tmp2(17207).formatCount(lifetime.turns);
    obj8.hint = intl32.formatToPlainString(_modDef3827.NCdUIh, obj9);
    const items11 = [closure_8(tmp2(17210).DebugStatRow, obj8), , , , ];
    const intl33 = tmp2(1126).intl;
    const orchestrator = lifetime.orchestrator;
    const tmp2Result44 = tmp2(17207);
    const obj10 = { label: intl33.string(_modDef3827.xtxP0e), value: null, hint: null };
    const intl34 = tmp2(1126).intl;
    const obj11 = { count: null };
    const stringResult = intl33.string(_modDef3827.xtxP0e);
    const tmp2Result45 = tmp2(17207);
    obj11.count = tmp2Result45.formatCount(tmp2(6940).runeCount(orchestrator));
    obj10.value = intl34.formatToPlainString(_modDef3827.yHJxuP, obj11);
    const tmp2Result46 = tmp2(6940);
    const formatCountResult = tmp2(17207).formatCount(orchestrator.input_tokens);
    const tmp2Result47 = tmp2(17207);
    const tmp2Result48 = tmp2(17207);
    const formatCountResult1 = tmp2(17207).formatCount(orchestrator.output_tokens);
    const _HermesInternal4 = HermesInternal;
    obj10.hint = "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + tmp2(17207).formatCount(orchestrator.cache_read_input_tokens) + " cache read";
    items11[1] = closure_8(tmp2(17210).DebugStatRow, obj10);
    const intl35 = tmp2(1126).intl;
    const codegen = lifetime.codegen;
    const tmp2Result49 = tmp2(17207);
    const obj12 = { label: intl35.string(_modDef3827["9Sj3SX"]), value: null, hint: null };
    const intl36 = tmp2(1126).intl;
    const obj13 = { count: null };
    const stringResult1 = intl35.string(_modDef3827["9Sj3SX"]);
    const tmp2Result50 = tmp2(17207);
    obj13.count = tmp2Result50.formatCount(tmp2(6940).runeCount(codegen));
    obj12.value = intl36.formatToPlainString(_modDef3827.yHJxuP, obj13);
    const tmp2Result51 = tmp2(6940);
    const formatCountResult2 = tmp2(17207).formatCount(codegen.input_tokens);
    const tmp2Result52 = tmp2(17207);
    const tmp2Result53 = tmp2(17207);
    const formatCountResult3 = tmp2(17207).formatCount(codegen.output_tokens);
    const _HermesInternal5 = HermesInternal;
    obj12.hint = "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + tmp2(17207).formatCount(codegen.cache_read_input_tokens) + " cache read";
    items11[2] = closure_8(tmp2(17210).DebugStatRow, obj12);
    const intl37 = tmp2(1126).intl;
    const tmp2Result54 = tmp2(17207);
    const stringResult2 = intl37.string(_modDef3827.ANCEo3);
    const usageOrEmptyResult = tmp2(6940).usageOrEmpty(lifetime.compaction);
    const obj14 = { label: stringResult2, value: null, hint: null };
    const intl38 = tmp2(1126).intl;
    const obj15 = { count: null };
    const tmp2Result55 = tmp2(6940);
    const tmp2Result56 = tmp2(17207);
    obj15.count = tmp2Result56.formatCount(tmp2(6940).runeCount(usageOrEmptyResult));
    obj14.value = intl38.formatToPlainString(_modDef3827.yHJxuP, obj15);
    const tmp2Result57 = tmp2(6940);
    const formatCountResult4 = tmp2(17207).formatCount(usageOrEmptyResult.input_tokens);
    const tmp2Result58 = tmp2(17207);
    const tmp2Result59 = tmp2(17207);
    const formatCountResult5 = tmp2(17207).formatCount(usageOrEmptyResult.output_tokens);
    const _HermesInternal6 = HermesInternal;
    obj14.hint = "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + tmp2(17207).formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read";
    items11[3] = closure_8(tmp2(17210).DebugStatRow, obj14);
    let outcomes;
    if (status != null) {
      const agent4 = status.agent;
      if (agent4 != null) {
        outcomes = agent4.outcomes;
      }
    }
    let tmp18Result6 = null;
    if (null != outcomes) {
      const _Object = Object;
      tmp18Result6 = null;
      if (Object.keys(status.agent.outcomes).length > 0) {
        const obj16 = { label: null, value: null };
        const intl2 = tmp2(1126).intl;
        obj16.label = intl2.string(_modDef3827.SQHm7C);
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
        obj16.value = mapped.join(" \u00B7 ");
        tmp18Result6 = closure_8(tmp2(17210).DebugStatRow, obj16);
      }
    }
    const obj17 = { children: null };
    items11[4] = tmp18Result6;
    obj17.children = items11;
    tmp16Result5 = closure_10(closure_9, obj17);
    const tmp2Result60 = tmp2(17207);
  }
  obj6.children = tmp16Result5;
  items10[1] = closure_8(tmp2(17210).DebugSection, obj6);
  const obj18 = { title: null, children: null };
  const intl4 = tmp2(1126).intl;
  obj18.title = intl4.string(_modDef3827.dZHPE5);
  if (null == stateFromStores) {
    const obj19 = { children: null };
    const intl5 = tmp2(1126).intl;
    obj19.children = intl5.string(_modDef3827.DfVjal);
    let tmp18Result7 = closure_8(tmp2(17210).DebugNote, obj19);
  } else {
    const intl39 = tmp2(1126).intl;
    const total = stateFromStores.total;
    const obj20 = { label: intl39.string(_modDef3827["7X3i9d"]), value: null, hint: null };
    const intl40 = tmp2(1126).intl;
    const obj21 = { count: null };
    const stringResult3 = intl39.string(_modDef3827["7X3i9d"]);
    const tmp2Result61 = tmp2(17207);
    obj21.count = tmp2Result61.formatCount(tmp2(6940).runeCount(total));
    obj20.value = intl40.formatToPlainString(_modDef3827.yHJxuP, obj21);
    const tmp2Result62 = tmp2(6940);
    const formatCountResult6 = tmp2(17207).formatCount(total.input_tokens);
    const tmp2Result63 = tmp2(17207);
    const tmp2Result64 = tmp2(17207);
    const formatCountResult7 = tmp2(17207).formatCount(total.output_tokens);
    const _HermesInternal7 = HermesInternal;
    obj20.hint = "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + tmp2(17207).formatCount(total.cache_read_input_tokens) + " cache read";
    const items12 = [closure_8(tmp2(17210).DebugStatRow, obj20), ];
    const obj22 = { label: null, value: null };
    const intl41 = tmp2(1126).intl;
    obj22.label = intl41.string(_modDef3827["8OUg09"]);
    let cache_hit_rate = stateFromStores.cache_hit_rate;
    if (cache_hit_rate == null) {
      cache_hit_rate = tmp2(6940).cacheHitRate(stateFromStores.total);
      const tmp2Result66 = tmp2(6940);
    }
    const obj23 = { children: null };
    const _HermesInternal = HermesInternal;
    obj22.value = "" + Math.round(100 * cache_hit_rate) + "%";
    items12[1] = closure_8(tmp2(17210).DebugStatRow, obj22);
    obj23.children = items12;
    tmp18Result7 = closure_10(closure_9, obj23);
    const tmp2Result65 = tmp2(17207);
  }
  obj18.children = tmp18Result7;
  items10[2] = closure_8(tmp2(17210).DebugSection, obj18);
  const obj24 = { title: null, children: null };
  const intl6 = tmp2(1126).intl;
  obj24.title = intl6.string(_modDef3827.NbRk9a);
  if (null != stateFromStores1) {
    if (null != promptCeiling) {
      const obj25 = { children: null };
      const obj26 = { label: null, used: null, max: null, formatValue: null };
      const intl9 = tmp2(1126).intl;
      obj26.label = intl9.string(_modDef3827.Kw5wiQ);
      obj26.used = stateFromStores1.tokensAfter;
      obj26.max = promptCeiling;
      obj26.formatValue = tmp2(17207).formatCount;
      const items13 = [closure_8(tmp2(17210).DebugMeter, obj26), ];
      const obj27 = { label: null, value: null, hint: null };
      const intl10 = tmp2(1126).intl;
      obj27.label = intl10.string(_modDef3827.mRbSns);
      const tmp2Result67 = tmp2(17207);
      const formatCountResult8 = tmp2(17207).formatCount(stateFromStores1.tokensBefore);
      const _HermesInternal2 = HermesInternal;
      obj27.value = "" + formatCountResult8 + " \u2192 " + tmp2(17207).formatCount(stateFromStores1.tokensAfter);
      const intl11 = tmp2(1126).intl;
      const obj28 = { count: null, time: null };
      const tmp2Result68 = tmp2(17207);
      obj28.count = tmp2(17207).formatCount(stateFromStores1.retainedMessages);
      const tmp2Result69 = tmp2(17207);
      obj28.time = tmp2(17207).formatObservedAt(stateFromStores1.observedAt);
      obj27.hint = intl11.formatToPlainString(_modDef3827.Vq3skS, obj28);
      items13[1] = closure_8(tmp2(17210).DebugStatRow, obj27);
      obj25.children = items13;
      let tmp18Result11 = closure_10(closure_9, obj25);
      const tmp2Result70 = tmp2(17207);
    }
    const items14 = [tmp18Result11, , ];
    let tmp18Result8 = null;
    if (null != stateFromStores2) {
      const obj29 = { label: null, value: null, critical: true, hint: null };
      const intl12 = tmp2(1126).intl;
      obj29.label = intl12.string(_modDef3827["4BX5KK"]);
      const tmp2Result71 = tmp2(17207);
      const formatCountResult9 = tmp2(17207).formatCount(stateFromStores2.projected);
      const _HermesInternal3 = HermesInternal;
      obj29.value = "" + formatCountResult9 + " / " + tmp2(17207).formatCount(stateFromStores2.threshold);
      const intl13 = tmp2(1126).intl;
      const obj30 = { time: null };
      const tmp2Result72 = tmp2(17207);
      obj30.time = tmp2(17207).formatObservedAt(stateFromStores2.observedAt);
      obj29.hint = intl13.formatToPlainString(_modDef3827["6ngCax"], obj30);
      tmp18Result8 = closure_8(tmp2(17210).DebugStatRow, obj29);
      const tmp2Result73 = tmp2(17207);
    }
    items14[1] = tmp18Result8;
    const obj31 = { style: tmp.forceCompaction, children: null };
    const obj32 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
    const intl14 = tmp2(1126).intl;
    obj32.text = intl14.string(_modDef3827["1EiJeb"]);
    obj32.disabled = "pending" === stateFromStores3;
    obj32.onPress = callback;
    const items15 = [closure_8(tmp2(5376).Button, obj32), , ];
    let str9 = "text-muted";
    if (null != tmp15) {
      str9 = "text-muted";
      if ("compacted" !== tmp15.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj33 = { variant: "text-xs/normal", color: str9, children: tmp2(17208).forceCompactionStatus(stateFromStores3) };
    items15[1] = closure_8(tmp2(5087).Text, obj33);
    let pendingTurn;
    if (tmp15 != null) {
      pendingTurn = tmp15.pendingTurn;
    }
    let tmp16Result6 = null;
    if (true === pendingTurn) {
      const obj34 = { children: null };
      const obj35 = { variant: "critical-primary", size: "sm", text: null, onPress: null };
      const intl42 = tmp2(1126).intl;
      obj35.text = intl42.string(_modDef3827.ZxG2AI);
      obj35.onPress = callback1;
      const items16 = [closure_8(tmp2(5376).Button, obj35), ];
      const obj36 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl43 = tmp2(1126).intl;
      obj36.children = intl43.string(_modDef3827.V73vdN);
      items16[1] = closure_8(tmp2(5087).Text, obj36);
      obj34.children = items16;
      tmp16Result6 = closure_10(closure_9, obj34);
    }
    items15[2] = tmp16Result6;
    obj31.children = items15;
    items14[2] = closure_10(View, obj31);
    obj24.children = items14;
    items10[3] = closure_10(tmp2(17210).DebugSection, obj24);
    if (null != session) {
      const obj37 = { title: null, children: null };
      const intl15 = tmp2(1126).intl;
      obj37.title = intl15.string(_modDef3827.EsSzCS);
      let tmp16Result7 = null;
      if (null != session) {
        const obj38 = { label: null, value: null, hint: null };
        const intl16 = tmp2(1126).intl;
        obj38.label = intl16.string(_modDef3827.CLXHAs);
        obj38.value = tmp2(17207).formatObservedAt(session.instance_since);
        const intl17 = tmp2(1126).intl;
        obj38.hint = intl17.string(_modDef3827.UCwUEX);
        const items17 = [closure_8(tmp2(17210).DebugStatRow, obj38), , , ];
        const obj39 = { label: null, value: null };
        const intl18 = tmp2(1126).intl;
        obj39.label = intl18.string(_modDef3827["8V8e1Z"]);
        const tmp2Result75 = tmp2(17207);
        obj39.value = tmp2(17207).formatCount(session.sockets);
        items17[1] = closure_8(tmp2(17210).DebugStatRow, obj39);
        const obj40 = { label: null, value: null };
        const intl19 = tmp2(1126).intl;
        obj40.label = intl19.string(_modDef3827["4pBzYW"]);
        const intl20 = tmp2(1126).intl;
        const tmp20Result = _modDef3827;
        obj40.value = intl20.string(session.turn_inflight ? tmp20Result.Wv025I : tmp20Result["7/lsFY"]);
        items17[2] = closure_8(tmp2(17210).DebugStatRow, obj40);
        let tmp18Result9 = null;
        if (session.queued_messages > 0) {
          const obj41 = { label: null, value: null };
          const intl21 = tmp2(1126).intl;
          obj41.label = intl21.string(_modDef3827["3oUYnv"]);
          obj41.value = tmp2(17207).formatCount(session.queued_messages);
          tmp18Result9 = closure_8(tmp2(17210).DebugStatRow, obj41);
          const tmp2Result77 = tmp2(17207);
        }
        const obj42 = { children: null };
        items17[3] = tmp18Result9;
        obj42.children = items17;
        tmp16Result7 = closure_10(closure_9, obj42);
        const tmp2Result76 = tmp2(17207);
      }
      const items18 = [tmp16Result7, ];
      let analytics;
      if (status != null) {
        analytics = status.analytics;
      }
      let tmp18Result10 = null;
      if (null != analytics) {
        const obj43 = { analytics: status.analytics };
        tmp18Result10 = closure_8(tmp2(17221).ConjureDebugAgentAnalyticsRows, obj43);
      }
      items18[1] = tmp18Result10;
      obj37.children = items18;
      let tmp16Result8 = closure_10(tmp2(17210).DebugSection, obj37);
    } else {
      let analytics1;
      if (status != null) {
        analytics1 = status.analytics;
      }
      tmp16Result8 = null;
    }
    items10[4] = tmp16Result8;
    let tmp16Result9 = null;
    if (null != limits) {
      const obj44 = { title: null, children: null };
      const intl22 = tmp2(1126).intl;
      obj44.title = intl22.string(_modDef3827["LEIhp/"]);
      const obj45 = { label: null, value: null };
      const intl23 = tmp2(1126).intl;
      obj45.label = intl23.string(_modDef3827.IlDBN3);
      obj45.value = tmp2(17207).formatCount(limits.max_subagent_iterations);
      const items19 = [closure_8(tmp2(17210).DebugStatRow, obj45), , , , , ];
      const obj46 = { label: null, value: null };
      const intl24 = tmp2(1126).intl;
      obj46.label = intl24.string(_modDef3827["ZdzKR+"]);
      const intl25 = tmp2(1126).intl;
      const obj47 = { count: null };
      const tmp2Result78 = tmp2(17207);
      obj47.count = tmp2(17207).formatCount(limits.context_window_tokens);
      obj46.value = intl25.formatToPlainString(_modDef3827.yHJxuP, obj47);
      items19[1] = closure_8(tmp2(17210).DebugStatRow, obj46);
      const obj48 = { label: null, value: null };
      const intl26 = tmp2(1126).intl;
      obj48.label = intl26.string(_modDef3827.cIhN2W);
      const intl27 = tmp2(1126).intl;
      const obj49 = { count: null };
      const tmp2Result79 = tmp2(17207);
      obj49.count = tmp2(17207).formatCount(limits.per_turn_max_output_tokens);
      obj48.value = intl27.formatToPlainString(_modDef3827.yHJxuP, obj49);
      items19[2] = closure_8(tmp2(17210).DebugStatRow, obj48);
      const obj50 = { label: null, value: null };
      const intl28 = tmp2(1126).intl;
      obj50.label = intl28.string(_modDef3827["+fOn/q"]);
      const tmp2Result80 = tmp2(17207);
      obj50.value = tmp2(17207).formatCount(limits.max_user_message_chars);
      items19[3] = closure_8(tmp2(17210).DebugStatRow, obj50);
      const obj51 = { label: null, value: null };
      const intl29 = tmp2(1126).intl;
      obj51.label = intl29.string(_modDef3827.kIHga0);
      const tmp2Result81 = tmp2(17207);
      obj51.value = tmp2(17207).formatCount(limits.max_build_attempts);
      items19[4] = closure_8(tmp2(17210).DebugStatRow, obj51);
      const obj52 = { label: null, value: null };
      const intl30 = tmp2(1126).intl;
      obj52.label = intl30.string(_modDef3827.Iw03yW);
      const tmp2Result82 = tmp2(17207);
      obj52.value = tmp2(17207).formatCount(limits.max_session_attempts);
      items19[5] = closure_8(tmp2(17210).DebugStatRow, obj52);
      obj44.children = items19;
      tmp16Result9 = closure_10(tmp2(17210).DebugSection, obj44);
      const tmp2Result83 = tmp2(17207);
    }
    items10[5] = tmp16Result9;
    obj5.children = items10;
    return closure_10(View, obj5);
  }
  if (null != promptCeiling) {
    const intl8 = tmp2(1126).intl;
    const obj53 = { ceiling: tmp2(17207).formatCount(promptCeiling) };
    let formatToPlainStringResult = intl8.formatToPlainString(_modDef3827.GMLCNv, obj53);
    const tmp2Result84 = tmp2(17207);
  } else {
    const intl7 = tmp2(1126).intl;
    formatToPlainStringResult = intl7.string(_modDef3827.s0U5Fv);
  }
  tmp18Result11 = closure_8(tmp2(17210).DebugNote, { children: formatToPlainStringResult });
  const obj4 = projectId(504);
});