// === Module 12846: ? ===

// Module 12846
import _mod12806 from "module_12806" /* 12806 */;
import _mod12834 from "module_12834" /* 12834 */;
import _mod12842 from "module_12842" /* 12842 */;
import _mod12849 from "module_12849" /* 12849 */;

require = arg1;
const dependencyMap = arg6;
function applyClientOptions(environment, environment2) {
  ({ release, dist, maxValueLength } = environment2);
  let num = 250;
  if (undefined !== maxValueLength) {
    num = maxValueLength;
  }
  let DEFAULT_ENVIRONMENT = environment.environment || environment2.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = _mod12834.DEFAULT_ENVIRONMENT;
  }
  environment.environment = DEFAULT_ENVIRONMENT;
  const release2 = environment.release;
  let tmp3 = !release2;
  if (!release2) {
    tmp3 = release;
  }
  if (tmp3) {
    environment.release = release;
  }
  const dist2 = environment.dist;
  let tmp4 = !dist2;
  if (!dist2) {
    tmp4 = dist;
  }
  if (tmp4) {
    environment.dist = dist;
  }
  if (environment.message) {
    environment.message = _mod12806.truncate(environment.message, num);
  }
  value = iter;
  if (environment.exception && environment.exception.values && environment.exception.values[0]) {
    value = iter.value;
  }
  if (value) {
    iter.value = _mod12806.truncate(iter.value, num);
  }
  const request = environment.request;
  let url = request;
  if (request) {
    url = request.url;
  }
  if (url) {
    request.url = _mod12806.truncate(request.url, num);
  }
}
function applyDebugIds(exception, arg1) {
  const filenameToDebugIdMap = _mod12849.getFilenameToDebugIdMap(arg1);
  try {
    const values = exception.exception.values;
    let item = values.forEach((stacktrace) => {
      const frames = stacktrace.stacktrace.frames;
      const item = frames.forEach((filename) => {
        filename = closure_1_0;
        if (closure_1_0) {
          filename = filename.filename;
        }
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
          delete tmp2[tmp];
        }
      });
    });
    const _Object = Object;
    if (0 !== Object.keys(obj).length) {
      let debug_meta = exception.debug_meta;
      if (!debug_meta) {
        debug_meta = {};
      }
      exception.debug_meta = debug_meta;
      let images = exception.debug_meta.images;
      if (!images) {
        images = [];
      }
      exception.debug_meta.images = images;
      images = exception.debug_meta.images;
      const _Object2 = Object;
      const entries = Object.entries(obj);
      const item1 = entries.forEach((item) => {
        [tmp, tmp2] = item;
        images.push({ type: "sourcemap", code_file: tmp, debug_id: tmp2 });
      });
    }
  } catch (err) {
  }
}
let closure_5 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];

export { applyClientOptions };
export { applyDebugIds };
export { applyDebugMeta };
export const parseEventHintOrCaptureContext = function parseEventHintOrCaptureContext(captureContext) {
  if (captureContext) {
    if (tmp3) {
      const obj = { captureContext };
      let tmp5 = obj;
    } else {
      const _Object = Object;
      const keys = Object.keys(captureContext);
      tmp5 = captureContext;
    }
    return tmp5;
  }
};
export const prepareEvent = function prepareEvent(normalizeDepth, event_id, event_id2, getScopeData, emit, getScopeData2) {
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
  let obj = {};
  let merged = Object.assign(event_id);
  let uuid4Result = event_id.event_id || event_id2.event_id;
  if (!uuid4Result) {
    uuid4Result = num(num2[0]).uuid4();
    let obj2 = num(num2[0]);
  }
  obj.event_id = uuid4Result;
  let timestamp = event_id.timestamp;
  if (!timestamp) {
    timestamp = num(num2[1]).dateTimestampInSeconds();
    const obj3 = num(num2[1]);
  }
  obj.timestamp = timestamp;
  let integrations = event_id2.integrations;
  if (!integrations) {
    const integrations1 = normalizeDepth.integrations;
    integrations = integrations1.map((name) => name.name);
  }
  applyClientOptions(obj, normalizeDepth);
  if (integrations.length > 0) {
    obj.sdk = obj.sdk || {};
    let integrations2 = obj.sdk.integrations;
    if (!integrations2) {
      integrations2 = [];
    }
    const items = [];
    HermesBuiltin.arraySpread(integrations, HermesBuiltin.arraySpread(integrations2, 0));
    obj.sdk.integrations = items;
  }
  if (emit) {
    emit.emit("applyFrameMetadata", event_id);
  }
  if (undefined === event_id.type) {
    applyDebugIds(obj, normalizeDepth.stackParser);
  }
  const captureContext = event_id2.captureContext;
  if (!captureContext) {
    if (event_id2.mechanism) {
      const result = num(num2[0]).addExceptionMechanism(obj, event_id2.mechanism);
      const obj5 = num(num2[0]);
    }
    if (emit) {
      let eventProcessors = emit.getEventProcessors();
    } else {
      eventProcessors = [];
    }
    const globalScope = num(num2[2]).getGlobalScope();
    const scopeData = globalScope.getScopeData();
    if (getScopeData2) {
      const scopeData1 = getScopeData2.getScopeData();
      let tmp26Result = tmp26(tmp27[3]);
      tmp26Result.mergeScopeData(scopeData, scopeData1);
    }
    if (getScopeData) {
      const scopeData2 = getScopeData.getScopeData();
      tmp26Result = tmp26(tmp27[3]);
      tmp26Result.mergeScopeData(scopeData, scopeData2);
    }
    const tmp33 = event_id2.attachments || [];
    const items1 = [];
    HermesBuiltin.arraySpread(scopeData.attachments, HermesBuiltin.arraySpread(tmp33, 0));
    if (items1.length) {
      event_id2.attachments = items1;
    }
    const obj6 = num(num2[2]);
    const result1 = num(num2[3]).applyScopeDataToEvent(obj, scopeData);
    const items2 = [];
    HermesBuiltin.arraySpread(scopeData.eventProcessors, HermesBuiltin.arraySpread(eventProcessors, 0));
    const tmp26Result1 = num(num2[3]);
    const result2 = num(num2[4]).notifyEventProcessors(items2, obj, event_id2);
    return result2.then((breadcrumbs) => {
      if (breadcrumbs) {
        applyDebugMeta(breadcrumbs);
      }
      let tmp4 = breadcrumbs;
      if (typeof num === "number") {
        tmp4 = breadcrumbs;
        if (tmp3 > 0) {
          closure_0 = tmp3;
          closure_1 = num2;
          let tmp30 = null;
          if (breadcrumbs) {
            let obj = {};
            let merged = Object.assign(breadcrumbs);
            breadcrumbs = breadcrumbs.breadcrumbs;
            if (breadcrumbs) {
              obj = { breadcrumbs: null };
              breadcrumbs = breadcrumbs.breadcrumbs;
              obj.breadcrumbs = breadcrumbs.map((data) => {
                let obj = {};
                const merged = Object.assign(data);
                data = data.data;
                if (data) {
                  obj = { data: null };
                  const normalizer = num(num2[8]);
                  obj.data = normalizer.normalize(data.data, closure_0, closure_1);
                  data = obj;
                }
                const merged1 = Object.assign(data);
                return obj;
              });
              breadcrumbs = obj;
            }
            let merged1 = Object.assign(breadcrumbs);
            let user = breadcrumbs.user;
            if (user) {
              obj = { user: null };
              let normalizer = _mod12842;
              obj.user = normalizer.normalize(breadcrumbs.user, tmp3, tmp33);
              user = obj;
            }
            const merged2 = Object.assign(user);
            let contexts = breadcrumbs.contexts;
            if (contexts) {
              const obj1 = { contexts: null };
              const normalizer2 = _mod12842;
              obj1.contexts = normalizer2.normalize(breadcrumbs.contexts, tmp3, tmp33);
              contexts = obj1;
            }
            const merged3 = Object.assign(contexts);
            let extra = breadcrumbs.extra;
            if (extra) {
              const obj2 = { extra: null };
              const normalizer3 = _mod12842;
              obj2.extra = normalizer3.normalize(breadcrumbs.extra, tmp3, tmp33);
              extra = obj2;
            }
            const merged4 = Object.assign(extra);
            if (tmp26) {
              obj.contexts.trace = breadcrumbs.contexts.trace;
              if (breadcrumbs.contexts.trace.data) {
                const normalizer4 = _mod12842;
                obj.contexts.trace.data = normalizer4.normalize(breadcrumbs.contexts.trace.data, tmp3, tmp33);
              }
            }
            if (breadcrumbs.spans) {
              const spans = breadcrumbs.spans;
              obj.spans = spans.map((data) => {
                let obj = {};
                const merged = Object.assign(data);
                data = data.data;
                if (data) {
                  obj = { data: null };
                  const normalizer = num(num2[8]);
                  obj.data = normalizer.normalize(data.data, closure_0, closure_1);
                  data = obj;
                }
                const merged1 = Object.assign(data);
                return obj;
              });
            }
            tmp30 = obj;
            if (tmp29) {
              const normalizer5 = _mod12842;
              obj.contexts.flags = normalizer5.normalize(breadcrumbs.contexts.flags, 3, tmp33);
              tmp30 = obj;
            }
            tmp26 = breadcrumbs.contexts && breadcrumbs.contexts.trace && obj.contexts;
            tmp29 = breadcrumbs.contexts && breadcrumbs.contexts.flags && obj.contexts;
          }
          tmp4 = tmp30;
        }
      }
      return tmp4;
    });
  } else {
    if (getScopeData) {
      let cloneResult = getScopeData.clone();
    } else {
      cloneResult = new num(num2[9]).Scope();
    }
    cloneResult.update(captureContext);
  }
};