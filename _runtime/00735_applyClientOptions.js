// _runtime/00735_applyClientOptions.js
import _mod697 from "metro/00697__.js";
import normalize from "00730_normalize.js";
import _mod739 from "metro/00739__.js";

require = arg1;
const dependencyMap = arg6;
function applyClientOptions(environment, environment2) {
  ({ release, dist, maxValueLength } = environment2);
  let DEFAULT_ENVIRONMENT = environment.environment || environment2.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = maxValueLength(723).DEFAULT_ENVIRONMENT;
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
  const request = environment.request;
  let url;
  if (request != null) {
    url = request.url;
  }
  if (url) {
    url = maxValueLength;
  }
  if (url) {
    request.url = maxValueLength(697).truncate(request.url, maxValueLength);
    let obj = maxValueLength(697);
  }
  if (maxValueLength) {
    const exception = environment.exception;
    if (exception != null) {
      const values = exception.values;
      if (values != null) {
        const item = values.forEach((value) => {
          if (value.value) {
            value.value = _mod697.truncate(value.value, maxValueLength);
          }
        });
      }
    }
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_3 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

export { applyClientOptions };
export const applyDebugIds = function applyDebugIds(exception, arg1) {
  const filenameToDebugIdMap = _mod739.getFilenameToDebugIdMap(arg1);
  exception = exception.exception;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      const item = values.forEach((stacktrace) => {
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
      });
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
                  closure_1_0[debug_id.abs_path] = debug_id.debug_id;
                } else if (debug_id.filename) {
                  closure_1_0[debug_id.filename] = debug_id.debug_id;
                }
                delete tmp2[tmp];
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
    if (!images) {
      images = [];
    }
    exception.debug_meta.images = images;
    images = exception.debug_meta.images;
    const _Object = Object;
    const entries = Object.entries(obj);
    const item1 = entries.forEach((item) => {
      [tmp, tmp2] = item;
      closure_1.push({ type: "sourcemap", code_file: tmp, debug_id: tmp2 });
    });
  }
};
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
export const prepareEvent = function prepareEvent(normalizeDepth, event_id, event_id2, clone, emit, isolationScope) {
  normalizeDepth = normalizeDepth.normalizeDepth;
  let num = 3;
  if (undefined !== normalizeDepth) {
    num = normalizeDepth;
  }
  _require = num;
  const normalizeMaxBreadth = normalizeDepth.normalizeMaxBreadth;
  let num2 = 1000;
  if (undefined !== normalizeMaxBreadth) {
    num2 = normalizeMaxBreadth;
  }
  let obj = {};
  let merged = Object.assign(event_id);
  let uuid4Result = event_id.event_id || event_id2.event_id;
  if (!uuid4Result) {
    uuid4Result = require("uuid4").uuid4();
    let obj2 = require("uuid4");
  }
  obj.event_id = uuid4Result;
  let timestamp = event_id.timestamp;
  if (!timestamp) {
    timestamp = require("dateTimestampInSeconds").dateTimestampInSeconds();
    let obj3 = require("dateTimestampInSeconds");
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
    _require = undefined;
    _require = require("metro/00739__.js").getFilenameToDebugIdMap(normalizeDepth.stackParser);
    let exception = obj.exception;
    if (exception != null) {
      let values = exception.values;
      if (values != null) {
        let item = values.forEach((stacktrace) => {
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
        });
      }
    }
    const obj4 = require("metro/00739__.js");
  }
  const captureContext = event_id2.captureContext;
  if (!captureContext) {
    if (event_id2.mechanism) {
      const result = require("uuid4").addExceptionMechanism(obj, event_id2.mechanism);
      const obj6 = require("uuid4");
    }
    if (emit) {
      let eventProcessors = emit.getEventProcessors();
    } else {
      eventProcessors = [];
    }
    const combinedScopeData = require("mergeScopeData").getCombinedScopeData(isolationScope, clone);
    const tmp31 = event_id2.attachments || [];
    const items1 = [];
    HermesBuiltin.arraySpread(combinedScopeData.attachments, HermesBuiltin.arraySpread(tmp31, 0));
    if (items1.length) {
      event_id2.attachments = items1;
    }
    let tmp28Result = tmp28(tmp29[2]);
    const result1 = tmp28Result.applyScopeDataToEvent(obj, combinedScopeData);
    const items2 = [];
    HermesBuiltin.arraySpread(combinedScopeData.eventProcessors, HermesBuiltin.arraySpread(eventProcessors, 0));
    tmp28Result = tmp28(tmp29[3]);
    const result2 = tmp28Result.notifyEventProcessors(items2, obj, event_id2);
    return result2.then((exception) => {
      if (exception) {
        let obj = {};
        closure_0 = obj;
        exception = exception.exception;
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
                        closure_1_0[debug_id.abs_path] = debug_id.debug_id;
                      } else if (debug_id.filename) {
                        closure_1_0[debug_id.filename] = debug_id.debug_id;
                      }
                      delete tmp2[tmp];
                    }
                  });
                }
              }
            });
          }
        }
        const _Object = Object;
        if (0 !== Object.keys(obj).length) {
          exception.debug_meta = exception.debug_meta || {};
          let images = exception.debug_meta.images;
          if (!images) {
            images = [];
          }
          exception.debug_meta.images = images;
          let images2 = exception.debug_meta.images;
          const _Object2 = Object;
          const entries = Object.entries(obj);
          const item1 = entries.forEach((item) => {
            [tmp, tmp2] = item;
            closure_1.push({ type: "sourcemap", code_file: tmp, debug_id: tmp2 });
          });
        }
      }
      let tmp6 = exception;
      if (typeof closure_0 === "number") {
        tmp6 = exception;
        if (tmp5 > 0) {
          closure_0 = tmp5;
          images2 = num2;
          let tmp32 = null;
          if (exception) {
            obj = {};
            let merged = Object.assign(exception);
            let breadcrumbs = exception.breadcrumbs;
            if (breadcrumbs) {
              obj = { breadcrumbs: null };
              breadcrumbs = exception.breadcrumbs;
              obj.breadcrumbs = breadcrumbs.map((data) => {
                let obj = {};
                const merged = Object.assign(data);
                data = data.data;
                if (data) {
                  obj = { data: null };
                  const normalizer = closure_0(num2[7]);
                  obj.data = normalizer.normalize(data.data, closure_0, closure_1);
                  data = obj;
                }
                const merged1 = Object.assign(data);
                return obj;
              });
              breadcrumbs = obj;
            }
            let merged1 = Object.assign(breadcrumbs);
            let user = exception.user;
            if (user) {
              const obj1 = { user: null };
              let normalizer = normalize;
              obj1.user = normalizer.normalize(exception.user, tmp5, tmp35);
              user = obj1;
            }
            const merged2 = Object.assign(user);
            let contexts = exception.contexts;
            if (contexts) {
              const obj2 = { contexts: null };
              const normalizer2 = normalize;
              obj2.contexts = normalizer2.normalize(exception.contexts, tmp5, tmp35);
              contexts = obj2;
            }
            const merged3 = Object.assign(contexts);
            let extra = exception.extra;
            if (extra) {
              const obj3 = { extra: null };
              const normalizer3 = normalize;
              obj3.extra = normalizer3.normalize(exception.extra, tmp5, tmp35);
              extra = obj3;
            }
            const merged4 = Object.assign(extra);
            const contexts2 = exception.contexts;
            let trace;
            if (contexts2 != null) {
              trace = contexts2.trace;
            }
            if (trace) {
              trace = obj.contexts;
            }
            if (trace) {
              obj.contexts.trace = exception.contexts.trace;
              if (exception.contexts.trace.data) {
                const normalizer4 = normalize;
                obj.contexts.trace.data = normalizer4.normalize(exception.contexts.trace.data, tmp5, tmp35);
              }
            }
            if (exception.spans) {
              const spans = exception.spans;
              obj.spans = spans.map((data) => {
                let obj = {};
                const merged = Object.assign(data);
                data = data.data;
                if (data) {
                  obj = { data: null };
                  const normalizer = closure_0(num2[7]);
                  obj.data = normalizer.normalize(data.data, closure_0, closure_1);
                  data = obj;
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
              flags = obj.contexts;
            }
            tmp32 = obj;
            if (flags) {
              const normalizer5 = normalize;
              obj.contexts.flags = normalizer5.normalize(exception.contexts.flags, 3, tmp35);
              tmp32 = obj;
            }
          }
          tmp6 = tmp32;
        }
      }
      return tmp6;
    });
  } else {
    if (clone) {
      let cloneResult = clone.clone();
    } else {
      cloneResult = new require("Scope").Scope();
    }
    cloneResult.update(captureContext);
  }
};
