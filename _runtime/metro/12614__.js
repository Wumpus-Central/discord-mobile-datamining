// === Module 12614: ? ===

// Module 12614
import _mod12574 from "module_12574" /* 12574 */;
import _mod12586 from "module_12586" /* 12586 */;
import _mod12602 from "module_12602" /* 12602 */;
import _mod12610 from "module_12610" /* 12610 */;
import _mod12617 from "module_12617" /* 12617 */;

let breadcrumbs, data, filename, integrations;

function applyClientOptions(environment, environment2) {
  let dist;
  let maxValueLength;
  let release;
  ({ release, dist, maxValueLength } = environment2);
  let num = 250;
  environment = environment2.environment;
  if (undefined !== maxValueLength) {
    num = maxValueLength;
  }
  const DEFAULT_ENVIRONMENT = environment.environment || environment || _mod12602.DEFAULT_ENVIRONMENT;
  environment.environment = DEFAULT_ENVIRONMENT;
  const tmp3 = !environment.release && release;
  if (tmp3) {
    environment.release = release;
  }
  const tmp4 = !environment.dist && dist;
  if (tmp4) {
    environment.dist = dist;
  }
  if (environment.message) {
    const obj = _mod12574;
    environment.message = obj.truncate(environment.message, num);
  }
  const tmp7 = environment.exception && environment.exception.values && environment.exception.values[0] && (environment.exception && environment.exception.values && environment.exception.values[0]).value;
  if (tmp7) {
    const obj2 = _mod12574;
    (environment.exception && environment.exception.values && environment.exception.values[0]).value = obj2.truncate((environment.exception && environment.exception.values && environment.exception.values[0]).value, num);
  }
  const request = environment.request;
  const tmp10 = request && request.url;
  if (tmp10) {
    const obj3 = _mod12574;
    request.url = obj3.truncate(request.url, num);
  }
}
function applyDebugIds(exception, arg1) {
  const obj = _mod12617;
  const filenameToDebugIdMap = obj.getFilenameToDebugIdMap(arg1);
  try {
    const values = exception.exception.values;
    let item = values.forEach((stacktrace) => {
      const frames = stacktrace.stacktrace.frames;
      const item = frames.forEach((filename) => {
        filename = closure_1_0 && filename.filename;
        if (filename) {
          filename.debug_id = closure_1_0[filename.filename];
        }
      });
    });
  } catch (err) {
  }
}
function applyDebugMeta(exception) {
  const obj = {};
  try {
    const values = exception.exception.values;
    let item = values.forEach((stacktrace) => {
      const frames = stacktrace.stacktrace.frames;
      const item = frames.forEach((debug_id) => {
        if (debug_id.debug_id) {
          if (debug_id.abs_path) {
            obj[debug_id.abs_path] = debug_id.debug_id;
          } else if (debug_id.filename) {
            obj[debug_id.filename] = debug_id.debug_id;
          }
          delete tmp["debug_id"];
        }
      });
    });
  } catch (err) {
  }
  if (0 !== Object.keys(obj).length) {
    exception.debug_meta = exception.debug_meta || {};
    let images = exception.debug_meta.images;
    const debug_meta = exception.debug_meta;
    if (!images) {
      images = [];
    }
    debug_meta.images = images;
    images = exception.debug_meta.images;
    const _Object = Object;
    const entries = Object.entries(obj);
    const item1 = entries.forEach((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      images.push({ type: "sourcemap", code_file: tmp, debug_id: tmp2 });
    });
  }
}
let closure_5 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];

export { applyClientOptions };
export { applyDebugIds };
export { applyDebugMeta };
export const parseEventHintOrCaptureContext = function parseEventHintOrCaptureContext(captureContext) {
  if (captureContext) {
    let tmp5;
    const tmp3 = captureContext instanceof _mod12586.Scope || typeof captureContext === "function";
    if (tmp3) {
      tmp5 = { captureContext };
      const obj = { captureContext };
    } else {
      const _Object = Object;
      const keys = Object.keys(captureContext);
      tmp5 = captureContext;
    }
    return tmp5;
  }
};
export const prepareEvent = function prepareEvent(normalizeDepth, event_id, event_id2, clone, emit, getScopeData) {
  let timestamp;
  let uuid4Result;
  normalizeDepth = normalizeDepth.normalizeDepth;
  let num = 3;
  if (undefined !== normalizeDepth) {
    num = normalizeDepth;
  }
  const normalizeMaxBreadth = normalizeDepth.normalizeMaxBreadth;
  let num2 = 1000;
  if (undefined !== normalizeMaxBreadth) {
    num2 = normalizeMaxBreadth;
  }
  let obj = { event_id: uuid4Result, timestamp };
  let merged = Object.assign(event_id);
  uuid4Result = event_id.event_id || event_id2.event_id;
  if (!uuid4Result) {
    const tmp4 = num;
    let tmp5 = num2;
    let obj2 = num(num2[0]);
    uuid4Result = obj2.uuid4();
  }
  timestamp = event_id.timestamp;
  if (!timestamp) {
    let obj3 = num(num2[1]);
    timestamp = obj3.dateTimestampInSeconds();
  }
  integrations = event_id2.integrations;
  if (!integrations) {
    const integrations1 = normalizeDepth.integrations;
    integrations = integrations1.map((name) => name.name);
  }
  applyClientOptions(obj, normalizeDepth);
  if (integrations.length > 0) {
    obj.sdk = obj.sdk || {};
    let integrations2 = obj.sdk.integrations;
    const sdk = obj.sdk;
    if (!integrations2) {
      integrations2 = [];
    }
    const items = [];
    HermesBuiltin.arraySpread(items, integrations, HermesBuiltin.arraySpread(items, integrations2, 0));
    sdk.integrations = items;
  }
  const tmp14 = emit;
  if (tmp14) {
    emit.emit("applyFrameMetadata", event_id);
  }
  if (undefined === event_id.type) {
    applyDebugIds(obj, normalizeDepth.stackParser);
  }
  const captureContext = event_id2.captureContext;
  let obj4 = clone;
  if (captureContext) {
    let cloneResult;
    if (clone) {
      cloneResult = clone.clone();
    } else {
      const self = this;
      const self2 = this;
      cloneResult = new num(num2[9]).Scope();
    }
    cloneResult.update(captureContext);
    obj4 = cloneResult;
  }
  if (event_id2.mechanism) {
    const obj6 = num(num2[0]);
    const result = obj6.addExceptionMechanism(obj, event_id2.mechanism);
  }
  if (emit) {
    let eventProcessors = emit.getEventProcessors();
  } else {
    eventProcessors = [];
  }
  const obj7 = num(num2[2]);
  const globalScope = obj7.getGlobalScope();
  const scopeData = globalScope.getScopeData();
  if (getScopeData) {
    const scopeData1 = getScopeData.getScopeData();
    const tmp24Result = num(num2[3]);
    tmp24Result.mergeScopeData(scopeData, scopeData1);
  }
  if (obj4) {
    const scopeData2 = obj4.getScopeData();
    const tmp24Result4 = num(num2[3]);
    tmp24Result4.mergeScopeData(scopeData, scopeData2);
  }
  let tmp31 = event_id2.attachments || [];
  const items1 = [...scopeData.attachments];
  if (items1.length) {
    event_id2.attachments = items1;
  }
  const tmp24Result5 = num(num2[3]);
  const result1 = tmp24Result5.applyScopeDataToEvent(obj, scopeData);
  const items2 = [...scopeData.eventProcessors];
  const tmp24Result6 = num(num2[4]);
  const result2 = tmp24Result6.notifyEventProcessors(items2, obj, event_id2);
  return result2.then((breadcrumbs) => {
    let breadcrumbs1;
    let normalizer;
    let normalizer2;
    let normalizer3;
    const tmp = breadcrumbs;
    if (tmp) {
      applyDebugMeta(breadcrumbs);
    }
    let tmp5 = breadcrumbs;
    if (typeof num === "number") {
      num2 = 0;
      tmp5 = breadcrumbs;
      if (num > 0) {
        let closure_0 = tmp4;
        let closure_1 = num2;
        let tmp31 = null;
        if (breadcrumbs) {
          let obj = {};
          let merged = Object.assign(breadcrumbs);
          breadcrumbs = breadcrumbs.breadcrumbs;
          if (breadcrumbs) {
            let obj2 = {
              breadcrumbs: breadcrumbs1.map((data) => {
                        let normalizer;
                        const obj = {};
                        const merged = Object.assign(data);
                        data = data.data;
                        if (data) {
                          const obj2 = { data: normalizer.normalize(data.data, closure_0, closure_1) };
                          normalizer = num(num2[8]);
                          data = obj2;
                        }
                        const merged1 = Object.assign(data);
                        return obj;
                      })
            };
            breadcrumbs1 = breadcrumbs.breadcrumbs;
            breadcrumbs = obj2;
          }
          let merged1 = Object.assign(breadcrumbs);
          let user = breadcrumbs.user;
          if (user) {
            const obj3 = { user: normalizer.normalize(breadcrumbs.user, num, num2) };
            normalizer = _mod12610;
            user = obj3;
          }
          const merged2 = Object.assign(user);
          let contexts = breadcrumbs.contexts;
          if (contexts) {
            const obj4 = { contexts: normalizer2.normalize(breadcrumbs.contexts, num, num2) };
            normalizer2 = _mod12610;
            contexts = obj4;
          }
          const merged3 = Object.assign(contexts);
          let extra = breadcrumbs.extra;
          if (extra) {
            const obj5 = { extra: normalizer3.normalize(breadcrumbs.extra, num, num2) };
            normalizer3 = _mod12610;
            extra = obj5;
          }
          const merged4 = Object.assign(extra);
          const tmp27 = breadcrumbs.contexts && breadcrumbs.contexts.trace && obj.contexts;
          if (tmp27) {
            obj.contexts.trace = breadcrumbs.contexts.trace;
            if (breadcrumbs.contexts.trace.data) {
              const trace = obj.contexts.trace;
              const normalizer4 = _mod12610;
              trace.data = normalizer4.normalize(breadcrumbs.contexts.trace.data, num, num2);
            }
          }
          if (breadcrumbs.spans) {
            const spans = breadcrumbs.spans;
            obj.spans = spans.map((data) => {
              let normalizer;
              const obj = {};
              const merged = Object.assign(data);
              data = data.data;
              if (data) {
                const obj2 = { data: normalizer.normalize(data.data, closure_0, closure_1) };
                normalizer = num(num2[8]);
                data = obj2;
              }
              const merged1 = Object.assign(data);
              return obj;
            });
          }
          tmp31 = obj;
          const tmp30 = breadcrumbs.contexts && breadcrumbs.contexts.flags && obj.contexts;
          if (tmp30) {
            const contexts2 = obj.contexts;
            const normalizer5 = _mod12610;
            num = 3;
            contexts2.flags = normalizer5.normalize(breadcrumbs.contexts.flags, 3, num2);
            tmp31 = obj;
          }
        }
        tmp5 = tmp31;
      }
    }
    return tmp5;
  });
};