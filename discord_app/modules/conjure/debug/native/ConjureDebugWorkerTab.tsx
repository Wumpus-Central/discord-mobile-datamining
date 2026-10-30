// discord_app/modules/conjure/debug/native/ConjureDebugWorkerTab.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import ConjureDebugLabels from "../ConjureDebugLabels.tsx";
import ConjureDebugFormat from "../ConjureDebugFormat.tsx";
import ConjureDebugPrimitives from "ConjureDebugPrimitives.tsx";
import ConjureDebugAnalytics from "ConjureDebugAnalytics.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function EnvSection(title) {
  ({ preview, stable, renderEnv } = title);
  let items = [];
  if (null != preview) {
    const obj = { children: renderEnv("preview", preview) };
    items.push(hasOwnProperty(noop.Fragment, obj, "preview"));
  }
  if (null != stable) {
    const obj2 = { children: renderEnv("stable", stable) };
    items.push(hasOwnProperty(noop.Fragment, obj2, "stable"));
  }
  const obj3 = { title: title.title, children: null };
  if (items.length <= 0) {
    const obj4 = { children: null };
    const intl = util.intl;
    obj4.children = intl.string(_modDef3865.umcjif);
    items = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj4);
  }
  obj3.children = items;
  return hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj3);
}
function BotEnvBlock(arg0) {
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    const obj3 = { label: null, value: null, critical: null, hint: null };
    const intl2 = util.intl;
    const obj4 = { env: ConjureDebugLabels.debugEnvLabel(env) };
    obj3.label = intl2.formatToPlainString(_modDef3865["01ZMS4"], obj4);
    obj3.value = ConjureDebugLabels.debugYesNo(bot.connected);
    const connected = bot.connected;
    let tmp12 = !connected;
    if (!connected) {
      tmp12 = null != bot.fatal_reason;
    }
    obj3.critical = tmp12;
    let fatal_reason = bot.fatal_reason;
    if (fatal_reason == null) {
      let tmp15;
      if (!bot.connected) {
        const last_start_reason = bot.last_start_reason;
        tmp15 = last_start_reason;
      }
      fatal_reason = tmp15;
    }
    obj3.hint = fatal_reason;
    const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3), , , ,];
    const obj7 = { label: null, value: null, hint: null };
    const intl3 = util.intl;
    obj7.label = intl3.string(_modDef3865["z1dh+F"]);
    obj7.value = ConjureDebugFormat.formatCount(bot.events_received);
    let combined;
    if (null != bot.last_event_type) {
      if (null != bot.last_event_at) {
        const _HermesInternal = HermesInternal;
        combined = "" + bot.last_event_type + " \u00B7 " + ConjureDebugFormat.formatObservedAt(bot.last_event_at);
        const tmp9Result6 = ConjureDebugFormat;
      }
    }
    obj7.hint = combined;
    items[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj7);
    const obj8 = { label: null, value: null };
    const intl4 = util.intl;
    obj8.label = intl4.string(_modDef3865.Iz5GnJ);
    const tmp9Result = ConjureDebugFormat;
    obj8.value = ConjureDebugFormat.formatCount(bot.guild_count);
    items[2] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
    const obj9 = { label: null, value: null, hint: null };
    const intl5 = util.intl;
    obj9.label = intl5.string(_modDef3865["7UqtNv"]);
    const tmp9Result7 = ConjureDebugFormat;
    obj9.value = ConjureDebugFormat.formatCount(bot.reconnects);
    let formatToPlainStringResult;
    if (null != bot.last_close_code) {
      if (null != bot.last_close_at) {
        const intl6 = util.intl;
        const obj10 = { code: bot.last_close_code, time: ConjureDebugFormat.formatObservedAt(bot.last_close_at) };
        formatToPlainStringResult = intl6.formatToPlainString(_modDef3865.MasSly, obj10);
        const tmp9Result9 = ConjureDebugFormat;
      }
    }
    obj9.hint = formatToPlainStringResult;
    items[3] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj9);
    let tmp8Result = null;
    if (bot.dispatch_errors > 0) {
      const obj11 = { label: null, value: null, critical: true };
      const intl7 = util.intl;
      obj11.label = intl7.string(_modDef3865["x3+JXJ"]);
      obj11.value = ConjureDebugFormat.formatCount(bot.dispatch_errors);
      tmp8Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj11);
      const tmp9Result10 = ConjureDebugFormat;
    }
    const obj12 = { children: null };
    items[4] = tmp8Result;
    obj12.children = items;
    let tmp6Result = React5(timestampProducer, obj12);
    const tmp9Result8 = ConjureDebugFormat;
  } else {
    const obj = { label: ConjureDebugLabels.debugEnvLabel(env), value: null };
    const intl = util.intl;
    obj.value = intl.string(_modDef3865.lTHQss);
    tmp6Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj);
  }
  return tmp6Result;
}
function OutboundEnvBlock(metrics) {
  metrics = metrics.metrics;
  const sum = metrics.status_4xx + metrics.status_5xx;
  const obj = { label: ConjureDebugLabels.debugEnvLabel(metrics.env), value: null, critical: null, hint: null };
  const intl = util.intl;
  const obj3 = { requests: null, failures: null };
  obj3.requests = ConjureDebugFormat.formatCount(metrics.requests);
  obj3.failures = ConjureDebugFormat.formatCount(sum + metrics.errors);
  obj.value = intl.formatToPlainString(_modDef3865["Xq+wHT"], obj3);
  obj.critical = metrics.errors + metrics.status_5xx > 0;
  if (null != metrics.last_failure) {
    const intl3 = util.intl;
    const obj6 = { host: metrics.last_failure.host, status: null, time: null };
    let str = metrics.last_failure.status;
    if (str == null) {
      str = "network";
    }
    obj6.status = str;
    obj6.time = ConjureDebugFormat.formatObservedAt(metrics.last_failure.at);
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3865["o/ZBm4"], obj6);
    const tmp3Result = ConjureDebugFormat;
  } else {
    const intl2 = util.intl;
    const obj7 = { time: ConjureDebugFormat.formatObservedAt(metrics.since) };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3865["7KlGT6"], obj7);
    const tmp3Result2 = ConjureDebugFormat;
  }
  obj.hint = formatToPlainStringResult;
  return hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj);
}
function RuntimeEnvBlock(env) {
  env = env.env;
  const runtime = env.runtime;
  let obj = { children: null };
  const obj2 = { label: null, value: null };
  let intl = env(1114).intl;
  let obj3 = { env: env(12977).debugEnvLabel(env) };
  obj2.label = intl.formatToPlainString(_modDef3865["92gVTm"], obj3);
  let obj4 = env(12977);
  obj2.value = env(12978).formatCount(runtime.connections);
  const items = [closure_5(env(12980).DebugStatRow, obj2)];
  const schedules = runtime.schedules;
  items[1] = schedules.map((id) => {
    const obj = { label: null, value: null, hint: null };
    const intl = util.intl;
    obj.label = intl.formatToPlainString(_modDef3865.Dafaco, { id: id.id });
    obj.value = id.trigger;
    if (null != id.pending_state) {
      const intl3 = util.intl;
      const obj3 = { state: null, attempt: null };
      ({ pending_state: obj5.state, pending_attempt } = id);
      if (pending_attempt == null) {
        pending_attempt = 1;
      }
      obj3.attempt = pending_attempt;
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef3865.ologm6, obj3);
    } else if (null != id.next_run_at) {
      const intl2 = util.intl;
      const obj4 = { time: ConjureDebugFormat.formatObservedAt(id.next_run_at) };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3865.wxAWNv, obj4);
      const tmp2Result = ConjureDebugFormat;
    }
    obj.hint = formatToPlainStringResult;
    return hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj, "" + env + "-" + id.id);
  });
  obj.children = items;
  return closure_7(closure_6, obj);
}
function AiEnvBlock(metrics) {
  metrics = metrics.metrics;
  const obj = { label: ConjureDebugLabels.debugEnvLabel(metrics.env), value: null, critical: null, hint: null };
  const intl = util.intl;
  const obj3 = { calls: null, errors: null };
  obj3.calls = ConjureDebugFormat.formatCount(metrics.calls);
  obj3.errors = ConjureDebugFormat.formatCount(metrics.errors);
  obj.value = intl.formatToPlainString(_modDef3865.suAOj9, obj3);
  obj.critical = metrics.errors > 0;
  obj.hint = metrics.last_model;
  return hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj);
}
function EnvMetricsSection(arg0) {
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      const obj2 = { title, children: null };
      const obj3 = { label: null, value: null, hint: null };
      const intl13 = util.intl;
      obj3.label = intl13.string(_modDef3865.xtD4Zp);
      obj3.value = ConjureDebugFormat.formatCount(metrics.requests);
      const intl14 = util.intl;
      const obj4 = { time: null };
      obj4.time = ConjureDebugFormat.formatObservedAt(metrics.since);
      obj3.hint = intl14.formatToPlainString(_modDef3865["7KlGT6"], obj4);
      const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3), , , , , ,];
      const obj5 = { label: null, value: null, critical: null };
      const intl15 = util.intl;
      obj5.label = intl15.string(_modDef3865.gfRhR3);
      obj5.value = ConjureDebugFormat.formatCount(metrics.errors);
      obj5.critical = metrics.errors > 0;
      items[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj5);
      if (metrics.cpu_ms_total > 0) {
        const obj6 = { children: null };
        const obj7 = { label: null, used: null, max: null, formatValue: null };
        const intl4 = util.intl;
        obj7.label = intl4.string(_modDef3865.LEJ5r3);
        obj7.used = metrics.cpu_ms_max;
        obj7.max = limits.cpu_ms_per_request;
        obj7.formatValue = ConjureDebugFormat.formatMs;
        const items1 = [hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj7)];
        const obj8 = { label: null, value: null, hint: null };
        const intl5 = util.intl;
        obj8.label = intl5.string(_modDef3865.mSKImM);
        obj8.value = ConjureDebugFormat.formatMs(metrics.cpu_ms_total / metrics.requests);
        const intl6 = util.intl;
        const obj9 = { total: null, wall: null };
        const tmp9Result = ConjureDebugFormat;
        obj9.total = ConjureDebugFormat.formatMs(metrics.cpu_ms_total);
        const tmp9Result7 = ConjureDebugFormat;
        obj9.wall = ConjureDebugFormat.formatMs(metrics.wall_ms_total);
        obj8.hint = intl6.formatToPlainString(_modDef3865.JqMU05, obj9);
        items1[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj8);
        obj6.children = items1;
        let tmp = React5(timestampProducer, obj6);
        const tmp9Result8 = ConjureDebugFormat;
      } else {
        const obj = { label: null, value: null, hint: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3865.LEJ5r3);
        const intl2 = util.intl;
        obj.value = intl2.string(_modDef3865["2Ekb2b"]);
        const intl3 = util.intl;
        obj.hint = intl3.string(_modDef3865.G0aq7i);
        tmp = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj);
      }
      items[2] = tmp;
      let tmp11Result = null;
      if (metrics.cpu_ms_total <= 0) {
        tmp11Result = null;
        if (metrics.wall_ms_total > 0) {
          const obj10 = { label: null, value: null };
          const intl7 = util.intl;
          obj10.label = intl7.string(_modDef3865.xvmL1D);
          obj10.value = ConjureDebugFormat.formatMs(metrics.wall_ms_total);
          tmp11Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj10);
          const tmp9Result9 = ConjureDebugFormat;
        }
      }
      items[3] = tmp11Result;
      let tmp11Result3 = null;
      if (metrics.exceeded_cpu > 0) {
        const obj11 = { label: null, value: null, critical: true };
        const intl8 = util.intl;
        obj11.label = intl8.string(_modDef3865["4sQYwH"]);
        obj11.value = ConjureDebugFormat.formatCount(metrics.exceeded_cpu);
        tmp11Result3 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj11);
        const tmp9Result10 = ConjureDebugFormat;
      }
      items[4] = tmp11Result3;
      const obj12 = { label: null, value: null, critical: null, hint: null };
      const intl9 = util.intl;
      obj12.label = intl9.string(_modDef3865.bQenOy);
      obj12.value = ConjureDebugFormat.formatCount(metrics.exceeded_memory);
      obj12.critical = metrics.exceeded_memory > 0;
      const intl10 = util.intl;
      const obj13 = { limit: null };
      const _HermesInternal = HermesInternal;
      obj13.limit = "" + limits.memory_mb + " MB";
      obj12.hint = intl10.formatToPlainString(_modDef3865["5jIZwv"], obj13);
      items[5] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj12);
      let tmp11Result4 = null;
      if (null != metrics.build) {
        const obj14 = { label: null, value: null };
        const intl11 = util.intl;
        obj14.label = intl11.string(_modDef3865.xgpn4Y);
        obj14.value = ConjureDebugFormat.shortBuildLabel(metrics.build);
        tmp11Result4 = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj14);
        const tmp9Result12 = ConjureDebugFormat;
      }
      items[6] = tmp11Result4;
      obj2.children = items;
      return React5(ConjureDebugPrimitives.DebugSection, obj2);
    }
  }
  const obj15 = { title, children: null };
  const obj16 = { children: null };
  const intl12 = util.intl;
  obj16.children = intl12.string(_modDef3865["Noami/"]);
  obj15.children = hasOwnProperty(ConjureDebugPrimitives.DebugNote, obj16);
  return hasOwnProperty(ConjureDebugPrimitives.DebugSection, obj15);
}
function StorageSection(status) {
  status = status.status;
  const storage = status.storage;
  const stable = storage.stable;
  const limits = status.worker.limits;
  if (storage.shared_data) {
    let obj3 = { key: "shared", label: null, metrics: null };
    let intl = limits(1114).intl;
    obj3.label = intl.string(_modDef3865.V5kbaH);
    obj3.metrics = stable;
    let items = [obj3];
    let tmp4 = limits;
    let items1 = items;
  } else {
    let obj = { key: "preview", label: limits(12977).debugEnvLabel("preview"), metrics: tmp };
    items1 = [obj];
    let obj5 = { key: "stable", label: null, metrics: null };
    let obj2 = limits(12977);
    obj5.label = limits(12977).debugEnvLabel("stable");
    obj5.metrics = stable;
    items1[1] = obj5;
    tmp4 = limits;
    let obj4 = limits(12977);
  }
  let obj6 = { title: null, children: null };
  let intl2 = tmp4(1114).intl;
  obj6.title = intl2.string(_modDef3865.mRt7MW);
  obj6.children = items1.map((item) => {
    ({ key, label, metrics } = item);
    if (null == metrics) {
      const obj3 = { label, value: "\u2014" };
      let tmp18Result = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj3, key);
    } else {
      const obj4 = { label: null, value: null, hint: null };
      const intl2 = util.intl;
      const obj5 = { env: label };
      obj4.label = intl2.formatToPlainString(_modDef3865.u7kJJ4, obj5);
      obj4.value = ConjureDebugFormat.formatBytes(metrics.r2_bytes);
      const intl3 = util.intl;
      const tmp32 = _modDef3865;
      const obj = { count: null };
      const tmp = metrics.r2_truncated ? tmp32.lH0oQw : tmp32.m9h02S;
      obj.count = ConjureDebugFormat.formatCount(metrics.r2_objects);
      obj4.hint = intl3.formatToPlainString(tmp, obj);
      const items = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj4)];
      let tmp4 = null;
      if (null != metrics.db_bytes) {
        const obj6 = { label: null, used: null, max: null, formatValue: null };
        const intl = util.intl;
        const obj7 = { env: label };
        obj6.label = intl.formatToPlainString(_modDef3865.mnbPqt, obj7);
        obj6.used = metrics.db_bytes;
        obj6.max = limits.db_bytes;
        obj6.formatValue = ConjureDebugFormat.formatBytes;
        tmp4 = hasOwnProperty(ConjureDebugPrimitives.DebugMeter, obj6);
      }
      const obj8 = { children: null };
      items[1] = tmp4;
      obj8.children = items;
      tmp18Result = React5(noop.Fragment, obj8, key);
    }
    return tmp18Result;
  });
  return closure_5(tmp4(12980).DebugSection, obj6);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/native/ConjureDebugWorkerTab.tsx");

export default function ConjureDebugWorkerTab(status) {
  status = status.status;
  ({ fetchState, onRefresh } = status);
  const obj = { style: closure_8().tab, children: null };
  let generated_at;
  if (status != null) {
    generated_at = status.generated_at;
  }
  if (generated_at == null) {
    generated_at = null;
  }
  const items = [
    hasOwnProperty(ConjureDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }),
  ];
  let tmpResult = null;
  if (null != status) {
    const obj2 = { title: null, metrics: null, limits: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3865.o5xzvl);
    obj2.metrics = status.worker.preview;
    obj2.limits = status.worker.limits;
    const items1 = [hasOwnProperty(EnvMetricsSection, obj2), , , , , , , ,];
    const obj3 = { title: null, metrics: null, limits: null };
    const intl2 = util.intl;
    obj3.title = intl2.string(_modDef3865.n2X3ZK);
    obj3.metrics = status.worker.stable;
    obj3.limits = status.worker.limits;
    items1[1] = hasOwnProperty(EnvMetricsSection, obj3);
    const obj4 = { status };
    items1[2] = hasOwnProperty(StorageSection, obj4);
    let tmp3Result = null;
    if (null != status.bot) {
      const obj5 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(_modDef3865["7mahem"]);
      obj5.preview = status.bot.preview;
      obj5.stable = status.bot.stable;
      obj5.renderEnv = function renderEnv(env, bot) {
        return closure_1_5(BotEnvBlock, { env, bot });
      };
      tmp3Result = hasOwnProperty(EnvSection, obj5);
    }
    items1[3] = tmp3Result;
    let tmp3Result5 = null;
    if (null != status.outbound) {
      const obj6 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl4 = util.intl;
      obj6.title = intl4.string(_modDef3865.THneIO);
      obj6.preview = status.outbound.preview;
      obj6.stable = status.outbound.stable;
      obj6.renderEnv = function renderEnv(env, metrics) {
        return closure_1_5(OutboundEnvBlock, { env, metrics });
      };
      tmp3Result5 = hasOwnProperty(EnvSection, obj6);
    }
    items1[4] = tmp3Result5;
    let tmp3Result6 = null;
    if (null != status.runtime) {
      const obj7 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl5 = util.intl;
      obj7.title = intl5.string(_modDef3865.vboq04);
      obj7.preview = status.runtime.preview;
      obj7.stable = status.runtime.stable;
      obj7.renderEnv = function renderEnv(env, runtime) {
        return closure_1_5(RuntimeEnvBlock, { env, runtime });
      };
      tmp3Result6 = hasOwnProperty(EnvSection, obj7);
    }
    items1[5] = tmp3Result6;
    let tmp3Result7 = null;
    if (null != status.ai) {
      const obj8 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl6 = util.intl;
      obj8.title = intl6.string(_modDef3865.UzhuEq);
      obj8.preview = status.ai.preview;
      obj8.stable = status.ai.stable;
      obj8.renderEnv = function renderEnv(env, metrics) {
        return closure_1_5(AiEnvBlock, { env, metrics });
      };
      tmp3Result7 = hasOwnProperty(EnvSection, obj8);
    }
    items1[6] = tmp3Result7;
    let tmp3Result8 = null;
    if (null != status.analytics) {
      const obj9 = { analytics: status.analytics };
      tmp3Result8 = hasOwnProperty(ConjureDebugAnalytics.ConjureDebugWorkerAnalyticsSection, obj9);
    }
    items1[7] = tmp3Result8;
    const obj10 = { title: null, children: null };
    const intl7 = util.intl;
    obj10.title = intl7.string(_modDef3865.fQMpFp);
    const obj11 = { label: ConjureDebugLabels.debugEnvLabel("preview"), value: null };
    let str2 = "\u2014";
    let str3 = "\u2014";
    if (null != status.deployments.preview_build) {
      str3 = ConjureDebugFormat.shortBuildLabel(status.deployments.preview_build);
      const tmp4Result4 = ConjureDebugFormat;
    }
    obj11.value = str3;
    const items2 = [hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj11)];
    const obj12 = { label: null, value: null };
    const tmp4Result = ConjureDebugLabels;
    obj12.label = ConjureDebugLabels.debugEnvLabel("stable");
    if (null != status.deployments.stable_build) {
      str2 = ConjureDebugFormat.shortBuildLabel(status.deployments.stable_build);
      const tmp4Result6 = ConjureDebugFormat;
    }
    const obj13 = { children: null };
    obj12.value = str2;
    items2[1] = hasOwnProperty(ConjureDebugPrimitives.DebugStatRow, obj12);
    obj10.children = items2;
    items1[8] = React5(ConjureDebugPrimitives.DebugSection, obj10);
    obj13.children = items1;
    tmpResult = React5(timestampProducer, obj13);
    const tmp4Result5 = ConjureDebugLabels;
  }
  items[1] = tmpResult;
  obj.children = items;
  return React5(View, obj);
}
