// === Module 17094: VibegrationsDebugAgentTab ===

// Module 17094 (VibegrationsDebugAgentTab)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4753 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 17079 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 17080 */;
import noop from "module_19" /* 19 */;
import VibegrationsDebugStore from "VibegrationsDebugStore" /* 17075 */;

require = fn;
function ModelCallRow(call) {
  call = call.call;
  const tmp = closure_11();
  const obj2 = { style: tmp.callRow, children: null };
  const obj3 = { style: tmp.callHead, children: null };
  ({ text, bad } = VibegrationsDebugLabels.modelCallOutcome(call));
  const obj4 = { variant: "text-xs/normal", color: "text-subtle", children: null };
  const modelCallOutcomeResult = VibegrationsDebugLabels.modelCallOutcome(call);
  obj4.children = VibegrationsDebugFormat.formatClockTime(call.observedAt);
  const items = [React5(Text_Text.Text, obj4), ];
  const obj6 = { variant: "text-xs/normal", color: "text-default", children: null };
  const items1 = [call.role, " \u00B7 ", call.model];
  obj6.children = items1;
  items[1] = React6(Text_Text.Text, obj6);
  obj3.children = items;
  const items2 = [React6(View, obj3), ];
  let str = "text-muted";
  if (bad) {
    str = "text-feedback-critical";
  }
  items2[1] = React5(Text_Text.Text, { variant: "text-xs/medium", color: str, children: text });
  obj2.children = items2;
  return React6(View, obj2);
}
const View = fn(17).View;
const forceCompaction = fn(13366).forceCompaction;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let closure_10 = [];
const createStyles = fn(4757);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 }, callRow: null, callHead: null, forceCompaction: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj2.callRow = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.callHead = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.forceCompaction = { gap: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugAgentTab.tsx");

export default function VibegrationsDebugAgentTab(projectId) {
  projectId = projectId.projectId;
  ({ status, traceVisible } = projectId);
  ({ fetchState, onRefresh } = projectId);
  const tmp = closure_11();
  const tmp2 = projectId;
  const items = [VibegrationsDebugStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => VibegrationsDebugStore.getLastTurnUsage(projectId), items1);
  const obj = projectId(504);
  const items2 = [VibegrationsDebugStore];
  const items3 = [projectId];
  const stateFromStores1 = projectId(504).useStateFromStores(items2, () => VibegrationsDebugStore.getLastCompaction(projectId), items3);
  const obj2 = projectId(504);
  const items4 = [VibegrationsDebugStore];
  const items5 = [projectId];
  const stateFromStores2 = projectId(504).useStateFromStores(items4, () => VibegrationsDebugStore.getLastCompactionDecline(projectId), items5);
  const obj3 = projectId(504);
  const items6 = [VibegrationsDebugStore];
  const items7 = [projectId];
  const stateFromStores3 = projectId(504).useStateFromStores(items6, () => VibegrationsDebugStore.getForceCompactionState(projectId), items7);
  const obj4 = projectId(504);
  const items8 = [VibegrationsDebugStore];
  const items9 = [projectId, traceVisible];
  const stateFromStores4 = projectId(504).useStateFromStores(items8, () => {
    if (traceVisible) {
      let modelCalls = closure_10;
    } else {
      modelCalls = VibegrationsDebugStore.getModelCalls(projectId);
    }
    return modelCalls;
  }, items9);
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
  const items12 = [closure_7(tmp2(17082).DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , , ];
  const obj7 = { title: null, children: null };
  const intl = tmp2(1115).intl;
  obj7.title = intl.string(traceVisible(3678).IYpHtT);
  if (null == lifetime) {
    const obj8 = { children: null };
    const intl3 = tmp2(1115).intl;
    obj8.children = intl3.string(traceVisible(3678).gPabB9);
    let tmp16Result5 = closure_7(tmp2(17082).DebugNote, obj8);
  } else {
    const obj9 = { label: null, value: null, hint: null };
    const intl35 = tmp2(1115).intl;
    obj9.label = intl35.string(traceVisible(3678)["8MSJDH"]);
    const tmp2Result = tmp2(17079);
    obj9.value = tmp2Result.formatCount(tmp2(5277).runesFromUsd(lifetime.cost_usd));
    const intl36 = tmp2(1115).intl;
    const obj10 = { count: null };
    const tmp2Result44 = tmp2(5277);
    obj10.count = tmp2(17079).formatCount(lifetime.turns);
    obj9.hint = intl36.formatToPlainString(traceVisible(3678)["6Z2KhK"], obj10);
    const items13 = [closure_7(tmp2(17082).DebugStatRow, obj9), , , , ];
    const intl37 = tmp2(1115).intl;
    const orchestrator = lifetime.orchestrator;
    const tmp2Result45 = tmp2(17079);
    const obj11 = { label: intl37.string(traceVisible(3678).hk4jJr), value: null, hint: null };
    const intl38 = tmp2(1115).intl;
    const obj12 = { count: null };
    const stringResult = intl37.string(traceVisible(3678).hk4jJr);
    const tmp2Result46 = tmp2(17079);
    obj12.count = tmp2Result46.formatCount(tmp2(5277).runeCount(orchestrator));
    obj11.value = intl38.formatToPlainString(traceVisible(3678).U98VaN, obj12);
    const tmp2Result47 = tmp2(5277);
    const formatCountResult = tmp2(17079).formatCount(orchestrator.input_tokens);
    const tmp2Result48 = tmp2(17079);
    const tmp2Result49 = tmp2(17079);
    const formatCountResult1 = tmp2(17079).formatCount(orchestrator.output_tokens);
    const _HermesInternal4 = HermesInternal;
    obj11.hint = "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + tmp2(17079).formatCount(orchestrator.cache_read_input_tokens) + " cache read";
    items13[1] = closure_7(tmp2(17082).DebugStatRow, obj11);
    const intl39 = tmp2(1115).intl;
    const codegen = lifetime.codegen;
    const tmp2Result50 = tmp2(17079);
    const obj13 = { label: intl39.string(traceVisible(3678).R9aduM), value: null, hint: null };
    const intl40 = tmp2(1115).intl;
    const obj14 = { count: null };
    const stringResult1 = intl39.string(traceVisible(3678).R9aduM);
    const tmp2Result51 = tmp2(17079);
    obj14.count = tmp2Result51.formatCount(tmp2(5277).runeCount(codegen));
    obj13.value = intl40.formatToPlainString(traceVisible(3678).U98VaN, obj14);
    const tmp2Result52 = tmp2(5277);
    const formatCountResult2 = tmp2(17079).formatCount(codegen.input_tokens);
    const tmp2Result53 = tmp2(17079);
    const tmp2Result54 = tmp2(17079);
    const formatCountResult3 = tmp2(17079).formatCount(codegen.output_tokens);
    const _HermesInternal5 = HermesInternal;
    obj13.hint = "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + tmp2(17079).formatCount(codegen.cache_read_input_tokens) + " cache read";
    items13[2] = closure_7(tmp2(17082).DebugStatRow, obj13);
    const intl41 = tmp2(1115).intl;
    const tmp2Result55 = tmp2(17079);
    const stringResult2 = intl41.string(traceVisible(3678).Tj6b30);
    const usageOrEmptyResult = tmp2(5277).usageOrEmpty(lifetime.compaction);
    const obj15 = { label: stringResult2, value: null, hint: null };
    const intl42 = tmp2(1115).intl;
    const obj16 = { count: null };
    const tmp2Result56 = tmp2(5277);
    const tmp2Result57 = tmp2(17079);
    obj16.count = tmp2Result57.formatCount(tmp2(5277).runeCount(usageOrEmptyResult));
    obj15.value = intl42.formatToPlainString(traceVisible(3678).U98VaN, obj16);
    const tmp2Result58 = tmp2(5277);
    const formatCountResult4 = tmp2(17079).formatCount(usageOrEmptyResult.input_tokens);
    const tmp2Result59 = tmp2(17079);
    const tmp2Result60 = tmp2(17079);
    const formatCountResult5 = tmp2(17079).formatCount(usageOrEmptyResult.output_tokens);
    const _HermesInternal6 = HermesInternal;
    obj15.hint = "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + tmp2(17079).formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read";
    items13[3] = closure_7(tmp2(17082).DebugStatRow, obj15);
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
        const intl2 = tmp2(1115).intl;
        obj17.label = intl2.string(traceVisible(3678).Q2OlgI);
        const _Object2 = Object;
        const entries = Object.entries(status.agent.outcomes);
        const sorted = entries.sort((arg0, arg1) => {
          [, tmp] = arg0;
          [, tmp2] = arg1;
          return tmp2 - tmp;
        });
        const mapped = sorted.map((item) => {
          [tmp, tmp2] = item;
          return "" + projectId(dependencyMap[9]).formatCount(tmp2) + " " + tmp;
        });
        obj17.value = mapped.join(" \u00B7 ");
        tmp18Result9 = closure_7(tmp2(17082).DebugStatRow, obj17);
      }
    }
    const obj18 = { children: null };
    items13[4] = tmp18Result9;
    obj18.children = items13;
    tmp16Result5 = closure_8(closure_9, obj18);
    const tmp2Result61 = tmp2(17079);
  }
  obj7.children = tmp16Result5;
  items12[1] = closure_7(tmp2(17082).DebugSection, obj7);
  const obj19 = { title: null, children: null };
  const intl4 = tmp2(1115).intl;
  obj19.title = intl4.string(traceVisible(3678).lo4mY6);
  if (null == stateFromStores) {
    const obj20 = { children: null };
    const intl5 = tmp2(1115).intl;
    obj20.children = intl5.string(traceVisible(3678).uyPveL);
    let tmp18Result10 = closure_7(tmp2(17082).DebugNote, obj20);
  } else {
    const intl43 = tmp2(1115).intl;
    const total = stateFromStores.total;
    const obj21 = { label: intl43.string(traceVisible(3678)["VwF+oY"]), value: null, hint: null };
    const intl44 = tmp2(1115).intl;
    const obj22 = { count: null };
    const stringResult3 = intl43.string(traceVisible(3678)["VwF+oY"]);
    const tmp2Result62 = tmp2(17079);
    obj22.count = tmp2Result62.formatCount(tmp2(5277).runeCount(total));
    obj21.value = intl44.formatToPlainString(traceVisible(3678).U98VaN, obj22);
    const tmp2Result63 = tmp2(5277);
    const formatCountResult6 = tmp2(17079).formatCount(total.input_tokens);
    const tmp2Result64 = tmp2(17079);
    const tmp2Result65 = tmp2(17079);
    const formatCountResult7 = tmp2(17079).formatCount(total.output_tokens);
    const _HermesInternal7 = HermesInternal;
    obj21.hint = "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + tmp2(17079).formatCount(total.cache_read_input_tokens) + " cache read";
    const items14 = [closure_7(tmp2(17082).DebugStatRow, obj21), ];
    const obj23 = { label: null, value: null };
    const intl45 = tmp2(1115).intl;
    obj23.label = intl45.string(traceVisible(3678)["kILb+R"]);
    let cache_hit_rate = stateFromStores.cache_hit_rate;
    if (cache_hit_rate == null) {
      cache_hit_rate = tmp2(5277).cacheHitRate(stateFromStores.total);
      const tmp2Result67 = tmp2(5277);
    }
    const obj24 = { children: null };
    const _HermesInternal = HermesInternal;
    obj23.value = "" + Math.round(100 * cache_hit_rate) + "%";
    items14[1] = closure_7(tmp2(17082).DebugStatRow, obj23);
    obj24.children = items14;
    tmp18Result10 = closure_8(closure_9, obj24);
    const tmp2Result66 = tmp2(17079);
  }
  obj19.children = tmp18Result10;
  items12[2] = closure_7(tmp2(17082).DebugSection, obj19);
  const obj25 = { title: null, children: null };
  const intl6 = tmp2(1115).intl;
  obj25.title = intl6.string(traceVisible(3678).mn8279);
  if (null != stateFromStores1) {
    if (null != promptCeiling) {
      const obj26 = { children: null };
      const obj27 = { label: null, used: null, max: null, formatValue: null };
      const intl9 = tmp2(1115).intl;
      obj27.label = intl9.string(traceVisible(3678).dKFhCg);
      obj27.used = stateFromStores1.tokensAfter;
      obj27.max = promptCeiling;
      obj27.formatValue = tmp2(17079).formatCount;
      const items15 = [closure_7(tmp2(17082).DebugMeter, obj27), ];
      const obj28 = { label: null, value: null, hint: null };
      const intl10 = tmp2(1115).intl;
      obj28.label = intl10.string(traceVisible(3678).ntZb8d);
      const tmp2Result68 = tmp2(17079);
      const formatCountResult8 = tmp2(17079).formatCount(stateFromStores1.tokensBefore);
      const _HermesInternal2 = HermesInternal;
      obj28.value = "" + formatCountResult8 + " \u2192 " + tmp2(17079).formatCount(stateFromStores1.tokensAfter);
      const intl11 = tmp2(1115).intl;
      const obj29 = { count: null, time: null };
      const tmp2Result69 = tmp2(17079);
      obj29.count = tmp2(17079).formatCount(stateFromStores1.retainedMessages);
      const tmp2Result70 = tmp2(17079);
      obj29.time = tmp2(17079).formatObservedAt(stateFromStores1.observedAt);
      obj28.hint = intl11.formatToPlainString(traceVisible(3678).jA05ru, obj29);
      items15[1] = closure_7(tmp2(17082).DebugStatRow, obj28);
      obj26.children = items15;
      let tmp18Result17 = closure_8(closure_9, obj26);
      const tmp2Result71 = tmp2(17079);
    }
    const items16 = [tmp18Result17, , ];
    let tmp18Result11 = null;
    if (null != stateFromStores2) {
      const obj30 = { label: null, value: null, critical: true, hint: null };
      const intl12 = tmp2(1115).intl;
      obj30.label = intl12.string(traceVisible(3678)["se+2ls"]);
      const tmp2Result72 = tmp2(17079);
      const formatCountResult9 = tmp2(17079).formatCount(stateFromStores2.projected);
      const _HermesInternal3 = HermesInternal;
      obj30.value = "" + formatCountResult9 + " / " + tmp2(17079).formatCount(stateFromStores2.threshold);
      const intl13 = tmp2(1115).intl;
      const obj31 = { time: null };
      const tmp2Result73 = tmp2(17079);
      obj31.time = tmp2(17079).formatObservedAt(stateFromStores2.observedAt);
      obj30.hint = intl13.formatToPlainString(traceVisible(3678).KHK44U, obj31);
      tmp18Result11 = closure_7(tmp2(17082).DebugStatRow, obj30);
      const tmp2Result74 = tmp2(17079);
    }
    items16[1] = tmp18Result11;
    const obj32 = { style: tmp.forceCompaction, children: null };
    const obj33 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
    const intl14 = tmp2(1115).intl;
    obj33.text = intl14.string(traceVisible(3678).B0KV7p);
    obj33.disabled = "pending" === stateFromStores3;
    obj33.onPress = callback;
    const items17 = [closure_7(tmp2(5187).Button, obj33), , ];
    let str9 = "text-muted";
    if (null != tmp15) {
      str9 = "text-muted";
      if ("compacted" !== tmp15.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj34 = { variant: "text-xs/normal", color: str9, children: tmp2(17080).forceCompactionStatus(stateFromStores3) };
    items17[1] = closure_7(tmp2(4753).Text, obj34);
    let pendingTurn;
    if (tmp15 != null) {
      pendingTurn = tmp15.pendingTurn;
    }
    let tmp16Result6 = null;
    if (true === pendingTurn) {
      const obj35 = { children: null };
      const obj36 = { variant: "critical-primary", size: "sm", text: null, onPress: null };
      const intl46 = tmp2(1115).intl;
      obj36.text = intl46.string(traceVisible(3678)["044+ju"]);
      obj36.onPress = callback1;
      const items18 = [closure_7(tmp2(5187).Button, obj36), ];
      const obj37 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl47 = tmp2(1115).intl;
      obj37.children = intl47.string(traceVisible(3678)["8D32H6"]);
      items18[1] = closure_7(tmp2(4753).Text, obj37);
      obj35.children = items18;
      tmp16Result6 = closure_8(closure_9, obj35);
    }
    items17[2] = tmp16Result6;
    obj32.children = items17;
    items16[2] = closure_8(View, obj32);
    obj25.children = items16;
    items12[3] = closure_8(tmp2(17082).DebugSection, obj25);
    if (traceVisible) {
      items12[4] = null;
      if (null != session) {
        const obj38 = { title: null, children: null };
        const intl18 = tmp2(1115).intl;
        obj38.title = intl18.string(traceVisible(3678).ZRxAPD);
        let tmp16Result7 = null;
        if (null != session) {
          const obj39 = { label: null, value: null, hint: null };
          const intl19 = tmp2(1115).intl;
          obj39.label = intl19.string(traceVisible(3678)["wt5X/o"]);
          obj39.value = tmp2(17079).formatObservedAt(session.instance_since);
          const intl20 = tmp2(1115).intl;
          obj39.hint = intl20.string(traceVisible(3678).QX2UQC);
          const items19 = [closure_7(tmp2(17082).DebugStatRow, obj39), , , ];
          const obj40 = { label: null, value: null };
          const intl21 = tmp2(1115).intl;
          obj40.label = intl21.string(traceVisible(3678)["4lgurx"]);
          const tmp2Result76 = tmp2(17079);
          obj40.value = tmp2(17079).formatCount(session.sockets);
          items19[1] = closure_7(tmp2(17082).DebugStatRow, obj40);
          const obj41 = { label: null, value: null };
          const intl22 = tmp2(1115).intl;
          obj41.label = intl22.string(traceVisible(3678)["a/LXBt"]);
          const intl23 = tmp2(1115).intl;
          const tmp20Result = traceVisible(3678);
          obj41.value = intl23.string(session.turn_inflight ? tmp20Result["9KlveJ"] : tmp20Result["4tYZVa"]);
          items19[2] = closure_7(tmp2(17082).DebugStatRow, obj41);
          let tmp18Result12 = null;
          if (session.queued_messages > 0) {
            const obj42 = { label: null, value: null };
            const intl24 = tmp2(1115).intl;
            obj42.label = intl24.string(traceVisible(3678)["/hOBkc"]);
            obj42.value = tmp2(17079).formatCount(session.queued_messages);
            tmp18Result12 = closure_7(tmp2(17082).DebugStatRow, obj42);
            const tmp2Result78 = tmp2(17079);
          }
          const obj43 = { children: null };
          items19[3] = tmp18Result12;
          obj43.children = items19;
          tmp16Result7 = closure_8(closure_9, obj43);
          const tmp2Result77 = tmp2(17079);
        }
        const items20 = [tmp16Result7, ];
        let analytics;
        if (status != null) {
          analytics = status.analytics;
        }
        let tmp18Result13 = null;
        if (null != analytics) {
          const obj44 = { analytics: status.analytics };
          tmp18Result13 = closure_7(tmp2(17093).VibegrationsDebugAgentAnalyticsRows, obj44);
        }
        items20[1] = tmp18Result13;
        obj38.children = items20;
        let tmp16Result8 = closure_8(tmp2(17082).DebugSection, obj38);
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
        const intl25 = tmp2(1115).intl;
        obj45.title = intl25.string(traceVisible(3678)["EmSF+A"]);
        const obj46 = { label: null, value: null };
        const intl26 = tmp2(1115).intl;
        obj46.label = intl26.string(traceVisible(3678)["5iHZLk"]);
        obj46.value = tmp2(17079).formatCount(limits.max_iterations);
        const items21 = [closure_7(tmp2(17082).DebugStatRow, obj46), , , , , , ];
        const obj47 = { label: null, value: null };
        const intl27 = tmp2(1115).intl;
        obj47.label = intl27.string(traceVisible(3678).Rb6m3E);
        const tmp2Result79 = tmp2(17079);
        obj47.value = tmp2(17079).formatCount(limits.max_subagent_iterations);
        items21[1] = closure_7(tmp2(17082).DebugStatRow, obj47);
        const obj48 = { label: null, value: null };
        const intl28 = tmp2(1115).intl;
        obj48.label = intl28.string(traceVisible(3678).WQ9pMe);
        const intl29 = tmp2(1115).intl;
        const obj49 = { count: null };
        const tmp2Result80 = tmp2(17079);
        obj49.count = tmp2(17079).formatCount(limits.context_window_tokens);
        obj48.value = intl29.formatToPlainString(traceVisible(3678).U98VaN, obj49);
        items21[2] = closure_7(tmp2(17082).DebugStatRow, obj48);
        const obj50 = { label: null, value: null };
        const intl30 = tmp2(1115).intl;
        obj50.label = intl30.string(traceVisible(3678).iEAvzu);
        const intl31 = tmp2(1115).intl;
        const obj51 = { count: null };
        const tmp2Result81 = tmp2(17079);
        obj51.count = tmp2(17079).formatCount(limits.per_turn_max_output_tokens);
        obj50.value = intl31.formatToPlainString(traceVisible(3678).U98VaN, obj51);
        items21[3] = closure_7(tmp2(17082).DebugStatRow, obj50);
        const obj52 = { label: null, value: null };
        const intl32 = tmp2(1115).intl;
        obj52.label = intl32.string(traceVisible(3678)["jbhs+f"]);
        const tmp2Result82 = tmp2(17079);
        obj52.value = tmp2(17079).formatCount(limits.max_user_message_chars);
        items21[4] = closure_7(tmp2(17082).DebugStatRow, obj52);
        const obj53 = { label: null, value: null };
        const intl33 = tmp2(1115).intl;
        obj53.label = intl33.string(traceVisible(3678).TOQnq4);
        const tmp2Result83 = tmp2(17079);
        obj53.value = tmp2(17079).formatCount(limits.max_build_attempts);
        items21[5] = closure_7(tmp2(17082).DebugStatRow, obj53);
        const obj54 = { label: null, value: null };
        const intl34 = tmp2(1115).intl;
        obj54.label = intl34.string(traceVisible(3678).RIDc6D);
        const tmp2Result84 = tmp2(17079);
        obj54.value = tmp2(17079).formatCount(limits.max_session_attempts);
        items21[6] = closure_7(tmp2(17082).DebugStatRow, obj54);
        obj45.children = items21;
        tmp16Result9 = closure_8(tmp2(17082).DebugSection, obj45);
        const tmp2Result85 = tmp2(17079);
      }
      items12[6] = tmp16Result9;
      obj6.children = items12;
      return closure_8(View, obj6);
    } else {
      const obj55 = { title: null, children: null };
      const intl15 = tmp2(1115).intl;
      obj55.title = intl15.string(traceVisible(3678).F5eP7e);
      if (0 === stateFromStores4.length) {
        const obj56 = { children: null };
        const intl17 = tmp2(1115).intl;
        obj56.children = intl17.string(traceVisible(3678).j8NMgl);
        let tmp18Result14 = closure_7(tmp2(17082).DebugNote, obj56);
      } else {
        const substr = stateFromStores4.slice(-tmp2(17080).MAX_MODEL_CALL_ROWS);
        const reversed = substr.reverse();
        const items22 = [reversed.map((call) => closure_1_7(ModelCallRow, { call }, call.id)), ];
        let tmp18Result15 = null;
        if (stateFromStores4.length > tmp2(17080).MAX_MODEL_CALL_ROWS) {
          const obj57 = { variant: "text-xs/normal", color: "text-muted", children: null };
          const intl16 = tmp2(1115).intl;
          const obj58 = { shown: tmp2(17080).MAX_MODEL_CALL_ROWS, total: stateFromStores4.length };
          obj57.children = intl16.formatToPlainString(traceVisible(3678)["3hYhpp"], obj58);
          tmp18Result15 = closure_7(tmp2(4753).Text, obj57);
        }
        const obj59 = { children: null };
        items22[1] = tmp18Result15;
        obj59.children = items22;
        tmp18Result14 = closure_8(closure_9, obj59);
      }
      obj55.children = tmp18Result14;
      closure_7(tmp2(17082).DebugSection, obj55);
    }
    const tmp2Result75 = tmp2(17080);
  }
  if (null != promptCeiling) {
    const intl8 = tmp2(1115).intl;
    const obj60 = { ceiling: tmp2(17079).formatCount(promptCeiling) };
    let formatToPlainStringResult = intl8.formatToPlainString(traceVisible(3678).LKGmsP, obj60);
    const tmp2Result86 = tmp2(17079);
  } else {
    const intl7 = tmp2(1115).intl;
    formatToPlainStringResult = intl7.string(traceVisible(3678).gPabB9);
  }
  tmp18Result17 = closure_7(tmp2(17082).DebugNote, { children: formatToPlainStringResult });
  const obj5 = projectId(504);
};