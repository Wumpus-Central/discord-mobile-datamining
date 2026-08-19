// _runtime/07787_applyClientOptions.js
import isMatchingPattern from "07747_isMatchingPattern.js";
import _mod7775 from "metro/07775__.js";

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
    DEFAULT_ENVIRONMENT = _mod7775.DEFAULT_ENVIRONMENT;
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
    environment.message = isMatchingPattern.truncate(environment.message, num);
  }
  let value = iter;
  if (environment.exception && environment.exception.values && environment.exception.values[0]) {
    value = iter.value;
  }
  if (value) {
    iter.value = isMatchingPattern.truncate(iter.value, num);
  }
  const request = environment.request;
  let url = request;
  if (request) {
    url = request.url;
  }
  if (url) {
    request.url = isMatchingPattern.truncate(request.url, num);
  }
}
function applyDebugIds(exception) {
  _require = require("07790_getFilenameToDebugIdMap.js").getFilenameToDebugIdMap(arg1);
  try {
    const values = exception.exception.values;
    let item = values.forEach((item, index) => {
      const frames = item.stacktrace.frames;
      item = frames.forEach((item, index) => {
        let filename = table;
        if (table) {
          filename = item.filename;
        }
        if (filename) {
          item.debug_id = table[item.filename];
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
    let item = values.forEach((item, index) => {
      const frames = item.stacktrace.frames;
      item = frames.forEach((item, index) => {
        if (item.debug_id) {
          if (item.abs_path) {
            closure_0[item.abs_path] = item.debug_id;
          } else if (item.filename) {
            closure_0[item.filename] = item.debug_id;
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
      const item1 = entries.forEach((item, index) => {
        [tmp, tmp2] = item;
        images.push({ type: "sourcemap", code_file: tmp, debug_id: tmp2 });
      });
    }
  } catch (err) {
  }
}
let closure_5 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
arg5.applyClientOptions = applyClientOptions;
arg5.applyDebugIds = applyDebugIds;
arg5.applyDebugMeta = applyDebugMeta;
arg5.parseEventHintOrCaptureContext = function parseEventHintOrCaptureContext(fn) {
  if (fn) {
    if (tmp3) {
      const obj = { captureContext: null };
      obj[0] = fn;
      let tmp5 = obj;
    } else {
      const _Object = Object;
      const keys = Object.keys(fn);
      tmp5 = fn;
    }
    return tmp5;
  }
};
arg5.prepareEvent = function prepareEvent(normalizeDepth, event_id, event_id2, getScopeData, emit, getScopeData2) {
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
    integrations = integrations1.map((item, index) => item.name);
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
    return result2.then((result) => {
      if (result) {
        applyDebugMeta(result);
      }
      let tmp4 = result;
      if (typeof closure_0 === "number") {
        tmp4 = result;
        if (tmp3 > 0) {
          closure_0 = tmp3;
          let tmp30 = null;
          if (result) {
            let obj = {};
            let merged = Object.assign(result);
            let breadcrumbs = result.breadcrumbs;
            if (breadcrumbs) {
              obj = { breadcrumbs: null };
              breadcrumbs = result.breadcrumbs;
              obj[0] = breadcrumbs.map((item, index) => {
                let obj = {};
                const merged = Object.assign(item);
                let data = item.data;
                if (data) {
                  obj = { data: null };
                  const normalizer = callback(7783);
                  obj[0] = normalizer.normalize(item.data, callback, dependencyMap);
                  data = obj;
                }
                const merged1 = Object.assign(data);
                return obj;
              });
              breadcrumbs = obj;
            }
            let merged1 = Object.assign(breadcrumbs);
            let user = result.user;
            if (user) {
              obj = { user: null };
              let normalizer = num(num2[8]);
              obj[0] = normalizer.normalize(result.user, tmp3, closure_1);
              user = obj;
            }
            const merged2 = Object.assign(user);
            let contexts = result.contexts;
            if (contexts) {
              obj1 = { contexts: null };
              const normalizer2 = num(num2[8]);
              obj1[0] = normalizer2.normalize(result.contexts, tmp3, closure_1);
              contexts = obj1;
            }
            const merged3 = Object.assign(contexts);
            let extra = result.extra;
            if (extra) {
              const obj2 = { extra: null };
              const normalizer3 = num(num2[8]);
              obj2[0] = normalizer3.normalize(result.extra, tmp3, closure_1);
              extra = obj2;
            }
            const merged4 = Object.assign(extra);
            if (tmp26) {
              obj.contexts.trace = result.contexts.trace;
              if (result.contexts.trace.data) {
                const normalizer4 = num(num2[8]);
                obj.contexts.trace.data = normalizer4.normalize(result.contexts.trace.data, tmp3, closure_1);
              }
            }
            if (result.spans) {
              const spans = result.spans;
              obj.spans = spans.map((item, index) => {
                let obj = {};
                const merged = Object.assign(item);
                let data = item.data;
                if (data) {
                  obj = { data: null };
                  const normalizer = callback(7783);
                  obj[0] = normalizer.normalize(item.data, callback, dependencyMap);
                  data = obj;
                }
                const merged1 = Object.assign(data);
                return obj;
              });
            }
            tmp30 = obj;
            if (tmp29) {
              const normalizer5 = num(num2[8]);
              obj.contexts.flags = normalizer5.normalize(result.contexts.flags, 3, closure_1);
              tmp30 = obj;
            }
            tmp26 = result.contexts && result.contexts.trace && obj.contexts;
            tmp29 = result.contexts && result.contexts.flags && obj.contexts;
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