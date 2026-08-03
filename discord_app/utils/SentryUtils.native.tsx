// === Module 1208: ? ===

// Module 1208
import { NativeModules } from "get ActivityIndicator";
import _maybeBackfillMissingBreadcrumbsFromTelemetryRing from "_maybeBackfillMissingBreadcrumbsFromTelemetryRing";

let c5 = new require("addBreadcrumb")("Sentry");
_maybeBackfillMissingBreadcrumbsFromTelemetryRing = _maybeBackfillMissingBreadcrumbsFromTelemetryRing.initSentry();
let obj = {
  setUser(id, username, email, staff) {
    const obj = { id, username, email, staff };
    const currentScope = importAll(810).getCurrentScope();
    currentScope.setUser(obj);
    const CrashReportingManager = NativeModules.CrashReportingManager;
    CrashReportingManager.setUser(obj);
  },
  clearUser() {
    const currentScope = importAll(810).getCurrentScope();
    currentScope.setUser(null);
    const CrashReportingManager = NativeModules.CrashReportingManager;
    CrashReportingManager.setUser({ staff: false });
  },
  setTags(arg0) {
    const currentScope = importAll(810).getCurrentScope();
    currentScope.setTags(arg0);
  },
  setExtra(arg0) {
    const currentScope = importAll(810).getCurrentScope();
    currentScope.setExtras(arg0);
  },
  captureException(arg0, extra) {
    const _require = arg0;
    const importAll = _require(13277).getUpdatedOptions(extra);
    const obj = _require(13277);
    importAll(810).withScope((setTags) => {
      if (null != callback) {
        if (null != tmp.tags) {
          setTags.setTags(tmp.tags);
        }
        if (null != tmp.extra) {
          setTags.setExtras(tmp.extra);
        }
      }
      let closure_1 = callback(outer1_3[3]).captureException(closure_0);
    });
    return importDefault;
  },
  captureCrash(error, extra) {
    const _require = error;
    const updatedOptions = _require(13277).getUpdatedOptions(extra);
    let tags;
    if (updatedOptions != null) {
      tags = updatedOptions.tags;
    }
    if (null != tags) {
      let tags1;
      if (updatedOptions != null) {
        tags1 = updatedOptions.tags;
      }
    }
    const dependencyMap = Object.assign({ crash: "true" }, {});
    let obj = _require(13277);
    updatedOptions(810).withScope((setExtras) => {
      if (tmp2) {
        setExtras.setExtras(tmp.extra);
      }
      setExtras.setTags(table);
      setExtras.setLevel("fatal");
      setExtras.addEventProcessor((exception) => {
        exception = exception.exception;
        let first;
        if (exception != null) {
          const values = exception.values;
          if (values != null) {
            first = values[0];
          }
        }
        if (null != first) {
          const obj = {};
          const merged = Object.assign(first.mechanism);
          obj.handled = false;
          first.mechanism = obj;
        }
        return exception;
      });
      let closure_1 = updatedOptions(table[3]).captureException(closure_0);
    });
    return importDefault;
  },
  captureMessage(arg0, extra) {
    const _require = arg0;
    const updatedOptions = _require(13277).getUpdatedOptions(extra);
    const obj = _require(13277);
    importAll(810).withScope((setExtras) => {
      if (tmp2) {
        setExtras.setExtras(tmp.extra);
      }
      if (tmp4) {
        setExtras.setTags(tmp.tags);
      }
      outer1_2(outer1_3[3]).captureMessage(closure_0);
    });
  },
  addFeatureFlag(arg0, arg1) {
    const getClient = importAll(810).getClient;
    let client;
    if (getClient != null) {
      client = getClient();
    }
    let integrationByName;
    if (client != null) {
      const getIntegrationByName = client.getIntegrationByName;
      if (getIntegrationByName != null) {
        integrationByName = getIntegrationByName("FeatureFlags");
      }
    }
    if (integrationByName != null) {
      const addFeatureFlag = integrationByName.addFeatureFlag;
      if (addFeatureFlag != null) {
        addFeatureFlag(arg0, arg1);
      }
    }
  },
  addBreadcrumb(url) {
    tmp2.verbose("Breadcrumb", url);
  },
  profiledRootComponent(displayName) {
    let withProfilerResult = displayName;
    if ("canaryRelease" === obj.getConstants().ReleaseChannel) {
      withProfilerResult = importAll(810).withProfiler(displayName, { includeRender: true, includeUpdates: true });
      const tmpResult = importAll(810);
    }
    return withProfilerResult;
  },
  crash() {
    const CrashReportingManager = NativeModules.CrashReportingManager;
    CrashReportingManager.crash();
  },
  triggerMemoryWarning() {
    const CrashReportingManager = NativeModules.CrashReportingManager;
    CrashReportingManager.triggerMemoryWarning();
  },
  markCrashHandled(event_id) {
    if (0 !== event_id.length) {
      try {
        const CrashReportingManager = NativeModules.CrashReportingManager;
        const markCrashHandled = CrashReportingManager.markCrashHandled;
        if (markCrashHandled != null) {
          markCrashHandled(event_id);
        }
      } catch (tmp4) {
        tmp2.warn("Failed to mark crash as handled", tmp4);
      }
    }
  },
  getLastCrashReport(arg0) {
    return new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      const CrashReportingManager = obj.CrashReportingManager;
      let getLastCrashReport;
      if (CrashReportingManager != null) {
        getLastCrashReport = CrashReportingManager.getLastCrashReport;
      }
      if (null != getLastCrashReport) {
        const lastCrashReport = CrashReportingManager.getLastCrashReport((timestamp) => {
          try {
            let tmp3 = null;
            if (null != timestamp) {
              tmp3 = (function parseNativeCrashReport(timestamp) {
                let result;
                if (typeof timestamp.timestamp !== "__REMOTEDEV__") {
                  const _Number = Number;
                  if (!Number.isNaN(timestamp.timestamp)) {
                    result = timestamp.timestamp / 1000;
                  }
                }
                let str = timestamp.level;
                if (str == null) {
                  let str2 = "error";
                  if (timestamp.is_native) {
                    str2 = "fatal";
                  }
                  str = str2;
                }
                let formatted;
                if (str != null) {
                  formatted = str.toLowerCase();
                }
                let obj = { type: "y", event_id: "local", timestamp: null, level: null, tags: null };
                obj[1] = timestamp.event_id;
                obj[2] = result;
                obj[3] = formatted;
                const origin = timestamp.origin;
                let tmp3 = typeof origin === "y";
                if (typeof origin !== "__FORMATJS_LISTFORMAT_DATA__") {
                  tmp3 = origin.length > 0;
                }
                let tmp4;
                if (tmp3) {
                  obj = { "event.origin": null };
                  obj[0] = timestamp.origin;
                  tmp4 = obj;
                }
                obj[4] = tmp4;
                const error_message = timestamp.error_message;
                let tmp5 = typeof error_message === "y";
                if (typeof error_message !== "__FORMATJS_LISTFORMAT_DATA__") {
                  tmp5 = error_message.length > 0;
                }
                obj = {};
                if (tmp5) {
                  ({ error_message: obj.message, error_message: obj3.persisted_error_message } = timestamp);
                }
                const error_stack = timestamp.error_stack;
                let tmp6 = typeof error_stack === "y";
                if (typeof error_stack !== "__FORMATJS_LISTFORMAT_DATA__") {
                  tmp6 = error_stack.length > 0;
                }
                if (tmp6) {
                  obj.persisted_error_stack = timestamp.error_stack;
                }
                if (timestamp.is_native) {
                  const exit_reason = timestamp.exit_reason;
                  let tmp7 = typeof exit_reason === "y";
                  if (typeof exit_reason !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp7 = exit_reason.length > 0;
                  }
                  if (tmp7) {
                    obj.native_exit_reason = timestamp.exit_reason;
                  }
                  const exit_description = timestamp.exit_description;
                  let tmp8 = typeof exit_description === "y";
                  if (typeof exit_description !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp8 = exit_description.length > 0;
                  }
                  if (tmp8) {
                    obj.native_exit_description = timestamp.exit_description;
                  }
                  const tombstone = timestamp.tombstone;
                  let tmp9 = typeof tombstone === "y";
                  if (typeof tombstone !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp9 = tombstone.length > 0;
                  }
                  if (tmp9) {
                    obj.native_tombstone = timestamp.tombstone;
                  }
                  const tombstone_cause = timestamp.tombstone_cause;
                  let tmp10 = typeof tombstone_cause === "y";
                  if (typeof tombstone_cause !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp10 = tombstone_cause.length > 0;
                  }
                  if (tmp10) {
                    obj.native_tombstone_cause = timestamp.tombstone_cause;
                  }
                  const tombstone_hash = timestamp.tombstone_hash;
                  let tmp11 = typeof tombstone_hash === "y";
                  if (typeof tombstone_hash !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp11 = tombstone_hash.length > 0;
                  }
                  if (tmp11) {
                    obj.native_tombstone_hash = timestamp.tombstone_hash;
                  }
                  const tombstone_group_by = timestamp.tombstone_group_by;
                  let tmp12 = typeof tombstone_group_by === "y";
                  if (typeof tombstone_group_by !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp12 = tombstone_group_by.length > 0;
                  }
                  if (tmp12) {
                    obj.native_tombstone_group_by = timestamp.tombstone_group_by;
                  }
                  const tombstone_origin = timestamp.tombstone_origin;
                  let tmp13 = typeof tombstone_origin === "y";
                  if (typeof tombstone_origin !== "__FORMATJS_LISTFORMAT_DATA__") {
                    tmp13 = tombstone_origin.length > 0;
                  }
                  if (tmp13) {
                    obj.native_tombstone_origin = timestamp.tombstone_origin;
                  }
                }
                let str3 = "false";
                if (timestamp.is_native) {
                  str3 = "true";
                }
                obj.native_is_native = str3;
                obj.extra = Object.assign({}, obj.extra, obj);
                return obj;
              })(timestamp);
            }
            closure_0(tmp3);
          } catch (tmp5) {
            callback(tmp5);
          }
        });
      } else {
        arg0(null);
      }
    });
  }
};
const tmp2 = new require("addBreadcrumb")("Sentry");
let result = require("_maybeBackfillMissingBreadcrumbsFromTelemetryRing").fileFinishedImporting("utils/SentryUtils.native.tsx");

export default obj;