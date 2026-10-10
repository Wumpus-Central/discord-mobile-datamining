// discord_app/modules/install/native/DiskUsageManager.native.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import Storage3 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import NativeClientInfoModule from "../../../../discord_common/js/packages/rtn-codegen/js/NativeClientInfoModule.tsx";
import BackgroundTaskManagerDefault from "../../messages/BackgroundTaskManager.native.tsx";
import NativeDiskUsageModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeDiskUsageModule.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function isStable() {
  return "stable" === NativeClientInfoModule.default.getConstants().ReleaseChannel;
}
function measureAndReportInstallSize() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _measureAndReportInstallSize() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_2 = tmp4;
          closure_1 = tmp8;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          let size;
          let metricKitSize;
          let timeToMeasure;
          let report;
          c5 = 1;
          c6 = 1;
          const obj7 = { value: BackgroundTaskManagerDefault.startBackgroundTask(), done: false };
          return obj7;
        }
      } else {
        if (1 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_129_0 = value;
            if (obj15.isIOS()) {
              if (closure_129_0 === closure_130_1(closure_130_2[6]).backgroundTaskIdentifierInvalid) {
                closure_130_8.warn("Skipping install size measurement due to background task restrictions.");
                c6 = 3;
              }
            }
            c4 = 2;
            obj15 = closure_130_0(closure_130_2[7]);
            c5 = 4;
            c6 = 1;
            const obj10 = { value: closure_130_1(closure_130_2[8]).calculateSize(), done: false };
            return obj10;
          }
        } else if (2 !== tmp8) {
          if (3 === tmp8) {
            c4 = 1;
            closure_129_6 = closure_3;
            closure_130_8.error("Failed to measure install size:", closure_129_6);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_1(closure_130_2[6]).endBackgroundTask(closure_129_0);
            c6 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_129_1 = value;
            size = closure_129_1.size;
            metricKitSize = closure_129_1.metricKitSize;
            timeToMeasure = closure_129_1.timeToMeasure;
            report = closure_129_1.report;
            closure_130_8.info("calculateInstallSize:", size, metricKitSize, timeToMeasure, report);
            const obj13 = {};
            const obj12 = closure_130_1(closure_130_2[9]);
            const merged = Object.assign(closure_130_0(closure_130_2[10]).getDeviceMetadata());
            let caches_directory_bytes = metricKitSize;
            if (metricKitSize == null) {
              caches_directory_bytes = size;
            }
            obj13.caches_directory_bytes = caches_directory_bytes;
            obj13.measurement_time_ms = timeToMeasure;
            let tmp16;
            if (!closure_130_9()) {
              tmp16 = report;
            }
            obj13.report = tmp16;
            obj12.track(closure_130_5.APP_DISK_USAGE_UPDATED, obj13);
            c4 = 1;
            const obj14 = closure_130_0(closure_130_2[10]);
          }
          c4 = 0;
          closure_130_1(closure_130_2[6]).endBackgroundTask(closure_129_0);
          const obj3 = closure_130_1(closure_130_2[6]);
        }
        c4 = 0;
        closure_130_1(closure_130_2[6]).endBackgroundTask(closure_129_0);
        throw closure_3;
      }
    } catch (tmp59) {
      closure_3 = tmp59;
      if (tmp5 === c4) {
        c6 = tmp3;
        throw tmp59;
      } else if (tmp2 === tmp61) {
        c5 = tmp;
      } else {
        c5 = tmp3;
      }
    }
  }
};
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, AppStates: metroRequire, DebugLogCategory: closure_7 } = Constants);
let closure_8 = new LoggerDefault("DiskUsageManager");
class DiskUsageManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
        applyArgumentsResult.handleAppStateUpdate(arg0);
      },
    };
    return applyArgumentsResult;
  }
}
const prototype = DiskUsageManager.prototype;
prototype["clearCaches"] = function clearCaches() {
  NativeDiskUsageModuleDefault.clearCaches();
};
prototype["calculateSize"] = function calculateSize() {
  return NativeDiskUsageModuleDefault.calculateSize();
};
prototype["uploadStorageDiagnostics"] = function uploadStorageDiagnostics() {
  return (async () => {
    closure_0 = tmp2;
    await NativeDiskUsageModuleDefault.collectStorageDiagnostics();
    closure_128_0 = value;
    const merged = Object.assign(closure_129_1(closure_129_2[12])());
    closure_128_1 = { type: "client" };
    const _JSON = JSON;
    const _HermesInternal = HermesInternal;
    await closure_129_1(closure_129_2[13])({
      category: closure_129_7.IOS_APP,
      filename: "storage_inventory.jsonl",
      body: "" + JSON.stringify(closure_128_1) + "\n" + closure_128_0.contents,
    });
    closure_128_2 = value;
    const body = closure_128_2.body;
    if (body != null) {
      const id = body.id;
    }
    if (typeof id !== "string") {
      const _Error = Error;
      const error = new Error("Storage diagnostics upload returned no ID");
      throw error;
    }
    return closure_128_0.complete;
  })();
};
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  if (state.state === constants.BACKGROUND) {
    const currentUser = UserStore.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (isStaffResult) {
      let num = 1;
    } else {
      NativeClientInfoModule.default;
      num = 0.05;
    }
    let num2 = 86400000;
    if ("stable" === _default2.getConstants().ReleaseChannel) {
      num2 = 604800000;
    }
    const _Date = Date;
    const date = new Date();
    const Storage = Storage3.Storage;
    value = Storage.get("lastInstallSizeAnalyzerRunDateKey");
    if (null != value) {
      const _Date2 = Date;
      const date1 = new Date(value);
      const time = date.getTime();
      if (time - date1.getTime() < num2) {
        closure_8.verbose("Install size analysis was executed too recently, skipping execution.");
      }
    }
    const _Math = Math;
    if (Math.random() < num) {
      measureAndReportInstallSize();
    } else {
      closure_8.verbose("Did not fall into the sampling rate for install size measurement.");
    }
    const Storage2 = Storage3.Storage;
    const result = Storage2.set("lastInstallSizeAnalyzerRunDateKey", date.toISOString());
    _default2 = NativeClientInfoModule.default;
  }
};
const diskUsageManager = new DiskUsageManager();
let size = fn(2);
let result = size.fileFinishedImporting("modules/install/native/DiskUsageManager.native.tsx");

export default diskUsageManager;
