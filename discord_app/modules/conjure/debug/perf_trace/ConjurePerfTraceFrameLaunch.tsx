// === Module 7718: ConjurePerfTraceFrameLaunch ===

// Module 7718 (ConjurePerfTraceFrameLaunch)
import FrameLaunchTimingTypes from "FrameLaunchTimingTypes" /* 7685 */;
import size from "module_2" /* 2 */;

function frameLaunchTraceId(launchId) {
  return "frame-launch:" + launchId.launchId;
}
function stepSpan(item10014, addSpanResult, totalMs) {
  const obj = { parent: addSpanResult, name: "launch." + item10014.step, start: item10014.startMs, end: null };
  if (null != item10014.durationMs) {
    let startMs = item10014.startMs + item10014.durationMs;
  } else if (item10014.status === FrameLaunchTimingTypes.StepStatus.PENDING) {
    startMs = totalMs.totalMs;
  } else {
    startMs = item10014.startMs;
  }
  obj.end = startMs;
  if (item10014.status !== FrameLaunchTimingTypes.StepStatus.OK) {
    const obj2 = { status: item10014.status };
    obj.attrs = obj2;
  }
  if (item10014.status === FrameLaunchTimingTypes.StepStatus.FAILED) {
    obj.error = "failed";
  }
  return obj;
}
function resourceSpan(item10029, addSpanResult1) {
  return { parent: addSpanResult1, name: "request." + item10029.kind, start: item10029.startMs, end: item10029.startMs + item10029.durationMs, attrs: { path: item10029.path }, details: resourceDetails(item10029) };
}
function resourceDetails(protocol) {
  const obj = {};
  if ("" !== protocol.protocol) {
    obj.protocol = protocol.protocol;
  }
  obj.transfer_size = protocol.transferSize;
  ({ dns: obj.dns_ms, connect: obj.connect_ms, tls: obj.tls_ms, request: obj.request_ms, ttfb: obj.ttfb_ms, download: obj.download_ms } = protocol.phases);
  const iter = protocol.serverTiming[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let _HermesInternal = HermesInternal;
    let combined = "server " + nextResult.name;
    obj[combined] = serverTimingLabel(nextResult);
    continue;
  }
  return obj;
}
function serverTimingLabel(nextResult) {
  const combined = "" + nextResult.duration + "ms";
  let combined1 = combined;
  if ("" !== nextResult.description) {
    const _HermesInternal = HermesInternal;
    combined1 = "" + combined + " " + nextResult.description;
  }
  return combined1;
}
let items = [FrameLaunchTimingTypes.FrameLaunchOutcomeType.FAILED, FrameLaunchTimingTypes.FrameLaunchOutcomeType.TIMEOUT];
const set = new Set(items);
const items1 = [FrameLaunchTimingTypes.LaunchStep.LAUNCH_STARTED, FrameLaunchTimingTypes.LaunchStep.DISPATCHED, FrameLaunchTimingTypes.LaunchStep.IFRAME_CREATED, FrameLaunchTimingTypes.LaunchStep.IFRAME_LOAD, FrameLaunchTimingTypes.LaunchStep.HANDSHAKE, FrameLaunchTimingTypes.LaunchStep.READY];
const set1 = new Set(items1);
const result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceFrameLaunch.tsx");

export const FRAME_LAUNCH_MOMENT_SPAN_NAMES = new Set(items1.map(function launchStepSpanName(item) {
  return "launch." + item;
}));
export function frameLaunchPerfTrace(startedAt) {
  function addSpan(arg0) {
    const merged = Object.assign(arg0);
    items.push({ id: items.length });
    return items.length;
  }
  items = [];
  const addSpanResult = addSpan((function launchSpan(application_id) {
    const formatted = items(dependencyMap[1]).EmbeddedSurfaceType[application_id.surface].toLowerCase();
    const obj = { parent: null, name: "launch." + formatted, start: 0, end: application_id.totalMs, attrs: { outcome: application_id.outcome, trigger: application_id.trigger, surface: formatted, closed_by: application_id.closedBy }, details: null };
    const obj2 = { application_id: application_id.applicationId };
    if (null != application_id.readyMs) {
      obj2.ready_ms = application_id.readyMs;
    }
    if (null != application_id.pageLoadMs) {
      obj2.page_load_ms = application_id.pageLoadMs;
    }
    if (null != application_id.pageLoadSource) {
      obj2.page_load_source = application_id.pageLoadSource;
    }
    if (null != application_id.sdkVersion) {
      obj2.sdk_version = application_id.sdkVersion;
    }
    obj.details = obj2;
    if (set.has(application_id.outcome)) {
      let outcome = application_id.error;
      if (outcome == null) {
        outcome = application_id.outcome;
      }
      obj.error = outcome;
    }
    return obj;
  })(startedAt));
  for (const item10014 of tmp2) {
    let addSpanResult1 = addSpan(stepSpan(item10014, addSpanResult, arg0));
    if (set1.has(item10014.step)) {
      addSpanResult1 = addSpanResult;
    }
    let resources = item10014.resources;
    for (const item10029 of resources) {
      let addSpanResult2 = addSpan(resourceSpan(item10029, addSpanResult1));
      continue;
    }
    continue;
  }
  return { id: frameLaunchTraceId(startedAt), name: "App Launch", started_at: startedAt.startedAt, as_of: startedAt.totalMs, started_by: null, spans: items, dropped: 0, live: false };
}