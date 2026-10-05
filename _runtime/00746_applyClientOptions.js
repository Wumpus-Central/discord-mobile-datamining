// _runtime/00746_applyClientOptions.js
import _mod708 from "metro/00708__.js";
import Scope from "00719_Scope.js";
import normalize from "00741_normalize.js";
import _mod750 from "metro/00750__.js";

let data, integrations;

const f81851 = (stacktrace) => {
  stacktrace = stacktrace.stacktrace;
  if (stacktrace != null) {
    const frames = stacktrace.frames;
    if (frames != null) {
      const item = frames.forEach((filename) => {
        if (filename.filename) {
          filename.debug_id = closure_1_0[filename.filename];
        }
      });
    }
  }
};
function applyClientOptions(environment, environment2) {
  let dist;
  let maxValueLength;
  let release;
  ({ release, dist, maxValueLength } = environment2);
  const DEFAULT_ENVIRONMENT =
    environment.environment || environment2.environment || maxValueLength(734).DEFAULT_ENVIRONMENT;
  environment.environment = DEFAULT_ENVIRONMENT;
  const tmp3 = !environment.release && release;
  if (tmp3) {
    environment.release = release;
  }
  const tmp4 = !environment.dist && dist;
  if (tmp4) {
    environment.dist = dist;
  }
  const request = environment.request;
  let url;
  if (request != null) {
    url = request.url;
  }
  if (url) {
    url = maxValueLength;
  }
  if (url) {
    let obj = maxValueLength(708);
    request.url = obj.truncate(request.url, maxValueLength);
  }
  if (maxValueLength) {
    const exception = environment.exception;
    if (exception != null) {
      const values = exception.values;
      if (values != null) {
        const item = values.forEach((value) => {
          if (value.value) {
            const obj = _mod708;
            value.value = obj.truncate(value.value, maxValueLength);
          }
        });
      }
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_3 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

export { applyClientOptions };
export const applyDebugIds = function applyDebugIds(exception, arg1) {
  const obj = _mod750;
  const filenameToDebugIdMap = obj.getFilenameToDebugIdMap(arg1);
  exception = exception.exception;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      const item = values.forEach(f81851);
    }
  }
};
export const applyDebugMeta = function applyDebugMeta(exception) {
  const obj = {};
  exception = exception.exception;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      const item = values.forEach((stacktrace) => {
        stacktrace = stacktrace.stacktrace;
        if (stacktrace != null) {
          const frames = stacktrace.frames;
          if (frames != null) {
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
          }
        }
      });
    }
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
};
export const parseEventHintOrCaptureContext = function parseEventHintOrCaptureContext(captureContext) {
  if (captureContext) {
    let tmp5;
    const tmp3 = captureContext instanceof Scope.Scope || typeof captureContext === "function";
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
export const prepareEvent = function prepareEvent(normalizeDepth, event_id, event_id2, clone, emit, isolationScope) {
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
    let obj2 = num(num2[0]);
    uuid4Result = obj2.uuid4();
  }
  timestamp = event_id.timestamp;
  if (!timestamp) {
    const tmp6 = num;
    let tmp7 = num2;
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
    const stackParser = normalizeDepth.stackParser;
    let obj4 = num(num2[6]);
    const filenameToDebugIdMap = obj4.getFilenameToDebugIdMap(stackParser);
    let exception = obj.exception;
    if (exception != null) {
      let values = exception.values;
      if (values != null) {
        let item = values.forEach(f81851);
      }
    }
  }
  const captureContext = event_id2.captureContext;
  let tmp20 = clone;
  if (captureContext) {
    let cloneResult;
    if (clone) {
      cloneResult = clone.clone();
    } else {
      const self = this;
      const self2 = this;
      cloneResult = new num(num2[8]).Scope();
    }
    cloneResult.update(captureContext);
    tmp20 = cloneResult;
  }
  if (event_id2.mechanism) {
    let obj6 = num(num2[0]);
    const result = obj6.addExceptionMechanism(obj, event_id2.mechanism);
  }
  if (emit) {
    let eventProcessors = emit.getEventProcessors();
  } else {
    eventProcessors = [];
  }
  const obj7 = num(num2[2]);
  const combinedScopeData = obj7.getCombinedScopeData(isolationScope, tmp20);
  const items1 = [...combinedScopeData.attachments];
  if (items1.length) {
    event_id2.attachments = items1;
  }
  const tmp27Result = num(num2[2]);
  const result1 = tmp27Result.applyScopeDataToEvent(obj, combinedScopeData);
  const items2 = [...combinedScopeData.eventProcessors];
  const tmp27Result2 = num(num2[3]);
  const result2 = tmp27Result2.notifyEventProcessors(items2, obj, event_id2);
  return result2.then((exception) => {
    let breadcrumbs1;
    let normalizer;
    let normalizer2;
    let normalizer3;
    const tmp = exception;
    if (tmp) {
      let obj = {};
      exception = exception.exception;
      const tmp2 = null;
      if (exception != null) {
        const values = exception.values;
        if (values != null) {
          let item = values.forEach((stacktrace) => {
            stacktrace = stacktrace.stacktrace;
            if (stacktrace != null) {
              const frames = stacktrace.frames;
              if (frames != null) {
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
              }
            }
          });
        }
      }
      const _Object = Object;
      num = 0;
      if (0 !== Object.keys(obj).length) {
        exception.debug_meta = exception.debug_meta || {};
        let images = exception.debug_meta.images;
        const debug_meta = exception.debug_meta;
        if (!images) {
          images = [];
        }
        debug_meta.images = images;
        images = exception.debug_meta.images;
        const _Object2 = Object;
        const entries = Object.entries(obj);
        const item1 = entries.forEach((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          images.push({ type: "sourcemap", code_file: tmp, debug_id: tmp2 });
        });
      }
    }
    let tmp7 = exception;
    if (typeof num === "number") {
      tmp7 = exception;
      if (num > 0) {
        let closure_0 = tmp6;
        let closure_1 = num2;
        let tmp33 = null;
        if (exception) {
          let obj2 = {};
          let merged = Object.assign(exception);
          let breadcrumbs = exception.breadcrumbs;
          if (breadcrumbs) {
            const obj3 = {
              breadcrumbs: breadcrumbs1.map((data) => {
                let normalizer;
                const obj = {};
                const merged = Object.assign(data);
                data = data.data;
                if (data) {
                  const obj2 = { data: normalizer.normalize(data.data, closure_0, closure_1) };
                  normalizer = num(num2[7]);
                  data = obj2;
                }
                const merged1 = Object.assign(data);
                return obj;
              }),
            };
            breadcrumbs1 = exception.breadcrumbs;
            breadcrumbs = obj3;
          }
          let merged1 = Object.assign(breadcrumbs);
          let user = exception.user;
          if (user) {
            const obj4 = { user: normalizer.normalize(exception.user, num, num2) };
            normalizer = normalize;
            user = obj4;
          }
          const merged2 = Object.assign(user);
          let contexts = exception.contexts;
          if (contexts) {
            const obj5 = { contexts: normalizer2.normalize(exception.contexts, num, num2) };
            normalizer2 = normalize;
            contexts = obj5;
          }
          const merged3 = Object.assign(contexts);
          let extra = exception.extra;
          if (extra) {
            const obj6 = { extra: normalizer3.normalize(exception.extra, num, num2) };
            normalizer3 = normalize;
            extra = obj6;
          }
          const merged4 = Object.assign(extra);
          const contexts2 = exception.contexts;
          let trace1;
          if (contexts2 != null) {
            trace1 = contexts2.trace;
          }
          if (trace1) {
            trace1 = obj2.contexts;
          }
          if (trace1) {
            obj2.contexts.trace = exception.contexts.trace;
            if (exception.contexts.trace.data) {
              const trace = obj2.contexts.trace;
              const normalizer4 = normalize;
              trace.data = normalizer4.normalize(exception.contexts.trace.data, num, num2);
            }
          }
          if (exception.spans) {
            const spans = exception.spans;
            obj2.spans = spans.map((data) => {
              let normalizer;
              const obj = {};
              const merged = Object.assign(data);
              data = data.data;
              if (data) {
                const obj2 = { data: normalizer.normalize(data.data, closure_0, closure_1) };
                normalizer = num(num2[7]);
                data = obj2;
              }
              const merged1 = Object.assign(data);
              return obj;
            });
          }
          const contexts3 = exception.contexts;
          let flags;
          if (contexts3 != null) {
            flags = contexts3.flags;
          }
          if (flags) {
            flags = obj2.contexts;
          }
          tmp33 = obj2;
          if (flags) {
            const contexts4 = obj2.contexts;
            const normalizer5 = normalize;
            num2 = 3;
            contexts4.flags = normalizer5.normalize(exception.contexts.flags, 3, num2);
            tmp33 = obj2;
          }
        }
        tmp7 = tmp33;
      }
    }
    return tmp7;
  });
};
