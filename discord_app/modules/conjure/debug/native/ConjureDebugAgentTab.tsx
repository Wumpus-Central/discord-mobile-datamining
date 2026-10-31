// === Module 13018: ConjureDebugAgentTab ===

// Module 13018 (ConjureDebugAgentTab)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import ConjureUsageTypes from "ConjureUsageTypes" /* 10859 */;
import ConjureDebugLabels from "ConjureDebugLabels" /* 13012 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 13013 */;
import ConjureDebugPrimitives from "ConjureDebugPrimitives" /* 13015 */;
import ConjureDebugAnalytics from "ConjureDebugAnalytics" /* 13017 */;
import useConjureDebugAgentStateDefault from "useConjureDebugAgentState" /* 13019 */;
import ConjureDebugGitSection from "ConjureDebugGitSection" /* 13020 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 }, forceCompaction: null };
let obj3 = { gap: nativeDefault.space.PX_24 };
obj2.forceCompaction = { gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugAgentTab.tsx");

export default function ConjureDebugAgentTab(arg0) {
  ({ projectId, status } = arg0);
  ({ fetchState, onRefresh } = arg0);
  const tmp = closure_7();
  const tmp4 = useConjureDebugAgentStateDefault(projectId, status);
  ({ lastTurn, lastCompaction, lastDecline, forceState, restartState, lifetime, limits, session, contextCeiling } = tmp4);
  let tmp5 = null;
  ({ turnRunning, handleForceCompaction, handleForceCompactionOverride, handleRestartWorkspace } = tmp4);
  if (typeof forceState === "object") {
    tmp5 = forceState;
  }
  const obj = { style: tmp.tab, children: null };
  let generated_at;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items = [React4(ConjureDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), , , , , , ];
  const obj2 = { title: null, children: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3868.JghNal);
  if (null == lifetime) {
    const obj3 = { children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(_modDef3868.s0U5Fv);
    let tmp6Result5 = React4(ConjureDebugPrimitives.DebugNote, obj3);
  } else {
    const obj4 = { label: null, value: null, hint: null };
    const intl32 = util.intl;
    obj4.label = intl32.string(_modDef3868["9nqym2"]);
    const tmp9Result = ConjureDebugFormat;
    obj4.value = tmp9Result.formatCount(ConjureUsageTypes.runesFromUsd(lifetime.cost_usd));
    const intl33 = util.intl;
    const obj5 = { count: null };
    const tmp9Result44 = ConjureUsageTypes;
    obj5.count = ConjureDebugFormat.formatCount(lifetime.turns);
    obj4.hint = intl33.formatToPlainString(_modDef3868.NCdUIh, obj5);
    const items1 = [React4(ConjureDebugPrimitives.DebugStatRow, obj4), , , , ];
    const intl34 = util.intl;
    const orchestrator = lifetime.orchestrator;
    const tmp9Result45 = ConjureDebugFormat;
    const obj6 = { label: intl34.string(_modDef3868.xtxP0e), value: null, hint: null };
    const intl35 = util.intl;
    const obj7 = { count: null };
    const stringResult = intl34.string(_modDef3868.xtxP0e);
    const tmp9Result46 = ConjureDebugFormat;
    obj7.count = tmp9Result46.formatCount(ConjureUsageTypes.runeCount(orchestrator));
    obj6.value = intl35.formatToPlainString(_modDef3868.yHJxuP, obj7);
    const tmp9Result47 = ConjureUsageTypes;
    const formatCountResult = ConjureDebugFormat.formatCount(orchestrator.input_tokens);
    const tmp9Result48 = ConjureDebugFormat;
    const tmp9Result49 = ConjureDebugFormat;
    const formatCountResult1 = ConjureDebugFormat.formatCount(orchestrator.output_tokens);
    const _HermesInternal4 = HermesInternal;
    obj6.hint = "" + formatCountResult + " in \u00B7 " + formatCountResult1 + " out \u00B7 " + ConjureDebugFormat.formatCount(orchestrator.cache_read_input_tokens) + " cache read";
    items1[1] = React4(ConjureDebugPrimitives.DebugStatRow, obj6);
    const intl36 = util.intl;
    const codegen = lifetime.codegen;
    const tmp9Result50 = ConjureDebugFormat;
    const obj8 = { label: intl36.string(_modDef3868["9Sj3SX"]), value: null, hint: null };
    const intl37 = util.intl;
    const obj9 = { count: null };
    const stringResult1 = intl36.string(_modDef3868["9Sj3SX"]);
    const tmp9Result51 = ConjureDebugFormat;
    obj9.count = tmp9Result51.formatCount(ConjureUsageTypes.runeCount(codegen));
    obj8.value = intl37.formatToPlainString(_modDef3868.yHJxuP, obj9);
    const tmp9Result52 = ConjureUsageTypes;
    const formatCountResult2 = ConjureDebugFormat.formatCount(codegen.input_tokens);
    const tmp9Result53 = ConjureDebugFormat;
    const tmp9Result54 = ConjureDebugFormat;
    const formatCountResult3 = ConjureDebugFormat.formatCount(codegen.output_tokens);
    const _HermesInternal5 = HermesInternal;
    obj8.hint = "" + formatCountResult2 + " in \u00B7 " + formatCountResult3 + " out \u00B7 " + ConjureDebugFormat.formatCount(codegen.cache_read_input_tokens) + " cache read";
    items1[2] = React4(ConjureDebugPrimitives.DebugStatRow, obj8);
    const intl38 = util.intl;
    const tmp9Result55 = ConjureDebugFormat;
    const stringResult2 = intl38.string(_modDef3868.ANCEo3);
    const usageOrEmptyResult = ConjureUsageTypes.usageOrEmpty(lifetime.compaction);
    const obj10 = { label: stringResult2, value: null, hint: null };
    const intl39 = util.intl;
    const obj11 = { count: null };
    const tmp9Result56 = ConjureUsageTypes;
    const tmp9Result57 = ConjureDebugFormat;
    obj11.count = tmp9Result57.formatCount(ConjureUsageTypes.runeCount(usageOrEmptyResult));
    obj10.value = intl39.formatToPlainString(_modDef3868.yHJxuP, obj11);
    const tmp9Result58 = ConjureUsageTypes;
    const formatCountResult4 = ConjureDebugFormat.formatCount(usageOrEmptyResult.input_tokens);
    const tmp9Result59 = ConjureDebugFormat;
    const tmp9Result60 = ConjureDebugFormat;
    const formatCountResult5 = ConjureDebugFormat.formatCount(usageOrEmptyResult.output_tokens);
    const _HermesInternal6 = HermesInternal;
    obj10.hint = "" + formatCountResult4 + " in \u00B7 " + formatCountResult5 + " out \u00B7 " + ConjureDebugFormat.formatCount(usageOrEmptyResult.cache_read_input_tokens) + " cache read";
    items1[3] = React4(ConjureDebugPrimitives.DebugStatRow, obj10);
    let outcomes;
    if (status != null) {
      const agent = status.agent;
      if (agent != null) {
        outcomes = agent.outcomes;
      }
    }
    let tmp8Result6 = null;
    if (null != outcomes) {
      const _Object = Object;
      tmp8Result6 = null;
      if (Object.keys(status.agent.outcomes).length > 0) {
        const obj12 = { label: null, value: null };
        const intl2 = util.intl;
        obj12.label = intl2.string(_modDef3868.SQHm7C);
        const _Object2 = Object;
        const entries = Object.entries(status.agent.outcomes);
        const sorted = entries.sort((arg0, arg1) => {
          [, tmp] = arg0;
          [, tmp2] = arg1;
          return tmp2 - tmp;
        });
        const mapped = sorted.map((item) => {
          [tmp, tmp2] = item;
          return "" + ConjureDebugFormat.formatCount(tmp2) + " " + tmp;
        });
        obj12.value = mapped.join(" \u00B7 ");
        tmp8Result6 = React4(ConjureDebugPrimitives.DebugStatRow, obj12);
      }
    }
    const obj13 = { children: null };
    items1[4] = tmp8Result6;
    obj13.children = items1;
    tmp6Result5 = timestampProducer(hasOwnProperty, obj13);
    const tmp9Result61 = ConjureDebugFormat;
  }
  obj2.children = tmp6Result5;
  items[1] = React4(ConjureDebugPrimitives.DebugSection, obj2);
  const obj14 = { title: null, children: null };
  const intl4 = util.intl;
  obj14.title = intl4.string(_modDef3868.dZHPE5);
  if (null == lastTurn) {
    const obj15 = { children: null };
    const intl5 = util.intl;
    obj15.children = intl5.string(_modDef3868.DfVjal);
    let tmp8Result7 = React4(ConjureDebugPrimitives.DebugNote, obj15);
  } else {
    const intl40 = util.intl;
    const total = lastTurn.total;
    const obj16 = { label: intl40.string(_modDef3868["7X3i9d"]), value: null, hint: null };
    const intl41 = util.intl;
    const obj17 = { count: null };
    const stringResult3 = intl40.string(_modDef3868["7X3i9d"]);
    const tmp9Result62 = ConjureDebugFormat;
    obj17.count = tmp9Result62.formatCount(ConjureUsageTypes.runeCount(total));
    obj16.value = intl41.formatToPlainString(_modDef3868.yHJxuP, obj17);
    const tmp9Result63 = ConjureUsageTypes;
    const formatCountResult6 = ConjureDebugFormat.formatCount(total.input_tokens);
    const tmp9Result64 = ConjureDebugFormat;
    const tmp9Result65 = ConjureDebugFormat;
    const formatCountResult7 = ConjureDebugFormat.formatCount(total.output_tokens);
    const _HermesInternal7 = HermesInternal;
    obj16.hint = "" + formatCountResult6 + " in \u00B7 " + formatCountResult7 + " out \u00B7 " + ConjureDebugFormat.formatCount(total.cache_read_input_tokens) + " cache read";
    const items2 = [React4(ConjureDebugPrimitives.DebugStatRow, obj16), ];
    const obj18 = { label: null, value: null };
    const intl42 = util.intl;
    obj18.label = intl42.string(_modDef3868["8OUg09"]);
    let cache_hit_rate = lastTurn.cache_hit_rate;
    if (cache_hit_rate == null) {
      cache_hit_rate = ConjureUsageTypes.cacheHitRate(lastTurn.total);
      const tmp9Result67 = ConjureUsageTypes;
    }
    const obj19 = { children: null };
    const _HermesInternal = HermesInternal;
    obj18.value = "" + Math.round(100 * cache_hit_rate) + "%";
    items2[1] = React4(ConjureDebugPrimitives.DebugStatRow, obj18);
    obj19.children = items2;
    tmp8Result7 = timestampProducer(hasOwnProperty, obj19);
    const tmp9Result66 = ConjureDebugFormat;
  }
  obj14.children = tmp8Result7;
  items[2] = React4(ConjureDebugPrimitives.DebugSection, obj14);
  const obj20 = { title: null, children: null };
  const intl6 = util.intl;
  obj20.title = intl6.string(_modDef3868.NbRk9a);
  if (null != lastCompaction) {
    if (null != contextCeiling) {
      const obj21 = { children: null };
      const obj22 = { label: null, used: null, max: null, formatValue: null };
      const intl9 = util.intl;
      obj22.label = intl9.string(_modDef3868.Kw5wiQ);
      obj22.used = lastCompaction.tokensAfter;
      obj22.max = contextCeiling;
      obj22.formatValue = ConjureDebugFormat.formatCount;
      const items3 = [React4(ConjureDebugPrimitives.DebugMeter, obj22), ];
      const obj23 = { label: null, value: null, hint: null };
      const intl10 = util.intl;
      obj23.label = intl10.string(_modDef3868.mRbSns);
      const tmp9Result68 = ConjureDebugFormat;
      const formatCountResult8 = ConjureDebugFormat.formatCount(lastCompaction.tokensBefore);
      const _HermesInternal2 = HermesInternal;
      obj23.value = "" + formatCountResult8 + " \u2192 " + ConjureDebugFormat.formatCount(lastCompaction.tokensAfter);
      const intl11 = util.intl;
      const obj24 = { count: null, time: null };
      const tmp9Result69 = ConjureDebugFormat;
      obj24.count = ConjureDebugFormat.formatCount(lastCompaction.retainedMessages);
      const tmp9Result70 = ConjureDebugFormat;
      obj24.time = ConjureDebugFormat.formatObservedAt(lastCompaction.observedAt);
      obj23.hint = intl11.formatToPlainString(_modDef3868.Vq3skS, obj24);
      items3[1] = React4(ConjureDebugPrimitives.DebugStatRow, obj23);
      obj21.children = items3;
      let tmp8Result11 = timestampProducer(hasOwnProperty, obj21);
      const tmp9Result71 = ConjureDebugFormat;
    }
    const items4 = [tmp8Result11, , , , ];
    let tmp8Result8 = null;
    if (null != lastDecline) {
      const obj25 = { label: null, value: null, critical: true, hint: null };
      const intl12 = util.intl;
      obj25.label = intl12.string(_modDef3868["4BX5KK"]);
      const tmp9Result72 = ConjureDebugFormat;
      const formatCountResult9 = ConjureDebugFormat.formatCount(lastDecline.projected);
      const _HermesInternal3 = HermesInternal;
      obj25.value = "" + formatCountResult9 + " / " + ConjureDebugFormat.formatCount(lastDecline.threshold);
      const intl13 = util.intl;
      const obj26 = { time: null };
      const tmp9Result73 = ConjureDebugFormat;
      obj26.time = ConjureDebugFormat.formatObservedAt(lastDecline.observedAt);
      obj25.hint = intl13.formatToPlainString(_modDef3868["6ngCax"], obj26);
      tmp8Result8 = React4(ConjureDebugPrimitives.DebugStatRow, obj25);
      const tmp9Result74 = ConjureDebugFormat;
    }
    items4[1] = tmp8Result8;
    const obj27 = { style: tmp.forceCompaction, children: null };
    const obj28 = { variant: "secondary", size: "sm", text: null, disabled: null, onPress: null };
    const intl14 = util.intl;
    obj28.text = intl14.string(_modDef3868["1EiJeb"]);
    obj28.disabled = "pending" === forceState;
    obj28.onPress = handleForceCompaction;
    const items5 = [React4(components_Button_Button.Button, obj28), , ];
    let str9 = "text-muted";
    if (null != tmp5) {
      str9 = "text-muted";
      if ("compacted" !== tmp5.outcome) {
        str9 = "text-feedback-critical";
      }
    }
    const obj29 = { variant: "text-xs/normal", color: str9, children: ConjureDebugLabels.forceCompactionStatus(forceState) };
    items5[1] = React4(Text_Text.Text, obj29);
    let pendingTurn;
    if (tmp5 != null) {
      pendingTurn = tmp5.pendingTurn;
    }
    let tmp6Result6 = null;
    if (true === pendingTurn) {
      const obj30 = { children: null };
      const obj31 = { variant: "critical-primary", size: "sm", text: null, onPress: null };
      const intl43 = util.intl;
      obj31.text = intl43.string(_modDef3868.ZxG2AI);
      obj31.onPress = handleForceCompactionOverride;
      const items6 = [React4(components_Button_Button.Button, obj31), ];
      const obj32 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl44 = util.intl;
      obj32.children = intl44.string(_modDef3868.V73vdN);
      items6[1] = React4(Text_Text.Text, obj32);
      obj30.children = items6;
      tmp6Result6 = timestampProducer(hasOwnProperty, obj30);
    }
    items5[2] = tmp6Result6;
    obj27.children = items5;
    items4[2] = timestampProducer(View, obj27);
    const obj33 = { style: tmp.forceCompaction, children: null };
    const obj34 = { variant: "secondary", size: "sm", text: null, loading: null, disabled: null, onPress: null };
    const intl15 = util.intl;
    obj34.text = intl15.string(_modDef3868["5qCjBu"]);
    let tmp25 = "pending" === restartState;
    obj34.loading = tmp25;
    if (!tmp25) {
      tmp25 = turnRunning;
    }
    obj34.disabled = tmp25;
    obj34.onPress = handleRestartWorkspace;
    const items7 = [React4(components_Button_Button.Button, obj34), ];
    let str11 = "text-muted";
    if (typeof restartState === "object") {
      str11 = "text-muted";
      if ("restarted" !== restartState.outcome) {
        str11 = "text-feedback-critical";
      }
    }
    const obj35 = { variant: "text-xs/normal", accessibilityLiveRegion: "polite", color: str11, children: null };
    const tmp9Result75 = ConjureDebugLabels;
    obj35.children = ConjureDebugLabels.sandboxRestartStatus(restartState);
    items7[1] = React4(Text_Text.Text, obj35);
    obj33.children = items7;
    items4[3] = timestampProducer(View, obj33);
    const obj36 = { projectId };
    items4[4] = React4(ConjureDebugGitSection.ConjureDebugRestartAgent, obj36);
    obj20.children = items4;
    items[3] = timestampProducer(ConjureDebugPrimitives.DebugSection, obj20);
    const obj37 = { projectId };
    items[4] = React4(ConjureDebugGitSection.ConjureDebugGitSection, obj37);
    if (null != session) {
      const obj38 = { title: null, children: null };
      const intl16 = util.intl;
      obj38.title = intl16.string(_modDef3868.EsSzCS);
      let tmp6Result7 = null;
      if (null != session) {
        const obj39 = { label: null, value: null, hint: null };
        const intl17 = util.intl;
        obj39.label = intl17.string(_modDef3868.CLXHAs);
        obj39.value = ConjureDebugFormat.formatObservedAt(session.instance_since);
        const intl18 = util.intl;
        obj39.hint = intl18.string(_modDef3868.UCwUEX);
        const items8 = [React4(ConjureDebugPrimitives.DebugStatRow, obj39), , , ];
        const obj40 = { label: null, value: null };
        const intl19 = util.intl;
        obj40.label = intl19.string(_modDef3868["8V8e1Z"]);
        const tmp9Result77 = ConjureDebugFormat;
        obj40.value = ConjureDebugFormat.formatCount(session.sockets);
        items8[1] = React4(ConjureDebugPrimitives.DebugStatRow, obj40);
        const obj41 = { label: null, value: null };
        const intl20 = util.intl;
        obj41.label = intl20.string(_modDef3868["4pBzYW"]);
        const intl21 = util.intl;
        const tmp2Result = _modDef3868;
        obj41.value = intl21.string(session.turn_inflight ? tmp2Result.Wv025I : tmp2Result["7/lsFY"]);
        items8[2] = React4(ConjureDebugPrimitives.DebugStatRow, obj41);
        let tmp8Result9 = null;
        if (session.queued_messages > 0) {
          const obj42 = { label: null, value: null };
          const intl22 = util.intl;
          obj42.label = intl22.string(_modDef3868["3oUYnv"]);
          obj42.value = ConjureDebugFormat.formatCount(session.queued_messages);
          tmp8Result9 = React4(ConjureDebugPrimitives.DebugStatRow, obj42);
          const tmp9Result79 = ConjureDebugFormat;
        }
        const obj43 = { children: null };
        items8[3] = tmp8Result9;
        obj43.children = items8;
        tmp6Result7 = timestampProducer(hasOwnProperty, obj43);
        const tmp9Result78 = ConjureDebugFormat;
      }
      const items9 = [tmp6Result7, ];
      let analytics;
      if (status != null) {
        analytics = status.analytics;
      }
      let tmp8Result10 = null;
      if (null != analytics) {
        const obj44 = { analytics: status.analytics };
        tmp8Result10 = React4(ConjureDebugAnalytics.ConjureDebugAgentAnalyticsRows, obj44);
      }
      items9[1] = tmp8Result10;
      obj38.children = items9;
      let tmp6Result8 = timestampProducer(ConjureDebugPrimitives.DebugSection, obj38);
    } else {
      let analytics1;
      if (status != null) {
        analytics1 = status.analytics;
      }
      tmp6Result8 = null;
    }
    items[5] = tmp6Result8;
    let tmp6Result9 = null;
    if (null != limits) {
      const obj45 = { title: null, children: null };
      const intl23 = util.intl;
      obj45.title = intl23.string(_modDef3868["LEIhp/"]);
      const obj46 = { label: null, value: null };
      const intl24 = util.intl;
      obj46.label = intl24.string(_modDef3868.IlDBN3);
      obj46.value = ConjureDebugFormat.formatCount(limits.max_subagent_iterations);
      const items10 = [React4(ConjureDebugPrimitives.DebugStatRow, obj46), , , , , ];
      const obj47 = { label: null, value: null };
      const intl25 = util.intl;
      obj47.label = intl25.string(_modDef3868["ZdzKR+"]);
      const intl26 = util.intl;
      const obj48 = { count: null };
      const tmp9Result80 = ConjureDebugFormat;
      obj48.count = ConjureDebugFormat.formatCount(limits.context_window_tokens);
      obj47.value = intl26.formatToPlainString(_modDef3868.yHJxuP, obj48);
      items10[1] = React4(ConjureDebugPrimitives.DebugStatRow, obj47);
      const obj49 = { label: null, value: null };
      const intl27 = util.intl;
      obj49.label = intl27.string(_modDef3868.cIhN2W);
      const intl28 = util.intl;
      const obj50 = { count: null };
      const tmp9Result81 = ConjureDebugFormat;
      obj50.count = ConjureDebugFormat.formatCount(limits.per_turn_max_output_tokens);
      obj49.value = intl28.formatToPlainString(_modDef3868.yHJxuP, obj50);
      items10[2] = React4(ConjureDebugPrimitives.DebugStatRow, obj49);
      const obj51 = { label: null, value: null };
      const intl29 = util.intl;
      obj51.label = intl29.string(_modDef3868["+fOn/q"]);
      const tmp9Result82 = ConjureDebugFormat;
      obj51.value = ConjureDebugFormat.formatCount(limits.max_user_message_chars);
      items10[3] = React4(ConjureDebugPrimitives.DebugStatRow, obj51);
      const obj52 = { label: null, value: null };
      const intl30 = util.intl;
      obj52.label = intl30.string(_modDef3868.kIHga0);
      const tmp9Result83 = ConjureDebugFormat;
      obj52.value = ConjureDebugFormat.formatCount(limits.max_build_attempts);
      items10[4] = React4(ConjureDebugPrimitives.DebugStatRow, obj52);
      const obj53 = { label: null, value: null };
      const intl31 = util.intl;
      obj53.label = intl31.string(_modDef3868.Iw03yW);
      const tmp9Result84 = ConjureDebugFormat;
      obj53.value = ConjureDebugFormat.formatCount(limits.max_session_attempts);
      items10[5] = React4(ConjureDebugPrimitives.DebugStatRow, obj53);
      obj45.children = items10;
      tmp6Result9 = timestampProducer(ConjureDebugPrimitives.DebugSection, obj45);
      const tmp9Result85 = ConjureDebugFormat;
    }
    items[6] = tmp6Result9;
    obj.children = items;
    return timestampProducer(View, obj);
  }
  if (null != contextCeiling) {
    const intl8 = util.intl;
    const obj54 = { ceiling: ConjureDebugFormat.formatCount(contextCeiling) };
    let formatToPlainStringResult = intl8.formatToPlainString(_modDef3868.GMLCNv, obj54);
    const tmp9Result86 = ConjureDebugFormat;
  } else {
    const intl7 = util.intl;
    formatToPlainStringResult = intl7.string(_modDef3868.s0U5Fv);
  }
  tmp8Result11 = React4(ConjureDebugPrimitives.DebugNote, { children: formatToPlainStringResult });
};