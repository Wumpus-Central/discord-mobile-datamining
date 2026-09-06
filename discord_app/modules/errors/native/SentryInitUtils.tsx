// discord_app/modules/errors/native/SentryInitUtils.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import _mod675 from "../../../../_runtime/metro/00675__.js";
import router_utils from "../../routing/router_utils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import TelemetryRingLifecycle from "../../telemetry_ring/native/index.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DesignIds from "../../../../discord_common/js/shared/shared-constants/DesignIds.tsx";
import ClientInfoUtilsAll from "../../../utils/native/ClientInfoUtils.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import ReleaseChannelUtils from "../../../utils/ReleaseChannelUtils.native.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AppCrashedReasons2 from "../../../../discord_common/js/shared/shared-constants/AppCrashedReasons.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_15 = async function _maybeBackfillMissingBreadcrumbsFromTelemetryRing(arg0) {
  let breadcrumbs = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_129_0 = breadcrumbs;
            closure_129_1 = undefined;
            breadcrumbs = breadcrumbs.breadcrumbs;
            const _Array2 = Array;
            if (Array.isArray(breadcrumbs)) {
              if (breadcrumbs.length > 0) {
                c3 = 3;
              }
            }
            const SentryTelemetry = TelemetryRingLifecycle.SentryTelemetry;
            items = [SentryTelemetry.snapshotForBreadcrumbs()];
            const promise = new Promise((arg0, arg1) => {
              closure_0 = arg1;
              return setTimeout(() => {
                const error = new Error("TelemetryRing breadcrumb timeout");
                return closure_0(error);
              }, 200);
            });
            items[1] = promise;
            c2 = 1;
            c3 = 1;
            const obj1 = { value: Promise.race(items).catch(() => null), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          let isArray = null != closure_129_1;
          if (isArray) {
            const _Array = Array;
            isArray = Array.isArray(closure_129_1.entries);
          }
          if (isArray) {
            isArray = 0 !== closure_129_1.entries.length;
          }
          if (isArray) {
            const entries = closure_129_1.entries;
            closure_129_0.breadcrumbs = entries.map((data) => {
              let key = data.message;
              if (key == null) {
                key = data.key;
              }
              return { message: key, category: "telemetry_ring", timestamp: data.timestamp / 1000, data: data.data };
            });
          }
        }
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp21) {
        c3 = tmp;
        throw tmp21;
      }
    }
  })();
};
function filterError(event_id, originalException) {
  let message = event_id;
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
  if (!flag) {
    let originalException2;
    if (originalException != null) {
      originalException2 = originalException.originalException;
    }
    message = undefined;
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
      SentryUtilsDefault.markCrashHandled(event_id);
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
    return (async () => {
      closure_1 = tmp3;
      const ZoomedInTelemetry = tmp3(c3[6]).ZoomedInTelemetry;
      items = [ZoomedInTelemetry.flushNow()];
      items[1] = new Promise((arg0) => setTimeout(arg0, 200));
      await Promise.race(items);
      if (1 === tmp7) {
        c2 = 0;
        trackCrash(closure_129_0, closure_129_1);
        c4 = 3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          return { value, done: true };
        } else {
          c3 = 3;
          c4 = 1;
          return {
            value: (function maybeBackfillMissingBreadcrumbsFromTelemetryRing() {
              const self = this;
              const apply = closure_1_15.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_129_0),
            done: false,
          };
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c2 = 0;
      }
      return value;
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
        let obj1 = SentryUtilsDefault;
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
  const obj3 = router_utils;
  const track = AnalyticsUtilsDefault.track;
  if (tmp4) {
    extra = event.extra;
    if (extra == null) {
      extra = {};
    }
    obj = {
      did_crash: true,
      sentry_issue_id: tmp13,
      client_track_timestamp: result,
      exit_reason: null,
      exit_description: null,
      tombstone_hash: null,
      tombstone_cause: null,
      tombstone: null,
      call_stack_tree: null,
      binary_name: null,
      exception_message: null,
      exception_stacktrace: null,
      js_error_message: null,
      js_error_stacktrace: null,
    };
    const native_exit_reason = extra.native_exit_reason;
    let tmp27 = null;
    if (typeof native_exit_reason === "string") {
      tmp27 = null;
      if (native_exit_reason.length > 0) {
        tmp27 = native_exit_reason;
      }
    }
    obj.exit_reason = tmp27;
    const prop1 = extra.native_exit_description;
    let tmp28 = null;
    if (typeof prop1 === "string") {
      tmp28 = null;
      if (prop1.length > 0) {
        tmp28 = prop1;
      }
    }
    obj.exit_description = tmp28;
    const prop2 = extra.native_tombstone_hash;
    let tmp29 = null;
    if (typeof prop2 === "string") {
      tmp29 = null;
      if (prop2.length > 0) {
        tmp29 = prop2;
      }
    }
    obj.tombstone_hash = tmp29;
    const prop3 = extra.native_tombstone_cause;
    let tmp30 = null;
    if (typeof prop3 === "string") {
      tmp30 = null;
      if (prop3.length > 0) {
        tmp30 = prop3;
      }
    }
    obj.tombstone_cause = tmp30;
    const native_tombstone = extra.native_tombstone;
    let tmp31 = null;
    if (typeof native_tombstone === "string") {
      tmp31 = null;
      if (native_tombstone.length > 0) {
        tmp31 = native_tombstone;
      }
    }
    obj.tombstone = tmp31;
    const prop4 = extra.native_tombstone_group_by;
    let tmp32 = null;
    if (typeof prop4 === "string") {
      tmp32 = null;
      if (prop4.length > 0) {
        tmp32 = prop4;
      }
    }
    obj.call_stack_tree = tmp32;
    const prop5 = extra.native_tombstone_origin;
    let tmp33 = null;
    if (typeof prop5 === "string") {
      tmp33 = null;
      if (prop5.length > 0) {
        tmp33 = prop5;
      }
    }
    obj.binary_name = tmp33;
    obj.exception_message = getCrashErrorMessage(event);
    obj.exception_stacktrace = getErrorStackTrace(event);
    const prop6 = extra.persisted_error_message;
    let tmp36 = null;
    if (typeof prop6 === "string") {
      tmp36 = null;
      if (prop6.length > 0) {
        tmp36 = prop6;
      }
    }
    obj.js_error_message = tmp36;
    const prop7 = extra.persisted_error_stack;
    let tmp37 = null;
    if (typeof prop7 === "string") {
      tmp37 = null;
      if (prop7.length > 0) {
        tmp37 = prop7;
      }
    }
    obj.js_error_stacktrace = tmp37;
    track(timestampProducer.APP_NATIVE_CRASH, obj);
    let tmp25 = importDefault;
    let tmp26 = importDefault;
  } else {
    obj = {
      path: obj3.getHistory().location.pathname,
      client_track_timestamp: result,
      sentry_issue_id: tmp13,
      extra: hint,
      error_message: getCrashErrorMessage(event),
      error_level: level,
      error_stack: getErrorStackTrace(event),
    };
    track(timestampProducer.APP_CRASHED, obj);
    tmp25 = importDefault;
    tmp26 = importDefault;
  }
  const event_id2 = event.event_id;
  let tmp39 = typeof event_id2 === "string";
  if (typeof event_id2 === "string") {
    tmp39 = 0 !== event_id2.length;
  }
  if (tmp39) {
    tmp25(1232).markCrashHandled(event_id2);
    const tmp25Result = tmp25(1232);
  }
  const AppCrashedReasons = AppCrashedReasons2.AppCrashedReasons;
  const tmp41 = tmp4 ? AppCrashedReasons.UNHANDLED_NATIVE_ERROR : AppCrashedReasons.UNHANDLED_JS_ERROR;
  obj1 = { name: MetricEvents.MetricEvents.APP_CRASHED, tags: null };
  items = ["reason:" + tmp41];
  if (level == null) {
    level = "unknown";
  }
  items[1] = "level:" + level;
  obj1.tags = items;
  tmp26(7602).increment(obj1, true);
  const tmp26Result = tmp26(7602);
}
const NativeModules = fn(17).NativeModules;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Endpoints } = Constants);
const PRIMARY_DOMAIN = fn(1085).PRIMARY_DOMAIN;
let registerSpanErrorInstrumentation = fn(675);
registerSpanErrorInstrumentation = registerSpanErrorInstrumentation.reactNavigationIntegration();
const regExp = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS, "g");
let items = [regExp, ,];
const regExp1 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.METRICS_V2, "g");
items[1] = regExp1;
const regExp2 = new RegExp("/v" + window.GLOBAL_ENV.API_VERSION + Endpoints.TRACK, "g");
items[2] = regExp2;
const logger = new LoggerDefault("Sentry");
let closure_11 = [
  "The operation couldn\u2019t be completed. (com.apple.CallKit.error.requesttransaction",
  "Request has been terminated",
  "couldn't execute statement: database is disabled",
  "couldn't delete database: database is currently open",
  "database is no longer open",
];
let c12 = 0.05;
let c13 = 0.005;
let c14 = false;
const CommonSentryInitUtils = fn(1358);
let closure_20 = CommonSentryInitUtils.filterThrottle({ maxBudgetMinute: 1, maxBudgetHour: 15 });
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/errors/native/SentryInitUtils.tsx");

export const routingInstrumentation = registerSpanErrorInstrumentation;
export const initSentry = function initSentry() {
  const CrashReportingManager = NativeModules.CrashReportingManager;
  if (CrashReportingManager != null) {
    const isUserStaffForCrashReporting = CrashReportingManager.getIsUserStaffForCrashReporting((arg0) => {
      closure_14 = arg0;
      let obj = ClientInfoUtilsAll;
      constants = obj.getConstants();
      const ReleaseChannel = constants.ReleaseChannel;
      if (-1 === ReleaseChannel.indexOf("debug")) {
        if (-1 === ReleaseChannel.indexOf("developer")) {
          const isStable = ReleaseChannelUtils.isStable;
          obj = { releaseChannel: ReleaseChannel, isProductionChannel: isStable };
          logger.verbose("Initialize", obj);
          if (obj15.isAndroid()) {
            if (isStable) {
              let tmp14Result = DeviceUtils;
              const device = tmp14Result.getDevice();
            }
          }
          c12 = 0.05;
          const SentryDsn = constants.SentryDsn;
          if (isStable) {
            tmp14Result = MetaQuestUtils;
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
          obj15 = PlatformUtils;
          const lastCrashReport = SentryUtilsDefault.getLastCrashReport();
          lastCrashReport
            .then((result) => {
              if (null != result) {
                closure_1_19(result, { crash_event_source: "startup_reconcile" });
              }
            })
            .catch((error) => {
              logger.warn("Failed to replay pending crash report", error);
            });
          const nextPromise = lastCrashReport.then((result) => {
            if (null != result) {
              closure_1_19(result, { crash_event_source: "startup_reconcile" });
            }
          });
          const tmp14Result1 = _mod675;
          let str2 = "ios";
          if (tmp14Result2.isAndroid()) {
            str2 = "android";
          }
          obj = {
            tunnel: `/error-reporting-proxy/${str2}`,
            autoInitializeNativeSdk: false,
            beforeSend,
            dist: "6365",
            dsn: SentryStaffDsn,
            environment: ReleaseChannel,
            tracesSampleRate: 0,
            sampleRate: 1,
            ignoreErrors,
            release: "discord_android@345.5.0-2+345205",
            tracePropagationTargets: null,
            integrations: null,
            beforeBreadcrumb: null,
          };
          items = [PRIMARY_DOMAIN];
          obj.tracePropagationTargets = items;
          const items1 = [registerSpanErrorInstrumentation, ,];
          tmp14Result2 = PlatformUtils;
          items1[1] = _mod675.featureFlagsIntegration();
          const tmp14Result3 = _mod675;
          const obj1 = {
            shouldCreateSpanForRequest(url) {
              return !closure_1_9.some((item) => null != url.match(item));
            },
          };
          items1[2] = _mod675.reactNativeTracingIntegration(obj1);
          obj.integrations = items1;
          obj.beforeBreadcrumb = function beforeBreadcrumb(data) {
            if (null == data.data) {
              data.data = {};
            }
            const currentMemoryUsageKB = closure_1_1(dependencyMap[19]).getCurrentMemoryUsageKB();
            if (null != currentMemoryUsageKB) {
              data.data.client_performance_memory = currentMemoryUsageKB;
            }
            const obj = closure_1_1(dependencyMap[19]);
            const currentCPUUsagePercent = closure_1_1(dependencyMap[19]).getCurrentCPUUsagePercent();
            if (null != currentCPUUsagePercent) {
              data.data.client_performance_cpu = currentCPUUsagePercent;
            }
            return data;
          };
          tmp14Result1.init(obj);
          const tmp14Result4 = _mod675;
          _mod675.setTag("buildNumber", "6365");
          const tmp14Result5 = _mod675;
          _mod675.setTag("appVersion", constants.Version);
          const tmp14Result6 = _mod675;
          const _HermesInternal = HermesInternal;
          _mod675.setTag("design_id", "" + DesignIds.DesignIds.DESIGN_TABS_IA);
          const tmp14Result7 = _mod675;
        }
      }
    });
  }
};
