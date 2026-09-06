// discord_app/utils/SentryUtils.native.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import _mod17 from "../../_runtime/metro/00017__.js";
import addSentryBreadcrumbDefault from "../modules/sentry/addSentryBreadcrumb.native.tsx";
import _modAll675 from "../../_runtime/metro/00675__.js";
import SentryInitUtils from "../modules/errors/native/SentryInitUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
let closure_5 = new LoggerDefault("Sentry");
SentryInitUtils = SentryInitUtils.initSentry();
let result = size.fileFinishedImporting("utils/SentryUtils.native.tsx");

export default {
  setUser(id, username, email, staff) {
    const user = { id, username, email, staff };
    const currentScope = _modAll675.getCurrentScope();
    currentScope.setUser(user);
    const CrashReportingManager = NativeModules.CrashReportingManager;
    CrashReportingManager.setUser(user);
  },
  clearUser() {
    const currentScope = _modAll675.getCurrentScope();
    currentScope.setUser(null);
    const CrashReportingManager = NativeModules.CrashReportingManager;
    CrashReportingManager.setUser({ staff: false });
  },
  setTags(arg0) {
    const currentScope = _modAll675.getCurrentScope();
    currentScope.setTags(arg0);
  },
  setExtra(arg0) {
    const currentScope = _modAll675.getCurrentScope();
    currentScope.setExtras(arg0);
  },
  captureException(arg0, extra) {
    _require = arg0;
    importAll = require("ErrorCommonUtils").getUpdatedOptions(extra);
    const obj = require("ErrorCommonUtils");
    _modAll675.withScope((setTags) => {
      if (null != closure_2) {
        if (null != tmp.tags) {
          setTags.setTags(tmp.tags);
        }
        if (null != tmp.extra) {
          setTags.setExtras(tmp.extra);
        }
      }
      closure_1 = _modAll675.captureException(closure_0);
    });
    return closure_1;
  },
  captureCrash(error, extra) {
    _require = error;
    const updatedOptions = require("ErrorCommonUtils").getUpdatedOptions(extra);
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
    dependencyMap = Object.assign({ crash: "true" }, {});
    let obj = require("ErrorCommonUtils");
    updatedOptions(675).withScope((setExtras) => {
      if (tmp2) {
        setExtras.setExtras(tmp.extra);
      }
      setExtras.setTags(closure_3);
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
      closure_1 = _modAll675.captureException(closure_0);
    });
    return closure_1;
  },
  captureMessage(arg0, extra, arg2) {
    _require = arg0;
    closure_1 = arg2;
    importAll = require("ErrorCommonUtils").getUpdatedOptions(extra);
    const obj = require("ErrorCommonUtils");
    _modAll675.withScope((setExtras) => {
      if (tmp2) {
        setExtras.setExtras(tmp.extra);
      }
      if (tmp4) {
        setExtras.setTags(tmp.tags);
      }
      if (tmp6) {
        setExtras.setFingerprint(tmp.fingerprint);
        setExtras.addEventProcessor((arg0) => {
          arg0.exception = undefined;
          return arg0;
        });
      }
      _modAll675.captureMessage(closure_0, closure_1);
    });
  },
  addFeatureFlag(arg0, arg1) {
    const getClient = _modAll675.getClient;
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
    closure_5.verbose("Breadcrumb", url);
    addSentryBreadcrumbDefault(url);
  },
  profiledRootComponent(displayName) {
    let withProfilerResult = displayName;
    if ("canaryRelease" === obj.getConstants().ReleaseChannel) {
      withProfilerResult = _modAll675.withProfiler(displayName, { includeRender: true, includeUpdates: true });
      const tmpResult = _modAll675;
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
        closure_5.warn("Failed to mark crash as handled", tmp4);
      }
    }
  },
  getLastCrashReport() {
    return new Promise((fn, arg1) => {
      closure_0 = fn;
      closure_1 = arg1;
      const CrashReportingManager = NativeModules.CrashReportingManager;
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
                if (typeof timestamp.timestamp === "number") {
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
                let obj = {
                  type: "y",
                  event_id: timestamp.event_id,
                  timestamp: result,
                  level: formatted,
                  tags: "BULK_ACK",
                };
                const origin = timestamp.origin;
                let tmp3 = typeof origin === "string";
                if (typeof origin === "string") {
                  tmp3 = origin.length > 0;
                }
                let tmp4;
                if (tmp3) {
                  obj = { "event.origin": timestamp.origin };
                  tmp4 = obj;
                }
                obj.tags = tmp4;
                const error_message = timestamp.error_message;
                let tmp5 = typeof error_message === "string";
                if (typeof error_message === "string") {
                  tmp5 = error_message.length > 0;
                }
                obj = {};
                if (tmp5) {
                  ({ error_message: obj.message, error_message: obj3.persisted_error_message } = timestamp);
                }
                const error_stack = timestamp.error_stack;
                let tmp6 = typeof error_stack === "string";
                if (typeof error_stack === "string") {
                  tmp6 = error_stack.length > 0;
                }
                if (tmp6) {
                  obj.persisted_error_stack = timestamp.error_stack;
                }
                if (timestamp.is_native) {
                  const exit_reason = timestamp.exit_reason;
                  let tmp7 = typeof exit_reason === "string";
                  if (typeof exit_reason === "string") {
                    tmp7 = exit_reason.length > 0;
                  }
                  if (tmp7) {
                    obj.native_exit_reason = timestamp.exit_reason;
                  }
                  const exit_description = timestamp.exit_description;
                  let tmp8 = typeof exit_description === "string";
                  if (typeof exit_description === "string") {
                    tmp8 = exit_description.length > 0;
                  }
                  if (tmp8) {
                    obj.native_exit_description = timestamp.exit_description;
                  }
                  const tombstone = timestamp.tombstone;
                  let tmp9 = typeof tombstone === "string";
                  if (typeof tombstone === "string") {
                    tmp9 = tombstone.length > 0;
                  }
                  if (tmp9) {
                    obj.native_tombstone = timestamp.tombstone;
                  }
                  const tombstone_cause = timestamp.tombstone_cause;
                  let tmp10 = typeof tombstone_cause === "string";
                  if (typeof tombstone_cause === "string") {
                    tmp10 = tombstone_cause.length > 0;
                  }
                  if (tmp10) {
                    obj.native_tombstone_cause = timestamp.tombstone_cause;
                  }
                  const tombstone_hash = timestamp.tombstone_hash;
                  let tmp11 = typeof tombstone_hash === "string";
                  if (typeof tombstone_hash === "string") {
                    tmp11 = tombstone_hash.length > 0;
                  }
                  if (tmp11) {
                    obj.native_tombstone_hash = timestamp.tombstone_hash;
                  }
                  const tombstone_group_by = timestamp.tombstone_group_by;
                  let tmp12 = typeof tombstone_group_by === "string";
                  if (typeof tombstone_group_by === "string") {
                    tmp12 = tombstone_group_by.length > 0;
                  }
                  if (tmp12) {
                    obj.native_tombstone_group_by = timestamp.tombstone_group_by;
                  }
                  const tombstone_origin = timestamp.tombstone_origin;
                  let tmp13 = typeof tombstone_origin === "string";
                  if (typeof tombstone_origin === "string") {
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
            closure_1(tmp5);
          }
        });
      } else {
        fn(null);
      }
    });
  },
};
