// === Module 1243: SentryInitUtils ===

// Module 1243 (SentryInitUtils)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import Constants2 from "Constants" /* 1096 */;
import router_utils from "router_utils" /* 1112 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import TelemetryRingLifecycle from "TelemetryRingLifecycle" /* 1244 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DesignIds from "DesignIds" /* 1355 */;
import react_nativeAll from "react-native" /* 1368 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
import ReleaseChannelUtils from "ReleaseChannelUtils" /* 5417 */;
import MetricEvents from "MetricEvents" /* 5421 */;
import AppCrashedReasons2 from "AppCrashedReasons" /* 13914 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import registerSpanErrorInstrumentation_mod from "module_686" /* 686 */;
import CommonSentryInitUtils from "CommonSentryInitUtils" /* 1362 */;
import size from "module_2" /* 2 */;

let constants, importDefault;

let Endpoints;
let metroRequire;
let obj = function _maybeBackfillMissingBreadcrumbsFromTelemetryRing() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let breadcrumbs = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async function(arg0) {
      let raceResult;
      const f150274 = (arg0, arg1) => {
        let closure_0 = arg1;
        return setTimeout(() => {
          const error = new Error("TelemetryRing breadcrumb timeout");
          return closure_0(error);
        }, 200);
      };
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              tmp = undefined;
              breadcrumbs = breadcrumbs.breadcrumbs;
              const _Array2 = Array;
              const SentryTelemetry = TelemetryRingLifecycle.SentryTelemetry;
              items = [SentryTelemetry.snapshotForBreadcrumbs(), ];
              const self = this;
              const self2 = this;
              items[1] = new Promise(f150274);
              c2 = 1;
              c3 = 1;
              const promise = new Promise(f150274);
              const obj4 = { value: raceResult.catch(() => null), done: false };
              raceResult = race(items);
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            tmp = value;
            let isArray = null != tmp;
            if (isArray) {
              const _Array = Array;
              isArray = Array.isArray(tmp.entries);
            }
            if (isArray) {
              isArray = 0 !== tmp.entries.length;
            }
            if (isArray) {
              const entries = tmp.entries;
              breadcrumbs.breadcrumbs = entries.map((data) => {
                let key = data.message;
                if (key == null) {
                  key = data.key;
                }
                return { message: key, category: "telemetry_ring", timestamp: data.timestamp / 1000, data: data.data };
              });
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp18) {
          c3 = 3;
          throw tmp18;
        }
      }
    })();
  });
  return obj(...arguments);
};
function filterError(event_id, originalException) {
  let flag;
  let closure_0 = event_id;
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
    flag = false;
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
  if (!flag) {
    let originalException2;
    if (originalException != null) {
      originalException2 = originalException.originalException;
    }
    let message;
    if (originalException2 != null) {
      message = originalException2.message;
    }
    let someResult = typeof message === "string";
    if (typeof message === "string") {
      someResult = closure_11.some((item) => message.includes(item));
    }
    flag = someResult;
  }
  if (flag) {
    event_id = event_id.event_id;
    let tmp20 = typeof event_id === "string";
    if (typeof event_id === "string") {
      tmp20 = 0 !== event_id.length;
    }
    if (tmp20) {
      obj = SentryUtilsDefault;
      obj.markCrashHandled(event_id);
    }
  } else {
    let originalException3;
    if (originalException != null) {
      originalException3 = originalException.originalException;
    }
    let status1;
    if (originalException3 != null) {
      status1 = originalException3.status;
    }
    if (null != status1) {
      if (null == event_id.tags) {
        event_id.tags = {};
      }
      event_id.tags.httpStatusCode = status1;
    }
    if (!c14) {
      if (closure_20()) {
        const _Math = Math;
      }
      trackCrash(event_id, originalException, false);
    }
    return (async function() {
      let closure_0;
      function maybeBackfillMissingBreadcrumbsFromTelemetryRing() {
        return closure_1_15(...arguments);
      }
      let closure_1 = tmp;
      const ZoomedInTelemetry = tmp(c3[6]).ZoomedInTelemetry;
      items = [ZoomedInTelemetry.flushNow(), ];
      const self = this;
      const self2 = this;
      const promise = new Promise((arg0) => setTimeout(arg0, 200));
      items[1] = promise;
      await race(items);
      if (1 === c3) {
        let c2 = 0;
      } else if (2 === c3) {
        if (arg0 === 1) {
          let c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c3 = 3;
          c4 = 1;
          const obj6 = { value: maybeBackfillMissingBreadcrumbsFromTelemetryRing(closure_129_0), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 0;
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c2 = 0;
      }
      trackCrash(closure_129_0, closure_129_1);
      return closure_129_0;
    })();
  }
  return null;
}
function getCrashErrorMessage(exception) {
  let type;
  let value;
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
    let message1;
    if (typeof prop === "string") {
      if (prop.length > 0) {
        message1 = prop;
      }
    }
    if (message1 == null) {
      message1 = exception.message;
    }
    return message1;
  } else {
    let prop1;
    ({ type, value } = first);
    if (null != type) {
      if (null != value) {
        const _HermesInternal = HermesInternal;
        return "" + type + ": " + value;
      }
    }
    const extra = exception.extra;
    if (extra != null) {
      prop1 = extra.persisted_error_message;
    }
    let message = type;
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
  let extra;
  let level;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp37;
  let tmp38;
  let tmp4;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  obj = { event, hint };
  logger.info("Crash", obj);
  ({ level, extra } = event);
  let native_is_native;
  if (extra != null) {
    native_is_native = extra.native_is_native;
  }
  if (null != native_is_native) {
    tmp4 = "true" === event.extra.native_is_native;
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
  let num = 1;
  const tmp5 = tmp4 || "error" !== level;
  if (!tmp5) {
    num = 0.01;
  }
  if (!c14) {
    const _Math = Math;
    if (Math.random() > num) {
      const event_id = event.event_id;
      let tmp8 = typeof event_id === "string";
      if (typeof event_id === "string") {
        tmp8 = 0 !== event_id.length;
      }
      if (tmp8) {
        const obj2 = SentryUtilsDefault;
        obj2.markCrashHandled(event_id);
      }
    }
  }
  let tmp14 = null;
  const obj3 = router_utils;
  const _location = obj3.getHistory().location;
  if (flag) {
    let event_id1 = event.event_id;
    if (event_id1 == null) {
      event_id1 = null;
    }
    tmp14 = event_id1;
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
  const track = AnalyticsUtilsDefault.track;
  AnalyticsUtilsDefault;
  if (tmp4) {
    let extra1 = event.extra;
    const APP_NATIVE_CRASH = metroRequire.APP_NATIVE_CRASH;
    if (extra1 == null) {
      extra1 = {};
    }
    const native_exit_reason = extra1.native_exit_reason;
    const obj4 = { did_crash: true, sentry_issue_id: tmp14, client_track_timestamp: result, exit_reason: tmp28, exit_description: tmp29, tombstone_hash: tmp30, tombstone_cause: tmp31, tombstone: tmp32, call_stack_tree: tmp33, binary_name: tmp34, exception_message: getCrashErrorMessage(event), exception_stacktrace: getErrorStackTrace(event), js_error_message: tmp37, js_error_stacktrace: tmp38 };
    tmp28 = null;
    if (typeof native_exit_reason === "string") {
      tmp28 = null;
      if (native_exit_reason.length > 0) {
        tmp28 = native_exit_reason;
      }
    }
    const prop1 = extra1.native_exit_description;
    tmp29 = null;
    if (typeof prop1 === "string") {
      tmp29 = null;
      if (prop1.length > 0) {
        tmp29 = prop1;
      }
    }
    const prop2 = extra1.native_tombstone_hash;
    tmp30 = null;
    if (typeof prop2 === "string") {
      tmp30 = null;
      if (prop2.length > 0) {
        tmp30 = prop2;
      }
    }
    const prop3 = extra1.native_tombstone_cause;
    tmp31 = null;
    if (typeof prop3 === "string") {
      tmp31 = null;
      if (prop3.length > 0) {
        tmp31 = prop3;
      }
    }
    const native_tombstone = extra1.native_tombstone;
    tmp32 = null;
    if (typeof native_tombstone === "string") {
      tmp32 = null;
      if (native_tombstone.length > 0) {
        tmp32 = native_tombstone;
      }
    }
    const prop4 = extra1.native_tombstone_group_by;
    tmp33 = null;
    if (typeof prop4 === "string") {
      tmp33 = null;
      if (prop4.length > 0) {
        tmp33 = prop4;
      }
    }
    const prop5 = extra1.native_tombstone_origin;
    tmp34 = null;
    if (typeof prop5 === "string") {
      tmp34 = null;
      if (prop5.length > 0) {
        tmp34 = prop5;
      }
    }
    const prop6 = extra1.persisted_error_message;
    tmp37 = null;
    if (typeof prop6 === "string") {
      tmp37 = null;
      if (prop6.length > 0) {
        tmp37 = prop6;
      }
    }
    const prop7 = extra1.persisted_error_stack;
    tmp38 = null;
    if (typeof prop7 === "string") {
      tmp38 = null;
      if (prop7.length > 0) {
        tmp38 = prop7;
      }
    }
    track(APP_NATIVE_CRASH, obj4);
    tmp26 = importDefault;
    tmp27 = importDefault;
  } else {
    const APP_CRASHED = metroRequire.APP_CRASHED;
    const obj5 = { path: _location.pathname, client_track_timestamp: result, sentry_issue_id: tmp14, extra: hint, error_message: getCrashErrorMessage(event), error_level: level, error_stack: getErrorStackTrace(event) };
    track(APP_CRASHED, obj5);
    tmp26 = importDefault;
    tmp27 = importDefault;
  }
  const event_id2 = event.event_id;
  let tmp40 = typeof event_id2 === "string";
  if (typeof event_id2 === "string") {
    tmp40 = 0 !== event_id2.length;
  }
  if (tmp40) {
    const tmp26Result = tmp26(1242);
    tmp26Result.markCrashHandled(event_id2);
  }
  const AppCrashedReasons = AppCrashedReasons2.AppCrashedReasons;
  const tmp42 = tmp4 ? AppCrashedReasons.UNHANDLED_NATIVE_ERROR : AppCrashedReasons.UNHANDLED_JS_ERROR;
  const tmp27Result = tmp27(5416);
  const increment = tmp27Result.increment;
  const obj6 = { name: MetricEvents.MetricEvents.APP_CRASHED, tags: items };
  items = ["reason:" + tmp42, ];
  if (level == null) {
    level = "unknown";
  }
  items[1] = "level:" + level;
  increment(obj6, true);
}
const NativeModules = react_native.NativeModules;
({ AnalyticEvents: metroRequire, Endpoints } = Constants);
const PRIMARY_DOMAIN = Constants2.PRIMARY_DOMAIN;
let registerSpanErrorInstrumentation = registerSpanErrorInstrumentation_mod;
registerSpanErrorInstrumentation = registerSpanErrorInstrumentation.reactNavigationIntegration();
const regExp = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS, "g");
let items = [regExp, , ];
const regExp1 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS_V2, "g");
items[1] = regExp1;
const regExp2 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.TRACK, "g");
items[2] = regExp2;
const logger = new LoggerDefault("Sentry");
let closure_11 = ["The operation couldn\u2019t be completed. (com.apple.CallKit.error.requesttransaction", "Request has been terminated", "couldn't execute statement: database is disabled", "couldn't delete database: database is currently open", "database is no longer open"];
let c12 = 0.05;
let c13 = 0.005;
let c14 = false;
const tmp7 = new LoggerDefault("Sentry");
let closure_20 = CommonSentryInitUtils.filterThrottle({ maxBudgetMinute: 1, maxBudgetHour: 15 });
const result1 = size.fileFinishedImporting("modules/errors/native/SentryInitUtils.tsx");

export const routingInstrumentation = registerSpanErrorInstrumentation;
export const initSentry = function initSentry() {
  let beforeSend;
  let ignoreErrors;
  const CrashReportingManager = NativeModules.CrashReportingManager;
  if (CrashReportingManager != null) {
    const isUserStaffForCrashReporting = CrashReportingManager.getIsUserStaffForCrashReporting((arg0) => {
      let items1;
      let closure_1_14 = arg0;
      obj = react_nativeAll;
      constants = obj.getConstants();
      const ReleaseChannel = constants.ReleaseChannel;
      if (-1 === ReleaseChannel.indexOf("debug")) {
        if (-1 === ReleaseChannel.indexOf("developer")) {
          let SentryStaffDsn;
          const isStable = ReleaseChannelUtils.isStable;
          const obj2 = { releaseChannel: ReleaseChannel, isProductionChannel: isStable };
          logger.verbose("Initialize", obj2);
          const obj16 = PlatformUtils;
          if (obj16.isAndroid()) {
            if (isStable) {
              const tmp17Result = DeviceUtils;
              const device = tmp17Result.getDevice();
            }
          }
          c12 = 0.05;
          const SentryDsn = constants.SentryDsn;
          if (isStable) {
            SentryStaffDsn = SentryDsn;
            const tmp17Result12 = MetaQuestUtils;
            if (tmp17Result12.isMetaQuest()) {
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
          const obj4 = SentryUtilsDefault;
          const lastCrashReport = obj4.getLastCrashReport();
          const nextPromise = lastCrashReport.then((result) => {
            if (null != result) {
              closure_1_19(result, { crash_event_source: "startup_reconcile" });
            }
          });
          nextPromise.catch((error) => {
            logger.warn("Failed to replay pending crash report", error);
          });
          const init = registerSpanErrorInstrumentation.init;
          registerSpanErrorInstrumentation;
          let str2 = "ios";
          const tmp17Result14 = PlatformUtils;
          if (tmp17Result14.isAndroid()) {
            str2 = "android";
          }
          const obj3 = {
            tunnel: `/error-reporting-proxy/${str2}`,
            autoInitializeNativeSdk: false,
            beforeSend,
            dist: "35020100000000",
            dsn: SentryStaffDsn,
            environment: ReleaseChannel,
            tracesSampleRate: 0,
            sampleRate: 1,
            ignoreErrors,
            release: "discord_android@350.1.0-2+350201",
            tracePropagationTargets: items,
            integrations: items1,
            beforeBreadcrumb(data) {
                  if (null == data.data) {
                    data.data = {};
                  }
                  obj = closure_1_1(closure_1_3[19]);
                  const currentMemoryUsageKB = obj.getCurrentMemoryUsageKB();
                  if (null != currentMemoryUsageKB) {
                    data.data.client_performance_memory = currentMemoryUsageKB;
                  }
                  const tmpResult = closure_1_1(closure_1_3[19]);
                  const currentCPUUsagePercent = tmpResult.getCurrentCPUUsagePercent();
                  if (null != currentCPUUsagePercent) {
                    data.data.client_performance_cpu = currentCPUUsagePercent;
                  }
                  return data;
                }
          };
          items = [PRIMARY_DOMAIN];
          items1 = [registerSpanErrorInstrumentation, , ];
          const tmp17Result15 = registerSpanErrorInstrumentation;
          items1[1] = tmp17Result15.featureFlagsIntegration();
          const obj5 = {
            shouldCreateSpanForRequest(url) {
                  let closure_0 = url;
                  return !closure_1_9.some((item) => null != closure_0.match(item));
                }
          };
          const tmp17Result16 = registerSpanErrorInstrumentation;
          items1[2] = tmp17Result16.reactNativeTracingIntegration(obj5);
          init(obj3);
          const tmp17Result17 = registerSpanErrorInstrumentation;
          tmp17Result17.setTag("buildNumber", "35020100000000");
          const tmp17Result18 = registerSpanErrorInstrumentation;
          tmp17Result18.setTag("appVersion", constants.Version);
          const _HermesInternal = HermesInternal;
          const tmp17Result19 = registerSpanErrorInstrumentation;
          tmp17Result19.setTag("design_id", "" + DesignIds.DesignIds.DESIGN_TABS_IA);
          const tmp17Result20 = ReactCompilerGating;
          if (tmp17Result20.isReactCompilerBuild()) {
            const setTag = registerSpanErrorInstrumentation.setTag;
            registerSpanErrorInstrumentation;
            let str9 = "unoptimized";
            const tmp17Result22 = ReactCompilerGating;
            if (tmp17Result22.isReactCompilerEnabled()) {
              str9 = "optimized";
            }
            setTag("react_compiler", str9);
          }
        }
      }
    });
  }
};