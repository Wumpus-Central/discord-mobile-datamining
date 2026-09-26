// === Module 16420: VibegrationsDebugWorkerTab ===

// Module 16420 (VibegrationsDebugWorkerTab)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 16407 */;
import VibegrationsDebugLabels from "VibegrationsDebugLabels" /* 16408 */;
import VibegrationsDebugPrimitives from "VibegrationsDebugPrimitives" /* 16410 */;
import VibegrationsDebugAnalytics from "VibegrationsDebugAnalytics" /* 16421 */;
import noop from "module_19" /* 19 */;

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
    obj4.children = intl.string(_modDef3715.W4hcKL);
    items = hasOwnProperty(VibegrationsDebugPrimitives.DebugNote, obj4);
  }
  obj3.children = items;
  return hasOwnProperty(VibegrationsDebugPrimitives.DebugSection, obj3);
}
function BotEnvBlock(arg0) {
  ({ env, bot } = arg0);
  if (bot.ever_started) {
    const obj3 = { label: null, value: null, critical: null, hint: null };
    const intl2 = util.intl;
    const obj4 = { env: VibegrationsDebugLabels.debugEnvLabel(env) };
    obj3.label = intl2.formatToPlainString(_modDef3715.f8ix3w, obj4);
    obj3.value = VibegrationsDebugLabels.debugYesNo(bot.connected);
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
    const items = [hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3), , , , ];
    const obj7 = { label: null, value: null, hint: null };
    const intl3 = util.intl;
    obj7.label = intl3.string(_modDef3715["0AB7l3"]);
    obj7.value = VibegrationsDebugFormat.formatCount(bot.events_received);
    let combined;
    if (null != bot.last_event_type) {
      if (null != bot.last_event_at) {
        const _HermesInternal = HermesInternal;
        combined = "" + bot.last_event_type + " \u00B7 " + VibegrationsDebugFormat.formatObservedAt(bot.last_event_at);
        const tmp9Result6 = VibegrationsDebugFormat;
      }
    }
    obj7.hint = combined;
    items[1] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj7);
    const obj8 = { label: null, value: null };
    const intl4 = util.intl;
    obj8.label = intl4.string(_modDef3715.ElaQ0A);
    const tmp9Result = VibegrationsDebugFormat;
    obj8.value = VibegrationsDebugFormat.formatCount(bot.guild_count);
    items[2] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj8);
    const obj9 = { label: null, value: null, hint: null };
    const intl5 = util.intl;
    obj9.label = intl5.string(_modDef3715.SJtBTN);
    const tmp9Result7 = VibegrationsDebugFormat;
    obj9.value = VibegrationsDebugFormat.formatCount(bot.reconnects);
    let formatToPlainStringResult;
    if (null != bot.last_close_code) {
      if (null != bot.last_close_at) {
        const intl6 = util.intl;
        const obj10 = { code: bot.last_close_code, time: VibegrationsDebugFormat.formatObservedAt(bot.last_close_at) };
        formatToPlainStringResult = intl6.formatToPlainString(_modDef3715.bSzLue, obj10);
        const tmp9Result9 = VibegrationsDebugFormat;
      }
    }
    obj9.hint = formatToPlainStringResult;
    items[3] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj9);
    let tmp8Result = null;
    if (bot.dispatch_errors > 0) {
      const obj11 = { label: null, value: null, critical: true };
      const intl7 = util.intl;
      obj11.label = intl7.string(_modDef3715.N4l504);
      obj11.value = VibegrationsDebugFormat.formatCount(bot.dispatch_errors);
      tmp8Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj11);
      const tmp9Result10 = VibegrationsDebugFormat;
    }
    const obj12 = { children: null };
    items[4] = tmp8Result;
    obj12.children = items;
    let tmp6Result = React5(timestampProducer, obj12);
    const tmp9Result8 = VibegrationsDebugFormat;
  } else {
    const obj = { label: VibegrationsDebugLabels.debugEnvLabel(env), value: null };
    const intl = util.intl;
    obj.value = intl.string(_modDef3715.C6xjtD);
    tmp6Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj);
  }
  return tmp6Result;
}
function OutboundEnvBlock(metrics) {
  metrics = metrics.metrics;
  const sum = metrics.status_4xx + metrics.status_5xx;
  const obj = { label: VibegrationsDebugLabels.debugEnvLabel(metrics.env), value: null, critical: null, hint: null };
  const intl = util.intl;
  const obj3 = { requests: null, failures: null };
  obj3.requests = VibegrationsDebugFormat.formatCount(metrics.requests);
  obj3.failures = VibegrationsDebugFormat.formatCount(sum + metrics.errors);
  obj.value = intl.formatToPlainString(_modDef3715.Yur5Zm, obj3);
  obj.critical = metrics.errors + metrics.status_5xx > 0;
  if (null != metrics.last_failure) {
    const intl3 = util.intl;
    const obj6 = { host: metrics.last_failure.host, status: null, time: null };
    let str = metrics.last_failure.status;
    if (str == null) {
      str = "network";
    }
    obj6.status = str;
    obj6.time = VibegrationsDebugFormat.formatObservedAt(metrics.last_failure.at);
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3715["0ayoy+"], obj6);
    const tmp3Result = VibegrationsDebugFormat;
  } else {
    const intl2 = util.intl;
    const obj7 = { time: VibegrationsDebugFormat.formatObservedAt(metrics.since) };
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3715["1PdrB1"], obj7);
    const tmp3Result2 = VibegrationsDebugFormat;
  }
  obj.hint = formatToPlainStringResult;
  return hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj);
}
function RuntimeEnvBlock(env) {
  env = env.env;
  const runtime = env.runtime;
  let obj = { children: null };
  const obj2 = { label: null, value: null };
  let intl = env(1115).intl;
  let obj3 = { env: env(16408).debugEnvLabel(env) };
  obj2.label = intl.formatToPlainString(_modDef3715.BVORfc, obj3);
  let obj4 = env(16408);
  obj2.value = env(16407).formatCount(runtime.connections);
  const items = [closure_5(env(16410).DebugStatRow, obj2), ];
  const schedules = runtime.schedules;
  items[1] = schedules.map((id) => {
    const obj = { label: null, value: null, hint: null };
    const intl = util.intl;
    obj.label = intl.formatToPlainString(_modDef3715.NQxkhU, { id: id.id });
    obj.value = id.trigger;
    if (null != id.pending_state) {
      const intl3 = util.intl;
      const obj3 = { state: null, attempt: null };
      ({ pending_state: obj5.state, pending_attempt } = id);
      if (pending_attempt == null) {
        pending_attempt = 1;
      }
      obj3.attempt = pending_attempt;
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef3715.P8lBrO, obj3);
    } else if (null != id.next_run_at) {
      const intl2 = util.intl;
      const obj4 = { time: VibegrationsDebugFormat.formatObservedAt(id.next_run_at) };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3715["7ecbr3"], obj4);
      const tmp2Result = VibegrationsDebugFormat;
    }
    obj.hint = formatToPlainStringResult;
    return hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj, "" + env + "-" + id.id);
  });
  obj.children = items;
  return closure_7(closure_6, obj);
}
function AiEnvBlock(metrics) {
  metrics = metrics.metrics;
  const obj = { label: VibegrationsDebugLabels.debugEnvLabel(metrics.env), value: null, critical: null, hint: null };
  const intl = util.intl;
  const obj3 = { calls: null, errors: null };
  obj3.calls = VibegrationsDebugFormat.formatCount(metrics.calls);
  obj3.errors = VibegrationsDebugFormat.formatCount(metrics.errors);
  obj.value = intl.formatToPlainString(_modDef3715.voXL2a, obj3);
  obj.critical = metrics.errors > 0;
  obj.hint = metrics.last_model;
  return hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj);
}
function EnvMetricsSection(arg0) {
  ({ title, metrics, limits } = arg0);
  if (null != metrics) {
    if (0 !== metrics.requests) {
      const obj2 = { title, children: null };
      const obj3 = { label: null, value: null, hint: null };
      const intl13 = util.intl;
      obj3.label = intl13.string(_modDef3715.KOnL3g);
      obj3.value = VibegrationsDebugFormat.formatCount(metrics.requests);
      const intl14 = util.intl;
      const obj4 = { time: null };
      obj4.time = VibegrationsDebugFormat.formatObservedAt(metrics.since);
      obj3.hint = intl14.formatToPlainString(_modDef3715["1PdrB1"], obj4);
      const items = [hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3), , , , , , ];
      const obj5 = { label: null, value: null, critical: null };
      const intl15 = util.intl;
      obj5.label = intl15.string(_modDef3715.CjPhyY);
      obj5.value = VibegrationsDebugFormat.formatCount(metrics.errors);
      obj5.critical = metrics.errors > 0;
      items[1] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj5);
      if (metrics.cpu_ms_total > 0) {
        const obj6 = { children: null };
        const obj7 = { label: null, used: null, max: null, formatValue: null };
        const intl4 = util.intl;
        obj7.label = intl4.string(_modDef3715["V/nNbs"]);
        obj7.used = metrics.cpu_ms_max;
        obj7.max = limits.cpu_ms_per_request;
        obj7.formatValue = VibegrationsDebugFormat.formatMs;
        const items1 = [hasOwnProperty(VibegrationsDebugPrimitives.DebugMeter, obj7), ];
        const obj8 = { label: null, value: null, hint: null };
        const intl5 = util.intl;
        obj8.label = intl5.string(_modDef3715["+rYPHD"]);
        obj8.value = VibegrationsDebugFormat.formatMs(metrics.cpu_ms_total / metrics.requests);
        const intl6 = util.intl;
        const obj9 = { total: null, wall: null };
        const tmp9Result = VibegrationsDebugFormat;
        obj9.total = VibegrationsDebugFormat.formatMs(metrics.cpu_ms_total);
        const tmp9Result7 = VibegrationsDebugFormat;
        obj9.wall = VibegrationsDebugFormat.formatMs(metrics.wall_ms_total);
        obj8.hint = intl6.formatToPlainString(_modDef3715["+LxC7W"], obj9);
        items1[1] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj8);
        obj6.children = items1;
        let tmp = React5(timestampProducer, obj6);
        const tmp9Result8 = VibegrationsDebugFormat;
      } else {
        const obj = { label: null, value: null, hint: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3715["V/nNbs"]);
        const intl2 = util.intl;
        obj.value = intl2.string(_modDef3715.YKWIxp);
        const intl3 = util.intl;
        obj.hint = intl3.string(_modDef3715["8GAiDk"]);
        tmp = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj);
      }
      items[2] = tmp;
      let tmp11Result = null;
      if (metrics.cpu_ms_total <= 0) {
        tmp11Result = null;
        if (metrics.wall_ms_total > 0) {
          const obj10 = { label: null, value: null };
          const intl7 = util.intl;
          obj10.label = intl7.string(_modDef3715.ueEMPa);
          obj10.value = VibegrationsDebugFormat.formatMs(metrics.wall_ms_total);
          tmp11Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj10);
          const tmp9Result9 = VibegrationsDebugFormat;
        }
      }
      items[3] = tmp11Result;
      let tmp11Result3 = null;
      if (metrics.exceeded_cpu > 0) {
        const obj11 = { label: null, value: null, critical: true };
        const intl8 = util.intl;
        obj11.label = intl8.string(_modDef3715.vM2krr);
        obj11.value = VibegrationsDebugFormat.formatCount(metrics.exceeded_cpu);
        tmp11Result3 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj11);
        const tmp9Result10 = VibegrationsDebugFormat;
      }
      items[4] = tmp11Result3;
      const obj12 = { label: null, value: null, critical: null, hint: null };
      const intl9 = util.intl;
      obj12.label = intl9.string(_modDef3715.g1O88C);
      obj12.value = VibegrationsDebugFormat.formatCount(metrics.exceeded_memory);
      obj12.critical = metrics.exceeded_memory > 0;
      const intl10 = util.intl;
      const obj13 = { limit: null };
      const _HermesInternal = HermesInternal;
      obj13.limit = "" + limits.memory_mb + " MB";
      obj12.hint = intl10.formatToPlainString(_modDef3715["5iALNP"], obj13);
      items[5] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj12);
      let tmp11Result4 = null;
      if (null != metrics.build) {
        const obj14 = { label: null, value: null };
        const intl11 = util.intl;
        obj14.label = intl11.string(_modDef3715.JUZs7g);
        obj14.value = VibegrationsDebugFormat.shortBuildLabel(metrics.build);
        tmp11Result4 = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj14);
        const tmp9Result12 = VibegrationsDebugFormat;
      }
      items[6] = tmp11Result4;
      obj2.children = items;
      return React5(VibegrationsDebugPrimitives.DebugSection, obj2);
    }
  }
  const obj15 = { title, children: null };
  const obj16 = { children: null };
  const intl12 = util.intl;
  obj16.children = intl12.string(_modDef3715["v/fbnv"]);
  obj15.children = hasOwnProperty(VibegrationsDebugPrimitives.DebugNote, obj16);
  return hasOwnProperty(VibegrationsDebugPrimitives.DebugSection, obj15);
}
function StorageSection(status) {
  status = status.status;
  const storage = status.storage;
  const stable = storage.stable;
  const limits = status.worker.limits;
  if (storage.shared_data) {
    let obj3 = { key: "shared", label: null, metrics: null };
    let intl = limits(1115).intl;
    obj3.label = intl.string(_modDef3715.Vrh0rD);
    obj3.metrics = stable;
    let items = [obj3];
    let tmp4 = limits;
    let items1 = items;
  } else {
    let obj = { key: "preview", label: limits(16408).debugEnvLabel("preview"), metrics: tmp };
    items1 = [obj, ];
    let obj5 = { key: "stable", label: null, metrics: null };
    let obj2 = limits(16408);
    obj5.label = limits(16408).debugEnvLabel("stable");
    obj5.metrics = stable;
    items1[1] = obj5;
    tmp4 = limits;
    let obj4 = limits(16408);
  }
  let obj6 = { title: null, children: null };
  let intl2 = tmp4(1115).intl;
  obj6.title = intl2.string(_modDef3715.i91625);
  obj6.children = items1.map((item) => {
    ({ key, label, metrics } = item);
    if (null == metrics) {
      const obj3 = { label, value: "\u2014" };
      let tmp18Result = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj3, key);
    } else {
      const obj4 = { label: null, value: null, hint: null };
      const intl2 = util.intl;
      const obj5 = { env: label };
      obj4.label = intl2.formatToPlainString(_modDef3715["9TpIQg"], obj5);
      obj4.value = VibegrationsDebugFormat.formatBytes(metrics.r2_bytes);
      const intl3 = util.intl;
      const tmp32 = _modDef3715;
      const obj = { count: null };
      const tmp = metrics.r2_truncated ? tmp32.o45MMA : tmp32.S7o3vV;
      obj.count = VibegrationsDebugFormat.formatCount(metrics.r2_objects);
      obj4.hint = intl3.formatToPlainString(tmp, obj);
      const items = [hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj4), ];
      let tmp4 = null;
      if (null != metrics.db_bytes) {
        const obj6 = { label: null, used: null, max: null, formatValue: null };
        const intl = util.intl;
        const obj7 = { env: label };
        obj6.label = intl.formatToPlainString(_modDef3715["0OIswI"], obj7);
        obj6.used = metrics.db_bytes;
        obj6.max = limits.db_bytes;
        obj6.formatValue = VibegrationsDebugFormat.formatBytes;
        tmp4 = hasOwnProperty(VibegrationsDebugPrimitives.DebugMeter, obj6);
      }
      const obj8 = { children: null };
      items[1] = tmp4;
      obj8.children = items;
      tmp18Result = React5(noop.Fragment, obj8, key);
    }
    return tmp18Result;
  });
  return closure_5(tmp4(16410).DebugSection, obj6);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { tab: { gap: nativeDefault.space.PX_24 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsDebugWorkerTab.tsx");

export default function VibegrationsDebugWorkerTab(status) {
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
  const items = [hasOwnProperty(VibegrationsDebugPrimitives.DebugSnapshotToolbar, { generatedAt: generated_at, fetchState, onRefresh }), ];
  let tmpResult = null;
  if (null != status) {
    const obj2 = { title: null, metrics: null, limits: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3715["+dpDma"]);
    obj2.metrics = status.worker.preview;
    obj2.limits = status.worker.limits;
    const items1 = [hasOwnProperty(EnvMetricsSection, obj2), , , , , , , , ];
    const obj3 = { title: null, metrics: null, limits: null };
    const intl2 = util.intl;
    obj3.title = intl2.string(_modDef3715.NQHyed);
    obj3.metrics = status.worker.stable;
    obj3.limits = status.worker.limits;
    items1[1] = hasOwnProperty(EnvMetricsSection, obj3);
    const obj4 = { status };
    items1[2] = hasOwnProperty(StorageSection, obj4);
    let tmp3Result = null;
    if (null != status.bot) {
      const obj5 = { title: null, preview: null, stable: null, renderEnv: null };
      const intl3 = util.intl;
      obj5.title = intl3.string(_modDef3715.rx1pBg);
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
      obj6.title = intl4.string(_modDef3715["t2+yv/"]);
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
      obj7.title = intl5.string(_modDef3715.QifItp);
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
      obj8.title = intl6.string(_modDef3715.SWKshl);
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
      tmp3Result8 = hasOwnProperty(VibegrationsDebugAnalytics.VibegrationsDebugWorkerAnalyticsSection, obj9);
    }
    items1[7] = tmp3Result8;
    const obj10 = { title: null, children: null };
    const intl7 = util.intl;
    obj10.title = intl7.string(_modDef3715["HHe+8E"]);
    const obj11 = { label: VibegrationsDebugLabels.debugEnvLabel("preview"), value: null };
    let str2 = "\u2014";
    let str3 = "\u2014";
    if (null != status.deployments.preview_build) {
      str3 = VibegrationsDebugFormat.shortBuildLabel(status.deployments.preview_build);
      const tmp4Result4 = VibegrationsDebugFormat;
    }
    obj11.value = str3;
    const items2 = [hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj11), ];
    const obj12 = { label: null, value: null };
    const tmp4Result = VibegrationsDebugLabels;
    obj12.label = VibegrationsDebugLabels.debugEnvLabel("stable");
    if (null != status.deployments.stable_build) {
      str2 = VibegrationsDebugFormat.shortBuildLabel(status.deployments.stable_build);
      const tmp4Result6 = VibegrationsDebugFormat;
    }
    const obj13 = { children: null };
    obj12.value = str2;
    items2[1] = hasOwnProperty(VibegrationsDebugPrimitives.DebugStatRow, obj12);
    obj10.children = items2;
    items1[8] = React5(VibegrationsDebugPrimitives.DebugSection, obj10);
    obj13.children = items1;
    tmpResult = React5(timestampProducer, obj13);
    const tmp4Result5 = VibegrationsDebugLabels;
  }
  items[1] = tmpResult;
  obj.children = items;
  return React5(View, obj);
};