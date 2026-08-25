// === Module 1209: _maybeBackfillMissingBreadcrumbsFromTelemetryRing ===

// Module 1209 (_maybeBackfillMissingBreadcrumbsFromTelemetryRing)
import timestampDefault from "timestamp" /* 3 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import _modDef1208 from "module_1208" /* 1208 */;
import transitionTo from "transitionTo" /* 1222 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import { PRIMARY_DOMAIN } from "sum" /* 505 */;
import addBreadcrumb from "addBreadcrumb" /* 810 */;
import IGNORE_ANALYTICS_BREADCRUMB_EVENTS from "IGNORE_ANALYTICS_BREADCRUMB_EVENTS" /* 13661 */;

require = arg1;
function _maybeBackfillMissingBreadcrumbsFromTelemetryRing() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          table = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              closure_1 = undefined;
              const breadcrumbs = lib.breadcrumbs;
              const _Array2 = Array;
              if (Array.isArray(breadcrumbs)) {
                if (breadcrumbs.length > 0) {
                  table = 3;
                }
              }
              const SentryTelemetry = lib(table[6]).SentryTelemetry;
              items = [SentryTelemetry.snapshotForBreadcrumbs(), ];
              const promise = new Promise((arg0, arg1) => {
                closure_0 = arg1;
                return setTimeout(() => {
                  error = new Error("TelemetryRing breadcrumb timeout");
                  return callback(error);
                }, 200);
              });
              items[1] = promise;
              c2 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.race(items).catch(() => null);
              return obj1;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_1 = arg1;
            let isArray = null != closure_1;
            if (isArray) {
              const _Array = Array;
              isArray = Array.isArray(closure_1.entries);
            }
            if (isArray) {
              isArray = 0 !== closure_1.entries.length;
            }
            if (isArray) {
              const entries = closure_1.entries;
              lib.breadcrumbs = entries.map((data) => {
                let key = data.message;
                if (key == null) {
                  key = data.key;
                }
                return { message: key, category: "telemetry_ring", timestamp: data.timestamp / 1000, data: data.data };
              });
            }
          }
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp21) {
          table = tmp;
          throw tmp21;
        }
      }
    })();
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function filterError(event_id, originalException) {
  closure_0 = event_id;
  importDefault = originalException;
  originalException = undefined;
  if (originalException != null) {
    originalException = originalException.originalException;
  }
  let status;
  if (originalException != null) {
    status = originalException.status;
  }
  if (!status) {
    let captchaFields;
    if (originalException != null) {
      captchaFields = originalException.captchaFields;
    }
    let tmp4 = null;
    if (null != captchaFields) {
      let code;
      if (originalException != null) {
        code = originalException.code;
      }
      tmp4 = code;
    }
    let flag = false;
    if (tmp4) {
      flag = false;
      if (tmp4 < 0) {
        flag = true;
      }
    }
  } else {
    flag = true;
  }
  if (!flag) {
    let originalException1;
    if (originalException != null) {
      originalException1 = originalException.originalException;
    }
    let code1;
    if (originalException1 != null) {
      if (originalException1.err != null) {
        code1 = err.code;
      }
    }
    let flag2 = false;
    if ("ABORTED" === code1) {
      flag2 = true;
    }
    flag = flag2;
  }
  if (flag) {
    event_id = event_id.event_id;
    let tmp17 = typeof event_id === "string";
    if (typeof event_id === "string") {
      tmp17 = 0 !== event_id.length;
    }
    if (tmp17) {
      _modDef1208.markCrashHandled(event_id);
      const obj = _modDef1208;
    }
  } else {
    let originalException2;
    if (originalException != null) {
      originalException2 = originalException.originalException;
    }
    let status1;
    if (originalException2 != null) {
      status1 = originalException2.status;
    }
    if (null != status1) {
      if (null == event_id.tags) {
        event_id.tags = {};
      }
      event_id.tags.httpStatusCode = status1;
    }
    let tmp10 = c12;
    if ("error" === event_id.level) {
      tmp10 = c13;
    }
    if (!c14) {
      if (callback2()) {
        const _Math = Math;
      }
      trackCrash(event_id, originalException, false);
    }
    return callback(function*() {
      closure_1 = tmp3;
      closure_0 = tmp3;
      c2 = 1;
      const ZoomedInTelemetry = closure_1_0(table[6]).ZoomedInTelemetry;
      items = [ZoomedInTelemetry.flushNow(), ];
      const promise = new Promise((arg0) => setTimeout(arg0, 200));
      items[1] = promise;
      yield Promise.race(items);
      if (1 === tmp7) {
        c2 = 0;
        closure_1_19(closure_1_0, closure_1_1);
        c4 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          table = 3;
          c4 = 1;
          const obj3 = { value: null, done: false };
          obj3[0] = (function maybeBackfillMissingBreadcrumbsFromTelemetryRing(closure_0) {
            const self = this;
            const apply = closure_15.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_0);
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        c2 = 0;
      }
      c2 = 0;
      return arg1;
    })();
  }
  return null;
}
function getCrashErrorMessage(exception) {
  exception = exception.exception;
  let first;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      first = values[0];
    }
  }
  if (null == first) {
    const extra2 = exception.extra;
    let prop;
    if (extra2 != null) {
      prop = extra2.persisted_error_message;
    }
    let message;
    if (typeof prop === "string") {
      if (prop.length > 0) {
        message = prop;
      }
    }
    if (message == null) {
      message = exception.message;
    }
    return message;
  } else {
    ({ type, value } = first);
    if (null != type) {
      if (null != value) {
        const _HermesInternal = HermesInternal;
        return "" + type + ": " + value;
      }
    }
    const extra = exception.extra;
    if (extra != null) {
      const prop1 = extra.persisted_error_message;
    }
    message = type;
    if (type == null) {
      message = value;
    }
    if (message == null) {
      message = exception.message;
    }
    if (message == null) {
      let tmp2;
      if (typeof prop1 === "string") {
        if (prop1.length > 0) {
          tmp2 = prop1;
        }
      }
      message = tmp2;
    }
    return message;
  }
}
function getErrorStackTrace(exception) {
  exception = exception.exception;
  let first;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      first = values[0];
    }
  }
  if (null == first) {
    const extra2 = exception.extra;
    let prop;
    if (extra2 != null) {
      prop = extra2.persisted_error_stack;
    }
    let tmp6;
    if (typeof prop === "string") {
      if (prop.length > 0) {
        tmp6 = prop;
      }
    }
    return tmp6;
  } else {
    const stacktrace = first.stacktrace;
    let joined;
    if (stacktrace != null) {
      const frames = stacktrace.frames;
      if (frames != null) {
        const mapped = frames.map((filename) => "" + filename.filename + ":" + filename.lineno + ":" + filename.colno);
        joined = mapped.join("\n");
      }
    }
    if (null != joined) {
      if (joined.length > 0) {
        return joined;
      }
    }
    const extra = exception.extra;
    let prop1;
    if (extra != null) {
      prop1 = extra.persisted_error_stack;
    }
    let tmp4;
    if (typeof prop1 === "string") {
      if (prop1.length > 0) {
        tmp4 = prop1;
      }
    }
    return tmp4;
  }
}
function trackCrash(event, hint, arg2) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let obj = { event, hint };
  logger.info("Crash", obj);
  ({ level, extra } = event);
  let native_is_native;
  if (extra != null) {
    native_is_native = extra.native_is_native;
  }
  if (null != native_is_native) {
    let tmp4 = "true" === event.extra.native_is_native;
  } else {
    const tags = event.tags;
    let prop;
    if (tags != null) {
      prop = tags["event.origin"];
    }
    tmp4 = "javascript" !== prop;
  }
  if ("fatal" !== level) {
    return event;
  }
  let tmp5 = tmp4;
  if (!tmp4) {
    tmp5 = "error" !== level;
  }
  let num = 1;
  if (!tmp5) {
    num = 0.01;
  }
  if (!c14) {
    const _Math = Math;
    if (Math.random() > num) {
      const event_id = event.event_id;
      let tmp7 = typeof event_id === "string";
      if (typeof event_id === "string") {
        tmp7 = 0 !== event_id.length;
      }
      if (tmp7) {
        obj1 = _modDef1208;
        obj1.markCrashHandled(event_id);
      }
    }
  }
  let tmp13 = null;
  if (flag) {
    let event_id1 = event.event_id;
    if (event_id1 == null) {
      event_id1 = null;
    }
    tmp13 = event_id1;
  }
  const timestamp = event.timestamp;
  let result;
  if (null != timestamp) {
    if (typeof timestamp === "number") {
      const _isNaN = isNaN;
      if (!isNaN(timestamp)) {
        result = 1000 * timestamp;
      }
    }
    const _Date = Date;
    if (timestamp instanceof Date) {
      result = timestamp.getTime();
    } else if (typeof timestamp === "string") {
      const _Date3 = Date;
      const parsed = Date.parse(timestamp);
      const _Number = Number;
      if (!Number.isNaN(parsed)) {
        result = parsed;
      }
    }
  }
  if (result == null) {
    const _Date2 = Date;
    result = Date.now();
  }
  const obj3 = transitionTo;
  const track = expandEventPropertiesDefault.track;
  if (tmp4) {
    extra = event.extra;
    if (extra == null) {
      extra = {};
    }
    obj = { did_crash: true, sentry_issue_id: null, client_track_timestamp: null, exit_reason: null, exit_description: null, tombstone_hash: null, tombstone_cause: null, tombstone: null, call_stack_tree: null, binary_name: null, exception_message: null, exception_stacktrace: null, js_error_message: null, js_error_stacktrace: null };
    obj[1] = tmp13;
    obj[2] = result;
    const native_exit_reason = extra.native_exit_reason;
    let tmp27 = null;
    if (typeof native_exit_reason === "string") {
      tmp27 = null;
      if (native_exit_reason.length > 0) {
        tmp27 = native_exit_reason;
      }
    }
    obj[3] = tmp27;
    const prop1 = extra.native_exit_description;
    let tmp28 = null;
    if (typeof prop1 === "string") {
      tmp28 = null;
      if (prop1.length > 0) {
        tmp28 = prop1;
      }
    }
    obj[4] = tmp28;
    const prop2 = extra.native_tombstone_hash;
    let tmp29 = null;
    if (typeof prop2 === "string") {
      tmp29 = null;
      if (prop2.length > 0) {
        tmp29 = prop2;
      }
    }
    obj[5] = tmp29;
    const prop3 = extra.native_tombstone_cause;
    let tmp30 = null;
    if (typeof prop3 === "string") {
      tmp30 = null;
      if (prop3.length > 0) {
        tmp30 = prop3;
      }
    }
    obj[6] = tmp30;
    const native_tombstone = extra.native_tombstone;
    let tmp31 = null;
    if (typeof native_tombstone === "string") {
      tmp31 = null;
      if (native_tombstone.length > 0) {
        tmp31 = native_tombstone;
      }
    }
    obj[7] = tmp31;
    const prop4 = extra.native_tombstone_group_by;
    let tmp32 = null;
    if (typeof prop4 === "string") {
      tmp32 = null;
      if (prop4.length > 0) {
        tmp32 = prop4;
      }
    }
    obj[8] = tmp32;
    const prop5 = extra.native_tombstone_origin;
    let tmp33 = null;
    if (typeof prop5 === "string") {
      tmp33 = null;
      if (prop5.length > 0) {
        tmp33 = prop5;
      }
    }
    obj[9] = tmp33;
    obj[10] = getCrashErrorMessage(event);
    obj[11] = getErrorStackTrace(event);
    const prop6 = extra.persisted_error_message;
    let tmp36 = null;
    if (typeof prop6 === "string") {
      tmp36 = null;
      if (prop6.length > 0) {
        tmp36 = prop6;
      }
    }
    obj[12] = tmp36;
    const prop7 = extra.persisted_error_stack;
    let tmp37 = null;
    if (typeof prop7 === "string") {
      tmp37 = null;
      if (prop7.length > 0) {
        tmp37 = prop7;
      }
    }
    obj[13] = tmp37;
    track(tmp20.APP_NATIVE_CRASH, obj);
    let tmp25 = tmp18;
    let tmp26 = tmp18;
  } else {
    obj = { path: null, client_track_timestamp: null, sentry_issue_id: null, extra: null, error_message: null, error_level: null, error_stack: null };
    obj[0] = obj3.getHistory().location.pathname;
    obj[1] = result;
    obj[2] = tmp13;
    obj[3] = hint;
    obj[4] = getCrashErrorMessage(event);
    obj[5] = level;
    obj[6] = getErrorStackTrace(event);
    track(tmp20.APP_CRASHED, obj);
    tmp25 = tmp18;
    tmp26 = tmp18;
    const tmp22 = level;
  }
  const event_id2 = event.event_id;
  let tmp39 = typeof event_id2 === "string";
  if (typeof event_id2 === "string") {
    tmp39 = 0 !== event_id2.length;
  }
  if (tmp39) {
    tmp25(1208).markCrashHandled(event_id2);
    const tmp25Result = tmp25(1208);
  }
  const AppCrashedReasons = tmp11(13660).AppCrashedReasons;
  const tmp19 = expandEventPropertiesDefault;
  const tmp41 = tmp4 ? AppCrashedReasons.UNHANDLED_NATIVE_ERROR : AppCrashedReasons.UNHANDLED_JS_ERROR;
  obj1 = { name: tmp11(7213).MetricEvents.APP_CRASHED, tags: null };
  items = ["reason:" + tmp41, ];
  if (level == null) {
    level = "unknown";
  }
  items[1] = "level:" + level;
  obj1[1] = items;
  tmp26(7208).increment(obj1, true);
}
({ AnalyticEvents: closure_6, Endpoints } = ME);
addBreadcrumb = addBreadcrumb.reactNavigationIntegration();
const regExp = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS, "g");
let items = [regExp, , ];
const regExp1 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS_V2, "g");
items[1] = regExp1;
const regExp2 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.TRACK, "g");
items[2] = regExp2;
let closure_10 = new timestampDefault("Sentry");
let closure_11 = ["The operation couldn\u2019t be completed. (com.apple.CallKit.error.requesttransaction", "Request has been terminated", "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", "database is no longer open"];
let c12 = 0.05;
let c13 = 0.005;
let c14 = false;
let closure_20 = IGNORE_ANALYTICS_BREADCRUMB_EVENTS.filterThrottle({ maxBudgetMinute: 1, maxBudgetHour: 15 });
let tmp7 = new timestampDefault("Sentry");
const result1 = require("set").fileFinishedImporting("modules/errors/native/SentryInitUtils.tsx");

export const routingInstrumentation = addBreadcrumb;
export const initSentry = function initSentry() {
  const CrashReportingManager = NativeModules.CrashReportingManager;
  if (CrashReportingManager != null) {
    const isUserStaffForCrashReporting = CrashReportingManager.getIsUserStaffForCrashReporting((arg0) => {
      closure_14 = arg0;
      let obj = callback3(table[14]);
      const constants = obj.getConstants();
      const ReleaseChannel = constants.ReleaseChannel;
      if (-1 === ReleaseChannel.indexOf("debug")) {
        if (-1 === ReleaseChannel.indexOf("developer")) {
          const isStable = callback(tmp[15]).isStable;
          obj = { releaseChannel: null, isProductionChannel: null };
          obj[0] = ReleaseChannel;
          obj[1] = isStable;
          closure_10.verbose("Initialize", obj);
          if (obj15.isAndroid()) {
            if (isStable) {
              let tmp14Result = tmp14(tmp[17]);
              const device = tmp14Result.getDevice();
            }
          }
          c12 = 0.05;
          const SentryDsn = constants.SentryDsn;
          if (isStable) {
            tmp14Result = tmp14(tmp[18]);
            let SentryStaffDsn = SentryDsn;
            if (tmp14Result.isMetaQuest()) {
              c12 = 1;
              c13 = 1;
              SentryStaffDsn = SentryDsn;
            }
          } else {
            c12 = 1;
            SentryStaffDsn = constants.SentryAlphaBetaDsn;
          }
          if (arg0) {
            SentryStaffDsn = constants.SentryStaffDsn;
            c12 = 1;
          }
          obj15 = callback(tmp[16]);
          const lastCrashReport = callback2(tmp[13]).getLastCrashReport();
          const obj4 = callback2(tmp[13]);
          lastCrashReport.then((arg0) => {
            if (null != arg0) {
              callback2(arg0, { crash_event_source: "startup_reconcile" });
            }
          }).catch((arg0) => {
            logger.warn("Failed to replay pending crash report", arg0);
          });
          const nextPromise = lastCrashReport.then((arg0) => {
            if (null != arg0) {
              callback2(arg0, { crash_event_source: "startup_reconcile" });
            }
          });
          const tmp14Result1 = callback(tmp[4]);
          let str2 = "ios";
          if (tmp14Result2.isAndroid()) {
            str2 = "android";
          }
          obj = { tunnel: null, autoInitializeNativeSdk: false, beforeSend: null, dist: "6275", dsn: null, environment: null, tracesSampleRate: 0, sampleRate: 1, ignoreErrors: null, release: "discord_android@344.1.0-2+344201", tracePropagationTargets: null, integrations: null, beforeBreadcrumb: null };
          obj[0] = `/error-reporting-proxy/${str2}`;
          obj[2] = closure_16;
          obj[4] = SentryStaffDsn;
          obj[5] = ReleaseChannel;
          obj[8] = closure_11;
          items = [closure_7];
          obj[10] = items;
          const items1 = [closure_8, , ];
          tmp14Result2 = callback(tmp[16]);
          items1[1] = callback(tmp[4]).featureFlagsIntegration();
          const tmp14Result3 = callback(tmp[4]);
          obj1 = { shouldCreateSpanForRequest: null };
          obj1[0] = function shouldCreateSpanForRequest(arg0) {
            closure_0 = arg0;
            return !closure_9.some((arg0) => null != closure_0.match(arg0));
          };
          items1[2] = callback(tmp[4]).reactNativeTracingIntegration(obj1);
          obj[11] = items1;
          obj[12] = function beforeBreadcrumb(data) {
            if (null == data.data) {
              data.data = {};
            }
            const currentMemoryUsageKB = callback(table[19]).getCurrentMemoryUsageKB();
            if (null != currentMemoryUsageKB) {
              data.data.client_performance_memory = currentMemoryUsageKB;
            }
            const obj = callback(table[19]);
            const tmp = callback;
            const tmp2 = table;
            const currentCPUUsagePercent = callback(table[19]).getCurrentCPUUsagePercent();
            if (null != currentCPUUsagePercent) {
              data.data.client_performance_cpu = currentCPUUsagePercent;
            }
            return data;
          };
          tmp14Result1.init(obj);
          const tmp14Result4 = callback(tmp[4]);
          callback(tmp[4]).setTag("buildNumber", "6275");
          const tmp14Result5 = callback(tmp[4]);
          callback(tmp[4]).setTag("appVersion", constants.Version);
          const tmp14Result6 = callback(tmp[4]);
          const _HermesInternal = HermesInternal;
          callback(tmp[4]).setTag("design_id", "" + callback(tmp[20]).DesignIds.DESIGN_TABS_IA);
          const tmp14Result7 = callback(tmp[4]);
        }
      }
    });
  }
};